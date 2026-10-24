import * as T from '../vendor/three.module.js';
import {MACHINE} from './journey.mjs';
import {pulseTarget} from './adventure.mjs';
export function createAdventure(scene,machine,quest,onSave){
 const root=new T.Group();root.name='Pulse training and adventure effects';scene.add(root);
 const training=[],shots=[];let lastShot=-10,lastHurt=-10,shield=100,score=0;
 const cyan=new T.MeshBasicMaterial({color:0x84f3ff}),gold=new T.MeshStandardMaterial({color:0xd4aa66,metalness:.5,roughness:.35});
 for(let i=0;i<3;i++){
  const g=new T.Group();g.position.set(-150+i*4,1.8,-216);root.add(g);
  for(const [r,m,z] of [[.85,gold,0],[.58,cyan,.025],[.28,gold,.05]]){const o=new T.Mesh(new T.CircleGeometry(r,24),m);o.position.z=z;g.add(o);}
  const pole=new T.Mesh(new T.CylinderGeometry(.06,.09,1.4,8),gold);pole.position.y=-1.1;g.add(pole);training.push({id:i,ob:g,hp:3,resetAt:0});
 }
 function line(a,b,color=0x85f4ff){const geo=new T.BufferGeometry().setFromPoints([a,b]),m=new T.LineBasicMaterial({color,transparent:true,opacity:.95}),o=new T.Line(geo,m);root.add(o);shots.push({o,life:.18});}
 function attack(camera,world,time,blocked,humans=[]){
  if(time-lastShot<.32)return null;lastShot=time;
  const origin=camera.position.clone(),dir=camera.getWorldDirection(new T.Vector3()),targets=[];
  if(world==='city')for(const t of training)if(t.hp>0)targets.push({x:t.ob.position.x,y:1.8,z:-216,radius:.9,type:'training',data:t});
  if(world==='machine')for(const d of machine.drones)if(!quest.defeated.includes(d.id))targets.push({x:MACHINE.x+d.ob.position.x,y:d.ob.position.y,z:MACHINE.z+d.ob.position.z,radius:1.1,type:'drone',data:d});
  const hit=pulseTarget(origin,dir,targets,blocked);let distance=24;
  for(let d=.6;d<24;d+=.4)if(blocked(origin.x+dir.x*d,origin.z+dir.z*d,origin.y+dir.y*d)){distance=d;break;}
  if(hit)distance=Math.hypot(hit.x-origin.x,hit.y-origin.y,hit.z-origin.z);
  line(origin.clone().addScaledVector(dir,.6).add(new T.Vector3(.15,-.13,0)),origin.clone().addScaledVector(dir,distance));
  if(hit){const t=hit.data;t.hp--;if(t.hp<=0){if(hit.type==='drone'){quest.defeated.push(t.id);onSave();return `故障ドローンを停止 ${quest.defeated.length}/6`;}t.resetAt=time+6;t.ob.visible=false;score++;return `訓練ターゲット停止！ スコア ${score} · 6秒後に復帰`;}
   t.ob.scale.setScalar(.85);return `命中！ あと${t.hp}発`;
  }
  const people=humans.map(p=>{const v=p.ob.getWorldPosition(new T.Vector3());return {x:v.x,y:v.y+1.1,z:v.z,radius:.65,data:p};});
  const person=pulseTarget(origin,dir,people,blocked);if(person){person.data.stunUntil=time+.6;return '「びっくりした！ 話があるならCでどうぞ。」';}
  return '';
 }
 function update(dt,time,world,player,playing){
  for(let i=shots.length-1;i>=0;i--){const s=shots[i];s.life-=dt;s.o.material.opacity=Math.max(0,s.life/.18);if(s.life<=0){s.o.removeFromParent();s.o.geometry.dispose();s.o.material.dispose();shots.splice(i,1);}}
  for(const t of training){if(t.hp<=0&&time>=t.resetAt){t.hp=3;t.ob.visible=true;}t.ob.scale.lerp(new T.Vector3(1,1,1),Math.min(1,dt*8));}
  for(const d of machine.drones)d.ob.scale.lerp(new T.Vector3(1,1,1),Math.min(1,dt*8));
  if(!playing)return null;
  if(time-lastHurt>8)shield=Math.min(100,shield+dt*5);
  if(world!=='machine')return null;
  for(const d of machine.drones){if(quest.defeated.includes(d.id))continue;d.cooldown-=dt;const p=d.ob.getWorldPosition(new T.Vector3()),dist=Math.hypot(p.x-player.x,p.z-player.z);
   if(dist<17&&d.cooldown<=0){let wall=false;for(let k=.1;k<1;k+=.1)if(machine.blocked(p.x+(player.x-p.x)*k,p.z+(player.z-p.z)*k,p.y+(player.y-.2-p.y)*k,quest)){wall=true;break;}if(wall)continue;
    line(p,new T.Vector3(player.x,player.y-.2,player.z),0xff8868);shield=Math.max(0,shield-12);lastHurt=time;d.cooldown=2.2;
   }
  }
  if(shield<=0){shield=100;lastHurt=time;return 'respawn';}
  return null;
 }
 function resetShield(){shield=100;}
 return {root,training,attack,update,resetShield,get shield(){return Math.ceil(shield);},get score(){return score;}};
}
