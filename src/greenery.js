import * as T from '../vendor/three.module.js';
export const windTime={value:0};
const stampPixels=new Uint8Array(64*64*4);
for(let y=0;y<64;y++)for(let x=0;x<64;x++){const i=(y*64+x)*4,d=Math.hypot((x-31.5)/32,(y-31.5)/32);stampPixels[i+3]=Math.max(0,Math.pow(Math.max(0,1-d),1.7)*120);}
const contactMap=new T.DataTexture(stampPixels,64,64);contactMap.needsUpdate=true;
export const contactMaterial=new T.MeshBasicMaterial({map:contactMap,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
// Shared geometry keeps all the branch and crown clusters in three draw calls.
export function createGrove(parent){
 const trees=[],geo=new T.SphereGeometry(1,9,7),branchGeo=new T.CylinderGeometry(.6,1,1,7);
 const leaf=new T.MeshStandardMaterial({color:0x507943,roughness:.94});
 leaf.onBeforeCompile=shader=>{shader.uniforms.windTime=windTime;shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nuniform float windTime;').replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed.x += sin(windTime*1.4 + transformed.y*2.5)*.035;');};
 const wood=new T.MeshStandardMaterial({color:0x645340,roughness:.93});
 leaf.userData.groveOwned=wood.userData.groveOwned=true;
 function add(x,z,h=5,y=0){trees.push({x,z,h,y});}
 function finish(){
  if(!trees.length)return;
  const crowns=new T.InstancedMesh(geo,leaf,trees.length*23),branches=new T.InstancedMesh(branchGeo,wood,trees.length*6),o=new T.Object3D(),up=new T.Vector3(0,1,0);let ci=0,bi=0;
  for(const [idx,t] of trees.entries()){
   const {x,z,h,y}=t;
   for(let j=0;j<6;j++){
    const a=j*2.399+idx*.5,start=new T.Vector3(x,y+h*(j? .36:0),z),end=new T.Vector3(x+(j?Math.cos(a)*h*.22:0),y+h*(j?.72:.7),z+(j?Math.sin(a)*h*.22:0)),delta=end.clone().sub(start);
    o.position.copy(start).add(end).multiplyScalar(.5);o.quaternion.setFromUnitVectors(up,delta.clone().normalize());o.scale.set(h*(j?.026:.045),delta.length(),h*(j?.026:.045));o.updateMatrix();branches.setMatrixAt(bi++,o.matrix);
   }
   for(let j=0;j<23;j++){
    const a=j*2.399+idx*.7,r=h*.27*Math.sqrt((j%11)/10),height=h*(.62+.24*((j*7)%13)/13);
    o.position.set(x+Math.cos(a)*r,y+height,z+Math.sin(a)*r);o.rotation.set(j*.2,j*.4,0);o.scale.set(h*(.13+(j%3)*.02),h*.18,h*.14);o.updateMatrix();crowns.setMatrixAt(ci,o.matrix);
    crowns.setColorAt(ci++,new T.Color().setHSL(.24+(j%5)*.014,.29,.3+(j%4)*.055));
   }
  }
  crowns.name='Grove / layered crowns';branches.name='Grove / tapered branches';
  crowns.castShadow=branches.castShadow=true;crowns.receiveShadow=branches.receiveShadow=true;parent.add(crowns,branches);
  const shadows=new T.InstancedMesh(new T.PlaneGeometry(1,1),contactMaterial,trees.length);trees.forEach((t,i)=>{o.position.set(t.x,t.y+.145,t.z);o.rotation.set(-Math.PI/2,0,0);o.scale.set(t.h*.8,t.h*.8,1);o.updateMatrix();shadows.setMatrixAt(i,o.matrix);});shadows.name='Tree contact shadows';parent.add(shadows);
  return {crowns,branches};
 }
 return {add,finish,trees};
}
