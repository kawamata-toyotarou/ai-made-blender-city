import {OFFSETS,mountainHeight} from './atlas.mjs';
export function landmarkBlocked(layout,world,x,z,feet=0){const [ox,oz]=OFFSETS[world];x-=ox;z-=oz;return layout.solids.some(b=>b.world===world&&feet<b.h&&feet+1.6>b.bottom&&Math.abs(x-b.x)<b.w/2+.28&&Math.abs(z-b.z)<b.d/2+.28);}
export function landmarkFloor(layout,world,x,z,current,feet=0){
 const [ox,oz]=OFFSETS[world];x-=ox;z-=oz;
 let y=current;if(world==='city')y=Math.max(y,mountainHeight(x,z));if(world==='machine')y=Math.max(y,.16);
 for(const b of layout.floors)if(b.world===world&&Math.abs(x-b.x)<b.w/2&&Math.abs(z-b.z)<b.d/2)y=Math.max(y,b.y);
 for(const b of layout.solids)if(b.world===world&&b.h<=2.5&&feet>=b.h-.08&&Math.abs(x-b.x)<b.w/2+.25&&Math.abs(z-b.z)<b.d/2+.25)y=Math.max(y,b.h);
 if(world==='planet'&&Math.abs(x+110)<6&&z>=-86&&z<=-65)y=Math.max(y,2.2*(1-(z+86)/21));
 return y;
}
