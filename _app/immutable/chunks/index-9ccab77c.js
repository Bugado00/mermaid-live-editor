function m(){}const lt=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function G(){return Object.create(null)}function b(t){t.forEach(Q)}function B(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function at(t){return Object.keys(t).length===0}function F(t,...e){if(t==null)return m;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t){let e;return F(t,n=>e=n)(),e}function Bt(t,e,n){t.$$.on_destroy.push(F(e,n))}function Ft(t,e,n,i){if(t){const s=U(t,e,n,i);return t[0](s)}}function U(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function It(t,e,n,i,s,o){if(s){const r=U(e,n,i,o);t.p(r,s)}}function Wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Gt(t){return t==null?"":t}function Jt(t,e,n){return t.set(n),e}const V=typeof window<"u";let ft=V?()=>window.performance.now():()=>Date.now(),H=V?t=>requestAnimationFrame(t):m;const w=new Set;function X(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&H(X)}function _t(t){let e;return w.size===0&&H(X),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let z=!1;function dt(){z=!0}function ht(){z=!1}function mt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let c=0;c<e.length;c++){const _=e[c];_.claim_order!==void 0&&u.push(_)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let u=0;u<e.length;u++){const c=e[u].claim_order,_=(s>0&&e[n[s]].claim_order<=c?s+1:mt(1,s,a=>e[n[a]].claim_order,c))-1;i[u]=n[_]+1;const f=_+1;n[f]=u,s=Math.max(f,s)}const o=[],r=[];let l=e.length-1;for(let u=n[s]+1;u!=0;u=i[u-1]){for(o.push(e[u-1]);l>=u;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<r.length;u++){for(;c<o.length&&r[u].claim_order>=o[c].claim_order;)c++;const _=c<o.length?o[c]:null;t.insertBefore(r[u],_)}}function yt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=Z("style");return bt(Y(t),e),e.sheet}function bt(t,e){yt(t.head||t,e)}function xt(t,e){if(z){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){z&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function $t(t){t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Ut(){return I(" ")}function Vt(){return I("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Yt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t){return t===""?null:+t}function vt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,s=!1){Et(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const u=n(l);return u===void 0?t.splice(r,1):t[r]=u,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const u=n(l);return u===void 0?t.splice(r,1):t[r]=u,s?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function et(t,e,n,i){return tt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ee(t,e,n){return et(t,e,n,Z)}function ne(t,e,n){return et(t,e,n,wt)}function kt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function ie(t){return kt(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e){t.value=e==null?"":e}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function le(t,e,n){t.classList[n?"add":"remove"](e)}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}const M=new Map;let P=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:gt(e),rules:{}};return M.set(t,n),n}function J(t,e,n,i,s,o,r,l=0){const u=16.666/i;let c=`{
`;for(let g=0;g<=1;g+=u){const x=e+(n-e)*o(g);c+=g*100+`%{${r(x,1-x)}}
`}const _=c+`100% {${r(n,1-n)}}
}`,f=`__svelte_${At(_)}_${l}`,a=Y(t),{stylesheet:d,rules:h}=M.get(a)||Nt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${s}ms 1 both`,P+=1,f}function St(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),P-=s,P||Ct())}function Ct(){H(()=>{P||(M.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),M.clear())})}let A;function k(t){A=t}function W(){if(!A)throw new Error("Function called outside component initialization");return A}function ue(t){W().$$.on_mount.push(t)}function oe(t){W().$$.after_update.push(t)}function ae(){const t=W();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=nt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function fe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const E=[],K=[],C=[],L=[],it=Promise.resolve();let T=!1;function rt(){T||(T=!0,it.then(st))}function _e(){return rt(),it}function R(t){C.push(t)}function de(t){L.push(t)}const O=new Set;let S=0;function st(){const t=A;do{for(;S<E.length;){const e=E[S];S++,k(e),jt(e.$$)}for(k(null),E.length=0,S=0;K.length;)K.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];O.has(n)||(O.add(n),n())}C.length=0}while(E.length);for(;L.length;)L.pop()();T=!1,O.clear(),k(t)}function jt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let v;function Mt(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function q(t,e,n){t.dispatchEvent(nt(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function he(){p={r:0,c:[],p}}function me(){p.r||b(p.c),p=p.p}function Pt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function pe(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt={duration:0};function ye(t,e,n,i){let s=e(t,n),o=i?0:1,r=null,l=null,u=null;function c(){u&&St(t,u)}function _(a,d){const h=a.b-o;return d*=Math.abs(h),{a:o,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=lt,tick:g=m,css:x}=s||Rt,D={start:ft()+d,b:a};a||(D.group=p,p.r+=1),r||l?l=D:(x&&(c(),u=J(t,o,a,h,d,y,x)),a&&g(0,1),r=_(D,h),R(()=>q(t,a,"start")),_t(N=>{if(l&&N>l.start&&(r=_(l,h),l=null,q(t,r.b,"start"),x&&(c(),u=J(t,o,r.b,r.duration,0,y,s.css))),r){if(N>=r.end)g(o=r.b,1-o),q(t,r.b,"end"),l||(r.b?c():--r.group.r||b(r.group.c)),r=null;else if(N>=r.start){const ct=N-r.start;o=r.a+r.d*y(ct/r.duration),g(o,1-o)}}return!!(r||l)}))}return{run(a){B(s)?Mt().then(()=>{s=s(),f(a)}):f(a)},end(){c(),r=l=null}}}function ge(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function be(t){t&&t.c()}function xe(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,on_mount:o,on_destroy:r,after_update:l}=t.$$;s&&s.m(e,n),i||R(()=>{const u=o.map(Q).filter(B);r?r.push(...u):b(u),t.$$.on_mount=[]}),l.forEach(R)}function Dt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(E.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,i,s,o,r,l=[-1]){const u=A;k(t);const c=t.$$={fragment:null,ctx:null,props:o,update:m,not_equal:s,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:G(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};r&&r(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return c.ctx&&s(c.ctx[f],c.ctx[f]=h)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](h),_&&Ot(t,f)),a}):[],c.update(),_=!0,b(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){dt();const f=vt(e.target);c.fragment&&c.fragment.l(f),f.forEach($t)}else c.fragment&&c.fragment.c();e.intro&&Pt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),ht(),st()}k(u)}class we{$destroy(){Dt(this,1),this.$destroy=m}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $=[];function qt(t,e){return{subscribe:Lt(t,e).subscribe}}function Lt(t,e=m){let n;const i=new Set;function s(l){if(ot(t,l)&&(t=l,n)){const u=!$.length;for(const c of i)c[1](),$.push(c,t);if(u){for(let c=0;c<$.length;c+=2)$[c][0]($[c+1]);$.length=0}}}function o(l){s(l(t))}function r(l,u=m){const c=[l,u];return i.add(c),i.size===1&&(n=e(s)||m),l(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:s,update:o,subscribe:r}}function ve(t,e,n){const i=!Array.isArray(t),s=i?[t]:t,o=e.length<2;return qt(n,r=>{let l=!1;const u=[];let c=0,_=m;const f=()=>{if(c)return;_();const d=e(i?u[0]:u,r);o?r(d):_=B(d)?d:m},a=s.map((d,h)=>F(d,y=>{u[h]=y,c&=~(1<<h),l&&f()},()=>{c|=1<<h}));return l=!0,f(),function(){b(a),_()}})}export{b as $,Lt as A,Tt as B,Ft as C,It as D,Wt as E,Ht as F,Bt as G,xt as H,ve as I,m as J,ae as K,K as L,wt as M,ne as N,Qt as O,Xt as P,Gt as Q,lt as R,we as S,Yt as T,le as U,R as V,ye as W,ge as X,de as Y,fe as Z,se as _,Ut as a,te as a0,Jt as a1,Kt as b,ie as c,me as d,Vt as e,Pt as f,he as g,$t as h,$e as i,oe as j,Z as k,ee as l,vt as m,Zt as n,ue as o,ce as p,I as q,kt as r,ot as s,pe as t,re as u,be as v,xe as w,zt as x,Dt as y,_e as z};