var I=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var i=(r,t,e)=>(I(r,t,"read from private field"),e?e.call(r):t.get(r)),R=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},S=(r,t,e,n)=>(I(r,t,"write to private field"),n?n.call(r,e):t.set(r,e),e);import{i as M,c as N,j as w,k as W,u as F,p as G,g as E,h as P,f as L,t as H}from"../chunks/runtime.OKDeLD2b.js";import{z as J,i as x,a as y,A as C,t as K,c as V,d as Q,g as b,s as B,q as O,o as X,b as Y,B as Z,p as $,C as A,f as q}from"../chunks/disclose-version.NOEjHuwy.js";import{o as tt}from"../chunks/main-client.3Bnv-WbH.js";function et(r){return class extends rt{constructor(t){super({component:r,...t})}}}var f,m;class rt{constructor(t){R(this,f,{});R(this,m,void 0);S(this,m,J(t.component,{target:t.target,props:{...t.props,$$events:i(this,f)},context:t.context,intro:t.intro,recover:t.recover}));for(const e of Object.keys(i(this,m)))e==="$set"||e==="$destroy"||M(this,e,{get(){return i(this,m)[e]},set(n){i(this,m)[e]=n},enumerable:!0})}$set(t){i(this,m).$set(t)}$on(t,e){i(this,f)[t]=i(this,f)[t]||[];const n=(...c)=>e.call(this,...c);return i(this,f)[t].push(n),()=>{i(this,f)[t]=i(this,f)[t].filter(c=>c!==n)}}$destroy(){i(this,m).$destroy()}}f=new WeakMap,m=new WeakMap;const st="modulepreload",ot=function(r,t){return new URL(r,t).href},j={},g=function(t,e,n){let c=Promise.resolve();if(e&&e.length>0){const l=document.getElementsByTagName("link");c=Promise.all(e.map(s=>{if(s=ot(s,n),s in j)return;j[s]=!0;const _=s.endsWith(".css"),p=_?'[rel="stylesheet"]':"";if(!!n)for(let o=l.length-1;o>=0;o--){const a=l[o];if(a.href===s&&(!_||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const u=document.createElement("link");if(u.rel=_?"stylesheet":st,_||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),_)return new Promise((o,a)=>{u.addEventListener("load",o),u.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${s}`)))})}))}return c.then(()=>t()).catch(l=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l})},mt={};var nt=q('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),at=q("<!> <!>",!0);function it(r,t){N(t,!0);let e=w(t,"components",11,()=>[]),n=w(t,"data_0",3,null),c=w(t,"data_1",3,null);W(()=>t.stores.page.set(t.page)),F(()=>{t.stores,t.page,t.constructors,e(),t.form,n(),c(),t.stores.page.notify()});let l=P(!1),s=P(!1),_=P(null);tt(()=>{const o=t.stores.page.subscribe(()=>{E(l)&&(L(s,!0),H().then(()=>{L(_,$(document.title||"untitled page"))}))});return L(l,!0),o});var p=Q(r,!0,at),k=b(p),u=B(B(k));x(k,()=>t.constructors[1],o=>{var a=O(o),h=b(a);C(h,()=>t.constructors[0],v=>{A(v(h,{get data(){return n()},children:(d,ct)=>{var T=O(d),D=b(T);C(D,()=>t.constructors[1],U=>{A(U(D,{get data(){return c()},get form(){return t.form}}),z=>e()[1]=z)}),y(d,T)}}),d=>e()[0]=d)}),y(o,a)},o=>{var a=O(o),h=b(a);C(h,()=>t.constructors[0],v=>{A(v(h,{get data(){return n()},get form(){return t.form}}),d=>e()[0]=d)}),y(o,a)}),x(u,()=>E(l),o=>{var a=X(o,!0,nt),h=Y(a);x(h,()=>E(s),v=>{var d=Z(v);K(d,()=>E(_)),V(v,d)},null),V(o,a)},null),y(r,p),G()}const _t=et(it),ht=[()=>g(()=>import("../nodes/0.C-i42iVN.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>g(()=>import("../nodes/1.cqze6ThY.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url),()=>g(()=>import("../nodes/2.VKdy6BD1.js"),__vite__mapDeps([8,1,2]),import.meta.url),()=>g(()=>import("../nodes/3.BkGY0SdF.js"),__vite__mapDeps([9,1,2]),import.meta.url),()=>g(()=>import("../nodes/4.Y_2BecA-.js"),__vite__mapDeps([10,1,2]),import.meta.url)],vt=[],gt={"/":[2],"/colortest":[3],"/publications":[4]},pt={handleError:({error:r})=>{console.error(r)},reroute:()=>{}};export{gt as dictionary,pt as hooks,mt as matchers,ht as nodes,_t as root,vt as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.C-i42iVN.js","../chunks/disclose-version.NOEjHuwy.js","../chunks/runtime.OKDeLD2b.js","../chunks/stores.WriJGbqz.js","../chunks/entry.BnmV7ERo.js","../chunks/main-client.3Bnv-WbH.js","../assets/0.4tSi8_WE.css","../nodes/1.cqze6ThY.js","../nodes/2.VKdy6BD1.js","../nodes/3.BkGY0SdF.js","../nodes/4.Y_2BecA-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
