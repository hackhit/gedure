(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{113:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(210),i=n(193),c=n(46),o=n(7);var u={changeContentNews:function(e){return{type:"CHANGE_CONTENT_NEWS",payload:e}}},s=Object(o.b)(null,u)((function(e){var t=e.changeContentNews,n=function(e){"SONnoticias"===e.target.id?(document.getElementById("SONnoticias").classList.add("active"),document.getElementById("SONanuncios").classList.remove("active"),t("noticias")):(document.getElementById("SONnoticias").classList.remove("active"),document.getElementById("SONanuncios").classList.add("active"),t("anuncios"))};return r.a.createElement("div",{className:"SwitchOptionNews"},r.a.createElement(i.a,{in:!0},r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("span",{id:"SONnoticias",className:"ItemSwitchNews active",onClick:n},"Noticias"),r.a.createElement("span",{id:"SONanuncios",className:"ItemSwitchNews",onClick:n},"Anuncios"))))})),m=n(259),d=n(16),E=n(26),f=n.n(E),p=n(204);function v(e){var t=e.options;if(Array.isArray(t)&&0!==t.length){var n=t.map((function(e,t){return 3===t?r.a.createElement("span",{key:t},"Hay mas"):t<4?r.a.createElement("span",{key:t},e.title):r.a.createElement("span",{key:t,style:{display:"none"}},e.title)}));return r.a.createElement("footer",null,n)}if("loading"===t){var a=[1,2,3,4].map((function(e,t){return r.a.createElement(p.a,{key:t,variant:"rect",width:70,height:60})}));return r.a.createElement("footer",null,a)}return r.a.createElement("footer",null)}function g(e,t,n,a,r,l,i){try{var c=e[l](i),o=c.value}catch(e){return void n(e)}c.done?t(o):Promise.resolve(o).then(a,r)}function N(){return r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("section",{className:"Noticia"},r.a.createElement("div",{className:"NHead"},r.a.createElement(p.a,{variant:"circle",className:"NHeadImg"}),r.a.createElement(p.a,{variant:"text",className:"NHeadName",width:150})),r.a.createElement("hr",null),r.a.createElement("div",{className:"NContent"},r.a.createElement(p.a,{variant:"text",className:"NContentTitle",width:200}),r.a.createElement("p",{className:"NContentP"},r.a.createElement(p.a,{variant:"text",width:"100%"}),r.a.createElement(p.a,{variant:"text",width:"100%"}),r.a.createElement(p.a,{variant:"text",width:"100%"}),r.a.createElement(p.a,{variant:"text",width:"100%"}))),r.a.createElement(v,{options:"skeleton"})))}function h(e){return e.options.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(i.a,{in:!0},r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("section",{className:"Noticia"},r.a.createElement("div",{className:"NHead"},r.a.createElement("span",{className:"NHeadImg"},"Logo"),r.a.createElement("span",{className:"NHeadName"},e.name)),r.a.createElement("hr",null),r.a.createElement("div",{className:"NContent"},r.a.createElement("span",{className:"NContentTitle"},e.title),r.a.createElement("p",{className:"NContentP"},e.content)),r.a.createElement(v,{options:e.imgList})))))}))}var b={updateNewsNoticias:function(e){return{type:"UPDATE_NEWS_NOTICIAS",payload:e}}},w=Object(o.b)((function(e){return{list:e.news.dataN}}),b)((function(e){var t=e.list,n=e.updateNewsNoticias;return Object(a.useEffect)((function(){var e=!1;return e||function(){var e,t=(e=f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/recker112/candelariaweb/noticias").then((function(e){return e.json()})).then((function(e){return e}));case 2:t=e.sent,n(t);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var l=e.apply(t,n);function i(e){g(l,a,r,i,c,"next",e)}function c(e){g(l,a,r,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}()(),function(){e=!0,n(null)}}),[n]),r.a.createElement("article",{className:"BoxNoticias"},null!==t?r.a.createElement(h,{options:t}):r.a.createElement(N,null))}));function y(e,t,n,a,r,l,i){try{var c=e[l](i),o=c.value}catch(e){return void n(e)}c.done?t(o):Promise.resolve(o).then(a,r)}function x(){return r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("section",{className:"Anuncio"},r.a.createElement(p.a,{variant:"text",className:"ATitle",width:200}),r.a.createElement("p",{className:"AContent"},r.a.createElement(p.a,{variant:"text",width:"100%"}),r.a.createElement(p.a,{variant:"text",width:"100%"}),r.a.createElement(p.a,{variant:"text",width:"100%"}),r.a.createElement(p.a,{variant:"text",width:"100%"})),r.a.createElement("hr",null),r.a.createElement("footer",null,r.a.createElement(p.a,{variant:"text",width:150}))))}function O(e){return e.option.map((function(e,t){return r.a.createElement(i.a,{in:!0,key:t},r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("section",{className:"Anuncio"},r.a.createElement("span",{className:"ATitle"},e.title),r.a.createElement("p",{className:"AContent"},e.content),r.a.createElement("hr",null),r.a.createElement("footer",null,"Escrito por: ",e.by))))}))}var S={updateNewsAnuncios:function(e){return{type:"UPDATE_NEWS_ANUNCIOS",payload:e}}},C=Object(o.b)((function(e){return{list:e.news.dataA}}),S)((function(e){var t=e.list,n=e.updateNewsAnuncios;return Object(a.useEffect)((function(){var e=!1;return e||function(){var e,t=(e=f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/recker112/candelariaweb/anuncios").then((function(e){return e.json()})).then((function(e){return e}));case 2:t=e.sent,n(t);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var l=e.apply(t,n);function i(e){y(l,a,r,i,c,"next",e)}function c(e){y(l,a,r,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}()(),function(){e=!0,n(null)}}),[n]),r.a.createElement("aside",{id:"test",className:"BoxAnuncios"},r.a.createElement(i.a,{in:!0},r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("div",{className:"AHead"},r.a.createElement("span",null,"Anuncios")))),null!==t?r.a.createElement(O,{option:t}):r.a.createElement(x,null))}));var j=Object(o.b)((function(e){return{content:e.news.content}}))((function(e){var t=e.content,n=Object(d.a)(),a=Object(m.a)(n.breakpoints.up("md"));return r.a.createElement("div",{className:"container"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(C,null)):"noticias"===t?r.a.createElement(w,{styles:{marginTop:"0px"}}):r.a.createElement(C,null))})),A=n(75);function I(){return r.a.createElement("div",{className:"BoxPageNews"},r.a.createElement("main",null,r.a.createElement(l.a,{mdUp:!0},r.a.createElement(s,null)),r.a.createElement(j,null)))}n.d(t,"RenderNews",(function(){return I}));t.default=function(e){return e.Mmobile,document.title="La Candelaria - News",r.a.createElement(A.a,null,r.a.createElement(I,null))}},227:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(85),i=n(219),c=n(251),o=n(198),u=n(116),s=n.n(u),m=n(7),d=n(57);var E={toggleDrawer:d.a},f=Object(m.b)(null,E)((function(e){var t=e.toggleDrawer;return r.a.createElement(c.a,{title:"Cerrar menú",arrow:!0,enterDelay:1e3},r.a.createElement(o.a,{onClick:function(){t(!1)}},r.a.createElement(s.a,null)))})),p=n(199),v=n(216),g=n(217),N=n(68),h=n(84);var b={updatePanelContent:N.a,toggleDrawer:d.a,updateIndexDrawer:h.a},w=Object(m.b)((function(e){return{index:e.panelSettings.drawer.index}}),b)((function(e){var t=e.options,n=e.children,a=e.updatePanelContent,l=e.toggleDrawer,i=e.indexPass,c=e.index,o=e.updateIndexDrawer,u=t.redirect,s=t.text;return r.a.createElement(p.a,{button:!0,key:s,onClick:function(){a(u),l(),o(i)},selected:c===i,className:c===i?"drawerItemSelected":"drawerItem"},r.a.createElement(v.a,null,n),r.a.createElement(g.a,{primary:s}))})),y=n(255),x=n(218),O=n(117),S=n.n(O),C=n(118),j=n.n(C),A=n(88),I=n.n(A),k=n(119),P=n.n(k),D=n(120),T=n.n(D),B=n(121),L=n.n(B),H=n(122),R=n.n(H),_=n(105),J=n.n(_),M=n(124),U=n.n(M),F=n(125),W=n.n(F),G=n(123),V=n.n(G),z=Object(m.b)((function(e){return{privilegio:e.userData.privilegio}}))((function(e){var t=e.privilegio,n=[{redirect:"home",text:"Dashboard",icon:r.a.createElement(J.a,null)},{redirect:"reg",text:"Registros",icon:r.a.createElement(S.a,null)},{redirect:"co/mo",text:"Consultar/Modificar",icon:r.a.createElement(j.a,null)},{redirect:"upload",text:"Cargar",icon:r.a.createElement(I.a,null)},{redirect:"options",text:"Opciones",icon:r.a.createElement(P.a,null)},{redirect:"delete",text:"Borrar",icon:r.a.createElement(T.a,null)},{redirect:"notice",text:"Publicar",icon:r.a.createElement(L.a,null)},{redirect:"deleteNotices",text:"Borrar publicación",icon:r.a.createElement(R.a,null)}],a=[{redirect:"home",text:"Dashboard",icon:r.a.createElement(J.a,null)},{redirect:"boleta",text:"Boleta",icon:r.a.createElement(V.a,null)},{redirect:"horario",text:"Horario",icon:r.a.createElement(U.a,null)},{redirect:"constancias",text:"Constancias",icon:r.a.createElement(W.a,null)}];return r.a.createElement("div",{role:"presentation"},r.a.createElement("div",{className:"drawerMenu"},r.a.createElement("span",{className:"TextHead"},"Menú"),r.a.createElement(f,null)),r.a.createElement(y.a,{style:{width:"250px"},dense:!0},"A-"===t&&n.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(w,{options:{redirect:e.redirect,text:e.text},indexPass:t},e.icon),0===t||5===t?r.a.createElement(x.a,null):null)})),"V-"===t&&a.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(w,{options:{redirect:e.redirect,text:e.text},indexPass:t},e.icon),0===t||5===t?r.a.createElement(x.a,null):null)}))))}));var q={toggleDrawer:d.a},K=Object(m.b)((function(e){return{open:e.panelSettings.drawer.open}}),q)((function(e){var t=e.open,n=e.toggleDrawer;return r.a.createElement(i.a,{open:t,onClose:function(){n(!1)}},r.a.createElement(z,null))})),Q=n(63),X=n(113),Y=Object(Q.a)((function(){return n.e(3).then(n.bind(null,232))})),Z=Object(Q.a)((function(){return n.e(7).then(n.bind(null,228))})),$=Object(Q.a)((function(){return Promise.all([n.e(8),n.e(4)]).then(n.bind(null,231))})),ee=Object(Q.a)((function(){return n.e(2).then(n.bind(null,221))})),te=Object(Q.a)((function(){return n.e(5).then(n.bind(null,222))})),ne=Object(Q.a)((function(){return n.e(1).then(n.bind(null,223))})),ae=Object(Q.a)((function(){return n.e(6).then(n.bind(null,224))}));function re(e){var t=e.content;return"home"===t?r.a.createElement("main",null,r.a.createElement(Y,null)):"news"===t?r.a.createElement(X.RenderNews,null):"reg"===t?r.a.createElement("main",null,r.a.createElement(Z,null)):"co/mo"===t?r.a.createElement("main",null,r.a.createElement($,null)):"upload"===t?r.a.createElement("main",null,r.a.createElement(ee,null)):"options"===t?r.a.createElement("main",null,r.a.createElement(te,null)):"delete"===t?r.a.createElement("main",null,r.a.createElement(ne,null)):"notice"===t?r.a.createElement("main",null,r.a.createElement(ae,null)):r.a.createElement("main",null,r.a.createElement("h1",null,"Error"))}var le=Object(m.b)((function(e){return{content:e.panelSettings.content,privilegio:e.userData.privilegio}}))((function(e){var t=e.content,n=e.privilegio;return"A-"===n?r.a.createElement(re,{content:t}):"V-"===n?r.a.createElement("main",null,"USER"):r.a.createElement("main",null,"ERROR")})),ie=n(106),ce=n(260),oe=n(261),ue=n(262),se=n(263),me=n(264),de=n(150),Ee=function(){return{type:"UPDATE_INFO_DIALOG"}};function fe(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var ve=r.a.forwardRef((function(e,t){return r.a.createElement(ie.a,pe({direction:"up",ref:t},e))}));var ge={updateInfoDialog:Ee},Ne=Object(m.b)((function(e){return{infoDialog:e.panelSettings.infoDialog,content:e.panelSettings.content}}),ge)((function(e){var t=e.infoDialog,n=e.updateInfoDialog,a=e.content,l="",i="";[{id:"reg",title:"Registros",content:"Muestra todos los movimientos realizados en toda la app, desde inicios de sesión hasta movimientos en la matrícula."},{id:"co/mo",title:"Consultar y Modificar",content:"Permite modificar a los estudiantes de una sección, y muestra una lista de los estudantes existentes en una sección."},{id:"upload",title:"Cargar",content:"Permite cargar boletas o matricula en el servidor, modificando las ya existentes."},{id:"options",title:"Opciones",content:"Configurar algunas opciones del estudiante o una sección completa."},{id:"files",title:"Archivos",content:"Cargar o eliminar los archivos los descargables por el estudiante."},{id:"delete",title:"Eliminar",content:"Elimina boletas, o secciones del sistema."},{id:"notice",title:"Publicar",content:"Publica un auncio o una noticia nueva."},{id:"deleteNotices",title:"Borrar publicación",content:"Permite eliminar una noticia o anuncio publicado"}].map((function(e){return a===e.id&&(l=e.title,i=e.content),null}));var c=function(e){var t=e.target.dataset.content;if(void 0!==t){var a=localStorage.getItem("noListStorage");if(null===a||a.length>0)localStorage.setItem("noListStorage",JSON.stringify([t]));else{var r=JSON.parse(localStorage.getItem("noListStorage")),l=!1;if(r.map((function(e){return t!==e||l||(l=!0),null})),!l){var i=JSON.stringify([].concat(fe(r),[t]));localStorage.setItem("noListStorage",i)}}n()}else n()};return r.a.createElement(ce.a,{open:t,onClose:c,scroll:"paper",TransitionComponent:ve,"aria-labelledby":"info-title-dialog","aria-describedby":"info-description-dialog"},r.a.createElement(oe.a,{id:"info-title-dialog"},l),r.a.createElement(ue.a,null,r.a.createElement(se.a,{id:"info-description-dialog"},i)),r.a.createElement(me.a,null,r.a.createElement(de.a,{color:"secondary",onClick:c},r.a.createElement("span",{"data-content":a},"No mostrar más")),r.a.createElement(de.a,{color:"primary",onClick:c},"Entendido")))}));function he(){return r.a.createElement(l.b,null,r.a.createElement("div",{className:"BoxPagePanel"},r.a.createElement(K,null),r.a.createElement(le,null),r.a.createElement(Ne,null)))}n.d(t,"default",(function(){return he}))},75:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(54),i=n(7);var c={reloginSuccess:n(81).a};t.a=Object(i.b)((function(e){return{auth:e.loginStatus.auth}}),c)((function(e){var t=e.auth,n=e.reloginSuccess,i=e.children;return Object(a.useEffect)((function(){var e=!1;if(!e){var t=JSON.parse(localStorage.getItem("key")),a=JSON.parse(sessionStorage.getItem("key"));(t||a)&&n(!0)}return function(){e=!0}})),t?r.a.createElement(l.a,{to:{pathname:"/panel"}}):r.a.createElement("div",null,i)}))}}]);