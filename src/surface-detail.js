import * as T from '../vendor/three.module.js';
// One small shared texture gives newly authored surfaces fine grain without
// loading photographs or multiplying geometry. World mapping survives batching.
export function applySurfaceDetail(root){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d'),pixels=ctx.createImageData(128,128);let seed=8042;
 for(let i=0;i<128*128;i++){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const c=170+(seed>>>24)%66;pixels.data.set([c,c,c,255],i*4);}ctx.putImageData(pixels,0,0);
 const grain=new T.CanvasTexture(canvas);grain.wrapS=grain.wrapT=T.RepeatWrapping;grain.anisotropy=4;grain.colorSpace=T.NoColorSpace;
 const seen=new Set();root.traverse(o=>{if(!o.isMesh)return;for(const material of Array.isArray(o.material)?o.material:[o.material]){
  if(seen.has(material)||!material.isMeshStandardMaterial||material.emissiveIntensity>1||material.roughness<.2)continue;seen.add(material);
  material.onBeforeCompile=shader=>{
   shader.uniforms.surfaceGrain={value:grain};shader.uniforms.surfaceScale={value:material.name.includes('granite')?.85:2};
   shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 surfacePosition; varying vec3 surfaceNormal;').replace('#include <begin_vertex>','#include <begin_vertex>\nsurfacePosition=(modelMatrix*vec4(transformed,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);');
   shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nuniform sampler2D surfaceGrain;uniform float surfaceScale;varying vec3 surfacePosition;varying vec3 surfaceNormal;').replace('#include <color_fragment>',`#include <color_fragment>
vec3 axis=abs(surfaceNormal);vec2 detailUV=axis.y>axis.x&&axis.y>axis.z?surfacePosition.xz:axis.x>axis.z?surfacePosition.zy:surfacePosition.xy;
float grain=texture2D(surfaceGrain,detailUV*surfaceScale).r;
diffuseColor.rgb*=.84+.20*grain;
`);
  };
  material.customProgramCacheKey=()=> 'aurora-surface-grain-v8';material.needsUpdate=true;
 }});
 return grain;
}
