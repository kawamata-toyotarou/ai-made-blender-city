import {OFFSETS} from './atlas.mjs';
import {terrainHeight} from './journey.mjs';

export const TERMINALS=[
 {id:'city-post',world:'city',name:'リバーサイド郵便局',x:-203,z:66,kind:'post'},
 {id:'academy-post',world:'city',name:'学園の受取ロッカー',x:68,z:-184,kind:'post'},
 {id:'lumen-post',world:'planet',name:'LUMEN星港ポスト',x:-113,z:12,kind:'post'},
 {id:'garden-post',world:'planet',name:'植物園の標本受付',x:-118,z:94,kind:'post'},
 {id:'nexus-post',world:'machine',name:'機械惑星の輸送窓口',x:-124,z:8,kind:'post'},
 {id:'tone-game',world:'planet',name:'結晶の音を覚えるゲーム',x:-63,z:138,kind:'tone'},
 {id:'circuit-game',world:'machine',name:'配電パズル・9つの回路',x:-68,z:-10,kind:'circuit'}
];
export const JOBS=[
 {id:'academy-supplies',name:'学園へ教材を届ける',from:'city-post',to:'academy-post',parcel:'光学教材'},
 {id:'lumen-seeds',name:'植物園へ標本を届ける',from:'lumen-post',to:'garden-post',parcel:'異星植物の標本'},
 {id:'interstellar-mail',name:'機械惑星から故郷へ',from:'nexus-post',to:'city-post',parcel:'機械人からの手紙'}
];
export const CARDS=[
 {id:'campus',world:'city',name:'学園の日時計',x:60,z:-214,floor:.09},
 {id:'trail',world:'city',name:'アスター山の道標',x:294,z:-96},
 {id:'summit',world:'city',name:'山頂からの街',x:500,z:-97,floor:182.25},
 {id:'telescope',world:'planet',name:'深宇宙の光',x:-120,z:-96,floor:2.2},
 {id:'gate',world:'planet',name:'結晶のハーモニー',x:-35,z:129},
 {id:'orchid',world:'planet',name:'異星の蘭',x:-128,z:92},
 {id:'port',world:'machine',name:'機械人の足音',x:-106,z:18,floor:.16},
 {id:'reactor',world:'machine',name:'動力の記憶',x:-12,z:-38,floor:.16},
 {id:'skimmer',world:'machine',name:'空の定期便',x:-128,z:58,floor:.16}
];
export const TONES=[{name:'青',hz:261.63,color:'#78d9f0'},{name:'緑',hz:329.63,color:'#8fe5b7'},{name:'紫',hz:392,color:'#c7a0ef'},{name:'金',hz:523.25,color:'#f2ce8b'}];
export const TONE_SEQUENCES=[[0,2,1],[3,0,2,1],[1,3,2,0,2]];
export const terminal=id=>TERMINALS.find(t=>t.id===id);
export const deliveryJob=state=>JOBS.find(j=>j.id===state.activeDelivery);
const ids=(value,allowed)=>[...new Set(Array.isArray(value)?value.filter(v=>allowed.includes(v)):[])];
const integer=(v,max=9999)=>Number.isSafeInteger(v)&&v>=0&&v<=max?v:0;
export function createActivities(value){
 const v=value&&typeof value==='object'?value:{};
 return {version:1,activeDelivery:JOBS.some(j=>j.id===v.activeDelivery)?v.activeDelivery:null,delivered:ids(v.delivered,JOBS.map(j=>j.id)),deliveryCount:integer(v.deliveryCount),cards:ids(v.cards,CARDS.map(c=>c.id)),tonesWon:v.tonesWon===true,circuits:ids(v.circuits,[0,1,2]),circuitBest:[0,1,2].map(i=>Number.isSafeInteger(v.circuitBest?.[i])&&v.circuitBest[i]>0&&v.circuitBest[i]<1000?v.circuitBest[i]:null)};
}
export function usePost(state,id){
 const active=deliveryJob(state);
 if(active?.to===id){state.delivered=[...new Set([...state.delivered,active.id])];state.deliveryCount=Math.min(9999,state.deliveryCount+1);state.activeDelivery=null;return {changed:true,delivered:true,message:`${active.parcel}を届けました！ 配達 ${state.delivered.length}/3${state.delivered.length===3?' · 星間配達員バッジを獲得':''}`};}
 if(active)return {changed:false,message:`${active.parcel}を預かっています。${terminal(active.to).name}へ届けてください。`};
 const job=JOBS.find(j=>j.from===id);
 if(!job)return {changed:false,message:'受取窓口です。郵便局や星港で荷物を預かってください。'};
 state.activeDelivery=job.id;return {changed:true,message:`${job.parcel}を預かりました。${terminal(job.to).name}まで届けよう。マップと道案内を使えます。`};
}
export function collectCard(state,id){if(!CARDS.some(c=>c.id===id)||state.cards.includes(id))return false;state.cards.push(id);return true;}
export function createToneSession(){return {level:0,cursor:0,mode:'ready',mistakes:0};}
export function pressTone(s,index){
 if(s.mode!=='input'||!Number.isInteger(index)||index<0||index>3)return 'ignored';
 if(TONE_SEQUENCES[s.level][s.cursor]!==index){s.cursor=0;s.mistakes++;s.mode='ready';return 'miss';}
 s.cursor++;if(s.cursor<TONE_SEQUENCES[s.level].length)return 'correct';
 s.level++;s.cursor=0;s.mode=s.level===TONE_SEQUENCES.length?'won':'ready';return s.mode==='won'?'won':'next';
}
export function flipCircuit(mask,index){
 if(!Number.isInteger(mask)||mask<0||mask>511||!Number.isInteger(index)||index<0||index>8)return mask;
 const row=Math.floor(index/3),col=index%3;for(const [r,c] of [[row,col],[row-1,col],[row+1,col],[row,col-1],[row,col+1]])if(r>=0&&r<3&&c>=0&&c<3)mask^=1<<(r*3+c);return mask;
}
export function circuitStart(level){return [[0,4,8],[1,3,5,7],[0,1,4,7,8]][level%3].reduce(flipCircuit,511);}
export function circuitSolution(mask){
 if(mask===511)return [];if(!Number.isInteger(mask)||mask<0||mask>511)return null;
 const queue=[{mask,path:[]}],seen=new Set([mask]);
 for(let i=0;i<queue.length;i++)for(let k=0;k<9;k++){const next=flipCircuit(queue[i].mask,k);if(seen.has(next))continue;const path=[...queue[i].path,k];if(next===511)return path;seen.add(next);queue.push({mask:next,path});}return null;
}
export function recordCircuit(state,level,moves){if(!Number.isInteger(level)||level<0||level>2||!Number.isInteger(moves)||moves<1||moves>999)return false;state.circuits=[...new Set([...state.circuits,level])];state.circuitBest[level]=Math.min(state.circuitBest[level]??Infinity,moves);return true;}
export function navigation(target,world,position,yaw=0){
 if(!target)return null;if(target.world!==world)return {otherWorld:true,world:target.world,name:target.name};
 const [ox,oz]=OFFSETS[world],dx=ox+target.x-position.x,dz=oz+target.z-position.z,a=Math.atan2(dx,-dz)+yaw;
 return {otherWorld:false,distance:Math.round(Math.hypot(dx,dz)),arrow:['↑','↗','→','↘','↓','↙','←','↖'][((Math.round(a/(Math.PI/4))%8)+8)%8],name:target.name};
}
export function activityFloor(item,mountain){return item.floor??(item.world==='city'?mountain(item.x,item.z):item.world==='planet'?terrainHeight(item.x,item.z):.16);}
export const MAP_EXTENTS={city:{minX:-325,maxX:730,minZ:-330,maxZ:170},planet:{minX:-205,maxX:205,minZ:-205,maxZ:205},machine:{minX:-205,maxX:205,minZ:-205,maxZ:205}};
export function mapProjection(world,width,height){
 const b=MAP_EXTENTS[world],scale=Math.min((width-50)/(b.maxX-b.minX),(height-50)/(b.maxZ-b.minZ)),cx=(b.minX+b.maxX)/2,cz=(b.minZ+b.maxZ)/2;
 return {point:(x,z)=>[width/2+(x-cx)*scale,height/2+(z-cz)*scale],scale};
}
