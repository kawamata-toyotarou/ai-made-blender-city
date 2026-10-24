import {cityContains} from './atlas.mjs';
export const ROUTE_MIN=-145,ROUTE_MAX=65;
export function signalPhase(time){const t=time%28;return t<18?'green':t<21?'amber':'red';}
export function createTraffic(){return [-6,6].flatMap((x,lane)=>[-43,4,54,106].map((y,i)=>({x,z:-y,dir:lane===0?-1:1,speed:0,cruise:6.8+i*.35,wheel:0,id:lane*4+i})));}
export function stepTraffic(cars,dt,time,signals,player){
  const stop=signalPhase(time)!=='green';
  for(const c of cars){
    let desired=c.cruise,maxTravel=Infinity;
    const slow=(distance,margin=.4)=>{if(distance<28){desired=Math.min(desired,Math.sqrt(5.4*Math.max(0,distance-margin)));maxTravel=Math.min(maxTravel,Math.max(0,distance-margin));}};
    if(stop)for(const y of signals){const d=(-y-c.z)*c.dir-11.2;if(d>=-.01)slow(d);}
    for(const other of cars){if(other===c||other.x!==c.x)continue;const ahead=((other.z-c.z)*c.dir+210)%210;slow(ahead-5.6,1.2);}
    if(Math.abs(c.x-player.x)<1.5){const ahead=(player.z-c.z)*c.dir;if(ahead>0&&ahead<25)slow(ahead-3.3,.3);}
    const acceleration=desired<c.speed?4.5:2.1;
    c.speed+=Math.sign(desired-c.speed)*Math.min(Math.abs(desired-c.speed),acceleration*dt);
    const travel=Math.min(c.speed*dt,maxTravel);if(travel<c.speed*dt)c.speed=0;
    c.z+=c.dir*travel;c.wheel+=travel/.37;
    if(c.z<ROUTE_MIN)c.z=ROUTE_MAX+(c.z-ROUTE_MIN);
    if(c.z>ROUTE_MAX)c.z=ROUTE_MIN+(c.z-ROUTE_MAX);
  }
}
export function roomAt(rooms,x,z){return rooms.find(r=>Math.abs(x-r.x)<r.w/2-.12&&Math.abs(z+r.y)<r.d/2-.12);}
export function stepDoors(doors,player,dt){for(const d of doors){const near=Math.hypot(player.x-d.front,player.z+d.doorY)<4.8;d.open+=(Number(near)-d.open)*Math.min(1,dt*4);}}
export function blockedAt(x,z,colliders,doors,cars){
  const r=.28;
  if(!cityContains(x,z))return true;
  if(colliders.some(b=>Math.abs(x-b.x)<b.w/2+r&&Math.abs(z+b.y)<b.d/2+r))return true;
  if(doors.some(d=>d.open<.8&&Math.abs(x-d.front)<.23+r&&Math.abs(z+d.doorY)<1.7+r))return true;
  if(cars.some(c=>Math.abs(x-c.x)<1.2&&Math.abs(z-c.z)<2.65))return true;
  return [-17,17].some(x0=>Math.hypot(x-x0,z+58)<.93);
}
