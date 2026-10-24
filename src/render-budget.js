import * as T from '../vendor/three.module.js';
import {mergeGeometries} from '../vendor/utils/BufferGeometryUtils.js';

// Retain every original attribute value and group triangle indices by location.
// Bounds are computed from referenced vertices (Three's default would include
// the entire shared position buffer and defeat the partition).
export function partitionCity(values,cell=48){
 // Exact bitwise deduplication includes normal and UV, so hard edges and texture
 // seams stay intact. This improves vertex cache reuse without simplifying a face.
 const raw=new Uint16Array(values.buffer,values.byteOffset,values.length*2),map=new Map(),remap=new Uint32Array(values.length/8),unique=new Float32Array(values.length);let count=0;
 for(let i=0;i<remap.length;i++){const key=String.fromCharCode(...raw.subarray(i*16,i*16+16));let index=map.get(key);if(index===undefined){index=count++;map.set(key,index);unique.set(values.subarray(i*8,i*8+8),index*8);}remap[i]=index;}
 const vertices=unique.slice(0,count*8);
 const bins=new Map();
 for(let i=0;i<values.length/8;i+=3){const x=(values[i*8]+values[(i+1)*8]+values[(i+2)*8])/3,z=(values[i*8+2]+values[(i+1)*8+2]+values[(i+2)*8+2])/3,key=Math.floor(x/cell)+','+Math.floor(z/cell);if(!bins.has(key))bins.set(key,[]);bins.get(key).push(remap[i],remap[i+1],remap[i+2]);}
 const buffer=new T.InterleavedBuffer(vertices,8),geometries=[],point=new T.Vector3();
 for(const indices of bins.values()){
  const g=new T.BufferGeometry();g.setAttribute('position',new T.InterleavedBufferAttribute(buffer,3,0));g.setAttribute('normal',new T.InterleavedBufferAttribute(buffer,3,3));g.setAttribute('uv',new T.InterleavedBufferAttribute(buffer,2,6));g.setIndex(indices);
  const bounds=new T.Box3();for(const i of indices)bounds.expandByPoint(point.set(vertices[i*8],vertices[i*8+1],vertices[i*8+2]));g.boundingBox=bounds;g.boundingSphere=bounds.getBoundingSphere(new T.Sphere());geometries.push(g);
 }
 return geometries;
}

// Merge only immutable opaque meshes. Positions, normals, UVs and shadow flags
// survive unchanged; spatial buckets retain useful frustum and shadow culling.
export function batchStatic(root,{exclude=[],cell=64}={}){
 root.updateWorldMatrix(true,true);
 const inverse=root.matrixWorld.clone().invert(),buckets=new Map(),skip=new Set(exclude),sources=[];
 const excluded=o=>{for(let p=o;p&&p!==root;p=p.parent)if(skip.has(p)||p.name.startsWith('ANIM_'))return true;return false;};
 root.traverse(o=>{
  if(!o.isMesh||o.isSkinnedMesh||o.isInstancedMesh||excluded(o)||!o.visible||Array.isArray(o.material)||o.material.transparent||o.morphTargetInfluences||o.children.length)return;
  const a=o.geometry.attributes;if(!a.position||!a.normal)return;
  const matrix=inverse.clone().multiply(o.matrixWorld),p=new T.Vector3().setFromMatrixPosition(matrix);
  const signature=Object.keys(a).sort().map(k=>k+':'+a[k].itemSize).join(',');
  const key=[o.material.uuid,o.castShadow,o.receiveShadow,signature,Math.floor(p.x/cell),Math.floor(p.z/cell)].join('/');
  let b=buckets.get(key);if(!b){b={items:[],material:o.material,cast:o.castShadow,receive:o.receiveShadow};buckets.set(key,b);}
  b.items.push({o,matrix});
 });
 let removed=0;
 for(const b of buckets.values()){
  if(b.items.length<2)continue;
  const geometries=b.items.map(({o,matrix})=>{const g=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();g.applyMatrix4(matrix);return g;});
  const geometry=mergeGeometries(geometries,false);for(const g of geometries)g.dispose();if(!geometry)continue;
  geometry.computeBoundingSphere();const mesh=new T.Mesh(geometry,b.material);mesh.name='Static / spatial batch';mesh.castShadow=b.cast;mesh.receiveShadow=b.receive;root.add(mesh);
  for(const {o} of b.items){o.removeFromParent();removed++;}sources.push(mesh);
 }
 return {removed,batches:sources.length};
}

export function createLightPool(scene,initialCapacity=16){
 const sources=[];scene.traverse(o=>{if(o.isPointLight){sources.push(o);o.visible=false;}});
 const pool=[],frustum=new T.Frustum(),matrix=new T.Matrix4(),sphere=new T.Sphere(),position=new T.Vector3();
 const grow=count=>{while(pool.length<count){const p=new T.PointLight(0xffffff,0,1,2);p.userData.pooledLight=true;scene.add(p);pool.push(p);}};grow(initialCapacity);
 let active=0;
 function update(camera){
  camera.updateMatrixWorld();frustum.setFromProjectionMatrix(matrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
  const visible=[];
  for(const source of sources){
   if(source.intensity<=0)continue;
   let hidden=false;for(let p=source.parent;p;p=p.parent)if(!p.visible){hidden=true;break;}if(hidden)continue;
   source.getWorldPosition(position);sphere.center.copy(position);sphere.radius=source.distance;
   if(source.distance===0||frustum.intersectsSphere(sphere))visible.push({source,position:position.clone()});
  }
  // Never discard an influencing light to meet a budget. Grow in stable blocks
  // instead of recompiling every material for a different light count per frame.
  if(visible.length>pool.length)grow(Math.ceil(visible.length/8)*8);
  pool.forEach((target,i)=>{const v=visible[i];target.intensity=v?v.source.intensity:0;if(v){target.position.copy(v.position);target.color.copy(v.source.color);target.distance=v.source.distance;target.decay=v.source.decay;}});active=visible.length;
 }
 return {update,get active(){return active;},get capacity(){return pool.length;},sources};
}

// A planetary surface is an independent destination. Keep all of its detail
// while exploring it, and activate approaching surfaces during rail travel.
// Globes, sky, long rails and moving trains stay outside these containers.
export function createWorldVisibility(scene,{exclude=[]}={}){
 const centers={city:new T.Vector3(0,0,-70),planet:new T.Vector3(6400,0,-4600),machine:new T.Vector3(13200,0,-9200)},containers=[],skip=new Set(exclude);
 scene.updateMatrixWorld(true);
 function visit(parent){
  const children=[...parent.children];
  for(const child of children){
   if(skip.has(child)||child.isCamera||child.userData.pooledLight||child.isDirectionalLight||child.isHemisphereLight)continue;
   const box=new T.Box3().setFromObject(child),center=new T.Vector3(),size=new T.Vector3();
   if(child.isPointLight){child.getWorldPosition(center);size.set(0,0,0);}
   else if(box.isEmpty())continue;else{box.getCenter(center);box.getSize(size);}
   if(size.length()>1800){if(child.children.length)visit(child);continue;}
   const world=Object.keys(centers).find(w=>Math.hypot(center.x-centers[w].x,center.z-centers[w].z)<850&&Math.abs(center.y)<600);
   if(!world){if(child.children.length)visit(child);continue;}
   const wrapper=new T.Group();wrapper.name='Surface visibility / '+world;parent.add(wrapper);wrapper.add(child);containers.push({wrapper,world});
  }
 }
 visit(scene);
 let active=[];
 function update(camera){active=Object.keys(centers).filter(w=>Math.hypot(camera.position.x-centers[w].x,camera.position.z-centers[w].z)<1800);const set=new Set(active);for(const {wrapper,world} of containers)wrapper.visible=set.has(world);}
 return {update,get active(){return active;}};
}
