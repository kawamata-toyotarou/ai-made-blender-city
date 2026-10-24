import * as T from '../vendor/three.module.js';
import {DISTRICT_PLACES} from './freedom.mjs';
import {createGrove} from './greenery.js';
export function createDistricts(scene,buildings){
 const root=new T.Group();root.name='AURORA / living districts';scene.add(root);
 const solids=[],actions=[],batches=new Map(),wet=[],grove=createGrove(root),lamps=[];
 const mat=(c,metal=0,r=.7)=>new T.MeshStandardMaterial({color:c,metalness:metal,roughness:r});
 const concrete=mat(0xa8a89c),dark=mat(0x26343d,.4),wood=mat(0x815d3f),leaf=mat(0x446e55),bark=mat(0x554337),gold=mat(0xb79865,.6),red=mat(0x9d4a3c),paper=mat(0xe1cfaa);
 const glass=mat(0x2b5464,.65,.2),light=new T.MeshStandardMaterial({color:0xffe6b3,emissive:0xffc478,emissiveIntensity:1.1});
 function texture(kind){const c=document.createElement('canvas');c.width=c.height=256;const ctx=c.getContext('2d');ctx.fillStyle=kind==='paving'?'#97948b':kind==='grass'?'#687552':'#474c4d';ctx.fillRect(0,0,256,256);let seed=57;
  for(let i=0;i<9000;i++){seed=(Math.imul(seed,1664525)+1013904223)>>>0;ctx.fillStyle=`rgba(${seed%2?255:0},${seed%2?255:0},${seed%2?255:0},.07)`;ctx.fillRect(seed%256,(seed>>>8)%256,1+(seed%3),1);}
  if(kind==='paving'){ctx.strokeStyle='#4e5353';ctx.lineWidth=2;for(let y=0;y<256;y+=32){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(256,y);ctx.stroke();for(let x=(y%64?16:0);x<256;x+=64)ctx.strokeRect(x,y,64,32);}}
  const t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(kind==='paving'?14:32,kind==='paving'?14:32);t.colorSpace=T.SRGBColorSpace;t.anisotropy=4;return t;
 }
 const pavingTex=texture('paving'),roadTex=texture('road'),grassTex=texture('grass');
 const grass=new T.MeshStandardMaterial({color:0x89986d,map:grassTex,bumpMap:grassTex,bumpScale:.035,roughness:1});
 const paving=new T.MeshStandardMaterial({color:0xbbc1b7,map:pavingTex,bumpMap:pavingTex,bumpScale:.04,roughness:.85});
 const road=new T.MeshStandardMaterial({color:0x667079,map:roadTex,bumpMap:roadTex,bumpScale:.025,roughness:.88});wet.push(paving,road);
 for(const m of [paving,road,grass])m.onBeforeCompile=shader=>{
  shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec2 pavingWorld;').replace('#include <begin_vertex>',`#include <begin_vertex>
 vec4 pavingPoint=vec4(transformed,1.);
 #ifdef USE_INSTANCING
 pavingPoint=instanceMatrix*pavingPoint;
 #endif
 pavingWorld=(modelMatrix*pavingPoint).xz;`);
  shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec2 pavingWorld;').replace('#include <map_fragment>','#ifdef USE_MAP\ndiffuseColor *= texture2D(map,pavingWorld*.25);\n#endif');
 };
 function inst(size,pos,m,rot=0){let a=batches.get(m);if(!a){a=[];batches.set(m,a);}a.push({size,pos,rot});}
 function obj(geo,m,p,parent=root){const o=new T.Mesh(geo,m);o.position.set(...p);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
 const box=(size,p,m,parent)=>{if(!parent){inst(size,p,m);return;}return obj(new T.BoxGeometry(...size),m,p,parent);};
 function wall(x,z,w,d){solids.push({x,z,w,d});}
 function sign(text,p,width=5,color='#e6d2a5',rot=0){const c=document.createElement('canvas');c.width=1024;c.height=180;const ctx=c.getContext('2d');ctx.fillStyle='#162c32';ctx.fillRect(0,0,1024,180);ctx.fillStyle=color;ctx.font='600 62px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,512,90,990);const tx=new T.CanvasTexture(c);tx.colorSpace=T.SRGBColorSpace;const m=new T.MeshBasicMaterial({map:tx});const front=obj(new T.PlaneGeometry(width,width*180/1024),m,p);front.rotation.y=rot;const back=new T.Mesh(front.geometry,m);back.rotation.y=Math.PI;front.add(back);return front;}
 function tree(x,z,h=5){grove.add(x,z,h);wall(x,z,.5,.5);}
 function bench(x,z,rot=0){const g=new T.Group();g.position.set(x,.08,z);g.rotation.y=rot;root.add(g);box([2.1,.15,.65],[0,.5,0],wood,g);box([2.1,.55,.12],[0,.85,-.3],wood,g);for(const xx of [-.8,.8])box([.12,.5,.5],[xx,.25,0],dark,g);wall(x,z,2.1,.8);actions.push({id:`bench-${x}-${z}`,kind:'seat',name:'ベンチで休む',x,z,sit:[x,1.15,z],exit:[x+1.8,1.72,z],yaw:rot});}
 // A planted park with paths, beds and distant landscape replaces the flat edge.
 inst([1400,.15,1400],[0,-.3,0],grass);
 inst([45,.04,42],[180,.095,105],grass);
 inst([3,.035,42],[180,.13,105],paving);inst([45,.035,2.4],[180,.13,106],paving);
 for(const x of [166,193])for(const z of [93,118]){
  inst([6,.18,3],[x,.17,z],wood);inst([5.6,.2,2.6],[x,.25,z],grass);
  for(let j=0;j<16;j++)inst([.15,.3,.15],[x-2.4+(j%8)*.68,.51,z-.6+Math.floor(j/8)*1.2],j%3?gold:red);
 }
 for(let x=-300;x<=300;x+=18){tree(x,151,4+(x%3)*.25);tree(x,-307,4.5);}
 for(let i=0;i<16;i++){const x=-650+i*85,z=i%2?350:-510;const hill=obj(new T.IcosahedronGeometry(1,2),grass,[x,-10,z]);hill.scale.set(85,23+i%4*7,95);}
 // Curbs, drainage, lane markings, crossings and accessible sidewalks.
 for(const x of [-285,-210,-150,150,210,285]){
  const cx=x===-285?-283:x,rw=x===-285?8:12.5;
  inst([rw,.025,465],[cx,-.018,-77.5],road);
  for(const s of [-1,1]){inst([4,.10,465],[cx+s*(rw/2+2.2),.015,-77.5],paving);inst([.18,.18,465],[cx+s*(rw/2+.15),.04,-77.5],concrete);}
  for(let z=-300;z<150;z+=10)inst([.12,.035,3.2],[cx,.003,z],paper);
 }
 for(const z of [-290,-230,-170,25,130]){inst([620,.025,11],[0,-.01,z],road);for(const s of [-1,1])inst([620,.12,3],[0,.02,z+s*7],paving);for(const x of [-285,-210,-150,150,210,285])for(let k=-4;k<=4;k++)inst([.7,.03,7],[x+k*1.1,.025,z],paper);}
 // Facade layers make the same skyline read differently at pedestrian scale.
 buildings.forEach((b,i)=>{
  const accent=[red,dark,gold,concrete][i%4];
  inst([23,.7,26],[b.x,.35,b.z],dark);inst([23.2,.3,26.2],[b.x,b.h+.15,b.z],accent);
  inst([b.w-2,.35,3],[b.x,3.4,b.z+14],accent);
  for(const side of [-1,1]){
   inst([.3,b.h,.4],[b.x+side*10.3,b.h/2,b.z+12.7],accent);
   for(let y=4;y<b.h;y+=6){inst([22.5,.18,.3],[b.x,y,b.z+12.7],dark);if(i%3===0){inst([19,.18,1.5],[b.x,y,b.z+13.2],concrete);for(const x of [-9,0,9])inst([.08,.9,.08],[b.x+x,y+.5,b.z+13.8],gold);}}
  }
  for(const x of [-7,-3,1,5,9])inst([.09,b.h-4,.1],[b.x+x,(b.h+4)/2,b.z+12.6],dark);
  inst([6,1.4,4],[b.x-4,b.h+.7,b.z],dark);inst([2,2,2],[b.x+5,b.h+1,b.z-5],concrete);
  inst([1.5,1.8,.3],[b.x+8,1,b.z+12.8],dark);inst([3.4,2.2,.1],[b.x-5,1.6,b.z+12.65],glass);
  // Back and side elevations receive the same attention as street fronts.
  for(const s of [-1,1]){
   inst([.22,b.h,.22],[b.x+s*10.6,b.h/2,b.z-12.6],accent);
   inst([22.5,.75,.25],[b.x,b.h+.5,b.z+s*12.6],dark);
   for(let y=3;y<b.h;y+=6){inst([.22,.16,25],[b.x+s*11.08,y,b.z],dark);for(const z of [-8,-3,3,8])inst([.16,2.5,.1],[b.x+s*11.1,y,b.z+z],dark);}
  }
  for(const x of [-8,-4,0,4,8])inst([.1,b.h-4,.1],[b.x+x,(b.h+4)/2,b.z-12.6],dark);
  inst([7,.09,.05],[b.x,2.8,b.z+14.02],light);
  for(let j=0;j<3;j++)inst([.8,.5,.5],[b.x-8+j*3,.5,b.z+14.5],concrete);
 });
 // Canal lies entirely beside the old avenue. Bridges are the only water crossings.
 const nc=document.createElement('canvas');nc.width=nc.height=128;const nctx=nc.getContext('2d'),pixels=nctx.createImageData(128,128);
 for(let y=0;y<128;y++)for(let x=0;x<128;x++){const i=(y*128+x)*4,k=Math.PI/64;pixels.data[i]=128+Math.sin((x*4+y*2)*k)*10+Math.sin((x*10-y*6)*k)*8+Math.sin((x*2-y*8)*k)*6;pixels.data[i+1]=128+Math.cos((y*4-x*2)*k)*10+Math.cos((x*8+y*6)*k)*9+Math.cos((x*2+y*12)*k)*5;pixels.data[i+2]=250;pixels.data[i+3]=255;}
 nctx.putImageData(pixels,0,0);const ripple=new T.CanvasTexture(nc);ripple.wrapS=ripple.wrapT=T.RepeatWrapping;ripple.repeat.set(5,70);
 const water=new T.MeshStandardMaterial({color:0x396e6d,metalness:.45,roughness:.22,normalMap:ripple,normalScale:new T.Vector2(.28,.28)});
 const canal=obj(new T.PlaneGeometry(15,400,20,80),water,[-300,-.055,-80]);canal.rotation.x=-Math.PI/2;
 inst([1.2,.38,430],[-291,.1,-80],concrete);inst([3,.12,430],[-289,.02,-80],paving);
 for(const z of [-230,-58,25,100]){inst([22,.2,6],[-300,.13,z],wood);for(const s of [-1,1]){inst([22,.07,.07],[-300,1.15,z+s*2.9],gold);for(const x of [-309,-300,-291])inst([.08,1.1,.08],[x,.65,z+s*2.9],dark);}}
 for(let z=-270;z<120;z+=24){tree(-276.5,z,4.5);if(z%48===-30)bench(-288,z);inst([.1,3.2,.1],[-290,1.6,z],dark);inst([.7,.12,.35],[-290,3.25,z],light);lamps.push([-290,z]);}
 sign('RIVERSIDE / CANAL WALK',[-287,3,110],11);
 // Opposite-bank scenery closes the horizon instead of exposing the map edge.
 inst([90,.4,465],[-355,-.02,-77.5],concrete);
 for(let z=-285;z<140;z+=22){tree(-317,z,4.2);inst([2,.15,8],[-311,.12,z],paving);}
 for(let i=0;i<10;i++){const z=-270+i*42,h=9+(i%3)*4;inst([18,h,24],[-345,h/2,z],i%3===0?red:concrete);inst([19,.3,25],[-345,h+.15,z],dark);for(let y=2;y<h;y+=3)for(let j=0;j<4;j++){const zz=z-8+j*5;inst([.08,1.7,2.7],[-335.94,y,zz],glass);inst([.16,.12,3],[-335.8,y-.9,zz],paper);for(const s of [-1,1])inst([.12,1.85,.12],[-335.8,y,zz+s*1.42],dark);}inst([.2,2.4,1.8],[-335.8,1.2,z],dark);inst([2,.16,4],[-335,2.7,z],i%2?gold:dark);inst([3,.15,4],[-334.5,.15,z],paving);}
 // Three open-front businesses, with actual walls and furniture.
 function shop(id,title,x,z,accent){
  inst([9,.16,8],[x,.04,z],paving);inst([9,.3,8.5],[x,3.5,z],accent);
  for(const dx of [-4.4,4.4]){inst([.18,3.5,8],[x+dx,1.75,z],dark);wall(x+dx,z,.18,8);}
  inst([9,3.5,.18],[x,1.75,z-4],dark);wall(x,z-4,9,.18);
  inst([5,.8,1],[x,1,z-1],wood);wall(x,z-1,5,1);
  for(let j=0;j<7;j++){const px=x-2+j*.65;
   obj(new T.CylinderGeometry(.12,.09,.24,12),paper,[px,1.52,z-1]);obj(new T.CylinderGeometry(.125,.125,.025,12),dark,[px,1.65,z-1]);
  }
  inst([1.2,.9,.65],[x-2.7,1.85,z-2.8],dark);inst([.9,.14,.8],[x-2.7,1.44,z-2.8],gold);
  for(const py of [1.5,2.25]){inst([3,.08,.6],[x+1.8,py,z-3.6],wood);for(let j=0;j<5;j++)obj(new T.CylinderGeometry(.08,.08,.32,8),j%2?red:gold,[x+.7+j*.45,py+.2,z-3.6]);}
  for(const dx of [-2,0,2]){obj(new T.CylinderGeometry(.31,.31,.12,12),wood,[x+dx,.75,z+3.1]);inst([.09,.7,.09],[x+dx,.35,z+3.1],dark);}
  sign('COFFEE   /   FOOD   /   LOCAL ART',[x,2.45,z-3.85],6,'#9bb6a5');
  sign(title,[x,2.85,z+.7],8);sign('OPEN / F',[x,1.8,z+.7],3,'#b6dfc8');
  actions.push({id,kind:'stamp',name:title+'を楽しむ',x,z:z+2.8});
  for(const dx of [-6,6]){tree(x+dx,z+4,4);bench(x+dx,z+7);}
 }
 shop('canal-cafe','CANAL COFFEE / 運河カフェ',-273,76,gold);
 shop('market-food','GARDEN MARKET / フード屋台',216,76,red);
 shop('workshop-exhibit','MAKERS / 工房ギャラリー',-143,-242,dark);
 for(let i=0;i<5;i++){const x=199+i*6,z=102;inst([4,.15,3],[x,2.7,z],i%2?paper:red);inst([3,.6,1.3],[x,.8,z],wood);for(const dx of [-1.7,1.7])inst([.08,2.7,.08],[x+dx,1.35,z+1],dark);}
 for(let i=0;i<4;i++){tree(162+i*12,123,5);bench(164+i*12,118);}
 sign('GARDEN / FOOD & FLOWERS',[210,4,113],16);
 // Suspended lamps, produce and flowers bring the market down to human scale.
 for(let i=0;i<5;i++){const x=199+i*6;for(let j=0;j<9;j++){inst([.32,.22,.3],[x-.9+(j%3)*.75,1.22,101.6+Math.floor(j/3)*.35],j%2?gold:red);}inst([.12,3.7,.12],[x,1.85,104],dark);inst([.3,.22,.3],[x,3.45,104],light);lamps.push([x,104]);}
 for(let i=0;i<24;i++)inst([.12,.1,.12],[198+i*1.05,3.45-Math.sin(i/23*Math.PI)*.5,104],light);
 // A public art installation and makers' worktables.
 for(let i=0;i<5;i++){inst([2,.2,2],[-163+i*5,.25,-220],concrete);const sculpture=obj(new T.TorusKnotGeometry(.65,.15,48,8),i%2?gold:red,[-163+i*5,1.5,-220]);}
 sign('NORTH / MAKERS QUARTER',[-150,4,-214],15);
 grove.finish();
 const glowPixels=new Uint8Array(64*64*4);for(let y=0;y<64;y++)for(let x=0;x<64;x++){const i=(y*64+x)*4;glowPixels[i]=glowPixels[i+1]=glowPixels[i+2]=255;glowPixels[i+3]=Math.max(0,Math.pow(Math.max(0,1-Math.hypot((x-31.5)/32,(y-31.5)/32)),1.7)*255);}const glowMap=new T.DataTexture(glowPixels,64,64);glowMap.needsUpdate=true;
 const poolGeo=new T.PlaneGeometry(7.2,7.2),poolMat=new T.MeshBasicMaterial({color:0xffd39b,map:glowMap,transparent:true,opacity:.18,depthWrite:false,blending:T.AdditiveBlending});
 const pools=new T.Group();root.add(pools);for(const [x,z] of lamps){const o=new T.Mesh(poolGeo,poolMat);o.rotation.x=-Math.PI/2;o.position.set(x,.14,z);pools.add(o);}
 const localLights=Array.from({length:4},()=>{const l=new T.PointLight(0xffce8c,0,11,2);root.add(l);return l;});
 // Playable city car. No extra model downloads or services.
 const car=new T.Group();car.position.set(-210,0,68);root.add(car);
 box([1.9,.55,4],[0,.65,0],red,car);box([1.65,.9,2],[0,1.3,0],glass,car);box([1.9,.12,1.3],[0,1,-1.5],dark,car);box([1.72,.08,1.5],[0,1.8,0],red,car);
 for(const x of [-1,1])for(const z of [-1.3,1.3]){const w=obj(new T.CylinderGeometry(.38,.38,.2,14),dark,[x,.4,z],car);w.rotation.z=Math.PI/2;}
 for(const x of [-.65,.65])box([.35,.14,.1],[x,.85,-2.03],light,car);
 // Efficient batch construction: shared geometry, one draw call per material.
 const dummy=new T.Object3D();for(const [m,items] of batches){const o=new T.InstancedMesh(new T.BoxGeometry(1,1,1),m,items.length);for(let i=0;i<items.length;i++){const v=items[i];dummy.position.set(...v.pos);dummy.scale.set(...v.size);dummy.rotation.set(0,v.rot,0);dummy.updateMatrix();o.setMatrixAt(i,dummy.matrix);}o.castShadow=true;o.receiveShadow=true;root.add(o);}
 const rainGeo=new T.BufferGeometry(),drops=[];for(let i=0;i<1800;i++)drops.push((i*17.123%60)-30,(i*7.217%28),(i*11.197%60)-30);rainGeo.setAttribute('position',new T.Float32BufferAttribute(drops,3));const rain=new T.Points(rainGeo,new T.PointsMaterial({color:0xa5c4cd,size:.035,transparent:true,opacity:.55,depthWrite:false}));rain.visible=false;root.add(rain);
 function blocked(x,z){if(x<-292.2&&x>-308&&z>-280&&z<120&&![-230,-58,25,100].some(v=>Math.abs(z-v)<2.5))return true;return solids.some(b=>Math.abs(x-b.x)<b.w/2+.3&&Math.abs(z-b.z)<b.d/2+.3);}
 function update(dt,time,camera,weather,world,night=false){rain.visible=weather==='rain'&&world==='city';if(rain.visible){rain.position.copy(camera);rain.position.y-=3;rain.rotation.y=time*.012;const a=rainGeo.attributes.position;for(let i=0;i<a.count;i++){let y=a.getY(i)-dt*16;if(y<0)y+=28;a.setY(i,y);}a.needsUpdate=true;}for(const m of wet)m.roughness=weather==='rain'?.28:.85;canal.position.y=-.055+Math.sin(time*.4)*.012;ripple.offset.set(time*.015,time*.008);pools.visible=night&&world==='city';
  const near=lamps.map(p=>({p,d:Math.hypot(p[0]-camera.position.x,p[1]-camera.position.z)})).sort((a,b)=>a.d-b.d);
  localLights.forEach((l,i)=>{const n=near[i];l.intensity=night&&world==='city'&&n.d<18?55:0;l.position.set(n.p[0],2.95,n.p[1]);});
 }
 const layout=[...batches].map(([m,items])=>({color:m.color.toArray(),metal:m.metalness,rough:m.roughness,items}));
 return {root,car,dynamic:[car,canal,pools],actions,solids,blocked,update,places:DISTRICT_PLACES,batchCount:batches.size,layout};
}
