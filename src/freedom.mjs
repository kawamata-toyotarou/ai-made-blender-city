export const DISTRICT_PLACES=[
 {id:'canal',name:'運河プロムナード',x:-286,z:72,yaw:-.3},
 {id:'market',name:'東・ナイトマーケット',x:210,z:88,yaw:0},
 {id:'workshop',name:'北・メイカーズ広場',x:-150,z:-230,yaw:0},
 {id:'garden',name:'ガーデン公園',x:180,z:130,yaw:0},
 {id:'city-car',name:'シティカー乗り場',x:-207,z:68,yaw:Math.PI/2},
 {id:'cafe',name:'運河カフェ入口',x:-273,z:82,yaw:0},
 {id:'food',name:'マーケット入口',x:216,z:82,yaw:0},
 {id:'gallery',name:'工房ギャラリー入口',x:-143,z:-236,yaw:0}
];
export const WEATHER=['clear','sunset','rain'];
export function districtAt(x,z){return x< -220?'運河・リバーサイド':z< -175?'北・メイカーズ街':x>105?'東・ガーデン＆マーケット':'AURORA 中央街区';}
export function droneHeight(h,input,dt){return Math.max(3,Math.min(220,h+input*Math.min(.25,Math.max(0,dt))*12));}
export function validStamps(value){return new Set(Array.isArray(value)?value.filter(x=>['canal-cafe','market-food','workshop-exhibit'].includes(x)):[]);}
