import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import * as T from '../vendor/three.module.js';
import {createActivities,JOBS,TERMINALS,CARDS,terminal,usePost,collectCard,createToneSession,pressTone,TONE_SEQUENCES,circuitStart,circuitSolution,flipCircuit,recordCircuit,navigation,mapProjection} from '../src/activities.mjs';
import {createExpansion} from '../src/expansion-world.js';import {createDistricts} from '../src/district-world.js';import {createGalaxy} from '../src/galaxy-world.js';import {createMachineWorld} from '../src/machine-world.js';
import {landmarkBlocked} from '../src/landmark-physics.mjs';import {OFFSETS} from '../src/atlas.mjs';import {applySurfaceDetail} from '../src/surface-detail.js';
import {GLTFLoader} from '../vendor/loaders/GLTFLoader.js';import {createActivityWorld} from '../src/activities-world.js';
const layout=JSON.parse(fs.readFileSync(new URL('../src/landmark-layout.json',import.meta.url)));
globalThis.document={createElement(){return {width:0,height:0,getContext(){return {createImageData(w,h){return {data:new Uint8ClampedArray(w*h*4)};},putImageData(){},fillRect(){},strokeRect(){},fillText(){},beginPath(){},moveTo(){},lineTo(){},stroke(){}};}};}};
test('three delivery jobs require the correct destination, survive save/reload and award each completion once',()=>{
 let state=createActivities(null);for(const j of JOBS){assert.ok(usePost(state,j.from).changed);assert.equal(state.activeDelivery,j.id);assert.equal(usePost(state,j.from).delivered,undefined);state=createActivities(JSON.parse(JSON.stringify(state)));assert.ok(usePost(state,j.to).delivered);assert.equal(state.activeDelivery,null);}
 assert.equal(state.delivered.length,3);assert.equal(state.deliveryCount,3);usePost(state,JOBS[0].from);usePost(state,JOBS[0].to);assert.equal(state.delivered.length,3);assert.equal(state.deliveryCount,4);
 const route=JOBS[2];assert.equal(terminal(route.from).world,'machine');assert.equal(terminal(route.to).world,'city');
});
test('new activity records validate untrusted imported values and collectible cards cannot duplicate',()=>{
 const s=createActivities({activeDelivery:'bad',delivered:['bad',JOBS[0].id,JOBS[0].id],deliveryCount:Infinity,cards:['bad',CARDS[0].id,CARDS[0].id],tonesWon:'yes',circuits:[-1,0,0,2,'1'],circuitBest:[-1,5,Infinity]});assert.equal(s.activeDelivery,null);assert.equal(s.delivered.length,1);assert.equal(s.deliveryCount,0);assert.deepEqual(s.cards,[CARDS[0].id]);assert.equal(s.tonesWon,false);assert.deepEqual(s.circuits,[0,2]);assert.deepEqual(s.circuitBest,[null,5,null]);assert.equal(collectCard(s,CARDS[0].id),false);assert.equal(collectCard(s,'unknown'),false);assert.ok(collectCard(s,CARDS[1].id));
});
test('memory game blocks input during playback, retries mistakes, and completes all three real melodies',()=>{
 const s=createToneSession();assert.equal(pressTone(s,0),'ignored');s.mode='input';assert.equal(pressTone(s,3),'miss');assert.equal(s.cursor,0);assert.equal(s.level,0);assert.equal(s.mistakes,1);
 for(let i=0;i<3;i++){s.mode='input';for(const t of TONE_SEQUENCES[i])pressTone(s,t);assert.equal(s.level,i+1);}assert.equal(s.mode,'won');assert.equal(pressTone(s,0),'ignored');
});
test('every circuit board is solvable, hints reach the goal, and toggling twice reverses the same change',()=>{
 const state=createActivities();for(let level=0;level<3;level++){let mask=circuitStart(level);assert.notEqual(mask,511);const path=circuitSolution(mask);assert.ok(path.length>0&&path.length<=9);for(const i of path)mask=flipCircuit(mask,i);assert.equal(mask,511);assert.ok(recordCircuit(state,level,path.length));recordCircuit(state,level,path.length+10);assert.equal(state.circuitBest[level],path.length);}
 assert.equal(state.circuits.length,3);for(let i=0;i<9;i++)assert.equal(flipCircuit(flipCircuit(173,i),i),173);assert.equal(flipCircuit(13,9),13);assert.equal(recordCircuit(state,7,1),false);
});
test('navigation uses relative world coordinates and stays valid after arbitrary camera rotations',()=>{
 assert.equal(navigation({world:'city',x:10,z:0,name:'east'},'city',{x:0,z:0},0).arrow,'→');assert.equal(navigation({world:'city',x:0,z:-10,name:'north'},'city',{x:0,z:0},Math.PI/2).arrow,'→');
 assert.equal(navigation({world:'planet',x:0,z:0,name:'port'},'planet',{x:6410,z:-4600},0).distance,10);assert.ok(navigation({world:'machine',x:0,z:0},'city',{x:0,z:0}).otherWorld);
 for(const yaw of [-1000,-100,100,1000])assert.ok(navigation({world:'city',x:3,z:4},'city',{x:0,z:0},yaw).arrow);
 for(const world of ['city','planet','machine'])for(const t of TERMINALS.filter(p=>p.world===world)){const q=mapProjection(world,620,430).point(t.x,t.z);assert.ok(q[0]>=0&&q[0]<=620&&q[1]>=0&&q[1]<=430);}
});
test('new postal and puzzle approaches are clear in the actual city, Lumen and machine world geometry',()=>{
 const scene=new T.Scene(),expansion=createExpansion(scene,[],[],new T.Group()),districts=createDistricts(scene,expansion.buildings),galaxy=createGalaxy(scene),machine=createMachineWorld(scene);
 for(const t of TERMINALS){const [ox,oz]=OFFSETS[t.world],x=ox+t.x,z=oz+t.z+3.1;assert.equal(landmarkBlocked(layout,t.world,x,z,0),false,t.id+' native landmark');
  if(t.world==='city'){assert.equal(expansion.blocked(x,z,null),false,t.id);assert.equal(districts.blocked(x,z),false,t.id);}else if(t.world==='planet')assert.equal(galaxy.blockedPlanet(x,z),false,t.id);else assert.equal(machine.blocked(x,z,0),false,t.id);
 }
 for(const c of CARDS){const [ox,oz]=OFFSETS[c.world];assert.equal(landmarkBlocked(layout,c.world,ox+c.x,oz+c.z,c.floor||0),false,c.id);}
});
test('Blender activity asset is self-contained, shares meshes, includes all game props and fits a small payload budget',()=>{
 const b=fs.readFileSync(new URL('../models/activities.glb',import.meta.url)),j=JSON.parse(b.subarray(20,20+b.readUInt32LE(12)));assert.equal(b.toString('ascii',0,4),'glTF');assert.ok(b.length<400000);assert.ok(j.meshes.length<30);
 for(const c of CARDS)assert.ok(j.nodes.some(n=>n.name==='ANIM_CARD_'+c.id));for(let i=0;i<9;i++)assert.ok(j.nodes.some(n=>n.name==='ANIM_CIRCUIT_PAD_'+i));assert.ok(j.nodes.some(n=>n.name==='TONE_CONSOLE'));assert.ok(!j.buffers.some(b=>b.uri));
});
test('PBR surface detail shares its texture and adds relief and roughness without extra rendering passes',()=>{
 const root=new T.Group(),m=new T.MeshStandardMaterial({metalness:.8,roughness:.4});root.add(new T.Mesh(new T.BoxGeometry(),m));const texture=applySurfaceDetail(root),other=applySurfaceDetail(new T.Group());assert.equal(texture,other);assert.equal(texture.image.width,256);const shader={uniforms:{},vertexShader:'#include <common>\n#include <begin_vertex>',fragmentShader:'#include <common>\n#include <color_fragment>\n#include <roughnessmap_fragment>\n#include <normal_fragment_maps>'};m.onBeforeCompile(shader);assert.match(shader.fragmentShader,/auroraRelief/);assert.match(shader.fragmentShader,/roughnessFactor=clamp/);assert.equal(shader.uniforms.surfaceGrain.value,texture);
});
test('the actual Blender model loads, animates, exposes usable terminals and finds a card using the live camera',async()=>{
 const b=fs.readFileSync(new URL('../models/activities.glb',import.meta.url)),buffer=b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),state=createActivities();
 const parse=bytes=>new Promise((resolve,reject)=>new GLTFLoader().parse(bytes,'',resolve,reject)),world=await createActivityWorld(new T.Scene(),parse,buffer,state),camera=new T.PerspectiveCamera();
 camera.position.set(60,.09+1.72,-214);assert.equal(world.update(0,'city',camera,true,238).id,'campus');assert.equal(world.update(0,'city',camera,false,238),undefined);
 state.cards.push('campus');assert.equal(world.update(1,'city',camera,true,511),undefined);assert.equal(world.cards[0].ob.visible,false);assert.equal(world.pads.length,9);
 assert.equal(world.blocked('city',-203,66),true);assert.equal(world.blocked('city',-203,69.1),false);assert.equal(world.nearby('city',{x:-203,z:69.1}).id,'city-post');
 for(const [x,y,z] of layout.trail)assert.equal(world.blocked('city',x,z,y-.05),false,'hiking trail remains clear');
});
