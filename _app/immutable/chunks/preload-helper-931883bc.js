import{E as d,F as y,G as E,s as S,H as L}from"./index-e5d76bd0.js";const f=[];function k(r,s){return{subscribe:q(r,s).subscribe}}function q(r,s=d){let i;const o=new Set;function n(e){if(S(r,e)&&(r=e,i)){const c=!f.length;for(const t of o)t[1](),f.push(t,r);if(c){for(let t=0;t<f.length;t+=2)f[t][0](f[t+1]);f.length=0}}}function u(e){n(e(r))}function l(e,c=d){const t=[e,c];return o.add(t),o.size===1&&(i=s(n)||d),e(r),()=>{o.delete(t),o.size===0&&(i(),i=null)}}return{set:n,update:u,subscribe:l}}function R(r,s,i){const o=!Array.isArray(r),n=o?[r]:r,u=s.length<2;return k(i,l=>{let e=!1;const c=[];let t=0,b=d;const m=()=>{if(t)return;b();const a=s(o?c[0]:c,l);u?l(a):b=L(a)?a:d},_=n.map((a,p)=>y(a,g=>{c[p]=g,t&=~(1<<p),e&&m()},()=>{t|=1<<p}));return e=!0,m(),function(){E(_),b()}})}const w=function(){const s=document.createElement("link").relList;return s&&s.supports&&s.supports("modulepreload")?"modulepreload":"preload"}(),C=function(r){return"/mermaid-live-editor/_app/"+r},h={},U=function(s,i,o){return!i||i.length===0?s():Promise.all(i.map(n=>{if(n=C(n),n in h)return;h[n]=!0;const u=n.endsWith(".css"),l=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${l}`))return;const e=document.createElement("link");if(e.rel=u?"stylesheet":w,u||(e.as="script",e.crossOrigin=""),e.href=n,document.head.appendChild(e),u)return new Promise((c,t)=>{e.addEventListener("load",c),e.addEventListener("error",()=>t(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>s())};export{U as _,R as d,q as w};