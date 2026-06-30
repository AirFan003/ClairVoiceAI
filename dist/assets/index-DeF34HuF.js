var qo=Object.defineProperty;var jo=(i,e,t)=>e in i?qo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var tt=(i,e,t)=>jo(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const as="160",Un={ROTATE:0,DOLLY:1,PAN:2},In={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ko=0,Es=1,Zo=2,$a=1,$o=2,Qt=3,sn=0,yt=1,en=2,nn=0,ii=1,jr=2,ys=3,Ts=4,Jo=5,bn=100,Qo=101,el=102,bs=103,As=104,tl=200,nl=201,il=202,rl=203,Kr=204,Zr=205,sl=206,al=207,ol=208,ll=209,cl=210,ul=211,hl=212,fl=213,dl=214,pl=0,ml=1,gl=2,Qi=3,_l=4,vl=5,xl=6,Sl=7,Ja=0,Ml=1,El=2,gn=0,yl=1,Tl=2,bl=3,Qa=4,Al=5,wl=6,eo=300,Pn=301,si=302,$r=303,Jr=304,or=306,Qr=1e3,zt=1001,es=1002,St=1003,ws=1004,gr=1005,Dt=1006,Rl=1007,ai=1008,_n=1009,Cl=1010,Pl=1011,os=1012,to=1013,pn=1014,mn=1015,rn=1016,no=1017,io=1018,wn=1020,Ll=1021,Ht=1023,Dl=1024,Ul=1025,Rn=1026,oi=1027,Il=1028,ro=1029,Nl=1030,so=1031,ao=1033,_r=33776,vr=33777,xr=33778,Sr=33779,Rs=35840,Cs=35841,Ps=35842,Ls=35843,oo=36196,Ds=37492,Us=37496,Is=37808,Ns=37809,Fs=37810,Os=37811,Bs=37812,zs=37813,Hs=37814,Gs=37815,Vs=37816,ks=37817,Ws=37818,Xs=37819,Ys=37820,qs=37821,Mr=36492,js=36494,Ks=36495,Fl=36283,Zs=36284,$s=36285,Js=36286,lo=3e3,Cn=3001,Ol=3200,Bl=3201,zl=0,Hl=1,Ut="",ft="srgb",an="srgb-linear",ls="display-p3",lr="display-p3-linear",er="linear",Ze="srgb",tr="rec709",nr="p3",Nn=7680,Qs=519,Gl=512,Vl=513,kl=514,co=515,Wl=516,Xl=517,Yl=518,ql=519,ea=35044,ta="300 es",ts=1035,tn=2e3,ir=2001;class Dn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let na=1234567;const xi=Math.PI/180,Ei=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function cs(i,e){return(i%e+e)%e}function jl(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Kl(i,e,t){return i!==e?(t-i)/(e-i):0}function Si(i,e,t){return(1-t)*i+t*e}function Zl(i,e,t,n){return Si(i,e,1-Math.exp(-t*n))}function $l(i,e=1){return e-Math.abs(cs(i,e*2)-e)}function Jl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ql(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ec(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tc(i,e){return i+Math.random()*(e-i)}function nc(i){return i*(.5-Math.random())}function ic(i){i!==void 0&&(na=i);let e=na+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rc(i){return i*xi}function sc(i){return i*Ei}function ns(i){return(i&i-1)===0&&i!==0}function ac(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oc(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gt={DEG2RAD:xi,RAD2DEG:Ei,generateUUID:ui,clamp:_t,euclideanModulo:cs,mapLinear:jl,inverseLerp:Kl,lerp:Si,damp:Zl,pingpong:$l,smoothstep:Jl,smootherstep:Ql,randInt:ec,randFloat:tc,randFloatSpread:nc,seededRandom:ic,degToRad:rc,radToDeg:sc,isPowerOfTwo:ns,ceilPowerOfTwo:ac,floorPowerOfTwo:rr,setQuaternionFromProperEuler:oc,normalize:vt,denormalize:Qn};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],v=n[8],_=r[0],p=r[3],u=r[6],b=r[1],E=r[4],A=r[7],D=r[2],C=r[5],w=r[8];return s[0]=o*_+a*b+l*D,s[3]=o*p+a*E+l*C,s[6]=o*u+a*A+l*w,s[1]=c*_+h*b+f*D,s[4]=c*p+h*E+f*C,s[7]=c*u+h*A+f*w,s[2]=d*_+m*b+v*D,s[5]=d*p+m*E+v*C,s[8]=d*u+m*A+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,m=c*s-o*l,v=t*f+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Er.makeScale(e,t)),this}rotate(e){return this.premultiply(Er.makeRotation(-e)),this}translate(e,t){return this.premultiply(Er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new Ve;function uo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lc(){const i=sr("canvas");return i.style.display="block",i}const ia={};function Mi(i){i in ia||(ia[i]=!0,console.warn(i))}const ra=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sa=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ri={[an]:{transfer:er,primaries:tr,toReference:i=>i,fromReference:i=>i},[ft]:{transfer:Ze,primaries:tr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[lr]:{transfer:er,primaries:nr,toReference:i=>i.applyMatrix3(sa),fromReference:i=>i.applyMatrix3(ra)},[ls]:{transfer:Ze,primaries:nr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(sa),fromReference:i=>i.applyMatrix3(ra).convertLinearToSRGB()}},cc=new Set([an,lr]),je={enabled:!0,_workingColorSpace:an,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ri[e].toReference,r=Ri[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ri[i].primaries},getTransfer:function(i){return i===Ut?er:Ri[i].transfer}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fn;class ho{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fn===void 0&&(Fn=sr("canvas")),Fn.width=e.width,Fn.height=e.height;const n=Fn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uc=0;class fo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tr(r[o].image)):s.push(Tr(r[o]))}else s=Tr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hc=0;class Ct extends Dn{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=zt,r=zt,s=Dt,o=ai,a=Ht,l=_n,c=Ct.DEFAULT_ANISOTROPY,h=Ut){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=ui(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Cn?ft:Ut),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ft?Cn:lo}set encoding(e){Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cn?ft:Ut}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=eo;Ct.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,r=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],v=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,A=(m+1)/2,D=(u+1)/2,C=(h+d)/4,w=(f+_)/4,Z=(v+p)/4;return E>A&&E>D?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=w/n):A>D?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=C/r,s=Z/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=w/s,r=Z/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(f-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fc extends Dn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Mi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cn?ft:Ut),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ct(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gt extends fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class po extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(f!==_||l!==d||c!==m||h!==v){let p=1-a;const u=l*d+c*m+h*v+f*_,b=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const D=Math.sqrt(E),C=Math.atan2(D,u*b);p=Math.sin(p*C)/D,a=Math.sin(a*C)/D}const A=a*b;if(l=l*p+d*A,c=c*p+m*A,h=h*p+v*A,f=f*p+_*A,p===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+h*f+l*m-c*d,e[t+1]=l*v+h*d+c*f-a*m,e[t+2]=c*v+h*m+a*d-l*f,e[t+3]=h*v-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),f=a(s/2),d=l(n/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"YXZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"ZXY":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"ZYX":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"YZX":this._x=d*h*f+c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f-d*m*v;break;case"XZY":this._x=d*h*f-c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return br.copy(this).projectOnVector(e),this.sub(br)}reflect(e){return this.sub(br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new P,aa=new Ln;class yi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nt):Nt.fromBufferAttribute(s,o),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ci.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ci.copy(n.boundingBox)),Ci.applyMatrix4(e.matrixWorld),this.union(Ci)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(di),Pi.subVectors(this.max,di),On.subVectors(e.a,di),Bn.subVectors(e.b,di),zn.subVectors(e.c,di),ln.subVectors(Bn,On),cn.subVectors(zn,Bn),Sn.subVectors(On,zn);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-Sn.z,Sn.y,ln.z,0,-ln.x,cn.z,0,-cn.x,Sn.z,0,-Sn.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-Sn.y,Sn.x,0];return!Ar(t,On,Bn,zn,Pi)||(t=[1,0,0,0,1,0,0,0,1],!Ar(t,On,Bn,zn,Pi))?!1:(Li.crossVectors(ln,cn),t=[Li.x,Li.y,Li.z],Ar(t,On,Bn,zn,Pi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new P,new P,new P,new P,new P,new P,new P,new P],Nt=new P,Ci=new yi,On=new P,Bn=new P,zn=new P,ln=new P,cn=new P,Sn=new P,di=new P,Pi=new P,Li=new P,Mn=new P;function Ar(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Mn.fromArray(i,s);const a=r.x*Math.abs(Mn.x)+r.y*Math.abs(Mn.y)+r.z*Math.abs(Mn.z),l=e.dot(Mn),c=t.dot(Mn),h=n.dot(Mn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const pc=new yi,pi=new P,wr=new P;class us{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pi.subVectors(e,this.center);const t=pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(pi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pi.copy(e.center).add(wr)),this.expandByPoint(pi.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kt=new P,Rr=new P,Di=new P,un=new P,Cr=new P,Ui=new P,Pr=new P;class mo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.origin).addScaledVector(this.direction,t),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rr.copy(e).add(t).multiplyScalar(.5),Di.copy(t).sub(e).normalize(),un.copy(this.origin).sub(Rr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Di),a=un.dot(this.direction),l=-un.dot(Di),c=un.lengthSq(),h=Math.abs(1-o*o);let f,d,m,v;if(h>0)if(f=o*l-a,d=o*a-l,v=s*h,f>=0)if(d>=-v)if(d<=v){const _=1/h;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Rr).addScaledVector(Di,d),m}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);const n=Kt.dot(this.direction),r=Kt.dot(Kt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,r,s){Cr.subVectors(t,e),Ui.subVectors(n,e),Pr.crossVectors(Cr,Ui);let o=this.direction.dot(Pr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;un.subVectors(this.origin,e);const l=a*this.direction.dot(Ui.crossVectors(un,Ui));if(l<0)return null;const c=a*this.direction.dot(Cr.cross(un));if(c<0||l+c>o)return null;const h=-a*un.dot(Pr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,s,o,a,l,c,h,f,d,m,v,_,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,f,d,m,v,_,p)}set(e,t,n,r,s,o,a,l,c,h,f,d,m,v,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=v,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Hn.setFromMatrixColumn(e,0).length(),s=1/Hn.setFromMatrixColumn(e,1).length(),o=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*f,v=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*f,v=c*h,_=c*f;t[0]=d+_*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-v,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*f,v=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*f,v=a*h,_=a*f;t[0]=l*h,t[4]=v*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,v=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=v*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+v,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,m=o*c,v=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mc,e,gc)}lookAt(e,t,n){const r=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),hn.crossVectors(n,At),hn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),hn.crossVectors(n,At)),hn.normalize(),Ii.crossVectors(At,hn),r[0]=hn.x,r[4]=Ii.x,r[8]=At.x,r[1]=hn.y,r[5]=Ii.y,r[9]=At.y,r[2]=hn.z,r[6]=Ii.z,r[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],v=n[2],_=n[6],p=n[10],u=n[14],b=n[3],E=n[7],A=n[11],D=n[15],C=r[0],w=r[4],Z=r[8],S=r[12],T=r[1],V=r[5],k=r[9],re=r[13],L=r[2],B=r[6],G=r[10],Y=r[14],W=r[3],X=r[7],q=r[11],ie=r[15];return s[0]=o*C+a*T+l*L+c*W,s[4]=o*w+a*V+l*B+c*X,s[8]=o*Z+a*k+l*G+c*q,s[12]=o*S+a*re+l*Y+c*ie,s[1]=h*C+f*T+d*L+m*W,s[5]=h*w+f*V+d*B+m*X,s[9]=h*Z+f*k+d*G+m*q,s[13]=h*S+f*re+d*Y+m*ie,s[2]=v*C+_*T+p*L+u*W,s[6]=v*w+_*V+p*B+u*X,s[10]=v*Z+_*k+p*G+u*q,s[14]=v*S+_*re+p*Y+u*ie,s[3]=b*C+E*T+A*L+D*W,s[7]=b*w+E*V+A*B+D*X,s[11]=b*Z+E*k+A*G+D*q,s[15]=b*S+E*re+A*Y+D*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],v=e[3],_=e[7],p=e[11],u=e[15];return v*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*m-n*l*m)+_*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*h-s*l*h)+p*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*h-n*c*h)+u*(-r*a*h-t*l*f+t*a*d+r*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],v=e[12],_=e[13],p=e[14],u=e[15],b=f*p*c-_*d*c+_*l*m-a*p*m-f*l*u+a*d*u,E=v*d*c-h*p*c-v*l*m+o*p*m+h*l*u-o*d*u,A=h*_*c-v*f*c+v*a*m-o*_*m-h*a*u+o*f*u,D=v*f*l-h*_*l-v*a*d+o*_*d+h*a*p-o*f*p,C=t*b+n*E+r*A+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=b*w,e[1]=(_*d*s-f*p*s-_*r*m+n*p*m+f*r*u-n*d*u)*w,e[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*u+n*l*u)*w,e[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*m-n*l*m)*w,e[4]=E*w,e[5]=(h*p*s-v*d*s+v*r*m-t*p*m-h*r*u+t*d*u)*w,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*u-t*l*u)*w,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*m+t*l*m)*w,e[8]=A*w,e[9]=(v*f*s-h*_*s-v*n*m+t*_*m+h*n*u-t*f*u)*w,e[10]=(o*_*s-v*a*s+v*n*c-t*_*c-o*n*u+t*a*u)*w,e[11]=(h*a*s-o*f*s-h*n*c+t*f*c+o*n*m-t*a*m)*w,e[12]=D*w,e[13]=(h*_*r-v*f*r+v*n*d-t*_*d-h*n*p+t*f*p)*w,e[14]=(v*a*r-o*_*r-v*n*l+t*_*l+o*n*p-t*a*p)*w,e[15]=(o*f*r-h*a*r+h*n*l-t*f*l-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,d=s*c,m=s*h,v=s*f,_=o*h,p=o*f,u=a*f,b=l*c,E=l*h,A=l*f,D=n.x,C=n.y,w=n.z;return r[0]=(1-(_+u))*D,r[1]=(m+A)*D,r[2]=(v-E)*D,r[3]=0,r[4]=(m-A)*C,r[5]=(1-(d+u))*C,r[6]=(p+b)*C,r[7]=0,r[8]=(v+E)*w,r[9]=(p-b)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Hn.set(r[0],r[1],r[2]).length();const o=Hn.set(r[4],r[5],r[6]).length(),a=Hn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ft.copy(this);const c=1/s,h=1/o,f=1/a;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=f,Ft.elements[9]*=f,Ft.elements[10]*=f,t.setFromRotationMatrix(Ft),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=tn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let m,v;if(a===tn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ir)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=tn){const l=this.elements,c=1/(t-e),h=1/(n-r),f=1/(o-s),d=(t+e)*c,m=(n+r)*h;let v,_;if(a===tn)v=(o+s)*f,_=-2*f;else if(a===ir)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hn=new P,Ft=new at,mc=new P(0,0,0),gc=new P(1,1,1),hn=new P,Ii=new P,At=new P,oa=new at,la=new Ln;class cr{constructor(e=0,t=0,n=0,r=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return la.setFromEuler(this),this.setFromQuaternion(la,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class go{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _c=0;const ca=new P,Gn=new Ln,Zt=new at,Ni=new P,mi=new P,vc=new P,xc=new Ln,ua=new P(1,0,0),ha=new P(0,1,0),fa=new P(0,0,1),Sc={type:"added"},Mc={type:"removed"};class Tt extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new P,t=new cr,n=new Ln,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ve}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(ua,e)}rotateY(e){return this.rotateOnAxis(ha,e)}rotateZ(e){return this.rotateOnAxis(fa,e)}translateOnAxis(e,t){return ca.copy(e).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ua,e)}translateY(e){return this.translateOnAxis(ha,e)}translateZ(e){return this.translateOnAxis(fa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ni.copy(e):Ni.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(mi,Ni,this.up):Zt.lookAt(Ni,mi,this.up),this.quaternion.setFromRotationMatrix(Zt),r&&(Zt.extractRotation(r.matrixWorld),Gn.setFromRotationMatrix(Zt),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,e,vc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,xc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new P(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new P,$t=new P,Lr=new P,Jt=new P,Vn=new P,kn=new P,da=new P,Dr=new P,Ur=new P,Ir=new P;let Fi=!1;class Bt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ot.subVectors(e,t),r.cross(Ot);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ot.subVectors(r,t),$t.subVectors(n,t),Lr.subVectors(e,t);const o=Ot.dot(Ot),a=Ot.dot($t),l=Ot.dot(Lr),c=$t.dot($t),h=$t.dot(Lr),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jt)===null?!1:Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getUV(e,t,n,r,s,o,a,l){return Fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fi=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jt.x),l.addScaledVector(o,Jt.y),l.addScaledVector(a,Jt.z),l)}static isFrontFacing(e,t,n,r){return Ot.subVectors(n,t),$t.subVectors(e,t),Ot.cross($t).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Ot.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fi=!0),Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Vn.subVectors(r,n),kn.subVectors(s,n),Dr.subVectors(e,n);const l=Vn.dot(Dr),c=kn.dot(Dr);if(l<=0&&c<=0)return t.copy(n);Ur.subVectors(e,r);const h=Vn.dot(Ur),f=kn.dot(Ur);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Vn,o);Ir.subVectors(e,s);const m=Vn.dot(Ir),v=kn.dot(Ir);if(v>=0&&m<=v)return t.copy(s);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(kn,a);const p=h*v-m*f;if(p<=0&&f-h>=0&&m-v>=0)return da.subVectors(s,r),a=(f-h)/(f-h+(m-v)),t.copy(r).addScaledVector(da,a);const u=1/(p+_+d);return o=_*u,a=d*u,t.copy(n).addScaledVector(Vn,o).addScaledVector(kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _o={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Oi={h:0,s:0,l:0};function Nr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=je.workingColorSpace){if(e=cs(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Nr(o,s,e+1/3),this.g=Nr(o,s,e),this.b=Nr(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=ft){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const n=_o[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return je.fromWorkingColorSpace(mt.copy(this),e),Math.round(_t(mt.r*255,0,255))*65536+Math.round(_t(mt.g*255,0,255))*256+Math.round(_t(mt.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,r=mt.g,s=mt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=ft){je.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,r=mt.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(Oi);const n=Si(fn.h,Oi.h,t),r=Si(fn.s,Oi.s,t),s=Si(fn.l,Oi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Be;Be.NAMES=_o;let Ec=0;class ur extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=ii,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kr,this.blendDst=Zr,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nn,this.stencilZFail=Nn,this.stencilZPass=Nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kr&&(n.blendSrc=this.blendSrc),this.blendDst!==Zr&&(n.blendDst=this.blendDst),this.blendEquation!==bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qs&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hs extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new P,Bi=new Me;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ea,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bi.fromBufferAttribute(this,t),Bi.applyMatrix3(e),this.setXY(t,Bi.x,Bi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ea&&(e.usage=this.usage),e}}class vo extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xo extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yc=0;const Lt=new at,Fr=new Tt,Wn=new P,wt=new yi,gi=new yi,ut=new P;class on extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uo(e)?xo:vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];gi.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(wt.min,gi.min),wt.expandByPoint(ut),ut.addVectors(wt.max,gi.max),wt.expandByPoint(ut)):(wt.expandByPoint(gi.min),wt.expandByPoint(gi.max))}wt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ut.fromBufferAttribute(a,c),l&&(Wn.fromBufferAttribute(e,c),ut.add(Wn)),r=Math.max(r,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new P,h[T]=new P;const f=new P,d=new P,m=new P,v=new Me,_=new Me,p=new Me,u=new P,b=new P;function E(T,V,k){f.fromArray(r,T*3),d.fromArray(r,V*3),m.fromArray(r,k*3),v.fromArray(o,T*2),_.fromArray(o,V*2),p.fromArray(o,k*2),d.sub(f),m.sub(f),_.sub(v),p.sub(v);const re=1/(_.x*p.y-p.x*_.y);isFinite(re)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(re),b.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(re),c[T].add(u),c[V].add(u),c[k].add(u),h[T].add(b),h[V].add(b),h[k].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let T=0,V=A.length;T<V;++T){const k=A[T],re=k.start,L=k.count;for(let B=re,G=re+L;B<G;B+=3)E(n[B+0],n[B+1],n[B+2])}const D=new P,C=new P,w=new P,Z=new P;function S(T){w.fromArray(s,T*3),Z.copy(w);const V=c[T];D.copy(V),D.sub(w.multiplyScalar(w.dot(V))).normalize(),C.crossVectors(Z,V);const re=C.dot(h[T])<0?-1:1;l[T*4]=D.x,l[T*4+1]=D.y,l[T*4+2]=D.z,l[T*4+3]=re}for(let T=0,V=A.length;T<V;++T){const k=A[T],re=k.start,L=k.count;for(let B=re,G=re+L;B<G;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,f=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)d[v++]=c[m++]}return new Yt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pa=new at,En=new mo,zi=new us,ma=new P,Xn=new P,Yn=new P,qn=new P,Or=new P,Hi=new P,Gi=new Me,Vi=new Me,ki=new Me,ga=new P,_a=new P,va=new P,Wi=new P,Xi=new P;class Xt extends Tt{constructor(e=new on,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Or.fromBufferAttribute(f,e),o?Hi.addScaledVector(Or,h):Hi.addScaledVector(Or.sub(t),h))}t.add(Hi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zi.copy(n.boundingSphere),zi.applyMatrix4(s),En.copy(e.ray).recast(e.near),!(zi.containsPoint(En.origin)===!1&&(En.intersectSphere(zi,ma)===null||En.origin.distanceToSquared(ma)>(e.far-e.near)**2))&&(pa.copy(s).invert(),En.copy(e.ray).applyMatrix4(pa),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,En)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const p=d[v],u=o[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,D=E;A<D;A+=3){const C=a.getX(A),w=a.getX(A+1),Z=a.getX(A+2);r=Yi(this,u,e,n,c,h,f,C,w,Z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const b=a.getX(p),E=a.getX(p+1),A=a.getX(p+2);r=Yi(this,o,e,n,c,h,f,b,E,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const p=d[v],u=o[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,D=E;A<D;A+=3){const C=A,w=A+1,Z=A+2;r=Yi(this,u,e,n,c,h,f,C,w,Z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const b=p,E=p+1,A=p+2;r=Yi(this,o,e,n,c,h,f,b,E,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Tc(i,e,t,n,r,s,o,a){let l;if(e.side===yt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===sn,a),l===null)return null;Xi.copy(a),Xi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Xi);return c<t.near||c>t.far?null:{distance:c,point:Xi.clone(),object:i}}function Yi(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Xn),i.getVertexPosition(l,Yn),i.getVertexPosition(c,qn);const h=Tc(i,e,t,n,Xn,Yn,qn,Wi);if(h){r&&(Gi.fromBufferAttribute(r,a),Vi.fromBufferAttribute(r,l),ki.fromBufferAttribute(r,c),h.uv=Bt.getInterpolation(Wi,Xn,Yn,qn,Gi,Vi,ki,new Me)),s&&(Gi.fromBufferAttribute(s,a),Vi.fromBufferAttribute(s,l),ki.fromBufferAttribute(s,c),h.uv1=Bt.getInterpolation(Wi,Xn,Yn,qn,Gi,Vi,ki,new Me),h.uv2=h.uv1),o&&(ga.fromBufferAttribute(o,a),_a.fromBufferAttribute(o,l),va.fromBufferAttribute(o,c),h.normal=Bt.getInterpolation(Wi,Xn,Yn,qn,ga,_a,va,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};Bt.getNormal(Xn,Yn,qn,f.normal),h.face=f}return h}class Ti extends on{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2));function v(_,p,u,b,E,A,D,C,w,Z,S){const T=A/w,V=D/Z,k=A/2,re=D/2,L=C/2,B=w+1,G=Z+1;let Y=0,W=0;const X=new P;for(let q=0;q<G;q++){const ie=q*V-re;for(let se=0;se<B;se++){const H=se*T-k;X[_]=H*b,X[p]=ie*E,X[u]=L,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[u]=C>0?1:-1,h.push(X.x,X.y,X.z),f.push(se/w),f.push(1-q/Z),Y+=1}}for(let q=0;q<Z;q++)for(let ie=0;ie<w;ie++){const se=d+ie+B*q,H=d+ie+B*(q+1),j=d+(ie+1)+B*(q+1),ce=d+(ie+1)+B*q;l.push(se,H,ce),l.push(H,j,ce),W+=6}a.addGroup(m,W,S),m+=W,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function xt(i){const e={};for(let t=0;t<i.length;t++){const n=li(i[t]);for(const r in n)e[r]=n[r]}return e}function bc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function So(i){return i.getRenderTarget()===null?i.outputColorSpace:je.workingColorSpace}const ar={clone:li,merge:xt};var Ac=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Et extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ac,this.fragmentShader=wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=bc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mo extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends Mo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ei*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ei*2*Math.atan(Math.tan(xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jn=-90,Kn=1;class Eo extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rt(jn,Kn,e,t);r.layers=this.layers,this.add(r);const s=new Rt(jn,Kn,e,t);s.layers=this.layers,this.add(s);const o=new Rt(jn,Kn,e,t);o.layers=this.layers,this.add(o);const a=new Rt(jn,Kn,e,t);a.layers=this.layers,this.add(a);const l=new Rt(jn,Kn,e,t);l.layers=this.layers,this.add(l);const c=new Rt(jn,Kn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class yo extends Ct{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Pn,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class To extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Mi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cn?ft:Ut),this.texture=new yo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ti(5,5,5),s=new Et({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:nn});s.uniforms.tEquirect.value=t;const o=new Xt(r,s),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=Dt),new Eo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Br=new P,Rc=new P,Cc=new Ve;class dn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Br.subVectors(n,t).cross(Rc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Br),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cc.getNormalMatrix(e),r=this.coplanarPoint(Br).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new us,qi=new P;class fs{constructor(e=new dn,t=new dn,n=new dn,r=new dn,s=new dn,o=new dn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],m=r[8],v=r[9],_=r[10],p=r[11],u=r[12],b=r[13],E=r[14],A=r[15];if(n[0].setComponents(l-s,d-c,p-m,A-u).normalize(),n[1].setComponents(l+s,d+c,p+m,A+u).normalize(),n[2].setComponents(l+o,d+h,p+v,A+b).normalize(),n[3].setComponents(l-o,d-h,p-v,A-b).normalize(),n[4].setComponents(l-a,d-f,p-_,A-E).normalize(),t===tn)n[5].setComponents(l+a,d+f,p+_,A+E).normalize();else if(t===ir)n[5].setComponents(a,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(e){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(qi.x=r.normal.x>0?e.max.x:e.min.x,qi.y=r.normal.y>0?e.max.y:e.min.y,qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bo(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Pc(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const f=c.array,d=c.usage,m=f.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,f){const d=h.array,m=h._updateRange,v=h.updateRanges;if(i.bindBuffer(f,c),m.count===-1&&v.length===0&&i.bufferSubData(f,0,d),v.length!==0){for(let _=0,p=v.length;_<p;_++){const u=v[_];t?i.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):i.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,r(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}class ds extends on{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=t/l,m=[],v=[],_=[],p=[];for(let u=0;u<h;u++){const b=u*d-o;for(let E=0;E<c;E++){const A=E*f-s;v.push(A,-b,0),_.push(0,0,1),p.push(E/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const E=b+c*u,A=b+c*(u+1),D=b+1+c*(u+1),C=b+1+c*u;m.push(E,A,C),m.push(A,D,C)}this.setIndex(m),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dc=`#ifdef USE_ALPHAHASH
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
#endif`,Uc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oc=`#ifdef USE_AOMAP
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
#endif`,Bc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Hc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Gc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wc=`#ifdef USE_IRIDESCENCE
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
#endif`,Xc=`#ifdef USE_BUMPMAP
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
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eu=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,tu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nu=`vec3 transformedNormal = objectNormal;
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
#endif`,iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",lu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,cu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vu=`#ifdef USE_GRADIENTMAP
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
}`,xu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yu=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Tu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cu=`PhysicalMaterial material;
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
#endif`,Pu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Lu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Du=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gu=`#if defined( USE_POINTS_UV )
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
#endif`,Vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ju=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qu=`#ifdef USE_NORMALMAP
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
#endif`,eh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,th=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ih=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,ah=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ch=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ph=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_h=`#ifdef USE_SKINNING
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
#endif`,vh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xh=`#ifdef USE_SKINNING
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
#endif`,Sh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yh=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Th=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ah=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ch=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ph=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lh=`uniform sampler2D t2D;
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
}`,Dh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`#include <common>
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
}`,Oh=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Bh=`#define DISTANCE
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
}`,zh=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vh=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wh=`#include <common>
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
}`,Xh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yh=`#define LAMBERT
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
}`,qh=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jh=`#define MATCAP
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
}`,Kh=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zh=`#define NORMAL
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
}`,$h=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jh=`#define PHONG
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
}`,Qh=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ef=`#define STANDARD
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
}`,tf=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,nf=`#define TOON
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
}`,rf=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sf=`uniform float size;
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
}`,af=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,of=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,lf=`uniform vec3 color;
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
}`,cf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,uf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oe={alphahash_fragment:Lc,alphahash_pars_fragment:Dc,alphamap_fragment:Uc,alphamap_pars_fragment:Ic,alphatest_fragment:Nc,alphatest_pars_fragment:Fc,aomap_fragment:Oc,aomap_pars_fragment:Bc,batching_pars_vertex:zc,batching_vertex:Hc,begin_vertex:Gc,beginnormal_vertex:Vc,bsdfs:kc,iridescence_fragment:Wc,bumpmap_pars_fragment:Xc,clipping_planes_fragment:Yc,clipping_planes_pars_fragment:qc,clipping_planes_pars_vertex:jc,clipping_planes_vertex:Kc,color_fragment:Zc,color_pars_fragment:$c,color_pars_vertex:Jc,color_vertex:Qc,common:eu,cube_uv_reflection_fragment:tu,defaultnormal_vertex:nu,displacementmap_pars_vertex:iu,displacementmap_vertex:ru,emissivemap_fragment:su,emissivemap_pars_fragment:au,colorspace_fragment:ou,colorspace_pars_fragment:lu,envmap_fragment:cu,envmap_common_pars_fragment:uu,envmap_pars_fragment:hu,envmap_pars_vertex:fu,envmap_physical_pars_fragment:Tu,envmap_vertex:du,fog_vertex:pu,fog_pars_vertex:mu,fog_fragment:gu,fog_pars_fragment:_u,gradientmap_pars_fragment:vu,lightmap_fragment:xu,lightmap_pars_fragment:Su,lights_lambert_fragment:Mu,lights_lambert_pars_fragment:Eu,lights_pars_begin:yu,lights_toon_fragment:bu,lights_toon_pars_fragment:Au,lights_phong_fragment:wu,lights_phong_pars_fragment:Ru,lights_physical_fragment:Cu,lights_physical_pars_fragment:Pu,lights_fragment_begin:Lu,lights_fragment_maps:Du,lights_fragment_end:Uu,logdepthbuf_fragment:Iu,logdepthbuf_pars_fragment:Nu,logdepthbuf_pars_vertex:Fu,logdepthbuf_vertex:Ou,map_fragment:Bu,map_pars_fragment:zu,map_particle_fragment:Hu,map_particle_pars_fragment:Gu,metalnessmap_fragment:Vu,metalnessmap_pars_fragment:ku,morphcolor_vertex:Wu,morphnormal_vertex:Xu,morphtarget_pars_vertex:Yu,morphtarget_vertex:qu,normal_fragment_begin:ju,normal_fragment_maps:Ku,normal_pars_fragment:Zu,normal_pars_vertex:$u,normal_vertex:Ju,normalmap_pars_fragment:Qu,clearcoat_normal_fragment_begin:eh,clearcoat_normal_fragment_maps:th,clearcoat_pars_fragment:nh,iridescence_pars_fragment:ih,opaque_fragment:rh,packing:sh,premultiplied_alpha_fragment:ah,project_vertex:oh,dithering_fragment:lh,dithering_pars_fragment:ch,roughnessmap_fragment:uh,roughnessmap_pars_fragment:hh,shadowmap_pars_fragment:fh,shadowmap_pars_vertex:dh,shadowmap_vertex:ph,shadowmask_pars_fragment:mh,skinbase_vertex:gh,skinning_pars_vertex:_h,skinning_vertex:vh,skinnormal_vertex:xh,specularmap_fragment:Sh,specularmap_pars_fragment:Mh,tonemapping_fragment:Eh,tonemapping_pars_fragment:yh,transmission_fragment:Th,transmission_pars_fragment:bh,uv_pars_fragment:Ah,uv_pars_vertex:wh,uv_vertex:Rh,worldpos_vertex:Ch,background_vert:Ph,background_frag:Lh,backgroundCube_vert:Dh,backgroundCube_frag:Uh,cube_vert:Ih,cube_frag:Nh,depth_vert:Fh,depth_frag:Oh,distanceRGBA_vert:Bh,distanceRGBA_frag:zh,equirect_vert:Hh,equirect_frag:Gh,linedashed_vert:Vh,linedashed_frag:kh,meshbasic_vert:Wh,meshbasic_frag:Xh,meshlambert_vert:Yh,meshlambert_frag:qh,meshmatcap_vert:jh,meshmatcap_frag:Kh,meshnormal_vert:Zh,meshnormal_frag:$h,meshphong_vert:Jh,meshphong_frag:Qh,meshphysical_vert:ef,meshphysical_frag:tf,meshtoon_vert:nf,meshtoon_frag:rf,points_vert:sf,points_frag:af,shadow_vert:of,shadow_frag:lf,sprite_vert:cf,sprite_frag:uf},ae={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Wt={basic:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Be(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:xt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:xt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Be(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:xt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:xt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:xt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:xt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:xt([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:xt([ae.lights,ae.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Wt.physical={uniforms:xt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ji={r:0,b:0,g:0};function hf(i,e,t,n,r,s,o){const a=new Be(0);let l=s===!0?0:1,c,h,f=null,d=0,m=null;function v(p,u){let b=!1,E=u.isScene===!0?u.background:null;E&&E.isTexture&&(E=(u.backgroundBlurriness>0?t:e).get(E)),E===null?_(a,l):E&&E.isColor&&(_(E,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===or)?(h===void 0&&(h=new Xt(new Ti(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:li(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=je.getTransfer(E.colorSpace)!==Ze,(f!==E||d!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=E,d=E.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Xt(new ds(2,2),new Et({name:"BackgroundMaterial",uniforms:li(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=je.getTransfer(E.colorSpace)!==Ze,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(ji,So(i)),n.buffers.color.setClear(ji.r,ji.g,ji.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:v}}function ff(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function f(L,B,G,Y,W){let X=!1;if(o){const q=_(Y,G,B);c!==q&&(c=q,m(c.object)),X=u(L,Y,G,W),X&&b(L,Y,G,W)}else{const q=B.wireframe===!0;(c.geometry!==Y.id||c.program!==G.id||c.wireframe!==q)&&(c.geometry=Y.id,c.program=G.id,c.wireframe=q,X=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,Z(L,B,G,Y),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,B,G){const Y=G.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let X=W[B.id];X===void 0&&(X={},W[B.id]=X);let q=X[Y];return q===void 0&&(q=p(d()),X[Y]=q),q}function p(L){const B=[],G=[],Y=[];for(let W=0;W<r;W++)B[W]=0,G[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:Y,object:L,attributes:{},index:null}}function u(L,B,G,Y){const W=c.attributes,X=B.attributes;let q=0;const ie=G.getAttributes();for(const se in ie)if(ie[se].location>=0){const j=W[se];let ce=X[se];if(ce===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),j===void 0||j.attribute!==ce||ce&&j.data!==ce.data)return!0;q++}return c.attributesNum!==q||c.index!==Y}function b(L,B,G,Y){const W={},X=B.attributes;let q=0;const ie=G.getAttributes();for(const se in ie)if(ie[se].location>=0){let j=X[se];j===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const ce={};ce.attribute=j,j&&j.data&&(ce.data=j.data),W[se]=ce,q++}c.attributes=W,c.attributesNum=q,c.index=Y}function E(){const L=c.newAttributes;for(let B=0,G=L.length;B<G;B++)L[B]=0}function A(L){D(L,0)}function D(L,B){const G=c.newAttributes,Y=c.enabledAttributes,W=c.attributeDivisors;G[L]=1,Y[L]===0&&(i.enableVertexAttribArray(L),Y[L]=1),W[L]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),W[L]=B)}function C(){const L=c.newAttributes,B=c.enabledAttributes;for(let G=0,Y=B.length;G<Y;G++)B[G]!==L[G]&&(i.disableVertexAttribArray(G),B[G]=0)}function w(L,B,G,Y,W,X,q){q===!0?i.vertexAttribIPointer(L,B,G,W,X):i.vertexAttribPointer(L,B,G,Y,W,X)}function Z(L,B,G,Y){if(n.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const W=Y.attributes,X=G.getAttributes(),q=B.defaultAttributeValues;for(const ie in X){const se=X[ie];if(se.location>=0){let H=W[ie];if(H===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){const j=H.normalized,ce=H.itemSize,ve=t.get(H);if(ve===void 0)continue;const ge=ve.buffer,Le=ve.type,De=ve.bytesPerElement,be=n.isWebGL2===!0&&(Le===i.INT||Le===i.UNSIGNED_INT||H.gpuType===to);if(H.isInterleavedBufferAttribute){const ke=H.data,N=ke.stride,ht=H.offset;if(ke.isInstancedInterleavedBuffer){for(let Ee=0;Ee<se.locationSize;Ee++)D(se.location+Ee,ke.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Ee=0;Ee<se.locationSize;Ee++)A(se.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Ee=0;Ee<se.locationSize;Ee++)w(se.location+Ee,ce/se.locationSize,Le,j,N*De,(ht+ce/se.locationSize*Ee)*De,be)}else{if(H.isInstancedBufferAttribute){for(let ke=0;ke<se.locationSize;ke++)D(se.location+ke,H.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ke=0;ke<se.locationSize;ke++)A(se.location+ke);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ke=0;ke<se.locationSize;ke++)w(se.location+ke,ce/se.locationSize,Le,j,ce*De,ce/se.locationSize*ke*De,be)}}else if(q!==void 0){const j=q[ie];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(se.location,j);break;case 3:i.vertexAttrib3fv(se.location,j);break;case 4:i.vertexAttrib4fv(se.location,j);break;default:i.vertexAttrib1fv(se.location,j)}}}}C()}function S(){k();for(const L in a){const B=a[L];for(const G in B){const Y=B[G];for(const W in Y)v(Y[W].object),delete Y[W];delete B[G]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const B=a[L.id];for(const G in B){const Y=B[G];for(const W in Y)v(Y[W].object),delete Y[W];delete B[G]}delete a[L.id]}function V(L){for(const B in a){const G=a[B];if(G[L.id]===void 0)continue;const Y=G[L.id];for(const W in Y)v(Y[W].object),delete Y[W];delete G[L.id]}}function k(){re(),h=!0,c!==l&&(c=l,m(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:k,resetDefaultState:re,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:E,enableAttribute:A,disableUnusedAttributes:C}}function df(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,f){i.drawArrays(s,h,f),t.update(f,s,1)}function l(h,f,d){if(d===0)return;let m,v;if(r)m=i,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,h,f,d),t.update(f,s,d)}function c(h,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<d;v++)this.render(h[v],f[v]);else{m.multiDrawArraysWEBGL(s,h,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=f[_];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function pf(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,A=o||e.has("OES_texture_float"),D=E&&A,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:E,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:C}}function mf(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new dn,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!r||v===null||v.length===0||s&&!p)s?h(null):c();else{const b=s?0:n,E=b*4;let A=u.clippingState||null;l.value=A,A=h(v,d,E,m);for(let D=0;D!==E;++D)A[D]=t[D];u.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const u=m+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let E=0,A=m;E!==_;++E,A+=4)o.copy(f[E]).applyMatrix4(b,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function gf(i){let e=new WeakMap;function t(o,a){return a===$r?o.mapping=Pn:a===Jr&&(o.mapping=si),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$r||a===Jr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new To(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ao extends Mo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ei=4,xa=[.125,.215,.35,.446,.526,.582],An=20,zr=new Ao,Sa=new Be;let Hr=null,Gr=0,Vr=0;const Tn=(1+Math.sqrt(5))/2,Zn=1/Tn,Ma=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Tn,Zn),new P(0,Tn,-Zn),new P(Zn,0,Tn),new P(-Zn,0,Tn),new P(Tn,Zn,0),new P(-Tn,Zn,0)];class is{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Hr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hr,Gr,Vr),e.scissorTest=!1,Ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pn||e.mapping===si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:rn,format:Ht,colorSpace:an,depthBuffer:!1},r=Ea(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ea(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(s)),this._blurMaterial=vf(s,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,zr)}_sceneToCubeUV(e,t,n,r){const a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Sa),h.toneMapping=gn,h.autoClear=!1;const m=new hs({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),v=new Xt(new Ti,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Sa),_=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):b===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const E=this._cubeSize;Ki(r,b*E,u>2?E:0,E,E),h.setRenderTarget(r),_&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Pn||e.mapping===si;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ya());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ki(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ma[(r-1)%Ma.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Xt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*An-1),_=s/v,p=isFinite(s)?1+Math.floor(h*_):An;p>An&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${An}`);const u=[];let b=0;for(let w=0;w<An;++w){const Z=w/_,S=Math.exp(-Z*Z/2);u.push(S),w===0?b+=S:w<p&&(b+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=v,d.mipInt.value=E-n;const A=this._sizeLods[r],D=3*A*(r>E-ei?r-E+ei:0),C=4*(this._cubeSize-A);Ki(t,D,C,3*A,2*A),l.setRenderTarget(t),l.render(f,zr)}}function _f(i){const e=[],t=[],n=[];let r=i;const s=i-ei+1+xa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ei?l=xa[o-i+ei-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,_=3,p=2,u=1,b=new Float32Array(_*v*m),E=new Float32Array(p*v*m),A=new Float32Array(u*v*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,Z=C>2?0:-1,S=[w,Z,0,w+2/3,Z,0,w+2/3,Z+1,0,w,Z,0,w+2/3,Z+1,0,w,Z+1,0];b.set(S,_*v*C),E.set(d,p*v*C);const T=[C,C,C,C,C,C];A.set(T,u*v*C)}const D=new on;D.setAttribute("position",new Yt(b,_)),D.setAttribute("uv",new Yt(E,p)),D.setAttribute("faceIndex",new Yt(A,u)),e.push(D),r>ei&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ea(i,e,t){const n=new Gt(i,e,t);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ki(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function vf(i,e,t){const n=new Float32Array(An),r=new P(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ps(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function ya(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ps(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Ta(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function ps(){return`

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
	`}function xf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$r||l===Jr,h=l===Pn||l===si;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new is(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new is(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Sf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Mf(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const _=m[v];for(let p=0,u=_.length;p<u;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let E=0,A=b.length;E<A;E+=3){const D=b[E+0],C=b[E+1],w=b[E+2];d.push(D,C,C,w,w,D)}}else if(v!==void 0){const b=v.array;_=v.version;for(let E=0,A=b.length/3-1;E<A;E+=3){const D=E+0,C=E+1,w=E+2;d.push(D,C,C,w,w,D)}}else return;const p=new(uo(d)?xo:vo)(d,1);p.version=_;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Ef(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,v){i.drawElements(s,v,a,m*l),t.update(v,s,1)}function f(m,v,_){if(_===0)return;let p,u;if(r)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,v,a,m*l,_),t.update(v,s,_)}function d(m,v,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,v[u]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,_);let u=0;for(let b=0;b<_;b++)u+=v[b];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function yf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Tf(i,e){return i[0]-e[0]}function bf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Af(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new $e,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let B=function(){re.dispose(),s.delete(h),h.removeEventListener("dispose",B)};var m=B;p!==void 0&&p.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],Z=h.morphAttributes.color||[];let S=0;E===!0&&(S=1),A===!0&&(S=2),D===!0&&(S=3);let T=h.attributes.position.count*S,V=1;T>e.maxTextureSize&&(V=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const k=new Float32Array(T*V*4*_),re=new po(k,T,V,_);re.type=mn,re.needsUpdate=!0;const L=S*4;for(let G=0;G<_;G++){const Y=C[G],W=w[G],X=Z[G],q=T*V*4*G;for(let ie=0;ie<Y.count;ie++){const se=ie*L;E===!0&&(o.fromBufferAttribute(Y,ie),k[q+se+0]=o.x,k[q+se+1]=o.y,k[q+se+2]=o.z,k[q+se+3]=0),A===!0&&(o.fromBufferAttribute(W,ie),k[q+se+4]=o.x,k[q+se+5]=o.y,k[q+se+6]=o.z,k[q+se+7]=0),D===!0&&(o.fromBufferAttribute(X,ie),k[q+se+8]=o.x,k[q+se+9]=o.y,k[q+se+10]=o.z,k[q+se+11]=X.itemSize===4?o.w:1)}}p={count:_,texture:re,size:new Me(T,V)},s.set(h,p),h.addEventListener("dispose",B)}let u=0;for(let E=0;E<d.length;E++)u+=d[E];const b=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==v){_=[];for(let A=0;A<v;A++)_[A]=[A,0];n[h.id]=_}for(let A=0;A<v;A++){const D=_[A];D[0]=A,D[1]=d[A]}_.sort(bf);for(let A=0;A<8;A++)A<v&&_[A][1]?(a[A][0]=_[A][0],a[A][1]=_[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(Tf);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let b=0;for(let A=0;A<8;A++){const D=a[A],C=D[0],w=D[1];C!==Number.MAX_SAFE_INTEGER&&w?(p&&h.getAttribute("morphTarget"+A)!==p[C]&&h.setAttribute("morphTarget"+A,p[C]),u&&h.getAttribute("morphNormal"+A)!==u[C]&&h.setAttribute("morphNormal"+A,u[C]),r[A]=w,b+=w):(p&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),u&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),r[A]=0)}const E=h.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function wf(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class wo extends Ct{constructor(e,t,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:Rn,h!==Rn&&h!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rn&&(n=pn),n===void 0&&h===oi&&(n=wn),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ro=new Ct,Co=new wo(1,1);Co.compareFunction=co;const Po=new po,Lo=new dc,Do=new yo,ba=[],Aa=[],wa=new Float32Array(16),Ra=new Float32Array(9),Ca=new Float32Array(4);function hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ba[r];if(s===void 0&&(s=new Float32Array(r),ba[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hr(i,e){let t=Aa[e];t===void 0&&(t=new Int32Array(e),Aa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function Df(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Ca.set(n),i.uniformMatrix2fv(this.addr,!1,Ca),lt(t,n)}}function Uf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Ra.set(n),i.uniformMatrix3fv(this.addr,!1,Ra),lt(t,n)}}function If(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;wa.set(n),i.uniformMatrix4fv(this.addr,!1,wa),lt(t,n)}}function Nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function zf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function kf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Co:Ro;t.setTexture2D(e||s,r)}function Wf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Lo,r)}function Xf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Do,r)}function Yf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Po,r)}function qf(i){switch(i){case 5126:return Rf;case 35664:return Cf;case 35665:return Pf;case 35666:return Lf;case 35674:return Df;case 35675:return Uf;case 35676:return If;case 5124:case 35670:return Nf;case 35667:case 35671:return Ff;case 35668:case 35672:return Of;case 35669:case 35673:return Bf;case 5125:return zf;case 36294:return Hf;case 36295:return Gf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Wf;case 35680:case 36300:case 36308:case 36293:return Xf;case 36289:case 36303:case 36311:case 36292:return Yf}}function jf(i,e){i.uniform1fv(this.addr,e)}function Kf(i,e){const t=hi(e,this.size,2);i.uniform2fv(this.addr,t)}function Zf(i,e){const t=hi(e,this.size,3);i.uniform3fv(this.addr,t)}function $f(i,e){const t=hi(e,this.size,4);i.uniform4fv(this.addr,t)}function Jf(i,e){const t=hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qf(i,e){const t=hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ed(i,e){const t=hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function td(i,e){i.uniform1iv(this.addr,e)}function nd(i,e){i.uniform2iv(this.addr,e)}function id(i,e){i.uniform3iv(this.addr,e)}function rd(i,e){i.uniform4iv(this.addr,e)}function sd(i,e){i.uniform1uiv(this.addr,e)}function ad(i,e){i.uniform2uiv(this.addr,e)}function od(i,e){i.uniform3uiv(this.addr,e)}function ld(i,e){i.uniform4uiv(this.addr,e)}function cd(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ro,s[o])}function ud(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Lo,s[o])}function hd(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Do,s[o])}function fd(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Po,s[o])}function dd(i){switch(i){case 5126:return jf;case 35664:return Kf;case 35665:return Zf;case 35666:return $f;case 35674:return Jf;case 35675:return Qf;case 35676:return ed;case 5124:case 35670:return td;case 35667:case 35671:return nd;case 35668:case 35672:return id;case 35669:case 35673:return rd;case 5125:return sd;case 36294:return ad;case 36295:return od;case 36296:return ld;case 35678:case 36198:case 36298:case 36306:case 35682:return cd;case 35679:case 36299:case 36307:return ud;case 35680:case 36300:case 36308:case 36293:return hd;case 36289:case 36303:case 36311:case 36292:return fd}}class pd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qf(t.type)}}class md{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dd(t.type)}}class gd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function Pa(i,e){i.seq.push(e),i.map[e.id]=e}function _d(i,e,t){const n=i.name,r=n.length;for(kr.lastIndex=0;;){const s=kr.exec(n),o=kr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pa(t,c===void 0?new pd(a,i,e):new md(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new gd(a),Pa(t,f)),t=f}}}class Ji{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_d(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function La(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vd=37297;let xd=0;function Sd(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Md(i){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(i);let n;switch(e===t?n="":e===nr&&t===tr?n="LinearDisplayP3ToLinearSRGB":e===tr&&t===nr&&(n="LinearSRGBToLinearDisplayP3"),i){case an:case lr:return[n,"LinearTransferOETF"];case ft:case ls:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Da(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Sd(i.getShaderSource(e),o)}else return r}function Ed(i,e){const t=Md(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yd(i,e){let t;switch(e){case yl:t="Linear";break;case Tl:t="Reinhard";break;case bl:t="OptimizedCineon";break;case Qa:t="ACESFilmic";break;case wl:t="AgX";break;case Al:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Td(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ti).join(`
`)}function bd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ti).join(`
`)}function Ad(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wd(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ti(i){return i!==""}function Ua(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ia(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rd=/^[ \t]*#include +<([\w\d./]+)>/gm;function rs(i){return i.replace(Rd,Pd)}const Cd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Pd(i,e){let t=Oe[e];if(t===void 0){const n=Cd.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rs(t)}const Ld=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(i){return i.replace(Ld,Dd)}function Dd(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fa(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ud(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$a?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$o?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function Id(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pn:case si:e="ENVMAP_TYPE_CUBE";break;case or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case si:e="ENVMAP_MODE_REFRACTION";break}return e}function Fd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ja:e="ENVMAP_BLENDING_MULTIPLY";break;case Ml:e="ENVMAP_BLENDING_MIX";break;case El:e="ENVMAP_BLENDING_ADD";break}return e}function Od(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bd(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ud(t),c=Id(t),h=Nd(t),f=Fd(t),d=Od(t),m=t.isWebGL2?"":Td(t),v=bd(t),_=Ad(s),p=r.createProgram();let u,b,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ti).join(`
`),u.length>0&&(u+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ti).join(`
`),b.length>0&&(b+=`
`)):(u=[Fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ti).join(`
`),b=[m,Fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==gn?yd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Ed("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ti).join(`
`)),o=rs(o),o=Ua(o,t),o=Ia(o,t),a=rs(a),a=Ua(a,t),a=Ia(a,t),o=Na(o),a=Na(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const A=E+u+o,D=E+b+a,C=La(r,r.VERTEX_SHADER,A),w=La(r,r.FRAGMENT_SHADER,D);r.attachShader(p,C),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function Z(k){if(i.debug.checkShaderErrors){const re=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(C).trim(),B=r.getShaderInfoLog(w).trim();let G=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,C,w);else{const W=Da(r,C,"vertex"),X=Da(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+W+`
`+X)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(L===""||B==="")&&(Y=!1);Y&&(k.diagnostics={runnable:G,programLog:re,vertexShader:{log:L,prefix:u},fragmentShader:{log:B,prefix:b}})}r.deleteShader(C),r.deleteShader(w),S=new Ji(r,p),T=wd(r,p)}let S;this.getUniforms=function(){return S===void 0&&Z(this),S};let T;this.getAttributes=function(){return T===void 0&&Z(this),T};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(p,vd)),V},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=w,this}let zd=0;class Hd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gd(e),t.set(e,n)),n}}class Gd{constructor(e){this.id=zd++,this.code=e,this.usedTimes=0}}function Vd(i,e,t,n,r,s,o){const a=new go,l=new Hd,c=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,T,V,k,re){const L=k.fog,B=re.geometry,G=S.isMeshStandardMaterial?k.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),W=Y&&Y.mapping===or?Y.image.height:null,X=v[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ie=q!==void 0?q.length:0;let se=0;B.morphAttributes.position!==void 0&&(se=1),B.morphAttributes.normal!==void 0&&(se=2),B.morphAttributes.color!==void 0&&(se=3);let H,j,ce,ve;if(X){const nt=Wt[X];H=nt.vertexShader,j=nt.fragmentShader}else H=S.vertexShader,j=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const ge=i.getRenderTarget(),Le=re.isInstancedMesh===!0,De=re.isBatchedMesh===!0,be=!!S.map,ke=!!S.matcap,N=!!Y,ht=!!S.aoMap,Ee=!!S.lightMap,Re=!!S.bumpMap,pe=!!S.normalMap,Ke=!!S.displacementMap,Ie=!!S.emissiveMap,M=!!S.metalnessMap,g=!!S.roughnessMap,I=S.anisotropy>0,Q=S.clearcoat>0,$=S.iridescence>0,ee=S.sheen>0,me=S.transmission>0,le=I&&!!S.anisotropyMap,de=Q&&!!S.clearcoatMap,Te=Q&&!!S.clearcoatNormalMap,Ne=Q&&!!S.clearcoatRoughnessMap,K=$&&!!S.iridescenceMap,qe=$&&!!S.iridescenceThicknessMap,ze=ee&&!!S.sheenColorMap,Ce=ee&&!!S.sheenRoughnessMap,Se=!!S.specularMap,ue=!!S.specularColorMap,y=!!S.specularIntensityMap,te=me&&!!S.transmissionMap,_e=me&&!!S.thicknessMap,fe=!!S.gradientMap,J=!!S.alphaMap,R=S.alphaTest>0,ne=!!S.alphaHash,oe=!!S.extensions,Ae=!!B.attributes.uv1,ye=!!B.attributes.uv2,We=!!B.attributes.uv3;let Xe=gn;return S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Xe=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:j,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:De,instancing:Le,instancingColor:Le&&re.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:an,map:be,matcap:ke,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:W,aoMap:ht,lightMap:Ee,bumpMap:Re,normalMap:pe,displacementMap:d&&Ke,emissiveMap:Ie,normalMapObjectSpace:pe&&S.normalMapType===Hl,normalMapTangentSpace:pe&&S.normalMapType===zl,metalnessMap:M,roughnessMap:g,anisotropy:I,anisotropyMap:le,clearcoat:Q,clearcoatMap:de,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ne,iridescence:$,iridescenceMap:K,iridescenceThicknessMap:qe,sheen:ee,sheenColorMap:ze,sheenRoughnessMap:Ce,specularMap:Se,specularColorMap:ue,specularIntensityMap:y,transmission:me,transmissionMap:te,thicknessMap:_e,gradientMap:fe,opaque:S.transparent===!1&&S.blending===ii,alphaMap:J,alphaTest:R,alphaHash:ne,combine:S.combine,mapUv:be&&_(S.map.channel),aoMapUv:ht&&_(S.aoMap.channel),lightMapUv:Ee&&_(S.lightMap.channel),bumpMapUv:Re&&_(S.bumpMap.channel),normalMapUv:pe&&_(S.normalMap.channel),displacementMapUv:Ke&&_(S.displacementMap.channel),emissiveMapUv:Ie&&_(S.emissiveMap.channel),metalnessMapUv:M&&_(S.metalnessMap.channel),roughnessMapUv:g&&_(S.roughnessMap.channel),anisotropyMapUv:le&&_(S.anisotropyMap.channel),clearcoatMapUv:de&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Te&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(S.sheenRoughnessMap.channel),specularMapUv:Se&&_(S.specularMap.channel),specularColorMapUv:ue&&_(S.specularColorMap.channel),specularIntensityMapUv:y&&_(S.specularIntensityMap.channel),transmissionMapUv:te&&_(S.transmissionMap.channel),thicknessMapUv:_e&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pe||I),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:ye,vertexUv3s:We,pointsUvs:re.isPoints===!0&&!!B.attributes.uv&&(be||J),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:be&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===Ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===en,flipSided:S.side===yt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:oe&&S.extensions.derivatives===!0,extensionFragDepth:oe&&S.extensions.fragDepth===!0,extensionDrawBuffers:oe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const V in S.defines)T.push(V),T.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(b(T,S),E(T,S),T.push(i.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function b(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function E(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function A(S){const T=v[S.type];let V;if(T){const k=Wt[T];V=ar.clone(k.uniforms)}else V=S.uniforms;return V}function D(S,T){let V;for(let k=0,re=c.length;k<re;k++){const L=c[k];if(L.cacheKey===T){V=L,++V.usedTimes;break}}return V===void 0&&(V=new Bd(i,T,S,s),c.push(V)),V}function C(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function Z(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:A,acquireProgram:D,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:Z}}function kd(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Wd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Oa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ba(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,m,v,_,p){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function a(f,d,m,v,_,p){const u=o(f,d,m,v,_,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(f,d,m,v,_,p){const u=o(f,d,m,v,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||Wd),n.length>1&&n.sort(d||Oa),r.length>1&&r.sort(d||Oa)}function h(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Xd(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ba,i.set(n,[o])):r>=s.length?(o=new Ba,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Be};break;case"SpotLight":t={position:new P,direction:new P,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function qd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jd=0;function Kd(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zd(i,e){const t=new Yd,n=qd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);const s=new P,o=new at,a=new at;function l(h,f){let d=0,m=0,v=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let _=0,p=0,u=0,b=0,E=0,A=0,D=0,C=0,w=0,Z=0,S=0;h.sort(Kd);const T=f===!0?Math.PI:1;for(let k=0,re=h.length;k<re;k++){const L=h[k],B=L.color,G=L.intensity,Y=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=B.r*G*T,m+=B.g*G*T,v+=B.b*G*T;else if(L.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(L.sh.coefficients[X],G);S++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const q=L.shadow,ie=n.get(L);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,r.directionalShadow[_]=ie,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=L.shadow.matrix,A++}r.directional[_]=X,_++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(G*T),X.distance=Y,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,r.spot[u]=X;const q=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,q.updateMatrices(L),L.castShadow&&Z++),r.spotLightMatrix[u]=q.matrix,L.castShadow){const ie=n.get(L);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,r.spotShadow[u]=ie,r.spotShadowMap[u]=W,C++}u++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(B).multiplyScalar(G),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),r.rectArea[b]=X,b++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*T),X.distance=L.distance,X.decay=L.decay,L.castShadow){const q=L.shadow,ie=n.get(L);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,ie.shadowCameraNear=q.camera.near,ie.shadowCameraFar=q.camera.far,r.pointShadow[p]=ie,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=L.shadow.matrix,D++}r.point[p]=X,p++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(G*T),X.groundColor.copy(L.groundColor).multiplyScalar(G*T),r.hemi[E]=X,E++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==_||V.pointLength!==p||V.spotLength!==u||V.rectAreaLength!==b||V.hemiLength!==E||V.numDirectionalShadows!==A||V.numPointShadows!==D||V.numSpotShadows!==C||V.numSpotMaps!==w||V.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=b,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+w-Z,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=Z,r.numLightProbes=S,V.directionalLength=_,V.pointLength=p,V.spotLength=u,V.rectAreaLength=b,V.hemiLength=E,V.numDirectionalShadows=A,V.numPointShadows=D,V.numSpotShadows=C,V.numSpotMaps=w,V.numLightProbes=S,r.version=jd++)}function c(h,f){let d=0,m=0,v=0,_=0,p=0;const u=f.matrixWorldInverse;for(let b=0,E=h.length;b<E;b++){const A=h[b];if(A.isDirectionalLight){const D=r.directional[d];D.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(u),d++}else if(A.isSpotLight){const D=r.spot[v];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(u),D.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(u),v++}else if(A.isRectAreaLight){const D=r.rectArea[_];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(u),a.identity(),o.copy(A.matrixWorld),o.premultiply(u),a.extractRotation(o),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(u),m++}else if(A.isHemisphereLight){const D=r.hemi[p];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function za(i,e){const t=new Zd(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function $d(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new za(i,e),t.set(s,[l])):o>=a.length?(l=new za(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Jd extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ol,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qd extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ep=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tp=`uniform sampler2D shadow_pass;
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
}`;function np(i,e,t){let n=new fs;const r=new Me,s=new Me,o=new $e,a=new Jd({depthPacking:Bl}),l=new Qd,c={},h=t.maxTextureSize,f={[sn]:yt,[yt]:sn,[en]:en},d=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:ep,fragmentShader:tp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new on;v.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let u=this.type;this.render=function(C,w,Z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),T=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),k=i.state;k.setBlending(nn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const re=u!==Qt&&this.type===Qt,L=u===Qt&&this.type!==Qt;for(let B=0,G=C.length;B<G;B++){const Y=C[B],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const X=W.getFrameExtents();if(r.multiply(X),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||re===!0||L===!0){const ie=this.type!==Qt?{minFilter:St,magFilter:St}:{};W.map!==null&&W.map.dispose(),W.map=new Gt(r.x,r.y,ie),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const q=W.getViewportCount();for(let ie=0;ie<q;ie++){const se=W.getViewport(ie);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),k.viewport(o),W.updateMatrices(Y,ie),n=W.getFrustum(),A(w,Z,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Qt&&b(W,Z),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,T,V)};function b(C,w){const Z=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Gt(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,Z,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,Z,m,_,null)}function E(C,w,Z,S){let T=null;const V=Z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)T=V;else if(T=Z.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=T.uuid,re=w.uuid;let L=c[k];L===void 0&&(L={},c[k]=L);let B=L[re];B===void 0&&(B=T.clone(),L[re]=B,w.addEventListener("dispose",D)),T=B}if(T.visible=w.visible,T.wireframe=w.wireframe,S===Qt?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,Z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=i.properties.get(T);k.light=Z}return T}function A(C,w,Z,S,T){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===Qt)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld);const re=e.update(C),L=C.material;if(Array.isArray(L)){const B=re.groups;for(let G=0,Y=B.length;G<Y;G++){const W=B[G],X=L[W.materialIndex];if(X&&X.visible){const q=E(C,X,S,T);C.onBeforeShadow(i,C,w,Z,re,q,W),i.renderBufferDirect(Z,null,re,q,C,W),C.onAfterShadow(i,C,w,Z,re,q,W)}}}else if(L.visible){const B=E(C,L,S,T);C.onBeforeShadow(i,C,w,Z,re,B,null),i.renderBufferDirect(Z,null,re,B,C,null),C.onAfterShadow(i,C,w,Z,re,B,null)}}const k=C.children;for(let re=0,L=k.length;re<L;re++)A(k[re],w,Z,S,T)}function D(C){C.target.removeEventListener("dispose",D);for(const Z in c){const S=c[Z],T=C.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function ip(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const ne=new $e;let oe=null;const Ae=new $e(0,0,0,0);return{setMask:function(ye){oe!==ye&&!R&&(i.colorMask(ye,ye,ye,ye),oe=ye)},setLocked:function(ye){R=ye},setClear:function(ye,We,Xe,Qe,nt){nt===!0&&(ye*=Qe,We*=Qe,Xe*=Qe),ne.set(ye,We,Xe,Qe),Ae.equals(ne)===!1&&(i.clearColor(ye,We,Xe,Qe),Ae.copy(ne))},reset:function(){R=!1,oe=null,Ae.set(-1,0,0,0)}}}function s(){let R=!1,ne=null,oe=null,Ae=null;return{setTest:function(ye){ye?De(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ye){ne!==ye&&!R&&(i.depthMask(ye),ne=ye)},setFunc:function(ye){if(oe!==ye){switch(ye){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=ye}},setLocked:function(ye){R=ye},setClear:function(ye){Ae!==ye&&(i.clearDepth(ye),Ae=ye)},reset:function(){R=!1,ne=null,oe=null,Ae=null}}}function o(){let R=!1,ne=null,oe=null,Ae=null,ye=null,We=null,Xe=null,Qe=null,nt=null;return{setTest:function(Ye){R||(Ye?De(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Ye){ne!==Ye&&!R&&(i.stencilMask(Ye),ne=Ye)},setFunc:function(Ye,rt,Vt){(oe!==Ye||Ae!==rt||ye!==Vt)&&(i.stencilFunc(Ye,rt,Vt),oe=Ye,Ae=rt,ye=Vt)},setOp:function(Ye,rt,Vt){(We!==Ye||Xe!==rt||Qe!==Vt)&&(i.stencilOp(Ye,rt,Vt),We=Ye,Xe=rt,Qe=Vt)},setLocked:function(Ye){R=Ye},setClear:function(Ye){nt!==Ye&&(i.clearStencil(Ye),nt=Ye)},reset:function(){R=!1,ne=null,oe=null,Ae=null,ye=null,We=null,Xe=null,Qe=null,nt=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,_=[],p=null,u=!1,b=null,E=null,A=null,D=null,C=null,w=null,Z=null,S=new Be(0,0,0),T=0,V=!1,k=null,re=null,L=null,B=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=X>=2);let ie=null,se={};const H=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ce=new $e().fromArray(H),ve=new $e().fromArray(j);function ge(R,ne,oe,Ae){const ye=new Uint8Array(4),We=i.createTexture();i.bindTexture(R,We),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<oe;Xe++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(ne,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ne+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return We}const Le={};Le[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(i.DEPTH_TEST),l.setFunc(Qi),Ie(!1),M(Es),De(i.CULL_FACE),pe(nn);function De(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function be(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function ke(R,ne){return m[R]!==ne?(i.bindFramebuffer(R,ne),m[R]=ne,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ne),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ne)),!0):!1}function N(R,ne){let oe=_,Ae=!1;if(R)if(oe=v.get(ne),oe===void 0&&(oe=[],v.set(ne,oe)),R.isWebGLMultipleRenderTargets){const ye=R.texture;if(oe.length!==ye.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let We=0,Xe=ye.length;We<Xe;We++)oe[We]=i.COLOR_ATTACHMENT0+We;oe.length=ye.length,Ae=!0}}else oe[0]!==i.COLOR_ATTACHMENT0&&(oe[0]=i.COLOR_ATTACHMENT0,Ae=!0);else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ae=!0);Ae&&(t.isWebGL2?i.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function ht(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const Ee={[bn]:i.FUNC_ADD,[Qo]:i.FUNC_SUBTRACT,[el]:i.FUNC_REVERSE_SUBTRACT};if(n)Ee[bs]=i.MIN,Ee[As]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ee[bs]=R.MIN_EXT,Ee[As]=R.MAX_EXT)}const Re={[tl]:i.ZERO,[nl]:i.ONE,[il]:i.SRC_COLOR,[Kr]:i.SRC_ALPHA,[cl]:i.SRC_ALPHA_SATURATE,[ol]:i.DST_COLOR,[sl]:i.DST_ALPHA,[rl]:i.ONE_MINUS_SRC_COLOR,[Zr]:i.ONE_MINUS_SRC_ALPHA,[ll]:i.ONE_MINUS_DST_COLOR,[al]:i.ONE_MINUS_DST_ALPHA,[ul]:i.CONSTANT_COLOR,[hl]:i.ONE_MINUS_CONSTANT_COLOR,[fl]:i.CONSTANT_ALPHA,[dl]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(R,ne,oe,Ae,ye,We,Xe,Qe,nt,Ye){if(R===nn){u===!0&&(be(i.BLEND),u=!1);return}if(u===!1&&(De(i.BLEND),u=!0),R!==Jo){if(R!==b||Ye!==V){if((E!==bn||C!==bn)&&(i.blendEquation(i.FUNC_ADD),E=bn,C=bn),Ye)switch(R){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.ONE,i.ONE);break;case ys:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ys:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ts:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}A=null,D=null,w=null,Z=null,S.set(0,0,0),T=0,b=R,V=Ye}return}ye=ye||ne,We=We||oe,Xe=Xe||Ae,(ne!==E||ye!==C)&&(i.blendEquationSeparate(Ee[ne],Ee[ye]),E=ne,C=ye),(oe!==A||Ae!==D||We!==w||Xe!==Z)&&(i.blendFuncSeparate(Re[oe],Re[Ae],Re[We],Re[Xe]),A=oe,D=Ae,w=We,Z=Xe),(Qe.equals(S)===!1||nt!==T)&&(i.blendColor(Qe.r,Qe.g,Qe.b,nt),S.copy(Qe),T=nt),b=R,V=!1}function Ke(R,ne){R.side===en?be(i.CULL_FACE):De(i.CULL_FACE);let oe=R.side===yt;ne&&(oe=!oe),Ie(oe),R.blending===ii&&R.transparent===!1?pe(nn):pe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Ae=R.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),I(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(R){k!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),k=R)}function M(R){R!==Ko?(De(i.CULL_FACE),R!==re&&(R===Es?i.cullFace(i.BACK):R===Zo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),re=R}function g(R){R!==L&&(W&&i.lineWidth(R),L=R)}function I(R,ne,oe){R?(De(i.POLYGON_OFFSET_FILL),(B!==ne||G!==oe)&&(i.polygonOffset(ne,oe),B=ne,G=oe)):be(i.POLYGON_OFFSET_FILL)}function Q(R){R?De(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function $(R){R===void 0&&(R=i.TEXTURE0+Y-1),ie!==R&&(i.activeTexture(R),ie=R)}function ee(R,ne,oe){oe===void 0&&(ie===null?oe=i.TEXTURE0+Y-1:oe=ie);let Ae=se[oe];Ae===void 0&&(Ae={type:void 0,texture:void 0},se[oe]=Ae),(Ae.type!==R||Ae.texture!==ne)&&(ie!==oe&&(i.activeTexture(oe),ie=oe),i.bindTexture(R,ne||Le[R]),Ae.type=R,Ae.texture=ne)}function me(){const R=se[ie];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function y(R){ce.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ce.copy(R))}function te(R){ve.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ve.copy(R))}function _e(R,ne){let oe=f.get(ne);oe===void 0&&(oe=new WeakMap,f.set(ne,oe));let Ae=oe.get(R);Ae===void 0&&(Ae=i.getUniformBlockIndex(ne,R.name),oe.set(R,Ae))}function fe(R,ne){const Ae=f.get(ne).get(R);h.get(ne)!==Ae&&(i.uniformBlockBinding(ne,Ae,R.__bindingPointIndex),h.set(ne,Ae))}function J(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ie=null,se={},m={},v=new WeakMap,_=[],p=null,u=!1,b=null,E=null,A=null,D=null,C=null,w=null,Z=null,S=new Be(0,0,0),T=0,V=!1,k=null,re=null,L=null,B=null,G=null,ce.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:be,bindFramebuffer:ke,drawBuffers:N,useProgram:ht,setBlending:pe,setMaterial:Ke,setFlipSided:Ie,setCullFace:M,setLineWidth:g,setPolygonOffset:I,setScissorTest:Q,activeTexture:$,bindTexture:ee,unbindTexture:me,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:Se,texImage3D:ue,updateUBOMapping:_e,uniformBlockBinding:fe,texStorage2D:ze,texStorage3D:Ce,texSubImage2D:Te,texSubImage3D:Ne,compressedTexSubImage2D:K,compressedTexSubImage3D:qe,scissor:y,viewport:te,reset:J}}function rp(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,g){return m?new OffscreenCanvas(M,g):sr("canvas")}function _(M,g,I,Q){let $=1;if((M.width>Q||M.height>Q)&&($=Q/Math.max(M.width,M.height)),$<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ee=g?rr:Math.floor,me=ee($*M.width),le=ee($*M.height);f===void 0&&(f=v(me,le));const de=I?v(me,le):f;return de.width=me,de.height=le,de.getContext("2d").drawImage(M,0,0,me,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+me+"x"+le+")."),de}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return ns(M.width)&&ns(M.height)}function u(M){return a?!1:M.wrapS!==zt||M.wrapT!==zt||M.minFilter!==St&&M.minFilter!==Dt}function b(M,g){return M.generateMipmaps&&g&&M.minFilter!==St&&M.minFilter!==Dt}function E(M){i.generateMipmap(M)}function A(M,g,I,Q,$=!1){if(a===!1)return g;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ee=g;if(g===i.RED&&(I===i.FLOAT&&(ee=i.R32F),I===i.HALF_FLOAT&&(ee=i.R16F),I===i.UNSIGNED_BYTE&&(ee=i.R8)),g===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(ee=i.R8UI),I===i.UNSIGNED_SHORT&&(ee=i.R16UI),I===i.UNSIGNED_INT&&(ee=i.R32UI),I===i.BYTE&&(ee=i.R8I),I===i.SHORT&&(ee=i.R16I),I===i.INT&&(ee=i.R32I)),g===i.RG&&(I===i.FLOAT&&(ee=i.RG32F),I===i.HALF_FLOAT&&(ee=i.RG16F),I===i.UNSIGNED_BYTE&&(ee=i.RG8)),g===i.RGBA){const me=$?er:je.getTransfer(Q);I===i.FLOAT&&(ee=i.RGBA32F),I===i.HALF_FLOAT&&(ee=i.RGBA16F),I===i.UNSIGNED_BYTE&&(ee=me===Ze?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function D(M,g,I){return b(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==St&&M.minFilter!==Dt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function C(M){return M===St||M===ws||M===gr?i.NEAREST:i.LINEAR}function w(M){const g=M.target;g.removeEventListener("dispose",w),S(g),g.isVideoTexture&&h.delete(g)}function Z(M){const g=M.target;g.removeEventListener("dispose",Z),V(g)}function S(M){const g=n.get(M);if(g.__webglInit===void 0)return;const I=M.source,Q=d.get(I);if(Q){const $=Q[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(M),Object.keys(Q).length===0&&d.delete(I)}n.remove(M)}function T(M){const g=n.get(M);i.deleteTexture(g.__webglTexture);const I=M.source,Q=d.get(I);delete Q[g.__cacheKey],o.memory.textures--}function V(M){const g=M.texture,I=n.get(M),Q=n.get(g);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(I.__webglFramebuffer[$]))for(let ee=0;ee<I.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(I.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(I.__webglFramebuffer[$]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[$])}else{if(Array.isArray(I.__webglFramebuffer))for(let $=0;$<I.__webglFramebuffer.length;$++)i.deleteFramebuffer(I.__webglFramebuffer[$]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let $=0;$<I.__webglColorRenderbuffer.length;$++)I.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[$]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let $=0,ee=g.length;$<ee;$++){const me=n.get(g[$]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(g[$])}n.remove(g),n.remove(M)}let k=0;function re(){k=0}function L(){const M=k;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),k+=1,M}function B(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function G(M,g){const I=n.get(M);if(M.isVideoTexture&&Ke(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(I,M,g);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+g)}function Y(M,g){const I=n.get(M);if(M.version>0&&I.__version!==M.version){ce(I,M,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+g)}function W(M,g){const I=n.get(M);if(M.version>0&&I.__version!==M.version){ce(I,M,g);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+g)}function X(M,g){const I=n.get(M);if(M.version>0&&I.__version!==M.version){ve(I,M,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+g)}const q={[Qr]:i.REPEAT,[zt]:i.CLAMP_TO_EDGE,[es]:i.MIRRORED_REPEAT},ie={[St]:i.NEAREST,[ws]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},se={[Gl]:i.NEVER,[ql]:i.ALWAYS,[Vl]:i.LESS,[co]:i.LEQUAL,[kl]:i.EQUAL,[Yl]:i.GEQUAL,[Wl]:i.GREATER,[Xl]:i.NOTEQUAL};function H(M,g,I){if(I?(i.texParameteri(M,i.TEXTURE_WRAP_S,q[g.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,q[g.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,q[g.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ie[g.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ie[g.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==zt||g.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,C(g.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,C(g.minFilter)),g.minFilter!==St&&g.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===St||g.minFilter!==gr&&g.minFilter!==ai||g.type===mn&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===rn&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(i.texParameterf(M,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function j(M,g){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",w));const Q=g.source;let $=d.get(Q);$===void 0&&($={},d.set(Q,$));const ee=B(g);if(ee!==M.__cacheKey){$[ee]===void 0&&($[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),$[ee].usedTimes++;const me=$[M.__cacheKey];me!==void 0&&($[M.__cacheKey].usedTimes--,me.usedTimes===0&&T(g)),M.__cacheKey=ee,M.__webglTexture=$[ee].texture}return I}function ce(M,g,I){let Q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Q=i.TEXTURE_3D);const $=j(M,g),ee=g.source;t.bindTexture(Q,M.__webglTexture,i.TEXTURE0+I);const me=n.get(ee);if(ee.version!==me.__version||$===!0){t.activeTexture(i.TEXTURE0+I);const le=je.getPrimaries(je.workingColorSpace),de=g.colorSpace===Ut?null:je.getPrimaries(g.colorSpace),Te=g.colorSpace===Ut||le===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ne=u(g)&&p(g.image)===!1;let K=_(g.image,Ne,!1,r.maxTextureSize);K=Ie(g,K);const qe=p(K)||a,ze=s.convert(g.format,g.colorSpace);let Ce=s.convert(g.type),Se=A(g.internalFormat,ze,Ce,g.colorSpace,g.isVideoTexture);H(Q,g,qe);let ue;const y=g.mipmaps,te=a&&g.isVideoTexture!==!0&&Se!==oo,_e=me.__version===void 0||$===!0,fe=D(g,K,qe);if(g.isDepthTexture)Se=i.DEPTH_COMPONENT,a?g.type===mn?Se=i.DEPTH_COMPONENT32F:g.type===pn?Se=i.DEPTH_COMPONENT24:g.type===wn?Se=i.DEPTH24_STENCIL8:Se=i.DEPTH_COMPONENT16:g.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Rn&&Se===i.DEPTH_COMPONENT&&g.type!==os&&g.type!==pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=pn,Ce=s.convert(g.type)),g.format===oi&&Se===i.DEPTH_COMPONENT&&(Se=i.DEPTH_STENCIL,g.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=wn,Ce=s.convert(g.type))),_e&&(te?t.texStorage2D(i.TEXTURE_2D,1,Se,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Se,K.width,K.height,0,ze,Ce,null));else if(g.isDataTexture)if(y.length>0&&qe){te&&_e&&t.texStorage2D(i.TEXTURE_2D,fe,Se,y[0].width,y[0].height);for(let J=0,R=y.length;J<R;J++)ue=y[J],te?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,ze,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,J,Se,ue.width,ue.height,0,ze,Ce,ue.data);g.generateMipmaps=!1}else te?(_e&&t.texStorage2D(i.TEXTURE_2D,fe,Se,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,ze,Ce,K.data)):t.texImage2D(i.TEXTURE_2D,0,Se,K.width,K.height,0,ze,Ce,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){te&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Se,y[0].width,y[0].height,K.depth);for(let J=0,R=y.length;J<R;J++)ue=y[J],g.format!==Ht?ze!==null?te?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,K.depth,ze,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Se,ue.width,ue.height,K.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,K.depth,ze,Ce,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Se,ue.width,ue.height,K.depth,0,ze,Ce,ue.data)}else{te&&_e&&t.texStorage2D(i.TEXTURE_2D,fe,Se,y[0].width,y[0].height);for(let J=0,R=y.length;J<R;J++)ue=y[J],g.format!==Ht?ze!==null?te?t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,ze,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Se,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,ze,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,J,Se,ue.width,ue.height,0,ze,Ce,ue.data)}else if(g.isDataArrayTexture)te?(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Se,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ze,Ce,K.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,K.width,K.height,K.depth,0,ze,Ce,K.data);else if(g.isData3DTexture)te?(_e&&t.texStorage3D(i.TEXTURE_3D,fe,Se,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ze,Ce,K.data)):t.texImage3D(i.TEXTURE_3D,0,Se,K.width,K.height,K.depth,0,ze,Ce,K.data);else if(g.isFramebufferTexture){if(_e)if(te)t.texStorage2D(i.TEXTURE_2D,fe,Se,K.width,K.height);else{let J=K.width,R=K.height;for(let ne=0;ne<fe;ne++)t.texImage2D(i.TEXTURE_2D,ne,Se,J,R,0,ze,Ce,null),J>>=1,R>>=1}}else if(y.length>0&&qe){te&&_e&&t.texStorage2D(i.TEXTURE_2D,fe,Se,y[0].width,y[0].height);for(let J=0,R=y.length;J<R;J++)ue=y[J],te?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ze,Ce,ue):t.texImage2D(i.TEXTURE_2D,J,Se,ze,Ce,ue);g.generateMipmaps=!1}else te?(_e&&t.texStorage2D(i.TEXTURE_2D,fe,Se,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Ce,K)):t.texImage2D(i.TEXTURE_2D,0,Se,ze,Ce,K);b(g,qe)&&E(Q),me.__version=ee.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ve(M,g,I){if(g.image.length!==6)return;const Q=j(M,g),$=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+I);const ee=n.get($);if($.version!==ee.__version||Q===!0){t.activeTexture(i.TEXTURE0+I);const me=je.getPrimaries(je.workingColorSpace),le=g.colorSpace===Ut?null:je.getPrimaries(g.colorSpace),de=g.colorSpace===Ut||me===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Te=g.isCompressedTexture||g.image[0].isCompressedTexture,Ne=g.image[0]&&g.image[0].isDataTexture,K=[];for(let J=0;J<6;J++)!Te&&!Ne?K[J]=_(g.image[J],!1,!0,r.maxCubemapSize):K[J]=Ne?g.image[J].image:g.image[J],K[J]=Ie(g,K[J]);const qe=K[0],ze=p(qe)||a,Ce=s.convert(g.format,g.colorSpace),Se=s.convert(g.type),ue=A(g.internalFormat,Ce,Se,g.colorSpace),y=a&&g.isVideoTexture!==!0,te=ee.__version===void 0||Q===!0;let _e=D(g,qe,ze);H(i.TEXTURE_CUBE_MAP,g,ze);let fe;if(Te){y&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,ue,qe.width,qe.height);for(let J=0;J<6;J++){fe=K[J].mipmaps;for(let R=0;R<fe.length;R++){const ne=fe[R];g.format!==Ht?Ce!==null?y?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,R,0,0,ne.width,ne.height,Ce,ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,R,ue,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):y?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,R,0,0,ne.width,ne.height,Ce,Se,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,R,ue,ne.width,ne.height,0,Ce,Se,ne.data)}}}else{fe=g.mipmaps,y&&te&&(fe.length>0&&_e++,t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,ue,K[0].width,K[0].height));for(let J=0;J<6;J++)if(Ne){y?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,K[J].width,K[J].height,Ce,Se,K[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ue,K[J].width,K[J].height,0,Ce,Se,K[J].data);for(let R=0;R<fe.length;R++){const oe=fe[R].image[J].image;y?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,R+1,0,0,oe.width,oe.height,Ce,Se,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,R+1,ue,oe.width,oe.height,0,Ce,Se,oe.data)}}else{y?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ce,Se,K[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ue,Ce,Se,K[J]);for(let R=0;R<fe.length;R++){const ne=fe[R];y?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,R+1,0,0,Ce,Se,ne.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,R+1,ue,Ce,Se,ne.image[J])}}}b(g,ze)&&E(i.TEXTURE_CUBE_MAP),ee.__version=$.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ge(M,g,I,Q,$,ee){const me=s.convert(I.format,I.colorSpace),le=s.convert(I.type),de=A(I.internalFormat,me,le,I.colorSpace);if(!n.get(g).__hasExternalTextures){const Ne=Math.max(1,g.width>>ee),K=Math.max(1,g.height>>ee);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ee,de,Ne,K,g.depth,0,me,le,null):t.texImage2D($,ee,de,Ne,K,0,me,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),pe(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,n.get(I).__webglTexture,0,Re(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,n.get(I).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(M,g,I){if(i.bindRenderbuffer(i.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(I||pe(g)){const $=g.depthTexture;$&&$.isDepthTexture&&($.type===mn?Q=i.DEPTH_COMPONENT32F:$.type===pn&&(Q=i.DEPTH_COMPONENT24));const ee=Re(g);pe(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Q,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Q,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const Q=Re(g);I&&pe(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,g.width,g.height):pe(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const Q=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let $=0;$<Q.length;$++){const ee=Q[$],me=s.convert(ee.format,ee.colorSpace),le=s.convert(ee.type),de=A(ee.internalFormat,me,le,ee.colorSpace),Te=Re(g);I&&pe(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,de,g.width,g.height):pe(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,de,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,de,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G(g.depthTexture,0);const Q=n.get(g.depthTexture).__webglTexture,$=Re(g);if(g.depthTexture.format===Rn)pe(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(g.depthTexture.format===oi)pe(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function be(M){const g=n.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");De(g.__webglFramebuffer,M)}else if(I){g.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Q]),g.__webglDepthbuffer[Q]=i.createRenderbuffer(),Le(g.__webglDepthbuffer[Q],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),Le(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(M,g,I){const Q=n.get(M);g!==void 0&&ge(Q.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&be(M)}function N(M){const g=M.texture,I=n.get(M),Q=n.get(g);M.addEventListener("dispose",Z),M.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=g.version,o.memory.textures++);const $=M.isWebGLCubeRenderTarget===!0,ee=M.isWebGLMultipleRenderTargets===!0,me=p(M)||a;if($){I.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[le]=[];for(let de=0;de<g.mipmaps.length;de++)I.__webglFramebuffer[le][de]=i.createFramebuffer()}else I.__webglFramebuffer[le]=i.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)I.__webglFramebuffer[le]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(ee)if(r.drawBuffers){const le=M.texture;for(let de=0,Te=le.length;de<Te;de++){const Ne=n.get(le[de]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&pe(M)===!1){const le=ee?g:[g];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const Te=le[de];I.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[de]);const Ne=s.convert(Te.format,Te.colorSpace),K=s.convert(Te.type),qe=A(Te.internalFormat,Ne,K,Te.colorSpace,M.isXRRenderTarget===!0),ze=Re(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,qe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,I.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),H(i.TEXTURE_CUBE_MAP,g,me);for(let le=0;le<6;le++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)ge(I.__webglFramebuffer[le][de],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else ge(I.__webglFramebuffer[le],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);b(g,me)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const le=M.texture;for(let de=0,Te=le.length;de<Te;de++){const Ne=le[de],K=n.get(Ne);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),H(i.TEXTURE_2D,Ne,me),ge(I.__webglFramebuffer,M,Ne,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),b(Ne,me)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?le=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,Q.__webglTexture),H(le,g,me),a&&g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)ge(I.__webglFramebuffer[de],M,g,i.COLOR_ATTACHMENT0,le,de);else ge(I.__webglFramebuffer,M,g,i.COLOR_ATTACHMENT0,le,0);b(g,me)&&E(le),t.unbindTexture()}M.depthBuffer&&be(M)}function ht(M){const g=p(M)||a,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0,$=I.length;Q<$;Q++){const ee=I[Q];if(b(ee,g)){const me=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(ee).__webglTexture;t.bindTexture(me,le),E(me),t.unbindTexture()}}}function Ee(M){if(a&&M.samples>0&&pe(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,Q=M.height;let $=i.COLOR_BUFFER_BIT;const ee=[],me=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(M),de=M.isWebGLMultipleRenderTargets===!0;if(de)for(let Te=0;Te<g.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Te=0;Te<g.length;Te++){ee.push(i.COLOR_ATTACHMENT0+Te),M.depthBuffer&&ee.push(me);const Ne=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ne===!1&&(M.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Te]),Ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),de){const K=n.get(g[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,I,Q,0,0,I,Q,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Te=0;Te<g.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,le.__webglColorRenderbuffer[Te]);const Ne=n.get(g[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Re(M){return Math.min(r.maxSamples,M.samples)}function pe(M){const g=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ke(M){const g=o.render.frame;h.get(M)!==g&&(h.set(M,g),M.update())}function Ie(M,g){const I=M.colorSpace,Q=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===ts||I!==an&&I!==Ut&&(je.getTransfer(I)===Ze?a===!1?e.has("EXT_sRGB")===!0&&Q===Ht?(M.format=ts,M.minFilter=Dt,M.generateMipmaps=!1):g=ho.sRGBToLinear(g):(Q!==Ht||$!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}this.allocateTextureUnit=L,this.resetTextureUnits=re,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=ke,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=pe}function sp(i,e,t){const n=t.isWebGL2;function r(s,o=Ut){let a;const l=je.getTransfer(o);if(s===_n)return i.UNSIGNED_BYTE;if(s===no)return i.UNSIGNED_SHORT_4_4_4_4;if(s===io)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Cl)return i.BYTE;if(s===Pl)return i.SHORT;if(s===os)return i.UNSIGNED_SHORT;if(s===to)return i.INT;if(s===pn)return i.UNSIGNED_INT;if(s===mn)return i.FLOAT;if(s===rn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ll)return i.ALPHA;if(s===Ht)return i.RGBA;if(s===Dl)return i.LUMINANCE;if(s===Ul)return i.LUMINANCE_ALPHA;if(s===Rn)return i.DEPTH_COMPONENT;if(s===oi)return i.DEPTH_STENCIL;if(s===ts)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Il)return i.RED;if(s===ro)return i.RED_INTEGER;if(s===Nl)return i.RG;if(s===so)return i.RG_INTEGER;if(s===ao)return i.RGBA_INTEGER;if(s===_r||s===vr||s===xr||s===Sr)if(l===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===_r)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===_r)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rs||s===Cs||s===Ps||s===Ls)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Rs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ps)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ls)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===oo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ds||s===Us)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ds)return l===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Us)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Is||s===Ns||s===Fs||s===Os||s===Bs||s===zs||s===Hs||s===Gs||s===Vs||s===ks||s===Ws||s===Xs||s===Ys||s===qs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Is)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ns)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Os)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ks)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ws)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ys)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mr||s===js||s===Ks)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Mr)return l===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===js)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ks)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fl||s===Zs||s===$s||s===Js)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Mr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Zs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$s)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Js)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class ap extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const op={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(op)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lp extends Dn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,v=null;const _=t.getContextAttributes();let p=null,u=null;const b=[],E=[],A=new Me;let D=null;const C=new Rt;C.layers.enable(1),C.viewport=new $e;const w=new Rt;w.layers.enable(2),w.viewport=new $e;const Z=[C,w],S=new ap;S.layers.enable(1),S.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=b[H];return j===void 0&&(j=new Wr,b[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=b[H];return j===void 0&&(j=new Wr,b[H]=j),j.getGripSpace()},this.getHand=function(H){let j=b[H];return j===void 0&&(j=new Wr,b[H]=j),j.getHandSpace()};function k(H){const j=E.indexOf(H.inputSource);if(j===-1)return;const ce=b[j];ce!==void 0&&(ce.update(H.inputSource,H.frame,c||o),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function re(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",L);for(let H=0;H<b.length;H++){const j=E[H];j!==null&&(E[H]=null,b[H].disconnect(j))}T=null,V=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,u=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",re),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Gt(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,ce=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?oi:Rn,ce=_.stencil?wn:pn);const ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new Gt(d.textureWidth,d.textureHeight,{format:Ht,type:_n,depthTexture:new wo(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Le=e.properties.get(u);Le.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(H){for(let j=0;j<H.removed.length;j++){const ce=H.removed[j],ve=E.indexOf(ce);ve>=0&&(E[ve]=null,b[ve].disconnect(ce))}for(let j=0;j<H.added.length;j++){const ce=H.added[j];let ve=E.indexOf(ce);if(ve===-1){for(let Le=0;Le<b.length;Le++)if(Le>=E.length){E.push(ce),ve=Le;break}else if(E[Le]===null){E[Le]=ce,ve=Le;break}if(ve===-1)break}const ge=b[ve];ge&&ge.connect(ce)}}const B=new P,G=new P;function Y(H,j,ce){B.setFromMatrixPosition(j.matrixWorld),G.setFromMatrixPosition(ce.matrixWorld);const ve=B.distanceTo(G),ge=j.projectionMatrix.elements,Le=ce.projectionMatrix.elements,De=ge[14]/(ge[10]-1),be=ge[14]/(ge[10]+1),ke=(ge[9]+1)/ge[5],N=(ge[9]-1)/ge[5],ht=(ge[8]-1)/ge[0],Ee=(Le[8]+1)/Le[0],Re=De*ht,pe=De*Ee,Ke=ve/(-ht+Ee),Ie=Ke*-ht;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ie),H.translateZ(Ke),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const M=De+Ke,g=be+Ke,I=Re-Ie,Q=pe+(ve-Ie),$=ke*be/g*M,ee=N*be/g*M;H.projectionMatrix.makePerspective(I,Q,$,ee,M,g),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;S.near=w.near=C.near=H.near,S.far=w.far=C.far=H.far,(T!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,V=S.far);const j=H.parent,ce=S.cameras;W(S,j);for(let ve=0;ve<ce.length;ve++)W(ce[ve],j);ce.length===2?Y(S,C,w):S.projectionMatrix.copy(C.projectionMatrix),X(H,S,j)};function X(H,j,ce){ce===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ei*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let q=null;function ie(H,j){if(h=j.getViewerPose(c||o),v=j,h!==null){const ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ve=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let ge=0;ge<ce.length;ge++){const Le=ce[ge];let De=null;if(m!==null)De=m.getViewport(Le);else{const ke=f.getViewSubImage(d,Le);De=ke.viewport,ge===0&&(e.setRenderTargetTextures(u,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(u))}let be=Z[ge];be===void 0&&(be=new Rt,be.layers.enable(ge),be.viewport=new $e,Z[ge]=be),be.matrix.fromArray(Le.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Le.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(S.matrix.copy(be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(be)}}for(let ce=0;ce<b.length;ce++){const ve=E[ce],ge=b[ce];ve!==null&&ge!==void 0&&ge.update(ve,j,c||o)}q&&q(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}const se=new bo;se.setAnimationLoop(ie),this.setAnimationLoop=function(H){q=H},this.dispose=function(){}}}function cp(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,So(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,E,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,A)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,b,E):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===yt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===yt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=e.get(u).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const E=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*E,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,E){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=E*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function up(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,E){const A=E.program;n.uniformBlockBinding(b,A)}function c(b,E){let A=r[b.id];A===void 0&&(v(b),A=h(b),r[b.id]=A,b.addEventListener("dispose",p));const D=E.program;n.updateUBOMapping(b,D);const C=e.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function h(b){const E=f();b.__bindingPointIndex=E;const A=i.createBuffer(),D=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=r[b.id],A=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,w=A.length;C<w;C++){const Z=Array.isArray(A[C])?A[C]:[A[C]];for(let S=0,T=Z.length;S<T;S++){const V=Z[S];if(m(V,C,S,D)===!0){const k=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let L=0;for(let B=0;B<re.length;B++){const G=re[B],Y=_(G);typeof G=="number"||typeof G=="boolean"?(V.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,k+L,V.__data)):G.isMatrix3?(V.__data[0]=G.elements[0],V.__data[1]=G.elements[1],V.__data[2]=G.elements[2],V.__data[3]=0,V.__data[4]=G.elements[3],V.__data[5]=G.elements[4],V.__data[6]=G.elements[5],V.__data[7]=0,V.__data[8]=G.elements[6],V.__data[9]=G.elements[7],V.__data[10]=G.elements[8],V.__data[11]=0):(G.toArray(V.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,E,A,D){const C=b.value,w=E+"_"+A;if(D[w]===void 0)return typeof C=="number"||typeof C=="boolean"?D[w]=C:D[w]=C.clone(),!0;{const Z=D[w];if(typeof C=="number"||typeof C=="boolean"){if(Z!==C)return D[w]=C,!0}else if(Z.equals(C)===!1)return Z.copy(C),!0}return!1}function v(b){const E=b.uniforms;let A=0;const D=16;for(let w=0,Z=E.length;w<Z;w++){const S=Array.isArray(E[w])?E[w]:[E[w]];for(let T=0,V=S.length;T<V;T++){const k=S[T],re=Array.isArray(k.value)?k.value:[k.value];for(let L=0,B=re.length;L<B;L++){const G=re[L],Y=_(G),W=A%D;W!==0&&D-W<Y.boundary&&(A+=D-W),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=Y.storage}}}const C=A%D;return C>0&&(A+=D-C),b.__size=A,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){const E=b.target;E.removeEventListener("dispose",p);const A=o.indexOf(E.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Uo{constructor(e={}){const{canvas:t=lc(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const u=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this._useLegacyLights=!1,this.toneMapping=gn,this.toneMappingExposure=1;const E=this;let A=!1,D=0,C=0,w=null,Z=-1,S=null;const T=new $e,V=new $e;let k=null;const re=new Be(0);let L=0,B=t.width,G=t.height,Y=1,W=null,X=null;const q=new $e(0,0,B,G),ie=new $e(0,0,B,G);let se=!1;const H=new fs;let j=!1,ce=!1,ve=null;const ge=new at,Le=new Me,De=new P,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return w===null?Y:1}let N=n;function ht(x,U){for(let O=0;O<x.length;O++){const z=x[O],F=t.getContext(z,U);if(F!==null)return F}return null}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${as}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ne,!1),N===null){const U=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&U.shift(),N=ht(U,x),N===null)throw ht(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ee,Re,pe,Ke,Ie,M,g,I,Q,$,ee,me,le,de,Te,Ne,K,qe,ze,Ce,Se,ue,y,te;function _e(){Ee=new Sf(N),Re=new pf(N,Ee,e),Ee.init(Re),ue=new sp(N,Ee,Re),pe=new ip(N,Ee,Re),Ke=new yf(N),Ie=new kd,M=new rp(N,Ee,pe,Ie,Re,ue,Ke),g=new gf(E),I=new xf(E),Q=new Pc(N,Re),y=new ff(N,Ee,Q,Re),$=new Mf(N,Q,Ke,y),ee=new wf(N,$,Q,Ke),ze=new Af(N,Re,M),Ne=new mf(Ie),me=new Vd(E,g,I,Ee,Re,y,Ne),le=new cp(E,Ie),de=new Xd,Te=new $d(Ee,Re),qe=new hf(E,g,I,pe,ee,d,l),K=new np(E,ee,Re),te=new up(N,Ke,Re,pe),Ce=new df(N,Ee,Ke,Re),Se=new Ef(N,Ee,Ke,Re),Ke.programs=me.programs,E.capabilities=Re,E.extensions=Ee,E.properties=Ie,E.renderLists=de,E.shadowMap=K,E.state=pe,E.info=Ke}_e();const fe=new lp(E,N);this.xr=fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=Ee.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ee.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(B,G,!1))},this.getSize=function(x){return x.set(B,G)},this.setSize=function(x,U,O=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=x,G=U,t.width=Math.floor(x*Y),t.height=Math.floor(U*Y),O===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(B*Y,G*Y).floor()},this.setDrawingBufferSize=function(x,U,O){B=x,G=U,Y=O,t.width=Math.floor(x*O),t.height=Math.floor(U*O),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(T)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,U,O,z){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,U,O,z),pe.viewport(T.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(x){return x.copy(ie)},this.setScissor=function(x,U,O,z){x.isVector4?ie.set(x.x,x.y,x.z,x.w):ie.set(x,U,O,z),pe.scissor(V.copy(ie).multiplyScalar(Y).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(x){pe.setScissorTest(se=x)},this.setOpaqueSort=function(x){W=x},this.setTransparentSort=function(x){X=x},this.getClearColor=function(x){return x.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(x=!0,U=!0,O=!0){let z=0;if(x){let F=!1;if(w!==null){const he=w.texture.format;F=he===ao||he===so||he===ro}if(F){const he=w.texture.type,xe=he===_n||he===pn||he===os||he===wn||he===no||he===io,we=qe.getClearColor(),Pe=qe.getClearAlpha(),He=we.r,Ue=we.g,Fe=we.b;xe?(m[0]=He,m[1]=Ue,m[2]=Fe,m[3]=Pe,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=He,v[1]=Ue,v[2]=Fe,v[3]=Pe,N.clearBufferiv(N.COLOR,0,v))}else z|=N.COLOR_BUFFER_BIT}U&&(z|=N.DEPTH_BUFFER_BIT),O&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),de.dispose(),Te.dispose(),Ie.dispose(),g.dispose(),I.dispose(),ee.dispose(),y.dispose(),te.dispose(),me.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",nt),fe.removeEventListener("sessionend",Ye),ve&&(ve.dispose(),ve=null),rt.stop()};function J(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const x=Ke.autoReset,U=K.enabled,O=K.autoUpdate,z=K.needsUpdate,F=K.type;_e(),Ke.autoReset=x,K.enabled=U,K.autoUpdate=O,K.needsUpdate=z,K.type=F}function ne(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function oe(x){const U=x.target;U.removeEventListener("dispose",oe),Ae(U)}function Ae(x){ye(x),Ie.remove(x)}function ye(x){const U=Ie.get(x).programs;U!==void 0&&(U.forEach(function(O){me.releaseProgram(O)}),x.isShaderMaterial&&me.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,O,z,F,he){U===null&&(U=be);const xe=F.isMesh&&F.matrixWorld.determinant()<0,we=ko(x,U,O,z,F);pe.setMaterial(z,xe);let Pe=O.index,He=1;if(z.wireframe===!0){if(Pe=$.getWireframeAttribute(O),Pe===void 0)return;He=2}const Ue=O.drawRange,Fe=O.attributes.position;let it=Ue.start*He,bt=(Ue.start+Ue.count)*He;he!==null&&(it=Math.max(it,he.start*He),bt=Math.min(bt,(he.start+he.count)*He)),Pe!==null?(it=Math.max(it,0),bt=Math.min(bt,Pe.count)):Fe!=null&&(it=Math.max(it,0),bt=Math.min(bt,Fe.count));const ct=bt-it;if(ct<0||ct===1/0)return;y.setup(F,z,we,O,Pe);let qt,Je=Ce;if(Pe!==null&&(qt=Q.get(Pe),Je=Se,Je.setIndex(qt)),F.isMesh)z.wireframe===!0?(pe.setLineWidth(z.wireframeLinewidth*ke()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if(F.isLine){let Ge=z.linewidth;Ge===void 0&&(Ge=1),pe.setLineWidth(Ge*ke()),F.isLineSegments?Je.setMode(N.LINES):F.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else F.isPoints?Je.setMode(N.POINTS):F.isSprite&&Je.setMode(N.TRIANGLES);if(F.isBatchedMesh)Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Je.renderInstances(it,ct,F.count);else if(O.isInstancedBufferGeometry){const Ge=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,fr=Math.min(O.instanceCount,Ge);Je.renderInstances(it,ct,fr)}else Je.render(it,ct)};function We(x,U,O){x.transparent===!0&&x.side===en&&x.forceSinglePass===!1?(x.side=yt,x.needsUpdate=!0,wi(x,U,O),x.side=sn,x.needsUpdate=!0,wi(x,U,O),x.side=en):wi(x,U,O)}this.compile=function(x,U,O=null){O===null&&(O=x),p=Te.get(O),p.init(),b.push(p),O.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),x!==O&&x.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(E._useLegacyLights);const z=new Set;return x.traverse(function(F){const he=F.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const we=he[xe];We(we,O,F),z.add(we)}else We(he,O,F),z.add(he)}),b.pop(),p=null,z},this.compileAsync=function(x,U,O=null){const z=this.compile(x,U,O);return new Promise(F=>{function he(){if(z.forEach(function(xe){Ie.get(xe).currentProgram.isReady()&&z.delete(xe)}),z.size===0){F(x);return}setTimeout(he,10)}Ee.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Xe=null;function Qe(x){Xe&&Xe(x)}function nt(){rt.stop()}function Ye(){rt.start()}const rt=new bo;rt.setAnimationLoop(Qe),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(x){Xe=x,fe.setAnimationLoop(x),x===null?rt.stop():rt.start()},fe.addEventListener("sessionstart",nt),fe.addEventListener("sessionend",Ye),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,U,w),p=Te.get(x,b.length),p.init(),b.push(p),ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(ge),ce=this.localClippingEnabled,j=Ne.init(this.clippingPlanes,ce),_=de.get(x,u.length),_.init(),u.push(_),Vt(x,U,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort(W,X),this.info.render.frame++,j===!0&&Ne.beginShadows();const O=p.state.shadowsArray;if(K.render(O,x,U),j===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(_,x),p.setupLights(E._useLegacyLights),U.isArrayCamera){const z=U.cameras;for(let F=0,he=z.length;F<he;F++){const xe=z[F];gs(_,x,xe,xe.viewport)}}else gs(_,x,U);w!==null&&(M.updateMultisampleRenderTarget(w),M.updateRenderTargetMipmap(w)),x.isScene===!0&&x.onAfterRender(E,x,U),y.resetDefaultState(),Z=-1,S=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Vt(x,U,O,z){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||H.intersectsSprite(x)){z&&De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ge);const xe=ee.update(x),we=x.material;we.visible&&_.push(x,xe,we,O,De.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||H.intersectsObject(x))){const xe=ee.update(x),we=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),De.copy(x.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),De.copy(xe.boundingSphere.center)),De.applyMatrix4(x.matrixWorld).applyMatrix4(ge)),Array.isArray(we)){const Pe=xe.groups;for(let He=0,Ue=Pe.length;He<Ue;He++){const Fe=Pe[He],it=we[Fe.materialIndex];it&&it.visible&&_.push(x,xe,it,O,De.z,Fe)}}else we.visible&&_.push(x,xe,we,O,De.z,null)}}const he=x.children;for(let xe=0,we=he.length;xe<we;xe++)Vt(he[xe],U,O,z)}function gs(x,U,O,z){const F=x.opaque,he=x.transmissive,xe=x.transparent;p.setupLightsView(O),j===!0&&Ne.setGlobalState(E.clippingPlanes,O),he.length>0&&Vo(F,he,U,O),z&&pe.viewport(T.copy(z)),F.length>0&&Ai(F,U,O),he.length>0&&Ai(he,U,O),xe.length>0&&Ai(xe,U,O),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Vo(x,U,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const he=Re.isWebGL2;ve===null&&(ve=new Gt(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?rn:_n,minFilter:ai,samples:he?4:0})),E.getDrawingBufferSize(Le),he?ve.setSize(Le.x,Le.y):ve.setSize(rr(Le.x),rr(Le.y));const xe=E.getRenderTarget();E.setRenderTarget(ve),E.getClearColor(re),L=E.getClearAlpha(),L<1&&E.setClearColor(16777215,.5),E.clear();const we=E.toneMapping;E.toneMapping=gn,Ai(x,O,z),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve);let Pe=!1;for(let He=0,Ue=U.length;He<Ue;He++){const Fe=U[He],it=Fe.object,bt=Fe.geometry,ct=Fe.material,qt=Fe.group;if(ct.side===en&&it.layers.test(z.layers)){const Je=ct.side;ct.side=yt,ct.needsUpdate=!0,_s(it,O,z,bt,ct,qt),ct.side=Je,ct.needsUpdate=!0,Pe=!0}}Pe===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve)),E.setRenderTarget(xe),E.setClearColor(re,L),E.toneMapping=we}function Ai(x,U,O){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,he=x.length;F<he;F++){const xe=x[F],we=xe.object,Pe=xe.geometry,He=z===null?xe.material:z,Ue=xe.group;we.layers.test(O.layers)&&_s(we,U,O,Pe,He,Ue)}}function _s(x,U,O,z,F,he){x.onBeforeRender(E,U,O,z,F,he),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(E,U,O,z,x,he),F.transparent===!0&&F.side===en&&F.forceSinglePass===!1?(F.side=yt,F.needsUpdate=!0,E.renderBufferDirect(O,U,z,F,x,he),F.side=sn,F.needsUpdate=!0,E.renderBufferDirect(O,U,z,F,x,he),F.side=en):E.renderBufferDirect(O,U,z,F,x,he),x.onAfterRender(E,U,O,z,F,he)}function wi(x,U,O){U.isScene!==!0&&(U=be);const z=Ie.get(x),F=p.state.lights,he=p.state.shadowsArray,xe=F.state.version,we=me.getParameters(x,F.state,he,U,O),Pe=me.getProgramCacheKey(we);let He=z.programs;z.environment=x.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(x.isMeshStandardMaterial?I:g).get(x.envMap||z.environment),He===void 0&&(x.addEventListener("dispose",oe),He=new Map,z.programs=He);let Ue=He.get(Pe);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===xe)return xs(x,we),Ue}else we.uniforms=me.getUniforms(x),x.onBuild(O,we,E),x.onBeforeCompile(we,E),Ue=me.acquireProgram(we,Pe),He.set(Pe,Ue),z.uniforms=we.uniforms;const Fe=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Fe.clippingPlanes=Ne.uniform),xs(x,we),z.needsLights=Xo(x),z.lightsStateVersion=xe,z.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function vs(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Ji.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function xs(x,U){const O=Ie.get(x);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function ko(x,U,O,z,F){U.isScene!==!0&&(U=be),M.resetTextureUnits();const he=U.fog,xe=z.isMeshStandardMaterial?U.environment:null,we=w===null?E.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:an,Pe=(z.isMeshStandardMaterial?I:g).get(z.envMap||xe),He=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ue=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Fe=!!O.morphAttributes.position,it=!!O.morphAttributes.normal,bt=!!O.morphAttributes.color;let ct=gn;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ct=E.toneMapping);const qt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Je=qt!==void 0?qt.length:0,Ge=Ie.get(z),fr=p.state.lights;if(j===!0&&(ce===!0||x!==S)){const Pt=x===S&&z.id===Z;Ne.setState(z,x,Pt)}let et=!1;z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==fr.state.version||Ge.outputColorSpace!==we||F.isBatchedMesh&&Ge.batching===!1||!F.isBatchedMesh&&Ge.batching===!0||F.isInstancedMesh&&Ge.instancing===!1||!F.isInstancedMesh&&Ge.instancing===!0||F.isSkinnedMesh&&Ge.skinning===!1||!F.isSkinnedMesh&&Ge.skinning===!0||F.isInstancedMesh&&Ge.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ge.instancingColor===!1&&F.instanceColor!==null||Ge.envMap!==Pe||z.fog===!0&&Ge.fog!==he||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ne.numPlanes||Ge.numIntersection!==Ne.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==Ue||Ge.morphTargets!==Fe||Ge.morphNormals!==it||Ge.morphColors!==bt||Ge.toneMapping!==ct||Re.isWebGL2===!0&&Ge.morphTargetsCount!==Je)&&(et=!0):(et=!0,Ge.__version=z.version);let vn=Ge.currentProgram;et===!0&&(vn=wi(z,U,F));let Ss=!1,fi=!1,dr=!1;const dt=vn.getUniforms(),xn=Ge.uniforms;if(pe.useProgram(vn.program)&&(Ss=!0,fi=!0,dr=!0),z.id!==Z&&(Z=z.id,fi=!0),Ss||S!==x){dt.setValue(N,"projectionMatrix",x.projectionMatrix),dt.setValue(N,"viewMatrix",x.matrixWorldInverse);const Pt=dt.map.cameraPosition;Pt!==void 0&&Pt.setValue(N,De.setFromMatrixPosition(x.matrixWorld)),Re.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,fi=!0,dr=!0)}if(F.isSkinnedMesh){dt.setOptional(N,F,"bindMatrix"),dt.setOptional(N,F,"bindMatrixInverse");const Pt=F.skeleton;Pt&&(Re.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),dt.setValue(N,"boneTexture",Pt.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(dt.setOptional(N,F,"batchingTexture"),dt.setValue(N,"batchingTexture",F._matricesTexture,M));const pr=O.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0&&Re.isWebGL2===!0)&&ze.update(F,O,vn),(fi||Ge.receiveShadow!==F.receiveShadow)&&(Ge.receiveShadow=F.receiveShadow,dt.setValue(N,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(xn.envMap.value=Pe,xn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),fi&&(dt.setValue(N,"toneMappingExposure",E.toneMappingExposure),Ge.needsLights&&Wo(xn,dr),he&&z.fog===!0&&le.refreshFogUniforms(xn,he),le.refreshMaterialUniforms(xn,z,Y,G,ve),Ji.upload(N,vs(Ge),xn,M)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ji.upload(N,vs(Ge),xn,M),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(N,"center",F.center),dt.setValue(N,"modelViewMatrix",F.modelViewMatrix),dt.setValue(N,"normalMatrix",F.normalMatrix),dt.setValue(N,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Pt=z.uniformsGroups;for(let mr=0,Yo=Pt.length;mr<Yo;mr++)if(Re.isWebGL2){const Ms=Pt[mr];te.update(Ms,vn),te.bind(Ms,vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vn}function Wo(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Xo(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(x,U,O){Ie.get(x.texture).__webglTexture=U,Ie.get(x.depthTexture).__webglTexture=O;const z=Ie.get(x);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,U){const O=Ie.get(x);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(x,U=0,O=0){w=x,D=U,C=O;let z=!0,F=null,he=!1,xe=!1;if(x){const Pe=Ie.get(x);Pe.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):Pe.__webglFramebuffer===void 0?M.setupRenderTarget(x):Pe.__hasExternalTextures&&M.rebindTextures(x,Ie.get(x.texture).__webglTexture,Ie.get(x.depthTexture).__webglTexture);const He=x.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(xe=!0);const Ue=Ie.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?F=Ue[U][O]:F=Ue[U],he=!0):Re.isWebGL2&&x.samples>0&&M.useMultisampledRTT(x)===!1?F=Ie.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?F=Ue[O]:F=Ue,T.copy(x.viewport),V.copy(x.scissor),k=x.scissorTest}else T.copy(q).multiplyScalar(Y).floor(),V.copy(ie).multiplyScalar(Y).floor(),k=se;if(pe.bindFramebuffer(N.FRAMEBUFFER,F)&&Re.drawBuffers&&z&&pe.drawBuffers(x,F),pe.viewport(T),pe.scissor(V),pe.setScissorTest(k),he){const Pe=Ie.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,O)}else if(xe){const Pe=Ie.get(x.texture),He=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.__webglTexture,O||0,He)}Z=-1},this.readRenderTargetPixels=function(x,U,O,z,F,he,xe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){pe.bindFramebuffer(N.FRAMEBUFFER,we);try{const Pe=x.texture,He=Pe.format,Ue=Pe.type;if(He!==Ht&&ue.convert(He)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===rn&&(Ee.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ue!==_n&&ue.convert(Ue)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===mn&&(Re.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-z&&O>=0&&O<=x.height-F&&N.readPixels(U,O,z,F,ue.convert(He),ue.convert(Ue),he)}finally{const Pe=w!==null?Ie.get(w).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(x,U,O=0){const z=Math.pow(2,-O),F=Math.floor(U.image.width*z),he=Math.floor(U.image.height*z);M.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,x.x,x.y,F,he),pe.unbindTexture()},this.copyTextureToTexture=function(x,U,O,z=0){const F=U.image.width,he=U.image.height,xe=ue.convert(O.format),we=ue.convert(O.type);M.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,x.x,x.y,F,he,xe,we,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,x.x,x.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,x.x,x.y,xe,we,U.image),z===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(x,U,O,z,F=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=x.max.x-x.min.x+1,xe=x.max.y-x.min.y+1,we=x.max.z-x.min.z+1,Pe=ue.convert(z.format),He=ue.convert(z.type);let Ue;if(z.isData3DTexture)M.setTexture3D(z,0),Ue=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)M.setTexture2DArray(z,0),Ue=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Fe=N.getParameter(N.UNPACK_ROW_LENGTH),it=N.getParameter(N.UNPACK_IMAGE_HEIGHT),bt=N.getParameter(N.UNPACK_SKIP_PIXELS),ct=N.getParameter(N.UNPACK_SKIP_ROWS),qt=N.getParameter(N.UNPACK_SKIP_IMAGES),Je=O.isCompressedTexture?O.mipmaps[F]:O.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Je.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,x.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,x.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,x.min.z),O.isDataTexture||O.isData3DTexture?N.texSubImage3D(Ue,F,U.x,U.y,U.z,he,xe,we,Pe,He,Je.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ue,F,U.x,U.y,U.z,he,xe,we,Pe,Je.data)):N.texSubImage3D(Ue,F,U.x,U.y,U.z,he,xe,we,Pe,He,Je),N.pixelStorei(N.UNPACK_ROW_LENGTH,Fe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),N.pixelStorei(N.UNPACK_SKIP_PIXELS,bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qt),F===0&&z.generateMipmaps&&N.generateMipmap(Ue),pe.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?M.setTextureCube(x,0):x.isData3DTexture?M.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?M.setTexture2DArray(x,0):M.setTexture2D(x,0),pe.unbindTexture()},this.resetState=function(){D=0,C=0,w=null,pe.reset(),y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ls?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===lr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ft?Cn:lo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cn?ft:an}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class hp extends Uo{}hp.prototype.isWebGL1Renderer=!0;class Io extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ms extends on{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new P,d=new P,m=[],v=[],_=[],p=[];for(let u=0;u<=n;u++){const b=[],E=u/n;let A=0;u===0&&o===0?A=.5/t:u===n&&l===Math.PI&&(A=-.5/t);for(let D=0;D<=t;D++){const C=D/t;f.x=-e*Math.cos(r+C*s)*Math.sin(o+E*a),f.y=e*Math.cos(o+E*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+E*a),v.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(C+A,1-E),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){const E=h[u][b+1],A=h[u][b],D=h[u+1][b],C=h[u+1][b+1];(u!==0||o>0)&&m.push(E,A,C),(u!==n-1||l<Math.PI)&&m.push(A,D,C)}this.setIndex(m),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class No extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xr=new at,Ha=new P,Ga=new P;class fp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ha.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ha),Ga.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ga),t.updateMatrixWorld(),Xr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Va=new at,_i=new P,Yr=new P;class dp extends fp{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_i.setFromMatrixPosition(e.matrixWorld),n.position.copy(_i),Yr.copy(n.position),Yr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Yr),n.updateMatrixWorld(),r.makeTranslation(-_i.x,-_i.y,-_i.z),Va.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va)}}class pp extends No{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new dp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mp extends No{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fo{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ka(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ka();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ka(){return(typeof performance>"u"?Date:performance).now()}class Wa{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:as}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=as);const Xa={type:"change"},qr={type:"start"},Ya={type:"end"},$i=new mo,qa=new dn,gp=Math.cos(70*gt.DEG2RAD);class _p extends Dn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.touches={ONE:In.ROTATE,TWO:In.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",Te),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Te),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xa),n.update(),s=r.NONE},this.update=function(){const y=new P,te=new Ln().setFromUnitVectors(e.up,new P(0,1,0)),_e=te.clone().invert(),fe=new P,J=new Ln,R=new P,ne=2*Math.PI;return function(Ae=null){const ye=n.object.position;y.copy(ye).sub(n.target),y.applyQuaternion(te),a.setFromVector3(y),n.autoRotate&&s===r.NONE&&k(T(Ae)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let We=n.minAzimuthAngle,Xe=n.maxAzimuthAngle;isFinite(We)&&isFinite(Xe)&&(We<-Math.PI?We+=ne:We>Math.PI&&(We-=ne),Xe<-Math.PI?Xe+=ne:Xe>Math.PI&&(Xe-=ne),We<=Xe?a.theta=Math.max(We,Math.min(Xe,a.theta)):a.theta=a.theta>(We+Xe)/2?Math.max(We,a.theta):Math.min(Xe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*c),y.setFromSpherical(a),y.applyQuaternion(_e),ye.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Qe=!1;if(n.zoomToCursor&&C){let nt=null;if(n.object.isPerspectiveCamera){const Ye=y.length();nt=q(Ye*c);const rt=Ye-nt;n.object.position.addScaledVector(A,rt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ye=new P(D.x,D.y,0);Ye.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Qe=!0;const rt=new P(D.x,D.y,0);rt.unproject(n.object),n.object.position.sub(rt).add(Ye),n.object.updateMatrixWorld(),nt=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;nt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(nt).add(n.object.position):($i.origin.copy(n.object.position),$i.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot($i.direction))<gp?e.lookAt(n.target):(qa.setFromNormalAndCoplanarPoint(n.object.up,n.target),$i.intersectPlane(qa,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Qe=!0);return c=1,C=!1,Qe||fe.distanceToSquared(n.object.position)>o||8*(1-J.dot(n.object.quaternion))>o||R.distanceToSquared(n.target)>0?(n.dispatchEvent(Xa),fe.copy(n.object.position),J.copy(n.object.quaternion),R.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",qe),n.domElement.removeEventListener("pointerdown",M),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",g),n.domElement.removeEventListener("pointerup",I),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Te),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Wa,l=new Wa;let c=1;const h=new P,f=new Me,d=new Me,m=new Me,v=new Me,_=new Me,p=new Me,u=new Me,b=new Me,E=new Me,A=new P,D=new Me;let C=!1;const w=[],Z={};let S=!1;function T(y){return y!==null?2*Math.PI/60*n.autoRotateSpeed*y:2*Math.PI/60/60*n.autoRotateSpeed}function V(y){const te=Math.abs(y*.01);return Math.pow(.95,n.zoomSpeed*te)}function k(y){l.theta-=y}function re(y){l.phi-=y}const L=function(){const y=new P;return function(_e,fe){y.setFromMatrixColumn(fe,0),y.multiplyScalar(-_e),h.add(y)}}(),B=function(){const y=new P;return function(_e,fe){n.screenSpacePanning===!0?y.setFromMatrixColumn(fe,1):(y.setFromMatrixColumn(fe,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(_e),h.add(y)}}(),G=function(){const y=new P;return function(_e,fe){const J=n.domElement;if(n.object.isPerspectiveCamera){const R=n.object.position;y.copy(R).sub(n.target);let ne=y.length();ne*=Math.tan(n.object.fov/2*Math.PI/180),L(2*_e*ne/J.clientHeight,n.object.matrix),B(2*fe*ne/J.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(_e*(n.object.right-n.object.left)/n.object.zoom/J.clientWidth,n.object.matrix),B(fe*(n.object.top-n.object.bottom)/n.object.zoom/J.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(y,te){if(!n.zoomToCursor)return;C=!0;const _e=n.domElement.getBoundingClientRect(),fe=y-_e.left,J=te-_e.top,R=_e.width,ne=_e.height;D.x=fe/R*2-1,D.y=-(J/ne)*2+1,A.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(y){return Math.max(n.minDistance,Math.min(n.maxDistance,y))}function ie(y){f.set(y.clientX,y.clientY)}function se(y){X(y.clientX,y.clientX),u.set(y.clientX,y.clientY)}function H(y){v.set(y.clientX,y.clientY)}function j(y){d.set(y.clientX,y.clientY),m.subVectors(d,f).multiplyScalar(n.rotateSpeed);const te=n.domElement;k(2*Math.PI*m.x/te.clientHeight),re(2*Math.PI*m.y/te.clientHeight),f.copy(d),n.update()}function ce(y){b.set(y.clientX,y.clientY),E.subVectors(b,u),E.y>0?Y(V(E.y)):E.y<0&&W(V(E.y)),u.copy(b),n.update()}function ve(y){_.set(y.clientX,y.clientY),p.subVectors(_,v).multiplyScalar(n.panSpeed),G(p.x,p.y),v.copy(_),n.update()}function ge(y){X(y.clientX,y.clientY),y.deltaY<0?W(V(y.deltaY)):y.deltaY>0&&Y(V(y.deltaY)),n.update()}function Le(y){let te=!1;switch(y.code){case n.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?re(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?re(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),te=!0;break}te&&(y.preventDefault(),n.update())}function De(y){if(w.length===1)f.set(y.pageX,y.pageY);else{const te=ue(y),_e=.5*(y.pageX+te.x),fe=.5*(y.pageY+te.y);f.set(_e,fe)}}function be(y){if(w.length===1)v.set(y.pageX,y.pageY);else{const te=ue(y),_e=.5*(y.pageX+te.x),fe=.5*(y.pageY+te.y);v.set(_e,fe)}}function ke(y){const te=ue(y),_e=y.pageX-te.x,fe=y.pageY-te.y,J=Math.sqrt(_e*_e+fe*fe);u.set(0,J)}function N(y){n.enableZoom&&ke(y),n.enablePan&&be(y)}function ht(y){n.enableZoom&&ke(y),n.enableRotate&&De(y)}function Ee(y){if(w.length==1)d.set(y.pageX,y.pageY);else{const _e=ue(y),fe=.5*(y.pageX+_e.x),J=.5*(y.pageY+_e.y);d.set(fe,J)}m.subVectors(d,f).multiplyScalar(n.rotateSpeed);const te=n.domElement;k(2*Math.PI*m.x/te.clientHeight),re(2*Math.PI*m.y/te.clientHeight),f.copy(d)}function Re(y){if(w.length===1)_.set(y.pageX,y.pageY);else{const te=ue(y),_e=.5*(y.pageX+te.x),fe=.5*(y.pageY+te.y);_.set(_e,fe)}p.subVectors(_,v).multiplyScalar(n.panSpeed),G(p.x,p.y),v.copy(_)}function pe(y){const te=ue(y),_e=y.pageX-te.x,fe=y.pageY-te.y,J=Math.sqrt(_e*_e+fe*fe);b.set(0,J),E.set(0,Math.pow(b.y/u.y,n.zoomSpeed)),Y(E.y),u.copy(b);const R=(y.pageX+te.x)*.5,ne=(y.pageY+te.y)*.5;X(R,ne)}function Ke(y){n.enableZoom&&pe(y),n.enablePan&&Re(y)}function Ie(y){n.enableZoom&&pe(y),n.enableRotate&&Ee(y)}function M(y){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",g),n.domElement.addEventListener("pointerup",I)),ze(y),y.pointerType==="touch"?Ne(y):Q(y))}function g(y){n.enabled!==!1&&(y.pointerType==="touch"?K(y):$(y))}function I(y){Ce(y),w.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",g),n.domElement.removeEventListener("pointerup",I)),n.dispatchEvent(Ya),s=r.NONE}function Q(y){let te;switch(y.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Un.DOLLY:if(n.enableZoom===!1)return;se(y),s=r.DOLLY;break;case Un.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;H(y),s=r.PAN}else{if(n.enableRotate===!1)return;ie(y),s=r.ROTATE}break;case Un.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;ie(y),s=r.ROTATE}else{if(n.enablePan===!1)return;H(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(qr)}function $(y){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;j(y);break;case r.DOLLY:if(n.enableZoom===!1)return;ce(y);break;case r.PAN:if(n.enablePan===!1)return;ve(y);break}}function ee(y){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(y.preventDefault(),n.dispatchEvent(qr),ge(me(y)),n.dispatchEvent(Ya))}function me(y){const te=y.deltaMode,_e={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(te){case 1:_e.deltaY*=16;break;case 2:_e.deltaY*=100;break}return y.ctrlKey&&!S&&(_e.deltaY*=10),_e}function le(y){y.key==="Control"&&(S=!0,document.addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(y){y.key==="Control"&&(S=!1,document.removeEventListener("keyup",de,{passive:!0,capture:!0}))}function Te(y){n.enabled===!1||n.enablePan===!1||Le(y)}function Ne(y){switch(Se(y),w.length){case 1:switch(n.touches.ONE){case In.ROTATE:if(n.enableRotate===!1)return;De(y),s=r.TOUCH_ROTATE;break;case In.PAN:if(n.enablePan===!1)return;be(y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case In.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(y),s=r.TOUCH_DOLLY_PAN;break;case In.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ht(y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(qr)}function K(y){switch(Se(y),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(y),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Re(y),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ke(y),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ie(y),n.update();break;default:s=r.NONE}}function qe(y){n.enabled!==!1&&y.preventDefault()}function ze(y){w.push(y.pointerId)}function Ce(y){delete Z[y.pointerId];for(let te=0;te<w.length;te++)if(w[te]==y.pointerId){w.splice(te,1);return}}function Se(y){let te=Z[y.pointerId];te===void 0&&(te=new Me,Z[y.pointerId]=te),te.set(y.pageX,y.pageY)}function ue(y){const te=y.pointerId===w[0]?w[1]:w[0];return Z[te]}n.domElement.addEventListener("contextmenu",qe),n.domElement.addEventListener("pointerdown",M),n.domElement.addEventListener("pointercancel",I),n.domElement.addEventListener("wheel",ee,{passive:!1}),document.addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}function Oo(){const i=new Io;i.background=new Be(657672),i.add(new mp(16772829,1.8));const e=[16775408,16773092,16774640,16772824],t=[[1,.3,.2],[-.9,.4,-.3],[.2,1,-.3],[-.3,-.8,.5],[.6,-.2,1],[-.5,.3,-1],[.8,.6,.5],[-.7,-.5,.7]];for(let n=0;n<t.length;n++){const[r,s,o]=t[n],a=Math.hypot(r,s,o),l=new pp(e[n%e.length],3.5,0,2);l.position.set(r/a*30,s/a*30,o/a*30),i.add(l)}return i}function vp(i){const e=new To(256,{generateMipmaps:!0,minFilter:ai});return e.texture.mapping=Pn,new Eo(.1,100,e).update(i,Oo()),{texture:e.texture,target:e}}function xp(i){const e=new is(i),t=e.fromScene(Oo(),.22).texture;return e.dispose(),t}const Bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class bi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Sp=new Ao(-1,1,1,-1,0,1);class Mp extends on{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}}const Ep=new Mp;class zo{constructor(e){this._mesh=new Xt(Ep,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class yp extends bi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ar.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new zo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ja extends bi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Tp extends bi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bp{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yp(Bo),this.copyPass.material.blending=nn,this.clock=new Fo}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ja!==void 0&&(o instanceof ja?n=!0:o instanceof Tp&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ap extends bi{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const wp={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ci extends bi{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new Be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Gt(s,o,{type:rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new Gt(s,o,{type:rn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Gt(s,o,{type:rn});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=wp;this.highPassUniforms=ar.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Me(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Bo;this.copyUniforms=ar.clone(h.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:jr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Be,this.oldClearAlpha=1,this.basic=new hs,this.fsQuad=new zo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Me(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ci.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ci.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Et({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ci.BlurDirectionX=new Me(1,0);ci.BlurDirectionY=new Me(0,1);const Rp=`
uniform float uTime;
uniform float uNoiseLevel;

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying vec3 vLocalPosition;
varying float vNoise;

vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float permute(float x) { return floor(mod(((x * 34.0) + 1.0) * x, 289.0)); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float taylorInvSqrt(float r) { return 1.79284291400159 - 0.85373472095314 * r; }

vec4 grad4(float j, vec4 ip) {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p, s;
  p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;
  return p;
}

float snoise(vec4 v) {
  const vec2 C = vec2(0.138196601125010504, 0.309016994374947451);
  vec4 i = floor(v + dot(v, C.yyyy));
  vec4 x0 = v - i + dot(i, C.xxxx);
  vec4 i0;
  vec3 isX = step(x0.yzw, x0.xxx);
  vec3 isYZ = step(x0.zww, x0.yyz);
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;
  vec4 i3 = clamp(i0, 0.0, 1.0);
  vec4 i2 = clamp(i0 - 1.0, 0.0, 1.0);
  vec4 i1 = clamp(i0 - 2.0, 0.0, 1.0);
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;
  i = mod(i, 289.0);
  float j0 = permute(permute(permute(permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute(permute(permute(permute(i.w + vec4(i1.w, i2.w, i3.w, 1.0)) + i.z + vec4(i1.z, i2.z, i3.z, 1.0)) + i.y + vec4(i1.y, i2.y, i3.y, 1.0)) + i.x + vec4(i1.x, i2.x, i3.x, 1.0));
  vec4 ip = vec4(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);
  vec4 p0 = grad4(j0, ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4, p4));
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);
  m0 = m0 * m0; m1 = m1 * m1;
  return 49.0 * (dot(m0*m0, vec3(dot(p0,x0), dot(p1,x1), dot(p2,x2))) + dot(m1*m1, vec2(dot(p3,x3), dot(p4,x4))));
}

void main() {
  float t = uTime * uNoiseLevel;
  vNoise = snoise(vec4(position / 1.5, t));

  vec3 displaced = position + normal * vNoise * uNoiseLevel / 7.0;
  vLocalPosition = displaced;

  vec4 worldPos = modelMatrix * vec4(displaced, 1.0);
  vWorldPosition = worldPos.xyz;
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPosition = viewMatrix * worldPos;
  vViewPosition = -mvPosition.xyz;

  gl_Position = projectionMatrix * mvPosition;
}
`,Cp=`
uniform float uNoiseLevel;
uniform float uRefractionRatio;
uniform float uReflectivity;
uniform float uThickness;
uniform samplerCube uEnvMap;
uniform vec3 uShellTint;
uniform vec3 uShellIridescence;
uniform float uShellIridescenceStrength;
uniform vec3 uRimColor;

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying vec3 vLocalPosition;
varying float vNoise;

__INTERNAL_ENERGY__

vec3 sampleSoftEnv(samplerCube map, vec3 dir) {
  vec3 sum = vec3(0.0);
  float w = 0.0;
  sum += textureCube(map, dir).rgb * 2.0; w += 2.0;
  const float spread = 0.045;
  sum += textureCube(map, normalize(dir + vec3(spread, 0.0, 0.0))).rgb; w += 1.0;
  sum += textureCube(map, normalize(dir + vec3(-spread, 0.0, 0.0))).rgb; w += 1.0;
  sum += textureCube(map, normalize(dir + vec3(0.0, spread, 0.0))).rgb; w += 1.0;
  sum += textureCube(map, normalize(dir + vec3(0.0, -spread, 0.0))).rgb; w += 1.0;
  sum += textureCube(map, normalize(dir + vec3(0.0, 0.0, spread))).rgb; w += 1.0;
  sum += textureCube(map, normalize(dir + vec3(0.0, 0.0, -spread))).rgb; w += 1.0;
  return sum / w;
}

vec3 softenEnv(vec3 env) {
  env *= vec3(1.04, 1.0, 0.94);
  float luma = dot(env, vec3(0.299, 0.587, 0.114));
  env = mix(vec3(luma), env, 0.55);
  return pow(env, vec3(1.15));
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vViewPosition);

  float fresnel = pow(1.0 - max(dot(n, v), 0.0), 2.4);
  float facing = max(dot(n, v), 0.0);
  float edgeAA = smoothstep(0.0, 0.05, facing);

  // --- Interior organic wave energy (Magical AI Orb) ---
  vec3 waves = traceInteriorEnergy(vLocalPosition);
  waves = clamp(waves, 0.0, 1.0) * edgeAA;
  float waveMix = mix(0.45, 1.0, uNoiseLevel);

  // --- Warm glass shell ---
  float iridescentMix = smoothstep(-0.3, 0.5, vNoise) * uShellIridescenceStrength;
  vec3 film = mix(uShellTint, uShellIridescence, iridescentMix + abs(vNoise) * 0.12);
  film = mix(film, uShellTint, 0.35);

  vec3 viewDir = normalize(vWorldPosition - cameraPosition);
  vec3 reflectDir = reflect(viewDir, n);
  vec3 refractDir = refract(viewDir, n, uRefractionRatio);
  vec3 envSample = softenEnv(
    mix(sampleSoftEnv(uEnvMap, reflectDir), sampleSoftEnv(uEnvMap, refractDir), 0.5)
  );

  float bodyMask = mix(0.4 + uThickness * 0.1, 0.9, fresnel);
  vec3 glass = film * bodyMask * 0.55;
  float envMix = uReflectivity * mix(0.28, 0.62, fresnel);
  glass = mix(glass, envSample, min(envMix, 1.0));
  glass += envSample * max(envMix - 1.0, 0.0) * 0.3;

  vec3 lightDir = normalize(vec3(0.4, 0.9, 0.5));
  vec3 halfDir = normalize(lightDir + v);
  float spec = pow(max(dot(n, halfDir), 0.0), 12.0);
  glass += uRimColor * spec * 0.08 * min(uReflectivity, 1.5);
  glass += uRimColor * fresnel * 0.38;

  // Composite: waves visible through the glass centre, shell at edges
  vec3 finalColor = glass + waves * waveMix * mix(0.62, 1.05, 1.0 - fresnel * 0.35);
  finalColor += waves * facing * 0.12 * uNoiseLevel;

  float waveLuma = max(waves.r, max(waves.g, waves.b));
  float alpha = clamp(0.5 + fresnel * 0.35 + waveLuma * 0.45, 0.0, 1.0) * edgeAA;

  gl_FragColor = vec4(finalColor, alpha);
}
`;function Pp(i){return Cp.replace("__INTERNAL_ENERGY__",i)}const Lp=`
uniform float uTime;
uniform vec3 uLocalCamPos;
uniform vec3 uPrimaryColor;
uniform vec3 uSecondaryColor;
uniform float uEnergyDensity;
uniform float uFractalIters;
uniform float uFractalScale;
uniform float uFractalDecay;
uniform float uInternalAnim;
uniform float uSmoothness;
uniform float uAsymmetry;
uniform float uPetalCount;
uniform float uPetalStrength;
uniform float uBloomRings;

float petalEnvelope(vec3 anchor) {
  if (uPetalStrength < 0.001) return 1.0;

  float azimuth = atan(anchor.y, anchor.x);
  float radius = length(anchor);
  float elevation = atan(length(anchor.xy), anchor.z + 0.001);
  float spin = uTime * uInternalAnim * 0.15;

  float lobeWave = cos(uPetalCount * azimuth + spin);
  float lobes = pow(clamp(0.5 + 0.5 * lobeWave, 0.0, 1.0), mix(1.0, 2.2, uPetalStrength));
  float tips = pow(abs(sin(uPetalCount * 0.5 * azimuth + spin * 0.5)), mix(1.0, 1.6, uPetalStrength));
  float depth = 0.55 + 0.45 * cos(uPetalCount * 0.5 * elevation + spin * 0.5);
  float rings = 1.0;

  if (uBloomRings > 0.01) {
    float ringWave = abs(sin(radius * uBloomRings * 2.8 - spin * 0.7));
    rings = 0.28 + 0.72 * pow(ringWave, 0.75);
  }

  float core = smoothstep(0.0, 0.18, radius);
  float edge = 1.0 - smoothstep(1.35, 1.82, radius);
  float stamen = exp(-radius * radius * 10.0);
  float envelope = lobes * mix(1.0, tips, 0.45) * depth * rings * core * edge;
  envelope = mix(envelope, 1.0, stamen * uPetalStrength * 0.55);
  envelope = pow(envelope, mix(1.0, 0.58, uPetalStrength));

  return mix(1.0, envelope, uPetalStrength);
}

float evaluateStructure(vec3 pos) {
  float densityAcc = 0.0;
  vec3 anchor = pos;

  float animTime = uTime * uInternalAnim;
  float s = sin(animTime);
  float c = cos(animTime);
  mat2 rotAnim = mat2(c, s, -s, c);

  float a = 0.5 * uAsymmetry;
  mat2 rotAsym1 = mat2(cos(a), sin(a), -sin(a), cos(a));
  float b = 0.3 * uAsymmetry;
  mat2 rotAsym2 = mat2(cos(b), sin(b), -sin(b), cos(b));

  for (int step = 0; step < 12; ++step) {
    if (float(step) >= uFractalIters) break;

    pos.xy *= rotAnim;
    pos.yz *= rotAnim;
    pos.xz *= rotAsym1;
    pos.yz *= rotAsym2;
    pos += vec3(0.05, -0.02, 0.03) * uAsymmetry;

    if (uPetalStrength > 0.001) {
      float angle = atan(pos.y, pos.x);
      float pinch = 1.0 + uPetalStrength * 0.2 * cos(uPetalCount * angle + float(step) * 0.35);
      pos.xy *= pinch;
      pos.z *= 1.0 - uPetalStrength * 0.06 * (1.0 - cos(uPetalCount * angle));
    }

    vec3 foldedPos = sqrt(pos * pos + uSmoothness);
    float magnitudeSq = max(dot(foldedPos, foldedPos), 0.00001);
    pos = (uFractalScale * foldedPos / magnitudeSq) - uFractalScale;

    float ySq = pos.y * pos.y;
    float zSq = pos.z * pos.z;
    float yz2 = 2.0 * pos.y * pos.z;
    pos.yz = vec2(ySq - zSq, yz2);
    pos = vec3(pos.z, pos.x, pos.y);

    densityAcc += exp(uFractalDecay * abs(dot(pos, anchor)));
  }

  return densityAcc * 0.5 * petalEnvelope(anchor);
}

vec2 getVolumeBounds(vec3 origin, vec3 dir, float radius) {
  float b = dot(origin, dir);
  float c = dot(origin, origin) - radius * radius;
  float discriminant = b * b - c;
  if (discriminant < 0.0) return vec2(-1.0);
  float root = sqrt(discriminant);
  return vec2(-b - root, -b + root);
}

vec3 traceEnergy(vec3 origin, vec3 dir, vec2 limits) {
  float currentDepth = limits.x;
  float marchStep = 0.02;
  vec3 finalEnergy = vec3(0.0);
  float fieldVal = 0.0;

  for (int i = 0; i < 64; i++) {
    currentDepth += marchStep * exp(-2.0 * fieldVal);
    if (currentDepth > limits.y) break;

    vec3 samplePoint = origin + currentDepth * dir;
    fieldVal = evaluateStructure(samplePoint);
    fieldVal = pow(max(fieldVal, 0.0), mix(1.0, 0.68, uPetalStrength));

    float vSq = fieldVal * fieldVal;
    float gradientBlend = smoothstep(0.0, mix(0.4, 0.22, uPetalStrength), fieldVal);
    vec3 currentGradient = mix(uSecondaryColor, uPrimaryColor, gradientBlend);
    vec3 emission = currentGradient * (fieldVal * 1.8 + vSq * 1.0);

    finalEnergy = 0.99 * finalEnergy + (0.08 * uEnergyDensity) * emission;
  }

  return finalEnergy;
}

vec3 traceInteriorEnergy(vec3 localSurfacePos) {
  vec3 rayOrig = uLocalCamPos;
  vec3 rayDir = normalize(localSurfacePos - uLocalCamPos);

  float t = uTime * 0.1;
  float s = sin(t);
  float c = cos(t);
  mat2 rotXZ = mat2(c, s, -s, c);
  rayOrig.xz *= rotXZ;
  rayDir.xz *= rotXZ;

  vec2 limits = getVolumeBounds(rayOrig, rayDir, 1.95);
  if (limits.x < 0.0) return vec3(0.0);

  vec3 volume = traceEnergy(rayOrig, rayDir, limits);
  return 0.5 * log(1.0 + volume);
}
`,ni={idle:{noiseLevel:.3,energyDensity:.9,petalCount:2,petalStrength:0,bloomRings:0,fractalIters:3,fractalScale:.95,fractalDecay:-11,smoothness:.04,asymmetry:.12,internalAnim:.15,animSpeed:.22,autoRotateSpeed:.2},listening:{noiseLevel:.5,energyDensity:1.35,petalCount:2,petalStrength:.5,bloomRings:1,fractalIters:4,fractalScale:.97,fractalDecay:-14,smoothness:.032,asymmetry:.18,internalAnim:.32,animSpeed:.38,autoRotateSpeed:.35},thinking:{noiseLevel:.82,energyDensity:2.3,petalCount:9,petalStrength:.78,bloomRings:3,fractalIters:6,fractalScale:.96,fractalDecay:-21,smoothness:.022,asymmetry:.28,internalAnim:.58,animSpeed:.62,autoRotateSpeed:.5},answering:{noiseLevel:.62,energyDensity:1.65,petalCount:5,petalStrength:.58,bloomRings:1.9,fractalIters:5,fractalScale:.97,fractalDecay:-16.5,smoothness:.028,asymmetry:.22,internalAnim:.44,animSpeed:.48,autoRotateSpeed:.4}},Ka={background:0,radius:2},$n={primary:"#ffc4b0",secondary:"#fff5ee",shellTint:"#edd5c8",shellIridescence:"#e8c4d8",shellIridescenceStrength:.55,rim:"#fff8f4"},Dp=["noiseLevel","energyDensity","petalCount","petalStrength","bloomRings","fractalIters","fractalScale","fractalDecay","smoothness","asymmetry","internalAnim","animSpeed","autoRotateSpeed"];function Jn(i){return{...i}}class Up{constructor(e){tt(this,"scene");tt(this,"camera");tt(this,"renderer");tt(this,"composer");tt(this,"controls");tt(this,"orb");tt(this,"material");tt(this,"envMap");tt(this,"localCam",new P);tt(this,"clock",new Fo);tt(this,"currentState",Jn(ni.idle));tt(this,"targetState",Jn(ni.idle));tt(this,"selectedPreset","idle");tt(this,"animSpeed",ni.idle.animSpeed);tt(this,"transitionRate",2.8);tt(this,"refractionRatio",.985);tt(this,"reflectivity",.55);tt(this,"thickness",1.5);tt(this,"cubeRenderTarget");tt(this,"onResize",()=>{const{innerWidth:e,innerHeight:t}=window;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)});tt(this,"animate",()=>{requestAnimationFrame(this.animate);const e=this.clock.getDelta();this.lerpState(e),this.material.uniforms.uTime.value+=e*this.animSpeed,this.orb.updateMatrixWorld(),this.localCam.copy(this.camera.position),this.orb.worldToLocal(this.localCam),this.material.uniforms.uLocalCamPos.value.copy(this.localCam),this.controls.update(),this.composer.render()});this.scene=new Io,this.scene.background=new Be(Ka.background),this.camera=new Rt(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,0,6),this.renderer=new Uo({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Qa,this.renderer.toneMappingExposure=1.1;const t=vp(this.renderer);this.envMap=t.texture,this.cubeRenderTarget=t.target,this.scene.environment=xp(this.renderer),this.controls=new _p(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.enablePan=!1,this.controls.minDistance=3.5,this.controls.maxDistance=12,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=this.currentState.autoRotateSpeed,this.material=new Et({vertexShader:Rp,fragmentShader:Pp(Lp),uniforms:{uTime:{value:0},uNoiseLevel:{value:this.currentState.noiseLevel},uRefractionRatio:{value:this.refractionRatio},uReflectivity:{value:this.reflectivity},uThickness:{value:this.thickness},uEnvMap:{value:this.envMap},uLocalCamPos:{value:new P},uPrimaryColor:{value:new Be($n.primary)},uSecondaryColor:{value:new Be($n.secondary)},uShellTint:{value:new Be($n.shellTint)},uShellIridescence:{value:new Be($n.shellIridescence)},uShellIridescenceStrength:{value:$n.shellIridescenceStrength},uRimColor:{value:new Be($n.rim)},uEnergyDensity:{value:this.currentState.energyDensity},uFractalIters:{value:this.currentState.fractalIters},uFractalScale:{value:this.currentState.fractalScale},uFractalDecay:{value:this.currentState.fractalDecay},uInternalAnim:{value:this.currentState.internalAnim},uSmoothness:{value:this.currentState.smoothness},uAsymmetry:{value:this.currentState.asymmetry},uPetalCount:{value:this.currentState.petalCount},uPetalStrength:{value:this.currentState.petalStrength},uBloomRings:{value:this.currentState.bloomRings}},transparent:!0,depthWrite:!1,side:sn}),this.orb=new Xt(new ms(Ka.radius,128,128),this.material),this.scene.add(this.orb),this.composer=new bp(this.renderer),this.composer.addPass(new Ap(this.scene,this.camera)),this.composer.addPass(new ci(new Me(window.innerWidth,window.innerHeight),.4,.45,.72)),window.addEventListener("resize",this.onResize)}getActiveVoiceState(){return this.selectedPreset}getStateSnapshot(){return Jn(this.currentState)}getTargetStateSnapshot(){return Jn(this.targetState)}setVoiceState(e){this.selectedPreset=e,this.targetState=Jn(ni[e])}clearVoiceStateSelection(){this.selectedPreset=null,this.targetState=Jn(this.currentState)}applyStateConfig(e){this.material.uniforms.uNoiseLevel.value=e.noiseLevel,this.material.uniforms.uEnergyDensity.value=e.energyDensity,this.material.uniforms.uFractalIters.value=e.fractalIters,this.material.uniforms.uFractalScale.value=e.fractalScale,this.material.uniforms.uFractalDecay.value=e.fractalDecay,this.material.uniforms.uInternalAnim.value=e.internalAnim,this.material.uniforms.uSmoothness.value=e.smoothness,this.material.uniforms.uAsymmetry.value=e.asymmetry,this.material.uniforms.uPetalCount.value=e.petalCount,this.material.uniforms.uPetalStrength.value=e.petalStrength,this.material.uniforms.uBloomRings.value=e.bloomRings,this.controls.autoRotateSpeed=e.autoRotateSpeed,this.animSpeed=e.animSpeed}lerpState(e){const t=1-Math.exp(-this.transitionRate*e);for(const n of Dp)this.currentState[n]=gt.lerp(this.currentState[n],this.targetState[n],t);this.applyStateConfig(this.currentState)}setNoiseLevel(e){const t=gt.clamp(e,0,1);this.currentState.noiseLevel=t,this.targetState.noiseLevel=t,this.material.uniforms.uNoiseLevel.value=t}setRefractionRatio(e){this.refractionRatio=gt.clamp(e,.915,1),this.material.uniforms.uRefractionRatio.value=this.refractionRatio}setReflectivity(e){this.reflectivity=gt.clamp(e,0,3),this.material.uniforms.uReflectivity.value=this.reflectivity}setThickness(e){this.thickness=gt.clamp(e,0,5),this.material.uniforms.uThickness.value=this.thickness}setEnergyDensity(e){const t=gt.clamp(e,.1,3);this.currentState.energyDensity=t,this.targetState.energyDensity=t,this.material.uniforms.uEnergyDensity.value=t}setPrimaryColor(e){this.material.uniforms.uPrimaryColor.value.set(e)}setSecondaryColor(e){this.material.uniforms.uSecondaryColor.value.set(e)}setShellTint(e){this.material.uniforms.uShellTint.value.set(e)}setShellIridescence(e){this.material.uniforms.uShellIridescence.value.set(e)}setShellIridescenceStrength(e){this.material.uniforms.uShellIridescenceStrength.value=gt.clamp(e,0,1)}setRimColor(e){this.material.uniforms.uRimColor.value.set(e)}setPetalCount(e){const t=gt.clamp(e,2,12);this.currentState.petalCount=t,this.targetState.petalCount=t,this.material.uniforms.uPetalCount.value=t}setPetalStrength(e){const t=gt.clamp(e,0,1);this.currentState.petalStrength=t,this.targetState.petalStrength=t,this.material.uniforms.uPetalStrength.value=t}setBloomRings(e){const t=gt.clamp(e,0,4);this.currentState.bloomRings=t,this.targetState.bloomRings=t,this.material.uniforms.uBloomRings.value=t}setFractalIters(e){const t=gt.clamp(e,2,8);this.currentState.fractalIters=t,this.targetState.fractalIters=t,this.material.uniforms.uFractalIters.value=t}setFractalScale(e){const t=gt.clamp(e,.65,1);this.currentState.fractalScale=t,this.targetState.fractalScale=t,this.material.uniforms.uFractalScale.value=t}setFractalDecay(e){const t=gt.clamp(e,-28,-8);this.currentState.fractalDecay=t,this.targetState.fractalDecay=t,this.material.uniforms.uFractalDecay.value=t}setSmoothness(e){const t=gt.clamp(e,0,.1);this.currentState.smoothness=t,this.targetState.smoothness=t,this.material.uniforms.uSmoothness.value=t}setAsymmetry(e){const t=gt.clamp(e,0,.8);this.currentState.asymmetry=t,this.targetState.asymmetry=t,this.material.uniforms.uAsymmetry.value=t}start(){this.setVoiceState("idle"),this.applyStateConfig(this.currentState),this.animate()}dispose(){window.removeEventListener("resize",this.onResize),this.cubeRenderTarget.dispose(),this.material.dispose(),this.renderer.dispose()}}function vi(i,e){const t=document.getElementById(i);if(!t)return;const n=()=>e(t.value);t.addEventListener("input",n),n()}function Mt(i,e,t,n,r){const s=document.getElementById(i),o=document.getElementById(e);if(!s||!o)return;const a=()=>{const l=Number(s.value);t(l),o.textContent=n(l),r==null||r()};s.addEventListener("input",a),a()}function kt(i,e,t,n){const r=document.getElementById(i),s=document.getElementById(e);!r||!s||(r.value=String(t),s.textContent=n(t))}function Za(i){kt("noise-level","noise-level-value",i.noiseLevel,e=>`${Math.round(e*100)}%`),kt("wave-density","wave-density-value",i.energyDensity,e=>e.toFixed(1)),kt("petal-count","petal-count-value",i.petalCount,e=>e.toFixed(0)),kt("petal-strength","petal-strength-value",i.petalStrength,e=>`${Math.round(e*100)}%`),kt("bloom-rings","bloom-rings-value",i.bloomRings,e=>e.toFixed(1)),kt("fractal-iters","fractal-iters-value",i.fractalIters,e=>e.toFixed(0)),kt("fractal-scale","fractal-scale-value",i.fractalScale,e=>e.toFixed(2)),kt("fractal-decay","fractal-decay-value",i.fractalDecay,e=>e.toFixed(1)),kt("smoothness","smoothness-value",i.smoothness,e=>e.toFixed(3)),kt("asymmetry","asymmetry-value",i.asymmetry,e=>e.toFixed(2))}function ss(i){document.querySelectorAll("[data-voice-state]").forEach(e=>{e.classList.toggle("is-active",e.dataset.voiceState===i)})}function Ip(i){const e=document.getElementById("voice-state-picker");e&&(e.querySelectorAll("[data-voice-state]").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.voiceState;i.setVoiceState(n),Za(ni[n]),ss(n)})}),Za(ni.idle),ss("idle"))}function Np(i){const e=()=>{i.clearVoiceStateSelection(),ss(null)};Ip(i),Mt("noise-level","noise-level-value",t=>i.setNoiseLevel(t),t=>`${Math.round(t*100)}%`,e),Mt("wave-density","wave-density-value",t=>i.setEnergyDensity(t),t=>t.toFixed(1),e),Mt("refraction-ratio","refraction-ratio-value",t=>i.setRefractionRatio(t),t=>t.toFixed(3)),Mt("reflectivity","reflectivity-value",t=>i.setReflectivity(t),t=>t.toFixed(2)),Mt("thickness","thickness-value",t=>i.setThickness(t),t=>t.toFixed(1)),vi("wave-primary",t=>i.setPrimaryColor(t)),vi("wave-secondary",t=>i.setSecondaryColor(t)),vi("shell-tint",t=>i.setShellTint(t)),vi("shell-iridescence",t=>i.setShellIridescence(t)),vi("rim-color",t=>i.setRimColor(t)),Mt("iridescence-strength","iridescence-strength-value",t=>i.setShellIridescenceStrength(t),t=>`${Math.round(t*100)}%`),Mt("petal-count","petal-count-value",t=>i.setPetalCount(t),t=>t.toFixed(0),e),Mt("petal-strength","petal-strength-value",t=>i.setPetalStrength(t),t=>`${Math.round(t*100)}%`,e),Mt("bloom-rings","bloom-rings-value",t=>i.setBloomRings(t),t=>t.toFixed(1),e),Mt("fractal-iters","fractal-iters-value",t=>i.setFractalIters(t),t=>t.toFixed(0),e),Mt("fractal-scale","fractal-scale-value",t=>i.setFractalScale(t),t=>t.toFixed(2),e),Mt("fractal-decay","fractal-decay-value",t=>i.setFractalDecay(t),t=>t.toFixed(1),e),Mt("smoothness","smoothness-value",t=>i.setSmoothness(t),t=>t.toFixed(3),e),Mt("asymmetry","asymmetry-value",t=>i.setAsymmetry(t),t=>t.toFixed(2),e)}const Ho=document.getElementById("orb-canvas");if(!Ho)throw new Error("Canvas element not found");const Go=new Up(Ho);Np(Go);Go.start();
