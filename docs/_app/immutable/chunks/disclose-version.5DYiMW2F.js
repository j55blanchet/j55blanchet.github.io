import{F as ce,G as ae,H as oe,A as z,y as V,i as A,z as N,I as B,J as fe,K as S,x as H,g as R,U as T,L as q,M as ue,N as de,O as K,P as _e,f as w,Q as he,R as me,r as y,h as J,S as pe,T as ge,V as ye,c as ve,W as be,p as xe,X as ke,Y as we,q as E,Z as Ne,_ as Se,$ as U,a0 as Te,a as W,a1 as Ee}from"./runtime.j9jx5lyF.js";const g=Symbol("$state");function C(e,t=!0){if(typeof e=="object"&&e!=null&&!ce(e)){if(g in e)return e[g].p;const n=ue(e);if(n===ae||n===oe){const s=new Proxy(e,Le);return z(e,g,{value:Ce(e,s,t),writable:!1}),s}}return e}function Ce(e,t,n){return{s:new Map,v:V(0),a:A(e),i:n,p:t}}const Le={defineProperty(e,t,n){if(n.value){const s=e[g],l=s.s.get(t);l!==void 0&&N(l,C(n.value,s.i))}return Reflect.defineProperty(e,t,n)},deleteProperty(e,t){const n=e[g],s=n.s.get(t),l=n.a,r=delete e[t];if(l&&r){const i=n.s.get("length"),a=e.length-1;i!==void 0&&i.v!==a&&N(i,a)}return s!==void 0&&N(s,T),t in e&&B(n.v),r},get(e,t,n){var r;const s=e[g];let l=s.s.get(t);if(l===void 0&&(q()||fe)&&(!(t in e)||(r=S(e,t))!=null&&r.writable)&&(l=(s.i?V:H)(C(e[t],s.i)),s.s.set(t,l)),l!==void 0){const i=R(l);return i===T?void 0:i}return Reflect.get(e,t,n)},getOwnPropertyDescriptor(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&"value"in n){const l=e[g].s.get(t);l&&(n.value=R(l))}return n},has(e,t){var r;if(t===g)return!0;const n=e[g],s=Reflect.has(e,t);let l=n.s.get(t);return(l!==void 0||q()&&(!s||(r=S(e,t))!=null&&r.writable))&&(l===void 0&&(l=(n.i?V:H)(s?C(e[t],n.i):T),n.s.set(t,l)),R(l)===T)?!1:s},set(e,t,n){const s=e[g],l=s.s.get(t);l!==void 0&&N(l,C(n,s.i));const r=s.a,i=!(t in e);if(r&&t==="length")for(let a=n;a<e.length;a+=1){const u=s.s.get(a+"");u!==void 0&&N(u,T)}if(i&&B(s.v),e[t]=n,r&&i){const a=s.s.get("length"),u=e.length;a!==void 0&&a.v!==u&&N(a,u)}return!0},ownKeys(e){const t=e[g];return R(t.v),Reflect.ownKeys(e)}};let d=null;function k(e){d=e}function M(e){const t=[];let n=e,s=null;for(;n!==null;){const l=n.nodeType,r=n.nextSibling;if(l===8){const i=n.data;if(i.startsWith("ssr:")){const a=i.slice(4);if(s===null)s=a;else{if(a===s)return t;t.push(n)}n=r;continue}}s!==null&&t.push(n),n=r}return null}function I(e,t){let n=e;if(d!==null)if(t&&(n=n.firstChild),n.nodeType===8){let s=n.$$fragment;s===void 0?s=M(n):de(()=>{n.$$fragment=void 0}),k(s)}else{const s=n.firstChild;k(s===null?[]:[s])}}var x,P,Y,$,Q,X,D,ee,te,ne;function Ae(){x===void 0&&(x=Node.prototype,P=Element.prototype,Y=Text.prototype,$=Map.prototype,Q=x.appendChild,X=x.cloneNode,$.set,$.get,$.delete,P.__click=void 0,Y.__nodeValue=" ",P.__className="",D=S(x,"firstChild").get,ee=S(x,"nextSibling").get,te=S(x,"textContent").set,ne=S(P,"className").set)}function F(e,t){Q.call(e,t)}function Re(e,t){return X.call(e,t)}function Pe(e){const t=D.call(e);if(d!==null)if(t===null){const n=document.createTextNode("");return e.appendChild(n),n}else return j(t);return t}function Ye(e){if(d!==null){const t=e[0];return d!==null&&t!==null?j(t):t}return D.call(e)}function Fe(e){const t=ee.call(e);return d!==null&&t!==null?j(t):t}function $e(e,t){ne.call(e,t)}function Ge(e){te.call(e,"")}function j(e){if(e.nodeType===8&&e.data.startsWith("ssr:")&&d.at(-1)!==e){const t=M(e),s=(t.at(-1)||e).nextSibling;return s.$$fragment=t,s}return e}function ze(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Ie(e,t,n){if(A(e)){for(var s=0,l;s<e.length;s++)l=e[s],n===null?F(t,l):n.before(l);return e[0]}else e!==null&&(n===null?F(t,e):n.before(e));return e}function p(e){var t=e;if(A(e))for(var n=0,s;n<e.length;n++)s=e[n],n===0&&(t=s),s.isConnected&&s.remove();else e.isConnected&&e.remove();return t}function L(e,t,n){const s=[];for(const l of e){const r=l.r,i=l.e;t==="in"?(r==="in"||r==="both"?l.in():l.c(),l.d.inert=!1,K(i,!1)):t==="key"?r==="key"&&(l.p=l.i(n),l.in()):((r==="out"||r==="both")&&(l.p=l.i(),s.push(l.o)),l.d.inert=!0,K(i,!0))}if(s.length>0){const l=_e(()=>{w(l);const r=he(()=>{w(r),me(s)})},!1)}}const Ve=new Set,G=new Set;function Oe(){return document.createTextNode("")}function se(e,t){let n;return()=>{if(n===void 0){const s=ze(e);n=t?s:Pe(s)}return n}}function le(e,t,n,s){if(d!==null){n!==null&&I(n,!1);const l=d;if(l!==null)return e?l:l[0]}return t?Re(s(),!0):document.importNode(s(),!0)}function Me(e,t,n){return le(!1,t,e,n)}function De(e,t,n){return le(!0,t,e,n)}const je=se(" ",!1),Be=se("<!>",!0);function Ze(e){return Me(e,!0,je)}function Je(e){return De(e,!0,Be)}function ie(e,t,n){const s=we,l=t?A(e)?e:Array.from(e.childNodes):e;n!==null&&d===null&&Ie(l,null,n),s.d=l}function Qe(e,t){ie(t,!1,e)}function Xe(e,t){ie(t,!0,e)}function et(e,t){const n=e.__className,s=qe(t),l=d!==null;l&&e.className===s?e.__className=s:(n!==s||l&&e.className!==s)&&(s===""?e.removeAttribute("class"):$e(e,s),e.__className=s)}function tt(e,t){y(()=>He(e,t()))}function He(e,t){const n=e.__nodeValue,s=Ke(t);d!==null&&e.nodeValue===s?e.__nodeValue=s:n!==s&&(e.nodeValue=s,e.__nodeValue=s)}function qe(e){return e??""}function nt(e,t,n){n?e.classList.add(t):e.classList.remove(t)}function st(e,t,n){e.addEventListener("change",()=>{const s=e.checked;n(s)}),t()==null&&n(!1),y(()=>{const s=t();e.checked=!!s})}function lt(e,t,n){W(()=>{t(e),y(()=>()=>{y(()=>{W(()=>{(!Ee(n)||n.v===e)&&t(null)})})})})}function Z(e,t){var a;const n=t.type,s=((a=t.composedPath)==null?void 0:a.call(t))||[];let l=s[0]||t.target;t.target!==l&&z(t,"target",{configurable:!0,value:l});let r=0;const i=t.__root;if(i){const u=s.indexOf(i);if(u!==-1&&e===document)return;u<s.indexOf(e)&&(r=u)}for(l=s[r]||t.target,z(t,"currentTarget",{configurable:!0,get(){return l||document}});l!==null;){const u=l.parentNode||l.host||null,c="__"+n,o=l[c];if(o!==void 0&&!l.disabled)if(A(o)){const[h,...b]=o;h.apply(l,[t,...b])}else o.call(l,t);if(t.cancelBubble||u===e)break;l=u}t.__root=e,l=e}function it(e,t,n,s){I(e),t===void 0?s!==null&&s(e):t(e,n)}function rt(e,t,n,s){const l=pe();I(e);const r=d;let i=null,a=null,u=!1,c=null;const o=y(()=>{var _;const v=!!t();if(l.v!==v||!u){if(l.v=v,u){const f=l.c,m=l.a;v?(m===null||m.size===0?E(b):L(m,"out"),f===null||f.size===0?E(h):L(f,"in")):(f===null||f.size===0?E(h):L(f,"out"),m===null||m.size===0?E(b):L(m,"in"))}else if(d!==null){const f=(_=d==null?void 0:d[0])==null?void 0:_.data;!f||f==="ssr:if:true"&&!v||f==="ssr:if:false"&&v?(p(d),k(null)):d.shift()}u=!0}},l,!1),h=y((v,_)=>{const f=l.v;!f&&i!==null&&(p(i),i=null),f&&c!==_&&(n(e),c===null&&k(r),c=_,i=l.d),l.d=null},l,!0);l.ce=h;const b=y((v,_)=>{const f=l.v;f&&a!==null&&(p(a),a=null),!f&&c!==_&&(s!==null&&s(e),c===null&&k(r),c=_,a=l.d),l.d=null},l,!0);l.ae=b,J(o,()=>{i!==null&&p(i),a!==null&&p(a),w(h),w(b)}),l.e=o}function ct(e,t,n){const s=Te();let l=null;I(e);let r=null;s.r=c=>{const o=l,h=o.s;h.add(c),c.f(()=>{h.delete(c),h.size===0&&o.e!==null&&(o.d!==null&&(p(o.d),o.d=null),w(o.e),o.e=null)})};const i=()=>{const c={d:null,e:null,s:new Set,p:l},o=y(()=>{const h=s.d;h!==null&&(p(h),s.d=null),r&&n(r),c.d=s.d,s.d=null},s,!0);c.e=o,l=c},a=()=>{const c=l;if(c===null){i();return}const o=c.s;o.size===0?(c.d!==null&&(p(c.d),c.d=null),c.e?E(c.e):i()):(i(),L(o,"out"))},u=y(()=>{const c=t();r!==c&&(r=c,a())},s,!1);J(u,()=>{let c=l;for(;c!==null;){const o=c.d;o!==null&&p(o);const h=c.e;h!==null&&w(h),c=c.p}}),s.e=u}function Ke(e){return typeof e=="string"?e:e==null?"":e+""}function at(e){d!==null&&(O(e,"value",null),O(e,"checked",null))}function ot(e,t,n){y(()=>{const s=n();O(e,t,s)})}function O(e,t,n){n=n==null?null:n+"",(d===null||e.getAttribute(t)!==n&&t!=="src"&&t!=="href"&&t!=="srcset")&&(n===null?e.removeAttribute(t):e.setAttribute(t,n))}function ft(e,t){const n=C(t.props||{},!1);let[s,l]=re(e,{...t,props:n});const r={$set:i=>{Ne(n,i)},$destroy:l};for(const i of ge(s||{}))z(r,i,{get(){return s[i]},set(a){Se(()=>s[i]=a)},enumerable:!0});return r}function re(e,t){var b,v;Ae();const n=new Set,s=t.target,l=ye(t.intro||!1),r=s.firstChild,i=M(r),a=d;let u;try{let _=null;i===null&&(_=Oe(),s.appendChild(_)),k(i);const f=y(()=>{t.context&&(ve({}),be.c=t.context),u=e(_,t.props||{}),t.context&&xe()},l,!0);l.e=f}catch(_){if(t.recover!==!1&&i!==null)return console.error("ERR_SVELTE_HYDRATION_MISMATCH",_),p(i),r.remove(),(v=(b=i.at(-1))==null?void 0:b.nextSibling)==null||v.remove(),re(e,t);throw _}finally{k(a)}const c=Z.bind(null,s),o=Z.bind(null,document),h=_=>{for(let f=0;f<_.length;f++){const m=_[f];n.has(m)||(n.add(m),s.addEventListener(m,c,U.includes(m)?{passive:!0}:void 0),document.addEventListener(m,o,U.includes(m)?{passive:!0}:void 0))}};return h(ke(Ve)),G.add(h),[u,()=>{for(const f of n)s.removeEventListener(f,c);G.delete(h);const _=l.d;_!==null&&p(_),i!==null&&p(i),w(l.e)}]}const Ue="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ue);export{Oe as A,st as B,it as C,at as D,ft as E,ct as F,Ze as G,lt as H,g as S,Xe as a,Pe as b,Qe as c,De as d,Ke as e,se as f,Ye as g,et as h,rt as i,He as j,nt as k,ot as l,O as m,Je as n,Me as o,C as p,I as q,p as r,Fe as s,tt as t,L as u,Ge as v,d as w,M as x,k as y,Ie as z};