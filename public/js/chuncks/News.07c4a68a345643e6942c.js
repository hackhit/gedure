(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"EdX+":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Ty5D"),i=a("/MKj");var l={reloginSuccess:a("6Lj5").a};t.a=Object(i.b)((function(e){return{redirect:e.loginStatus.redirect}}),l)((function(e){var t=e.redirect,a=e.reloginSuccess,i=e.children;return Object(n.useEffect)((function(){var e=!1;if(!e){var t=JSON.parse(localStorage.getItem("key")),n=JSON.parse(sessionStorage.getItem("key"));"string"!=typeof t&&"string"!=typeof n||a(!0)}return function(){e=!0}})),t?r.a.createElement(c.a,{to:{pathname:"/panel"}}):r.a.createElement("div",null,i)}))},mSkI:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("1NhI"),i=a("bqsI"),l=a("kKAo"),o=a("/MKj");var s={changeContentNews:function(e){return{type:"CHANGE_CONTENT_NEWS",payload:e}}},u=Object(o.b)((function(e){return{content:e.news.content}}),s)((function(e){var t=e.changeContentNews,a=e.content,n="noticias"===a?"ItemSwitchNews active":"ItemSwitchNews",c="anuncios"===a?"ItemSwitchNews active":"ItemSwitchNews",o=function(e){"SwitchNoticias"===e.target.id?t("noticias"):t("anuncios")};return r.a.createElement("div",{className:"SwitchOptionNews"},r.a.createElement(i.a,{in:!0},r.a.createElement(l.a,{variant:"outlined"},r.a.createElement("span",{id:"SwitchNoticias",className:n,onClick:o},"Noticias"),r.a.createElement("span",{id:"SwitchAnuncios",className:c,onClick:o},"Anuncios"))))})),m=a("lopY"),f=a("tr08"),p=a("o0o1"),d=a.n(p),E=a("tRbT"),v=a("SpDg"),h=a("P3uN");function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e){var t=e.options;if(Array.isArray(t)&&0!==t.length){var a=t.length-3,n=t.map((function(e,t){return 3===t?r.a.createElement("span",{key:t,className:"more"},"+",a):t<4?r.a.createElement(h.a,{alt:"imagen".concat(t+1),src:e,placeholder:function(e){e.imageProps;var a=e.ref;return r.a.createElement(v.a,{ref:a,key:t,variant:"rect",height:100,width:110})},actual:function(e){var a=e.imageProps;return r.a.createElement("img",N({key:t},a))},error:function(){return r.a.createElement("div",{style:{width:"110px",height:"100px",background:"rgb(252, 72, 80)"}},r.a.createElement("p",null,"Error al obtener imagen"))}}):r.a.createElement("img",{key:t,src:e,alt:"imagen".concat(t+1),style:{display:"none"}})}));return r.a.createElement("footer",null,r.a.createElement(E.a,{container:!0,spacing:2,justify:"space-evenly",wrap:"wrap",className:"fixGrid"},n))}if("loading"===t){var c=[1,2,3,4].map((function(e,t){return r.a.createElement(v.a,{key:t,variant:"rect",height:100,width:110})}));return r.a.createElement("footer",null,r.a.createElement(E.a,{container:!0,spacing:2,justify:"space-evenly",wrap:"wrap",className:"fixGrid"},c))}return r.a.createElement(r.a.Fragment,null)}var y=a("469l"),w=a("HXb3"),b=a("GgLZ");function A(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(e,t,a,n,r,c,i){try{var l=e[c](i),o=l.value}catch(e){return void a(e)}l.done?t(o):Promise.resolve(o).then(n,r)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function j(){return r.a.createElement(l.a,{variant:"outlined"},r.a.createElement("section",{className:"Noticia"},r.a.createElement("div",{className:"NHead"},r.a.createElement(v.a,{variant:"circle",className:"NHeadImg"}),r.a.createElement(v.a,{variant:"text",className:"NHeadName",width:150}),r.a.createElement(v.a,{variant:"text",className:"NHeadName",width:35})),r.a.createElement("hr",null),r.a.createElement("div",{className:"NContent"},r.a.createElement(v.a,{variant:"text",className:"NContentTitle",width:200}),r.a.createElement("p",{className:"NContentP"},r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"}))),r.a.createElement(g,{options:"loading"})))}function O(e){return e.options.map((function(e){var t,a;return"A-"===e.privilegio?(t=e.nameA,a=e.avatarA):(t=e.nameC,a=e.avatarC),r.a.createElement(l.a,{variant:"outlined",key:e.id},r.a.createElement("section",{className:"Noticia"},r.a.createElement("div",{className:"NHead"},r.a.createElement(y.a,{src:a,alt:"Usuario",className:"NHeadImg",style:{backgroundColor:"#B46BD6"}},t.substring(0,1).toUpperCase()),r.a.createElement("span",{className:"NHeadName"},t),r.a.createElement("small",null,r.a.createElement("i",null,"#",e.id))),r.a.createElement("hr",null),r.a.createElement("div",{className:"NContent"},r.a.createElement("span",{className:"NContentTitle"},e.title),r.a.createElement("p",{className:"NContentP",dangerouslySetInnerHTML:{__html:e.content}})),r.a.createElement(g,{options:JSON.parse(e.imgList)}),r.a.createElement("i",{className:"NFecha"},"Publicado ",e.fecha)))}))}var k={updateNewsNoticias:function(e){return{type:"UPDATE_NEWS_NOTICIAS",payload:e}}},I=Object(o.b)((function(e){return{list:e.news.dataN}}),k)((function(e){var t=e.list,a=e.updateNewsNoticias,c=Object(w.useSnackbar)().enqueueSnackbar,i=x(Object(n.useState)(!1),2),l=i[0],o=i[1],s=x(Object(n.useState)(!1),2),u=s[0],m=s[1],f=!1,p=function(){var e,n=(e=d.a.mark((function e(n,r){var i,l,s,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("api/news?offset=".concat(n,"&limit=").concat(r));case 3:i=e.sent,l=i.data,s=l.data,u=l.finish,f||(s.length>0?(a([].concat(A(t),A(s))),o(u)):m(!0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c("No se han podido obtener las noticias",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function i(e){S(c,n,r,i,l,"next",e)}function l(e){S(c,n,r,i,l,"throw",e)}i(void 0)}))});return function(e,t){return n.apply(this,arguments)}}(),E=function(){var e=t.length;p(e,5)};return Object(n.useEffect)((function(){return 0===t.length&&E(),function(){f=!0}}),[t,f]),Object(n.useEffect)((function(){return function(){f=!0,a([])}}),[a,f]),r.a.createElement("article",{className:"BoxNoticias"},0!==t.length?r.a.createElement(b.a,{dataLength:t.length,hasMore:!l,next:E,scrollThreshold:.3,loader:r.a.createElement(j,null),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"No hay mรกs noticias que cargar."))},r.a.createElement(O,{options:t})):r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),u&&r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"No hay anuncios publicados."))))}));function C(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(e,t,a,n,r,c,i){try{var l=e[c](i),o=l.value}catch(e){return void a(e)}l.done?t(o):Promise.resolve(o).then(n,r)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(){return r.a.createElement(l.a,{variant:"outlined"},r.a.createElement("section",{className:"Anuncio"},r.a.createElement(v.a,{variant:"text",className:"ATitle",width:200}),r.a.createElement("p",{className:"AContent"},r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"})),r.a.createElement("hr",null),r.a.createElement("footer",null,r.a.createElement(v.a,{variant:"text",width:150})),r.a.createElement("div",{className:"AId"})))}function _(e){return e.option.map((function(e){var t;return t="A-"===e.privilegio?e.nameA:e.nameC,r.a.createElement(l.a,{variant:"outlined",key:e.id,className:"AnuncioPaper"},r.a.createElement("section",{className:"Anuncio"},r.a.createElement("span",{className:"ATitle"},e.title),r.a.createElement("p",{className:"AContent",dangerouslySetInnerHTML:{__html:e.content}}),r.a.createElement("hr",null),r.a.createElement("footer",null,"Escrito por ",t," ",e.fecha),r.a.createElement("div",{className:"AId"},r.a.createElement("small",null,r.a.createElement("i",null,"#",e.id)))))}))}var L={updateNewsAnuncios:function(e){return{type:"UPDATE_NEWS_ANUNCIOS",payload:e}}},M=Object(o.b)((function(e){return{list:e.news.dataA}}),L)((function(e){var t=e.list,a=e.updateNewsAnuncios,c=Object(w.useSnackbar)().enqueueSnackbar,i=P(Object(n.useState)(!1),2),o=i[0],s=i[1],u=P(Object(n.useState)(!1),2),m=u[0],f=u[1],p=!1,E=function(){var e,n=(e=d.a.mark((function e(n,r){var i,l,o,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("api/anuncios?offset=".concat(n,"&limit=").concat(r));case 3:i=e.sent,l=i.data,o=l.data,u=l.finish,p||(o.length>0?(a([].concat(C(t),C(o))),s(u)):f(!0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c("No se han podido obtener los anuncios",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function i(e){T(c,n,r,i,l,"next",e)}function l(e){T(c,n,r,i,l,"throw",e)}i(void 0)}))});return function(e,t){return n.apply(this,arguments)}}(),v=function(){var e=t.length;E(e,7)};return Object(n.useEffect)((function(){return 0===t.length&&v(),function(){p=!0}}),[t,p]),Object(n.useEffect)((function(){return function(){p=!0,a([])}}),[a,p]),r.a.createElement("aside",{id:"test",className:"BoxAnuncios"},r.a.createElement(l.a,{variant:"outlined",className:"PaperMargin"},r.a.createElement("div",{className:"AHead"},r.a.createElement("span",null,"Anuncios"))),0!==t.length?r.a.createElement(b.a,{dataLength:t.length,hasMore:!o,next:v,scrollThreshold:.2,loader:r.a.createElement(H,null),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"No hay más anuncios que cargar."))},r.a.createElement(_,{option:t})):r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),m&&r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"No hay anuncios publicados."))))}));var q=Object(o.b)((function(e){return{content:e.news.content}}))((function(e){var t=e.content,a=Object(f.a)(),n=Object(m.a)(a.breakpoints.up("md"));return r.a.createElement("div",{className:"container"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(M,null)):"noticias"===t?r.a.createElement(I,{styles:{marginTop:"0px",marginLeft:"0"}}):r.a.createElement(M,null))})),U=a("EdX+");function B(){return r.a.createElement("div",{className:"BoxPageNews"},r.a.createElement("main",null,r.a.createElement(c.a,{mdUp:!0},r.a.createElement(u,null)),r.a.createElement(q,null)))}a.d(t,"RenderNews",(function(){return B}));t.default=function(){return document.title="La Candelaria - News",r.a.createElement(U.a,null,r.a.createElement(B,null))}}}]);