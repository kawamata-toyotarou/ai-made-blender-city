import * as THREE from '../vendor/three.module.js';
import { GLTFLoader } from '../vendor/loaders/GLTFLoader.js';
import { RGBELoader } from '../vendor/loaders/RGBELoader.js';
import { clone } from '../vendor/utils/SkeletonUtils.js';
import {createTraffic,stepTraffic,signalPhase,stepDoors,blockedAt,roomAt} from './simulation.mjs';

async function main(){
const $=id=>document.getElementById(id), assets=window.CITY_ASSETS, data=assets.meta;
const bytes=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance',logarithmicDepthBuffer:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.35));renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;
document.body.prepend(renderer.domElement);
const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0xa8b4bb,.003);
const camera=new THREE.PerspectiveCamera(67,innerWidth/innerHeight,.18,1300);
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
const groups=dv.getUint32(off,true);off+=4;let triangles=0;
for(let k=0;k<groups;k++){
  const mi=dv.getUint32(off,true),n=dv.getUint32(off+4,true);off+=8;
  const values=new Float32Array(binary,off,n*8);off+=n*32;triangles+=n/3;
  const buf=new THREE.InterleavedBuffer(values,8),g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.InterleavedBufferAttribute(buf,3,0));g.setAttribute('normal',new THREE.InterleavedBufferAttribute(buf,3,3));g.setAttribute('uv',new THREE.InterleavedBufferAttribute(buf,2,6));
  g.computeBoundingSphere();const mesh=new THREE.Mesh(g,materials[mi]);mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh);
}
for(const l of data.lights){const p=new THREE.PointLight(0xffcd8b,35,20,2);p.position.set(l.x,l.z,-l.y);scene.add(p);}
for(const l of data.indoorLights||[]){const p=new THREE.PointLight(0xffddb3,l.power,l.range,2);p.position.set(l.x,l.z,-l.y);scene.add(p);}
const cars=createTraffic(),doors=(data.interiors||[]).map(r=>({...r,open:0}));
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
for(const d of doors){const op=document.createElement('option');op.value=String(d.id);op.textContent=d.label;$('destination').append(op);}
$('visit').onclick=()=>{const d=doors[Number($('destination').value)];if(!d)return;camera.position.set(d.front-d.side*2.8,1.89,-d.doorY);yaw=-d.side*Math.PI/2;pitch=0;};
const people=[],clock=new THREE.Clock();let avatar=null,avatarMixer=null,walkClip=null;
function recolor(root,i){root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.frustumCulled=false;if(i%4){o.material=o.material.clone();o.material.color.multiply(new THREE.Color([.8,.9,1,.9][i%4],[.85,.88,.9,1][i%4],[.9,.8,.85,.92][i%4]));}}});}
const parseGLB=buffer=>new Promise((resolve,reject)=>new GLTFLoader().parse(buffer,'',resolve,reject));
Promise.all([parseGLB(bytes(assets.human).buffer),parseGLB(bytes(assets.civilian).buffer)]).then(([gltf,civilian])=>{
  const controls=[];civilian.scene.traverse(o=>{if(o.isMesh&&!o.isSkinnedMesh)controls.push(o);});for(const o of controls)o.removeFromParent();
  const original=gltf.scene;const unwanted=original.getObjectByName('Icosphere');if(unwanted)unwanted.removeFromParent();
  original.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(original),scale=1.74/(box.max.y-box.min.y);
  walkClip=gltf.animations.find(a=>/walk/i.test(a.name));
  for(let i=0;i<data.crowd.length;i++){
    const cfg=data.crowd[i],civil=i%2===1,template=civil?civilian.scene:original;
    const cb=new THREE.Box3().setFromObject(template),cs=1.74/(cb.max.y-cb.min.y);
    const ob=clone(template);ob.scale.multiplyScalar(cs*cfg.scale);ob.position.set(cfg.x,.17-cb.min.y*cs*cfg.scale,-cfg.y);ob.rotation.y=cfg.dir>0?Math.PI:0;
    recolor(ob,i);scene.add(ob);const mix=new THREE.AnimationMixer(ob);const clip=civil?(civilian.animations.find(a=>/walk/i.test(a.name))||civilian.animations[0]):walkClip;
    if(clip){mix.clipAction(clip).play();mix.setTime(i*.143);}
    people.push({ob,mix,cfg});
  }
  avatar=clone(original);avatar.scale.multiplyScalar(scale);recolor(avatar,0);scene.add(avatar);
  avatar.traverse(o=>{if(o.isBone&&/Head$/.test(o.name))o.scale.setScalar(.001);});
  avatarMixer=new THREE.AnimationMixer(avatar);if(walkClip)avatarMixer.clipAction(walkClip).play();
  $('loading').textContent='準備ができました。人の目線で街を探索できます。';$('start').disabled=false;
  document.documentElement.dataset.people=people.length;document.documentElement.dataset.triangles=triangles;
}).catch(e=>{$('loading').textContent='人物の読み込みに失敗しました。再度開いてください。';console.error(e);});

function blocked(x,z){
  return blockedAt(x,z,data.colliders,doors,cars);
}
function move(dx,dz){
  if(!blocked(camera.position.x+dx,camera.position.z))camera.position.x+=dx;
  if(!blocked(camera.position.x,camera.position.z+dz))camera.position.z+=dz;
}
function start(){active=true;$('pause').classList.add('hidden');renderer.domElement.requestPointerLock?.()?.catch?.(()=>{});}
$('start').onclick=start;
$('resume').onclick=start;
$('reset').onclick=()=>{camera.position.fromArray(data.spawn);yaw=-.13;pitch=.055;};
$('light').onclick=()=>{night=!night;sun.intensity=night?.10:2.8;hemisphere.intensity=night?.42:1.7;scene.backgroundIntensity=night?.07:.75;scene.environmentIntensity=night?.2:.7;scene.fog.color.set(night?0x14212c:0xa8b4bb);$('light').textContent=night?'昼の街':'夜の街';};
document.addEventListener('pointerlockchange',()=>{if(document.pointerLockElement!==renderer.domElement&&active){active=false;$('pause').classList.remove('hidden');$('start').classList.add('hidden');$('resume').classList.remove('hidden');}});
addEventListener('keydown',e=>{if(['KeyW','KeyS','KeyA','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();keys.add(e.code);if(e.code==='KeyR')$('reset').click();if(e.code==='Escape'){active=false;$('pause').classList.remove('hidden');$('start').classList.add('hidden');$('resume').classList.remove('hidden');} });
addEventListener('keyup',e=>keys.delete(e.code));addEventListener('blur',()=>keys.clear());
let dragging=false;renderer.domElement.addEventListener('mousedown',()=>{dragging=true;});addEventListener('mouseup',()=>dragging=false);
addEventListener('mousemove',e=>{if(active&&(document.pointerLockElement||dragging)){yaw-=e.movementX*.0018;pitch-=e.movementY*.0018;pitch=Math.max(-1.35,Math.min(1.3,pitch));}});
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
let steps=0,elapsed=0;
renderer.setAnimationLoop(()=>{
  const dt=Math.min(clock.getDelta(),.05);elapsed+=dt;
  let forward=0,side=0,moving=false;
  if(active){
    yaw+=((keys.has('KeyQ')?1:0)-(keys.has('KeyE')?1:0))*dt*1.35;
    forward=(keys.has('KeyW')||keys.has('ArrowUp')?1:0)-(keys.has('KeyS')||keys.has('ArrowDown')?1:0);
    side=(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0);
    moving=!!(forward||side);const norm=Math.hypot(forward,side)||1,speed=keys.has('ShiftLeft')?3.8:1.45;
    move((side*Math.cos(yaw)-forward*Math.sin(yaw))*dt*speed/norm,(-forward*Math.cos(yaw)-side*Math.sin(yaw))*dt*speed/norm);
    if(moving)steps+=dt*speed*4.5;
  }
  const room=roomAt(doors,camera.position.x,camera.position.z);
  const sidewalk=Math.abs(camera.position.x)>12&&Math.abs(camera.position.x)<21;
  const floor=(room||sidewalk)? .17:0;
  camera.position.y=1.72+floor+(moving?Math.sin(steps)*.018:0);camera.rotation.set(pitch,yaw,0,'YXZ');
  for(const p of people){p.mix.update(dt);p.ob.position.z-=dt*p.cfg.speed*p.cfg.dir;if(p.ob.position.z< -117)p.ob.position.z=49;if(p.ob.position.z>49)p.ob.position.z=-117;}
  stepTraffic(cars,dt,elapsed,data.trafficSignals||[],camera.position);
  for(const c of cars){c.ob.position.set(c.x,0,c.z);for(const wheel of c.wheels)if(wheel)wheel.rotation.x=-c.wheel;for(const m of c.brakes)m.emissiveIntensity=c.speed<.5?2.5:.6;}
  stepDoors(doors,camera.position,dt);for(const d of doors)for(const l of d.leaves)l.group.position.z=-d.doorY+l.sign*(.86+d.open*1.65);
  const phase=signalPhase(elapsed);for(const b of bulbs){b.m.color.set(b.color===phase?({red:0xe33425,amber:0xffba35,green:0x36e4a2}[b.color]):0x101819);b.m.emissive.copy(b.m.color);b.m.emissiveIntensity=b.color===phase?2.2:0;}
  train.position.x=(elapsed*6+70)%174-87;
  if(avatar){avatar.position.set(camera.position.x,floor,camera.position.z);avatar.rotation.y=yaw+Math.PI;if(avatarMixer)avatarMixer.update(moving?dt:0);avatar.visible=active;}
  sun.target.position.set(camera.position.x,0,camera.position.z-20);sun.position.set(camera.position.x-45,105,camera.position.z+35);
  $('position').textContent=`${camera.position.x.toFixed(0)} / ${(-camera.position.z).toFixed(0)} m`;
  document.documentElement.dataset.playing=String(active);
  document.documentElement.dataset.input=Array.from(keys).join(',');
  document.documentElement.dataset.traffic=JSON.stringify(cars.map(c=>({x:c.x,z:+c.z.toFixed(3),speed:+c.speed.toFixed(2)})));
  document.documentElement.dataset.room=room?.label||'';
  document.documentElement.dataset.door=JSON.stringify(doors.map(d=>+d.open.toFixed(2)));
  $('place').textContent=room?`${room.label} / 館内`:`歩道・大通り / 入れる建物 ${doors.length}棟`;
  renderer.render(scene,camera);
});
// Deterministic checks exercise the same collision and movement functions as play.
const initial=camera.position.clone();const b=data.colliders[0];
const report={wallCollision:blocked(b.x,-b.y),streetOpen:!blocked(0,0),pedestrianCount:data.crowd.length,triangles};
camera.position.set(0,1.72,0);move(0,-1);report.movement=camera.position.z===-1;camera.position.copy(initial);
document.documentElement.dataset.checks=JSON.stringify(report);
}
main().catch(e=>{document.getElementById('loading').textContent='街を読み込めませんでした。最新版のEdgeまたはChromeで開いてください。';console.error(e);});
