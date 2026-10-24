export const OFFSETS={city:[0,0],planet:[6400,-4600],machine:[13200,-9200]};
export function cityContains(x,z){return (x>=-310&&x<=310&&z>=-310&&z<=155)||(x>=280&&Math.hypot(x-500,z+100)<=222);}
export function lumenReserved(x,z){return (x>-143&&x< -77&&z>-128&&z< -60)||(x>-151&&x< -105&&z>44&&z<98)||(x>-66&&x< -4&&z>108&&z<150);}
export function mountainHeight(x,z){const dx=x-500,dz=z+100,q=Math.max(0,1-Math.hypot(dx,dz)/220);return q**1.4*182+q*(1-q)*(38*Math.sin(dx*.043)*Math.cos(dz*.037)+19*Math.sin(dx*.093+dz*.061)+9*Math.sin(dz*.13-dx*.075));}
export const ATLAS_PLACES=[
 {id:'academy',world:'city',name:'巨大キャンパス・AURORA学園',x:60,z:-184,yaw:0,spot:[60,-204],text:'科学と芸術の学園。左右の教室と奥のロボット研究室へ入れます。中庭の日時計は182mのアスター山を指しています。'},
 {id:'classroom',world:'city',name:'学園・教室とロボット研究室',x:40,z:-230,yaw:Math.PI/2,spot:[36,-230],text:'机、椅子、教材端末、研究用アーム。キャンパスの地上階は中庭に向けて開かれています。'},
 {id:'trail',world:'city',name:'アスター山・登山口',x:291,z:-96,yaw:-Math.PI/2,spot:[294,-96],text:'山頂182mまで曲がりくねった登山道。道標と途中の休憩デッキをたどり、街を別の高さから眺めよう。'},
 {id:'summit',world:'city',name:'アスター山・山頂天文台',x:500,z:-97,yaw:Math.PI/2,spot:[500,-100],text:'アスター山の山頂に到達！ 眼下には街と学園、空には銀河鉄道。天体望遠鏡で旅の出発点を振り返れます。'},
 {id:'observatory',world:'planet',name:'LUMEN・深宇宙天文台',x:-110,z:-65,yaw:0,spot:[-110,-91],text:'開放ドームの天文台。巨大望遠鏡と分光解析机で空を調べる研究基地です。奥のNEXUS-9を目指す航路もここで発見されました。'},
 {id:'singing-gate',world:'planet',name:'LUMEN・歌う結晶の門',x:-35,z:145,yaw:0,spot:[-35,133],text:'歌う門の共鳴を記録。23の石弧に走る紫の光が、銀河の周期と同期しています。Fを押すたび共鳴音が変わります。'},
 {id:'biosphere',world:'planet',name:'LUMEN・異星植物の段々畑',x:-127,z:96,yaw:0,spot:[-128,89],text:'異星の蘭を育てる段々畑。葉の形、発光する花、灌漑配管を観察できます。持ち帰らず、観測記録だけを残しましょう。'},
 {id:'aeroworks',world:'machine',name:'NEXUS-9・空飛ぶ車の工廠',x:-128,z:59,yaw:0,spot:[-128,54],text:'イオンスキマーの工廠。Fで操縦席へ。WASDで移動、Spaceで上昇、Xで下降、Fで工廠へ着陸。上空には定期便も飛んでいます。'},
 {id:'deck',world:'machine',name:'NEXUS-9・機械甲板を観察',x:-104,z:-18,yaw:-Math.PI/2,spot:[-104,-22],text:'甲板は金属パネル、保守ハッチ、換気口、ボルト、誘導灯の多層構造。機械惑星そのものが、修理を続ける巨大な宇宙船です。'}
];
export function atlasPlace(id){return ATLAS_PLACES.find(p=>p.id===id);}
export function validAtlas(value){return new Set(Array.isArray(value)?value.filter(id=>ATLAS_PLACES.some(p=>p.id===id)):[]);}
export function skyRoute(time,index){const a=time*(.065+index*.005)+index*Math.PI*2/6,r=120+index%3*20;return {x:Math.cos(a)*r,z:Math.sin(a)*r,y:29+index%3*16+Math.sin(a*2)*3,yaw:Math.atan2(-Math.sin(a),Math.cos(a))};}
export function stepSkimmer(position,yaw,forward,side,vertical,dt){
 const t=Math.max(0,Math.min(.25,dt)),n=Math.hypot(forward,side)||1;
 let x=position.x+(side*Math.cos(yaw)-forward*Math.sin(yaw))*t*20/n,z=position.z+(-forward*Math.cos(yaw)-side*Math.sin(yaw))*t*20/n;
 const r=Math.hypot(x-13200,z+9200);if(r>185){x=13200+(x-13200)*185/r;z=-9200+(z+9200)*185/r;}
 return {x,z,y:Math.max(26,Math.min(115,position.y+vertical*t*12))};
}
