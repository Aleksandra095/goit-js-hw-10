!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(C([])));x&&x!==r&&n.call(x,a)&&(w=x);var E=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=g,u(E,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(k.prototype),u(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}function a(){return(a=t(e)(t(n).mark((function e(){var r,o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_ rL1rfTKwj1wzaPBfJud1XRGIVbf9lh WRl0GvKXgkPaN2nEu7CcMDmQ3nTm15 TKiF"}});case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("Failed to fetch breeds");case 6:return t.next=8,r.json();case 8:return o=t.sent,t.abrupt("return",o);case 12:throw t.prev=12,t.t0=t.catch(0),new Error("Failed to fetch breeds: ".concat(t.t0.message));case 15:case"end":return t.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function i(t){return c.apply(this,arguments)}function c(){return(c=t(e)(t(n).mark((function e(r){var o,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(r),{headers:{"x-api-key":"live_ rL1rfTKwj1wzaPBfJud1XRGIVbf9lh WRl0GvKXgkPaN2nEu7CcMDmQ3nTm15 TKiF"}});case 3:if((o=t.sent).ok){t.next=6;break}throw new Error("Failed to fetch cat");case 6:return t.next=8,o.json();case 8:return a=t.sent,t.abrupt("return",a[0]);case 12:throw t.prev=12,t.t0=t.catch(0),new Error("Failed to fetch cat: ".concat(t.t0.message));case 15:case"end":return t.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var u=document.querySelector(".breed-select"),s=document.querySelector(".cat-info"),l=document.querySelector(".loader"),h=document.querySelector(".error");function f(){l.style.display="block"}function p(){l.style.display="none"}function d(t){h.textContent=t,h.style.display="block"}function v(t){var e=document.createElement("img");e.src=t.url,e.alt=t.breeds[0].name,s.appendChild(e);var r=document.createElement("h3");r.textContent=t.breeds[0].name,s.appendChild(r);var n=document.createElement("p");n.textContent=t.breeds[0].description,s.appendChild(n);var o=document.createElement("p");o.textContent="Temperament: ".concat(t.breeds[0].temperament),s.appendChild(o),s.style.display="block"}function y(){s.innerHTML="",s.style.display="none"}function m(){return(m=t(e)(t(n).mark((function e(r){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.target.value,t.prev=1,y(),f(),t.next=6,i(o);case 6:v(t.sent),p(),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),d(t.t0.message),p();case 15:case"end":return t.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}try{f();var g=await(0,(function(){return a.apply(this,arguments)}))();g.forEach((function(t){var e=document.createElement("option");e.value=t.id,e.textContent=t.name,u.appendChild(e)})),p()}catch(t){d(t.message),p()}u.addEventListener("change",(function(t){return m.apply(this,arguments)})),document.addEventListener("DOMContentLoaded",init)}();
//# sourceMappingURL=index.4a067050.js.map