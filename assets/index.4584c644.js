import{S as j,i as B,s as H,c as q,e as m,a as M,b as h,d as g,f as v,u as E,g as J,h as R,t as A,j as C,k as $,l as L,m as z,n as O,o as F,p as G,r as de,q as Q,v as pe,w as W,x as X,y as Y,z as T,A as _e,B as Z,C as me,D as he}from"./vendor.3603c073.js";const ge=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};ge();function x(r){return typeof r=="string"&&!!r}function ee(r){return Array.isArray(r)&&r.length>0}class y extends Error{static NoCards(){return new y("Flash cards file does not contain an array of cards.")}static CardMissingHeading(e){return new y(`Card ${e} does not contain a (string) "heading".`)}static CardMissingItems(e){return new y(`Card ${e} does not contain an array of "items".`)}static ItemMissingDescription(e,n){return new y(`Card ${e}, item ${n} first element is not a (string) description.`)}static ItemsMissingAnswers(e,n){return new y(`Card ${e}, item ${n} does not contain any answers.`)}static AnswerMissing(e,n,l){return new y(`Card ${e}, item ${n}, answer ${l} does not contain an array of (string) parts.`)}static PartMissing(e,n,l,t){return new y(`Card ${e}, item ${n}, answer ${l}, part ${t} is not a valid (string) part.`)}}function $e(r){if(!Array.isArray(r))throw y.NoCards();r.forEach((e,n)=>{if(typeof e.heading!="string")throw y.CardMissingHeading(n);if(!Array.isArray(e.items))throw y.CardMissingItems(n);e.items.forEach((l,t)=>{if(!x(l.description))throw y.ItemMissingDescription(n,t);if(!ee(l.answers))throw y.ItemsMissingAnswers(n,t);l.answers.forEach((s,i)=>{if(!ee(s))throw console.error(s),y.AnswerMissing(n,t,i);s.forEach((a,f)=>{if(!x(a))throw y.PartMissing(n,t,i,f)})})})})}const we=r=>({}),te=r=>({});function ve(r){let e,n,l,t;const s=r[1].header,i=q(s,r,r[0],te),a=r[1].default,f=q(a,r,r[0],null);return{c(){e=m("article"),n=m("header"),i&&i.c(),l=M(),f&&f.c(),h(n,"class","svelte-1phs15l"),h(e,"class","svelte-1phs15l")},m(o,u){g(o,e,u),v(e,n),i&&i.m(n,null),v(e,l),f&&f.m(e,null),t=!0},p(o,[u]){i&&i.p&&(!t||u&1)&&E(i,s,o,o[0],t?R(s,o[0],u,we):J(o[0]),te),f&&f.p&&(!t||u&1)&&E(f,a,o,o[0],t?R(a,o[0],u,null):J(o[0]),null)},i(o){t||(A(i,o),A(f,o),t=!0)},o(o){C(i,o),C(f,o),t=!1},d(o){o&&$(e),i&&i.d(o),f&&f.d(o)}}}function ye(r,e,n){let{$$slots:l={},$$scope:t}=e;return r.$$set=s=>{"$$scope"in s&&n(0,t=s.$$scope)},[t,l]}class be extends j{constructor(e){super();B(this,e,ye,ve,H,{})}}function ne(r){let e,n;const l=r[6].default,t=q(l,r,r[5],null);return{c(){e=m("aside"),t&&t.c(),h(e,"class","svelte-mkrmlb")},m(s,i){g(s,e,i),t&&t.m(e,null),n=!0},p(s,i){t&&t.p&&(!n||i&32)&&E(t,l,s,s[5],n?R(l,s[5],i,null):J(s[5]),null)},i(s){n||(A(t,s),n=!0)},o(s){C(t,s),n=!1},d(s){s&&$(e),t&&t.d(s)}}}function ke(r){let e,n,l,t,s,i,a,f=r[2]&&ne(r);return{c(){e=m("div"),n=m("button"),l=L(r[0]),t=M(),f&&f.c(),h(e,"class","svelte-mkrmlb")},m(o,u){g(o,e,u),v(e,n),v(n,l),v(e,t),f&&f.m(e,null),r[7](e),s=!0,i||(a=[z(window,"click",r[4]),z(n,"click",r[3])],i=!0)},p(o,[u]){(!s||u&1)&&O(l,o[0]),o[2]?f?(f.p(o,u),u&4&&A(f,1)):(f=ne(o),f.c(),A(f,1),f.m(e,null)):f&&(F(),C(f,1,1,()=>{f=null}),G())},i(o){s||(A(f),s=!0)},o(o){C(f),s=!1},d(o){o&&$(e),f&&f.d(),r[7](null),i=!1,de(a)}}}function se(r,e){return r===e||Array.from(r.children).some(n=>se(n,e))}function Ae(r,e,n){let{$$slots:l={},$$scope:t}=e,{text:s}=e,i=null,a=!1;function f(){n(2,a=!0)}function o(d){n(2,a=se(i,d.target))}function u(d){Q[d?"unshift":"push"](()=>{i=d,n(1,i)})}return r.$$set=d=>{"text"in d&&n(0,s=d.text),"$$scope"in d&&n(5,t=d.$$scope)},[s,i,a,f,o,t,l,u]}class Ce extends j{constructor(e){super();B(this,e,Ae,ke,H,{text:0})}}function le(r,e,n){const l=r.slice();return l[8]=e[n],l}function re(r,e,n){const l=r.slice();return l[11]=e[n].description,l[12]=e[n].answers,l}function ie(r,e,n){const l=r.slice();return l[15]=e[n],l}function oe(r){let e,n,l;return{c(){e=m("input"),h(e,"type","button"),e.value="\xD7",h(e,"title","clear cards")},m(t,s){g(t,e,s),n||(l=z(e,"click",r[4]),n=!0)},p:pe,d(t){t&&$(e),n=!1,l()}}}function Me(r){let e;return{c(){e=m("nav"),e.innerHTML='<a href="/vim.json" download="vim.json">Vim</a>',h(e,"class","svelte-13osyz3")},m(n,l){g(n,e,l)},d(n){n&&$(e)}}}function ae(r){let e,n,l=r[15].join("")+"",t;return{c(){e=m("dd"),n=m("kbd"),t=L(l)},m(s,i){g(s,e,i),v(e,n),v(n,t)},p(s,i){i&2&&l!==(l=s[15].join("")+"")&&O(t,l)},d(s){s&&$(e)}}}function fe(r){let e,n=r[11]+"",l,t,s=r[12],i=[];for(let a=0;a<s.length;a+=1)i[a]=ae(ie(r,s,a));return{c(){e=m("dt"),l=L(n);for(let a=0;a<i.length;a+=1)i[a].c();t=he()},m(a,f){g(a,e,f),v(e,l);for(let o=0;o<i.length;o+=1)i[o].m(a,f);g(a,t,f)},p(a,f){if(f&2&&n!==(n=a[11]+"")&&O(l,n),f&2){s=a[12];let o;for(o=0;o<s.length;o+=1){const u=ie(a,s,o);i[o]?i[o].p(u,f):(i[o]=ae(u),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1);i.length=s.length}},d(a){a&&$(e),T(i,a),a&&$(t)}}}function Ie(r){let e,n,l=r[8].items,t=[];for(let s=0;s<l.length;s+=1)t[s]=fe(re(r,l,s));return{c(){e=m("dl");for(let s=0;s<t.length;s+=1)t[s].c();n=M(),h(e,"class","svelte-13osyz3")},m(s,i){g(s,e,i);for(let a=0;a<t.length;a+=1)t[a].m(e,null);g(s,n,i)},p(s,i){if(i&2){l=s[8].items;let a;for(a=0;a<l.length;a+=1){const f=re(s,l,a);t[a]?t[a].p(f,i):(t[a]=fe(f),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(s){s&&$(e),T(t,s),s&&$(n)}}}function Se(r){let e,n=r[8].heading+"",l;return{c(){e=m("h1"),l=L(n),h(e,"slot","header"),h(e,"class","svelte-13osyz3")},m(t,s){g(t,e,s),v(e,l)},p(t,s){s&2&&n!==(n=t[8].heading+"")&&O(l,n)},d(t){t&&$(e)}}}function ce(r){let e,n;return e=new be({props:{$$slots:{header:[Se],default:[Ie]},$$scope:{ctx:r}}}),{c(){W(e.$$.fragment)},m(l,t){X(e,l,t),n=!0},p(l,t){const s={};t&262146&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){n||(A(e.$$.fragment,l),n=!0)},o(l){C(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function Ne(r){var U;let e,n,l,t,s,i,a,f,o,u,d,k,I,P,K,b=!!((U=r[0])==null?void 0:U.value)&&oe(r);f=new Ce({props:{text:"Decks",$$slots:{default:[Me]},$$scope:{ctx:r}}});let S=r[1],p=[];for(let c=0;c<S.length;c+=1)p[c]=ce(le(r,S,c));const ue=c=>C(p[c],1,1,()=>{p[c]=null});return{c(){e=m("header"),n=m("div"),l=m("label"),l.textContent="Cards JSON File",t=M(),b&&b.c(),s=M(),i=m("input"),a=M(),W(f.$$.fragment),o=M(),u=m("hr"),d=M(),k=m("main");for(let c=0;c<p.length;c+=1)p[c].c();h(l,"for","cards"),h(i,"type","file"),h(i,"accept","application/json"),h(i,"id","cards"),h(e,"class","svelte-13osyz3"),h(k,"class","svelte-13osyz3")},m(c,_){g(c,e,_),v(e,n),v(n,l),v(n,t),b&&b.m(n,null),v(n,s),v(n,i),r[5](i),v(e,a),X(f,e,null),g(c,o,_),g(c,u,_),g(c,d,_),g(c,k,_);for(let N=0;N<p.length;N+=1)p[N].m(k,null);I=!0,P||(K=z(i,"change",r[3]),P=!0)},p(c,[_]){var V;((V=c[0])==null?void 0:V.value)?b?b.p(c,_):(b=oe(c),b.c(),b.m(n,s)):b&&(b.d(1),b=null);const N={};if(_&262144&&(N.$$scope={dirty:_,ctx:c}),f.$set(N),_&2){S=c[1];let w;for(w=0;w<S.length;w+=1){const D=le(c,S,w);p[w]?(p[w].p(D,_),A(p[w],1)):(p[w]=ce(D),p[w].c(),A(p[w],1),p[w].m(k,null))}for(F(),w=S.length;w<p.length;w+=1)ue(w);G()}},i(c){if(!I){A(f.$$.fragment,c);for(let _=0;_<S.length;_+=1)A(p[_]);I=!0}},o(c){C(f.$$.fragment,c),p=p.filter(Boolean);for(let _=0;_<p.length;_+=1)C(p[_]);I=!1},d(c){c&&$(e),b&&b.d(),r[5](null),Y(f),c&&$(o),c&&$(u),c&&$(d),c&&$(k),T(p,c),P=!1,K()}}}function Le(r,e,n){let l;const t=me([]);_e(r,t,d=>n(1,l=d));const s=new FileReader;s.addEventListener("load",a);let i=null;function a(d){const k=JSON.parse(d.target.result.toString());try{$e(k)}catch(I){throw alert(I.message),I}Z(t,l=k,l)}function f(d){const[k=null]=d.target.files;k?s.readAsBinaryString(k):o()}function o(){Z(t,l=[],l),n(0,i.value=null,i)}function u(d){Q[d?"unshift":"push"](()=>{i=d,n(0,i)})}return[i,l,t,f,o,u]}class ze extends j{constructor(e){super();B(this,e,Le,Ne,H,{})}}new ze({target:document.getElementById("app")});