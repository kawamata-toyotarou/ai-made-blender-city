import test from 'node:test';import assert from 'node:assert/strict';import * as T from '../vendor/three.module.js';
import {createMachineWorld} from '../src/machine-world.js';import {MACHINE,MACHINE_STOP} from '../src/journey.mjs';import {createQuest,repairReactor} from '../src/adventure.mjs';import {createAdventure} from '../src/adventure-world.js';
globalThis.document={createElement(){return {getContext(){return {fillRect(){},fillText(){}};}};}};
test('machine planet has an open dock, reachable repair bays and parts, and a gate that opens after repair',()=>{
 const w=createMachineWorld(new T.Scene()),q=createQuest(null),blocked=(x,z)=>w.blocked(MACHINE.x+x,MACHINE.z+z,0,q);
 assert.equal(w.blocked(MACHINE_STOP.exit[0],MACHINE_STOP.exit[2],0,q),false);
 assert.ok(blocked(0,16.5));q.reactors=[0,1,2];assert.equal(blocked(0,16.5),false);assert.equal(blocked(0,4),false);
 const reached=new Set(),queue=[[-131,5]],key=(x,z)=>`${x},${z}`;reached.add(key(-131,5));
 for(let i=0;i<queue.length;i++){const [x,z]=queue[i];for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=x+dx,nz=z+dz,k=key(nx,nz);if(!reached.has(k)&&!blocked(nx,nz)){reached.add(k);queue.push([nx,nz]);}}}
 for(const c of w.cells)assert.ok(reached.has(key(Math.round(c.x),Math.round(c.z))),`part ${c.id}`);
 for(const r of w.reactors)assert.ok(reached.has(key(r.x,r.z+8)),`reactor ${r.id}`);
 assert.equal(w.robots.length,8);assert.equal(w.drones.length,6);assert.ok(w.root.children.some(o=>o.isInstancedMesh));
 assert.ok(Math.abs(w.floorHeight(MACHINE.x-101,MACHINE.z+25,.8)-.7)<.001);assert.equal(w.floorHeight(MACHINE.x-101,MACHINE.z+25,0),0);
 assert.equal(w.blocked(MACHINE.x-101,MACHINE.z+25,.8,q),false);assert.equal(w.blocked(MACHINE.x-101,MACHINE.z+25,0,q),true);
});
test('actual world drones can all be hit from clear lines of sight and the complete mission can be finished',()=>{
 const scene=new T.Scene(),w=createMachineWorld(scene),q=createQuest({cells:[0,1,2]}),a=createAdventure(scene,w,q,()=>{}),camera=new T.PerspectiveCamera();let time=0;
 for(const d of w.drones){camera.position.set(MACHINE.x+d.home.x,1.72,MACHINE.z+d.home.z+22);camera.lookAt(MACHINE.x+d.home.x,2.3,MACHINE.z+d.home.z);camera.updateMatrixWorld(true);
  for(let i=0;i<3;i++)a.attack(camera,'machine',time++, (x,z,y)=>w.blocked(x,z,y,q));
  assert.ok(q.defeated.includes(d.id),`drone ${d.id}`);
 }
 for(let i=0;i<3;i++)repairReactor(q,i);assert.deepEqual(q.reactors,[0,1,2]);assert.equal(w.blocked(MACHINE.x,MACHINE.z+16.5,0,q),false);
});
test('a pulse passes over the low block between the repair street and the eastern cooling drone',()=>{
 const scene=new T.Scene(),w=createMachineWorld(scene),q=createQuest(null),a=createAdventure(scene,w,q,()=>{}),camera=new T.PerspectiveCamera();
 camera.position.set(MACHINE.x-35,1.72,MACHINE.z-26);camera.lookAt(MACHINE.x-25,2.3,MACHINE.z-42);camera.updateMatrixWorld(true);
 for(let i=0;i<3;i++)a.attack(camera,'machine',i,(x,z,y)=>w.blocked(x,z,y,q));assert.ok(q.defeated.includes(1));
});
