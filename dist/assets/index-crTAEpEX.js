var dt=Object.defineProperty;var gt=(e,t,n)=>t in e?dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var se=(e,t,n)=>(gt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const vt=(e,t)=>e===t,L=Symbol("solid-proxy"),Ge=Symbol("solid-track"),de={equals:vt};let Qe=nt;const D=1,ge=2,Ye={owned:null,cleanups:null,context:null,owner:null};var h=null;let xe=null,$=null,T=null,P=null,pe=0;function _t(e,t){const n=$,i=h,s=e.length===0,r=t===void 0?i:t,o=s?Ye:{owned:null,cleanups:null,context:r?r.context:null,owner:r},l=s?e:()=>e(()=>O(()=>we(o)));h=o,$=null;try{return F(l,!0)}finally{$=n,h=i}}function Ze(e,t){t=t?Object.assign({},de,t):de;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.value)),tt(n,s));return[et.bind(n),i]}function A(e,t,n){const i=Ee(e,t,!1,D);ce(i)}function Ke(e,t,n){Qe=St;const i=Ee(e,t,!1,D);(!n||!n.render)&&(i.user=!0),P?P.push(i):ce(i)}function ve(e,t,n){n=n?Object.assign({},de,n):de;const i=Ee(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,ce(i),et.bind(i)}function ht(e){return F(e,!1)}function O(e){if($===null)return e();const t=$;$=null;try{return e()}finally{$=t}}function mt(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Ae(){return $}function $t(e,t){const n=Symbol("context");return{id:n,Provider:xt(n),defaultValue:e}}function bt(e){return h&&h.context&&h.context[e.id]!==void 0?h.context[e.id]:e.defaultValue}function yt(e){const t=ve(e),n=ve(()=>Ce(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function et(){if(this.sources&&this.state)if(this.state===D)ce(this);else{const e=T;T=null,F(()=>he(this),!1),T=e}if($){const e=this.observers?this.observers.length:0;$.sources?($.sources.push(this),$.sourceSlots.push(e)):($.sources=[this],$.sourceSlots=[e]),this.observers?(this.observers.push($),this.observerSlots.push($.sources.length-1)):(this.observers=[$],this.observerSlots=[$.sources.length-1])}return this.value}function tt(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&F(()=>{for(let s=0;s<e.observers.length;s+=1){const r=e.observers[s],o=xe&&xe.running;o&&xe.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?T.push(r):P.push(r),r.observers&&it(r)),o||(r.state=D)}if(T.length>1e6)throw T=[],new Error},!1)),t}function ce(e){if(!e.fn)return;we(e);const t=pe;pt(e,e.value,t)}function pt(e,t,n){let i;const s=h,r=$;$=h=e;try{i=e.fn(t)}catch(o){return e.pure&&(e.state=D,e.owned&&e.owned.forEach(we),e.owned=null),e.updatedAt=n+1,st(o)}finally{$=r,h=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?tt(e,i):e.value=i,e.updatedAt=n)}function Ee(e,t,n,i=D,s){const r={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return h===null||h!==Ye&&(h.owned?h.owned.push(r):h.owned=[r]),r}function _e(e){if(e.state===0)return;if(e.state===ge)return he(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<pe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===D)ce(e);else if(e.state===ge){const i=T;T=null,F(()=>he(e,t[0]),!1),T=i}}function F(e,t){if(T)return e();let n=!1;t||(T=[]),P?n=!0:P=[],pe++;try{const i=e();return wt(n),i}catch(i){n||(P=null),T=null,st(i)}}function wt(e){if(T&&(nt(T),T=null),e)return;const t=P;P=null,t.length&&F(()=>Qe(t),!1)}function nt(e){for(let t=0;t<e.length;t++)_e(e[t])}function St(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:_e(i)}for(t=0;t<n;t++)_e(e[t])}function he(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const s=i.state;s===D?i!==t&&(!i.updatedAt||i.updatedAt<pe)&&_e(i):s===ge&&he(i,t)}}}function it(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ge,n.pure?T.push(n):P.push(n),n.observers&&it(n))}}function we(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const r=s.pop(),o=n.observerSlots.pop();i<s.length&&(r.sourceSlots[o]=i,s[i]=r,n.observerSlots[i]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)we(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Tt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function st(e,t=h){throw Tt(e)}function Ce(e){if(typeof e=="function"&&!e.length)return Ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=Ce(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function xt(e,t){return function(i){let s;return A(()=>s=O(()=>(h.context={...h.context,[e]:i.value},yt(()=>i.children))),void 0),s}}function R(e,t){return O(()=>e(t||{}))}const kt=e=>`Stale read from <${e}>.`;function rt(e){const t=e.keyed,n=ve(()=>e.when,void 0,{equals:(i,s)=>t?i===s:!i==!s});return ve(()=>{const i=n();if(i){const s=e.children;return typeof s=="function"&&s.length>0?O(()=>s(t?i:()=>{if(!O(n))throw kt("Show");return e.when})):s}return e.fallback},void 0,void 0)}function At(e,t,n){let i=n.length,s=t.length,r=i,o=0,l=0,c=t[s-1].nextSibling,g=null;for(;o<s||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[s-1]===n[r-1];)s--,r--;if(s===o){const u=r<i?l?n[l-1].nextSibling:n[r-l]:c;for(;l<r;)e.insertBefore(n[l++],u)}else if(r===l)for(;o<s;)(!g||!g.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],u),t[s]=n[r]}else{if(!g){g=new Map;let v=l;for(;v<r;)g.set(n[v],v++)}const u=g.get(t[o]);if(u!=null)if(l<u&&u<r){let v=o,_=1,m;for(;++v<s&&v<r&&!((m=g.get(t[v]))==null||m!==u+_);)_++;if(_>u-l){const b=t[o];for(;l<u;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const He="_$DX_DELEGATE";function Ct(e,t,n,i={}){let s;return _t(r=>{s=r,t===document?e():x(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{s(),t.textContent=""}}function W(e,t,n){let i;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},r=t?()=>O(()=>document.importNode(i||(i=s()),!0)):()=>(i||(i=s())).cloneNode(!0);return r.cloneNode=r,r}function Me(e,t=window.document){const n=t[He]||(t[He]=new Set);for(let i=0,s=e.length;i<s;i++){const r=e[i];n.has(r)||(n.add(r),t.addEventListener(r,Pt))}}function k(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function d(e,t){t==null?e.removeAttribute("class"):e.className=t}function It(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=r=>s.call(e,n[1],r))}else e.addEventListener(t,n)}function Ve(e,t,n){return O(()=>e(t,n))}function x(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return me(e,t,i,n);A(s=>me(e,t(),s,n),i)}function Pt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[t];if(i&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?i.call(n,s,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function me(e,t,n,i,s){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=B(e,n,i,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=B(e,n,i);else{if(r==="function")return A(()=>{let l=t();for(;typeof l=="function";)l=l();n=me(e,l,n,i)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(Ie(l,t,n,s))return A(()=>n=me(e,l,n,i,!0)),()=>n;if(l.length===0){if(n=B(e,n,i),o)return n}else c?n.length===0?Xe(e,l,i):At(e,n,l):(n&&B(e),Xe(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=B(e,n,i,t);B(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ie(e,t,n,i){let s=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],c=n&&n[r],g;if(!(l==null||l===!0||l===!1))if((g=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=Ie(e,l,c)||s;else if(g==="function")if(i){for(;typeof l=="function";)l=l();s=Ie(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||s}else e.push(l),s=!0;else{const u=String(l);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function Xe(e,t,n=null){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function B(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const c=l.parentNode===e;!r&&!o?c?e.replaceChild(s,l):e.insertBefore(s,n):c&&l.remove()}else r=!0}}else e.insertBefore(s,n);return[s]}const Et="_card_c1yzb_1",ke={card:Et,"menu-btn":"_menu-btn_c1yzb_13"};class Mt{constructor(){se(this,"isRunning");se(this,"startTime");se(this,"overallTime");se(this,"targetTime");this.isRunning=!1,this.startTime=0,this.overallTime=0,this.targetTime=1e3*60*25}getTimeElapsedSinceLastStart(){return this.startTime?Date.now()-this.startTime:0}start(){if(this.isRunning)return console.error("Timer is already running");this.isRunning=!0,this.startTime=Date.now()}stop(){if(!this.isRunning)return console.error("Timer is already stopped");this.isRunning=!1,this.overallTime=this.overallTime+this.getTimeElapsedSinceLastStart()}reset(){if(this.overallTime=0,this.isRunning){this.startTime=Date.now();return}this.startTime=0}clear(){this.isRunning&&this.stop(),this.overallTime=0,this.startTime=0,this.targetTime=1e3*60*25}set setTargetTime(t){t<=0||(this.targetTime=t)}get getTime(){if(!this.startTime)return 0;if(this.isRunning){const t=this.overallTime+this.getTimeElapsedSinceLastStart();return t>=this.targetTime?this.targetTime:t}return this.overallTime}get getTimeInSec(){return Math.floor(this.getTime%6e4/1e3)}get getTimeInMin(){return Math.floor(this.getTime/6e4)}get getTimeRemaining(){if(!this.startTime)return this.targetTime;const t=this.targetTime-this.getTime;return t<=0?0:t}get getTimeRemainingInSec(){return Math.floor(this.getTimeRemaining%6e4/1e3)}get getTimeRemainingInMin(){return Math.floor(this.getTimeRemaining/6e4)}}const Pe=Symbol("store-raw"),z=Symbol("store-node"),I=Symbol("store-has"),ot=Symbol("store-self");function lt(e){let t=e[L];if(!t&&(Object.defineProperty(e,L,{value:t=new Proxy(e,Dt)}),!Array.isArray(e))){const n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let s=0,r=n.length;s<r;s++){const o=n[s];i[o].get&&Object.defineProperty(e,o,{enumerable:i[o].enumerable,get:i[o].get.bind(t)})}}return t}function $e(e){let t;return e!=null&&typeof e=="object"&&(e[L]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function oe(e,t=new Set){let n,i,s,r;if(n=e!=null&&e[Pe])return n;if(!$e(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,l=e.length;o<l;o++)s=e[o],(i=oe(s,t))!==s&&(e[o]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let c=0,g=o.length;c<g;c++)r=o[c],!l[r].get&&(s=e[r],(i=oe(s,t))!==s&&(e[r]=i))}return e}function be(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function le(e,t,n){if(e[t])return e[t];const[i,s]=Ze(n,{equals:!1,internal:!0});return i.$=s,e[t]=i}function Rt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===L||t===z||(delete n.value,delete n.writable,n.get=()=>e[L][t]),n}function ct(e){Ae()&&le(be(e,z),ot)()}function Ot(e){return ct(e),Reflect.ownKeys(e)}const Dt={get(e,t,n){if(t===Pe)return e;if(t===L)return n;if(t===Ge)return ct(e),n;const i=be(e,z),s=i[t];let r=s?s():e[t];if(t===z||t===I||t==="__proto__")return r;if(!s){const o=Object.getOwnPropertyDescriptor(e,t);Ae()&&(typeof r!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(r=le(i,t,r)())}return $e(r)?lt(r):r},has(e,t){return t===Pe||t===L||t===Ge||t===z||t===I||t==="__proto__"?!0:(Ae()&&le(be(e,I),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Ot,getOwnPropertyDescriptor:Rt};function ye(e,t,n,i=!1){if(!i&&e[t]===n)return;const s=e[t],r=e.length;n===void 0?(delete e[t],e[I]&&e[I][t]&&s!==void 0&&e[I][t].$()):(e[t]=n,e[I]&&e[I][t]&&s===void 0&&e[I][t].$());let o=be(e,z),l;if((l=le(o,t,s))&&l.$(()=>n),Array.isArray(e)&&e.length!==r){for(let c=e.length;c<r;c++)(l=o[c])&&l.$();(l=le(o,"length",r))&&l.$(e.length)}(l=o[ot])&&l.$()}function ut(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const s=n[i];ye(e,s,t[s])}}function jt(e,t){if(typeof t=="function"&&(t=t(e)),t=oe(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const s=t[n];e[n]!==s&&ye(e,n,s)}ye(e,"length",i)}else ut(e,t)}function re(e,t,n=[]){let i,s=e;if(t.length>1){i=t.shift();const o=typeof i,l=Array.isArray(e);if(Array.isArray(i)){for(let c=0;c<i.length;c++)re(e,[i[c]].concat(t),n);return}else if(l&&o==="function"){for(let c=0;c<e.length;c++)i(e[c],c)&&re(e,[c].concat(t),n);return}else if(l&&o==="object"){const{from:c=0,to:g=e.length-1,by:u=1}=i;for(let v=c;v<=g;v+=u)re(e,[v].concat(t),n);return}else if(t.length>1){re(e[i],t,[i].concat(n));return}s=e[i],n=[i].concat(n)}let r=t[0];typeof r=="function"&&(r=r(s,n),r===s)||i===void 0&&r==null||(r=oe(r),i===void 0||$e(s)&&$e(r)&&!Array.isArray(r)?ut(s,r):ye(e,i,r))}function Lt(...[e,t]){const n=oe(e||{}),i=Array.isArray(n),s=lt(n);function r(...o){ht(()=>{i&&o.length===1?jt(n,o[0]):re(n,o)})}return[s,r]}function j(e){return e.map(n=>n.toString().padStart(2,"0")).join(":")}function Je(e,t){return Math.floor(parseFloat((e/t).toFixed(2))*100)}const ft={time:"25:00",timeWork:25,timeRest:5,timeInPercentage:0,countDown:!0,isRunning:!1,timerId:void 0},at=$t([ft,{}]);function Nt(e){const[t,n]=Lt(ft),i=new Mt;mt(()=>clearInterval(t.timerId));function s(){const y=Je(i.getTimeRemaining,i.targetTime);let p;p=[i.getTimeInMin,i.getTimeInSec],p=j(p),n({time:p,timeInPercentage:y}),y<=0&&m()}function r(){const y=Je(i.getTime,i.targetTime);let p;p=[i.getTimeRemainingInMin,i.getTimeRemainingInSec],p=j(p),n({time:p,timeInPercentage:y}),y>=100&&m()}function o(y=25){i.setTargetTime=6e4*y}function l(){i.start(),n("isRunning",!0),t.countDown?n("timerId",setInterval(r,1e3)):n("timerId",setInterval(s,1e3))}function c(){i.stop(),n("isRunning",!1),clearInterval(t.timerId)}function g(){i.reset(),t.countDown?(n("time",j([t.timeWork,0])),n("timeInPercentage",0)):(n("time",j([0,0])),n("timeInPercentage",100))}function u(){i.clear(),clearInterval(t.timerId),n({time:"25:00",countDown:!0,timeWork:25,timeRest:5,isRunning:!1,timeInPercentage:0})}function v(){clearInterval(t.timerId),i.clear(),n({time:"00:00",countDown:!1,isRunning:!1})}function _(){clearInterval(t.timerId),i.clear()}function m(){clearInterval(t.timerId),i.clear(),t.countDown?(o(t.timeRest),n({time:"00:00",countDown:!1,isRunning:!1,timeInPercentage:100})):(o(t.timeWork),n({time:j([t.timeWork,0]),countDown:!0,isRunning:!1,timeInPercentage:0}))}function b(y=25,p=5){i.clear(),clearInterval(t.timerId),n({timeWork:y,timeRest:p,isRunning:!1}),t.countDown?(o(t.timeWork),n({time:j([t.timeWork,0]),timeInPercentage:0})):(o(t.timeRest),n({time:j([t.timeRest,0]),timeInPercentage:100}))}return R(at.Provider,{value:[t,{clear:u,countdownMode:_,countMode:v,reset:g,setTimeInMin:b,start:l,stop:c,switchTimerMode:m}],get children(){return e.children}})}const Re=()=>bt(at);function qt(e,t){return Math.floor(parseFloat((e/100).toFixed(2))*t)}const Bt="_container_rvkce_1",zt="_display_rvkce_6",Ft="_timer_rvkce_23",Wt="_info_rvkce_27",Ut="_clock_rvkce_42",Gt="_label_rvkce_46",S={container:Bt,display:zt,timer:Ft,"info-container":"_info-container_rvkce_27",info:Wt,clock:Ut,label:Gt,"progress-bar":"_progress-bar_rvkce_50"},Kt=W("<div><audio tabindex=-1><source src=/timer-finished.mp3 type=audio/mpeg></audio><div><span></span><span></span><span>:</span><span></span><span></span></div><div><p><span>:00</span> <span>TIME WORK</span></p><p><span>:00</span> <span>TIME REST</span></p></div><svg height=260 width=260 aria-hidden><linearGradient id=grad1 x1=0% y1=0% x2=100% y2=100%><stop offset=0%></stop><stop offset=100%></stop></linearGradient><linearGradient id=grad2 x1=0% y1=0% x2=100% y2=100%><stop offset=0%></stop><stop offset=100%></stop></linearGradient><circle cx=129 cy=129 r=119 fill=none stroke=url(grad1) stroke-width=10 stroke-linecap=round>");function Ht(){const[e]=Re(),t=750,n=()=>qt(e.timeInPercentage,t);let i,s;return Ke(()=>{e.countDown?i&&(i.style.stroke="url(#grad1)"):i&&(i.style.stroke="url(#grad2)")}),Ke(()=>{(e.isRunning&&e.timeInPercentage>=100&&e.countDown||e.isRunning&&e.timeInPercentage<=0&&!e.countDown)&&(s==null||s.play())}),(()=>{const r=Kt(),o=r.firstChild,l=o.nextSibling,c=l.firstChild,g=c.nextSibling,u=g.nextSibling,v=u.nextSibling,_=v.nextSibling,m=l.nextSibling,b=m.firstChild,y=b.firstChild,p=y.firstChild,ue=y.nextSibling,Se=ue.nextSibling,fe=b.nextSibling,E=fe.firstChild,ae=E.firstChild,Te=E.nextSibling,f=Te.nextSibling,U=m.nextSibling,G=U.firstChild,N=G.firstChild,K=N.nextSibling,H=G.nextSibling,q=H.firstChild,V=q.nextSibling,M=H.nextSibling,X=s;typeof X=="function"?Ve(X,o):s=o,x(c,()=>e.time[0]),x(g,()=>e.time[1]),x(v,()=>e.time[3]),x(_,()=>e.time[4]),x(y,()=>e.timeWork,p),x(E,()=>e.timeRest,ae),N.style.setProperty("stop-color","var(--pink700)"),N.style.setProperty("stop-opacity","1"),K.style.setProperty("stop-color","var(--pink500)"),K.style.setProperty("stop-opacity","1"),q.style.setProperty("stop-color","var(--green700)"),q.style.setProperty("stop-opacity","1"),V.style.setProperty("stop-color","var(--green500)"),V.style.setProperty("stop-opacity","1");const J=i;return typeof J=="function"?Ve(J,M):i=M,A(a=>{const Q=S.container,Y=`${S.display} ${e.countDown?"text-pink":"text-green"}`,Z=S.timer,ee=S.timer,te=S.timer,ne=S.timer,ie=S.timer,Oe=S["info-container"],De=S.info,je=S.clock,Le=S.label,Ne=S.info,qe=S.clock,Be=S.label,ze=S["progress-bar"],Fe=t.toString(),We=n(),Ue=S.circle;return Q!==a._v$&&d(r,a._v$=Q),Y!==a._v$2&&d(l,a._v$2=Y),Z!==a._v$3&&d(c,a._v$3=Z),ee!==a._v$4&&d(g,a._v$4=ee),te!==a._v$5&&d(u,a._v$5=te),ne!==a._v$6&&d(v,a._v$6=ne),ie!==a._v$7&&d(_,a._v$7=ie),Oe!==a._v$8&&d(m,a._v$8=Oe),De!==a._v$9&&d(b,a._v$9=De),je!==a._v$10&&d(y,a._v$10=je),Le!==a._v$11&&d(Se,a._v$11=Le),Ne!==a._v$12&&d(fe,a._v$12=Ne),qe!==a._v$13&&d(E,a._v$13=qe),Be!==a._v$14&&d(f,a._v$14=Be),ze!==a._v$15&&k(U,"class",a._v$15=ze),Fe!==a._v$16&&k(M,"stroke-dasharray",a._v$16=Fe),We!==a._v$17&&k(M,"stroke-dashoffset",a._v$17=We),Ue!==a._v$18&&k(M,"class",a._v$18=Ue),a},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0}),r})()}const Vt="_popover_qgizr_11",Xt="_slideIn_qgizr_1",Jt="_checkbox_qgizr_43",Qt="_slider_qgizr_49",Yt="_close_qgizr_72",Zt="_form_qgizr_87",en="_title_qgizr_94",tn="_label_qgizr_101",nn="_tag_qgizr_106",sn="_input_qgizr_114",rn="_submit_qgizr_128",on="_subtitle_qgizr_145",ln="_legend_qgizr_150",w={popover:Vt,slideIn:Xt,switch:"_switch_qgizr_31",checkbox:Jt,slider:Qt,close:Yt,"close-svg":"_close-svg_qgizr_82",form:Zt,title:en,label:tn,tag:nn,input:sn,submit:rn,"timer-mode":"_timer-mode_qgizr_136",subtitle:on,legend:ln},cn=W('<div><label><input type=checkbox><span></span></label><button aria-label="close menu"><svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button><form><h2>Want to set a time?</h2><label><span>time work:</span><input placeholder=25 type=number name=work min=1 max=60 pattern=[0-9]></label><label><span>time rest:</span><input placeholder=5 type=number name=rest min=1 max=60></label><button type=submit>set time</button></form><button>timer mode</button><h3>Design made by <a target=blank href=https://dribbble.com/reticent_author>Marie</a> <br>and coded by <a href=https://github.com/codi-andre>me</a>.</h3><p>except this horrible menu &#128517;, <br> this was all my fault.');function un(e){const[,{setTimeInMin:t,switchTimerMode:n}]=Re();function i(r){r.preventDefault();const o=new FormData(r.currentTarget),l=Object.fromEntries(o.entries()),c=Object.create(l),g=parseInt(c.work,10),u=parseInt(c.rest,10);t(g,u)}function s(){document.documentElement.classList.toggle("green-theme")}return(()=>{const r=cn(),o=r.firstChild,l=o.firstChild,c=l.nextSibling,g=o.nextSibling,u=g.firstChild,v=g.nextSibling,_=v.firstChild,m=_.nextSibling,b=m.firstChild,y=b.nextSibling,p=m.nextSibling,ue=p.firstChild,Se=ue.nextSibling,fe=p.nextSibling,E=v.nextSibling,ae=E.nextSibling,Te=ae.nextSibling;return l.$$click=s,g.$$click=()=>e.closeMenu(f=>!f),v.addEventListener("submit",i),It(E,"click",n,!0),A(f=>{const U=w.popover,G=w.switch,N=w.checkbox,K=w.slider,H=`${w.close} btn-active`,q=w["close-svg"],V=w.form,M=w.title,X=w.label,J=w.tag,a=w.input,Q=w.label,Y=w.tag,Z=w.input,ee=`${w.submit} btn-active`,te=`${w["timer-mode"]} btn-active`,ne=w.subtitle,ie=w.legend;return U!==f._v$&&d(r,f._v$=U),G!==f._v$2&&d(o,f._v$2=G),N!==f._v$3&&d(l,f._v$3=N),K!==f._v$4&&d(c,f._v$4=K),H!==f._v$5&&d(g,f._v$5=H),q!==f._v$6&&k(u,"class",f._v$6=q),V!==f._v$7&&d(v,f._v$7=V),M!==f._v$8&&d(_,f._v$8=M),X!==f._v$9&&d(m,f._v$9=X),J!==f._v$10&&d(b,f._v$10=J),a!==f._v$11&&d(y,f._v$11=a),Q!==f._v$12&&d(p,f._v$12=Q),Y!==f._v$13&&d(ue,f._v$13=Y),Z!==f._v$14&&d(Se,f._v$14=Z),ee!==f._v$15&&d(fe,f._v$15=ee),te!==f._v$16&&d(E,f._v$16=te),ne!==f._v$17&&d(ae,f._v$17=ne),ie!==f._v$18&&d(Te,f._v$18=ie),f},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0}),r})()}Me(["click"]);const fn="_panel_e3gc2_1",C={panel:fn,"play-btn":"_play-btn_e3gc2_8","pause-btn":"_pause-btn_e3gc2_14","restart-btn":"_restart-btn_e3gc2_20","clear-btn":"_clear-btn_e3gc2_27","play-svg":"_play-svg_e3gc2_33","restart-svg":"_restart-svg_e3gc2_38","pause-svg":"_pause-svg_e3gc2_43","clear-svg":"_clear-svg_e3gc2_48"},an=W('<button aria-label=pause><svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"stroke-width=1.5 stroke=currentColor><path stroke-linecap=round stroke-linejoin=round d="M15.75 5.25v13.5m-7.5-13.5v13.5">'),dn=W('<div><button aria-label=restart><svg xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=currentColor viewBox="0 0 256 256"><path d=M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z></path></svg></button><button aria-label=clear><svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12">'),gn=W('<button aria-label=play><svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round><polygon points="5 3 19 12 5 21 5 3">');function vn(){const[e,{start:t,stop:n,reset:i,clear:s}]=Re();return(()=>{const r=dn(),o=r.firstChild,l=o.firstChild,c=o.nextSibling,g=c.firstChild;return o.$$click=()=>{i()},x(r,R(rt,{get when(){return e.isRunning},get fallback(){return(()=>{const u=gn(),v=u.firstChild;return u.$$click=()=>{t()},A(_=>{const m=`${C["play-btn"]} ${e.countDown?"bg-pink":"bg-green"} btn-active`,b=C["play-svg"];return m!==_._v$8&&d(u,_._v$8=m),b!==_._v$9&&k(v,"class",_._v$9=b),_},{_v$8:void 0,_v$9:void 0}),u})()},get children(){const u=an(),v=u.firstChild;return u.$$click=()=>{n()},A(_=>{const m=`${C["pause-btn"]} ${e.countDown?"bg-pink":"bg-green"} btn-active`,b=C["pause-svg"];return m!==_._v$&&d(u,_._v$=m),b!==_._v$2&&k(v,"class",_._v$2=b),_},{_v$:void 0,_v$2:void 0}),u}}),c),c.$$click=()=>{s()},A(u=>{const v=C.panel,_=`${C["restart-btn"]} btn-active`,m=C["restart-svg"],b=`${C["clear-btn"]} btn-active`,y=C["clear-svg"];return v!==u._v$3&&d(r,u._v$3=v),_!==u._v$4&&d(o,u._v$4=_),m!==u._v$5&&k(l,"class",u._v$5=m),b!==u._v$6&&d(c,u._v$6=b),y!==u._v$7&&k(g,"class",u._v$7=y),u},{_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),r})()}Me(["click"]);const _n=W('<main><button aria-label=menu><svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><line x1=4 x2=20 y1=12 y2=12></line><line x1=4 x2=20 y1=6 y2=6></line><line x1=4 x2=20 y1=18 y2=18>');function hn(){const[e,t]=Ze(!1);return R(Nt,{get children(){const n=_n(),i=n.firstChild,s=i.firstChild;return i.$$click=()=>t(r=>!r),x(n,R(rt,{get when(){return e()},get children(){return R(un,{closeMenu:t})}}),null),x(n,R(Ht,{}),null),x(n,R(vn,{}),null),A(r=>{const o=ke.card,l=`${ke["menu-btn"]} btn-active`,c=ke["menu-svg"];return o!==r._v$&&d(n,r._v$=o),l!==r._v$2&&d(i,r._v$2=l),c!==r._v$3&&k(s,"class",r._v$3=c),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n}})}Me(["click"]);const mn=document.getElementById("root");Ct(()=>R(hn,{}),mn);