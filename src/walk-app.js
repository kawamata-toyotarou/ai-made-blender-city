import * as THREE from '../vendor/three.module.js';
import { GLTFLoader } from '../vendor/loaders/GLTFLoader.js';
import { RGBELoader } from '../vendor/loaders/RGBELoader.js';
import { clone } from '../vendor/utils/SkeletonUtils.js';
import {createTraffic,stepTraffic,signalPhase,stepDoors,blockedAt,roomAt} from './simulation.mjs';
import {createGalaxy} from './galaxy-world.js';
import {createExpansion} from './expansion-world.js';
import {METRO_STOPS} from './expansion.mjs';
import {PLANET,CITY_STOP,PLANET_STOP,JOURNEY_SECONDS,createJourney,boardJourney,advanceJourney,leaveJourney,nearStation,journeyPhase,forwardFromFeet,headingForMotion} from './journey.mjs';

async function main(){
const $=id=>document.getElementById(id), assets=window.CITY_ASSETS, data=assets.meta;
const bytes=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance',logarithmicDepthBuffer:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.35));renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.localClippingEnabled=true;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;
document.body.prepend(renderer.domElement);
const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0xa8b4bb,.003);
const camera=new THREE.PerspectiveCamera(67,innerWidth/innerHeight,.12,24000);
camera.rotation.order='YXZ';camera.position.fromArray(data.spawn);
let yaw=-.13,pitch=.055,active=false,night=false;const keys=new Set();
const hemisphere=new THREE.HemisphereLight(0xc1d6ed,0x66635c,1.7);scene.add(hemisphere);
const sun=new THREE.DirectionalLight(0xffe2be,2.8);sun.position.set(-50,110,25);sun.castShadow=true;
sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:5,far:250});
sun.shadow.normalBias=.035;sun.shadow.bias=-.00012;scene.add(sun,sun.target);
const hdr=new RGBELoader().parse(bytes(assets.sky).buffer);
const env=new THREE.DataTexture(hdr.data,hdr.width,hdr.height,THREE.RGBAFormat,hdr.type);
env.mapping=THREE.EquirectangularReflectionMapping;env.needsUpdate=true;
const pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromEquirectangular(env).texture;scene.background=env;scene.backgroundIntensity=.75;scene.environmentIntensity=.7;
const texLoader=new THREE.TextureLoader();
function texture(name){const t=texLoader.load('data:image/jpeg;base64,'+assets[name]);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=8;return t;}
const materials=data.materials.map(m=>{
  const mat=new THREE.MeshStandardMaterial({color:new THREE.Color().fromArray(m.color),metalness:m.metal,roughness:m.rough,emissive:new THREE.Color().fromArray(m.emission),emissiveIntensity:m.strength*.65,side:m.name.includes('Leaves')?THREE.DoubleSide:THREE.FrontSide,transparent:(m.alpha||1)<1,opacity:m.alpha||1,depthWrite:(m.alpha||1)>=1});
  if(m.texture){mat.map=texture(m.texture);mat.map.colorSpace=THREE.SRGBColorSpace;mat.color.set(0xffffff);mat.normalMap=texture(m.texture+'_normal');mat.normalScale.set(.35,.35);if(m.texture==='concrete')mat.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\n diffuseColor.rgb = mix(vec3(0.32),diffuseColor.rgb,0.18);');};}
  return mat;
});
const binary=await new Response(new Blob([bytes(assets.city)]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer(),dv=new DataView(binary);let off=0;
const groups=dv.getUint32(off,true);off+=4;let triangles=0;const roofHeights=(data.interiors||[]).map(()=>0);
for(let k=0;k<groups;k++){
  const mi=dv.getUint32(off,true),n=dv.getUint32(off+4,true);off+=8;
  const values=new Float32Array(binary,off,n*8);off+=n*32;triangles+=n/3;
  for(let j=0;j<values.length;j+=8)for(const [i,r] of (data.interiors||[]).entries())if(Math.abs(values[j]-r.x)<r.w/2&&Math.abs(values[j+2]+r.y)<r.d/2)roofHeights[i]=Math.max(roofHeights[i],values[j+1]);
  const buf=new THREE.InterleavedBuffer(values,8),g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.InterleavedBufferAttribute(buf,3,0));g.setAttribute('normal',new THREE.InterleavedBufferAttribute(buf,3,3));g.setAttribute('uv',new THREE.InterleavedBufferAttribute(buf,2,6));
  g.computeBoundingSphere();const mesh=new THREE.Mesh(g,materials[mi]);mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh);
}
for(const l of data.lights){const p=new THREE.PointLight(0xffcd8b,35,20,2);p.position.set(l.x,l.z,-l.y);scene.add(p);}
for(const l of data.indoorLights||[]){const p=new THREE.PointLight(0xffddb3,l.power,l.range,2);p.position.set(l.x,l.z,-l.y);scene.add(p);}
const cars=createTraffic(),doors=(data.interiors||[]).map(r=>({...r,open:0}));
const galaxy=createGalaxy(scene),journey=createJourney();
const ridePosition=new THREE.Vector3(),rideRotation=new THREE.Quaternion();
const forwardAxes=[];
function boxMesh(size,pos,material,parent=scene){const ob=new THREE.Mesh(new THREE.BoxGeometry(...size),material);ob.position.set(...pos);ob.castShadow=true;ob.receiveShadow=true;parent.add(ob);return ob;}
const vehicleBinary=await new Response(new Blob([bytes(assets.vehicles)]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
const cv=new DataView(vehicleBinary);let co=4;const template=[];
for(let j=0;j<cv.getUint32(0,true);j++){
  const part=cv.getUint32(co,true),mi=cv.getUint32(co+4,true),count=cv.getUint32(co+8,true);co+=12;
  const v=new Float32Array(vehicleBinary,co,count*8);co+=count*32;const ib=new THREE.InterleavedBuffer(v,8),geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.InterleavedBufferAttribute(ib,3,0));geo.setAttribute('normal',new THREE.InterleavedBufferAttribute(ib,3,3));geo.setAttribute('uv',new THREE.InterleavedBufferAttribute(ib,2,6));geo.computeBoundingSphere();template.push({part,mi,geo});
}
for(const c of cars){
  c.ob=new THREE.Group();c.wheels=[];c.brakes=[];scene.add(c.ob);c.ob.rotation.y=c.dir<0?Math.PI:0;
  const pivots=[[0,0,0],[-1.02,.48,1.45],[-1.02,.48,-1.45],[1.02,.48,1.45],[1.02,.48,-1.45]];
  for(let k=1;k<=4;k++){const g=new THREE.Group();g.position.set(...pivots[k]);c.ob.add(g);c.wheels[k]=g;}
  for(const t of template){let material=materials[t.mi];if(data.materials[t.mi].name==='Pearlescent vehicle paint'){material=material.clone();material.color.multiplyScalar([.72,1.1,.85,1][c.id%4]);}if(data.materials[t.mi].name==='Signal red'){material=material.clone();c.brakes.push(material);}const mesh=new THREE.Mesh(t.geo,material);mesh.castShadow=true;mesh.receiveShadow=true;(t.part===0?c.ob:c.wheels[t.part]).add(mesh);}
}
const doorGlass=new THREE.MeshStandardMaterial({color:0x94c4c9,metalness:.1,roughness:.17,transparent:true,opacity:.25,depthWrite:false,side:THREE.DoubleSide});
const frameMat=new THREE.MeshStandardMaterial({color:0x87969a,metalness:.85,roughness:.25});
for(const d of doors){d.leaves=[];for(const sign of [-1,1]){const group=new THREE.Group();group.position.set(d.front,1.6,-d.doorY+sign*.86);scene.add(group);boxMesh([.045,2.85,1.64],[0,0,0],doorGlass,group);for(const z of [-.8,.8])boxMesh([.065,2.88,.045],[0,0,z],frameMat,group);for(const y of [-1.4,1.4])boxMesh([.065,.05,1.64],[0,y,0],frameMat,group);boxMesh([.11,.55,.035],[-d.side*.06,0,-sign*.58],frameMat,group);d.leaves.push({group,sign});}}
const bulbs=[];
for(const y of data.trafficSignals||[]){for(const x of [-11.6,11.6]){const z=-y+(x<0?9:-9);const stem=new THREE.Mesh(new THREE.CylinderGeometry(.055,.075,4.2,10),frameMat);stem.position.set(x,2.1,z);scene.add(stem);const housing=new THREE.MeshStandardMaterial({color:0x10181c,roughness:.7});boxMesh([.55,1.55,.3],[x,4,z],housing);for(const [index,color] of ['red','amber','green'].entries()){const m=new THREE.MeshStandardMaterial({color:0x111111,emissive:0x000000});const sphere=new THREE.Mesh(new THREE.SphereGeometry(.15,12,8),m);sphere.position.set(x,4.47-index*.46,z+(x<0?-.18:.18));scene.add(sphere);bulbs.push({m,color});}}}
const train=new THREE.Group();train.position.set(0,15.8,-58);scene.add(train);
const trainBody=new THREE.MeshStandardMaterial({color:0xa5b8bc,metalness:.65,roughness:.3}),trainGlass=new THREE.MeshStandardMaterial({color:0x152d38,metalness:.55,roughness:.15});
for(let i=-1;i<=1;i++){boxMesh([7.4,2.2,2.8],[i*8,0,0],trainBody,train);boxMesh([6.6,.85,.04],[i*8,.2,1.42],trainGlass,train);boxMesh([6.5,.055,.045],[i*8,-.65,1.45],new THREE.MeshStandardMaterial({color:0x45c5da,emissive:0x45c5da,emissiveIntensity:1.5}),train);}
const expansion=createExpansion(scene,doors,roofHeights,train);
let metroRiding=false,metroTime=0,metroIndex=1,upper=null,liftRide=null,roverDriving=false,liftChoice=null;
const discoveries=new Set();
try{for(const i of JSON.parse(localStorage.getItem('aurora-survey-v4')||'[]'))if(Number.isInteger(i)&&i>=0&&i<6)discoveries.add(i);}catch{}
for(const d of doors){const op=document.createElement('option');op.value=String(d.id);op.textContent=d.label;$('destination').append(op);}
$('visit').onclick=()=>{if(journey.mode!=='walking'||journey.world!=='city')return;metroRiding=false;upper=null;liftRide=null;const d=doors[Number($('destination').value)];if(!d)return;camera.position.set(d.front-d.side*2.8,1.89,-d.doorY);yaw=-d.side*Math.PI/2;pitch=0;};
const people=[],clock=new THREE.Clock(),avatarClip=new THREE.Plane(new THREE.Vector3(0,-1,0),1.4);let avatar=null,avatarMixer=null,walkClip=null;
function recolor(root,i){root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.frustumCulled=false;if(i%4){o.material=o.material.clone();o.material.color.multiply(new THREE.Color([.8,.9,1,.9][i%4],[.85,.88,.9,1][i%4],[.9,.8,.85,.92][i%4]));}}});}
const parseGLB=buffer=>new Promise((resolve,reject)=>new GLTFLoader().parse(buffer,'',resolve,reject));
Promise.all([parseGLB(bytes(assets.human).buffer),parseGLB(bytes(assets.civilian).buffer)]).then(([gltf,civilian])=>{
  const controls=[];civilian.scene.traverse(o=>{if(o.isMesh&&!o.isSkinnedMesh)controls.push(o);});for(const o of controls)o.removeFromParent();
  const original=gltf.scene;const unwanted=original.getObjectByName('Icosphere');if(unwanted)unwanted.removeFromParent();
  original.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(original),scale=1.74/(box.max.y-box.min.y);
  walkClip=gltf.animations.find(a=>/walk/i.test(a.name));
  const soldierForward=forwardFromFeet(original,THREE.Vector3),civilianForward=forwardFromFeet(civilian.scene,THREE.Vector3);
  forwardAxes.push(soldierForward,civilianForward);
  const crowd=[...data.crowd,...Array.from({length:24},(_,i)=>({x:[-225,-165,135,225][i%4],y:-90+i*13,dir:i%2?1:-1,speed:1.1,scale:1,min:-285,max:120}))];
  for(let i=0;i<crowd.length;i++){
    const cfg=crowd[i],civil=i%2===1,template=civil?civilian.scene:original;
    const cb=new THREE.Box3().setFromObject(template),cs=1.74/(cb.max.y-cb.min.y);
    const sourceForward=civil?civilianForward:soldierForward;
    const ob=clone(template);ob.scale.multiplyScalar(cs*cfg.scale);ob.position.set(cfg.x,.17-cb.min.y*cs*cfg.scale,-cfg.y);ob.rotation.y=headingForMotion(0,-cfg.dir,sourceForward.x,sourceForward.z);
    recolor(ob,i);scene.add(ob);const mix=new THREE.AnimationMixer(ob);const clip=civil?(civilian.animations.find(a=>/walk/i.test(a.name))||civilian.animations[0]):walkClip;
    if(clip){mix.clipAction(clip).play();mix.setTime(i*.143);}
    people.push({ob,mix,cfg,sourceForward});
  }
  avatar=clone(original);avatar.scale.multiplyScalar(scale);recolor(avatar,0);scene.add(avatar);
  avatar.traverse(o=>{if(o.isMesh){o.material=o.material.clone();o.material.clippingPlanes=[avatarClip];}});
  avatarMixer=new THREE.AnimationMixer(avatar);if(walkClip)avatarMixer.clipAction(walkClip).play();
  $('loading').textContent='準備完了。街の散策と、LUMENへの往復列車を楽しめます。';$('start').disabled=false;$('station').disabled=false;
  document.documentElement.dataset.people=people.length;document.documentElement.dataset.triangles=triangles;
}).catch(e=>{$('loading').textContent='人物の読み込みに失敗しました。再度開いてください。';console.error(e);});

function blocked(x,z){
  if(upper)return expansion.blocked(x,z,upper);
  if(journey.world==='city'&&expansion.blocked(x,z,null))return true;
  const local=galaxy.train.worldToLocal(new THREE.Vector3(x,0,z));
  if(galaxy.train.position.y<3&&Math.abs(local.x)<2.55&&local.z> -8.5&&local.z<32)return true;
  if(journey.world==='planet')return galaxy.blockedPlanet(x,z);
  if(galaxy.cityColliders.some(b=>Math.abs(x-b.x)<b.w/2+.3&&Math.abs(z-b.z)<b.d/2+.3))return true;
  return blockedAt(x,z,data.colliders,doors,cars);
}
function move(dx,dz){
  const count=Math.max(1,Math.ceil(Math.max(Math.abs(dx),Math.abs(dz))/.12));
  for(let i=0;i<count;i++){if(!blocked(camera.position.x+dx/count,camera.position.z))camera.position.x+=dx/count;if(!blocked(camera.position.x,camera.position.z+dz/count))camera.position.z+=dz/count;}
}
function start(){active=true;document.querySelector('details').open=false;$('pause').classList.add('hidden');renderer.domElement.requestPointerLock?.()?.catch?.(()=>{});}
function pause(){active=false;keys.clear();document.exitPointerLock?.();$('pause').classList.remove('hidden');$('start').classList.add('hidden');$('resume').classList.remove('hidden');}
function resetJourney(){metroRiding=false;upper=null;liftRide=null;roverDriving=false;$('liftpanel').classList.add('hidden');Object.assign(journey,createJourney());galaxy.setTrain(0);camera.position.fromArray(data.spawn);yaw=-.13;pitch=.055;keys.clear();}
function goToStation(){if(journey.mode!=='walking')return;metroRiding=false;upper=null;liftRide=null;roverDriving=false;const stop=journey.world==='city'?CITY_STOP:PLANET_STOP;camera.position.fromArray(stop.exit);yaw=Math.PI/2;pitch=0;start();}
function closestLift(){return journey.world==='city'&&!metroRiding&&!liftRide?expansion.lifts.findIndex((l,i)=>(!upper||upper.room===i)&&Math.hypot(camera.position.x-l.x,camera.position.z-l.z)<3):-1;}
function specialAction(){
 if(journey.mode!=='walking')return false;
 if(metroRiding){const p=expansion.metroPose(metroTime);if(p.dwell){metroRiding=false;metroIndex=p.index;camera.position.set(METRO_STOPS[p.index].x,16.52,-52);yaw=Math.PI;pitch=0;}return true;}
 if(roverDriving){roverDriving=false;camera.position.x+=3;return true;}
 if(journey.world==='city'&&!upper&&!liftRide){const si=METRO_STOPS.findIndex(s=>Math.hypot(camera.position.x-(s.x+13),camera.position.z+49)<3);if(si>=0){metroIndex=si;camera.position.set(METRO_STOPS[si].x+13,camera.position.y>10?1.72:16.52,-49);return true;}}
 if(journey.world==='planet'){
  const index=expansion.beacons.findIndex((b,i)=>!discoveries.has(i)&&Math.hypot(camera.position.x-b.x,camera.position.z-b.z)<4);
  if(index>=0){discoveries.add(index);try{localStorage.setItem('aurora-survey-v4',JSON.stringify([...discoveries]));}catch{}$('discovery').textContent=`${expansion.beacons[index].title}を記録！ ${discoveries.size}/6`;$('discovery').classList.remove('hidden');return true;}
  if(camera.position.distanceTo(expansion.rover.position)<6){roverDriving=true;return true;}
  if(Math.hypot(camera.position.x-expansion.orrery.position.x,camera.position.z-expansion.orrery.position.z)<8){$('discovery').textContent=discoveries.size===6?'探査完了！古代の星図が復元されました。惑星儀が共鳴しています。':'惑星儀：6つの探査ビーコンを調べ、古代の星図を復元しよう。';$('discovery').classList.remove('hidden');return true;}
 }
 const li=closestLift();if(li>=0){liftChoice=li;pause();$('liftpanel').classList.remove('hidden');return true;}
 if(journey.world==='city'&&!upper&&Math.abs(camera.position.z+52)<3&&Math.abs(camera.position.x-METRO_STOPS[metroIndex].x)<18&&camera.position.y>12){const p=expansion.metroPose(metroTime);if(p.dwell&&p.index===metroIndex){metroRiding=true;yaw=0;pitch=0;}return true;}
 return false;
}
function interact(){
 if(specialAction()){keys.clear();return;}
 if(!$('start').disabled&&journey.mode==='arrived'){
  leaveJourney(journey);const stop=journey.world==='city'?CITY_STOP:PLANET_STOP;camera.position.fromArray(stop.exit);yaw=-Math.PI/2;pitch=0;keys.clear();start();
 }else if(!$('start').disabled&&journey.mode==='walking'&&nearStation(journey,camera.position.x,camera.position.z)){
  if(boardJourney(journey)){yaw=journey.origin==='planet'?1.15:-1.15;pitch=.04;keys.clear();start();}
 }
}
$('station').onclick=goToStation;$('interact').onclick=interact;
$('skip').onclick=()=>{if(journey.mode==='riding'){advanceJourney(journey,JOURNEY_SECONDS);galaxy.setTrain(journey.progress,journey.origin==='planet');}};
for(const [i,s] of METRO_STOPS.entries()){const op=document.createElement('option');op.value=i;op.textContent=s.name;$('metro-destination').append(op);}
$('metro').onclick=()=>{if(journey.mode!=='walking')return;resetJourney();metroIndex=Number($('metro-destination').value);camera.position.set(METRO_STOPS[metroIndex].x,16.52,-52);metroTime=metroIndex*30;start();};
for(const [i,name] of ['1F ロビー','展望ラウンジ','屋上庭園'].entries()){$('floor'+i).onclick=()=>{if(liftChoice===null)return;const l=expansion.lifts[liftChoice],from=upper?l.levels[upper.level]:.17;liftRide={room:liftChoice,level:i,from,to:l.levels[i],time:0};upper={room:liftChoice,level:i};camera.position.x=l.x;camera.position.z=l.z;$('liftpanel').classList.add('hidden');start();};}
$('lift-close').onclick=()=>{$('liftpanel').classList.add('hidden');start();};
$('discovery').onclick=()=>$('discovery').classList.add('hidden');
$('start').onclick=start;
$('resume').onclick=start;
$('reset').onclick=resetJourney;
$('light').onclick=()=>{night=!night;$('light').textContent=night?'昼の街':'夜の街';};
document.addEventListener('pointerlockchange',()=>{if(document.pointerLockElement!==renderer.domElement&&active)pause();});
addEventListener('keydown',e=>{if(e.target.matches('select,input,textarea'))return;if(['KeyW','KeyS','KeyA','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();keys.add(e.code);if(e.code==='KeyR'&&!e.repeat)$('reset').click();if(e.code==='KeyF'&&!e.repeat)interact();if(e.code==='Escape')pause();});
addEventListener('keyup',e=>keys.delete(e.code));addEventListener('blur',()=>keys.clear());
let dragging=false;renderer.domElement.addEventListener('mousedown',()=>{dragging=true;});addEventListener('mouseup',()=>dragging=false);
addEventListener('mousemove',e=>{if(active&&(document.pointerLockElement||dragging)){yaw-=e.movementX*.0018;pitch-=e.movementY*.0018;pitch=Math.max(-1.35,Math.min(1.3,pitch));}});
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
let steps=0,elapsed=0;
renderer.setAnimationLoop(()=>{
  const realDt=Math.min(clock.getDelta(),.25),dt=realDt;elapsed+=dt;
  let forward=0,side=0,moving=false;
  if(active){
    yaw+=((keys.has('KeyQ')?1:0)-(keys.has('KeyE')?1:0))*dt*1.35;
    if(journey.mode==='walking'&&!metroRiding&&!liftRide){
    forward=(keys.has('KeyW')||keys.has('ArrowUp')?1:0)-(keys.has('KeyS')||keys.has('ArrowDown')?1:0);
    side=(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0);
    moving=!!(forward||side);const norm=Math.hypot(forward,side)||1,speed=roverDriving?9:keys.has('ShiftLeft')?3.8:1.45;
    move((side*Math.cos(yaw)-forward*Math.sin(yaw))*dt*speed/norm,(-forward*Math.cos(yaw)-side*Math.sin(yaw))*dt*speed/norm);
    if(moving)steps+=dt*speed*4.5;
    }
  }
  const riding=journey.mode!=='walking';
  if(active)advanceJourney(journey,realDt);
  galaxy.setTrain(journey.progress,journey.origin==='planet');
  const room=journey.world==='city'&&!riding?roomAt(doors,camera.position.x,camera.position.z):null;
  const sidewalk=Math.abs(camera.position.x)>12&&Math.abs(camera.position.x)<21;
  const atCityStation=journey.world==='city'&&Math.abs(camera.position.x+82)<4&&Math.abs(camera.position.z)<20;
  if(active||!metroRiding)metroTime+=realDt;const metroPose=expansion.metroPose(metroTime);train.position.x=metroPose.x;
  const onPlatform=!upper&&journey.world==='city'&&camera.position.y>10&&Math.abs(camera.position.z+52)<3.5&&METRO_STOPS.some(s=>Math.abs(camera.position.x-s.x)<16);
  let floor=upper?expansion.lifts[upper.room].levels[upper.level]:journey.world==='planet'?galaxy.floorHeight(camera.position.x,camera.position.z):onPlatform?14.8:atCityStation?.32:(room||sidewalk)?.17:0;
  if(liftRide){if(active)liftRide.time+=realDt;const l=expansion.lifts[liftRide.room];floor=expansion.liftHeight(liftRide.from,liftRide.to,liftRide.time);l.cabin.position.y=floor;if(liftRide.time>=5){if(liftRide.level===0)upper=null;liftRide=null;}}
  if(riding){
    ridePosition.set(1.1,2.3,13.3);galaxy.train.localToWorld(ridePosition);camera.position.copy(ridePosition);
    rideRotation.setFromEuler(new THREE.Euler(pitch,yaw,0,'YXZ'));camera.quaternion.copy(galaxy.train.quaternion).multiply(rideRotation);
  }else if(metroRiding){camera.position.set(metroPose.x,16.6,-58);camera.rotation.set(pitch,yaw,0,'YXZ');}
  else{camera.position.y=1.72+floor+(roverDriving?.9:0)+(moving?Math.sin(steps)*.018:0);camera.rotation.set(pitch,yaw,0,'YXZ');}
  if(roverDriving){expansion.rover.position.set(camera.position.x,floor,camera.position.z);expansion.rover.rotation.y=yaw;}
  expansion.orrery.rotation.y+=dt*(discoveries.size===6?1:.2);for(const [i,b] of expansion.beacons.entries()){b.jewel.rotation.y+=dt;b.jewel.material.color.set(discoveries.has(i)?0xc5a45c:0x83e7d3);}
  for(const p of people){p.ob.visible=journey.world==='city'&&!riding&&Math.hypot(p.ob.position.x-camera.position.x,p.ob.position.z-camera.position.z)<125;if(p.ob.visible)p.mix.update(dt);p.ob.position.z-=dt*p.cfg.speed*p.cfg.dir;const min=p.cfg.min??-117,max=p.cfg.max??49;if(p.ob.position.z<min)p.ob.position.z=max;if(p.ob.position.z>max)p.ob.position.z=min;}
  stepTraffic(cars,dt,elapsed,data.trafficSignals||[],camera.position);
  for(const c of cars){c.ob.position.set(c.x,0,c.z);for(const wheel of c.wheels)if(wheel)wheel.rotation.x=-c.wheel;for(const m of c.brakes)m.emissiveIntensity=c.speed<.5?2.5:.6;}
  stepDoors(doors,camera.position,dt);for(const d of doors)for(const l of d.leaves)l.group.position.z=-d.doorY+l.sign*(.86+d.open*1.65);
  const phase=signalPhase(elapsed);for(const b of bulbs){b.m.color.set(b.color===phase?({red:0xe33425,amber:0xffba35,green:0x36e4a2}[b.color]):0x101819);b.m.emissive.copy(b.m.color);b.m.emissiveIntensity=b.color===phase?2.2:0;}
  if(avatar){avatarClip.constant=camera.position.y-.35;avatar.position.set(camera.position.x,floor,camera.position.z);const f=forwardAxes[0];avatar.rotation.y=headingForMotion(-Math.sin(yaw),-Math.cos(yaw),f.x,f.z);if(avatarMixer)avatarMixer.update(moving?dt:0);avatar.visible=active&&!riding&&!metroRiding&&!liftRide&&!roverDriving;}
  const space=journey.world==='planet'&&!riding?1:riding?Math.max(0,Math.min(1,Math.max((camera.position.y-45)/220,(journey.progress-.75)/.12))):0;
  scene.background=space>.5?new THREE.Color(0x020611):env;
  scene.fog.density=.0015*(1-space)+.000008*space;scene.fog.color.set(night?0x14212c:0xa8b4bb).lerp(new THREE.Color(0x030817),space);
  scene.backgroundIntensity=night?.07:.75;scene.environmentIntensity=(night?.2:.7)*(1-space)+.5*space;
  sun.intensity=(night?.1:2.8)*(1-space)+3.1*space;hemisphere.intensity=(night?.42:1.7)*(1-space)+.9*space;
  galaxy.stars.material.opacity=space;
  sun.target.position.set(camera.position.x,camera.position.y-20,camera.position.z-20);sun.position.set(camera.position.x-45,camera.position.y+105,camera.position.z+35);
  $('position').textContent=`${camera.position.x.toFixed(0)} / ${(-camera.position.z).toFixed(0)} m`;
  document.documentElement.dataset.playing=String(active);
  document.documentElement.dataset.input=Array.from(keys).join(',');
  document.documentElement.dataset.traffic=JSON.stringify(cars.map(c=>({x:c.x,z:+c.z.toFixed(3),speed:+c.speed.toFixed(2)})));
  document.documentElement.dataset.room=room?.label||'';
  document.documentElement.dataset.door=JSON.stringify(doors.map(d=>+d.open.toFixed(2)));
  const near=journey.mode==='walking'&&nearStation(journey,camera.position.x,camera.position.z);
  $('interact').classList.toggle('hidden',!near&&journey.mode!=='arrived');
  $('interact').textContent=journey.mode==='arrived'?'F  降りて探索する':journey.world==='city'?'F  LUMEN行きに乗車':'F  AURORA行きに乗車';
  $('station').disabled=riding||$('start').disabled;$('station').textContent=journey.world==='planet'?'帰りの駅へ':'銀河鉄道の駅へ';
  $('visit').disabled=riding||journey.world!=='city';
  $('journey').classList.toggle('hidden',!riding);
  $('route-from').textContent=journey.origin==='city'?'AURORA':'LUMEN';$('route-to').textContent=journey.destination==='city'?'AURORA':'LUMEN';
  $('phase').textContent=journeyPhase(journey);$('progress').value=journey.time/JOURNEY_SECONDS;
  $('remaining').textContent=journey.mode==='arrived'?'降車できます':`あと ${Math.ceil(JOURNEY_SECONDS-journey.time)} 秒${active?'':' / 休憩中'}`;
  $('skip').classList.toggle('hidden',journey.mode!=='riding');
  $('place').textContent=riding?'GALAXY RAILWAY / 車窓を見回せます':journey.world==='planet'?'LUMEN / 結晶盆地・観測基地':room?`${room.label} / 館内`:`AURORA / 入れる建物 ${doors.length}棟`;
  $('region').textContent=riding?'GALAXY RAILWAY':journey.world==='planet'?'LUMEN / CRYSTAL BASIN':'AURORA / STREET LIFE';
  let action='';
  if(!riding){
   if(metroRiding){action=metroPose.dwell?'F 市内電車を降りる':'';$('place').textContent=`市内電車 / 次は ${METRO_STOPS[metroPose.next].name}${metroPose.dwell?'（停車中）':''}`;}
   else if(liftRide){$('place').textContent=`エレベーター移動中 / ${Math.round(floor)} m`;}
   else if(closestLift()>=0)action='F エレベーター・階を選ぶ';
   else if(onPlatform){action=metroPose.dwell&&metroPose.index===metroIndex?'F 市内電車に乗車':'';$('place').textContent=`${METRO_STOPS[metroIndex].name}駅 / ${metroPose.dwell&&metroPose.index===metroIndex?'電車が停車中':'次の電車をお待ちください'}`;}
   if(!metroRiding&&!upper&&journey.world==='city'&&METRO_STOPS.some(s=>Math.hypot(camera.position.x-(s.x+13),camera.position.z+49)<3))action=camera.position.y>10?'F 駅の地上へ降りる':'F 駅のホームへ上がる';
   if(journey.world==='planet'){
    if(roverDriving)action='F ローバーから降りる';
    else if(expansion.beacons.some((b,i)=>!discoveries.has(i)&&Math.hypot(camera.position.x-b.x,camera.position.z-b.z)<4))action='F 探査データを記録';
    else if(camera.position.distanceTo(expansion.rover.position)<6)action='F ローバーを運転';
    else if(Math.hypot(camera.position.x-expansion.orrery.position.x,camera.position.z-expansion.orrery.position.z)<8)action='F 惑星儀を調べる';
    const todo=expansion.beacons.filter((_,i)=>!discoveries.has(i)).sort((a,b)=>Math.hypot(a.x-camera.position.x,a.z-camera.position.z)-Math.hypot(b.x-camera.position.x,b.z-camera.position.z));
    $('mission').textContent=`惑星探査 ${discoveries.size}/6${todo[0]?` · 次の標本まで ${Math.round(Math.hypot(todo[0].x-camera.position.x,todo[0].z-camera.position.z))}m`:' · 星図復元！惑星儀へ'}${roverDriving?' · ローバー運転中':''}`;
   }
   if(upper)$('place').textContent=`${expansion.lifts[upper.room].room.label} / ${upper.level===1?'展望ラウンジ':'屋上庭園'}`;
  }
  $('mission').classList.toggle('hidden',journey.world!=='planet'||riding);
  if(action){$('interact').textContent=action;$('interact').classList.remove('hidden');}else if(metroRiding||liftRide||onPlatform)$('interact').classList.add('hidden');
  document.documentElement.dataset.expansion=JSON.stringify({metroRiding,metroTime,upper,liftRide:!!liftRide,roverDriving,discoveries:[...discoveries],buildings:expansion.buildings.length});
  document.documentElement.dataset.journey=JSON.stringify({...journey,position:camera.position.toArray().map(v=>+v.toFixed(2))});
  document.documentElement.dataset.facing=JSON.stringify(people.map(p=>{const f=p.sourceForward,a=p.ob.rotation.y;return +(Math.sin(a)*f.z+Math.cos(a)*f.x).toFixed(3)+','+(-Math.sin(a)*f.x+Math.cos(a)*f.z).toFixed(3);}));
  renderer.render(scene,camera);
});
// Deterministic checks exercise the same collision and movement functions as play.
const initial=camera.position.clone();const b=data.colliders[0];
const report={wallCollision:blocked(b.x,-b.y),streetOpen:!blocked(0,0),pedestrianCount:data.crowd.length,triangles};
camera.position.set(0,1.72,0);move(0,-1);report.movement=camera.position.z===-1;camera.position.copy(initial);
document.documentElement.dataset.checks=JSON.stringify(report);
}
main().catch(e=>{document.getElementById('loading').textContent='街を読み込めませんでした。最新版のEdgeまたはChromeで開いてください。';console.error(e);});
