(window.webpackJsonp=window.webpackJsonp||[]).push([[9,7],{178:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(112),c=n(254),i=n(286),o=n(234),u=n(124),s=n.n(u),m=n(7),d=n(60);var f={toggleDrawer:d.a},p=Object(m.b)(null,f)((function(e){var t=e.toggleDrawer;return r.a.createElement(i.a,{title:"Cerrar menú",arrow:!0,enterDelay:1e3},r.a.createElement(o.a,{onClick:function(){t(!1)}},r.a.createElement(s.a,null)))})),E=n(235),g=n(251),v=n(252),h=n(70),b=n(71);var N={updatePanelContent:h.a,toggleDrawer:d.a,updateIndexDrawer:b.a},y=Object(m.b)((function(e){return{index:e.panelSettings.drawer.index}}),N)((function(e){var t=e.options,n=e.children,a=e.updatePanelContent,l=e.toggleDrawer,c=e.indexPass,i=e.index,o=e.updateIndexDrawer,u=t.redirect,s=t.text;return r.a.createElement(E.a,{button:!0,key:s,onClick:function(){a(u),l(),o(c)},selected:i===c,className:i===c?"drawerItemSelected":"drawerItem"},r.a.createElement(g.a,null,n),r.a.createElement(v.a,{primary:s}))})),w=n(290),x=n(253),O=n(125),S=n.n(O),A=n(126),j=n.n(A),C=n(93),k=n.n(C),I=n(127),P=n.n(I),D=n(128),T=n.n(D),H=n(129),M=n.n(H),B=n(130),_=n.n(B),L=n(111),F=n.n(L),J=n(132),U=n.n(J),R=n(133),q=n.n(R),G=n(131),W=n.n(G),V=Object(m.b)((function(e){return{privilegio:e.userData.privilegio}}))((function(e){var t=e.privilegio,n=[{redirect:"home",text:"Dashboard",icon:r.a.createElement(F.a,null)},{redirect:"reg",text:"Registros",icon:r.a.createElement(S.a,null)},{redirect:"co/mo",text:"Consultar/Modificar",icon:r.a.createElement(j.a,null)},{redirect:"upload",text:"Cargar",icon:r.a.createElement(k.a,null)},{redirect:"options",text:"Opciones",icon:r.a.createElement(P.a,null)},{redirect:"delete",text:"Borrar",icon:r.a.createElement(T.a,null)},{redirect:"notice",text:"Publicar",icon:r.a.createElement(M.a,null)},{redirect:"deleteNotices",text:"Borrar publicación",icon:r.a.createElement(_.a,null)}],a=[{redirect:"home",text:"Dashboard",icon:r.a.createElement(F.a,null)},{redirect:"boleta",text:"Boleta",icon:r.a.createElement(W.a,null)},{redirect:"horario",text:"Horario",icon:r.a.createElement(U.a,null)},{redirect:"constancias",text:"Constancias",icon:r.a.createElement(q.a,null)}];return r.a.createElement("div",{role:"presentation"},r.a.createElement("div",{className:"drawerMenu"},r.a.createElement("span",{className:"TextHead"},"Menú"),r.a.createElement(p,null)),r.a.createElement(w.a,{style:{width:"250px"},dense:!0},"A-"===t&&n.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(y,{options:{redirect:e.redirect,text:e.text},indexPass:t},e.icon),0===t||5===t?r.a.createElement(x.a,null):null)})),"V-"===t&&a.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(y,{options:{redirect:e.redirect,text:e.text},indexPass:t},e.icon),0===t||5===t?r.a.createElement(x.a,null):null)}))))}));var z={toggleDrawer:d.a},Q=Object(m.b)((function(e){return{open:e.panelSettings.drawer.open}}),z)((function(e){var t=e.open,n=e.toggleDrawer;return r.a.createElement(c.a,{open:t,onClose:function(){n(!1)}},r.a.createElement(V,null))})),K=n(58),X=n(89),Y=Object(K.a)((function(){return n.e(4).then(n.bind(null,267))})),Z=Object(K.a)((function(){return n.e(11).then(n.bind(null,262))})),$=Object(K.a)((function(){return Promise.all([n.e(12),n.e(6)]).then(n.bind(null,265))})),ee=Object(K.a)((function(){return n.e(3).then(n.bind(null,256))})),te=Object(K.a)((function(){return n.e(8).then(n.bind(null,257))})),ne=Object(K.a)((function(){return n.e(2).then(n.bind(null,258))})),ae=Object(K.a)((function(){return n.e(10).then(n.bind(null,259))})),re=Object(K.a)((function(){return n.e(10).then(n.bind(null,260))}));function le(e){var t=e.content;return"home"===t?r.a.createElement("main",null,"Bienvenido."):"news"===t?r.a.createElement(X.RenderNews,null):"boleta"===t?r.a.createElement("main",null,r.a.createElement(re,null)):r.a.createElement("main",null,"No disponible por los momentos")}function ce(e){var t=e.content;return"home"===t?r.a.createElement("main",null,r.a.createElement(Y,null)):"news"===t?r.a.createElement(X.RenderNews,null):"reg"===t?r.a.createElement("main",null,r.a.createElement(Z,null)):"co/mo"===t?r.a.createElement("main",null,r.a.createElement($,null)):"upload"===t?r.a.createElement("main",null,r.a.createElement(ee,null)):"options"===t?r.a.createElement("main",null,r.a.createElement(te,null)):"delete"===t?r.a.createElement("main",null,r.a.createElement(ne,null)):"notice"===t?r.a.createElement("main",null,r.a.createElement(ae,null)):r.a.createElement("main",null,r.a.createElement("h1",null,"Error"))}var ie=Object(m.b)((function(e){return{content:e.panelSettings.content,privilegio:e.userData.privilegio}}))((function(e){var t=e.content,n=e.privilegio;return"A-"===n?r.a.createElement(ce,{content:t}):"V-"===n?r.a.createElement(le,{content:t}):r.a.createElement("main",null,"No disponible por los momentos")})),oe=n(113),ue=n(295),se=n(296),me=n(297),de=n(237),fe=n(298),pe=n(118),Ee=n(17),ge=function(){return{type:"UPDATE_INFO_DIALOG"}};function ve(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var be=r.a.forwardRef((function(e,t){return r.a.createElement(oe.a,he({direction:"up",ref:t},e))}));var Ne={updateInfoDialog:ge},ye=Object(m.b)((function(e){return{infoDialog:e.panelSettings.infoDialog,content:e.panelSettings.content}}),Ne)((function(e){var t=e.infoDialog,n=e.updateInfoDialog,a=e.content,l=Object(Ee.a)(),c=useMediaQuery(l.breakpoints.down("xs")),i="",o="";[{id:"reg",title:"Registros",content:"Muestra todos los movimientos realizados en toda la app, desde inicios de sesión hasta movimientos en la matrícula."},{id:"co/mo",title:"Consultar y Modificar",content:"Permite modificar a los estudiantes de una sección, y muestra una lista de los estudantes existentes en una sección."},{id:"upload",title:"Cargar",content:"Permite cargar boletas o matricula en el servidor, modificando las ya existentes."},{id:"options",title:"Opciones",content:"Configurar algunas opciones del estudiante o una sección completa."},{id:"files",title:"Archivos",content:"Cargar o eliminar los archivos los descargables por el estudiante."},{id:"delete",title:"Eliminar",content:"Elimina boletas, o secciones del sistema."},{id:"notice",title:"Publicar",content:"Publica un auncio o una noticia nueva."},{id:"deleteNotices",title:"Borrar publicación",content:"Permite eliminar una noticia o anuncio publicado"},{id:"boletas",title:"Boleta",content:"Permite descargar la boleta del estudiante solamente si ya se encuentra cargada en el sistema previamente"}].map((function(e){return a===e.id&&(i=e.title,o=e.content),null}));var u=function(e){var t=e.target.dataset.content;if(void 0!==t){var a=localStorage.getItem("noListStorage");if(null===a||0===a.length)localStorage.setItem("noListStorage",JSON.stringify([t]));else{var r=JSON.parse(localStorage.getItem("noListStorage")),l=!1;if(r.map((function(e){return t!==e||l||(l=!0),null})),!l){var c=JSON.stringify([].concat(ve(r),[t]));localStorage.setItem("noListStorage",c)}}n()}else n()};return r.a.createElement(ue.a,{open:t,onClose:u,scroll:"paper",fullScreen:c,TransitionComponent:be,"aria-labelledby":"info-title-dialog","aria-describedby":"info-description-dialog"},r.a.createElement(se.a,{id:"info-title-dialog"},i),r.a.createElement(me.a,null,r.a.createElement(de.a,{id:"info-description-dialog"},o)),r.a.createElement(fe.a,null,r.a.createElement(pe.a,{color:"secondary",onClick:u},r.a.createElement("span",{"data-content":a},"No mostrar más")),r.a.createElement(pe.a,{color:"primary",onClick:u},"Entendido")))}));function we(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"BoxPagePanel"},r.a.createElement(Q,null),r.a.createElement(ie,null),r.a.createElement(ye,null)))}n.d(t,"default",(function(){return we}))},80:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(34),c=n(7);var i={reloginSuccess:n(88).a};t.a=Object(c.b)((function(e){return{redirect:e.loginStatus.redirect}}),i)((function(e){var t=e.redirect,n=e.reloginSuccess,c=e.children;return Object(a.useEffect)((function(){var e=!1;if(!e){var t=JSON.parse(localStorage.getItem("key")),a=JSON.parse(sessionStorage.getItem("key"));"string"!=typeof t&&"string"!=typeof a||n(!0)}return function(){e=!0}})),t?r.a.createElement(l.a,{to:{pathname:"/panel"}}):r.a.createElement("div",null,c)}))},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(266),c=n(229),i=n(50),o=n(7);var u={changeContentNews:function(e){return{type:"CHANGE_CONTENT_NEWS",payload:e}}},s=Object(o.b)((function(e){return{content:e.news.content}}),u)((function(e){var t=e.changeContentNews,n=e.content,a="noticias"===n?"ItemSwitchNews active":"ItemSwitchNews",l="anuncios"===n?"ItemSwitchNews active":"ItemSwitchNews",o=function(e){"SwitchNoticias"===e.target.id?t("noticias"):t("anuncios")};return r.a.createElement("div",{className:"SwitchOptionNews"},r.a.createElement(c.a,{in:!0},r.a.createElement(i.a,{variant:"outlined"},r.a.createElement("span",{id:"SwitchNoticias",className:a,onClick:o},"Noticias"),r.a.createElement("span",{id:"SwitchAnuncios",className:l,onClick:o},"Anuncios"))))})),m=n(294),d=n(17),f=n(12),p=n.n(f),E=n(15),g=n(250),v=n(120);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e){var t=e.options;if(Array.isArray(t)&&0!==t.length){var n=t.length-3,a=t.map((function(e,t){return 3===t?r.a.createElement("span",{key:t,className:"more"},"+",n):t<4?r.a.createElement(v.a,{alt:"imagen".concat(t+1),src:e,placeholder:function(e){e.imageProps;var n=e.ref;return r.a.createElement(g.a,{ref:n,key:t,variant:"rect",height:100,width:110})},actual:function(e){var n=e.imageProps;return r.a.createElement("img",h({key:t},n))},error:function(){return r.a.createElement("div",{style:{width:"110px",height:"100px",background:"rgb(252, 72, 80)"}},r.a.createElement("p",null,"Error al obtener imagen"))}}):r.a.createElement("img",{key:t,src:e,alt:"imagen".concat(t+1),style:{display:"none"}})}));return r.a.createElement("footer",null,r.a.createElement(E.a,{container:!0,spacing:2,justify:"space-evenly",wrap:"wrap",className:"fixGrid"},a))}if("loading"===t){var l=[1,2,3,4].map((function(e,t){return r.a.createElement(g.a,{key:t,variant:"rect",height:100,width:110})}));return r.a.createElement("footer",null,r.a.createElement(E.a,{container:!0,spacing:2,justify:"space-evenly",wrap:"wrap",className:"fixGrid"},l))}return r.a.createElement(r.a.Fragment,null)}var N=n(301),y=n(18),w=n(83);function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function O(e,t,n,a,r,l,c){try{var i=e[l](c),o=i.value}catch(e){return void n(e)}i.done?t(o):Promise.resolve(o).then(a,r)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function A(){return r.a.createElement(i.a,{variant:"outlined"},r.a.createElement("section",{className:"Noticia"},r.a.createElement("div",{className:"NHead"},r.a.createElement(g.a,{variant:"circle",className:"NHeadImg"}),r.a.createElement(g.a,{variant:"text",className:"NHeadName",width:150}),r.a.createElement(g.a,{variant:"text",className:"NHeadName",width:35})),r.a.createElement("hr",null),r.a.createElement("div",{className:"NContent"},r.a.createElement(g.a,{variant:"text",className:"NContentTitle",width:200}),r.a.createElement("p",{className:"NContentP"},r.a.createElement(g.a,{variant:"text",width:"100%"}),r.a.createElement(g.a,{variant:"text",width:"100%"}),r.a.createElement(g.a,{variant:"text",width:"100%"}),r.a.createElement(g.a,{variant:"text",width:"100%"}))),r.a.createElement(b,{options:"loading"})))}function j(e){return e.options.map((function(e){var t,n;return"A-"===e.privilegio?(t=e.nameA,n=e.avatarA):(t=e.nameC,n=e.avatarC),r.a.createElement("div",{key:e.id},r.a.createElement(i.a,{variant:"outlined"},r.a.createElement("section",{className:"Noticia"},r.a.createElement("div",{className:"NHead"},r.a.createElement(N.a,{src:n,alt:"Usuario",className:"NHeadImg",style:{backgroundColor:"#B46BD6"}},t.substring(0,1).toUpperCase()),r.a.createElement("span",{className:"NHeadName"},t),r.a.createElement("small",null,r.a.createElement("i",null,"#",e.id))),r.a.createElement("hr",null),r.a.createElement("div",{className:"NContent"},r.a.createElement("span",{className:"NContentTitle"},e.title),r.a.createElement("p",{className:"NContentP",dangerouslySetInnerHTML:{__html:e.content}})),r.a.createElement(b,{options:JSON.parse(e.imgList)}),r.a.createElement("i",{className:"NFecha"},"Publicado ",e.fecha))))}))}var C={updateNewsNoticias:function(e){return{type:"UPDATE_NEWS_NOTICIAS",payload:e}}},k=Object(o.b)((function(e){return{list:e.news.dataN}}),C)((function(e){var t=e.list,n=e.updateNewsNoticias,l=Object(y.useSnackbar)().enqueueSnackbar,c=S(Object(a.useState)(!1),2),i=c[0],o=c[1],u=S(Object(a.useState)(!1),2),s=u[0],m=u[1],d=!1,f=function(){var e,a=(e=p.a.mark((function e(a,r){var c,i,u,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("api/news?offset=".concat(a,"&limit=").concat(r));case 3:c=e.sent,i=c.data,u=i.data,s=i.finish,d||(u.length>0?(n([].concat(x(t),x(u))),o(s)):m(!0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l("No se han podido obtener las noticias",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var l=e.apply(t,n);function c(e){O(l,a,r,c,i,"next",e)}function i(e){O(l,a,r,c,i,"throw",e)}c(void 0)}))});return function(e,t){return a.apply(this,arguments)}}(),E=function(){var e=t.length;f(e,5)};return Object(a.useEffect)((function(){return 0===t.length&&E(),function(){d=!0}}),[t,d]),Object(a.useEffect)((function(){return function(){d=!0,n([])}}),[n,d]),r.a.createElement("article",{className:"BoxNoticias"},0!==t.length?r.a.createElement(w.a,{dataLength:t.length,hasMore:!i,next:E,scrollThreshold:.3,loader:r.a.createElement(A,null),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"No hay más noticias que cargar."))},r.a.createElement(j,{options:t})):r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),s&&r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"No hay anuncios publicados."))))}));function I(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function P(e,t,n,a,r,l,c){try{var i=e[l](c),o=i.value}catch(e){return void n(e)}i.done?t(o):Promise.resolve(o).then(a,r)}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function T(){return r.a.createElement(i.a,{variant:"outlined"},r.a.createElement("section",{className:"Anuncio"},r.a.createElement(g.a,{variant:"text",className:"ATitle",width:200}),r.a.createElement("p",{className:"AContent"},r.a.createElement(g.a,{variant:"text",width:"100%"}),r.a.createElement(g.a,{variant:"text",width:"100%"}),r.a.createElement(g.a,{variant:"text",width:"100%"}),r.a.createElement(g.a,{variant:"text",width:"100%"})),r.a.createElement("hr",null),r.a.createElement("footer",null,r.a.createElement(g.a,{variant:"text",width:150})),r.a.createElement("div",{className:"AId"})))}function H(e){return e.option.map((function(e){var t;return t="A-"===e.privilegio?e.nameA:e.nameC,r.a.createElement(i.a,{variant:"outlined",key:e.id,className:"AnuncioPaper"},r.a.createElement("section",{className:"Anuncio"},r.a.createElement("span",{className:"ATitle"},e.title),r.a.createElement("p",{className:"AContent",dangerouslySetInnerHTML:{__html:e.content}}),r.a.createElement("hr",null),r.a.createElement("footer",null,"Escrito por ",t," ",e.fecha),r.a.createElement("div",{className:"AId"},r.a.createElement("small",null,r.a.createElement("i",null,"#",e.id)))))}))}var M={updateNewsAnuncios:function(e){return{type:"UPDATE_NEWS_ANUNCIOS",payload:e}}},B=Object(o.b)((function(e){return{list:e.news.dataA}}),M)((function(e){var t=e.list,n=e.updateNewsAnuncios,l=Object(y.useSnackbar)().enqueueSnackbar,c=D(Object(a.useState)(!1),2),o=c[0],u=c[1],s=D(Object(a.useState)(!1),2),m=s[0],d=s[1],f=!1,E=function(){var e,a=(e=p.a.mark((function e(a,r){var c,i,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("api/anuncios?offset=".concat(a,"&limit=").concat(r));case 3:c=e.sent,i=c.data,o=i.data,s=i.finish,f||(o.length>0?(n([].concat(I(t),I(o))),u(s)):d(!0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l("No se han podido obtener los anuncios",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var l=e.apply(t,n);function c(e){P(l,a,r,c,i,"next",e)}function i(e){P(l,a,r,c,i,"throw",e)}c(void 0)}))});return function(e,t){return a.apply(this,arguments)}}(),g=function(){var e=t.length;E(e,7)};return Object(a.useEffect)((function(){return 0===t.length&&g(),function(){f=!0}}),[t,f]),Object(a.useEffect)((function(){return function(){f=!0,n([])}}),[n,f]),r.a.createElement("aside",{id:"test",className:"BoxAnuncios"},r.a.createElement(i.a,{variant:"outlined",className:"PaperMargin"},r.a.createElement("div",{className:"AHead"},r.a.createElement("span",null,"Anuncios"))),0!==t.length?r.a.createElement(w.a,{dataLength:t.length,hasMore:!o,next:g,scrollThreshold:.2,loader:r.a.createElement(T,null),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"No hay más anuncios que cargar."))},r.a.createElement(H,{option:t})):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),m&&r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"No hay anuncios publicados."))))}));var _=Object(o.b)((function(e){return{content:e.news.content}}))((function(e){var t=e.content,n=Object(d.a)(),a=Object(m.a)(n.breakpoints.up("md"));return r.a.createElement("div",{className:"container"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(B,null)):"noticias"===t?r.a.createElement(k,{styles:{marginTop:"0px"}}):r.a.createElement(B,null))})),L=n(80);function F(){return r.a.createElement("div",{className:"BoxPageNews"},r.a.createElement("main",null,r.a.createElement(l.a,{mdUp:!0},r.a.createElement(s,null)),r.a.createElement(_,null)))}n.d(t,"RenderNews",(function(){return F}));t.default=function(){return document.title="La Candelaria - News",r.a.createElement(L.a,null,r.a.createElement(F,null))}}}]);