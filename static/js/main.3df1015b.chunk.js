(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),o=a(10);var u=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Travel Advisor"),l.a.createElement("h2",null,"Travel your way"),l.a.createElement("div",{className:"search"},l.a.createElement("input",{type:"text",placeholder:"Search places..."}),l.a.createElement(o.a,null)))},m=a(20),s=a(22),i=a(21);var p=function(){return l.a.createElement("section",{className:"leaflet-container"},l.a.createElement(m.a,{center:[51.505,-.09],zoom:14,scrollWheelZoom:!0},l.a.createElement(s.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(i.a,{position:[51.505,-.09]})))},E=a(2);var v=function(){var e=Object(n.useState)("restaurants"),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(E.a)(c,2),u=o[0],m=o[1];return l.a.createElement("section",{className:"placeInfo"},l.a.createElement("h1",null,"Restaurants, Hotels & Attractions around you"),l.a.createElement("div",{className:"filters"},l.a.createElement("label",{htmlFor:"type"},"Type"),l.a.createElement("div",null,l.a.createElement("select",{name:"type",onChange:function(e){r(e.target.value),console.log(a)}},l.a.createElement("option",{value:"restaurants"},"Restaurants"),l.a.createElement("option",{value:"hotels"},"Hotels"),l.a.createElement("option",{value:"attractions"},"Attractions")),l.a.createElement("select",{name:"rating",onChange:function(e){m(e.target.value),console.log(u)}},l.a.createElement("option",{value:0},"All"),l.a.createElement("option",{value:3},"Above 3.0"),l.a.createElement("option",{value:4},"Above 4.0"),l.a.createElement("option",{value:4.5},"Above 4.5")))),l.a.createElement("div",{className:"places"},[{name:"Caffe"},{name:"Bar"},{name:"Restaurant"},{name:"Hotel"},{name:"Pub"}].map(function(e){return l.a.createElement("h1",{key:e.name},e.name)})))};var h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("main",null,l.a.createElement(v,null),l.a.createElement(p,null)))},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};a(16);c.a.render(l.a.createElement(h,null),document.getElementById("root")),f()}},[[11,1,2]]]);
//# sourceMappingURL=main.3df1015b.chunk.js.map