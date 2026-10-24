import test from 'node:test';import assert from 'node:assert/strict';
import * as T from '../vendor/three.module.js';
import {createDistricts} from '../src/district-world.js';
import {DISTRICT_PLACES,droneHeight,validStamps,districtAt} from '../src/freedom.mjs';
globalThis.document={createElement(){return {width:0,height:0,getContext(){return {fillRect(){},strokeRect(){},fillText(){},beginPath(){},moveTo(){},lineTo(){},stroke(){}};}};}};
test('district geometry leaves travel destinations and business entrances accessible',()=>{
 const d=createDistricts(new T.Scene(),[{x:120,z:-200,w:22,d:25,h:35}]);
 for(const p of DISTRICT_PLACES)assert.equal(d.blocked(p.x,p.z),false,p.name);
 const shops=d.actions.filter(a=>a.kind==='stamp');assert.equal(shops.length,3);
 for(const p of shops){assert.equal(d.blocked(p.x,p.z),false,p.name);assert.ok(d.blocked(p.x+4.4,p.z-2.8));}
 assert.ok(d.blocked(-300,0));assert.equal(d.blocked(-300,25),false);
 assert.ok(d.actions.some(a=>a.kind==='seat'));assert.ok(d.batchCount<20);assert.ok(d.layout.reduce((n,b)=>n+b.items.length,0)>500);
});
test('drone altitude stays bounded, and stored stamps only accept supported IDs',()=>{
 assert.equal(droneHeight(219,1,1),220);assert.equal(droneHeight(3,-1,.25),3);assert.equal(droneHeight(20,1,-1),20);
 assert.deepEqual([...validStamps(['canal-cafe','canal-cafe','unknown',1])],['canal-cafe']);assert.equal(validStamps({}).size,0);
 assert.match(districtAt(-290,0),/運河/);assert.match(districtAt(-150,-230),/メイカーズ/);assert.match(districtAt(210,70),/マーケット/);
});
