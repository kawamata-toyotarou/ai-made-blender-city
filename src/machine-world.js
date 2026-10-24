import * as T from '../vendor/three.module.js';
import {MACHINE,MACHINE_STOP,OUTER_RAIL_POINTS} from './journey.mjs';
import {REACTORS,CELL_POSITIONS} from './adventure.mjs';
export function createMachineWorld(scene){
 const root=new T.Group();root.name='NEXUS-9 / mechanical planet';scene.add(root);
 const ground=new T.Group();ground.position.set(MACHINE.x,0,MACHINE.z);root.add(ground);
 const colliders=[],robots=[],drones=[],cells=[],reactors=[],fans=[],batches=new Map();
 const mat=(color,metalness=.7,roughness=.4)=>new T.MeshStandardMaterial({color,metalness,roughness});
 const steel=mat(0x5b6973),dark=mat(0x16232f),pale=mat(0x9ba9a9),copper=mat(0xa37f4f),black=mat(0x0b1017);
 const cyan=new T.MeshStandardMaterial({color:0x57e4ed,emissive:0x19b5d0,emissiveIntensity:1.7,metalness:.6,roughness:.25});
 const amber=new T.MeshStandardMaterial({color:0xffb768,emissive:0xff7933,emissiveIntensity:1.3});
 const red=new T.MeshStandardMaterial({color:0xd75747,emissive:0xc52c2c,emissiveIntensity:1});
 function mesh(geo,m,p,parent=ground){const o=new T.Mesh(geo,m);o.position.set(...p);o.castShadow=o.receiveShadow=true;parent.add(o);return o;}
 function box(s,p,m,parent){if(parent)return mesh(new T.BoxGeometry(...s),m,p,parent);let b=batches.get(m);if(!b){b=[];batches.set(m,b);}b.push({size:s,pos:p});}
 function obstacle(x,z,w,d,h=20){colliders.push({x,z,w,d,h});}
 function label(text,p,w=6,parent=ground){const c=document.createElement('canvas');c.width=1024;c.height=128;const cx=c.getContext('2d');cx.fillStyle='#08151f';cx.fillRect(0,0,1024,128);cx.fillStyle='#9df2f1';cx.font='600 48px sans-serif';cx.textAlign='center';cx.textBaseline='middle';cx.fillText(text,512,64,990);const tx=new T.CanvasTexture(c);tx.colorSpace=T.SRGBColorSpace;return mesh(new T.PlaneGeometry(w,w/8),new T.MeshBasicMaterial({map:tx,side:T.DoubleSide}),p,parent);}
 // All-metal globe: panel joints, a global trench, and a recessed-looking power dish.
 const globeMat=mat(0x48535c,.8,.56);
 globeMat.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 mechN;').replace('#include <beginnormal_vertex>','#include <beginnormal_vertex>\nmechN=normal;');s.fragmentShader=s.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 mechN;').replace('#include <color_fragment>',`#include <color_fragment>
 vec2 grid=vec2(atan(mechN.z,mechN.x)*30.,asin(clamp(mechN.y,-1.,1.))*46.);
 vec2 cell=fract(grid);float edge=step(.035,cell.x)*step(.035,cell.y);
 float shade=.52+.4*fract(sin(dot(floor(grid),vec2(12.9898,78.233)))*43758.5453);
 diffuseColor.rgb*=mix(.17,shade,edge);
 if(abs(mechN.y)<.016)diffuseColor.rgb=vec3(.015,.035,.05);
 `);};
 const globe=mesh(new T.SphereGeometry(1600,80,56),globeMat,[MACHINE.x,-1608,MACHINE.z],root);globe.castShadow=false;
 const equator=mesh(new T.TorusGeometry(1602,4,6,160),cyan,[MACHINE.x,-1608,MACHINE.z],root);equator.rotation.x=Math.PI/2;
 const dish=mesh(new T.SphereGeometry(260,40,20,0,Math.PI*2,0,.5),black,[MACHINE.x-780,-650,MACHINE.z+1110],root);dish.rotation.z=.6;
 mesh(new T.CylinderGeometry(210,210,.4,96),dark,[0,-.3,0]);
 for(let x=-195;x<=195;x+=15)for(let z=-195;z<=195;z+=15)if(Math.hypot(x,z)<198){box([14.7,.08,14.7],[x,-.04,z],((x+z)/15)%3===0?steel:dark);box([.1,.025,13],[x-7,.018,z],black);if((x+z)%45===0)box([8,.025,.08],[x,.022,z-5],cyan);}
 for(let i=0;i<80;i++){const a=i*Math.PI*2/80,x=Math.cos(a)*202,z=Math.sin(a)*202;box([.2,1.5,.2],[x,.75,z],pale);if(i%2===0){const tower=mesh(new T.BoxGeometry(12,24+i%5*9,14),steel,[Math.cos(a)*245,12+i%5*4.5,Math.sin(a)*245]);tower.rotation.y=-a;}}
 // A broad entrance axis joins the station, market and central archive.
 for(let x=-136;x<90;x+=8){box([6,.04,10],[x,.045,5],steel);for(const z of [-.2,10.2])box([5,.04,.08],[x,.07,z],cyan);}
 const dock=new T.Group();dock.position.set(-140,0,0);ground.add(dock);
 box([7,.32,39],[9,.16,0],steel,dock);box([8,.2,41],[9,5.5,0],dark,dock);
 for(const z of [-17,-8,1,10,18])box([.2,5.4,.2],[12.6,2.7,z],pale,dock);
 label('NEXUS-9 / MACHINE PORT',[9,4.1,18.7],7,dock);label('LUMEN ← RETURN',[9,3.2,18.7],6,dock);
 const portLight=new T.PointLight(0x67cbdc,90,24,2);portLight.position.set(-131,4,0);ground.add(portLight);
 // Service buildings have open work bays, detailed facades, ducts and roof fans.
 for(const [i,b] of [[-88,-45,18],[-78,60,26],[-5,-100,30],[85,80,40],[110,-80,55]].entries()){
  const [x,z,h]=b;box([26,h,22],[x,h/2,z],i%2?steel:dark);obstacle(x,z,26,22,h);
  for(let y=3;y<h;y+=4){box([26.2,.14,.15],[x,y,z+11.1],pale);for(let j=0;j<5;j++)box([3.4,1.2,.1],[x-10+j*5,y+1.5,z+11.16],i%2?amber:cyan);}
  for(const s of [-1,1])box([.6,h+.5,.7],[x+s*12,h/2,z+11.4],copper);
  for(let j=0;j<5;j++)box([1.1,.35,16],[x-8+j*4,h+.2,z],pale);
  const fan=mesh(new T.TorusGeometry(3,.18,6,24),pale,[x,h+.6,z]);fan.rotation.x=Math.PI/2;
  const blades=new T.Group();blades.position.set(x,h+.5,z);ground.add(blades);for(let j=0;j<4;j++){const blade=mesh(new T.BoxGeometry(2.8,.08,.8),steel,[0,0,0],blades);blade.rotation.y=j*Math.PI/2;blade.position.set(Math.cos(j*Math.PI/2)*1.3,0,Math.sin(j*Math.PI/2)*1.3);}fans.push(blades);
 }
 // The archive is open at the south side after all reactors are repaired.
 box([30,.22,25],[0,.11,4],pale);box([30,.25,25],[0,7,4],dark);
 for(const [x,z,w,d] of [[-15,4,.4,25],[15,4,.4,25],[0,-8.5,30,.4]]){box([w,7,d],[x,3.5,z],steel);obstacle(x,z,w,d,7);}
 const archiveGate=mesh(new T.BoxGeometry(26,5,.22),dark,[0,2.5,16.5]);
 label('CENTRAL ARCHIVE / 3 REACTORS',[0,5.8,16.7],25);
 const archive=mesh(new T.OctahedronGeometry(1.6),cyan,[0,3,4]);
 const archiveRings=[];for(const r of [2.7,3.6]){const o=mesh(new T.TorusGeometry(r,.06,6,64),copper,[0,3,4]);archiveRings.push(o);}
 // Three repair bays, two unstable drones per bay.
 for(const r of REACTORS){
  const g=new T.Group();g.position.set(r.x,0,r.z);ground.add(g);
  mesh(new T.CylinderGeometry(3.2,4,.5,20),pale,[0,.25,0],g);const core=mesh(new T.CylinderGeometry(1.5,1.5,7,16),amber.clone(),[0,3.8,0],g);
  for(const y of [1,3,5,7]){const ring=mesh(new T.TorusGeometry(2,.13,6,32),steel,[0,y,0],g);ring.rotation.x=Math.PI/2;}
  for(let j=0;j<5;j++){const a=j*Math.PI*2/5;box([.3,7,.3],[r.x+Math.cos(a)*2.6,3.5,r.z+Math.sin(a)*2.6],steel);}
  box([2,1.2,1],[r.x,1,r.z+5.5],dark);label(`${r.id+1} / ${r.name} / F`,[r.x,2.4,r.z+5.6],7);obstacle(r.x,r.z,7,7,8);obstacle(r.x,r.z+5.5,2,1,1.6);reactors.push({...r,core});
  for(let k=0;k<2;k++){
   const id=r.id*2+k,g=new T.Group();g.position.set(r.x+(k?10:-10),2.3,r.z+6);ground.add(g);
   const body=mesh(new T.SphereGeometry(.8,12,8),steel,[0,0,0],g);body.scale.set(1.15,.7,1);mesh(new T.SphereGeometry(.23,10,8),red,[0,0,.72],g);
   for(const s of [-1,1]){box([1.1,.15,.7],[s*1.1,0,0],dark,g);const ring=mesh(new T.TorusGeometry(.38,.06,5,16),cyan,[s*1.2,-.12,0],g);ring.rotation.x=Math.PI/2;}
   drones.push({id,ob:g,home:g.position.clone(),hp:3,cooldown:1.5+k,down:false,flash:0});
  }
 }
 // Parts hover above head height, giving jumping a role in the repair mission.
 CELL_POSITIONS.forEach(([x,z],id)=>{const ob=mesh(new T.OctahedronGeometry(.38),cyan,[x,3.05,z]);mesh(new T.CylinderGeometry(.4,.55,.2,12),steel,[x,.12,z]);cells.push({id,ob,x,z});});
 // Low service blocks form small jumping steps; their tops also support landing.
 for(const [x,z,h] of [[-101,25,.65],[-97,25,1.2],[-48,30,.7],[-44,30,1.3],[-30,-32,.8],[5,42,1.15]]){box([2.4,h,2.4],[x,h/2,z],steel);box([2.2,.05,2.2],[x,h+.025,z],copper);obstacle(x,z,2.4,2.4,h+.05);}
 for(const [x,z] of [[-120,-65],[-120,70],[100,30],[55,-120],[-60,105]]){
  for(let i=0;i<3;i++){const tank=mesh(new T.CylinderGeometry(1.6,1.6,5.5,14),pale,[x+i*4,2.75,z]);mesh(new T.TorusGeometry(1.64,.08,6,24),copper,[x+i*4,4.6,z]).rotation.x=Math.PI/2;obstacle(x+i*4,z,3.4,3.4,6);}
  box([12,.5,.5],[x+4,1.1,z+2],copper);
 }
 function robot(id,name,role,x,z,patrol=false){
  const ob=new T.Group();ob.position.set(x,0,z);ground.add(ob);
  mesh(new T.CylinderGeometry(.43,.35,.65,8),steel,[0,1.2,0],ob);box([.55,.38,.45],[0,1.78,0],pale,ob);box([.43,.08,.04],[0,1.82,.25],cyan,ob);
  box([.45,.18,.35],[0,.82,0],copper,ob);const legs=[],arms=[];
  for(const s of [-1,1]){const leg=new T.Group();leg.position.set(s*.21,.78,0);ob.add(leg);box([.17,.6,.18],[0,-.3,0],steel,leg);box([.22,.14,.38],[0,-.67,.09],dark,leg);legs.push(leg);const arm=new T.Group();arm.position.set(s*.5,1.45,0);ob.add(arm);box([.15,.65,.16],[0,-.3,0],pale,arm);mesh(new T.SphereGeometry(.12,8,6),copper,[0,-.65,0],arm);arms.push(arm);}
  const head=ob.children[1];robots.push({id,name,role,ob,legs,arms,head,home:new T.Vector3(x,0,z),patrol,world:'machine'});
 }
 robot('guide','案内機 ORI','星港の案内機',-117,12);robot('engineer','整備士 BOLT','動力炉の整備士',-62,20);
 robot('archivist','司書 MNEME','記憶アーカイブの司書',18,22);robot('courier','配達機 PIP','部品の配達員',-95,22,true);
 robot('welder','溶接機 ARC','配管の技師',-40,40,true);robot('signal','通信士 SIGNAL','通信炉の担当',70,35,true);
 robot('watch','巡回機 HEX','保守巡回員',105,5,true);robot('gate','門衛 KEEPER','中央区の門衛',-25,15);
 // Visible conduit runs and grilles avoid a bare, flat landing zone.
 for(let i=0;i<28;i++){const x=-180+i*13;box([8,.12,1],[x,.09,-135],black);for(let j=0;j<8;j++)box([.15,.15,.9],[x-3.5+j,.16,-135],pale);}
 for(const z of [-125,125])for(let x=-125;x<125;x+=10){box([9,.6,.6],[x,.7,z],copper);box([.2,1.2,1.5],[x-4,.6,z],steel);}
 label('REPAIR DISTRICT →',[-105,3.5,32],14);label('NEXUS-9 / A WORLD OF MACHINES',[-70,7,89],38);
 const dummy=new T.Object3D();for(const [m,items] of batches){const o=new T.InstancedMesh(new T.BoxGeometry(1,1,1),m,items.length);items.forEach((v,i)=>{dummy.position.set(...v.pos);dummy.scale.set(...v.size);dummy.rotation.set(0,0,0);dummy.updateMatrix();o.setMatrixAt(i,dummy.matrix);});o.castShadow=o.receiveShadow=true;ground.add(o);}
 const curve=new T.CatmullRomCurve3(OUTER_RAIL_POINTS.map(p=>new T.Vector3(...p)),false,'centripetal');
 for(const s of [-1,1]){const pts=Array.from({length:501},(_,i)=>{const p=curve.getPoint(i/500),t=curve.getTangent(i/500);return p.addScaledVector(new T.Vector3(-t.z,0,t.x).normalize(),s*1.32);});mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts),850,.075,5,false),cyan,[0,0,0],root);}
 const ties=new T.InstancedMesh(new T.BoxGeometry(3.7,.12,.4),dark,450);for(let i=0;i<450;i++){const p=curve.getPoint(i/449),t=curve.getTangent(i/449);dummy.position.copy(p);dummy.scale.set(1,1,1);dummy.lookAt(p.clone().add(t));dummy.updateMatrix();ties.setMatrixAt(i,dummy.matrix);}root.add(ties);
 function blocked(x,z,foot=0,quest){x-=MACHINE.x;z-=MACHINE.z;if(Math.hypot(x,z)>197)return true;if(colliders.some(b=>foot<b.h&&Math.abs(x-b.x)<b.w/2+.3&&Math.abs(z-b.z)<b.d/2+.3))return true;
  return (!quest||quest.reactors.length<3)&&Math.abs(x)<13.5&&Math.abs(z-16.5)<.55;
 }
 function update(dt,time,quest,talking){
  for(const [i,r] of robots.entries()){if(talking!==r){if(r.patrol){r.ob.position.x=r.home.x+Math.sin(time*.18+i)*4;r.ob.position.z=r.home.z+Math.cos(time*.18+i)*3;r.ob.rotation.y=Math.atan2(Math.cos(time*.18+i)*4,-Math.sin(time*.18+i)*3);r.legs.forEach((l,j)=>l.rotation.x=Math.sin(time*4+i+j*Math.PI)*.32);r.arms.forEach((a,j)=>a.rotation.x=-Math.sin(time*4+i+j*Math.PI)*.2);}else r.arms[0].rotation.z=Math.sin(time*.7+i)*.08;}}
  for(const d of drones){d.down=quest.defeated.includes(d.id);d.ob.visible=!d.down;if(!d.down){d.ob.position.y=2.3+Math.sin(time*2+d.id)*.22;d.ob.rotation.y=time*.4;}}
  for(const c of cells){c.ob.visible=!quest.cells.includes(c.id);c.ob.rotation.y=time*1.6;c.ob.position.y=3.05+Math.sin(time*2+c.id)*.12;}
  reactors.forEach(r=>{const on=quest.reactors.includes(r.id);r.core.material.color.set(on?0x3adcc6:0xffa466);r.core.material.emissive.set(on?0x14b9b0:0xdd642e);});
  archiveGate.position.y=quest.reactors.length===3?8:2.5;archive.rotation.y=time*.5;archiveRings.forEach((r,i)=>r.rotation.set(time*.25*(i+1),time*.14,.6));fans.forEach(f=>f.rotation.y=time*1.5);
 }
 function floorHeight(x,z,feet=0){x-=MACHINE.x;z-=MACHINE.z;let y=0;for(const b of colliders)if(b.h<2.5&&feet>=b.h-.08&&Math.abs(x-b.x)<b.w/2+.25&&Math.abs(z-b.z)<b.d/2+.25)y=Math.max(y,b.h);return y;}
 return {root,ground,curve,globe,robots,drones,cells,reactors,archive,colliders,blocked,floorHeight,update};
}
