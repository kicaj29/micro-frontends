function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){e.exports=n("zUnb")},"g/Wr":function(e,t){e.exports=ng.elements},"vG+p":function(e,t){e.exports=ng.platformBrowser},vOrQ:function(e,t){e.exports=ng.core},zUnb:function(e,t,n){"use strict";n.r(t);var r,o,i=n("vOrQ"),c=n("vG+p"),a=n("g/Wr"),u=((o=function(){function e(t){_classCallCheck(this,e),this.cd=t,this.title="mainApp"}return _createClass(e,[{key:"ngOnInit",value:function(){window.addEventListener("ce_subApp",this.customEventListenerFunction.bind(this),!0)}},{key:"customEventListenerFunction",value:function(e){this.title=e.detail.action,this.cd.detectChanges()}},{key:"ngOnDestroy",value:function(){window.removeEventListener("ce_subApp",this.customEventListenerFunction,!0)}}]),e}()).\u0275fac=function(e){return new(e||o)(i["\u0275\u0275directiveInject"](i.ChangeDetectorRef))},o.\u0275cmp=i["\u0275\u0275defineComponent"]({type:o,selectors:[["app-root"]],inputs:{authToken:"authToken"},decls:8,vars:2,consts:[[2,"color","red"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275text"](1,"I am main app"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](2,"div"),i["\u0275\u0275text"](3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"b"),i["\u0275\u0275text"](5,"Auth token:"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"i",0),i["\u0275\u0275text"](7),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](t.title),i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate"](t.authToken))},styles:[""],encapsulation:3}),o),s=((r=function(){function e(t){_classCallCheck(this,e),this.injector=t}return _createClass(e,[{key:"ngDoBootstrap",value:function(){var e=Object(a.createCustomElement)(u,{injector:this.injector});customElements.define("main-app",e)}}]),e}()).\u0275mod=i["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)(i["\u0275\u0275inject"](i.Injector))},providers:[],imports:[[c.BrowserModule]]}),r);Object(i.enableProdMode)(),c.platformBrowser().bootstrapModule(s,{ngZone:"noop"}).catch((function(e){return console.error(e)}))}});