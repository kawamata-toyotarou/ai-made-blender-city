import * as T from '../vendor/three.module.js';
import {METRO_STOPS,SURVEYS,metroPose,liftHeight,insideUpper,cityBounds} from './expansion.mjs';
import {PLANET,terrainHeight} from './journey.mjs';
export function createExpansion(scene,rooms,roofHeights,train){
 const root=new T.Group();scene.add(root);const obstacles=[],upperObstacles=[];
 const mat=(color,metalness=0,roughness=.7)=>new T.MeshStandardMaterial({color,metalness,roughness});
 const stone=mat(0x455761),white=mat(0xc6cfca,.35),wood=mat(0x775c45),dark=mat(0x172938,.6),green=mat(0x32786a),seat=mat(0x427d80);
 const glow=new T.MeshStandardMaterial({color:0x83e7d3,emissive:0x2d9d91,emissiveIntensity:.7});
 const glass=new T.MeshStandardMaterial({color:0x89b8cb,transparent:true,opacity:.16,depthWrite:false,side:T.DoubleSide,roughness:.1});
 function mesh(g,m,p,parent=root){const o=new T.Mesh(g,m);o.position.set(...p);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
 const box=(s,p,m,parent)=>mesh(new T.BoxGeometry(...s),m,p,parent);
 function sign(text,p,width=5,parent=root){const c=document.createElement('canvas');c.width=768;c.height=128;const ctx=c.getContext('2d');ctx.fillStyle='#102331';ctx.fillRect(0,0,768,128);ctx.fillStyle='#b9f4dc';ctx.font='bold 39px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,384,64,740);const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;const m=new T.MeshBasicMaterial({map:t});const o=mesh(new T.PlaneGeometry(width,width/6),m,p,parent);const back=new T.Mesh(o.geometry,m);back.rotation.y=Math.PI;o.add(back);return o;}
 function plant(x,y,z,parent=root){mesh(new T.CylinderGeometry(.35,.25,.6,9),white,[x,y+.3,z],parent);mesh(new T.IcosahedronGeometry(.65,1),green,[x,y+1.15,z],parent);}
 function table(x,y,z,parent=root){box([2,.12,1.2],[x,y+.9,z],wood,parent);for(const dx of [-.8,.8])box([.08,.85,.8],[x+dx,y+.43,z],dark,parent);}
 function sofa(x,y,z,parent=root){box([2.3,.4,.9],[x,y+.45,z],seat,parent);box([2.3,.8,.18],[x,y+.9,z+.4],seat,parent);}
 const buildings=[];
 box([620,.12,465],[0,-.14,-77.5],stone);
 for(const x of [-285,-210,-150,0,150,210,285])box([13,.015,465],[x,-.06,-77.5],dark);
 for(const z of [-290,-230,-170,-58,25,130])box([620,.018,12],[0,-.05,z],dark);
 for(const x of [-255,-180,-120,120,180,255])for(const z of [-260,-200,-140,-80,-20,55,105]){
  if(Math.abs(x)<106&&z>-165)continue;
  if(x===180&&z===105)continue;
  const h=22+((Math.abs(x)*7+Math.abs(z)*13)%79);buildings.push({x,z,h,w:22,d:25});obstacles.push({x,z,w:22,d:25});
 }
 const towers=new T.InstancedMesh(new T.BoxGeometry(1,1,1),white,buildings.length),windows=new T.InstancedMesh(new T.BoxGeometry(1,1,1),new T.MeshStandardMaterial({color:0x36596b,metalness:.45,roughness:.24,emissive:0x244c54,emissiveIntensity:.3}),buildings.reduce((n,b)=>n+Math.floor(b.h/3)*4,0));
 const d=new T.Object3D();let k=0;buildings.forEach((b,i)=>{d.position.set(b.x,b.h/2,b.z);d.rotation.set(0,0,0);d.scale.set(b.w,b.h,b.d);d.updateMatrix();towers.setMatrixAt(i,d.matrix);towers.setColorAt(i,new T.Color().setHSL(.52+(i%4)*.015,.1,.32+(i%3)*.08));for(let y=3;y<b.h;y+=3)for(const side of [-1,1])for(const axis of [0,1]){d.position.set(b.x+(axis?0:side*11.04),y,b.z+(axis?side*12.54:0));d.scale.set(axis?20:.05,1.65,axis?.05:23);d.updateMatrix();windows.setMatrixAt(k++,d.matrix);}});windows.count=k;root.add(towers,windows);
 for(const x of [-285,-210,150,285])for(let z=-290;z<140;z+=30){plant(x+10,0,z);box([2,.5,.8],[x+10,.4,z+5],wood);}
 box([45,.08,42],[180,.03,105],green);for(let i=0;i<9;i++)plant(164+i%3*14,0,90+Math.floor(i/3)*14);
 sign('GARDEN DISTRICT',[180,3,125],12);
 // Extend the existing urban train, on its original east-west elevated alignment.
 box([610,.45,4.2],[0,14.4,-58],dark);for(const z of [-59,-57])box([610,.07,.08],[0,14.68,z],glow);
 for(let x=-290;x<310;x+=24)box([.7,14,.7],[x,7,-58],white);
 for(const [i,s] of METRO_STOPS.entries()){
  box([31,.4,5],[s.x,14.6,-52],white);box([32,.2,7],[s.x,19,-52],dark);
  for(const dx of [-14,14])box([.22,4.4,.22],[s.x+dx,16.8,-50],white);
  sign(s.name,[s.x,17.6,-49.3],10);box([2,14.5,2],[s.x+13,7.25,-49],glass);
 }
 train.clear();
 for(const x of [-8,0,8]){box([7.6,.2,3],[x,-.8,0],dark,train);box([7.7,.2,3.1],[x,1.5,0],white,train);for(const z of [-1.5,1.5]){box([7.6,.7,.13],[x,-.35,z],dark,train);box([7.4,1.2,.04],[x,.65,z],glass,train);for(const xx of [-3.6,0,3.6])box([.1,1.7,.1],[x+xx,.5,z],white,train);}sofa(x,-.75,-.8,train);}
 // Existing ground floors gain detail. Each real building gets a roof-level annex.
 const lifts=rooms.map((r,i)=>{const roof=Math.ceil((roofHeights[i]||70)+1),lx=r.front+r.side*3,lz=-r.doorY;
  for(const z of [-r.y-8,-r.y+8]){plant(r.front+r.side*2,.17,z);box([4,.08,.25],[r.x,3.3,z],glow);}
  const art=sign(r.label+' / AURORA',[r.x,2.6,-r.y-r.d/2+.3],8);
  const pendant=mesh(new T.TorusGeometry(.8,.045,6,32),glow,[r.x,3.1,-r.y]);pendant.rotation.x=Math.PI/2;
  box([3.4,.14,3.4],[lx,.17,lz],dark);sign('LIFT  /  F',[lx,2.7,lz-1.6],3);
  for(const y of [roof,roof+6]){
   box([18,.24,20],[r.x,y-.12,-r.y],white);for(const dz of [-10,10]){box([18,1.1,.12],[r.x,y+.55,-r.y+dz],glass);}for(const dx of [-9,9])box([.12,1.1,20],[r.x+dx,y+.55,-r.y],glass);
   if(y===roof){box([18,.16,20],[r.x,y+5.6,-r.y],white);for(const dx of [-9,9])for(const dz of [-10,10])box([.2,5.6,.2],[r.x+dx,y+2.8,-r.y+dz],dark);
    box([11,.025,14],[r.x,y+.02,-r.y],wood);
    for(const dz of [-8,8]){plant(r.x-6,y,-r.y+dz);box([5,2.5,.5],[r.x,y+1.25,-r.y+dz],dark);for(let j=0;j<16;j++)box([.2,.5+(j%3)*.1,.25],[r.x-2+j*.25,y+.6+(j%2)*1.1,-r.y+dz-.3],j%2?white:seat);}
    for(const dx of [-5,5]){box([.05,5,.05],[r.x+dx,y+2.8,-r.y],dark);const ring=mesh(new T.TorusGeometry(1.2,.06,6,36),glow,[r.x+dx,y+4.2,-r.y]);ring.rotation.x=Math.PI/2;}
    const light=new T.PointLight(0xffd8a6,65,22,2);light.position.set(r.x,y+4,-r.y);root.add(light);
    for(const dz of [-6,6]){sofa(r.x,y,-r.y+dz);table(r.x+4,y,-r.y+dz);upperObstacles.push({room:i,level:1,x:r.x,z:-r.y+dz,w:2.3,d:1.1},{room:i,level:1,x:r.x+4,z:-r.y+dz,w:2,d:1.2});}
    sign('SKY LOUNGE / '+r.label,[r.x,y+3,-r.y-9.8],10);
   }else{for(const dx of [-6,6])for(const dz of [-6,6])plant(r.x+dx,y,-r.y+dz);box([5,.35,2],[r.x,y+.2,-r.y],green);upperObstacles.push({room:i,level:2,x:r.x,z:-r.y,w:5,d:2});}
  }
  const cabin=new T.Group();cabin.position.set(lx,.17,lz);root.add(cabin);box([2.8,.12,2.8],[0,0,0],dark,cabin);box([2.8,.1,2.8],[0,3,0],white,cabin);for(const dx of [-1.4,1.4])box([.08,3,2.8],[dx,1.5,0],glass,cabin);box([2.8,3,.08],[0,1.5,-1.4],glass,cabin);
  return {room:r,roof,x:lx,z:lz,cabin,levels:[.17,roof,roof+6]};
 });
 // Planet discoveries are reachable objectives, with a rover to cover the terrain.
 const beacons=SURVEYS.map(([x,z,title],i)=>{const y=terrainHeight(x,z);const g=new T.Group();g.position.set(PLANET.x+x,y,PLANET.z+z);root.add(g);mesh(new T.CylinderGeometry(.4,.6,2,12),dark,[0,1,0],g);const jewel=mesh(new T.OctahedronGeometry(.6),glow.clone(),[0,2.6,0],g);sign(`${i+1} / ${title}`,[0,3.5,0],4,g);return {x:PLANET.x+x,z:PLANET.z+z,jewel,title};});
 const rover=new T.Group();rover.position.set(PLANET.x-85,0,PLANET.z+12);root.add(rover);box([2.6,.5,3.5],[0,.9,0],white,rover);box([1.8,1.4,1.7],[0,1.8,-.3],glass,rover);for(const x of [-1.4,1.4])for(const z of [-1.1,1.1]){const w=mesh(new T.CylinderGeometry(.6,.6,.35,16),dark,[x,.6,z],rover);w.rotation.z=Math.PI/2;}sign('ROVER / F',[0,2.8,0],3,rover);
 const orrery=new T.Group();orrery.position.set(PLANET.x-15,terrainHeight(-15,-45)+2,PLANET.z-45);root.add(orrery);mesh(new T.SphereGeometry(1.2,20,12),glow,[0,0,0],orrery);for(const r of [2.3,3.6,5]){const ring=mesh(new T.TorusGeometry(r,.035,6,60),white,[0,0,0],orrery);ring.rotation.x=Math.PI/2;mesh(new T.SphereGeometry(.35,12,8),seat,[r,0,0],orrery);}sign('ORBITAL ARCHIVE / F',[0,4,0],7,orrery);
 for(let i=0;i<7;i++){const x=65+i*8,z=105,y=terrainHeight(x,z);box([2,6+(i%2)*2,2],[PLANET.x+x,y+3,PLANET.z+z],stone);if(i<6)box([9,.8,2],[PLANET.x+x+4,y+6,PLANET.z+z],stone);}sign('THE RESONANCE RUINS',[PLANET.x+88,4,PLANET.z+115],14);
 function blocked(x,z,upper){if(upper){const r=lifts[upper.room].room;return !insideUpper(r,x,z)||upperObstacles.some(b=>b.room===upper.room&&b.level===upper.level&&Math.abs(x-b.x)<b.w/2+.3&&Math.abs(z-b.z)<b.d/2+.3);}return !cityBounds(x,z)||obstacles.some(b=>Math.abs(x-b.x)<b.w/2+.3&&Math.abs(z-b.z)<b.d/2+.3);}
 return {root,buildings,lifts,beacons,rover,orrery,blocked,metroPose,liftHeight};
}
