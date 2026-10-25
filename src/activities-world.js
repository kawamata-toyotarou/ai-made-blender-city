import * as T from '../vendor/three.module.js';
import decor from './activity-decor.json' with {type:'json'};
import {OFFSETS,mountainHeight} from './atlas.mjs';
import {TERMINALS,CARDS,activityFloor} from './activities.mjs';
import {batchStatic} from './render-budget.js';
import {applySurfaceDetail} from './surface-detail.js';
import {contactMaterial} from './greenery.js';
export async function createActivityWorld(scene,parseGLB,buffer,state){
 const {scene:root}=await parseGLB(buffer);root.name='Blender / city life activities';scene.add(root);
 root.traverse(o=>{if(o.isMesh)o.castShadow=o.receiveShadow=true;});applySurfaceDetail(root);
 const cards=CARDS.map((c,phase)=>{const ob=root.getObjectByName('ANIM_CARD_'+c.id),floor=activityFloor(c,mountainHeight);ob.position.y=floor+1.25;return {...c,ob,floor,phase};});
 const pads=Array.from({length:9},(_,i)=>{const ob=root.getObjectByName('ANIM_CIRCUIT_PAD_'+i);ob.material=ob.material.clone();return ob;});
 for(const t of TERMINALS.filter(t=>t.kind==='post')){
  const g=root.getObjectByName('POST_'+t.id),canvas=document.createElement('canvas');canvas.width=768;canvas.height=96;const ctx=canvas.getContext('2d');ctx.fillStyle='#10222b';ctx.fillRect(0,0,768,96);ctx.fillStyle='#caece5';ctx.font='500 44px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(t.name,384,48,740);
  const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;const label=new T.Mesh(new T.PlaneGeometry(2.3,.32),new T.MeshBasicMaterial({map:texture}));label.position.set(0,2.34,.515);g.add(label);
 }
 const batching=batchStatic(root,{cell:48});
 const contacts=[...TERMINALS.map(t=>({...t,y:(t.world==='machine'?.16:0)+.025,w:3.2,d:2.5})),...decor.contacts],shadow=new T.InstancedMesh(new T.PlaneGeometry(1,1),contactMaterial,contacts.length),dummy=new T.Object3D();
 contacts.forEach((t,i)=>{const [ox,oz]=OFFSETS[t.world];dummy.position.set(ox+t.x,t.y,oz+t.z);dummy.rotation.set(-Math.PI/2,0,0);dummy.scale.set(t.w,t.d,1);dummy.updateMatrix();shadow.setMatrixAt(i,dummy.matrix);});root.add(shadow);
 for(const t of TERMINALS){const [ox,oz]=OFFSETS[t.world],l=new T.PointLight(t.kind==='tone'?0xbda0ff:t.kind==='circuit'?0x7be5dc:0xffcc8c,t.kind==='post'?6:18,6,2);l.position.set(ox+t.x,2.1,oz+t.z+.9);root.add(l);}
 for(const x of [29,91]){const light=new T.PointLight(0xffd29a,35,24,2);light.position.set(x,4.8,-232);root.add(light);}
 const dustGeo=new T.BufferGeometry(),positions=[];for(let i=0;i<64;i++)positions.push(Math.sin(i*2.399)*2.6,.5+(i%17)*.22,Math.cos(i*2.399)*2.6);dustGeo.setAttribute('position',new T.Float32BufferAttribute(positions,3));
 const glowPixels=new Uint8Array(32*32*4);for(let y=0;y<32;y++)for(let x=0;x<32;x++){const i=(y*32+x)*4,alpha=Math.max(0,1-Math.hypot(x-15.5,y-15.5)/16);glowPixels.set([255,255,255,Math.round(alpha*alpha*255)],i);}const glow=new T.DataTexture(glowPixels,32,32);glow.needsUpdate=true;
 const dust=new T.Points(dustGeo,new T.PointsMaterial({color:0xc5b6ed,map:glow,size:.09,transparent:true,opacity:.6,blending:T.AdditiveBlending,depthWrite:false}));dust.position.set(6400-63,0,-4600+138);root.add(dust);
 const solids=[...TERMINALS.map(t=>({...t,w:t.kind==='post'?.94:2.9,d:t.kind==='post'?.8:1.6,h:t.kind==='post'?2.65:2.3,bottom:0})),...decor.solids];
 function blocked(world,x,z,feet=0){const [ox,oz]=OFFSETS[world];return solids.some(b=>b.world===world&&feet<b.h&&feet+1.7>b.bottom&&Math.abs(x-ox-b.x)<b.w/2+.28&&Math.abs(z-oz-b.z)<b.d/2+.28);}
 function floorHeight(world,x,z,feet,current){const [ox,oz]=OFFSETS[world];for(const b of solids)if(b.world===world&&feet>=b.h-.08&&Math.abs(x-ox-b.x)<b.w/2+.25&&Math.abs(z-oz-b.z)<b.d/2+.25)current=Math.max(current,b.h);return current;}
 function nearby(world,p){const [ox,oz]=OFFSETS[world];return TERMINALS.find(t=>t.world===world&&Math.hypot(p.x-ox-t.x,p.z-oz-t.z)<3.7);}
 let mask=-1;
 function update(time,world,camera,canCollect,circuitMask){
  for(const c of cards){c.ob.visible=!state.cards.includes(c.id);c.ob.rotation.y=time*.6;c.ob.position.y=c.floor+1.25+Math.sin(time*1.8+c.phase)*.08;}
  if(mask!==circuitMask){mask=circuitMask;pads.forEach((o,i)=>{const on=!!(mask&(1<<i));o.material.color.set(on?0x56dbc9:0x182e36);o.material.emissive.set(on?0x17997f:0x000000);o.material.emissiveIntensity=on?1.4:0;});}
  dust.visible=world==='planet'&&Math.hypot(camera.position.x-dust.position.x,camera.position.z-dust.position.z)<65;dust.rotation.y=time*.08;
  if(canCollect){const [ox,oz]=OFFSETS[world];return cards.find(c=>c.world===world&&!state.cards.includes(c.id)&&Math.hypot(camera.position.x-ox-c.x,camera.position.z-oz-c.z)<1.2&&Math.abs(camera.position.y-1.72-c.floor)<1.6);}
 }
 return {root,cards,pads,solids,batching,blocked,floorHeight,nearby,update};
}
