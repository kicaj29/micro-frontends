!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){e.exports=n("zUnb")},"g/Wr":function(e,t){e.exports=ng.elements},"vG+p":function(e,t){e.exports=ng.platformBrowser},vOrQ:function(e,t){e.exports=ng.core},zUnb:function(e,t,n){"use strict";n.r(t);var r=n("vOrQ"),o=n("vG+p"),l=n("g/Wr");let a=(()=>{class e{constructor(){this.title="headerApp"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-header"]],decls:26,vars:0,consts:[["href","#"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"header"),r["\u0275\u0275elementStart"](1,"h1"),r["\u0275\u0275text"](2,"Micro frontends demo"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"h4"),r["\u0275\u0275text"](4,"Using Javascript fetch API"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"nav"),r["\u0275\u0275elementStart"](6,"ul"),r["\u0275\u0275elementStart"](7,"li"),r["\u0275\u0275elementStart"](8,"a",0),r["\u0275\u0275text"](9,"Home"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"ul"),r["\u0275\u0275elementStart"](11,"li"),r["\u0275\u0275elementStart"](12,"a",0),r["\u0275\u0275text"](13,"Page1"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"ul"),r["\u0275\u0275elementStart"](15,"li"),r["\u0275\u0275elementStart"](16,"a",0),r["\u0275\u0275text"](17,"Page2"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"ul"),r["\u0275\u0275elementStart"](19,"li"),r["\u0275\u0275elementStart"](20,"a",0),r["\u0275\u0275text"](21,"About us"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](22,"ul"),r["\u0275\u0275elementStart"](23,"li"),r["\u0275\u0275elementStart"](24,"a",0),r["\u0275\u0275text"](25,"Contact us"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())},styles:[""],encapsulation:3}),e})(),u=(()=>{class e{constructor(e){this.injector=e}ngDoBootstrap(){const e=Object(l.createCustomElement)(a,{injector:this.injector});customElements.define("header-app",e)}}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(r["\u0275\u0275inject"](r.Injector))},providers:[],imports:[[o.BrowserModule]]}),e})();Object(r.enableProdMode)(),o.platformBrowser().bootstrapModule(u,{ngZone:"noop"}).catch(e=>console.error(e))}});