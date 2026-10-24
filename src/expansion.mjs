import {cityContains} from './atlas.mjs';
export const METRO_STOPS=[{name:'西・リバーサイド',x:-240},{name:'中央・旧市街',x:-12},{name:'東・ガーデン',x:230}];
export const SURVEYS=[[-75,45,'発光鉱石'],[-20,90,'古代の記録'],[85,50,'氷の標本'],[100,-85,'磁場観測'],[12,-90,'結晶の共鳴'],[140,0,'地平線の測量']];
export function metroPose(time){
 const cycle=((time%90)+90)%90,index=Math.floor(cycle/30),local=cycle%30,next=(index+1)%3;
 const u=Math.max(0,Math.min(1,(local-8)/22)),ease=u*u*(3-2*u);
 return {x:METRO_STOPS[index].x+(METRO_STOPS[next].x-METRO_STOPS[index].x)*ease,dwell:local<8,index,next,dir:METRO_STOPS[next].x>METRO_STOPS[index].x?1:-1};
}
export function liftHeight(from,to,time){const u=Math.max(0,Math.min(1,time/5));return u===1?to:u===0?from:from+(to-from)*u*u*(3-2*u);}
export function insideUpper(room,x,z){return Math.abs(x-room.x)<8.5&&Math.abs(z+room.y)<9.5;}
export function cityBounds(x,z){return cityContains(x,z);}
