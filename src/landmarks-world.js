import * as T from '../vendor/three.module.js';
import layout from './landmark-layout.json';
import {landmarkBlocked,landmarkFloor} from './landmark-physics.mjs';
import {OFFSETS,ATLAS_PLACES,mountainHeight,skyRoute} from './atlas.mjs';
import {batchStatic} from './render-budget.js';
import {applySurfaceDetail} from './surface-detail.js';
export async function createLandmarks(scene,parseGLB,buffer){
 const gltf=await parseGLB(buffer),root=gltf.scene;root.name='Blender / three worlds collection';scene.add(root);
 root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
 applySurfaceDetail(root);
 const groups={city:root.getObjectByName('CITY_LANDMARKS'),planet:root.getObjectByName('LUMEN_LANDMARKS'),machine:root.getObjectByName('MACHINE_LANDMARKS')};
 const skimmer=root.getObjectByName('ANIM_HOVER_TEMPLATE');
 const traffic=Array.from({length:6},(_,i)=>{const o=skimmer.clone(true);o.name='ANIM_SKY_TRAFFIC_'+i;skimmer.parent.add(o);o.scale.setScalar(.83+i*.055);o.traverse(part=>{if(part.isMesh&&part.material.name==='Porcelain concrete'){part.material=part.material.clone();part.material.color.multiply(new T.Color([0xe5e5de,0x9dbbc7,0xc3a17d,0xa1bab0,0xa7a8bf,0xb1b9bd][i]));}});return o;});
 for(const data of layout.labels){
  const parent=root.getObjectByName(data.group),c=document.createElement('canvas');c.width=1024;c.height=Math.max(64,Math.round(1024*data.height/data.width));const ctx=c.getContext('2d');ctx.fillStyle='#102630';ctx.fillRect(0,0,1024,c.height);ctx.fillStyle='#ccece4';ctx.font='600 '+Math.round(c.height*.54)+'px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(data.text,512,c.height/2,990);
  const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;const material=new T.MeshBasicMaterial({map:texture,side:T.DoubleSide});
  const mesh=new T.Mesh(new T.PlaneGeometry(data.width,data.height),material);mesh.position.fromArray(data.p);mesh.rotation.y=data.yaw||0;mesh.position.x+=Math.sin(mesh.rotation.y)*.047;mesh.position.z+=Math.cos(mesh.rotation.y)*.047;parent.add(mesh);
 }
 const batching=batchStatic(root,{cell:48});let piloting=false;
 const blocked=(...args)=>landmarkBlocked(layout,...args),floorHeight=(...args)=>landmarkFloor(layout,...args);
 function nearby(world,p){const [ox,oz]=OFFSETS[world];return ATLAS_PLACES.find(a=>a.world===world&&Math.hypot(p.x-ox-a.spot[0],p.z-oz-a.spot[1])<5.5);}
 function update(time,camera,driving){
  piloting=driving;
  traffic.forEach((o,i)=>{const p=skyRoute(time,i);o.position.set(p.x,p.y,p.z);o.rotation.y=p.yaw;});
  if(driving){skimmer.position.set(camera.position.x-13200,camera.position.y-2.2,camera.position.z+9200);skimmer.quaternion.copy(camera.quaternion);skimmer.rotation.x=0;skimmer.rotation.z=0;}
  else{skimmer.position.set(-128,2+Math.sin(time*1.5)*.12,40);skimmer.rotation.set(0,0,0);}
 }
 // Each discovered site has its own note; the gate also has a quiet synthesized
 // harmonic response. Audio starts only after the user explicitly interacts.
 let audio=null,resonance=0;
 function resonate(){try{audio||=new (window.AudioContext||window.webkitAudioContext)();audio.resume();const t=audio.currentTime,ratio=[1,1.125,1.25,1.5][resonance++%4];[174.61,261.63,349.23].forEach((hz,i)=>{const osc=audio.createOscillator(),gain=audio.createGain();osc.type='sine';osc.frequency.value=hz*ratio;gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(.055,t+.15+i*.05);gain.gain.exponentialRampToValueAtTime(.001,t+2);osc.connect(gain).connect(audio.destination);osc.start(t);osc.stop(t+2.1);});}catch{}}
 return {root,groups,skimmer,traffic,batching,blocked,floorHeight,nearby,update,resonate};
}
