(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"058a":function(t,e,n){},"51e3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main",{attrs:{albums:t.albums}})],1)},o=[],i=n("bc3a"),s=n.n(i),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"py-3"},[r("img",{attrs:{src:n("93df"),alt:"spotify-logo"}})])}],l={name:"Header"},p=l,f=(n("80b4"),n("2877")),d=Object(f["a"])(p,c,u,!1,null,"691f1e5a",null),b=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.albums,(function(t,e){return n("Album",{key:e,staticClass:"albums-col",attrs:{poster:t.poster,title:t.title,author:t.author,year:t.year}})})),1)])},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner-container"},[n("img",{attrs:{src:t.poster,alt:"image of "+t.title}}),n("div",{staticClass:"title my-3"},[t._v(t._s(t.title.toUpperCase()))]),n("div",{staticClass:"author"},[t._v(t._s(t.author))]),n("div",{staticClass:"year"},[t._v(t._s(t.year))])])},y=[],g={name:"Album",props:{poster:String,title:String,author:String,year:String}},_=g,O=(n("976c"),Object(f["a"])(_,h,y,!1,null,"3d9875ba",null)),j=O.exports,w={name:"Main",components:{Album:j},props:{albums:Array}},x=w,C=(n("71cd"),Object(f["a"])(x,m,v,!1,null,"162729fc",null)),S=C.exports,M={name:"App",components:{Header:b,Main:S},data:function(){return{albums:[]}},created:function(){var t=this;s.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.albums=e.data.response}))}},P=M,$=(n("5c0b"),Object(f["a"])(P,a,o,!1,null,null,null)),A=$.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"71cd":function(t,e,n){"use strict";n("058a")},"80b4":function(t,e,n){"use strict";n("edd0")},"93df":function(t,e,n){t.exports=n.p+"img/spotify-logo.c24917d4.png"},"976c":function(t,e,n){"use strict";n("51e3")},"9c0c":function(t,e,n){},edd0:function(t,e,n){}});
//# sourceMappingURL=app.49f84986.js.map