(()=>{var td=0,Fl=1,nd=2;var Ol=1,Fa=2,pi=3,Sn=0,bn=1,zt=2,Li=0,as=1,So=2,Bl=3,zl=4,id=5,Vi=100,sd=101,rd=102,od=103,ad=104,cd=200,ld=201,hd=202,ud=203,la=204,ha=205,dd=206,fd=207,pd=208,md=209,gd=210,xd=211,_d=212,yd=213,vd=214,Oa=0,Ba=1,za=2,cs=3,ka=4,Ha=5,Va=6,Ga=7,kl=0,Md=1,Sd=2,Di=0,wd=1,bd=2,Td=3,Wa=4,Ed=5,Ad=6,Rd=7,Rl="attached",Cd="detached",Hl=300,Ms=301,Ss=302,ur=303,Xa=304,wo=306,hn=1e3,Bn=1001,nr=1002,un=1003,qa=1004;var ws=1005;var Gt=1006,dr=1007;var Vn=1008;var ii=1009,Vl=1010,Gl=1011,fr=1012,Ya=1013,$i=1014,xn=1015,si=1016,Ka=1017,$a=1018,pr=1020,Wl=35902,Xl=35899,ql=1021,Yl=1022,Tn=1023,ir=1026,mr=1027,Za=1028,Ja=1029,Kl=1030,ja=1031;var Qa=1033,bo=33776,To=33777,Eo=33778,Ao=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37808,cc=37809,lc=37810,hc=37811,uc=37812,dc=37813,fc=37814,pc=37815,mc=37816,gc=37817,xc=37818,_c=37819,yc=37820,vc=37821,Mc=36492,Sc=36494,wc=36495,bc=36283,Tc=36284,Ec=36285,Ac=36286,Id=2200,Pd=2201,Ld=2202,ls=2300,hs=2301,ca=2302,rs=2400,os=2401,Xr=2402,Rc=2500,Dd=2501,$l=0,Ro=1,gr=2,Nd=3200,Ud=3201;var Zl=0,Fd=1,ri="",yt="srgb",jt="srgb-linear",qr="linear",It="srgb";var ss=7680;var Cl=519,Od=512,Bd=513,zd=514,Jl=515,kd=516,Hd=517,Vd=518,Gd=519,ua=35044;var jl="300 es",$n=2e3,Yr=2001;var li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=1234567,Hr=Math.PI/180,us=180/Math.PI;function Zn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function rt(s,e,t){return Math.max(e,Math.min(t,s))}function Ql(s,e){return(s%e+e)%e}function Tp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ep(s,e,t){return s!==e?(t-s)/(e-s):0}function Vr(s,e,t){return(1-t)*s+t*e}function Ap(s,e,t,n){return Vr(s,e,1-Math.exp(-t*n))}function Rp(s,e=1){return e-Math.abs(Ql(s,e*2)-e)}function Cp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ip(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Pp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Lp(s,e){return s+Math.random()*(e-s)}function Dp(s){return s*(.5-Math.random())}function Np(s){s!==void 0&&(gu=s);let e=gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Up(s){return s*Hr}function Fp(s){return s*us}function Op(s){return(s&s-1)===0&&s!==0}function Bp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kp(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var eh={DEG2RAD:Hr,RAD2DEG:us,generateUUID:Zn,clamp:rt,euclideanModulo:Ql,mapLinear:Tp,inverseLerp:Ep,lerp:Vr,damp:Ap,pingpong:Rp,smoothstep:Cp,smootherstep:Ip,randInt:Pp,randFloat:Lp,randFloatSpread:Dp,seededRandom:Np,degToRad:Up,radToDeg:Fp,isPowerOfTwo:Op,ceilPowerOfTwo:Bp,floorPowerOfTwo:zp,setQuaternionFromProperEuler:kp,normalize:Ct,denormalize:Kn},Le=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*x,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let A=Math.sqrt(y),b=Math.atan2(A,p*S);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}let _=a*S;if(l=l*m+d*_,c=c*m+f*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jc=new P,xu=new an,it=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],S=i[1],y=i[4],_=i[7],A=i[2],b=i[5],I=i[8];return r[0]=o*x+a*S+l*A,r[3]=o*m+a*y+l*b,r[6]=o*p+a*_+l*I,r[1]=c*x+u*S+h*A,r[4]=c*m+u*y+h*b,r[7]=c*p+u*_+h*I,r[2]=d*x+f*S+g*A,r[5]=d*m+f*y+g*b,r[8]=d*p+f*_+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jc.makeScale(e,t)),this}rotate(e){return this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jc=new it;function th(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wd(){let s=sr("canvas");return s.style.display="block",s}var _u={};function rr(s){s in _u||(_u[s]=!0,console.warn(s))}function Xd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var yu=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hp(){let s={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===It&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?qr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[jt]:{primaries:e,whitePoint:n,transfer:qr,toXYZ:yu,fromXYZ:vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:It,toXYZ:yu,fromXYZ:vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),s}var ft=Hp();function Ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function tr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Os,da=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Os===void 0&&(Os=sr("canvas")),Os.width=e.width,Os.height=e.height;let i=Os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=sr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vp=0,or=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Qc(i[o].image)):r.push(Qc(i[o]))}else r=Qc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?da.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gp=0,el=new P,Qt=class s extends li{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Bn,i=Bn,r=Gt,o=Vn,a=Tn,l=ii,c=s.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Zn(),this.name="",this.source=new or(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(el).x}get height(){return this.source.getSize(el).y}get depth(){return this.source.getSize(el).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Hl;Qt.DEFAULT_ANISOTROPY=1;var Tt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(f+1)/2,A=(p+1)/2,b=(u+d)/4,I=(h+x)/4,C=(g+m)/4;return y>_&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=b/n,r=I/n):_>A?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=b/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=I/r,i=C/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-x)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fa=class extends li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Qt(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new or(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Kr=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Uo.subVectors(this.max,Ir),Bs.subVectors(e.a,Ir),zs.subVectors(e.b,Ir),ks.subVectors(e.c,Ir),Fi.subVectors(zs,Bs),Oi.subVectors(ks,zs),es.subVectors(Bs,ks);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-es.z,es.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,es.z,0,-es.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-es.y,es.x,0];return!tl(t,Bs,zs,ks,Uo)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,Bs,zs,ks,Uo))?!1:(Fo.crossVectors(Fi,Oi),t=[Fo.x,Fo.y,Fo.z],tl(t,Bs,zs,ks,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new P,new P,new P,new P,new P,new P,new P,new P],Xn=new P,No=new $t,Bs=new P,zs=new P,ks=new P,Fi=new P,Oi=new P,es=new P,Ir=new P,Uo=new P,Fo=new P,ts=new P;function tl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ts.fromArray(s,r);let a=i.x*Math.abs(ts.x)+i.y*Math.abs(ts.y)+i.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),u=n.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Wp=new $t,Pr=new P,nl=new P,dn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Pr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(nl)),this.expandByPoint(Pr.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_i=new P,il=new P,Oo=new P,Bi=new P,sl=new P,Bo=new P,rl=new P,ds=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){il.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(il);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Oo),a=Bi.dot(this.direction),l=-Bi.dot(Oo),c=Bi.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(il).addScaledVector(Oo,d),f}intersectSphere(e,t){_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),i=_i.dot(_i)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,i,r){sl.subVectors(t,e),Bo.subVectors(n,e),rl.crossVectors(sl,Bo);let o=this.direction.dot(rl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);let l=a*this.direction.dot(Bo.crossVectors(Bi,Bo));if(l<0)return null;let c=a*this.direction.dot(sl.cross(Bi));if(c<0||l+c>o)return null;let u=-a*Bi.dot(rl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,x,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xp,e,qp)}lookAt(e,t,n){let i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),zi.crossVectors(n,Pn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),zi.crossVectors(n,Pn)),zi.normalize(),zo.crossVectors(Pn,zi),i[0]=zi.x,i[4]=zo.x,i[8]=Pn.x,i[1]=zi.y,i[5]=zo.y,i[9]=Pn.y,i[2]=zi.z,i[6]=zo.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],y=n[7],_=n[11],A=n[15],b=i[0],I=i[4],C=i[8],M=i[12],w=i[1],R=i[5],G=i[9],V=i[13],q=i[2],D=i[6],Z=i[10],re=i[14],j=i[3],U=i[7],te=i[11],$=i[15];return r[0]=o*b+a*w+l*q+c*j,r[4]=o*I+a*R+l*D+c*U,r[8]=o*C+a*G+l*Z+c*te,r[12]=o*M+a*V+l*re+c*$,r[1]=u*b+h*w+d*q+f*j,r[5]=u*I+h*R+d*D+f*U,r[9]=u*C+h*G+d*Z+f*te,r[13]=u*M+h*V+d*re+f*$,r[2]=g*b+x*w+m*q+p*j,r[6]=g*I+x*R+m*D+p*U,r[10]=g*C+x*G+m*Z+p*te,r[14]=g*M+x*V+m*re+p*$,r[3]=S*b+y*w+_*q+A*j,r[7]=S*I+y*R+_*D+A*U,r[11]=S*C+y*G+_*Z+A*te,r[15]=S*M+y*V+_*re+A*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,y=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,_=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,A=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,b=t*S+n*y+i*_+r*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/b;return e[0]=S*I,e[1]=(x*d*r-h*m*r-x*i*f+n*m*f+h*i*p-n*d*p)*I,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*I,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*I,e[4]=y*I,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*I,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*I,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*I,e[8]=_*I,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*I,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*I,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*I,e[12]=A*I,e[13]=(u*x*i-g*h*i+g*n*d-t*x*d-u*n*m+t*h*m)*I,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*m-t*a*m)*I,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,S=l*c,y=l*u,_=l*h,A=n.x,b=n.y,I=n.z;return i[0]=(1-(x+p))*A,i[1]=(f+_)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-_)*b,i[5]=(1-(d+p))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(g+y)*I,i[9]=(m-S)*I,i[10]=(1-(d+x))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Hs.set(i[0],i[1],i[2]).length(),o=Hs.set(i[4],i[5],i[6]).length(),a=Hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qn.copy(this);let c=1/r,u=1/o,h=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=$n,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Yr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=$n,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===$n)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Yr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hs=new P,qn=new je,Xp=new P(0,0,0),qp=new P(1,1,1),zi=new P,zo=new P,Pn=new P,Mu=new je,Su=new an,Dn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Su.setFromEuler(this),this.setFromQuaternion(Su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yp=0,wu=new P,Vs=new an,yi=new je,ko=new P,Lr=new P,Kp=new P,$p=new an,bu=new P(1,0,0),Tu=new P(0,1,0),Eu=new P(0,0,1),Au={type:"added"},Zp={type:"removed"},Gs={type:"childadded",child:null},ol={type:"childremoved",child:null},gt=class s extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new Dn,n=new an,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new it}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(bu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(Eu,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(Eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ko.copy(e):ko.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Lr,ko,this.up):yi.lookAt(ko,Lr,this.up),this.quaternion.setFromRotationMatrix(yi),i&&(yi.extractRotation(i.matrixWorld),Vs.setFromRotationMatrix(yi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zp),ol.child=e,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,Kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,$p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};gt.DEFAULT_UP=new P(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new P,vi=new P,al=new P,Mi=new P,Ws=new P,Xs=new P,Ru=new P,cl=new P,ll=new P,hl=new P,ul=new Tt,dl=new Tt,fl=new Tt,wi=class s{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yn.subVectors(e,t),i.cross(Yn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yn.subVectors(i,t),vi.subVectors(n,t),al.subVectors(e,t);let o=Yn.dot(Yn),a=Yn.dot(vi),l=Yn.dot(al),c=vi.dot(vi),u=vi.dot(al),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return ul.setScalar(0),dl.setScalar(0),fl.setScalar(0),ul.fromBufferAttribute(e,t),dl.fromBufferAttribute(e,n),fl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(dl,r.y),o.addScaledVector(fl,r.z),o}static isFrontFacing(e,t,n,i){return Yn.subVectors(n,t),vi.subVectors(e,t),Yn.cross(vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Yn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ws.subVectors(i,n),Xs.subVectors(r,n),cl.subVectors(e,n);let l=Ws.dot(cl),c=Xs.dot(cl);if(l<=0&&c<=0)return t.copy(n);ll.subVectors(e,i);let u=Ws.dot(ll),h=Xs.dot(ll);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ws,o);hl.subVectors(e,r);let f=Ws.dot(hl),g=Xs.dot(hl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Xs,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ru.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Ru,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function pl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=Ql(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pl(o,r,e+1/3),this.g=pl(o,r,e),this.b=pl(o,r,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return ft.workingToColorSpace(mn.copy(this),e),Math.round(rt(mn.r*255,0,255))*65536+Math.round(rt(mn.g*255,0,255))*256+Math.round(rt(mn.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(mn.copy(this),t);let n=mn.r,i=mn.g,r=mn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=yt){ft.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,i=mn.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Ho);let n=Vr(ki.h,Ho.h,t),i=Vr(ki.s,Ho.s,t),r=Vr(ki.l,Ho.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new ze;ze.NAMES=qd;var Jp=0,wn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=as,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ha,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Et=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bi=jp();function jp(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Qp(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=rt(s,-65504,65504),bi.floatView[0]=s;let e=bi.uint32View[0],t=e>>23&511;return bi.baseTable[t]+((e&8388607)>>bi.shiftTable[t])}function em(s){let e=s>>10;return bi.uint32View[0]=bi.mantissaTable[bi.offsetTable[e]+(s&1023)]+bi.exponentTable[e],bi.floatView[0]}var Gi=class{static toHalfFloat(e){return Qp(e)}static fromHalfFloat(e){return em(e)}},Yt=new P,Vo=new Le,tm=0,Wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ua,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),e}};var Zr=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Jr=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},nm=0,Fn=new je,ml=new gt,qs=new P,Ln=new $t,Dr=new $t,on=new P,pt=class s extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(th(e)?Jr:Zr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Ln.min,Dr.min),Ln.expandByPoint(on),on.addVectors(Ln.max,Dr.max),Ln.expandByPoint(on)):(Ln.expandByPoint(Dr.min),Ln.expandByPoint(Dr.max))}Ln.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),on.add(qs)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new P,l[C]=new P;let c=new P,u=new P,h=new P,d=new Le,f=new Le,g=new Le,x=new P,m=new P;function p(C,M,w){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,w),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[C].add(x),a[M].add(x),a[w].add(x),l[C].add(m),l[M].add(m),l[w].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,M=S.length;C<M;++C){let w=S[C],R=w.start,G=w.count;for(let V=R,q=R+G;V<q;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let y=new P,_=new P,A=new P,b=new P;function I(C){A.fromBufferAttribute(i,C),b.copy(A);let M=a[C];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),_.crossVectors(b,M);let R=_.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,R)}for(let C=0,M=S.length;C<M;++C){let w=S[C],R=w.start,G=w.count;for(let V=R,q=R+G;V<q;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Wt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cu=new je,ns=new ds,Go=new dn,Iu=new P,Wo=new P,Xo=new P,qo=new P,gl=new P,Yo=new P,Pu=new P,Ko=new P,tt=class extends gt{constructor(e=new pt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(gl.fromBufferAttribute(h,e),o?Yo.addScaledVector(gl,u):Yo.addScaledVector(gl.sub(t),u))}t.add(Yo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(Go.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Go,Iu)===null||ns.origin.distanceToSquared(Iu)>(e.far-e.near)**2))&&(Cu.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,A=y;_<A;_+=3){let b=a.getX(_),I=a.getX(_+1),C=a.getX(_+2);i=$o(this,p,e,n,c,u,h,b,I,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);i=$o(this,o,e,n,c,u,h,S,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,A=y;_<A;_+=3){let b=_,I=_+1,C=_+2;i=$o(this,p,e,n,c,u,h,b,I,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=m,y=m+1,_=m+2;i=$o(this,o,e,n,c,u,h,S,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function im(s,e,t,n,i,r,o,a){let l;if(e.side===bn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Sn,a),l===null)return null;Ko.copy(a),Ko.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ko);return c<t.near||c>t.far?null:{distance:c,point:Ko.clone(),object:s}}function $o(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Wo),s.getVertexPosition(l,Xo),s.getVertexPosition(c,qo);let u=im(s,e,t,n,Wo,Xo,qo,Pu);if(u){let h=new P;wi.getBarycoord(Pu,Wo,Xo,qo,h),i&&(u.uv=wi.getInterpolatedAttribute(i,a,l,c,h,new Le)),r&&(u.uv1=wi.getInterpolatedAttribute(r,a,l,c,h,new Le)),o&&(u.normal=wi.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};wi.getNormal(Wo,Xo,qo,d.normal),u.face=d,u.barycoord=h}return u}var Nt=class s extends pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2));function g(x,m,p,S,y,_,A,b,I,C,M){let w=_/I,R=A/C,G=_/2,V=A/2,q=b/2,D=I+1,Z=C+1,re=0,j=0,U=new P;for(let te=0;te<Z;te++){let $=te*R-V;for(let he=0;he<D;he++){let N=he*w-G;U[x]=N*S,U[m]=$*y,U[p]=q,c.push(U.x,U.y,U.z),U[x]=0,U[m]=0,U[p]=b>0?1:-1,u.push(U.x,U.y,U.z),h.push(he/I),h.push(1-te/C),re+=1}}for(let te=0;te<C;te++)for(let $=0;$<I;$++){let he=d+$+D*te,N=d+$+D*(te+1),W=d+($+1)+D*(te+1),oe=d+($+1)+D*te;l.push(he,N,oe),l.push(N,W,oe),j+=6}a.addGroup(f,j,M),f+=j,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function bs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _n(s){let e={};for(let t=0;t<s.length;t++){let n=bs(s[t]);for(let i in n)e[i]=n[i]}return e}function sm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function nh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Yd={clone:bs,merge:_n},rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},jr=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new P,Lu=new Le,Du=new Le,Kt=class extends jr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Lu,Du),t.subVectors(Du,Lu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ys=-90,Ks=1,ma=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Kt(Ys,Ks,e,t);i.layers=this.layers,this.add(i);let r=new Kt(Ys,Ks,e,t);r.layers=this.layers,this.add(r);let o=new Kt(Ys,Ks,e,t);o.layers=this.layers,this.add(o);let a=new Kt(Ys,Ks,e,t);a.layers=this.layers,this.add(a);let l=new Kt(Ys,Ks,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Ys,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qr=class extends Qt{constructor(e=[],t=Ms,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Nt(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Li});r.uniforms.tEquirect.value=t;let o=new tt(i,r),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Gt),new ma(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},qe=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},am={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(am)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},eo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var to=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},jn=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ua,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Mn=new P,gn=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cr=class extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$s,Nr=new P,Zs=new P,Js=new P,js=new Le,Ur=new Le,Kd=new je,Zo=new P,Fr=new P,Jo=new P,Nu=new Le,xl=new Le,Uu=new Le,no=class extends gt{constructor(e=new cr){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jn(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new gn(n,3,0,!1)),$s.setAttribute("uv",new gn(n,2,3,!1))}this.geometry=$s,this.material=e,this.center=new Le(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),Kd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;jo(Zo.set(-.5,-.5,0),Js,o,Zs,i,r),jo(Fr.set(.5,-.5,0),Js,o,Zs,i,r),jo(Jo.set(.5,.5,0),Js,o,Zs,i,r),Nu.set(0,0),xl.set(1,0),Uu.set(1,1);let a=e.ray.intersectTriangle(Zo,Fr,Jo,!1,Nr);if(a===null&&(jo(Fr.set(-.5,.5,0),Js,o,Zs,i,r),xl.set(0,1),a=e.ray.intersectTriangle(Zo,Jo,Fr,!1,Nr),a===null))return;let l=e.ray.origin.distanceTo(Nr);l<e.near||l>e.far||t.push({distance:l,point:Nr.clone(),uv:wi.getInterpolation(Nr,Zo,Fr,Jo,Nu,xl,Uu,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function jo(s,e,t,n,i,r){js.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ur.x=r*js.x-i*js.y,Ur.y=i*js.x+r*js.y):Ur.copy(js),s.copy(e),s.x+=Ur.x,s.y+=Ur.y,s.applyMatrix4(Kd)}var Fu=new P,Ou=new Tt,Bu=new Tt,cm=new P,zu=new je,Qo=new P,_l=new dn,ku=new je,yl=new ds,io=class extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rl,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingBox.expandByPoint(Qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingSphere.expandByPoint(Qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_l.copy(this.boundingSphere),_l.applyMatrix4(i),e.ray.intersectsSphere(_l)!==!1&&(ku.copy(i).invert(),yl.copy(e.ray).applyMatrix4(ku),!(this.boundingBox!==null&&yl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Ou.fromBufferAttribute(i.attributes.skinIndex,e),Bu.fromBufferAttribute(i.attributes.skinWeight,e),Fu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Bu.getComponent(r);if(o!==0){let a=Ou.getComponent(r);zu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cm.copy(Fu).applyMatrix4(zu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},lr=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},zn=class extends Qt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=un,u=un,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hu=new je,lm=new je,so=class s{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:lm;Hu.multiplyMatrices(a,t[r]),Hu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new zn(t,e,e,Tn,xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new lr),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Wi=class extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new je,Vu=new je,ea=[],Gu=new $t,hm=new je,Or=new tt,Br=new dn,Xt=class extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,hm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Gu.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Gu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Br.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),e.ray.intersectsSphere(Br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Qs),Vu.multiplyMatrices(n,Qs),Or.matrixWorld=Vu,Or.raycast(e,ea);for(let o=0,a=ea.length;o<a;o++){let l=ea[o];l.instanceId=r,l.object=this,t.push(l)}ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new zn(new Float32Array(i*this.count),i,this.count,Za,xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vl=new P,um=new P,dm=new it,On=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=vl.subVectors(n,t).cross(um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dm.getNormalMatrix(e),i=this.coplanarPoint(vl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new dn,fm=new Le(.5,.5),ta=new P,Xi=class{constructor(e=new On,t=new On,n=new On,i=new On,r=new On,o=new On){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],y=r[13],_=r[14],A=r[15];if(i[0].setComponents(c-o,f-u,p-g,A-S).normalize(),i[1].setComponents(c+o,f+u,p+g,A+S).normalize(),i[2].setComponents(c+a,f+h,p+x,A+y).normalize(),i[3].setComponents(c-a,f-h,p-x,A-y).normalize(),n)i[4].setComponents(l,d,m,_).normalize(),i[5].setComponents(c-l,f-d,p-m,A-_).normalize();else if(i[4].setComponents(c-l,f-d,p-m,A-_).normalize(),t===$n)i[5].setComponents(c+l,f+d,p+m,A+_).normalize();else if(t===Yr)i[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);let t=fm.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ta.x=i.normal.x>0?e.max.x:e.min.x,ta.y=i.normal.y>0?e.max.y:e.min.y,ta.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qi=class extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xa=new P,_a=new P,Wu=new je,zr=new ds,na=new dn,Ml=new P,Xu=new P,Ei=class extends gt{constructor(e=new pt,t=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xa.fromBufferAttribute(t,i-1),_a.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xa.distanceTo(_a);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;Wu.copy(i).invert(),zr.copy(e.ray).applyMatrix4(Wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=u.getX(x),S=u.getX(x+1),y=ia(this,e,zr,l,p,S,x);y&&t.push(y)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=ia(this,e,zr,l,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=ia(this,e,zr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=ia(this,e,zr,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ia(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(xa.fromBufferAttribute(a,i),_a.fromBufferAttribute(a,r),t.distanceSqToSegment(xa,_a,Ml,Xu)>n)return;Ml.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ml);if(!(c<e.near||c>e.far))return{distance:c,point:Xu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var qu=new P,Yu=new P,ro=class extends Ei{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)qu.fromBufferAttribute(t,i),Yu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qu.distanceTo(Yu);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},oo=class extends Ei{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},kn=class extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ku=new je,Il=new ds,sa=new dn,ra=new P,Qn=class extends gt{constructor(e=new pt,t=new kn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;Ku.copy(i).invert(),Il.copy(e.ray).applyMatrix4(Ku);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);ra.fromBufferAttribute(h,m),$u(ra,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)ra.fromBufferAttribute(h,g),$u(ra,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $u(s,e,t,n,i,r,o){let a=Il.distanceSqToPoint(s);if(a<t){let l=new P;Il.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var en=class extends Qt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ao=class extends Qt{constructor(e,t,n=$i,i,r,o,a=un,l=un,c,u=ir,h=1){if(u!==ir&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new or(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},co=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var fs=class s extends pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,u=new Le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ht=class s extends pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function S(){let _=new P,A=new P,b=0,I=(t-e)/n;for(let C=0;C<=r;C++){let M=[],w=C/r,R=w*(t-e)+e;for(let G=0;G<=i;G++){let V=G/i,q=V*l+a,D=Math.sin(q),Z=Math.cos(q);A.x=R*D,A.y=-w*n+m,A.z=R*Z,h.push(A.x,A.y,A.z),_.set(D,I,Z).normalize(),d.push(_.x,_.y,_.z),f.push(V,1-w),M.push(g++)}x.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){let w=x[M][C],R=x[M+1][C],G=x[M+1][C+1],V=x[M][C+1];(e>0||M!==0)&&(u.push(w,R,V),b+=3),(t>0||M!==r-1)&&(u.push(R,G,V),b+=3)}c.addGroup(p,b,0),p+=b}function y(_){let A=g,b=new Le,I=new P,C=0,M=_===!0?e:t,w=_===!0?1:-1;for(let G=1;G<=i;G++)h.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let R=g;for(let G=0;G<=i;G++){let q=G/i*l+a,D=Math.cos(q),Z=Math.sin(q);I.x=M*Z,I.y=m*w,I.z=M*D,h.push(I.x,I.y,I.z),d.push(0,w,0),b.x=D*.5+.5,b.y=Z*.5*w+.5,f.push(b.x,b.y),g++}for(let G=0;G<i;G++){let V=A+G,q=R+G;_===!0?u.push(q,q+1,V):u.push(q+1,q,V),C+=3}c.addGroup(p,C,_===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hr=class s extends ht{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lo=class s extends pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let y=new P,_=new P,A=new P;for(let b=0;b<t.length;b+=3)f(t[b+0],y),f(t[b+1],_),f(t[b+2],A),l(y,_,A,S)}function l(S,y,_,A){let b=A+1,I=[];for(let C=0;C<=b;C++){I[C]=[];let M=S.clone().lerp(_,C/b),w=y.clone().lerp(_,C/b),R=b-C;for(let G=0;G<=R;G++)G===0&&C===b?I[C][G]=M:I[C][G]=M.clone().lerp(w,G/R)}for(let C=0;C<b;C++)for(let M=0;M<2*(b-C)-1;M++){let w=Math.floor(M/2);M%2===0?(d(I[C][w+1]),d(I[C+1][w]),d(I[C][w])):(d(I[C][w+1]),d(I[C+1][w+1]),d(I[C+1][w]))}}function c(S){let y=new P;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(S),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){let S=new P;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let _=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;o.push(_,1-A)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){let y=o[S+0],_=o[S+2],A=o[S+4],b=Math.max(y,_,A),I=Math.min(y,_,A);b>.9&&I<.1&&(y<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,y){let _=S*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){let S=new P,y=new P,_=new P,A=new P,b=new Le,I=new Le,C=new Le;for(let M=0,w=0;M<r.length;M+=9,w+=6){S.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),b.set(o[w+0],o[w+1]),I.set(o[w+2],o[w+3]),C.set(o[w+4],o[w+5]),A.copy(S).add(y).add(_).divideScalar(3);let R=m(A);x(b,w+0,S,R),x(I,w+2,y,R),x(C,w+4,_,R)}}function x(S,y,_,A){A<0&&S.x===1&&(o[y]=S.x-1),_.x===0&&_.z===0&&(o[y]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Le:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,i=[],r=[],o=[],a=new P,l=new je;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(rt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ho=class extends Hn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Le){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ya=class extends ho{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ih(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var oa=new P,Sl=new ih,wl=new ih,bl=new ih,ui=class extends Hn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(oa.subVectors(i[0],i[1]).add(i[0]),c=oa);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(oa.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=oa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Sl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),wl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),bl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),wl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),bl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Sl.calc(l),wl.calc(l),bl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zu(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function pm(s,e){let t=1-s;return t*t*e}function mm(s,e){return 2*(1-s)*s*e}function gm(s,e){return s*s*e}function Gr(s,e,t,n){return pm(s,e)+mm(s,t)+gm(s,n)}function xm(s,e){let t=1-s;return t*t*t*e}function _m(s,e){let t=1-s;return 3*t*t*s*e}function ym(s,e){return 3*(1-s)*s*s*e}function vm(s,e){return s*s*s*e}function Wr(s,e,t,n,i){return xm(s,e)+_m(s,t)+ym(s,n)+vm(s,i)}var va=class extends Hn{constructor(e=new Le,t=new Le,n=new Le,i=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Le){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,i.x,r.x,o.x,a.x),Wr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends Hn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,i.x,r.x,o.x,a.x),Wr(e,i.y,r.y,o.y,a.y),Wr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sa=class extends Hn{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends Hn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Hn{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Gr(e,i.x,r.x,o.x),Gr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends Hn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Gr(e,i.x,r.x,o.x),Gr(e,i.y,r.y,o.y),Gr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Zu(a,l.x,c.x,u.x,h.x),Zu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Le().fromArray(i))}return this}},Mm=Object.freeze({__proto__:null,ArcCurve:ya,CatmullRomCurve3:ui,CubicBezierCurve:va,CubicBezierCurve3:Ma,EllipseCurve:ho,LineCurve:Sa,LineCurve3:wa,QuadraticBezierCurve:ba,QuadraticBezierCurve3:uo,SplineCurve:Ta});var Ai=class s extends lo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Yi=class s extends lo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ht=class s extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let S=p*d-o;for(let y=0;y<c;y++){let _=y*h-r;g.push(_,-S,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let y=S+c*p,_=S+c*(p+1),A=S+1+c*(p+1),b=S+1+c*p;f.push(y,_,b),f.push(_,A,b)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},fo=class s extends pt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/i,f=new P,g=new Le;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let S=p+m,y=S,_=S+n+1,A=S+n+2,b=S+1;a.push(y,_,b),a.push(_,A,b)}}this.setIndex(a),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Bt=class s extends pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let S=[],y=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){let b=A/t;h.x=-e*Math.cos(i+b*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+b*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(b+_,1-y),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let y=u[p][S+1],_=u[p][S],A=u[p+1][S],b=u[p+1][S+1];(p!==0||o>0)&&f.push(y,_,b),(p!==n-1||l<Math.PI)&&f.push(_,A,b)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var tn=class s extends pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new P,h=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,S=(i+1)*f+g;o.push(x,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ps=class s extends pt{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],u=[],h=new P,d=new P,f=new P,g=new P,x=new P,m=new P,p=new P;for(let y=0;y<=n;++y){let _=y/n*r*Math.PI*2;S(_,r,o,e,f),S(_+.01,r,o,e,g),m.subVectors(g,f),p.addVectors(g,f),x.crossVectors(m,p),p.crossVectors(x,m),x.normalize(),p.normalize();for(let A=0;A<=i;++A){let b=A/i*Math.PI*2,I=-t*Math.cos(b),C=t*Math.sin(b);h.x=f.x+(I*p.x+C*x.x),h.y=f.y+(I*p.y+C*x.y),h.z=f.z+(I*p.z+C*x.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(y/n),u.push(A/i)}}for(let y=1;y<=n;y++)for(let _=1;_<=i;_++){let A=(i+1)*(y-1)+(_-1),b=(i+1)*y+(_-1),I=(i+1)*y+_,C=(i+1)*(y-1)+_;a.push(A,b,C),a.push(b,I,C)}this.setIndex(a),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(u,2));function S(y,_,A,b,I){let C=Math.cos(y),M=Math.sin(y),w=A/_*y,R=Math.cos(w);I.x=b*(2+R)*.5*C,I.y=b*(2+R)*M*.5,I.z=b*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ms=class s extends pt{constructor(e=new uo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new Le,u=new P,h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),S(),p()}function m(y){u=e.getPointAt(y/t,u);let _=o.normals[y],A=o.binormals[y];for(let b=0;b<=i;b++){let I=b/i*Math.PI*2,C=Math.sin(I),M=-Math.cos(I);l.x=M*_.x+C*A.x,l.y=M*_.y+C*A.y,l.z=M*_.z+C*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=i;_++){let A=(i+1)*(y-1)+(_-1),b=(i+1)*y+(_-1),I=(i+1)*y+_,C=(i+1)*(y-1)+_;g.push(A,b,C),g.push(b,I,C)}}function S(){for(let y=0;y<=t;y++)for(let _=0;_<=i;_++)c.x=y/t,c.y=_/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Mm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var We=class extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rn=class extends We{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ea=class extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Aa=class extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function aa(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Sm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function wm(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ju(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function $d(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Ri=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ra=class extends Ri{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rs,endingEnd:rs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case os:r=e,a=2*t-n;break;case Xr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case os:o=e,l=2*n-t;break;case Xr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let A=0;A!==a;++A)r[A]=p*o[u+A]+S*o[c+A]+y*o[l+A]+_*o[h+A];return r}},po=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Ca=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ra(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ls:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ls;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Sm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ca,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=hs;var Ci=class extends Cn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=ls;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends Cn{constructor(e,t,n,i){super(e,t,n,i)}};mo.prototype.ValueTypeName="color";var di=class extends Cn{constructor(e,t,n,i){super(e,t,n,i)}};di.prototype.ValueTypeName="number";var Ia=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)an.slerpFlat(r,0,o,c-a,o,c,l);return r}},ei=class extends Cn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}};ei.prototype.ValueTypeName="quaternion";ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Cn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=ls;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends Cn{constructor(e,t,n,i){super(e,t,n,i)}};ti.prototype.ValueTypeName="vector";var Ki=class{constructor(e="",t=-1,n=[],i=Rc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Tm(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=wm(l);l=Ju(l,1,u),c=Ju(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new di(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];$d(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){let y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new di(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(ti,f+".position",d,"pos",i),n(ei,f+".quaternion",d,"rot",i),n(ti,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function bm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return di;case"vector":case"vector2":case"vector3":case"vector4":return ti;case"color":return mo;case"quaternion":return ei;case"bool":case"boolean":return Ci;case"string":return Ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Tm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=bm(s.type);if(s.times===void 0){let t=[],n=[];$d(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var ci={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Pa=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Zd=new Pa,ni=class{constructor(e){this.manager=e!==void 0?e:Zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var Si={},Pl=class extends Error{constructor(e,t){super(e),this.response=t}},gs=class extends ni{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ci.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:i});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Si[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){S();function S(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let b=0,I=u.length;b<I;b++){let C=u[b];C.onProgress&&C.onProgress(A)}p.enqueue(_),S()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Pl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ci.add(`file:${e}`,c);let u=Si[e];delete Si[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Si[e];if(u===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var er=new WeakMap,La=class extends ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ci.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=er.get(o);h===void 0&&(h=[],er.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=sr("img");function l(){u(),t&&t(this);let h=er.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}er.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),ci.remove(`image:${e}`);let d=er.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}er.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ci.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var go=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new zn,a=new gs(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Bn,o.wrapT=c.wrapT!==void 0?c.wrapT:Bn,o.magFilter=c.magFilter!==void 0?c.magFilter:Gt,o.minFilter=c.minFilter!==void 0?c.minFilter:Gt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Vn),c.mipmapCount===1&&(o.minFilter=Gt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}},xs=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=new Qt,o=new La(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},_s=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},xo=class extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tl=new je,ju=new P,Qu=new P,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(ju),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ll=class extends _o{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},yo=class extends _s{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ll}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ed=new je,kr=new P,El=new P,Dl=class extends _o{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),kr.setFromMatrixPosition(e.matrixWorld),n.position.copy(kr),El.copy(n.position),El.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(El),n.updateMatrixWorld(),i.makeTranslation(-kr.x,-kr.y,-kr.z),ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,n.coordinateSystem,n.reversedDepth)}},Vt=class extends _s{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ys=class extends jr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nl=class extends _o{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Nl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Pi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Al=new WeakMap,vo=class extends ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ci.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Al.has(o)===!0)i&&i(Al.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ci.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Al.set(l,c),ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ci.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Da=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Mo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Na=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){an.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;an.multiplyQuaternionsFlat(e,o,e,t,e,n),an.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},sh="\\[\\]\\.:\\/",Em=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",Am="[^"+sh.replace("\\.","")+"]",Rm=/((?:WC+[\/:])*)/.source.replace("WC",rh),Cm=/(WCOD+)?/.source.replace("WCOD",Am),Im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),Pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),Lm=new RegExp("^"+Rm+Cm+Im+Pm+"$"),Dm=["material","materials","bones","map"],Ul=class{constructor(e,t,n){let i=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Em,"")}static parseTrackName(e){let t=Lm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Dm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Ul;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ua=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:rs,endingEnd:rs};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Pd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Dd:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Rc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Ld;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Id){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=os,i.endingEnd=os):(e?i.endingStart=this.zeroSlopeAtStart?os:rs:i.endingStart=Xr,t?i.endingEnd=this.zeroSlopeAtEnd?os:rs:i.endingEnd=Xr)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},Nm=new Float32Array(1),fi=class extends li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=i[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new Na(Dt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new po(new Float32Array(2),new Float32Array(2),1,Nm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Ki.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Rc),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Ua(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ki.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};function oh(s,e,t,n){let i=Um(n);switch(t){case ql:return s*e;case Za:return s*e/i.components*i.byteLength;case Ja:return s*e/i.components*i.byteLength;case Kl:return s*e*2/i.components*i.byteLength;case ja:return s*e*2/i.components*i.byteLength;case Yl:return s*e*3/i.components*i.byteLength;case Tn:return s*e*4/i.components*i.byteLength;case Qa:return s*e*4/i.components*i.byteLength;case bo:case To:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Eo:case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(s,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(s,8)*Math.max(e,8)/2;case sc:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case uc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case fc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Mc:case Sc:case wc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bc:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ec:case Ac:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Um(s){switch(s){case ii:case Vl:return{byteLength:1,components:1};case fr:case Gl:case si:return{byteLength:2,components:1};case Ka:case $a:return{byteLength:2,components:4};case $i:case Ya:case xn:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Mf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bm(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ym=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,c0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,P0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ag=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ag=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ix=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,px=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:zm,alphahash_pars_fragment:km,alphamap_fragment:Hm,alphamap_pars_fragment:Vm,alphatest_fragment:Gm,alphatest_pars_fragment:Wm,aomap_fragment:Xm,aomap_pars_fragment:qm,batching_pars_vertex:Ym,batching_vertex:Km,begin_vertex:$m,beginnormal_vertex:Zm,bsdfs:Jm,iridescence_fragment:jm,bumpmap_pars_fragment:Qm,clipping_planes_fragment:e0,clipping_planes_pars_fragment:t0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:s0,color_pars_fragment:r0,color_pars_vertex:o0,color_vertex:a0,common:c0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:h0,displacementmap_pars_vertex:u0,displacementmap_vertex:d0,emissivemap_fragment:f0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:x0,envmap_common_pars_fragment:_0,envmap_pars_fragment:y0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:P0,envmap_vertex:M0,fog_vertex:S0,fog_pars_vertex:w0,fog_fragment:b0,fog_pars_fragment:T0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:C0,lights_pars_begin:I0,lights_toon_fragment:L0,lights_toon_pars_fragment:D0,lights_phong_fragment:N0,lights_phong_pars_fragment:U0,lights_physical_fragment:F0,lights_physical_pars_fragment:O0,lights_fragment_begin:B0,lights_fragment_maps:z0,lights_fragment_end:k0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:W0,map_fragment:X0,map_pars_fragment:q0,map_particle_fragment:Y0,map_particle_pars_fragment:K0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:J0,morphcolor_vertex:j0,morphnormal_vertex:Q0,morphtarget_pars_vertex:eg,morphtarget_vertex:tg,normal_fragment_begin:ng,normal_fragment_maps:ig,normal_pars_fragment:sg,normal_pars_vertex:rg,normal_vertex:og,normalmap_pars_fragment:ag,clearcoat_normal_fragment_begin:cg,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:hg,iridescence_pars_fragment:ug,opaque_fragment:dg,packing:fg,premultiplied_alpha_fragment:pg,project_vertex:mg,dithering_fragment:gg,dithering_pars_fragment:xg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:Mg,shadowmap_vertex:Sg,shadowmask_pars_fragment:wg,skinbase_vertex:bg,skinning_pars_vertex:Tg,skinning_vertex:Eg,skinnormal_vertex:Ag,specularmap_fragment:Rg,specularmap_pars_fragment:Cg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Pg,transmission_fragment:Lg,transmission_pars_fragment:Dg,uv_pars_fragment:Ng,uv_pars_vertex:Ug,uv_vertex:Fg,worldpos_vertex:Og,background_vert:Bg,background_frag:zg,backgroundCube_vert:kg,backgroundCube_frag:Hg,cube_vert:Vg,cube_frag:Gg,depth_vert:Wg,depth_frag:Xg,distanceRGBA_vert:qg,distanceRGBA_frag:Yg,equirect_vert:Kg,equirect_frag:$g,linedashed_vert:Zg,linedashed_frag:Jg,meshbasic_vert:jg,meshbasic_frag:Qg,meshlambert_vert:ex,meshlambert_frag:tx,meshmatcap_vert:nx,meshmatcap_frag:ix,meshnormal_vert:sx,meshnormal_frag:rx,meshphong_vert:ox,meshphong_frag:ax,meshphysical_vert:cx,meshphysical_frag:lx,meshtoon_vert:hx,meshtoon_frag:ux,points_vert:dx,points_frag:fx,shadow_vert:px,shadow_frag:mx,sprite_vert:gx,sprite_frag:xx},Ie={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},mi={basic:{uniforms:_n([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:_n([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:_n([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:_n([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:_n([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:_n([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:_n([Ie.points,Ie.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:_n([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:_n([Ie.common,Ie.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:_n([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:_n([Ie.sprite,Ie.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:_n([Ie.common,Ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:_n([Ie.lights,Ie.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};mi.physical={uniforms:_n([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Cc={r:0,b:0,g:0},Ts=new Dn,_x=new je;function yx(s,e,t,n,i,r,o){let a=new ze(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,A=g(y);A===null?p(a,l):A&&A.isColor&&(p(A,1),_=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,_){let A=g(_);A&&(A.isCubeTexture||A.mapping===wo)?(u===void 0&&(u=new tt(new Nt(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:bs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ts.copy(_.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(Ts)),u.material.toneMapped=ft.getTransfer(A.colorSpace)!==It,(h!==A||d!==A.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new tt(new Ht(2,2),new Jn({name:"BackgroundMaterial",uniforms:bs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ft.getTransfer(A.colorSpace)!==It,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Cc,nh(s)),n.buffers.color.setClear(Cc.r,Cc.g,Cc.b,_,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m,dispose:S}}function vx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(w,R,G,V,q){let D=!1,Z=h(V,G,R);r!==Z&&(r=Z,c(r.object)),D=f(w,V,G,q),D&&g(w,V,G,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,_(w,R,G,V),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function u(w){return s.deleteVertexArray(w)}function h(w,R,G){let V=G.wireframe===!0,q=n[w.id];q===void 0&&(q={},n[w.id]=q);let D=q[R.id];D===void 0&&(D={},q[R.id]=D);let Z=D[V];return Z===void 0&&(Z=d(l()),D[V]=Z),Z}function d(w){let R=[],G=[],V=[];for(let q=0;q<t;q++)R[q]=0,G[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:V,object:w,attributes:{},index:null}}function f(w,R,G,V){let q=r.attributes,D=R.attributes,Z=0,re=G.getAttributes();for(let j in re)if(re[j].location>=0){let te=q[j],$=D[j];if($===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),te===void 0||te.attribute!==$||$&&te.data!==$.data)return!0;Z++}return r.attributesNum!==Z||r.index!==V}function g(w,R,G,V){let q={},D=R.attributes,Z=0,re=G.getAttributes();for(let j in re)if(re[j].location>=0){let te=D[j];te===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(te=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(te=w.instanceColor));let $={};$.attribute=te,te&&te.data&&($.data=te.data),q[j]=$,Z++}r.attributes=q,r.attributesNum=Z,r.index=V}function x(){let w=r.newAttributes;for(let R=0,G=w.length;R<G;R++)w[R]=0}function m(w){p(w,0)}function p(w,R){let G=r.newAttributes,V=r.enabledAttributes,q=r.attributeDivisors;G[w]=1,V[w]===0&&(s.enableVertexAttribArray(w),V[w]=1),q[w]!==R&&(s.vertexAttribDivisor(w,R),q[w]=R)}function S(){let w=r.newAttributes,R=r.enabledAttributes;for(let G=0,V=R.length;G<V;G++)R[G]!==w[G]&&(s.disableVertexAttribArray(G),R[G]=0)}function y(w,R,G,V,q,D,Z){Z===!0?s.vertexAttribIPointer(w,R,G,q,D):s.vertexAttribPointer(w,R,G,V,q,D)}function _(w,R,G,V){x();let q=V.attributes,D=G.getAttributes(),Z=R.defaultAttributeValues;for(let re in D){let j=D[re];if(j.location>=0){let U=q[re];if(U===void 0&&(re==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),re==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),U!==void 0){let te=U.normalized,$=U.itemSize,he=e.get(U);if(he===void 0)continue;let N=he.buffer,W=he.type,oe=he.bytesPerElement,K=W===s.INT||W===s.UNSIGNED_INT||U.gpuType===Ya;if(U.isInterleavedBufferAttribute){let k=U.data,fe=k.stride,_e=U.offset;if(k.isInstancedInterleavedBuffer){for(let ge=0;ge<j.locationSize;ge++)p(j.location+ge,k.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ge=0;ge<j.locationSize;ge++)m(j.location+ge);s.bindBuffer(s.ARRAY_BUFFER,N);for(let ge=0;ge<j.locationSize;ge++)y(j.location+ge,$/j.locationSize,W,te,fe*oe,(_e+$/j.locationSize*ge)*oe,K)}else{if(U.isInstancedBufferAttribute){for(let k=0;k<j.locationSize;k++)p(j.location+k,U.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let k=0;k<j.locationSize;k++)m(j.location+k);s.bindBuffer(s.ARRAY_BUFFER,N);for(let k=0;k<j.locationSize;k++)y(j.location+k,$/j.locationSize,W,te,$*oe,$/j.locationSize*k*oe,K)}}else if(Z!==void 0){let te=Z[re];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(j.location,te);break;case 3:s.vertexAttrib3fv(j.location,te);break;case 4:s.vertexAttrib4fv(j.location,te);break;default:s.vertexAttrib1fv(j.location,te)}}}}S()}function A(){C();for(let w in n){let R=n[w];for(let G in R){let V=R[G];for(let q in V)u(V[q].object),delete V[q];delete R[G]}delete n[w]}}function b(w){if(n[w.id]===void 0)return;let R=n[w.id];for(let G in R){let V=R[G];for(let q in V)u(V[q].object),delete V[q];delete R[G]}delete n[w.id]}function I(w){for(let R in n){let G=n[R];if(G[w.id]===void 0)continue;let V=G[w.id];for(let q in V)u(V[q].object),delete V[q];delete G[w.id]}}function C(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Mx(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==Tn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let C=I===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ii&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==xn&&!C)}function l(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:b}}function wx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new On,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,y=S*4,_=p.clippingState||null;l.value=_,_=u(g,d,y,f);for(let A=0;A!==y;++A)_[A]=t[A];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function bx(s){let e=new WeakMap;function t(o,a){return a===ur?o.mapping=Ms:a===Xa&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ur||a===Xa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ga(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var _r=4,Jd=[.125,.215,.35,.446,.526,.582],Rs=20,ah=new ys,jd=new ze,ch=null,lh=0,hh=0,uh=!1,As=(1+Math.sqrt(5))/2,xr=1/As,Qd=[new P(-As,xr,0),new P(As,xr,0),new P(-xr,0,As),new P(xr,0,As),new P(0,As,-xr),new P(0,As,xr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Tx=new P,vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Tx}=r;ch=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,lh,hh),this._renderer.xr.enabled=uh,e.scissorTest=!1,Ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:si,format:Tn,colorSpace:jt,depthBuffer:!1},i=ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(r)),this._blurMaterial=Ax(r,e,t)}return i}_compileMaterial(e){let t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,ah)}_sceneToCubeUV(e,t,n,i,r){let l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(jd),h.toneMapping=Di,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let x=new Et({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),m=new tt(new Nt,x),p=!1,S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,p=!0):(x.color.copy(jd),p=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));let A=this._cubeSize;Ic(i,_*A,y>2?A:0,A,A),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ms||e.mapping===Ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ic(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ah)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qd[(i-r-1)%Qd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new tt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Rs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Rs;m>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);let p=[],S=0;for(let I=0;I<Rs;++I){let C=I/x,M=Math.exp(-C*C/2);p.push(M),I===0?S+=M:I<m&&(S+=2*M)}for(let I=0;I<p.length;I++)p[I]=p[I]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let _=this._sizeLods[i],A=3*_*(i>y-_r?i-y+_r:0),b=4*(this._cubeSize-_);Ic(t,A,b,3*_,2*_),l.setRenderTarget(t),l.render(h,ah)}};function Ex(s){let e=[],t=[],n=[],i=s,r=s-_r+1+Jd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-_r?l=Jd[o-s+_r-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let b=0;b<f;b++){let I=b%3*2/3-1,C=b>2?0:-1,M=[I,C,0,I+2/3,C,0,I+2/3,C+1,0,I,C,0,I+2/3,C+1,0,I,C+1,0];S.set(M,x*g*b),y.set(d,m*g*b);let w=[b,b,b,b,b,b];_.set(w,p*g*b)}let A=new pt;A.setAttribute("position",new Wt(S,x)),A.setAttribute("uv",new Wt(y,m)),A.setAttribute("faceIndex",new Wt(_,p)),e.push(A),i>_r&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ef(s,e,t){let n=new hi(s,e,t);return n.texture.mapping=wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ic(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ax(s,e,t){let n=new Float32Array(Rs),i=new P(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function tf(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function nf(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ur||l===Xa,u=l===Ms||l===Ss;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new vr(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new vr(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ix(s,e,t,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let S=f.array;x=f.version;for(let y=0,_=S.length;y<_;y+=3){let A=S[y+0],b=S[y+1],I=S[y+2];d.push(A,b,b,I,I,A)}}else if(g!==void 0){let S=g.array;x=g.version;for(let y=0,_=S.length/3-1;y<_;y+=3){let A=y+0,b=y+1,I=y+2;d.push(A,b,b,I,I,A)}}else return;let m=new(th(d)?Jr:Zr)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Px(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*x[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Lx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dx(s,e,t){let n=new WeakMap,i=new Tt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*A*4*h),I=new Kr(b,_,A,h);I.type=xn,I.needsUpdate=!0;let C=y*4;for(let w=0;w<h;w++){let R=m[w],G=p[w],V=S[w],q=_*A*4*w;for(let D=0;D<R.count;D++){let Z=D*C;f===!0&&(i.fromBufferAttribute(R,D),b[q+Z+0]=i.x,b[q+Z+1]=i.y,b[q+Z+2]=i.z,b[q+Z+3]=0),g===!0&&(i.fromBufferAttribute(G,D),b[q+Z+4]=i.x,b[q+Z+5]=i.y,b[q+Z+6]=i.z,b[q+Z+7]=0),x===!0&&(i.fromBufferAttribute(V,D),b[q+Z+8]=i.x,b[q+Z+9]=i.y,b[q+Z+10]=i.z,b[q+Z+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:I,size:new Le(_,A)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Nx(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Sf=new Qt,sf=new ao(1,1),wf=new Kr,bf=new pa,Tf=new Qr,rf=[],of=[],af=new Float32Array(16),cf=new Float32Array(9),lf=new Float32Array(4);function Mr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=rf[i];if(r===void 0&&(r=new Float32Array(i),rf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function sn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Dc(s,e){let t=of[e];t===void 0&&(t=new Int32Array(e),of[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ux(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}function Ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}function Bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}function zx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;lf.set(n),s.uniformMatrix2fv(this.addr,!1,lf),sn(t,n)}}function kx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;cf.set(n),s.uniformMatrix3fv(this.addr,!1,cf),sn(t,n)}}function Hx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;af.set(n),s.uniformMatrix4fv(this.addr,!1,af),sn(t,n)}}function Vx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Gx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}function Wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}function Xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}function qx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}function Kx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}function $x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}function Zx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(sf.compareFunction=Jl,r=sf):r=Sf,t.setTexture2D(e||r,i)}function Jx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bf,i)}function jx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tf,i)}function Qx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wf,i)}function e1(s){switch(s){case 5126:return Ux;case 35664:return Fx;case 35665:return Ox;case 35666:return Bx;case 35674:return zx;case 35675:return kx;case 35676:return Hx;case 5124:case 35670:return Vx;case 35667:case 35671:return Gx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Kx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Qx}}function t1(s,e){s.uniform1fv(this.addr,e)}function n1(s,e){let t=Mr(e,this.size,2);s.uniform2fv(this.addr,t)}function i1(s,e){let t=Mr(e,this.size,3);s.uniform3fv(this.addr,t)}function s1(s,e){let t=Mr(e,this.size,4);s.uniform4fv(this.addr,t)}function r1(s,e){let t=Mr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function o1(s,e){let t=Mr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function a1(s,e){let t=Mr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function c1(s,e){s.uniform1iv(this.addr,e)}function l1(s,e){s.uniform2iv(this.addr,e)}function h1(s,e){s.uniform3iv(this.addr,e)}function u1(s,e){s.uniform4iv(this.addr,e)}function d1(s,e){s.uniform1uiv(this.addr,e)}function f1(s,e){s.uniform2uiv(this.addr,e)}function p1(s,e){s.uniform3uiv(this.addr,e)}function m1(s,e){s.uniform4uiv(this.addr,e)}function g1(s,e,t){let n=this.cache,i=e.length,r=Dc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Sf,r[o])}function x1(s,e,t){let n=this.cache,i=e.length,r=Dc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||bf,r[o])}function _1(s,e,t){let n=this.cache,i=e.length,r=Dc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Tf,r[o])}function y1(s,e,t){let n=this.cache,i=e.length,r=Dc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||wf,r[o])}function v1(s){switch(s){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return s1;case 35674:return r1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return c1;case 35667:case 35671:return l1;case 35668:case 35672:return h1;case 35669:case 35673:return u1;case 5125:return d1;case 36294:return f1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return y1}}var fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=e1(t.type)}},ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v1(t.type)}},mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},dh=/(\w+)(\])?(\[|\.)?/g;function hf(s,e){s.seq.push(e),s.map[e.id]=e}function M1(s,e,t){let n=s.name,i=n.length;for(dh.lastIndex=0;;){let r=dh.exec(n),o=dh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){hf(t,c===void 0?new fh(a,s,e):new ph(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new mh(a),hf(t,h)),t=h}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);M1(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function uf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var S1=37297,w1=0;function b1(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var df=new it;function T1(s){ft._getMatrix(df,ft.workingColorSpace,s);let e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(s)){case qr:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ff(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+b1(s.getShaderSource(e),a)}else return r}function E1(s,e){let t=T1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function A1(s,e){let t;switch(e){case wd:t="Linear";break;case bd:t="Reinhard";break;case Td:t="Cineon";break;case Wa:t="ACESFilmic";break;case Ad:t="AgX";break;case Rd:t="Neutral";break;case Ed:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pc=new P;function R1(){ft.getLuminanceCoefficients(Pc);let s=Pc.x.toFixed(4),e=Pc.y.toFixed(4),t=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function I1(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P1(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Co(s){return s!==""}function pf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(s){return s.replace(L1,N1)}var D1=new Map;function N1(s,e){let t=ot[e];if(t===void 0){let n=D1.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}var U1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(s){return s.replace(U1,F1)}function F1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fa?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function B1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ms:case Ss:e="ENVMAP_TYPE_CUBE";break;case wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function k1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kl:e="ENVMAP_BLENDING_MULTIPLY";break;case Md:e="ENVMAP_BLENDING_MIX";break;case Sd:e="ENVMAP_BLENDING_ADD";break}return e}function H1(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function V1(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=O1(t),c=B1(t),u=z1(t),h=k1(t),d=H1(t),f=C1(t),g=I1(r),x=i.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Co).join(`
`),p.length>0&&(p+=`
`)):(m=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),p=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?ot.tonemapping_pars_fragment:"",t.toneMapping!==Di?A1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,E1("linearToOutputTexel",t.outputColorSpace),R1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),o=gh(o),o=pf(o,t),o=mf(o,t),a=gh(a),a=pf(a,t),a=mf(a,t),o=gf(o),a=gf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=S+m+o,_=S+p+a,A=uf(i,i.VERTEX_SHADER,y),b=uf(i,i.FRAGMENT_SHADER,_);i.attachShader(x,A),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function I(R){if(s.debug.checkShaderErrors){let G=i.getProgramInfoLog(x)||"",V=i.getShaderInfoLog(A)||"",q=i.getShaderInfoLog(b)||"",D=G.trim(),Z=V.trim(),re=q.trim(),j=!0,U=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,b);else{let te=ff(i,A,"vertex"),$=ff(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+te+`
`+$)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(Z===""||re==="")&&(U=!1);U&&(R.diagnostics={runnable:j,programLog:D,vertexShader:{log:Z,prefix:m},fragmentShader:{log:re,prefix:p}})}i.deleteShader(A),i.deleteShader(b),C=new yr(i,x),M=P1(i,x)}let C;this.getUniforms=function(){return C===void 0&&I(this),C};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,S1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=b,this}var G1=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _h(e),t.set(e,n)),n}},_h=class{constructor(e){this.id=G1++,this.code=e,this.usedTimes=0}};function W1(s,e,t,n,i,r,o){let a=new $r,l=new xh,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,w,R,G,V){let q=G.fog,D=V.geometry,Z=M.isMeshStandardMaterial?G.environment:null,re=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),j=re&&re.mapping===wo?re.image.height:null,U=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let te=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,$=te!==void 0?te.length:0,he=0;D.morphAttributes.position!==void 0&&(he=1),D.morphAttributes.normal!==void 0&&(he=2),D.morphAttributes.color!==void 0&&(he=3);let N,W,oe,K;if(U){let xt=mi[U];N=xt.vertexShader,W=xt.fragmentShader}else N=M.vertexShader,W=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),K=l.getFragmentShaderID(M);let k=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),_e=V.isInstancedMesh===!0,ge=V.isBatchedMesh===!0,Pe=!!M.map,lt=!!M.matcap,B=!!re,nt=!!M.aoMap,ke=!!M.lightMap,Ye=!!M.bumpMap,De=!!M.normalMap,St=!!M.displacementMap,L=!!M.emissiveMap,ne=!!M.metalnessMap,ce=!!M.roughnessMap,ie=M.anisotropy>0,E=M.clearcoat>0,v=M.dispersion>0,O=M.iridescence>0,ae=M.sheen>0,z=M.transmission>0,H=ie&&!!M.anisotropyMap,J=E&&!!M.clearcoatMap,se=E&&!!M.clearcoatNormalMap,xe=E&&!!M.clearcoatRoughnessMap,Te=O&&!!M.iridescenceMap,le=O&&!!M.iridescenceThicknessMap,Se=ae&&!!M.sheenColorMap,Be=ae&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ye=!!M.specularColorMap,He=!!M.specularIntensityMap,Y=z&&!!M.transmissionMap,ve=z&&!!M.thicknessMap,Re=!!M.gradientMap,Fe=!!M.alphaMap,we=M.alphaTest>0,me=!!M.alphaHash,Oe=!!M.extensions,Je=Di;M.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Je=s.toneMapping);let wt={shaderID:U,shaderType:M.type,shaderName:M.name,vertexShader:N,fragmentShader:W,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ge,batchingColor:ge&&V._colorsTexture!==null,instancing:_e,instancingColor:_e&&V.instanceColor!==null,instancingMorph:_e&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?s.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:jt,alphaToCoverage:!!M.alphaToCoverage,map:Pe,matcap:lt,envMap:B,envMapMode:B&&re.mapping,envMapCubeUVHeight:j,aoMap:nt,lightMap:ke,bumpMap:Ye,normalMap:De,displacementMap:d&&St,emissiveMap:L,normalMapObjectSpace:De&&M.normalMapType===Fd,normalMapTangentSpace:De&&M.normalMapType===Zl,metalnessMap:ne,roughnessMap:ce,anisotropy:ie,anisotropyMap:H,clearcoat:E,clearcoatMap:J,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:v,iridescence:O,iridescenceMap:Te,iridescenceThicknessMap:le,sheen:ae,sheenColorMap:Se,sheenRoughnessMap:Be,specularMap:Ee,specularColorMap:ye,specularIntensityMap:He,transmission:z,transmissionMap:Y,thicknessMap:ve,gradientMap:Re,opaque:M.transparent===!1&&M.blending===as&&M.alphaToCoverage===!1,alphaMap:Fe,alphaTest:we,alphaHash:me,combine:M.combine,mapUv:Pe&&x(M.map.channel),aoMapUv:nt&&x(M.aoMap.channel),lightMapUv:ke&&x(M.lightMap.channel),bumpMapUv:Ye&&x(M.bumpMap.channel),normalMapUv:De&&x(M.normalMap.channel),displacementMapUv:St&&x(M.displacementMap.channel),emissiveMapUv:L&&x(M.emissiveMap.channel),metalnessMapUv:ne&&x(M.metalnessMap.channel),roughnessMapUv:ce&&x(M.roughnessMap.channel),anisotropyMapUv:H&&x(M.anisotropyMap.channel),clearcoatMapUv:J&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(M.sheenRoughnessMap.channel),specularMapUv:Ee&&x(M.specularMap.channel),specularColorMapUv:ye&&x(M.specularColorMap.channel),specularIntensityMapUv:He&&x(M.specularIntensityMap.channel),transmissionMapUv:Y&&x(M.transmissionMap.channel),thicknessMapUv:ve&&x(M.thicknessMap.channel),alphaMapUv:Fe&&x(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(De||ie),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!D.attributes.uv&&(Pe||Fe),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:V.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,decodeVideoTexture:Pe&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===It,decodeVideoTextureEmissive:L&&M.emissiveMap.isVideoTexture===!0&&ft.getTransfer(M.emissiveMap.colorSpace)===It,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zt,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function p(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)w.push(R),w.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(S(w,M),y(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function S(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function y(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let w=g[M.type],R;if(w){let G=mi[w];R=Yd.clone(G.uniforms)}else R=M.uniforms;return R}function A(M,w){let R;for(let G=0,V=u.length;G<V;G++){let q=u[G];if(q.cacheKey===w){R=q,++R.usedTimes;break}}return R===void 0&&(R=new V1(s,w,M,r),u.push(R)),R}function b(M){if(--M.usedTimes===0){let w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function I(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:b,releaseShaderCache:I,programs:u,dispose:C}}function X1(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function q1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function _f(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||q1),n.length>1&&n.sort(d||_f),i.length>1&&i.sort(d||_f)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Y1(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new yf,s.set(n,[o])):i>=r.length?(o=new yf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function K1(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function $1(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Z1=0;function J1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function j1(s){let e=new K1,t=$1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new je,o=new je;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,y=0,_=0,A=0,b=0,I=0;c.sort(J1);for(let M=0,w=c.length;M<w;M++){let R=c[M],G=R.color,V=R.intensity,q=R.distance,D=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=G.r*V,h+=G.g*V,d+=G.b*V;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(R.sh.coefficients[Z],V);I++}else if(R.isDirectionalLight){let Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let re=R.shadow,j=t.get(R);j.shadowIntensity=re.intensity,j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=R.shadow.matrix,S++}n.directional[f]=Z,f++}else if(R.isSpotLight){let Z=e.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(G).multiplyScalar(V),Z.distance=q,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,n.spot[x]=Z;let re=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,re.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[x]=re.matrix,R.castShadow){let j=t.get(R);j.shadowIntensity=re.intensity,j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=D,_++}x++}else if(R.isRectAreaLight){let Z=e.get(R);Z.color.copy(G).multiplyScalar(V),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=Z,m++}else if(R.isPointLight){let Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){let re=R.shadow,j=t.get(R);j.shadowIntensity=re.intensity,j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,j.shadowCameraNear=re.camera.near,j.shadowCameraFar=re.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=Z,g++}else if(R.isHemisphereLight){let Z=e.get(R);Z.skyColor.copy(R.color).multiplyScalar(V),Z.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[p]=Z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==A||C.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=I,C.directionalLength=f,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=A,C.numLightProbes=I,n.version=Z1++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let y=c[p];if(y.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function vf(s){let e=new j1(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Q1(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new vf(s),e.set(i,[a])):r>=o.length?(a=new vf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n_(s,e,t){let n=new Xi,i=new Le,r=new Le,o=new Tt,a=new Ea({depthPacking:Ud}),l=new Aa,c={},u=t.maxTextureSize,h={[Sn]:bn,[bn]:Sn,[zt]:zt},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:e_,fragmentShader:t_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let p=this.type;this.render=function(b,I,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let M=s.getRenderTarget(),w=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Li),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let V=p!==pi&&this.type===pi,q=p===pi&&this.type!==pi;for(let D=0,Z=b.length;D<Z;D++){let re=b[D],j=re.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);let U=j.getFrameExtents();if(i.multiply(U),r.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,j.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,j.mapSize.y=r.y)),j.map===null||V===!0||q===!0){let $=this.type!==pi?{minFilter:un,magFilter:un}:{};j.map!==null&&j.map.dispose(),j.map=new hi(i.x,i.y,$),j.map.texture.name=re.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();let te=j.getViewportCount();for(let $=0;$<te;$++){let he=j.getViewport($);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),G.viewport(o),j.updateMatrices(re,$),n=j.getFrustum(),_(I,C,j.camera,re,this.type)}j.isPointLightShadow!==!0&&this.type===pi&&S(j,C),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,w,R)};function S(b,I){let C=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new hi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(I,null,C,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(I,null,C,f,x,null)}function y(b,I,C,M){let w=null,R=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)w=R;else if(w=C.isPointLight===!0?l:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let G=w.uuid,V=I.uuid,q=c[G];q===void 0&&(q={},c[G]=q);let D=q[V];D===void 0&&(D=w.clone(),q[V]=D,I.addEventListener("dispose",A)),w=D}if(w.visible=I.visible,w.wireframe=I.wireframe,M===pi?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:h[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let G=s.properties.get(w);G.light=C}return w}function _(b,I,C,M,w){if(b.visible===!1)return;if(b.layers.test(I.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===pi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let V=e.update(b),q=b.material;if(Array.isArray(q)){let D=V.groups;for(let Z=0,re=D.length;Z<re;Z++){let j=D[Z],U=q[j.materialIndex];if(U&&U.visible){let te=y(b,U,M,w);b.onBeforeShadow(s,b,I,C,V,te,j),s.renderBufferDirect(C,null,V,te,b,j),b.onAfterShadow(s,b,I,C,V,te,j)}}}else if(q.visible){let D=y(b,q,M,w);b.onBeforeShadow(s,b,I,C,V,D,null),s.renderBufferDirect(C,null,V,D,b,null),b.onAfterShadow(s,b,I,C,V,D,null)}}let G=b.children;for(let V=0,q=G.length;V<q;V++)_(G[V],I,C,M,w)}function A(b){b.target.removeEventListener("dispose",A);for(let C in c){let M=c[C],w=b.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}var i_={[Oa]:Ba,[za]:Va,[ka]:Ga,[cs]:Ha,[Ba]:Oa,[Va]:za,[Ga]:ka,[Ha]:cs};function s_(s,e){function t(){let Y=!1,ve=new Tt,Re=null,Fe=new Tt(0,0,0,0);return{setMask:function(we){Re!==we&&!Y&&(s.colorMask(we,we,we,we),Re=we)},setLocked:function(we){Y=we},setClear:function(we,me,Oe,Je,wt){wt===!0&&(we*=Je,me*=Je,Oe*=Je),ve.set(we,me,Oe,Je),Fe.equals(ve)===!1&&(s.clearColor(we,me,Oe,Je),Fe.copy(ve))},reset:function(){Y=!1,Re=null,Fe.set(-1,0,0,0)}}}function n(){let Y=!1,ve=!1,Re=null,Fe=null,we=null;return{setReversed:function(me){if(ve!==me){let Oe=e.get("EXT_clip_control");me?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ve=me;let Je=we;we=null,this.setClear(Je)}},getReversed:function(){return ve},setTest:function(me){me?k(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(me){Re!==me&&!Y&&(s.depthMask(me),Re=me)},setFunc:function(me){if(ve&&(me=i_[me]),Fe!==me){switch(me){case Oa:s.depthFunc(s.NEVER);break;case Ba:s.depthFunc(s.ALWAYS);break;case za:s.depthFunc(s.LESS);break;case cs:s.depthFunc(s.LEQUAL);break;case ka:s.depthFunc(s.EQUAL);break;case Ha:s.depthFunc(s.GEQUAL);break;case Va:s.depthFunc(s.GREATER);break;case Ga:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=me}},setLocked:function(me){Y=me},setClear:function(me){we!==me&&(ve&&(me=1-me),s.clearDepth(me),we=me)},reset:function(){Y=!1,Re=null,Fe=null,we=null,ve=!1}}}function i(){let Y=!1,ve=null,Re=null,Fe=null,we=null,me=null,Oe=null,Je=null,wt=null;return{setTest:function(xt){Y||(xt?k(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(xt){ve!==xt&&!Y&&(s.stencilMask(xt),ve=xt)},setFunc:function(xt,Zt,Nn){(Re!==xt||Fe!==Zt||we!==Nn)&&(s.stencilFunc(xt,Zt,Nn),Re=xt,Fe=Zt,we=Nn)},setOp:function(xt,Zt,Nn){(me!==xt||Oe!==Zt||Je!==Nn)&&(s.stencilOp(xt,Zt,Nn),me=xt,Oe=Zt,Je=Nn)},setLocked:function(xt){Y=xt},setClear:function(xt){wt!==xt&&(s.clearStencil(xt),wt=xt)},reset:function(){Y=!1,ve=null,Re=null,Fe=null,we=null,me=null,Oe=null,Je=null,wt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,y=null,_=null,A=null,b=null,I=new ze(0,0,0),C=0,M=!1,w=null,R=null,G=null,V=null,q=null,D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,re=0,j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=re>=1):j.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=re>=2);let U=null,te={},$=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),N=new Tt().fromArray($),W=new Tt().fromArray(he);function oe(Y,ve,Re,Fe){let we=new Uint8Array(4),me=s.createTexture();s.bindTexture(Y,me),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<Re;Oe++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(ve,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(ve+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return me}let K={};K[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(s.DEPTH_TEST),o.setFunc(cs),Ye(!1),De(Fl),k(s.CULL_FACE),nt(Li);function k(Y){u[Y]!==!0&&(s.enable(Y),u[Y]=!0)}function fe(Y){u[Y]!==!1&&(s.disable(Y),u[Y]=!1)}function _e(Y,ve){return h[Y]!==ve?(s.bindFramebuffer(Y,ve),h[Y]=ve,Y===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ve),Y===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ve),!0):!1}function ge(Y,ve){let Re=f,Fe=!1;if(Y){Re=d.get(ve),Re===void 0&&(Re=[],d.set(ve,Re));let we=Y.textures;if(Re.length!==we.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let me=0,Oe=we.length;me<Oe;me++)Re[me]=s.COLOR_ATTACHMENT0+me;Re.length=we.length,Fe=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(Re)}function Pe(Y){return g!==Y?(s.useProgram(Y),g=Y,!0):!1}let lt={[Vi]:s.FUNC_ADD,[sd]:s.FUNC_SUBTRACT,[rd]:s.FUNC_REVERSE_SUBTRACT};lt[od]=s.MIN,lt[ad]=s.MAX;let B={[cd]:s.ZERO,[ld]:s.ONE,[hd]:s.SRC_COLOR,[la]:s.SRC_ALPHA,[gd]:s.SRC_ALPHA_SATURATE,[pd]:s.DST_COLOR,[dd]:s.DST_ALPHA,[ud]:s.ONE_MINUS_SRC_COLOR,[ha]:s.ONE_MINUS_SRC_ALPHA,[md]:s.ONE_MINUS_DST_COLOR,[fd]:s.ONE_MINUS_DST_ALPHA,[xd]:s.CONSTANT_COLOR,[_d]:s.ONE_MINUS_CONSTANT_COLOR,[yd]:s.CONSTANT_ALPHA,[vd]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(Y,ve,Re,Fe,we,me,Oe,Je,wt,xt){if(Y===Li){x===!0&&(fe(s.BLEND),x=!1);return}if(x===!1&&(k(s.BLEND),x=!0),Y!==id){if(Y!==m||xt!==M){if((p!==Vi||_!==Vi)&&(s.blendEquation(s.FUNC_ADD),p=Vi,_=Vi),xt)switch(Y){case as:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.ONE,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case as:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}S=null,y=null,A=null,b=null,I.set(0,0,0),C=0,m=Y,M=xt}return}we=we||ve,me=me||Re,Oe=Oe||Fe,(ve!==p||we!==_)&&(s.blendEquationSeparate(lt[ve],lt[we]),p=ve,_=we),(Re!==S||Fe!==y||me!==A||Oe!==b)&&(s.blendFuncSeparate(B[Re],B[Fe],B[me],B[Oe]),S=Re,y=Fe,A=me,b=Oe),(Je.equals(I)===!1||wt!==C)&&(s.blendColor(Je.r,Je.g,Je.b,wt),I.copy(Je),C=wt),m=Y,M=!1}function ke(Y,ve){Y.side===zt?fe(s.CULL_FACE):k(s.CULL_FACE);let Re=Y.side===bn;ve&&(Re=!Re),Ye(Re),Y.blending===as&&Y.transparent===!1?nt(Li):nt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let Fe=Y.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),L(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?k(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(Y){w!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),w=Y)}function De(Y){Y!==td?(k(s.CULL_FACE),Y!==R&&(Y===Fl?s.cullFace(s.BACK):Y===nd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),R=Y}function St(Y){Y!==G&&(Z&&s.lineWidth(Y),G=Y)}function L(Y,ve,Re){Y?(k(s.POLYGON_OFFSET_FILL),(V!==ve||q!==Re)&&(s.polygonOffset(ve,Re),V=ve,q=Re)):fe(s.POLYGON_OFFSET_FILL)}function ne(Y){Y?k(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function ce(Y){Y===void 0&&(Y=s.TEXTURE0+D-1),U!==Y&&(s.activeTexture(Y),U=Y)}function ie(Y,ve,Re){Re===void 0&&(U===null?Re=s.TEXTURE0+D-1:Re=U);let Fe=te[Re];Fe===void 0&&(Fe={type:void 0,texture:void 0},te[Re]=Fe),(Fe.type!==Y||Fe.texture!==ve)&&(U!==Re&&(s.activeTexture(Re),U=Re),s.bindTexture(Y,ve||K[Y]),Fe.type=Y,Fe.texture=ve)}function E(){let Y=te[U];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ae(){try{s.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function z(){try{s.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function J(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function se(){try{s.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xe(){try{s.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Te(){try{s.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function le(){try{s.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(Y){N.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),N.copy(Y))}function Be(Y){W.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),W.copy(Y))}function Ee(Y,ve){let Re=c.get(ve);Re===void 0&&(Re=new WeakMap,c.set(ve,Re));let Fe=Re.get(Y);Fe===void 0&&(Fe=s.getUniformBlockIndex(ve,Y.name),Re.set(Y,Fe))}function ye(Y,ve){let Fe=c.get(ve).get(Y);l.get(ve)!==Fe&&(s.uniformBlockBinding(ve,Fe,Y.__bindingPointIndex),l.set(ve,Fe))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},U=null,te={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,y=null,_=null,A=null,b=null,I=new ze(0,0,0),C=0,M=!1,w=null,R=null,G=null,V=null,q=null,N.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:fe,bindFramebuffer:_e,drawBuffers:ge,useProgram:Pe,setBlending:nt,setMaterial:ke,setFlipSided:Ye,setCullFace:De,setLineWidth:St,setPolygonOffset:L,setScissorTest:ne,activeTexture:ce,bindTexture:ie,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Te,texImage3D:le,updateUBOMapping:Ee,uniformBlockBinding:ye,texStorage2D:se,texStorage3D:xe,texSubImage2D:ae,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:J,scissor:Se,viewport:Be,reset:He}}function r_(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):sr("canvas")}function x(E,v,O){let ae=1,z=ie(E);if((z.width>O||z.height>O)&&(ae=O/Math.max(z.width,z.height)),ae<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let H=Math.floor(ae*z.width),J=Math.floor(ae*z.height);h===void 0&&(h=g(H,J));let se=v?g(H,J):h;return se.width=H,se.height=J,se.getContext("2d").drawImage(E,0,0,H,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+H+"x"+J+")."),se}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(E,v,O,ae,z=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let H=v;if(v===s.RED&&(O===s.FLOAT&&(H=s.R32F),O===s.HALF_FLOAT&&(H=s.R16F),O===s.UNSIGNED_BYTE&&(H=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.R8UI),O===s.UNSIGNED_SHORT&&(H=s.R16UI),O===s.UNSIGNED_INT&&(H=s.R32UI),O===s.BYTE&&(H=s.R8I),O===s.SHORT&&(H=s.R16I),O===s.INT&&(H=s.R32I)),v===s.RG&&(O===s.FLOAT&&(H=s.RG32F),O===s.HALF_FLOAT&&(H=s.RG16F),O===s.UNSIGNED_BYTE&&(H=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RG8UI),O===s.UNSIGNED_SHORT&&(H=s.RG16UI),O===s.UNSIGNED_INT&&(H=s.RG32UI),O===s.BYTE&&(H=s.RG8I),O===s.SHORT&&(H=s.RG16I),O===s.INT&&(H=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RGB8UI),O===s.UNSIGNED_SHORT&&(H=s.RGB16UI),O===s.UNSIGNED_INT&&(H=s.RGB32UI),O===s.BYTE&&(H=s.RGB8I),O===s.SHORT&&(H=s.RGB16I),O===s.INT&&(H=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),O===s.UNSIGNED_INT&&(H=s.RGBA32UI),O===s.BYTE&&(H=s.RGBA8I),O===s.SHORT&&(H=s.RGBA16I),O===s.INT&&(H=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(H=s.R11F_G11F_B10F)),v===s.RGBA){let J=z?qr:ft.getTransfer(ae);O===s.FLOAT&&(H=s.RGBA32F),O===s.HALF_FLOAT&&(H=s.RGBA16F),O===s.UNSIGNED_BYTE&&(H=J===It?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function _(E,v){let O;return E?v===null||v===$i||v===pr?O=s.DEPTH24_STENCIL8:v===xn?O=s.DEPTH32F_STENCIL8:v===fr&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$i||v===pr?O=s.DEPTH_COMPONENT24:v===xn?O=s.DEPTH_COMPONENT32F:v===fr&&(O=s.DEPTH_COMPONENT16),O}function A(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==un&&E.minFilter!==Gt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function b(E){let v=E.target;v.removeEventListener("dispose",b),C(v),v.isVideoTexture&&u.delete(v)}function I(E){let v=E.target;v.removeEventListener("dispose",I),w(v)}function C(E){let v=n.get(E);if(v.__webglInit===void 0)return;let O=E.source,ae=d.get(O);if(ae){let z=ae[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&M(E),Object.keys(ae).length===0&&d.delete(O)}n.remove(E)}function M(E){let v=n.get(E);s.deleteTexture(v.__webglTexture);let O=E.source,ae=d.get(O);delete ae[v.__cacheKey],o.memory.textures--}function w(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(v.__webglFramebuffer[ae]))for(let z=0;z<v.__webglFramebuffer[ae].length;z++)s.deleteFramebuffer(v.__webglFramebuffer[ae][z]);else s.deleteFramebuffer(v.__webglFramebuffer[ae]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[ae])}else{if(Array.isArray(v.__webglFramebuffer))for(let ae=0;ae<v.__webglFramebuffer.length;ae++)s.deleteFramebuffer(v.__webglFramebuffer[ae]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ae=0;ae<v.__webglColorRenderbuffer.length;ae++)v.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[ae]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=E.textures;for(let ae=0,z=O.length;ae<z;ae++){let H=n.get(O[ae]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(O[ae])}n.remove(E)}let R=0;function G(){R=0}function V(){let E=R;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),R+=1,E}function q(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function D(E,v){let O=n.get(E);if(E.isVideoTexture&&ne(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let ae=E.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,E,v);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function Z(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){K(O,E,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function re(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){K(O,E,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function j(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){k(O,E,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}let U={[hn]:s.REPEAT,[Bn]:s.CLAMP_TO_EDGE,[nr]:s.MIRRORED_REPEAT},te={[un]:s.NEAREST,[qa]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[dr]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},$={[Od]:s.NEVER,[Gd]:s.ALWAYS,[Bd]:s.LESS,[Jl]:s.LEQUAL,[zd]:s.EQUAL,[Vd]:s.GEQUAL,[kd]:s.GREATER,[Hd]:s.NOTEQUAL};function he(E,v){if(v.type===xn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Gt||v.magFilter===dr||v.magFilter===ws||v.magFilter===Vn||v.minFilter===Gt||v.minFilter===dr||v.minFilter===ws||v.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,U[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,U[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,U[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,te[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,te[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,$[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===un||v.minFilter!==ws&&v.minFilter!==Vn||v.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function N(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",b));let ae=v.source,z=d.get(ae);z===void 0&&(z={},d.set(ae,z));let H=q(v);if(H!==E.__cacheKey){z[H]===void 0&&(z[H]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),z[H].usedTimes++;let J=z[E.__cacheKey];J!==void 0&&(z[E.__cacheKey].usedTimes--,J.usedTimes===0&&M(v)),E.__cacheKey=H,E.__webglTexture=z[H].texture}return O}function W(E,v,O){return Math.floor(Math.floor(E/O)/v)}function oe(E,v,O,ae){let H=E.updateRanges;if(H.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,ae,v.data);else{H.sort((le,Se)=>le.start-Se.start);let J=0;for(let le=1;le<H.length;le++){let Se=H[J],Be=H[le],Ee=Se.start+Se.count,ye=W(Be.start,v.width,4),He=W(Se.start,v.width,4);Be.start<=Ee+1&&ye===He&&W(Be.start+Be.count-1,v.width,4)===ye?Se.count=Math.max(Se.count,Be.start+Be.count-Se.start):(++J,H[J]=Be)}H.length=J+1;let se=s.getParameter(s.UNPACK_ROW_LENGTH),xe=s.getParameter(s.UNPACK_SKIP_PIXELS),Te=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let le=0,Se=H.length;le<Se;le++){let Be=H[le],Ee=Math.floor(Be.start/4),ye=Math.ceil(Be.count/4),He=Ee%v.width,Y=Math.floor(Ee/v.width),ve=ye,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(s.TEXTURE_2D,0,He,Y,ve,Re,O,ae,v.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function K(E,v,O){let ae=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ae=s.TEXTURE_3D);let z=N(E,v),H=v.source;t.bindTexture(ae,E.__webglTexture,s.TEXTURE0+O);let J=n.get(H);if(H.version!==J.__version||z===!0){t.activeTexture(s.TEXTURE0+O);let se=ft.getPrimaries(ft.workingColorSpace),xe=v.colorSpace===ri?null:ft.getPrimaries(v.colorSpace),Te=v.colorSpace===ri||se===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let le=x(v.image,!1,i.maxTextureSize);le=ce(v,le);let Se=r.convert(v.format,v.colorSpace),Be=r.convert(v.type),Ee=y(v.internalFormat,Se,Be,v.colorSpace,v.isVideoTexture);he(ae,v);let ye,He=v.mipmaps,Y=v.isVideoTexture!==!0,ve=J.__version===void 0||z===!0,Re=H.dataReady,Fe=A(v,le);if(v.isDepthTexture)Ee=_(v.format===mr,v.type),ve&&(Y?t.texStorage2D(s.TEXTURE_2D,1,Ee,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,Ee,le.width,le.height,0,Se,Be,null));else if(v.isDataTexture)if(He.length>0){Y&&ve&&t.texStorage2D(s.TEXTURE_2D,Fe,Ee,He[0].width,He[0].height);for(let we=0,me=He.length;we<me;we++)ye=He[we],Y?Re&&t.texSubImage2D(s.TEXTURE_2D,we,0,0,ye.width,ye.height,Se,Be,ye.data):t.texImage2D(s.TEXTURE_2D,we,Ee,ye.width,ye.height,0,Se,Be,ye.data);v.generateMipmaps=!1}else Y?(ve&&t.texStorage2D(s.TEXTURE_2D,Fe,Ee,le.width,le.height),Re&&oe(v,le,Se,Be)):t.texImage2D(s.TEXTURE_2D,0,Ee,le.width,le.height,0,Se,Be,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Y&&ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ee,He[0].width,He[0].height,le.depth);for(let we=0,me=He.length;we<me;we++)if(ye=He[we],v.format!==Tn)if(Se!==null)if(Y){if(Re)if(v.layerUpdates.size>0){let Oe=oh(ye.width,ye.height,v.format,v.type);for(let Je of v.layerUpdates){let wt=ye.data.subarray(Je*Oe/ye.data.BYTES_PER_ELEMENT,(Je+1)*Oe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,Je,ye.width,ye.height,1,Se,wt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,ye.width,ye.height,le.depth,Se,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,we,Ee,ye.width,ye.height,le.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,ye.width,ye.height,le.depth,Se,Be,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,we,Ee,ye.width,ye.height,le.depth,0,Se,Be,ye.data)}else{Y&&ve&&t.texStorage2D(s.TEXTURE_2D,Fe,Ee,He[0].width,He[0].height);for(let we=0,me=He.length;we<me;we++)ye=He[we],v.format!==Tn?Se!==null?Y?Re&&t.compressedTexSubImage2D(s.TEXTURE_2D,we,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,we,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Re&&t.texSubImage2D(s.TEXTURE_2D,we,0,0,ye.width,ye.height,Se,Be,ye.data):t.texImage2D(s.TEXTURE_2D,we,Ee,ye.width,ye.height,0,Se,Be,ye.data)}else if(v.isDataArrayTexture)if(Y){if(ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ee,le.width,le.height,le.depth),Re)if(v.layerUpdates.size>0){let we=oh(le.width,le.height,v.format,v.type);for(let me of v.layerUpdates){let Oe=le.data.subarray(me*we/le.data.BYTES_PER_ELEMENT,(me+1)*we/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,le.width,le.height,1,Se,Be,Oe)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,Be,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,le.width,le.height,le.depth,0,Se,Be,le.data);else if(v.isData3DTexture)Y?(ve&&t.texStorage3D(s.TEXTURE_3D,Fe,Ee,le.width,le.height,le.depth),Re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,Be,le.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,le.width,le.height,le.depth,0,Se,Be,le.data);else if(v.isFramebufferTexture){if(ve)if(Y)t.texStorage2D(s.TEXTURE_2D,Fe,Ee,le.width,le.height);else{let we=le.width,me=le.height;for(let Oe=0;Oe<Fe;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Ee,we,me,0,Se,Be,null),we>>=1,me>>=1}}else if(He.length>0){if(Y&&ve){let we=ie(He[0]);t.texStorage2D(s.TEXTURE_2D,Fe,Ee,we.width,we.height)}for(let we=0,me=He.length;we<me;we++)ye=He[we],Y?Re&&t.texSubImage2D(s.TEXTURE_2D,we,0,0,Se,Be,ye):t.texImage2D(s.TEXTURE_2D,we,Ee,Se,Be,ye);v.generateMipmaps=!1}else if(Y){if(ve){let we=ie(le);t.texStorage2D(s.TEXTURE_2D,Fe,Ee,we.width,we.height)}Re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,Be,le)}else t.texImage2D(s.TEXTURE_2D,0,Ee,Se,Be,le);m(v)&&p(ae),J.__version=H.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function k(E,v,O){if(v.image.length!==6)return;let ae=N(E,v),z=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);let H=n.get(z);if(z.version!==H.__version||ae===!0){t.activeTexture(s.TEXTURE0+O);let J=ft.getPrimaries(ft.workingColorSpace),se=v.colorSpace===ri?null:ft.getPrimaries(v.colorSpace),xe=v.colorSpace===ri||J===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Te=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,Se=[];for(let me=0;me<6;me++)!Te&&!le?Se[me]=x(v.image[me],!0,i.maxCubemapSize):Se[me]=le?v.image[me].image:v.image[me],Se[me]=ce(v,Se[me]);let Be=Se[0],Ee=r.convert(v.format,v.colorSpace),ye=r.convert(v.type),He=y(v.internalFormat,Ee,ye,v.colorSpace),Y=v.isVideoTexture!==!0,ve=H.__version===void 0||ae===!0,Re=z.dataReady,Fe=A(v,Be);he(s.TEXTURE_CUBE_MAP,v);let we;if(Te){Y&&ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,He,Be.width,Be.height);for(let me=0;me<6;me++){we=Se[me].mipmaps;for(let Oe=0;Oe<we.length;Oe++){let Je=we[Oe];v.format!==Tn?Ee!==null?Y?Re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe,0,0,Je.width,Je.height,Ee,Je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe,He,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe,0,0,Je.width,Je.height,Ee,ye,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe,He,Je.width,Je.height,0,Ee,ye,Je.data)}}}else{if(we=v.mipmaps,Y&&ve){we.length>0&&Fe++;let me=ie(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,He,me.width,me.height)}for(let me=0;me<6;me++)if(le){Y?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Se[me].width,Se[me].height,Ee,ye,Se[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,He,Se[me].width,Se[me].height,0,Ee,ye,Se[me].data);for(let Oe=0;Oe<we.length;Oe++){let wt=we[Oe].image[me].image;Y?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe+1,0,0,wt.width,wt.height,Ee,ye,wt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe+1,He,wt.width,wt.height,0,Ee,ye,wt.data)}}else{Y?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ee,ye,Se[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,He,Ee,ye,Se[me]);for(let Oe=0;Oe<we.length;Oe++){let Je=we[Oe];Y?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe+1,0,0,Ee,ye,Je.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe+1,He,Ee,ye,Je.image[me])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),H.__version=z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function fe(E,v,O,ae,z,H){let J=r.convert(O.format,O.colorSpace),se=r.convert(O.type),xe=y(O.internalFormat,J,se,O.colorSpace),Te=n.get(v),le=n.get(O);if(le.__renderTarget=v,!Te.__hasExternalTextures){let Se=Math.max(1,v.width>>H),Be=Math.max(1,v.height>>H);z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?t.texImage3D(z,H,xe,Se,Be,v.depth,0,J,se,null):t.texImage2D(z,H,xe,Se,Be,0,J,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),L(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,z,le.__webglTexture,0,St(v)):(z===s.TEXTURE_2D||z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,z,le.__webglTexture,H),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(E,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){let ae=v.depthTexture,z=ae&&ae.isDepthTexture?ae.type:null,H=_(v.stencilBuffer,z),J=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=St(v);L(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,H,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,H,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,H,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,E)}else{let ae=v.textures;for(let z=0;z<ae.length;z++){let H=ae[z],J=r.convert(H.format,H.colorSpace),se=r.convert(H.type),xe=y(H.internalFormat,J,se,H.colorSpace),Te=St(v);O&&L(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,xe,v.width,v.height):L(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,xe,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,xe,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ae=n.get(v.depthTexture);ae.__renderTarget=v,(!ae.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),D(v.depthTexture,0);let z=ae.__webglTexture,H=St(v);if(v.depthTexture.format===ir)L(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,z,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,z,0);else if(v.depthTexture.format===mr)L(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,z,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Pe(E){let v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let ae=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ae){let z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ae.removeEventListener("dispose",z)};ae.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=ae}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let ae=E.texture.mipmaps;ae&&ae.length>0?ge(v.__webglFramebuffer[0],E):ge(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[ae]),v.__webglDepthbuffer[ae]===void 0)v.__webglDepthbuffer[ae]=s.createRenderbuffer(),_e(v.__webglDepthbuffer[ae],E,!1);else{let z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[ae];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,z,s.RENDERBUFFER,H)}}else{let ae=E.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),_e(v.__webglDepthbuffer,E,!1);else{let z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,z,s.RENDERBUFFER,H)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(E,v,O){let ae=n.get(E);v!==void 0&&fe(ae.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Pe(E)}function B(E){let v=E.texture,O=n.get(E),ae=n.get(v);E.addEventListener("dispose",I);let z=E.textures,H=E.isWebGLCubeRenderTarget===!0,J=z.length>1;if(J||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=v.version,o.memory.textures++),H){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let xe=0;xe<v.mipmaps.length;xe++)O.__webglFramebuffer[se][xe]=s.createFramebuffer()}else O.__webglFramebuffer[se]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)O.__webglFramebuffer[se]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(J)for(let se=0,xe=z.length;se<xe;se++){let Te=n.get(z[se]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&L(E)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<z.length;se++){let xe=z[se];O.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[se]);let Te=r.convert(xe.format,xe.colorSpace),le=r.convert(xe.type),Se=y(xe.internalFormat,Te,le,xe.colorSpace,E.isXRRenderTarget===!0),Be=St(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Se,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,O.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),he(s.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)fe(O.__webglFramebuffer[se][xe],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe);else fe(O.__webglFramebuffer[se],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){for(let se=0,xe=z.length;se<xe;se++){let Te=z[se],le=n.get(Te),Se=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Se,le.__webglTexture),he(Se,Te),fe(O.__webglFramebuffer,E,Te,s.COLOR_ATTACHMENT0+se,Se,0),m(Te)&&p(Se)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(se=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,ae.__webglTexture),he(se,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)fe(O.__webglFramebuffer[xe],E,v,s.COLOR_ATTACHMENT0,se,xe);else fe(O.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,se,0);m(v)&&p(se),t.unbindTexture()}E.depthBuffer&&Pe(E)}function nt(E){let v=E.textures;for(let O=0,ae=v.length;O<ae;O++){let z=v[O];if(m(z)){let H=S(E),J=n.get(z).__webglTexture;t.bindTexture(H,J),p(H),t.unbindTexture()}}}let ke=[],Ye=[];function De(E){if(E.samples>0){if(L(E)===!1){let v=E.textures,O=E.width,ae=E.height,z=s.COLOR_BUFFER_BIT,H=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=n.get(E),se=v.length>1;if(se)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,J.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer);let xe=E.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,J.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(z|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(z|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,J.__webglColorRenderbuffer[Te]);let le=n.get(v[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,le,0)}s.blitFramebuffer(0,0,O,ae,0,0,O,ae,z,s.NEAREST),l===!0&&(ke.length=0,Ye.length=0,ke.push(s.COLOR_ATTACHMENT0+Te),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ke.push(H),Ye.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,J.__webglColorRenderbuffer[Te]);let le=n.get(v[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,J.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function St(E){return Math.min(i.maxSamples,E.samples)}function L(E){let v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ne(E){let v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function ce(E,v){let O=E.colorSpace,ae=E.format,z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==jt&&O!==ri&&(ft.getTransfer(O)===It?(ae!==Tn||z!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function ie(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=D,this.setTexture2DArray=Z,this.setTexture3D=re,this.setTextureCube=j,this.rebindTextures=lt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=L}function o_(s,e){function t(n,i=ri){let r,o=ft.getTransfer(i);if(n===ii)return s.UNSIGNED_BYTE;if(n===Ka)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vl)return s.BYTE;if(n===Gl)return s.SHORT;if(n===fr)return s.UNSIGNED_SHORT;if(n===Ya)return s.INT;if(n===$i)return s.UNSIGNED_INT;if(n===xn)return s.FLOAT;if(n===si)return s.HALF_FLOAT;if(n===ql)return s.ALPHA;if(n===Yl)return s.RGB;if(n===Tn)return s.RGBA;if(n===ir)return s.DEPTH_COMPONENT;if(n===mr)return s.DEPTH_STENCIL;if(n===Za)return s.RED;if(n===Ja)return s.RED_INTEGER;if(n===Kl)return s.RG;if(n===ja)return s.RG_INTEGER;if(n===Qa)return s.RGBA_INTEGER;if(n===bo||n===To||n===Eo||n===Ao)if(o===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return o===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===yc||n===vc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mc||n===Sc||n===wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mc)return o===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===Tc||n===Ec||n===Ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var a_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new co(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jn({vertexShader:a_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vh=class extends li{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new yh,p={},S=t.getContextAttributes(),y=null,_=null,A=[],b=[],I=new Le,C=null,M=new Kt;M.viewport=new Tt;let w=new Kt;w.viewport=new Tt;let R=[M,w],G=new Da,V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let k=A[K];return k===void 0&&(k=new ar,A[K]=k),k.getTargetRaySpace()},this.getControllerGrip=function(K){let k=A[K];return k===void 0&&(k=new ar,A[K]=k),k.getGripSpace()},this.getHand=function(K){let k=A[K];return k===void 0&&(k=new ar,A[K]=k),k.getHandSpace()};function D(K){let k=b.indexOf(K.inputSource);if(k===-1)return;let fe=A[k];fe!==void 0&&(fe.update(K.inputSource,K.frame,c||o),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function Z(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",re);for(let K=0;K<A.length;K++){let k=b[K];k!==null&&(b[K]=null,A[K].disconnect(k))}V=null,q=null,m.reset();for(let K in p)delete p[K];e.setRenderTarget(y),f=null,d=null,h=null,i=null,_=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",re),S.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,_e=null,ge=null;S.depth&&(ge=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?mr:ir,_e=S.stencil?pr:$i);let Pe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new hi(d.textureWidth,d.textureHeight,{format:Tn,type:ii,depthTexture:new ao(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new hi(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(K){for(let k=0;k<K.removed.length;k++){let fe=K.removed[k],_e=b.indexOf(fe);_e>=0&&(b[_e]=null,A[_e].disconnect(fe))}for(let k=0;k<K.added.length;k++){let fe=K.added[k],_e=b.indexOf(fe);if(_e===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=b.length){b.push(fe),_e=Pe;break}else if(b[Pe]===null){b[Pe]=fe,_e=Pe;break}if(_e===-1)break}let ge=A[_e];ge&&ge.connect(fe)}}let j=new P,U=new P;function te(K,k,fe){j.setFromMatrixPosition(k.matrixWorld),U.setFromMatrixPosition(fe.matrixWorld);let _e=j.distanceTo(U),ge=k.projectionMatrix.elements,Pe=fe.projectionMatrix.elements,lt=ge[14]/(ge[10]-1),B=ge[14]/(ge[10]+1),nt=(ge[9]+1)/ge[5],ke=(ge[9]-1)/ge[5],Ye=(ge[8]-1)/ge[0],De=(Pe[8]+1)/Pe[0],St=lt*Ye,L=lt*De,ne=_e/(-Ye+De),ce=ne*-Ye;if(k.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ce),K.translateZ(ne),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ge[10]===-1)K.projectionMatrix.copy(k.projectionMatrix),K.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let ie=lt+ne,E=B+ne,v=St-ce,O=L+(_e-ce),ae=nt*B/E*ie,z=ke*B/E*ie;K.projectionMatrix.makePerspective(v,O,ae,z,ie,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function $(K,k){k===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(k.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let k=K.near,fe=K.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),G.near=w.near=M.near=k,G.far=w.far=M.far=fe,(V!==G.near||q!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),V=G.near,q=G.far),G.layers.mask=K.layers.mask|6,M.layers.mask=G.layers.mask&3,w.layers.mask=G.layers.mask&5;let _e=K.parent,ge=G.cameras;$(G,_e);for(let Pe=0;Pe<ge.length;Pe++)$(ge[Pe],_e);ge.length===2?te(G,M,w):G.projectionMatrix.copy(M.projectionMatrix),he(K,G,_e)};function he(K,k,fe){fe===null?K.matrix.copy(k.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(k.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(k.projectionMatrix),K.projectionMatrixInverse.copy(k.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=us*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(K){return p[K]};let N=null;function W(K,k){if(u=k.getViewerPose(c||o),g=k,u!==null){let fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let _e=!1;fe.length!==G.cameras.length&&(G.cameras.length=0,_e=!0);for(let B=0;B<fe.length;B++){let nt=fe[B],ke=null;if(f!==null)ke=f.getViewport(nt);else{let De=h.getViewSubImage(d,nt);ke=De.viewport,B===0&&(e.setRenderTargetTextures(_,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(_))}let Ye=R[B];Ye===void 0&&(Ye=new Kt,Ye.layers.enable(B),Ye.viewport=new Tt,R[B]=Ye),Ye.matrix.fromArray(nt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(nt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ke.x,ke.y,ke.width,ke.height),B===0&&(G.matrix.copy(Ye.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),_e===!0&&G.cameras.push(Ye)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let B=h.getDepthInformation(fe[0]);B&&B.isValid&&B.texture&&m.init(B,i.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let B=0;B<fe.length;B++){let nt=fe[B].camera;if(nt){let ke=p[nt];ke||(ke=new co,p[nt]=ke);let Ye=h.getCameraImage(nt);ke.sourceTexture=Ye}}}}for(let fe=0;fe<A.length;fe++){let _e=b[fe],ge=A[fe];_e!==null&&ge!==void 0&&ge.update(_e,k,c||o)}N&&N(K,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let oe=new Mf;oe.setAnimationLoop(W),this.setAnimationLoop=function(K){N=K},this.dispose=function(){}}},Es=new Dn,l_=new je;function h_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),y=S.envMap,_=S.envMapRotation;y&&(m.envMap.value=y,Es.copy(_),Es.x*=-1,Es.y*=-1,Es.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),m.envMapRotation.value.setFromMatrix4(l_.makeRotationFromEuler(Es)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function u_(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let _=y.program;n.uniformBlockBinding(S,_)}function c(S,y){let _=i[S.id];_===void 0&&(g(S),_=u(S),i[S.id]=_,S.addEventListener("dispose",m));let A=y.program;n.updateUBOMapping(S,A);let b=e.render.frame;r[S.id]!==b&&(d(S),r[S.id]=b)}function u(S){let y=h();S.__bindingPointIndex=y;let _=s.createBuffer(),A=S.__size,b=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,A,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let y=i[S.id],_=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let b=0,I=_.length;b<I;b++){let C=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,w=C.length;M<w;M++){let R=C[M];if(f(R,b,M,A)===!0){let G=R.__offset,V=Array.isArray(R.value)?R.value:[R.value],q=0;for(let D=0;D<V.length;D++){let Z=V[D],re=x(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,G+q,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,q),q+=re.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,y,_,A){let b=S.value,I=y+"_"+_;if(A[I]===void 0)return typeof b=="number"||typeof b=="boolean"?A[I]=b:A[I]=b.clone(),!0;{let C=A[I];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[I]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(S){let y=S.uniforms,_=0,A=16;for(let I=0,C=y.length;I<C;I++){let M=Array.isArray(y[I])?y[I]:[y[I]];for(let w=0,R=M.length;w<R;w++){let G=M[w],V=Array.isArray(G.value)?G.value:[G.value];for(let q=0,D=V.length;q<D;q++){let Z=V[q],re=x(Z),j=_%A,U=j%re.boundary,te=j+U;_+=U,te!==0&&A-te<re.storage&&(_+=A-te),G.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=re.storage}}}let b=_%A;return b>0&&(_+=A-b),S.__size=_,S.__cache={},this}function x(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Lc=class{constructor(e={}){let{canvas:t=Wd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,A=!1;this._outputColorSpace=yt;let b=0,I=0,C=null,M=-1,w=null,R=new Tt,G=new Tt,V=null,q=new ze(0),D=0,Z=t.width,re=t.height,j=1,U=null,te=null,$=new Tt(0,0,Z,re),he=new Tt(0,0,Z,re),N=!1,W=new Xi,oe=!1,K=!1,k=new je,fe=new P,_e=new Tt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function lt(){return C===null?j:1}let B=n;function nt(T,Q){return t.getContext(T,Q)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",we,!1),B===null){let Q="webgl2";if(B=nt(Q,T),B===null)throw nt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ke,Ye,De,St,L,ne,ce,ie,E,v,O,ae,z,H,J,se,xe,Te,le,Se,Be,Ee,ye,He;function Y(){ke=new Cx(B),ke.init(),Ee=new o_(B,ke),Ye=new Sx(B,ke,e,Ee),De=new s_(B,ke),Ye.reversedDepthBuffer&&d&&De.buffers.depth.setReversed(!0),St=new Lx(B),L=new X1,ne=new r_(B,ke,De,L,Ye,Ee,St),ce=new bx(_),ie=new Rx(_),E=new Bm(B),ye=new vx(B,E),v=new Ix(B,E,St,ye),O=new Nx(B,v,E,St),le=new Dx(B,Ye,ne),se=new wx(L),ae=new W1(_,ce,ie,ke,Ye,ye,se),z=new h_(_,L),H=new Y1,J=new Q1(ke),Te=new yx(_,ce,ie,De,O,f,l),xe=new n_(_,O,Ye),He=new u_(B,St,Ye,De),Se=new Mx(B,ke,St),Be=new Px(B,ke,St),St.programs=ae.programs,_.capabilities=Ye,_.extensions=ke,_.properties=L,_.renderLists=H,_.shadowMap=xe,_.state=De,_.info=St}Y();let ve=new vh(_,B);this.xr=ve,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(Z,re,!1))},this.getSize=function(T){return T.set(Z,re)},this.setSize=function(T,Q,ue=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,re=Q,t.width=Math.floor(T*j),t.height=Math.floor(Q*j),ue===!0&&(t.style.width=T+"px",t.style.height=Q+"px"),this.setViewport(0,0,T,Q)},this.getDrawingBufferSize=function(T){return T.set(Z*j,re*j).floor()},this.setDrawingBufferSize=function(T,Q,ue){Z=T,re=Q,j=ue,t.width=Math.floor(T*ue),t.height=Math.floor(Q*ue),this.setViewport(0,0,T,Q)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,Q,ue,de){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,Q,ue,de),De.viewport(R.copy($).multiplyScalar(j).round())},this.getScissor=function(T){return T.copy(he)},this.setScissor=function(T,Q,ue,de){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,Q,ue,de),De.scissor(G.copy(he).multiplyScalar(j).round())},this.getScissorTest=function(){return N},this.setScissorTest=function(T){De.setScissorTest(N=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){te=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(T=!0,Q=!0,ue=!0){let de=0;if(T){let ee=!1;if(C!==null){let be=C.texture.format;ee=be===Qa||be===ja||be===Ja}if(ee){let be=C.texture.type,Ce=be===ii||be===$i||be===fr||be===pr||be===Ka||be===$a,Ne=Te.getClearColor(),Ue=Te.getClearAlpha(),Ke=Ne.r,Ze=Ne.g,Xe=Ne.b;Ce?(g[0]=Ke,g[1]=Ze,g[2]=Xe,g[3]=Ue,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=Ke,x[1]=Ze,x[2]=Xe,x[3]=Ue,B.clearBufferiv(B.COLOR,0,x))}else de|=B.COLOR_BUFFER_BIT}Q&&(de|=B.DEPTH_BUFFER_BIT),ue&&(de|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Te.dispose(),H.dispose(),J.dispose(),L.dispose(),ce.dispose(),ie.dispose(),O.dispose(),ye.dispose(),He.dispose(),ae.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Nn),ve.removeEventListener("sessionend",Ls),yn.stop()};function Re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=St.autoReset,Q=xe.enabled,ue=xe.autoUpdate,de=xe.needsUpdate,ee=xe.type;Y(),St.autoReset=T,xe.enabled=Q,xe.autoUpdate=ue,xe.needsUpdate=de,xe.type=ee}function we(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){let Q=T.target;Q.removeEventListener("dispose",me),Oe(Q)}function Oe(T){Je(T),L.remove(T)}function Je(T){let Q=L.get(T).programs;Q!==void 0&&(Q.forEach(function(ue){ae.releaseProgram(ue)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,Q,ue,de,ee,be){Q===null&&(Q=ge);let Ce=ee.isMesh&&ee.matrixWorld.determinant()<0,Ne=Cr(T,Q,ue,de,ee);De.setMaterial(de,Ce);let Ue=ue.index,Ke=1;if(de.wireframe===!0){if(Ue=v.getWireframeAttribute(ue),Ue===void 0)return;Ke=2}let Ze=ue.drawRange,Xe=ue.attributes.position,at=Ze.start*Ke,vt=(Ze.start+Ze.count)*Ke;be!==null&&(at=Math.max(at,be.start*Ke),vt=Math.min(vt,(be.start+be.count)*Ke)),Ue!==null?(at=Math.max(at,0),vt=Math.min(vt,Ue.count)):Xe!=null&&(at=Math.max(at,0),vt=Math.min(vt,Xe.count));let Ut=vt-at;if(Ut<0||Ut===1/0)return;ye.setup(ee,de,Ne,ue,Ue);let Lt,ct=Se;if(Ue!==null&&(Lt=E.get(Ue),ct=Be,ct.setIndex(Lt)),ee.isMesh)de.wireframe===!0?(De.setLineWidth(de.wireframeLinewidth*lt()),ct.setMode(B.LINES)):ct.setMode(B.TRIANGLES);else if(ee.isLine){let Ve=de.linewidth;Ve===void 0&&(Ve=1),De.setLineWidth(Ve*lt()),ee.isLineSegments?ct.setMode(B.LINES):ee.isLineLoop?ct.setMode(B.LINE_LOOP):ct.setMode(B.LINE_STRIP)}else ee.isPoints?ct.setMode(B.POINTS):ee.isSprite&&ct.setMode(B.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))ct.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Ve=ee._multiDrawStarts,Ft=ee._multiDrawCounts,mt=ee._multiDrawCount,fn=Ue?E.get(Ue).bytesPerElement:1,F=L.get(de).currentProgram.getUniforms();for(let X=0;X<mt;X++)F.setValue(B,"_gl_DrawID",X),ct.render(Ve[X]/fn,Ft[X])}else if(ee.isInstancedMesh)ct.renderInstances(at,Ut,ee.count);else if(ue.isInstancedBufferGeometry){let Ve=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ft=Math.min(ue.instanceCount,Ve);ct.renderInstances(at,Ut,Ft)}else ct.render(at,Ut)};function wt(T,Q,ue){T.transparent===!0&&T.side===zt&&T.forceSinglePass===!1?(T.side=bn,T.needsUpdate=!0,ji(T,Q,ue),T.side=Sn,T.needsUpdate=!0,ji(T,Q,ue),T.side=zt):ji(T,Q,ue)}this.compile=function(T,Q,ue=null){ue===null&&(ue=T),p=J.get(ue),p.init(Q),y.push(p),ue.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),T!==ue&&T.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),p.setupLights();let de=new Set;return T.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let be=ee.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){let Ne=be[Ce];wt(Ne,ue,ee),de.add(Ne)}else wt(be,ue,ee),de.add(be)}),p=y.pop(),de},this.compileAsync=function(T,Q,ue=null){let de=this.compile(T,Q,ue);return new Promise(ee=>{function be(){if(de.forEach(function(Ce){L.get(Ce).currentProgram.isReady()&&de.delete(Ce)}),de.size===0){ee(T);return}setTimeout(be,10)}ke.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let xt=null;function Zt(T){xt&&xt(T)}function Nn(){yn.stop()}function Ls(){yn.start()}let yn=new Mf;yn.setAnimationLoop(Zt),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(T){xt=T,ve.setAnimationLoop(T),T===null?yn.stop():yn.start()},ve.addEventListener("sessionstart",Nn),ve.addEventListener("sessionend",Ls),this.render=function(T,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(Q),Q=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,Q,C),p=J.get(T,y.length),p.init(Q),y.push(p),k.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),W.setFromProjectionMatrix(k,$n,Q.reversedDepth),K=this.localClippingEnabled,oe=se.init(this.clippingPlanes,K),m=H.get(T,S.length),m.init(),S.push(m),ve.enabled===!0&&ve.isPresenting===!0){let be=_.xr.getDepthSensingMesh();be!==null&&Ds(be,Q,-1/0,_.sortObjects)}Ds(T,Q,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(U,te),Pe=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Pe&&Te.addToRenderList(m,T),this.info.render.frame++,oe===!0&&se.beginShadows();let ue=p.state.shadowsArray;xe.render(ue,T,Q),oe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let de=m.opaque,ee=m.transmissive;if(p.setupLights(),Q.isArrayCamera){let be=Q.cameras;if(ee.length>0)for(let Ce=0,Ne=be.length;Ce<Ne;Ce++){let Ue=be[Ce];Rr(de,ee,T,Ue)}Pe&&Te.render(T);for(let Ce=0,Ne=be.length;Ce<Ne;Ce++){let Ue=be[Ce];Ns(m,T,Ue,Ue.viewport)}}else ee.length>0&&Rr(de,ee,T,Q),Pe&&Te.render(T),Ns(m,T,Q);C!==null&&I===0&&(ne.updateMultisampleRenderTarget(C),ne.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(_,T,Q),ye.resetDefaultState(),M=-1,w=null,y.pop(),y.length>0?(p=y[y.length-1],oe===!0&&se.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ds(T,Q,ue,de){if(T.visible===!1)return;if(T.layers.test(Q.layers)){if(T.isGroup)ue=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Q);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){de&&_e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);let Ce=O.update(T),Ne=T.material;Ne.visible&&m.push(T,Ce,Ne,ue,_e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){let Ce=O.update(T),Ne=T.material;if(de&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_e.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),_e.copy(Ce.boundingSphere.center)),_e.applyMatrix4(T.matrixWorld).applyMatrix4(k)),Array.isArray(Ne)){let Ue=Ce.groups;for(let Ke=0,Ze=Ue.length;Ke<Ze;Ke++){let Xe=Ue[Ke],at=Ne[Xe.materialIndex];at&&at.visible&&m.push(T,Ce,at,ue,_e.z,Xe)}}else Ne.visible&&m.push(T,Ce,Ne,ue,_e.z,null)}}let be=T.children;for(let Ce=0,Ne=be.length;Ce<Ne;Ce++)Ds(be[Ce],Q,ue,de)}function Ns(T,Q,ue,de){let ee=T.opaque,be=T.transmissive,Ce=T.transparent;p.setupLightsView(ue),oe===!0&&se.setGlobalState(_.clippingPlanes,ue),de&&De.viewport(R.copy(de)),ee.length>0&&Us(ee,Q,ue),be.length>0&&Us(be,Q,ue),Ce.length>0&&Us(Ce,Q,ue),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Rr(T,Q,ue,de){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[de.id]===void 0&&(p.state.transmissionRenderTarget[de.id]=new hi(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?si:ii,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let be=p.state.transmissionRenderTarget[de.id],Ce=de.viewport||R;be.setSize(Ce.z*_.transmissionResolutionScale,Ce.w*_.transmissionResolutionScale);let Ne=_.getRenderTarget(),Ue=_.getActiveCubeFace(),Ke=_.getActiveMipmapLevel();_.setRenderTarget(be),_.getClearColor(q),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear(),Pe&&Te.render(ue);let Ze=_.toneMapping;_.toneMapping=Di;let Xe=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),p.setupLightsView(de),oe===!0&&se.setGlobalState(_.clippingPlanes,de),Us(T,ue,de),ne.updateMultisampleRenderTarget(be),ne.updateRenderTargetMipmap(be),ke.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let vt=0,Ut=Q.length;vt<Ut;vt++){let Lt=Q[vt],ct=Lt.object,Ve=Lt.geometry,Ft=Lt.material,mt=Lt.group;if(Ft.side===zt&&ct.layers.test(de.layers)){let fn=Ft.side;Ft.side=bn,Ft.needsUpdate=!0,vn(ct,ue,de,Ve,Ft,mt),Ft.side=fn,Ft.needsUpdate=!0,at=!0}}at===!0&&(ne.updateMultisampleRenderTarget(be),ne.updateRenderTargetMipmap(be))}_.setRenderTarget(Ne,Ue,Ke),_.setClearColor(q,D),Xe!==void 0&&(de.viewport=Xe),_.toneMapping=Ze}function Us(T,Q,ue){let de=Q.isScene===!0?Q.overrideMaterial:null;for(let ee=0,be=T.length;ee<be;ee++){let Ce=T[ee],Ne=Ce.object,Ue=Ce.geometry,Ke=Ce.group,Ze=Ce.material;Ze.allowOverride===!0&&de!==null&&(Ze=de),Ne.layers.test(ue.layers)&&vn(Ne,Q,ue,Ue,Ze,Ke)}}function vn(T,Q,ue,de,ee,be){T.onBeforeRender(_,Q,ue,de,ee,be),T.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(_,Q,ue,de,T,be),ee.transparent===!0&&ee.side===zt&&ee.forceSinglePass===!1?(ee.side=bn,ee.needsUpdate=!0,_.renderBufferDirect(ue,Q,de,ee,T,be),ee.side=Sn,ee.needsUpdate=!0,_.renderBufferDirect(ue,Q,de,ee,T,be),ee.side=zt):_.renderBufferDirect(ue,Q,de,ee,T,be),T.onAfterRender(_,Q,ue,de,ee,be)}function ji(T,Q,ue){Q.isScene!==!0&&(Q=ge);let de=L.get(T),ee=p.state.lights,be=p.state.shadowsArray,Ce=ee.state.version,Ne=ae.getParameters(T,ee.state,be,Q,ue),Ue=ae.getProgramCacheKey(Ne),Ke=de.programs;de.environment=T.isMeshStandardMaterial?Q.environment:null,de.fog=Q.fog,de.envMap=(T.isMeshStandardMaterial?ie:ce).get(T.envMap||de.environment),de.envMapRotation=de.environment!==null&&T.envMap===null?Q.environmentRotation:T.envMapRotation,Ke===void 0&&(T.addEventListener("dispose",me),Ke=new Map,de.programs=Ke);let Ze=Ke.get(Ue);if(Ze!==void 0){if(de.currentProgram===Ze&&de.lightsStateVersion===Ce)return Fs(T,Ne),Ze}else Ne.uniforms=ae.getUniforms(T),T.onBeforeCompile(Ne,_),Ze=ae.acquireProgram(Ne,Ue),Ke.set(Ue,Ze),de.uniforms=Ne.uniforms;let Xe=de.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xe.clippingPlanes=se.uniform),Fs(T,Ne),de.needsLights=Qi(T),de.lightsStateVersion=Ce,de.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.directionalShadowMap.value=ee.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotShadowMap.value=ee.state.spotShadowMap,Xe.spotLightMatrix.value=ee.state.spotLightMatrix,Xe.spotLightMap.value=ee.state.spotLightMap,Xe.pointShadowMap.value=ee.state.pointShadowMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix),de.currentProgram=Ze,de.uniformsList=null,Ze}function rn(T){if(T.uniformsList===null){let Q=T.currentProgram.getUniforms();T.uniformsList=yr.seqWithValue(Q.seq,T.uniforms)}return T.uniformsList}function Fs(T,Q){let ue=L.get(T);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.batchingColor=Q.batchingColor,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function Cr(T,Q,ue,de,ee){Q.isScene!==!0&&(Q=ge),ne.resetTextureUnits();let be=Q.fog,Ce=de.isMeshStandardMaterial?Q.environment:null,Ne=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:jt,Ue=(de.isMeshStandardMaterial?ie:ce).get(de.envMap||Ce),Ke=de.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Ze=!!ue.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),Xe=!!ue.morphAttributes.position,at=!!ue.morphAttributes.normal,vt=!!ue.morphAttributes.color,Ut=Di;de.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ut=_.toneMapping);let Lt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ct=Lt!==void 0?Lt.length:0,Ve=L.get(de),Ft=p.state.lights;if(oe===!0&&(K===!0||T!==w)){let et=T===w&&de.id===M;se.setState(de,T,et)}let mt=!1;de.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ft.state.version||Ve.outputColorSpace!==Ne||ee.isBatchedMesh&&Ve.batching===!1||!ee.isBatchedMesh&&Ve.batching===!0||ee.isBatchedMesh&&Ve.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ve.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ve.instancing===!1||!ee.isInstancedMesh&&Ve.instancing===!0||ee.isSkinnedMesh&&Ve.skinning===!1||!ee.isSkinnedMesh&&Ve.skinning===!0||ee.isInstancedMesh&&Ve.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ve.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ve.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ve.instancingMorph===!1&&ee.morphTexture!==null||Ve.envMap!==Ue||de.fog===!0&&Ve.fog!==be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==se.numPlanes||Ve.numIntersection!==se.numIntersection)||Ve.vertexAlphas!==Ke||Ve.vertexTangents!==Ze||Ve.morphTargets!==Xe||Ve.morphNormals!==at||Ve.morphColors!==vt||Ve.toneMapping!==Ut||Ve.morphTargetsCount!==ct)&&(mt=!0):(mt=!0,Ve.__version=de.version);let fn=Ve.currentProgram;mt===!0&&(fn=ji(de,Q,ee));let F=!1,X=!1,pe=!1,Me=fn.getUniforms(),$e=Ve.uniforms;if(De.useProgram(fn.program)&&(F=!0,X=!0,pe=!0),de.id!==M&&(M=de.id,X=!0),F||w!==T){De.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Me.setValue(B,"projectionMatrix",T.projectionMatrix),Me.setValue(B,"viewMatrix",T.matrixWorldInverse);let _t=Me.map.cameraPosition;_t!==void 0&&_t.setValue(B,fe.setFromMatrixPosition(T.matrixWorld)),Ye.logarithmicDepthBuffer&&Me.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Me.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,X=!0,pe=!0)}if(ee.isSkinnedMesh){Me.setOptional(B,ee,"bindMatrix"),Me.setOptional(B,ee,"bindMatrixInverse");let et=ee.skeleton;et&&(et.boneTexture===null&&et.computeBoneTexture(),Me.setValue(B,"boneTexture",et.boneTexture,ne))}ee.isBatchedMesh&&(Me.setOptional(B,ee,"batchingTexture"),Me.setValue(B,"batchingTexture",ee._matricesTexture,ne),Me.setOptional(B,ee,"batchingIdTexture"),Me.setValue(B,"batchingIdTexture",ee._indirectTexture,ne),Me.setOptional(B,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Me.setValue(B,"batchingColorTexture",ee._colorsTexture,ne));let Ge=ue.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&le.update(ee,ue,fn),(X||Ve.receiveShadow!==ee.receiveShadow)&&(Ve.receiveShadow=ee.receiveShadow,Me.setValue(B,"receiveShadow",ee.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&($e.envMap.value=Ue,$e.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&Q.environment!==null&&($e.envMapIntensity.value=Q.environmentIntensity),X&&(Me.setValue(B,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&$c($e,pe),be&&de.fog===!0&&z.refreshFogUniforms($e,be),z.refreshMaterialUniforms($e,de,j,re,p.state.transmissionRenderTarget[T.id]),yr.upload(B,rn(Ve),$e,ne)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(yr.upload(B,rn(Ve),$e,ne),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Me.setValue(B,"center",ee.center),Me.setValue(B,"modelViewMatrix",ee.modelViewMatrix),Me.setValue(B,"normalMatrix",ee.normalMatrix),Me.setValue(B,"modelMatrix",ee.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){let et=de.uniformsGroups;for(let _t=0,En=et.length;_t<En;_t++){let qt=et[_t];He.update(qt,fn),He.bind(qt,fn)}}return fn}function $c(T,Q){T.ambientLightColor.needsUpdate=Q,T.lightProbe.needsUpdate=Q,T.directionalLights.needsUpdate=Q,T.directionalLightShadows.needsUpdate=Q,T.pointLights.needsUpdate=Q,T.pointLightShadows.needsUpdate=Q,T.spotLights.needsUpdate=Q,T.spotLightShadows.needsUpdate=Q,T.rectAreaLights.needsUpdate=Q,T.hemisphereLights.needsUpdate=Q}function Qi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,Q,ue){let de=L.get(T);de.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),L.get(T.texture).__webglTexture=Q,L.get(T.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:ue,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Q){let ue=L.get(T);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0};let Do=B.createFramebuffer();this.setRenderTarget=function(T,Q=0,ue=0){C=T,b=Q,I=ue;let de=!0,ee=null,be=!1,Ce=!1;if(T){let Ue=L.get(T);if(Ue.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(B.FRAMEBUFFER,null),de=!1;else if(Ue.__webglFramebuffer===void 0)ne.setupRenderTarget(T);else if(Ue.__hasExternalTextures)ne.rebindTextures(T,L.get(T.texture).__webglTexture,L.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Xe=T.depthTexture;if(Ue.__boundDepthTexture!==Xe){if(Xe!==null&&L.has(Xe)&&(T.width!==Xe.image.width||T.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(T)}}let Ke=T.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ce=!0);let Ze=L.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[Q])?ee=Ze[Q][ue]:ee=Ze[Q],be=!0):T.samples>0&&ne.useMultisampledRTT(T)===!1?ee=L.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?ee=Ze[ue]:ee=Ze,R.copy(T.viewport),G.copy(T.scissor),V=T.scissorTest}else R.copy($).multiplyScalar(j).floor(),G.copy(he).multiplyScalar(j).floor(),V=N;if(ue!==0&&(ee=Do),De.bindFramebuffer(B.FRAMEBUFFER,ee)&&de&&De.drawBuffers(T,ee),De.viewport(R),De.scissor(G),De.setScissorTest(V),be){let Ue=L.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue.__webglTexture,ue)}else if(Ce){let Ue=Q;for(let Ke=0;Ke<T.textures.length;Ke++){let Ze=L.get(T.textures[Ke]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ke,Ze.__webglTexture,ue,Ue)}}else if(T!==null&&ue!==0){let Ue=L.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ue.__webglTexture,ue)}M=-1},this.readRenderTargetPixels=function(T,Q,ue,de,ee,be,Ce,Ne=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=L.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){De.bindFramebuffer(B.FRAMEBUFFER,Ue);try{let Ke=T.textures[Ne],Ze=Ke.format,Xe=Ke.type;if(!Ye.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=T.width-de&&ue>=0&&ue<=T.height-ee&&(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ne),B.readPixels(Q,ue,de,ee,Ee.convert(Ze),Ee.convert(Xe),be))}finally{let Ke=C!==null?L.get(C).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(T,Q,ue,de,ee,be,Ce,Ne=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=L.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue)if(Q>=0&&Q<=T.width-de&&ue>=0&&ue<=T.height-ee){De.bindFramebuffer(B.FRAMEBUFFER,Ue);let Ke=T.textures[Ne],Ze=Ke.format,Xe=Ke.type;if(!Ye.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,at),B.bufferData(B.PIXEL_PACK_BUFFER,be.byteLength,B.STREAM_READ),T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ne),B.readPixels(Q,ue,de,ee,Ee.convert(Ze),Ee.convert(Xe),0);let vt=C!==null?L.get(C).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,vt);let Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Xd(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,at),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,be),B.deleteBuffer(at),B.deleteSync(Ut),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Q=null,ue=0){let de=Math.pow(2,-ue),ee=Math.floor(T.image.width*de),be=Math.floor(T.image.height*de),Ce=Q!==null?Q.x:0,Ne=Q!==null?Q.y:0;ne.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,ue,0,0,Ce,Ne,ee,be),De.unbindTexture()};let Rt=B.createFramebuffer(),ai=B.createFramebuffer();this.copyTextureToTexture=function(T,Q,ue=null,de=null,ee=0,be=null){be===null&&(ee!==0?(rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=ee,ee=0):be=0);let Ce,Ne,Ue,Ke,Ze,Xe,at,vt,Ut,Lt=T.isCompressedTexture?T.mipmaps[be]:T.image;if(ue!==null)Ce=ue.max.x-ue.min.x,Ne=ue.max.y-ue.min.y,Ue=ue.isBox3?ue.max.z-ue.min.z:1,Ke=ue.min.x,Ze=ue.min.y,Xe=ue.isBox3?ue.min.z:0;else{let Ge=Math.pow(2,-ee);Ce=Math.floor(Lt.width*Ge),Ne=Math.floor(Lt.height*Ge),T.isDataArrayTexture?Ue=Lt.depth:T.isData3DTexture?Ue=Math.floor(Lt.depth*Ge):Ue=1,Ke=0,Ze=0,Xe=0}de!==null?(at=de.x,vt=de.y,Ut=de.z):(at=0,vt=0,Ut=0);let ct=Ee.convert(Q.format),Ve=Ee.convert(Q.type),Ft;Q.isData3DTexture?(ne.setTexture3D(Q,0),Ft=B.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(ne.setTexture2DArray(Q,0),Ft=B.TEXTURE_2D_ARRAY):(ne.setTexture2D(Q,0),Ft=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Q.unpackAlignment);let mt=B.getParameter(B.UNPACK_ROW_LENGTH),fn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),F=B.getParameter(B.UNPACK_SKIP_PIXELS),X=B.getParameter(B.UNPACK_SKIP_ROWS),pe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ke),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe);let Me=T.isDataArrayTexture||T.isData3DTexture,$e=Q.isDataArrayTexture||Q.isData3DTexture;if(T.isDepthTexture){let Ge=L.get(T),et=L.get(Q),_t=L.get(Ge.__renderTarget),En=L.get(et.__renderTarget);De.bindFramebuffer(B.READ_FRAMEBUFFER,_t.__webglFramebuffer),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let qt=0;qt<Ue;qt++)Me&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,L.get(T).__webglTexture,ee,Xe+qt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,L.get(Q).__webglTexture,be,Ut+qt)),B.blitFramebuffer(Ke,Ze,Ce,Ne,at,vt,Ce,Ne,B.DEPTH_BUFFER_BIT,B.NEAREST);De.bindFramebuffer(B.READ_FRAMEBUFFER,null),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ee!==0||T.isRenderTargetTexture||L.has(T)){let Ge=L.get(T),et=L.get(Q);De.bindFramebuffer(B.READ_FRAMEBUFFER,Rt),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,ai);for(let _t=0;_t<Ue;_t++)Me?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.__webglTexture,ee,Xe+_t):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ge.__webglTexture,ee),$e?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,et.__webglTexture,be,Ut+_t):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,et.__webglTexture,be),ee!==0?B.blitFramebuffer(Ke,Ze,Ce,Ne,at,vt,Ce,Ne,B.COLOR_BUFFER_BIT,B.NEAREST):$e?B.copyTexSubImage3D(Ft,be,at,vt,Ut+_t,Ke,Ze,Ce,Ne):B.copyTexSubImage2D(Ft,be,at,vt,Ke,Ze,Ce,Ne);De.bindFramebuffer(B.READ_FRAMEBUFFER,null),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else $e?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ft,be,at,vt,Ut,Ce,Ne,Ue,ct,Ve,Lt.data):Q.isCompressedArrayTexture?B.compressedTexSubImage3D(Ft,be,at,vt,Ut,Ce,Ne,Ue,ct,Lt.data):B.texSubImage3D(Ft,be,at,vt,Ut,Ce,Ne,Ue,ct,Ve,Lt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,be,at,vt,Ce,Ne,ct,Ve,Lt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,be,at,vt,Lt.width,Lt.height,ct,Lt.data):B.texSubImage2D(B.TEXTURE_2D,be,at,vt,Ce,Ne,ct,Ve,Lt);B.pixelStorei(B.UNPACK_ROW_LENGTH,mt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,F),B.pixelStorei(B.UNPACK_SKIP_ROWS,X),B.pixelStorei(B.UNPACK_SKIP_IMAGES,pe),be===0&&Q.generateMipmaps&&B.generateMipmap(Ft),De.unbindTexture()},this.initRenderTarget=function(T){L.get(T).__webglFramebuffer===void 0&&ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ne.setTextureCube(T,0):T.isData3DTexture?ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ne.setTexture2DArray(T,0):ne.setTexture2D(T,0),De.unbindTexture()},this.resetState=function(){b=0,I=0,C=null,De.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var Nc={solids:[{world:"city",x:20,z:-235,w:.7,d:73,h:20,bottom:0},{world:"city",x:38,z:-268,w:.55,d:.55,h:6,bottom:0},{world:"city",x:38,z:-260,w:.55,d:.55,h:6,bottom:0},{world:"city",x:38,z:-252,w:.55,d:.55,h:6,bottom:0},{world:"city",x:38,z:-244,w:.55,d:.55,h:6,bottom:0},{world:"city",x:38,z:-236,w:.55,d:.55,h:6,bottom:0},{world:"city",x:38,z:-228,w:.55,d:.55,h:6,bottom:0},{world:"city",x:38,z:-220,w:.55,d:.55,h:6,bottom:0},{world:"city",x:38,z:-212,w:.55,d:.55,h:6,bottom:0},{world:"city",x:38,z:-204,w:.55,d:.55,h:6,bottom:0},{world:"city",x:25,z:-260,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:25,z:-255,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:25,z:-250,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:33,z:-260,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:33,z:-255,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:33,z:-250,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:25,z:-235,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:25,z:-230,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:25,z:-225,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:33,z:-235,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:33,z:-230,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:33,z:-225,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:25,z:-211,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:25,z:-206,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:25,z:-201,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:33,z:-211,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:33,z:-206,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:33,z:-201,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:100,z:-235,w:.7,d:73,h:20,bottom:0},{world:"city",x:82,z:-268,w:.55,d:.55,h:6,bottom:0},{world:"city",x:82,z:-260,w:.55,d:.55,h:6,bottom:0},{world:"city",x:82,z:-252,w:.55,d:.55,h:6,bottom:0},{world:"city",x:82,z:-244,w:.55,d:.55,h:6,bottom:0},{world:"city",x:82,z:-236,w:.55,d:.55,h:6,bottom:0},{world:"city",x:82,z:-228,w:.55,d:.55,h:6,bottom:0},{world:"city",x:82,z:-220,w:.55,d:.55,h:6,bottom:0},{world:"city",x:82,z:-212,w:.55,d:.55,h:6,bottom:0},{world:"city",x:82,z:-204,w:.55,d:.55,h:6,bottom:0},{world:"city",x:95,z:-260,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:95,z:-255,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:95,z:-250,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:87,z:-260,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:87,z:-255,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:87,z:-250,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:95,z:-235,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:95,z:-230,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:95,z:-225,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:87,z:-235,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:87,z:-230,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:87,z:-225,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:95,z:-211,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:95,z:-206,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:95,z:-201,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:87,z:-211,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:87,z:-206,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:87,z:-201,w:2.5,d:1.25,h:1,bottom:0},{world:"city",x:60,z:-279,w:80,d:.6,h:12,bottom:0},{world:"city",x:43,z:-272,w:2.2,d:2.2,h:1,bottom:0},{world:"city",x:53,z:-272,w:2.2,d:2.2,h:1,bottom:0},{world:"city",x:67,z:-272,w:2.2,d:2.2,h:1,bottom:0},{world:"city",x:77,z:-272,w:2.2,d:2.2,h:1,bottom:0},{world:"city",x:39,z:-195,w:.65,d:.65,h:6,bottom:0},{world:"city",x:81,z:-195,w:.65,d:.65,h:6,bottom:0},{world:"planet",x:-136,z:-105,w:.7,d:36,h:11.2,bottom:0},{world:"planet",x:-84,z:-105,w:.7,d:36,h:11.2,bottom:0},{world:"planet",x:-110,z:-123,w:53,d:.7,h:11.2,bottom:0},{world:"planet",x:-130,z:-101,w:4,d:2,h:3.5,bottom:0},{world:"planet",x:-120,z:-101,w:4,d:2,h:3.5,bottom:0},{world:"planet",x:-100,z:-101,w:4,d:2,h:3.5,bottom:0},{world:"planet",x:-90,z:-101,w:4,d:2,h:3.5,bottom:0},{world:"planet",x:-110,z:-108,w:8,d:4,h:12.2,bottom:0},{world:"planet",x:-59,z:118,w:5,d:7,h:6,bottom:0},{world:"planet",x:-11,z:118,w:5,d:7,h:6,bottom:0},{world:"planet",x:-139,z:67,w:5,d:24,h:1,bottom:0},{world:"planet",x:-133,z:69,w:5,d:24,h:1.25,bottom:0},{world:"planet",x:-127,z:71,w:5,d:24,h:1.5,bottom:0},{world:"planet",x:-121,z:73,w:5,d:24,h:1.75,bottom:0},{world:"machine",x:-144,z:28,w:1.5,d:1.5,h:16,bottom:0},{world:"machine",x:-144,z:40,w:1.5,d:1.5,h:16,bottom:0},{world:"machine",x:-144,z:52,w:1.5,d:1.5,h:16,bottom:0},{world:"machine",x:-112,z:28,w:1.5,d:1.5,h:16,bottom:0},{world:"machine",x:-112,z:40,w:1.5,d:1.5,h:16,bottom:0},{world:"machine",x:-112,z:52,w:1.5,d:1.5,h:16,bottom:0},{world:"machine",x:-128,z:26,w:30,d:.5,h:6,bottom:0},{world:"machine",x:-138,z:49,w:4,d:2,h:1.4,bottom:0},{world:"machine",x:-118,z:49,w:4,d:2,h:1.4,bottom:0},{world:"city",x:-39,z:-237,w:.3,d:.3,h:4,bottom:0},{world:"city",x:-5,z:-237,w:.3,d:.3,h:4,bottom:0}],floors:[{world:"city",x:60,z:-235,w:91,d:87,y:.09},{world:"city",x:294,z:-96,w:7,d:7,y:2.672652209345545},{world:"city",x:435,z:-245,w:7,d:7,y:24.391730804106945},{world:"city",x:614,z:-67,w:7,d:7,y:60.78140265620587},{world:"city",x:500,z:-100,w:7,d:7,y:182.25},{world:"planet",x:-110,z:-105,w:56,d:38,y:2.2}],labels:[{text:"ORBITAL SCIENCE / a = v2 / r",p:[21.3,2.65,-255],width:5.2,height:.52,group:"CITY_LANDMARKS",yaw:1.5707963267948966},{text:"DESIGN LAB / BUILD TOMORROW",p:[21.3,2.65,-230],width:5.2,height:.52,group:"CITY_LANDMARKS",yaw:1.5707963267948966},{text:"ASTROBIOLOGY / LUMEN",p:[21.3,2.65,-206],width:5.2,height:.52,group:"CITY_LANDMARKS",yaw:1.5707963267948966},{text:"ORBITAL SCIENCE / a = v2 / r",p:[98.7,2.65,-255],width:5.2,height:.52,group:"CITY_LANDMARKS",yaw:-1.5707963267948966},{text:"DESIGN LAB / BUILD TOMORROW",p:[98.7,2.65,-230],width:5.2,height:.52,group:"CITY_LANDMARKS",yaw:-1.5707963267948966},{text:"ASTROBIOLOGY / LUMEN",p:[98.7,2.65,-206],width:5.2,height:.52,group:"CITY_LANDMARKS",yaw:-1.5707963267948966},{text:"AURORA ACADEMY / SCIENCE & ART",p:[60,6.8,-190.4],width:32,height:1.1,group:"CITY_LANDMARKS",yaw:0},{text:"ROBOTICS LAB / OPEN CAMPUS",p:[60,4.4,-265.5],width:22,height:1.1,group:"CITY_LANDMARKS",yaw:0},{text:"CLASSROOMS / EAST & WEST",p:[60,4.1,-205],width:10,height:1,group:"CITY_LANDMARKS",yaw:0},{text:"ASTER TRAIL / SUMMIT 182 m",p:[294,4,-96],width:12,height:1.1,group:"CITY_LANDMARKS",yaw:0},{text:"ASTER SUMMIT / CITY OBSERVATORY",p:[500,187,-100],width:13,height:1.1,group:"CITY_LANDMARKS",yaw:0},{text:"LUMEN / DEEP SKY OBSERVATORY",p:[-110,8.2,-87],width:30,height:1.1,group:"LUMEN_LANDMARKS",yaw:0},{text:"THE SINGING GATE",p:[-54,2.4,141],width:6,height:.6,group:"LUMEN_LANDMARKS",yaw:0},{text:"EXOBOTANY / LIVING SPECIMENS",p:[-127,8,50],width:25,height:1.1,group:"LUMEN_LANDMARKS",yaw:0},{text:"NEXUS AEROWORKS / FLIGHT DECK",p:[-128,9,54],width:29,height:1.1,group:"MACHINE_LANDMARKS",yaw:0},{text:"F / PILOT THE ION SKIMMER",p:[-128,3,58],width:15,height:1.1,group:"MACHINE_LANDMARKS",yaw:0},{text:"AURORA / ATHLETICS & OPEN CAMPUS",p:[-22,3.2,-225],width:20,height:1.1,group:"CITY_LANDMARKS",yaw:0}],trail:[[285,.34412370415228416,-99.99999999999997],[285.97189851921485,.6264749451525159,-107.7917303516175],[287.2249772397833,.8839437013908872,-115.51278326591607],[288.75538251529133,.9553061236497848,-123.1530558137014],[290.558899328298,1.0114128788588403,-130.70263178115698],[292.63095976902935,1.4450248385443312,-138.15179453475605],[294.9666519697719,2.4149980745026416,-145.4910395166698],[297.5607294793167,3.582358594942361,-152.7110863546181],[300.4076210612394,4.436242074529071,-159.8028905707567],[303.50144089926687,4.886468247324625,-166.75765487486473],[306.8359991924748,5.385192496917911,-173.56684002778164],[310.4048131225751,6.35408357173631,-180.22217526174995],[314.2011181751043,7.575323405010377,-186.7156682450389],[318.2178797958975,8.32489481714667,-193.03961457896224],[322.4478053638394,8.156343789584177,-199.18660681615137],[326.88335646052064,7.429941772997723,-205.14954298970937],[331.516761417092,6.949775292833596,-210.92163464364683],[336.34002811830817,7.1121919665969076,-216.4964143557831],[341.34495704347825,7.530229290556162,-221.86774274509312],[346.52315452380117,7.535870376616771,-227.0298149562821],[351.86604619535376,6.975076023534309,-231.97716661517765],[357.36489062682233,6.4291115476001215,-236.7046792493476],[363.01079310092064,6.6600893025332715,-241.20758516916635],[368.79471952832654,7.884732792685072,-245.48147180537885],[374.7075104728837,9.587900922905007,-249.52228550003375],[380.7398952667663,10.994722097288196,-253.32633474848186],[386.88250619428766,11.70865643272247,-256.89029289096266],[393.125892723042,11.955485366567785,-260.21120025312075],[399.4605357611201,12.296501011790498,-263.2864657356174],[405.8768619192097,13.120161570970096,-266.11386785381575],[412.3652577565032,14.325255538920862,-268.69155522932874],[418.9160839894684,15.382004446563478,-271.01804653602204],[425.51968964271407,15.662097300897583,-273.09222990386155],[432.16642612137116,14.79137988278217,-274.9133617847798],[438.84666118464776,12.83645914552413,-276.4810652855144],[445.55079280046846,10.28033525336172,-277.7953279731364],[452.2692628613937,7.851390489093233,-278.8564991597402],[458.9925707423363,6.298518399355404,-279.6652866735075],[465.7112866809237,6.180153801464384,-280.2227531240825],[472.4160649617341,7.7054063397512955,-280.53031167090796],[479.0976568860216,10.656413425700482,-280.5897213038645],[485.74692350897067,14.422663193581991,-280.4030816462322],[492.35484812696404,18.164797072273338,-279.9728272906541],[498.9125484978171,21.08311166196551,-279.30172167941873],[505.4112887774282,22.70769413311679,-278.39285054099946],[511.8424911568049,23.08827190928524,-277.2496148953861],[518.1977471839645,22.778018882794353,-275.8757236413219],[524.4688287557677,22.58610534164384,-274.2751857391127],[530.6476987653166,23.188239917882115,-272.4523020032083],[536.7265213911469,24.77304468236861,-270.4116565192588],[542.6976720150582,26.908017739185155,-268.1581077008374],[548.553746756055,28.71486444950988,-265.69677900147383],[554.28757160852,29.289879513671362,-263.0330492980779],[559.8922111733964,28.171119581721687,-260.1725429622353],[565.3609769718416,25.617013576017335,-257.1211196362384],[570.6874353314898,22.547611913041667,-253.8848637310667],[575.8654148361674,20.167713203550594,-250.47007366385296],[580.8890133306124,19.451407152234587,-246.8832508526704],[585.7526044724694,20.734546069008093,-243.13108848673977],[590.4508438245523,23.60198666338131,-239.22046009039832],[594.978674481111,27.106237607816674,-235.1584078993784],[599.3313322225682,30.195533918331762,-230.95213106812753],[603.5043501939434,32.14265577034757,-226.6089737270517],[607.4935631029267,32.78686545763819,-222.13641290868654],[611.2951109343151,32.50766463725938,-217.54204636189422],[614.9054421782798,31.97891047139936,-212.8335802732463],[618.3213165706807,31.840963056389594,-208.01881691478877],[621.5398073443972,32.44234159945632,-203.10564223738817],[624.5583029913961,33.74721986315901,-198.10201342883556],[627.3745085359983,35.41756353633356,-193.01594645583066],[629.9864463205543,37.002814960156506,-187.85550360888487],[632.3924563054667,38.1362683340403,-182.62878106907445],[634.591195886238,38.65262350096243,-177.34389651543256],[636.581639230931,38.59125008623651,-172.00897679160482],[638.3630761421572,38.10840968814171,-166.63214565019646],[639.9351104483989,37.36287994315183,-161.2215115930171],[641.2976579301741,36.44597707952746,-155.785155825183],[642.4509437872287,35.396469117203814,-150.33112034075953],[643.3954996536094,34.28717442857724,-144.8673961573264],[644.1321601681293,33.31968162237984,-139.4019117165254],[644.6620591083738,32.84584929421661,-133.94252146729434],[644.986625097021,33.266609513635316,-128.4969946481247],[645.1075768898615,34.83141479230779,-123.07300428427462],[645.026918255486,37.438443950218975,-117.67811641545748],[644.7469324571913,40.566554020446155,-112.31977956907741],[644.2701763482012,43.422039279769606,-107.00531449362443],[643.5994740918364,45.26835028640973,-101.74190416635979],[642.7379105187811,45.785657003885376,-96.53658408891548],[641.6888241340848,45.25874724567484,-91.39623288391473],[640.4557997870103,44.46257269373552,-86.32756320518142],[639.042661017284,44.27882090483707,-81.33711297354907],[637.4534620917345,45.24099274230653,-76.43123694970967],[635.6924797457012,47.263573273217624,-71.61609865495754],[633.7642046439767,49.71569765072433,-66.8976626500812],[631.6733325763958,51.80100148564599,-62.28168718204619],[629.4247554035157,53.02360912814495,-57.77371720748159],[627.0235517681294,53.46950712908606,-53.37907780135352],[624.4749775886335,53.74475323307332,-49.102867958555635],[621.7844563505225,54.61574410056336,-44.94995479549884],[618.957569212504,56.565728131213035,-40.92496815811281],[616.0000449439251,59.51721452381861,-37.032295642007],[612.9177497103736,62.86086140334778,-33.27607802986216],[609.7166767244606,65.75369864434123,-29.660205150441115],[606.4029357789024,67.5108465900918,-26.188312162926294],[602.9827426791163,67.88689772230413,-22.863776269604756],[599.4624085926006,67.1251127796391,-19.68971385923281],[595.8483293324042,65.78376017381103,-16.668978082722518],[592.146974592004,64.45321535762626,-13.804156862110489],[588.3648771488796,63.50782344570499,-11.097571333075479],[584.5086220540378,62.99362564166425,-8.55127472059604],[580.5848358246571,62.67356733856458,-6.167051646652965],[576.6001756569301,62.18098261389822,-3.9464178682135156],[572.5613186760501,61.199303158343405,-1.8906204430611808],[568.474951240139,59.59500569311433,-.000638320374491741],[564.3477583147352,57.46611648194965,1.7228166476942448],[560.1864129342546,55.108085684562276,3.279298277835977],[555.997565766617,52.92587989947999,4.6686242158263696],[551.7878347969673,51.32973112860234,5.890873690847172],[547.5637951461559,50.645483143384,6.946384870152258],[543.3319690393331,51.05676217353914,7.835751820945717],[539.0988159397,52.582774266638765,8.559821086922867],[534.8707228621024,55.086724390348806,9.119687887500021],[530.6539948807998,58.306405949847985,9.51669194831183],[526.4548458453446,61.898773607578185,9.752412972098028],[522.2793893181055,65.49190714247462,9.828665759624784],[518.1336297465383,68.73889180918975,9.747494990790372],[514.0234538828648,71.36813479080713,9.511169676554388],[509.9546224633536,73.22394575088094,9.122177292797176],[505.9327621589159,74.29086341937541,8.583217607666057],[501.9633578082359,74.69622019525063,7.897196214392622],[498.0517449441352,74.6882908532078,7.067217781974222],[494.2031026233494,74.59178825627103,6.096579036498142],[490.42244656934923,74.7474536654173,4.988761486251832],[486.714622637286,75.44664977921033,3.747423904104167],[483.08430060957267,76.87387490921327,2.376394580961204],[479.5359683300366,79.06917167700206,.8796633643961229],[476.0739261839899,81.91851528747283,-.7386265031760075],[472.7022819309665,85.17430016034314,-2.4741867321603195],[469.42494589627256,88.50148071741538,-4.322592504438376],[466.2456265268777,91.53942597801644,-6.279291147980288],[463.1678263165668,93.96647802060639,-8.339610952196196],[460.1948381046356,95.55423627936926,-10.498770108666847],[457.3297417517946,96.20155424549012,-12.751885761766744],[454.57540119631074,95.94321955774525,-15.093983153595374],[451.93446189278296,94.93394368496203,-17.52000484756148],[449.40934863531163,93.41323116445757,-20.02482001491626],[447.0022637661938,91.65988162977968,-22.603233768508986],[444.7151857706285,89.94581137228606,-25.249996528046566],[442.5498682573024,88.497676676368,-27.959813401160076],[440.5078393240786,87.47202584118959,-30.727353564643067],[438.59040130739913,86.94623647636787,-33.54725963029979],[436.79863091338416,86.92414861827642,-36.41415697994797],[435.1333797279972,87.35273240460927,-39.322663054248856],[433.5952751030403,88.14469083556283,-42.267396580186805],[432.184721414136,89.20165555749848,-45.242986722204144],[430.9019016862703,90.43341385210778,-48.244082142186436],[429.74677958187857,91.77009457100299,-51.26535995372694],[428.71910174589186,93.1660759913337,-54.30153455633756],[427.81840050159667,94.59621177266527,-57.347366335544756],[427.0439968906132,96.04650756536157,-60.3976702150987],[426.39500404976314,97.50239507573811,-63.447324047832254],[425.8703309170733,98.93809674083195,-66.49127683204266],[425.46868625865784,100.31019973400582,-69.52455674061653],[425.1885830077275,101.55752048100098,-72.5422789504903],[425.02834290650003,102.60782079837456,-75.53965326043136],[424.98610144132607,103.39022981714783,-78.51199148552931],[425.0598130609047,103.85070228104878,-81.4547146172142],[425.24725666703887,103.96687395892047,-84.36335973806047],[425.5460413669772,103.7585345295435,-87.2335866810927],[425.9536124760026,103.29072090251748,-90.06118442378349],[426.4672577585652,102.66800211427307,-92.84207720741846],[427.0841138959096,102.02052644395646,-95.5723303730087],[427.8011731678258,101.4843428160737,-98.24815590543982],[428.6152903358501,101.17989727696131,-100.86591767807477],[429.5231897149592,101.19308129048089,-103.42213639056361],[430.52147242054815,101.56265094587673,-105.91349419315712],[431.60662377724236,102.27639790986416,-108.33683899138042],[432.77502087588334,103.27651384957217,-110.68918842548305],[434.02294026483867,104.47264374982308,-112.96773351965216],[435.34656576162064,105.75963644504093,-115.1698419965561],[436.74199637065436,107.03628767573935,-117.29306125336387],[438.20525429291973,108.22152469464082,-119.33512099597493],[439.73229301309556,109.26537126313676,-121.2939355287829],[441.3190054497637,110.15336510985232,-123.16760569789017],[442.96123215418527,110.90451917798137,-124.9544204862841],[444.6547695431371,111.56410124310497,-126.65285826007855],[446.39537815130126,112.19324098464595,-128.26158766552228],[448.1787908887212,112.85758763308134,-129.7794681770649],[450.00072128889286,113.6169933881148,-131.20555029736315],[451.85687173312806,114.51763509586313,-132.53907541069808],[453.7429416369269,115.5872908543791,-133.77947529185425],[455.65463558421493,116.83382578593262,-134.9263712730932],[457.58767139544466,118.24643003961648,-135.9795730724218],[459.53778811572573,119.79884830143175,-136.93907728692253],[461.5007539093392,121.45374294261117,-137.8050655554691],[463.47237384719915,123.16740123383016,-138.57790239569857],[465.4484975740593,124.89416974441878,-139.25813272064923],[467.42502684251525,126.59021385603184,-139.84647904100103],[469.3979229011279,128.2164067378474,-140.34383835937257],[471.36321372428813,129.7403176825816,-140.75127876363166],[473.31700107175703,131.13738038834146,-141.07003572666747],[475.2554673661531,132.3913785667582,-141.30150812055177],[477.17488237700536,133.4943998081036,-141.4472539534763],[479.07160970036756,134.44639387074835,-141.50898583830423],[480.94211302337277,135.25444335720434,-141.48856620200326],[482.78296216351487,135.93182507507868,-141.3880022456433],[484.59083887286397,136.49691703747567,-141.2094406650411],[486.3625423978596,136.97199251525845,-140.9551621425123],[488.09499478577493,137.3819387194834,-140.62757562055367],[489.78524592941193,137.7529410361364,-140.22921236862135],[491.43047834206567,138.11118052062568,-139.7627198544937],[493.0280116552834,138.48159873709287,-139.23085543200946],[494.5753068324477,138.88678685754272,-138.63647985725612],[496.0699700917259,139.34605328199598,-137.98255064554365],[497.5097565324475,139.87471534240746,-137.27211528174007],[498.892573459503,140.4836466194384,-136.50830429676267],[500.2164834008976,141.17909370649198,-135.69432422321762],[501.47970681413597,141.96275712025843,-134.83345044335243],[502.6806244776706,142.83211280552916,-133.92901994264002],[503.817779564197,143.78093535122764,-132.98442398244103],[504.8898793931471,144.79997309048767,-132.00310070529733],[505.8957968602937,145.87771944738935,-130.98852768649382],[506.83457154294393,147.0012242348271,-129.9442144455846],[507.70541047977497,148.1568924974301,-128.87369493161728],[508.5076886249268,149.33122588881903,-127.78051999580255],[509.24094897654214,150.51147121537088,-126.6682498653666],[509.9049023805078,151.68615140674848,-125.54044663229084],[510.4994270107187,152.84546469159864,-124.4006667705884],[511.0245675277477,153.9815473460208,-123.25245369568721],[511.480533918362,155.08860354004406,-122.09933037938805],[511.86770001888226,156.16291232598417,-120.94479203374198],[512.1866017259249,157.20272671370108,-119.79229887704452],[512.4379348986115,158.20808322271643,-118.64526899497528],[512.6225529568605,159.1805425010461,-117.50707130972117],[512.7414641809011,160.12288274469628,-116.38101866970962],[512.795828717663,161.03876786556418,-115.2703610723439],[512.7869553002055,161.93241169282996,-114.17827903188017],[512.7162976868344,162.8082579579944,-113.10787710431082],[512.5854508270451,163.670693402388,-112.06217758082477],[512.3961467618951,164.52380809311845,-111.04411436110273],[512.1502502668658,165.37121305177746,-110.05652701737233],[511.8497542457153,166.21592080017285,-109.10215505979949],[511.49677488425107,167.06028971160345,-108.18363241342279],[511.0935465733602,167.90602848999785,-107.30348211645412],[510.6424166110336,168.7542530625856,-106.46411124936738],[510.1458396934949,169.6055850038768,-105.66780610378008],[509.60637220590786,170.46027855694763,-104.91672759970126],[509.0266663234767,171.31836250166182,-104.21290695927316],[508.4094639340793,172.17978351548024,-103.5582416446744],[507.7575903938765,173.04453912522632,-102.9544915673808],[507.0739481276264,173.91279059969753,-102.40327557549514],[506.36151008569755,174.784948867591,-101.90606822536277],[505.623313070019,175.66172943822426,-101.46419684318383],[504.86245094142834,176.54417506504257,-101.07883888181826],[504.08206772108207,177.43364730347338,-100.75101957745584],[503.2853505987718,178.33179004036387,-100.48160991029266],[502.47552286114893,179.24046946298472,-100.2713248728168],[501.6558367529978,180.161695814754,-100.12072204876199],[500.82956628480923,181.09753272529468,-100.03020050523882],[500,182.05,-100]]};var Cs={city:[0,0],planet:[6400,-4600],machine:[13200,-9200]};function Sr(s,e){return s>=-310&&s<=310&&e>=-310&&e<=155||s>=280&&Math.hypot(s-500,e+100)<=222}function Ef(s,e){return s>-143&&s<-77&&e>-128&&e<-60||s>-151&&s<-105&&e>44&&e<98||s>-66&&s<-4&&e>108&&e<150}function Af(s,e){let t=s-500,n=e+100,i=Math.max(0,1-Math.hypot(t,n)/220);return i**1.4*182+i*(1-i)*(38*Math.sin(t*.043)*Math.cos(n*.037)+19*Math.sin(t*.093+n*.061)+9*Math.sin(n*.13-t*.075))}var Ni=[{id:"academy",world:"city",name:"\u5DE8\u5927\u30AD\u30E3\u30F3\u30D1\u30B9\u30FBAURORA\u5B66\u5712",x:60,z:-184,yaw:0,spot:[60,-204],text:"\u79D1\u5B66\u3068\u82B8\u8853\u306E\u5B66\u5712\u3002\u5DE6\u53F3\u306E\u6559\u5BA4\u3068\u5965\u306E\u30ED\u30DC\u30C3\u30C8\u7814\u7A76\u5BA4\u3078\u5165\u308C\u307E\u3059\u3002\u4E2D\u5EAD\u306E\u65E5\u6642\u8A08\u306F182m\u306E\u30A2\u30B9\u30BF\u30FC\u5C71\u3092\u6307\u3057\u3066\u3044\u307E\u3059\u3002"},{id:"classroom",world:"city",name:"\u5B66\u5712\u30FB\u6559\u5BA4\u3068\u30ED\u30DC\u30C3\u30C8\u7814\u7A76\u5BA4",x:40,z:-230,yaw:Math.PI/2,spot:[36,-230],text:"\u673A\u3001\u6905\u5B50\u3001\u6559\u6750\u7AEF\u672B\u3001\u7814\u7A76\u7528\u30A2\u30FC\u30E0\u3002\u30AD\u30E3\u30F3\u30D1\u30B9\u306E\u5730\u4E0A\u968E\u306F\u4E2D\u5EAD\u306B\u5411\u3051\u3066\u958B\u304B\u308C\u3066\u3044\u307E\u3059\u3002"},{id:"trail",world:"city",name:"\u30A2\u30B9\u30BF\u30FC\u5C71\u30FB\u767B\u5C71\u53E3",x:291,z:-96,yaw:-Math.PI/2,spot:[294,-96],text:"\u5C71\u9802182m\u307E\u3067\u66F2\u304C\u308A\u304F\u306D\u3063\u305F\u767B\u5C71\u9053\u3002\u9053\u6A19\u3068\u9014\u4E2D\u306E\u4F11\u61A9\u30C7\u30C3\u30AD\u3092\u305F\u3069\u308A\u3001\u8857\u3092\u5225\u306E\u9AD8\u3055\u304B\u3089\u773A\u3081\u3088\u3046\u3002"},{id:"summit",world:"city",name:"\u30A2\u30B9\u30BF\u30FC\u5C71\u30FB\u5C71\u9802\u5929\u6587\u53F0",x:500,z:-97,yaw:Math.PI/2,spot:[500,-100],text:"\u30A2\u30B9\u30BF\u30FC\u5C71\u306E\u5C71\u9802\u306B\u5230\u9054\uFF01 \u773C\u4E0B\u306B\u306F\u8857\u3068\u5B66\u5712\u3001\u7A7A\u306B\u306F\u9280\u6CB3\u9244\u9053\u3002\u5929\u4F53\u671B\u9060\u93E1\u3067\u65C5\u306E\u51FA\u767A\u70B9\u3092\u632F\u308A\u8FD4\u308C\u307E\u3059\u3002"},{id:"observatory",world:"planet",name:"LUMEN\u30FB\u6DF1\u5B87\u5B99\u5929\u6587\u53F0",x:-110,z:-65,yaw:0,spot:[-110,-91],text:"\u958B\u653E\u30C9\u30FC\u30E0\u306E\u5929\u6587\u53F0\u3002\u5DE8\u5927\u671B\u9060\u93E1\u3068\u5206\u5149\u89E3\u6790\u673A\u3067\u7A7A\u3092\u8ABF\u3079\u308B\u7814\u7A76\u57FA\u5730\u3067\u3059\u3002\u5965\u306ENEXUS-9\u3092\u76EE\u6307\u3059\u822A\u8DEF\u3082\u3053\u3053\u3067\u767A\u898B\u3055\u308C\u307E\u3057\u305F\u3002"},{id:"singing-gate",world:"planet",name:"LUMEN\u30FB\u6B4C\u3046\u7D50\u6676\u306E\u9580",x:-35,z:145,yaw:0,spot:[-35,133],text:"\u6B4C\u3046\u9580\u306E\u5171\u9CF4\u3092\u8A18\u9332\u300223\u306E\u77F3\u5F27\u306B\u8D70\u308B\u7D2B\u306E\u5149\u304C\u3001\u9280\u6CB3\u306E\u5468\u671F\u3068\u540C\u671F\u3057\u3066\u3044\u307E\u3059\u3002F\u3092\u62BC\u3059\u305F\u3073\u5171\u9CF4\u97F3\u304C\u5909\u308F\u308A\u307E\u3059\u3002"},{id:"biosphere",world:"planet",name:"LUMEN\u30FB\u7570\u661F\u690D\u7269\u306E\u6BB5\u3005\u7551",x:-127,z:96,yaw:0,spot:[-128,89],text:"\u7570\u661F\u306E\u862D\u3092\u80B2\u3066\u308B\u6BB5\u3005\u7551\u3002\u8449\u306E\u5F62\u3001\u767A\u5149\u3059\u308B\u82B1\u3001\u704C\u6F11\u914D\u7BA1\u3092\u89B3\u5BDF\u3067\u304D\u307E\u3059\u3002\u6301\u3061\u5E30\u3089\u305A\u3001\u89B3\u6E2C\u8A18\u9332\u3060\u3051\u3092\u6B8B\u3057\u307E\u3057\u3087\u3046\u3002"},{id:"aeroworks",world:"machine",name:"NEXUS-9\u30FB\u7A7A\u98DB\u3076\u8ECA\u306E\u5DE5\u5EE0",x:-128,z:59,yaw:0,spot:[-128,54],text:"\u30A4\u30AA\u30F3\u30B9\u30AD\u30DE\u30FC\u306E\u5DE5\u5EE0\u3002F\u3067\u64CD\u7E26\u5E2D\u3078\u3002WASD\u3067\u79FB\u52D5\u3001Space\u3067\u4E0A\u6607\u3001X\u3067\u4E0B\u964D\u3001F\u3067\u5DE5\u5EE0\u3078\u7740\u9678\u3002\u4E0A\u7A7A\u306B\u306F\u5B9A\u671F\u4FBF\u3082\u98DB\u3093\u3067\u3044\u307E\u3059\u3002"},{id:"deck",world:"machine",name:"NEXUS-9\u30FB\u6A5F\u68B0\u7532\u677F\u3092\u89B3\u5BDF",x:-104,z:-18,yaw:-Math.PI/2,spot:[-104,-22],text:"\u7532\u677F\u306F\u91D1\u5C5E\u30D1\u30CD\u30EB\u3001\u4FDD\u5B88\u30CF\u30C3\u30C1\u3001\u63DB\u6C17\u53E3\u3001\u30DC\u30EB\u30C8\u3001\u8A98\u5C0E\u706F\u306E\u591A\u5C64\u69CB\u9020\u3002\u6A5F\u68B0\u60D1\u661F\u305D\u306E\u3082\u306E\u304C\u3001\u4FEE\u7406\u3092\u7D9A\u3051\u308B\u5DE8\u5927\u306A\u5B87\u5B99\u8239\u3067\u3059\u3002"}];function Sh(s){return new Set(Array.isArray(s)?s.filter(e=>Ni.some(t=>t.id===e)):[])}function Rf(s,e){let t=s*(.065+e*.005)+e*Math.PI*2/6,n=120+e%3*20;return{x:Math.cos(t)*n,z:Math.sin(t)*n,y:29+e%3*16+Math.sin(t*2)*3,yaw:Math.atan2(-Math.sin(t),Math.cos(t))}}function Cf(s,e,t,n,i,r){let o=Math.max(0,Math.min(.25,r)),a=Math.hypot(t,n)||1,l=s.x+(n*Math.cos(e)-t*Math.sin(e))*o*20/a,c=s.z+(-t*Math.cos(e)-n*Math.sin(e))*o*20/a,u=Math.hypot(l-13200,c+9200);return u>185&&(l=13200+(l-13200)*185/u,c=-9200+(c+9200)*185/u),{x:l,z:c,y:Math.max(26,Math.min(115,s.y+i*o*12))}}function If(s,e,t,n,i=0){let[r,o]=Cs[e];return t-=r,n-=o,s.solids.some(a=>a.world===e&&i<a.h&&i+1.6>a.bottom&&Math.abs(t-a.x)<a.w/2+.28&&Math.abs(n-a.z)<a.d/2+.28)}function Pf(s,e,t,n,i,r=0){let[o,a]=Cs[e];t-=o,n-=a;let l=i;e==="city"&&(l=Math.max(l,Af(t,n))),e==="machine"&&(l=Math.max(l,.16));for(let c of s.floors)c.world===e&&Math.abs(t-c.x)<c.w/2&&Math.abs(n-c.z)<c.d/2&&(l=Math.max(l,c.y));for(let c of s.solids)c.world===e&&c.h<=2.5&&r>=c.h-.08&&Math.abs(t-c.x)<c.w/2+.25&&Math.abs(n-c.z)<c.d/2+.25&&(l=Math.max(l,c.h));return e==="planet"&&Math.abs(t+110)<6&&n>=-86&&n<=-65&&(l=Math.max(l,2.2*(1-(n+86)/21))),l}function Df(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new pt,c=0;for(let u=0;u<s.length;++u){let h=s[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Lf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let g=Lf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Lf(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Wt(o,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function wh(s,e){if(e===$l)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===gr||e===Ro){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===gr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Nf(s,e=48){let t=new Uint16Array(s.buffer,s.byteOffset,s.length*2),n=new Map,i=new Uint32Array(s.length/8),r=new Float32Array(s.length),o=0;for(let d=0;d<i.length;d++){let f=String.fromCharCode(...t.subarray(d*16,d*16+16)),g=n.get(f);g===void 0&&(g=o++,n.set(f,g),r.set(s.subarray(d*8,d*8+8),g*8)),i[d]=g}let a=r.slice(0,o*8),l=new Map;for(let d=0;d<s.length/8;d+=3){let f=(s[d*8]+s[(d+1)*8]+s[(d+2)*8])/3,g=(s[d*8+2]+s[(d+1)*8+2]+s[(d+2)*8+2])/3,x=Math.floor(f/e)+","+Math.floor(g/e);l.has(x)||l.set(x,[]),l.get(x).push(i[d],i[d+1],i[d+2])}let c=new jn(a,8),u=[],h=new P;for(let d of l.values()){let f=new pt;f.setAttribute("position",new gn(c,3,0)),f.setAttribute("normal",new gn(c,3,3)),f.setAttribute("uv",new gn(c,2,6)),f.setIndex(d);let g=new $t;for(let x of d)g.expandByPoint(h.set(a[x*8],a[x*8+1],a[x*8+2]));f.boundingBox=g,f.boundingSphere=g.getBoundingSphere(new dn),u.push(f)}return u}function Is(s,{exclude:e=[],cell:t=64}={}){s.updateWorldMatrix(!0,!0);let n=s.matrixWorld.clone().invert(),i=new Map,r=new Set(e),o=[],a=c=>{for(let u=c;u&&u!==s;u=u.parent)if(r.has(u)||u.name.startsWith("ANIM_"))return!0;return!1};s.traverse(c=>{if(!c.isMesh||c.isSkinnedMesh||c.isInstancedMesh||a(c)||!c.visible||Array.isArray(c.material)||c.material.transparent||c.morphTargetInfluences||c.children.length)return;let u=c.geometry.attributes;if(!u.position||!u.normal)return;let h=n.clone().multiply(c.matrixWorld),d=new P().setFromMatrixPosition(h),f=Object.keys(u).sort().map(m=>m+":"+u[m].itemSize).join(","),g=[c.material.uuid,c.castShadow,c.receiveShadow,f,Math.floor(d.x/t),Math.floor(d.z/t)].join("/"),x=i.get(g);x||(x={items:[],material:c.material,cast:c.castShadow,receive:c.receiveShadow},i.set(g,x)),x.items.push({o:c,matrix:h})});let l=0;for(let c of i.values()){if(c.items.length<2)continue;let u=c.items.map(({o:f,matrix:g})=>{let x=f.geometry.index?f.geometry.toNonIndexed():f.geometry.clone();return x.applyMatrix4(g),x}),h=Df(u,!1);for(let f of u)f.dispose();if(!h)continue;h.computeBoundingSphere();let d=new tt(h,c.material);d.name="Static / spatial batch",d.castShadow=c.cast,d.receiveShadow=c.receive,s.add(d);for(let{o:f}of c.items)f.removeFromParent(),l++;o.push(d)}return{removed:l,batches:o.length}}function Uf(s,e=16){let t=[];s.traverse(h=>{h.isPointLight&&(t.push(h),h.visible=!1)});let n=[],i=new Xi,r=new je,o=new dn,a=new P,l=h=>{for(;n.length<h;){let d=new Vt(16777215,0,1,2);d.userData.pooledLight=!0,s.add(d),n.push(d)}};l(e);let c=0;function u(h){h.updateMatrixWorld(),i.setFromProjectionMatrix(r.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse));let d=[];for(let f of t){if(f.intensity<=0)continue;let g=!1;for(let x=f.parent;x;x=x.parent)if(!x.visible){g=!0;break}g||(f.getWorldPosition(a),o.center.copy(a),o.radius=f.distance,(f.distance===0||i.intersectsSphere(o))&&d.push({source:f,position:a.clone()}))}d.length>n.length&&l(Math.ceil(d.length/8)*8),n.forEach((f,g)=>{let x=d[g];f.intensity=x?x.source.intensity:0,x&&(f.position.copy(x.position),f.color.copy(x.source.color),f.distance=x.source.distance,f.decay=x.source.decay)}),c=d.length}return{update:u,get active(){return c},get capacity(){return n.length},sources:t}}function Ff(s,{exclude:e=[]}={}){let t={city:new P(0,0,-70),planet:new P(6400,0,-4600),machine:new P(13200,0,-9200)},n=[],i=new Set(e);s.updateMatrixWorld(!0);function r(l){let c=[...l.children];for(let u of c){if(i.has(u)||u.isCamera||u.userData.pooledLight||u.isDirectionalLight||u.isHemisphereLight)continue;let h=new $t().setFromObject(u),d=new P,f=new P;if(u.isPointLight)u.getWorldPosition(d),f.set(0,0,0);else{if(h.isEmpty())continue;h.getCenter(d),h.getSize(f)}if(f.length()>1800){u.children.length&&r(u);continue}let g=Object.keys(t).find(m=>Math.hypot(d.x-t[m].x,d.z-t[m].z)<850&&Math.abs(d.y)<600);if(!g){u.children.length&&r(u);continue}let x=new qe;x.name="Surface visibility / "+g,l.add(x),x.add(u),n.push({wrapper:x,world:g})}}r(s);let o=[];function a(l){o=Object.keys(t).filter(u=>Math.hypot(l.position.x-t[u].x,l.position.z-t[u].z)<1800);let c=new Set(o);for(let{wrapper:u,world:h}of n)u.visible=c.has(h)}return{update:a,get active(){return o}}}function Of(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createImageData(128,128),i=8042;for(let a=0;a<16384;a++){i=Math.imul(i,1664525)+1013904223>>>0;let l=170+(i>>>24)%66;n.data.set([l,l,l,255],a*4)}t.putImageData(n,0,0);let r=new en(e);r.wrapS=r.wrapT=hn,r.anisotropy=4,r.colorSpace=ri;let o=new Set;return s.traverse(a=>{if(a.isMesh)for(let l of Array.isArray(a.material)?a.material:[a.material])o.has(l)||!l.isMeshStandardMaterial||l.emissiveIntensity>1||l.roughness<.2||(o.add(l),l.onBeforeCompile=c=>{c.uniforms.surfaceGrain={value:r},c.uniforms.surfaceScale={value:l.name.includes("granite")?.85:2},c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 surfacePosition; varying vec3 surfaceNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
surfacePosition=(modelMatrix*vec4(transformed,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D surfaceGrain;uniform float surfaceScale;varying vec3 surfacePosition;varying vec3 surfaceNormal;`).replace("#include <color_fragment>",`#include <color_fragment>
vec3 axis=abs(surfaceNormal);vec2 detailUV=axis.y>axis.x&&axis.y>axis.z?surfacePosition.xz:axis.x>axis.z?surfacePosition.zy:surfacePosition.xy;
float grain=texture2D(surfaceGrain,detailUV*surfaceScale).r;
diffuseColor.rgb*=.84+.20*grain;
`)},l.customProgramCacheKey=()=>"aurora-surface-grain-v8",l.needsUpdate=!0)}),r}async function Bf(s,e,t){let n=await e(t),i=n.scene;i.name="Blender / three worlds collection",s.add(i),i.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),Of(i);let r={city:i.getObjectByName("CITY_LANDMARKS"),planet:i.getObjectByName("LUMEN_LANDMARKS"),machine:i.getObjectByName("MACHINE_LANDMARKS")},o=i.getObjectByName("ANIM_HOVER_TEMPLATE"),a=Array.from({length:6},(p,S)=>{let y=o.clone(!0);return y.name="ANIM_SKY_TRAFFIC_"+S,o.parent.add(y),y.scale.setScalar(.83+S*.055),y.traverse(_=>{_.isMesh&&_.material.name==="Porcelain concrete"&&(_.material=_.material.clone(),_.material.color.multiply(new ze([15066590,10337223,12820861,10599088,10987711,11647421][S])))}),y});for(let p of Nc.labels){let S=i.getObjectByName(p.group),y=document.createElement("canvas");y.width=1024,y.height=Math.max(64,Math.round(1024*p.height/p.width));let _=y.getContext("2d");_.fillStyle="#102630",_.fillRect(0,0,1024,y.height),_.fillStyle="#ccece4",_.font="600 "+Math.round(y.height*.54)+"px sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText(p.text,512,y.height/2,990);let A=new en(y);A.colorSpace=yt;let b=new Et({map:A,side:zt}),I=new tt(new Ht(p.width,p.height),b);I.position.fromArray(p.p),I.rotation.y=p.yaw||0,I.position.x+=Math.sin(I.rotation.y)*.047,I.position.z+=Math.cos(I.rotation.y)*.047,S.add(I)}let l=Is(i,{cell:48}),c=!1,u=(...p)=>If(Nc,...p),h=(...p)=>Pf(Nc,...p);function d(p,S){let[y,_]=Cs[p];return Ni.find(A=>A.world===p&&Math.hypot(S.x-y-A.spot[0],S.z-_-A.spot[1])<5.5)}function f(p,S,y){c=y,a.forEach((_,A)=>{let b=Rf(p,A);_.position.set(b.x,b.y,b.z),_.rotation.y=b.yaw}),y?(o.position.set(S.position.x-13200,S.position.y-2.2,S.position.z+9200),o.quaternion.copy(S.quaternion),o.rotation.x=0,o.rotation.z=0):(o.position.set(-128,2+Math.sin(p*1.5)*.12,40),o.rotation.set(0,0,0))}let g=null,x=0;function m(){try{g||=new(window.AudioContext||window.webkitAudioContext),g.resume();let p=g.currentTime,S=[1,1.125,1.25,1.5][x++%4];[174.61,261.63,349.23].forEach((y,_)=>{let A=g.createOscillator(),b=g.createGain();A.type="sine",A.frequency.value=y*S,b.gain.setValueAtTime(0,p),b.gain.linearRampToValueAtTime(.055,p+.15+_*.05),b.gain.exponentialRampToValueAtTime(.001,p+2),A.connect(b).connect(g.destination),A.start(p),A.stop(p+2.1)})}catch{}}return{root:i,groups:r,skimmer:o,traffic:a,batching:l,blocked:u,floorHeight:h,nearby:d,update:f,resonate:m}}var Uc=class extends ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ih(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Wh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Pi.extractUrlBase(e);o=Pi.resolveURL(c,this.path)}else o=Pi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new gs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Gf){try{o[ut.KHR_BINARY_GLTF]=new Xh(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new jh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ut.KHR_MATERIALS_UNLIT:o[h]=new Rh;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[h]=new qh(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[h]=new Yh;break;case ut.KHR_MESH_QUANTIZATION:o[h]=new Kh;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function f_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ah=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],jt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new vs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vt(u),c.distance=h;break;case"spot":c=new yo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),gi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Rh=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Et}extendParams(e,t,n){let i=[];e.color=new ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(i)}},Ch=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ih=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(a,a)}return Promise.all(r)}},Ph=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Lh=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Dh=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Nh=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Uh=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}},Fh=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Oh=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(r)}},Bh=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},zh=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},kh=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Hh=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Vh=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Gh=class{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Wh=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let x=new je,m=new P,p=new an,S=new P(1,1,1),y=new Xt(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&S.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(m,p,S));for(let _ in l)if(_==="_COLOR_0"){let A=l[_];y.instanceColor=new Wi(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);gt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Gf="glTF",Io=12,zf={JSON:1313821514,BIN:5130562},Xh=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Io),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Io,r=new DataView(e,Io),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===zf.JSON){let c=new Uint8Array(e,Io+o,a);this.content=n.decode(c)}else if(l===zf.BIN){let c=Io+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},qh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Zh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Zh[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=wr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},a,c,jt,d)})})}},Yh=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Kh=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},Fc=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,S=1-m,y=p-d+h;for(let _=0;_!==a;_++){let A=o[x+_+a],b=o[x+_+l]*u,I=o[g+_+a],C=o[g+_]*u;r[_]=S*A+y*b+m*I+p*C}return r}},p_=new an,$h=class extends Fc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return p_.fromArray(r).normalize().toArray(r),r}},Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kf={9728:un,9729:Gt,9984:qa,9985:dr,9986:ws,9987:Vn},Hf={33071:Bn,33648:nr,10497:hn},bh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},m_={CUBICSPLINE:void 0,LINEAR:hs,STEP:ls},Th={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function g_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new We({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Sn})),s.DefaultMaterial}function Ps(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function x_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function __(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function y_(s){let e,t=s.extensions&&s.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Eh(t.attributes):e=s.indices+":"+Eh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Eh(s.targets[n]);return e}function Eh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Jh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function v_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var M_=new je,jh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new f_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new xs(this.options.manager):this.textureLoader=new vo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ps(r,a,i),gi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Pi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=bh[i.type],a=wr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Wt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=bh[i.type],c=wr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(S);y||(x=new c(a,p*f,i.count*f/u),y=new jn(x,f/u),t.cache.add(S,y)),m=new gn(y,l,d%f/u,g)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),m=new Wt(x,l,g);if(i.sparse!==void 0){let p=bh.SCALAR,S=wr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,A=new S(o[1],y,i.sparse.count*p),b=new c(o[2],_,i.sparse.count*l);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,C=A.length;I<C;I++){let M=A[I];if(m.setX(M,b[I*l]),l>=2&&m.setY(M,b[I*l+1]),l>=3&&m.setZ(M,b[I*l+2]),l>=4&&m.setW(M,b[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=kf[d.magFilter]||Gt,u.minFilter=kf[d.minFilter]||Vn,u.wrapS=Hf[d.wrapS]||hn,u.wrapT=Hf[d.wrapT]||hn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==un&&u.minFilter!==Gt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Qt(x);m.needsUpdate=!0,d(m)}),t.load(Pi.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),gi(h,o),h.userData.mimeType=o.mimeType||v_(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new kn,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new qi,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return We}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let h=i[ut.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],jt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,yt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=zt);let u=r.alphaMode||Th.OPAQUE;if(u===Th.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Th.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Et&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Et&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Et){let h=r.emissiveFactor;a.emissive=new ze().setRGB(h[0],h[1],h[2],jt)}return r.emissiveTexture!==void 0&&o!==Et&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),gi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ps(i,h,r),h})}createUniqueName(e){let t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Vf(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=y_(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Vf(new pt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?g_(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=o[f],p,S=c[f];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new io(x,S):new tt(x,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Gn.TRIANGLE_STRIP?p.geometry=wh(p.geometry,Ro):m.mode===Gn.TRIANGLE_FAN&&(p.geometry=wh(p.geometry,gr));else if(m.mode===Gn.LINES)p=new ro(x,S);else if(m.mode===Gn.LINE_STRIP)p=new Ei(x,S);else if(m.mode===Gn.LINE_LOOP)p=new oo(x,S);else if(m.mode===Gn.POINTS)p=new Qn(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&__(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),gi(p,r),m.extensions&&Ps(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ps(i,h[0],r),h[0];let d=new qe;r.extensions&&Ps(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(eh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ys(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new so(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let y=0,_=d.length;y<_;y++){let A=d[y],b=f[y],I=g[y],C=x[y],M=m[y];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let w=n._createAnimationTracks(A,b,I,C,M);if(w)for(let R=0;R<w.length;R++)p.push(w[R])}let S=new Ki(r,void 0,p);return gi(S,i),S})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,M_)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new lr:c.length>1?u=new qe:c.length===1?u=c[0]:u=new gt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),gi(u,r),r.extensions&&Ps(n,u,r),r.matrix!==void 0){let h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new qe;n.name&&(r.name=i.createUniqueName(n.name)),gi(r,n),n.extensions&&Ps(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof wn||d instanceof Qt)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];Zi[r.path]===Zi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Zi[r.path]){case Zi.weights:c=di;break;case Zi.rotation:c=ei;break;case Zi.translation:case Zi.scale:c=ti;break;default:switch(n.itemSize){case 1:c=di;break;case 2:case 3:default:c=ti;break}break}let u=i.interpolation!==void 0?m_[i.interpolation]:hs,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Zi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Jh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ei?$h:Fc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function S_(s,e,t){let n=e.attributes,i=new $t;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let u=Jh(wr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Jh(wr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new dn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Vf(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Zh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ft.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),gi(s,e),S_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?x_(s,e.targets,t):s})}var Oc=class extends go{constructor(e){super(e),this.type=si}parse(e){let o=function(C,M){switch(C){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(M||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(M||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(M||""))}},h=function(C,M,w){M=M||1024;let G=C.pos,V=-1,q=0,D="",Z=String.fromCharCode.apply(null,new Uint16Array(C.subarray(G,G+128)));for(;0>(V=Z.indexOf(`
`))&&q<M&&G<C.byteLength;)D+=Z,q+=Z.length,G+=128,Z+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(G,G+128)));return-1<V?(w!==!1&&(C.pos+=q+V+1),D+Z.slice(0,V)):!1},d=function(C){let M=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,G=/^\s*FORMAT=(\S+)\s*$/,V=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,q={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},D,Z;for((C.pos>=C.byteLength||!(D=h(C)))&&o(1,"no header found"),(Z=D.match(M))||o(3,"bad initial token"),q.valid|=1,q.programtype=Z[1],q.string+=D+`
`;D=h(C),D!==!1;){if(q.string+=D+`
`,D.charAt(0)==="#"){q.comments+=D+`
`;continue}if((Z=D.match(w))&&(q.gamma=parseFloat(Z[1])),(Z=D.match(R))&&(q.exposure=parseFloat(Z[1])),(Z=D.match(G))&&(q.valid|=2,q.format=Z[1]),(Z=D.match(V))&&(q.valid|=4,q.height=parseInt(Z[1],10),q.width=parseInt(Z[2],10)),q.valid&2&&q.valid&4)break}return q.valid&2||o(3,"missing format specifier"),q.valid&4||o(3,"missing image size specifier"),q},f=function(C,M,w){let R=M;if(R<8||R>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);R!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");let G=new Uint8Array(4*M*w);G.length||o(4,"unable to allocate buffer space");let V=0,q=0,D=4*R,Z=new Uint8Array(4),re=new Uint8Array(D),j=w;for(;j>0&&q<C.byteLength;){q+4>C.byteLength&&o(1),Z[0]=C[q++],Z[1]=C[q++],Z[2]=C[q++],Z[3]=C[q++],(Z[0]!=2||Z[1]!=2||(Z[2]<<8|Z[3])!=R)&&o(3,"bad rgbe scanline format");let U=0,te;for(;U<D&&q<C.byteLength;){te=C[q++];let he=te>128;if(he&&(te-=128),(te===0||U+te>D)&&o(3,"bad scanline data"),he){let N=C[q++];for(let W=0;W<te;W++)re[U++]=N}else re.set(C.subarray(q,q+te),U),U+=te,q+=te}let $=R;for(let he=0;he<$;he++){let N=0;G[V]=re[he+N],N+=R,G[V+1]=re[he+N],N+=R,G[V+2]=re[he+N],N+=R,G[V+3]=re[he+N],V+=4}j--}return G},g=function(C,M,w,R){let G=C[M+3],V=Math.pow(2,G-128)/255;w[R+0]=C[M+0]*V,w[R+1]=C[M+1]*V,w[R+2]=C[M+2]*V,w[R+3]=1},x=function(C,M,w,R){let G=C[M+3],V=Math.pow(2,G-128)/255;w[R+0]=Gi.toHalfFloat(Math.min(C[M+0]*V,65504)),w[R+1]=Gi.toHalfFloat(Math.min(C[M+1]*V,65504)),w[R+2]=Gi.toHalfFloat(Math.min(C[M+2]*V,65504)),w[R+3]=Gi.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=d(m),S=p.width,y=p.height,_=f(m.subarray(m.pos),S,y),A,b,I;switch(this.type){case xn:I=_.length/4;let C=new Float32Array(I*4);for(let w=0;w<I;w++)g(_,w*4,C,w*4);A=C,b=xn;break;case si:I=_.length/4;let M=new Uint16Array(I*4);for(let w=0;w<I;w++)x(_,w*4,M,w*4);A=M,b=si;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:S,height:y,data:A,header:p.string,gamma:p.gamma,exposure:p.exposure,type:b}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case xn:case si:o.colorSpace=jt,o.minFilter=Gt,o.magFilter=Gt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}};var Bc=class extends Oc{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}};function br(s){let e=new Map,t=new Map,n=s.clone();return Wf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Wf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Wf(s.children[n],e.children[n],t)}var Qh=-145,eu=65;function tu(s){let e=s%28;return e<18?"green":e<21?"amber":"red"}function Xf(){return[-6,6].flatMap((s,e)=>[-43,4,54,106].map((t,n)=>({x:s,z:-t,dir:e===0?-1:1,speed:0,cruise:6.8+n*.35,wheel:0,id:e*4+n})))}function qf(s,e,t,n,i){let r=tu(t)!=="green";for(let o of s){let a=o.cruise,l=1/0,c=(d,f=.4)=>{d<28&&(a=Math.min(a,Math.sqrt(5.4*Math.max(0,d-f))),l=Math.min(l,Math.max(0,d-f)))};if(r)for(let d of n){let f=(-d-o.z)*o.dir-11.2;f>=-.01&&c(f)}for(let d of s){if(d===o||d.x!==o.x)continue;let f=((d.z-o.z)*o.dir+210)%210;c(f-5.6,1.2)}if(Math.abs(o.x-i.x)<1.5){let d=(i.z-o.z)*o.dir;d>0&&d<25&&c(d-3.3,.3)}let u=a<o.speed?4.5:2.1;o.speed+=Math.sign(a-o.speed)*Math.min(Math.abs(a-o.speed),u*e);let h=Math.min(o.speed*e,l);h<o.speed*e&&(o.speed=0),o.z+=o.dir*h,o.wheel+=h/.37,o.z<Qh&&(o.z=eu+(o.z-Qh)),o.z>eu&&(o.z=Qh+(o.z-eu))}}function Yf(s,e,t){return s.find(n=>Math.abs(e-n.x)<n.w/2-.12&&Math.abs(t+n.y)<n.d/2-.12)}function Kf(s,e,t){for(let n of s){let i=Math.hypot(e.x-n.front,e.z+n.doorY)<4.8;n.open+=(Number(i)-n.open)*Math.min(1,t*4)}}function $f(s,e,t,n,i){return!Sr(s,e)||t.some(o=>Math.abs(s-o.x)<o.w/2+.28&&Math.abs(e+o.y)<o.d/2+.28)||n.some(o=>o.open<.8&&Math.abs(s-o.front)<.23+.28&&Math.abs(e+o.doorY)<1.7+.28)||i.some(o=>Math.abs(s-o.x)<1.2&&Math.abs(e-o.z)<2.65)?!0:[-17,17].some(o=>Math.hypot(s-o,e+58)<.93)}var At={name:"LUMEN",x:6400,z:-4600,radius:205},Hc={x:-91,y:.32,z:0,exit:[-82,1.98,5]},nu={x:6280,y:.32,z:-4600,exit:[6289,1.98,-4595]},Pt={name:"NEXUS-9",x:13200,z:-9200,radius:210},iu={x:13060,y:.32,z:-9200,exit:[13069,1.98,-9195]},Tr={city:"AURORA",planet:"LUMEN",machine:"NEXUS-9"},Vc=s=>s==="machine"?iu:s==="planet"?nu:Hc,kc=s=>s==="planet"?["city","machine"]:["planet"],Er=s=>s.route==="outer"?38:w_,Zf=[[6280,.32,-4600],[6280,.32,-4645],[6360,60,-4770],[6600,450,-5050],[7400,1400,-5800],[8800,2400,-6700],[10400,2700,-7600],[11800,1400,-8400],[12700,220,-8960],[13060,20,-9080],[13060,.32,-9150],[13060,.32,-9200]],w_=76,Jf=[[-91,.32,0],[-91,.32,-38],[-91,19,-105],[-30,145,-220],[350,760,-800],[1500,2100,-1800],[3400,2800,-2800],[5200,1600,-3850],[6080,240,-4370],[6280,25,-4490],[6280,.32,-4550],[6280,.32,-4600]],zc=[[0,0],[.12,1/11],[.23,2/11],[.34,3/11],[.49,5/11],[.64,7/11],[.77,8/11],[.87,9/11],[.95,10/11],[1,1]];function b_(s){s=Math.max(0,Math.min(1,s));for(let e=1;e<zc.length;e++)if(s<=zc[e][0]){let[t,n]=zc[e-1],[i,r]=zc[e];return n+(r-n)*(s-t)/(i-t)}return 1}function su(){return{mode:"walking",world:"city",origin:"city",destination:"planet",route:"inner",time:0,progress:0}}function jf(s,e=kc(s.world)[0]){return s.mode!=="walking"||!kc(s.world).includes(e)?!1:(s.origin=s.world,s.destination=e,s.route=s.world==="machine"||e==="machine"?"outer":"inner",s.mode="riding",s.time=0,s.progress=Po(s)?1:0,!0)}function Po(s){return s.route==="outer"?s.origin==="machine":s.origin==="planet"}function ru(s,e){if(s.mode!=="riding")return;let t=Er(s);s.time=Math.min(t,s.time+Math.max(0,e));let n=b_(s.time/t);s.progress=Po(s)?1-n:n,s.time>=t&&(s.mode="arrived",s.progress=Po(s)?0:1)}function Qf(s){return s.mode!=="arrived"?!1:(s.world=s.destination,s.mode="walking",!0)}function Gc(s,e,t){let n=Vc(s.world);return Math.hypot(e-(n.x+9),t-(n.z+5))<15}function ep(s){if(s.mode==="arrived")return`${Tr[s.destination]}\u99C5\u306B\u5230\u7740`;let e=s.time/Er(s);return e<.12?s.origin==="city"?"\u90FD\u5E02\u306E\u99C5\u3092\u51FA\u767A":"\u60D1\u661F\u306E\u99C5\u3092\u51FA\u767A":e<.34?"\u4E0A\u6607\u30FB\u5B87\u5B99\u306E\u8ECC\u9053\u3078":e<.67?"\u661F\u9593\u822A\u884C":e<.9?"\u5230\u7740\u5730\u3078\u964D\u4E0B":"\u99C5\u306B\u9032\u5165"}function Wn(s,e){let t=Math.max(0,Math.min(1,(s+92)/42)),n=Math.min(1,Math.hypot(Math.max(0,Math.abs(s+46)-11),Math.max(0,Math.abs(e+3)-9))/8);return t*n*(1.4*Math.sin(s*.045)*Math.sin(e*.036)+.7*Math.sin(e*.071+s*.023))||0}function tp(s,e){return Math.hypot(s,e)<At.radius-8}function Lo(s,e,t,n){return Math.atan2(s,e)-Math.atan2(t,n)}function ou(s,e){s.updateMatrixWorld(!0);let t=0,n=0,i=0;for(let o of["Left","Right"]){let a,l;if(s.traverse(c=>{c.name.endsWith(o+"Foot")&&(a=c),c.name.endsWith(o+"ToeBase")&&(l=c)}),a&&l){let c=a.getWorldPosition(new e),u=l.getWorldPosition(new e);t+=u.x-c.x,n+=u.z-c.z,i++}}if(!i||Math.hypot(t,n)<1e-5)throw Error("\u4EBA\u7269\u30E2\u30C7\u30EB\u306E\u6B63\u9762\u3092\u5224\u5B9A\u3067\u304D\u307E\u305B\u3093");let r=Math.hypot(t,n);return{x:t/r,z:n/r}}function np(s){let e=new qe;e.name="Galaxy Railway / Lumen",s.add(e);let t=new We({color:1583929,metalness:.75,roughness:.28}),n=new We({color:10993345,metalness:.5,roughness:.38}),i=new We({color:3621195,roughness:.95}),r=new We({color:12887152,metalness:.75,roughness:.3}),o=new We({color:3980988,emissive:556421,emissiveIntensity:.85,roughness:.3}),a=new We({color:16770732,emissive:16765316,emissiveIntensity:2}),l=new We({color:8311775,metalness:.05,roughness:.13,transparent:!0,opacity:.12,depthWrite:!1,side:zt}),c=[],u=[];function h(z,H,J,se=e){let xe=new tt(z,H);return xe.position.set(...J),xe.castShadow=!0,xe.receiveShadow=!0,se.add(xe),xe}let d=(z,H,J,se)=>h(new Nt(...z),J,H,se);function f(z,H,J,se=e,xe="#b6fff2"){let Te=document.createElement("canvas");Te.width=1024,Te.height=192;let le=Te.getContext("2d");le.fillStyle="#0a1625",le.fillRect(0,0,1024,192),le.strokeStyle="#5a9ca6",le.lineWidth=5,le.strokeRect(6,6,1012,180),le.fillStyle=xe,le.font="600 64px sans-serif",le.textAlign="center",le.textBaseline="middle",le.fillText(z,512,98,970);let Se=new en(Te);Se.colorSpace=yt;let Be=new Et({map:Se,side:Sn}),Ee=h(new Ht(J,J*192/1024),Be,H,se),ye=new tt(Ee.geometry,Be);return ye.rotation.y=Math.PI,Ee.add(ye),Ee}function g(z,H){let J=new qe;J.position.set(z.x,0,z.z),e.add(J);let se=z===Hc?u:c,xe=(le,Se,Be,Ee)=>se.push({x:z.x+le,z:z.z+Se,w:Be,d:Ee});d([7,.32,39],[9,.16,0],i,J),d([.15,.025,38],[5.6,.335,0],o,J),d([9,.24,42],[9,5.6,0],t,J),d([8,.07,39],[9,5.44,0],n,J);for(let le of[-17,-8,1,10,18])d([.2,5.4,.25],[12.6,2.7,le],n,J),d([6,.035,.13],[9,5.35,le],a,J),xe(12.6,le,.2,.25);for(let le of[-9,10])d([1,.4,3],[11,.72,le],t,J),d([.16,1.1,3],[11.4,1.22,le],r,J),xe(11,le,1,3);d([.8,2,.7],[11,1.3,16],t,J),xe(11,16,.8,.7),f("AURORA  \u21C4  LUMEN",[8.8,4.55,18.7],7,J),f(H,[8.8,3.5,18.7],7,J),f("GALAXY RAILWAY  /  01",[8.8,4.5,-18.8],7,J);let Te=new Vt(9365741,100,24,2);return Te.position.set(9,4,0),J.add(Te),J}g(Hc,"AURORA CENTRAL"),g(nu,"LUMEN OBSERVATORY"),d([18,.035,5],[-81,.025,20],i);for(let z=-96;z<-73;z+=3)d([.12,.04,4.8],[z,.05,20],o);f("GALAXY RAILWAY  \u2190",[-76,2.5,20],5).rotation.y=Math.PI/2;let x=new ui(Jf.map(z=>new P(...z)),!1,"centripetal"),m=new qe;e.add(m);for(let z of[-1,1]){let H=Array.from({length:701},(se,xe)=>{let Te=x.getPoint(xe/700),le=x.getTangent(xe/700),Se=new P(-le.z,0,le.x).normalize();return Te.addScaledVector(Se,z*1.32)}),J=new ui(H);h(new ms(J,1100,.075,5,!1),o,[0,0,0],m)}let p=new Xt(new Nt(3.7,.12,.4),t,560),S=new gt;for(let z=0;z<560;z++){let H=z/559,J=x.getPoint(H),se=x.getTangent(H);S.position.copy(J),S.lookAt(J.clone().add(se)),S.updateMatrix(),p.setMatrixAt(z,S.matrix)}p.instanceMatrix.needsUpdate=!0,m.add(p);for(let z of[.12,.19,.28,.39,.5,.61,.72,.83,.91]){let H=x.getPoint(z),J=z<.25||z>.85?7:22,se=h(new tn(J,.23,6,64),n,H.toArray());se.quaternion.setFromUnitVectors(new P(0,0,1),x.getTangent(z)),h(new tn(J-.5,.07,5,64),o,H.toArray()).quaternion.copy(se.quaternion)}for(let z=0;z<7;z++){let H=x.getPoint(z*.025);d([.8,Math.max(.2,H.y),.8],[H.x,-.2+H.y/2,H.z],t)}let y=new qe;y.name="Lumen Express / passenger carriage",e.add(y);let _=new We({color:2381405,roughness:.8});for(let z=0;z<3;z++){let H=z*13,J=new qe;J.position.z=H,y.add(J),d([4.6,.28,12],[0,.35,0],t,J),d([4.5,.12,11.8],[0,.55,0],r,J),d([4.75,.24,12.3],[0,3.6,0],t,J);for(let se of[-2.25,2.25]){d([.15,.9,12],[se,1.02,0],t,J),d([.17,.07,12.2],[se,1.5,0],r,J),d([.12,1.65,11.5],[se,2.42,0],l,J);for(let xe of[-5.8,-3.5,-1.2,1.2,3.5,5.8])d([.15,2.1,.13],[se,2.5,xe],n,J);d([.18,.06,12],[se,3.47,0],a,J),d([.13,.09,11.5],[se,.65,0],o,J)}for(let se of[-5.9,5.9])d([4.5,1.1,.12],[0,1,se],t,J),d([4.5,1.8,.05],[0,2.45,se],l,J),d([.8,.1,.2],[0,3.4,se],a,J);for(let se of[-3.8,-.8,2.2])for(let xe of[-1.35,1.35])d([1.15,.22,1.1],[xe,1.03,se],_,J),d([1.15,.95,.16],[xe,1.45,se+.5],_,J),d([.14,.35,.9],[xe+(xe>0?.55:-.55),1.3,se],r,J);d([.18,.1,10],[0,3.43,0],a,J);for(let se of[-4.5,4.5])for(let xe of[-1.7,1.7]){let Te=h(new ht(.48,.48,.25,16),t,[xe,0,se],J);Te.rotation.z=Math.PI/2}z<2&&d([2,2,1],[0,1.7,6.5],t,J)}h(new Bt(1,24,16),n,[0,1.7,-6.05],y).scale.set(2.2,1.5,2.4),d([3.2,.8,.1],[0,2.5,-7.5],l,y),d([3,.13,.15],[0,1,-8],o,y),f("LUMEN EXPRESS  /  01",[0,3.18,-5.75],3.7,y);let b=new Vt(16770997,35,9,2);b.position.set(0,3,13),y.add(b);let I=(z,H)=>Wn(z-At.x,H-At.z),C=new qe;C.position.set(At.x,0,At.z),C.name="LUMEN / walkable planet",e.add(C);let M=document.createElement("canvas");M.width=M.height=256;let w=M.getContext("2d"),R=w.createImageData(256,256),G=1377;for(let z=0;z<R.data.length;z+=4){G=Math.imul(G,1664525)+1013904223>>>0;let H=120+G%115;R.data.set([H,H,H,255],z)}w.putImageData(R,0,0);let V=new en(M);V.wrapS=V.wrapT=hn,V.repeat.set(100,100),V.colorSpace=yt,V.anisotropy=4;let q=new Ht(430,430,120,120);q.rotateX(-Math.PI/2);let D=q.attributes.position,Z=[],re=new ze;for(let z=0;z<D.count;z++){let H=D.getX(z),J=D.getZ(z),se=Wn(H,J);D.setY(z,se),re.setHSL(.53+.04*Math.sin(H*.02),.15,.18+se*.012),Z.push(re.r,re.g,re.b)}q.setAttribute("color",new Qe(Z,3)),q.computeVertexNormals(),h(q,new We({vertexColors:!0,map:V,bumpMap:V,bumpScale:.13,roughness:.96}),[0,0,0],C),d([32,.25,8],[-103,.12,5],i,C);for(let z=0;z<11;z++)d([.15,.025,7],[-112+z*2,.28,5],o,C);function j(z,H,J,se){c.push({x:At.x+z,z:At.z+H,w:J,d:se})}let U=-46,te=-3;d([20,.4,16],[U,.2,te],n,C),d([20,.22,16],[U,4.8,te],t,C);for(let[z,H,J,se]of[[U,te-8,20,.25],[U+10,te,.25,16],[U,te+8,20,.25],[U-10,te-5,.25,6],[U-10,te+5,.25,6]])d([J,1.2,se],[z,1,H],t,C),d([J,2.3,se],[z,2.75,H],l,C),j(z,H,J,se);f("LUMEN / FIELD STATION",[U-10.2,4,te],8,C).rotation.y=-Math.PI/2;for(let z=0;z<3;z++){d([2.5,.9,1],[U+4,1.1,te-5+z*5],t,C);let H=d([1.6,.8,.06],[U+4,1.95,te-5+z*5],o,C);H.rotation.x=-.18,j(U+4,te-5+z*5,2.5,1)}let $=new Vt(10089699,100,30,2);$.position.set(U,4,te),C.add($);for(let[z,H,J]of[[16,-35,11],[45,-20,8]]){let se=Wn(z,H);h(new Bt(J,32,16,0,Math.PI*2,0,Math.PI/2),l,[z,se,H],C);let xe=h(new tn(J,.16,6,48),n,[z,se,H],C);xe.rotation.x=Math.PI/2;for(let Te=0;Te<7;Te++){let le=Te*2.399;h(new hr(1.2,4,7),o,[z+Math.cos(le)*J*.5,se+2,H+Math.sin(le)*J*.5],C)}j(z,H,J*1.7,J*1.7)}for(let z=0;z<6;z++){let H=-55+z*5,J=-28,se=Wn(H,J);d([.18,2,.18],[H,se+1,J],n,C);let xe=d([4,.1,5],[H,se+2,J],new We({color:1453412,metalness:.75,roughness:.2}),C);xe.rotation.x=-.35,j(H,J,4,5)}let he=h(new ht(.25,.5,18,10),n,[70,9,-55],C),N=h(new Bt(5,24,12,0,Math.PI*2,0,Math.PI*.3),n,[70,18,-55],C);N.rotation.z=.55,j(70,-55,3,3);let W=2077,oe=()=>(W=Math.imul(W,1664525)+1013904223>>>0,W/4294967296),K=new Xt(new Ai(1,1),i,190),k=new Xt(new hr(1,1,5),o,110);for(let[z,H,J]of[[K,190,!1],[k,110,!0]])for(let se=0;se<H;se++){let xe,Te;do xe=(oe()-.5)*390,Te=(oe()-.5)*390;while(Math.hypot(xe,Te)>195||xe<-25&&Math.abs(Te)<32||Math.hypot(xe-25,Te+25)<40||Ef(xe,Te));let le=Wn(xe,Te),Se=J?1.5+oe()*5:.6+oe()*3;S.position.set(xe,le+(J?Se*.5:Se*.35),Te),S.rotation.set(J?0:oe(),oe()*6.28,J?(oe()-.5)*.3:oe()),S.scale.set(J?Se*.35:Se,Se,J?Se*.35:Se*.8),S.updateMatrix(),z.setMatrixAt(se,S.matrix),Se>2.5&&j(xe,Te,J?Se*.5:Se*1.5,J?Se*.5:Se*1.3)}C.add(K,k);for(let[z,H]of[[-20,35],[32,68],[100,12]]){let J=h(new fs(12,40),new We({color:1329498,emissive:555917,emissiveIntensity:.45,metalness:.8,roughness:.18}),[z,Wn(z,H)+.08,H],C);J.rotation.x=-Math.PI/2,j(z,H,20,20)}let fe=new pt,_e=[],ge=[],Pe=[],lt=160,B=16;for(let z=0;z<=B;z++)for(let H=0;H<=lt;H++){let J=H*Math.PI*2/lt,se=212+z*13,xe=38+19*Math.sin(J*7+.8)+12*Math.cos(J*19)+9*Math.sin(J*31),Te=Math.max(0,Math.sin(Math.PI*z/B))*xe+Math.sin(J*29+z*.6)*z*.8;if(_e.push(Math.cos(J)*se,Te-3,Math.sin(J)*se),re.setHSL(.55,.1,.14+Te*7e-4),Pe.push(re.r,re.g,re.b),z<B&&H<lt){let le=z*(lt+1)+H;ge.push(le,le+lt+1,le+1,le+1,le+lt+1,le+lt+2)}}fe.setAttribute("position",new Qe(_e,3)),fe.setAttribute("color",new Qe(Pe,3)),fe.setIndex(ge),fe.computeVertexNormals(),h(fe,new We({vertexColors:!0,map:V,roughness:1,side:zt}),[0,0,0],C);for(let[z,H,J]of[[45,110,15],[-32,-110,18],[125,-60,11]]){let se=h(new tn(J,1.2,7,48),i,[z,Wn(z,H),H],C);se.rotation.x=Math.PI/2,se.scale.z=.45}f("CRYSTAL BASIN \u2192",[-78,2.6,20],7,C);let nt=new We({color:3036775,roughness:.88});nt.onBeforeCompile=z=>{z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
varying vec3 planetNormal;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
planetNormal=normal;`),z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 planetNormal;`).replace("#include <color_fragment>",`#include <color_fragment>
 float land = sin(planetNormal.x*19.+sin(planetNormal.z*13.)*2.)*sin(planetNormal.z*17.+planetNormal.y*9.);
 diffuseColor.rgb=mix(vec3(.025,.15,.27),vec3(.16,.29,.19),smoothstep(.10,.29,land));
 float cloud=sin(planetNormal.x*43.+planetNormal.y*24.)*sin(planetNormal.z*39.+planetNormal.x*7.);
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.68,.78,.8),smoothstep(.42,.65,cloud)*.65);`)};let ke=h(new Bt(1700,80,48),nt,[0,-1750,0]);ke.castShadow=!1;let Ye=h(new Bt(1550,64,40),new We({color:5468276,roughness:.94}),[6400,-1610,-4600]);Ye.castShadow=!1;let De=new We({color:11441282,roughness:1});De.onBeforeCompile=z=>{z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
varying vec3 gasNormal;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
gasNormal=normal;`),z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 gasNormal;`).replace("#include <color_fragment>",`#include <color_fragment>
 float band=.5+.5*sin(gasNormal.y*61.+sin(gasNormal.x*18.)*.4);
 diffuseColor.rgb=mix(vec3(.32,.37,.46),vec3(.65,.48,.32),band);
 diffuseColor.rgb*=.85+.15*sin(gasNormal.y*150.);`)};let St=h(new Bt(980,64,40),De,[8800,1700,-8200]);St.castShadow=!1,St.rotation.z=.23,h(new fo(1250,1750,128),new Et({color:10133164,transparent:!0,opacity:.42,side:zt}),[8800,1700,-8200]).rotation.set(.9,.25,.28);let ne=[],ce=[];for(let z=0;z<3200;z++){let H=oe()*Math.PI*2,J=oe()*2-1,se=15500;ne.push(Math.sqrt(1-J*J)*Math.cos(H)*se+3200,J*se+1500,Math.sqrt(1-J*J)*Math.sin(H)*se-2300);let xe=.4+oe()*.6;ce.push(xe*.83,xe*.9,xe)}let ie=new pt;ie.setAttribute("position",new Qe(ne,3)),ie.setAttribute("color",new Qe(ce,3));let E=new Qn(ie,new kn({size:6,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));e.add(E);let v=new no(new cr({color:11060973,transparent:!0,opacity:.24}));v.position.set(11e3,7e3,-11e3),v.scale.set(70,70,1),e.add(v);function O(z,H=!1,J=x){let se=J.getPoint(Math.max(0,Math.min(1,z))),xe=J.getTangent(Math.max(0,Math.min(1,z))).multiplyScalar(H?-1:1);y.position.copy(se),y.quaternion.setFromRotationMatrix(new je().lookAt(se,se.clone().add(xe),new P(0,1,0))),y.updateMatrixWorld(!0)}O(0);function ae(z,H){return tp(z-At.x,H-At.z)?c.some(J=>Math.abs(z-J.x)<J.w/2+.3&&Math.abs(H-J.z)<J.d/2+.3):!0}return{group:e,train:y,curve:x,stars:E,planet:C,earth:ke,setTrain:O,blockedPlanet:ae,floorHeight:I,cityColliders:u,planetColliders:c}}var cn=[{name:"\u897F\u30FB\u30EA\u30D0\u30FC\u30B5\u30A4\u30C9",x:-240},{name:"\u4E2D\u592E\u30FB\u65E7\u5E02\u8857",x:-12},{name:"\u6771\u30FB\u30AC\u30FC\u30C7\u30F3",x:230}],ip=[[-75,45,"\u767A\u5149\u9271\u77F3"],[-20,90,"\u53E4\u4EE3\u306E\u8A18\u9332"],[85,50,"\u6C37\u306E\u6A19\u672C"],[100,-85,"\u78C1\u5834\u89B3\u6E2C"],[12,-90,"\u7D50\u6676\u306E\u5171\u9CF4"],[140,0,"\u5730\u5E73\u7DDA\u306E\u6E2C\u91CF"]];function sp(s){let e=(s%90+90)%90,t=Math.floor(e/30),n=e%30,i=(t+1)%3,r=Math.max(0,Math.min(1,(n-8)/22)),o=r*r*(3-2*r);return{x:cn[t].x+(cn[i].x-cn[t].x)*o,dwell:n<8,index:t,next:i,dir:cn[i].x>cn[t].x?1:-1}}function rp(s,e,t){let n=Math.max(0,Math.min(1,t/5));return n===1?e:n===0?s:s+(e-s)*n*n*(3-2*n)}function op(s,e,t){return Math.abs(e-s.x)<8.5&&Math.abs(t+s.y)<9.5}function ap(s,e){return Sr(s,e)}function cp(s,e,t,n){let i=new qe;s.add(i);let r=[],o=[],a=(U,te=0,$=.7)=>new We({color:U,metalness:te,roughness:$}),l=a(4544353),c=a(13029322,.35),u=a(7822405),h=a(1517880,.6),d=a(3307626),f=a(4357504),g=new We({color:8644563,emissive:2989457,emissiveIntensity:.7}),x=new We({color:9025739,transparent:!0,opacity:.16,depthWrite:!1,side:zt,roughness:.1});function m(U,te,$,he=i){let N=new tt(U,te);return N.position.set(...$),N.castShadow=!0,N.receiveShadow=!0,he.add(N),N}let p=(U,te,$,he)=>m(new Nt(...U),$,te,he);function S(U,te,$=5,he=i){let N=document.createElement("canvas");N.width=768,N.height=128;let W=N.getContext("2d");W.fillStyle="#102331",W.fillRect(0,0,768,128),W.fillStyle="#b9f4dc",W.font="bold 39px sans-serif",W.textAlign="center",W.textBaseline="middle",W.fillText(U,384,64,740);let oe=new en(N);oe.colorSpace=yt;let K=new Et({map:oe}),k=m(new Ht($,$/6),K,te,he),fe=new tt(k.geometry,K);return fe.rotation.y=Math.PI,k.add(fe),k}function y(U,te,$,he=i){m(new ht(.35,.25,.6,9),c,[U,te+.3,$],he),m(new Ai(.65,1),d,[U,te+1.15,$],he)}function _(U,te,$,he=i){p([2,.12,1.2],[U,te+.9,$],u,he);for(let N of[-.8,.8])p([.08,.85,.8],[U+N,te+.43,$],h,he)}function A(U,te,$,he=i){p([2.3,.4,.9],[U,te+.45,$],f,he),p([2.3,.8,.18],[U,te+.9,$+.4],f,he)}let b=[];p([620,.12,465],[0,-.14,-77.5],l);for(let U of[-285,-210,-150,0,150,210,285])p([13,.015,465],[U,-.06,-77.5],h);for(let U of[-290,-230,-170,-58,25,130])p([620,.018,12],[0,-.05,U],h);for(let U of[-255,-180,-120,120,180,255])for(let te of[-260,-200,-140,-80,-20,55,105]){if(Math.abs(U)<106&&te>-165||U===180&&te===105)continue;let $=22+(Math.abs(U)*7+Math.abs(te)*13)%79;b.push({x:U,z:te,h:$,w:22,d:25}),r.push({x:U,z:te,w:22,d:25})}let I=new Xt(new Nt(1,1,1),c,b.length),C=new Xt(new Nt(1,1,1),new We({color:3561835,metalness:.45,roughness:.24,emissive:2378836,emissiveIntensity:.3}),b.reduce((U,te)=>U+Math.floor(te.h/3)*4,0)),M=new gt,w=0;b.forEach((U,te)=>{M.position.set(U.x,U.h/2,U.z),M.rotation.set(0,0,0),M.scale.set(U.w,U.h,U.d),M.updateMatrix(),I.setMatrixAt(te,M.matrix),I.setColorAt(te,new ze().setHSL(.52+te%4*.015,.1,.32+te%3*.08));for(let $=3;$<U.h;$+=3)for(let he of[-1,1])for(let N of[0,1])M.position.set(U.x+(N?0:he*11.04),$,U.z+(N?he*12.54:0)),M.scale.set(N?20:.05,1.65,N?.05:23),M.updateMatrix(),C.setMatrixAt(w++,M.matrix)}),C.count=w,i.add(I,C);let R=document.createElement("canvas");R.width=256,R.height=64;let G=R.getContext("2d");G.fillStyle="#142d3b",G.fillRect(0,0,256,64);for(let U=0;U<8;U++)G.fillStyle=U%5===1?"#b9a879":U%3===0?"#45677b":"#264653",G.fillRect(U*32+3,4,26,54),G.fillStyle="#182f3a",G.fillRect(U*32+3,40,26,3);let V=new en(R);V.colorSpace=yt,C.material.map=V,C.material.emissiveMap=V,C.material.emissive.set(16777215),C.material.emissiveIntensity=.15;for(let U of[-285,-210,150,285])for(let te=-290;te<140;te+=30)y(U+10,0,te),p([2,.5,.8],[U+10,.4,te+5],u);p([45,.08,42],[180,.03,105],d);for(let U=0;U<9;U++)y(164+U%3*14,0,90+Math.floor(U/3)*14);S("GARDEN DISTRICT",[160,2.5,125],7),p([610,.45,4.2],[0,14.4,-58],h);for(let U of[-59,-57])p([610,.07,.08],[0,14.68,U],g);for(let U=-290;U<310;U+=24)p([.7,14,.7],[U,7,-58],c);for(let[U,te]of cn.entries()){p([31,.4,5],[te.x,14.6,-52],c),p([32,.2,7],[te.x,19,-52],h);for(let $ of[-14,14])p([.22,4.4,.22],[te.x+$,16.8,-50],c);S(te.name,[te.x,17.6,-49.3],10),p([2,14.5,2],[te.x+13,7.25,-49],x)}n.clear();for(let U of[-8,0,8]){p([7.6,.2,3],[U,-.8,0],h,n),p([7.7,.2,3.1],[U,1.5,0],c,n);for(let te of[-1.5,1.5]){p([7.6,.7,.13],[U,-.35,te],h,n),p([7.4,1.2,.04],[U,.65,te],x,n);for(let $ of[-3.6,0,3.6])p([.1,1.7,.1],[U+$,.5,te],c,n)}A(U,-.75,-.8,n)}let q=e.map((U,te)=>{let $=Math.ceil((t[te]||70)+1),he=U.front+U.side*3,N=-U.doorY;for(let k of[-U.y-8,-U.y+8])y(U.front+U.side*2,.17,k),p([4,.08,.25],[U.x,3.3,k],g);let W=S(U.label+" / AURORA",[U.x,2.6,-U.y-U.d/2+.3],8),oe=m(new tn(.8,.045,6,32),g,[U.x,3.1,-U.y]);oe.rotation.x=Math.PI/2,p([3.4,.14,3.4],[he,.17,N],h),S("LIFT  /  F",[he,2.7,N-1.6],3);for(let k of[$,$+6]){p([18,.24,20],[U.x,k-.12,-U.y],c);for(let fe of[-10,10])p([18,1.1,.12],[U.x,k+.55,-U.y+fe],x);for(let fe of[-9,9])p([.12,1.1,20],[U.x+fe,k+.55,-U.y],x);if(k===$){p([18,.16,20],[U.x,k+5.6,-U.y],c);for(let _e of[-9,9])for(let ge of[-10,10])p([.2,5.6,.2],[U.x+_e,k+2.8,-U.y+ge],h);p([11,.025,14],[U.x,k+.02,-U.y],u);for(let _e of[-8,8]){y(U.x-6,k,-U.y+_e),p([5,2.5,.5],[U.x,k+1.25,-U.y+_e],h);for(let ge=0;ge<16;ge++)p([.2,.5+ge%3*.1,.25],[U.x-2+ge*.25,k+.6+ge%2*1.1,-U.y+_e-.3],ge%2?c:f)}for(let _e of[-5,5]){p([.05,5,.05],[U.x+_e,k+2.8,-U.y],h);let ge=m(new tn(1.2,.06,6,36),g,[U.x+_e,k+4.2,-U.y]);ge.rotation.x=Math.PI/2}let fe=new Vt(16767142,65,22,2);fe.position.set(U.x,k+4,-U.y),i.add(fe);for(let _e of[-6,6])A(U.x,k,-U.y+_e),_(U.x+4,k,-U.y+_e),o.push({room:te,level:1,x:U.x,z:-U.y+_e,w:2.3,d:1.1},{room:te,level:1,x:U.x+4,z:-U.y+_e,w:2,d:1.2});S("SKY LOUNGE / "+U.label,[U.x,k+3,-U.y-9.8],10)}else{for(let fe of[-6,6])for(let _e of[-6,6])y(U.x+fe,k,-U.y+_e);p([5,.35,2],[U.x,k+.2,-U.y],d),o.push({room:te,level:2,x:U.x,z:-U.y,w:5,d:2})}}let K=new qe;K.position.set(he,.17,N),i.add(K),p([2.8,.12,2.8],[0,0,0],h,K),p([2.8,.1,2.8],[0,3,0],c,K);for(let k of[-1.4,1.4])p([.08,3,2.8],[k,1.5,0],x,K);return p([2.8,3,.08],[0,1.5,-1.4],x,K),{room:U,roof:$,x:he,z:N,cabin:K,levels:[.17,$,$+6]}}),D=ip.map(([U,te,$],he)=>{let N=Wn(U,te),W=new qe;W.position.set(At.x+U,N,At.z+te),i.add(W),m(new ht(.4,.6,2,12),h,[0,1,0],W);let oe=m(new Yi(.6),g.clone(),[0,2.6,0],W);return S(`${he+1} / ${$}`,[0,3.5,0],4,W),{x:At.x+U,z:At.z+te,jewel:oe,title:$}}),Z=new qe;Z.position.set(At.x-85,0,At.z+12),i.add(Z),p([2.6,.5,3.5],[0,.9,0],c,Z),p([1.8,1.4,1.7],[0,1.8,-.3],x,Z);for(let U of[-1.4,1.4])for(let te of[-1.1,1.1]){let $=m(new ht(.6,.6,.35,16),h,[U,.6,te],Z);$.rotation.z=Math.PI/2}S("ROVER / F",[0,2.8,0],3,Z);let re=new qe;re.position.set(At.x-15,Wn(-15,-45)+2,At.z-45),i.add(re),m(new Bt(1.2,20,12),g,[0,0,0],re);for(let U of[2.3,3.6,5]){let te=m(new tn(U,.035,6,60),c,[0,0,0],re);te.rotation.x=Math.PI/2,m(new Bt(.35,12,8),f,[U,0,0],re)}S("ORBITAL ARCHIVE / F",[0,4,0],7,re);for(let U=0;U<7;U++){let te=65+U*8,$=105,he=Wn(te,$);p([2,6+U%2*2,2],[At.x+te,he+3,At.z+$],l),U<6&&p([9,.8,2],[At.x+te+4,he+6,At.z+$],l)}S("THE RESONANCE RUINS",[At.x+88,4,At.z+115],14);function j(U,te,$){if($){let he=q[$.room].room;return!op(he,U,te)||o.some(N=>N.room===$.room&&N.level===$.level&&Math.abs(U-N.x)<N.w/2+.3&&Math.abs(te-N.z)<N.d/2+.3)}return!ap(U,te)||r.some(he=>Math.abs(U-he.x)<he.w/2+.3&&Math.abs(te-he.z)<he.d/2+.3)}return{root:i,buildings:b,lifts:q,beacons:D,rover:Z,orrery:re,blocked:j,metroPose:sp,liftHeight:rp}}var lp=[{id:"canal",name:"\u904B\u6CB3\u30D7\u30ED\u30E0\u30CA\u30FC\u30C9",x:-286,z:72,yaw:-.3},{id:"market",name:"\u6771\u30FB\u30CA\u30A4\u30C8\u30DE\u30FC\u30B1\u30C3\u30C8",x:210,z:88,yaw:0},{id:"workshop",name:"\u5317\u30FB\u30E1\u30A4\u30AB\u30FC\u30BA\u5E83\u5834",x:-150,z:-230,yaw:0},{id:"garden",name:"\u30AC\u30FC\u30C7\u30F3\u516C\u5712",x:180,z:130,yaw:0},{id:"city-car",name:"\u30B7\u30C6\u30A3\u30AB\u30FC\u4E57\u308A\u5834",x:-207,z:68,yaw:Math.PI/2},{id:"cafe",name:"\u904B\u6CB3\u30AB\u30D5\u30A7\u5165\u53E3",x:-273,z:82,yaw:0},{id:"food",name:"\u30DE\u30FC\u30B1\u30C3\u30C8\u5165\u53E3",x:216,z:82,yaw:0},{id:"gallery",name:"\u5DE5\u623F\u30AE\u30E3\u30E9\u30EA\u30FC\u5165\u53E3",x:-143,z:-236,yaw:0},{id:"harbor",name:"\u904B\u6CB3\u30DC\u30FC\u30C8\u8239\u7740\u304D\u5834",x:-289,z:72,yaw:Math.PI/2},{id:"build-garden",name:"\u81EA\u5206\u306E\u30AC\u30FC\u30C7\u30F3\u3092\u4F5C\u308B\u5E83\u5834",x:180,z:119,yaw:0},{id:"training",name:"\u30D1\u30EB\u30B9\u8A13\u7DF4\u5834",x:-146,z:-205,yaw:0}];function hp(s,e){return s<-220?"\u904B\u6CB3\u30FB\u30EA\u30D0\u30FC\u30B5\u30A4\u30C9":e<-175?"\u5317\u30FB\u30E1\u30A4\u30AB\u30FC\u30BA\u8857":s>105?"\u6771\u30FB\u30AC\u30FC\u30C7\u30F3\uFF06\u30DE\u30FC\u30B1\u30C3\u30C8":"AURORA \u4E2D\u592E\u8857\u533A"}function up(s,e,t){return Math.max(3,Math.min(220,s+e*Math.min(.25,Math.max(0,t))*12))}function au(s){return new Set(Array.isArray(s)?s.filter(e=>["canal-cafe","market-food","workshop-exhibit"].includes(e)):[])}var cu={value:0},dp=new Uint8Array(4096*4);for(let s=0;s<64;s++)for(let e=0;e<64;e++){let t=(s*64+e)*4,n=Math.hypot((e-31.5)/32,(s-31.5)/32);dp[t+3]=Math.max(0,Math.pow(Math.max(0,1-n),1.7)*120)}var fp=new zn(dp,64,64);fp.needsUpdate=!0;var Wc=new Et({map:fp,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});function Xc(s){let e=[],t=new Bt(1,9,7),n=new ht(.6,1,1,7),i=new We({color:5273923,roughness:.94});i.onBeforeCompile=l=>{l.uniforms.windTime=cu,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float windTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x += sin(windTime*1.4 + transformed.y*2.5)*.035;`)};let r=new We({color:6574912,roughness:.93});i.userData.groveOwned=r.userData.groveOwned=!0;function o(l,c,u=5,h=0){e.push({x:l,z:c,h:u,y:h})}function a(){if(!e.length)return;let l=new Xt(t,i,e.length*23),c=new Xt(n,r,e.length*6),u=new gt,h=new P(0,1,0),d=0,f=0;for(let[x,m]of e.entries()){let{x:p,z:S,h:y,y:_}=m;for(let A=0;A<6;A++){let b=A*2.399+x*.5,I=new P(p,_+y*(A?.36:0),S),C=new P(p+(A?Math.cos(b)*y*.22:0),_+y*(A?.72:.7),S+(A?Math.sin(b)*y*.22:0)),M=C.clone().sub(I);u.position.copy(I).add(C).multiplyScalar(.5),u.quaternion.setFromUnitVectors(h,M.clone().normalize()),u.scale.set(y*(A?.026:.045),M.length(),y*(A?.026:.045)),u.updateMatrix(),c.setMatrixAt(f++,u.matrix)}for(let A=0;A<23;A++){let b=A*2.399+x*.7,I=y*.27*Math.sqrt(A%11/10),C=y*(.62+.24*(A*7%13)/13);u.position.set(p+Math.cos(b)*I,_+C,S+Math.sin(b)*I),u.rotation.set(A*.2,A*.4,0),u.scale.set(y*(.13+A%3*.02),y*.18,y*.14),u.updateMatrix(),l.setMatrixAt(d,u.matrix),l.setColorAt(d++,new ze().setHSL(.24+A%5*.014,.29,.3+A%4*.055))}}l.name="Grove / layered crowns",c.name="Grove / tapered branches",l.castShadow=c.castShadow=!0,l.receiveShadow=c.receiveShadow=!0,s.add(l,c);let g=new Xt(new Ht(1,1),Wc,e.length);return e.forEach((x,m)=>{u.position.set(x.x,x.y+.145,x.z),u.rotation.set(-Math.PI/2,0,0),u.scale.set(x.h*.8,x.h*.8,1),u.updateMatrix(),g.setMatrixAt(m,u.matrix)}),g.name="Tree contact shadows",s.add(g),{crowns:l,branches:c}}return{add:o,finish:a,trees:e}}function pp(s,e){let t=new qe;t.name="AURORA / living districts",s.add(t);let n=[],i=[],r=new Map,o=[],a=Xc(t),l=[],c=(L,ne=0,ce=.7)=>new We({color:L,metalness:ne,roughness:ce}),u=c(11053212),h=c(2503741,.4),d=c(8478015),f=c(4484693),g=c(5587767),x=c(12032101,.6),m=c(10308156),p=c(14798762),S=c(2839652,.65,.2),y=new We({color:16770739,emissive:16761976,emissiveIntensity:1.1});function _(L){let ne=document.createElement("canvas");ne.width=ne.height=256;let ce=ne.getContext("2d");ce.fillStyle=L==="paving"?"#97948b":L==="grass"?"#687552":"#474c4d",ce.fillRect(0,0,256,256);let ie=57;for(let v=0;v<9e3;v++)ie=Math.imul(ie,1664525)+1013904223>>>0,ce.fillStyle=`rgba(${ie%2?255:0},${ie%2?255:0},${ie%2?255:0},.07)`,ce.fillRect(ie%256,(ie>>>8)%256,1+ie%3,1);if(L==="paving"){ce.strokeStyle="#4e5353",ce.lineWidth=2;for(let v=0;v<256;v+=32){ce.beginPath(),ce.moveTo(0,v),ce.lineTo(256,v),ce.stroke();for(let O=v%64?16:0;O<256;O+=64)ce.strokeRect(O,v,64,32)}}let E=new en(ne);return E.wrapS=E.wrapT=hn,E.repeat.set(L==="paving"?14:32,L==="paving"?14:32),E.colorSpace=yt,E.anisotropy=4,E}let A=_("paving"),b=_("road"),I=_("grass"),C=new We({color:9017453,map:I,bumpMap:I,bumpScale:.035,roughness:1}),M=new We({color:12304823,map:A,bumpMap:A,bumpScale:.04,roughness:.85}),w=new We({color:6713465,map:b,bumpMap:b,bumpScale:.025,roughness:.88});o.push(M,w);for(let L of[M,w,C])L.onBeforeCompile=ne=>{ne.vertexShader=ne.vertexShader.replace("#include <common>",`#include <common>
varying vec2 pavingWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 pavingPoint=vec4(transformed,1.);
 #ifdef USE_INSTANCING
 pavingPoint=instanceMatrix*pavingPoint;
 #endif
 pavingWorld=(modelMatrix*pavingPoint).xz;`),ne.fragmentShader=ne.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 pavingWorld;`).replace("#include <map_fragment>",`#ifdef USE_MAP
diffuseColor *= texture2D(map,pavingWorld*.25);
#endif`)};function R(L,ne,ce,ie=0){let E=r.get(ce);E||(E=[],r.set(ce,E)),E.push({size:L,pos:ne,rot:ie})}function G(L,ne,ce,ie=t){let E=new tt(L,ne);return E.position.set(...ce),E.castShadow=!0,E.receiveShadow=!0,ie.add(E),E}let V=(L,ne,ce,ie)=>{if(!ie){R(L,ne,ce);return}return G(new Nt(...L),ce,ne,ie)};function q(L,ne,ce,ie){n.push({x:L,z:ne,w:ce,d:ie})}function D(L,ne,ce=5,ie="#e6d2a5",E=0){let v=document.createElement("canvas");v.width=1024,v.height=180;let O=v.getContext("2d");O.fillStyle="#162c32",O.fillRect(0,0,1024,180),O.fillStyle=ie,O.font="600 62px sans-serif",O.textAlign="center",O.textBaseline="middle",O.fillText(L,512,90,990);let ae=new en(v);ae.colorSpace=yt;let z=new Et({map:ae}),H=G(new Ht(ce,ce*180/1024),z,ne);H.rotation.y=E;let J=new tt(H.geometry,z);return J.rotation.y=Math.PI,H.add(J),H}function Z(L,ne,ce=5){a.add(L,ne,ce),q(L,ne,.5,.5)}function re(L,ne,ce=0){let ie=new qe;ie.position.set(L,.08,ne),ie.rotation.y=ce,t.add(ie),V([2.1,.15,.65],[0,.5,0],d,ie),V([2.1,.55,.12],[0,.85,-.3],d,ie);for(let E of[-.8,.8])V([.12,.5,.5],[E,.25,0],h,ie);q(L,ne,2.1,.8),i.push({id:`bench-${L}-${ne}`,kind:"seat",name:"\u30D9\u30F3\u30C1\u3067\u4F11\u3080",x:L,z:ne,sit:[L,1.15,ne],exit:[L+1.8,1.72,ne],yaw:ce})}R([1400,.15,1400],[0,-.3,0],C),R([45,.04,42],[180,.095,105],C),R([3,.035,42],[180,.13,105],M),R([45,.035,2.4],[180,.13,106],M);for(let L of[166,193])for(let ne of[93,118]){R([6,.18,3],[L,.17,ne],d),R([5.6,.2,2.6],[L,.25,ne],C);for(let ce=0;ce<16;ce++)R([.15,.3,.15],[L-2.4+ce%8*.68,.51,ne-.6+Math.floor(ce/8)*1.2],ce%3?x:m)}for(let L=-300;L<=300;L+=18)Z(L,151,4+L%3*.25),Z(L,-307,4.5);for(let L=0;L<16;L++){let ne=-650+L*85,ce=L%2?350:-510;G(new Ai(1,2),C,[ne,-10,ce]).scale.set(85,23+L%4*7,95)}for(let L of[-285,-210,-150,150,210,285]){let ne=L===-285?-283:L,ce=L===-285?8:12.5;R([ce,.025,465],[ne,-.018,-77.5],w);for(let ie of[-1,1])R([4,.1,465],[ne+ie*(ce/2+2.2),.015,-77.5],M),R([.18,.18,465],[ne+ie*(ce/2+.15),.04,-77.5],u);for(let ie=-300;ie<150;ie+=10)R([.12,.035,3.2],[ne,.003,ie],p)}for(let L of[-290,-230,-170,25,130]){R([620,.025,11],[0,-.01,L],w);for(let ne of[-1,1])R([620,.12,3],[0,.02,L+ne*7],M);for(let ne of[-285,-210,-150,150,210,285])for(let ce=-4;ce<=4;ce++)R([.7,.03,7],[ne+ce*1.1,.025,L],p)}e.forEach((L,ne)=>{let ce=[m,h,x,u][ne%4];R([23,.7,26],[L.x,.35,L.z],h),R([23.2,.3,26.2],[L.x,L.h+.15,L.z],ce),R([L.w-2,.35,3],[L.x,3.4,L.z+14],ce);for(let ie of[-1,1]){R([.3,L.h,.4],[L.x+ie*10.3,L.h/2,L.z+12.7],ce);for(let E=4;E<L.h;E+=6)if(R([22.5,.18,.3],[L.x,E,L.z+12.7],h),ne%3===0){R([19,.18,1.5],[L.x,E,L.z+13.2],u);for(let v of[-9,0,9])R([.08,.9,.08],[L.x+v,E+.5,L.z+13.8],x)}}for(let ie of[-7,-3,1,5,9])R([.09,L.h-4,.1],[L.x+ie,(L.h+4)/2,L.z+12.6],h);R([6,1.4,4],[L.x-4,L.h+.7,L.z],h),R([2,2,2],[L.x+5,L.h+1,L.z-5],u),R([1.5,1.8,.3],[L.x+8,1,L.z+12.8],h),R([3.4,2.2,.1],[L.x-5,1.6,L.z+12.65],S);for(let ie of[-1,1]){R([.22,L.h,.22],[L.x+ie*10.6,L.h/2,L.z-12.6],ce),R([22.5,.75,.25],[L.x,L.h+.5,L.z+ie*12.6],h);for(let E=3;E<L.h;E+=6){R([.22,.16,25],[L.x+ie*11.08,E,L.z],h);for(let v of[-8,-3,3,8])R([.16,2.5,.1],[L.x+ie*11.1,E,L.z+v],h)}}for(let ie of[-8,-4,0,4,8])R([.1,L.h-4,.1],[L.x+ie,(L.h+4)/2,L.z-12.6],h);R([7,.09,.05],[L.x,2.8,L.z+14.02],y);for(let ie=0;ie<3;ie++)R([.8,.5,.5],[L.x-8+ie*3,.5,L.z+14.5],u)});let j=document.createElement("canvas");j.width=j.height=128;let U=j.getContext("2d"),te=U.createImageData(128,128);for(let L=0;L<128;L++)for(let ne=0;ne<128;ne++){let ce=(L*128+ne)*4,ie=Math.PI/64;te.data[ce]=128+Math.sin((ne*4+L*2)*ie)*10+Math.sin((ne*10-L*6)*ie)*8+Math.sin((ne*2-L*8)*ie)*6,te.data[ce+1]=128+Math.cos((L*4-ne*2)*ie)*10+Math.cos((ne*8+L*6)*ie)*9+Math.cos((ne*2+L*12)*ie)*5,te.data[ce+2]=250,te.data[ce+3]=255}U.putImageData(te,0,0);let $=new en(j);$.wrapS=$.wrapT=hn,$.repeat.set(5,70);let he=new We({color:3763821,metalness:.45,roughness:.22,normalMap:$,normalScale:new Le(.28,.28)}),N=G(new Ht(15,400,20,80),he,[-300,-.055,-80]);N.rotation.x=-Math.PI/2,R([1.2,.38,430],[-291,.1,-80],u),R([3,.12,430],[-289,.02,-80],M);for(let L of[-230,-58,25,100]){R([22,.2,6],[-300,.13,L],d);for(let ne of[-1,1]){R([22,.07,.07],[-300,1.15,L+ne*2.9],x);for(let ce of[-309,-300,-291])R([.08,1.1,.08],[ce,.65,L+ne*2.9],h)}}for(let L=-270;L<120;L+=24)Z(-276.5,L,4.5),L%48===-30&&re(-288,L),R([.1,3.2,.1],[-290,1.6,L],h),R([.7,.12,.35],[-290,3.25,L],y),l.push([-290,L]);D("RIVERSIDE / CANAL WALK",[-287,3,110],11),R([90,.4,465],[-355,-.02,-77.5],u);for(let L=-285;L<140;L+=22)Z(-317,L,4.2),R([2,.15,8],[-311,.12,L],M);for(let L=0;L<10;L++){let ne=-270+L*42,ce=9+L%3*4;R([18,ce,24],[-345,ce/2,ne],L%3===0?m:u),R([19,.3,25],[-345,ce+.15,ne],h);for(let ie=2;ie<ce;ie+=3)for(let E=0;E<4;E++){let v=ne-8+E*5;R([.08,1.7,2.7],[-335.94,ie,v],S),R([.16,.12,3],[-335.8,ie-.9,v],p);for(let O of[-1,1])R([.12,1.85,.12],[-335.8,ie,v+O*1.42],h)}R([.2,2.4,1.8],[-335.8,1.2,ne],h),R([2,.16,4],[-335,2.7,ne],L%2?x:h),R([3,.15,4],[-334.5,.15,ne],M)}function W(L,ne,ce,ie,E){R([9,.16,8],[ce,.04,ie],M),R([9,.3,8.5],[ce,3.5,ie],E);for(let v of[-4.4,4.4])R([.18,3.5,8],[ce+v,1.75,ie],h),q(ce+v,ie,.18,8);R([9,3.5,.18],[ce,1.75,ie-4],h),q(ce,ie-4,9,.18),R([5,.8,1],[ce,1,ie-1],d),q(ce,ie-1,5,1);for(let v=0;v<7;v++){let O=ce-2+v*.65;G(new ht(.12,.09,.24,12),p,[O,1.52,ie-1]),G(new ht(.125,.125,.025,12),h,[O,1.65,ie-1])}R([1.2,.9,.65],[ce-2.7,1.85,ie-2.8],h),R([.9,.14,.8],[ce-2.7,1.44,ie-2.8],x);for(let v of[1.5,2.25]){R([3,.08,.6],[ce+1.8,v,ie-3.6],d);for(let O=0;O<5;O++)G(new ht(.08,.08,.32,8),O%2?m:x,[ce+.7+O*.45,v+.2,ie-3.6])}for(let v of[-2,0,2])G(new ht(.31,.31,.12,12),d,[ce+v,.75,ie+3.1]),R([.09,.7,.09],[ce+v,.35,ie+3.1],h);D("COFFEE   /   FOOD   /   LOCAL ART",[ce,2.45,ie-3.85],6,"#9bb6a5"),D(ne,[ce,2.85,ie+.7],8),D("OPEN / F",[ce,1.8,ie+.7],3,"#b6dfc8"),i.push({id:L,kind:"stamp",name:ne+"\u3092\u697D\u3057\u3080",x:ce,z:ie+2.8});for(let v of[-6,6])Z(ce+v,ie+4,4),re(ce+v,ie+7)}W("canal-cafe","CANAL COFFEE / \u904B\u6CB3\u30AB\u30D5\u30A7",-273,76,x),W("market-food","GARDEN MARKET / \u30D5\u30FC\u30C9\u5C4B\u53F0",216,76,m),W("workshop-exhibit","MAKERS / \u5DE5\u623F\u30AE\u30E3\u30E9\u30EA\u30FC",-143,-242,h);for(let L=0;L<5;L++){let ne=199+L*6,ce=102;R([4,.15,3],[ne,2.7,ce],L%2?p:m),R([3,.6,1.3],[ne,.8,ce],d);for(let ie of[-1.7,1.7])R([.08,2.7,.08],[ne+ie,1.35,ce+1],h)}for(let L=0;L<4;L++)Z(162+L*12,123,5),re(164+L*12,118);D("GARDEN / FOOD & FLOWERS",[210,4,113],16);for(let L=0;L<5;L++){let ne=199+L*6;for(let ce=0;ce<9;ce++)R([.32,.22,.3],[ne-.9+ce%3*.75,1.22,101.6+Math.floor(ce/3)*.35],ce%2?x:m);R([.12,3.7,.12],[ne,1.85,104],h),R([.3,.22,.3],[ne,3.45,104],y),l.push([ne,104])}for(let L=0;L<24;L++)R([.12,.1,.12],[198+L*1.05,3.45-Math.sin(L/23*Math.PI)*.5,104],y);for(let L=0;L<5;L++){R([2,.2,2],[-163+L*5,.25,-220],u);let ne=G(new ps(.65,.15,48,8),L%2?x:m,[-163+L*5,1.5,-220])}D("NORTH / MAKERS QUARTER",[-150,4,-214],15),a.finish();let oe=new Uint8Array(4096*4);for(let L=0;L<64;L++)for(let ne=0;ne<64;ne++){let ce=(L*64+ne)*4;oe[ce]=oe[ce+1]=oe[ce+2]=255,oe[ce+3]=Math.max(0,Math.pow(Math.max(0,1-Math.hypot((ne-31.5)/32,(L-31.5)/32)),1.7)*255)}let K=new zn(oe,64,64);K.needsUpdate=!0;let k=new Ht(7.2,7.2),fe=new Et({color:16765851,map:K,transparent:!0,opacity:.18,depthWrite:!1,blending:So}),_e=new qe;t.add(_e);for(let[L,ne]of l){let ce=new tt(k,fe);ce.rotation.x=-Math.PI/2,ce.position.set(L,.14,ne),_e.add(ce)}let ge=Array.from({length:4},()=>{let L=new Vt(16764556,0,11,2);return t.add(L),L}),Pe=new qe;Pe.position.set(-210,0,68),t.add(Pe),V([1.9,.55,4],[0,.65,0],m,Pe),V([1.65,.9,2],[0,1.3,0],S,Pe),V([1.9,.12,1.3],[0,1,-1.5],h,Pe),V([1.72,.08,1.5],[0,1.8,0],m,Pe);for(let L of[-1,1])for(let ne of[-1.3,1.3]){let ce=G(new ht(.38,.38,.2,14),h,[L,.4,ne],Pe);ce.rotation.z=Math.PI/2}for(let L of[-.65,.65])V([.35,.14,.1],[L,.85,-2.03],y,Pe);let lt=new gt;for(let[L,ne]of r){let ce=new Xt(new Nt(1,1,1),L,ne.length);for(let ie=0;ie<ne.length;ie++){let E=ne[ie];lt.position.set(...E.pos),lt.scale.set(...E.size),lt.rotation.set(0,E.rot,0),lt.updateMatrix(),ce.setMatrixAt(ie,lt.matrix)}ce.castShadow=!0,ce.receiveShadow=!0,t.add(ce)}let B=new pt,nt=[];for(let L=0;L<1800;L++)nt.push(L*17.123%60-30,L*7.217%28,L*11.197%60-30);B.setAttribute("position",new Qe(nt,3));let ke=new Qn(B,new kn({color:10863821,size:.035,transparent:!0,opacity:.55,depthWrite:!1}));ke.visible=!1,t.add(ke);function Ye(L,ne){return L<-292.2&&L>-308&&ne>-280&&ne<120&&![-230,-58,25,100].some(ce=>Math.abs(ne-ce)<2.5)?!0:n.some(ce=>Math.abs(L-ce.x)<ce.w/2+.3&&Math.abs(ne-ce.z)<ce.d/2+.3)}function De(L,ne,ce,ie,E,v=!1){if(ke.visible=ie==="rain"&&E==="city",ke.visible){ke.position.copy(ce),ke.position.y-=3,ke.rotation.y=ne*.012;let ae=B.attributes.position;for(let z=0;z<ae.count;z++){let H=ae.getY(z)-L*16;H<0&&(H+=28),ae.setY(z,H)}ae.needsUpdate=!0}for(let ae of o)ae.roughness=ie==="rain"?.28:.85;N.position.y=-.055+Math.sin(ne*.4)*.012,$.offset.set(ne*.015,ne*.008),_e.visible=v&&E==="city";let O=l.map(ae=>({p:ae,d:Math.hypot(ae[0]-ce.position.x,ae[1]-ce.position.z)})).sort((ae,z)=>ae.d-z.d);ge.forEach((ae,z)=>{let H=O[z];ae.intensity=v&&E==="city"&&H.d<18?55:0,ae.position.set(H.p[0],2.95,H.p[1])})}let St=[...r].map(([L,ne])=>({color:L.color.toArray(),metal:L.metalness,rough:L.roughness,items:ne}));return{root:t,car:Pe,dynamic:[Pe,N,_e],actions:i,solids:n,blocked:Ye,update:De,places:lp,batchCount:r.size,layout:St}}var Ji=[{id:"tree",name:"\u6A39\u6728",radius:1.1},{id:"planter",name:"\u82B1\u58C7",radius:1.2},{id:"bench",name:"\u30D9\u30F3\u30C1",radius:1.25},{id:"lamp",name:"\u8857\u706F",radius:.4},{id:"art",name:"\u5149\u306E\u5F6B\u523B",radius:1},{id:"pergola",name:"\u30D1\u30FC\u30B4\u30E9",radius:2.3},{id:"fountain",name:"\u5674\u6C34",radius:1.9}],Ar=60;function lu(s){return Array.isArray(s)?s.slice(0,Ar).filter(e=>e&&Ji.some(t=>t.id===e.type)&&[e.x,e.z,e.rotation].every(Number.isFinite)&&Math.abs(e.x)<308&&e.z>-305&&e.z<150).map(e=>({type:e.type,x:e.x,z:e.z,rotation:e.rotation%(2*Math.PI)})):[]}function T_(s,e){return[-285,-210,-150,0,150,210,285].some(t=>Math.abs(s-t)<7)||[-290,-230,-170,-58,25,130].some(t=>Math.abs(e-t)<6.5)}function Yc(s,e,t){let n=Ji.find(i=>i.id===s.type);if(!n||e.length>=Ar||![s.x,s.z,s.rotation].every(Number.isFinite))return!1;for(let i=0;i<12;i++){let r=i*Math.PI/6,o=s.x+Math.cos(r)*n.radius,a=s.z+Math.sin(r)*n.radius;if(Math.abs(o)>308||a<-305||a>150||o<-291||T_(o,a)||t(o,a))return!1}return!t(s.x,s.z)&&!e.some(i=>Math.hypot(i.x-s.x,i.z-s.z)<Ji.find(r=>r.id===i.type).radius+n.radius+.6)}var Ui={x:-300,z:72,exit:[-289,1.72,72]};function qc(s,e){return s<-305||s>-295||e<-276||e>116||[-230,-58,25,100].some(t=>Math.abs(e-t)<5.2)}function mp(s,e,t,n,i){i=Math.min(.1,Math.max(0,i)),e-=n*i*.8*(t<0?-1:1);let r=s.x-Math.sin(e)*t*i*6,o=s.z-Math.cos(e)*t*i*6;return{x:qc(r,s.z)?s.x:r,z:qc(s.x,o)?s.z:o,yaw:e}}function gp(s){let e=new qe;e.name="AURORA / player garden",s.add(e);let t=($,he=0,N=.7)=>new We({color:$,metalness:he,roughness:N}),n=t(8019005),i=t(10724497),r=t(2571072,.6),o=t(5273918),a=t(12879701),l=t(4820120,.6,.15),c=new We({color:16769958,emissive:16764024,emissiveIntensity:1.7}),u=[],h=[],d=[],f=[],g=null,x="",m=!1,p=Array.from({length:2},()=>{let $=new Vt(16766362,0,10,2);return e.add($),$});function S($,he,N,W){let oe=new tt($,he);return oe.position.set(...N),oe.castShadow=oe.receiveShadow=!0,W.add(oe),oe}let y=($,he,N,W)=>S(new Nt(...$),N,he,W);function _($){let he=new qe;if($==="tree"){let N=Xc(he);N.add(0,0,5),N.finish()}if($==="planter"){y([2.1,.5,1.6],[0,.25,0],i,he),y([1.9,.08,1.4],[0,.52,0],o,he);for(let N=0;N<18;N++){let W=N%6*.31-.78,oe=Math.floor(N/6)*.4-.4;S(new Bt(.13,7,5),a,[W,.72+N%3*.08,oe],he)}}if($==="bench"){for(let N of[-.8,.8])y([.12,.5,.6],[N,.25,0],r,he);for(let N=0;N<4;N++)y([2,.09,.12],[0,.55,-.25+N*.16],n,he);for(let N=0;N<3;N++)y([2,.11,.08],[0,.76+N*.15,-.32],n,he)}if($==="lamp"&&(S(new ht(.06,.1,3.6,10),r,[0,1.8,0],he),y([1,.1,.6],[0,3.7,0],r,he),y([.8,.05,.45],[0,3.63,0],c,he)),$==="art"){y([1.3,.22,1.3],[0,.11,0],i,he);let N=S(new ps(.65,.13,64,10),c,[0,1.45,0],he);N.name="turning art"}if($==="pergola"){for(let N of[-1.7,1.7])for(let W of[-1.7,1.7])y([.14,2.8,.14],[N,1.4,W],n,he);for(let N=0;N<10;N++)y([3.9,.12,.15],[0,2.85,-1.8+N*.4],n,he);for(let N of[-1.6,1.6])y([.17,.2,4],[N,2.7,0],n,he)}if($==="fountain"){S(new ht(1.7,1.9,.35,32),i,[0,.18,0],he),S(new ht(1.52,1.52,.03,32),l,[0,.38,0],he),S(new ht(.35,.55,.7,16),i,[0,.65,0],he);let N=S(new ht(.025,.055,1.35,10),l,[0,1.62,0],he);N.name="water jet";let W=new pt;W.setAttribute("position",new Qe(new Float32Array(360*3),3));let oe=new Qn(W,new kn({color:13232615,size:.045,transparent:!0,opacity:.7,depthWrite:!1}));oe.frustumCulled=!1,oe.name="fountain spray",he.add(oe)}if($!=="tree"){let N=new tt(new Ht(4,4),Wc);N.rotation.x=-Math.PI/2,N.position.y=.025,N.name="Contact shadow",he.add(N)}return he}function A(){try{return localStorage.setItem("aurora-garden-v6",JSON.stringify(f)),!0}catch{return!1}}function b(){for(let $ of u)$.removeFromParent(),$.traverse(he=>{he.geometry&&he.geometry.dispose(),(he.material?.userData.groveOwned||he.name==="fountain spray")&&he.material.dispose()});u.length=d.length=0;for(let $ of f){let he=_($.type);he.position.set($.x,.12,$.z),he.rotation.y=$.rotation,e.add(he),u.push(he),he.traverse(N=>{["turning art","water jet","fountain spray"].includes(N.name)&&d.push(N)})}}try{f=lu(JSON.parse(localStorage.getItem("aurora-garden-v6")||"[]"))}catch{}b();function I($,he,N,W){return{type:N,x:Math.round(($.position.x-Math.sin(he)*5)*2)/2,z:Math.round(($.position.z-Math.cos(he)*5)*2)/2,rotation:W}}function C($,he,N){if(!he){g&&(g.visible=!1);return}(!g||x!==$.type)&&(g&&(g.removeFromParent(),g.traverse(W=>{W.geometry?.dispose(),W.material!==Wc&&W.material?.dispose()})),g=_($.type),x=$.type,g.traverse(W=>{if(W.name==="Contact shadow"||W.name==="Tree contact shadows"||W.isPoints){W.visible=!1;return}W.isMesh&&(W.material.userData.groveOwned&&W.material.dispose(),W.material=new Et({color:8841145,transparent:!0,opacity:.4,depthWrite:!1}),W.castShadow=W.receiveShadow=!1)}),s.add(g)),m=Yc($,f,N),g.visible=!0,g.position.set($.x,.12,$.z),g.rotation.y=$.rotation,g.traverse(W=>{W.isMesh&&W.material.color.set(m?8841145:16737877)})}function M(){h.push(f.map($=>({...$}))),h.length>20&&h.shift()}function w($,he){return Yc($,f,he)?(M(),f.push({...$}),b(),{ok:!0,message:A()?`${Ji.find(W=>W.id===$.type).name}\u3092\u914D\u7F6E\u30FB\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002`:"\u914D\u7F6E\u3057\u307E\u3057\u305F\u3002\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u30FC\u3067\u306F\u4FDD\u5B58\u3067\u304D\u306A\u3044\u305F\u3081\u518D\u8AAD\u307F\u8FBC\u307F\u3067\u6D88\u3048\u307E\u3059\u3002"}):{ok:!1,message:f.length>=Ar?"\u914D\u7F6E\u4E0A\u965060\u500B\u3067\u3059\u3002":"\u9053\u8DEF\u30FB\u6C34\u9762\u30FB\u5EFA\u7269\u30FB\u4ED6\u306E\u5BB6\u5177\u3092\u907F\u3051\u3001\u7DD1\u306E\u4F4D\u7F6E\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\u3002"}}function R($,he){let N=-1,W=8;for(let oe=0;oe<f.length;oe++){let K=Math.hypot(f[oe].x-$,f[oe].z-he);K<W&&(W=K,N=oe)}return N<0?"8m\u4EE5\u5185\u306B\u81EA\u5206\u304C\u914D\u7F6E\u3057\u305F\u7269\u304C\u3042\u308A\u307E\u305B\u3093\u3002":(M(),f.splice(N,1),b(),A()?"\u8FD1\u304F\u306E\u914D\u7F6E\u7269\u3092\u64A4\u53BB\u3057\u307E\u3057\u305F\u3002":"\u64A4\u53BB\u3057\u307E\u3057\u305F\u304C\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002")}function G(){return h.length?(f=h.pop(),b(),A()?"\u3072\u3068\u3064\u524D\u306E\u914D\u7F6E\u306B\u623B\u3057\u307E\u3057\u305F\u3002":"\u914D\u7F6E\u3092\u623B\u3057\u307E\u3057\u305F\u304C\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002"):"\u623B\u305B\u308B\u7DE8\u96C6\u304C\u3042\u308A\u307E\u305B\u3093\u3002"}function V($,he){let N=lu($);if(!Array.isArray($)||N.length!==$.length)return"\u914D\u7F6E\u30C7\u30FC\u30BF\u304C\u4E0D\u6B63\u304B\u300160\u500B\u306E\u4E0A\u9650\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002";let W=[];for(let oe of N){if(!Yc(oe,W,he))return"\u9053\u8DEF\u30FB\u5EFA\u7269\u30FB\u914D\u7F6E\u7269\u3068\u306E\u91CD\u306A\u308A\u304C\u3042\u308B\u305F\u3081\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002";W.push(oe)}return M(),f=N,b(),A()?"\u914D\u7F6E\u3092\u8AAD\u307F\u8FBC\u307F\u30FB\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002\u5143\u306B\u623B\u3059\u64CD\u4F5C\u3082\u4F7F\u3048\u307E\u3059\u3002":"\u914D\u7F6E\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F\u304C\u30D6\u30E9\u30A6\u30B6\u30FC\u3078\u306E\u4FDD\u5B58\u306F\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002"}function q($,he){return f.some(N=>{if(N.type==="pergola")return!1;let W=N.type==="tree"?.35:Ji.find(oe=>oe.id===N.type).radius;return Math.hypot($-N.x,he-N.z)<W+.25})}let D=new qe;D.position.set(Ui.x,.12,Ui.z),e.add(D),S(new ht(1,1,.65,6),t(14276543,.3),[0,.1,0],D).scale.set(1,1,2.5),y([1.4,.12,3.8],[0,.5,0],n,D),y([1.2,.6,.55],[0,.8,1.1],r,D),y([1.15,.45,.5],[0,.7,-.1],r,D),y([1.7,.12,2],[0,1.9,.3],i,D);for(let $ of[-.75,.75])y([.06,1.4,.06],[$,1.2,.9],r,D);let re=new qe;e.add(re),y([5,.22,6],[-291.5,.1,72],n,re);for(let $ of[69.3,74.7])y([.18,1.6,.18],[-293.5,.2,$],r,re);let j=S(new Ht(1.7,5),new Et({color:12969178,transparent:!0,opacity:.18,depthWrite:!1}),[0,-.08,3.9],D);j.rotation.x=-Math.PI/2,j.visible=!1;function U($,he,N,W,oe=!1,K="city"){for(let fe of d)if(fe.name==="turning art"&&(fe.rotation.y=$*.35),fe.name==="water jet"&&(fe.scale.y=.95+Math.sin($*4)*.05),fe.name==="fountain spray"){let _e=fe.geometry.attributes.position;for(let ge=0;ge<_e.count;ge++){let Pe=(ge/_e.count+$*.55)%1,lt=ge*2.399,B=Pe*(.4+ge%7*.12);_e.setXYZ(ge,Math.cos(lt)*B,1+3*Pe-3.6*Pe*Pe,Math.sin(lt)*B)}_e.needsUpdate=!0}D.position.y=.12+Math.sin($*1.6)*.035,D.rotation.z=Math.sin($)*.012,j.visible=he&&!!N;let k=W?f.filter(fe=>fe.type==="lamp").sort((fe,_e)=>Math.hypot(fe.x-W.position.x,fe.z-W.position.z)-Math.hypot(_e.x-W.position.x,_e.z-W.position.z)):[];p.forEach((fe,_e)=>{let ge=k[_e];fe.intensity=ge&&oe&&K==="city"&&Math.hypot(ge.x-W.position.x,ge.z-W.position.z)<18?60:0,ge&&fe.position.set(ge.x,3.6,ge.z)})}function te(){return f.filter($=>$.type==="bench").map($=>({id:"user-bench",kind:"seat",name:"\u81EA\u5206\u306E\u30D9\u30F3\u30C1\u3067\u4F11\u3080",x:$.x,z:$.z,sit:[$.x,1.15,$.z],exit:[$.x+1.9*Math.cos($.rotation),1.72,$.z-1.9*Math.sin($.rotation)],yaw:Math.PI+$.rotation}))}return{root:e,boat:D,blocked:q,preview:C,place:w,remove:R,restore:G,load:V,candidate:I,update:U,get actions(){return te()},get items(){return f},get valid(){return m}}}function xp(){return{y:0,v:0,grounded:!0,reset:!0}}function _p(s,e){return!s.grounded||s.reset?!1:(s.v=e==="planet"?5.8:6.8,s.grounded=!1,!0)}function yp(s,e,t,n){if(e=Math.min(.1,Math.max(0,e)),s.reset)return s.y=t,s.v=0,s.grounded=!0,s.reset=!1,s;if(s.grounded&&Math.abs(s.y-t)<.4)return s.y=t,s;s.grounded&&s.y-t>=.4&&(s.grounded=!1,s.v=0);let i=n==="planet"?8:n==="machine"?14:18;return s.y+=s.v*e-.5*i*e*e,s.v-=i*e,s.y<=t&&(s.y=t,s.v=0,s.grounded=!0),s}var hu=[{id:0,x:-35,z:-48,name:"\u51B7\u5374\u7089"},{id:1,x:62,z:-30,name:"\u52D5\u529B\u7089"},{id:2,x:35,z:65,name:"\u901A\u4FE1\u7089"}],vp=[[-105,25],[-82,-15],[-50,26],[-35,-32],[8,-50],[46,-50],[76,-5],[48,48],[10,67]];function uu(s){let e={cells:[],defeated:[],reactors:[],claimed:!1};if(s&&typeof s=="object"){for(let[t,n]of[["cells",9],["defeated",6],["reactors",3]])e[t]=[...new Set(Array.isArray(s[t])?s[t].filter(i=>Number.isInteger(i)&&i>=0&&i<n):[])];e.claimed=!!s.claimed&&e.reactors.length===3}return e}var Kc=s=>s.cells.length-s.reactors.length;function Mp(s,e){return!Number.isInteger(e)||e<0||e>2?"\u3053\u306E\u88C5\u7F6E\u306F\u4FEE\u5FA9\u5BFE\u8C61\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002":s.reactors.includes(e)?"\u3053\u306E\u7089\u306F\u5FA9\u65E7\u6E08\u307F\u3067\u3059\u3002":!s.defeated.includes(e*2)||!s.defeated.includes(e*2+1)?"\u5468\u8FBA\u306E\u6545\u969C\u30C9\u30ED\u30FC\u30F32\u6A5F\u3092\u30D1\u30EB\u30B9\u3067\u505C\u6B62\u3057\u3066\u304F\u3060\u3055\u3044\u3002":Kc(s)<1?"\u4FEE\u5FA9\u90E8\u54C1\u304C1\u500B\u5FC5\u8981\u3067\u3059\u3002\u5149\u308B\u90E8\u54C1\u3078\u30B8\u30E3\u30F3\u30D7\u3057\u3066\u96C6\u3081\u3066\u304F\u3060\u3055\u3044\u3002":(s.reactors.push(e),`${hu[e].name}\u3092\u5FA9\u65E7\u3057\u307E\u3057\u305F\uFF01 ${s.reactors.length}/3${s.reactors.length===3?" \u4E2D\u592E\u30A2\u30FC\u30AB\u30A4\u30D6\u304C\u958B\u304D\u307E\u3057\u305F\u3002":""}`)}function du(s,e,t,n){let i=null,r=24;for(let o of t){if(o.disabled)continue;let a=o.x-s.x,l=o.y-s.y,c=o.z-s.z,u=a*e.x+l*e.y+c*e.z,h=o.radius||1.1;if(u<0||u>r||a*a+l*l+c*c-u*u>h*h)continue;let d=!1;for(let f=.6;f<u-.5;f+=.4)if(n(s.x+e.x*f,s.z+e.z*f,s.y+e.y*f)){d=!0;break}d||(i=o,r=u)}return i}function Sp(s,e,t,n="city"){let i=String(e).slice(0,240),r=t?.reactors?.length||0,o=t?.cells?.length||0;return/ジャンプ|部品|操作/.test(i)?"Space\u3067\u30B8\u30E3\u30F3\u30D7\u3001J\u307E\u305F\u306F\u77ED\u3044\u5DE6\u30AF\u30EA\u30C3\u30AF\u3067\u30D1\u30EB\u30B9\u3067\u3059\u3002NEXUS-9\u306E\u5149\u308B\u90E8\u54C1\u306F\u5C11\u3057\u9AD8\u3044\u306E\u3067\u3001\u8FD1\u3065\u3044\u3066\u8DF3\u3093\u3067\u307F\u3066\u304F\u3060\u3055\u3044\u3002\u30C9\u30ED\u30FC\u30F3\u8996\u70B9\u3067\u306FSpace\u304C\u4E0A\u6607\u3067\u3059\u3002":/旅|行き|鉄道|惑星|宇宙/.test(i)?"\u9280\u6CB3\u9244\u9053\u306FAURORA \u2192 LUMEN \u2192 NEXUS-9\u3068\u7D9A\u304D\u307E\u3059\u3002LUMEN\u306E\u99C5\u3067\u300C\u6A5F\u68B0\u60D1\u661F NEXUS-9\u300D\u3092\u9078\u3093\u3067F\u3067\u4E57\u8ECA\u3002\u5E30\u308A\u3082\u99C5\u3067\u884C\u304D\u5148\u3092\u9078\u3079\u307E\u3059\u3002\u30B9\u30AD\u30C3\u30D7\u3082\u4F7F\u3048\u307E\u3059\u3002":/仕事|任務|修理|何を|進捗/.test(i)?n==="machine"?`\u4FEE\u5FA9\u90E8\u54C1\u3092\u96C6\u3081\u3001\u5404\u7089\u306E\u6545\u969C\u30C9\u30ED\u30FC\u30F32\u6A5F\u3092\u505C\u6B62\u3057\u3001\u7089\u306E\u7AEF\u672B\u3067F\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u73FE\u5728\u306F\u90E8\u54C1${o}\u500B\u3001\u7089${r}/3\u3067\u3059\u30023\u57FA\u3068\u3082\u5FA9\u65E7\u3057\u305F\u3089\u4E2D\u592E\u30A2\u30FC\u30AB\u30A4\u30D6\u3078\u3002`:"\u8857\u3067\u306F\u5E97\u5DE1\u308A\u3084\u5EAD\u3065\u304F\u308A\u304C\u3067\u304D\u307E\u3059\u3002\u9280\u6CB3\u9244\u9053\u306E\u5148\u3067\u306F\u3001LUMEN\u306E\u63A2\u67FB\u3068NEXUS-9\u306E\u52D5\u529B\u7089\u5FA9\u65E7\u304C\u5F85\u3063\u3066\u3044\u307E\u3059\u3002":/ここ|場所|あなた|名前/.test(i)?n==="machine"?`${s}\u3067\u3059\u3002\u3053\u3053\u306F\u60D1\u661F\u898F\u6A21\u306E\u6A5F\u68B0\u90FD\u5E02NEXUS-9\u3002\u5730\u6BBB\u307E\u3067\u91D1\u5C5E\u306E\u30D1\u30CD\u30EB\u3068\u56DE\u8DEF\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u79C1\u305F\u3061\u6A5F\u68B0\u4EBA\u304C\u8A2D\u5099\u3092\u4FDD\u5B88\u3057\u3066\u3044\u307E\u3059\u3002`:n==="planet"?`${s}\u3067\u3059\u3002LUMEN\u306E\u89B3\u6E2C\u57FA\u5730\u3067\u7D50\u6676\u3084\u53E4\u4EE3\u306E\u661F\u56F3\u3092\u8ABF\u3079\u3066\u3044\u307E\u3059\u3002\u99C5\u306E\u5148\u306B\u306F\u6A5F\u68B0\u306E\u60D1\u661F\u3082\u3042\u308B\u305D\u3046\u3067\u3059\u3088\u3002`:`${s}\u3067\u3059\u3002\u3053\u306E\u8857\u306F\u6B69\u304F\u3060\u3051\u3067\u306A\u304F\u3001\u96FB\u8ECA\u3001\u8ECA\u3001\u30DC\u30FC\u30C8\u3001\u5EAD\u3065\u304F\u308A\u3082\u697D\u3057\u3081\u307E\u3059\u3002\u6C17\u306B\u306A\u308B\u5834\u6240\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F`:n==="machine"&&r===3?"\u8857\u306E\u52D5\u529B\u304C\u623B\u308A\u307E\u3057\u305F\uFF01\u4E2D\u592E\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u8A18\u9332\u3092\u53D7\u3051\u53D6\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u6A5F\u68B0\u306E\u661F\u306B\u3082\u3001\u8AB0\u304B\u3092\u5F85\u3064\u6642\u9593\u306F\u3042\u308B\u3093\u3067\u3059\u3088\u3002":n==="machine"?"\u91D1\u5C5E\u306E\u8DB3\u97F3\u306B\u3082\u3001\u305D\u308C\u305E\u308C\u9055\u3046\u30EA\u30BA\u30E0\u304C\u3042\u308A\u307E\u3059\u3002\u79C1\u306F\u51B7\u5374\u30D5\u30A1\u30F3\u306E\u97F3\u3092\u8074\u304F\u306E\u304C\u597D\u304D\u3067\u3059\u3002\u65C5\u306E\u3053\u3068\u3001\u4FEE\u7406\u306E\u4ED5\u4E8B\u3001\u30B8\u30E3\u30F3\u30D7\u306E\u64CD\u4F5C\u306A\u3089\u6848\u5185\u3067\u304D\u307E\u3059\u3002":n==="planet"?"\u591C\u306E\u7D50\u6676\u306F\u663C\u3068\u9055\u3046\u8272\u306B\u898B\u3048\u307E\u3059\u3002\u6B21\u306F\u3042\u306E\u661F\u307E\u3067\u7DDA\u8DEF\u304C\u7D9A\u304F\u3068\u601D\u3046\u3068\u3001\u5C11\u3057\u308F\u304F\u308F\u304F\u3057\u307E\u3059\u306D\u3002":"\u904B\u6CB3\u306E\u5915\u666F\u304C\u304A\u3059\u3059\u3081\u3067\u3059\u3002\u81EA\u5206\u3067\u7F6E\u3044\u305F\u30D9\u30F3\u30C1\u304B\u3089\u773A\u3081\u308B\u3068\u3001\u8857\u304C\u5C11\u3057\u81EA\u5206\u306E\u5834\u6240\u306B\u306A\u3063\u305F\u6C17\u304C\u3057\u307E\u3059\u3002"}function wp(s){let e=new qe;e.name="NEXUS-9 / mechanical planet",s.add(e);let t=new qe;t.position.set(Pt.x,0,Pt.z),e.add(t);let n=[],i=[],r=[],o=[],a=[],l=[],c=new Map,u=(N,W=.7,oe=.4)=>new We({color:N,metalness:W,roughness:oe}),h=u(5990771),d=u(1450799),f=u(10201513),g=u(10714959),x=u(725015),m=new We({color:5760237,emissive:1684944,emissiveIntensity:1.7,metalness:.6,roughness:.25}),p=new We({color:16758632,emissive:16742707,emissiveIntensity:1.3}),S=new We({color:14112583,emissive:12921900,emissiveIntensity:1});function y(N,W,oe,K=t){let k=new tt(N,W);return k.position.set(...oe),k.castShadow=k.receiveShadow=!0,K.add(k),k}function _(N,W,oe,K){if(K)return y(new Nt(...N),oe,W,K);let k=c.get(oe);k||(k=[],c.set(oe,k)),k.push({size:N,pos:W})}function A(N,W,oe,K,k=20){n.push({x:N,z:W,w:oe,d:K,h:k})}function b(N,W,oe=6,K=t){let k=document.createElement("canvas");k.width=1024,k.height=128;let fe=k.getContext("2d");fe.fillStyle="#08151f",fe.fillRect(0,0,1024,128),fe.fillStyle="#9df2f1",fe.font="600 48px sans-serif",fe.textAlign="center",fe.textBaseline="middle",fe.fillText(N,512,64,990);let _e=new en(k);return _e.colorSpace=yt,y(new Ht(oe,oe/8),new Et({map:_e,side:zt}),W,K)}let I=u(4739932,.8,.56);I.onBeforeCompile=N=>{N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
varying vec3 mechN;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
mechN=normal;`),N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 mechN;`).replace("#include <color_fragment>",`#include <color_fragment>
 vec2 grid=vec2(atan(mechN.z,mechN.x)*30.,asin(clamp(mechN.y,-1.,1.))*46.);
 vec2 cell=fract(grid);float edge=step(.035,cell.x)*step(.035,cell.y);
 float shade=.52+.4*fract(sin(dot(floor(grid),vec2(12.9898,78.233)))*43758.5453);
 diffuseColor.rgb*=mix(.17,shade,edge);
 if(abs(mechN.y)<.016)diffuseColor.rgb=vec3(.015,.035,.05);
 `)};let C=y(new Bt(1600,80,56),I,[Pt.x,-1608,Pt.z],e);C.castShadow=!1;let M=y(new tn(1602,4,6,160),m,[Pt.x,-1608,Pt.z],e);M.rotation.x=Math.PI/2;let w=y(new Bt(260,40,20,0,Math.PI*2,0,.5),x,[Pt.x-780,-650,Pt.z+1110],e);w.rotation.z=.6,y(new ht(210,210,.4,96),d,[0,-.3,0]);for(let N=-195;N<=195;N+=15)for(let W=-195;W<=195;W+=15)Math.hypot(N,W)<198&&(_([14.7,.08,14.7],[N,-.04,W],(N+W)/15%3===0?h:d),_([.1,.025,13],[N-7,.018,W],x),(N+W)%45===0&&_([8,.025,.08],[N,.022,W-5],m));for(let N=0;N<80;N++){let W=N*Math.PI*2/80,oe=Math.cos(W)*202,K=Math.sin(W)*202;if(_([.2,1.5,.2],[oe,.75,K],f),N%2===0){let k=y(new Nt(12,24+N%5*9,14),h,[Math.cos(W)*245,12+N%5*4.5,Math.sin(W)*245]);k.rotation.y=-W}}for(let N=-136;N<90;N+=8){_([6,.04,10],[N,.045,5],h);for(let W of[-.2,10.2])_([5,.04,.08],[N,.07,W],m)}let R=new qe;R.position.set(-140,0,0),t.add(R),_([7,.32,39],[9,.16,0],h,R),_([8,.2,41],[9,5.5,0],d,R);for(let N of[-17,-8,1,10,18])_([.2,5.4,.2],[12.6,2.7,N],f,R);b("NEXUS-9 / MACHINE PORT",[9,4.1,18.7],7,R),b("LUMEN \u2190 RETURN",[9,3.2,18.7],6,R);let G=new Vt(6802396,90,24,2);G.position.set(-131,4,0),t.add(G);for(let[N,W]of[[-88,-45,18],[-78,60,26],[-5,-100,30],[85,80,40],[110,-80,55]].entries()){let[oe,K,k]=W;_([26,k,22],[oe,k/2,K],N%2?h:d),A(oe,K,26,22,k);for(let ge=3;ge<k;ge+=4){_([26.2,.14,.15],[oe,ge,K+11.1],f);for(let Pe=0;Pe<5;Pe++)_([3.4,1.2,.1],[oe-10+Pe*5,ge+1.5,K+11.16],N%2?p:m)}for(let ge of[-1,1])_([.6,k+.5,.7],[oe+ge*12,k/2,K+11.4],g);for(let ge=0;ge<5;ge++)_([1.1,.35,16],[oe-8+ge*4,k+.2,K],f);let fe=y(new tn(3,.18,6,24),f,[oe,k+.6,K]);fe.rotation.x=Math.PI/2;let _e=new qe;_e.position.set(oe,k+.5,K),t.add(_e);for(let ge=0;ge<4;ge++){let Pe=y(new Nt(2.8,.08,.8),h,[0,0,0],_e);Pe.rotation.y=ge*Math.PI/2,Pe.position.set(Math.cos(ge*Math.PI/2)*1.3,0,Math.sin(ge*Math.PI/2)*1.3)}l.push(_e)}_([30,.22,25],[0,.11,4],f),_([30,.25,25],[0,7,4],d);for(let[N,W,oe,K]of[[-15,4,.4,25],[15,4,.4,25],[0,-8.5,30,.4]])_([oe,7,K],[N,3.5,W],h),A(N,W,oe,K,7);let V=y(new Nt(26,5,.22),d,[0,2.5,16.5]);b("CENTRAL ARCHIVE / 3 REACTORS",[0,5.8,16.7],25);let q=y(new Yi(1.6),m,[0,3,4]),D=[];for(let N of[2.7,3.6]){let W=y(new tn(N,.06,6,64),g,[0,3,4]);D.push(W)}for(let N of hu){let W=new qe;W.position.set(N.x,0,N.z),t.add(W),y(new ht(3.2,4,.5,20),f,[0,.25,0],W);let oe=y(new ht(1.5,1.5,7,16),p.clone(),[0,3.8,0],W);for(let K of[1,3,5,7]){let k=y(new tn(2,.13,6,32),h,[0,K,0],W);k.rotation.x=Math.PI/2}for(let K=0;K<5;K++){let k=K*Math.PI*2/5;_([.3,7,.3],[N.x+Math.cos(k)*2.6,3.5,N.z+Math.sin(k)*2.6],h)}_([2,1.2,1],[N.x,1,N.z+5.5],d),b(`${N.id+1} / ${N.name} / F`,[N.x,2.4,N.z+5.6],7),A(N.x,N.z,7,7,8),A(N.x,N.z+5.5,2,1,1.6),a.push({...N,core:oe});for(let K=0;K<2;K++){let k=N.id*2+K,fe=new qe;fe.position.set(N.x+(K?10:-10),2.3,N.z+6),t.add(fe),y(new Bt(.8,12,8),h,[0,0,0],fe).scale.set(1.15,.7,1),y(new Bt(.23,10,8),S,[0,0,.72],fe);for(let ge of[-1,1]){_([1.1,.15,.7],[ge*1.1,0,0],d,fe);let Pe=y(new tn(.38,.06,5,16),m,[ge*1.2,-.12,0],fe);Pe.rotation.x=Math.PI/2}r.push({id:k,ob:fe,home:fe.position.clone(),hp:3,cooldown:1.5+K,down:!1,flash:0})}}vp.forEach(([N,W],oe)=>{let K=y(new Yi(.38),m,[N,3.05,W]);y(new ht(.4,.55,.2,12),h,[N,.12,W]),o.push({id:oe,ob:K,x:N,z:W})});for(let[N,W,oe]of[[-101,25,.65],[-97,25,1.2],[-48,30,.7],[-44,30,1.3],[-30,-32,.8],[5,42,1.15]])_([2.4,oe,2.4],[N,oe/2,W],h),_([2.2,.05,2.2],[N,oe+.025,W],g),A(N,W,2.4,2.4,oe+.05);for(let[N,W]of[[-120,-65],[-120,70],[100,30],[55,-120],[-60,105]]){for(let oe=0;oe<3;oe++){let K=y(new ht(1.6,1.6,5.5,14),f,[N+oe*4,2.75,W]);y(new tn(1.64,.08,6,24),g,[N+oe*4,4.6,W]).rotation.x=Math.PI/2,A(N+oe*4,W,3.4,3.4,6)}_([12,.5,.5],[N+4,1.1,W+2],g)}function Z(N,W,oe,K,k,fe=!1){let _e=new qe;_e.position.set(K,0,k),t.add(_e),y(new ht(.43,.35,.65,8),h,[0,1.2,0],_e),_([.55,.38,.45],[0,1.78,0],f,_e),_([.43,.08,.04],[0,1.82,.25],m,_e),_([.45,.18,.35],[0,.82,0],g,_e);let ge=[],Pe=[];for(let B of[-1,1]){let nt=new qe;nt.position.set(B*.21,.78,0),_e.add(nt),_([.17,.6,.18],[0,-.3,0],h,nt),_([.22,.14,.38],[0,-.67,.09],d,nt),ge.push(nt);let ke=new qe;ke.position.set(B*.5,1.45,0),_e.add(ke),_([.15,.65,.16],[0,-.3,0],f,ke),y(new Bt(.12,8,6),g,[0,-.65,0],ke),Pe.push(ke)}let lt=_e.children[1];i.push({id:N,name:W,role:oe,ob:_e,legs:ge,arms:Pe,head:lt,home:new P(K,0,k),patrol:fe,world:"machine"})}Z("guide","\u6848\u5185\u6A5F ORI","\u661F\u6E2F\u306E\u6848\u5185\u6A5F",-117,12),Z("engineer","\u6574\u5099\u58EB BOLT","\u52D5\u529B\u7089\u306E\u6574\u5099\u58EB",-62,20),Z("archivist","\u53F8\u66F8 MNEME","\u8A18\u61B6\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u53F8\u66F8",18,22),Z("courier","\u914D\u9054\u6A5F PIP","\u90E8\u54C1\u306E\u914D\u9054\u54E1",-95,22,!0),Z("welder","\u6EB6\u63A5\u6A5F ARC","\u914D\u7BA1\u306E\u6280\u5E2B",-40,40,!0),Z("signal","\u901A\u4FE1\u58EB SIGNAL","\u901A\u4FE1\u7089\u306E\u62C5\u5F53",70,35,!0),Z("watch","\u5DE1\u56DE\u6A5F HEX","\u4FDD\u5B88\u5DE1\u56DE\u54E1",105,5,!0),Z("gate","\u9580\u885B KEEPER","\u4E2D\u592E\u533A\u306E\u9580\u885B",-25,15);for(let N=0;N<28;N++){let W=-180+N*13;_([8,.12,1],[W,.09,-135],x);for(let oe=0;oe<8;oe++)_([.15,.15,.9],[W-3.5+oe,.16,-135],f)}for(let N of[-125,125])for(let W=-125;W<125;W+=10)_([9,.6,.6],[W,.7,N],g),_([.2,1.2,1.5],[W-4,.6,N],h);b("REPAIR DISTRICT \u2192",[-105,3.5,32],14),b("NEXUS-9 / A WORLD OF MACHINES",[-70,7,89],38);let re=new gt;for(let[N,W]of c){let oe=new Xt(new Nt(1,1,1),N,W.length);W.forEach((K,k)=>{re.position.set(...K.pos),re.scale.set(...K.size),re.rotation.set(0,0,0),re.updateMatrix(),oe.setMatrixAt(k,re.matrix)}),oe.castShadow=oe.receiveShadow=!0,t.add(oe)}let j=new ui(Zf.map(N=>new P(...N)),!1,"centripetal");for(let N of[-1,1]){let W=Array.from({length:501},(oe,K)=>{let k=j.getPoint(K/500),fe=j.getTangent(K/500);return k.addScaledVector(new P(-fe.z,0,fe.x).normalize(),N*1.32)});y(new ms(new ui(W),850,.075,5,!1),m,[0,0,0],e)}let U=new Xt(new Nt(3.7,.12,.4),d,450);for(let N=0;N<450;N++){let W=j.getPoint(N/449),oe=j.getTangent(N/449);re.position.copy(W),re.scale.set(1,1,1),re.lookAt(W.clone().add(oe)),re.updateMatrix(),U.setMatrixAt(N,re.matrix)}e.add(U);function te(N,W,oe=0,K){return N-=Pt.x,W-=Pt.z,Math.hypot(N,W)>197||n.some(k=>oe<k.h&&Math.abs(N-k.x)<k.w/2+.3&&Math.abs(W-k.z)<k.d/2+.3)?!0:(!K||K.reactors.length<3)&&Math.abs(N)<13.5&&Math.abs(W-16.5)<.55}function $(N,W,oe,K){for(let[k,fe]of i.entries())K!==fe&&(fe.patrol?(fe.ob.position.x=fe.home.x+Math.sin(W*.18+k)*4,fe.ob.position.z=fe.home.z+Math.cos(W*.18+k)*3,fe.ob.rotation.y=Math.atan2(Math.cos(W*.18+k)*4,-Math.sin(W*.18+k)*3),fe.legs.forEach((_e,ge)=>_e.rotation.x=Math.sin(W*4+k+ge*Math.PI)*.32),fe.arms.forEach((_e,ge)=>_e.rotation.x=-Math.sin(W*4+k+ge*Math.PI)*.2)):fe.arms[0].rotation.z=Math.sin(W*.7+k)*.08);for(let k of r)k.down=oe.defeated.includes(k.id),k.ob.visible=!k.down,k.down||(k.ob.position.y=2.3+Math.sin(W*2+k.id)*.22,k.ob.rotation.y=W*.4);for(let k of o)k.ob.visible=!oe.cells.includes(k.id),k.ob.rotation.y=W*1.6,k.ob.position.y=3.05+Math.sin(W*2+k.id)*.12;a.forEach(k=>{let fe=oe.reactors.includes(k.id);k.core.material.color.set(fe?3857606:16753766),k.core.material.emissive.set(fe?1358256:14509102)}),V.position.y=oe.reactors.length===3?8:2.5,q.rotation.y=W*.5,D.forEach((k,fe)=>k.rotation.set(W*.25*(fe+1),W*.14,.6)),l.forEach(k=>k.rotation.y=W*1.5)}function he(N,W,oe=0){N-=Pt.x,W-=Pt.z;let K=0;for(let k of n)k.h<2.5&&oe>=k.h-.08&&Math.abs(N-k.x)<k.w/2+.25&&Math.abs(W-k.z)<k.d/2+.25&&(K=Math.max(K,k.h));return K}return{root:e,ground:t,curve:j,globe:C,robots:i,drones:r,cells:o,reactors:a,archive:q,colliders:n,blocked:te,floorHeight:he,update:$,dynamic:[...l,...i.map(N=>N.ob),...r.map(N=>N.ob),...o.map(N=>N.ob),...a.map(N=>N.core),q,V,...D]}}function bp(s,e,t,n){let i=new qe;i.name="Pulse training and adventure effects",s.add(i);let r=[],o=[],a=-10,l=-10,c=100,u=0,h=new Et({color:8713215}),d=new We({color:13937254,metalness:.5,roughness:.35});for(let p=0;p<3;p++){let S=new qe;S.position.set(-150+p*4,1.8,-216),i.add(S);for(let[_,A,b]of[[.85,d,0],[.58,h,.025],[.28,d,.05]]){let I=new tt(new fs(_,24),A);I.position.z=b,S.add(I)}let y=new tt(new ht(.06,.09,1.4,8),d);y.position.y=-1.1,S.add(y),r.push({id:p,ob:S,hp:3,resetAt:0})}function f(p,S,y=8779007){let _=new pt().setFromPoints([p,S]),A=new qi({color:y,transparent:!0,opacity:.95}),b=new Ei(_,A);i.add(b),o.push({o:b,life:.18})}function g(p,S,y,_,A=[]){if(y-a<.32)return null;a=y;let b=p.position.clone(),I=p.getWorldDirection(new P),C=[];if(S==="city")for(let V of r)V.hp>0&&C.push({x:V.ob.position.x,y:1.8,z:-216,radius:.9,type:"training",data:V});if(S==="machine")for(let V of e.drones)t.defeated.includes(V.id)||C.push({x:Pt.x+V.ob.position.x,y:V.ob.position.y,z:Pt.z+V.ob.position.z,radius:1.1,type:"drone",data:V});let M=du(b,I,C,_),w=24;for(let V=.6;V<24;V+=.4)if(_(b.x+I.x*V,b.z+I.z*V,b.y+I.y*V)){w=V;break}if(M&&(w=Math.hypot(M.x-b.x,M.y-b.y,M.z-b.z)),f(b.clone().addScaledVector(I,.6).add(new P(.15,-.13,0)),b.clone().addScaledVector(I,w)),M){let V=M.data;return V.hp--,V.hp<=0?M.type==="drone"?(t.defeated.push(V.id),n(),`\u6545\u969C\u30C9\u30ED\u30FC\u30F3\u3092\u505C\u6B62 ${t.defeated.length}/6`):(V.resetAt=y+6,V.ob.visible=!1,u++,`\u8A13\u7DF4\u30BF\u30FC\u30B2\u30C3\u30C8\u505C\u6B62\uFF01 \u30B9\u30B3\u30A2 ${u} \xB7 6\u79D2\u5F8C\u306B\u5FA9\u5E30`):(V.ob.scale.setScalar(.85),`\u547D\u4E2D\uFF01 \u3042\u3068${V.hp}\u767A`)}let R=A.map(V=>{let q=V.ob.getWorldPosition(new P);return{x:q.x,y:q.y+1.1,z:q.z,radius:.65,data:V}}),G=du(b,I,R,_);return G?(G.data.stunUntil=y+.6,"\u300C\u3073\u3063\u304F\u308A\u3057\u305F\uFF01 \u8A71\u304C\u3042\u308B\u306A\u3089C\u3067\u3069\u3046\u305E\u3002\u300D"):""}function x(p,S,y,_,A){for(let b=o.length-1;b>=0;b--){let I=o[b];I.life-=p,I.o.material.opacity=Math.max(0,I.life/.18),I.life<=0&&(I.o.removeFromParent(),I.o.geometry.dispose(),I.o.material.dispose(),o.splice(b,1))}for(let b of r)b.hp<=0&&S>=b.resetAt&&(b.hp=3,b.ob.visible=!0),b.ob.scale.lerp(new P(1,1,1),Math.min(1,p*8));for(let b of e.drones)b.ob.scale.lerp(new P(1,1,1),Math.min(1,p*8));if(!A||(S-l>8&&(c=Math.min(100,c+p*5)),y!=="machine"))return null;for(let b of e.drones){if(t.defeated.includes(b.id))continue;b.cooldown-=p;let I=b.ob.getWorldPosition(new P);if(Math.hypot(I.x-_.x,I.z-_.z)<17&&b.cooldown<=0){let M=!1;for(let w=.1;w<1;w+=.1)if(e.blocked(I.x+(_.x-I.x)*w,I.z+(_.z-I.z)*w,I.y+(_.y-.2-I.y)*w,t)){M=!0;break}if(M)continue;f(I,new P(_.x,_.y-.2,_.z),16746600),c=Math.max(0,c-12),l=S,b.cooldown=2.2}}return c<=0?(c=100,l=S,"respawn"):null}function m(){c=100}return{root:i,training:r,attack:g,update:x,resetShield:m,get shield(){return Math.ceil(c)},get score(){return u}}}async function E_(){let s=F=>document.getElementById(F),e=window.CITY_ASSETS,t=e.meta,n=F=>Uint8Array.from(atob(F),X=>X.charCodeAt(0)),i=new Lc({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});i.setPixelRatio(Math.min(devicePixelRatio,1.1)),i.setSize(innerWidth,innerHeight),i.shadowMap.enabled=!0,i.shadowMap.type=Fa,i.localClippingEnabled=!0,i.toneMapping=Wa,i.toneMappingExposure=1,document.body.prepend(i.domElement);let r=new to;r.fog=new eo(11056315,.003);let o=new Kt(67,innerWidth/innerHeight,.12,24e3);o.rotation.order="YXZ",o.position.fromArray(t.spawn);let a=-.13,l=.055,c=!1,u=!1,h=new Set,d=new xo(12703469,6710108,1.7);r.add(d);let f=new vs(16769726,2.8);f.position.set(-50,110,25),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),Object.assign(f.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:5,far:250}),f.shadow.normalBias=.035,f.shadow.bias=-12e-5,r.add(f,f.target);let g=new Bc().parse(n(e.sky).buffer),x=new zn(g.data,g.width,g.height,Tn,g.type);x.mapping=ur,x.needsUpdate=!0;let m=new vr(i);r.environment=m.fromEquirectangular(x).texture,r.background=x,r.backgroundIntensity=.75,r.environmentIntensity=.7;let p=new xs;function S(F){let X=p.load("data:image/jpeg;base64,"+e[F]);return X.wrapS=X.wrapT=hn,X.anisotropy=8,X}let y=t.materials.map(F=>{let X=new We({color:new ze().fromArray(F.color),metalness:F.metal,roughness:F.rough,emissive:new ze().fromArray(F.emission),emissiveIntensity:F.strength*.65,side:F.name.includes("Leaves")?zt:Sn,transparent:(F.alpha||1)<1,opacity:F.alpha||1,depthWrite:(F.alpha||1)>=1});return F.texture&&(X.map=S(F.texture),X.map.colorSpace=yt,X.color.set(16777215),X.normalMap=S(F.texture+"_normal"),X.normalScale.set(.35,.35),F.texture==="concrete"&&(X.onBeforeCompile=pe=>{pe.fragmentShader=pe.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.rgb = mix(vec3(0.32),diffuseColor.rgb,0.18);`)})),X}),_=await new Response(new Blob([n(e.city)]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),A=new DataView(_),b=0,I=A.getUint32(b,!0);b+=4;let C=0,M=0,w=0,R=(t.interiors||[]).map(()=>0);for(let F=0;F<I;F++){let X=A.getUint32(b,!0),pe=A.getUint32(b+4,!0);b+=8;let Me=new Float32Array(_,b,pe*8);b+=pe*32,C+=pe/3;for(let Ge=0;Ge<Me.length;Ge+=8)for(let[et,_t]of(t.interiors||[]).entries())Math.abs(Me[Ge]-_t.x)<_t.w/2&&Math.abs(Me[Ge+2]+_t.y)<_t.d/2&&(R[et]=Math.max(R[et],Me[Ge+1]));let $e=Nf(Me);w+=pe,M+=$e[0]?.attributes.position.count||0;for(let Ge of $e){let et=new tt(Ge,y[X]);et.castShadow=!0,et.receiveShadow=!0,et.userData.baseCity=!0,r.add(et)}}for(let F of t.lights){let X=new Vt(16764299,35,20,2);X.position.set(F.x,F.z,-F.y),r.add(X)}for(let F of t.indoorLights||[]){let X=new Vt(16768435,F.power,F.range,2);X.position.set(F.x,F.z,-F.y),r.add(X)}let G=Xf(),V=(t.interiors||[]).map(F=>({...F,open:0})),q=np(r),D=su(),Z=wp(r),re=xp(),j=uu(null);try{j=uu(JSON.parse(localStorage.getItem("aurora-nexus-v7")||"null"))}catch{}function U(){try{localStorage.setItem("aurora-nexus-v7",JSON.stringify(j))}catch{Rt("\u9032\u884C\u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u4ECA\u56DE\u306F\u3053\u306E\u753B\u9762\u5185\u3067\u904A\u3079\u307E\u3059\u3002")}}let te=bp(r,Z,j,U),$=new P().fromArray(t.spawn),he="city",N=!1,W=null,oe="";function K(){if(oe!==D.world){oe=D.world,s("rail-target").replaceChildren();for(let F of kc(D.world)){let X=document.createElement("option");X.value=F,X.textContent=F==="machine"?"\u6A5F\u68B0\u60D1\u661F NEXUS-9":Tr[F],s("rail-target").append(X)}}}K();function k(){q.setTrain(D.progress,Po(D),D.route==="outer"?Z.curve:q.curve)}let fe=new P,_e=new an,ge=[];function Pe(F,X,pe,Me=r){let $e=new tt(new Nt(...F),pe);return $e.position.set(...X),$e.castShadow=!0,$e.receiveShadow=!0,Me.add($e),$e}let lt=await new Response(new Blob([n(e.vehicles)]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),B=new DataView(lt),nt=4,ke=[];for(let F=0;F<B.getUint32(0,!0);F++){let X=B.getUint32(nt,!0),pe=B.getUint32(nt+4,!0),Me=B.getUint32(nt+8,!0);nt+=12;let $e=new Float32Array(lt,nt,Me*8);nt+=Me*32;let Ge=new jn($e,8),et=new pt;et.setAttribute("position",new gn(Ge,3,0)),et.setAttribute("normal",new gn(Ge,3,3)),et.setAttribute("uv",new gn(Ge,2,6)),et.computeBoundingSphere(),ke.push({part:X,mi:pe,geo:et})}for(let F of G){F.ob=new qe,F.wheels=[],F.brakes=[],r.add(F.ob),F.ob.rotation.y=F.dir<0?Math.PI:0;let X=[[0,0,0],[-1.02,.48,1.45],[-1.02,.48,-1.45],[1.02,.48,1.45],[1.02,.48,-1.45]];for(let pe=1;pe<=4;pe++){let Me=new qe;Me.position.set(...X[pe]),F.ob.add(Me),F.wheels[pe]=Me}for(let pe of ke){let Me=y[pe.mi];t.materials[pe.mi].name==="Pearlescent vehicle paint"&&(Me=Me.clone(),Me.color.multiplyScalar([.72,1.1,.85,1][F.id%4])),t.materials[pe.mi].name==="Signal red"&&(Me=Me.clone(),F.brakes.push(Me));let $e=new tt(pe.geo,Me);$e.castShadow=!0,$e.receiveShadow=!0,(pe.part===0?F.ob:F.wheels[pe.part]).add($e)}}let Ye=new We({color:9749705,metalness:.1,roughness:.17,transparent:!0,opacity:.25,depthWrite:!1,side:zt}),De=new We({color:8885914,metalness:.85,roughness:.25});for(let F of V){F.leaves=[];for(let X of[-1,1]){let pe=new qe;pe.position.set(F.front,1.6,-F.doorY+X*.86),r.add(pe),Pe([.045,2.85,1.64],[0,0,0],Ye,pe);for(let Me of[-.8,.8])Pe([.065,2.88,.045],[0,0,Me],De,pe);for(let Me of[-1.4,1.4])Pe([.065,.05,1.64],[0,Me,0],De,pe);Pe([.11,.55,.035],[-F.side*.06,0,-X*.58],De,pe),F.leaves.push({group:pe,sign:X})}}let St=[];for(let F of t.trafficSignals||[])for(let X of[-11.6,11.6]){let pe=-F+(X<0?9:-9),Me=new tt(new ht(.055,.075,4.2,10),De);Me.position.set(X,2.1,pe),r.add(Me);let $e=new We({color:1054748,roughness:.7});Pe([.55,1.55,.3],[X,4,pe],$e);for(let[Ge,et]of["red","amber","green"].entries()){let _t=new We({color:1118481,emissive:0}),En=new tt(new Bt(.15,12,8),_t);En.position.set(X,4.47-Ge*.46,pe+(X<0?-.18:.18)),r.add(En),St.push({m:_t,color:et})}}let L=new qe;L.position.set(0,15.8,-58),r.add(L);let ne=new We({color:10860732,metalness:.65,roughness:.3}),ce=new We({color:1387832,metalness:.55,roughness:.15});for(let F=-1;F<=1;F++)Pe([7.4,2.2,2.8],[F*8,0,0],ne,L),Pe([6.6,.85,.04],[F*8,.2,1.42],ce,L),Pe([6.5,.055,.045],[F*8,-.65,1.45],new We({color:4572634,emissive:4572634,emissiveIntensity:1.5}),L);let ie=cp(r,V,R,L),E=pp(r,ie.buildings),v=gp(r),O="foot",ae=null,z=15,H="clear",J=!1,se=0,xe=null,Te=au([]);try{Te=au(JSON.parse(localStorage.getItem("aurora-city-stamps")||"[]"))}catch{}let le=!1,Se=0,Be=1,Ee=null,ye=null,He=!1,Y=null,ve=new Set;try{for(let F of JSON.parse(localStorage.getItem("aurora-survey-v4")||"[]"))Number.isInteger(F)&&F>=0&&F<6&&ve.add(F)}catch{}for(let F of V){let X=document.createElement("option");X.value=String(F.id),X.textContent=F.label,s("destination").append(X)}s("visit").onclick=()=>{if(D.mode!=="walking"||D.world!=="city")return;re.reset=!0,ee(!1),ai(),O="foot",le=!1,Ee=null,ye=null;let F=V[Number(s("destination").value)];F&&(o.position.set(F.front-F.side*2.8,1.89,-F.doorY),a=-F.side*Math.PI/2,l=0)};let Re=[],Fe=new Mo,we=new On(new P(0,-1,0),1.4),me=null,Oe=null,Je=null;function wt(F,X){F.traverse(pe=>{pe.isMesh&&(pe.castShadow=!0,pe.isSkinnedMesh&&(pe.computeBoundingSphere(),pe.boundingSphere.radius*=3),pe.frustumCulled=!0,X%4&&(pe.material=pe.material.clone(),pe.material.color.multiply(new ze([.8,.9,1,.9][X%4],[.85,.88,.9,1][X%4],[.9,.8,.85,.92][X%4]))))})}let xt=F=>new Promise((X,pe)=>new Uc().parse(F,"",X,pe)),Zt=await Bf(r,xt,n(window.LANDMARK_ASSET).buffer),Nn={expansion:Is(ie.root,{exclude:[...ie.lifts.map(F=>F.cabin),...ie.beacons.map(F=>F.jewel),ie.rover,ie.orrery]}),districts:Is(E.root,{exclude:E.dynamic}),galaxy:Is(q.group,{exclude:[q.train]}),machine:Is(Z.root,{exclude:Z.dynamic}),landmarks:Zt.batching},Ls=Uf(r),yn=Sh([]);try{yn=Sh(JSON.parse(localStorage.getItem("aurora-atlas-v8")||"[]"))}catch{}let Ds="",Ns=null;function Rr(){if(Ds!==D.world){Ds=D.world,s("atlas-place").replaceChildren();for(let F of Ni.filter(X=>X.world===D.world)){let X=document.createElement("option");X.value=F.id,X.textContent=F.name,s("atlas-place").append(X)}}}Rr(),s("atlas-go").onclick=()=>{if(D.mode!=="walking")return;let F=Ni.find(Me=>Me.id===s("atlas-place").value&&Me.world===D.world);if(!F)return;re.reset=!0,ee(!1),ai(),O="foot",le=!1,Ee=null,ye=null,He=!1,ae=null;let[X,pe]=Cs[F.world];o.position.set(X+F.x,1.72,pe+F.z),a=F.yaw,l=F.id==="summit"?-.1:0,rn()};function Us(){if(O==="aircar")return O="foot",o.position.set(13072,1.88,-9141),re.reset=!0,a=0,l=0,Rt("\u5DE5\u5EE0\u3078\u7740\u9678\u3057\u307E\u3057\u305F\u3002"),!0;if(O!=="foot"||Ee||le||ye||He)return!1;let F=Zt.nearby(D.world,o.position);if(!F)return!1;yn.add(F.id);try{localStorage.setItem("aurora-atlas-v8",JSON.stringify([...yn]))}catch{}return F.id==="aeroworks"?(O="aircar",o.position.y=30,re.reset=!0,l=-.22,Rt("\u30A4\u30AA\u30F3\u30B9\u30AD\u30DE\u30FC\uFF1AWASD\u3067\u98DB\u884C\u3001Space\u4E0A\u6607\u3001X\u4E0B\u964D\u3001F\u3067\u5DE5\u5EE0\u3078\u81EA\u52D5\u7740\u9678\u3002\u5B89\u5168\u822A\u8DEF\u306F\u9AD8\u5EA626\u301C115m\u3067\u3059\u3002")):(F.id==="singing-gate"&&Zt.resonate(),Rt(F.name+" / "+F.text+" \uFF08\u65C5\u306E\u8A18\u9332 "+yn.size+"/"+Ni.length+"\uFF09"+(yn.size===Ni.length?" 3\u3064\u306E\u661F\u306E\u65C5\u4EBA\u30D0\u30C3\u30B8\u3092\u7372\u5F97\uFF01":""))),!0}Promise.all([xt(n(e.human).buffer),xt(n(e.civilian).buffer)]).then(([F,X])=>{let pe=[];X.scene.traverse(Mt=>{Mt.isMesh&&!Mt.isSkinnedMesh&&pe.push(Mt)});for(let Mt of pe)Mt.removeFromParent();let Me=F.scene,$e=Me.getObjectByName("Icosphere");$e&&$e.removeFromParent(),Me.updateMatrixWorld(!0);let Ge=new $t().setFromObject(Me),et=1.74/(Ge.max.y-Ge.min.y);Je=F.animations.find(Mt=>/walk/i.test(Mt.name));let _t=ou(Me,P),En=ou(X.scene,P);ge.push(_t,En);let qt=[...t.crowd,...Array.from({length:24},(Mt,st)=>({x:[-225,-165,135,225][st%4],y:-90+st*13,dir:st%2?1:-1,speed:1.1,scale:1,min:-285,max:120}))];for(let Mt=0;Mt<qt.length;Mt++){let st=qt[Mt],An=Mt%2===1,Un=An?X.scene:Me,ln=new $t().setFromObject(Un),In=1.74/(ln.max.y-ln.min.y),kt=An?En:_t,Jt=br(Un);Jt.scale.multiplyScalar(In*st.scale),Jt.position.set(st.x,.17-ln.min.y*In*st.scale,-st.y),Jt.rotation.y=Lo(0,-st.dir,kt.x,kt.z),wt(Jt,Mt),r.add(Jt);let bt=new fi(Jt),Ae=An?X.animations.find(dt=>/walk/i.test(dt.name))||X.animations[0]:Je;Ae&&(bt.clipAction(Ae).play(),bt.setTime(Mt*.143)),Re.push({ob:Jt,mix:bt,cfg:st,sourceForward:kt})}me=br(Me),me.scale.multiplyScalar(et),wt(me,0),r.add(me);for(let Mt of E.actions.filter(st=>st.kind==="stamp")){let st=br(Me);st.scale.multiplyScalar(et),st.position.set(Mt.x,.12-Ge.min.y*et,Mt.z-5.2),st.rotation.y=Lo(0,1,_t.x,_t.z),wt(st,3),r.add(st);let An=new fi(st),Un=F.animations.find(ln=>/idle/i.test(ln.name));Un&&An.clipAction(Un).play(),Re.push({ob:st,mix:An,cfg:{speed:0,dir:1,min:-1e4,max:1e4},sourceForward:_t})}for(let[Mt,[st,An,Un]]of[[-108,12,"\u7814\u7A76\u54E1 LIA"],[-70,12,"\u89B3\u6E2C\u58EB REN"],[-47,2,"\u6280\u5E2B SOL"]].entries()){let ln=br(Me);ln.scale.multiplyScalar(et),ln.position.set(At.x+st,q.floorHeight(At.x+st,At.z+An)-Ge.min.y*et,At.z+An),ln.rotation.y=Math.PI,wt(ln,Mt+1),r.add(ln);let In=new fi(ln),kt=F.animations.find(Jt=>/idle/i.test(Jt.name));kt&&In.clipAction(kt).play(),Re.push({ob:ln,mix:In,cfg:{speed:0,dir:1,min:-1e5,max:1e5},sourceForward:_t,world:"planet",name:Un,role:"LUMEN\u306E\u7814\u7A76\u54E1"})}for(let[Mt,[st,An,Un]]of[[48,-211,"\u5B66\u5712\u30AC\u30A4\u30C9 MIO"],[42,-261,"\u7814\u7A76\u54E1 NOA"]].entries()){let ln=X.scene,In=new $t().setFromObject(ln),kt=1.74/(In.max.y-In.min.y),Jt=br(ln);Jt.scale.multiplyScalar(kt),Jt.position.set(st,.09-In.min.y*kt,An),Jt.rotation.y=Lo(0,1,En.x,En.z),wt(Jt,Mt+1),r.add(Jt);let bt=new fi(Jt);bt.clipAction(X.animations[0]).play(),bt.setTime(.35+Mt*.2),bt.timeScale=0,Re.push({ob:Jt,mix:bt,cfg:{speed:0,dir:1,min:-1e5,max:1e5},sourceForward:En,world:"city",name:Un,role:"AURORA\u5B66\u5712\u306E\u6848\u5185\u4FC2"})}me.traverse(Mt=>{Mt.isMesh&&(Mt.material=Mt.material.clone(),Mt.material.clippingPlanes=[we])}),Oe=new fi(me),Je&&Oe.clipAction(Je).play(),Ns=Ff(r,{exclude:[q.train,L,f,f.target,me,te.root]}),s("loading").textContent="\u6E96\u5099\u5B8C\u4E86\u3002\u8857\u306E\u6563\u7B56\u3068\u3001LUMEN\u30FBNEXUS-9\u3078\u306E\u9280\u6CB3\u9244\u9053\u3092\u697D\u3057\u3081\u307E\u3059\u3002",s("start").disabled=!1,s("station").disabled=!1,document.documentElement.dataset.people=Re.length,document.documentElement.dataset.triangles=C}).catch(F=>{s("loading").textContent="\u4EBA\u7269\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u518D\u5EA6\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002",console.error(F)});function vn(F,X,pe=!1){if(O==="aircar")return!1;if(Zt.blocked(D.world,F,X,re.y))return!0;if(D.world==="machine")return Z.blocked(F,X,re.y,j);if(O==="drone")return!Sr(F,X);if(O==="boat")return qc(F,X);if(Ee)return ie.blocked(F,X,Ee);if(!pe&&D.world==="city"&&v.blocked(F,X)||D.world==="city"&&E.blocked(F,X)||D.world==="city"&&ie.blocked(F,X,null))return!0;let Me=q.train.worldToLocal(new P(F,0,X));return q.train.position.y<3&&Math.abs(Me.x)<2.55&&Me.z>-8.5&&Me.z<32?!0:D.world==="planet"?q.blockedPlanet(F,X):q.cityColliders.some($e=>Math.abs(F-$e.x)<$e.w/2+.3&&Math.abs(X-$e.z)<$e.d/2+.3)?!0:$f(F,X,t.colliders,V,G)}function ji(F,X){let pe=Math.max(1,Math.ceil(Math.max(Math.abs(F),Math.abs(X))/.12)),Me=($e,Ge)=>O==="car"?[[-.75,-1.6],[.75,-1.6],[-.75,1.6],[.75,1.6]].some(([et,_t])=>vn($e+et*Math.cos(a)+_t*Math.sin(a),Ge-et*Math.sin(a)+_t*Math.cos(a))):vn($e,Ge);for(let $e=0;$e<pe;$e++)Me(o.position.x+F/pe,o.position.z)||(o.position.x+=F/pe),Me(o.position.x,o.position.z+X/pe)||(o.position.z+=X/pe)}function rn(){c=!0,s("activity").classList.add("hidden"),document.querySelector("details").open=!1,s("pause").classList.add("hidden"),i.domElement.requestPointerLock?.()?.catch?.(()=>{})}function Fs(){c=!1,h.clear(),document.exitPointerLock?.(),s("pause").classList.remove("hidden"),s("start").classList.add("hidden"),s("resume").classList.remove("hidden")}function Cr(){re.reset=!0,ee(!1),ai(),O="foot",ae=null,le=!1,Ee=null,ye=null,He=!1,s("liftpanel").classList.add("hidden"),Object.assign(D,su()),q.setTrain(0),o.position.fromArray(t.spawn),a=-.13,l=.055,h.clear()}function $c(){if(D.mode!=="walking")return;re.reset=!0,ee(!1),ai(),O="foot",le=!1,Ee=null,ye=null,He=!1;let F=Vc(D.world);o.position.fromArray(F.exit),a=Math.PI/2,l=0,rn()}function Qi(){return!s("start").disabled&&D.world==="city"&&D.mode==="walking"&&!le&&!ye&&!Ee&&!He}function Do(){return Qi()?[...E.actions,...v.actions].filter(F=>Math.hypot(o.position.x-F.x,o.position.z-F.z)<2.7).sort((F,X)=>Math.hypot(o.position.x-F.x,o.position.z-F.z)-Math.hypot(o.position.x-X.x,o.position.z-X.z))[0]:null}function Rt(F){s("activity").textContent=F,s("activity").classList.remove("hidden")}function ai(){J=!1,s("editor").classList.add("hidden"),v.preview(null,!1,vn)}function T(){return c&&!N&&!J&&D.mode==="walking"&&O==="foot"&&!le&&!ye&&!He}function Q(){return D.mode!=="walking"||O!=="foot"||le||ye||He||J?null:(D.world==="machine"?Z.robots:Re.filter(X=>(X.world||"city")===D.world)).map(X=>({p:X,d:X.ob.getWorldPosition(new P).distanceTo(o.position.clone().add(new P(0,-1.2,0)))})).filter(X=>X.d<3.8).sort((X,pe)=>X.d-pe.d)[0]?.p||null}function ue(F){W&&(s("dialogue-text").textContent=Sp(W.role||"AURORA\u306E\u5E02\u6C11",F,j,D.world))}function de(){if(!c||N)return;let F=Q();if(!F){Rt("\u8FD1\u304F\u306E\u4EBA\u3084\u6A5F\u68B0\u4EBA\u306B\u8FD1\u3065\u3044\u3066C\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002");return}W=F,N=!0,c=!1,h.clear(),document.exitPointerLock?.(),s("pause").classList.add("hidden"),s("dialogue").classList.remove("hidden"),s("dialogue-name").textContent=F.name||"AURORA\u306E\u5E02\u6C11",ue("\u3042\u306A\u305F\u306F\uFF1F")}function ee(F=!0){N&&(N=!1,W=null,s("dialogue").classList.add("hidden"),F&&rn())}function be(){if(!T())return;let F=(pe,Me,$e)=>D.world==="machine"?Z.blocked(pe,Me,$e,j):vn(pe,Me),X=te.attack(o,D.world,ct,F,Re.filter(pe=>(pe.world||"city")===D.world));X&&Rt(X),s("pulse-flash").classList.remove("hidden"),setTimeout(()=>s("pulse-flash").classList.add("hidden"),90)}let Ce=[{name:"\u4FEE\u5FA9\u90E8\u54C1\u30FB\u897F\u306E\u56DE\u53CE\u5834",x:-105,z:27.2},{name:"\u4FEE\u5FA9\u90E8\u54C1\u30FB\u4E2D\u592E\u306E\u56DE\u53CE\u5834",x:-50,z:28.2},{name:"\u4FEE\u5FA9\u90E8\u54C1\u30FB\u51B7\u5374\u7089\u306E\u901A\u308A",x:-35,z:-29.8},{name:"\u51B7\u5374\u7089\u30FB\u4F5C\u696D\u533A",x:-35,z:-26},{name:"\u51B7\u5374\u7089\u30FB\u7AEF\u672B",x:-35,z:-40.2},{name:"\u52D5\u529B\u7089\u30FB\u4F5C\u696D\u533A",x:62,z:-8},{name:"\u52D5\u529B\u7089\u30FB\u7AEF\u672B",x:62,z:-22.2},{name:"\u901A\u4FE1\u7089\u30FB\u4F5C\u696D\u533A",x:35,z:87},{name:"\u901A\u4FE1\u7089\u30FB\u7AEF\u672B",x:35,z:72.8},{name:"\u4E2D\u592E\u30A2\u30FC\u30AB\u30A4\u30D6\u5165\u53E3",x:0,z:22}];for(let[F,X]of Ce.entries()){let pe=document.createElement("option");pe.value=F,pe.textContent=X.name,s("nexus-place").append(pe)}s("nexus-go").onclick=()=>{if(D.world!=="machine"||D.mode!=="walking"||N)return;let F=Ce[Number(s("nexus-place").value)];O="foot",re.reset=!0,o.position.set(Pt.x+F.x,1.72,Pt.z+F.z),a=0,l=0,rn()},s("talk").onclick=de,s("dialogue-close").onclick=()=>ee(),s("attack-button").onclick=be;for(let[F,X]of[["topic-place","\u3053\u3053\u306F\uFF1F"],["topic-work","\u4F55\u3092\u3059\u308C\u3070\u3044\u3044\uFF1F"],["topic-travel","\u65C5\u306E\u884C\u304D\u5148"],["topic-controls","\u30B8\u30E3\u30F3\u30D7\u3068\u64CD\u4F5C"],["topic-chat","\u96D1\u8AC7"]])s(F).onclick=()=>ue(X);s("dialogue-form").onsubmit=F=>{F.preventDefault(),ue(s("dialogue-input").value),s("dialogue-input").value=""};function Ne(){return Qi()&&O==="foot"&&o.position.y<4}function Ue(){if(J){ai(),rn();return}if(!Ne()){Rt("\u8857\u306E\u5730\u4E0A\u3067\u4E57\u308A\u7269\u304B\u3089\u964D\u308A\u3066\u3001\u7DE8\u96C6\u30E2\u30FC\u30C9\u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002");return}J=!0,document.querySelector("details").open=!1,s("pause").classList.add("hidden"),s("editor").classList.remove("hidden"),s("activity").classList.add("hidden"),c=!0,document.exitPointerLock?.(),h.clear()}for(let F of Ji){let X=document.createElement("option");X.value=F.id,X.textContent=F.name,s("prop-type").append(X)}s("build").onclick=Ue,s("build-close").onclick=()=>{ai(),rn()},s("prop-rotate").onclick=()=>{se+=Math.PI/4},s("prop-place").onclick=()=>{!J||!Ne()||(xe=v.candidate(o,a,s("prop-type").value,se),Rt(v.place(xe,vn).message))},s("prop-remove").onclick=()=>{J&&Ne()&&Rt(v.remove(o.position.x,o.position.z))},s("prop-undo").onclick=()=>{J&&Ne()&&Rt(v.restore())},s("garden-save").onclick=()=>{let F=new Blob([JSON.stringify({version:1,props:v.items},null,2)],{type:"application/json"}),X=URL.createObjectURL(F),pe=document.createElement("a");pe.href=X,pe.download="AURORA-my-garden.json",pe.click(),setTimeout(()=>URL.revokeObjectURL(X),1e4),Rt("\u81EA\u5206\u306E\u914D\u7F6E\u3092JSON\u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002")},s("garden-open").onclick=()=>{J&&Ne()&&s("garden-file").click()},s("garden-file").onchange=async()=>{let F=s("garden-file").files[0];if(F)try{if(F.size>1e5)throw Error();let X=JSON.parse(await F.text());if(X.version!==1||!Array.isArray(X.props))throw Error();if(!J||!Ne())return;Rt(v.load(X.props,(pe,Me)=>vn(pe,Me,!0)))}catch{Rt("AURORA\u3067\u4FDD\u5B58\u3057\u305F\u914D\u7F6EJSON\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002")}finally{s("garden-file").value=""}};function Ke(){if(O==="drone"){O="foot",o.position.copy(ae),ae=null,h.clear();return}if(!Qi()||O!=="foot"){Rt("\u5730\u4E0A\u3067\u4E57\u308A\u7269\u304B\u3089\u964D\u308A\u3066\u304B\u3089\u3001\u30C9\u30ED\u30FC\u30F3\u3092\u8D77\u52D5\u3057\u3066\u304F\u3060\u3055\u3044\u3002");return}ai(),ae=o.position.clone(),z=Math.max(8,o.position.y+8),O="drone",l=-.25,rn()}s("drone").onclick=Ke,s("activity").onclick=()=>s("activity").classList.add("hidden"),s("weather").onchange=()=>{H=s("weather").value},s("quality").onchange=()=>{let F=s("quality").value;i.setPixelRatio(Math.min(devicePixelRatio,F==="low"?.8:F==="high"?1.5:1.1)),i.shadowMap.enabled=F!=="low",f.shadow.mapSize.set(F==="high"?4096:2048,F==="high"?4096:2048),f.shadow.map&&(f.shadow.map.dispose(),f.shadow.map=null),i.setSize(innerWidth,innerHeight)};for(let F of E.places){let X=document.createElement("option");X.value=F.id,X.textContent=F.name,s("district").append(X)}s("explore").onclick=()=>{if(D.mode!=="walking")return;Cr();let F=E.places.find(X=>X.id===s("district").value);o.position.set(F.x,1.72,F.z),a=F.yaw,l=0,rn()},s("photo").onclick=()=>{i.render(r,o),i.domElement.toBlob(F=>{if(!F){Rt("\u5199\u771F\u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002");return}let X=URL.createObjectURL(F),pe=document.createElement("a");pe.href=X,pe.download="AURORA-photo.png",pe.click(),setTimeout(()=>URL.revokeObjectURL(X),1e4),Rt("\u98A8\u666F\u306E\u5199\u771F\u3092PNG\u3067\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002")},"image/png")};function Ze(){return D.world==="city"&&!le&&!ye?ie.lifts.findIndex((F,X)=>(!Ee||Ee.room===X)&&Math.hypot(o.position.x-F.x,o.position.z-F.z)<3):-1}function Xe(){if(D.mode!=="walking")return!1;if(J||Us())return!0;if(D.world==="machine"&&O==="foot"){let X=Z.reactors.find(pe=>Math.hypot(o.position.x-(Pt.x+pe.x),o.position.z-(Pt.z+pe.z+5.5))<3.5);if(X){let pe=Mp(j,X.id);return Rt(pe),U(),!0}if(Math.hypot(o.position.x-Pt.x,o.position.z-(Pt.z+4))<6)return j.reactors.length<3?Rt("\u30A2\u30FC\u30AB\u30A4\u30D6\u306F3\u57FA\u306E\u52D5\u529B\u7089\u306E\u5FA9\u65E7\u3092\u5F85\u3063\u3066\u3044\u307E\u3059\u3002"):(j.claimed=!0,U(),Rt("\u661F\u306E\u8A18\u61B6\u3092\u56DE\u53CE\uFF01 \u6574\u5099\u58EB\u30D0\u30C3\u30B8\u3092\u7372\u5F97\u3002\u6A5F\u68B0\u60D1\u661F\u3067Shift\u79FB\u52D5\u304C\u901F\u304F\u306A\u308A\u307E\u3057\u305F\u3002")),!0}if(O==="boat")return O="foot",o.position.fromArray(Ui.exit),a=-Math.PI/2,l=0,Rt("\u8239\u7740\u304D\u5834\u3078\u623B\u308A\u307E\u3057\u305F\u3002\u30DC\u30FC\u30C8\u306F\u73FE\u5728\u306E\u5834\u6240\u306B\u505C\u6CCA\u3057\u3066\u3044\u307E\u3059\u3002"),!0;if(O==="drone")return Ke(),!0;if(O==="car"){let X=[[2.6,0],[-2.6,0],[0,3],[0,-3]].find(([pe,Me])=>!vn(o.position.x+pe,o.position.z+Me));return X?(O="foot",o.position.x+=X[0],o.position.z+=X[1],!0):(Rt("\u5468\u56F2\u304C\u72ED\u3044\u305F\u3081\u3001\u5E83\u3044\u5834\u6240\u3078\u79FB\u52D5\u3057\u3066\u304B\u3089\u964D\u8ECA\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),!0)}if(O==="seat"){let X=ae;return O="foot",o.position.fromArray(X),ae=null,!0}if(Qi()){if(Math.hypot(o.position.x-Ui.exit[0],o.position.z-Ui.exit[2])<4)return O="boat",o.position.copy(v.boat.position),a=v.boat.rotation.y,l=.05,Rt("\u904B\u6CB3\u30DC\u30FC\u30C8\uFF1AW/S\u3067\u524D\u5F8C\u3001A/D\u3067\u64CD\u8235\u3002F\u3067\u8239\u7740\u304D\u5834\u3078\u623B\u308A\u307E\u3059\u3002\u6A4B\u306E\u9593\u306E\u6C34\u57DF\u3092\u822A\u884C\u3067\u304D\u307E\u3059\u3002"),!0;if(Math.hypot(o.position.x-E.car.position.x,o.position.z-E.car.position.z)<4)return O="car",o.position.x=E.car.position.x,o.position.z=E.car.position.z,a=E.car.rotation.y,Rt("\u30B7\u30C6\u30A3\u30AB\u30FC\uFF1AW/S\u3067\u524D\u5F8C\u3001A/D\u3067\u30CF\u30F3\u30C9\u30EB\u3001F\u3067\u964D\u8ECA\u3002"),!0;let X=Do();if(X){if(X.kind==="seat"){let pe=X.exit;if(vn(pe[0],pe[2])&&(pe=Array.from({length:8},(Me,$e)=>[X.x+Math.cos($e*Math.PI/4)*2.2,1.72,X.z+Math.sin($e*Math.PI/4)*2.2]).find(Me=>!vn(Me[0],Me[2]))),!pe)return Rt("\u7ACB\u3061\u4E0A\u304C\u308B\u5834\u6240\u304C\u72ED\u3044\u305F\u3081\u3001\u5468\u56F2\u306E\u914D\u7F6E\u3092\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),!0;ae=pe,O="seat",o.position.fromArray(X.sit),a=X.yaw,l=.03}else{Te.add(X.id);try{localStorage.setItem("aurora-city-stamps",JSON.stringify([...Te]))}catch{}Rt(`${X.name} / \u6563\u7B56\u30B9\u30BF\u30F3\u30D7 ${Te.size}/3\u3002${X.id==="canal-cafe"?"\u6E29\u304B\u3044\u30B3\u30FC\u30D2\u30FC\u3092\u53D7\u3051\u53D6\u308A\u307E\u3057\u305F\u3002":X.id==="market-food"?"\u30DE\u30FC\u30B1\u30C3\u30C8\u306E\u30D5\u30FC\u30C9\u3092\u53D7\u3051\u53D6\u308A\u307E\u3057\u305F\u3002":"\u5C55\u793A\u3092\u9451\u8CDE\u3057\u307E\u3057\u305F\u3002"}`)}return!0}}if(le){let X=ie.metroPose(Se);return X.dwell&&(le=!1,Be=X.index,o.position.set(cn[X.index].x,16.52,-52),a=Math.PI,l=0),!0}if(He)return He=!1,o.position.x+=3,!0;if(D.world==="city"&&!Ee&&!ye){let X=cn.findIndex(pe=>Math.hypot(o.position.x-(pe.x+13),o.position.z+49)<3);if(X>=0)return Be=X,o.position.set(cn[X].x+13,o.position.y>10?1.72:16.52,-49),!0}if(D.world==="planet"){let X=ie.beacons.findIndex((pe,Me)=>!ve.has(Me)&&Math.hypot(o.position.x-pe.x,o.position.z-pe.z)<4);if(X>=0){ve.add(X);try{localStorage.setItem("aurora-survey-v4",JSON.stringify([...ve]))}catch{}return s("discovery").textContent=`${ie.beacons[X].title}\u3092\u8A18\u9332\uFF01 ${ve.size}/6`,s("discovery").classList.remove("hidden"),!0}if(o.position.distanceTo(ie.rover.position)<6)return He=!0,!0;if(Math.hypot(o.position.x-ie.orrery.position.x,o.position.z-ie.orrery.position.z)<8)return s("discovery").textContent=ve.size===6?"\u63A2\u67FB\u5B8C\u4E86\uFF01\u53E4\u4EE3\u306E\u661F\u56F3\u304C\u5FA9\u5143\u3055\u308C\u307E\u3057\u305F\u3002\u60D1\u661F\u5100\u304C\u5171\u9CF4\u3057\u3066\u3044\u307E\u3059\u3002":"\u60D1\u661F\u5100\uFF1A6\u3064\u306E\u63A2\u67FB\u30D3\u30FC\u30B3\u30F3\u3092\u8ABF\u3079\u3001\u53E4\u4EE3\u306E\u661F\u56F3\u3092\u5FA9\u5143\u3057\u3088\u3046\u3002",s("discovery").classList.remove("hidden"),!0}let F=Ze();if(F>=0)return Y=F,Fs(),s("liftpanel").classList.remove("hidden"),!0;if(D.world==="city"&&!Ee&&Math.abs(o.position.z+52)<3&&Math.abs(o.position.x-cn[Be].x)<18&&o.position.y>12){let X=ie.metroPose(Se);return X.dwell&&X.index===Be&&(le=!0,a=0,l=0),!0}return!1}function at(){if(Xe()){h.clear();return}if(!s("start").disabled&&D.mode==="arrived"){Qf(D),re.reset=!0,K();let F=Vc(D.world);o.position.fromArray(F.exit),a=-Math.PI/2,l=0,h.clear(),rn()}else!s("start").disabled&&D.mode==="walking"&&Gc(D,o.position.x,o.position.z)&&jf(D,s("rail-target").value)&&(a=D.origin==="planet"?1.15:-1.15,l=.04,h.clear(),rn())}s("station").onclick=$c,s("interact").onclick=at,s("skip").onclick=()=>{D.mode==="riding"&&(ru(D,Er(D)),k())};for(let[F,X]of cn.entries()){let pe=document.createElement("option");pe.value=F,pe.textContent=X.name,s("metro-destination").append(pe)}s("metro").onclick=()=>{D.mode==="walking"&&(Cr(),Be=Number(s("metro-destination").value),o.position.set(cn[Be].x,16.52,-52),Se=Be*30,rn())};for(let[F,X]of["1F \u30ED\u30D3\u30FC","\u5C55\u671B\u30E9\u30A6\u30F3\u30B8","\u5C4B\u4E0A\u5EAD\u5712"].entries())s("floor"+F).onclick=()=>{if(Y===null)return;let pe=ie.lifts[Y],Me=Ee?pe.levels[Ee.level]:.17;ye={room:Y,level:F,from:Me,to:pe.levels[F],time:0},Ee={room:Y,level:F},o.position.x=pe.x,o.position.z=pe.z,s("liftpanel").classList.add("hidden"),rn()};s("lift-close").onclick=()=>{s("liftpanel").classList.add("hidden"),rn()},s("discovery").onclick=()=>s("discovery").classList.add("hidden"),s("start").onclick=rn,s("resume").onclick=rn,s("reset").onclick=Cr,s("light").onclick=()=>{u=!u,s("light").textContent=u?"\u663C\u306E\u8857":"\u591C\u306E\u8857"},document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==i.domElement&&c&&!J&&Fs()}),addEventListener("keydown",F=>{if(!F.target.matches("select,input,textarea")){if(N){F.code==="Escape"&&ee();return}["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(F.code)&&F.preventDefault(),h.add(F.code),F.code==="Space"&&!F.repeat&&T()&&_p(re,D.world),F.code==="KeyJ"&&!F.repeat&&be(),F.code==="KeyC"&&!F.repeat&&de(),F.code==="KeyR"&&!F.repeat&&s("reset").click(),F.code==="KeyF"&&!F.repeat&&at(),F.code==="KeyV"&&!F.repeat&&Ke(),F.code==="KeyB"&&!F.repeat&&Ue(),J&&!F.repeat&&(F.code==="KeyP"&&s("prop-place").click(),F.code==="KeyT"&&s("prop-rotate").click(),F.code==="Delete"&&s("prop-remove").click(),F.code==="KeyZ"&&s("prop-undo").click()),F.code==="Escape"&&(ai(),Fs())}}),addEventListener("keyup",F=>h.delete(F.code)),addEventListener("blur",()=>h.clear());let vt=!1,Ut=0;i.domElement.addEventListener("mousedown",()=>{vt=!0,Ut=0}),i.domElement.addEventListener("click",()=>{(document.pointerLockElement||Ut<6)&&be()}),addEventListener("mouseup",()=>vt=!1),addEventListener("mousemove",F=>{vt&&(Ut+=Math.abs(F.movementX)+Math.abs(F.movementY)),c&&(document.pointerLockElement||vt)&&(a-=F.movementX*.0018,l-=F.movementY*.0018,l=Math.max(-1.35,Math.min(1.3,l)))}),addEventListener("resize",()=>{o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight)});let Lt=0,ct=0,Ve=[];i.setAnimationLoop(()=>{let F=Math.min(Fe.getDelta(),.25),X=F;ct+=X,cu.value=ct;let pe=0,Me=0,$e=!1;if(c&&(a+=((h.has("KeyQ")?1:0)-(h.has("KeyE")?1:0))*X*1.35,D.mode==="walking"&&!le&&!ye&&O!=="seat")){if(pe=(h.has("KeyW")||h.has("ArrowUp")?1:0)-(h.has("KeyS")||h.has("ArrowDown")?1:0),Me=(h.has("KeyD")||h.has("ArrowRight")?1:0)-(h.has("KeyA")||h.has("ArrowLeft")?1:0),O==="boat"){let Ot=mp(o.position,a,pe,Me,X);o.position.x=Ot.x,o.position.z=Ot.z,a=Ot.yaw,Me=0,pe=0}if(O==="car"&&(a-=Me*X*.9*(pe<0?-1:1),Me=0),O==="drone"&&(z=up(z,(h.has("Space")?1:0)-(h.has("KeyX")?1:0),X)),O==="aircar"){let Ot=Cf(o.position,a,pe,Me,(h.has("Space")?1:0)-(h.has("KeyX")?1:0),X),Zc=(fu,pu,mu)=>!Z.blocked(fu,mu,pu-2.2,j)&&!Zt.blocked("machine",fu,mu,pu-2.2);Zc(o.position.x,Ot.y,o.position.z)&&(o.position.y=Ot.y),Zc(Ot.x,o.position.y,o.position.z)&&(o.position.x=Ot.x),Zc(o.position.x,o.position.y,Ot.z)&&(o.position.z=Ot.z),pe=0,Me=0}$e=!!(pe||Me);let Ae=Math.hypot(pe,Me)||1,dt=O==="car"?10:O==="drone"?16:He?9:h.has("ShiftLeft")?D.world==="machine"&&j.claimed?6:3.8:1.45;ji((Me*Math.cos(a)-pe*Math.sin(a))*X*dt/Ae,(-pe*Math.cos(a)-Me*Math.sin(a))*X*dt/Ae),$e&&(Lt+=X*dt*4.5)}let Ge=D.mode!=="walking";c&&ru(D,F),k(),K();let et=D.world==="city"&&!Ge?Yf(V,o.position.x,o.position.z):null,_t=Math.abs(o.position.x)>12&&Math.abs(o.position.x)<21,En=D.world==="city"&&Math.abs(o.position.x+82)<4&&Math.abs(o.position.z)<20;(c||!le)&&(Se+=F);let qt=ie.metroPose(Se);L.position.x=qt.x;let Mt=!Ee&&D.world==="city"&&o.position.y>10&&Math.abs(o.position.z+52)<3.5&&cn.some(Ae=>Math.abs(o.position.x-Ae.x)<16),st=Ee?ie.lifts[Ee.room].levels[Ee.level]:D.world==="planet"?q.floorHeight(o.position.x,o.position.z):D.world==="machine"?Math.max(Z.floorHeight(o.position.x,o.position.z,re.y),Gc(D,o.position.x,o.position.z)?.32:0):Mt?14.8:En?.32:et||_t?.17:0;if(!Ee&&!Mt&&!ye&&(st=Zt.floorHeight(D.world,o.position.x,o.position.z,st,re.y)),O==="aircar"&&(st=o.position.y-1.72),O==="drone"&&(st=z-1.72),O==="seat"&&(st=-.57),O==="boat"&&(st=-.35),ye){c&&(ye.time+=F);let Ae=ie.lifts[ye.room];st=ie.liftHeight(ye.from,ye.to,ye.time),Ae.cabin.position.y=st,ye.time>=5&&(ye.level===0&&(Ee=null),ye=null)}let An=D.mode==="walking"&&O==="foot"&&!le&&!ye&&!He;An?((he!==D.world||$.distanceTo(o.position)>15)&&(re.reset=!0),yp(re,c?X:0,st,D.world),st=re.y):(re.reset=!0,re.y=st,re.v=0,re.grounded=!0),he=D.world,$.copy(o.position),Ge?(fe.set(1.1,2.3,13.3),q.train.localToWorld(fe),o.position.copy(fe),_e.setFromEuler(new Dn(l,a,0,"YXZ")),o.quaternion.copy(q.train.quaternion).multiply(_e)):le?(o.position.set(qt.x,16.6,-58),o.rotation.set(l,a,0,"YXZ")):(o.position.y=1.72+st+(He?.9:0)+($e&&re.grounded?Math.sin(Lt)*.018:0),o.rotation.set(l,a,0,"YXZ")),He&&(ie.rover.position.set(o.position.x,st,o.position.z),ie.rover.rotation.y=a),O==="car"&&(E.car.position.set(o.position.x,0,o.position.z),E.car.rotation.y=a),O==="boat"&&(v.boat.position.x=o.position.x,v.boat.position.z=o.position.z,v.boat.rotation.y=a),E.update(X,ct,o,H,Ge?"space":D.world,u),v.update(ct,O==="boat",h.has("KeyW")||h.has("KeyS"),o,u,Ge?"space":D.world),J&&(xe=v.candidate(o,a,s("prop-type").value,se),v.preview(xe,Ne(),vn),s("build-status").textContent=`${v.items.length}/${Ar} \xB7 ${v.valid?"\u914D\u7F6E\u3067\u304D\u307E\u3059":"\u8D64\u3044\u5834\u6240\u306B\u306F\u914D\u7F6E\u3067\u304D\u307E\u305B\u3093"} \xB7 ${Math.round(se*180/Math.PI)%360}\xB0`),ie.orrery.rotation.y+=X*(ve.size===6?1:.2);for(let[Ae,dt]of ie.beacons.entries())dt.jewel.rotation.y+=X,dt.jewel.material.color.set(ve.has(Ae)?12952668:8644563);for(let Ae of Re){Ae.ob.visible=(Ae.world||"city")===D.world&&!Ge&&Math.hypot(Ae.ob.position.x-o.position.x,Ae.ob.position.z-o.position.z)<125,Ae.ob.visible&&Ae.mix.update(X),Ae!==W&&!(Ae.stunUntil>ct)&&(Ae.ob.position.z-=X*Ae.cfg.speed*Ae.cfg.dir);let dt=Ae.cfg.min??-117,Ot=Ae.cfg.max??49;Ae.ob.position.z<dt&&(Ae.ob.position.z=Ot),Ae.ob.position.z>Ot&&(Ae.ob.position.z=dt)}qf(G,X,ct,t.trafficSignals||[],o.position);for(let Ae of G){Ae.ob.position.set(Ae.x,0,Ae.z);for(let dt of Ae.wheels)dt&&(dt.rotation.x=-Ae.wheel);for(let dt of Ae.brakes)dt.emissiveIntensity=Ae.speed<.5?2.5:.6}Kf(V,o.position,X);for(let Ae of V)for(let dt of Ae.leaves)dt.group.position.z=-Ae.doorY+dt.sign*(.86+Ae.open*1.65);let Un=tu(ct);for(let Ae of St)Ae.m.color.set(Ae.color===Un?{red:14890021,amber:16759349,green:3597474}[Ae.color]:1054745),Ae.m.emissive.copy(Ae.m.color),Ae.m.emissiveIntensity=Ae.color===Un?2.2:0;if(me){we.constant=o.position.y-.35,me.position.set(o.position.x,st,o.position.z);let Ae=ge[0];me.rotation.y=Lo(-Math.sin(a),-Math.cos(a),Ae.x,Ae.z),Oe&&Oe.update($e?X:0),me.visible=c&&!Ge&&!le&&!ye&&!He&&O==="foot"}if(Zt.update(ct,o,O==="aircar"),Rr(),Z.update(X,ct,j,W),te.update(X,ct,D.world,o.position,T())==="respawn"&&(o.position.fromArray(iu.exit),re.reset=!0,Rt("\u30B7\u30FC\u30EB\u30C9\u3092\u518D\u8D77\u52D5\u3057\u3066\u661F\u6E2F\u3078\u623B\u308A\u307E\u3057\u305F\u3002\u4FEE\u5FA9\u306E\u9032\u884C\u306F\u4FDD\u6301\u3057\u3066\u3044\u307E\u3059\u3002")),T()&&D.world==="machine")for(let Ae of Z.cells)!j.cells.includes(Ae.id)&&Math.hypot(o.position.x-(Pt.x+Ae.x),o.position.z-(Pt.z+Ae.z))<1.4&&Math.abs(o.position.y-.72-Ae.ob.position.y)<1.25&&(j.cells.push(Ae.id),U(),Rt(`\u4FEE\u5FA9\u90E8\u54C1\u3092\u56DE\u53CE\uFF01 \u6240\u6301 ${Kc(j)}\u500B`));let In=Q();s("talk").classList.toggle("hidden",!In||N||!c),s("talk").textContent=In?`C ${In.name||"\u5E02\u6C11"}\u3068\u8A71\u3059`:"C \u8A71\u3059",s("attack-button").classList.toggle("hidden",!c||!An||J),s("adventure-hud").classList.toggle("hidden",!c||Ge),s("adventure-hud").textContent=`Space \u30B8\u30E3\u30F3\u30D7 \xB7 J \u30D1\u30EB\u30B9 \xB7 C \u4F1A\u8A71${D.world==="machine"?` \xB7 \u30B7\u30FC\u30EB\u30C9 ${te.shield}%`:te.score?` \xB7 \u8A13\u7DF4\u30B9\u30B3\u30A2 ${te.score}`:""}`,s("machine-mission").classList.toggle("hidden",D.world!=="machine"||Ge),s("machine-mission").textContent=`NEXUS-9\u5FA9\u65E7 \xB7 \u7089 ${j.reactors.length}/3 \xB7 \u30C9\u30ED\u30FC\u30F3 ${j.defeated.length}/6 \xB7 \u90E8\u54C1 ${Kc(j)}\u500B${j.claimed?" \xB7 \u6574\u5099\u58EB\u30D0\u30C3\u30B8\u7372\u5F97":j.reactors.length===3?" \xB7 \u4E2D\u592E\u30A2\u30FC\u30AB\u30A4\u30D6\u3078":" \xB7 \u5149\u308B\u90E8\u54C1\u3078\u30B8\u30E3\u30F3\u30D7"}`,document.documentElement.dataset.adventure=JSON.stringify({body:re,quest:j,shield:te.shield,dialogue:N});let kt=D.world!=="city"&&!Ge||Ge&&D.route==="outer"?1:Ge?Math.max(0,Math.min(1,Math.max((o.position.y-45)/220,(D.progress-.75)/.12))):0;r.background=kt>.5?new ze(132625):x,r.fog.density=.0015*(1-kt)+8e-6*kt,r.fog.color.set(u?1319212:11056315).lerp(new ze(198679),kt),r.backgroundIntensity=u?.07:.75,r.environmentIntensity=(u?.2:.7)*(1-kt)+.5*kt,f.intensity=(u?.1:2.8)*(1-kt)+3.1*kt,d.intensity=(u?.42:1.7)*(1-kt)+.9*kt,!kt&&H==="sunset"?(f.color.set(16756081),f.intensity*=.7,r.fog.color.set(9862524),r.backgroundIntensity*=.58):f.color.set(16769726),!kt&&H==="rain"&&(r.fog.density=.0028,r.fog.color.set(7438730),f.intensity*=.35,r.backgroundIntensity*=.45),q.stars.material.opacity=kt,f.target.position.set(o.position.x,o.position.y-20,o.position.z-20),f.position.set(o.position.x-(H==="sunset"?75:45),o.position.y+(H==="sunset"?35:105),o.position.z+35),s("position").textContent=`${o.position.x.toFixed(0)} / ${(-o.position.z).toFixed(0)} m`,document.documentElement.dataset.playing=String(c),document.documentElement.dataset.input=Array.from(h).join(","),document.documentElement.dataset.traffic=JSON.stringify(G.map(Ae=>({x:Ae.x,z:+Ae.z.toFixed(3),speed:+Ae.speed.toFixed(2)}))),document.documentElement.dataset.room=et?.label||"",document.documentElement.dataset.door=JSON.stringify(V.map(Ae=>+Ae.open.toFixed(2)));let Jt=D.mode==="walking"&&Gc(D,o.position.x,o.position.z);s("interact").classList.toggle("hidden",!Jt&&D.mode!=="arrived"),s("interact").textContent=D.mode==="arrived"?"F  \u964D\u308A\u3066\u63A2\u7D22\u3059\u308B":"F  "+Tr[s("rail-target").value]+"\u884C\u304D\u306B\u4E57\u8ECA",s("station").disabled=Ge||s("start").disabled,s("station").textContent=D.world!=="city"?"\u60D1\u661F\u306E\u99C5\u3078":"\u9280\u6CB3\u9244\u9053\u306E\u99C5\u3078",s("visit").disabled=Ge||D.world!=="city",s("nexus-go").disabled=Ge||D.world!=="machine",s("journey").classList.toggle("hidden",!Ge),s("route-from").textContent=Tr[D.origin],s("route-to").textContent=Tr[D.destination],s("phase").textContent=ep(D),s("progress").value=D.time/Er(D),s("remaining").textContent=D.mode==="arrived"?"\u964D\u8ECA\u3067\u304D\u307E\u3059":`\u3042\u3068 ${Math.ceil(Er(D)-D.time)} \u79D2${c?"":" / \u4F11\u61A9\u4E2D"}`,s("skip").classList.toggle("hidden",D.mode!=="riding"),s("place").textContent=Ge?"GALAXY RAILWAY / \u8ECA\u7A93\u3092\u898B\u56DE\u305B\u307E\u3059":D.world==="machine"?"NEXUS-9 / \u6A5F\u68B0\u60D1\u661F\u306E\u5DE5\u696D\u533A":D.world==="planet"?"LUMEN / \u7D50\u6676\u76C6\u5730\u30FB\u89B3\u6E2C\u57FA\u5730":et?`${et.label} / \u9928\u5185`:`AURORA / \u5165\u308C\u308B\u5EFA\u7269 ${V.length}\u68DF`,s("region").textContent=Ge?"GALAXY RAILWAY":D.world==="machine"?"NEXUS-9 / THE MACHINE WORLD":D.world==="planet"?"LUMEN / CRYSTAL BASIN":"AURORA / STREET LIFE";let bt="";if(!Ge){if(le?(bt=qt.dwell?"F \u5E02\u5185\u96FB\u8ECA\u3092\u964D\u308A\u308B":"",s("place").textContent=`\u5E02\u5185\u96FB\u8ECA / \u6B21\u306F ${cn[qt.next].name}${qt.dwell?"\uFF08\u505C\u8ECA\u4E2D\uFF09":""}`):ye?s("place").textContent=`\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u79FB\u52D5\u4E2D / ${Math.round(st)} m`:Ze()>=0?bt="F \u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u30FB\u968E\u3092\u9078\u3076":Mt&&(bt=qt.dwell&&qt.index===Be?"F \u5E02\u5185\u96FB\u8ECA\u306B\u4E57\u8ECA":"",s("place").textContent=`${cn[Be].name}\u99C5 / ${qt.dwell&&qt.index===Be?"\u96FB\u8ECA\u304C\u505C\u8ECA\u4E2D":"\u6B21\u306E\u96FB\u8ECA\u3092\u304A\u5F85\u3061\u304F\u3060\u3055\u3044"}`),!le&&!Ee&&D.world==="city"&&cn.some(Ae=>Math.hypot(o.position.x-(Ae.x+13),o.position.z+49)<3)&&(bt=o.position.y>10?"F \u99C5\u306E\u5730\u4E0A\u3078\u964D\u308A\u308B":"F \u99C5\u306E\u30DB\u30FC\u30E0\u3078\u4E0A\u304C\u308B"),D.world==="planet"){He?bt="F \u30ED\u30FC\u30D0\u30FC\u304B\u3089\u964D\u308A\u308B":ie.beacons.some((dt,Ot)=>!ve.has(Ot)&&Math.hypot(o.position.x-dt.x,o.position.z-dt.z)<4)?bt="F \u63A2\u67FB\u30C7\u30FC\u30BF\u3092\u8A18\u9332":o.position.distanceTo(ie.rover.position)<6?bt="F \u30ED\u30FC\u30D0\u30FC\u3092\u904B\u8EE2":Math.hypot(o.position.x-ie.orrery.position.x,o.position.z-ie.orrery.position.z)<8&&(bt="F \u60D1\u661F\u5100\u3092\u8ABF\u3079\u308B");let Ae=ie.beacons.filter((dt,Ot)=>!ve.has(Ot)).sort((dt,Ot)=>Math.hypot(dt.x-o.position.x,dt.z-o.position.z)-Math.hypot(Ot.x-o.position.x,Ot.z-o.position.z));s("mission").textContent=`\u60D1\u661F\u63A2\u67FB ${ve.size}/6${Ae[0]?` \xB7 \u6B21\u306E\u6A19\u672C\u307E\u3067 ${Math.round(Math.hypot(Ae[0].x-o.position.x,Ae[0].z-o.position.z))}m`:" \xB7 \u661F\u56F3\u5FA9\u5143\uFF01\u60D1\u661F\u5100\u3078"}${He?" \xB7 \u30ED\u30FC\u30D0\u30FC\u904B\u8EE2\u4E2D":""}`}Ee&&(s("place").textContent=`${ie.lifts[Ee.room].room.label} / ${Ee.level===1?"\u5C55\u671B\u30E9\u30A6\u30F3\u30B8":"\u5C4B\u4E0A\u5EAD\u5712"}`)}if(s("mission").classList.toggle("hidden",D.world!=="planet"||Ge),Qi()){if(O==="boat")bt="F \u8239\u7740\u304D\u5834\u3078\u623B\u308B";else if(O==="drone")bt="F / V \u5730\u4E0A\u306B\u623B\u308B";else if(O==="car")bt="F \u30B7\u30C6\u30A3\u30AB\u30FC\u304B\u3089\u964D\u308A\u308B";else if(O==="seat")bt="F \u30D9\u30F3\u30C1\u304B\u3089\u7ACB\u3064";else if(Math.hypot(o.position.x-Ui.exit[0],o.position.z-Ui.exit[2])<4)bt="F \u904B\u6CB3\u30DC\u30FC\u30C8\u306B\u4E57\u308B";else if(Math.hypot(o.position.x-E.car.position.x,o.position.z-E.car.position.z)<4)bt="F \u30B7\u30C6\u30A3\u30AB\u30FC\u306B\u4E57\u308B";else{let Ae=Do();Ae&&(bt="F "+Ae.name)}s("place").textContent=`${hp(o.position.x,o.position.z)} / ${O==="boat"?"\u904B\u6CB3\u30DC\u30FC\u30C8":O==="drone"?`\u30C9\u30ED\u30FC\u30F3 ${Math.round(z)}m`:O==="car"?"\u30B7\u30C6\u30A3\u30AB\u30FC":O==="seat"?"\u4F11\u61A9\u4E2D":`\u6563\u7B56\u30B9\u30BF\u30F3\u30D7 ${Te.size}/3`}`}if(D.world==="machine"&&!Ge){let Ae=Z.reactors.find(dt=>Math.hypot(o.position.x-(Pt.x+dt.x),o.position.z-(Pt.z+dt.z+5.5))<3.5);Ae?bt=`F ${Ae.name}\u306E\u7AEF\u672B`:Math.hypot(o.position.x-Pt.x,o.position.z-(Pt.z+4))<6&&(bt="F \u661F\u306E\u8A18\u61B6\u3092\u56DE\u53CE")}if(!Ge&&!le&&!ye&&!Ee&&!He){let Ae=Zt.nearby(D.world,o.position);O==="aircar"?(bt="F \u5DE5\u5EE0\u3078\u7740\u9678 \xB7 Space \u4E0A\u6607 / X \u4E0B\u964D",s("place").textContent="NEXUS-9 / \u30A4\u30AA\u30F3\u30B9\u30AD\u30DE\u30FC "+Math.round(o.position.y)+"m"):O==="foot"&&Ae&&(bt=Ae.id==="aeroworks"?"F \u7A7A\u98DB\u3076\u8ECA\u3092\u64CD\u7E26\u3059\u308B":"F "+Ae.name+"\u3092\u8A18\u9332",s("place").textContent=Ae.name+" / \u65C5\u306E\u8A18\u9332 "+yn.size+"/"+Ni.length)}document.documentElement.dataset.atlas=JSON.stringify({visited:[...yn],world:D.world,skyTraffic:Zt.traffic.map(Ae=>Ae.position.toArray())}),s("atlas-go").disabled=Ge,N&&(bt="",s("interact").classList.add("hidden")),J&&(bt="",s("interact").classList.add("hidden")),bt?(s("interact").textContent=bt,s("interact").classList.remove("hidden")):(le||ye||Mt)&&s("interact").classList.add("hidden"),document.documentElement.dataset.expansion=JSON.stringify({metroRiding:le,metroTime:Se,upper:Ee,liftRide:!!ye,roverDriving:He,discoveries:[...ve],buildings:ie.buildings.length}),document.documentElement.dataset.freedom=JSON.stringify({mode:O,weather:H,stamps:[...Te],droneHeight:z,position:o.position.toArray()}),document.documentElement.dataset.garden=JSON.stringify({editing:J,count:v.items.length,valid:v.valid,candidate:xe,items:v.items}),document.documentElement.dataset.journey=JSON.stringify({...D,position:o.position.toArray().map(Ae=>+Ae.toFixed(2))}),document.documentElement.dataset.facing=JSON.stringify(Re.map(Ae=>{let dt=Ae.sourceForward,Ot=Ae.ob.rotation.y;return+(Math.sin(Ot)*dt.z+Math.cos(Ot)*dt.x).toFixed(3)+","+(-Math.sin(Ot)*dt.x+Math.cos(Ot)*dt.z).toFixed(3)})),Ns?.update(o),Ls.update(o),i.render(r,o),Ve.push(F*1e3),Ve.length>90&&Ve.shift(),Ve.length%15===0&&(document.documentElement.dataset.renderstats=JSON.stringify({calls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries,lights:Ls.active,lightCapacity:Ls.capacity,surfaces:Ns?.active,optimized:Nn,cityVertices:M,originalCityVertices:w,frameMs:Ve.reduce((Ae,dt)=>Ae+dt,0)/Ve.length}))});let Ft=o.position.clone(),mt=t.colliders[0],fn={wallCollision:vn(mt.x,-mt.y),streetOpen:!vn(0,0),pedestrianCount:t.crowd.length,triangles:C};o.position.set(0,1.72,0),ji(0,-1),fn.movement=o.position.z===-1,o.position.copy(Ft),document.documentElement.dataset.checks=JSON.stringify(fn)}E_().catch(s=>{document.getElementById("loading").textContent="\u8857\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6700\u65B0\u7248\u306EEdge\u307E\u305F\u306FChrome\u3067\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002",console.error(s)});})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
