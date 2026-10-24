import * as T from '../vendor/three.module.js';
import {createGrove,contactMaterial} from './greenery.js';
import {PROP_TYPES,MAX_PROPS,cleanProps,canPlaceProp,BOAT_DOCK} from './sandbox.mjs';
export function createSandbox(scene){
 const root=new T.Group();root.name='AURORA / player garden';scene.add(root);
 const mat=(color,metalness=0,roughness=.7)=>new T.MeshStandardMaterial({color,metalness,roughness});
 const wood=mat(0x7a5c3d),stone=mat(0xa3a491),dark=mat(0x273b40,.6),leaf=mat(0x50793e),flower=mat(0xc48755),water=mat(0x498c98,.6,.15);
 const glow=new T.MeshStandardMaterial({color:0xffe3a6,emissive:0xffcc78,emissiveIntensity:1.7});
 const meshes=[],undo=[],animated=[];let items=[],ghost=null,ghostType='',valid=false;
 const gardenLights=Array.from({length:2},()=>{const l=new T.PointLight(0xffd59a,0,10,2);root.add(l);return l;});
 function mesh(g,m,p,parent){const o=new T.Mesh(g,m);o.position.set(...p);o.castShadow=o.receiveShadow=true;parent.add(o);return o;}
 const box=(s,p,m,g)=>mesh(new T.BoxGeometry(...s),m,p,g);
 function model(type){const g=new T.Group();
  if(type==='tree'){const grove=createGrove(g);grove.add(0,0,5);grove.finish();}
  if(type==='planter'){box([2.1,.5,1.6],[0,.25,0],stone,g);box([1.9,.08,1.4],[0,.52,0],leaf,g);for(let j=0;j<18;j++){const x=(j%6)*.31-.78,z=Math.floor(j/6)*.4-.4;mesh(new T.SphereGeometry(.13,7,5),flower,[x,.72+(j%3)*.08,z],g);}}
  if(type==='bench'){for(const x of [-.8,.8])box([.12,.5,.6],[x,.25,0],dark,g);for(let j=0;j<4;j++)box([2,.09,.12],[0,.55,-.25+j*.16],wood,g);for(let j=0;j<3;j++)box([2,.11,.08],[0,.76+j*.15,-.32],wood,g);}
  if(type==='lamp'){mesh(new T.CylinderGeometry(.06,.1,3.6,10),dark,[0,1.8,0],g);box([1,.1,.6],[0,3.7,0],dark,g);box([.8,.05,.45],[0,3.63,0],glow,g);}
  if(type==='art'){box([1.3,.22,1.3],[0,.11,0],stone,g);const o=mesh(new T.TorusKnotGeometry(.65,.13,64,10),glow,[0,1.45,0],g);o.name='turning art';}
  if(type==='pergola'){for(const x of [-1.7,1.7])for(const z of [-1.7,1.7])box([.14,2.8,.14],[x,1.4,z],wood,g);for(let j=0;j<10;j++)box([3.9,.12,.15],[0,2.85,-1.8+j*.4],wood,g);for(const x of [-1.6,1.6])box([.17,.2,4],[x,2.7,0],wood,g);}
  if(type==='fountain'){mesh(new T.CylinderGeometry(1.7,1.9,.35,32),stone,[0,.18,0],g);mesh(new T.CylinderGeometry(1.52,1.52,.03,32),water,[0,.38,0],g);mesh(new T.CylinderGeometry(.35,.55,.7,16),stone,[0,.65,0],g);const jet=mesh(new T.CylinderGeometry(.025,.055,1.35,10),water,[0,1.62,0],g);jet.name='water jet';const pg=new T.BufferGeometry();pg.setAttribute('position',new T.Float32BufferAttribute(new Float32Array(360*3),3));const spray=new T.Points(pg,new T.PointsMaterial({color:0xc9e9e7,size:.045,transparent:true,opacity:.7,depthWrite:false}));spray.frustumCulled=false;spray.name='fountain spray';g.add(spray);}
  if(type!=='tree'){const shadow=new T.Mesh(new T.PlaneGeometry(4,4),contactMaterial);shadow.rotation.x=-Math.PI/2;shadow.position.y=.025;shadow.name='Contact shadow';g.add(shadow);}
  return g;
 }
 function save(){try{localStorage.setItem('aurora-garden-v6',JSON.stringify(items));return true;}catch{return false;}}
 function rebuild(){for(const g of meshes){g.removeFromParent();g.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material?.userData.groveOwned||o.name==='fountain spray')o.material.dispose();});}meshes.length=animated.length=0;
  for(const p of items){const g=model(p.type);g.position.set(p.x,.12,p.z);g.rotation.y=p.rotation;root.add(g);meshes.push(g);g.traverse(o=>{if(['turning art','water jet','fountain spray'].includes(o.name))animated.push(o);});}
 }
 try{items=cleanProps(JSON.parse(localStorage.getItem('aurora-garden-v6')||'[]'));}catch{}rebuild();
 function candidate(camera,yaw,type,rotation){return {type,x:Math.round((camera.position.x-Math.sin(yaw)*5)*2)/2,z:Math.round((camera.position.z-Math.cos(yaw)*5)*2)/2,rotation};}
 function preview(p,enabled,blocked){if(!enabled){if(ghost)ghost.visible=false;return;}
  if(!ghost||ghostType!==p.type){if(ghost){ghost.removeFromParent();ghost.traverse(o=>{o.geometry?.dispose();if(o.material!==contactMaterial)o.material?.dispose();});}ghost=model(p.type);ghostType=p.type;ghost.traverse(o=>{if(o.name==='Contact shadow'||o.name==='Tree contact shadows'||o.isPoints){o.visible=false;return;}if(o.isMesh){if(o.material.userData.groveOwned)o.material.dispose();o.material=new T.MeshBasicMaterial({color:0x86e7b9,transparent:true,opacity:.4,depthWrite:false});o.castShadow=o.receiveShadow=false;}});scene.add(ghost);}
  valid=canPlaceProp(p,items,blocked);ghost.visible=true;ghost.position.set(p.x,.12,p.z);ghost.rotation.y=p.rotation;ghost.traverse(o=>{if(o.isMesh)o.material.color.set(valid?0x86e7b9:0xff6655);});
 }
 function remember(){undo.push(items.map(p=>({...p})));if(undo.length>20)undo.shift();}
 function place(p,blocked){if(!canPlaceProp(p,items,blocked))return {ok:false,message:items.length>=MAX_PROPS?'配置上限60個です。':'道路・水面・建物・他の家具を避け、緑の位置に置いてください。'};remember();items.push({...p});rebuild();const saved=save();return {ok:true,message:saved?`${PROP_TYPES.find(t=>t.id===p.type).name}を配置・保存しました。`:'配置しました。このブラウザーでは保存できないため再読み込みで消えます。'};}
 function remove(x,z){let best=-1,d=8;for(let i=0;i<items.length;i++){const n=Math.hypot(items[i].x-x,items[i].z-z);if(n<d){d=n;best=i;}}if(best<0)return '8m以内に自分が配置した物がありません。';remember();items.splice(best,1);rebuild();return save()?'近くの配置物を撤去しました。':'撤去しましたが保存できませんでした。';}
 function restore(){if(!undo.length)return '戻せる編集がありません。';items=undo.pop();rebuild();return save()?'ひとつ前の配置に戻しました。':'配置を戻しましたが保存できませんでした。';}
 function load(value,blockedWorld){const next=cleanProps(value);if(!Array.isArray(value)||next.length!==value.length)return '配置データが不正か、60個の上限を超えています。';const checked=[];for(const p of next){if(!canPlaceProp(p,checked,blockedWorld))return '道路・建物・配置物との重なりがあるため読み込めませんでした。';checked.push(p);}remember();items=next;rebuild();return save()?'配置を読み込み・保存しました。元に戻す操作も使えます。':'配置を読み込みましたがブラウザーへの保存はできませんでした。';}
 function blocked(x,z){return items.some(p=>{if(p.type==='pergola')return false;const r=p.type==='tree'?.35:PROP_TYPES.find(t=>t.id===p.type).radius;return Math.hypot(x-p.x,z-p.z)<r+.25;});}
 const boat=new T.Group();boat.position.set(BOAT_DOCK.x,.12,BOAT_DOCK.z);root.add(boat);
 const hull=mesh(new T.CylinderGeometry(1,1,.65,6),mat(0xd9d7bf,.3),[0,.1,0],boat);hull.scale.set(1,1,2.5);
 box([1.4,.12,3.8],[0,.5,0],wood,boat);box([1.2,.6,.55],[0,.8,1.1],dark,boat);box([1.15,.45,.5],[0,.7,-.1],dark,boat);box([1.7,.12,2],[0,1.9,.3],stone,boat);for(const x of [-.75,.75])box([.06,1.4,.06],[x,1.2,.9],dark,boat);
 // The dock is clear of the bridge and accessible from the promenade.
 const dock=new T.Group();root.add(dock);box([5,.22,6],[-291.5,.1,72],wood,dock);for(const z of [69.3,74.7])box([.18,1.6,.18],[-293.5,.2,z],dark,dock);
 const wake=mesh(new T.PlaneGeometry(1.7,5),new T.MeshBasicMaterial({color:0xc5e4da,transparent:true,opacity:.18,depthWrite:false}),[0,-.08,3.9],boat);wake.rotation.x=-Math.PI/2;wake.visible=false;
 function update(time,driving,throttle,camera,night=false,world='city'){for(const o of animated){if(o.name==='turning art')o.rotation.y=time*.35;if(o.name==='water jet')o.scale.y=.95+Math.sin(time*4)*.05;if(o.name==='fountain spray'){const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++){const t=(i/a.count+time*.55)%1,angle=i*2.399,r=t*(.4+(i%7)*.12);a.setXYZ(i,Math.cos(angle)*r,1+3*t-3.6*t*t,Math.sin(angle)*r);}a.needsUpdate=true;}}boat.position.y=.12+Math.sin(time*1.6)*.035;boat.rotation.z=Math.sin(time)*.012;wake.visible=driving&&!!throttle;
  const lamps=camera?items.filter(p=>p.type==='lamp').sort((a,b)=>Math.hypot(a.x-camera.position.x,a.z-camera.position.z)-Math.hypot(b.x-camera.position.x,b.z-camera.position.z)):[];gardenLights.forEach((l,i)=>{const p=lamps[i];l.intensity=p&&night&&world==='city'&&Math.hypot(p.x-camera.position.x,p.z-camera.position.z)<18?60:0;if(p)l.position.set(p.x,3.6,p.z);});
 }
 function benchActions(){return items.filter(p=>p.type==='bench').map(p=>({id:'user-bench',kind:'seat',name:'自分のベンチで休む',x:p.x,z:p.z,sit:[p.x,1.15,p.z],exit:[p.x+1.9*Math.cos(p.rotation),1.72,p.z-1.9*Math.sin(p.rotation)],yaw:Math.PI+p.rotation}));}
 return {root,boat,blocked,preview,place,remove,restore,load,candidate,update,get actions(){return benchActions();},get items(){return items;},get valid(){return valid;}};
}
