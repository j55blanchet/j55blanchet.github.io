import{t as v,a as u}from"../chunks/CkrBaP4o.js";import"../chunks/BnSB1vCn.js";import{B as T,C as B,D as h,F as b,G as C,I as D,g as k,J as F,K as G,L as H,M as I,a as m,c as _,r as d,h as J,b as K}from"../chunks/deL-6M_v.js";import{s as L}from"../chunks/BU8m_lbD.js";import{i as $}from"../chunks/CQgtVVBn.js";import{s as M,a as P}from"../chunks/wYfrtz67.js";import{p as S}from"../chunks/DKz8nFiI.js";function W(n=!1){const a=T,e=a.l.u;if(!e)return;let i=()=>F(a.s);if(n){let s=0,r={};const l=G(()=>{let p=!1;const c=a.s;for(const f in c)c[f]!==r[f]&&(r[f]=c[f],p=!0);return p&&s++,s});i=()=>k(l)}e.b.length&&B(()=>{x(a,i),b(e.b)}),h(()=>{const s=C(()=>e.m.map(D));return()=>{for(const r of s)typeof r=="function"&&r()}}),e.a.length&&h(()=>{x(a,i),b(e.a)})}function x(n,a){if(n.l.s)for(const e of n.l.s)k(e);a()}var j=v("<code>HTTP 404</code>"),q=v(": <code> </code>",1),z=v(`<main class="mw-prose p-4 prose mx-auto"><h1 class="font-slabserif">Sorry, we have a problem</h1> <p>We ran into a <!> error 
        while loading this page<!></p></main>`);function V(n,a){H(a,!1);const[e,i]=M(),s=()=>P(S,"$page",e);W();var r=z(),l=m(_(r),2),p=m(_(l));{var c=o=>{var t=j();u(o,t)};$(p,o=>{(s().status??200)>=400&&o(c)})}var f=m(p,2);{var w=o=>{var t=q(),g=m(J(t)),y=_(g);d(g),K(()=>L(y,`"${s().error.message??""}"`)),u(o,t)};$(f,o=>{var t;(t=s().error)!=null&&t.message&&o(w)})}d(l),d(r),u(n,r),I(),i()}export{V as component};
