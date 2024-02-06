import{r as da,u as va,v as ua,w as M,x as ba,h as pa,c as Z,b as e,s as a,y as w,n as ga,j as ha,l as ma,k as fa,e as _a,i as wa,o as T,p as xa,f as H}from"../chunks/disclose-version.NOEjHuwy.js";import{b as ka,u as ya,p as ja,c as Aa,f as d,g as s,h as z,r as Ma,d as v,e as E,s as Za}from"../chunks/runtime.OKDeLD2b.js";import{p as Ta}from"../chunks/stores.WriJGbqz.js";import{o as Ha}from"../chunks/main-client.3Bnv-WbH.js";const Ia=!0,za=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ia},Symbol.toStringTag,{value:"Module"}));function La(r){const n=r-1;return n*n*n+1}function Oa(r,{delay:n=0,duration:u=400,easing:x=La,start:i=0,opacity:k=0}={}){const o=getComputedStyle(r),b=+o.opacity,y=o.transform==="none"?"":o.transform,p=1-i,l=b*(1-k);return{delay:n,duration:u,easing:x,css:(I,g)=>`
			transform: ${y} scale(${1-p*g});
			opacity: ${b-l*g}
		`}}var Sa=H('<span class="icon-[ic--baseline-open-in-new]"></span>'),$a=H("<li><a> <!></a></li>"),Ba=H('<div class="drawer md:drawer-open"><input type="checkbox" class="drawer-toggle" id="drawer-toggle-checkbox"> <div class="drawer-content"><nav class="navbar bg-base-100"><div class="navbar-start"><label for="drawer-toggle-checkbox" class="btn btn-ghost md:hidden text-2xl" aria-label="Toggle Menu"><span class="icon-[ic--baseline-menu]"></span></label></div> <div class="navbar-center"></div> <div class="navbar-end space-x-0"><a href="https://www.linkedin.com/in/julienbblanchet/" class="btn btn-ghost text-lg" aria-label="LinkedIn" title="LinkedIn"><span class="icon-[fa6-brands--linkedin]"></span></a> <a href="https://github.com/j55blanchet" class="btn btn-ghost text-lg" aria-label="GitHub" title="GitHub"><span class="icon-[fa6-brands--github]"></span></a> <div class="dropdown dropdown-end"><div tabindex="0" role="button" id="toggleTheme" class="btn btn-ghost" aria-label="Select Theme"><label class="swap swap-rotate" for="toggleTheme"><div class="swap-on"><svg class="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg></div> <div class="swap-off"><svg class="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg></div></label></div> <ul class="dropdown-content rounded-box shadow bg-base-200 p-2"><li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default"></li> <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light"></li> <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark"></li></ul></div></div></nav> <!></div> <div class="drawer-side lg:w-80"><label class="drawer-overlay" for="drawer-toggle-checkbox" aria-label="Close menu"></label> <div class="bg-base-200 min-h-screen"><ul class="menu"><li class="menu-title text-xl font-slabserif font-light">Julien Blanchet</li> <!></ul></div></div></div>');function Ea(r,n){Aa(n,!0);const u={};ka(u);const x=()=>Za(Ta,"$page",u),i=[],k=[{title:"About Me",href:"/"},{title:"Publications",href:"/publications"},{title:"Resumé",href:"/resume-fall-2023.pdf",external:!0}],o=["julienlight","juliendark"],b="julienlight",y="juliendark";let p=z(!1),l=z(null),I=E(()=>s(l)!==null&&o.find(t=>t===s(l))!==void 0?s(l):J()?y:b),g=E(()=>k.map(t=>({...t,active:x().url.pathname==t.href})));Ha(()=>{d(l,xa(localStorage.getItem("theme")))}),ya(()=>{s(l)!==null?window.localStorage.setItem("theme",s(l)):window.localStorage.removeItem("theme")});function J(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var L=T(r,!0,Ba),j=e(L);w(j);var O=a(a(j)),S=e(O),R=e(S),q=a(a(R)),F=a(a(q)),K=e(F),N=a(a(K)),Q=a(a(N)),$=e(Q),B=e($),U=e(B),X=a(a(U)),Y=e(X);da(Y,()=>Oa,null,!1);var W=a(a($)),C=e(W),h=e(C);w(h),h.value=(h.__value=null)==null?"":null;var D=a(a(C)),m=e(D);w(m),m.value=(m.__value="julienlight")==null?"":"julienlight";var aa=a(a(D)),f=e(aa);w(f),f.value=(f.__value="juliendark")==null?"":"juliendark";var ea=a(a(S)),ta=a(a(O)),la=e(ta),sa=a(a(la)),na=e(sa),ra=e(na),ia=a(a(ra));va(B,"swap-active",()=>s(I)==="julienlight"),ua(j,()=>s(p),t=>d(p,t)),M(i,[],h,()=>s(l),t=>d(l,t)),M(i,[],m,()=>s(l),t=>d(l,t)),M(i,[],f,()=>s(l),t=>d(l,t)),ba(ea,n.children,{},null),pa(ia,()=>s(g),65,(t,c,Ca)=>{var P=T(t,!0,$a),_=e(P),V=e(_),oa=a(V),A;Ma(()=>{A!==(A=v(c).href)&&ga(_,"href",A),ha(_,v(c).cssClass??""),ma(_,"active",v(c).active),fa(V,`${_a(v(c).title)} `)}),wa(oa,()=>v(c).external,G=>{var ca=T(G,!0,Sa);Z(G,ca)},null),Z(t,P)},null),Z(r,L),ja()}export{Ea as component,za as universal};
