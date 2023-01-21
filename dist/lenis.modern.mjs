import{createNanoEvents as t}from"nanoevents";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},e.apply(this,arguments)}var i=0;function s(t){return"__private_"+i+++"_"+t}function o(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function n(t,e,i){return Math.max(t,Math.min(e,i))}class r{advance(t){var e,i;if(!this.isRunning)return;this.value===this.from&&(null==(i=this.onStart)||i.call(this,this.from));let s=!1;if(this.lerp)this.value=(1-(o=this.lerp))*this.value+o*this.to,Math.round(this.value)===this.to&&(this.value=this.to,s=!0);else{this.currentTime+=t;const e=n(0,this.currentTime/this.duration,1);s=e>=1;const i=s?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}var o,r;null==(e=this.onUpdate)||e.call(this,this.value),s&&(null==(r=this.onComplete)||r.call(this,this.to),this.stop())}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i=.1,duration:s=1,easing:o=(t=>t),onStart:n,onUpdate:r,onComplete:h}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,this.onStart=n,this.onUpdate=r,this.onComplete=h}}var h=/*#__PURE__*/s("resizeObserver"),l=/*#__PURE__*/s("onResize"),a=/*#__PURE__*/s("onWindowResize");class u{constructor(t){Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,l,{writable:!0,value:([t])=>{if(t){const{width:e,height:i}=t.contentRect;this.width=e,this.height=i}}}),Object.defineProperty(this,a,{writable:!0,value:()=>{this.width=window.innerWidth,this.height=window.innerHeight}}),this.element=t,t===window?(window.addEventListener("resize",o(this,a)[a]),o(this,a)[a]()):(this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,o(this,h)[h]=new ResizeObserver(o(this,l)[l]),o(this,h)[h].observe(this.element))}destroy(){window.removeEventListener("resize",this.onWindowResize),o(this,h)[h].disconnect()}}var c=/*#__PURE__*/s("wheelMultiplier"),d=/*#__PURE__*/s("touchMultiplier"),p=/*#__PURE__*/s("normalizeWheel"),v=/*#__PURE__*/s("touchStart"),m=/*#__PURE__*/s("emitter"),f=/*#__PURE__*/s("onTouchStart"),w=/*#__PURE__*/s("onTouchMove"),b=/*#__PURE__*/s("onWheel");class g{constructor(e,{wheelMultiplier:i=1,touchMultiplier:s=2,normalizeWheel:r=!1}){Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:t=>{const{pageX:e,pageY:i}=t.targetTouches?t.targetTouches[0]:t;o(this,v)[v].x=e,o(this,v)[v].y=i}}),Object.defineProperty(this,w,{writable:!0,value:t=>{const{pageX:e,pageY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-o(this,v)[v].x)*o(this,d)[d],n=-(i-o(this,v)[v].y)*o(this,d)[d];o(this,v)[v].x=e,o(this,v)[v].y=i,o(this,m)[m].emit("scroll",{type:"touch",deltaX:s,deltaY:n,event:t})}}),Object.defineProperty(this,b,{writable:!0,value:t=>{let{deltaX:e,deltaY:i}=t;o(this,p)[p]&&(e=n(-100,e,100),i=n(-100,i,100)),e*=o(this,c)[c],i*=o(this,c)[c],o(this,m)[m].emit("scroll",{type:"wheel",deltaX:e,deltaY:i,event:t})}}),this.element=e,o(this,c)[c]=i,o(this,d)[d]=s,o(this,p)[p]=r,o(this,v)[v]={x:null,y:null},o(this,m)[m]=t(),this.element.addEventListener("wheel",o(this,b)[b],{passive:!1}),this.element.addEventListener("touchstart",o(this,f)[f],{passive:!1}),this.element.addEventListener("touchmove",o(this,w)[w],{passive:!1})}on(t,e){return o(this,m)[m].on(t,e)}destroy(){o(this,m)[m].events={},this.element.removeEventListener("wheel",o(this,b)[b],{passive:!1}),this.element.removeEventListener("touchstart",o(this,f)[f],{passive:!1}),this.element.removeEventListener("touchmove",o(this,w)[w],{passive:!1})}}var y=/*#__PURE__*/s("options"),O=/*#__PURE__*/s("wrapper"),j=/*#__PURE__*/s("content"),P=/*#__PURE__*/s("animate"),S=/*#__PURE__*/s("emitter"),M=/*#__PURE__*/s("virtualScroll"),T=/*#__PURE__*/s("time"),z=/*#__PURE__*/s("velocity"),L=/*#__PURE__*/s("direction"),E=/*#__PURE__*/s("animatedScroll"),W=/*#__PURE__*/s("targetScroll"),R=/*#__PURE__*/s("_isScrolling"),C=/*#__PURE__*/s("_isStopped"),H=/*#__PURE__*/s("_isSmooth"),_=/*#__PURE__*/s("isLocked"),x=/*#__PURE__*/s("setScroll"),X=/*#__PURE__*/s("onVirtualScroll"),Y=/*#__PURE__*/s("onScroll"),D=/*#__PURE__*/s("classElement"),U=/*#__PURE__*/s("actualScroll"),A=/*#__PURE__*/s("isSmooth"),k=/*#__PURE__*/s("isScrolling"),q=/*#__PURE__*/s("isStopped");class B{constructor({direction:e,gestureDirection:i,mouseMultiplier:s,smooth:n,wrapper:h=window,content:l=document.documentElement,smoothWheel:a=null==n||n,smoothTouch:c=!1,duration:d,easing:p=(t=>Math.min(1,1.001-Math.pow(2,-10*t))),lerp:v=(d?null:.1),infinite:m=!1,orientation:f=(null!=e?e:"vertical"),gestureOrientation:w=(null!=i?i:"vertical"),touchMultiplier:b=2,wheelMultiplier:B=(null!=s?s:1),normalizeWheel:N=!0}={}){Object.defineProperty(this,q,{get:void 0,set:J}),Object.defineProperty(this,k,{get:void 0,set:I}),Object.defineProperty(this,A,{get:void 0,set:G}),Object.defineProperty(this,U,{get:K,set:void 0}),Object.defineProperty(this,D,{get:F,set:void 0}),Object.defineProperty(this,x,{value:V}),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,O,{writable:!0,value:void 0}),Object.defineProperty(this,j,{writable:!0,value:void 0}),Object.defineProperty(this,P,{writable:!0,value:void 0}),Object.defineProperty(this,S,{writable:!0,value:void 0}),Object.defineProperty(this,M,{writable:!0,value:void 0}),Object.defineProperty(this,T,{writable:!0,value:void 0}),Object.defineProperty(this,z,{writable:!0,value:void 0}),Object.defineProperty(this,L,{writable:!0,value:void 0}),Object.defineProperty(this,E,{writable:!0,value:void 0}),Object.defineProperty(this,W,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,C,{writable:!0,value:void 0}),Object.defineProperty(this,H,{writable:!0,value:void 0}),Object.defineProperty(this,_,{writable:!0,value:void 0}),Object.defineProperty(this,X,{writable:!0,value:({type:t,deltaX:e,deltaY:i,event:s})=>{if(s.ctrlKey)return;if("vertical"===o(this,y)[y].gestureOrientation&&0===i||"horizontal"===o(this,y)[y].gestureOrientation&&0===e)return;if(s.composedPath().find(t=>null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent")))return;if(this.isStopped||o(this,_)[_])return void s.preventDefault();if(o(this,A)[A]=o(this,y)[y].smoothTouch&&"touch"===t||o(this,y)[y].smoothWheel&&"wheel"===t,!this.isSmooth)return o(this,k)[k]=!1,void o(this,P)[P].stop();s.preventDefault();let n=i;"both"===o(this,y)[y].gestureOrientation?n=e+i:"horizontal"===o(this,y)[y].gestureOrientation&&(n=e),console.log("scrollTo",o(this,W)[W]+n),this.scrollTo(o(this,W)[W]+n,{},!1)}}),Object.defineProperty(this,Y,{writable:!0,value:()=>{if(!this.isScrolling){const t=o(this,E)[E];o(this,E)[E]=o(this,W)[W]=o(this,U)[U],o(this,z)[z]=0,o(this,L)[L]=Math.sign(o(this,E)[E]-t),this.emit()}}}),e&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),i&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),s&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),n&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion="1.0.0-dev.4",h!==document.documentElement&&h!==document.body||(h=window),o(this,y)[y]={wrapper:h,content:l,smoothWheel:a,smoothTouch:c,duration:d,easing:p,lerp:v,infinite:m,gestureOrientation:w,orientation:f,touchMultiplier:b,wheelMultiplier:B,normalizeWheel:N},o(this,O)[O]=new u(h),o(this,j)[j]=new u(l),o(this,D)[D].classList.add("lenis"),o(this,z)[z]=0,o(this,q)[q]=!1,o(this,A)[A]=a||c,o(this,k)[k]=!1,o(this,W)[W]=o(this,E)[E]=o(this,U)[U],o(this,P)[P]=new r,o(this,S)[S]=t(),o(this,O)[O].element.addEventListener("scroll",o(this,Y)[Y],{passive:!1}),o(this,M)[M]=new g(h,{touchMultiplier:b,wheelMultiplier:B,normalizeWheel:N}),o(this,M)[M].on("scroll",o(this,X)[X])}destroy(){o(this,S)[S].events={},o(this,O)[O].element.removeEventListener("scroll",o(this,Y)[Y],{passive:!1}),o(this,M)[M].destroy()}on(t,e){return o(this,S)[S].on(t,e)}emit(){o(this,S)[S].emit("scroll",this)}start(){o(this,q)[q]=!1}stop(){o(this,q)[q]=!0,o(this,P)[P].stop()}raf(t){const e=t-(o(this,T)[T]||t);o(this,T)[T]=t,o(this,P)[P].advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:s=!1,duration:r=o(this,y)[y].duration,easing:h=o(this,y)[y].easing,lerp:l=o(this,y)[y].lerp,onComplete:a}={},u=!0){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var c;let i;if("string"==typeof t?i=document.querySelector(t):null!=(c=t)&&c.nodeType&&(i=t),i){if(o(this,O)[O].element!==window){const t=o(this,O)[O].element.getBoundingClientRect();e-=this.isHorizontal?t.left:t.top}const s=i.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+o(this,E)[E]}}if("number"==typeof t)if(t+=e,o(this,y)[y].infinite?u&&(o(this,W)[W]=o(this,E)[E]=this.scroll):t=n(0,t,this.limit),o(this,E)[E]!==t){if(i)return o(this,E)[E]=o(this,W)[W]=t,o(this,x)[x](t),this.emit(),void(null==a||a());u||(o(this,W)[W]=t),o(this,P)[P].fromTo(o(this,E)[E],t,{duration:r,easing:h,lerp:l,onStart:()=>{s&&(o(this,_)[_]=!0),o(this,k)[k]=!0},onUpdate:t=>{o(this,z)[z]=t-o(this,E)[E],o(this,L)[L]=Math.sign(o(this,z)[z]),o(this,E)[E]=t,o(this,x)[x](t),u&&(o(this,W)[W]=t),this.emit()},onComplete:t=>{s&&(o(this,_)[_]=!1),requestAnimationFrame(()=>{o(this,k)[k]=!1}),o(this,z)[z]=0,this.emit(),null==a||a()}})}else null==a||a()}get options(){return e({},o(this,y)[y])}get limit(){return Math.round(this.isHorizontal?o(this,j)[j].width-o(this,O)[O].width:o(this,j)[j].height-o(this,O)[O].height)}get isHorizontal(){return"horizontal"===o(this,y)[y].orientation}get scroll(){return o(this,y)[y].infinite?function(t,e){let i=t%e;return(e>0&&i<0||e<0&&i>0)&&(i+=e),i}(o(this,E)[E],this.limit):o(this,E)[E]}get progress(){return this.scroll/this.limit}get velocity(){return o(this,z)[z]}get direction(){return o(this,L)[L]}get isSmooth(){return o(this,H)[H]}get isScrolling(){return o(this,R)[R]}get isStopped(){return o(this,C)[C]}}function V(t){o(this,y)[y].infinite&&(t=this.scroll),this.isHorizontal?o(this,D)[D].scrollLeft=t:o(this,D)[D].scrollTop=t}function F(){return o(this,O)[O].element===window?o(this,j)[j].element:o(this,O)[O].element}function K(){return o(this,D)[D].scrollTop}function G(t){o(this,H)[H]!==t&&o(this,D)[D].classList.toggle("lenis-smooth",t),o(this,H)[H]=t}function I(t){o(this,R)[R]!==t&&o(this,D)[D].classList.toggle("lenis-scrolling",t),o(this,R)[R]=t}function J(t){o(this,C)[C]!==t&&o(this,D)[D].classList.toggle("lenis-stopped",t),o(this,C)[C]=t}export{B as default};
//# sourceMappingURL=lenis.modern.mjs.map
