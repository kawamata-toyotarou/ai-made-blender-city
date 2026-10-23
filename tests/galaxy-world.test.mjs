import test from 'node:test';import assert from 'node:assert/strict';
import * as T from '../vendor/three.module.js';
import {createGalaxy} from '../src/galaxy-world.js';
import {PLANET,CITY_STOP,PLANET_STOP} from '../src/journey.mjs';
// Geometry/collision checks do not need a GPU. Canvas text is irrelevant to them.
globalThis.document={createElement(){return {width:0,height:0,getContext(){return {fillRect(){},strokeRect(){},fillText(){},putImageData(){},createImageData(w,h){return {data:new Uint8ClampedArray(w*h*4)};}};}};}};
test('the actual generated planet has an open arrival corridor and an enterable habitat',()=>{
 const g=createGalaxy(new T.Scene());
 for(let x=-111;x<=-57;x+=.5)assert.equal(g.blockedPlanet(PLANET.x+x,PLANET.z+5),false,`arrival at ${x}`);
 for(let x=-65;x<=-49;x+=.5)assert.equal(g.blockedPlanet(PLANET.x+x,PLANET.z-3),false,`habitat entrance at ${x}`);
 assert.equal(g.blockedPlanet(PLANET.x-36,PLANET.z-3),true); // Far wall of habitat.
 assert.equal(g.blockedPlanet(PLANET.x+206,PLANET.z),true);
 assert.equal(g.floorHeight(PLANET.x-46,PLANET.z-3),0);
 g.setTrain(0);assert.ok(g.train.position.distanceTo(new T.Vector3(CITY_STOP.x,CITY_STOP.y,CITY_STOP.z))<1e-6);
 g.setTrain(1);assert.ok(g.train.position.distanceTo(new T.Vector3(PLANET_STOP.x,PLANET_STOP.y,PLANET_STOP.z))<1e-6);
 assert.ok(g.planetColliders.length>40);
});
