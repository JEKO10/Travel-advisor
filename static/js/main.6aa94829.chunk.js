(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,r){t.exports=r(18)},17:function(t,e,r){},18:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(6),i=r.n(a),c=r(2),u=r(11);var l=function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"Travel Advisor"),o.a.createElement("h2",null,"Travel your way"),o.a.createElement("div",{className:"search"},o.a.createElement("input",{type:"text",placeholder:"Search places..."}),o.a.createElement(u.a,null)))},s=r(21),h=r(22),f=r(24),p=r(23);var v=function(t){var e=t.coordinates,r=(t.setBounds,t.setCoordinates);return console.log(e),o.a.createElement("section",{className:"leaflet-container"},o.a.createElement(h.a,{center:null===e?[51.505,-.09]:e,zoom:14,scrollWheelZoom:!0},o.a.createElement(f.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.a.createElement(p.a,{position:[51.505,-.09]}),o.a.createElement(function(){var t=Object(s.a)("move",function(){var e=t.getBounds()._northEast;r(e)});return null},null)))};var m=function(){var t=Object(n.useState)("restaurants"),e=Object(c.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(""),u=Object(c.a)(i,2),l=u[0],s=u[1];return o.a.createElement("section",{className:"placeInfo"},o.a.createElement("h1",null,"Restaurants, Hotels & Attractions around you"),o.a.createElement("div",{className:"filters"},o.a.createElement("label",{htmlFor:"type"},"Type"),o.a.createElement("div",null,o.a.createElement("select",{name:"type",onChange:function(t){a(t.target.value),console.log(r)}},o.a.createElement("option",{value:"restaurants"},"Restaurants"),o.a.createElement("option",{value:"hotels"},"Hotels"),o.a.createElement("option",{value:"attractions"},"Attractions")),o.a.createElement("select",{name:"rating",onChange:function(t){s(t.target.value),console.log(l)}},o.a.createElement("option",{value:0},"All"),o.a.createElement("option",{value:3},"Above 3.0"),o.a.createElement("option",{value:4},"Above 4.0"),o.a.createElement("option",{value:4.5},"Above 4.5")))),o.a.createElement("div",{className:"places"},[{name:"Caffe"},{name:"Bar"},{name:"Restaurant"},{name:"Hotel"},{name:"Pub"}].map(function(t){return o.a.createElement("h1",{key:t.name},t.name)})))},d=r(10);function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var v={};c(v,o,function(){return this});var m=Object.getPrototypeOf,d=m&&m(m(O([])));d&&d!==e&&r.call(d,o)&&(v=d);var g=p.prototype=h.prototype=Object.create(v);function E(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var g={method:"GET",headers:{"X-RapidAPI-Host":"travel-advisor.p.rapidapi.com","X-RapidAPI-Key":"689bdba840msh627580b0402dd16p1bbcc9jsn0188595ae046"}},E=function(){var t=Object(d.a)(y().mark(function t(){var e,r;return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km",g);case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();var w=function(){var t=Object(n.useState)([]),e=Object(c.a)(t,2),r=(e[0],e[1]),a=Object(n.useState)(null),i=Object(c.a)(a,2),u=i[0],s=i[1],h=Object(n.useState)(null),f=Object(c.a)(h,2),p=(f[0],f[1]);return Object(n.useEffect)(function(){E().then(function(t){r(t.data)})},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(l,null),o.a.createElement("main",null,o.a.createElement(m,null),o.a.createElement(v,{coordinates:u,setCoordinates:s,setBounds:p})))},b=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,25)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};r(17);i.a.render(o.a.createElement(w,null),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.6aa94829.chunk.js.map