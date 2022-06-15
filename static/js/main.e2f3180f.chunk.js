(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(68)},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),i=n.n(o),c=n(2);var l=function(){return a.a.createElement("header",null,a.a.createElement("h1",null,"Travel Advisor"),window.screen.width<=1200&&a.a.createElement("h2",null,"Use ctrl + scroll to zoom the map"),a.a.createElement("h2",null,"Travel your way"))},u=n(71),s=n(72),h=n(74),f=n(73),p=n(4),m=n(11),d=n.n(m),v=n(27),g=n.n(v),y=n(28),w=n.n(y);var E=function(e){var t=e.setBounds,n=e.places,o=e.coordinates,i=e.setCoordinates,l=Object(r.useState)(!0),m=Object(c.a)(l,2),v=m[0],y=m[1];Object(r.useEffect)(function(){navigator.geolocation.getCurrentPosition(function(e){var t=e.coords,n=t.latitude,r=t.longitude;i({lat:n,lng:r})})},[]),Object(r.useEffect)(function(){console.log(window.screen.width)},[window.screen.width]);return a.a.createElement("section",{className:"leaflet-container"},o?a.a.createElement(s.a,{center:o,zoom:14},a.a.createElement(h.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.map(function(e,t){return a.a.createElement(f.a,{key:t,position:e.latitude&&e.longitude?[e.latitude,e.longitude]:o,icon:(n=e.name,r=e.photo?e.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg",i=e.rating?e.rating:"",p.divIcon({className:"markerIcon",html:"<div>"+"<h3>".concat(n,"</h3>")+"<img\n            src=".concat(r,"\n            title=").concat(n,"\n            alt=").concat(n,"\n          />")+"".concat(g.a.renderToString(a.a.createElement(d.a,{rating:Number(i),starRatedColor:"orange",numberOfStars:5,starDimension:"20px",starSpacing:"1px"})))+"</div>"}))});var n,r,i}),v&&window.screen.width<=1200&&a.a.createElement(function(){var e=Object(u.a)();return e.gestureHandling.enable(),e.addHandler("gestureHandling",w.a),y(!1),null},null),a.a.createElement(function(){var e=Object(u.b)("move",function(){var n=e.getBounds();i(n._northEast),t({ne:n._northEast,sw:n._southWest})});return null},null)):"")},b=n(15);var O=function(e){var t=e.place,n={awards:t.awards?t.awards:[{images:{small:""},display_name:""}],cuisine:t.cuisine?t.cuisine:[{name:""}]};return a.a.createElement("section",{className:"singlePlace"},a.a.createElement("img",{src:t.photo?t.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg",title:t.name,alt:t.name}),a.a.createElement("h2",null,t.name),t.rating?a.a.createElement(d.a,{rating:Number(t.rating),starRatedColor:"orange",numberOfStars:5,starDimension:"30px",starSpacing:"1px"}):"No rating",a.a.createElement("div",{className:"price"},a.a.createElement("h3",null,"Price"),a.a.createElement("h4",null,t.price_level)),a.a.createElement("div",{className:"ranking"},a.a.createElement("h4",null,"Ranking"),a.a.createElement("h5",null,t.ranking)),n.awards.map(function(e){return a.a.createElement("div",{key:e.display_name,className:"awards"},a.a.createElement("img",{src:e.images.small,alt:"award"}),a.a.createElement("h4",null,e.display_name))}),a.a.createElement("div",{className:"cuisine"},n.cuisine.map(function(e){var t=e.name;return a.a.createElement("h5",{key:t},t)})),t.address&&a.a.createElement("div",{className:"address"},a.a.createElement(b.a,null),a.a.createElement("h5",null,t.address)),t.phone&&a.a.createElement("div",{className:"phone"},a.a.createElement(b.b,null),a.a.createElement("h4",null,t.phone)),a.a.createElement("button",{onClick:function(){return window.open(t.web_url,"_blank")}},"Trip Advisor"),a.a.createElement("button",{onClick:function(){return window.open(t.website,"_blank")}},"Website"))};var j=function(e){var t=e.isLoading,n=e.places,r=e.type,o=e.setType,i=e.rating,c=e.setRating;return a.a.createElement("section",{className:"placeInfo"},a.a.createElement("h1",null,"Restaurants, Hotels & Attractions around you"),a.a.createElement("div",{className:"filters"},a.a.createElement("label",{htmlFor:"type"},"Type"),a.a.createElement("div",null,a.a.createElement("select",{name:"type",value:r,onChange:function(e){o(e.target.value)}},a.a.createElement("option",{value:"restaurants"},"Restaurants"),a.a.createElement("option",{value:"hotels"},"Hotels"),a.a.createElement("option",{value:"attractions"},"Attractions")),a.a.createElement("select",{name:"rating",value:i,onChange:function(e){c(Number(e.target.value))}},a.a.createElement("option",{value:0},"All"),a.a.createElement("option",{value:3},"Above 3.0"),a.a.createElement("option",{value:4},"Above 4.0")))),t?a.a.createElement("div",{className:"loading"}):a.a.createElement("div",{className:"places"},n.map(function(e,t){return a.a.createElement(O,{key:t,place:e})})))},x=n(29),L=n(30),_=n.n(L);function N(){N=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(_){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=l;var s={};function h(){}function f(){}function p(){}var m={};c(m,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(x([])));v&&v!==t&&n.call(v,a)&&(m=v);var g=p.prototype=h.prototype=Object.create(m);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(w.prototype),c(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var k=function(){var e=Object(x.a)(N().mark(function e(t,n,r){var a,o;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://travel-advisor.p.rapidapi.com/".concat(t,"/list-in-boundary"),{params:{bl_latitude:n.lat,tr_latitude:r.lat,bl_longitude:n.lng,tr_longitude:r.lng},headers:{"X-RapidAPI-Host":"travel-advisor.p.rapidapi.com","X-RapidAPI-Key":"3dea998694msh06da1b58c910674p1cacb2jsnaf01957896cc"}});case 2:return a=e.sent,o=a.data.data,e.abrupt("return",o);case 5:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}();var S=function(){var e=Object(r.useState)(),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)([]),u=Object(c.a)(i,2),s=u[0],h=u[1],f=Object(r.useState)(null),p=Object(c.a)(f,2),m=p[0],d=p[1],v=Object(r.useState)("restaurants"),g=Object(c.a)(v,2),y=g[0],w=g[1],b=Object(r.useState)(""),O=Object(c.a)(b,2),x=O[0],L=O[1],_=Object(r.useState)([]),N=Object(c.a)(_,2),S=N[0],T=N[1],P=Object(r.useState)(!1),C=Object(c.a)(P,2),A=C[0],F=C[1];return Object(r.useEffect)(function(){var e=setTimeout(function(){m&&(F(!0),k(y,m.sw,m.ne).then(function(e){h(e.filter(function(e){return e.name&&e.num_reviews>0})),T([]),F(!1)}))},1e3);return function(){return clearTimeout(e)}},[n,m,y]),Object(r.useEffect)(function(){var e=s.filter(function(e){return Number(e.rating)>x});T(e)},[x]),a.a.createElement(a.a.Fragment,null,a.a.createElement(l,null),a.a.createElement("main",null,a.a.createElement(j,{isLoading:A,places:S.length?S:s,type:y,setType:w,rating:x,setRating:L}),a.a.createElement(E,{setBounds:d,places:S.length?S:s,coordinates:n,setCoordinates:o})))},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};n(67);i.a.render(a.a.createElement(S,null),document.getElementById("root")),T()}},[[31,1,2]]]);
//# sourceMappingURL=main.e2f3180f.chunk.js.map