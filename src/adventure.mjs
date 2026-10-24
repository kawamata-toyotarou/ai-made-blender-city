export function createBody(){return {y:0,v:0,grounded:true,reset:true};}
export function requestJump(body,world){if(!body.grounded||body.reset)return false;body.v=world==='planet'?5.8:6.8;body.grounded=false;return true;}
export function stepBody(body,dt,floor,world){
 dt=Math.min(.1,Math.max(0,dt));
 if(body.reset){body.y=floor;body.v=0;body.grounded=true;body.reset=false;return body;}
 if(body.grounded&&Math.abs(body.y-floor)<.4){body.y=floor;return body;}
 if(body.grounded&&body.y-floor>=.4){body.grounded=false;body.v=0;}
 const gravity=world==='planet'?8:world==='machine'?14:18;
 body.y+=body.v*dt-.5*gravity*dt*dt;body.v-=gravity*dt;
 if(body.y<=floor){body.y=floor;body.v=0;body.grounded=true;}
 return body;
}
export const REACTORS=[{id:0,x:-35,z:-48,name:'冷却炉'},{id:1,x:62,z:-30,name:'動力炉'},{id:2,x:35,z:65,name:'通信炉'}];
export const CELL_POSITIONS=[[-105,25],[-82,-15],[-50,26],[-35,-32],[8,-50],[46,-50],[76,-5],[48,48],[10,67]];
export function createQuest(value){const s={cells:[],defeated:[],reactors:[],claimed:false};if(value&&typeof value==='object'){
 for(const [k,n] of [['cells',9],['defeated',6],['reactors',3]])s[k]=[...new Set(Array.isArray(value[k])?value[k].filter(i=>Number.isInteger(i)&&i>=0&&i<n):[])];
 s.claimed=!!value.claimed&&s.reactors.length===3;
 }return s;}
export const spareCells=s=>s.cells.length-s.reactors.length;
export function repairReactor(s,id){
 if(!Number.isInteger(id)||id<0||id>2)return 'この装置は修復対象ではありません。';
 if(s.reactors.includes(id))return 'この炉は復旧済みです。';
 if(!s.defeated.includes(id*2)||!s.defeated.includes(id*2+1))return '周辺の故障ドローン2機をパルスで停止してください。';
 if(spareCells(s)<1)return '修復部品が1個必要です。光る部品へジャンプして集めてください。';
 s.reactors.push(id);return `${REACTORS[id].name}を復旧しました！ ${s.reactors.length}/3${s.reactors.length===3?' 中央アーカイブが開きました。':''}`;
}
export function pulseTarget(origin,direction,targets,occluded){
 let best=null,bestD=24;
 for(const t of targets){if(t.disabled)continue;const dx=t.x-origin.x,dy=t.y-origin.y,dz=t.z-origin.z,d=dx*direction.x+dy*direction.y+dz*direction.z;
  const r=t.radius||1.1;if(d<0||d>bestD||dx*dx+dy*dy+dz*dz-d*d>r*r)continue;
  let wall=false;for(let v=.6;v<d-.5;v+=.4)if(occluded(origin.x+direction.x*v,origin.z+direction.z*v,origin.y+direction.y*v)){wall=true;break;}
  if(!wall){best=t;bestD=d;}
 }return best;
}
export function replyFor(role,query,state,world='city'){
 const q=String(query).slice(0,240),done=state?.reactors?.length||0,cells=state?.cells?.length||0;
 if(/ジャンプ|部品|操作/.test(q))return 'Spaceでジャンプ、Jまたは短い左クリックでパルスです。NEXUS-9の光る部品は少し高いので、近づいて跳んでみてください。ドローン視点ではSpaceが上昇です。';
 if(/旅|行き|鉄道|惑星|宇宙/.test(q))return '銀河鉄道はAURORA → LUMEN → NEXUS-9と続きます。LUMENの駅で「機械惑星 NEXUS-9」を選んでFで乗車。帰りも駅で行き先を選べます。スキップも使えます。';
 if(/仕事|任務|修理|何を|進捗/.test(q))return world==='machine'?`修復部品を集め、各炉の故障ドローン2機を停止し、炉の端末でFを押してください。現在は部品${cells}個、炉${done}/3です。3基とも復旧したら中央アーカイブへ。`:'街では店巡りや庭づくりができます。銀河鉄道の先では、LUMENの探査とNEXUS-9の動力炉復旧が待っています。';
 if(/ここ|場所|あなた|名前/.test(q))return world==='machine'?`${role}です。ここは惑星規模の機械都市NEXUS-9。地殻まで金属のパネルと回路で構成されています。私たち機械人が設備を保守しています。`:world==='planet'?`${role}です。LUMENの観測基地で結晶や古代の星図を調べています。駅の先には機械の惑星もあるそうですよ。`:`${role}です。この街は歩くだけでなく、電車、車、ボート、庭づくりも楽しめます。気になる場所はありますか？`;
 if(world==='machine'&&done===3)return '街の動力が戻りました！中央アーカイブの記録を受け取ってください。機械の星にも、誰かを待つ時間はあるんですよ。';
 return world==='machine'?'金属の足音にも、それぞれ違うリズムがあります。私は冷却ファンの音を聴くのが好きです。旅のこと、修理の仕事、ジャンプの操作なら案内できます。':world==='planet'?'夜の結晶は昼と違う色に見えます。次はあの星まで線路が続くと思うと、少しわくわくしますね。':'運河の夕景がおすすめです。自分で置いたベンチから眺めると、街が少し自分の場所になった気がします。';
}
