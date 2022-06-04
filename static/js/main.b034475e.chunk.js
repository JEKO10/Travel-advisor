(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(57)},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(9),i=n.n(o),c=n(3),l=n(24);var u=function(){return a.a.createElement("header",null,a.a.createElement("h1",null,"Travel Advisor"),a.a.createElement("h2",null,"Travel your way"),a.a.createElement("div",{className:"search"},a.a.createElement("input",{type:"text",placeholder:"Search places..."}),a.a.createElement(l.a,null)))},s=n(60),h=n(61),p=n(63),f=n(62);var m=function(e){var t=e.setBounds,n=e.places,o=Object(r.useState)(),i=Object(c.a)(o,2),l=i[0],u=i[1];Object(r.useEffect)(function(){navigator.geolocation.getCurrentPosition(function(e){var t=e.coords,n=t.latitude,r=t.longitude;u({lat:n,lng:r})})},[]);return a.a.createElement("section",{className:"leaflet-container"},l?a.a.createElement(h.a,{center:l,zoom:14,scrollWheelZoom:!0},a.a.createElement(p.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.map(function(e,t){return a.a.createElement(f.a,{className:"popup",key:t,autoClose:!1,position:e.latitude&&e.longitude?[e.latitude,e.longitude]:l},a.a.createElement("div",null,a.a.createElement("h3",null,e.name),a.a.createElement("img",{src:e.photo?e.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg",title:e.name,alt:e.name})))}),a.a.createElement(function(){var e=Object(s.a)("move",function(){var n=e.getBounds();u(n._northEast),t({ne:n._northEast,sw:n._southWest})});return null},null)):"")},d=n(13);var v=function(e){var t=e.place;console.log(t);var n={awards:t.awards?t.awards:[{images:{small:""},display_name:""}],cuisine:t.cuisine?t.cuisine:[{name:""}]};return a.a.createElement("section",{className:"singlePlace"},a.a.createElement("img",{src:t.photo?t.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg",title:t.name,alt:t.name}),a.a.createElement("h2",null,t.name),a.a.createElement("div",{className:"price"},a.a.createElement("h3",null,"Price"),a.a.createElement("h4",null,t.price_level)),a.a.createElement("div",{className:"ranking"},a.a.createElement("h4",null,"Ranking"),a.a.createElement("h4",null,t.ranking)),n.awards.map(function(e){return a.a.createElement("div",{key:e.display_name,className:"awards"},a.a.createElement("img",{src:e.images.small,alt:"award"}),a.a.createElement("h4",null,e.display_name))}),a.a.createElement("div",{className:"cuisine"},n.cuisine.map(function(e){var t=e.name;return a.a.createElement("h5",{key:t},t)})),t.address&&a.a.createElement("div",{className:"address"},a.a.createElement(d.a,null),a.a.createElement("h5",null,t.address)),t.phone&&a.a.createElement("div",{className:"phone"},a.a.createElement(d.b,null),a.a.createElement("h4",null,t.phone)),a.a.createElement("button",{onClick:function(){return window.open(t.web_url,"_blank")}},"Trip Advisor"),a.a.createElement("button",{onClick:function(){return window.open(t.website,"_blank")}},"Website"))};var g=function(e){var t=e.isLoading,n=e.places,o=Object(r.useState)("restaurants"),i=Object(c.a)(o,2),l=i[0],u=i[1],s=Object(r.useState)(""),h=Object(c.a)(s,2),p=h[0],f=h[1];return a.a.createElement("section",{className:"placeInfo"},a.a.createElement("h1",null,"Restaurants, Hotels & Attractions around you"),t?a.a.createElement("div",{className:"loading"},"Loading..."):a.a.createElement("div",{className:"filters"},a.a.createElement("label",{htmlFor:"type"},"Type"),a.a.createElement("div",null,a.a.createElement("select",{name:"type",onChange:function(e){u(e.target.value),console.log(l)}},a.a.createElement("option",{value:"restaurants"},"Restaurants"),a.a.createElement("option",{value:"hotels"},"Hotels"),a.a.createElement("option",{value:"attractions"},"Attractions")),a.a.createElement("select",{name:"rating",onChange:function(e){f(e.target.value),console.log(p)}},a.a.createElement("option",{value:0},"All"),a.a.createElement("option",{value:3},"Above 3.0"),a.a.createElement("option",{value:4},"Above 4.0"),a.a.createElement("option",{value:4.5},"Above 4.5")))),t?"":a.a.createElement("div",{className:"places"},n.map(function(e,t){return a.a.createElement(v,{key:t,place:e})})))},y=n(25),E=n(26),w=n.n(E);function b(){b=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return _()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var s={};function h(){}function p(){}function f(){}var m={};c(m,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==t&&n.call(v,a)&&(m=v);var g=f.prototype=h.prototype=Object.create(m);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=f,c(g,"constructor",f),c(f,"constructor",p),p.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var L=function(){var e=Object(y.a)(b().mark(function e(t,n){var r,a;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",{params:{bl_latitude:t.lat,tr_latitude:n.lat,bl_longitude:t.lng,tr_longitude:n.lng},headers:{"X-RapidAPI-Host":"travel-advisor.p.rapidapi.com","X-RapidAPI-Key":"e1c7eb1eb1mshee37345cbb13d17p161328jsnd844a2fdbe24"}});case 2:return r=e.sent,a=r.data.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();var x=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(null),l=Object(c.a)(i,2),s=l[0],h=l[1],p=Object(r.useState)(!1),f=Object(c.a)(p,2),d=f[0],v=f[1];return Object(r.useEffect)(function(){s&&(v(!0),L(s.sw,s.ne).then(function(e){o(e),v(!1)}))},[s]),a.a.createElement(a.a.Fragment,null,a.a.createElement(u,null),a.a.createElement("main",null,a.a.createElement(g,{isLoading:d,places:n}),a.a.createElement(m,{setBounds:h,places:n})))},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};n(56);i.a.render(a.a.createElement(x,null),document.getElementById("root")),j()}},[[27,1,2]]]);
//# sourceMappingURL=main.b034475e.chunk.js.map