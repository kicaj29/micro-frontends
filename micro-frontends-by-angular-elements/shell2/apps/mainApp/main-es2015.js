!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){e.exports=n("zUnb")},"g/Wr":function(e,t){e.exports=ng.elements},"vG+p":function(e,t){e.exports=ng.platformBrowser},vOrQ:function(e,t){e.exports=ng.core},zUnb:function(e,t,n){"use strict";n.r(t);var r=n("vOrQ"),o=n("vG+p"),c=n("g/Wr");let u=(()=>{class e{constructor(){this.title="mainApp"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275text"](1,"I am main app"),r["\u0275\u0275elementEnd"]())},styles:[""],encapsulation:3}),e})(),i=(()=>{class e{constructor(e){this.injector=e}ngDoBootstrap(){const e=Object(c.createCustomElement)(u,{injector:this.injector});customElements.define("main-app",e)}}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(r["\u0275\u0275inject"](r.Injector))},providers:[],imports:[[o.BrowserModule]]}),e})();Object(r.enableProdMode)(),o.platformBrowser().bootstrapModule(i,{ngZone:"noop"}).catch(e=>console.error(e))}});