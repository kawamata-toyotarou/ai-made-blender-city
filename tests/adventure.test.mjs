import test from 'node:test';import assert from 'node:assert/strict';
import {createBody,requestJump,stepBody,createQuest,repairReactor,pulseTarget,replyFor,spareCells} from '../src/adventure.mjs';
import {createJourney,boardJourney,advanceJourney,leaveJourney,journeyDuration,nearStation,MACHINE_STOP,OUTER_RAIL_POINTS,PLANET_STOP} from '../src/journey.mjs';
test('jump rises and lands once, cannot jump again in air, and works on upper floors and Lumen',()=>{
 for(const world of ['city','planet','machine']){const b=createBody();stepBody(b,0,80,world);assert.ok(requestJump(b,world));assert.equal(requestJump(b,world),false);let peak=b.y;for(let i=0;i<240;i++){stepBody(b,1/60,80,world);peak=Math.max(peak,b.y);}assert.ok(peak>81);assert.equal(b.y,80);assert.ok(b.grounded);assert.equal(b.v,0);}
});
test('all three worlds are reachable in both directions, with correct docks and arrival state',()=>{
 const s=createJourney();assert.equal(boardJourney(s,'machine'),false);
 for(const destination of ['planet','machine','planet','city']){assert.ok(boardJourney(s,destination));advanceJourney(s,journeyDuration(s));assert.equal(s.mode,'arrived');assert.ok(leaveJourney(s));assert.equal(s.world,destination);}
 assert.deepEqual(OUTER_RAIL_POINTS[0],[PLANET_STOP.x,PLANET_STOP.y,PLANET_STOP.z]);assert.deepEqual(OUTER_RAIL_POINTS.at(-1),[MACHINE_STOP.x,MACHINE_STOP.y,MACHINE_STOP.z]);
 s.world='machine';assert.ok(nearStation(s,...[MACHINE_STOP.exit[0],MACHINE_STOP.exit[2]]));
});
test('repair mission requires stopped drones and a collected part, then unlocks the archive',()=>{
 const q=createQuest({cells:[0,0,1,'bad'],defeated:[],reactors:[]});assert.equal(q.cells.length,2);
 repairReactor(q,0);assert.equal(q.reactors.length,0);q.defeated=[0,1,2,3,4,5];q.cells=[0,1,2];
 for(let i=0;i<3;i++){repairReactor(q,i);assert.equal(q.reactors.length,i+1);}assert.equal(spareCells(q),0);repairReactor(q,0);assert.equal(q.reactors.length,3);
 const empty=createQuest(null);empty.defeated=[0,1];repairReactor(empty,0);assert.equal(empty.reactors.length,0);
});
test('pulse hits the nearest aimed target, obeys range and walls, and misses off-axis targets',()=>{
 const o={x:0,y:1.7,z:0},d={x:0,y:0,z:-1},near={x:0,y:1.8,z:-5},far={x:0,y:1.8,z:-10};
 assert.equal(pulseTarget(o,d,[far,near],()=>false),near);assert.equal(pulseTarget(o,d,[near],(x,z)=>z< -2),null);
 assert.equal(pulseTarget(o,d,[{...near,x:3},{...near,z:-30}],()=>false),null);
});
test('fixed conversations explain controls, travel and current repair progress without a network service',()=>{
 const q=createQuest(null);assert.match(replyFor('案内機','行き先',q,'machine'),/NEXUS-9/);assert.match(replyFor('技師','ジャンプ',q),/Space/);q.reactors=[0,1];assert.match(replyFor('技師','仕事',q,'machine'),/2\/3/);
});
