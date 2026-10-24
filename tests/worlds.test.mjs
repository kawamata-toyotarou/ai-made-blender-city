import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import * as T from '../vendor/three.module.js';
import {partitionCity,batchStatic,createLightPool,createWorldVisibility} from '../src/render-budget.js';
import {cityContains,mountainHeight,OFFSETS,ATLAS_PLACES,validAtlas,skyRoute,stepSkimmer} from '../src/atlas.mjs';
import {landmarkBlocked,landmarkFloor} from '../src/landmark-physics.mjs';
import {CELL_POSITIONS,REACTORS} from '../src/adventure.mjs';
const layout=JSON.parse(fs.readFileSync(new URL('../src/landmark-layout.json',import.meta.url)));
test('native mountain terrain and hiking trail use the exact walkable height field',()=>{
 assert.equal(mountainHeight(500,-100),182);assert.equal(mountainHeight(720,-100),0);assert.equal(cityContains(723,-100),false);
 for(const [x,y,z] of layout.trail){assert.ok(cityContains(x,z));assert.ok(Math.abs(y-mountainHeight(x,z)-.05)<1e-5);}
 assert.ok(cityContains(500,-100));assert.ok(cityContains(300,-96));assert.equal(cityContains(500,155),false);
});
test('every new destination has an open approach and each machine repair site remains accessible',()=>{
 for(const p of ATLAS_PLACES){const [ox,oz]=OFFSETS[p.world];assert.equal(landmarkBlocked(layout,p.world,p.x+ox,p.z+oz,0),false,p.id);}
 for(const [x,z] of CELL_POSITIONS)assert.equal(landmarkBlocked(layout,'machine',13200+x,-9200+z,0),false);
 for(const r of REACTORS)assert.equal(landmarkBlocked(layout,'machine',13200+r.x,-9200+r.z+5.5,0),false);
 // Traverse the campus entrance, central courtyard and route to the research hall.
 for(let z=-184;z>-266;z-=.2)assert.equal(landmarkBlocked(layout,'city',60,z,.1),false,'campus '+z);
 assert.ok(landmarkBlocked(layout,'city',20,-230,0));
 assert.equal(landmarkFloor(layout,'machine',13100,-9200,0),.16);
 assert.equal(landmarkFloor(layout,'city',60,-204,0),.09);
 for(let z=-65;z>-86;z-=.2){const a=landmarkFloor(layout,'planet',6290,-4600+z,0),b=landmarkFloor(layout,'planet',6290,-4600+z-.2,0);assert.ok(b>=a&&b-a<.04);}
 assert.equal(landmarkFloor(layout,'planet',6290,-4705,0),2.2);
 const desk=layout.solids.find(b=>b.world==='city'&&b.h===1);assert.equal(landmarkFloor(layout,'city',desk.x,desk.z,0,1.1),1);assert.ok(landmarkFloor(layout,'city',desk.x,desk.z,0,0)<1);assert.equal(landmarkBlocked(layout,'city',desk.x,desk.z,1),false);
});
test('flying traffic has continuous varied routes and the controllable skimmer stays within its flight corridor',()=>{
 for(let i=0;i<6;i++){let prev=skyRoute(0,i);for(let t=.1;t<100;t+=.1){const p=skyRoute(t,i);assert.ok(p.y>=26&&p.y<=80);assert.ok(Math.hypot(p.x,p.z)<=161);assert.ok(Math.hypot(p.x-prev.x,p.z-prev.z)<3);prev=p;}}
 let p={x:13072,y:30,z:-9141};for(let i=0;i<20000;i++){p=stepSkimmer(p,i*.001,1,1,i%500<250?1:-1,.1);assert.ok(Math.hypot(p.x-13200,p.z+9200)<=185.00001);assert.ok(p.y>=26&&p.y<=115);}
 assert.deepEqual([...validAtlas(['academy','oops','academy','summit'])],['academy','summit']);
});
test('static batching preserves every transformed vertex and keeps animated or transparent objects independent',()=>{
 const root=new T.Group(),mat=new T.MeshStandardMaterial(),dynamic=new T.Group();root.position.set(100,2,-80);root.add(dynamic);
 const originals=[];
 for(let i=0;i<4;i++){const o=new T.Mesh(new T.BoxGeometry(1,2,3),mat);o.position.set(i*2,0,0);o.rotation.y=i*.2;o.castShadow=o.receiveShadow=true;root.add(o);originals.push(o);}
 const moving=new T.Mesh(new T.BoxGeometry(),mat);dynamic.add(moving);
 const translucent=new T.Mesh(new T.BoxGeometry(),new T.MeshStandardMaterial({transparent:true,opacity:.2}));root.add(translucent);
 root.updateWorldMatrix(true,true);const before=[];for(const o of originals){const g=o.geometry.toNonIndexed().applyMatrix4(o.matrix);before.push(...g.attributes.position.array);}
 const result=batchStatic(root,{exclude:[dynamic]});assert.equal(result.removed,4);assert.equal(result.batches,1);assert.equal(moving.parent,dynamic);assert.equal(translucent.parent,root);
 const batch=root.children.find(o=>o.name==='Static / spatial batch');const after=[...batch.geometry.attributes.position.array];assert.equal(after.length,before.length);after.forEach((v,i)=>assert.ok(Math.abs(v-before[i])<1e-4));assert.ok(batch.castShadow&&batch.receiveShadow);
});
test('city partition preserves all triangle attributes and gives each chunk tight bounds',()=>{
 const v=new Float32Array([0,0,0,0,1,0,0,0, 1,0,0,0,1,0,1,0, 0,0,1,0,1,0,0,1, 100,0,0,0,1,0,0,0, 101,0,0,0,1,0,1,0, 100,0,1,0,1,0,0,1]);
 const chunks=partitionCity(v,48);assert.equal(chunks.length,2);const all=chunks.flatMap(g=>[...g.index.array]).sort((a,b)=>a-b);assert.deepEqual(all,[0,1,2,3,4,5]);assert.ok(chunks.every(g=>g.boundingSphere.radius<1));assert.equal(chunks[0].attributes.position.data,chunks[1].attributes.position.data);
});
test('vertex deduplication is exact and retains distinct UV seams',()=>{
 const a=[0,0,0,0,1,0,0,0],b=[1,0,0,0,1,0,1,0],c=[0,0,1,0,1,0,0,1],seam=[...a];seam[6]=.5;
 const data=new Float32Array([...a,...b,...c,...a,...b,...c,...seam,...b,...c]);const parts=partitionCity(data);assert.equal(parts.length,1);const g=parts[0],buffer=g.attributes.position.data;assert.equal(buffer.count,4);
 const actual=[];for(const i of g.index.array)actual.push(...buffer.array.subarray(i*8,i*8+8));assert.deepEqual(actual,[...data]);
});
test('light pool retains every light that can influence the view, including a light behind the camera with sufficient range',()=>{
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(60,1,.1,500);
 for(let i=0;i<25;i++){const l=new T.PointLight(0xffddaa,10,3,2);l.position.set(0,1,-10-i);scene.add(l);}
 const behind=new T.PointLight(0x123456,7,30);behind.position.z=5;scene.add(behind);
 const offscreen=new T.PointLight(0xffffff,100,2);offscreen.position.set(100,0,-5);scene.add(offscreen);
 const pool=createLightPool(scene,8);pool.update(camera);assert.equal(pool.active,26);assert.equal(pool.capacity,32);assert.ok(pool.sources.every(o=>o.visible===false));
 assert.equal(scene.children.filter(o=>o.isPointLight&&o.visible&&o.intensity>0).length,26);
 behind.intensity=0;pool.update(camera);assert.equal(pool.active,25);
});
test('native GLB and the offline wrapper agree, contain three real model roots, and use shared meshes',()=>{
 const glb=fs.readFileSync(new URL('../models/worlds.glb',import.meta.url));assert.equal(glb.toString('ascii',0,4),'glTF');
 const json=JSON.parse(glb.subarray(20,20+glb.readUInt32LE(12)));for(const name of ['CITY_LANDMARKS','LUMEN_LANDMARKS','MACHINE_LANDMARKS','ANIM_HOVER_TEMPLATE'])assert.ok(json.nodes.some(n=>n.name===name));
 assert.ok(json.meshes.length<100);assert.ok(json.nodes.length>4000);const wrapper=fs.readFileSync(new URL('../walk/landmarks.js',import.meta.url),'utf8');assert.ok(glb.equals(Buffer.from(JSON.parse(wrapper.slice(wrapper.indexOf('=')+1,-1)),'base64')));
 assert.ok(json.meshes.find(m=>m.name.includes('continuous terrain')).primitives.every(p=>p.attributes.COLOR_0!==undefined));
});
test('surface visibility preserves transforms and child quest visibility, activates approaching worlds, and always retains globes and trains',()=>{
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(),city=new T.Group(),planet=new T.Group(),hidden=new T.Mesh(new T.BoxGeometry(),new T.MeshBasicMaterial());
 city.position.set(60,0,-235);city.add(new T.Mesh(new T.BoxGeometry(50,20,50),new T.MeshBasicMaterial()));scene.add(city);planet.position.set(6400,0,-4600);planet.add(new T.Mesh(new T.BoxGeometry(50,20,50),new T.MeshBasicMaterial()),hidden);hidden.visible=false;scene.add(planet);
 const globe=new T.Mesh(new T.SphereGeometry(1700),new T.MeshBasicMaterial()),train=new T.Group();train.add(new T.Mesh(new T.BoxGeometry(5,5,30),new T.MeshBasicMaterial()));scene.add(globe,train);scene.updateMatrixWorld(true);const before=city.matrixWorld.clone();
 const visibility=createWorldVisibility(scene,{exclude:[train]});visibility.update(camera);scene.updateMatrixWorld(true);assert.deepEqual(city.matrixWorld.elements,before.elements);assert.ok(city.parent.visible);assert.equal(planet.parent.visible,false);assert.ok(globe.visible);assert.equal(train.parent,scene);
 camera.position.set(5000,100,-4600);visibility.update(camera);assert.deepEqual(visibility.active,['planet']);assert.ok(planet.parent.visible);assert.equal(hidden.visible,false);assert.ok(globe.visible);
});
