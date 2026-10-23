export const PLANET = {name:'LUMEN',x:6400,z:-4600,radius:205};
export const CITY_STOP = {x:-91,y:.32,z:0,exit:[-82,1.98,5]};
export const PLANET_STOP = {x:6280,y:.32,z:-4600,exit:[6289,1.98,-4595]};
export const JOURNEY_SECONDS = 76;
// Dock approaches are straight and level. Intermediate points lift above the city.
export const RAIL_POINTS = [
 [-91,.32,0],[-91,.32,-38],[-91,19,-105],[-30,145,-220],
 [350,760,-800],[1500,2100,-1800],[3400,2800,-2800],
 [5200,1600,-3850],[6080,240,-4370],[6280,25,-4490],
 [6280,.32,-4550],[6280,.32,-4600]
];
const TIMING = [[0,0],[.12,1/11],[.23,2/11],[.34,3/11],[.49,5/11],[.64,7/11],[.77,8/11],[.87,9/11],[.95,10/11],[1,1]];
export function routeProgress(t){
 t=Math.max(0,Math.min(1,t));
 for(let i=1;i<TIMING.length;i++)if(t<=TIMING[i][0]){const [a,u]=TIMING[i-1],[b,v]=TIMING[i];return u+(v-u)*(t-a)/(b-a);}
 return 1;
}
export function createJourney(){return {mode:'walking',world:'city',origin:'city',destination:'planet',time:0,progress:0};}
export function boardJourney(s){if(s.mode!=='walking')return false;s.origin=s.world;s.destination=s.world==='city'?'planet':'city';s.mode='riding';s.time=0;s.progress=s.origin==='city'?0:1;return true;}
export function advanceJourney(s,dt){
 if(s.mode!=='riding')return;
 s.time=Math.min(JOURNEY_SECONDS,s.time+Math.max(0,dt));
 const p=routeProgress(s.time/JOURNEY_SECONDS);s.progress=s.origin==='city'?p:1-p;
 if(s.time>=JOURNEY_SECONDS){s.mode='arrived';s.progress=s.destination==='city'?0:1;}
}
export function leaveJourney(s){if(s.mode!=='arrived')return false;s.world=s.destination;s.mode='walking';return true;}
export function nearStation(s,x,z){const p=s.world==='city'?CITY_STOP:PLANET_STOP;return Math.hypot(x-(p.x+9),z-(p.z+5))<15;}
export function journeyPhase(s){
 if(s.mode==='arrived')return s.destination==='city'?'AURORA中央駅に到着':'LUMEN観測駅に到着';
 const t=s.time/JOURNEY_SECONDS;
 return t<.12?(s.origin==='city'?'都市の駅を出発':'惑星の駅を出発'):t<.34?'上昇・宇宙の軌道へ':t<.67?'星間航行':t<.9?'到着地へ降下':'駅に進入';
}
export function terrainHeight(x,z){
 // A level station approach, then continuous walkable rolling basalt terrain.
 const fade=Math.max(0,Math.min(1,(x+92)/42));
 const habitat=Math.min(1,Math.hypot(Math.max(0,Math.abs(x+46)-11),Math.max(0,Math.abs(z+3)-9))/8);
 return (fade*habitat*(1.4*Math.sin(x*.045)*Math.sin(z*.036)+.7*Math.sin(z*.071+x*.023)))||0;
}
export function withinPlanet(x,z){return Math.hypot(x,z)<PLANET.radius-8;}
export function headingForMotion(vx,vz,sourceX,sourceZ){return Math.atan2(vx,vz)-Math.atan2(sourceX,sourceZ);}
export function forwardFromFeet(root,Vector3){
 root.updateMatrixWorld(true);let x=0,z=0,count=0;
 for(const side of ['Left','Right']){
  let foot,toe;root.traverse(o=>{if(o.name.endsWith(side+'Foot'))foot=o;if(o.name.endsWith(side+'ToeBase'))toe=o;});
  if(foot&&toe){const a=foot.getWorldPosition(new Vector3()),b=toe.getWorldPosition(new Vector3());x+=b.x-a.x;z+=b.z-a.z;count++;}
 }
 if(!count||Math.hypot(x,z)<1e-5)throw Error('人物モデルの正面を判定できません');
 const length=Math.hypot(x,z);return {x:x/length,z:z/length};
}
