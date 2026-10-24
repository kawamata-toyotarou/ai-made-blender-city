export const PROP_TYPES=[
 {id:'tree',name:'樹木',radius:1.1}, {id:'planter',name:'花壇',radius:1.2},
 {id:'bench',name:'ベンチ',radius:1.25}, {id:'lamp',name:'街灯',radius:.4},
 {id:'art',name:'光の彫刻',radius:1}, {id:'pergola',name:'パーゴラ',radius:2.3},
 {id:'fountain',name:'噴水',radius:1.9}
];
export const MAX_PROPS=60;
export function cleanProps(value){
 if(!Array.isArray(value))return [];
 return value.slice(0,MAX_PROPS).filter(p=>p&&PROP_TYPES.some(t=>t.id===p.type)&&[p.x,p.z,p.rotation].every(Number.isFinite)&&Math.abs(p.x)<308&&p.z> -305&&p.z<150)
 .map(p=>({type:p.type,x:p.x,z:p.z,rotation:p.rotation%(2*Math.PI)}));
}
export function onRoad(x,z){return [-285,-210,-150,0,150,210,285].some(v=>Math.abs(x-v)<7)||[-290,-230,-170,-58,25,130].some(v=>Math.abs(z-v)<6.5);}
export function canPlaceProp(p,items,blocked){
 const t=PROP_TYPES.find(t=>t.id===p.type);if(!t||items.length>=MAX_PROPS||![p.x,p.z,p.rotation].every(Number.isFinite))return false;
 for(let i=0;i<12;i++){const a=i*Math.PI/6,x=p.x+Math.cos(a)*t.radius,z=p.z+Math.sin(a)*t.radius;
  if(Math.abs(x)>308||z< -305||z>150||x< -291||onRoad(x,z)||blocked(x,z))return false;
 }
 return !blocked(p.x,p.z)&&!items.some(v=>Math.hypot(v.x-p.x,v.z-p.z)<PROP_TYPES.find(t=>t.id===v.type).radius+t.radius+.6);
}
// Bridge spans are excluded: a boat stops before them rather than passing through.
export const BOAT_DOCK={x:-300,z:72,exit:[-289,1.72,72]};
export function boatBlocked(x,z){return x< -305||x> -295||z< -276||z>116||[-230,-58,25,100].some(v=>Math.abs(z-v)<5.2);}
export function stepBoat(pos,yaw,throttle,steer,dt){
 dt=Math.min(.1,Math.max(0,dt));yaw-=steer*dt*.8*(throttle<0?-1:1);
 const x=pos.x-Math.sin(yaw)*throttle*dt*6,z=pos.z-Math.cos(yaw)*throttle*dt*6;
 return {x:boatBlocked(x,pos.z)?pos.x:x,z:boatBlocked(pos.x,z)?pos.z:z,yaw};
}
