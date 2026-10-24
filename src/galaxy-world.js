import * as T from '../vendor/three.module.js';
import {PLANET,CITY_STOP,PLANET_STOP,RAIL_POINTS,terrainHeight,withinPlanet} from './journey.mjs';

export function createGalaxy(scene){
 const group=new T.Group();group.name='Galaxy Railway / Lumen';scene.add(group);
 const metal=new T.MeshStandardMaterial({color:0x182b39,metalness:.75,roughness:.28});
 const pale=new T.MeshStandardMaterial({color:0xa7bec1,metalness:.5,roughness:.38});
 const stone=new T.MeshStandardMaterial({color:0x37414b,roughness:.95});
 const gold=new T.MeshStandardMaterial({color:0xc4a470,metalness:.75,roughness:.3});
 const teal=new T.MeshStandardMaterial({color:0x3cbebc,emissive:0x087d85,emissiveIntensity:.85,roughness:.3});
 const lamp=new T.MeshStandardMaterial({color:0xffe6ac,emissive:0xffd184,emissiveIntensity:2});
 const glass=new T.MeshStandardMaterial({color:0x7ed3df,metalness:.05,roughness:.13,transparent:true,opacity:.12,depthWrite:false,side:T.DoubleSide});
 const planetColliders=[],cityColliders=[];
 function mesh(geo,mat,pos,parent=group){const ob=new T.Mesh(geo,mat);ob.position.set(...pos);ob.castShadow=true;ob.receiveShadow=true;parent.add(ob);return ob;}
 const box=(size,pos,mat,parent)=>mesh(new T.BoxGeometry(...size),mat,pos,parent);
 function label(text,pos,width,parent=group,color='#b6fff2'){
  const c=document.createElement('canvas');c.width=1024;c.height=192;const ctx=c.getContext('2d');ctx.fillStyle='#0a1625';ctx.fillRect(0,0,1024,192);ctx.strokeStyle='#5a9ca6';ctx.lineWidth=5;ctx.strokeRect(6,6,1012,180);ctx.fillStyle=color;ctx.font='600 64px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,512,98,970);
  const tx=new T.CanvasTexture(c);tx.colorSpace=T.SRGBColorSpace;
  const material=new T.MeshBasicMaterial({map:tx,side:T.FrontSide});
  const front=mesh(new T.PlaneGeometry(width,width*192/1024),material,pos,parent),back=new T.Mesh(front.geometry,material);back.rotation.y=Math.PI;front.add(back);return front;
 }
 function station(stop,name){
  const g=new T.Group();g.position.set(stop.x,0,stop.z);group.add(g);
  const obstacles=stop===CITY_STOP?cityColliders:planetColliders;
  const obstacle=(x,z,w,d)=>obstacles.push({x:stop.x+x,z:stop.z+z,w,d});
  box([7,.32,39],[9,.16,0],stone,g);box([.15,.025,38],[5.6,.335,0],teal,g);
  box([9,.24,42],[9,5.6,0],metal,g);box([8,.07,39],[9,5.44,0],pale,g);
  for(const z of [-17,-8,1,10,18]){box([.2,5.4,.25],[12.6,2.7,z],pale,g);box([6,.035,.13],[9,5.35,z],lamp,g);obstacle(12.6,z,.2,.25);}
  for(const z of [-9,10]){box([1,.4,3],[11,.72,z],metal,g);box([.16,1.1,3],[11.4,1.22,z],gold,g);obstacle(11,z,1,3);}
  box([.8,2,.7],[11,1.3,16],metal,g);obstacle(11,16,.8,.7);label('AURORA  ⇄  LUMEN',[8.8,4.55,18.7],7,g);
  label(name,[8.8,3.5,18.7],7,g);label('GALAXY RAILWAY  /  01',[8.8,4.5,-18.8],7,g);
  const p=new T.PointLight(0x8ee8ed,100,24,2);p.position.set(9,4,0);g.add(p);
  return g;
 }
 station(CITY_STOP,'AURORA CENTRAL');station(PLANET_STOP,'LUMEN OBSERVATORY');
 // A lit approach across the western sidewalk. No building is displaced.
 box([18,.035,5],[-81,.025,20],stone);for(let x=-96;x< -73;x+=3)box([.12,.04,4.8],[x,.05,20],teal);
 label('GALAXY RAILWAY  ←',[-76,2.5,20],5).rotation.y=Math.PI/2;
 const curve=new T.CatmullRomCurve3(RAIL_POINTS.map(v=>new T.Vector3(...v)),false,'centripetal');
 const tracks=new T.Group();group.add(tracks);
 for(const side of [-1,1]){
  const points=Array.from({length:701},(_,i)=>{const p=curve.getPoint(i/700),d=curve.getTangent(i/700),right=new T.Vector3(-d.z,0,d.x).normalize();return p.addScaledVector(right,side*1.32);});
  const rail=new T.CatmullRomCurve3(points);mesh(new T.TubeGeometry(rail,1100,.075,5,false),teal,[0,0,0],tracks);
 }
 const sleepers=new T.InstancedMesh(new T.BoxGeometry(3.7,.12,.4),metal,560),dummy=new T.Object3D();
 for(let i=0;i<560;i++){const u=i/559,p=curve.getPoint(u),d=curve.getTangent(u);dummy.position.copy(p);dummy.lookAt(p.clone().add(d));dummy.updateMatrix();sleepers.setMatrixAt(i,dummy.matrix);}sleepers.instanceMatrix.needsUpdate=true;tracks.add(sleepers);
 // Rings frame departure and orbital flight without blocking the carriage.
 for(const u of [.12,.19,.28,.39,.5,.61,.72,.83,.91]){
  const p=curve.getPoint(u),r=u<.25||u>.85?7:22;
  const ring=mesh(new T.TorusGeometry(r,.23,6,64),pale,p.toArray());ring.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),curve.getTangent(u));
  const inner=mesh(new T.TorusGeometry(r-.5,.07,5,64),teal,p.toArray());inner.quaternion.copy(ring.quaternion);
 }
 for(let i=0;i<7;i++){const p=curve.getPoint(i*.025);box([.8,Math.max(.2,p.y),.8],[p.x,-.2+p.y/2,p.z],metal);}
 const train=new T.Group();train.name='Lumen Express / passenger carriage';group.add(train);
 const seat=new T.MeshStandardMaterial({color:0x24565d,roughness:.8});
 for(let car=0;car<3;car++){
  const z=car*13,g=new T.Group();g.position.z=z;train.add(g);
  box([4.6,.28,12],[0,.35,0],metal,g);box([4.5,.12,11.8],[0,.55,0],gold,g);box([4.75,.24,12.3],[0,3.6,0],metal,g);
  for(const x of [-2.25,2.25]){
   box([.15,.9,12],[x,1.02,0],metal,g);box([.17,.07,12.2],[x,1.5,0],gold,g);box([.12,1.65,11.5],[x,2.42,0],glass,g);
   for(const zz of [-5.8,-3.5,-1.2,1.2,3.5,5.8])box([.15,2.1,.13],[x,2.5,zz],pale,g);
   box([.18,.06,12],[x,3.47,0],lamp,g);box([.13,.09,11.5],[x,.65,0],teal,g);
  }
  for(const zz of [-5.9,5.9]){box([4.5,1.1,.12],[0,1,zz],metal,g);box([4.5,1.8,.05],[0,2.45,zz],glass,g);box([.8,.1,.2],[0,3.4,zz],lamp,g);}
  for(const zz of [-3.8,-.8,2.2])for(const x of [-1.35,1.35]){box([1.15,.22,1.1],[x,1.03,zz],seat,g);box([1.15,.95,.16],[x,1.45,zz+.5],seat,g);box([.14,.35,.9],[x+(x>0?.55:-.55),1.3,zz],gold,g);}
  box([.18,.1,10],[0,3.43,0],lamp,g);
  for(const zz of [-4.5,4.5])for(const x of [-1.7,1.7]){const w=mesh(new T.CylinderGeometry(.48,.48,.25,16),metal,[x,0,zz],g);w.rotation.z=Math.PI/2;}
  if(car<2)box([2,2,1],[0,1.7,6.5],metal,g);
 }
 const nose=mesh(new T.SphereGeometry(1,24,16),pale,[0,1.7,-6.05],train);nose.scale.set(2.2,1.5,2.4);
 box([3.2,.8,.1],[0,2.5,-7.5],glass,train);box([3,.13,.15],[0,1,-8],teal,train);
 label('LUMEN EXPRESS  /  01',[0,3.18,-5.75],3.7,train);
 const cabin=new T.PointLight(0xffe7b5,35,9,2);cabin.position.set(0,3,13);train.add(cabin);
 const floorHeight=(x,z)=>terrainHeight(x-PLANET.x,z-PLANET.z);
 const planet=new T.Group();planet.position.set(PLANET.x,0,PLANET.z);planet.name='LUMEN / walkable planet';group.add(planet);
 // Vertex-colored volcanic terrain: a level landing pad grades into rolling ridges.
 const surface=document.createElement('canvas');surface.width=surface.height=256;const surfaceContext=surface.getContext('2d'),pixels=surfaceContext.createImageData(256,256);let grain=1377;
 for(let i=0;i<pixels.data.length;i+=4){grain=(Math.imul(grain,1664525)+1013904223)>>>0;const v=120+(grain%115);pixels.data.set([v,v,v,255],i);}surfaceContext.putImageData(pixels,0,0);
 const gravel=new T.CanvasTexture(surface);gravel.wrapS=gravel.wrapT=T.RepeatWrapping;gravel.repeat.set(100,100);gravel.colorSpace=T.SRGBColorSpace;gravel.anisotropy=4;
 const geo=new T.PlaneGeometry(430,430,120,120);geo.rotateX(-Math.PI/2);const position=geo.attributes.position,colors=[];
 const c=new T.Color();for(let i=0;i<position.count;i++){const x=position.getX(i),z=position.getZ(i),h=terrainHeight(x,z);position.setY(i,h);c.setHSL(.53+.04*Math.sin(x*.02),.15,.18+h*.012);colors.push(c.r,c.g,c.b);}
 geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));geo.computeVertexNormals();mesh(geo,new T.MeshStandardMaterial({vertexColors:true,map:gravel,bumpMap:gravel,bumpScale:.13,roughness:.96}),[0,0,0],planet);
 box([32,.25,8],[-103,.12,5],stone,planet);for(let i=0;i<11;i++)box([.15,.025,7],[-112+i*2,.28,5],teal,planet);
 function collider(x,z,w,d){planetColliders.push({x:PLANET.x+x,z:PLANET.z+z,w,d});}
 // Observation habitat with a real open entrance and windows.
 const baseX=-46,baseZ=-3;
 box([20,.4,16],[baseX,.2,baseZ],pale,planet);
 box([20,.22,16],[baseX,4.8,baseZ],metal,planet);
 for(const [x,z,w,d] of [[baseX,baseZ-8,20,.25],[baseX+10,baseZ,.25,16],[baseX,baseZ+8,20,.25],[baseX-10,baseZ-5,.25,6],[baseX-10,baseZ+5,.25,6]]){
  box([w,1.2,d],[x,1,z],metal,planet);box([w,2.3,d],[x,2.75,z],glass,planet);collider(x,z,w,d);
 }
 label('LUMEN / FIELD STATION',[baseX-10.2,4,baseZ],8,planet).rotation.y=-Math.PI/2;
 for(let i=0;i<3;i++){box([2.5,.9,1],[baseX+4,1.1,baseZ-5+i*5],metal,planet);const monitor=box([1.6,.8,.06],[baseX+4,1.95,baseZ-5+i*5],teal,planet);monitor.rotation.x=-.18;collider(baseX+4,baseZ-5+i*5,2.5,1);}
 const habitatLight=new T.PointLight(0x99f4e3,100,30,2);habitatLight.position.set(baseX,4,baseZ);planet.add(habitatLight);
 // Transparent botanical domes, antenna, and solar array.
 for(const [x,z,r] of [[16,-35,11],[45,-20,8]]){
  const h=terrainHeight(x,z);mesh(new T.SphereGeometry(r,32,16,0,Math.PI*2,0,Math.PI/2),glass,[x,h,z],planet);
  const tor=mesh(new T.TorusGeometry(r,.16,6,48),pale,[x,h,z],planet);tor.rotation.x=Math.PI/2;
  for(let k=0;k<7;k++){const a=k*2.399;mesh(new T.ConeGeometry(1.2,4,7),teal,[x+Math.cos(a)*r*.5,h+2,z+Math.sin(a)*r*.5],planet);}collider(x,z,r*1.7,r*1.7);
 }
 for(let i=0;i<6;i++){const x=-55+i*5,z=-28,h=terrainHeight(x,z);box([.18,2,.18],[x,h+1,z],pale,planet);const panel=box([4,.1,5],[x,h+2,z],new T.MeshStandardMaterial({color:0x162d64,metalness:.75,roughness:.2}),planet);panel.rotation.x=-.35;collider(x,z,4,5);}
 const pole=mesh(new T.CylinderGeometry(.25,.5,18,10),pale,[70,9,-55],planet),dish=mesh(new T.SphereGeometry(5,24,12,0,Math.PI*2,0,Math.PI*.3),pale,[70,18,-55],planet);dish.rotation.z=.55;collider(70,-55,3,3);
 let seed=2077;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const rocks=new T.InstancedMesh(new T.IcosahedronGeometry(1,1),stone,190),crystals=new T.InstancedMesh(new T.ConeGeometry(1,1,5),teal,110);
 for(const [instances,count,crystal] of [[rocks,190,false],[crystals,110,true]])for(let i=0;i<count;i++){
  let x,z;do{x=(random()-.5)*390;z=(random()-.5)*390;}while(Math.hypot(x,z)>195||(x< -25&&Math.abs(z)<32)||Math.hypot(x-25,z+25)<40);
  const h=terrainHeight(x,z),size=crystal?1.5+random()*5:.6+random()*3;
  dummy.position.set(x,h+(crystal?size*.5:size*.35),z);dummy.rotation.set(crystal?0:random(),random()*6.28,crystal?(random()-.5)*.3:random());dummy.scale.set(crystal?size*.35:size,size,crystal?size*.35:size*.8);dummy.updateMatrix();instances.setMatrixAt(i,dummy.matrix);
  if(size>2.5)collider(x,z,crystal?size*.5:size*1.5,crystal?size*.5:size*1.3);
 }planet.add(rocks,crystals);
 for(const [x,z] of [[-20,35],[32,68],[100,12]]){
  const lake=mesh(new T.CircleGeometry(12,40),new T.MeshStandardMaterial({color:0x14495a,emissive:0x087b8d,emissiveIntensity:.45,metalness:.8,roughness:.18}),[x,terrainHeight(x,z)+.08,z],planet);lake.rotation.x=-Math.PI/2;collider(x,z,20,20);
 }
 // Distant ridges give the landing zone a horizon and readable scale.
 const ridge=new T.BufferGeometry(),rv=[],ri=[],rc=[];const segments=160,rings=16;
 for(let j=0;j<=rings;j++)for(let i=0;i<=segments;i++){
  const a=i*Math.PI*2/segments,r=212+j*13;
  const crest=38+19*Math.sin(a*7+.8)+12*Math.cos(a*19)+9*Math.sin(a*31);
  const height=Math.max(0,Math.sin(Math.PI*j/rings))*crest+Math.sin(a*29+j*.6)*j*.8;
  rv.push(Math.cos(a)*r,height-3,Math.sin(a)*r);c.setHSL(.55,.10,.14+height*.0007);rc.push(c.r,c.g,c.b);
  if(j<rings&&i<segments){const k=j*(segments+1)+i;ri.push(k,k+segments+1,k+1,k+1,k+segments+1,k+segments+2);}
 }
 ridge.setAttribute('position',new T.Float32BufferAttribute(rv,3));ridge.setAttribute('color',new T.Float32BufferAttribute(rc,3));ridge.setIndex(ri);ridge.computeVertexNormals();mesh(ridge,new T.MeshStandardMaterial({vertexColors:true,map:gravel,roughness:1,side:T.DoubleSide}),[0,0,0],planet);
 for(const [x,z,r] of [[45,110,15],[-32,-110,18],[125,-60,11]]){
  const crater=mesh(new T.TorusGeometry(r,1.2,7,48),stone,[x,terrainHeight(x,z),z],planet);crater.rotation.x=Math.PI/2;crater.scale.z=.45;
 }
 label('CRYSTAL BASIN →',[-78,2.6,20],7,planet);
 const sphereMat=new T.MeshStandardMaterial({color:0x2e5667,roughness:.88});
 // A procedurally shaded ocean world under the launch city, no external downloads.
 sphereMat.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 planetNormal;').replace('#include <beginnormal_vertex>','#include <beginnormal_vertex>\nplanetNormal=normal;');shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 planetNormal;').replace('#include <color_fragment>',`#include <color_fragment>
 float land = sin(planetNormal.x*19.+sin(planetNormal.z*13.)*2.)*sin(planetNormal.z*17.+planetNormal.y*9.);
 diffuseColor.rgb=mix(vec3(.025,.15,.27),vec3(.16,.29,.19),smoothstep(.10,.29,land));
 float cloud=sin(planetNormal.x*43.+planetNormal.y*24.)*sin(planetNormal.z*39.+planetNormal.x*7.);
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.68,.78,.8),smoothstep(.42,.65,cloud)*.65);`);};
 const earth=mesh(new T.SphereGeometry(1700,80,48),sphereMat,[0,-1750,0]);earth.castShadow=false;
 const lumenGlobe=mesh(new T.SphereGeometry(1550,64,40),new T.MeshStandardMaterial({color:0x537074,roughness:.94}),[6400,-1610,-4600]);lumenGlobe.castShadow=false;
 const giantMat=new T.MeshStandardMaterial({color:0xae9482,roughness:1});
 giantMat.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 gasNormal;').replace('#include <beginnormal_vertex>','#include <beginnormal_vertex>\ngasNormal=normal;');shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 gasNormal;').replace('#include <color_fragment>',`#include <color_fragment>
 float band=.5+.5*sin(gasNormal.y*61.+sin(gasNormal.x*18.)*.4);
 diffuseColor.rgb=mix(vec3(.32,.37,.46),vec3(.65,.48,.32),band);
 diffuseColor.rgb*=.85+.15*sin(gasNormal.y*150.);`);};
 const giant=mesh(new T.SphereGeometry(980,64,40),giantMat,[8800,1700,-8200]);giant.castShadow=false;giant.rotation.z=.23;
 const ring=mesh(new T.RingGeometry(1250,1750,128),new T.MeshBasicMaterial({color:0x9a9eac,transparent:true,opacity:.42,side:T.DoubleSide}),[8800,1700,-8200]);ring.rotation.set(.9,.25,.28);
 const starPositions=[],starColors=[];for(let i=0;i<3200;i++){const a=random()*Math.PI*2,v=random()*2-1,r=15500;starPositions.push(Math.sqrt(1-v*v)*Math.cos(a)*r+3200,v*r+1500,Math.sqrt(1-v*v)*Math.sin(a)*r-2300);const b=.4+random()*.6;starColors.push(b*.83,b*.9,b);}
 const starsGeo=new T.BufferGeometry();starsGeo.setAttribute('position',new T.Float32BufferAttribute(starPositions,3));starsGeo.setAttribute('color',new T.Float32BufferAttribute(starColors,3));
 const stars=new T.Points(starsGeo,new T.PointsMaterial({size:6,sizeAttenuation:true,vertexColors:true,transparent:true,opacity:0,depthWrite:false,fog:false}));group.add(stars);
 const starGlow=new T.Sprite(new T.SpriteMaterial({color:0xa8c6ed,transparent:true,opacity:.24}));starGlow.position.set(11000,7000,-11000);starGlow.scale.set(70,70,1);group.add(starGlow);
 function setTrain(u,reverse=false,path=curve){const p=path.getPoint(Math.max(0,Math.min(1,u))),t=path.getTangent(Math.max(0,Math.min(1,u))).multiplyScalar(reverse?-1:1);train.position.copy(p);train.quaternion.setFromRotationMatrix(new T.Matrix4().lookAt(p,p.clone().add(t),new T.Vector3(0,1,0)));train.updateMatrixWorld(true);}
 setTrain(0);
 function blockedPlanet(x,z){if(!withinPlanet(x-PLANET.x,z-PLANET.z))return true;return planetColliders.some(b=>Math.abs(x-b.x)<b.w/2+.3&&Math.abs(z-b.z)<b.d/2+.3);}
 return {group,train,curve,stars,planet,earth,setTrain,blockedPlanet,floorHeight,cityColliders,planetColliders};
}
