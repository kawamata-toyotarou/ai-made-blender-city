import test from 'node:test';import assert from 'node:assert/strict';
import {cleanProps,canPlaceProp,boatBlocked,stepBoat,BOAT_DOCK,MAX_PROPS} from '../src/sandbox.mjs';
import * as T from '../vendor/three.module.js';
import {createSandbox} from '../src/sandbox-world.js';
test('garden placement protects roads, water, building footprints and clearance between objects',()=>{
 const p={type:'tree',x:173,z:113,rotation:0};
 assert.ok(canPlaceProp(p,[],()=>false));
 assert.equal(canPlaceProp({...p,x:150},[],()=>false),false);
 assert.equal(canPlaceProp({...p,x:-300},[],()=>false),false);
 assert.equal(canPlaceProp(p,[],(x,z)=>x>172&&z>112),false);
 assert.equal(canPlaceProp(p,[{...p,x:175}],()=>false),false);
 assert.equal(canPlaceProp(p,Array.from({length:MAX_PROPS},()=>({...p,x:200})),()=>false),false);
});
test('stored garden data cannot create unknown, excessive or nonfinite geometry',()=>{
 const p={type:'lamp',x:170,z:110,rotation:10,unwanted:'ignored'};
 assert.deepEqual(cleanProps([p,{...p,x:Infinity},{...p,type:'unknown'},null]),[{type:'lamp',x:170,z:110,rotation:10%(Math.PI*2)}]);
 assert.equal(cleanProps(Array(100).fill(p)).length,MAX_PROPS);assert.deepEqual(cleanProps({}),[]);
});
test('boat moves, reverses and stays in water before bridges over a long drive',()=>{
 let p={...BOAT_DOCK,yaw:0};const start=p.z;
 p=stepBoat(p,p.yaw,1,0,.1);assert.ok(p.z<start);
 p=stepBoat(p,p.yaw,-1,0,.1);assert.equal(p.z,start);
 for(let i=0;i<2000;i++){p=stepBoat(p,p.yaw,1,0,.1);assert.ok(!boatBlocked(p.x,p.z));}
 assert.ok(p.z>30);const still=stepBoat(p,p.yaw,1,1,-1);assert.equal(still.z,p.z);
});
test('placed gardens survive reload, support remove/undo and reject invalid imports atomically',()=>{
 const storage=new Map();globalThis.localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)};
 const s=createSandbox(new T.Scene()),p={type:'fountain',x:173,z:113,rotation:0};
 assert.ok(s.place(p,()=>false).ok);assert.equal(s.items.length,1);
 assert.equal(s.place(p,()=>false).ok,false);
 const reloaded=createSandbox(new T.Scene());assert.deepEqual(reloaded.items,[p]);
 reloaded.remove(173,113);assert.equal(reloaded.items.length,0);reloaded.restore();assert.deepEqual(reloaded.items,[p]);
 reloaded.load([{...p,x:150}],()=>false);assert.deepEqual(reloaded.items,[p]);
 const imported={...p,type:'lamp',x:173,z:101};reloaded.load([imported],()=>false);assert.deepEqual(reloaded.items,[imported]);
 reloaded.restore();assert.deepEqual(reloaded.items,[p]);
 assert.deepEqual(JSON.parse(storage.get('aurora-garden-v6')),[p]);
 delete globalThis.localStorage;
});
