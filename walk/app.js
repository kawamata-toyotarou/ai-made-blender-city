(()=>{var Lu=0,yl=1,Du=2;var vl=1,Ma=2,Jn=3,cn=0,fn=1,Ut=2,yi=0,$i=1,ro=2,Ml=3,Sl=4,Nu=5,Ci=100,Uu=101,Fu=102,Ou=103,Bu=104,zu=200,ku=201,Hu=202,Gu=203,Ko=204,$o=205,Vu=206,Wu=207,Xu=208,qu=209,Yu=210,Ku=211,$u=212,Zu=213,Ju=214,Sa=0,Ta=1,ba=2,Zi=3,wa=4,Ea=5,Aa=6,Ra=7,Tl=0,ju=1,Qu=2,vi=0,ed=1,td=2,nd=3,Ca=4,id=5,sd=6,rd=7,ul="attached",od="detached",bl=300,ls=301,hs=302,$s=303,Ia=304,oo=306,ln=1e3,wn=1001,zs=1002,Qt=1003,Pa=1004;var us=1005;var Ot=1006,Zs=1007;var Cn=1008;var Vn=1009,wl=1010,El=1011,Js=1012,La=1013,Ui=1014,rn=1015,Wn=1016,Da=1017,Na=1018,js=1020,Al=35902,Rl=35899,Cl=1021,Il=1022,pn=1023,ks=1026,Qs=1027,Ua=1028,Fa=1029,Pl=1030,Oa=1031;var Ba=1033,ao=33776,co=33777,lo=33778,ho=33779,za=35840,ka=35841,Ha=35842,Ga=35843,Va=36196,Wa=37492,Xa=37496,qa=37808,Ya=37809,Ka=37810,$a=37811,Za=37812,Ja=37813,ja=37814,Qa=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,oc=36492,ac=36494,cc=36495,lc=36283,hc=36284,uc=36285,dc=36286,ad=2200,cd=2201,ld=2202,Ji=2300,ji=2301,Yo=2302,Yi=2400,Ki=2401,Cr=2402,fc=2500,hd=2501,Ll=0,uo=1,er=2,ud=3200,dd=3201;var Dl=0,fd=1,Mi="",vt="srgb",Wt="srgb-linear",Ir="linear",wt="srgb";var qi=7680;var dl=519,pd=512,md=513,gd=514,Nl=515,xd=516,_d=517,yd=518,vd=519,Zo=35044;var Ul="300 es",Fn=2e3,Pr=2001;var qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yh=1234567,wr=Math.PI/180,Qi=180/Math.PI;function On(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[s&255]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function at(s,e,t){return Math.max(e,Math.min(t,s))}function Fl(s,e){return(s%e+e)%e}function Vf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Wf(s,e,t){return s!==e?(t-s)/(e-s):0}function Er(s,e,t){return(1-t)*s+t*e}function Xf(s,e,t,n){return Er(s,e,1-Math.exp(-t*n))}function qf(s,e=1){return e-Math.abs(Fl(s,e*2)-e)}function Yf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Kf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function $f(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Zf(s,e){return s+Math.random()*(e-s)}function Jf(s){return s*(.5-Math.random())}function jf(s){s!==void 0&&(Yh=s);let e=Yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qf(s){return s*wr}function ep(s){return s*Qi}function tp(s){return(s&s-1)===0&&s!==0}function np(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ip(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sp(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ol={DEG2RAD:wr,RAD2DEG:Qi,generateUUID:On,clamp:at,euclideanModulo:Fl,mapLinear:Vf,inverseLerp:Wf,lerp:Er,damp:Xf,pingpong:qf,smoothstep:Yf,smootherstep:Kf,randInt:$f,randFloat:Zf,randFloatSpread:Jf,seededRandom:jf,degToRad:Qf,radToDeg:ep,isPowerOfTwo:tp,ceilPowerOfTwo:np,floorPowerOfTwo:ip,setQuaternionFromProperEuler:sp,normalize:bt,denormalize:Un},Ue=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=1-a,p=c*d+l*f+u*g+h*x,T=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let C=Math.sqrt(y),w=Math.atan2(C,p*T);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}let _=a*T;if(c=c*m+d*_,l=l*m+f*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nc=new D,Kh=new Jt,st=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],T=i[1],y=i[4],_=i[7],C=i[2],w=i[5],P=i[8];return r[0]=o*x+a*T+c*C,r[3]=o*m+a*y+c*w,r[6]=o*p+a*_+c*P,r[1]=l*x+u*T+h*C,r[4]=l*m+u*y+h*w,r[7]=l*p+u*_+h*P,r[2]=d*x+f*T+g*C,r[5]=d*m+f*y+g*w,r[8]=d*p+f*_+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Uc=new st;function Bl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Md(){let s=Hs("canvas");return s.style.display="block",s}var $h={};function Gs(s){s in $h||($h[s]=!0,console.warn(s))}function Sd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Zh=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rp(){let s={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===wt&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?Ir:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Wt]:{primaries:e,whitePoint:n,transfer:Ir,toXYZ:Zh,fromXYZ:Jh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Zh,fromXYZ:Jh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),s}var pt=rp();function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var vs,Jo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Hs("canvas")),vs.width=e.width,vs.height=e.height;let i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},op=0,Vs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Fc(i[o].image)):r.push(Fc(i[o]))}else r=Fc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Fc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ap=0,Oc=new D,Xt=class s extends qn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=wn,i=wn,r=Ot,o=Cn,a=pn,c=Vn,l=s.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=On(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ln:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ln:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=bl;Xt.DEFAULT_ANISOTROPY=1;var Mt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(f+1)/2,C=(p+1)/2,w=(u+d)/4,P=(h+x)/4,R=(g+m)/4;return y>_&&y>C?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=P/n):_>C?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=R/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=P/r,i=R/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-x)/T,this.z=(d-u)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Xt(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vs(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lr=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),vo.subVectors(this.max,pr),Ms.subVectors(e.a,pr),Ss.subVectors(e.b,pr),Ts.subVectors(e.c,pr),Ti.subVectors(Ss,Ms),bi.subVectors(Ts,Ss),Gi.subVectors(Ms,Ts);let t=[0,-Ti.z,Ti.y,0,-bi.z,bi.y,0,-Gi.z,Gi.y,Ti.z,0,-Ti.x,bi.z,0,-bi.x,Gi.z,0,-Gi.x,-Ti.y,Ti.x,0,-bi.y,bi.x,0,-Gi.y,Gi.x,0];return!Bc(t,Ms,Ss,Ts,vo)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,Ms,Ss,Ts,vo))?!1:(Mo.crossVectors(Ti,bi),t=[Mo.x,Mo.y,Mo.z],Bc(t,Ms,Ss,Ts,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new D,new D,new D,new D,new D,new D,new D,new D],Ln=new D,yo=new sn,Ms=new D,Ss=new D,Ts=new D,Ti=new D,bi=new D,Gi=new D,pr=new D,vo=new D,Mo=new D,Vi=new D;function Bc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Vi.fromArray(s,r);let a=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var cp=new sn,mr=new D,zc=new D,gn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(zc)),this.expandByPoint(mr.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},si=new D,kc=new D,So=new D,wi=new D,Hc=new D,To=new D,Gc=new D,es=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){kc.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(kc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(So),a=wi.dot(this.direction),c=-wi.dot(So),l=wi.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(kc).addScaledVector(So,d),f}intersectSphere(e,t){si.subVectors(e.center,this.origin);let n=si.dot(this.direction),i=si.dot(si)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,i,r){Hc.subVectors(t,e),To.subVectors(n,e),Gc.crossVectors(Hc,To);let o=this.direction.dot(Gc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);let c=a*this.direction.dot(To.crossVectors(wi,To));if(c<0)return null;let l=a*this.direction.dot(Hc.cross(wi));if(l<0||c+l>o)return null;let u=-a*wi.dot(Gc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class s{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,x,m)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lp,e,hp)}lookAt(e,t,n){let i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ei.crossVectors(n,yn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ei.crossVectors(n,yn)),Ei.normalize(),bo.crossVectors(yn,Ei),i[0]=Ei.x,i[4]=bo.x,i[8]=yn.x,i[1]=Ei.y,i[5]=bo.y,i[9]=yn.y,i[2]=Ei.z,i[6]=bo.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],T=n[3],y=n[7],_=n[11],C=n[15],w=i[0],P=i[4],R=i[8],M=i[12],S=i[1],E=i[5],H=i[9],I=i[13],K=i[2],Z=i[6],q=i[10],pe=i[14],ne=i[3],F=i[7],te=i[11],V=i[15];return r[0]=o*w+a*S+c*K+l*ne,r[4]=o*P+a*E+c*Z+l*F,r[8]=o*R+a*H+c*q+l*te,r[12]=o*M+a*I+c*pe+l*V,r[1]=u*w+h*S+d*K+f*ne,r[5]=u*P+h*E+d*Z+f*F,r[9]=u*R+h*H+d*q+f*te,r[13]=u*M+h*I+d*pe+f*V,r[2]=g*w+x*S+m*K+p*ne,r[6]=g*P+x*E+m*Z+p*F,r[10]=g*R+x*H+m*q+p*te,r[14]=g*M+x*I+m*pe+p*V,r[3]=T*w+y*S+_*K+C*ne,r[7]=T*P+y*E+_*Z+C*F,r[11]=T*R+y*H+_*q+C*te,r[15]=T*M+y*I+_*pe+C*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],T=h*m*l-x*d*l+x*c*f-a*m*f-h*c*p+a*d*p,y=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,_=u*x*l-g*h*l+g*a*f-o*x*f-u*a*p+o*h*p,C=g*h*c-u*x*c-g*a*d+o*x*d+u*a*m-o*h*m,w=t*T+n*y+i*_+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return e[0]=T*P,e[1]=(x*d*r-h*m*r-x*i*f+n*m*f+h*i*p-n*d*p)*P,e[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*p+n*c*p)*P,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*P,e[4]=y*P,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*P,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*P,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*P,e[8]=_*P,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*P,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*P,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*P,e[12]=C*P,e[13]=(u*x*i-g*h*i+g*n*d-t*x*d-u*n*m+t*h*m)*P,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*m-t*a*m)*P,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,T=c*l,y=c*u,_=c*h,C=n.x,w=n.y,P=n.z;return i[0]=(1-(x+p))*C,i[1]=(f+_)*C,i[2]=(g-y)*C,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(d+p))*w,i[6]=(m+T)*w,i[7]=0,i[8]=(g+y)*P,i[9]=(m-T)*P,i[10]=(1-(d+x))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=bs.set(i[0],i[1],i[2]).length(),o=bs.set(i[4],i[5],i[6]).length(),a=bs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Dn.copy(this);let l=1/r,u=1/o,h=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Fn,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Fn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Pr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Fn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Fn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Pr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bs=new D,Dn=new Qe,lp=new D(0,0,0),hp=new D(1,1,1),Ei=new D,bo=new D,yn=new D,jh=new Qe,Qh=new Jt,Mn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},up=0,eu=new D,ws=new Jt,ri=new Qe,wo=new D,gr=new D,dp=new D,fp=new Jt,tu=new D(1,0,0),nu=new D(0,1,0),iu=new D(0,0,1),su={type:"added"},pp={type:"removed"},Es={type:"childadded",child:null},Vc={type:"childremoved",child:null},mt=class s extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new Mn,n=new Jt,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new st}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(tu,e)}rotateY(e){return this.rotateOnAxis(nu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tu,e)}translateY(e){return this.translateOnAxis(nu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wo.copy(e):wo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(gr,wo,this.up):ri.lookAt(wo,gr,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(ri),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(su),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pp),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(su),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};mt.DEFAULT_UP=new D(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new D,oi=new D,Wc=new D,ai=new D,As=new D,Rs=new D,ru=new D,Xc=new D,qc=new D,Yc=new D,Kc=new Mt,$c=new Mt,Zc=new Mt,li=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nn.subVectors(i,t),oi.subVectors(n,t),Wc.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(oi),c=Nn.dot(Wc),l=oi.dot(oi),u=oi.dot(Wc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Kc.setScalar(0),$c.setScalar(0),Zc.setScalar(0),Kc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,n),Zc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Kc,r.x),o.addScaledVector($c,r.y),o.addScaledVector(Zc,r.z),o}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),oi.subVectors(e,t),Nn.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Nn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;As.subVectors(i,n),Rs.subVectors(r,n),Xc.subVectors(e,n);let c=As.dot(Xc),l=Rs.dot(Xc);if(c<=0&&l<=0)return t.copy(n);qc.subVectors(e,i);let u=As.dot(qc),h=Rs.dot(qc);if(u>=0&&h<=u)return t.copy(i);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(As,o);Yc.subVectors(e,r);let f=As.dot(Yc),g=Rs.dot(Yc);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Rs,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ru.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(ru,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(As,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Jc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Fl(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Jc(o,r,e+1/3),this.g=Jc(o,r,e),this.b=Jc(o,r,e-1/3)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=Td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return pt.workingToColorSpace(nn.copy(this),e),Math.round(at(nn.r*255,0,255))*65536+Math.round(at(nn.g*255,0,255))*256+Math.round(at(nn.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(nn.copy(this),t);let n=nn.r,i=nn.g,r=nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=vt){pt.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,i=nn.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Eo);let n=Er(Ai.h,Eo.h,t),i=Er(Ai.s,Eo.s,t),r=Er(Ai.l,Eo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Ve;Ve.NAMES=Td;var mp=0,hn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=On(),this.name="",this.type="Material",this.blending=$i,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=$o,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==$o&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rt=class extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hi=gp();function gp(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function xp(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=at(s,-65504,65504),hi.floatView[0]=s;let e=hi.uint32View[0],t=e>>23&511;return hi.baseTable[t]+((e&8388607)>>hi.shiftTable[t])}function _p(s){let e=s>>10;return hi.uint32View[0]=hi.mantissaTable[hi.offsetTable[e]+(s&1023)]+hi.exponentTable[e],hi.floatView[0]}var Ii=class{static toHalfFloat(e){return xp(e)}static fromHalfFloat(e){return _p(e)}},kt=new D,Ao=new Ue,yp=0,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zo,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zo&&(e.usage=this.usage),e}};var Nr=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ur=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},vp=0,Tn=new Qe,jc=new mt,Cs=new D,vn=new sn,xr=new sn,Zt=new D,xt=class s extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bl(e)?Ur:Nr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(vn.min,xr.min),vn.expandByPoint(Zt),Zt.addVectors(vn.max,xr.max),vn.expandByPoint(Zt)):(vn.expandByPoint(xr.min),vn.expandByPoint(xr.max))}vn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Zt.fromBufferAttribute(a,l),c&&(Cs.fromBufferAttribute(e,l),Zt.add(Cs)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new D,c[R]=new D;let l=new D,u=new D,h=new D,d=new Ue,f=new Ue,g=new Ue,x=new D,m=new D;function p(R,M,S){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(E),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(E),a[R].add(x),a[M].add(x),a[S].add(x),c[R].add(m),c[M].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,M=T.length;R<M;++R){let S=T[R],E=S.start,H=S.count;for(let I=E,K=E+H;I<K;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new D,_=new D,C=new D,w=new D;function P(R){C.fromBufferAttribute(i,R),w.copy(C);let M=a[R];y.copy(M),y.sub(C.multiplyScalar(C.dot(M))).normalize(),_.crossVectors(w,M);let E=_.dot(c[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,E)}for(let R=0,M=T.length;R<M;++R){let S=T[R],E=S.start,H=S.count;for(let I=E,K=E+H;I<K;I+=3)P(e.getX(I+0)),P(e.getX(I+1)),P(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Gt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ou=new Qe,Wi=new es,Ro=new gn,au=new D,Co=new D,Io=new D,Po=new D,Qc=new D,Lo=new D,cu=new D,Do=new D,rt=class extends mt{constructor(e=new xt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Qc.fromBufferAttribute(h,e),o?Lo.addScaledVector(Qc,u):Lo.addScaledVector(Qc.sub(t),u))}t.add(Lo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(Ro.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Ro,au)===null||Wi.origin.distanceToSquared(au)>(e.far-e.near)**2))&&(ou.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(ou),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=T,C=y;_<C;_+=3){let w=a.getX(_),P=a.getX(_+1),R=a.getX(_+2);i=No(this,p,e,n,l,u,h,w,P,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let T=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);i=No(this,o,e,n,l,u,h,T,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=T,C=y;_<C;_+=3){let w=_,P=_+1,R=_+2;i=No(this,p,e,n,l,u,h,w,P,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let T=m,y=m+1,_=m+2;i=No(this,o,e,n,l,u,h,T,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Mp(s,e,t,n,i,r,o,a){let c;if(e.side===fn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===cn,a),c===null)return null;Do.copy(a),Do.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Do);return l<t.near||l>t.far?null:{distance:l,point:Do.clone(),object:s}}function No(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Co),s.getVertexPosition(c,Io),s.getVertexPosition(l,Po);let u=Mp(s,e,t,n,Co,Io,Po,cu);if(u){let h=new D;li.getBarycoord(cu,Co,Io,Po,h),i&&(u.uv=li.getInterpolatedAttribute(i,a,c,l,h,new Ue)),r&&(u.uv1=li.getInterpolatedAttribute(r,a,c,l,h,new Ue)),o&&(u.normal=li.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};li.getNormal(Co,Io,Po,d.normal),u.face=d,u.barycoord=h}return u}var Pt=class s extends xt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2));function g(x,m,p,T,y,_,C,w,P,R,M){let S=_/P,E=C/R,H=_/2,I=C/2,K=w/2,Z=P+1,q=R+1,pe=0,ne=0,F=new D;for(let te=0;te<q;te++){let V=te*E-I;for(let re=0;re<Z;re++){let U=re*S-H;F[x]=U*T,F[m]=V*y,F[p]=K,l.push(F.x,F.y,F.z),F[x]=0,F[m]=0,F[p]=w>0?1:-1,u.push(F.x,F.y,F.z),h.push(re/P),h.push(1-te/R),pe+=1}}for(let te=0;te<R;te++)for(let V=0;V<P;V++){let re=d+V+Z*te,U=d+V+Z*(te+1),X=d+(V+1)+Z*(te+1),oe=d+(V+1)+Z*te;c.push(re,U,oe),c.push(U,X,oe),ne+=6}a.addGroup(f,ne,M),f+=ne,d+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ds(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function on(s){let e={};for(let t=0;t<s.length;t++){let n=ds(s[t]);for(let i in n)e[i]=n[i]}return e}function Sp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zl(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var bd={clone:ds,merge:on},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fr=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ri=new D,lu=new Ue,hu=new Ue,Ht=class extends Fr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,lu,hu),t.subVectors(hu,lu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ps=1,ea=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(Is,Ps,e,t);i.layers=this.layers,this.add(i);let r=new Ht(Is,Ps,e,t);r.layers=this.layers,this.add(r);let o=new Ht(Is,Ps,e,t);o.layers=this.layers,this.add(o);let a=new Ht(Is,Ps,e,t);a.layers=this.layers,this.add(a);let c=new Ht(Is,Ps,e,t);c.layers=this.layers,this.add(c);let l=new Ht(Is,Ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Or=class extends Xt{constructor(e=[],t=ls,n,i,r,o,a,c,l,u){super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ta=class extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Or(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pt(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:yi});r.uniforms.tEquirect.value=t;let o=new rt(i,r),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Ot),new ea(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},$e=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wp={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Br=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var zr=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zo,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new D,un=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xs=class extends hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ls,_r=new D,Ds=new D,Ns=new D,Us=new Ue,yr=new Ue,wd=new Qe,Uo=new D,vr=new D,Fo=new D,uu=new Ue,el=new Ue,du=new Ue,kr=class extends mt{constructor(e=new Xs){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kn(t,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new un(n,3,0,!1)),Ls.setAttribute("uv",new un(n,2,3,!1))}this.geometry=Ls,this.material=e,this.center=new Ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),wd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Ns.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Oo(Uo.set(-.5,-.5,0),Ns,o,Ds,i,r),Oo(vr.set(.5,-.5,0),Ns,o,Ds,i,r),Oo(Fo.set(.5,.5,0),Ns,o,Ds,i,r),uu.set(0,0),el.set(1,0),du.set(1,1);let a=e.ray.intersectTriangle(Uo,vr,Fo,!1,_r);if(a===null&&(Oo(vr.set(-.5,.5,0),Ns,o,Ds,i,r),el.set(0,1),a=e.ray.intersectTriangle(Uo,Fo,vr,!1,_r),a===null))return;let c=e.ray.origin.distanceTo(_r);c<e.near||c>e.far||t.push({distance:c,point:_r.clone(),uv:li.getInterpolation(_r,Uo,vr,Fo,uu,el,du,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Oo(s,e,t,n,i,r){Us.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(yr.x=r*Us.x-i*Us.y,yr.y=i*Us.x+r*Us.y):yr.copy(Us),s.copy(e),s.x+=yr.x,s.y+=yr.y,s.applyMatrix4(wd)}var fu=new D,pu=new Mt,mu=new Mt,Ep=new D,gu=new Qe,Bo=new D,tl=new gn,xu=new Qe,nl=new es,Hr=class extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ul,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingBox.expandByPoint(Bo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingSphere.expandByPoint(Bo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(i),e.ray.intersectsSphere(tl)!==!1&&(xu.copy(i).invert(),nl.copy(e.ray).applyMatrix4(xu),!(this.boundingBox!==null&&nl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ul?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===od?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;pu.fromBufferAttribute(i.attributes.skinIndex,e),mu.fromBufferAttribute(i.attributes.skinWeight,e),fu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=mu.getComponent(r);if(o!==0){let a=pu.getComponent(r);gu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ep.copy(fu).applyMatrix4(gu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},qs=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},En=class extends Xt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Qt,u=Qt,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_u=new Qe,Ap=new Qe,Gr=class s{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Ap;_u.multiplyMatrices(a,t[r]),_u.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new En(t,e,e,pn,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new qs),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Pi=class extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fs=new Qe,yu=new Qe,zo=[],vu=new sn,Rp=new Qe,Mr=new rt,Sr=new gn,Bt=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),vu.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(vu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Sr.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),e.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fs),yu.multiplyMatrices(n,Fs),Mr.matrixWorld=yu,Mr.raycast(e,zo);for(let o=0,a=zo.length;o<a;o++){let c=zo[o];c.instanceId=r,c.object=this,t.push(c)}zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new En(new Float32Array(i*this.count),i,this.count,Ua,rn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},il=new D,Cp=new D,Ip=new st,bn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=il.subVectors(n,t).cross(Cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(il),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ip.getNormalMatrix(e),i=this.coplanarPoint(il).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new gn,Pp=new Ue(.5,.5),ko=new D,Ys=class{constructor(e=new bn,t=new bn,n=new bn,i=new bn,r=new bn,o=new bn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],T=r[12],y=r[13],_=r[14],C=r[15];if(i[0].setComponents(l-o,f-u,p-g,C-T).normalize(),i[1].setComponents(l+o,f+u,p+g,C+T).normalize(),i[2].setComponents(l+a,f+h,p+x,C+y).normalize(),i[3].setComponents(l-a,f-h,p-x,C-y).normalize(),n)i[4].setComponents(c,d,m,_).normalize(),i[5].setComponents(l-c,f-d,p-m,C-_).normalize();else if(i[4].setComponents(l-c,f-d,p-m,C-_).normalize(),t===Fn)i[5].setComponents(l+c,f+d,p+m,C+_).normalize();else if(t===Pr)i[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);let t=Pp.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ko.x=i.normal.x>0?e.max.x:e.min.x,ko.y=i.normal.y>0?e.max.y:e.min.y,ko.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Li=class extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},na=new D,ia=new D,Mu=new Qe,Tr=new es,Ho=new gn,sl=new D,Su=new D,di=class extends mt{constructor(e=new xt,t=new Li){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)na.fromBufferAttribute(t,i-1),ia.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=na.distanceTo(ia);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(i),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;Mu.copy(i).invert(),Tr.copy(e.ray).applyMatrix4(Mu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=u.getX(x),T=u.getX(x+1),y=Go(this,e,Tr,c,p,T,x);y&&t.push(y)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Go(this,e,Tr,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=Go(this,e,Tr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Go(this,e,Tr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Go(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(na.fromBufferAttribute(a,i),ia.fromBufferAttribute(a,r),t.distanceSqToSegment(na,ia,sl,Su)>n)return;sl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(sl);if(!(l<e.near||l>e.far))return{distance:l,point:Su.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Tu=new D,bu=new D,Vr=class extends di{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Tu.fromBufferAttribute(t,i),bu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tu.distanceTo(bu);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Wr=class extends di{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},An=class extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wu=new Qe,fl=new es,Vo=new gn,Wo=new D,zn=class extends mt{constructor(e=new xt,t=new An){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(i),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;wu.copy(i).invert(),fl.copy(e.ray).applyMatrix4(wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);Wo.fromBufferAttribute(h,m),Eu(Wo,m,c,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Wo.fromBufferAttribute(h,g),Eu(Wo,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Eu(s,e,t,n,i,r,o){let a=fl.distanceSqToPoint(s);if(a<t){let c=new D;fl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var dn=class extends Xt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xr=class extends Xt{constructor(e,t,n=Ui,i,r,o,a=Qt,c=Qt,l,u=ks,h=1){if(u!==ks&&u!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},qr=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ts=class s extends xt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new D,u=new Ue;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},dt=class s extends xt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;T(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function T(){let _=new D,C=new D,w=0,P=(t-e)/n;for(let R=0;R<=r;R++){let M=[],S=R/r,E=S*(t-e)+e;for(let H=0;H<=i;H++){let I=H/i,K=I*c+a,Z=Math.sin(K),q=Math.cos(K);C.x=E*Z,C.y=-S*n+m,C.z=E*q,h.push(C.x,C.y,C.z),_.set(Z,P,q).normalize(),d.push(_.x,_.y,_.z),f.push(I,1-S),M.push(g++)}x.push(M)}for(let R=0;R<i;R++)for(let M=0;M<r;M++){let S=x[M][R],E=x[M+1][R],H=x[M+1][R+1],I=x[M][R+1];(e>0||M!==0)&&(u.push(S,E,I),w+=3),(t>0||M!==r-1)&&(u.push(E,H,I),w+=3)}l.addGroup(p,w,0),p+=w}function y(_){let C=g,w=new Ue,P=new D,R=0,M=_===!0?e:t,S=_===!0?1:-1;for(let H=1;H<=i;H++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let E=g;for(let H=0;H<=i;H++){let K=H/i*c+a,Z=Math.cos(K),q=Math.sin(K);P.x=M*q,P.y=m*S,P.z=M*Z,h.push(P.x,P.y,P.z),d.push(0,S,0),w.x=Z*.5+.5,w.y=q*.5*S+.5,f.push(w.x,w.y),g++}for(let H=0;H<i;H++){let I=C+H,K=E+H;_===!0?u.push(K,K+1,I):u.push(K+1,K,I),R+=3}l.addGroup(p,R,_===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ks=class s extends dt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yr=class s extends xt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let y=new D,_=new D,C=new D;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],_),f(t[w+2],C),c(y,_,C,T)}function c(T,y,_,C){let w=C+1,P=[];for(let R=0;R<=w;R++){P[R]=[];let M=T.clone().lerp(_,R/w),S=y.clone().lerp(_,R/w),E=w-R;for(let H=0;H<=E;H++)H===0&&R===w?P[R][H]=M:P[R][H]=M.clone().lerp(S,H/E)}for(let R=0;R<w;R++)for(let M=0;M<2*(w-R)-1;M++){let S=Math.floor(M/2);M%2===0?(d(P[R][S+1]),d(P[R+1][S]),d(P[R][S])):(d(P[R][S+1]),d(P[R+1][S+1]),d(P[R+1][S]))}}function l(T){let y=new D;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(T),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){let T=new D;for(let y=0;y<r.length;y+=3){T.x=r[y+0],T.y=r[y+1],T.z=r[y+2];let _=m(T)/2/Math.PI+.5,C=p(T)/Math.PI+.5;o.push(_,1-C)}g(),h()}function h(){for(let T=0;T<o.length;T+=6){let y=o[T+0],_=o[T+2],C=o[T+4],w=Math.max(y,_,C),P=Math.min(y,_,C);w>.9&&P<.1&&(y<.2&&(o[T+0]+=1),_<.2&&(o[T+2]+=1),C<.2&&(o[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function f(T,y){let _=T*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){let T=new D,y=new D,_=new D,C=new D,w=new Ue,P=new Ue,R=new Ue;for(let M=0,S=0;M<r.length;M+=9,S+=6){T.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),w.set(o[S+0],o[S+1]),P.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),C.copy(T).add(y).add(_).divideScalar(3);let E=m(C);x(w,S+0,T,E),x(P,S+2,y,E),x(R,S+4,_,E)}}function x(T,y,_,C){C<0&&T.x===1&&(o[y]=T.x-1),_.x===0&&_.z===0&&(o[y]=C/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new Ue:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,i=[],r=[],o=[],a=new D,c=new Qe;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(at(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Kr=class extends Rn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ue){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sa=class extends Kr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Xo=new D,rl=new kl,ol=new kl,al=new kl,$n=class extends Rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Xo.subVectors(i[0],i[1]).add(i[0]),l=Xo);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Xo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),rl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,m),ol.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,m),al.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),ol.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),al.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(rl.calc(c),ol.calc(c),al.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Au(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Lp(s,e){let t=1-s;return t*t*e}function Dp(s,e){return 2*(1-s)*s*e}function Np(s,e){return s*s*e}function Ar(s,e,t,n){return Lp(s,e)+Dp(s,t)+Np(s,n)}function Up(s,e){let t=1-s;return t*t*t*e}function Fp(s,e){let t=1-s;return 3*t*t*s*e}function Op(s,e){return 3*(1-s)*s*s*e}function Bp(s,e){return s*s*s*e}function Rr(s,e,t,n,i){return Up(s,e)+Fp(s,t)+Op(s,n)+Bp(s,i)}var ra=class extends Rn{constructor(e=new Ue,t=new Ue,n=new Ue,i=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ue){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rr(e,i.x,r.x,o.x,a.x),Rr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oa=class extends Rn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rr(e,i.x,r.x,o.x,a.x),Rr(e,i.y,r.y,o.y,a.y),Rr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},aa=class extends Rn{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends Rn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Rn{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,i.x,r.x,o.x),Ar(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends Rn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,i.x,r.x,o.x),Ar(e,i.y,r.y,o.y),Ar(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Au(a,c.x,l.x,u.x,h.x),Au(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Ue().fromArray(i))}return this}},zp=Object.freeze({__proto__:null,ArcCurve:sa,CatmullRomCurve3:$n,CubicBezierCurve:ra,CubicBezierCurve3:oa,EllipseCurve:Kr,LineCurve:aa,LineCurve3:ca,QuadraticBezierCurve:la,QuadraticBezierCurve3:$r,SplineCurve:ha});var fi=class s extends Yr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Di=class s extends Yr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},zt=class s extends xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let T=p*d-o;for(let y=0;y<l;y++){let _=y*h-r;g.push(_,-T,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){let y=T+l*p,_=T+l*(p+1),C=T+1+l*(p+1),w=T+1+l*p;f.push(y,_,w),f.push(_,C,w)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Zr=class s extends xt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/i,f=new D,g=new Ue;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let T=p+m,y=T,_=T+n+1,C=T+n+2,w=T+1;a.push(y,_,w),a.push(_,C,w)}}this.setIndex(a),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Dt=class s extends xt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new D,d=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let T=[],y=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){let w=C/t;h.x=-e*Math.cos(i+w*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+w*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(w+_,1-y),T.push(l++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){let y=u[p][T+1],_=u[p][T],C=u[p+1][T],w=u[p+1][T+1];(p!==0||o>0)&&f.push(y,_,w),(p!==n-1||c<Math.PI)&&f.push(_,C,w)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qt=class s extends xt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],u=new D,h=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,T=(i+1)*f+g;o.push(x,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ns=class s extends xt{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],c=[],l=[],u=[],h=new D,d=new D,f=new D,g=new D,x=new D,m=new D,p=new D;for(let y=0;y<=n;++y){let _=y/n*r*Math.PI*2;T(_,r,o,e,f),T(_+.01,r,o,e,g),m.subVectors(g,f),p.addVectors(g,f),x.crossVectors(m,p),p.crossVectors(x,m),x.normalize(),p.normalize();for(let C=0;C<=i;++C){let w=C/i*Math.PI*2,P=-t*Math.cos(w),R=t*Math.sin(w);h.x=f.x+(P*p.x+R*x.x),h.y=f.y+(P*p.y+R*x.y),h.z=f.z+(P*p.z+R*x.z),c.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),u.push(y/n),u.push(C/i)}}for(let y=1;y<=n;y++)for(let _=1;_<=i;_++){let C=(i+1)*(y-1)+(_-1),w=(i+1)*y+(_-1),P=(i+1)*y+_,R=(i+1)*(y-1)+_;a.push(C,w,R),a.push(w,P,R)}this.setIndex(a),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(u,2));function T(y,_,C,w,P){let R=Math.cos(y),M=Math.sin(y),S=C/_*y,E=Math.cos(S);P.x=w*(2+E)*.5*R,P.y=w*(2+E)*M*.5,P.z=w*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},is=class s extends xt{constructor(e=new $r(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,c=new D,l=new Ue,u=new D,h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),T(),p()}function m(y){u=e.getPointAt(y/t,u);let _=o.normals[y],C=o.binormals[y];for(let w=0;w<=i;w++){let P=w/i*Math.PI*2,R=Math.sin(P),M=-Math.cos(P);c.x=M*_.x+R*C.x,c.y=M*_.y+R*C.y,c.z=M*_.z+R*C.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=i;_++){let C=(i+1)*(y-1)+(_-1),w=(i+1)*y+(_-1),P=(i+1)*y+_,R=(i+1)*(y-1)+_;g.push(C,w,R),g.push(w,P,R)}}function T(){for(let y=0;y<=t;y++)for(let _=0;_<=i;_++)l.x=y/t,l.y=_/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new zp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var We=class extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends We{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ua=class extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},da=class extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qo(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function kp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Hp(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ru(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Ed(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var pi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fa=class extends pi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yi,endingEnd:Yi}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ki:r=e,a=2*t-n;break;case Cr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ki:o=e,c=2*n-t;break;case Cr:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,T=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let C=0;C!==a;++C)r[C]=p*o[u+C]+T*o[l+C]+y*o[c+C]+_*o[h+C];return r}},Jr=class extends pi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},pa=class extends pi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},_n=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qo(t,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qo(e.times,Array),values:qo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ji:t=this.InterpolantFactoryMethodDiscrete;break;case ji:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ji;case this.InterpolantFactoryMethodLinear:return ji;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&kp(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yo,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=ji;var mi=class extends _n{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Ji;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}};jr.prototype.ValueTypeName="color";var Zn=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}};Zn.prototype.ValueTypeName="number";var ma=class extends pi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let u=l+a;l!==u;l+=4)Jt.slerpFlat(r,0,o,l-a,o,l,c);return r}},kn=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}};kn.prototype.ValueTypeName="quaternion";kn.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends _n{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Ji;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}};Hn.prototype.ValueTypeName="vector";var Ni=class{constructor(e="",t=-1,n=[],i=fc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Vp(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(_n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=Hp(c);c=Ru(c,1,u),l=Ru(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Zn(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];Ed(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){let y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new Zn(".morphTargetInfluence["+x+"]",m,p))}c=f.length*o}else{let f=".bones["+t[h].name+"]";n(Hn,f+".position",d,"pos",i),n(kn,f+".quaternion",d,"rot",i),n(Hn,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Gp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zn;case"vector":case"vector2":case"vector3":case"vector4":return Hn;case"color":return jr;case"quaternion":return kn;case"bool":case"boolean":return mi;case"string":return gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Vp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Gp(s.type);if(s.times===void 0){let t=[],n=[];Ed(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Xn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},ga=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ad=new ga,Gn=class{constructor(e){this.manager=e!==void 0?e:Ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Gn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ci={},pl=class extends Error{constructor(e,t){super(e),this.response=t}},ss=class extends Gn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Xn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:i});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=ci[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){T();function T(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,P=u.length;w<P;w++){let R=u[w];R.onProgress&&R.onProgress(C)}p.enqueue(_),T()}},y=>{p.error(y)})}}});return new Response(m)}else throw new pl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Xn.add(`file:${e}`,l);let u=ci[e];delete ci[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=ci[e];if(u===void 0)throw this.manager.itemError(e),l;delete ci[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Os=new WeakMap,xa=class extends Gn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Os.get(o);h===void 0&&(h=[],Os.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=Hs("img");function c(){u(),t&&t(this);let h=Os.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Os.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),Xn.remove(`image:${e}`);let d=Os.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}Os.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Qr=class extends Gn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new En,a=new ss(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:wn,o.wrapT=l.wrapT!==void 0?l.wrapT:wn,o.magFilter=l.magFilter!==void 0?l.magFilter:Ot,o.minFilter=l.minFilter!==void 0?l.minFilter:Ot,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Cn),l.mipmapCount===1&&(o.minFilter=Ot),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}},rs=class extends Gn{constructor(e){super(e)}load(e,t,n,i){let r=new Xt,o=new xa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},os=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},eo=class extends os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},cl=new Qe,Cu=new D,Iu=new D,to=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cu),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ml=class extends to{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Qi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},no=class extends os{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ml}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Pu=new Qe,br=new D,ll=new D,gl=class extends to{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),br.setFromMatrixPosition(e.matrixWorld),n.position.copy(br),ll.copy(n.position),ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ll),n.updateMatrixWorld(),i.makeTranslation(-br.x,-br.y,-br.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu,n.coordinateSystem,n.reversedDepth)}},Vt=class extends os{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},as=class extends Fr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xl=class extends to{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new xl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var hl=new WeakMap,io=class extends Gn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(hl.has(o)===!0)i&&i(hl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),hl.set(c,l),Xn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Xn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _a=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},so=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var ya=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Jt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Jt.multiplyQuaternionsFlat(e,o,e,t,e,n),Jt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Hl="\\[\\]\\.:\\/",Wp=new RegExp("["+Hl+"]","g"),Gl="[^"+Hl+"]",Xp="[^"+Hl.replace("\\.","")+"]",qp=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Yp=/(WCOD+)?/.source.replace("WCOD",Xp),Kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),$p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),Zp=new RegExp("^"+qp+Yp+Kp+$p+"$"),Jp=["material","materials","bones","map"],_l=class{constructor(e,t,n){let i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(e){let t=Zp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Jp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=_l;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var va=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Yi,endingEnd:Yi};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case hd:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case fc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===ld;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===ad){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ki,i.endingEnd=Ki):(e?i.endingStart=this.zeroSlopeAtStart?Ki:Yi:i.endingStart=Cr,t?i.endingEnd=this.zeroSlopeAtEnd?Ki:Yi:i.endingEnd=Cr)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},jp=new Float32Array(1),_i=class extends qn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=i[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new ya(At.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Jr(new Float32Array(2),new Float32Array(2),1,jp),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Ni.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=fc),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new va(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ni.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};function Vl(s,e,t,n){let i=Qp(n);switch(t){case Cl:return s*e;case Ua:return s*e/i.components*i.byteLength;case Fa:return s*e/i.components*i.byteLength;case Pl:return s*e*2/i.components*i.byteLength;case Oa:return s*e*2/i.components*i.byteLength;case Il:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case Ba:return s*e*4/i.components*i.byteLength;case ao:case co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lo:case ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ka:case Ga:return Math.max(s,16)*Math.max(e,8)/4;case za:case Ha:return Math.max(s,8)*Math.max(e,8)/2;case Va:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case oc:case ac:case cc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lc:case hc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case uc:case dc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qp(s){switch(s){case Vn:case wl:return{byteLength:1,components:1};case Js:case El:case Wn:return{byteLength:2,components:1};case Da:case Na:return{byteLength:2,components:4};case Ui:case La:case rn:return{byteLength:4,components:1};case Al:case Rl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Jd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function nm(s){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,xm=`#ifdef USE_BUMPMAP
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Em=`#define PI 3.141592653589793
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
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rm=`vec3 transformedNormal = objectNormal;
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
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eg=`PhysicalMaterial material;
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
#endif`,tg=`struct PhysicalMaterial {
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
}`,ng=`
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dg=`#if defined( USE_POINTS_UV )
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
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
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
#endif`,Eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`#include <common>
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
}`,l0=`#if DEPTH_PACKING == 3200
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
}`,h0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#include <common>
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
}`,x0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,y0=`#define LAMBERT
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
}`,v0=`#define MATCAP
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
}`,M0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,T0=`#define NORMAL
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
}`,b0=`#define PHONG
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
}`,w0=`#define PHONG
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
}`,E0=`#define STANDARD
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
}`,A0=`#define STANDARD
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
}`,R0=`#define TOON
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
}`,C0=`#define TOON
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
}`,I0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,D0=`uniform vec3 color;
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
}`,N0=`uniform float rotation;
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
}`,U0=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:om,alphatest_fragment:am,alphatest_pars_fragment:cm,aomap_fragment:lm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:xm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:vm,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:Tm,color_pars_vertex:bm,color_vertex:wm,common:Em,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Cm,displacementmap_vertex:Im,emissivemap_fragment:Pm,emissivemap_pars_fragment:Lm,colorspace_fragment:Dm,colorspace_pars_fragment:Nm,envmap_fragment:Um,envmap_common_pars_fragment:Fm,envmap_pars_fragment:Om,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:$m,envmap_vertex:zm,fog_vertex:km,fog_pars_vertex:Hm,fog_fragment:Gm,fog_pars_fragment:Vm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:Km,lights_toon_fragment:Zm,lights_toon_pars_fragment:Jm,lights_phong_fragment:jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:eg,lights_physical_pars_fragment:tg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:cg,map_fragment:lg,map_pars_fragment:hg,map_particle_fragment:ug,map_particle_pars_fragment:dg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:xg,morphtarget_pars_vertex:_g,morphtarget_vertex:yg,normal_fragment_begin:vg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:Tg,normal_vertex:bg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Eg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Ig,packing:Pg,premultiplied_alpha_fragment:Lg,project_vertex:Dg,dithering_fragment:Ng,dithering_pars_fragment:Ug,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:kg,shadowmask_pars_fragment:Hg,skinbase_vertex:Gg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:Kg,tonemapping_pars_fragment:$g,transmission_fragment:Zg,transmission_pars_fragment:Jg,uv_pars_fragment:jg,uv_pars_vertex:Qg,uv_vertex:e0,worldpos_vertex:t0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:o0,cube_frag:a0,depth_vert:c0,depth_frag:l0,distanceRGBA_vert:h0,distanceRGBA_frag:u0,equirect_vert:d0,equirect_frag:f0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:g0,meshbasic_frag:x0,meshlambert_vert:_0,meshlambert_frag:y0,meshmatcap_vert:v0,meshmatcap_frag:M0,meshnormal_vert:S0,meshnormal_frag:T0,meshphong_vert:b0,meshphong_frag:w0,meshphysical_vert:E0,meshphysical_frag:A0,meshtoon_vert:R0,meshtoon_frag:C0,points_vert:I0,points_frag:P0,shadow_vert:L0,shadow_frag:D0,sprite_vert:N0,sprite_frag:U0},Pe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},jn={basic:{uniforms:on([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:on([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:on([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:on([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:on([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:on([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:on([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:on([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:on([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:on([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:on([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:on([Pe.common,Pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:on([Pe.lights,Pe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};jn.physical={uniforms:on([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var pc={r:0,b:0,g:0},fs=new Mn,F0=new Qe;function O0(s,e,t,n,i,r,o){let a=new Ve(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,C=g(y);C===null?p(a,c):C&&C.isColor&&(p(C,1),_=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,_){let C=g(_);C&&(C.isCubeTexture||C.mapping===oo)?(u===void 0&&(u=new rt(new Pt(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:ds(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),fs.copy(_.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(F0.makeRotationFromEuler(fs)),u.material.toneMapped=pt.getTransfer(C.colorSpace)!==wt,(h!==C||d!==C.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,f=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new rt(new zt(2,2),new Bn({name:"BackgroundMaterial",uniforms:ds(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=pt.getTransfer(C.colorSpace)!==wt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=C,d=C.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(pc,zl(s)),n.buffers.color.setClear(pc.r,pc.g,pc.b,_,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:m,dispose:T}}function B0(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(S,E,H,I,K){let Z=!1,q=h(I,H,E);r!==q&&(r=q,l(r.object)),Z=f(S,I,H,K),Z&&g(S,I,H,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(S,E,H,I),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,E,H){let I=H.wireframe===!0,K=n[S.id];K===void 0&&(K={},n[S.id]=K);let Z=K[E.id];Z===void 0&&(Z={},K[E.id]=Z);let q=Z[I];return q===void 0&&(q=d(c()),Z[I]=q),q}function d(S){let E=[],H=[],I=[];for(let K=0;K<t;K++)E[K]=0,H[K]=0,I[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:H,attributeDivisors:I,object:S,attributes:{},index:null}}function f(S,E,H,I){let K=r.attributes,Z=E.attributes,q=0,pe=H.getAttributes();for(let ne in pe)if(pe[ne].location>=0){let te=K[ne],V=Z[ne];if(V===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),te===void 0||te.attribute!==V||V&&te.data!==V.data)return!0;q++}return r.attributesNum!==q||r.index!==I}function g(S,E,H,I){let K={},Z=E.attributes,q=0,pe=H.getAttributes();for(let ne in pe)if(pe[ne].location>=0){let te=Z[ne];te===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(te=S.instanceColor));let V={};V.attribute=te,te&&te.data&&(V.data=te.data),K[ne]=V,q++}r.attributes=K,r.attributesNum=q,r.index=I}function x(){let S=r.newAttributes;for(let E=0,H=S.length;E<H;E++)S[E]=0}function m(S){p(S,0)}function p(S,E){let H=r.newAttributes,I=r.enabledAttributes,K=r.attributeDivisors;H[S]=1,I[S]===0&&(s.enableVertexAttribArray(S),I[S]=1),K[S]!==E&&(s.vertexAttribDivisor(S,E),K[S]=E)}function T(){let S=r.newAttributes,E=r.enabledAttributes;for(let H=0,I=E.length;H<I;H++)E[H]!==S[H]&&(s.disableVertexAttribArray(H),E[H]=0)}function y(S,E,H,I,K,Z,q){q===!0?s.vertexAttribIPointer(S,E,H,K,Z):s.vertexAttribPointer(S,E,H,I,K,Z)}function _(S,E,H,I){x();let K=I.attributes,Z=H.getAttributes(),q=E.defaultAttributeValues;for(let pe in Z){let ne=Z[pe];if(ne.location>=0){let F=K[pe];if(F===void 0&&(pe==="instanceMatrix"&&S.instanceMatrix&&(F=S.instanceMatrix),pe==="instanceColor"&&S.instanceColor&&(F=S.instanceColor)),F!==void 0){let te=F.normalized,V=F.itemSize,re=e.get(F);if(re===void 0)continue;let U=re.buffer,X=re.type,oe=re.bytesPerElement,Y=X===s.INT||X===s.UNSIGNED_INT||F.gpuType===La;if(F.isInterleavedBufferAttribute){let k=F.data,de=k.stride,ye=F.offset;if(k.isInstancedInterleavedBuffer){for(let ge=0;ge<ne.locationSize;ge++)p(ne.location+ge,k.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ge=0;ge<ne.locationSize;ge++)m(ne.location+ge);s.bindBuffer(s.ARRAY_BUFFER,U);for(let ge=0;ge<ne.locationSize;ge++)y(ne.location+ge,V/ne.locationSize,X,te,de*oe,(ye+V/ne.locationSize*ge)*oe,Y)}else{if(F.isInstancedBufferAttribute){for(let k=0;k<ne.locationSize;k++)p(ne.location+k,F.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let k=0;k<ne.locationSize;k++)m(ne.location+k);s.bindBuffer(s.ARRAY_BUFFER,U);for(let k=0;k<ne.locationSize;k++)y(ne.location+k,V/ne.locationSize,X,te,V*oe,V/ne.locationSize*k*oe,Y)}}else if(q!==void 0){let te=q[pe];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(ne.location,te);break;case 3:s.vertexAttrib3fv(ne.location,te);break;case 4:s.vertexAttrib4fv(ne.location,te);break;default:s.vertexAttrib1fv(ne.location,te)}}}}T()}function C(){R();for(let S in n){let E=n[S];for(let H in E){let I=E[H];for(let K in I)u(I[K].object),delete I[K];delete E[H]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let E=n[S.id];for(let H in E){let I=E[H];for(let K in I)u(I[K].object),delete I[K];delete E[H]}delete n[S.id]}function P(S){for(let E in n){let H=n[E];if(H[S.id]===void 0)continue;let I=H[S.id];for(let K in I)u(I[K].object),delete I[K];delete H[S.id]}}function R(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function z0(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function k0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==pn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let R=P===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Vn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==rn&&!R)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:C,maxSamples:w}}function H0(s){let e=this,t=null,n=0,i=!1,r=!1,o=new bn,a=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{let T=r?0:n,y=T*4,_=p.clippingState||null;c.value=_,_=u(g,d,y,f);for(let C=0;C!==y;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(h[y]).applyMatrix4(T,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function G0(s){let e=new WeakMap;function t(o,a){return a===$s?o.mapping=ls:a===Ia&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$s||a===Ia)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ta(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var nr=4,Rd=[.125,.215,.35,.446,.526,.582],gs=20,Wl=new as,Cd=new Ve,Xl=null,ql=0,Yl=0,Kl=!1,ms=(1+Math.sqrt(5))/2,tr=1/ms,Id=[new D(-ms,tr,0),new D(ms,tr,0),new D(-tr,0,ms),new D(tr,0,ms),new D(0,ms,-tr),new D(0,ms,tr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],V0=new D,sr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=V0}=r;Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,ql,Yl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,mc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Wn,format:pn,colorSpace:Wt,depthBuffer:!1},i=Pd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W0(r)),this._blurMaterial=X0(r,e,t)}return i}_compileMaterial(e){let t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,Wl)}_sceneToCubeUV(e,t,n,i,r){let c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Cd),h.toneMapping=vi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let x=new Rt({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new rt(new Pt,x),p=!1,T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,p=!0):(x.color.copy(Cd),p=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));let C=this._cubeSize;mc(i,_*C,y>2?C:0,C,C),h.setRenderTarget(i),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ls||e.mapping===hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;mc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Wl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Id[(i-r-1)%Id.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new rt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):gs;m>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);let p=[],T=0;for(let P=0;P<gs;++P){let R=P/x,M=Math.exp(-R*R/2);p.push(M),P===0?T+=M:P<m&&(T+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let _=this._sizeLods[i],C=3*_*(i>y-nr?i-y+nr:0),w=4*(this._cubeSize-_);mc(t,C,w,3*_,2*_),c.setRenderTarget(t),c.render(h,Wl)}};function W0(s){let e=[],t=[],n=[],i=s,r=s-nr+1+Rd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-nr?c=Rd[o-s+nr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,T=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){let P=w%3*2/3-1,R=w>2?0:-1,M=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];T.set(M,x*g*w),y.set(d,m*g*w);let S=[w,w,w,w,w,w];_.set(S,p*g*w)}let C=new xt;C.setAttribute("position",new Gt(T,x)),C.setAttribute("uv",new Gt(y,m)),C.setAttribute("faceIndex",new Gt(_,p)),e.push(C),i>nr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pd(s,e,t){let n=new Yn(s,e,t);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function X0(s,e,t){let n=new Float32Array(gs),i=new D(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sh(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ld(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Dd(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function sh(){return`

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
	`}function q0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===$s||c===Ia,u=c===ls||c===hs;if(l||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new sr(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new sr(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Y0(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function K0(s,e,t,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let T=f.array;x=f.version;for(let y=0,_=T.length;y<_;y+=3){let C=T[y+0],w=T[y+1],P=T[y+2];d.push(C,w,w,P,P,C)}}else if(g!==void 0){let T=g.array;x=g.version;for(let y=0,_=T.length/3-1;y<_;y+=3){let C=y+0,w=y+1,P=y+2;d.push(C,w,w,P,P,C)}}else return;let m=new(Bl(d)?Ur:Nr)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function $0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*x[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Z0(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function J0(s,e,t){let n=new WeakMap,i=new Mt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*C*4*h),P=new Lr(w,_,C,h);P.type=rn,P.needsUpdate=!0;let R=y*4;for(let S=0;S<h;S++){let E=m[S],H=p[S],I=T[S],K=_*C*4*S;for(let Z=0;Z<E.count;Z++){let q=Z*R;f===!0&&(i.fromBufferAttribute(E,Z),w[K+q+0]=i.x,w[K+q+1]=i.y,w[K+q+2]=i.z,w[K+q+3]=0),g===!0&&(i.fromBufferAttribute(H,Z),w[K+q+4]=i.x,w[K+q+5]=i.y,w[K+q+6]=i.z,w[K+q+7]=0),x===!0&&(i.fromBufferAttribute(I,Z),w[K+q+8]=i.x,w[K+q+9]=i.y,w[K+q+10]=i.z,w[K+q+11]=I.itemSize===4?i.w:1)}}d={count:h,texture:P,size:new Ue(_,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function j0(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var jd=new Xt,Nd=new Xr(1,1),Qd=new Lr,ef=new Qo,tf=new Or,Ud=[],Fd=[],Od=new Float32Array(16),Bd=new Float32Array(9),zd=new Float32Array(4);function rr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Ud[i];if(r===void 0&&(r=new Float32Array(i),Ud[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Yt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function _c(s,e){let t=Fd[e];t===void 0&&(t=new Int32Array(e),Fd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Q0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ex(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2fv(this.addr,e),Kt(t,e)}}function tx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;s.uniform3fv(this.addr,e),Kt(t,e)}}function nx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4fv(this.addr,e),Kt(t,e)}}function ix(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;zd.set(n),s.uniformMatrix2fv(this.addr,!1,zd),Kt(t,n)}}function sx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Bd.set(n),s.uniformMatrix3fv(this.addr,!1,Bd),Kt(t,n)}}function rx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Od.set(n),s.uniformMatrix4fv(this.addr,!1,Od),Kt(t,n)}}function ox(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ax(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2iv(this.addr,e),Kt(t,e)}}function cx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3iv(this.addr,e),Kt(t,e)}}function lx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4iv(this.addr,e),Kt(t,e)}}function hx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2uiv(this.addr,e),Kt(t,e)}}function dx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3uiv(this.addr,e),Kt(t,e)}}function fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4uiv(this.addr,e),Kt(t,e)}}function px(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Nd.compareFunction=Nl,r=Nd):r=jd,t.setTexture2D(e||r,i)}function mx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ef,i)}function gx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||tf,i)}function xx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qd,i)}function _x(s){switch(s){case 5126:return Q0;case 35664:return ex;case 35665:return tx;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return cx;case 35669:case 35673:return lx;case 5125:return hx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return xx}}function yx(s,e){s.uniform1fv(this.addr,e)}function vx(s,e){let t=rr(e,this.size,2);s.uniform2fv(this.addr,t)}function Mx(s,e){let t=rr(e,this.size,3);s.uniform3fv(this.addr,t)}function Sx(s,e){let t=rr(e,this.size,4);s.uniform4fv(this.addr,t)}function Tx(s,e){let t=rr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bx(s,e){let t=rr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wx(s,e){let t=rr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ex(s,e){s.uniform1iv(this.addr,e)}function Ax(s,e){s.uniform2iv(this.addr,e)}function Rx(s,e){s.uniform3iv(this.addr,e)}function Cx(s,e){s.uniform4iv(this.addr,e)}function Ix(s,e){s.uniform1uiv(this.addr,e)}function Px(s,e){s.uniform2uiv(this.addr,e)}function Lx(s,e){s.uniform3uiv(this.addr,e)}function Dx(s,e){s.uniform4uiv(this.addr,e)}function Nx(s,e,t){let n=this.cache,i=e.length,r=_c(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||jd,r[o])}function Ux(s,e,t){let n=this.cache,i=e.length,r=_c(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ef,r[o])}function Fx(s,e,t){let n=this.cache,i=e.length,r=_c(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||tf,r[o])}function Ox(s,e,t){let n=this.cache,i=e.length,r=_c(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Qd,r[o])}function Bx(s){switch(s){case 5126:return yx;case 35664:return vx;case 35665:return Mx;case 35666:return Sx;case 35674:return Tx;case 35675:return bx;case 35676:return wx;case 5124:case 35670:return Ex;case 35667:case 35671:return Ax;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Ix;case 36294:return Px;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Ox}}var Zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_x(t.type)}},Jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bx(t.type)}},jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function kd(s,e){s.seq.push(e),s.map[e.id]=e}function zx(s,e,t){let n=s.name,i=n.length;for($l.lastIndex=0;;){let r=$l.exec(n),o=$l.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){kd(t,l===void 0?new Zl(a,s,e):new Jl(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new jl(a),kd(t,h)),t=h}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);zx(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Hd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var kx=37297,Hx=0;function Gx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Gd=new st;function Vx(s){pt._getMatrix(Gd,pt.workingColorSpace,s);let e=`mat3( ${Gd.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(s)){case Ir:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Gx(s.getShaderSource(e),a)}else return r}function Wx(s,e){let t=Vx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xx(s,e){let t;switch(e){case ed:t="Linear";break;case td:t="Reinhard";break;case nd:t="Cineon";break;case Ca:t="ACESFilmic";break;case sd:t="AgX";break;case rd:t="Neutral";break;case id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gc=new D;function qx(){pt.getLuminanceCoefficients(gc);let s=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function Kx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $x(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function fo(s){return s!==""}function Wd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(s){return s.replace(Zx,jx)}var Jx=new Map;function jx(s,e){let t=ct[e];if(t===void 0){let n=Jx.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ql(t)}var Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(s){return s.replace(Qx,e_)}function e_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function t_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ma?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function n_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ls:case hs:e="ENVMAP_TYPE_CUBE";break;case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function s_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Tl:e="ENVMAP_BLENDING_MULTIPLY";break;case ju:e="ENVMAP_BLENDING_MIX";break;case Qu:e="ENVMAP_BLENDING_ADD";break}return e}function r_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function o_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=t_(t),l=n_(t),u=i_(t),h=s_(t),d=r_(t),f=Yx(t),g=Kx(r),x=i.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),p.length>0&&(p+=`
`)):(m=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),p=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?ct.tonemapping_pars_fragment:"",t.toneMapping!==vi?Xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Wx("linearToOutputTexel",t.outputColorSpace),qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),o=Ql(o),o=Wd(o,t),o=Xd(o,t),a=Ql(a),a=Wd(a,t),a=Xd(a,t),o=qd(o),a=qd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=T+m+o,_=T+p+a,C=Hd(i,i.VERTEX_SHADER,y),w=Hd(i,i.FRAGMENT_SHADER,_);i.attachShader(x,C),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function P(E){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(x)||"",I=i.getShaderInfoLog(C)||"",K=i.getShaderInfoLog(w)||"",Z=H.trim(),q=I.trim(),pe=K.trim(),ne=!0,F=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,w);else{let te=Vd(i,C,"vertex"),V=Vd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+Z+`
`+te+`
`+V)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(q===""||pe==="")&&(F=!1);F&&(E.diagnostics={runnable:ne,programLog:Z,vertexShader:{log:q,prefix:m},fragmentShader:{log:pe,prefix:p}})}i.deleteShader(C),i.deleteShader(w),R=new ir(i,x),M=$x(i,x)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,kx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}var a_=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new th(e),t.set(e,n)),n}},th=class{constructor(e){this.id=a_++,this.code=e,this.usedTimes=0}};function c_(s,e,t,n,i,r,o){let a=new Dr,c=new eh,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,E,H,I){let K=H.fog,Z=I.geometry,q=M.isMeshStandardMaterial?H.environment:null,pe=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),ne=pe&&pe.mapping===oo?pe.image.height:null,F=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let te=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,V=te!==void 0?te.length:0,re=0;Z.morphAttributes.position!==void 0&&(re=1),Z.morphAttributes.normal!==void 0&&(re=2),Z.morphAttributes.color!==void 0&&(re=3);let U,X,oe,Y;if(F){let _t=jn[F];U=_t.vertexShader,X=_t.fragmentShader}else U=M.vertexShader,X=M.fragmentShader,c.update(M),oe=c.getVertexShaderID(M),Y=c.getFragmentShaderID(M);let k=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),ye=I.isInstancedMesh===!0,ge=I.isBatchedMesh===!0,Fe=!!M.map,nt=!!M.matcap,B=!!pe,ht=!!M.aoMap,ke=!!M.lightMap,Xe=!!M.bumpMap,De=!!M.normalMap,St=!!M.displacementMap,N=!!M.emissiveMap,J=!!M.metalnessMap,ie=!!M.roughnessMap,le=M.anisotropy>0,b=M.clearcoat>0,v=M.dispersion>0,$=M.iridescence>0,ce=M.sheen>0,O=M.transmission>0,G=le&&!!M.anisotropyMap,ee=b&&!!M.clearcoatMap,se=b&&!!M.clearcoatNormalMap,me=b&&!!M.clearcoatRoughnessMap,Te=$&&!!M.iridescenceMap,fe=$&&!!M.iridescenceThicknessMap,xe=ce&&!!M.sheenColorMap,Ie=ce&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,Ae=!!M.specularColorMap,qe=!!M.specularIntensityMap,W=O&&!!M.transmissionMap,be=O&&!!M.thicknessMap,Re=!!M.gradientMap,Le=!!M.alphaMap,Me=M.alphaTest>0,_e=!!M.alphaHash,ze=!!M.extensions,je=vi;M.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(je=s.toneMapping);let lt={shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:U,fragmentShader:X,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ge,batchingColor:ge&&I._colorsTexture!==null,instancing:ye,instancingColor:ye&&I.instanceColor!==null,instancingMorph:ye&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?s.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Wt,alphaToCoverage:!!M.alphaToCoverage,map:Fe,matcap:nt,envMap:B,envMapMode:B&&pe.mapping,envMapCubeUVHeight:ne,aoMap:ht,lightMap:ke,bumpMap:Xe,normalMap:De,displacementMap:d&&St,emissiveMap:N,normalMapObjectSpace:De&&M.normalMapType===fd,normalMapTangentSpace:De&&M.normalMapType===Dl,metalnessMap:J,roughnessMap:ie,anisotropy:le,anisotropyMap:G,clearcoat:b,clearcoatMap:ee,clearcoatNormalMap:se,clearcoatRoughnessMap:me,dispersion:v,iridescence:$,iridescenceMap:Te,iridescenceThicknessMap:fe,sheen:ce,sheenColorMap:xe,sheenRoughnessMap:Ie,specularMap:Ce,specularColorMap:Ae,specularIntensityMap:qe,transmission:O,transmissionMap:W,thicknessMap:be,gradientMap:Re,opaque:M.transparent===!1&&M.blending===$i&&M.alphaToCoverage===!1,alphaMap:Le,alphaTest:Me,alphaHash:_e,combine:M.combine,mapUv:Fe&&x(M.map.channel),aoMapUv:ht&&x(M.aoMap.channel),lightMapUv:ke&&x(M.lightMap.channel),bumpMapUv:Xe&&x(M.bumpMap.channel),normalMapUv:De&&x(M.normalMap.channel),displacementMapUv:St&&x(M.displacementMap.channel),emissiveMapUv:N&&x(M.emissiveMap.channel),metalnessMapUv:J&&x(M.metalnessMap.channel),roughnessMapUv:ie&&x(M.roughnessMap.channel),anisotropyMapUv:G&&x(M.anisotropyMap.channel),clearcoatMapUv:ee&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(M.sheenRoughnessMap.channel),specularMapUv:Ce&&x(M.specularMap.channel),specularColorMapUv:Ae&&x(M.specularColorMap.channel),specularIntensityMapUv:qe&&x(M.specularIntensityMap.channel),transmissionMapUv:W&&x(M.transmissionMap.channel),thicknessMapUv:be&&x(M.thicknessMap.channel),alphaMapUv:Le&&x(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(De||le),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Z.attributes.uv&&(Fe||Le),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:I.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:re,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:je,decodeVideoTexture:Fe&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===wt,decodeVideoTextureEmissive:N&&M.emissiveMap.isVideoTexture===!0&&pt.getTransfer(M.emissiveMap.colorSpace)===wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ut,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ze&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&M.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let E in M.defines)S.push(E),S.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(T(S,M),y(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let S=g[M.type],E;if(S){let H=jn[S];E=bd.clone(H.uniforms)}else E=M.uniforms;return E}function C(M,S){let E;for(let H=0,I=u.length;H<I;H++){let K=u[H];if(K.cacheKey===S){E=K,++E.usedTimes;break}}return E===void 0&&(E=new o_(s,S,M,r),u.push(E)),E}function w(M){if(--M.usedTimes===0){let S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function P(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:R}}function l_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function h_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Kd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $d(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||h_),n.length>1&&n.sort(d||Kd),i.length>1&&i.sort(d||Kd)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function u_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new $d,s.set(n,[o])):i>=r.length?(o=new $d,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function d_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ve};break;case"SpotLight":t={position:new D,direction:new D,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function f_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var p_=0;function m_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function g_(s){let e=new d_,t=f_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let i=new D,r=new Qe,o=new Qe;function a(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,T=0,y=0,_=0,C=0,w=0,P=0;l.sort(m_);for(let M=0,S=l.length;M<S;M++){let E=l[M],H=E.color,I=E.intensity,K=E.distance,Z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=H.r*I,h+=H.g*I,d+=H.b*I;else if(E.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(E.sh.coefficients[q],I);P++}else if(E.isDirectionalLight){let q=e.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let pe=E.shadow,ne=t.get(E);ne.shadowIntensity=pe.intensity,ne.shadowBias=pe.bias,ne.shadowNormalBias=pe.normalBias,ne.shadowRadius=pe.radius,ne.shadowMapSize=pe.mapSize,n.directionalShadow[f]=ne,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=E.shadow.matrix,T++}n.directional[f]=q,f++}else if(E.isSpotLight){let q=e.get(E);q.position.setFromMatrixPosition(E.matrixWorld),q.color.copy(H).multiplyScalar(I),q.distance=K,q.coneCos=Math.cos(E.angle),q.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),q.decay=E.decay,n.spot[x]=q;let pe=E.shadow;if(E.map&&(n.spotLightMap[C]=E.map,C++,pe.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[x]=pe.matrix,E.castShadow){let ne=t.get(E);ne.shadowIntensity=pe.intensity,ne.shadowBias=pe.bias,ne.shadowNormalBias=pe.normalBias,ne.shadowRadius=pe.radius,ne.shadowMapSize=pe.mapSize,n.spotShadow[x]=ne,n.spotShadowMap[x]=Z,_++}x++}else if(E.isRectAreaLight){let q=e.get(E);q.color.copy(H).multiplyScalar(I),q.halfWidth.set(E.width*.5,0,0),q.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=q,m++}else if(E.isPointLight){let q=e.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),q.distance=E.distance,q.decay=E.decay,E.castShadow){let pe=E.shadow,ne=t.get(E);ne.shadowIntensity=pe.intensity,ne.shadowBias=pe.bias,ne.shadowNormalBias=pe.normalBias,ne.shadowRadius=pe.radius,ne.shadowMapSize=pe.mapSize,ne.shadowCameraNear=pe.camera.near,ne.shadowCameraFar=pe.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=E.shadow.matrix,y++}n.point[g]=q,g++}else if(E.isHemisphereLight){let q=e.get(E);q.skyColor.copy(E.color).multiplyScalar(I),q.groundColor.copy(E.groundColor).multiplyScalar(I),n.hemi[p]=q,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==T||R.numPointShadows!==y||R.numSpotShadows!==_||R.numSpotMaps!==C||R.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=T,R.numPointShadows=y,R.numSpotShadows=_,R.numSpotMaps=C,R.numLightProbes=P,n.version=p_++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){let y=l[p];if(y.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Zd(s){let e=new g_(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function x_(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Zd(s),e.set(i,[a])):r>=o.length?(a=new Zd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`;function v_(s,e,t){let n=new Ys,i=new Ue,r=new Ue,o=new Mt,a=new ua({depthPacking:dd}),c=new da,l={},u=t.maxTextureSize,h={[cn]:fn,[fn]:cn,[Ut]:Ut},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:__,fragmentShader:y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let p=this.type;this.render=function(w,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=s.getRenderTarget(),S=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),H=s.state;H.setBlending(yi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let I=p!==Jn&&this.type===Jn,K=p===Jn&&this.type!==Jn;for(let Z=0,q=w.length;Z<q;Z++){let pe=w[Z],ne=pe.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;i.copy(ne.mapSize);let F=ne.getFrameExtents();if(i.multiply(F),r.copy(ne.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/F.x),i.x=r.x*F.x,ne.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/F.y),i.y=r.y*F.y,ne.mapSize.y=r.y)),ne.map===null||I===!0||K===!0){let V=this.type!==Jn?{minFilter:Qt,magFilter:Qt}:{};ne.map!==null&&ne.map.dispose(),ne.map=new Yn(i.x,i.y,V),ne.map.texture.name=pe.name+".shadowMap",ne.camera.updateProjectionMatrix()}s.setRenderTarget(ne.map),s.clear();let te=ne.getViewportCount();for(let V=0;V<te;V++){let re=ne.getViewport(V);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),H.viewport(o),ne.updateMatrices(pe,V),n=ne.getFrustum(),_(P,R,ne.camera,pe,this.type)}ne.isPointLightShadow!==!0&&this.type===Jn&&T(ne,R),ne.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,E)};function T(w,P){let R=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(P,null,R,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(P,null,R,f,x,null)}function y(w,P,R,M){let S=null,E=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)S=E;else if(S=R.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let H=S.uuid,I=P.uuid,K=l[H];K===void 0&&(K={},l[H]=K);let Z=K[I];Z===void 0&&(Z=S.clone(),K[I]=Z,P.addEventListener("dispose",C)),S=Z}if(S.visible=P.visible,S.wireframe=P.wireframe,M===Jn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let H=s.properties.get(S);H.light=R}return S}function _(w,P,R,M,S){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let I=e.update(w),K=w.material;if(Array.isArray(K)){let Z=I.groups;for(let q=0,pe=Z.length;q<pe;q++){let ne=Z[q],F=K[ne.materialIndex];if(F&&F.visible){let te=y(w,F,M,S);w.onBeforeShadow(s,w,P,R,I,te,ne),s.renderBufferDirect(R,null,I,te,w,ne),w.onAfterShadow(s,w,P,R,I,te,ne)}}}else if(K.visible){let Z=y(w,K,M,S);w.onBeforeShadow(s,w,P,R,I,Z,null),s.renderBufferDirect(R,null,I,Z,w,null),w.onAfterShadow(s,w,P,R,I,Z,null)}}let H=w.children;for(let I=0,K=H.length;I<K;I++)_(H[I],P,R,M,S)}function C(w){w.target.removeEventListener("dispose",C);for(let R in l){let M=l[R],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var M_={[Sa]:Ta,[ba]:Aa,[wa]:Ra,[Zi]:Ea,[Ta]:Sa,[Aa]:ba,[Ra]:wa,[Ea]:Zi};function S_(s,e){function t(){let W=!1,be=new Mt,Re=null,Le=new Mt(0,0,0,0);return{setMask:function(Me){Re!==Me&&!W&&(s.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){W=Me},setClear:function(Me,_e,ze,je,lt){lt===!0&&(Me*=je,_e*=je,ze*=je),be.set(Me,_e,ze,je),Le.equals(be)===!1&&(s.clearColor(Me,_e,ze,je),Le.copy(be))},reset:function(){W=!1,Re=null,Le.set(-1,0,0,0)}}}function n(){let W=!1,be=!1,Re=null,Le=null,Me=null;return{setReversed:function(_e){if(be!==_e){let ze=e.get("EXT_clip_control");_e?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),be=_e;let je=Me;Me=null,this.setClear(je)}},getReversed:function(){return be},setTest:function(_e){_e?k(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(_e){Re!==_e&&!W&&(s.depthMask(_e),Re=_e)},setFunc:function(_e){if(be&&(_e=M_[_e]),Le!==_e){switch(_e){case Sa:s.depthFunc(s.NEVER);break;case Ta:s.depthFunc(s.ALWAYS);break;case ba:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case wa:s.depthFunc(s.EQUAL);break;case Ea:s.depthFunc(s.GEQUAL);break;case Aa:s.depthFunc(s.GREATER);break;case Ra:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=_e}},setLocked:function(_e){W=_e},setClear:function(_e){Me!==_e&&(be&&(_e=1-_e),s.clearDepth(_e),Me=_e)},reset:function(){W=!1,Re=null,Le=null,Me=null,be=!1}}}function i(){let W=!1,be=null,Re=null,Le=null,Me=null,_e=null,ze=null,je=null,lt=null;return{setTest:function(_t){W||(_t?k(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(_t){be!==_t&&!W&&(s.stencilMask(_t),be=_t)},setFunc:function(_t,Nt,mn){(Re!==_t||Le!==Nt||Me!==mn)&&(s.stencilFunc(_t,Nt,mn),Re=_t,Le=Nt,Me=mn)},setOp:function(_t,Nt,mn){(_e!==_t||ze!==Nt||je!==mn)&&(s.stencilOp(_t,Nt,mn),_e=_t,ze=Nt,je=mn)},setLocked:function(_t){W=_t},setClear:function(_t){lt!==_t&&(s.clearStencil(_t),lt=_t)},reset:function(){W=!1,be=null,Re=null,Le=null,Me=null,_e=null,ze=null,je=null,lt=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,y=null,_=null,C=null,w=null,P=new Ve(0,0,0),R=0,M=!1,S=null,E=null,H=null,I=null,K=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,pe=0,ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(ne)[1]),q=pe>=1):ne.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),q=pe>=2);let F=null,te={},V=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),U=new Mt().fromArray(V),X=new Mt().fromArray(re);function oe(W,be,Re,Le){let Me=new Uint8Array(4),_e=s.createTexture();s.bindTexture(W,_e),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<Re;ze++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(be+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return _e}let Y={};Y[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(s.DEPTH_TEST),o.setFunc(Zi),Xe(!1),De(yl),k(s.CULL_FACE),ht(yi);function k(W){u[W]!==!0&&(s.enable(W),u[W]=!0)}function de(W){u[W]!==!1&&(s.disable(W),u[W]=!1)}function ye(W,be){return h[W]!==be?(s.bindFramebuffer(W,be),h[W]=be,W===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=be),W===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=be),!0):!1}function ge(W,be){let Re=f,Le=!1;if(W){Re=d.get(be),Re===void 0&&(Re=[],d.set(be,Re));let Me=W.textures;if(Re.length!==Me.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,ze=Me.length;_e<ze;_e++)Re[_e]=s.COLOR_ATTACHMENT0+_e;Re.length=Me.length,Le=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Le=!0);Le&&s.drawBuffers(Re)}function Fe(W){return g!==W?(s.useProgram(W),g=W,!0):!1}let nt={[Ci]:s.FUNC_ADD,[Uu]:s.FUNC_SUBTRACT,[Fu]:s.FUNC_REVERSE_SUBTRACT};nt[Ou]=s.MIN,nt[Bu]=s.MAX;let B={[zu]:s.ZERO,[ku]:s.ONE,[Hu]:s.SRC_COLOR,[Ko]:s.SRC_ALPHA,[Yu]:s.SRC_ALPHA_SATURATE,[Xu]:s.DST_COLOR,[Vu]:s.DST_ALPHA,[Gu]:s.ONE_MINUS_SRC_COLOR,[$o]:s.ONE_MINUS_SRC_ALPHA,[qu]:s.ONE_MINUS_DST_COLOR,[Wu]:s.ONE_MINUS_DST_ALPHA,[Ku]:s.CONSTANT_COLOR,[$u]:s.ONE_MINUS_CONSTANT_COLOR,[Zu]:s.CONSTANT_ALPHA,[Ju]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(W,be,Re,Le,Me,_e,ze,je,lt,_t){if(W===yi){x===!0&&(de(s.BLEND),x=!1);return}if(x===!1&&(k(s.BLEND),x=!0),W!==Nu){if(W!==m||_t!==M){if((p!==Ci||_!==Ci)&&(s.blendEquation(s.FUNC_ADD),p=Ci,_=Ci),_t)switch(W){case $i:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ro:s.blendFunc(s.ONE,s.ONE);break;case Ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case $i:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ml:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}T=null,y=null,C=null,w=null,P.set(0,0,0),R=0,m=W,M=_t}return}Me=Me||be,_e=_e||Re,ze=ze||Le,(be!==p||Me!==_)&&(s.blendEquationSeparate(nt[be],nt[Me]),p=be,_=Me),(Re!==T||Le!==y||_e!==C||ze!==w)&&(s.blendFuncSeparate(B[Re],B[Le],B[_e],B[ze]),T=Re,y=Le,C=_e,w=ze),(je.equals(P)===!1||lt!==R)&&(s.blendColor(je.r,je.g,je.b,lt),P.copy(je),R=lt),m=W,M=!1}function ke(W,be){W.side===Ut?de(s.CULL_FACE):k(s.CULL_FACE);let Re=W.side===fn;be&&(Re=!Re),Xe(Re),W.blending===$i&&W.transparent===!1?ht(yi):ht(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Le=W.stencilWrite;a.setTest(Le),Le&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),N(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?k(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(W){S!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),S=W)}function De(W){W!==Lu?(k(s.CULL_FACE),W!==E&&(W===yl?s.cullFace(s.BACK):W===Du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),E=W}function St(W){W!==H&&(q&&s.lineWidth(W),H=W)}function N(W,be,Re){W?(k(s.POLYGON_OFFSET_FILL),(I!==be||K!==Re)&&(s.polygonOffset(be,Re),I=be,K=Re)):de(s.POLYGON_OFFSET_FILL)}function J(W){W?k(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function ie(W){W===void 0&&(W=s.TEXTURE0+Z-1),F!==W&&(s.activeTexture(W),F=W)}function le(W,be,Re){Re===void 0&&(F===null?Re=s.TEXTURE0+Z-1:Re=F);let Le=te[Re];Le===void 0&&(Le={type:void 0,texture:void 0},te[Re]=Le),(Le.type!==W||Le.texture!==be)&&(F!==Re&&(s.activeTexture(Re),F=Re),s.bindTexture(W,be||Y[W]),Le.type=W,Le.texture=be)}function b(){let W=te[F];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function O(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ee(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function se(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(W){U.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),U.copy(W))}function Ie(W){X.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),X.copy(W))}function Ce(W,be){let Re=l.get(be);Re===void 0&&(Re=new WeakMap,l.set(be,Re));let Le=Re.get(W);Le===void 0&&(Le=s.getUniformBlockIndex(be,W.name),Re.set(W,Le))}function Ae(W,be){let Le=l.get(be).get(W);c.get(be)!==Le&&(s.uniformBlockBinding(be,Le,W.__bindingPointIndex),c.set(be,Le))}function qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},F=null,te={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,y=null,_=null,C=null,w=null,P=new Ve(0,0,0),R=0,M=!1,S=null,E=null,H=null,I=null,K=null,U.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:de,bindFramebuffer:ye,drawBuffers:ge,useProgram:Fe,setBlending:ht,setMaterial:ke,setFlipSided:Xe,setCullFace:De,setLineWidth:St,setPolygonOffset:N,setScissorTest:J,activeTexture:ie,bindTexture:le,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:$,texImage2D:Te,texImage3D:fe,updateUBOMapping:Ce,uniformBlockBinding:Ae,texStorage2D:se,texStorage3D:me,texSubImage2D:ce,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:ee,scissor:xe,viewport:Ie,reset:qe}}function T_(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return f?new OffscreenCanvas(b,v):Hs("canvas")}function x(b,v,$){let ce=1,O=le(b);if((O.width>$||O.height>$)&&(ce=$/Math.max(O.width,O.height)),ce<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let G=Math.floor(ce*O.width),ee=Math.floor(ce*O.height);h===void 0&&(h=g(G,ee));let se=v?g(G,ee):h;return se.width=G,se.height=ee,se.getContext("2d").drawImage(b,0,0,G,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+G+"x"+ee+")."),se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){s.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(b,v,$,ce,O=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=v;if(v===s.RED&&($===s.FLOAT&&(G=s.R32F),$===s.HALF_FLOAT&&(G=s.R16F),$===s.UNSIGNED_BYTE&&(G=s.R8)),v===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(G=s.R8UI),$===s.UNSIGNED_SHORT&&(G=s.R16UI),$===s.UNSIGNED_INT&&(G=s.R32UI),$===s.BYTE&&(G=s.R8I),$===s.SHORT&&(G=s.R16I),$===s.INT&&(G=s.R32I)),v===s.RG&&($===s.FLOAT&&(G=s.RG32F),$===s.HALF_FLOAT&&(G=s.RG16F),$===s.UNSIGNED_BYTE&&(G=s.RG8)),v===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(G=s.RG8UI),$===s.UNSIGNED_SHORT&&(G=s.RG16UI),$===s.UNSIGNED_INT&&(G=s.RG32UI),$===s.BYTE&&(G=s.RG8I),$===s.SHORT&&(G=s.RG16I),$===s.INT&&(G=s.RG32I)),v===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(G=s.RGB8UI),$===s.UNSIGNED_SHORT&&(G=s.RGB16UI),$===s.UNSIGNED_INT&&(G=s.RGB32UI),$===s.BYTE&&(G=s.RGB8I),$===s.SHORT&&(G=s.RGB16I),$===s.INT&&(G=s.RGB32I)),v===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),$===s.UNSIGNED_INT&&(G=s.RGBA32UI),$===s.BYTE&&(G=s.RGBA8I),$===s.SHORT&&(G=s.RGBA16I),$===s.INT&&(G=s.RGBA32I)),v===s.RGB&&($===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),v===s.RGBA){let ee=O?Ir:pt.getTransfer(ce);$===s.FLOAT&&(G=s.RGBA32F),$===s.HALF_FLOAT&&(G=s.RGBA16F),$===s.UNSIGNED_BYTE&&(G=ee===wt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function _(b,v){let $;return b?v===null||v===Ui||v===js?$=s.DEPTH24_STENCIL8:v===rn?$=s.DEPTH32F_STENCIL8:v===Js&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ui||v===js?$=s.DEPTH_COMPONENT24:v===rn?$=s.DEPTH_COMPONENT32F:v===Js&&($=s.DEPTH_COMPONENT16),$}function C(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qt&&b.minFilter!==Ot?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function w(b){let v=b.target;v.removeEventListener("dispose",w),R(v),v.isVideoTexture&&u.delete(v)}function P(b){let v=b.target;v.removeEventListener("dispose",P),S(v)}function R(b){let v=n.get(b);if(v.__webglInit===void 0)return;let $=b.source,ce=d.get($);if(ce){let O=ce[v.__cacheKey];O.usedTimes--,O.usedTimes===0&&M(b),Object.keys(ce).length===0&&d.delete($)}n.remove(b)}function M(b){let v=n.get(b);s.deleteTexture(v.__webglTexture);let $=b.source,ce=d.get($);delete ce[v.__cacheKey],o.memory.textures--}function S(b){let v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(v.__webglFramebuffer[ce]))for(let O=0;O<v.__webglFramebuffer[ce].length;O++)s.deleteFramebuffer(v.__webglFramebuffer[ce][O]);else s.deleteFramebuffer(v.__webglFramebuffer[ce]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[ce])}else{if(Array.isArray(v.__webglFramebuffer))for(let ce=0;ce<v.__webglFramebuffer.length;ce++)s.deleteFramebuffer(v.__webglFramebuffer[ce]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ce=0;ce<v.__webglColorRenderbuffer.length;ce++)v.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[ce]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let $=b.textures;for(let ce=0,O=$.length;ce<O;ce++){let G=n.get($[ce]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove($[ce])}n.remove(b)}let E=0;function H(){E=0}function I(){let b=E;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),E+=1,b}function K(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Z(b,v){let $=n.get(b);if(b.isVideoTexture&&J(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&$.__version!==b.version){let ce=b.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y($,b,v);return}}else b.isExternalTexture&&($.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+v)}function q(b,v){let $=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){Y($,b,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+v)}function pe(b,v){let $=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){Y($,b,v);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+v)}function ne(b,v){let $=n.get(b);if(b.version>0&&$.__version!==b.version){k($,b,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+v)}let F={[ln]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[zs]:s.MIRRORED_REPEAT},te={[Qt]:s.NEAREST,[Pa]:s.NEAREST_MIPMAP_NEAREST,[us]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[Zs]:s.LINEAR_MIPMAP_NEAREST,[Cn]:s.LINEAR_MIPMAP_LINEAR},V={[pd]:s.NEVER,[vd]:s.ALWAYS,[md]:s.LESS,[Nl]:s.LEQUAL,[gd]:s.EQUAL,[yd]:s.GEQUAL,[xd]:s.GREATER,[_d]:s.NOTEQUAL};function re(b,v){if(v.type===rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ot||v.magFilter===Zs||v.magFilter===us||v.magFilter===Cn||v.minFilter===Ot||v.minFilter===Zs||v.minFilter===us||v.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,F[v.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,F[v.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,F[v.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,te[v.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,te[v.minFilter]),v.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,V[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Qt||v.minFilter!==us&&v.minFilter!==Cn||v.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function U(b,v){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",w));let ce=v.source,O=d.get(ce);O===void 0&&(O={},d.set(ce,O));let G=K(v);if(G!==b.__cacheKey){O[G]===void 0&&(O[G]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),O[G].usedTimes++;let ee=O[b.__cacheKey];ee!==void 0&&(O[b.__cacheKey].usedTimes--,ee.usedTimes===0&&M(v)),b.__cacheKey=G,b.__webglTexture=O[G].texture}return $}function X(b,v,$){return Math.floor(Math.floor(b/$)/v)}function oe(b,v,$,ce){let G=b.updateRanges;if(G.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,$,ce,v.data);else{G.sort((fe,xe)=>fe.start-xe.start);let ee=0;for(let fe=1;fe<G.length;fe++){let xe=G[ee],Ie=G[fe],Ce=xe.start+xe.count,Ae=X(Ie.start,v.width,4),qe=X(xe.start,v.width,4);Ie.start<=Ce+1&&Ae===qe&&X(Ie.start+Ie.count-1,v.width,4)===Ae?xe.count=Math.max(xe.count,Ie.start+Ie.count-xe.start):(++ee,G[ee]=Ie)}G.length=ee+1;let se=s.getParameter(s.UNPACK_ROW_LENGTH),me=s.getParameter(s.UNPACK_SKIP_PIXELS),Te=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let fe=0,xe=G.length;fe<xe;fe++){let Ie=G[fe],Ce=Math.floor(Ie.start/4),Ae=Math.ceil(Ie.count/4),qe=Ce%v.width,W=Math.floor(Ce/v.width),be=Ae,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,qe,W,be,Re,$,ce,v.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,me),s.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function Y(b,v,$){let ce=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ce=s.TEXTURE_3D);let O=U(b,v),G=v.source;t.bindTexture(ce,b.__webglTexture,s.TEXTURE0+$);let ee=n.get(G);if(G.version!==ee.__version||O===!0){t.activeTexture(s.TEXTURE0+$);let se=pt.getPrimaries(pt.workingColorSpace),me=v.colorSpace===Mi?null:pt.getPrimaries(v.colorSpace),Te=v.colorSpace===Mi||se===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let fe=x(v.image,!1,i.maxTextureSize);fe=ie(v,fe);let xe=r.convert(v.format,v.colorSpace),Ie=r.convert(v.type),Ce=y(v.internalFormat,xe,Ie,v.colorSpace,v.isVideoTexture);re(ce,v);let Ae,qe=v.mipmaps,W=v.isVideoTexture!==!0,be=ee.__version===void 0||O===!0,Re=G.dataReady,Le=C(v,fe);if(v.isDepthTexture)Ce=_(v.format===Qs,v.type),be&&(W?t.texStorage2D(s.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,Ce,fe.width,fe.height,0,xe,Ie,null));else if(v.isDataTexture)if(qe.length>0){W&&be&&t.texStorage2D(s.TEXTURE_2D,Le,Ce,qe[0].width,qe[0].height);for(let Me=0,_e=qe.length;Me<_e;Me++)Ae=qe[Me],W?Re&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,xe,Ie,Ae.data):t.texImage2D(s.TEXTURE_2D,Me,Ce,Ae.width,Ae.height,0,xe,Ie,Ae.data);v.generateMipmaps=!1}else W?(be&&t.texStorage2D(s.TEXTURE_2D,Le,Ce,fe.width,fe.height),Re&&oe(v,fe,xe,Ie)):t.texImage2D(s.TEXTURE_2D,0,Ce,fe.width,fe.height,0,xe,Ie,fe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){W&&be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ce,qe[0].width,qe[0].height,fe.depth);for(let Me=0,_e=qe.length;Me<_e;Me++)if(Ae=qe[Me],v.format!==pn)if(xe!==null)if(W){if(Re)if(v.layerUpdates.size>0){let ze=Vl(Ae.width,Ae.height,v.format,v.type);for(let je of v.layerUpdates){let lt=Ae.data.subarray(je*ze/Ae.data.BYTES_PER_ELEMENT,(je+1)*ze/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,je,Ae.width,Ae.height,1,xe,lt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ae.width,Ae.height,fe.depth,xe,Ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,Ce,Ae.width,Ae.height,fe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ae.width,Ae.height,fe.depth,xe,Ie,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Me,Ce,Ae.width,Ae.height,fe.depth,0,xe,Ie,Ae.data)}else{W&&be&&t.texStorage2D(s.TEXTURE_2D,Le,Ce,qe[0].width,qe[0].height);for(let Me=0,_e=qe.length;Me<_e;Me++)Ae=qe[Me],v.format!==pn?xe!==null?W?Re&&t.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,xe,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,Me,Ce,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,xe,Ie,Ae.data):t.texImage2D(s.TEXTURE_2D,Me,Ce,Ae.width,Ae.height,0,xe,Ie,Ae.data)}else if(v.isDataArrayTexture)if(W){if(be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ce,fe.width,fe.height,fe.depth),Re)if(v.layerUpdates.size>0){let Me=Vl(fe.width,fe.height,v.format,v.type);for(let _e of v.layerUpdates){let ze=fe.data.subarray(_e*Me/fe.data.BYTES_PER_ELEMENT,(_e+1)*Me/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,fe.width,fe.height,1,xe,Ie,ze)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ie,fe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,xe,Ie,fe.data);else if(v.isData3DTexture)W?(be&&t.texStorage3D(s.TEXTURE_3D,Le,Ce,fe.width,fe.height,fe.depth),Re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ie,fe.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,xe,Ie,fe.data);else if(v.isFramebufferTexture){if(be)if(W)t.texStorage2D(s.TEXTURE_2D,Le,Ce,fe.width,fe.height);else{let Me=fe.width,_e=fe.height;for(let ze=0;ze<Le;ze++)t.texImage2D(s.TEXTURE_2D,ze,Ce,Me,_e,0,xe,Ie,null),Me>>=1,_e>>=1}}else if(qe.length>0){if(W&&be){let Me=le(qe[0]);t.texStorage2D(s.TEXTURE_2D,Le,Ce,Me.width,Me.height)}for(let Me=0,_e=qe.length;Me<_e;Me++)Ae=qe[Me],W?Re&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,xe,Ie,Ae):t.texImage2D(s.TEXTURE_2D,Me,Ce,xe,Ie,Ae);v.generateMipmaps=!1}else if(W){if(be){let Me=le(fe);t.texStorage2D(s.TEXTURE_2D,Le,Ce,Me.width,Me.height)}Re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Ie,fe)}else t.texImage2D(s.TEXTURE_2D,0,Ce,xe,Ie,fe);m(v)&&p(ce),ee.__version=G.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function k(b,v,$){if(v.image.length!==6)return;let ce=U(b,v),O=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+$);let G=n.get(O);if(O.version!==G.__version||ce===!0){t.activeTexture(s.TEXTURE0+$);let ee=pt.getPrimaries(pt.workingColorSpace),se=v.colorSpace===Mi?null:pt.getPrimaries(v.colorSpace),me=v.colorSpace===Mi||ee===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Te=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let _e=0;_e<6;_e++)!Te&&!fe?xe[_e]=x(v.image[_e],!0,i.maxCubemapSize):xe[_e]=fe?v.image[_e].image:v.image[_e],xe[_e]=ie(v,xe[_e]);let Ie=xe[0],Ce=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type),qe=y(v.internalFormat,Ce,Ae,v.colorSpace),W=v.isVideoTexture!==!0,be=G.__version===void 0||ce===!0,Re=O.dataReady,Le=C(v,Ie);re(s.TEXTURE_CUBE_MAP,v);let Me;if(Te){W&&be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,qe,Ie.width,Ie.height);for(let _e=0;_e<6;_e++){Me=xe[_e].mipmaps;for(let ze=0;ze<Me.length;ze++){let je=Me[ze];v.format!==pn?Ce!==null?W?Re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,0,0,je.width,je.height,Ce,je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,qe,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,0,0,je.width,je.height,Ce,Ae,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,qe,je.width,je.height,0,Ce,Ae,je.data)}}}else{if(Me=v.mipmaps,W&&be){Me.length>0&&Le++;let _e=le(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,qe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(fe){W?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,xe[_e].width,xe[_e].height,Ce,Ae,xe[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,qe,xe[_e].width,xe[_e].height,0,Ce,Ae,xe[_e].data);for(let ze=0;ze<Me.length;ze++){let lt=Me[ze].image[_e].image;W?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,0,0,lt.width,lt.height,Ce,Ae,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,qe,lt.width,lt.height,0,Ce,Ae,lt.data)}}else{W?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ce,Ae,xe[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,qe,Ce,Ae,xe[_e]);for(let ze=0;ze<Me.length;ze++){let je=Me[ze];W?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,0,0,Ce,Ae,je.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,qe,Ce,Ae,je.image[_e])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),G.__version=O.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function de(b,v,$,ce,O,G){let ee=r.convert($.format,$.colorSpace),se=r.convert($.type),me=y($.internalFormat,ee,se,$.colorSpace),Te=n.get(v),fe=n.get($);if(fe.__renderTarget=v,!Te.__hasExternalTextures){let xe=Math.max(1,v.width>>G),Ie=Math.max(1,v.height>>G);O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?t.texImage3D(O,G,me,xe,Ie,v.depth,0,ee,se,null):t.texImage2D(O,G,me,xe,Ie,0,ee,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),N(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,O,fe.__webglTexture,0,St(v)):(O===s.TEXTURE_2D||O>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,O,fe.__webglTexture,G),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(b,v,$){if(s.bindRenderbuffer(s.RENDERBUFFER,b),v.depthBuffer){let ce=v.depthTexture,O=ce&&ce.isDepthTexture?ce.type:null,G=_(v.stencilBuffer,O),ee=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=St(v);N(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,G,v.width,v.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,G,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,G,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,b)}else{let ce=v.textures;for(let O=0;O<ce.length;O++){let G=ce[O],ee=r.convert(G.format,G.colorSpace),se=r.convert(G.type),me=y(G.internalFormat,ee,se,G.colorSpace),Te=St(v);$&&N(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,me,v.width,v.height):N(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,me,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,me,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ce=n.get(v.depthTexture);ce.__renderTarget=v,(!ce.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);let O=ce.__webglTexture,G=St(v);if(v.depthTexture.format===ks)N(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,O,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,O,0);else if(v.depthTexture.format===Qs)N(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,O,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Fe(b){let v=n.get(b),$=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){let ce=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ce){let O=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ce.removeEventListener("dispose",O)};ce.addEventListener("dispose",O),v.__depthDisposeCallback=O}v.__boundDepthTexture=ce}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");let ce=b.texture.mipmaps;ce&&ce.length>0?ge(v.__webglFramebuffer[0],b):ge(v.__webglFramebuffer,b)}else if($){v.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[ce]),v.__webglDepthbuffer[ce]===void 0)v.__webglDepthbuffer[ce]=s.createRenderbuffer(),ye(v.__webglDepthbuffer[ce],b,!1);else{let O=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,O,s.RENDERBUFFER,G)}}else{let ce=b.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),ye(v.__webglDepthbuffer,b,!1);else{let O=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,O,s.RENDERBUFFER,G)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(b,v,$){let ce=n.get(b);v!==void 0&&de(ce.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Fe(b)}function B(b){let v=b.texture,$=n.get(b),ce=n.get(v);b.addEventListener("dispose",P);let O=b.textures,G=b.isWebGLCubeRenderTarget===!0,ee=O.length>1;if(ee||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=v.version,o.memory.textures++),G){$.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer[se]=[];for(let me=0;me<v.mipmaps.length;me++)$.__webglFramebuffer[se][me]=s.createFramebuffer()}else $.__webglFramebuffer[se]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)$.__webglFramebuffer[se]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(ee)for(let se=0,me=O.length;se<me;se++){let Te=n.get(O[se]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),o.memory.textures++)}if(b.samples>0&&N(b)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let se=0;se<O.length;se++){let me=O[se];$.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[se]);let Te=r.convert(me.format,me.colorSpace),fe=r.convert(me.type),xe=y(me.internalFormat,Te,fe,me.colorSpace,b.isXRRenderTarget===!0),Ie=St(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,xe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,$.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ye($.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),re(s.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)de($.__webglFramebuffer[se][me],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,me);else de($.__webglFramebuffer[se],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){for(let se=0,me=O.length;se<me;se++){let Te=O[se],fe=n.get(Te),xe=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(xe=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,fe.__webglTexture),re(xe,Te),de($.__webglFramebuffer,b,Te,s.COLOR_ATTACHMENT0+se,xe,0),m(Te)&&p(xe)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(se=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,ce.__webglTexture),re(se,v),v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)de($.__webglFramebuffer[me],b,v,s.COLOR_ATTACHMENT0,se,me);else de($.__webglFramebuffer,b,v,s.COLOR_ATTACHMENT0,se,0);m(v)&&p(se),t.unbindTexture()}b.depthBuffer&&Fe(b)}function ht(b){let v=b.textures;for(let $=0,ce=v.length;$<ce;$++){let O=v[$];if(m(O)){let G=T(b),ee=n.get(O).__webglTexture;t.bindTexture(G,ee),p(G),t.unbindTexture()}}}let ke=[],Xe=[];function De(b){if(b.samples>0){if(N(b)===!1){let v=b.textures,$=b.width,ce=b.height,O=s.COLOR_BUFFER_BIT,G=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=n.get(b),se=v.length>1;if(se)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer);let me=b.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(O|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(O|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Te]);let fe=n.get(v[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,fe,0)}s.blitFramebuffer(0,0,$,ce,0,0,$,ce,O,s.NEAREST),c===!0&&(ke.length=0,Xe.length=0,ke.push(s.COLOR_ATTACHMENT0+Te),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ke.push(G),Xe.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Te]);let fe=n.get(v[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let v=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function St(b){return Math.min(i.maxSamples,b.samples)}function N(b){let v=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function J(b){let v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function ie(b,v){let $=b.colorSpace,ce=b.format,O=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==Wt&&$!==Mi&&(pt.getTransfer($)===wt?(ce!==pn||O!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),v}function le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=pe,this.setTextureCube=ne,this.rebindTextures=nt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=N}function b_(s,e){function t(n,i=Mi){let r,o=pt.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===Da)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Al)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===wl)return s.BYTE;if(n===El)return s.SHORT;if(n===Js)return s.UNSIGNED_SHORT;if(n===La)return s.INT;if(n===Ui)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===Wn)return s.HALF_FLOAT;if(n===Cl)return s.ALPHA;if(n===Il)return s.RGB;if(n===pn)return s.RGBA;if(n===ks)return s.DEPTH_COMPONENT;if(n===Qs)return s.DEPTH_STENCIL;if(n===Ua)return s.RED;if(n===Fa)return s.RED_INTEGER;if(n===Pl)return s.RG;if(n===Oa)return s.RG_INTEGER;if(n===Ba)return s.RGBA_INTEGER;if(n===ao||n===co||n===lo||n===ho)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===ka||n===Ha||n===Ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Wa)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qa||n===Ya||n===Ka||n===$a||n===Za||n===Ja||n===ja||n===Qa||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===ac||n===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===hc||n===uc||n===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`,nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bn({vertexShader:w_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ih=class extends qn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new nh,p={},T=t.getContextAttributes(),y=null,_=null,C=[],w=[],P=new Ue,R=null,M=new Ht;M.viewport=new Mt;let S=new Ht;S.viewport=new Mt;let E=[M,S],H=new _a,I=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let k=C[Y];return k===void 0&&(k=new Ws,C[Y]=k),k.getTargetRaySpace()},this.getControllerGrip=function(Y){let k=C[Y];return k===void 0&&(k=new Ws,C[Y]=k),k.getGripSpace()},this.getHand=function(Y){let k=C[Y];return k===void 0&&(k=new Ws,C[Y]=k),k.getHandSpace()};function Z(Y){let k=w.indexOf(Y.inputSource);if(k===-1)return;let de=C[k];de!==void 0&&(de.update(Y.inputSource,Y.frame,l||o),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",pe);for(let Y=0;Y<C.length;Y++){let k=w[Y];k!==null&&(w[Y]=null,C[Y].disconnect(k))}I=null,K=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(y),f=null,d=null,h=null,i=null,_=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",q),i.addEventListener("inputsourceschange",pe),T.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ye=null,ge=null;T.depth&&(ge=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=T.stencil?Qs:ks,ye=T.stencil?js:Ui);let Fe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Yn(d.textureWidth,d.textureHeight,{format:pn,type:Vn,depthTexture:new Xr(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let de={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Yn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pe(Y){for(let k=0;k<Y.removed.length;k++){let de=Y.removed[k],ye=w.indexOf(de);ye>=0&&(w[ye]=null,C[ye].disconnect(de))}for(let k=0;k<Y.added.length;k++){let de=Y.added[k],ye=w.indexOf(de);if(ye===-1){for(let Fe=0;Fe<C.length;Fe++)if(Fe>=w.length){w.push(de),ye=Fe;break}else if(w[Fe]===null){w[Fe]=de,ye=Fe;break}if(ye===-1)break}let ge=C[ye];ge&&ge.connect(de)}}let ne=new D,F=new D;function te(Y,k,de){ne.setFromMatrixPosition(k.matrixWorld),F.setFromMatrixPosition(de.matrixWorld);let ye=ne.distanceTo(F),ge=k.projectionMatrix.elements,Fe=de.projectionMatrix.elements,nt=ge[14]/(ge[10]-1),B=ge[14]/(ge[10]+1),ht=(ge[9]+1)/ge[5],ke=(ge[9]-1)/ge[5],Xe=(ge[8]-1)/ge[0],De=(Fe[8]+1)/Fe[0],St=nt*Xe,N=nt*De,J=ye/(-Xe+De),ie=J*-Xe;if(k.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ie),Y.translateZ(J),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ge[10]===-1)Y.projectionMatrix.copy(k.projectionMatrix),Y.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let le=nt+J,b=B+J,v=St-ie,$=N+(ye-ie),ce=ht*B/b*le,O=ke*B/b*le;Y.projectionMatrix.makePerspective(v,$,ce,O,le,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function V(Y,k){k===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(k.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let k=Y.near,de=Y.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(de=m.depthFar)),H.near=S.near=M.near=k,H.far=S.far=M.far=de,(I!==H.near||K!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,K=H.far),H.layers.mask=Y.layers.mask|6,M.layers.mask=H.layers.mask&3,S.layers.mask=H.layers.mask&5;let ye=Y.parent,ge=H.cameras;V(H,ye);for(let Fe=0;Fe<ge.length;Fe++)V(ge[Fe],ye);ge.length===2?te(H,M,S):H.projectionMatrix.copy(M.projectionMatrix),re(Y,H,ye)};function re(Y,k,de){de===null?Y.matrix.copy(k.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(k.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(k.projectionMatrix),Y.projectionMatrixInverse.copy(k.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Y){return p[Y]};let U=null;function X(Y,k){if(u=k.getViewerPose(l||o),g=k,u!==null){let de=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ye=!1;de.length!==H.cameras.length&&(H.cameras.length=0,ye=!0);for(let B=0;B<de.length;B++){let ht=de[B],ke=null;if(f!==null)ke=f.getViewport(ht);else{let De=h.getViewSubImage(d,ht);ke=De.viewport,B===0&&(e.setRenderTargetTextures(_,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(_))}let Xe=E[B];Xe===void 0&&(Xe=new Ht,Xe.layers.enable(B),Xe.viewport=new Mt,E[B]=Xe),Xe.matrix.fromArray(ht.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ht.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ke.x,ke.y,ke.width,ke.height),B===0&&(H.matrix.copy(Xe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ye===!0&&H.cameras.push(Xe)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let B=h.getDepthInformation(de[0]);B&&B.isValid&&B.texture&&m.init(B,i.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let B=0;B<de.length;B++){let ht=de[B].camera;if(ht){let ke=p[ht];ke||(ke=new qr,p[ht]=ke);let Xe=h.getCameraImage(ht);ke.sourceTexture=Xe}}}}for(let de=0;de<C.length;de++){let ye=w[de],ge=C[de];ye!==null&&ge!==void 0&&ge.update(ye,k,l||o)}U&&U(Y,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let oe=new Jd;oe.setAnimationLoop(X),this.setAnimationLoop=function(Y){U=Y},this.dispose=function(){}}},ps=new Mn,A_=new Qe;function R_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),y=T.envMap,_=T.envMapRotation;y&&(m.envMap.value=y,ps.copy(_),ps.x*=-1,ps.y*=-1,ps.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.envMapRotation.value.setFromMatrix4(A_.makeRotationFromEuler(ps)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function C_(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){let _=y.program;n.uniformBlockBinding(T,_)}function l(T,y){let _=i[T.id];_===void 0&&(g(T),_=u(T),i[T.id]=_,T.addEventListener("dispose",m));let C=y.program;n.updateUBOMapping(T,C);let w=e.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function u(T){let y=h();T.__bindingPointIndex=y;let _=s.createBuffer(),C=T.__size,w=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let y=i[T.id],_=T.uniforms,C=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,P=_.length;w<P;w++){let R=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,S=R.length;M<S;M++){let E=R[M];if(f(E,w,M,C)===!0){let H=E.__offset,I=Array.isArray(E.value)?E.value:[E.value],K=0;for(let Z=0;Z<I.length;Z++){let q=I[Z],pe=x(q);typeof q=="number"||typeof q=="boolean"?(E.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,H+K,E.__data)):q.isMatrix3?(E.__data[0]=q.elements[0],E.__data[1]=q.elements[1],E.__data[2]=q.elements[2],E.__data[3]=0,E.__data[4]=q.elements[3],E.__data[5]=q.elements[4],E.__data[6]=q.elements[5],E.__data[7]=0,E.__data[8]=q.elements[6],E.__data[9]=q.elements[7],E.__data[10]=q.elements[8],E.__data[11]=0):(q.toArray(E.__data,K),K+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(T,y,_,C){let w=T.value,P=y+"_"+_;if(C[P]===void 0)return typeof w=="number"||typeof w=="boolean"?C[P]=w:C[P]=w.clone(),!0;{let R=C[P];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[P]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(T){let y=T.uniforms,_=0,C=16;for(let P=0,R=y.length;P<R;P++){let M=Array.isArray(y[P])?y[P]:[y[P]];for(let S=0,E=M.length;S<E;S++){let H=M[S],I=Array.isArray(H.value)?H.value:[H.value];for(let K=0,Z=I.length;K<Z;K++){let q=I[K],pe=x(q),ne=_%C,F=ne%pe.boundary,te=ne+F;_+=F,te!==0&&C-te<pe.storage&&(_+=C-te),H.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=pe.storage}}}let w=_%C;return w>0&&(_+=C-w),T.__size=_,T.__cache={},this}function x(T){let y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){let y=T.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var xc=class{constructor(e={}){let{canvas:t=Md(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,C=!1;this._outputColorSpace=vt;let w=0,P=0,R=null,M=-1,S=null,E=new Mt,H=new Mt,I=null,K=new Ve(0),Z=0,q=t.width,pe=t.height,ne=1,F=null,te=null,V=new Mt(0,0,q,pe),re=new Mt(0,0,q,pe),U=!1,X=new Ys,oe=!1,Y=!1,k=new Qe,de=new D,ye=new Mt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function nt(){return R===null?ne:1}let B=n;function ht(A,j){return t.getContext(A,j)}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Me,!1),B===null){let j="webgl2";if(B=ht(j,A),B===null)throw ht(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ke,Xe,De,St,N,J,ie,le,b,v,$,ce,O,G,ee,se,me,Te,fe,xe,Ie,Ce,Ae,qe;function W(){ke=new Y0(B),ke.init(),Ce=new b_(B,ke),Xe=new k0(B,ke,e,Ce),De=new S_(B,ke),Xe.reversedDepthBuffer&&d&&De.buffers.depth.setReversed(!0),St=new Z0(B),N=new l_,J=new T_(B,ke,De,N,Xe,Ce,St),ie=new G0(_),le=new q0(_),b=new nm(B),Ae=new B0(B,b),v=new K0(B,b,St,Ae),$=new j0(B,v,b,St),fe=new J0(B,Xe,J),se=new H0(N),ce=new c_(_,ie,le,ke,Xe,Ae,se),O=new R_(_,N),G=new u_,ee=new x_(ke),Te=new O0(_,ie,le,De,$,f,c),me=new v_(_,$,Xe),qe=new C_(B,St,Xe,De),xe=new z0(B,ke,St),Ie=new $0(B,ke,St),St.programs=ce.programs,_.capabilities=Xe,_.extensions=ke,_.properties=N,_.renderLists=G,_.shadowMap=me,_.state=De,_.info=St}W();let be=new ih(_,B);this.xr=be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(q,pe,!1))},this.getSize=function(A){return A.set(q,pe)},this.setSize=function(A,j,he=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,pe=j,t.width=Math.floor(A*ne),t.height=Math.floor(j*ne),he===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(q*ne,pe*ne).floor()},this.setDrawingBufferSize=function(A,j,he){q=A,pe=j,ne=he,t.width=Math.floor(A*he),t.height=Math.floor(j*he),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(V)},this.setViewport=function(A,j,he,ue){A.isVector4?V.set(A.x,A.y,A.z,A.w):V.set(A,j,he,ue),De.viewport(E.copy(V).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,j,he,ue){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,j,he,ue),De.scissor(H.copy(re).multiplyScalar(ne).round())},this.getScissorTest=function(){return U},this.setScissorTest=function(A){De.setScissorTest(U=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,he=!0){let ue=0;if(A){let Q=!1;if(R!==null){let Se=R.texture.format;Q=Se===Ba||Se===Oa||Se===Fa}if(Q){let Se=R.texture.type,Ee=Se===Vn||Se===Ui||Se===Js||Se===js||Se===Da||Se===Na,Ge=Te.getClearColor(),Oe=Te.getClearAlpha(),Ke=Ge.r,L=Ge.g,z=Ge.b;Ee?(g[0]=Ke,g[1]=L,g[2]=z,g[3]=Oe,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=Ke,x[1]=L,x[2]=z,x[3]=Oe,B.clearBufferiv(B.COLOR,0,x))}else ue|=B.COLOR_BUFFER_BIT}j&&(ue|=B.DEPTH_BUFFER_BIT),he&&(ue|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Te.dispose(),G.dispose(),ee.dispose(),N.dispose(),ie.dispose(),le.dispose(),$.dispose(),Ae.dispose(),qe.dispose(),ce.dispose(),be.dispose(),be.removeEventListener("sessionstart",mn),be.removeEventListener("sessionend",_s),ei.stop()};function Re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let A=St.autoReset,j=me.enabled,he=me.autoUpdate,ue=me.needsUpdate,Q=me.type;W(),St.autoReset=A,me.enabled=j,me.autoUpdate=he,me.needsUpdate=ue,me.type=Q}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _e(A){let j=A.target;j.removeEventListener("dispose",_e),ze(j)}function ze(A){je(A),N.remove(A)}function je(A){let j=N.get(A).programs;j!==void 0&&(j.forEach(function(he){ce.releaseProgram(he)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,he,ue,Q,Se){j===null&&(j=ge);let Ee=Q.isMesh&&Q.matrixWorld.determinant()<0,Ge=Hi(A,j,he,ue,Q);De.setMaterial(ue,Ee);let Oe=he.index,Ke=1;if(ue.wireframe===!0){if(Oe=v.getWireframeAttribute(he),Oe===void 0)return;Ke=2}let L=he.drawRange,z=he.attributes.position,ae=L.start*Ke,ve=(L.start+L.count)*Ke;Se!==null&&(ae=Math.max(ae,Se.start*Ke),ve=Math.min(ve,(Se.start+Se.count)*Ke)),Oe!==null?(ae=Math.max(ae,0),ve=Math.min(ve,Oe.count)):z!=null&&(ae=Math.max(ae,0),ve=Math.min(ve,z.count));let He=ve-ae;if(He<0||He===1/0)return;Ae.setup(Q,ue,Ge,he,Oe);let Be,Ye=xe;if(Oe!==null&&(Be=b.get(Oe),Ye=Ie,Ye.setIndex(Be)),Q.isMesh)ue.wireframe===!0?(De.setLineWidth(ue.wireframeLinewidth*nt()),Ye.setMode(B.LINES)):Ye.setMode(B.TRIANGLES);else if(Q.isLine){let Ne=ue.linewidth;Ne===void 0&&(Ne=1),De.setLineWidth(Ne*nt()),Q.isLineSegments?Ye.setMode(B.LINES):Q.isLineLoop?Ye.setMode(B.LINE_LOOP):Ye.setMode(B.LINE_STRIP)}else Q.isPoints?Ye.setMode(B.POINTS):Q.isSprite&&Ye.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ye.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Ye.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Ne=Q._multiDrawStarts,gt=Q._multiDrawCounts,Ze=Q._multiDrawCount,et=Oe?b.get(Oe).bytesPerElement:1,tt=N.get(ue).currentProgram.getUniforms();for(let Lt=0;Lt<Ze;Lt++)tt.setValue(B,"_gl_DrawID",Lt),Ye.render(Ne[Lt]/et,gt[Lt])}else if(Q.isInstancedMesh)Ye.renderInstances(ae,He,Q.count);else if(he.isInstancedBufferGeometry){let Ne=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,gt=Math.min(he.instanceCount,Ne);Ye.renderInstances(ae,He,gt)}else Ye.render(ae,He)};function lt(A,j,he){A.transparent===!0&&A.side===Ut&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,ki(A,j,he),A.side=cn,A.needsUpdate=!0,ki(A,j,he),A.side=Ut):ki(A,j,he)}this.compile=function(A,j,he=null){he===null&&(he=A),p=ee.get(he),p.init(j),y.push(p),he.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),A!==he&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights();let ue=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Se=Q.material;if(Se)if(Array.isArray(Se))for(let Ee=0;Ee<Se.length;Ee++){let Ge=Se[Ee];lt(Ge,he,Q),ue.add(Ge)}else lt(Se,he,Q),ue.add(Se)}),p=y.pop(),ue},this.compileAsync=function(A,j,he=null){let ue=this.compile(A,j,he);return new Promise(Q=>{function Se(){if(ue.forEach(function(Ee){N.get(Ee).currentProgram.isReady()&&ue.delete(Ee)}),ue.size===0){Q(A);return}setTimeout(Se,10)}ke.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let _t=null;function Nt(A){_t&&_t(A)}function mn(){ei.stop()}function _s(){ei.start()}let ei=new Jd;ei.setAnimationLoop(Nt),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(A){_t=A,be.setAnimationLoop(A),A===null?ei.stop():ei.start()},be.addEventListener("sessionstart",mn),be.addEventListener("sessionend",_s),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(j),j=be.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,j,R),p=ee.get(A,y.length),p.init(j),y.push(p),k.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),X.setFromProjectionMatrix(k,Fn,j.reversedDepth),Y=this.localClippingEnabled,oe=se.init(this.clippingPlanes,Y),m=G.get(A,T.length),m.init(),T.push(m),be.enabled===!0&&be.isPresenting===!0){let Se=_.xr.getDepthSensingMesh();Se!==null&&ti(Se,j,-1/0,_.sortObjects)}ti(A,j,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(F,te),Fe=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Fe&&Te.addToRenderList(m,A),this.info.render.frame++,oe===!0&&se.beginShadows();let he=p.state.shadowsArray;me.render(he,A,j),oe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=m.opaque,Q=m.transmissive;if(p.setupLights(),j.isArrayCamera){let Se=j.cameras;if(Q.length>0)for(let Ee=0,Ge=Se.length;Ee<Ge;Ee++){let Oe=Se[Ee];Ct(ue,Q,A,Oe)}Fe&&Te.render(A);for(let Ee=0,Ge=Se.length;Ee<Ge;Ee++){let Oe=Se[Ee];hr(m,A,Oe,Oe.viewport)}}else Q.length>0&&Ct(ue,Q,A,j),Fe&&Te.render(A),hr(m,A,j);R!==null&&P===0&&(J.updateMultisampleRenderTarget(R),J.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(_,A,j),Ae.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],oe===!0&&se.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ti(A,j,he,ue){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)he=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){ue&&ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(k);let Ee=$.update(A),Ge=A.material;Ge.visible&&m.push(A,Ee,Ge,he,ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){let Ee=$.update(A),Ge=A.material;if(ue&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ye.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ye.copy(Ee.boundingSphere.center)),ye.applyMatrix4(A.matrixWorld).applyMatrix4(k)),Array.isArray(Ge)){let Oe=Ee.groups;for(let Ke=0,L=Oe.length;Ke<L;Ke++){let z=Oe[Ke],ae=Ge[z.materialIndex];ae&&ae.visible&&m.push(A,Ee,ae,he,ye.z,z)}}else Ge.visible&&m.push(A,Ee,Ge,he,ye.z,null)}}let Se=A.children;for(let Ee=0,Ge=Se.length;Ee<Ge;Ee++)ti(Se[Ee],j,he,ue)}function hr(A,j,he,ue){let Q=A.opaque,Se=A.transmissive,Ee=A.transparent;p.setupLightsView(he),oe===!0&&se.setGlobalState(_.clippingPlanes,he),ue&&De.viewport(E.copy(ue)),Q.length>0&&Sn(Q,j,he),Se.length>0&&Sn(Se,j,he),Ee.length>0&&Sn(Ee,j,he),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ct(A,j,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ue.id]===void 0&&(p.state.transmissionRenderTarget[ue.id]=new Yn(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Wn:Vn,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let Se=p.state.transmissionRenderTarget[ue.id],Ee=ue.viewport||E;Se.setSize(Ee.z*_.transmissionResolutionScale,Ee.w*_.transmissionResolutionScale);let Ge=_.getRenderTarget(),Oe=_.getActiveCubeFace(),Ke=_.getActiveMipmapLevel();_.setRenderTarget(Se),_.getClearColor(K),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),Fe&&Te.render(he);let L=_.toneMapping;_.toneMapping=vi;let z=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),p.setupLightsView(ue),oe===!0&&se.setGlobalState(_.clippingPlanes,ue),Sn(A,he,ue),J.updateMultisampleRenderTarget(Se),J.updateRenderTargetMipmap(Se),ke.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let ve=0,He=j.length;ve<He;ve++){let Be=j[ve],Ye=Be.object,Ne=Be.geometry,gt=Be.material,Ze=Be.group;if(gt.side===Ut&&Ye.layers.test(ue.layers)){let et=gt.side;gt.side=fn,gt.needsUpdate=!0,zi(Ye,he,ue,Ne,gt,Ze),gt.side=et,gt.needsUpdate=!0,ae=!0}}ae===!0&&(J.updateMultisampleRenderTarget(Se),J.updateRenderTargetMipmap(Se))}_.setRenderTarget(Ge,Oe,Ke),_.setClearColor(K,Z),z!==void 0&&(ue.viewport=z),_.toneMapping=L}function Sn(A,j,he){let ue=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Se=A.length;Q<Se;Q++){let Ee=A[Q],Ge=Ee.object,Oe=Ee.geometry,Ke=Ee.group,L=Ee.material;L.allowOverride===!0&&ue!==null&&(L=ue),Ge.layers.test(he.layers)&&zi(Ge,j,he,Oe,L,Ke)}}function zi(A,j,he,ue,Q,Se){A.onBeforeRender(_,j,he,ue,Q,Se),A.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(_,j,he,ue,A,Se),Q.transparent===!0&&Q.side===Ut&&Q.forceSinglePass===!1?(Q.side=fn,Q.needsUpdate=!0,_.renderBufferDirect(he,j,ue,Q,A,Se),Q.side=cn,Q.needsUpdate=!0,_.renderBufferDirect(he,j,ue,Q,A,Se),Q.side=Ut):_.renderBufferDirect(he,j,ue,Q,A,Se),A.onAfterRender(_,j,he,ue,Q,Se)}function ki(A,j,he){j.isScene!==!0&&(j=ge);let ue=N.get(A),Q=p.state.lights,Se=p.state.shadowsArray,Ee=Q.state.version,Ge=ce.getParameters(A,Q.state,Se,j,he),Oe=ce.getProgramCacheKey(Ge),Ke=ue.programs;ue.environment=A.isMeshStandardMaterial?j.environment:null,ue.fog=j.fog,ue.envMap=(A.isMeshStandardMaterial?le:ie).get(A.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",_e),Ke=new Map,ue.programs=Ke);let L=Ke.get(Oe);if(L!==void 0){if(ue.currentProgram===L&&ue.lightsStateVersion===Ee)return ur(A,Ge),L}else Ge.uniforms=ce.getUniforms(A),A.onBeforeCompile(Ge,_),L=ce.acquireProgram(Ge,Oe),Ke.set(Oe,L),ue.uniforms=Ge.uniforms;let z=ue.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(z.clippingPlanes=se.uniform),ur(A,Ge),ue.needsLights=xo(A),ue.lightsStateVersion=Ee,ue.needsLights&&(z.ambientLightColor.value=Q.state.ambient,z.lightProbe.value=Q.state.probe,z.directionalLights.value=Q.state.directional,z.directionalLightShadows.value=Q.state.directionalShadow,z.spotLights.value=Q.state.spot,z.spotLightShadows.value=Q.state.spotShadow,z.rectAreaLights.value=Q.state.rectArea,z.ltc_1.value=Q.state.rectAreaLTC1,z.ltc_2.value=Q.state.rectAreaLTC2,z.pointLights.value=Q.state.point,z.pointLightShadows.value=Q.state.pointShadow,z.hemisphereLights.value=Q.state.hemi,z.directionalShadowMap.value=Q.state.directionalShadowMap,z.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,z.spotShadowMap.value=Q.state.spotShadowMap,z.spotLightMatrix.value=Q.state.spotLightMatrix,z.spotLightMap.value=Q.state.spotLightMap,z.pointShadowMap.value=Q.state.pointShadowMap,z.pointShadowMatrix.value=Q.state.pointShadowMatrix),ue.currentProgram=L,ue.uniformsList=null,L}function ys(A){if(A.uniformsList===null){let j=A.currentProgram.getUniforms();A.uniformsList=ir.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function ur(A,j){let he=N.get(A);he.outputColorSpace=j.outputColorSpace,he.batching=j.batching,he.batchingColor=j.batchingColor,he.instancing=j.instancing,he.instancingColor=j.instancingColor,he.instancingMorph=j.instancingMorph,he.skinning=j.skinning,he.morphTargets=j.morphTargets,he.morphNormals=j.morphNormals,he.morphColors=j.morphColors,he.morphTargetsCount=j.morphTargetsCount,he.numClippingPlanes=j.numClippingPlanes,he.numIntersection=j.numClipIntersection,he.vertexAlphas=j.vertexAlphas,he.vertexTangents=j.vertexTangents,he.toneMapping=j.toneMapping}function Hi(A,j,he,ue,Q){j.isScene!==!0&&(j=ge),J.resetTextureUnits();let Se=j.fog,Ee=ue.isMeshStandardMaterial?j.environment:null,Ge=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wt,Oe=(ue.isMeshStandardMaterial?le:ie).get(ue.envMap||Ee),Ke=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,L=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),z=!!he.morphAttributes.position,ae=!!he.morphAttributes.normal,ve=!!he.morphAttributes.color,He=vi;ue.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(He=_.toneMapping);let Be=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Ye=Be!==void 0?Be.length:0,Ne=N.get(ue),gt=p.state.lights;if(oe===!0&&(Y===!0||A!==S)){let It=A===S&&ue.id===M;se.setState(ue,A,It)}let Ze=!1;ue.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==gt.state.version||Ne.outputColorSpace!==Ge||Q.isBatchedMesh&&Ne.batching===!1||!Q.isBatchedMesh&&Ne.batching===!0||Q.isBatchedMesh&&Ne.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ne.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ne.instancing===!1||!Q.isInstancedMesh&&Ne.instancing===!0||Q.isSkinnedMesh&&Ne.skinning===!1||!Q.isSkinnedMesh&&Ne.skinning===!0||Q.isInstancedMesh&&Ne.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ne.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ne.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ne.instancingMorph===!1&&Q.morphTexture!==null||Ne.envMap!==Oe||ue.fog===!0&&Ne.fog!==Se||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==se.numPlanes||Ne.numIntersection!==se.numIntersection)||Ne.vertexAlphas!==Ke||Ne.vertexTangents!==L||Ne.morphTargets!==z||Ne.morphNormals!==ae||Ne.morphColors!==ve||Ne.toneMapping!==He||Ne.morphTargetsCount!==Ye)&&(Ze=!0):(Ze=!0,Ne.__version=ue.version);let et=Ne.currentProgram;Ze===!0&&(et=ki(ue,j,Q));let tt=!1,Lt=!1,en=!1,ut=et.getUniforms(),Ft=Ne.uniforms;if(De.useProgram(et.program)&&(tt=!0,Lt=!0,en=!0),ue.id!==M&&(M=ue.id,Lt=!0),tt||S!==A){De.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ut.setValue(B,"projectionMatrix",A.projectionMatrix),ut.setValue(B,"viewMatrix",A.matrixWorldInverse);let ot=ut.map.cameraPosition;ot!==void 0&&ot.setValue(B,de.setFromMatrixPosition(A.matrixWorld)),Xe.logarithmicDepthBuffer&&ut.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&ut.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Lt=!0,en=!0)}if(Q.isSkinnedMesh){ut.setOptional(B,Q,"bindMatrix"),ut.setOptional(B,Q,"bindMatrixInverse");let It=Q.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ut.setValue(B,"boneTexture",It.boneTexture,J))}Q.isBatchedMesh&&(ut.setOptional(B,Q,"batchingTexture"),ut.setValue(B,"batchingTexture",Q._matricesTexture,J),ut.setOptional(B,Q,"batchingIdTexture"),ut.setValue(B,"batchingIdTexture",Q._indirectTexture,J),ut.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ut.setValue(B,"batchingColorTexture",Q._colorsTexture,J));let yt=he.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&fe.update(Q,he,et),(Lt||Ne.receiveShadow!==Q.receiveShadow)&&(Ne.receiveShadow=Q.receiveShadow,ut.setValue(B,"receiveShadow",Q.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Ft.envMap.value=Oe,Ft.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&j.environment!==null&&(Ft.envMapIntensity.value=j.environmentIntensity),Lt&&(ut.setValue(B,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&dr(Ft,en),Se&&ue.fog===!0&&O.refreshFogUniforms(Ft,Se),O.refreshMaterialUniforms(Ft,ue,ne,pe,p.state.transmissionRenderTarget[A.id]),ir.upload(B,ys(Ne),Ft,J)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(ir.upload(B,ys(Ne),Ft,J),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&ut.setValue(B,"center",Q.center),ut.setValue(B,"modelViewMatrix",Q.modelViewMatrix),ut.setValue(B,"normalMatrix",Q.normalMatrix),ut.setValue(B,"modelMatrix",Q.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){let It=ue.uniformsGroups;for(let ot=0,we=It.length;ot<we;ot++){let it=It[ot];qe.update(it,et),qe.bind(it,et)}}return et}function dr(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function xo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,j,he){let ue=N.get(A);ue.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),N.get(A.texture).__webglTexture=j,N.get(A.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){let he=N.get(A);he.__webglFramebuffer=j,he.__useDefaultFramebuffer=j===void 0};let ni=B.createFramebuffer();this.setRenderTarget=function(A,j=0,he=0){R=A,w=j,P=he;let ue=!0,Q=null,Se=!1,Ee=!1;if(A){let Oe=N.get(A);if(Oe.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(B.FRAMEBUFFER,null),ue=!1;else if(Oe.__webglFramebuffer===void 0)J.setupRenderTarget(A);else if(Oe.__hasExternalTextures)J.rebindTextures(A,N.get(A.texture).__webglTexture,N.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let z=A.depthTexture;if(Oe.__boundDepthTexture!==z){if(z!==null&&N.has(z)&&(A.width!==z.image.width||A.height!==z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(A)}}let Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ee=!0);let L=N.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(L[j])?Q=L[j][he]:Q=L[j],Se=!0):A.samples>0&&J.useMultisampledRTT(A)===!1?Q=N.get(A).__webglMultisampledFramebuffer:Array.isArray(L)?Q=L[he]:Q=L,E.copy(A.viewport),H.copy(A.scissor),I=A.scissorTest}else E.copy(V).multiplyScalar(ne).floor(),H.copy(re).multiplyScalar(ne).floor(),I=U;if(he!==0&&(Q=ni),De.bindFramebuffer(B.FRAMEBUFFER,Q)&&ue&&De.drawBuffers(A,Q),De.viewport(E),De.scissor(H),De.setScissorTest(I),Se){let Oe=N.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,he)}else if(Ee){let Oe=j;for(let Ke=0;Ke<A.textures.length;Ke++){let L=N.get(A.textures[Ke]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ke,L.__webglTexture,he,Oe)}}else if(A!==null&&he!==0){let Oe=N.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,he)}M=-1},this.readRenderTargetPixels=function(A,j,he,ue,Q,Se,Ee,Ge=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Oe=Oe[Ee]),Oe){De.bindFramebuffer(B.FRAMEBUFFER,Oe);try{let Ke=A.textures[Ge],L=Ke.format,z=Ke.type;if(!Xe.textureFormatReadable(L)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ue&&he>=0&&he<=A.height-Q&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ge),B.readPixels(j,he,ue,Q,Ce.convert(L),Ce.convert(z),Se))}finally{let Ke=R!==null?N.get(R).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,j,he,ue,Q,Se,Ee,Ge=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Oe=Oe[Ee]),Oe)if(j>=0&&j<=A.width-ue&&he>=0&&he<=A.height-Q){De.bindFramebuffer(B.FRAMEBUFFER,Oe);let Ke=A.textures[Ge],L=Ke.format,z=Ke.type;if(!Xe.textureFormatReadable(L))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ae),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ge),B.readPixels(j,he,ue,Q,Ce.convert(L),Ce.convert(z),0);let ve=R!==null?N.get(R).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,ve);let He=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Sd(B,He,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ae),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(ae),B.deleteSync(He),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,he=0){let ue=Math.pow(2,-he),Q=Math.floor(A.image.width*ue),Se=Math.floor(A.image.height*ue),Ee=j!==null?j.x:0,Ge=j!==null?j.y:0;J.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,he,0,0,Ee,Ge,Q,Se),De.unbindTexture()};let _o=B.createFramebuffer(),fr=B.createFramebuffer();this.copyTextureToTexture=function(A,j,he=null,ue=null,Q=0,Se=null){Se===null&&(Q!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Q,Q=0):Se=0);let Ee,Ge,Oe,Ke,L,z,ae,ve,He,Be=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(he!==null)Ee=he.max.x-he.min.x,Ge=he.max.y-he.min.y,Oe=he.isBox3?he.max.z-he.min.z:1,Ke=he.min.x,L=he.min.y,z=he.isBox3?he.min.z:0;else{let yt=Math.pow(2,-Q);Ee=Math.floor(Be.width*yt),Ge=Math.floor(Be.height*yt),A.isDataArrayTexture?Oe=Be.depth:A.isData3DTexture?Oe=Math.floor(Be.depth*yt):Oe=1,Ke=0,L=0,z=0}ue!==null?(ae=ue.x,ve=ue.y,He=ue.z):(ae=0,ve=0,He=0);let Ye=Ce.convert(j.format),Ne=Ce.convert(j.type),gt;j.isData3DTexture?(J.setTexture3D(j,0),gt=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(J.setTexture2DArray(j,0),gt=B.TEXTURE_2D_ARRAY):(J.setTexture2D(j,0),gt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);let Ze=B.getParameter(B.UNPACK_ROW_LENGTH),et=B.getParameter(B.UNPACK_IMAGE_HEIGHT),tt=B.getParameter(B.UNPACK_SKIP_PIXELS),Lt=B.getParameter(B.UNPACK_SKIP_ROWS),en=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Be.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Be.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ke),B.pixelStorei(B.UNPACK_SKIP_ROWS,L),B.pixelStorei(B.UNPACK_SKIP_IMAGES,z);let ut=A.isDataArrayTexture||A.isData3DTexture,Ft=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){let yt=N.get(A),It=N.get(j),ot=N.get(yt.__renderTarget),we=N.get(It.__renderTarget);De.bindFramebuffer(B.READ_FRAMEBUFFER,ot.__webglFramebuffer),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let it=0;it<Oe;it++)ut&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,N.get(A).__webglTexture,Q,z+it),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,N.get(j).__webglTexture,Se,He+it)),B.blitFramebuffer(Ke,L,Ee,Ge,ae,ve,Ee,Ge,B.DEPTH_BUFFER_BIT,B.NEAREST);De.bindFramebuffer(B.READ_FRAMEBUFFER,null),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||N.has(A)){let yt=N.get(A),It=N.get(j);De.bindFramebuffer(B.READ_FRAMEBUFFER,_o),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,fr);for(let ot=0;ot<Oe;ot++)ut?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yt.__webglTexture,Q,z+ot):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yt.__webglTexture,Q),Ft?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,Se,He+ot):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,Se),Q!==0?B.blitFramebuffer(Ke,L,Ee,Ge,ae,ve,Ee,Ge,B.COLOR_BUFFER_BIT,B.NEAREST):Ft?B.copyTexSubImage3D(gt,Se,ae,ve,He+ot,Ke,L,Ee,Ge):B.copyTexSubImage2D(gt,Se,ae,ve,Ke,L,Ee,Ge);De.bindFramebuffer(B.READ_FRAMEBUFFER,null),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(gt,Se,ae,ve,He,Ee,Ge,Oe,Ye,Ne,Be.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(gt,Se,ae,ve,He,Ee,Ge,Oe,Ye,Be.data):B.texSubImage3D(gt,Se,ae,ve,He,Ee,Ge,Oe,Ye,Ne,Be):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,ae,ve,Ee,Ge,Ye,Ne,Be.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,ae,ve,Be.width,Be.height,Ye,Be.data):B.texSubImage2D(B.TEXTURE_2D,Se,ae,ve,Ee,Ge,Ye,Ne,Be);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ze),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,et),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Lt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,en),Se===0&&j.generateMipmaps&&B.generateMipmap(gt),De.unbindTexture()},this.initRenderTarget=function(A){N.get(A).__webglFramebuffer===void 0&&J.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?J.setTextureCube(A,0):A.isData3DTexture?J.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?J.setTexture2DArray(A,0):J.setTexture2D(A,0),De.unbindTexture()},this.resetState=function(){w=0,P=0,R=null,De.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};function rh(s,e){if(e===Ll)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===er||e===uo){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===er)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var yc=class extends Gn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Eh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=xi.extractUrlBase(e);o=xi.resolveURL(l,this.path)}else o=xi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ss(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===af){try{o[ft.KHR_BINARY_GLTF]=new Ah(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Nh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:o[h]=new hh;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[h]=new Rh(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[h]=new Ch;break;case ft.KHR_MESH_QUANTIZATION:o[h]=new Ih;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function I_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},lh=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Ve(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Wt);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new cs(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vt(u),l.distance=h;break;case"spot":l=new no(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Qn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},hh=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Rt}extendParams(e,t,n){let i=[];e.color=new Ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}},uh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},dh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(r)}},fh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},ph=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},gh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],Wt),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},yh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vt)),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Th=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},bh=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},wh=class{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Eh=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let g of h){let x=new Qe,m=new D,p=new Jt,T=new D(1,1,1),y=new Bt(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&T.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,x.compose(m,p,T));for(let _ in c)if(_==="_COLOR_0"){let C=c[_];y.instanceColor=new Pi(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);mt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},af="glTF",po=12,nf={JSON:1313821514,BIN:5130562},Ah=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,po),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==af)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-po,r=new DataView(e,po),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===nf.JSON){let l=new Uint8Array(e,po+o,a);this.content=n.decode(l)}else if(c===nf.BIN){let l=po+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Rh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=Lh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Lh[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=or[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(f)},a,l,Wt,d)})})}},Ch=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ih=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},vc=class extends pi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,T=1-m,y=p-d+h;for(let _=0;_!==a;_++){let C=o[x+_+a],w=o[x+_+c]*u,P=o[g+_+a],R=o[g+_]*u;r[_]=T*C+y*w+m*P+p*R}return r}},P_=new Jt,Ph=class extends vc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return P_.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sf={9728:Qt,9729:Ot,9984:Pa,9985:Zs,9986:us,9987:Cn},rf={33071:wn,33648:zs,10497:ln},oh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},L_={CUBICSPLINE:void 0,LINEAR:ji,STEP:Ji},ah={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function D_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new We({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cn})),s.DefaultMaterial}function xs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function N_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function U_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function F_(s){let e,t=s.extensions&&s.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ch(t.attributes):e=s.indices+":"+ch(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ch(s.targets[n]);return e}function ch(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Dh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function O_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var B_=new Qe,Nh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new I_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new rs(this.options.manager):this.textureLoader=new io(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ss(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return xs(r,a,i),Qn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(xi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=oh[i.type],a=or[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Gt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=oh[i.type],l=or[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(T);y||(x=new l(a,p*f,i.count*f/u),y=new Kn(x,f/u),t.cache.add(T,y)),m=new un(y,c,d%f/u,g)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),m=new Gt(x,c,g);if(i.sparse!==void 0){let p=oh.SCALAR,T=or[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,C=new T(o[1],y,i.sparse.count*p),w=new l(o[2],_,i.sparse.count*c);a!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,R=C.length;P<R;P++){let M=C[P];if(m.setX(M,w[P*c]),c>=2&&m.setY(M,w[P*c+1]),c>=3&&m.setZ(M,w[P*c+2]),c>=4&&m.setW(M,w[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=sf[d.magFilter]||Ot,u.minFilter=sf[d.minFilter]||Cn,u.wrapS=rf[d.wrapS]||ln,u.wrapT=rf[d.wrapT]||ln,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Qt&&u.minFilter!==Ot,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Xt(x);m.needsUpdate=!0,d(m)}),t.load(xi.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Qn(h,o),h.userData.mimeType=o.mimeType||O_(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new An,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Li,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return We}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let h=i[ft.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,vt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ut);let u=r.alphaMode||ah.OPAQUE;if(u===ah.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ah.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Rt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rt){let h=r.emissiveFactor;a.emissive=new Ve().setRGB(h[0],h[1],h[2],Wt)}return r.emissiveTexture!==void 0&&o!==Rt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Qn(h,r),t.associations.set(h,{materials:e}),r.extensions&&xs(i,h,r),h})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return of(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=F_(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=of(new xt,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?D_(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=o[f],p,T=l[f];if(m.mode===In.TRIANGLES||m.mode===In.TRIANGLE_STRIP||m.mode===In.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Hr(x,T):new rt(x,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===In.TRIANGLE_STRIP?p.geometry=rh(p.geometry,uo):m.mode===In.TRIANGLE_FAN&&(p.geometry=rh(p.geometry,er));else if(m.mode===In.LINES)p=new Vr(x,T);else if(m.mode===In.LINE_STRIP)p=new di(x,T);else if(m.mode===In.LINE_LOOP)p=new Wr(x,T);else if(m.mode===In.POINTS)p=new zn(x,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&U_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Qn(p,r),m.extensions&&xs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&xs(i,h[0],r),h[0];let d=new $e;r.extensions&&xs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Ol.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new as(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new Qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Gr(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let y=0,_=d.length;y<_;y++){let C=d[y],w=f[y],P=g[y],R=x[y],M=m[y];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let S=n._createAnimationTracks(C,w,P,R,M);if(S)for(let E=0;E<S.length;E++)p.push(S[E])}let T=new Ni(r,void 0,p);return Qn(T,i),T})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,B_)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new qs:l.length>1?u=new $e:l.length===1?u=l[0]:u=new mt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Qn(u,r),r.extensions&&xs(n,u,r),r.matrix!==void 0){let h=new Qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new $e;n.name&&(r.name=i.createUniqueName(n.name)),Qn(r,n),n.extensions&&xs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof hn||d instanceof Xt)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Oi[r.path]===Oi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Oi[r.path]){case Oi.weights:l=Zn;break;case Oi.rotation:l=kn;break;case Oi.translation:case Oi.scale:l=Hn;break;default:switch(n.itemSize){case 1:l=Zn;break;case 2:case 3:default:l=Hn;break}break}let u=i.interpolation!==void 0?L_[i.interpolation]:ji,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Oi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Dh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof kn?Ph:vc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function z_(s,e,t){let n=e.attributes,i=new sn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let u=Dh(or[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Dh(or[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new gn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function of(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Lh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return pt.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Qn(s,e),z_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?N_(s,e.targets,t):s})}var Mc=class extends Qr{constructor(e){super(e),this.type=Wn}parse(e){let o=function(R,M){switch(R){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(M||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(M||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(M||""))}},h=function(R,M,S){M=M||1024;let H=R.pos,I=-1,K=0,Z="",q=String.fromCharCode.apply(null,new Uint16Array(R.subarray(H,H+128)));for(;0>(I=q.indexOf(`
`))&&K<M&&H<R.byteLength;)Z+=q,K+=q.length,H+=128,q+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(H,H+128)));return-1<I?(S!==!1&&(R.pos+=K+I+1),Z+q.slice(0,I)):!1},d=function(R){let M=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,H=/^\s*FORMAT=(\S+)\s*$/,I=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,K={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},Z,q;for((R.pos>=R.byteLength||!(Z=h(R)))&&o(1,"no header found"),(q=Z.match(M))||o(3,"bad initial token"),K.valid|=1,K.programtype=q[1],K.string+=Z+`
`;Z=h(R),Z!==!1;){if(K.string+=Z+`
`,Z.charAt(0)==="#"){K.comments+=Z+`
`;continue}if((q=Z.match(S))&&(K.gamma=parseFloat(q[1])),(q=Z.match(E))&&(K.exposure=parseFloat(q[1])),(q=Z.match(H))&&(K.valid|=2,K.format=q[1]),(q=Z.match(I))&&(K.valid|=4,K.height=parseInt(q[1],10),K.width=parseInt(q[2],10)),K.valid&2&&K.valid&4)break}return K.valid&2||o(3,"missing format specifier"),K.valid&4||o(3,"missing image size specifier"),K},f=function(R,M,S){let E=M;if(E<8||E>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);E!==(R[2]<<8|R[3])&&o(3,"wrong scanline width");let H=new Uint8Array(4*M*S);H.length||o(4,"unable to allocate buffer space");let I=0,K=0,Z=4*E,q=new Uint8Array(4),pe=new Uint8Array(Z),ne=S;for(;ne>0&&K<R.byteLength;){K+4>R.byteLength&&o(1),q[0]=R[K++],q[1]=R[K++],q[2]=R[K++],q[3]=R[K++],(q[0]!=2||q[1]!=2||(q[2]<<8|q[3])!=E)&&o(3,"bad rgbe scanline format");let F=0,te;for(;F<Z&&K<R.byteLength;){te=R[K++];let re=te>128;if(re&&(te-=128),(te===0||F+te>Z)&&o(3,"bad scanline data"),re){let U=R[K++];for(let X=0;X<te;X++)pe[F++]=U}else pe.set(R.subarray(K,K+te),F),F+=te,K+=te}let V=E;for(let re=0;re<V;re++){let U=0;H[I]=pe[re+U],U+=E,H[I+1]=pe[re+U],U+=E,H[I+2]=pe[re+U],U+=E,H[I+3]=pe[re+U],I+=4}ne--}return H},g=function(R,M,S,E){let H=R[M+3],I=Math.pow(2,H-128)/255;S[E+0]=R[M+0]*I,S[E+1]=R[M+1]*I,S[E+2]=R[M+2]*I,S[E+3]=1},x=function(R,M,S,E){let H=R[M+3],I=Math.pow(2,H-128)/255;S[E+0]=Ii.toHalfFloat(Math.min(R[M+0]*I,65504)),S[E+1]=Ii.toHalfFloat(Math.min(R[M+1]*I,65504)),S[E+2]=Ii.toHalfFloat(Math.min(R[M+2]*I,65504)),S[E+3]=Ii.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=d(m),T=p.width,y=p.height,_=f(m.subarray(m.pos),T,y),C,w,P;switch(this.type){case rn:P=_.length/4;let R=new Float32Array(P*4);for(let S=0;S<P;S++)g(_,S*4,R,S*4);C=R,w=rn;break;case Wn:P=_.length/4;let M=new Uint16Array(P*4);for(let S=0;S<P;S++)x(_,S*4,M,S*4);C=M,w=Wn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:T,height:y,data:C,header:p.string,gamma:p.gamma,exposure:p.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case rn:case Wn:o.colorSpace=Wt,o.minFilter=Ot,o.magFilter=Ot,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}};var Sc=class extends Mc{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}};function mo(s){let e=new Map,t=new Map,n=s.clone();return cf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function cf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)cf(s.children[n],e.children[n],t)}function Uh(s){let e=s%28;return e<18?"green":e<21?"amber":"red"}function lf(){return[-6,6].flatMap((s,e)=>[-43,4,54,106].map((t,n)=>({x:s,z:-t,dir:e===0?-1:1,speed:0,cruise:6.8+n*.35,wheel:0,id:e*4+n})))}function hf(s,e,t,n,i){let r=Uh(t)!=="green";for(let o of s){let a=o.cruise,c=1/0,l=(d,f=.4)=>{d<28&&(a=Math.min(a,Math.sqrt(5.4*Math.max(0,d-f))),c=Math.min(c,Math.max(0,d-f)))};if(r)for(let d of n){let f=(-d-o.z)*o.dir-11.2;f>=-.01&&l(f)}for(let d of s){if(d===o||d.x!==o.x)continue;let f=((d.z-o.z)*o.dir+210)%210;l(f-5.6,1.2)}if(Math.abs(o.x-i.x)<1.5){let d=(i.z-o.z)*o.dir;d>0&&d<25&&l(d-3.3,.3)}let u=a<o.speed?4.5:2.1;o.speed+=Math.sign(a-o.speed)*Math.min(Math.abs(a-o.speed),u*e);let h=Math.min(o.speed*e,c);h<o.speed*e&&(o.speed=0),o.z+=o.dir*h,o.wheel+=h/.37,o.z<-145&&(o.z=65+(o.z- -145)),o.z>65&&(o.z=-145+(o.z-65))}}function uf(s,e,t){return s.find(n=>Math.abs(e-n.x)<n.w/2-.12&&Math.abs(t+n.y)<n.d/2-.12)}function df(s,e,t){for(let n of s){let i=Math.hypot(e.x-n.front,e.z+n.doorY)<4.8;n.open+=(Number(i)-n.open)*Math.min(1,t*4)}}function ff(s,e,t,n,i){return s<-310||s>310||e<-310||e>155||t.some(o=>Math.abs(s-o.x)<o.w/2+.28&&Math.abs(e+o.y)<o.d/2+.28)||n.some(o=>o.open<.8&&Math.abs(s-o.front)<.23+.28&&Math.abs(e+o.doorY)<1.7+.28)||i.some(o=>Math.abs(s-o.x)<1.2&&Math.abs(e-o.z)<2.65)?!0:[-17,17].some(o=>Math.hypot(s-o,e+58)<.93)}var Tt={name:"LUMEN",x:6400,z:-4600,radius:205},wc={x:-91,y:.32,z:0,exit:[-82,1.98,5]},Fh={x:6280,y:.32,z:-4600,exit:[6289,1.98,-4595]},Et={name:"NEXUS-9",x:13200,z:-9200,radius:210},Oh={x:13060,y:.32,z:-9200,exit:[13069,1.98,-9195]},ar={city:"AURORA",planet:"LUMEN",machine:"NEXUS-9"},Ec=s=>s==="machine"?Oh:s==="planet"?Fh:wc,bc=s=>s==="planet"?["city","machine"]:["planet"],cr=s=>s.route==="outer"?38:k_,pf=[[6280,.32,-4600],[6280,.32,-4645],[6360,60,-4770],[6600,450,-5050],[7400,1400,-5800],[8800,2400,-6700],[10400,2700,-7600],[11800,1400,-8400],[12700,220,-8960],[13060,20,-9080],[13060,.32,-9150],[13060,.32,-9200]],k_=76,mf=[[-91,.32,0],[-91,.32,-38],[-91,19,-105],[-30,145,-220],[350,760,-800],[1500,2100,-1800],[3400,2800,-2800],[5200,1600,-3850],[6080,240,-4370],[6280,25,-4490],[6280,.32,-4550],[6280,.32,-4600]],Tc=[[0,0],[.12,1/11],[.23,2/11],[.34,3/11],[.49,5/11],[.64,7/11],[.77,8/11],[.87,9/11],[.95,10/11],[1,1]];function H_(s){s=Math.max(0,Math.min(1,s));for(let e=1;e<Tc.length;e++)if(s<=Tc[e][0]){let[t,n]=Tc[e-1],[i,r]=Tc[e];return n+(r-n)*(s-t)/(i-t)}return 1}function Bh(){return{mode:"walking",world:"city",origin:"city",destination:"planet",route:"inner",time:0,progress:0}}function gf(s,e=bc(s.world)[0]){return s.mode!=="walking"||!bc(s.world).includes(e)?!1:(s.origin=s.world,s.destination=e,s.route=s.world==="machine"||e==="machine"?"outer":"inner",s.mode="riding",s.time=0,s.progress=go(s)?1:0,!0)}function go(s){return s.route==="outer"?s.origin==="machine":s.origin==="planet"}function zh(s,e){if(s.mode!=="riding")return;let t=cr(s);s.time=Math.min(t,s.time+Math.max(0,e));let n=H_(s.time/t);s.progress=go(s)?1-n:n,s.time>=t&&(s.mode="arrived",s.progress=go(s)?0:1)}function xf(s){return s.mode!=="arrived"?!1:(s.world=s.destination,s.mode="walking",!0)}function Ac(s,e,t){let n=Ec(s.world);return Math.hypot(e-(n.x+9),t-(n.z+5))<15}function _f(s){if(s.mode==="arrived")return`${ar[s.destination]}\u99C5\u306B\u5230\u7740`;let e=s.time/cr(s);return e<.12?s.origin==="city"?"\u90FD\u5E02\u306E\u99C5\u3092\u51FA\u767A":"\u60D1\u661F\u306E\u99C5\u3092\u51FA\u767A":e<.34?"\u4E0A\u6607\u30FB\u5B87\u5B99\u306E\u8ECC\u9053\u3078":e<.67?"\u661F\u9593\u822A\u884C":e<.9?"\u5230\u7740\u5730\u3078\u964D\u4E0B":"\u99C5\u306B\u9032\u5165"}function Pn(s,e){let t=Math.max(0,Math.min(1,(s+92)/42)),n=Math.min(1,Math.hypot(Math.max(0,Math.abs(s+46)-11),Math.max(0,Math.abs(e+3)-9))/8);return t*n*(1.4*Math.sin(s*.045)*Math.sin(e*.036)+.7*Math.sin(e*.071+s*.023))||0}function yf(s,e){return Math.hypot(s,e)<Tt.radius-8}function Rc(s,e,t,n){return Math.atan2(s,e)-Math.atan2(t,n)}function kh(s,e){s.updateMatrixWorld(!0);let t=0,n=0,i=0;for(let o of["Left","Right"]){let a,c;if(s.traverse(l=>{l.name.endsWith(o+"Foot")&&(a=l),l.name.endsWith(o+"ToeBase")&&(c=l)}),a&&c){let l=a.getWorldPosition(new e),u=c.getWorldPosition(new e);t+=u.x-l.x,n+=u.z-l.z,i++}}if(!i||Math.hypot(t,n)<1e-5)throw Error("\u4EBA\u7269\u30E2\u30C7\u30EB\u306E\u6B63\u9762\u3092\u5224\u5B9A\u3067\u304D\u307E\u305B\u3093");let r=Math.hypot(t,n);return{x:t/r,z:n/r}}function vf(s){let e=new $e;e.name="Galaxy Railway / Lumen",s.add(e);let t=new We({color:1583929,metalness:.75,roughness:.28}),n=new We({color:10993345,metalness:.5,roughness:.38}),i=new We({color:3621195,roughness:.95}),r=new We({color:12887152,metalness:.75,roughness:.3}),o=new We({color:3980988,emissive:556421,emissiveIntensity:.85,roughness:.3}),a=new We({color:16770732,emissive:16765316,emissiveIntensity:2}),c=new We({color:8311775,metalness:.05,roughness:.13,transparent:!0,opacity:.12,depthWrite:!1,side:Ut}),l=[],u=[];function h(O,G,ee,se=e){let me=new rt(O,G);return me.position.set(...ee),me.castShadow=!0,me.receiveShadow=!0,se.add(me),me}let d=(O,G,ee,se)=>h(new Pt(...O),ee,G,se);function f(O,G,ee,se=e,me="#b6fff2"){let Te=document.createElement("canvas");Te.width=1024,Te.height=192;let fe=Te.getContext("2d");fe.fillStyle="#0a1625",fe.fillRect(0,0,1024,192),fe.strokeStyle="#5a9ca6",fe.lineWidth=5,fe.strokeRect(6,6,1012,180),fe.fillStyle=me,fe.font="600 64px sans-serif",fe.textAlign="center",fe.textBaseline="middle",fe.fillText(O,512,98,970);let xe=new dn(Te);xe.colorSpace=vt;let Ie=new Rt({map:xe,side:cn}),Ce=h(new zt(ee,ee*192/1024),Ie,G,se),Ae=new rt(Ce.geometry,Ie);return Ae.rotation.y=Math.PI,Ce.add(Ae),Ce}function g(O,G){let ee=new $e;ee.position.set(O.x,0,O.z),e.add(ee);let se=O===wc?u:l,me=(fe,xe,Ie,Ce)=>se.push({x:O.x+fe,z:O.z+xe,w:Ie,d:Ce});d([7,.32,39],[9,.16,0],i,ee),d([.15,.025,38],[5.6,.335,0],o,ee),d([9,.24,42],[9,5.6,0],t,ee),d([8,.07,39],[9,5.44,0],n,ee);for(let fe of[-17,-8,1,10,18])d([.2,5.4,.25],[12.6,2.7,fe],n,ee),d([6,.035,.13],[9,5.35,fe],a,ee),me(12.6,fe,.2,.25);for(let fe of[-9,10])d([1,.4,3],[11,.72,fe],t,ee),d([.16,1.1,3],[11.4,1.22,fe],r,ee),me(11,fe,1,3);d([.8,2,.7],[11,1.3,16],t,ee),me(11,16,.8,.7),f("AURORA  \u21C4  LUMEN",[8.8,4.55,18.7],7,ee),f(G,[8.8,3.5,18.7],7,ee),f("GALAXY RAILWAY  /  01",[8.8,4.5,-18.8],7,ee);let Te=new Vt(9365741,100,24,2);return Te.position.set(9,4,0),ee.add(Te),ee}g(wc,"AURORA CENTRAL"),g(Fh,"LUMEN OBSERVATORY"),d([18,.035,5],[-81,.025,20],i);for(let O=-96;O<-73;O+=3)d([.12,.04,4.8],[O,.05,20],o);f("GALAXY RAILWAY  \u2190",[-76,2.5,20],5).rotation.y=Math.PI/2;let x=new $n(mf.map(O=>new D(...O)),!1,"centripetal"),m=new $e;e.add(m);for(let O of[-1,1]){let G=Array.from({length:701},(se,me)=>{let Te=x.getPoint(me/700),fe=x.getTangent(me/700),xe=new D(-fe.z,0,fe.x).normalize();return Te.addScaledVector(xe,O*1.32)}),ee=new $n(G);h(new is(ee,1100,.075,5,!1),o,[0,0,0],m)}let p=new Bt(new Pt(3.7,.12,.4),t,560),T=new mt;for(let O=0;O<560;O++){let G=O/559,ee=x.getPoint(G),se=x.getTangent(G);T.position.copy(ee),T.lookAt(ee.clone().add(se)),T.updateMatrix(),p.setMatrixAt(O,T.matrix)}p.instanceMatrix.needsUpdate=!0,m.add(p);for(let O of[.12,.19,.28,.39,.5,.61,.72,.83,.91]){let G=x.getPoint(O),ee=O<.25||O>.85?7:22,se=h(new qt(ee,.23,6,64),n,G.toArray());se.quaternion.setFromUnitVectors(new D(0,0,1),x.getTangent(O)),h(new qt(ee-.5,.07,5,64),o,G.toArray()).quaternion.copy(se.quaternion)}for(let O=0;O<7;O++){let G=x.getPoint(O*.025);d([.8,Math.max(.2,G.y),.8],[G.x,-.2+G.y/2,G.z],t)}let y=new $e;y.name="Lumen Express / passenger carriage",e.add(y);let _=new We({color:2381405,roughness:.8});for(let O=0;O<3;O++){let G=O*13,ee=new $e;ee.position.z=G,y.add(ee),d([4.6,.28,12],[0,.35,0],t,ee),d([4.5,.12,11.8],[0,.55,0],r,ee),d([4.75,.24,12.3],[0,3.6,0],t,ee);for(let se of[-2.25,2.25]){d([.15,.9,12],[se,1.02,0],t,ee),d([.17,.07,12.2],[se,1.5,0],r,ee),d([.12,1.65,11.5],[se,2.42,0],c,ee);for(let me of[-5.8,-3.5,-1.2,1.2,3.5,5.8])d([.15,2.1,.13],[se,2.5,me],n,ee);d([.18,.06,12],[se,3.47,0],a,ee),d([.13,.09,11.5],[se,.65,0],o,ee)}for(let se of[-5.9,5.9])d([4.5,1.1,.12],[0,1,se],t,ee),d([4.5,1.8,.05],[0,2.45,se],c,ee),d([.8,.1,.2],[0,3.4,se],a,ee);for(let se of[-3.8,-.8,2.2])for(let me of[-1.35,1.35])d([1.15,.22,1.1],[me,1.03,se],_,ee),d([1.15,.95,.16],[me,1.45,se+.5],_,ee),d([.14,.35,.9],[me+(me>0?.55:-.55),1.3,se],r,ee);d([.18,.1,10],[0,3.43,0],a,ee);for(let se of[-4.5,4.5])for(let me of[-1.7,1.7]){let Te=h(new dt(.48,.48,.25,16),t,[me,0,se],ee);Te.rotation.z=Math.PI/2}O<2&&d([2,2,1],[0,1.7,6.5],t,ee)}h(new Dt(1,24,16),n,[0,1.7,-6.05],y).scale.set(2.2,1.5,2.4),d([3.2,.8,.1],[0,2.5,-7.5],c,y),d([3,.13,.15],[0,1,-8],o,y),f("LUMEN EXPRESS  /  01",[0,3.18,-5.75],3.7,y);let w=new Vt(16770997,35,9,2);w.position.set(0,3,13),y.add(w);let P=(O,G)=>Pn(O-Tt.x,G-Tt.z),R=new $e;R.position.set(Tt.x,0,Tt.z),R.name="LUMEN / walkable planet",e.add(R);let M=document.createElement("canvas");M.width=M.height=256;let S=M.getContext("2d"),E=S.createImageData(256,256),H=1377;for(let O=0;O<E.data.length;O+=4){H=Math.imul(H,1664525)+1013904223>>>0;let G=120+H%115;E.data.set([G,G,G,255],O)}S.putImageData(E,0,0);let I=new dn(M);I.wrapS=I.wrapT=ln,I.repeat.set(100,100),I.colorSpace=vt,I.anisotropy=4;let K=new zt(430,430,120,120);K.rotateX(-Math.PI/2);let Z=K.attributes.position,q=[],pe=new Ve;for(let O=0;O<Z.count;O++){let G=Z.getX(O),ee=Z.getZ(O),se=Pn(G,ee);Z.setY(O,se),pe.setHSL(.53+.04*Math.sin(G*.02),.15,.18+se*.012),q.push(pe.r,pe.g,pe.b)}K.setAttribute("color",new Je(q,3)),K.computeVertexNormals(),h(K,new We({vertexColors:!0,map:I,bumpMap:I,bumpScale:.13,roughness:.96}),[0,0,0],R),d([32,.25,8],[-103,.12,5],i,R);for(let O=0;O<11;O++)d([.15,.025,7],[-112+O*2,.28,5],o,R);function ne(O,G,ee,se){l.push({x:Tt.x+O,z:Tt.z+G,w:ee,d:se})}let F=-46,te=-3;d([20,.4,16],[F,.2,te],n,R),d([20,.22,16],[F,4.8,te],t,R);for(let[O,G,ee,se]of[[F,te-8,20,.25],[F+10,te,.25,16],[F,te+8,20,.25],[F-10,te-5,.25,6],[F-10,te+5,.25,6]])d([ee,1.2,se],[O,1,G],t,R),d([ee,2.3,se],[O,2.75,G],c,R),ne(O,G,ee,se);f("LUMEN / FIELD STATION",[F-10.2,4,te],8,R).rotation.y=-Math.PI/2;for(let O=0;O<3;O++){d([2.5,.9,1],[F+4,1.1,te-5+O*5],t,R);let G=d([1.6,.8,.06],[F+4,1.95,te-5+O*5],o,R);G.rotation.x=-.18,ne(F+4,te-5+O*5,2.5,1)}let V=new Vt(10089699,100,30,2);V.position.set(F,4,te),R.add(V);for(let[O,G,ee]of[[16,-35,11],[45,-20,8]]){let se=Pn(O,G);h(new Dt(ee,32,16,0,Math.PI*2,0,Math.PI/2),c,[O,se,G],R);let me=h(new qt(ee,.16,6,48),n,[O,se,G],R);me.rotation.x=Math.PI/2;for(let Te=0;Te<7;Te++){let fe=Te*2.399;h(new Ks(1.2,4,7),o,[O+Math.cos(fe)*ee*.5,se+2,G+Math.sin(fe)*ee*.5],R)}ne(O,G,ee*1.7,ee*1.7)}for(let O=0;O<6;O++){let G=-55+O*5,ee=-28,se=Pn(G,ee);d([.18,2,.18],[G,se+1,ee],n,R);let me=d([4,.1,5],[G,se+2,ee],new We({color:1453412,metalness:.75,roughness:.2}),R);me.rotation.x=-.35,ne(G,ee,4,5)}let re=h(new dt(.25,.5,18,10),n,[70,9,-55],R),U=h(new Dt(5,24,12,0,Math.PI*2,0,Math.PI*.3),n,[70,18,-55],R);U.rotation.z=.55,ne(70,-55,3,3);let X=2077,oe=()=>(X=Math.imul(X,1664525)+1013904223>>>0,X/4294967296),Y=new Bt(new fi(1,1),i,190),k=new Bt(new Ks(1,1,5),o,110);for(let[O,G,ee]of[[Y,190,!1],[k,110,!0]])for(let se=0;se<G;se++){let me,Te;do me=(oe()-.5)*390,Te=(oe()-.5)*390;while(Math.hypot(me,Te)>195||me<-25&&Math.abs(Te)<32||Math.hypot(me-25,Te+25)<40);let fe=Pn(me,Te),xe=ee?1.5+oe()*5:.6+oe()*3;T.position.set(me,fe+(ee?xe*.5:xe*.35),Te),T.rotation.set(ee?0:oe(),oe()*6.28,ee?(oe()-.5)*.3:oe()),T.scale.set(ee?xe*.35:xe,xe,ee?xe*.35:xe*.8),T.updateMatrix(),O.setMatrixAt(se,T.matrix),xe>2.5&&ne(me,Te,ee?xe*.5:xe*1.5,ee?xe*.5:xe*1.3)}R.add(Y,k);for(let[O,G]of[[-20,35],[32,68],[100,12]]){let ee=h(new ts(12,40),new We({color:1329498,emissive:555917,emissiveIntensity:.45,metalness:.8,roughness:.18}),[O,Pn(O,G)+.08,G],R);ee.rotation.x=-Math.PI/2,ne(O,G,20,20)}let de=new xt,ye=[],ge=[],Fe=[],nt=160,B=16;for(let O=0;O<=B;O++)for(let G=0;G<=nt;G++){let ee=G*Math.PI*2/nt,se=212+O*13,me=38+19*Math.sin(ee*7+.8)+12*Math.cos(ee*19)+9*Math.sin(ee*31),Te=Math.max(0,Math.sin(Math.PI*O/B))*me+Math.sin(ee*29+O*.6)*O*.8;if(ye.push(Math.cos(ee)*se,Te-3,Math.sin(ee)*se),pe.setHSL(.55,.1,.14+Te*7e-4),Fe.push(pe.r,pe.g,pe.b),O<B&&G<nt){let fe=O*(nt+1)+G;ge.push(fe,fe+nt+1,fe+1,fe+1,fe+nt+1,fe+nt+2)}}de.setAttribute("position",new Je(ye,3)),de.setAttribute("color",new Je(Fe,3)),de.setIndex(ge),de.computeVertexNormals(),h(de,new We({vertexColors:!0,map:I,roughness:1,side:Ut}),[0,0,0],R);for(let[O,G,ee]of[[45,110,15],[-32,-110,18],[125,-60,11]]){let se=h(new qt(ee,1.2,7,48),i,[O,Pn(O,G),G],R);se.rotation.x=Math.PI/2,se.scale.z=.45}f("CRYSTAL BASIN \u2192",[-78,2.6,20],7,R);let ht=new We({color:3036775,roughness:.88});ht.onBeforeCompile=O=>{O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
varying vec3 planetNormal;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
planetNormal=normal;`),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 planetNormal;`).replace("#include <color_fragment>",`#include <color_fragment>
 float land = sin(planetNormal.x*19.+sin(planetNormal.z*13.)*2.)*sin(planetNormal.z*17.+planetNormal.y*9.);
 diffuseColor.rgb=mix(vec3(.025,.15,.27),vec3(.16,.29,.19),smoothstep(.10,.29,land));
 float cloud=sin(planetNormal.x*43.+planetNormal.y*24.)*sin(planetNormal.z*39.+planetNormal.x*7.);
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.68,.78,.8),smoothstep(.42,.65,cloud)*.65);`)};let ke=h(new Dt(1700,80,48),ht,[0,-1750,0]);ke.castShadow=!1;let Xe=h(new Dt(1550,64,40),new We({color:5468276,roughness:.94}),[6400,-1610,-4600]);Xe.castShadow=!1;let De=new We({color:11441282,roughness:1});De.onBeforeCompile=O=>{O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
varying vec3 gasNormal;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
gasNormal=normal;`),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 gasNormal;`).replace("#include <color_fragment>",`#include <color_fragment>
 float band=.5+.5*sin(gasNormal.y*61.+sin(gasNormal.x*18.)*.4);
 diffuseColor.rgb=mix(vec3(.32,.37,.46),vec3(.65,.48,.32),band);
 diffuseColor.rgb*=.85+.15*sin(gasNormal.y*150.);`)};let St=h(new Dt(980,64,40),De,[8800,1700,-8200]);St.castShadow=!1,St.rotation.z=.23,h(new Zr(1250,1750,128),new Rt({color:10133164,transparent:!0,opacity:.42,side:Ut}),[8800,1700,-8200]).rotation.set(.9,.25,.28);let J=[],ie=[];for(let O=0;O<3200;O++){let G=oe()*Math.PI*2,ee=oe()*2-1,se=15500;J.push(Math.sqrt(1-ee*ee)*Math.cos(G)*se+3200,ee*se+1500,Math.sqrt(1-ee*ee)*Math.sin(G)*se-2300);let me=.4+oe()*.6;ie.push(me*.83,me*.9,me)}let le=new xt;le.setAttribute("position",new Je(J,3)),le.setAttribute("color",new Je(ie,3));let b=new zn(le,new An({size:6,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));e.add(b);let v=new kr(new Xs({color:11060973,transparent:!0,opacity:.24}));v.position.set(11e3,7e3,-11e3),v.scale.set(70,70,1),e.add(v);function $(O,G=!1,ee=x){let se=ee.getPoint(Math.max(0,Math.min(1,O))),me=ee.getTangent(Math.max(0,Math.min(1,O))).multiplyScalar(G?-1:1);y.position.copy(se),y.quaternion.setFromRotationMatrix(new Qe().lookAt(se,se.clone().add(me),new D(0,1,0))),y.updateMatrixWorld(!0)}$(0);function ce(O,G){return yf(O-Tt.x,G-Tt.z)?l.some(ee=>Math.abs(O-ee.x)<ee.w/2+.3&&Math.abs(G-ee.z)<ee.d/2+.3):!0}return{group:e,train:y,curve:x,stars:b,planet:R,earth:ke,setTrain:$,blockedPlanet:ce,floorHeight:P,cityColliders:u,planetColliders:l}}var jt=[{name:"\u897F\u30FB\u30EA\u30D0\u30FC\u30B5\u30A4\u30C9",x:-240},{name:"\u4E2D\u592E\u30FB\u65E7\u5E02\u8857",x:-12},{name:"\u6771\u30FB\u30AC\u30FC\u30C7\u30F3",x:230}],Mf=[[-75,45,"\u767A\u5149\u9271\u77F3"],[-20,90,"\u53E4\u4EE3\u306E\u8A18\u9332"],[85,50,"\u6C37\u306E\u6A19\u672C"],[100,-85,"\u78C1\u5834\u89B3\u6E2C"],[12,-90,"\u7D50\u6676\u306E\u5171\u9CF4"],[140,0,"\u5730\u5E73\u7DDA\u306E\u6E2C\u91CF"]];function Sf(s){let e=(s%90+90)%90,t=Math.floor(e/30),n=e%30,i=(t+1)%3,r=Math.max(0,Math.min(1,(n-8)/22)),o=r*r*(3-2*r);return{x:jt[t].x+(jt[i].x-jt[t].x)*o,dwell:n<8,index:t,next:i,dir:jt[i].x>jt[t].x?1:-1}}function Tf(s,e,t){let n=Math.max(0,Math.min(1,t/5));return n===1?e:n===0?s:s+(e-s)*n*n*(3-2*n)}function bf(s,e,t){return Math.abs(e-s.x)<8.5&&Math.abs(t+s.y)<9.5}function wf(s,e){return s>=-310&&s<=310&&e>=-310&&e<=155}function Ef(s,e,t,n){let i=new $e;s.add(i);let r=[],o=[],a=(F,te=0,V=.7)=>new We({color:F,metalness:te,roughness:V}),c=a(4544353),l=a(13029322,.35),u=a(7822405),h=a(1517880,.6),d=a(3307626),f=a(4357504),g=new We({color:8644563,emissive:2989457,emissiveIntensity:.7}),x=new We({color:9025739,transparent:!0,opacity:.16,depthWrite:!1,side:Ut,roughness:.1});function m(F,te,V,re=i){let U=new rt(F,te);return U.position.set(...V),U.castShadow=!0,U.receiveShadow=!0,re.add(U),U}let p=(F,te,V,re)=>m(new Pt(...F),V,te,re);function T(F,te,V=5,re=i){let U=document.createElement("canvas");U.width=768,U.height=128;let X=U.getContext("2d");X.fillStyle="#102331",X.fillRect(0,0,768,128),X.fillStyle="#b9f4dc",X.font="bold 39px sans-serif",X.textAlign="center",X.textBaseline="middle",X.fillText(F,384,64,740);let oe=new dn(U);oe.colorSpace=vt;let Y=new Rt({map:oe}),k=m(new zt(V,V/6),Y,te,re),de=new rt(k.geometry,Y);return de.rotation.y=Math.PI,k.add(de),k}function y(F,te,V,re=i){m(new dt(.35,.25,.6,9),l,[F,te+.3,V],re),m(new fi(.65,1),d,[F,te+1.15,V],re)}function _(F,te,V,re=i){p([2,.12,1.2],[F,te+.9,V],u,re);for(let U of[-.8,.8])p([.08,.85,.8],[F+U,te+.43,V],h,re)}function C(F,te,V,re=i){p([2.3,.4,.9],[F,te+.45,V],f,re),p([2.3,.8,.18],[F,te+.9,V+.4],f,re)}let w=[];p([620,.12,465],[0,-.14,-77.5],c);for(let F of[-285,-210,-150,0,150,210,285])p([13,.015,465],[F,-.06,-77.5],h);for(let F of[-290,-230,-170,-58,25,130])p([620,.018,12],[0,-.05,F],h);for(let F of[-255,-180,-120,120,180,255])for(let te of[-260,-200,-140,-80,-20,55,105]){if(Math.abs(F)<106&&te>-165||F===180&&te===105)continue;let V=22+(Math.abs(F)*7+Math.abs(te)*13)%79;w.push({x:F,z:te,h:V,w:22,d:25}),r.push({x:F,z:te,w:22,d:25})}let P=new Bt(new Pt(1,1,1),l,w.length),R=new Bt(new Pt(1,1,1),new We({color:3561835,metalness:.45,roughness:.24,emissive:2378836,emissiveIntensity:.3}),w.reduce((F,te)=>F+Math.floor(te.h/3)*4,0)),M=new mt,S=0;w.forEach((F,te)=>{M.position.set(F.x,F.h/2,F.z),M.rotation.set(0,0,0),M.scale.set(F.w,F.h,F.d),M.updateMatrix(),P.setMatrixAt(te,M.matrix),P.setColorAt(te,new Ve().setHSL(.52+te%4*.015,.1,.32+te%3*.08));for(let V=3;V<F.h;V+=3)for(let re of[-1,1])for(let U of[0,1])M.position.set(F.x+(U?0:re*11.04),V,F.z+(U?re*12.54:0)),M.scale.set(U?20:.05,1.65,U?.05:23),M.updateMatrix(),R.setMatrixAt(S++,M.matrix)}),R.count=S,i.add(P,R);let E=document.createElement("canvas");E.width=256,E.height=64;let H=E.getContext("2d");H.fillStyle="#142d3b",H.fillRect(0,0,256,64);for(let F=0;F<8;F++)H.fillStyle=F%5===1?"#b9a879":F%3===0?"#45677b":"#264653",H.fillRect(F*32+3,4,26,54),H.fillStyle="#182f3a",H.fillRect(F*32+3,40,26,3);let I=new dn(E);I.colorSpace=vt,R.material.map=I,R.material.emissiveMap=I,R.material.emissive.set(16777215),R.material.emissiveIntensity=.15;for(let F of[-285,-210,150,285])for(let te=-290;te<140;te+=30)y(F+10,0,te),p([2,.5,.8],[F+10,.4,te+5],u);p([45,.08,42],[180,.03,105],d);for(let F=0;F<9;F++)y(164+F%3*14,0,90+Math.floor(F/3)*14);T("GARDEN DISTRICT",[160,2.5,125],7),p([610,.45,4.2],[0,14.4,-58],h);for(let F of[-59,-57])p([610,.07,.08],[0,14.68,F],g);for(let F=-290;F<310;F+=24)p([.7,14,.7],[F,7,-58],l);for(let[F,te]of jt.entries()){p([31,.4,5],[te.x,14.6,-52],l),p([32,.2,7],[te.x,19,-52],h);for(let V of[-14,14])p([.22,4.4,.22],[te.x+V,16.8,-50],l);T(te.name,[te.x,17.6,-49.3],10),p([2,14.5,2],[te.x+13,7.25,-49],x)}n.clear();for(let F of[-8,0,8]){p([7.6,.2,3],[F,-.8,0],h,n),p([7.7,.2,3.1],[F,1.5,0],l,n);for(let te of[-1.5,1.5]){p([7.6,.7,.13],[F,-.35,te],h,n),p([7.4,1.2,.04],[F,.65,te],x,n);for(let V of[-3.6,0,3.6])p([.1,1.7,.1],[F+V,.5,te],l,n)}C(F,-.75,-.8,n)}let K=e.map((F,te)=>{let V=Math.ceil((t[te]||70)+1),re=F.front+F.side*3,U=-F.doorY;for(let k of[-F.y-8,-F.y+8])y(F.front+F.side*2,.17,k),p([4,.08,.25],[F.x,3.3,k],g);let X=T(F.label+" / AURORA",[F.x,2.6,-F.y-F.d/2+.3],8),oe=m(new qt(.8,.045,6,32),g,[F.x,3.1,-F.y]);oe.rotation.x=Math.PI/2,p([3.4,.14,3.4],[re,.17,U],h),T("LIFT  /  F",[re,2.7,U-1.6],3);for(let k of[V,V+6]){p([18,.24,20],[F.x,k-.12,-F.y],l);for(let de of[-10,10])p([18,1.1,.12],[F.x,k+.55,-F.y+de],x);for(let de of[-9,9])p([.12,1.1,20],[F.x+de,k+.55,-F.y],x);if(k===V){p([18,.16,20],[F.x,k+5.6,-F.y],l);for(let ye of[-9,9])for(let ge of[-10,10])p([.2,5.6,.2],[F.x+ye,k+2.8,-F.y+ge],h);p([11,.025,14],[F.x,k+.02,-F.y],u);for(let ye of[-8,8]){y(F.x-6,k,-F.y+ye),p([5,2.5,.5],[F.x,k+1.25,-F.y+ye],h);for(let ge=0;ge<16;ge++)p([.2,.5+ge%3*.1,.25],[F.x-2+ge*.25,k+.6+ge%2*1.1,-F.y+ye-.3],ge%2?l:f)}for(let ye of[-5,5]){p([.05,5,.05],[F.x+ye,k+2.8,-F.y],h);let ge=m(new qt(1.2,.06,6,36),g,[F.x+ye,k+4.2,-F.y]);ge.rotation.x=Math.PI/2}let de=new Vt(16767142,65,22,2);de.position.set(F.x,k+4,-F.y),i.add(de);for(let ye of[-6,6])C(F.x,k,-F.y+ye),_(F.x+4,k,-F.y+ye),o.push({room:te,level:1,x:F.x,z:-F.y+ye,w:2.3,d:1.1},{room:te,level:1,x:F.x+4,z:-F.y+ye,w:2,d:1.2});T("SKY LOUNGE / "+F.label,[F.x,k+3,-F.y-9.8],10)}else{for(let de of[-6,6])for(let ye of[-6,6])y(F.x+de,k,-F.y+ye);p([5,.35,2],[F.x,k+.2,-F.y],d),o.push({room:te,level:2,x:F.x,z:-F.y,w:5,d:2})}}let Y=new $e;Y.position.set(re,.17,U),i.add(Y),p([2.8,.12,2.8],[0,0,0],h,Y),p([2.8,.1,2.8],[0,3,0],l,Y);for(let k of[-1.4,1.4])p([.08,3,2.8],[k,1.5,0],x,Y);return p([2.8,3,.08],[0,1.5,-1.4],x,Y),{room:F,roof:V,x:re,z:U,cabin:Y,levels:[.17,V,V+6]}}),Z=Mf.map(([F,te,V],re)=>{let U=Pn(F,te),X=new $e;X.position.set(Tt.x+F,U,Tt.z+te),i.add(X),m(new dt(.4,.6,2,12),h,[0,1,0],X);let oe=m(new Di(.6),g.clone(),[0,2.6,0],X);return T(`${re+1} / ${V}`,[0,3.5,0],4,X),{x:Tt.x+F,z:Tt.z+te,jewel:oe,title:V}}),q=new $e;q.position.set(Tt.x-85,0,Tt.z+12),i.add(q),p([2.6,.5,3.5],[0,.9,0],l,q),p([1.8,1.4,1.7],[0,1.8,-.3],x,q);for(let F of[-1.4,1.4])for(let te of[-1.1,1.1]){let V=m(new dt(.6,.6,.35,16),h,[F,.6,te],q);V.rotation.z=Math.PI/2}T("ROVER / F",[0,2.8,0],3,q);let pe=new $e;pe.position.set(Tt.x-15,Pn(-15,-45)+2,Tt.z-45),i.add(pe),m(new Dt(1.2,20,12),g,[0,0,0],pe);for(let F of[2.3,3.6,5]){let te=m(new qt(F,.035,6,60),l,[0,0,0],pe);te.rotation.x=Math.PI/2,m(new Dt(.35,12,8),f,[F,0,0],pe)}T("ORBITAL ARCHIVE / F",[0,4,0],7,pe);for(let F=0;F<7;F++){let te=65+F*8,V=105,re=Pn(te,V);p([2,6+F%2*2,2],[Tt.x+te,re+3,Tt.z+V],c),F<6&&p([9,.8,2],[Tt.x+te+4,re+6,Tt.z+V],c)}T("THE RESONANCE RUINS",[Tt.x+88,4,Tt.z+115],14);function ne(F,te,V){if(V){let re=K[V.room].room;return!bf(re,F,te)||o.some(U=>U.room===V.room&&U.level===V.level&&Math.abs(F-U.x)<U.w/2+.3&&Math.abs(te-U.z)<U.d/2+.3)}return!wf(F,te)||r.some(re=>Math.abs(F-re.x)<re.w/2+.3&&Math.abs(te-re.z)<re.d/2+.3)}return{root:i,buildings:w,lifts:K,beacons:Z,rover:q,orrery:pe,blocked:ne,metroPose:Sf,liftHeight:Tf}}var Af=[{id:"canal",name:"\u904B\u6CB3\u30D7\u30ED\u30E0\u30CA\u30FC\u30C9",x:-286,z:72,yaw:-.3},{id:"market",name:"\u6771\u30FB\u30CA\u30A4\u30C8\u30DE\u30FC\u30B1\u30C3\u30C8",x:210,z:88,yaw:0},{id:"workshop",name:"\u5317\u30FB\u30E1\u30A4\u30AB\u30FC\u30BA\u5E83\u5834",x:-150,z:-230,yaw:0},{id:"garden",name:"\u30AC\u30FC\u30C7\u30F3\u516C\u5712",x:180,z:130,yaw:0},{id:"city-car",name:"\u30B7\u30C6\u30A3\u30AB\u30FC\u4E57\u308A\u5834",x:-207,z:68,yaw:Math.PI/2},{id:"cafe",name:"\u904B\u6CB3\u30AB\u30D5\u30A7\u5165\u53E3",x:-273,z:82,yaw:0},{id:"food",name:"\u30DE\u30FC\u30B1\u30C3\u30C8\u5165\u53E3",x:216,z:82,yaw:0},{id:"gallery",name:"\u5DE5\u623F\u30AE\u30E3\u30E9\u30EA\u30FC\u5165\u53E3",x:-143,z:-236,yaw:0},{id:"harbor",name:"\u904B\u6CB3\u30DC\u30FC\u30C8\u8239\u7740\u304D\u5834",x:-289,z:72,yaw:Math.PI/2},{id:"build-garden",name:"\u81EA\u5206\u306E\u30AC\u30FC\u30C7\u30F3\u3092\u4F5C\u308B\u5E83\u5834",x:180,z:119,yaw:0},{id:"training",name:"\u30D1\u30EB\u30B9\u8A13\u7DF4\u5834",x:-146,z:-205,yaw:0}];function Rf(s,e){return s<-220?"\u904B\u6CB3\u30FB\u30EA\u30D0\u30FC\u30B5\u30A4\u30C9":e<-175?"\u5317\u30FB\u30E1\u30A4\u30AB\u30FC\u30BA\u8857":s>105?"\u6771\u30FB\u30AC\u30FC\u30C7\u30F3\uFF06\u30DE\u30FC\u30B1\u30C3\u30C8":"AURORA \u4E2D\u592E\u8857\u533A"}function Cf(s,e,t){return Math.max(3,Math.min(220,s+e*Math.min(.25,Math.max(0,t))*12))}function Hh(s){return new Set(Array.isArray(s)?s.filter(e=>["canal-cafe","market-food","workshop-exhibit"].includes(e)):[])}var Gh={value:0},If=new Uint8Array(4096*4);for(let s=0;s<64;s++)for(let e=0;e<64;e++){let t=(s*64+e)*4,n=Math.hypot((e-31.5)/32,(s-31.5)/32);If[t+3]=Math.max(0,Math.pow(Math.max(0,1-n),1.7)*120)}var Pf=new En(If,64,64);Pf.needsUpdate=!0;var Cc=new Rt({map:Pf,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});function Ic(s){let e=[],t=new Dt(1,9,7),n=new dt(.6,1,1,7),i=new We({color:5273923,roughness:.94});i.onBeforeCompile=c=>{c.uniforms.windTime=Gh,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
uniform float windTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x += sin(windTime*1.4 + transformed.y*2.5)*.035;`)};let r=new We({color:6574912,roughness:.93});i.userData.groveOwned=r.userData.groveOwned=!0;function o(c,l,u=5,h=0){e.push({x:c,z:l,h:u,y:h})}function a(){if(!e.length)return;let c=new Bt(t,i,e.length*23),l=new Bt(n,r,e.length*6),u=new mt,h=new D(0,1,0),d=0,f=0;for(let[x,m]of e.entries()){let{x:p,z:T,h:y,y:_}=m;for(let C=0;C<6;C++){let w=C*2.399+x*.5,P=new D(p,_+y*(C?.36:0),T),R=new D(p+(C?Math.cos(w)*y*.22:0),_+y*(C?.72:.7),T+(C?Math.sin(w)*y*.22:0)),M=R.clone().sub(P);u.position.copy(P).add(R).multiplyScalar(.5),u.quaternion.setFromUnitVectors(h,M.clone().normalize()),u.scale.set(y*(C?.026:.045),M.length(),y*(C?.026:.045)),u.updateMatrix(),l.setMatrixAt(f++,u.matrix)}for(let C=0;C<23;C++){let w=C*2.399+x*.7,P=y*.27*Math.sqrt(C%11/10),R=y*(.62+.24*(C*7%13)/13);u.position.set(p+Math.cos(w)*P,_+R,T+Math.sin(w)*P),u.rotation.set(C*.2,C*.4,0),u.scale.set(y*(.13+C%3*.02),y*.18,y*.14),u.updateMatrix(),c.setMatrixAt(d,u.matrix),c.setColorAt(d++,new Ve().setHSL(.24+C%5*.014,.29,.3+C%4*.055))}}c.name="Grove / layered crowns",l.name="Grove / tapered branches",c.castShadow=l.castShadow=!0,c.receiveShadow=l.receiveShadow=!0,s.add(c,l);let g=new Bt(new zt(1,1),Cc,e.length);return e.forEach((x,m)=>{u.position.set(x.x,x.y+.145,x.z),u.rotation.set(-Math.PI/2,0,0),u.scale.set(x.h*.8,x.h*.8,1),u.updateMatrix(),g.setMatrixAt(m,u.matrix)}),g.name="Tree contact shadows",s.add(g),{crowns:c,branches:l}}return{add:o,finish:a,trees:e}}function Lf(s,e){let t=new $e;t.name="AURORA / living districts",s.add(t);let n=[],i=[],r=new Map,o=[],a=Ic(t),c=[],l=(N,J=0,ie=.7)=>new We({color:N,metalness:J,roughness:ie}),u=l(11053212),h=l(2503741,.4),d=l(8478015),f=l(4484693),g=l(5587767),x=l(12032101,.6),m=l(10308156),p=l(14798762),T=l(2839652,.65,.2),y=new We({color:16770739,emissive:16761976,emissiveIntensity:1.1});function _(N){let J=document.createElement("canvas");J.width=J.height=256;let ie=J.getContext("2d");ie.fillStyle=N==="paving"?"#97948b":N==="grass"?"#687552":"#474c4d",ie.fillRect(0,0,256,256);let le=57;for(let v=0;v<9e3;v++)le=Math.imul(le,1664525)+1013904223>>>0,ie.fillStyle=`rgba(${le%2?255:0},${le%2?255:0},${le%2?255:0},.07)`,ie.fillRect(le%256,(le>>>8)%256,1+le%3,1);if(N==="paving"){ie.strokeStyle="#4e5353",ie.lineWidth=2;for(let v=0;v<256;v+=32){ie.beginPath(),ie.moveTo(0,v),ie.lineTo(256,v),ie.stroke();for(let $=v%64?16:0;$<256;$+=64)ie.strokeRect($,v,64,32)}}let b=new dn(J);return b.wrapS=b.wrapT=ln,b.repeat.set(N==="paving"?14:32,N==="paving"?14:32),b.colorSpace=vt,b.anisotropy=4,b}let C=_("paving"),w=_("road"),P=_("grass"),R=new We({color:9017453,map:P,bumpMap:P,bumpScale:.035,roughness:1}),M=new We({color:12304823,map:C,bumpMap:C,bumpScale:.04,roughness:.85}),S=new We({color:6713465,map:w,bumpMap:w,bumpScale:.025,roughness:.88});o.push(M,S);for(let N of[M,S,R])N.onBeforeCompile=J=>{J.vertexShader=J.vertexShader.replace("#include <common>",`#include <common>
varying vec2 pavingWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 pavingPoint=vec4(transformed,1.);
 #ifdef USE_INSTANCING
 pavingPoint=instanceMatrix*pavingPoint;
 #endif
 pavingWorld=(modelMatrix*pavingPoint).xz;`),J.fragmentShader=J.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 pavingWorld;`).replace("#include <map_fragment>",`#ifdef USE_MAP
diffuseColor *= texture2D(map,pavingWorld*.25);
#endif`)};function E(N,J,ie,le=0){let b=r.get(ie);b||(b=[],r.set(ie,b)),b.push({size:N,pos:J,rot:le})}function H(N,J,ie,le=t){let b=new rt(N,J);return b.position.set(...ie),b.castShadow=!0,b.receiveShadow=!0,le.add(b),b}let I=(N,J,ie,le)=>{if(!le){E(N,J,ie);return}return H(new Pt(...N),ie,J,le)};function K(N,J,ie,le){n.push({x:N,z:J,w:ie,d:le})}function Z(N,J,ie=5,le="#e6d2a5",b=0){let v=document.createElement("canvas");v.width=1024,v.height=180;let $=v.getContext("2d");$.fillStyle="#162c32",$.fillRect(0,0,1024,180),$.fillStyle=le,$.font="600 62px sans-serif",$.textAlign="center",$.textBaseline="middle",$.fillText(N,512,90,990);let ce=new dn(v);ce.colorSpace=vt;let O=new Rt({map:ce}),G=H(new zt(ie,ie*180/1024),O,J);G.rotation.y=b;let ee=new rt(G.geometry,O);return ee.rotation.y=Math.PI,G.add(ee),G}function q(N,J,ie=5){a.add(N,J,ie),K(N,J,.5,.5)}function pe(N,J,ie=0){let le=new $e;le.position.set(N,.08,J),le.rotation.y=ie,t.add(le),I([2.1,.15,.65],[0,.5,0],d,le),I([2.1,.55,.12],[0,.85,-.3],d,le);for(let b of[-.8,.8])I([.12,.5,.5],[b,.25,0],h,le);K(N,J,2.1,.8),i.push({id:`bench-${N}-${J}`,kind:"seat",name:"\u30D9\u30F3\u30C1\u3067\u4F11\u3080",x:N,z:J,sit:[N,1.15,J],exit:[N+1.8,1.72,J],yaw:ie})}E([1400,.15,1400],[0,-.3,0],R),E([45,.04,42],[180,.095,105],R),E([3,.035,42],[180,.13,105],M),E([45,.035,2.4],[180,.13,106],M);for(let N of[166,193])for(let J of[93,118]){E([6,.18,3],[N,.17,J],d),E([5.6,.2,2.6],[N,.25,J],R);for(let ie=0;ie<16;ie++)E([.15,.3,.15],[N-2.4+ie%8*.68,.51,J-.6+Math.floor(ie/8)*1.2],ie%3?x:m)}for(let N=-300;N<=300;N+=18)q(N,151,4+N%3*.25),q(N,-307,4.5);for(let N=0;N<16;N++){let J=-650+N*85,ie=N%2?350:-510;H(new fi(1,2),R,[J,-10,ie]).scale.set(85,23+N%4*7,95)}for(let N of[-285,-210,-150,150,210,285]){let J=N===-285?-283:N,ie=N===-285?8:12.5;E([ie,.025,465],[J,-.018,-77.5],S);for(let le of[-1,1])E([4,.1,465],[J+le*(ie/2+2.2),.015,-77.5],M),E([.18,.18,465],[J+le*(ie/2+.15),.04,-77.5],u);for(let le=-300;le<150;le+=10)E([.12,.035,3.2],[J,.003,le],p)}for(let N of[-290,-230,-170,25,130]){E([620,.025,11],[0,-.01,N],S);for(let J of[-1,1])E([620,.12,3],[0,.02,N+J*7],M);for(let J of[-285,-210,-150,150,210,285])for(let ie=-4;ie<=4;ie++)E([.7,.03,7],[J+ie*1.1,.025,N],p)}e.forEach((N,J)=>{let ie=[m,h,x,u][J%4];E([23,.7,26],[N.x,.35,N.z],h),E([23.2,.3,26.2],[N.x,N.h+.15,N.z],ie),E([N.w-2,.35,3],[N.x,3.4,N.z+14],ie);for(let le of[-1,1]){E([.3,N.h,.4],[N.x+le*10.3,N.h/2,N.z+12.7],ie);for(let b=4;b<N.h;b+=6)if(E([22.5,.18,.3],[N.x,b,N.z+12.7],h),J%3===0){E([19,.18,1.5],[N.x,b,N.z+13.2],u);for(let v of[-9,0,9])E([.08,.9,.08],[N.x+v,b+.5,N.z+13.8],x)}}for(let le of[-7,-3,1,5,9])E([.09,N.h-4,.1],[N.x+le,(N.h+4)/2,N.z+12.6],h);E([6,1.4,4],[N.x-4,N.h+.7,N.z],h),E([2,2,2],[N.x+5,N.h+1,N.z-5],u),E([1.5,1.8,.3],[N.x+8,1,N.z+12.8],h),E([3.4,2.2,.1],[N.x-5,1.6,N.z+12.65],T);for(let le of[-1,1]){E([.22,N.h,.22],[N.x+le*10.6,N.h/2,N.z-12.6],ie),E([22.5,.75,.25],[N.x,N.h+.5,N.z+le*12.6],h);for(let b=3;b<N.h;b+=6){E([.22,.16,25],[N.x+le*11.08,b,N.z],h);for(let v of[-8,-3,3,8])E([.16,2.5,.1],[N.x+le*11.1,b,N.z+v],h)}}for(let le of[-8,-4,0,4,8])E([.1,N.h-4,.1],[N.x+le,(N.h+4)/2,N.z-12.6],h);E([7,.09,.05],[N.x,2.8,N.z+14.02],y);for(let le=0;le<3;le++)E([.8,.5,.5],[N.x-8+le*3,.5,N.z+14.5],u)});let ne=document.createElement("canvas");ne.width=ne.height=128;let F=ne.getContext("2d"),te=F.createImageData(128,128);for(let N=0;N<128;N++)for(let J=0;J<128;J++){let ie=(N*128+J)*4,le=Math.PI/64;te.data[ie]=128+Math.sin((J*4+N*2)*le)*10+Math.sin((J*10-N*6)*le)*8+Math.sin((J*2-N*8)*le)*6,te.data[ie+1]=128+Math.cos((N*4-J*2)*le)*10+Math.cos((J*8+N*6)*le)*9+Math.cos((J*2+N*12)*le)*5,te.data[ie+2]=250,te.data[ie+3]=255}F.putImageData(te,0,0);let V=new dn(ne);V.wrapS=V.wrapT=ln,V.repeat.set(5,70);let re=new We({color:3763821,metalness:.45,roughness:.22,normalMap:V,normalScale:new Ue(.28,.28)}),U=H(new zt(15,400,20,80),re,[-300,-.055,-80]);U.rotation.x=-Math.PI/2,E([1.2,.38,430],[-291,.1,-80],u),E([3,.12,430],[-289,.02,-80],M);for(let N of[-230,-58,25,100]){E([22,.2,6],[-300,.13,N],d);for(let J of[-1,1]){E([22,.07,.07],[-300,1.15,N+J*2.9],x);for(let ie of[-309,-300,-291])E([.08,1.1,.08],[ie,.65,N+J*2.9],h)}}for(let N=-270;N<120;N+=24)q(-276.5,N,4.5),N%48===-30&&pe(-288,N),E([.1,3.2,.1],[-290,1.6,N],h),E([.7,.12,.35],[-290,3.25,N],y),c.push([-290,N]);Z("RIVERSIDE / CANAL WALK",[-287,3,110],11),E([90,.4,465],[-355,-.02,-77.5],u);for(let N=-285;N<140;N+=22)q(-317,N,4.2),E([2,.15,8],[-311,.12,N],M);for(let N=0;N<10;N++){let J=-270+N*42,ie=9+N%3*4;E([18,ie,24],[-345,ie/2,J],N%3===0?m:u),E([19,.3,25],[-345,ie+.15,J],h);for(let le=2;le<ie;le+=3)for(let b=0;b<4;b++){let v=J-8+b*5;E([.08,1.7,2.7],[-335.94,le,v],T),E([.16,.12,3],[-335.8,le-.9,v],p);for(let $ of[-1,1])E([.12,1.85,.12],[-335.8,le,v+$*1.42],h)}E([.2,2.4,1.8],[-335.8,1.2,J],h),E([2,.16,4],[-335,2.7,J],N%2?x:h),E([3,.15,4],[-334.5,.15,J],M)}function X(N,J,ie,le,b){E([9,.16,8],[ie,.04,le],M),E([9,.3,8.5],[ie,3.5,le],b);for(let v of[-4.4,4.4])E([.18,3.5,8],[ie+v,1.75,le],h),K(ie+v,le,.18,8);E([9,3.5,.18],[ie,1.75,le-4],h),K(ie,le-4,9,.18),E([5,.8,1],[ie,1,le-1],d),K(ie,le-1,5,1);for(let v=0;v<7;v++){let $=ie-2+v*.65;H(new dt(.12,.09,.24,12),p,[$,1.52,le-1]),H(new dt(.125,.125,.025,12),h,[$,1.65,le-1])}E([1.2,.9,.65],[ie-2.7,1.85,le-2.8],h),E([.9,.14,.8],[ie-2.7,1.44,le-2.8],x);for(let v of[1.5,2.25]){E([3,.08,.6],[ie+1.8,v,le-3.6],d);for(let $=0;$<5;$++)H(new dt(.08,.08,.32,8),$%2?m:x,[ie+.7+$*.45,v+.2,le-3.6])}for(let v of[-2,0,2])H(new dt(.31,.31,.12,12),d,[ie+v,.75,le+3.1]),E([.09,.7,.09],[ie+v,.35,le+3.1],h);Z("COFFEE   /   FOOD   /   LOCAL ART",[ie,2.45,le-3.85],6,"#9bb6a5"),Z(J,[ie,2.85,le+.7],8),Z("OPEN / F",[ie,1.8,le+.7],3,"#b6dfc8"),i.push({id:N,kind:"stamp",name:J+"\u3092\u697D\u3057\u3080",x:ie,z:le+2.8});for(let v of[-6,6])q(ie+v,le+4,4),pe(ie+v,le+7)}X("canal-cafe","CANAL COFFEE / \u904B\u6CB3\u30AB\u30D5\u30A7",-273,76,x),X("market-food","GARDEN MARKET / \u30D5\u30FC\u30C9\u5C4B\u53F0",216,76,m),X("workshop-exhibit","MAKERS / \u5DE5\u623F\u30AE\u30E3\u30E9\u30EA\u30FC",-143,-242,h);for(let N=0;N<5;N++){let J=199+N*6,ie=102;E([4,.15,3],[J,2.7,ie],N%2?p:m),E([3,.6,1.3],[J,.8,ie],d);for(let le of[-1.7,1.7])E([.08,2.7,.08],[J+le,1.35,ie+1],h)}for(let N=0;N<4;N++)q(162+N*12,123,5),pe(164+N*12,118);Z("GARDEN / FOOD & FLOWERS",[210,4,113],16);for(let N=0;N<5;N++){let J=199+N*6;for(let ie=0;ie<9;ie++)E([.32,.22,.3],[J-.9+ie%3*.75,1.22,101.6+Math.floor(ie/3)*.35],ie%2?x:m);E([.12,3.7,.12],[J,1.85,104],h),E([.3,.22,.3],[J,3.45,104],y),c.push([J,104])}for(let N=0;N<24;N++)E([.12,.1,.12],[198+N*1.05,3.45-Math.sin(N/23*Math.PI)*.5,104],y);for(let N=0;N<5;N++){E([2,.2,2],[-163+N*5,.25,-220],u);let J=H(new ns(.65,.15,48,8),N%2?x:m,[-163+N*5,1.5,-220])}Z("NORTH / MAKERS QUARTER",[-150,4,-214],15),a.finish();let oe=new Uint8Array(4096*4);for(let N=0;N<64;N++)for(let J=0;J<64;J++){let ie=(N*64+J)*4;oe[ie]=oe[ie+1]=oe[ie+2]=255,oe[ie+3]=Math.max(0,Math.pow(Math.max(0,1-Math.hypot((J-31.5)/32,(N-31.5)/32)),1.7)*255)}let Y=new En(oe,64,64);Y.needsUpdate=!0;let k=new zt(7.2,7.2),de=new Rt({color:16765851,map:Y,transparent:!0,opacity:.18,depthWrite:!1,blending:ro}),ye=new $e;t.add(ye);for(let[N,J]of c){let ie=new rt(k,de);ie.rotation.x=-Math.PI/2,ie.position.set(N,.14,J),ye.add(ie)}let ge=Array.from({length:4},()=>{let N=new Vt(16764556,0,11,2);return t.add(N),N}),Fe=new $e;Fe.position.set(-210,0,68),t.add(Fe),I([1.9,.55,4],[0,.65,0],m,Fe),I([1.65,.9,2],[0,1.3,0],T,Fe),I([1.9,.12,1.3],[0,1,-1.5],h,Fe),I([1.72,.08,1.5],[0,1.8,0],m,Fe);for(let N of[-1,1])for(let J of[-1.3,1.3]){let ie=H(new dt(.38,.38,.2,14),h,[N,.4,J],Fe);ie.rotation.z=Math.PI/2}for(let N of[-.65,.65])I([.35,.14,.1],[N,.85,-2.03],y,Fe);let nt=new mt;for(let[N,J]of r){let ie=new Bt(new Pt(1,1,1),N,J.length);for(let le=0;le<J.length;le++){let b=J[le];nt.position.set(...b.pos),nt.scale.set(...b.size),nt.rotation.set(0,b.rot,0),nt.updateMatrix(),ie.setMatrixAt(le,nt.matrix)}ie.castShadow=!0,ie.receiveShadow=!0,t.add(ie)}let B=new xt,ht=[];for(let N=0;N<1800;N++)ht.push(N*17.123%60-30,N*7.217%28,N*11.197%60-30);B.setAttribute("position",new Je(ht,3));let ke=new zn(B,new An({color:10863821,size:.035,transparent:!0,opacity:.55,depthWrite:!1}));ke.visible=!1,t.add(ke);function Xe(N,J){return N<-292.2&&N>-308&&J>-280&&J<120&&![-230,-58,25,100].some(ie=>Math.abs(J-ie)<2.5)?!0:n.some(ie=>Math.abs(N-ie.x)<ie.w/2+.3&&Math.abs(J-ie.z)<ie.d/2+.3)}function De(N,J,ie,le,b,v=!1){if(ke.visible=le==="rain"&&b==="city",ke.visible){ke.position.copy(ie),ke.position.y-=3,ke.rotation.y=J*.012;let ce=B.attributes.position;for(let O=0;O<ce.count;O++){let G=ce.getY(O)-N*16;G<0&&(G+=28),ce.setY(O,G)}ce.needsUpdate=!0}for(let ce of o)ce.roughness=le==="rain"?.28:.85;U.position.y=-.055+Math.sin(J*.4)*.012,V.offset.set(J*.015,J*.008),ye.visible=v&&b==="city";let $=c.map(ce=>({p:ce,d:Math.hypot(ce[0]-ie.position.x,ce[1]-ie.position.z)})).sort((ce,O)=>ce.d-O.d);ge.forEach((ce,O)=>{let G=$[O];ce.intensity=v&&b==="city"&&G.d<18?55:0,ce.position.set(G.p[0],2.95,G.p[1])})}let St=[...r].map(([N,J])=>({color:N.color.toArray(),metal:N.metalness,rough:N.roughness,items:J}));return{root:t,car:Fe,actions:i,solids:n,blocked:Xe,update:De,places:Af,batchCount:r.size,layout:St}}var Bi=[{id:"tree",name:"\u6A39\u6728",radius:1.1},{id:"planter",name:"\u82B1\u58C7",radius:1.2},{id:"bench",name:"\u30D9\u30F3\u30C1",radius:1.25},{id:"lamp",name:"\u8857\u706F",radius:.4},{id:"art",name:"\u5149\u306E\u5F6B\u523B",radius:1},{id:"pergola",name:"\u30D1\u30FC\u30B4\u30E9",radius:2.3},{id:"fountain",name:"\u5674\u6C34",radius:1.9}],lr=60;function Vh(s){return Array.isArray(s)?s.slice(0,lr).filter(e=>e&&Bi.some(t=>t.id===e.type)&&[e.x,e.z,e.rotation].every(Number.isFinite)&&Math.abs(e.x)<308&&e.z>-305&&e.z<150).map(e=>({type:e.type,x:e.x,z:e.z,rotation:e.rotation%(2*Math.PI)})):[]}function G_(s,e){return[-285,-210,-150,0,150,210,285].some(t=>Math.abs(s-t)<7)||[-290,-230,-170,-58,25,130].some(t=>Math.abs(e-t)<6.5)}function Lc(s,e,t){let n=Bi.find(i=>i.id===s.type);if(!n||e.length>=lr||![s.x,s.z,s.rotation].every(Number.isFinite))return!1;for(let i=0;i<12;i++){let r=i*Math.PI/6,o=s.x+Math.cos(r)*n.radius,a=s.z+Math.sin(r)*n.radius;if(Math.abs(o)>308||a<-305||a>150||o<-291||G_(o,a)||t(o,a))return!1}return!t(s.x,s.z)&&!e.some(i=>Math.hypot(i.x-s.x,i.z-s.z)<Bi.find(r=>r.id===i.type).radius+n.radius+.6)}var Si={x:-300,z:72,exit:[-289,1.72,72]};function Pc(s,e){return s<-305||s>-295||e<-276||e>116||[-230,-58,25,100].some(t=>Math.abs(e-t)<5.2)}function Df(s,e,t,n,i){i=Math.min(.1,Math.max(0,i)),e-=n*i*.8*(t<0?-1:1);let r=s.x-Math.sin(e)*t*i*6,o=s.z-Math.cos(e)*t*i*6;return{x:Pc(r,s.z)?s.x:r,z:Pc(s.x,o)?s.z:o,yaw:e}}function Nf(s){let e=new $e;e.name="AURORA / player garden",s.add(e);let t=(V,re=0,U=.7)=>new We({color:V,metalness:re,roughness:U}),n=t(8019005),i=t(10724497),r=t(2571072,.6),o=t(5273918),a=t(12879701),c=t(4820120,.6,.15),l=new We({color:16769958,emissive:16764024,emissiveIntensity:1.7}),u=[],h=[],d=[],f=[],g=null,x="",m=!1,p=Array.from({length:2},()=>{let V=new Vt(16766362,0,10,2);return e.add(V),V});function T(V,re,U,X){let oe=new rt(V,re);return oe.position.set(...U),oe.castShadow=oe.receiveShadow=!0,X.add(oe),oe}let y=(V,re,U,X)=>T(new Pt(...V),U,re,X);function _(V){let re=new $e;if(V==="tree"){let U=Ic(re);U.add(0,0,5),U.finish()}if(V==="planter"){y([2.1,.5,1.6],[0,.25,0],i,re),y([1.9,.08,1.4],[0,.52,0],o,re);for(let U=0;U<18;U++){let X=U%6*.31-.78,oe=Math.floor(U/6)*.4-.4;T(new Dt(.13,7,5),a,[X,.72+U%3*.08,oe],re)}}if(V==="bench"){for(let U of[-.8,.8])y([.12,.5,.6],[U,.25,0],r,re);for(let U=0;U<4;U++)y([2,.09,.12],[0,.55,-.25+U*.16],n,re);for(let U=0;U<3;U++)y([2,.11,.08],[0,.76+U*.15,-.32],n,re)}if(V==="lamp"&&(T(new dt(.06,.1,3.6,10),r,[0,1.8,0],re),y([1,.1,.6],[0,3.7,0],r,re),y([.8,.05,.45],[0,3.63,0],l,re)),V==="art"){y([1.3,.22,1.3],[0,.11,0],i,re);let U=T(new ns(.65,.13,64,10),l,[0,1.45,0],re);U.name="turning art"}if(V==="pergola"){for(let U of[-1.7,1.7])for(let X of[-1.7,1.7])y([.14,2.8,.14],[U,1.4,X],n,re);for(let U=0;U<10;U++)y([3.9,.12,.15],[0,2.85,-1.8+U*.4],n,re);for(let U of[-1.6,1.6])y([.17,.2,4],[U,2.7,0],n,re)}if(V==="fountain"){T(new dt(1.7,1.9,.35,32),i,[0,.18,0],re),T(new dt(1.52,1.52,.03,32),c,[0,.38,0],re),T(new dt(.35,.55,.7,16),i,[0,.65,0],re);let U=T(new dt(.025,.055,1.35,10),c,[0,1.62,0],re);U.name="water jet";let X=new xt;X.setAttribute("position",new Je(new Float32Array(360*3),3));let oe=new zn(X,new An({color:13232615,size:.045,transparent:!0,opacity:.7,depthWrite:!1}));oe.frustumCulled=!1,oe.name="fountain spray",re.add(oe)}if(V!=="tree"){let U=new rt(new zt(4,4),Cc);U.rotation.x=-Math.PI/2,U.position.y=.025,U.name="Contact shadow",re.add(U)}return re}function C(){try{return localStorage.setItem("aurora-garden-v6",JSON.stringify(f)),!0}catch{return!1}}function w(){for(let V of u)V.removeFromParent(),V.traverse(re=>{re.geometry&&re.geometry.dispose(),(re.material?.userData.groveOwned||re.name==="fountain spray")&&re.material.dispose()});u.length=d.length=0;for(let V of f){let re=_(V.type);re.position.set(V.x,.12,V.z),re.rotation.y=V.rotation,e.add(re),u.push(re),re.traverse(U=>{["turning art","water jet","fountain spray"].includes(U.name)&&d.push(U)})}}try{f=Vh(JSON.parse(localStorage.getItem("aurora-garden-v6")||"[]"))}catch{}w();function P(V,re,U,X){return{type:U,x:Math.round((V.position.x-Math.sin(re)*5)*2)/2,z:Math.round((V.position.z-Math.cos(re)*5)*2)/2,rotation:X}}function R(V,re,U){if(!re){g&&(g.visible=!1);return}(!g||x!==V.type)&&(g&&(g.removeFromParent(),g.traverse(X=>{X.geometry?.dispose(),X.material!==Cc&&X.material?.dispose()})),g=_(V.type),x=V.type,g.traverse(X=>{if(X.name==="Contact shadow"||X.name==="Tree contact shadows"||X.isPoints){X.visible=!1;return}X.isMesh&&(X.material.userData.groveOwned&&X.material.dispose(),X.material=new Rt({color:8841145,transparent:!0,opacity:.4,depthWrite:!1}),X.castShadow=X.receiveShadow=!1)}),s.add(g)),m=Lc(V,f,U),g.visible=!0,g.position.set(V.x,.12,V.z),g.rotation.y=V.rotation,g.traverse(X=>{X.isMesh&&X.material.color.set(m?8841145:16737877)})}function M(){h.push(f.map(V=>({...V}))),h.length>20&&h.shift()}function S(V,re){return Lc(V,f,re)?(M(),f.push({...V}),w(),{ok:!0,message:C()?`${Bi.find(X=>X.id===V.type).name}\u3092\u914D\u7F6E\u30FB\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002`:"\u914D\u7F6E\u3057\u307E\u3057\u305F\u3002\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u30FC\u3067\u306F\u4FDD\u5B58\u3067\u304D\u306A\u3044\u305F\u3081\u518D\u8AAD\u307F\u8FBC\u307F\u3067\u6D88\u3048\u307E\u3059\u3002"}):{ok:!1,message:f.length>=lr?"\u914D\u7F6E\u4E0A\u965060\u500B\u3067\u3059\u3002":"\u9053\u8DEF\u30FB\u6C34\u9762\u30FB\u5EFA\u7269\u30FB\u4ED6\u306E\u5BB6\u5177\u3092\u907F\u3051\u3001\u7DD1\u306E\u4F4D\u7F6E\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\u3002"}}function E(V,re){let U=-1,X=8;for(let oe=0;oe<f.length;oe++){let Y=Math.hypot(f[oe].x-V,f[oe].z-re);Y<X&&(X=Y,U=oe)}return U<0?"8m\u4EE5\u5185\u306B\u81EA\u5206\u304C\u914D\u7F6E\u3057\u305F\u7269\u304C\u3042\u308A\u307E\u305B\u3093\u3002":(M(),f.splice(U,1),w(),C()?"\u8FD1\u304F\u306E\u914D\u7F6E\u7269\u3092\u64A4\u53BB\u3057\u307E\u3057\u305F\u3002":"\u64A4\u53BB\u3057\u307E\u3057\u305F\u304C\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002")}function H(){return h.length?(f=h.pop(),w(),C()?"\u3072\u3068\u3064\u524D\u306E\u914D\u7F6E\u306B\u623B\u3057\u307E\u3057\u305F\u3002":"\u914D\u7F6E\u3092\u623B\u3057\u307E\u3057\u305F\u304C\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002"):"\u623B\u305B\u308B\u7DE8\u96C6\u304C\u3042\u308A\u307E\u305B\u3093\u3002"}function I(V,re){let U=Vh(V);if(!Array.isArray(V)||U.length!==V.length)return"\u914D\u7F6E\u30C7\u30FC\u30BF\u304C\u4E0D\u6B63\u304B\u300160\u500B\u306E\u4E0A\u9650\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002";let X=[];for(let oe of U){if(!Lc(oe,X,re))return"\u9053\u8DEF\u30FB\u5EFA\u7269\u30FB\u914D\u7F6E\u7269\u3068\u306E\u91CD\u306A\u308A\u304C\u3042\u308B\u305F\u3081\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002";X.push(oe)}return M(),f=U,w(),C()?"\u914D\u7F6E\u3092\u8AAD\u307F\u8FBC\u307F\u30FB\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002\u5143\u306B\u623B\u3059\u64CD\u4F5C\u3082\u4F7F\u3048\u307E\u3059\u3002":"\u914D\u7F6E\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F\u304C\u30D6\u30E9\u30A6\u30B6\u30FC\u3078\u306E\u4FDD\u5B58\u306F\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002"}function K(V,re){return f.some(U=>{if(U.type==="pergola")return!1;let X=U.type==="tree"?.35:Bi.find(oe=>oe.id===U.type).radius;return Math.hypot(V-U.x,re-U.z)<X+.25})}let Z=new $e;Z.position.set(Si.x,.12,Si.z),e.add(Z),T(new dt(1,1,.65,6),t(14276543,.3),[0,.1,0],Z).scale.set(1,1,2.5),y([1.4,.12,3.8],[0,.5,0],n,Z),y([1.2,.6,.55],[0,.8,1.1],r,Z),y([1.15,.45,.5],[0,.7,-.1],r,Z),y([1.7,.12,2],[0,1.9,.3],i,Z);for(let V of[-.75,.75])y([.06,1.4,.06],[V,1.2,.9],r,Z);let pe=new $e;e.add(pe),y([5,.22,6],[-291.5,.1,72],n,pe);for(let V of[69.3,74.7])y([.18,1.6,.18],[-293.5,.2,V],r,pe);let ne=T(new zt(1.7,5),new Rt({color:12969178,transparent:!0,opacity:.18,depthWrite:!1}),[0,-.08,3.9],Z);ne.rotation.x=-Math.PI/2,ne.visible=!1;function F(V,re,U,X,oe=!1,Y="city"){for(let de of d)if(de.name==="turning art"&&(de.rotation.y=V*.35),de.name==="water jet"&&(de.scale.y=.95+Math.sin(V*4)*.05),de.name==="fountain spray"){let ye=de.geometry.attributes.position;for(let ge=0;ge<ye.count;ge++){let Fe=(ge/ye.count+V*.55)%1,nt=ge*2.399,B=Fe*(.4+ge%7*.12);ye.setXYZ(ge,Math.cos(nt)*B,1+3*Fe-3.6*Fe*Fe,Math.sin(nt)*B)}ye.needsUpdate=!0}Z.position.y=.12+Math.sin(V*1.6)*.035,Z.rotation.z=Math.sin(V)*.012,ne.visible=re&&!!U;let k=X?f.filter(de=>de.type==="lamp").sort((de,ye)=>Math.hypot(de.x-X.position.x,de.z-X.position.z)-Math.hypot(ye.x-X.position.x,ye.z-X.position.z)):[];p.forEach((de,ye)=>{let ge=k[ye];de.intensity=ge&&oe&&Y==="city"&&Math.hypot(ge.x-X.position.x,ge.z-X.position.z)<18?60:0,ge&&de.position.set(ge.x,3.6,ge.z)})}function te(){return f.filter(V=>V.type==="bench").map(V=>({id:"user-bench",kind:"seat",name:"\u81EA\u5206\u306E\u30D9\u30F3\u30C1\u3067\u4F11\u3080",x:V.x,z:V.z,sit:[V.x,1.15,V.z],exit:[V.x+1.9*Math.cos(V.rotation),1.72,V.z-1.9*Math.sin(V.rotation)],yaw:Math.PI+V.rotation}))}return{root:e,boat:Z,blocked:K,preview:R,place:S,remove:E,restore:H,load:I,candidate:P,update:F,get actions(){return te()},get items(){return f},get valid(){return m}}}function Uf(){return{y:0,v:0,grounded:!0,reset:!0}}function Ff(s,e){return!s.grounded||s.reset?!1:(s.v=e==="planet"?5.8:6.8,s.grounded=!1,!0)}function Of(s,e,t,n){if(e=Math.min(.1,Math.max(0,e)),s.reset)return s.y=t,s.v=0,s.grounded=!0,s.reset=!1,s;if(s.grounded&&Math.abs(s.y-t)<.4)return s.y=t,s;s.grounded&&s.y-t>=.4&&(s.grounded=!1,s.v=0);let i=n==="planet"?8:n==="machine"?14:18;return s.y+=s.v*e-.5*i*e*e,s.v-=i*e,s.y<=t&&(s.y=t,s.v=0,s.grounded=!0),s}var Wh=[{id:0,x:-35,z:-48,name:"\u51B7\u5374\u7089"},{id:1,x:62,z:-30,name:"\u52D5\u529B\u7089"},{id:2,x:35,z:65,name:"\u901A\u4FE1\u7089"}],Bf=[[-105,25],[-82,-15],[-50,26],[-35,-32],[8,-50],[46,-50],[76,-5],[48,48],[10,67]];function Xh(s){let e={cells:[],defeated:[],reactors:[],claimed:!1};if(s&&typeof s=="object"){for(let[t,n]of[["cells",9],["defeated",6],["reactors",3]])e[t]=[...new Set(Array.isArray(s[t])?s[t].filter(i=>Number.isInteger(i)&&i>=0&&i<n):[])];e.claimed=!!s.claimed&&e.reactors.length===3}return e}var Dc=s=>s.cells.length-s.reactors.length;function zf(s,e){return!Number.isInteger(e)||e<0||e>2?"\u3053\u306E\u88C5\u7F6E\u306F\u4FEE\u5FA9\u5BFE\u8C61\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002":s.reactors.includes(e)?"\u3053\u306E\u7089\u306F\u5FA9\u65E7\u6E08\u307F\u3067\u3059\u3002":!s.defeated.includes(e*2)||!s.defeated.includes(e*2+1)?"\u5468\u8FBA\u306E\u6545\u969C\u30C9\u30ED\u30FC\u30F32\u6A5F\u3092\u30D1\u30EB\u30B9\u3067\u505C\u6B62\u3057\u3066\u304F\u3060\u3055\u3044\u3002":Dc(s)<1?"\u4FEE\u5FA9\u90E8\u54C1\u304C1\u500B\u5FC5\u8981\u3067\u3059\u3002\u5149\u308B\u90E8\u54C1\u3078\u30B8\u30E3\u30F3\u30D7\u3057\u3066\u96C6\u3081\u3066\u304F\u3060\u3055\u3044\u3002":(s.reactors.push(e),`${Wh[e].name}\u3092\u5FA9\u65E7\u3057\u307E\u3057\u305F\uFF01 ${s.reactors.length}/3${s.reactors.length===3?" \u4E2D\u592E\u30A2\u30FC\u30AB\u30A4\u30D6\u304C\u958B\u304D\u307E\u3057\u305F\u3002":""}`)}function qh(s,e,t,n){let i=null,r=24;for(let o of t){if(o.disabled)continue;let a=o.x-s.x,c=o.y-s.y,l=o.z-s.z,u=a*e.x+c*e.y+l*e.z,h=o.radius||1.1;if(u<0||u>r||a*a+c*c+l*l-u*u>h*h)continue;let d=!1;for(let f=.6;f<u-.5;f+=.4)if(n(s.x+e.x*f,s.z+e.z*f,s.y+e.y*f)){d=!0;break}d||(i=o,r=u)}return i}function kf(s,e,t,n="city"){let i=String(e).slice(0,240),r=t?.reactors?.length||0,o=t?.cells?.length||0;return/ジャンプ|部品|操作/.test(i)?"Space\u3067\u30B8\u30E3\u30F3\u30D7\u3001J\u307E\u305F\u306F\u77ED\u3044\u5DE6\u30AF\u30EA\u30C3\u30AF\u3067\u30D1\u30EB\u30B9\u3067\u3059\u3002NEXUS-9\u306E\u5149\u308B\u90E8\u54C1\u306F\u5C11\u3057\u9AD8\u3044\u306E\u3067\u3001\u8FD1\u3065\u3044\u3066\u8DF3\u3093\u3067\u307F\u3066\u304F\u3060\u3055\u3044\u3002\u30C9\u30ED\u30FC\u30F3\u8996\u70B9\u3067\u306FSpace\u304C\u4E0A\u6607\u3067\u3059\u3002":/旅|行き|鉄道|惑星|宇宙/.test(i)?"\u9280\u6CB3\u9244\u9053\u306FAURORA \u2192 LUMEN \u2192 NEXUS-9\u3068\u7D9A\u304D\u307E\u3059\u3002LUMEN\u306E\u99C5\u3067\u300C\u6A5F\u68B0\u60D1\u661F NEXUS-9\u300D\u3092\u9078\u3093\u3067F\u3067\u4E57\u8ECA\u3002\u5E30\u308A\u3082\u99C5\u3067\u884C\u304D\u5148\u3092\u9078\u3079\u307E\u3059\u3002\u30B9\u30AD\u30C3\u30D7\u3082\u4F7F\u3048\u307E\u3059\u3002":/仕事|任務|修理|何を|進捗/.test(i)?n==="machine"?`\u4FEE\u5FA9\u90E8\u54C1\u3092\u96C6\u3081\u3001\u5404\u7089\u306E\u6545\u969C\u30C9\u30ED\u30FC\u30F32\u6A5F\u3092\u505C\u6B62\u3057\u3001\u7089\u306E\u7AEF\u672B\u3067F\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u73FE\u5728\u306F\u90E8\u54C1${o}\u500B\u3001\u7089${r}/3\u3067\u3059\u30023\u57FA\u3068\u3082\u5FA9\u65E7\u3057\u305F\u3089\u4E2D\u592E\u30A2\u30FC\u30AB\u30A4\u30D6\u3078\u3002`:"\u8857\u3067\u306F\u5E97\u5DE1\u308A\u3084\u5EAD\u3065\u304F\u308A\u304C\u3067\u304D\u307E\u3059\u3002\u9280\u6CB3\u9244\u9053\u306E\u5148\u3067\u306F\u3001LUMEN\u306E\u63A2\u67FB\u3068NEXUS-9\u306E\u52D5\u529B\u7089\u5FA9\u65E7\u304C\u5F85\u3063\u3066\u3044\u307E\u3059\u3002":/ここ|場所|あなた|名前/.test(i)?n==="machine"?`${s}\u3067\u3059\u3002\u3053\u3053\u306F\u60D1\u661F\u898F\u6A21\u306E\u6A5F\u68B0\u90FD\u5E02NEXUS-9\u3002\u5730\u6BBB\u307E\u3067\u91D1\u5C5E\u306E\u30D1\u30CD\u30EB\u3068\u56DE\u8DEF\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u79C1\u305F\u3061\u6A5F\u68B0\u4EBA\u304C\u8A2D\u5099\u3092\u4FDD\u5B88\u3057\u3066\u3044\u307E\u3059\u3002`:n==="planet"?`${s}\u3067\u3059\u3002LUMEN\u306E\u89B3\u6E2C\u57FA\u5730\u3067\u7D50\u6676\u3084\u53E4\u4EE3\u306E\u661F\u56F3\u3092\u8ABF\u3079\u3066\u3044\u307E\u3059\u3002\u99C5\u306E\u5148\u306B\u306F\u6A5F\u68B0\u306E\u60D1\u661F\u3082\u3042\u308B\u305D\u3046\u3067\u3059\u3088\u3002`:`${s}\u3067\u3059\u3002\u3053\u306E\u8857\u306F\u6B69\u304F\u3060\u3051\u3067\u306A\u304F\u3001\u96FB\u8ECA\u3001\u8ECA\u3001\u30DC\u30FC\u30C8\u3001\u5EAD\u3065\u304F\u308A\u3082\u697D\u3057\u3081\u307E\u3059\u3002\u6C17\u306B\u306A\u308B\u5834\u6240\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F`:n==="machine"&&r===3?"\u8857\u306E\u52D5\u529B\u304C\u623B\u308A\u307E\u3057\u305F\uFF01\u4E2D\u592E\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u8A18\u9332\u3092\u53D7\u3051\u53D6\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u6A5F\u68B0\u306E\u661F\u306B\u3082\u3001\u8AB0\u304B\u3092\u5F85\u3064\u6642\u9593\u306F\u3042\u308B\u3093\u3067\u3059\u3088\u3002":n==="machine"?"\u91D1\u5C5E\u306E\u8DB3\u97F3\u306B\u3082\u3001\u305D\u308C\u305E\u308C\u9055\u3046\u30EA\u30BA\u30E0\u304C\u3042\u308A\u307E\u3059\u3002\u79C1\u306F\u51B7\u5374\u30D5\u30A1\u30F3\u306E\u97F3\u3092\u8074\u304F\u306E\u304C\u597D\u304D\u3067\u3059\u3002\u65C5\u306E\u3053\u3068\u3001\u4FEE\u7406\u306E\u4ED5\u4E8B\u3001\u30B8\u30E3\u30F3\u30D7\u306E\u64CD\u4F5C\u306A\u3089\u6848\u5185\u3067\u304D\u307E\u3059\u3002":n==="planet"?"\u591C\u306E\u7D50\u6676\u306F\u663C\u3068\u9055\u3046\u8272\u306B\u898B\u3048\u307E\u3059\u3002\u6B21\u306F\u3042\u306E\u661F\u307E\u3067\u7DDA\u8DEF\u304C\u7D9A\u304F\u3068\u601D\u3046\u3068\u3001\u5C11\u3057\u308F\u304F\u308F\u304F\u3057\u307E\u3059\u306D\u3002":"\u904B\u6CB3\u306E\u5915\u666F\u304C\u304A\u3059\u3059\u3081\u3067\u3059\u3002\u81EA\u5206\u3067\u7F6E\u3044\u305F\u30D9\u30F3\u30C1\u304B\u3089\u773A\u3081\u308B\u3068\u3001\u8857\u304C\u5C11\u3057\u81EA\u5206\u306E\u5834\u6240\u306B\u306A\u3063\u305F\u6C17\u304C\u3057\u307E\u3059\u3002"}function Hf(s){let e=new $e;e.name="NEXUS-9 / mechanical planet",s.add(e);let t=new $e;t.position.set(Et.x,0,Et.z),e.add(t);let n=[],i=[],r=[],o=[],a=[],c=[],l=new Map,u=(U,X=.7,oe=.4)=>new We({color:U,metalness:X,roughness:oe}),h=u(5990771),d=u(1450799),f=u(10201513),g=u(10714959),x=u(725015),m=new We({color:5760237,emissive:1684944,emissiveIntensity:1.7,metalness:.6,roughness:.25}),p=new We({color:16758632,emissive:16742707,emissiveIntensity:1.3}),T=new We({color:14112583,emissive:12921900,emissiveIntensity:1});function y(U,X,oe,Y=t){let k=new rt(U,X);return k.position.set(...oe),k.castShadow=k.receiveShadow=!0,Y.add(k),k}function _(U,X,oe,Y){if(Y)return y(new Pt(...U),oe,X,Y);let k=l.get(oe);k||(k=[],l.set(oe,k)),k.push({size:U,pos:X})}function C(U,X,oe,Y,k=20){n.push({x:U,z:X,w:oe,d:Y,h:k})}function w(U,X,oe=6,Y=t){let k=document.createElement("canvas");k.width=1024,k.height=128;let de=k.getContext("2d");de.fillStyle="#08151f",de.fillRect(0,0,1024,128),de.fillStyle="#9df2f1",de.font="600 48px sans-serif",de.textAlign="center",de.textBaseline="middle",de.fillText(U,512,64,990);let ye=new dn(k);return ye.colorSpace=vt,y(new zt(oe,oe/8),new Rt({map:ye,side:Ut}),X,Y)}let P=u(4739932,.8,.56);P.onBeforeCompile=U=>{U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
varying vec3 mechN;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
mechN=normal;`),U.fragmentShader=U.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 mechN;`).replace("#include <color_fragment>",`#include <color_fragment>
 vec2 grid=vec2(atan(mechN.z,mechN.x)*30.,asin(clamp(mechN.y,-1.,1.))*46.);
 vec2 cell=fract(grid);float edge=step(.035,cell.x)*step(.035,cell.y);
 float shade=.52+.4*fract(sin(dot(floor(grid),vec2(12.9898,78.233)))*43758.5453);
 diffuseColor.rgb*=mix(.17,shade,edge);
 if(abs(mechN.y)<.016)diffuseColor.rgb=vec3(.015,.035,.05);
 `)};let R=y(new Dt(1600,80,56),P,[Et.x,-1608,Et.z],e);R.castShadow=!1;let M=y(new qt(1602,4,6,160),m,[Et.x,-1608,Et.z],e);M.rotation.x=Math.PI/2;let S=y(new Dt(260,40,20,0,Math.PI*2,0,.5),x,[Et.x-780,-650,Et.z+1110],e);S.rotation.z=.6,y(new dt(210,210,.4,96),d,[0,-.3,0]);for(let U=-195;U<=195;U+=15)for(let X=-195;X<=195;X+=15)Math.hypot(U,X)<198&&(_([14.7,.08,14.7],[U,-.04,X],(U+X)/15%3===0?h:d),_([.1,.025,13],[U-7,.018,X],x),(U+X)%45===0&&_([8,.025,.08],[U,.022,X-5],m));for(let U=0;U<80;U++){let X=U*Math.PI*2/80,oe=Math.cos(X)*202,Y=Math.sin(X)*202;if(_([.2,1.5,.2],[oe,.75,Y],f),U%2===0){let k=y(new Pt(12,24+U%5*9,14),h,[Math.cos(X)*245,12+U%5*4.5,Math.sin(X)*245]);k.rotation.y=-X}}for(let U=-136;U<90;U+=8){_([6,.04,10],[U,.045,5],h);for(let X of[-.2,10.2])_([5,.04,.08],[U,.07,X],m)}let E=new $e;E.position.set(-140,0,0),t.add(E),_([7,.32,39],[9,.16,0],h,E),_([8,.2,41],[9,5.5,0],d,E);for(let U of[-17,-8,1,10,18])_([.2,5.4,.2],[12.6,2.7,U],f,E);w("NEXUS-9 / MACHINE PORT",[9,4.1,18.7],7,E),w("LUMEN \u2190 RETURN",[9,3.2,18.7],6,E);let H=new Vt(6802396,90,24,2);H.position.set(-131,4,0),t.add(H);for(let[U,X]of[[-88,-45,18],[-78,60,26],[-5,-100,30],[85,80,40],[110,-80,55]].entries()){let[oe,Y,k]=X;_([26,k,22],[oe,k/2,Y],U%2?h:d),C(oe,Y,26,22,k);for(let ge=3;ge<k;ge+=4){_([26.2,.14,.15],[oe,ge,Y+11.1],f);for(let Fe=0;Fe<5;Fe++)_([3.4,1.2,.1],[oe-10+Fe*5,ge+1.5,Y+11.16],U%2?p:m)}for(let ge of[-1,1])_([.6,k+.5,.7],[oe+ge*12,k/2,Y+11.4],g);for(let ge=0;ge<5;ge++)_([1.1,.35,16],[oe-8+ge*4,k+.2,Y],f);let de=y(new qt(3,.18,6,24),f,[oe,k+.6,Y]);de.rotation.x=Math.PI/2;let ye=new $e;ye.position.set(oe,k+.5,Y),t.add(ye);for(let ge=0;ge<4;ge++){let Fe=y(new Pt(2.8,.08,.8),h,[0,0,0],ye);Fe.rotation.y=ge*Math.PI/2,Fe.position.set(Math.cos(ge*Math.PI/2)*1.3,0,Math.sin(ge*Math.PI/2)*1.3)}c.push(ye)}_([30,.22,25],[0,.11,4],f),_([30,.25,25],[0,7,4],d);for(let[U,X,oe,Y]of[[-15,4,.4,25],[15,4,.4,25],[0,-8.5,30,.4]])_([oe,7,Y],[U,3.5,X],h),C(U,X,oe,Y,7);let I=y(new Pt(26,5,.22),d,[0,2.5,16.5]);w("CENTRAL ARCHIVE / 3 REACTORS",[0,5.8,16.7],25);let K=y(new Di(1.6),m,[0,3,4]),Z=[];for(let U of[2.7,3.6]){let X=y(new qt(U,.06,6,64),g,[0,3,4]);Z.push(X)}for(let U of Wh){let X=new $e;X.position.set(U.x,0,U.z),t.add(X),y(new dt(3.2,4,.5,20),f,[0,.25,0],X);let oe=y(new dt(1.5,1.5,7,16),p.clone(),[0,3.8,0],X);for(let Y of[1,3,5,7]){let k=y(new qt(2,.13,6,32),h,[0,Y,0],X);k.rotation.x=Math.PI/2}for(let Y=0;Y<5;Y++){let k=Y*Math.PI*2/5;_([.3,7,.3],[U.x+Math.cos(k)*2.6,3.5,U.z+Math.sin(k)*2.6],h)}_([2,1.2,1],[U.x,1,U.z+5.5],d),w(`${U.id+1} / ${U.name} / F`,[U.x,2.4,U.z+5.6],7),C(U.x,U.z,7,7,8),C(U.x,U.z+5.5,2,1,1.6),a.push({...U,core:oe});for(let Y=0;Y<2;Y++){let k=U.id*2+Y,de=new $e;de.position.set(U.x+(Y?10:-10),2.3,U.z+6),t.add(de),y(new Dt(.8,12,8),h,[0,0,0],de).scale.set(1.15,.7,1),y(new Dt(.23,10,8),T,[0,0,.72],de);for(let ge of[-1,1]){_([1.1,.15,.7],[ge*1.1,0,0],d,de);let Fe=y(new qt(.38,.06,5,16),m,[ge*1.2,-.12,0],de);Fe.rotation.x=Math.PI/2}r.push({id:k,ob:de,home:de.position.clone(),hp:3,cooldown:1.5+Y,down:!1,flash:0})}}Bf.forEach(([U,X],oe)=>{let Y=y(new Di(.38),m,[U,3.05,X]);y(new dt(.4,.55,.2,12),h,[U,.12,X]),o.push({id:oe,ob:Y,x:U,z:X})});for(let[U,X,oe]of[[-101,25,.65],[-97,25,1.2],[-48,30,.7],[-44,30,1.3],[-30,-32,.8],[5,42,1.15]])_([2.4,oe,2.4],[U,oe/2,X],h),_([2.2,.05,2.2],[U,oe+.025,X],g),C(U,X,2.4,2.4,oe+.05);for(let[U,X]of[[-120,-65],[-120,70],[100,30],[55,-120],[-60,105]]){for(let oe=0;oe<3;oe++){let Y=y(new dt(1.6,1.6,5.5,14),f,[U+oe*4,2.75,X]);y(new qt(1.64,.08,6,24),g,[U+oe*4,4.6,X]).rotation.x=Math.PI/2,C(U+oe*4,X,3.4,3.4,6)}_([12,.5,.5],[U+4,1.1,X+2],g)}function q(U,X,oe,Y,k,de=!1){let ye=new $e;ye.position.set(Y,0,k),t.add(ye),y(new dt(.43,.35,.65,8),h,[0,1.2,0],ye),_([.55,.38,.45],[0,1.78,0],f,ye),_([.43,.08,.04],[0,1.82,.25],m,ye),_([.45,.18,.35],[0,.82,0],g,ye);let ge=[],Fe=[];for(let B of[-1,1]){let ht=new $e;ht.position.set(B*.21,.78,0),ye.add(ht),_([.17,.6,.18],[0,-.3,0],h,ht),_([.22,.14,.38],[0,-.67,.09],d,ht),ge.push(ht);let ke=new $e;ke.position.set(B*.5,1.45,0),ye.add(ke),_([.15,.65,.16],[0,-.3,0],f,ke),y(new Dt(.12,8,6),g,[0,-.65,0],ke),Fe.push(ke)}let nt=ye.children[1];i.push({id:U,name:X,role:oe,ob:ye,legs:ge,arms:Fe,head:nt,home:new D(Y,0,k),patrol:de,world:"machine"})}q("guide","\u6848\u5185\u6A5F ORI","\u661F\u6E2F\u306E\u6848\u5185\u6A5F",-117,12),q("engineer","\u6574\u5099\u58EB BOLT","\u52D5\u529B\u7089\u306E\u6574\u5099\u58EB",-62,20),q("archivist","\u53F8\u66F8 MNEME","\u8A18\u61B6\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u53F8\u66F8",18,22),q("courier","\u914D\u9054\u6A5F PIP","\u90E8\u54C1\u306E\u914D\u9054\u54E1",-95,22,!0),q("welder","\u6EB6\u63A5\u6A5F ARC","\u914D\u7BA1\u306E\u6280\u5E2B",-40,40,!0),q("signal","\u901A\u4FE1\u58EB SIGNAL","\u901A\u4FE1\u7089\u306E\u62C5\u5F53",70,35,!0),q("watch","\u5DE1\u56DE\u6A5F HEX","\u4FDD\u5B88\u5DE1\u56DE\u54E1",105,5,!0),q("gate","\u9580\u885B KEEPER","\u4E2D\u592E\u533A\u306E\u9580\u885B",-25,15);for(let U=0;U<28;U++){let X=-180+U*13;_([8,.12,1],[X,.09,-135],x);for(let oe=0;oe<8;oe++)_([.15,.15,.9],[X-3.5+oe,.16,-135],f)}for(let U of[-125,125])for(let X=-125;X<125;X+=10)_([9,.6,.6],[X,.7,U],g),_([.2,1.2,1.5],[X-4,.6,U],h);w("REPAIR DISTRICT \u2192",[-105,3.5,32],14),w("NEXUS-9 / A WORLD OF MACHINES",[-70,7,89],38);let pe=new mt;for(let[U,X]of l){let oe=new Bt(new Pt(1,1,1),U,X.length);X.forEach((Y,k)=>{pe.position.set(...Y.pos),pe.scale.set(...Y.size),pe.rotation.set(0,0,0),pe.updateMatrix(),oe.setMatrixAt(k,pe.matrix)}),oe.castShadow=oe.receiveShadow=!0,t.add(oe)}let ne=new $n(pf.map(U=>new D(...U)),!1,"centripetal");for(let U of[-1,1]){let X=Array.from({length:501},(oe,Y)=>{let k=ne.getPoint(Y/500),de=ne.getTangent(Y/500);return k.addScaledVector(new D(-de.z,0,de.x).normalize(),U*1.32)});y(new is(new $n(X),850,.075,5,!1),m,[0,0,0],e)}let F=new Bt(new Pt(3.7,.12,.4),d,450);for(let U=0;U<450;U++){let X=ne.getPoint(U/449),oe=ne.getTangent(U/449);pe.position.copy(X),pe.scale.set(1,1,1),pe.lookAt(X.clone().add(oe)),pe.updateMatrix(),F.setMatrixAt(U,pe.matrix)}e.add(F);function te(U,X,oe=0,Y){return U-=Et.x,X-=Et.z,Math.hypot(U,X)>197||n.some(k=>oe<k.h&&Math.abs(U-k.x)<k.w/2+.3&&Math.abs(X-k.z)<k.d/2+.3)?!0:(!Y||Y.reactors.length<3)&&Math.abs(U)<13.5&&Math.abs(X-16.5)<.55}function V(U,X,oe,Y){for(let[k,de]of i.entries())Y!==de&&(de.patrol?(de.ob.position.x=de.home.x+Math.sin(X*.18+k)*4,de.ob.position.z=de.home.z+Math.cos(X*.18+k)*3,de.ob.rotation.y=Math.atan2(Math.cos(X*.18+k)*4,-Math.sin(X*.18+k)*3),de.legs.forEach((ye,ge)=>ye.rotation.x=Math.sin(X*4+k+ge*Math.PI)*.32),de.arms.forEach((ye,ge)=>ye.rotation.x=-Math.sin(X*4+k+ge*Math.PI)*.2)):de.arms[0].rotation.z=Math.sin(X*.7+k)*.08);for(let k of r)k.down=oe.defeated.includes(k.id),k.ob.visible=!k.down,k.down||(k.ob.position.y=2.3+Math.sin(X*2+k.id)*.22,k.ob.rotation.y=X*.4);for(let k of o)k.ob.visible=!oe.cells.includes(k.id),k.ob.rotation.y=X*1.6,k.ob.position.y=3.05+Math.sin(X*2+k.id)*.12;a.forEach(k=>{let de=oe.reactors.includes(k.id);k.core.material.color.set(de?3857606:16753766),k.core.material.emissive.set(de?1358256:14509102)}),I.position.y=oe.reactors.length===3?8:2.5,K.rotation.y=X*.5,Z.forEach((k,de)=>k.rotation.set(X*.25*(de+1),X*.14,.6)),c.forEach(k=>k.rotation.y=X*1.5)}function re(U,X,oe=0){U-=Et.x,X-=Et.z;let Y=0;for(let k of n)k.h<2.5&&oe>=k.h-.08&&Math.abs(U-k.x)<k.w/2+.25&&Math.abs(X-k.z)<k.d/2+.25&&(Y=Math.max(Y,k.h));return Y}return{root:e,ground:t,curve:ne,globe:R,robots:i,drones:r,cells:o,reactors:a,archive:K,colliders:n,blocked:te,floorHeight:re,update:V}}function Gf(s,e,t,n){let i=new $e;i.name="Pulse training and adventure effects",s.add(i);let r=[],o=[],a=-10,c=-10,l=100,u=0,h=new Rt({color:8713215}),d=new We({color:13937254,metalness:.5,roughness:.35});for(let p=0;p<3;p++){let T=new $e;T.position.set(-150+p*4,1.8,-216),i.add(T);for(let[_,C,w]of[[.85,d,0],[.58,h,.025],[.28,d,.05]]){let P=new rt(new ts(_,24),C);P.position.z=w,T.add(P)}let y=new rt(new dt(.06,.09,1.4,8),d);y.position.y=-1.1,T.add(y),r.push({id:p,ob:T,hp:3,resetAt:0})}function f(p,T,y=8779007){let _=new xt().setFromPoints([p,T]),C=new Li({color:y,transparent:!0,opacity:.95}),w=new di(_,C);i.add(w),o.push({o:w,life:.18})}function g(p,T,y,_,C=[]){if(y-a<.32)return null;a=y;let w=p.position.clone(),P=p.getWorldDirection(new D),R=[];if(T==="city")for(let I of r)I.hp>0&&R.push({x:I.ob.position.x,y:1.8,z:-216,radius:.9,type:"training",data:I});if(T==="machine")for(let I of e.drones)t.defeated.includes(I.id)||R.push({x:Et.x+I.ob.position.x,y:I.ob.position.y,z:Et.z+I.ob.position.z,radius:1.1,type:"drone",data:I});let M=qh(w,P,R,_),S=24;for(let I=.6;I<24;I+=.4)if(_(w.x+P.x*I,w.z+P.z*I,w.y+P.y*I)){S=I;break}if(M&&(S=Math.hypot(M.x-w.x,M.y-w.y,M.z-w.z)),f(w.clone().addScaledVector(P,.6).add(new D(.15,-.13,0)),w.clone().addScaledVector(P,S)),M){let I=M.data;return I.hp--,I.hp<=0?M.type==="drone"?(t.defeated.push(I.id),n(),`\u6545\u969C\u30C9\u30ED\u30FC\u30F3\u3092\u505C\u6B62 ${t.defeated.length}/6`):(I.resetAt=y+6,I.ob.visible=!1,u++,`\u8A13\u7DF4\u30BF\u30FC\u30B2\u30C3\u30C8\u505C\u6B62\uFF01 \u30B9\u30B3\u30A2 ${u} \xB7 6\u79D2\u5F8C\u306B\u5FA9\u5E30`):(I.ob.scale.setScalar(.85),`\u547D\u4E2D\uFF01 \u3042\u3068${I.hp}\u767A`)}let E=C.map(I=>{let K=I.ob.getWorldPosition(new D);return{x:K.x,y:K.y+1.1,z:K.z,radius:.65,data:I}}),H=qh(w,P,E,_);return H?(H.data.stunUntil=y+.6,"\u300C\u3073\u3063\u304F\u308A\u3057\u305F\uFF01 \u8A71\u304C\u3042\u308B\u306A\u3089C\u3067\u3069\u3046\u305E\u3002\u300D"):""}function x(p,T,y,_,C){for(let w=o.length-1;w>=0;w--){let P=o[w];P.life-=p,P.o.material.opacity=Math.max(0,P.life/.18),P.life<=0&&(P.o.removeFromParent(),P.o.geometry.dispose(),P.o.material.dispose(),o.splice(w,1))}for(let w of r)w.hp<=0&&T>=w.resetAt&&(w.hp=3,w.ob.visible=!0),w.ob.scale.lerp(new D(1,1,1),Math.min(1,p*8));for(let w of e.drones)w.ob.scale.lerp(new D(1,1,1),Math.min(1,p*8));if(!C||(T-c>8&&(l=Math.min(100,l+p*5)),y!=="machine"))return null;for(let w of e.drones){if(t.defeated.includes(w.id))continue;w.cooldown-=p;let P=w.ob.getWorldPosition(new D);if(Math.hypot(P.x-_.x,P.z-_.z)<17&&w.cooldown<=0){let M=!1;for(let S=.1;S<1;S+=.1)if(e.blocked(P.x+(_.x-P.x)*S,P.z+(_.z-P.z)*S,P.y+(_.y-.2-P.y)*S,t)){M=!0;break}if(M)continue;f(P,new D(_.x,_.y-.2,_.z),16746600),l=Math.max(0,l-12),c=T,w.cooldown=2.2}}return l<=0?(l=100,c=T,"respawn"):null}function m(){l=100}return{root:i,training:r,attack:g,update:x,resetShield:m,get shield(){return Math.ceil(l)},get score(){return u}}}async function V_(){let s=L=>document.getElementById(L),e=window.CITY_ASSETS,t=e.meta,n=L=>Uint8Array.from(atob(L),z=>z.charCodeAt(0)),i=new xc({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});i.setPixelRatio(Math.min(devicePixelRatio,1.1)),i.setSize(innerWidth,innerHeight),i.shadowMap.enabled=!0,i.shadowMap.type=Ma,i.localClippingEnabled=!0,i.toneMapping=Ca,i.toneMappingExposure=1,document.body.prepend(i.domElement);let r=new zr;r.fog=new Br(11056315,.003);let o=new Ht(67,innerWidth/innerHeight,.12,24e3);o.rotation.order="YXZ",o.position.fromArray(t.spawn);let a=-.13,c=.055,l=!1,u=!1,h=new Set,d=new eo(12703469,6710108,1.7);r.add(d);let f=new cs(16769726,2.8);f.position.set(-50,110,25),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),Object.assign(f.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:5,far:250}),f.shadow.normalBias=.035,f.shadow.bias=-12e-5,r.add(f,f.target);let g=new Sc().parse(n(e.sky).buffer),x=new En(g.data,g.width,g.height,pn,g.type);x.mapping=$s,x.needsUpdate=!0;let m=new sr(i);r.environment=m.fromEquirectangular(x).texture,r.background=x,r.backgroundIntensity=.75,r.environmentIntensity=.7;let p=new rs;function T(L){let z=p.load("data:image/jpeg;base64,"+e[L]);return z.wrapS=z.wrapT=ln,z.anisotropy=8,z}let y=t.materials.map(L=>{let z=new We({color:new Ve().fromArray(L.color),metalness:L.metal,roughness:L.rough,emissive:new Ve().fromArray(L.emission),emissiveIntensity:L.strength*.65,side:L.name.includes("Leaves")?Ut:cn,transparent:(L.alpha||1)<1,opacity:L.alpha||1,depthWrite:(L.alpha||1)>=1});return L.texture&&(z.map=T(L.texture),z.map.colorSpace=vt,z.color.set(16777215),z.normalMap=T(L.texture+"_normal"),z.normalScale.set(.35,.35),L.texture==="concrete"&&(z.onBeforeCompile=ae=>{ae.fragmentShader=ae.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.rgb = mix(vec3(0.32),diffuseColor.rgb,0.18);`)})),z}),_=await new Response(new Blob([n(e.city)]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),C=new DataView(_),w=0,P=C.getUint32(w,!0);w+=4;let R=0,M=(t.interiors||[]).map(()=>0);for(let L=0;L<P;L++){let z=C.getUint32(w,!0),ae=C.getUint32(w+4,!0);w+=8;let ve=new Float32Array(_,w,ae*8);w+=ae*32,R+=ae/3;for(let Ne=0;Ne<ve.length;Ne+=8)for(let[gt,Ze]of(t.interiors||[]).entries())Math.abs(ve[Ne]-Ze.x)<Ze.w/2&&Math.abs(ve[Ne+2]+Ze.y)<Ze.d/2&&(M[gt]=Math.max(M[gt],ve[Ne+1]));let He=new Kn(ve,8),Be=new xt;Be.setAttribute("position",new un(He,3,0)),Be.setAttribute("normal",new un(He,3,3)),Be.setAttribute("uv",new un(He,2,6)),Be.computeBoundingSphere();let Ye=new rt(Be,y[z]);Ye.castShadow=!0,Ye.receiveShadow=!0,r.add(Ye)}for(let L of t.lights){let z=new Vt(16764299,35,20,2);z.position.set(L.x,L.z,-L.y),r.add(z)}for(let L of t.indoorLights||[]){let z=new Vt(16768435,L.power,L.range,2);z.position.set(L.x,L.z,-L.y),r.add(z)}let S=lf(),E=(t.interiors||[]).map(L=>({...L,open:0})),H=vf(r),I=Bh(),K=Hf(r),Z=Uf(),q=Xh(null);try{q=Xh(JSON.parse(localStorage.getItem("aurora-nexus-v7")||"null"))}catch{}function pe(){try{localStorage.setItem("aurora-nexus-v7",JSON.stringify(q))}catch{Ct("\u9032\u884C\u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u4ECA\u56DE\u306F\u3053\u306E\u753B\u9762\u5185\u3067\u904A\u3079\u307E\u3059\u3002")}}let ne=Gf(r,K,q,pe),F=new D().fromArray(t.spawn),te="city",V=!1,re=null,U="";function X(){if(U!==I.world){U=I.world,s("rail-target").replaceChildren();for(let L of bc(I.world)){let z=document.createElement("option");z.value=L,z.textContent=L==="machine"?"\u6A5F\u68B0\u60D1\u661F NEXUS-9":ar[L],s("rail-target").append(z)}}}X();function oe(){H.setTrain(I.progress,go(I),I.route==="outer"?K.curve:H.curve)}let Y=new D,k=new Jt,de=[];function ye(L,z,ae,ve=r){let He=new rt(new Pt(...L),ae);return He.position.set(...z),He.castShadow=!0,He.receiveShadow=!0,ve.add(He),He}let ge=await new Response(new Blob([n(e.vehicles)]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),Fe=new DataView(ge),nt=4,B=[];for(let L=0;L<Fe.getUint32(0,!0);L++){let z=Fe.getUint32(nt,!0),ae=Fe.getUint32(nt+4,!0),ve=Fe.getUint32(nt+8,!0);nt+=12;let He=new Float32Array(ge,nt,ve*8);nt+=ve*32;let Be=new Kn(He,8),Ye=new xt;Ye.setAttribute("position",new un(Be,3,0)),Ye.setAttribute("normal",new un(Be,3,3)),Ye.setAttribute("uv",new un(Be,2,6)),Ye.computeBoundingSphere(),B.push({part:z,mi:ae,geo:Ye})}for(let L of S){L.ob=new $e,L.wheels=[],L.brakes=[],r.add(L.ob),L.ob.rotation.y=L.dir<0?Math.PI:0;let z=[[0,0,0],[-1.02,.48,1.45],[-1.02,.48,-1.45],[1.02,.48,1.45],[1.02,.48,-1.45]];for(let ae=1;ae<=4;ae++){let ve=new $e;ve.position.set(...z[ae]),L.ob.add(ve),L.wheels[ae]=ve}for(let ae of B){let ve=y[ae.mi];t.materials[ae.mi].name==="Pearlescent vehicle paint"&&(ve=ve.clone(),ve.color.multiplyScalar([.72,1.1,.85,1][L.id%4])),t.materials[ae.mi].name==="Signal red"&&(ve=ve.clone(),L.brakes.push(ve));let He=new rt(ae.geo,ve);He.castShadow=!0,He.receiveShadow=!0,(ae.part===0?L.ob:L.wheels[ae.part]).add(He)}}let ht=new We({color:9749705,metalness:.1,roughness:.17,transparent:!0,opacity:.25,depthWrite:!1,side:Ut}),ke=new We({color:8885914,metalness:.85,roughness:.25});for(let L of E){L.leaves=[];for(let z of[-1,1]){let ae=new $e;ae.position.set(L.front,1.6,-L.doorY+z*.86),r.add(ae),ye([.045,2.85,1.64],[0,0,0],ht,ae);for(let ve of[-.8,.8])ye([.065,2.88,.045],[0,0,ve],ke,ae);for(let ve of[-1.4,1.4])ye([.065,.05,1.64],[0,ve,0],ke,ae);ye([.11,.55,.035],[-L.side*.06,0,-z*.58],ke,ae),L.leaves.push({group:ae,sign:z})}}let Xe=[];for(let L of t.trafficSignals||[])for(let z of[-11.6,11.6]){let ae=-L+(z<0?9:-9),ve=new rt(new dt(.055,.075,4.2,10),ke);ve.position.set(z,2.1,ae),r.add(ve);let He=new We({color:1054748,roughness:.7});ye([.55,1.55,.3],[z,4,ae],He);for(let[Be,Ye]of["red","amber","green"].entries()){let Ne=new We({color:1118481,emissive:0}),gt=new rt(new Dt(.15,12,8),Ne);gt.position.set(z,4.47-Be*.46,ae+(z<0?-.18:.18)),r.add(gt),Xe.push({m:Ne,color:Ye})}}let De=new $e;De.position.set(0,15.8,-58),r.add(De);let St=new We({color:10860732,metalness:.65,roughness:.3}),N=new We({color:1387832,metalness:.55,roughness:.15});for(let L=-1;L<=1;L++)ye([7.4,2.2,2.8],[L*8,0,0],St,De),ye([6.6,.85,.04],[L*8,.2,1.42],N,De),ye([6.5,.055,.045],[L*8,-.65,1.45],new We({color:4572634,emissive:4572634,emissiveIntensity:1.5}),De);let J=Ef(r,E,M,De),ie=Lf(r,J.buildings),le=Nf(r),b="foot",v=null,$=15,ce="clear",O=!1,G=0,ee=null,se=Hh([]);try{se=Hh(JSON.parse(localStorage.getItem("aurora-city-stamps")||"[]"))}catch{}let me=!1,Te=0,fe=1,xe=null,Ie=null,Ce=!1,Ae=null,qe=new Set;try{for(let L of JSON.parse(localStorage.getItem("aurora-survey-v4")||"[]"))Number.isInteger(L)&&L>=0&&L<6&&qe.add(L)}catch{}for(let L of E){let z=document.createElement("option");z.value=String(L.id),z.textContent=L.label,s("destination").append(z)}s("visit").onclick=()=>{if(I.mode!=="walking"||I.world!=="city")return;Z.reset=!0,Hi(!1),Sn(),b="foot",me=!1,xe=null,Ie=null;let L=E[Number(s("destination").value)];L&&(o.position.set(L.front-L.side*2.8,1.89,-L.doorY),a=-L.side*Math.PI/2,c=0)};let W=[],be=new so,Re=new bn(new D(0,-1,0),1.4),Le=null,Me=null,_e=null;function ze(L,z){L.traverse(ae=>{ae.isMesh&&(ae.castShadow=!0,ae.frustumCulled=!1,z%4&&(ae.material=ae.material.clone(),ae.material.color.multiply(new Ve([.8,.9,1,.9][z%4],[.85,.88,.9,1][z%4],[.9,.8,.85,.92][z%4]))))})}let je=L=>new Promise((z,ae)=>new yc().parse(L,"",z,ae));Promise.all([je(n(e.human).buffer),je(n(e.civilian).buffer)]).then(([L,z])=>{let ae=[];z.scene.traverse(et=>{et.isMesh&&!et.isSkinnedMesh&&ae.push(et)});for(let et of ae)et.removeFromParent();let ve=L.scene,He=ve.getObjectByName("Icosphere");He&&He.removeFromParent(),ve.updateMatrixWorld(!0);let Be=new sn().setFromObject(ve),Ye=1.74/(Be.max.y-Be.min.y);_e=L.animations.find(et=>/walk/i.test(et.name));let Ne=kh(ve,D),gt=kh(z.scene,D);de.push(Ne,gt);let Ze=[...t.crowd,...Array.from({length:24},(et,tt)=>({x:[-225,-165,135,225][tt%4],y:-90+tt*13,dir:tt%2?1:-1,speed:1.1,scale:1,min:-285,max:120}))];for(let et=0;et<Ze.length;et++){let tt=Ze[et],Lt=et%2===1,en=Lt?z.scene:ve,ut=new sn().setFromObject(en),Ft=1.74/(ut.max.y-ut.min.y),yt=Lt?gt:Ne,It=mo(en);It.scale.multiplyScalar(Ft*tt.scale),It.position.set(tt.x,.17-ut.min.y*Ft*tt.scale,-tt.y),It.rotation.y=Rc(0,-tt.dir,yt.x,yt.z),ze(It,et),r.add(It);let ot=new _i(It),we=Lt?z.animations.find(it=>/walk/i.test(it.name))||z.animations[0]:_e;we&&(ot.clipAction(we).play(),ot.setTime(et*.143)),W.push({ob:It,mix:ot,cfg:tt,sourceForward:yt})}Le=mo(ve),Le.scale.multiplyScalar(Ye),ze(Le,0),r.add(Le);for(let et of ie.actions.filter(tt=>tt.kind==="stamp")){let tt=mo(ve);tt.scale.multiplyScalar(Ye),tt.position.set(et.x,.12-Be.min.y*Ye,et.z-5.2),tt.rotation.y=Rc(0,1,Ne.x,Ne.z),ze(tt,3),r.add(tt);let Lt=new _i(tt),en=L.animations.find(ut=>/idle/i.test(ut.name));en&&Lt.clipAction(en).play(),W.push({ob:tt,mix:Lt,cfg:{speed:0,dir:1,min:-1e4,max:1e4},sourceForward:Ne})}for(let[et,[tt,Lt,en]]of[[-108,12,"\u7814\u7A76\u54E1 LIA"],[-70,12,"\u89B3\u6E2C\u58EB REN"],[-47,2,"\u6280\u5E2B SOL"]].entries()){let ut=mo(ve);ut.scale.multiplyScalar(Ye),ut.position.set(Tt.x+tt,H.floorHeight(Tt.x+tt,Tt.z+Lt)-Be.min.y*Ye,Tt.z+Lt),ut.rotation.y=Math.PI,ze(ut,et+1),r.add(ut);let Ft=new _i(ut),yt=L.animations.find(It=>/idle/i.test(It.name));yt&&Ft.clipAction(yt).play(),W.push({ob:ut,mix:Ft,cfg:{speed:0,dir:1,min:-1e5,max:1e5},sourceForward:Ne,world:"planet",name:en,role:"LUMEN\u306E\u7814\u7A76\u54E1"})}Le.traverse(et=>{et.isMesh&&(et.material=et.material.clone(),et.material.clippingPlanes=[Re])}),Me=new _i(Le),_e&&Me.clipAction(_e).play(),s("loading").textContent="\u6E96\u5099\u5B8C\u4E86\u3002\u8857\u306E\u6563\u7B56\u3068\u3001LUMEN\u30FBNEXUS-9\u3078\u306E\u9280\u6CB3\u9244\u9053\u3092\u697D\u3057\u3081\u307E\u3059\u3002",s("start").disabled=!1,s("station").disabled=!1,document.documentElement.dataset.people=W.length,document.documentElement.dataset.triangles=R}).catch(L=>{s("loading").textContent="\u4EBA\u7269\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u518D\u5EA6\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002",console.error(L)});function lt(L,z,ae=!1){if(I.world==="machine")return K.blocked(L,z,Z.y,q);if(b==="drone")return L<-310||L>310||z<-310||z>155;if(b==="boat")return Pc(L,z);if(xe)return J.blocked(L,z,xe);if(!ae&&I.world==="city"&&le.blocked(L,z)||I.world==="city"&&ie.blocked(L,z)||I.world==="city"&&J.blocked(L,z,null))return!0;let ve=H.train.worldToLocal(new D(L,0,z));return H.train.position.y<3&&Math.abs(ve.x)<2.55&&ve.z>-8.5&&ve.z<32?!0:I.world==="planet"?H.blockedPlanet(L,z):H.cityColliders.some(He=>Math.abs(L-He.x)<He.w/2+.3&&Math.abs(z-He.z)<He.d/2+.3)?!0:ff(L,z,t.colliders,E,S)}function _t(L,z){let ae=Math.max(1,Math.ceil(Math.max(Math.abs(L),Math.abs(z))/.12)),ve=(He,Be)=>b==="car"?[[-.75,-1.6],[.75,-1.6],[-.75,1.6],[.75,1.6]].some(([Ye,Ne])=>lt(He+Ye*Math.cos(a)+Ne*Math.sin(a),Be-Ye*Math.sin(a)+Ne*Math.cos(a))):lt(He,Be);for(let He=0;He<ae;He++)ve(o.position.x+L/ae,o.position.z)||(o.position.x+=L/ae),ve(o.position.x,o.position.z+z/ae)||(o.position.z+=z/ae)}function Nt(){l=!0,document.querySelector("details").open=!1,s("pause").classList.add("hidden"),i.domElement.requestPointerLock?.()?.catch?.(()=>{})}function mn(){l=!1,h.clear(),document.exitPointerLock?.(),s("pause").classList.remove("hidden"),s("start").classList.add("hidden"),s("resume").classList.remove("hidden")}function _s(){Z.reset=!0,Hi(!1),Sn(),b="foot",v=null,me=!1,xe=null,Ie=null,Ce=!1,s("liftpanel").classList.add("hidden"),Object.assign(I,Bh()),H.setTrain(0),o.position.fromArray(t.spawn),a=-.13,c=.055,h.clear()}function ei(){if(I.mode!=="walking")return;Z.reset=!0,Hi(!1),Sn(),b="foot",me=!1,xe=null,Ie=null,Ce=!1;let L=Ec(I.world);o.position.fromArray(L.exit),a=Math.PI/2,c=0,Nt()}function ti(){return!s("start").disabled&&I.world==="city"&&I.mode==="walking"&&!me&&!Ie&&!xe&&!Ce}function hr(){return ti()?[...ie.actions,...le.actions].filter(L=>Math.hypot(o.position.x-L.x,o.position.z-L.z)<2.7).sort((L,z)=>Math.hypot(o.position.x-L.x,o.position.z-L.z)-Math.hypot(o.position.x-z.x,o.position.z-z.z))[0]:null}function Ct(L){s("activity").textContent=L,s("activity").classList.remove("hidden")}function Sn(){O=!1,s("editor").classList.add("hidden"),le.preview(null,!1,lt)}function zi(){return l&&!V&&!O&&I.mode==="walking"&&b==="foot"&&!me&&!Ie&&!Ce}function ki(){return I.mode!=="walking"||b!=="foot"||me||Ie||Ce||O?null:(I.world==="machine"?K.robots:W.filter(z=>(z.world||"city")===I.world)).map(z=>({p:z,d:z.ob.getWorldPosition(new D).distanceTo(o.position.clone().add(new D(0,-1.2,0)))})).filter(z=>z.d<3.8).sort((z,ae)=>z.d-ae.d)[0]?.p||null}function ys(L){re&&(s("dialogue-text").textContent=kf(re.role||"AURORA\u306E\u5E02\u6C11",L,q,I.world))}function ur(){if(!l||V)return;let L=ki();if(!L){Ct("\u8FD1\u304F\u306E\u4EBA\u3084\u6A5F\u68B0\u4EBA\u306B\u8FD1\u3065\u3044\u3066C\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002");return}re=L,V=!0,l=!1,h.clear(),document.exitPointerLock?.(),s("pause").classList.add("hidden"),s("dialogue").classList.remove("hidden"),s("dialogue-name").textContent=L.name||"AURORA\u306E\u5E02\u6C11",ys("\u3042\u306A\u305F\u306F\uFF1F")}function Hi(L=!0){V&&(V=!1,re=null,s("dialogue").classList.add("hidden"),L&&Nt())}function dr(){if(!zi())return;let L=(ae,ve,He)=>I.world==="machine"?K.blocked(ae,ve,He,q):lt(ae,ve),z=ne.attack(o,I.world,Ee,L,W.filter(ae=>(ae.world||"city")===I.world));z&&Ct(z),s("pulse-flash").classList.remove("hidden"),setTimeout(()=>s("pulse-flash").classList.add("hidden"),90)}let xo=[{name:"\u4FEE\u5FA9\u90E8\u54C1\u30FB\u897F\u306E\u56DE\u53CE\u5834",x:-105,z:27.2},{name:"\u4FEE\u5FA9\u90E8\u54C1\u30FB\u4E2D\u592E\u306E\u56DE\u53CE\u5834",x:-50,z:28.2},{name:"\u4FEE\u5FA9\u90E8\u54C1\u30FB\u51B7\u5374\u7089\u306E\u901A\u308A",x:-35,z:-29.8},{name:"\u51B7\u5374\u7089\u30FB\u4F5C\u696D\u533A",x:-35,z:-26},{name:"\u51B7\u5374\u7089\u30FB\u7AEF\u672B",x:-35,z:-40.2},{name:"\u52D5\u529B\u7089\u30FB\u4F5C\u696D\u533A",x:62,z:-8},{name:"\u52D5\u529B\u7089\u30FB\u7AEF\u672B",x:62,z:-22.2},{name:"\u901A\u4FE1\u7089\u30FB\u4F5C\u696D\u533A",x:35,z:87},{name:"\u901A\u4FE1\u7089\u30FB\u7AEF\u672B",x:35,z:72.8},{name:"\u4E2D\u592E\u30A2\u30FC\u30AB\u30A4\u30D6\u5165\u53E3",x:0,z:22}];for(let[L,z]of xo.entries()){let ae=document.createElement("option");ae.value=L,ae.textContent=z.name,s("nexus-place").append(ae)}s("nexus-go").onclick=()=>{if(I.world!=="machine"||I.mode!=="walking"||V)return;let L=xo[Number(s("nexus-place").value)];b="foot",Z.reset=!0,o.position.set(Et.x+L.x,1.72,Et.z+L.z),a=0,c=0,Nt()},s("talk").onclick=ur,s("dialogue-close").onclick=()=>Hi(),s("attack-button").onclick=dr;for(let[L,z]of[["topic-place","\u3053\u3053\u306F\uFF1F"],["topic-work","\u4F55\u3092\u3059\u308C\u3070\u3044\u3044\uFF1F"],["topic-travel","\u65C5\u306E\u884C\u304D\u5148"],["topic-controls","\u30B8\u30E3\u30F3\u30D7\u3068\u64CD\u4F5C"],["topic-chat","\u96D1\u8AC7"]])s(L).onclick=()=>ys(z);s("dialogue-form").onsubmit=L=>{L.preventDefault(),ys(s("dialogue-input").value),s("dialogue-input").value=""};function ni(){return ti()&&b==="foot"&&o.position.y<4}function _o(){if(O){Sn(),Nt();return}if(!ni()){Ct("\u8857\u306E\u5730\u4E0A\u3067\u4E57\u308A\u7269\u304B\u3089\u964D\u308A\u3066\u3001\u7DE8\u96C6\u30E2\u30FC\u30C9\u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002");return}O=!0,document.querySelector("details").open=!1,s("pause").classList.add("hidden"),s("editor").classList.remove("hidden"),s("activity").classList.add("hidden"),l=!0,document.exitPointerLock?.(),h.clear()}for(let L of Bi){let z=document.createElement("option");z.value=L.id,z.textContent=L.name,s("prop-type").append(z)}s("build").onclick=_o,s("build-close").onclick=()=>{Sn(),Nt()},s("prop-rotate").onclick=()=>{G+=Math.PI/4},s("prop-place").onclick=()=>{!O||!ni()||(ee=le.candidate(o,a,s("prop-type").value,G),Ct(le.place(ee,lt).message))},s("prop-remove").onclick=()=>{O&&ni()&&Ct(le.remove(o.position.x,o.position.z))},s("prop-undo").onclick=()=>{O&&ni()&&Ct(le.restore())},s("garden-save").onclick=()=>{let L=new Blob([JSON.stringify({version:1,props:le.items},null,2)],{type:"application/json"}),z=URL.createObjectURL(L),ae=document.createElement("a");ae.href=z,ae.download="AURORA-my-garden.json",ae.click(),setTimeout(()=>URL.revokeObjectURL(z),1e4),Ct("\u81EA\u5206\u306E\u914D\u7F6E\u3092JSON\u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002")},s("garden-open").onclick=()=>{O&&ni()&&s("garden-file").click()},s("garden-file").onchange=async()=>{let L=s("garden-file").files[0];if(L)try{if(L.size>1e5)throw Error();let z=JSON.parse(await L.text());if(z.version!==1||!Array.isArray(z.props))throw Error();if(!O||!ni())return;Ct(le.load(z.props,(ae,ve)=>lt(ae,ve,!0)))}catch{Ct("AURORA\u3067\u4FDD\u5B58\u3057\u305F\u914D\u7F6EJSON\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002")}finally{s("garden-file").value=""}};function fr(){if(b==="drone"){b="foot",o.position.copy(v),v=null,h.clear();return}if(!ti()||b!=="foot"){Ct("\u5730\u4E0A\u3067\u4E57\u308A\u7269\u304B\u3089\u964D\u308A\u3066\u304B\u3089\u3001\u30C9\u30ED\u30FC\u30F3\u3092\u8D77\u52D5\u3057\u3066\u304F\u3060\u3055\u3044\u3002");return}Sn(),v=o.position.clone(),$=Math.max(8,o.position.y+8),b="drone",c=-.25,Nt()}s("drone").onclick=fr,s("activity").onclick=()=>s("activity").classList.add("hidden"),s("weather").onchange=()=>{ce=s("weather").value},s("quality").onchange=()=>{let L=s("quality").value;i.setPixelRatio(Math.min(devicePixelRatio,L==="low"?.8:L==="high"?1.5:1.1)),i.shadowMap.enabled=L!=="low",f.shadow.mapSize.set(L==="high"?4096:2048,L==="high"?4096:2048),f.shadow.map&&(f.shadow.map.dispose(),f.shadow.map=null),i.setSize(innerWidth,innerHeight)};for(let L of ie.places){let z=document.createElement("option");z.value=L.id,z.textContent=L.name,s("district").append(z)}s("explore").onclick=()=>{if(I.mode!=="walking")return;_s();let L=ie.places.find(z=>z.id===s("district").value);o.position.set(L.x,1.72,L.z),a=L.yaw,c=0,Nt()},s("photo").onclick=()=>{i.render(r,o),i.domElement.toBlob(L=>{if(!L){Ct("\u5199\u771F\u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002");return}let z=URL.createObjectURL(L),ae=document.createElement("a");ae.href=z,ae.download="AURORA-photo.png",ae.click(),setTimeout(()=>URL.revokeObjectURL(z),1e4),Ct("\u98A8\u666F\u306E\u5199\u771F\u3092PNG\u3067\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002")},"image/png")};function A(){return I.world==="city"&&!me&&!Ie?J.lifts.findIndex((L,z)=>(!xe||xe.room===z)&&Math.hypot(o.position.x-L.x,o.position.z-L.z)<3):-1}function j(){if(I.mode!=="walking")return!1;if(O)return!0;if(I.world==="machine"&&b==="foot"){let z=K.reactors.find(ae=>Math.hypot(o.position.x-(Et.x+ae.x),o.position.z-(Et.z+ae.z+5.5))<3.5);if(z){let ae=zf(q,z.id);return Ct(ae),pe(),!0}if(Math.hypot(o.position.x-Et.x,o.position.z-(Et.z+4))<6)return q.reactors.length<3?Ct("\u30A2\u30FC\u30AB\u30A4\u30D6\u306F3\u57FA\u306E\u52D5\u529B\u7089\u306E\u5FA9\u65E7\u3092\u5F85\u3063\u3066\u3044\u307E\u3059\u3002"):(q.claimed=!0,pe(),Ct("\u661F\u306E\u8A18\u61B6\u3092\u56DE\u53CE\uFF01 \u6574\u5099\u58EB\u30D0\u30C3\u30B8\u3092\u7372\u5F97\u3002\u6A5F\u68B0\u60D1\u661F\u3067Shift\u79FB\u52D5\u304C\u901F\u304F\u306A\u308A\u307E\u3057\u305F\u3002")),!0}if(b==="boat")return b="foot",o.position.fromArray(Si.exit),a=-Math.PI/2,c=0,Ct("\u8239\u7740\u304D\u5834\u3078\u623B\u308A\u307E\u3057\u305F\u3002\u30DC\u30FC\u30C8\u306F\u73FE\u5728\u306E\u5834\u6240\u306B\u505C\u6CCA\u3057\u3066\u3044\u307E\u3059\u3002"),!0;if(b==="drone")return fr(),!0;if(b==="car"){let z=[[2.6,0],[-2.6,0],[0,3],[0,-3]].find(([ae,ve])=>!lt(o.position.x+ae,o.position.z+ve));return z?(b="foot",o.position.x+=z[0],o.position.z+=z[1],!0):(Ct("\u5468\u56F2\u304C\u72ED\u3044\u305F\u3081\u3001\u5E83\u3044\u5834\u6240\u3078\u79FB\u52D5\u3057\u3066\u304B\u3089\u964D\u8ECA\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),!0)}if(b==="seat"){let z=v;return b="foot",o.position.fromArray(z),v=null,!0}if(ti()){if(Math.hypot(o.position.x-Si.exit[0],o.position.z-Si.exit[2])<4)return b="boat",o.position.copy(le.boat.position),a=le.boat.rotation.y,c=.05,Ct("\u904B\u6CB3\u30DC\u30FC\u30C8\uFF1AW/S\u3067\u524D\u5F8C\u3001A/D\u3067\u64CD\u8235\u3002F\u3067\u8239\u7740\u304D\u5834\u3078\u623B\u308A\u307E\u3059\u3002\u6A4B\u306E\u9593\u306E\u6C34\u57DF\u3092\u822A\u884C\u3067\u304D\u307E\u3059\u3002"),!0;if(Math.hypot(o.position.x-ie.car.position.x,o.position.z-ie.car.position.z)<4)return b="car",o.position.x=ie.car.position.x,o.position.z=ie.car.position.z,a=ie.car.rotation.y,Ct("\u30B7\u30C6\u30A3\u30AB\u30FC\uFF1AW/S\u3067\u524D\u5F8C\u3001A/D\u3067\u30CF\u30F3\u30C9\u30EB\u3001F\u3067\u964D\u8ECA\u3002"),!0;let z=hr();if(z){if(z.kind==="seat"){let ae=z.exit;if(lt(ae[0],ae[2])&&(ae=Array.from({length:8},(ve,He)=>[z.x+Math.cos(He*Math.PI/4)*2.2,1.72,z.z+Math.sin(He*Math.PI/4)*2.2]).find(ve=>!lt(ve[0],ve[2]))),!ae)return Ct("\u7ACB\u3061\u4E0A\u304C\u308B\u5834\u6240\u304C\u72ED\u3044\u305F\u3081\u3001\u5468\u56F2\u306E\u914D\u7F6E\u3092\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),!0;v=ae,b="seat",o.position.fromArray(z.sit),a=z.yaw,c=.03}else{se.add(z.id);try{localStorage.setItem("aurora-city-stamps",JSON.stringify([...se]))}catch{}Ct(`${z.name} / \u6563\u7B56\u30B9\u30BF\u30F3\u30D7 ${se.size}/3\u3002${z.id==="canal-cafe"?"\u6E29\u304B\u3044\u30B3\u30FC\u30D2\u30FC\u3092\u53D7\u3051\u53D6\u308A\u307E\u3057\u305F\u3002":z.id==="market-food"?"\u30DE\u30FC\u30B1\u30C3\u30C8\u306E\u30D5\u30FC\u30C9\u3092\u53D7\u3051\u53D6\u308A\u307E\u3057\u305F\u3002":"\u5C55\u793A\u3092\u9451\u8CDE\u3057\u307E\u3057\u305F\u3002"}`)}return!0}}if(me){let z=J.metroPose(Te);return z.dwell&&(me=!1,fe=z.index,o.position.set(jt[z.index].x,16.52,-52),a=Math.PI,c=0),!0}if(Ce)return Ce=!1,o.position.x+=3,!0;if(I.world==="city"&&!xe&&!Ie){let z=jt.findIndex(ae=>Math.hypot(o.position.x-(ae.x+13),o.position.z+49)<3);if(z>=0)return fe=z,o.position.set(jt[z].x+13,o.position.y>10?1.72:16.52,-49),!0}if(I.world==="planet"){let z=J.beacons.findIndex((ae,ve)=>!qe.has(ve)&&Math.hypot(o.position.x-ae.x,o.position.z-ae.z)<4);if(z>=0){qe.add(z);try{localStorage.setItem("aurora-survey-v4",JSON.stringify([...qe]))}catch{}return s("discovery").textContent=`${J.beacons[z].title}\u3092\u8A18\u9332\uFF01 ${qe.size}/6`,s("discovery").classList.remove("hidden"),!0}if(o.position.distanceTo(J.rover.position)<6)return Ce=!0,!0;if(Math.hypot(o.position.x-J.orrery.position.x,o.position.z-J.orrery.position.z)<8)return s("discovery").textContent=qe.size===6?"\u63A2\u67FB\u5B8C\u4E86\uFF01\u53E4\u4EE3\u306E\u661F\u56F3\u304C\u5FA9\u5143\u3055\u308C\u307E\u3057\u305F\u3002\u60D1\u661F\u5100\u304C\u5171\u9CF4\u3057\u3066\u3044\u307E\u3059\u3002":"\u60D1\u661F\u5100\uFF1A6\u3064\u306E\u63A2\u67FB\u30D3\u30FC\u30B3\u30F3\u3092\u8ABF\u3079\u3001\u53E4\u4EE3\u306E\u661F\u56F3\u3092\u5FA9\u5143\u3057\u3088\u3046\u3002",s("discovery").classList.remove("hidden"),!0}let L=A();if(L>=0)return Ae=L,mn(),s("liftpanel").classList.remove("hidden"),!0;if(I.world==="city"&&!xe&&Math.abs(o.position.z+52)<3&&Math.abs(o.position.x-jt[fe].x)<18&&o.position.y>12){let z=J.metroPose(Te);return z.dwell&&z.index===fe&&(me=!0,a=0,c=0),!0}return!1}function he(){if(j()){h.clear();return}if(!s("start").disabled&&I.mode==="arrived"){xf(I),Z.reset=!0,X();let L=Ec(I.world);o.position.fromArray(L.exit),a=-Math.PI/2,c=0,h.clear(),Nt()}else!s("start").disabled&&I.mode==="walking"&&Ac(I,o.position.x,o.position.z)&&gf(I,s("rail-target").value)&&(a=I.origin==="planet"?1.15:-1.15,c=.04,h.clear(),Nt())}s("station").onclick=ei,s("interact").onclick=he,s("skip").onclick=()=>{I.mode==="riding"&&(zh(I,cr(I)),oe())};for(let[L,z]of jt.entries()){let ae=document.createElement("option");ae.value=L,ae.textContent=z.name,s("metro-destination").append(ae)}s("metro").onclick=()=>{I.mode==="walking"&&(_s(),fe=Number(s("metro-destination").value),o.position.set(jt[fe].x,16.52,-52),Te=fe*30,Nt())};for(let[L,z]of["1F \u30ED\u30D3\u30FC","\u5C55\u671B\u30E9\u30A6\u30F3\u30B8","\u5C4B\u4E0A\u5EAD\u5712"].entries())s("floor"+L).onclick=()=>{if(Ae===null)return;let ae=J.lifts[Ae],ve=xe?ae.levels[xe.level]:.17;Ie={room:Ae,level:L,from:ve,to:ae.levels[L],time:0},xe={room:Ae,level:L},o.position.x=ae.x,o.position.z=ae.z,s("liftpanel").classList.add("hidden"),Nt()};s("lift-close").onclick=()=>{s("liftpanel").classList.add("hidden"),Nt()},s("discovery").onclick=()=>s("discovery").classList.add("hidden"),s("start").onclick=Nt,s("resume").onclick=Nt,s("reset").onclick=_s,s("light").onclick=()=>{u=!u,s("light").textContent=u?"\u663C\u306E\u8857":"\u591C\u306E\u8857"},document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==i.domElement&&l&&!O&&mn()}),addEventListener("keydown",L=>{if(!L.target.matches("select,input,textarea")){if(V){L.code==="Escape"&&Hi();return}["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(L.code)&&L.preventDefault(),h.add(L.code),L.code==="Space"&&!L.repeat&&zi()&&Ff(Z,I.world),L.code==="KeyJ"&&!L.repeat&&dr(),L.code==="KeyC"&&!L.repeat&&ur(),L.code==="KeyR"&&!L.repeat&&s("reset").click(),L.code==="KeyF"&&!L.repeat&&he(),L.code==="KeyV"&&!L.repeat&&fr(),L.code==="KeyB"&&!L.repeat&&_o(),O&&!L.repeat&&(L.code==="KeyP"&&s("prop-place").click(),L.code==="KeyT"&&s("prop-rotate").click(),L.code==="Delete"&&s("prop-remove").click(),L.code==="KeyZ"&&s("prop-undo").click()),L.code==="Escape"&&(Sn(),mn())}}),addEventListener("keyup",L=>h.delete(L.code)),addEventListener("blur",()=>h.clear());let ue=!1,Q=0;i.domElement.addEventListener("mousedown",()=>{ue=!0,Q=0}),i.domElement.addEventListener("click",()=>{(document.pointerLockElement||Q<6)&&dr()}),addEventListener("mouseup",()=>ue=!1),addEventListener("mousemove",L=>{ue&&(Q+=Math.abs(L.movementX)+Math.abs(L.movementY)),l&&(document.pointerLockElement||ue)&&(a-=L.movementX*.0018,c-=L.movementY*.0018,c=Math.max(-1.35,Math.min(1.3,c)))}),addEventListener("resize",()=>{o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight)});let Se=0,Ee=0;i.setAnimationLoop(()=>{let L=Math.min(be.getDelta(),.25),z=L;Ee+=z,Gh.value=Ee;let ae=0,ve=0,He=!1;if(l&&(a+=((h.has("KeyQ")?1:0)-(h.has("KeyE")?1:0))*z*1.35,I.mode==="walking"&&!me&&!Ie&&b!=="seat")){if(ae=(h.has("KeyW")||h.has("ArrowUp")?1:0)-(h.has("KeyS")||h.has("ArrowDown")?1:0),ve=(h.has("KeyD")||h.has("ArrowRight")?1:0)-(h.has("KeyA")||h.has("ArrowLeft")?1:0),b==="boat"){let $t=Df(o.position,a,ae,ve,z);o.position.x=$t.x,o.position.z=$t.z,a=$t.yaw,ve=0,ae=0}b==="car"&&(a-=ve*z*.9*(ae<0?-1:1),ve=0),b==="drone"&&($=Cf($,(h.has("Space")?1:0)-(h.has("KeyX")?1:0),z)),He=!!(ae||ve);let we=Math.hypot(ae,ve)||1,it=b==="car"?10:b==="drone"?16:Ce?9:h.has("ShiftLeft")?I.world==="machine"&&q.claimed?6:3.8:1.45;_t((ve*Math.cos(a)-ae*Math.sin(a))*z*it/we,(-ae*Math.cos(a)-ve*Math.sin(a))*z*it/we),He&&(Se+=z*it*4.5)}let Be=I.mode!=="walking";l&&zh(I,L),oe(),X();let Ye=I.world==="city"&&!Be?uf(E,o.position.x,o.position.z):null,Ne=Math.abs(o.position.x)>12&&Math.abs(o.position.x)<21,gt=I.world==="city"&&Math.abs(o.position.x+82)<4&&Math.abs(o.position.z)<20;(l||!me)&&(Te+=L);let Ze=J.metroPose(Te);De.position.x=Ze.x;let et=!xe&&I.world==="city"&&o.position.y>10&&Math.abs(o.position.z+52)<3.5&&jt.some(we=>Math.abs(o.position.x-we.x)<16),tt=xe?J.lifts[xe.room].levels[xe.level]:I.world==="planet"?H.floorHeight(o.position.x,o.position.z):I.world==="machine"?Math.max(K.floorHeight(o.position.x,o.position.z,Z.y),Ac(I,o.position.x,o.position.z)?.32:0):et?14.8:gt?.32:Ye||Ne?.17:0;if(b==="drone"&&(tt=$-1.72),b==="seat"&&(tt=-.57),b==="boat"&&(tt=-.35),Ie){l&&(Ie.time+=L);let we=J.lifts[Ie.room];tt=J.liftHeight(Ie.from,Ie.to,Ie.time),we.cabin.position.y=tt,Ie.time>=5&&(Ie.level===0&&(xe=null),Ie=null)}let Lt=I.mode==="walking"&&b==="foot"&&!me&&!Ie&&!Ce;Lt?((te!==I.world||F.distanceTo(o.position)>15)&&(Z.reset=!0),Of(Z,l?z:0,tt,I.world),tt=Z.y):(Z.reset=!0,Z.y=tt,Z.v=0,Z.grounded=!0),te=I.world,F.copy(o.position),Be?(Y.set(1.1,2.3,13.3),H.train.localToWorld(Y),o.position.copy(Y),k.setFromEuler(new Mn(c,a,0,"YXZ")),o.quaternion.copy(H.train.quaternion).multiply(k)):me?(o.position.set(Ze.x,16.6,-58),o.rotation.set(c,a,0,"YXZ")):(o.position.y=1.72+tt+(Ce?.9:0)+(He&&Z.grounded?Math.sin(Se)*.018:0),o.rotation.set(c,a,0,"YXZ")),Ce&&(J.rover.position.set(o.position.x,tt,o.position.z),J.rover.rotation.y=a),b==="car"&&(ie.car.position.set(o.position.x,0,o.position.z),ie.car.rotation.y=a),b==="boat"&&(le.boat.position.x=o.position.x,le.boat.position.z=o.position.z,le.boat.rotation.y=a),ie.update(z,Ee,o,ce,Be?"space":I.world,u),le.update(Ee,b==="boat",h.has("KeyW")||h.has("KeyS"),o,u,Be?"space":I.world),O&&(ee=le.candidate(o,a,s("prop-type").value,G),le.preview(ee,ni(),lt),s("build-status").textContent=`${le.items.length}/${lr} \xB7 ${le.valid?"\u914D\u7F6E\u3067\u304D\u307E\u3059":"\u8D64\u3044\u5834\u6240\u306B\u306F\u914D\u7F6E\u3067\u304D\u307E\u305B\u3093"} \xB7 ${Math.round(G*180/Math.PI)%360}\xB0`),J.orrery.rotation.y+=z*(qe.size===6?1:.2);for(let[we,it]of J.beacons.entries())it.jewel.rotation.y+=z,it.jewel.material.color.set(qe.has(we)?12952668:8644563);for(let we of W){we.ob.visible=(we.world||"city")===I.world&&!Be&&Math.hypot(we.ob.position.x-o.position.x,we.ob.position.z-o.position.z)<125,we.ob.visible&&we.mix.update(z),we!==re&&!(we.stunUntil>Ee)&&(we.ob.position.z-=z*we.cfg.speed*we.cfg.dir);let it=we.cfg.min??-117,$t=we.cfg.max??49;we.ob.position.z<it&&(we.ob.position.z=$t),we.ob.position.z>$t&&(we.ob.position.z=it)}hf(S,z,Ee,t.trafficSignals||[],o.position);for(let we of S){we.ob.position.set(we.x,0,we.z);for(let it of we.wheels)it&&(it.rotation.x=-we.wheel);for(let it of we.brakes)it.emissiveIntensity=we.speed<.5?2.5:.6}df(E,o.position,z);for(let we of E)for(let it of we.leaves)it.group.position.z=-we.doorY+it.sign*(.86+we.open*1.65);let en=Uh(Ee);for(let we of Xe)we.m.color.set(we.color===en?{red:14890021,amber:16759349,green:3597474}[we.color]:1054745),we.m.emissive.copy(we.m.color),we.m.emissiveIntensity=we.color===en?2.2:0;if(Le){Re.constant=o.position.y-.35,Le.position.set(o.position.x,tt,o.position.z);let we=de[0];Le.rotation.y=Rc(-Math.sin(a),-Math.cos(a),we.x,we.z),Me&&Me.update(He?z:0),Le.visible=l&&!Be&&!me&&!Ie&&!Ce&&b==="foot"}if(K.update(z,Ee,q,re),ne.update(z,Ee,I.world,o.position,zi())==="respawn"&&(o.position.fromArray(Oh.exit),Z.reset=!0,Ct("\u30B7\u30FC\u30EB\u30C9\u3092\u518D\u8D77\u52D5\u3057\u3066\u661F\u6E2F\u3078\u623B\u308A\u307E\u3057\u305F\u3002\u4FEE\u5FA9\u306E\u9032\u884C\u306F\u4FDD\u6301\u3057\u3066\u3044\u307E\u3059\u3002")),zi()&&I.world==="machine")for(let we of K.cells)!q.cells.includes(we.id)&&Math.hypot(o.position.x-(Et.x+we.x),o.position.z-(Et.z+we.z))<1.4&&Math.abs(o.position.y-.72-we.ob.position.y)<1.25&&(q.cells.push(we.id),pe(),Ct(`\u4FEE\u5FA9\u90E8\u54C1\u3092\u56DE\u53CE\uFF01 \u6240\u6301 ${Dc(q)}\u500B`));let Ft=ki();s("talk").classList.toggle("hidden",!Ft||V||!l),s("talk").textContent=Ft?`C ${Ft.name||"\u5E02\u6C11"}\u3068\u8A71\u3059`:"C \u8A71\u3059",s("attack-button").classList.toggle("hidden",!l||!Lt||O),s("adventure-hud").classList.toggle("hidden",!l||Be),s("adventure-hud").textContent=`Space \u30B8\u30E3\u30F3\u30D7 \xB7 J \u30D1\u30EB\u30B9 \xB7 C \u4F1A\u8A71${I.world==="machine"?` \xB7 \u30B7\u30FC\u30EB\u30C9 ${ne.shield}%`:ne.score?` \xB7 \u8A13\u7DF4\u30B9\u30B3\u30A2 ${ne.score}`:""}`,s("machine-mission").classList.toggle("hidden",I.world!=="machine"||Be),s("machine-mission").textContent=`NEXUS-9\u5FA9\u65E7 \xB7 \u7089 ${q.reactors.length}/3 \xB7 \u30C9\u30ED\u30FC\u30F3 ${q.defeated.length}/6 \xB7 \u90E8\u54C1 ${Dc(q)}\u500B${q.claimed?" \xB7 \u6574\u5099\u58EB\u30D0\u30C3\u30B8\u7372\u5F97":q.reactors.length===3?" \xB7 \u4E2D\u592E\u30A2\u30FC\u30AB\u30A4\u30D6\u3078":" \xB7 \u5149\u308B\u90E8\u54C1\u3078\u30B8\u30E3\u30F3\u30D7"}`,document.documentElement.dataset.adventure=JSON.stringify({body:Z,quest:q,shield:ne.shield,dialogue:V});let yt=I.world!=="city"&&!Be||Be&&I.route==="outer"?1:Be?Math.max(0,Math.min(1,Math.max((o.position.y-45)/220,(I.progress-.75)/.12))):0;r.background=yt>.5?new Ve(132625):x,r.fog.density=.0015*(1-yt)+8e-6*yt,r.fog.color.set(u?1319212:11056315).lerp(new Ve(198679),yt),r.backgroundIntensity=u?.07:.75,r.environmentIntensity=(u?.2:.7)*(1-yt)+.5*yt,f.intensity=(u?.1:2.8)*(1-yt)+3.1*yt,d.intensity=(u?.42:1.7)*(1-yt)+.9*yt,!yt&&ce==="sunset"?(f.color.set(16756081),f.intensity*=.7,r.fog.color.set(9862524),r.backgroundIntensity*=.58):f.color.set(16769726),!yt&&ce==="rain"&&(r.fog.density=.0028,r.fog.color.set(7438730),f.intensity*=.35,r.backgroundIntensity*=.45),H.stars.material.opacity=yt,f.target.position.set(o.position.x,o.position.y-20,o.position.z-20),f.position.set(o.position.x-(ce==="sunset"?75:45),o.position.y+(ce==="sunset"?35:105),o.position.z+35),s("position").textContent=`${o.position.x.toFixed(0)} / ${(-o.position.z).toFixed(0)} m`,document.documentElement.dataset.playing=String(l),document.documentElement.dataset.input=Array.from(h).join(","),document.documentElement.dataset.traffic=JSON.stringify(S.map(we=>({x:we.x,z:+we.z.toFixed(3),speed:+we.speed.toFixed(2)}))),document.documentElement.dataset.room=Ye?.label||"",document.documentElement.dataset.door=JSON.stringify(E.map(we=>+we.open.toFixed(2)));let It=I.mode==="walking"&&Ac(I,o.position.x,o.position.z);s("interact").classList.toggle("hidden",!It&&I.mode!=="arrived"),s("interact").textContent=I.mode==="arrived"?"F  \u964D\u308A\u3066\u63A2\u7D22\u3059\u308B":"F  "+ar[s("rail-target").value]+"\u884C\u304D\u306B\u4E57\u8ECA",s("station").disabled=Be||s("start").disabled,s("station").textContent=I.world!=="city"?"\u60D1\u661F\u306E\u99C5\u3078":"\u9280\u6CB3\u9244\u9053\u306E\u99C5\u3078",s("visit").disabled=Be||I.world!=="city",s("nexus-go").disabled=Be||I.world!=="machine",s("journey").classList.toggle("hidden",!Be),s("route-from").textContent=ar[I.origin],s("route-to").textContent=ar[I.destination],s("phase").textContent=_f(I),s("progress").value=I.time/cr(I),s("remaining").textContent=I.mode==="arrived"?"\u964D\u8ECA\u3067\u304D\u307E\u3059":`\u3042\u3068 ${Math.ceil(cr(I)-I.time)} \u79D2${l?"":" / \u4F11\u61A9\u4E2D"}`,s("skip").classList.toggle("hidden",I.mode!=="riding"),s("place").textContent=Be?"GALAXY RAILWAY / \u8ECA\u7A93\u3092\u898B\u56DE\u305B\u307E\u3059":I.world==="machine"?"NEXUS-9 / \u6A5F\u68B0\u60D1\u661F\u306E\u5DE5\u696D\u533A":I.world==="planet"?"LUMEN / \u7D50\u6676\u76C6\u5730\u30FB\u89B3\u6E2C\u57FA\u5730":Ye?`${Ye.label} / \u9928\u5185`:`AURORA / \u5165\u308C\u308B\u5EFA\u7269 ${E.length}\u68DF`,s("region").textContent=Be?"GALAXY RAILWAY":I.world==="machine"?"NEXUS-9 / THE MACHINE WORLD":I.world==="planet"?"LUMEN / CRYSTAL BASIN":"AURORA / STREET LIFE";let ot="";if(!Be){if(me?(ot=Ze.dwell?"F \u5E02\u5185\u96FB\u8ECA\u3092\u964D\u308A\u308B":"",s("place").textContent=`\u5E02\u5185\u96FB\u8ECA / \u6B21\u306F ${jt[Ze.next].name}${Ze.dwell?"\uFF08\u505C\u8ECA\u4E2D\uFF09":""}`):Ie?s("place").textContent=`\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u79FB\u52D5\u4E2D / ${Math.round(tt)} m`:A()>=0?ot="F \u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u30FB\u968E\u3092\u9078\u3076":et&&(ot=Ze.dwell&&Ze.index===fe?"F \u5E02\u5185\u96FB\u8ECA\u306B\u4E57\u8ECA":"",s("place").textContent=`${jt[fe].name}\u99C5 / ${Ze.dwell&&Ze.index===fe?"\u96FB\u8ECA\u304C\u505C\u8ECA\u4E2D":"\u6B21\u306E\u96FB\u8ECA\u3092\u304A\u5F85\u3061\u304F\u3060\u3055\u3044"}`),!me&&!xe&&I.world==="city"&&jt.some(we=>Math.hypot(o.position.x-(we.x+13),o.position.z+49)<3)&&(ot=o.position.y>10?"F \u99C5\u306E\u5730\u4E0A\u3078\u964D\u308A\u308B":"F \u99C5\u306E\u30DB\u30FC\u30E0\u3078\u4E0A\u304C\u308B"),I.world==="planet"){Ce?ot="F \u30ED\u30FC\u30D0\u30FC\u304B\u3089\u964D\u308A\u308B":J.beacons.some((it,$t)=>!qe.has($t)&&Math.hypot(o.position.x-it.x,o.position.z-it.z)<4)?ot="F \u63A2\u67FB\u30C7\u30FC\u30BF\u3092\u8A18\u9332":o.position.distanceTo(J.rover.position)<6?ot="F \u30ED\u30FC\u30D0\u30FC\u3092\u904B\u8EE2":Math.hypot(o.position.x-J.orrery.position.x,o.position.z-J.orrery.position.z)<8&&(ot="F \u60D1\u661F\u5100\u3092\u8ABF\u3079\u308B");let we=J.beacons.filter((it,$t)=>!qe.has($t)).sort((it,$t)=>Math.hypot(it.x-o.position.x,it.z-o.position.z)-Math.hypot($t.x-o.position.x,$t.z-o.position.z));s("mission").textContent=`\u60D1\u661F\u63A2\u67FB ${qe.size}/6${we[0]?` \xB7 \u6B21\u306E\u6A19\u672C\u307E\u3067 ${Math.round(Math.hypot(we[0].x-o.position.x,we[0].z-o.position.z))}m`:" \xB7 \u661F\u56F3\u5FA9\u5143\uFF01\u60D1\u661F\u5100\u3078"}${Ce?" \xB7 \u30ED\u30FC\u30D0\u30FC\u904B\u8EE2\u4E2D":""}`}xe&&(s("place").textContent=`${J.lifts[xe.room].room.label} / ${xe.level===1?"\u5C55\u671B\u30E9\u30A6\u30F3\u30B8":"\u5C4B\u4E0A\u5EAD\u5712"}`)}if(s("mission").classList.toggle("hidden",I.world!=="planet"||Be),ti()){if(b==="boat")ot="F \u8239\u7740\u304D\u5834\u3078\u623B\u308B";else if(b==="drone")ot="F / V \u5730\u4E0A\u306B\u623B\u308B";else if(b==="car")ot="F \u30B7\u30C6\u30A3\u30AB\u30FC\u304B\u3089\u964D\u308A\u308B";else if(b==="seat")ot="F \u30D9\u30F3\u30C1\u304B\u3089\u7ACB\u3064";else if(Math.hypot(o.position.x-Si.exit[0],o.position.z-Si.exit[2])<4)ot="F \u904B\u6CB3\u30DC\u30FC\u30C8\u306B\u4E57\u308B";else if(Math.hypot(o.position.x-ie.car.position.x,o.position.z-ie.car.position.z)<4)ot="F \u30B7\u30C6\u30A3\u30AB\u30FC\u306B\u4E57\u308B";else{let we=hr();we&&(ot="F "+we.name)}s("place").textContent=`${Rf(o.position.x,o.position.z)} / ${b==="boat"?"\u904B\u6CB3\u30DC\u30FC\u30C8":b==="drone"?`\u30C9\u30ED\u30FC\u30F3 ${Math.round($)}m`:b==="car"?"\u30B7\u30C6\u30A3\u30AB\u30FC":b==="seat"?"\u4F11\u61A9\u4E2D":`\u6563\u7B56\u30B9\u30BF\u30F3\u30D7 ${se.size}/3`}`}if(I.world==="machine"&&!Be){let we=K.reactors.find(it=>Math.hypot(o.position.x-(Et.x+it.x),o.position.z-(Et.z+it.z+5.5))<3.5);we?ot=`F ${we.name}\u306E\u7AEF\u672B`:Math.hypot(o.position.x-Et.x,o.position.z-(Et.z+4))<6&&(ot="F \u661F\u306E\u8A18\u61B6\u3092\u56DE\u53CE")}V&&(ot="",s("interact").classList.add("hidden")),O&&(ot="",s("interact").classList.add("hidden")),ot?(s("interact").textContent=ot,s("interact").classList.remove("hidden")):(me||Ie||et)&&s("interact").classList.add("hidden"),document.documentElement.dataset.expansion=JSON.stringify({metroRiding:me,metroTime:Te,upper:xe,liftRide:!!Ie,roverDriving:Ce,discoveries:[...qe],buildings:J.buildings.length}),document.documentElement.dataset.freedom=JSON.stringify({mode:b,weather:ce,stamps:[...se],droneHeight:$,position:o.position.toArray()}),document.documentElement.dataset.garden=JSON.stringify({editing:O,count:le.items.length,valid:le.valid,candidate:ee,items:le.items}),document.documentElement.dataset.journey=JSON.stringify({...I,position:o.position.toArray().map(we=>+we.toFixed(2))}),document.documentElement.dataset.facing=JSON.stringify(W.map(we=>{let it=we.sourceForward,$t=we.ob.rotation.y;return+(Math.sin($t)*it.z+Math.cos($t)*it.x).toFixed(3)+","+(-Math.sin($t)*it.x+Math.cos($t)*it.z).toFixed(3)})),i.render(r,o)});let Ge=o.position.clone(),Oe=t.colliders[0],Ke={wallCollision:lt(Oe.x,-Oe.y),streetOpen:!lt(0,0),pedestrianCount:t.crowd.length,triangles:R};o.position.set(0,1.72,0),_t(0,-1),Ke.movement=o.position.z===-1,o.position.copy(Ge),document.documentElement.dataset.checks=JSON.stringify(Ke)}V_().catch(s=>{document.getElementById("loading").textContent="\u8857\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6700\u65B0\u7248\u306EEdge\u307E\u305F\u306FChrome\u3067\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002",console.error(s)});})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
