import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import zlib from 'node:zlib';
import {blockedAt,roomAt} from '../src/simulation.mjs';
const text=fs.readFileSync(new URL('../walk/data.js',import.meta.url),'utf8');const assets=JSON.parse(text.slice(text.indexOf('=')+1,-1));const world=assets.meta;
test('all eight rendered entrances lead into real interior floor space',()=>{
 assert.equal(world.interiors.length,8);
 const doors=world.interiors.map(r=>({...r,open:1}));
 for(const r of doors){for(const u of [-2,-1,0,1,2,3]){const x=r.front+r.side*u,z=-r.doorY;assert.equal(blockedAt(x,z,world.colliders,doors,[]),false,`${r.label} at ${u}`);}assert.equal(roomAt(doors,r.front+r.side*3,-r.doorY).id,r.id);}
});
test('vehicle data has separate body and rotating wheel buffers with valid materials',()=>{
 const b=zlib.gunzipSync(Buffer.from(assets.vehicles,'base64'));let p=4;const parts=new Set();
 for(let i=0;i<b.readUInt32LE(0);i++){const part=b.readUInt32LE(p),mi=b.readUInt32LE(p+4),n=b.readUInt32LE(p+8);parts.add(part);assert.ok(mi<world.materials.length);assert.equal(n%3,0);for(let j=0;j<n;j++){const a=p+12+j*32;assert.ok(Math.abs(b.readFloatLE(a))<2.5);assert.ok(Math.abs(b.readFloatLE(a+4))<3);assert.ok(Math.abs(b.readFloatLE(a+8))<3.5);}p+=12+n*32;}
 assert.equal(p,b.length);assert.deepEqual([...parts].sort(),[0,1,2,3,4]);
});
test('static geometry is complete and no longer includes baked car obstacles',()=>{
 assert.equal(world.revision,2);assert.equal(world.colliders.some(b=>b.w===2&&b.d===4.7),false);
 const b=zlib.gunzipSync(Buffer.from(assets.city,'base64'));let p=4;for(let i=0;i<b.readUInt32LE(0);i++){const mi=b.readUInt32LE(p),n=b.readUInt32LE(p+4);assert.ok(mi<world.materials.length);assert.equal(n%3,0);p+=8+n*32;}assert.equal(p,b.length);
});
