!function(r){"use strict";function n(r,n,t){return t.a=r,t.f=n,t}function f(t){return n(2,t,function(n){return function(r){return t(n,r)}})}function t(e){return n(3,e,function(t){return function(n){return function(r){return e(t,n,r)}}})}function e(u){return n(4,u,function(e){return function(t){return function(n){return function(r){return u(e,t,n,r)}}}})}function u(a){return n(5,a,function(u){return function(e){return function(t){return function(n){return function(r){return a(u,e,t,n,r)}}}}})}function a(i){return n(6,i,function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return i(a,u,e,t,n,r)}}}}}})}function p(r,n,t){return 2===r.a?r.f(n,t):r(n)(t)}function m(r,n,t,e){return 3===r.a?r.f(n,t,e):r(n)(t)(e)}function y(r,n,t,e,u){return 4===r.a?r.f(n,t,e,u):r(n)(t)(e)(u)}function k(r,n,t,e,u,a){return 5===r.a?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function w(r,n,t,e,u,a,i){return 6===r.a?r.f(n,t,e,u,a,i):r(n)(t)(e)(u)(a)(i)}var b={$:0};function l(r,n){return{$:1,a:r,b:n}}var i=f(l);function d(r){for(var n=b,t=r.length;t--;)n=l(r[t],n);return n}function h(r,n){for(var t,e=[],u=o(r,n,0,e);u&&(t=e.pop());u=o(t.a,t.b,0,e));return u}function o(r,n,t,e){if(100<t)return e.push(g(r,n)),!0;if(r===n)return!0;if("object"!=typeof r||null===r||null===n)return"function"==typeof r&&C(5),!1;for(var u in r.$<0&&(r=rn(r),n=rn(n)),r)if(!o(r[u],n[u],t+1,e))return!1;return!0}function v(r,n,t){if("object"!=typeof r)return r===n?0:r<n?-1:1;if(!r.$)return(t=v(r.a,n.a))?t:(t=v(r.b,n.b))?t:v(r.c,n.c);for(;r.b&&n.b&&!(t=v(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}var c=0;function g(r,n){return{a:r,b:n}}function s(r,n,t){return{a:r,b:n,c:t}}function $(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}var A=t(function(r,n,t){for(var e=Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),j=f(function(r,n){for(var t=Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,g(t,n)}),_=f(function(r,n){return n[r]}),T=t(function(r,n,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=t[a];return u[r]=n,u}),x=f(function(r,n){for(var t=n.length,e=Array(t+1),u=0;u<t;u++)e[u]=n[u];return e[t]=r,e}),E=t(function(r,n,t){for(var e=t.length,u=0;u<e;u++)n=p(r,t[u],n);return n}),N=t(function(r,n,t){for(var e=t.length-1;0<=e;e--)n=p(r,t[e],n);return n}),L=t(function(r,n,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=p(r,n+a,t[a]);return u});function C(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}var O=Math.cos,z=Math.sin;var D=Math.ceil,q=Math.floor,M=Math.round,B=Math.log;function S(r){return r+""}var F=f(function(r,n){return U(r,X(n))});function U(r,n){switch(r.$){case 3:return"boolean"==typeof n?Bn(n):Q("a BOOL",n);case 2:return"number"!=typeof n?Q("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?Bn(n):!isFinite(n)||n%1?Q("an INT",n):Bn(n);case 4:return"number"==typeof n?Bn(n):Q("a FLOAT",n);case 6:return"string"==typeof n?Bn(n):n instanceof String?Bn(n+""):Q("a STRING",n);case 9:return null===n?Bn(r.c):Q("null",n);case 5:return Bn(H(n));case 7:return Array.isArray(n)?I(r.b,n,d):Q("a LIST",n);case 8:return Array.isArray(n)?I(r.b,n,J):Q("an ARRAY",n);case 10:var t=r.d;if("object"!=typeof n||null===n||!(t in n))return Q("an OBJECT with a field named `"+t+"`",n);var e=U(r.b,n[t]);return Ln(e)?e:Mn(p(Fn,t,e.a));case 11:var u=r.e;if(!Array.isArray(n))return Q("an ARRAY",n);if(n.length<=u)return Q("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n);e=U(r.b,n[u]);return Ln(e)?e:Mn(p(Un,u,e.a));case 12:if("object"!=typeof n||null===n||Array.isArray(n))return Q("an OBJECT",n);var a=b;for(var i in n)if(n.hasOwnProperty(i)){e=U(r.b,n[i]);if(!Ln(e))return Mn(p(Fn,i,e.a));a=l(g(i,e.a),a)}return Bn(mn(a));case 13:for(var f=r.f,o=r.g,c=0;c<o.length;c++){e=U(o[c],n);if(!Ln(e))return e;f=f(e.a)}return Bn(f);case 14:e=U(r.b,n);return Ln(e)?U(r.h(e.a),n):e;case 15:for(var v=b,s=r.g;s.b;s=s.b){e=U(s.a,n);if(Ln(e))return e;v=l(e.a,v)}return Mn(In(mn(v)));case 1:return Mn(p(Sn,r.a,H(n)));case 0:return Bn(r.a)}}function I(r,n,t){for(var e=n.length,u=Array(e),a=0;a<e;a++){var i=U(r,n[a]);if(!Ln(i))return Mn(p(Un,a,i.a));u[a]=i.a}return Bn(t(u))}function J(n){return p(zn,n.length,function(r){return n[r]})}function Q(r,n){return Mn(p(Sn,"Expecting "+r,H(n)))}function R(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return r.c===n.c;case 7:case 8:case 12:return R(r.b,n.b);case 10:return r.d===n.d&&R(r.b,n.b);case 11:return r.e===n.e&&R(r.b,n.b);case 13:return r.f===n.f&&P(r.g,n.g);case 14:return r.h===n.h&&R(r.b,n.b);case 15:return P(r.g,n.g)}}function P(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;e<t;e++)if(!R(r[e],n[e]))return!1;return!0}function H(r){return r}function X(r){return r}var Y=t(function(r,n,t){return t[r]=X(n),t});H(null);function G(r){return{$:0,a:r}}function K(r){return{$:2,b:r,c:null}}var W=f(function(r,n){return{$:3,b:r,d:n}});var V=0;function Z(r){var n={$:0,e:V++,f:r,g:null,h:[]};return ur(n),n}function rr(n){return K(function(r){r(G(Z(n)))})}function nr(r,n){r.h.push(n),ur(r)}var tr=!1,er=[];function ur(r){if(er.push(r),!tr){for(tr=!0;r=er.shift();)ar(r);tr=!1}}function ar(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,ur(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function ir(r,n,t,e,u,a){var i=p(F,r,H(n?n.flags:void 0));Ln(i)||C(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(r,n){var t;for(var e in fr){var u=fr[e];u.a&&((t=t||{})[e]=u.a(e,n)),r[e]=or(u,n)}return t}(f,s);function s(r,n){c(o=(i=p(e,r,o)).a,n),br(f,i.b,u(o))}return br(f,i.b,u(o)),v?{ports:v}:{}}var fr={};function or(r,n){var e={g:n,h:void 0},u=r.c,a=r.d,i=r.e,f=r.f;function o(t){return p(W,o,{$:5,b:function(r){var n=r.a;return 0===r.$?m(a,e,n,t):i&&f?y(u,e,n.i,n.j,t):m(u,e,i?n.i:n.j,t)}})}return e.h=Z(p(W,o,r.b))}var cr=f(function(n,t){return K(function(r){n.g(t),r(G(c))})});function vr(n){return function(r){return{$:1,k:n,l:r}}}function sr(r){return{$:2,m:r}}function br(r,n,t){var e={};for(var u in lr(!0,n,e,null),lr(!1,t,e,null),r)nr(r[u],{$:"fx",a:e[u]||{i:b,j:b}})}function lr(r,n,t,e){switch(n.$){case 1:var u=n.k,a=function(r,n,t,e){function u(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return p(r?fr[n].e:fr[n].f,u,e)}(r,u,e,n.l);return void(t[u]=function(r,n,t){return t=t||{i:b,j:b},r?t.i=l(n,t.i):t.j=l(n,t.j),t}(r,a,t[u]));case 2:for(var i=n.m;i.b;i=i.b)lr(r,i.a,t,e);return;case 3:return void lr(r,n.o,t,{p:n.n,q:e})}}var dr;var hr="undefined"!=typeof document?document:{};function gr(r,n){r.appendChild(n)}function $r(r){return{$:0,a:r}}var pr=f(function(a,i){return f(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:wr(r),e:t,f:a,b:e}})})(void 0);f(function(a,i){return f(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:wr(r),e:t,f:a,b:e}})})(void 0);var mr=f(function(r,n){return{$:"a2",n:r,o:n}}),yr=f(function(r,n){return{$:"a3",n:r,o:n}});var kr;function wr(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=n[e]||(n[e]={});"a3"===e&&"class"===u?Ar(i,u,a):i[u]=a}else"className"===u?Ar(n,u,X(a)):n[u]=X(a)}return n}function Ar(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function jr(r,n){var t=r.$;if(5===t)return jr(r.k||(r.k=r.m()),n);if(0===t)return hr.createTextNode(r.a);if(4===t){for(var e=r.k,u=r.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n};return(i=jr(e,a)).elm_event_node_ref=a,i}if(3===t)return _r(i=r.h(r.g),n,r.d),i;var i=r.f?hr.createElementNS(r.f,r.c):hr.createElement(r.c);dr&&"a"==r.c&&i.addEventListener("click",dr(i)),_r(i,n,r.d);for(var f=r.e,o=0;o<f.length;o++)gr(i,jr(1===t?f[o]:f[o].b,n));return i}function _r(r,n,t){for(var e in t){var u=t[e];"a1"===e?Tr(r,u):"a0"===e?Nr(r,n,u):"a3"===e?xr(r,u):"a4"===e?Er(r,u):("value"!==e||"checked"!==e||r[e]!==u)&&(r[e]=u)}}function Tr(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function xr(r,n){for(var t in n){var e=n[t];e?r.setAttribute(t,e):r.removeAttribute(t)}}function Er(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;a?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function Nr(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}r.removeEventListener(u,i)}i=Lr(n,a),r.addEventListener(u,i,kr&&{passive:xe(a)<2}),e[u]=i}else r.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){kr=!0}}))}catch(r){}function Lr(v,r){function s(r){var n=s.q,t=U(n.a,r);if(Ln(t)){for(var e,u=xe(n),a=t.a,i=u?u<3?a.a:a.M:a,f=1==u?a.b:3==u&&a.bo,o=(f&&r.stopPropagation(),(2==u?a.b:3==u&&a.bi)&&r.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=r,s}function Cr(r,n){return r.$==n.$&&R(r.a,n.a)}function Or(r,n){var t=[];return Dr(r,n,t,0),t}function zr(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function Dr(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a){if(1!==u||2!==a)return void zr(t,0,e,n);n=function(r){for(var n=r.e,t=n.length,e=Array(t),u=0;u<t;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:e,f:r.f,b:r.b}}(n),a=1}switch(a){case 5:for(var i=r.l,f=n.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(n.k=r.k);n.k=n.m();var v=[];return Dr(r.k,n.k,v,0),void(0<v.length&&zr(t,1,e,v));case 4:for(var s=r.j,b=n.j,l=!1,d=r.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=n.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void zr(t,0,e,n):((l?function(r,n){for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}(s,b):s===b)||zr(t,2,e,b),void Dr(d,h,t,e+1));case 0:return void(r.a!==n.a&&zr(t,3,e,n.a));case 1:return void qr(r,n,t,e,Br);case 2:return void qr(r,n,t,e,Sr);case 3:if(r.h!==n.h)return void zr(t,0,e,n);var g=Mr(r.d,n.d);g&&zr(t,4,e,g);var $=n.i(r.g,n.g);return void($&&zr(t,5,e,$))}}}function qr(r,n,t,e,u){if(r.c===n.c&&r.f===n.f){var a=Mr(r.d,n.d);a&&zr(t,4,e,a),u(r,n,t,e)}else zr(t,0,e,n)}function Mr(r,n,t){var e;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var a=r[u],i=n[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Cr(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var f=Mr(r[u],n[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in n)o in r||((e=e||{})[o]=n[o]);return e}function Br(r,n,t,e){var u=r.e,a=n.e,i=u.length,f=a.length;f<i?zr(t,6,e,{v:f,i:i-f}):i<f&&zr(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];Dr(v,a[c],t,++e),e+=v.b||0}}function Sr(r,n,t,e){for(var u=[],a={},i=[],f=r.e,o=n.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=f[s]).a,h=(x=o[b]).a,g=T.b,$=x.b;if(d!==h){var p=f[s+1],m=o[b+1];if(p)var y=p.a,k=p.b,w=h===y;if(m)var A=m.a,j=m.b,_=d===A;if(_&&w)Dr(g,j,u,++l),Ur(a,u,d,$,b,i),l+=g.b||0,Ir(a,u,d,k,++l),l+=k.b||0,s+=2,b+=2;else if(_)l++,Ur(a,u,h,$,b,i),Dr(g,j,u,l),l+=g.b||0,s+=1,b+=2;else if(w)Ir(a,u,d,g,++l),l+=g.b||0,Dr(k,$,u,++l),l+=k.b||0,s+=2,b+=1;else{if(!p||y!==A)break;Ir(a,u,d,g,++l),Ur(a,u,h,$,b,i),l+=g.b||0,Dr(k,j,u,++l),l+=k.b||0,s+=2,b+=2}}else Dr(g,$,u,++l),l+=g.b||0,s++,b++}for(;s<c;){var T;Ir(a,u,(T=f[s]).a,g=T.b,++l),l+=g.b||0,s++}for(;b<v;){var x,E=E||[];Ur(a,u,(x=o[b]).a,x.b,void 0,E),b++}(0<u.length||0<i.length||E)&&zr(t,8,e,{w:u,x:i,y:E})}var Fr="_elmW6BL";function Ur(r,n,t,e,u,a){var i=r[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(r[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return Dr(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}Ur(r,n,t+Fr,e,u,a)}function Ir(r,n,t,e,u){var a=r[t];if(a){if(0===a.c){a.c=2;var i=[];return Dr(e,a.z,i,u),void zr(n,9,u,{w:i,A:a})}Ir(r,n,t+Fr,e,u)}else{var f=zr(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:f}}}function Jr(r,n,t,e){!function r(n,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Jr(n,t.k,o.s,f);else if(8===v){o.t=n,o.u=f;var s=o.s.w;0<s.length&&r(n,t,s,0,a,i,f)}else if(9===v){o.t=n,o.u=f;var b=o.s;if(b){b.A.s=n;var s=b.w;0<s.length&&r(n,t,s,0,a,i,f)}}else o.t=n,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return r(n,d,e,u,a+1,i,n.elm_event_node_ref)}var h=t.e;var g=n.childNodes;for(var $=0;$<h.length;$++){var p=1===l?h[$]:h[$].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=r(g[$],p,e,u,a,m,f),!(o=e[u])||(c=o.r)>i))return u;a=m}return u}(r,n,t,0,0,n.b,e)}function Qr(r,n,t,e){return 0===t.length?r:(Jr(r,n,t,e),Rr(r,t))}function Rr(r,n){for(var t=0;t<n.length;t++){var e=n[t],u=e.t,a=Pr(u,e);u===r&&(r=a)}return r}function Pr(r,n){switch(n.$){case 0:return function(r,n,t){var e=r.parentNode,u=jr(n,t);u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref);e&&u!==r&&e.replaceChild(u,r);return u}(r,n.s,n.u);case 4:return _r(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Rr(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var t=n.s,e=0;e<t.i;e++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var u=(t=n.s).e,a=r.childNodes[e=t.v];e<u.length;e++)r.insertBefore(jr(u[e],n.u),a);return r;case 9:if(!(t=n.s))return r.parentNode.removeChild(r),r;var i=t.A;return void 0!==i.r&&r.parentNode.removeChild(r),i.s=Rr(r,t.w),r;case 8:return function(r,n){var t=n.s,e=function(r,n){if(!r)return;for(var t=hr.createDocumentFragment(),e=0;e<r.length;e++){var u=r[e],a=u.A;gr(t,2===a.c?a.s:jr(a.z,n.u))}return t}(t.y,n);r=Rr(r,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:jr(f.z,n.u);r.insertBefore(o,r.childNodes[i.r])}e&&gr(r,e);return r}(r,n);case 5:return n.s(r);default:C(10)}}function Hr(r){if(3===r.nodeType)return $r(r.textContent);if(1!==r.nodeType)return $r("");for(var n=b,t=r.attributes,e=t.length;e--;){var u=t[e];n=l(p(yr,u.name,u.value),n)}var a=r.tagName.toLowerCase(),i=b,f=r.childNodes;for(e=f.length;e--;)i=l(Hr(f[e]),i);return m(pr,a,n,i)}var Xr=e(function(n,r,t,f){return ir(r,f,n.cz,n.c1,n.cX,function(e,r){var u=n.c3,a=f.node,i=Hr(a);return Gr(r,function(r){var n=u(r),t=Or(i,n);a=Qr(a,i,t,e),i=n})})}),Yr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)};function Gr(t,e){e(t);var u=0;function a(){u=1===u?0:(Yr(a),e(t),1)}return function(r,n){t=r,n?(e(t),2===u&&(u=1)):(0===u&&Yr(a),u=2)}}var Kr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Wr,Vr=t(function(r,n,t){for(;;){if(-2===t.$)return n;var e=t.d,u=r,a=m(r,t.b,t.c,m(Vr,r,n,t.e));r=u,n=a,t=e}}),Zr=i,rn=function(r){return m(Vr,t(function(r,n,t){return p(Zr,g(r,n),t)}),b,r)},nn=N,tn=t(function(t,r,n){var e=n.c,u=n.d,a=f(function(r,n){return m(nn,r.$?t:a,n,r.a)});return m(nn,a,m(nn,t,r,u),e)}),en=function(r){return m(tn,Zr,b,r)},un=function(r){return r<0?-r:r},an=f(function(r,n){return 0<v(r,n)?r:n}),fn=f(function(r,n){var t=n.a,e=n.b,u=un(t-250);return g(t,e+r*p(an,-u/(100/150)+150,0)/2*-1)}),on=e(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),cn=D,vn=f(function(r,n){return B(n)/B(r)}),sn=function(r){return r},bn=cn(p(vn,2,32)),ln=[],dn=y(on,0,bn,ln,ln),hn=function(r){return{$:1,a:r}},gn=function(r){return{$:0,a:r}},$n=j,pn=t(function(r,n,t){for(;;){if(!t.b)return n;var e=t.b,u=r,a=p(r,t.a,n);r=u,n=a,t=e}}),mn=function(r){return m(pn,Zr,b,r)},yn=f(function(r,n){for(;;){var t=p($n,32,r),e=t.b,u=p(Zr,gn(t.a),n);if(!e.b)return mn(u);r=e,n=u}}),kn=f(function(r,n){for(;;){var t=cn(n/32);if(1===t)return p($n,32,r).a;r=p(yn,r,b),n=t}}),wn=q,An=function(r){return r.length},jn=f(function(r,n){if(n.k){var t=32*n.k,e=wn(p(vn,32,t-1)),u=r?mn(n.o):n.o,a=p(kn,u,n.k);return y(on,An(n.n)+t,p(an,5,e*bn),a,n.n)}return y(on,An(n.n),bn,ln,n.n)}),_n=t(function(r,n,t){for(;;){var e=p($n,32,r),u=e.a,a=e.b;if(v(An(u),32)<0)return p(jn,!0,{o:n,k:t,n:u});r=a,n=p(Zr,hn(u),n),t=t+1}}),Tn=function(r){return r>>>5<<5},xn=E,En=L,Nn=f(function(e,r){var n=r.c,t=r.d,u={o:b,k:0,n:m(En,e,Tn(r.a),t)},a=f(function(r,n){if(r.$){var t=hn(m(En,e,32*n.k,r.a));return{o:p(Zr,t,n.o),k:n.k+1,n:n.n}}return m(xn,a,n,r.a)});return p(jn,!0,m(xn,a,u,n))}),Ln=function(r){return!r.$},Cn=A,On=u(function(r,n,t,e,u){for(;;){if(n<0)return p(jn,!1,{o:e,k:t/32|0,n:u});var a=hn(m(Cn,32,n,r));r=r,n=n-32,t=t,e=p(Zr,a,e),u=u}}),zn=f(function(r,n){if(0<r){var t=r%32;return k(On,n,r-t-32,r,b,m(Cn,t,r-t,n))}return dn}),Dn=function(r){return{$:0,a:r}},qn={$:1},Mn=function(r){return{$:1,a:r}},Bn=function(r){return{$:0,a:r}},Sn=f(function(r,n){return{$:3,a:r,b:n}}),Fn=f(function(r,n){return{$:0,a:r,b:n}}),Un=f(function(r,n){return{$:1,a:r,b:n}}),In=function(r){return{$:2,a:r}},Jn=S,Qn=sr(b),Rn=t(function(r,n,t){var e=t.b;return g(r(t.a),n(e))}),Pn=function(r){return r},Hn=f(function(r,n){return{$:0,a:r,b:n}}),Xn=function(r){var n=r.b;return p(Hn,1664525*r.a+n>>>0,n)},Yn=function(r){var n=r.a,t=277803737*(n^n>>>4+(n>>>28));return(t>>>22^t)>>>0},Gn=f(function(u,a){return function(r){var n=Xn(r),t=un(a-u),e=Yn(n);return g((134217728*(1*(67108863&Yn(r)))+1*(134217727&e))/9007199254740992*t+u,Xn(n))}}),Kn=e(function(r,n,t,e){for(;;){if(n<1)return g(r,e);var u=t(e),a=u.b;r=p(Zr,u.a,r),n=n-1,t=t,e=a}}),Wn=f(function(n,r){var t=r;return function(r){return y(Kn,b,n,t,r)}}),Vn=f(function(r,n){return r(n)}),Zn=sr(b),rt=f(function(r,n){return g($(n,{aA:n.aA+1}),Qn)}),nt=function(r){return{$:1,a:r}},tt=f(function(r,n){return{$:3,a:r,b:n}}),et=f(function(n,r){var t=r;return $(t,{Q:function(){var r=t.Q;switch(r.$){case 0:case 1:return nt(n);case 2:return p(tt,n,r.a);default:return p(tt,n,r.b)}}()})}),ut=t(function(r,n,t){return{$:0,a:r,b:n,c:t}}),at=t(function(r,n,t){return m(ut,r,n,t)}),it={$:0},ft={aD:qn,aE:qn,ao:{aH:qn,aI:qn,aJ:qn,aK:qn,aL:qn,aM:qn},aT:qn},ot=function(r){return{Q:it,ak:(n=r,{$:1,a:n}),x:ft,au:b};var n},ct=f(function(r,n){return H(m(pn,function(t){return f(function(r,n){return n.push(X(t(r))),n})}(r),[],n))}),vt=function(r){return H(m(pn,f(function(r,n){return m(Y,r.a,r.b,n)}),{},r))},st=H,bt=f(function(r,n){return vt(d([g("type",st("function")),g("name",st(r)),g("args",p(ct,Pn,n))]))}),lt=H,dt=H,ht=a(function(r,n,t,e,u,a){return p(bt,"arc",d([dt(r),dt(n),dt(t),dt(e),dt(u),lt(a)]))}),gt=u(function(r,n,t,e,u){return p(bt,"arcTo",d([dt(r),dt(n),dt(t),dt(e),dt(u)]))}),$t=a(function(r,n,t,e,u,a){return p(bt,"bezierCurveTo",d([dt(r),dt(n),dt(t),dt(e),dt(u),dt(a)]))}),pt=t(function(r,n,t){return w(ht,r,n,t,0,6.283185307179586,!1)}),mt=f(function(r,n){return p(bt,"lineTo",d([dt(r),dt(n)]))}),yt=f(function(r,n){return p(bt,"moveTo",d([dt(r),dt(n)]))}),kt=e(function(r,n,t,e){return p(bt,"quadraticCurveTo",d([dt(r),dt(n),dt(t),dt(e)]))}),wt=e(function(r,n,t,e){return p(bt,"rect",d([dt(r),dt(n),dt(t),dt(e)]))}),At=O,jt=z,_t=f(function(r,n){switch(r.$){case 0:var t=r.a;return p(Zr,y(wt,d=t.a,h=t.b,r.b,r.c),p(Zr,p(yt,d,h),n));case 1:var e=r.a,u=r.b;return p(Zr,m(pt,d=e.a,h=e.b,u),p(Zr,p(yt,d+u,h),n));case 2:var a=r.a,i=r.c;return p(Zr,w(ht,d=a.a,h=a.b,r.b,i,r.d,r.e),p(Zr,p(yt,d+At(i),h+jt(i)),n));case 3:var f=r.a,o=r.b;return p(Zr,k(gt,d=f.a,h=f.b,o.a,o.b,r.c),n);case 4:var c=r.a,v=r.b,s=r.c;return p(Zr,w($t,c.a,c.b,v.a,v.b,d=s.a,h=s.b),n);case 5:var b=r.a;return p(Zr,p(mt,d=b.a,h=b.b),n);case 6:var l=r.a;return p(Zr,p(yt,d=l.a,h=l.b),n);default:var d,h,g=r.a,$=r.b;return p(Zr,y(kt,g.a,g.b,d=$.a,h=$.b),n)}}),Tt=f(function(r,n){var t=wn(r);return t%n+r-t}),xt=function(r){return 3.141592653589793*r/180},Et=t(function(r,n,t){var e=r/xt(60),u=(1-un(2*t-1))*n,a=t-u/2,i=u*(1-un(p(Tt,e,2)-1)),f=e<0?s(0,0,0):e<1?s(u,i,0):e<2?s(i,u,0):e<3?s(0,u,i):e<4?s(0,i,u):e<5?s(i,0,u):e<6?s(u,0,i):s(0,0,0);return s(f.a+a,f.b+a,f.c+a)}),Nt=M,Lt=S,Ct=function(r){var n=function(r){if(r.$){u=r.d;var n=m(Et,r.a,r.b,r.c);return t=n.a,e=n.b,{ay:u,bt:Nt(255*n.c),bD:Nt(255*e),b_:Nt(255*t)}}var t,e,u;return{ay:u=r.d,bt:r.c,bD:e=r.b,b_:t=r.a}}(r),t=n.bD,e=n.bt,u=n.ay;return"rgba("+Jn(n.b_)+", "+Jn(t)+", "+Jn(e)+", "+Lt(u)+")"},Ot=f(function(r,n){return vt(d([g("type",st("field")),g("name",st(r)),g("value",n)]))}),zt=function(r){return p(Ot,"fillStyle",st(Ct(r)))},Dt=f(function(r,n){return p(Zr,p(bt,"fill",d([st(function(r){return r?"evenodd":"nonzero"}(0))])),p(Zr,zt(r),n))}),qt=p(bt,"stroke",b),Mt=function(r){return p(Ot,"strokeStyle",st(Ct(r)))},Bt=f(function(r,n){return p(Zr,qt,p(Zr,Mt(r),n))}),St=y(e(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),0,0,0,1),Ft=f(function(r,n){switch(r.$){case 0:return p(Dt,St,n);case 1:return p(Dt,r.a,n);case 2:return p(Bt,r.a,n);default:return p(Bt,r.b,p(Dt,r.a,n))}}),Ut=e(function(r,n,t,e){if(1===e.$)return p(bt,"fillText",d([st(r),dt(n),dt(t)]));var u=e.a;return p(bt,"fillText",d([st(r),dt(n),dt(t),dt(u)]))}),It=u(function(r,n,t,e,u){return p(Zr,y(Ut,r.bp,n,t,r.x.ap),p(Zr,zt(e),u))}),Jt=e(function(r,n,t,e){if(1===e.$)return p(bt,"strokeText",d([st(r),dt(n),dt(t)]));var u=e.a;return p(bt,"strokeText",d([st(r),dt(n),dt(t),dt(u)]))}),Qt=u(function(r,n,t,e,u){return p(Zr,y(Jt,r.bp,n,t,r.x.ap),p(Zr,Mt(e),u))}),Rt=t(function(r,n,t){var e=n,u=e.bU,a=u.a,i=u.b;switch(r.$){case 0:return k(It,e,a,i,St,t);case 1:return k(It,e,a,i,r.a,t);case 2:return k(Qt,e,a,i,r.a,t);default:return k(Qt,e,a,i,r.b,k(It,e,a,i,r.a,t))}}),Pt=f(function(r,n){return n.$?qn:Dn(r(n.a))}),Ht=f(function(r,n){return n.$?r:n.a}),Xt=t(function(r,n,t){return p(Ht,t,p(Pt,function(r){return n(r)},r))}),Yt=t(function(r,n,t){return m(Xt,r,function(r){return p(Zr,n(r),t)},t)}),Gt=function(r){switch(r){case 0:return"left";case 1:return"right";case 2:return"center";case 3:return"start";default:return"end"}},Kt=function(r){switch(r){case 0:return"top";case 1:return"hanging";case 2:return"middle";case 3:return"alphabetic";case 4:return"ideographic";default:return"bottom"}},Wt=function(r){return p(Ot,"font",st(r))},Vt=function(r){return p(Ot,"textAlign",st(r))},Zt=function(r){return p(Ot,"textBaseline",st(r))},re=t(function(r,n,t){return r(n(t))}),ne=f(function(n,r){var t=f(function(r,n){return Jn(r)+"px "+n}),e=function(){var r=g(n.aU,n.aC);if(r.a.$){if(r.b.$){return qn}return Dn(p(t,20,r.b.a))}if(r.b.$){return Dn(p(t,r.a.a,"sans-serif"))}return Dn(p(t,r.a.a,r.b.a))}();return m(Yt,n.az,p(re,Zt,Kt),m(Yt,n.ax,p(re,Vt,Gt),m(Yt,e,Wt,r)))}),te=t(function(r,n,t){return m(Rt,r,n,p(ne,n.x,t))}),ee=p(bt,"beginPath",b),ue=t(function(r,n,t){if(r.$){var e=r.a;return p(Ft,n,m(pn,_t,p(Zr,ee,t),e))}return m(te,n,r.a,t)}),ae=function(r){switch(r){case 0:return"source-over";case 1:return"source-in";case 2:return"source-out";case 3:return"source-atop";case 4:return"destination-over";case 5:return"destination-in";case 6:return"destination-out";case 7:return"destination-atop";case 8:return"lighter";case 9:return"copy";case 10:return"xor";case 11:return"multiply";case 12:return"screen";case 13:return"overlay";case 14:return"darken";case 15:return"lighten";case 16:return"color-dodge";case 17:return"color-burn";case 18:return"hard-light";case 19:return"soft-light";case 20:return"difference";case 21:return"exclusion";case 22:return"hue";case 23:return"saturation";case 24:return"color";default:return"luminosity"}},ie=function(r){switch(r){case 0:return"butt";case 1:return"round";default:return"square"}},fe=function(r){switch(r){case 0:return"bevel";case 1:return"round";default:return"miter"}},oe=function(r){return p(Ot,"lineCap",st(r))},ce=function(r){return p(Ot,"lineDashOffset",dt(r))},ve=function(r){return p(Ot,"lineJoin",st(r))},se=function(r){return p(Ot,"lineWidth",dt(r))},be=function(r){return p(Ot,"miterLimit",dt(r))},le=function(r){return p(bt,"setLineDash",d([p(ct,dt,r)]))},de=f(function(r,n){return m(Yt,r.aI,le,m(Yt,r.aM,be,m(Yt,r.aL,se,m(Yt,r.aK,p(re,ve,fe),m(Yt,r.aJ,ce,m(Yt,r.aH,p(re,oe,ie),n))))))}),he=f(function(r,n){var t=r.bw,e=r.bN,u=e.a,a=e.b;return p(Zr,p(Ot,"shadowBlur",dt(r.bu)),p(Zr,function(r){return p(Ot,"shadowColor",st(Ct(r)))}(t),p(Zr,function(r){return p(Ot,"shadowOffsetX",dt(r))}(u),p(Zr,function(r){return p(Ot,"shadowOffsetY",dt(r))}(a),n))))}),ge=function(r){return p(Ot,"globalAlpha",dt(r))},$e=function(r){return p(Ot,"globalCompositeOperation",st(r))},pe=f(function(r,n){return p(de,r.ao,m(Yt,r.aE,p(re,$e,ae),m(Yt,r.aD,ge,m(Xt,r.aT,function(r){return p(he,r,n)},n))))}),me=f(function(r,n){return p(bt,"scale",d([dt(r),dt(n)]))}),ye=a(function(r,n,t,e,u,a){return p(bt,"transform",d([dt(r),dt(n),dt(t),dt(e),dt(u),dt(a)]))}),ke=f(function(r,n){return p(bt,"translate",d([dt(r),dt(n)]))}),we=f(function(r,n){return m(pn,f(function(r,n){return p(Zr,function(){switch(r.$){case 0:return function(r){return p(bt,"rotate",d([dt(r)]))}(r.a);case 1:return p(me,r.a,r.b);case 2:return p(ke,r.a,r.b);default:return w(ye,r.a,r.b,r.c,r.d,r.e,r.f)}}(),n)}),n,r)}),Ae=p(bt,"restore",b),je=p(bt,"save",b),_e=f(function(r,n){return p(Zr,Ae,m(ue,r.ak,r.Q,p(we,r.au,p(pe,r.x,p(Zr,je,n)))))}),Te=b,xe=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Ee=f(function(r,n){return p(mr,function(r){return"innerHTML"==r||"formAction"==r?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),Ne=pr("canvas"),Le=function(r){return pr(function(r){return"script"==r?"p":r}(r))},Ce=t(function(r,n,t){var e,u,a=r.a,i=r.b;return m(Le,"elm-canvas",d([(u=function(r){return m(pn,_e,Te,r)}(t),p(Ee,"cmds",p(ct,Pn,u)))]),d([p(Ne,p(Zr,(e=i,p(yr,"height",Jn(e))),p(Zr,function(r){return p(yr,"width",Jn(r))}(a),n)),b)]))}),Oe=e(function(r,n,t,e){return{$:1,a:r,b:n,c:t,d:e}}),ze=e(function(r,n,t,e){return y(Oe,r-6.283185307179586*wn(r/6.283185307179586),n,t,e)}),De=t(function(r,n,t){return y(ze,r,n,t,1)}),qe=m(De,xt(260),.1,.1),Me=f(function(r,n){var t=n.x;return $(n,{x:$(t,{ao:r(t.ao)})})}),Be=f(function(n,r){return p(Me,function(r){return $(r,{aL:Dn(n)})},r)}),Se=f(function(r,n){return{$:7,a:r,b:n}}),Fe=f(function(r,n){return p(Se,r,n)}),Ue=function(r){return{$:2,a:r}},Ie=f(function(n,r){var t=r;return $(t,{Q:function(){var r=t.Q;switch(r.$){case 0:return Ue(n);case 1:return p(tt,r.a,n);case 2:return Ue(n);default:return p(tt,r.a,n)}}()})}),Je=f(function(r,n){return v(r,30)<0&&v(n,60)<0?30*n+r:-1}),Qe=4294967295>>>32-bn,Re=_,Pe=t(function(r,n,t){for(;;){var e=p(Re,Qe&n>>>r,t);if(e.$)return p(Re,Qe&n,e.a);r=r-bn,n=n,t=e.a}}),He=f(function(r,n){var t=n.a,e=n.b,u=n.c,a=n.d;return r<0||-1<v(r,t)?qn:-1<v(r,Tn(t))?Dn(p(Re,Qe&r,a)):Dn(m(Pe,e,r,u))}),Xe=x,Ye=function(r){return[r]},Ge=T,Ke=e(function(r,n,t,e){var u=Qe&n>>>r;if(-1<v(u,An(e))){if(5===r)return p(Xe,hn(t),e);var a=gn(y(Ke,r-bn,n,t,ln));return p(Xe,a,e)}var i=p(Re,u,e);if(i.$){a=gn(y(Ke,r-bn,n,t,Ye(i)));return m(Ge,u,a,e)}var a=gn(y(Ke,r-bn,n,t,i.a));return m(Ge,u,a,e)}),We=f(function(r,n){var t=n.a,e=n.b,u=n.c,a=An(n.d),i=An(r),f=t+(i-a);if(h(i,32)){if(0<v(f>>>bn,1<<e)){var o=e+bn,c=y(Ke,o,t,r,Ye(gn(u)));return y(on,f,o,c,ln)}return y(on,f,e,y(Ke,e,t,r,u),ln)}return y(on,f,e,u,r)}),Ve=f(function(r,n){return p(We,p(Xe,r,n.d),n)}),Ze=t(function(u,r,n){var a=r.a,i=r.b,t=n.a,e=n.b,f=p(Ht,{bU:g(0,0),bk:0},p(He,p(Je,a,i),u)).bU,o=f.a,c=f.b,v=function(){if(a){var r=p(Ht,{bU:g(o+10,c),bk:0},p(He,p(Je,a+1,i),u)).bU,n=g((o+r.a)/2,(c+r.b)/2),t=n.a,e=n.b;return p(Fe,g(o,c),g(t,e))}return{$:6,a:g(o,c)}}();if(h(a,29)){var s=p(Ie,m(De,xt(188),.3,.8),p(et,qe,p(Be,1.5,ot(en(p(Ve,v,t))))));return g(dn,p(Ve,s,e))}return g(p(Ve,v,t),e)}),ru=t(function(r,i,n){var f=r.cT,o=r.cg;return m(t(function(r,n,t){for(;;){if(-1<v(n,f))return t;if(v(r,o)>-1){r=e=0,n=u=n+1,t=a=t}else{var e=r+1,u=n,a=p(i,g(r,n),t);r=e,n=u,t=a}}}),0,0,n)}),nu=G,tu=nu(0),eu=e(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return p(r,u,p(r,i,p(r,o,p(r,c.a,500<t?m(pn,r,n,mn(v)):y(eu,r,n,t+1,v)))))}return p(r,u,p(r,i,p(r,o,n)))}return p(r,u,p(r,i,n))}return p(r,u,n)}return n}),uu=t(function(r,n,t){return y(eu,r,n,0,t)}),au=f(function(t,r){return m(uu,f(function(r,n){return p(Zr,t(r),n)}),b,r)}),iu=W,fu=f(function(n,r){return p(iu,function(r){return nu(n(r))},r)}),ou=t(function(t,r,e){return p(iu,function(n){return p(iu,function(r){return nu(p(t,n,r))},e)},r)}),cu=cr,vu=f(function(r,n){var t=n;return rr(p(iu,cu(r),t))});fr.Task={b:tu,c:t(function(r,n){return p(fu,function(){return 0},(t=p(au,vu(r),n),m(uu,ou(Zr),nu(b),t)));var t}),d:t(function(){return nu(0)}),e:f(function(r,n){return p(fu,r,n)}),f:Wr};vr("Task");var su,bu={$:4},lu=Xr({cz:function(r){var n,t=f(function(r,n){return{bU:p(fn,n,(t=m(Rn,sn,sn,function(r){return g(r%30,r/30|0)}(r)),g(10*t.a+5+100,5*t.b+2.5+130))),bk:n};var t}),e=p(Vn,p(Wn,1800,p(Gn,0,1)),function(r){var n=Xn(p(Hn,0,1013904223));return Xn(p(Hn,n.a+r>>>0,n.b))}(wn(1e5*r)));return g({aA:0,bh:p(Nn,t,(n=e.a).b?m(_n,n,b,0):dn)},Qn)},cX:function(){return Zn},c1:rt,c3:function(r){return m(Ce,g(500,500),b,p(Zr,p(et,qe,ot(d([m(at,g(0,0),500,500)]))),en(m(ru,{cg:30,cT:60},Ze(r.bh),g(dn,dn)).b)))}});su={Examples:{JoyDivision:{init:lu(bu)(0)}}},r.Elm?function r(n,t){for(var e in t)e in n?"init"==e?C(6):r(n[e],t[e]):n[e]=t[e]}(r.Elm,su):r.Elm=su}(this);