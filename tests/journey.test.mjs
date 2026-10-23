import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as T from '../vendor/three.module.js';
import {createJourney,boardJourney,advanceJourney,leaveJourney,JOURNEY_SECONDS,routeProgress,forwardFromFeet,headingForMotion,terrainHeight,withinPlanet,CITY_STOP,PLANET_STOP,RAIL_POINTS} from '../src/journey.mjs';
const t=fs.readFileSync(new URL('../walk/data.js',import.meta.url),'utf8');
const assets=JSON.parse(t.slice(t.indexOf('=')+1,-1));
function skeleton(encoded){
 const b=Buffer.from(encoded,'base64'),j=JSON.parse(b.subarray(20,20+b.readUInt32LE(12)).toString());
 const nodes=j.nodes.map(n=>{const o=new T.Object3D();o.name=n.name||'';if(n.matrix)o.applyMatrix4(new T.Matrix4().fromArray(n.matrix));else{if(n.translation)o.position.fromArray(n.translation);if(n.rotation)o.quaternion.fromArray(n.rotation);if(n.scale)o.scale.fromArray(n.scale);}return o;});
 j.nodes.forEach((n,i)=>(n.children||[]).forEach(k=>nodes[i].add(nodes[k])));const g=new T.Group();j.scenes[j.scene||0].nodes.forEach(i=>g.add(nodes[i]));return g;
}
test('actual embedded character skeletons face their travel direction in both lanes',()=>{
 const axes=[forwardFromFeet(skeleton(assets.human),T.Vector3),forwardFromFeet(skeleton(assets.civilian),T.Vector3)];
 assert.ok(axes[0].z<-.9);assert.ok(axes[1].z>.9); // Regression: the two models have opposite source axes.
 for(const source of axes)for(const dir of [-1,1]){
  const yaw=headingForMotion(0,-dir,source.x,source.z),front=new T.Vector3(source.x,0,source.z).applyAxisAngle(new T.Vector3(0,1,0),yaw);
  assert.ok(front.dot(new T.Vector3(0,0,-dir))>.9999);
 }
});
test('the complete outward and return rides arrive, require disembarkation, and allow reboarding',()=>{
 const s=createJourney();assert.equal(leaveJourney(s),false);assert.equal(boardJourney(s),true);assert.equal(boardJourney(s),false);
 advanceJourney(s,JOURNEY_SECONDS-1);assert.equal(s.mode,'riding');assert.equal(leaveJourney(s),false);
 advanceJourney(s,1);assert.equal(s.mode,'arrived');assert.equal(s.progress,1);assert.equal(leaveJourney(s),true);assert.equal(s.world,'planet');
 boardJourney(s);advanceJourney(s,JOURNEY_SECONDS+10);assert.equal(s.mode,'arrived');assert.equal(s.progress,0);leaveJourney(s);assert.equal(s.world,'city');
});
test('rail timing stays monotonic and both docks meet the actual track endpoints',()=>{
 let p=-1;for(let i=0;i<=1000;i++){const next=routeProgress(i/1000);assert.ok(next>=p&&next<=1);p=next;}
 assert.deepEqual(RAIL_POINTS[0],[CITY_STOP.x,CITY_STOP.y,CITY_STOP.z]);assert.deepEqual(RAIL_POINTS.at(-1),[PLANET_STOP.x,PLANET_STOP.y,PLANET_STOP.z]);
 assert.equal(routeProgress(-1),0);assert.equal(routeProgress(2),1);
});
test('the landing zone has a level approach and a bounded continuous walkable landscape',()=>{
 assert.equal(terrainHeight(-111,5),0);assert.ok(withinPlanet(-111,5));assert.equal(withinPlanet(220,0),false);
 for(let x=-180;x<180;x+=4)for(let z=-180;z<180;z+=4){assert.ok(Number.isFinite(terrainHeight(x,z)));assert.ok(Math.abs(terrainHeight(x+.01,z)-terrainHeight(x,z))<.01);}
});
