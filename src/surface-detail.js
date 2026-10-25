import * as T from '../vendor/three.module.js';
let sharedTexture=null;
function surfaceTexture(){
 if(sharedTexture)return sharedTexture;
 const size=256,pixels=new Uint8Array(size*size*4),hash=(x,y)=>{let n=Math.imul(x+137,374761393)^Math.imul(y+97,668265263);n=Math.imul(n^(n>>>13),1274126177);return (n>>>0)/4294967295;};
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4,fine=hash(x,y),broad=hash(Math.floor(x/16),Math.floor(y/16));pixels[i]=100+Math.round(fine*70);pixels[i+1]=120+Math.round(broad*35+fine*50);pixels[i+2]=Math.round(150+35*Math.sin(y*.9)+fine*45);pixels[i+3]=255;}
 const texture=new T.DataTexture(pixels,size,size);texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.generateMipmaps=true;texture.minFilter=T.LinearMipmapLinearFilter;texture.magFilter=T.LinearFilter;texture.anisotropy=8;texture.needsUpdate=true;sharedTexture=texture;return texture;
}
// Shared relief, weathering and brushed-metal channels; no full-screen pass.
export function applySurfaceDetail(root){
 const grain=surfaceTexture(),seen=new Set();root.traverse(o=>{if(!o.isMesh)return;for(const m of Array.isArray(o.material)?o.material:[o.material]){
  if(seen.has(m)||!m.isMeshStandardMaterial||m.emissiveIntensity>1||m.roughness<.2)continue;seen.add(m);
  const metallic=m.metalness>.5,rock=/granite|Terrain|limestone/i.test(m.name);
  m.onBeforeCompile=shader=>{
   Object.assign(shader.uniforms,{surfaceGrain:{value:grain},surfaceScale:{value:rock?.7:metallic?2.8:1.4},surfaceRelief:{value:rock?.006:metallic?.00025:.0009},surfaceMetal:{value:metallic?1:0}});
   shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 surfacePosition; varying vec3 surfaceNormal;').replace('#include <begin_vertex>',`#include <begin_vertex>
vec4 detailPoint=vec4(transformed,1.);vec3 detailNormal=normal;
#ifdef USE_INSTANCING
detailPoint=instanceMatrix*detailPoint;detailNormal=mat3(instanceMatrix)*detailNormal;
#endif
surfacePosition=(modelMatrix*detailPoint).xyz;surfaceNormal=normalize(mat3(modelMatrix)*detailNormal);`);
   shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
uniform sampler2D surfaceGrain;uniform float surfaceScale;uniform float surfaceRelief;uniform float surfaceMetal;
varying vec3 surfacePosition;varying vec3 surfaceNormal;
vec3 auroraRelief(vec3 n,vec3 p,float h){vec3 sx=dFdx(p),sy=dFdy(p);vec3 r1=cross(sy,n),r2=cross(n,sx);float det=dot(sx,r1);if(abs(det)<1e-10)return n;return normalize(abs(det)*n-sign(det)*(dFdx(h)*r1+dFdy(h)*r2));}
`).replace('#include <color_fragment>',`#include <color_fragment>
vec3 axis=abs(surfaceNormal);vec2 detailUV=axis.y>axis.x&&axis.y>axis.z?surfacePosition.xz:axis.x>axis.z?surfacePosition.zy:surfacePosition.xy;
vec3 grain=texture2D(surfaceGrain,detailUV*surfaceScale).rgb;
float weathering=texture2D(surfaceGrain,detailUV*.06).g;
diffuseColor.rgb*=(.90+.12*grain.r)*(.94+.10*weathering);
`).replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor=clamp(roughnessFactor*(.78+.4*grain.g),.08,1.);').replace('#include <normal_fragment_maps>','#include <normal_fragment_maps>\nnormal=auroraRelief(normal,-vViewPosition,(mix(grain.r,grain.b,surfaceMetal*.65)-.5)*surfaceRelief);');
  };
  m.customProgramCacheKey=()=> 'aurora-pbr-surfaces-v9';m.needsUpdate=true;
 }});return grain;
}
