var S=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var i=(r,t,e)=>(S(r,t,"read from private field"),e?e.call(r):t.get(r)),w=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},T=(r,t,e,o)=>(S(r,t,"write to private field"),o?o.call(r,e):t.set(r,e),e);import{y as G,z,A as M,B as R,C as N,p as W,a as H,v as y,q as P,t as x,D as J}from"../chunks/runtime.Wi1j2Fie.js";import{A as K,z as C,c as E,B as L,C as Q,e as I,o as X,b as p,s as V,D as A,f as Y,a as Z,E as $,F as tt,G as D,d as U}from"../chunks/disclose-version.Wi8n1ata.js";function et(r){return class extends rt{constructor(t){super({component:r,...t})}}}var d,m;class rt{constructor(t){w(this,d,{});w(this,m,void 0);T(this,m,K(t.component,{target:t.target,props:{...t.props,$$events:i(this,d)},context:t.context,intro:t.intro,recover:t.recover}));for(const e of Object.keys(i(this,m)))e==="$set"||e==="$destroy"||G(this,e,{get(){return i(this,m)[e]},set(o){i(this,m)[e]=o},enumerable:!0})}$set(t){i(this,m).$set(t)}$on(t,e){i(this,d)[t]=i(this,d)[t]||[];const o=(...c)=>e.call(this,...c);return i(this,d)[t].push(o),()=>{i(this,d)[t]=i(this,d)[t].filter(c=>c!==o)}}$destroy(){i(this,m).$destroy()}}d=new WeakMap,m=new WeakMap;function st(r){z(()=>{const t=M(r);if(typeof t=="function")return t})}const nt="modulepreload",ot=function(r,t){return new URL(r,t).href},q={},b=function(t,e,o){let c=Promise.resolve();if(e&&e.length>0){const l=document.getElementsByTagName("link");c=Promise.all(e.map(s=>{if(s=ot(s,o),s in q)return;q[s]=!0;const _=s.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(!!o)for(let n=l.length-1;n>=0;n--){const a=l[n];if(a.href===s&&(!_||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${g}`))return;const u=document.createElement("link");if(u.rel=_?"stylesheet":nt,_||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),_)return new Promise((n,a)=>{u.addEventListener("load",n),u.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${s}`)))})}))}return c.then(()=>t()).catch(l=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l})},mt={};var at=U('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),it=U("<!> <!>",!0);function ct(r,t){H(t,!0);let e=R(t,"components",11,()=>[]),o=R(t,"data_0",3,null),c=R(t,"data_1",3,null);N(()=>t.stores.page.set(t.page)),z(()=>{t.stores,t.page,t.constructors,e(),t.form,o(),c(),t.stores.page.notify()});let l=P(!1),s=P(!1),_=P(null);st(()=>{const n=t.stores.page.subscribe(()=>{y(l)&&(x(s,!0),J().then(()=>{x(_,tt(document.title||"untitled page"))}))});return x(l,!0),n});var g=X(r,!0,it),k=p(g),u=V(V(k));C(k,()=>t.constructors[1],n=>{var a=A(n),h=p(a);L(h,()=>t.constructors[0],v=>{D(v(h,{get data(){return o()},children:(f,lt)=>{var O=A(f),B=p(O);L(B,()=>t.constructors[1],j=>{D(j(B,{get data(){return c()},get form(){return t.form}}),F=>e()[1]=F)}),E(f,O)}}),f=>e()[0]=f)}),E(n,a)},n=>{var a=A(n),h=p(a);L(h,()=>t.constructors[0],v=>{D(v(h,{get data(){return o()},get form(){return t.form}}),f=>e()[0]=f)}),E(n,a)}),C(u,()=>y(l),n=>{var a=Y(n,!0,at),h=Z(a);C(h,()=>y(s),v=>{var f=$(v);Q(f,()=>y(_)),I(v,f)},null),I(n,a)},null),E(r,g),W()}const _t=et(ct),ht=[()=>b(()=>import("../nodes/0.rUvViiko.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>b(()=>import("../nodes/1.RhFan8ym.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url),()=>b(()=>import("../nodes/2.n3DZ7EHN.js"),__vite__mapDeps([7,1,2]),import.meta.url),()=>b(()=>import("../nodes/3.zah8B0CG.js"),__vite__mapDeps([8,1,2]),import.meta.url)],vt=[],gt={"/":[2],"/publications":[3]},yt={handleError:({error:r})=>{console.error(r)},reroute:()=>{}};export{gt as dictionary,yt as hooks,mt as matchers,ht as nodes,_t as root,vt as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.rUvViiko.js","../chunks/disclose-version.Wi8n1ata.js","../chunks/runtime.Wi1j2Fie.js","../chunks/stores.F11XAZWi.js","../chunks/entry.CIdsN-Zd.js","../assets/0.XlE8srPU.css","../nodes/1.RhFan8ym.js","../nodes/2.n3DZ7EHN.js","../nodes/3.zah8B0CG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}