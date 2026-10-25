import {OFFSETS,ATLAS_PLACES} from './atlas.mjs';
import {TERMINALS,JOBS,CARDS,TONES,TONE_SEQUENCES,terminal,deliveryJob,createActivities,usePost,createToneSession,pressTone,circuitStart,flipCircuit,circuitSolution,recordCircuit,navigation,mapProjection} from './activities.mjs';
import {DISTRICT_PLACES} from './freedom.mjs';
import {WORLD_NAMES} from './journey.mjs';

export function createActivitiesUI({state,save,notify,onOpen,onClose,onTravel,canOpen,getContext}){
 const $=id=>document.getElementById(id),panel=$('life-panel'),content=$('life-content'),title=$('life-title'),route=$('route-hud');
 const points=[...TERMINALS.map(p=>({...p,id:'life:'+p.id,z:p.z+3.1,yaw:0,kind:p.kind==='post'?'配達':'ゲーム'})),...ATLAS_PLACES.map(p=>({...p,id:'atlas:'+p.id,kind:'見どころ'})),...DISTRICT_PLACES.map(p=>({...p,id:'district:'+p.id,world:'city',kind:'地区'}))];
 let modal=null,selected=null,target=null,lastRender=-1,audio=null,audioToken=0,session=createToneSession(),circuitLevel=0,mask=circuitStart(0),moves=0;
 const element=(tag,text,parent=content,cls='')=>{const el=document.createElement(tag);if(text!==null)el.textContent=text;if(cls)el.className=cls;parent.append(el);return el;};
 const button=(text,action,parent=content)=>{const b=element('button',text,parent);b.onclick=action;return b;};
 function stopPlayback(){audioToken++;for(const b of panel.querySelectorAll('.tone-pad'))b.classList.remove('lit');}
 function close(){if(!modal)return;stopPlayback();modal=null;panel.classList.add('hidden');onClose();}
 function show(kind){if(!canOpen())return false;stopPlayback();if(!modal)onOpen();modal=kind;panel.classList.remove('hidden');content.replaceChildren();$('life-status').textContent='';return true;}
 function tone(hz){try{audio||=new (window.AudioContext||window.webkitAudioContext)();audio.resume();const osc=audio.createOscillator(),gain=audio.createGain(),t=audio.currentTime;osc.frequency.value=hz;osc.type='sine';gain.gain.setValueAtTime(.001,t);gain.gain.exponentialRampToValueAtTime(.09,t+.03);gain.gain.exponentialRampToValueAtTime(.001,t+.35);osc.connect(gain).connect(audio.destination);osc.start();osc.stop(t+.4);}catch{}}
 function setTarget(p){target=p;close();notify(`${p.name}への道案内を開始しました。矢印は目的地の方向を示します。道路に沿う経路ではないので、壁や水面は迂回してください。`);}
 function currentPoints(){return points.filter(p=>p.world===getContext().world);}
 function openMap(){
  if(!show('map'))return;title.textContent='探索マップ';const context=getContext(),list=currentPoints();
  if(!selected||selected.world!==context.world)selected=list[0];
  const grid=element('div',null,content,'map-layout'),left=element('div',null,grid),right=element('div',null,grid,'map-controls');
  element('p',WORLD_NAMES[context.world]+' · 点を選ぶと案内できます。地図を開いている間は移動を停止します。',left,'life-note');
  const canvas=element('canvas',null,left,'exploration-map');canvas.id='exploration-map';canvas.width=620;canvas.height=430;canvas.setAttribute('aria-label',WORLD_NAMES[context.world]+'の地図');
  const label=element('label','目的地',right);label.htmlFor='map-destination';const select=element('select',null,right);select.id='map-destination';for(const p of list){const o=element('option',p.kind+' · '+p.name,select);o.value=p.id;}select.value=selected.id;
  const name=element('h3',selected.name,right),hint=element('p','',right,'life-note');
  const sync=()=>{selected=list.find(p=>p.id===select.value);name.textContent=selected.name;const n=navigation(selected,context.world,context.position,context.yaw);hint.textContent=`現在地から約${n.distance}m。白い矢印が自分、金色の点が選択中の場所です。`;drawMap();};select.onchange=sync;
  button('道案内を開始',()=>setTarget(selected),right);
  const jump=button('この場所の近くへ移動',()=>{const p=selected;close();onTravel(p);},right);jump.disabled=!context.canTravel;
  button('任意の道案内を解除',()=>{target=null;close();notify('任意の道案内を解除しました。配達中は届け先の案内が続きます。');},right);
  const job=deliveryJob(state);if(job){element('p',`預かり中：${job.parcel}`,right,'parcel-note');button('届け先を案内',()=>setTarget({...terminal(job.to),id:'delivery-target',kind:'配達'}),right);button('預かった荷物を返す',()=>{state.activeDelivery=null;save();target=null;openMap();},right);}
  button('旅の記録を見る',openJournal,right);
  canvas.onclick=e=>{const rect=canvas.getBoundingClientRect(),x=(e.clientX-rect.left)*canvas.width/rect.width,y=(e.clientY-rect.top)*canvas.height/rect.height,projection=mapProjection(context.world,canvas.width,canvas.height);let best=null,d=24;for(const p of list){const q=projection.point(p.x,p.z),n=Math.hypot(q[0]-x,q[1]-y);if(n<d){d=n;best=p;}}if(best){select.value=best.id;sync();}};
  sync();
 }
 function drawMap(){
  const canvas=$('exploration-map');if(modal!=='map'||!canvas)return;const ctx=canvas.getContext('2d'),{world,position,yaw}=getContext(),projection=mapProjection(world,canvas.width,canvas.height),point=projection.point;
  ctx.fillStyle='#0b1d29';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.strokeStyle='#24424c';ctx.lineWidth=1;
  for(let x=0;x<canvas.width;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,canvas.height);ctx.stroke();}for(let y=0;y<canvas.height;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(canvas.width,y);ctx.stroke();}
  ctx.fillStyle='#183d43';ctx.strokeStyle='#6da99c';ctx.lineWidth=1.5;
  if(world==='city'){const a=point(-310,-310),b=point(310,155);ctx.fillRect(a[0],a[1],b[0]-a[0],b[1]-a[1]);ctx.strokeRect(a[0],a[1],b[0]-a[0],b[1]-a[1]);const c=point(500,-100);ctx.beginPath();ctx.arc(...c,220*projection.scale,0,Math.PI*2);ctx.fill();ctx.stroke();
   ctx.strokeStyle='#41606a';ctx.lineWidth=5;for(const x of [-285,-210,-150,0,150,210,285]){ctx.beginPath();ctx.moveTo(...point(x,-305));ctx.lineTo(...point(x,150));ctx.stroke();}for(const z of [-290,-230,-170,-58,25,130]){ctx.beginPath();ctx.moveTo(...point(-310,z));ctx.lineTo(...point(310,z));ctx.stroke();}
  }else{const c=point(0,0);ctx.beginPath();ctx.arc(...c,197*projection.scale,0,Math.PI*2);ctx.fill();ctx.stroke();}
  for(const p of currentPoints()){const q=point(p.x,p.z);ctx.fillStyle=p.id===selected?.id?'#f1cc89':p.kind==='配達'?'#9de4bf':p.kind==='ゲーム'?'#c7a4ed':'#73a4b4';ctx.beginPath();ctx.arc(...q,p.id===selected?.id?7:4.5,0,Math.PI*2);ctx.fill();}
  const [ox,oz]=OFFSETS[world],q=point(position.x-ox,position.z-oz);ctx.save();ctx.translate(...q);ctx.rotate(-yaw);ctx.fillStyle='#f1f6e9';ctx.beginPath();ctx.moveTo(0,-10);ctx.lineTo(6,7);ctx.lineTo(0,3);ctx.lineTo(-6,7);ctx.closePath();ctx.fill();ctx.restore();ctx.fillStyle='#b6cbd0';ctx.font='12px sans-serif';ctx.fillText('N ↑',18,24);
 }
 function openJournal(){
  if(!show('journal'))return;title.textContent='旅の記録';element('p','配達、音の記憶、配電、観測カード。各地の小さな遊びの記録です。',content,'life-note');
  const badges=element('div',null,content,'life-badges');for(const [done,name] of [[state.delivered.length===3,'星間配達員'],[state.tonesWon,'結晶の共鳴士'],[state.circuits.length===3,'回路設計士'],[state.cards.length===9,'星の観測者']])element('span',(done?'✓ ':'○ ')+name,badges,done?'earned':'');
  const columns=element('div',null,content,'journal-columns'),jobs=element('div',null,columns),cards=element('div',null,columns);
  element('h3',`配達 ${state.delivered.length}/3 · 累計${state.deliveryCount}件`,jobs);for(const j of JOBS)element('p',(state.delivered.includes(j.id)?'✓ ':'○ ')+j.name,jobs,'journal-item');
  element('h3',`配電パズル ${state.circuits.length}/3`,jobs);state.circuitBest.forEach((best,i)=>element('p',`回路${i+1}：${best===null?'未クリア':best+'手でクリア'}`,jobs,'journal-item'));
  element('h3',`観測カード ${state.cards.length}/9`,cards);for(const c of CARDS)element('p',(state.cards.includes(c.id)?'✓ ':'○ ')+c.name,cards,'journal-item');
  const actions=element('div',null,content,'life-buttons');button('地図へ戻る',openMap,actions);button('記録を書き出す',exportProgress,actions);button('記録を読み込む',()=>$('life-import').click(),actions);
 }
 function openTone(){if(!show('tone'))return;session=createToneSession();renderTone();}
 function renderTone(){
  stopPlayback();content.replaceChildren();title.textContent='結晶の音を覚えよう';element('p','お手本の音と光の順番を覚え、同じ順番にパッドを押してください。音が出なくても色の点滅で遊べます。1〜4キーでも操作できます。',content,'life-note');
  const status=element('p',session.mode==='won'?'3つの旋律を再現！ 共鳴士バッジを獲得しました。':`旋律 ${session.level+1}/3 · ${TONE_SEQUENCES[session.level].length}音`,content,'game-status');status.id='tone-status';
  if(session.mode==='won'){button('もう一度遊ぶ',openTone);return;}
  const pads=element('div',null,content,'tone-pads');TONES.forEach((t,i)=>{const b=button(`${i+1} ${t.name}`,()=>playPad(i),pads);b.className='tone-pad';b.style.setProperty('--pad-color',t.color);b.dataset.tone=String(i);b.disabled=session.mode!=='input';});
  const listen=button('お手本を聴く',listenTone);listen.id='tone-listen';
 }
 function listenTone(){
  if(modal!=='tone'||session.mode==='won')return;stopPlayback();const token=audioToken;session.mode='listening';session.cursor=0;const sequence=TONE_SEQUENCES[session.level];$('tone-status').textContent='お手本を覚えてください…';$('tone-listen').disabled=true;for(const b of panel.querySelectorAll('.tone-pad'))b.disabled=true;
  sequence.forEach((index,i)=>{setTimeout(()=>{if(audioToken!==token||modal!=='tone')return;const b=panel.querySelector(`[data-tone="${index}"]`);b.classList.add('lit');$('tone-status').textContent=`お手本 ${i+1}/${sequence.length}：${TONES[index].name}`;tone(TONES[index].hz);},i*650+250);setTimeout(()=>{if(audioToken===token)bUnlight(index);},i*650+650);});
  setTimeout(()=>{if(audioToken!==token||modal!=='tone')return;session.mode='input';$('tone-status').textContent='同じ順番に押してください';$('tone-listen').disabled=false;for(const b of panel.querySelectorAll('.tone-pad'))b.disabled=false;},sequence.length*650+350);
 }
 function bUnlight(i){panel.querySelector(`[data-tone="${i}"]`)?.classList.remove('lit');}
 function playPad(i){
  if(modal!=='tone'||session.mode!=='input')return;tone(TONES[i].hz);const result=pressTone(session,i);
  if(result==='won'){state.tonesWon=true;save();renderTone();}else if(result==='next'){renderTone();$('tone-status').textContent='正解！ 次の旋律に進みます。お手本を聴いてください。';}else if(result==='miss'){renderTone();$('tone-status').textContent='違う音でした。もう一度お手本を聴いて挑戦できます。';}else $('tone-status').textContent=`${session.cursor}音目まで一致しました。`;
 }
 function openCircuit(){if(!show('circuit'))return;circuitLevel=state.circuits.length<3?[0,1,2].find(i=>!state.circuits.includes(i)):0;mask=circuitStart(circuitLevel);moves=0;renderCircuit();}
 function renderCircuit(){
  content.replaceChildren();title.textContent='配電パズル';element('p','押したマスと上下左右が反転します。9つをすべて点灯させよう。1〜9キーでも操作できます。',content,'life-note');
  const row=element('div',null,content,'life-buttons');[0,1,2].forEach(i=>{const b=button('回路 '+(i+1)+(state.circuits.includes(i)?' ✓':''),()=>{circuitLevel=i;mask=circuitStart(i);moves=0;renderCircuit();},row);b.classList.toggle('selected',i===circuitLevel);});
  const status=element('p',mask===511?`回路${circuitLevel+1}を復旧！ ${moves}手 · 全体 ${state.circuits.length}/3`:`回路${circuitLevel+1} · ${moves}手`,content,'game-status');status.id='circuit-status';
  const grid=element('div',null,content,'circuit-grid');for(let i=0;i<9;i++){const on=!!(mask&(1<<i)),b=button(String(i+1),()=>playCircuit(i),grid);b.className='circuit-cell'+(on?' on':'');b.setAttribute('aria-label',`回路${i+1} ${on?'点灯':'消灯'}`);b.disabled=mask===511;}
  const buttons=element('div',null,content,'life-buttons');button('ヒント',()=>{const path=circuitSolution(mask);$('circuit-status').textContent=path?.length?`次は ${path[0]+1} のマスを試してみよう。`:'すべて点灯しています。';},buttons);button('この回路をやり直す',()=>{mask=circuitStart(circuitLevel);moves=0;renderCircuit();},buttons);
 }
 function playCircuit(i){if(modal!=='circuit'||mask===511)return;mask=flipCircuit(mask,i);moves++;tone(180+i*35);if(mask===511){recordCircuit(state,circuitLevel,moves);save();}renderCircuit();}
 function use(t){if(t.kind==='post'){const r=usePost(state,t.id);if(r.changed){target=null;save();}notify(r.message);}else if(t.kind==='tone')openTone();else openCircuit();}
 function exportProgress(){const url=URL.createObjectURL(new Blob([JSON.stringify({kind:'aurora-life',version:1,progress:state},null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='AURORA-life-v9.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('life-status').textContent='記録を書き出しました。';}
 $('life-import').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>20000)throw Error();const parsed=JSON.parse(await file.text());if(parsed.kind!=='aurora-life'||parsed.version!==1)throw Error();const incoming=createActivities(parsed.progress);state.delivered=[...new Set([...state.delivered,...incoming.delivered])];state.cards=[...new Set([...state.cards,...incoming.cards])];state.circuits=[...new Set([...state.circuits,...incoming.circuits])];state.deliveryCount=Math.max(state.deliveryCount,incoming.deliveryCount);state.tonesWon||=incoming.tonesWon;state.activeDelivery||=incoming.activeDelivery;state.circuitBest=state.circuitBest.map((v,i)=>v===null?incoming.circuitBest[i]:Math.min(v,incoming.circuitBest[i]??Infinity));save();openJournal();$('life-status').textContent='記録を統合しました。今までの達成内容も保持しています。';}catch{$('life-status').textContent='AURORAの「記録を書き出す」で保存したJSONを選んでください。';}finally{e.target.value='';}};
 function update(time,context){
  if(time-lastRender<.2)return;lastRender=time;const job=deliveryJob(state),destination=target||(job?terminal(job.to):null),n=navigation(destination,context.world,context.position,context.yaw);
  route.classList.toggle('hidden',!n||!context.started);if(n)route.textContent=(job?`配達中：${job.parcel}\n`:'')+(n.otherWorld?`${WORLD_NAMES[n.world]}へ · 銀河鉄道で移動`:`${n.arrow} ${n.name}まで ${n.distance}m`);
  if(modal==='map')drawMap();document.documentElement.dataset.activities=JSON.stringify({progress:state,modal,target:destination?.name||null,circuit:{level:circuitLevel,mask,moves},tone:session});
 }
 $('map-open').onclick=openMap;$('journal-open').onclick=openJournal;$('life-close').onclick=close;$('life-map-tab').onclick=openMap;$('life-journal-tab').onclick=openJournal;
 return {use,update,openMap,openJournal,close,get modal(){return modal;},get circuitMask(){return mask;},handleKey(code){if(!modal)return false;if(code==='Escape'){close();return true;}if(modal==='tone'&&/^Digit[1-4]$/.test(code))playPad(Number(code.slice(-1))-1);if(modal==='circuit'&&/^Digit[1-9]$/.test(code))playCircuit(Number(code.slice(-1))-1);return true;}};
}
