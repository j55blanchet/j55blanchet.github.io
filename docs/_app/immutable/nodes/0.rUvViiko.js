import{h as Q,r as A,g as U,i as Z,S as q,j as W,k as P,l as ee,m as ae,n as S,p as le,q as ne,e as O,s as b,a as y,u as se,v as te,w as re,x as ie,t as ce,y as oe,z as ue,f as H,d as R}from"../chunks/disclose-version.Wi8n1ata.js";import{d as z,r as C,i as _e,E as X,b as fe,c as de,e as k,f as ve,l as V,g as B,h as Y,j as he,k as $,m as pe,n as ge,o as be,q as j,u as me,p as xe,t as ye,v as J,a as Ee,w,x as we,s as Ae}from"../chunks/runtime.Wi1j2Fie.js";import{p as Ce}from"../chunks/stores.F11XAZWi.js";function Te(){}function Me(e,r,i,s,l,d,v){const m=(i&k)!==0,a=de(i,e);let f=null;Q(e,m);let h,x=null,p=null;a.r=n=>{const o=f,t=o.s;t.add(n),n.f(()=>{t.delete(n),t.size===0&&o.e!==null&&(o.d!==null&&(A(o.d),o.d=null),z(o.e),o.e=null)})};const c=()=>{const n={d:null,e:null,s:new Set,p:f},o=C(()=>{const t=a.d;t!==null&&(A(t),a.d=null);let u=a.a;(a.f&k)!==0&&(u=Z(),a.a.appendChild(u)),d(u),n.d=a.d,a.d=null},a,!0);n.e=o,f=n},g=n=>{const o=n.f,t=(o&k)!==0,u=n.a;v(h,n,u,t,l,o,!0,x)},_=C(()=>{const n=r();h=_e(n)?n:n==null?[]:Array.from(n),s!==null?x=h.map(s):i&X||h.map(Te);const o=h.length;if(d!==null){if(o===0){if(a.v.length!==0||p===null){g(a),c();return}}else if(a.v.length===0&&f!==null){const t=f,u=t.s;u.size===0?t.d!==null&&(A(t.d),t.d=null):U(u,"out")}}p!==null&&ve(p)},a,!1);p=C(g,a,!0),fe(_,()=>{const n=a.f,o=a.a,t=(n&k)!==0;let u=f;for(;u!==null;){const T=u.d;T!==null&&A(T);const E=u.e;E!==null&&z(E),u=u.p}v([],a,o,t,l,n,!1,x),z(p)}),a.e=_}function ke(e,r,i,s,l){Me(e,r,i,null,s,l,ze)}function ze(e,r,i,s,l,d,v){var m=q in e&&e[q].i,a=r.v,f=r.s;m&&(d&=~B);var h=a.length,x=e.length,p=Math.max(h,x),c=0,g,_;if(f.length!==0&&Se(f),x===0)for(g=[],s&&h!==0&&W(i);c<p;)_=a[c++],L(_,f,v,s);else{var n;if(g=Array(x),P!==null)for(var o=P[0];c<p;c++){n=m?V(e,c):e[c];var t=ee(o);ae(t),o=t.at(-1).nextSibling.nextSibling,_=K(n,null,c,l,d),g[c]=_}else for(;c<p;c++)c>=h?(n=m?V(e,c):e[c],_=K(n,null,c,l,d),g[c]=_,Ie(_,i,s,null)):c>=x?(_=a[c],L(_,f,v)):(n=e[c],_=a[c],g[c]=_,Oe(_,n,c,d))}r.v=g}function Ie(e,r,i,s){var l=e.d;return s===null?i?S(l,r,null):S(l,r.parentNode,r):S(l,null,s)}function Se(e){var r=e.length;if(r>0){for(var i=0,s,l;i<r;i++)s=e[i],l=s.r,l!==null&&(s.r=null,L(s,null,!1));e.length=0}}function Oe(e,r,i,s){s&B?Y(e.v,r):he(e.v)&&(e.v.o[e.v.p]=r);const l=e.s,d=(s&$)!==0,v=e.a;l!==null&&s&X&&v!==null&&v(e,l),d?Y(e.i,i):e.i=i}function L(e,r,i,s=!1){const l=e.s;if(i&&l!==null){for(let v of l)v.r==="key"&&l.delete(v);if(l.size===0)e.s=null;else{U(l,"out"),r!==null&&r.push(e);return}}const d=e.d;!s&&d!==null&&A(d),z(e.e)}function K(e,r,i,s,l){const v=(l&B)===0?e:l&ge?j(e):be(e),m=l&$?j(i):i,a=pe(v,m,r),f=C(h=>{s(null,h.v,h.i)},a,!0);return a.e=f,a}const He=!0,qe=Object.freeze(Object.defineProperty({__proto__:null,prerender:He},Symbol.toStringTag,{value:"Module"}));var je=R('<span class="icon-[ic--baseline-open-in-new]"></span>'),Le=R("<li><a> <!></a></li>"),Re=R('<div class="drawer lg:drawer-open"><input type="checkbox" class="drawer-toggle" id="drawer-toggle-checkbox"> <div class="drawer-content"><nav class="navbar bg-base-100"><div class="narbar-start"><label for="drawer-toggle-checkbox" class="btn btn-ghost lg:hidden text-2xl" aria-label="Toggle Menu"><span class="icon-[ic--baseline-menu]"></span></label></div></nav> <!></div> <div class="drawer-side"><label class="drawer-overlay" for="drawer-toggle-checkbox" aria-label="Close menu"></label> <div class="bg-base-200 min-h-screen"><ul class="menu"><li class="menu-title text-xl">Julien Blanchet</li> <!></ul></div></div></div>');function Pe(e,r){Ee(r,!0);const i={};me(i);const s=()=>Ae(Ce,"$page",i);let l=j(!1);const d=[{title:"About Me",href:"/"},{title:"Publications",href:"/publications"},{title:"Resumé",href:"/resume-fall-2023.pdf",external:!0}];let v=we(()=>d.map(t=>({...t,active:s().url.pathname==t.href})));var m=H(e,!0,Re),a=y(m);se(a);var f=b(b(a)),h=y(f),x=b(b(h)),p=b(b(f)),c=y(p),g=b(b(c)),_=y(g),n=y(_),o=b(b(n));le(a,()=>J(l),t=>ye(l,t)),ne(x,r.children,{},null),ke(o,()=>J(v),65,(t,u,T)=>{var E=H(t,!0,Le),M=y(E),D=y(M),F=b(D),I;C(()=>{I!==(I=w(u).href)&&te(M,"href",I),re(M,w(u).cssClass??""),ie(M,"active",w(u).active),ce(D,`${oe(w(u).title)} `)}),ue(F,()=>w(u).external,N=>{var G=H(N,!0,je);O(N,G)},null),O(t,E)},null),O(e,m),xe()}export{Pe as component,qe as universal};
