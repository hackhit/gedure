(this["webpackJsonpcandelaria-web-frontend"]=this["webpackJsonpcandelaria-web-frontend"]||[]).push([[7],{176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(33),c=a(16);var i={reloginSuccess:a(77).a};t.a=Object(c.b)((function(e){return{auth:e.loginStatus.auth}}),i)((function(e){var t=e.auth,a=e.reloginSuccess,c=e.children;return Object(n.useEffect)((function(){var e=!1;if(!e){var t=JSON.parse(localStorage.getItem("key")),n=JSON.parse(sessionStorage.getItem("key"));(t||n)&&a(!0)}return function(){e=!0}})),t?r.a.createElement(l.a,{to:{pathname:"/panel"}}):r.a.createElement("div",null,c)}))},189:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(219),c=a(136),i=a(142),o=a(16);var s={changeContentNews:function(e){return{type:"CHANGE_CONTENT_NEWS",payload:e}}},u=Object(o.b)(null,s)((function(e){var t=e.changeContentNews,a=function(e){"SONnoticias"===e.target.id?(document.getElementById("SONnoticias").classList.add("active"),document.getElementById("SONanuncios").classList.remove("active"),t("noticias")):(document.getElementById("SONnoticias").classList.remove("active"),document.getElementById("SONanuncios").classList.add("active"),t("anuncios"))};return r.a.createElement("div",{className:"SwitchOptionNews"},r.a.createElement(c.a,{in:!0},r.a.createElement(i.a,{variant:"outlined"},r.a.createElement("span",{id:"SONnoticias",className:"ItemSwitchNews active",onClick:a},"Noticias"),r.a.createElement("span",{id:"SONanuncios",className:"ItemSwitchNews",onClick:a},"Anuncios"))))})),m=a(204),d=a(21),E=a(74),p=a.n(E),f=a(203);function v(e){var t=e.options;if(Array.isArray(t)){var a=t.map((function(e,t){return 3===t?r.a.createElement("span",{key:t},"Hay mas"):t<4?r.a.createElement("span",{key:t},e.title):r.a.createElement("span",{key:t,style:{display:"none"}},e.title)}));return r.a.createElement("footer",null,a)}var n=[1,2,3,4].map((function(e,t){return r.a.createElement(f.a,{key:t,variant:"rect",width:70,height:60})}));return r.a.createElement("footer",null,n)}function N(){return r.a.createElement(i.a,{variant:"outlined"},r.a.createElement("section",{className:"Noticia"},r.a.createElement("div",{className:"NHead"},r.a.createElement(f.a,{variant:"circle",className:"NHeadImg"}),r.a.createElement(f.a,{variant:"text",className:"NHeadName",width:150})),r.a.createElement("hr",null),r.a.createElement("div",{className:"NContent"},r.a.createElement(f.a,{variant:"text",className:"NContentTitle",width:200}),r.a.createElement("p",{className:"NContentP"},r.a.createElement(f.a,{variant:"text",width:"100%"}),r.a.createElement(f.a,{variant:"text",width:"100%"}),r.a.createElement(f.a,{variant:"text",width:"100%"}),r.a.createElement(f.a,{variant:"text",width:"100%"}))),r.a.createElement(v,{options:null})))}function g(e){return e.options.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(c.a,{in:!0},r.a.createElement(i.a,{variant:"outlined"},r.a.createElement("section",{className:"Noticia"},r.a.createElement("div",{className:"NHead"},r.a.createElement("span",{className:"NHeadImg"},"Logo"),r.a.createElement("span",{className:"NHeadName"},e.name)),r.a.createElement("hr",null),r.a.createElement("div",{className:"NContent"},r.a.createElement("span",{className:"NContentTitle"},e.title),r.a.createElement("p",{className:"NContentP"},e.content)),r.a.createElement(v,{options:e.imgList})))))}))}var b={updateNewsNoticias:function(e){return{type:"UPDATE_NEWS_NOTICIAS",payload:e}}},h=Object(o.b)((function(e){return{list:e.news.dataN}}),b)((function(e){var t=e.list,a=e.updateNewsNoticias;return Object(n.useEffect)((function(){var e=!1;return e||function(){var e;p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(fetch("https://my-json-server.typicode.com/recker112/candelariaweb/noticias").then((function(e){return e.json()})).then((function(e){return e})));case 2:e=t.sent,a(e);case 5:case"end":return t.stop()}}))}(),function(){e=!0,a(null)}}),[a]),r.a.createElement("article",{className:"BoxNoticias"},null!==t?r.a.createElement(g,{options:t}):r.a.createElement(N,null))}));function w(){return r.a.createElement(i.a,{variant:"outlined"},r.a.createElement("section",{className:"Anuncio"},r.a.createElement(f.a,{variant:"text",className:"ATitle",width:200}),r.a.createElement("p",{className:"AContent"},r.a.createElement(f.a,{variant:"text",width:"100%"}),r.a.createElement(f.a,{variant:"text",width:"100%"}),r.a.createElement(f.a,{variant:"text",width:"100%"}),r.a.createElement(f.a,{variant:"text",width:"100%"})),r.a.createElement("hr",null),r.a.createElement("footer",null,r.a.createElement(f.a,{variant:"text",width:150}))))}function y(e){return e.option.map((function(e,t){return r.a.createElement(c.a,{in:!0,key:t},r.a.createElement(i.a,{variant:"outlined"},r.a.createElement("section",{className:"Anuncio"},r.a.createElement("span",{className:"ATitle"},e.title),r.a.createElement("p",{className:"AContent"},e.content),r.a.createElement("hr",null),r.a.createElement("footer",null,"Escrito por: ",e.by))))}))}var x={updateNewsAnuncios:function(e){return{type:"UPDATE_NEWS_ANUNCIOS",payload:e}}},O=Object(o.b)((function(e){return{list:e.news.dataA}}),x)((function(e){var t=e.list,a=e.updateNewsAnuncios;return Object(n.useEffect)((function(){var e=!1;return e||function(){var e;p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(fetch("https://my-json-server.typicode.com/recker112/candelariaweb/anuncios").then((function(e){return e.json()})).then((function(e){return e})));case 2:e=t.sent,a(e);case 5:case"end":return t.stop()}}))}(),function(){e=!0,a(null)}}),[a]),r.a.createElement("aside",{id:"test",className:"BoxAnuncios"},r.a.createElement(c.a,{in:!0},r.a.createElement(i.a,{variant:"outlined"},r.a.createElement("div",{className:"AHead"},r.a.createElement("span",null,"Anuncios")))),null!==t?r.a.createElement(y,{option:t}):r.a.createElement(w,null))}));var S=Object(o.b)((function(e){return{content:e.news.content}}))((function(e){var t=e.content,a=Object(d.a)(),n=Object(m.a)(a.breakpoints.up("sm"));return r.a.createElement("div",{className:"container"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(O,null)):"noticias"===t?r.a.createElement(h,{styles:{marginTop:"0px"}}):r.a.createElement(O,null))})),C=a(176);function A(){return r.a.createElement("div",{className:"BoxPageNews"},r.a.createElement("main",null,r.a.createElement(l.a,{smUp:!0},r.a.createElement(u,null)),r.a.createElement(S,null)))}a.d(t,"RenderNews",(function(){return A}));t.default=function(e){return e.Mmobile,document.title="La Candelaria - News",r.a.createElement(C.a,null,r.a.createElement(A,null))}},256:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(84),c=a(241),i=a(160),o=a(165),s=a(205),u=a.n(s),m=a(16),d=a(76);var E={toggleDrawer:d.a},p=Object(m.b)(null,E)((function(e){var t=e.toggleDrawer;return r.a.createElement(i.a,{title:"Cerrar men\xfa",arrow:!0},r.a.createElement(o.a,{onClick:t},r.a.createElement(u.a,null)))})),f=a(143),v=a(238),N=a(239),g=a(79),b=a(83);var h={updatePanelContent:g.a,toggleDrawer:d.a,updateIndexDrawer:b.a},w=Object(m.b)((function(e){return{index:e.panelSettings.drawer.index}}),h)((function(e){var t=e.options,a=e.children,n=e.updatePanelContent,l=e.toggleDrawer,c=e.indexPass,i=e.index,o=e.updateIndexDrawer,s=t.redirect,u=t.text;return r.a.createElement(f.a,{button:!0,key:u,onClick:function(){n(s),l(),o(c)},selected:i===c},r.a.createElement(v.a,null,a),r.a.createElement(N.a,{primary:u}))})),y=a(167),x=a(240),O=a(207),S=a.n(O),C=a(208),A=a.n(C),j=a(209),I=a.n(j),k=a(210),P=a.n(k),D=a(211),T=a.n(D),L=a(212),B=a.n(L),H=a(213),R=a.n(H),_=a(214),J=a.n(_),M=a(206),U=a.n(M),F=function(){var e=[{redirect:"home",text:"Dashboard",icon:r.a.createElement(U.a,null)},{redirect:"reg",text:"Registros",icon:r.a.createElement(S.a,null)},{redirect:"co/mo",text:"Consultar/Modificar",icon:r.a.createElement(A.a,null)},{redirect:"upload",text:"Cargar",icon:r.a.createElement(I.a,null)},{redirect:"options",text:"Opciones",icon:r.a.createElement(P.a,null)},{redirect:"files",text:"Archivos",icon:r.a.createElement(T.a,null)},{redirect:"delete",text:"Borrar",icon:r.a.createElement(B.a,null)},{redirect:"notice",text:"Publicar",icon:r.a.createElement(R.a,null)},{redirect:"deleteNotices",text:"Borrar publicaci\xf3n",icon:r.a.createElement(J.a,null)}];return r.a.createElement("div",{role:"presentation"},r.a.createElement("div",{className:"drawerMenu"},r.a.createElement("span",{className:"TextHead"},"Men\xfa"),r.a.createElement(p,null)),r.a.createElement(y.a,{style:{width:"250px"},dense:!0},e.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(w,{options:{redirect:e.redirect,text:e.text},indexPass:t},e.icon),0===t||6===t?r.a.createElement(x.a,null):null)}))))};var W={toggleDrawer:d.a},G=Object(m.b)((function(e){return{open:e.panelSettings.drawer.open}}),W)((function(e){var t=e.open,a=e.toggleDrawer;return(r.a.createElement(c.a,{open:t,onClose:a},r.a.createElement(F,null)))})),z=a(218),V=a(189),q=Object(z.a)((function(){return a.e(3).then(a.bind(null,268))})),K=Object(z.a)((function(){return Promise.all([a.e(0),a.e(1),a.e(8)]).then(a.bind(null,258))})),Q=Object(z.a)((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(13),a.e(5)]).then(a.bind(null,255))}));function X(e){var t=e.content;return"home"===t?r.a.createElement("main",null,r.a.createElement(q,null)):"news"===t?r.a.createElement(V.RenderNews,null):"reg"===t?r.a.createElement("main",null,r.a.createElement(K,null)):"co/mo"===t?r.a.createElement("main",null,r.a.createElement(Q,null)):r.a.createElement("main",null,r.a.createElement("h1",null,"Error"))}var Y=Object(m.b)((function(e){return{content:e.panelSettings.content,privilegio:e.userData.privilegio}}))((function(e){var t=e.content,a=e.privilegio;return"A-"===a?r.a.createElement(X,{content:t}):"V-"===a?r.a.createElement("h1",null,"USER"):r.a.createElement("h1",null,"ERROR")})),Z=a(40),$=a(86),ee=a(242),te=a(243),ae=a(244),ne=a(245),re=a(246),le=a(200),ce=function(){return{type:"UPDATE_INFO_DIALOG"}},ie=r.a.forwardRef((function(e,t){return r.a.createElement($.a,Object.assign({direction:"up",ref:t},e))}));var oe={updateInfoDialog:ce},se=Object(m.b)((function(e){return{infoDialog:e.panelSettings.infoDialog,content:e.panelSettings.content}}),oe)((function(e){var t=e.infoDialog,a=e.updateInfoDialog,n=e.content,l="",c="";[{id:"reg",title:"Registros",content:"Muestra todos los movimientos realizados en toda la app, desde inicios de sesi\xf3n hasta movimientos en la matr\xedcula."},{id:"co/mo",title:"Consultar y Modificar",content:"Permite modificar a los estudiantes de una secci\xf3n, y muestra una lista de los estudantes existentes en una secci\xf3n."},{id:"upload",title:"Cargar",content:"Permite cargar boletas o matricula en el servidor, modificando las ya existentes."},{id:"options",title:"Opciones",content:"Configurar algunas opciones del estudiante o una secci\xf3n completa."},{id:"files",title:"Archivos",content:"Cargar o eliminar los archivos los descargables por el estudiante."},{id:"delete",title:"Eliminar",content:"Elimina boletas, o secciones del sistema."},{id:"notice",title:"Publicar",content:"Publica un auncio o una noticia nueva."},{id:"deleteNotices",title:"Borrar publicaci\xf3n",content:"Permite eliminar una noticia o anuncio publicado"}].map((function(e){return n===e.id&&(l=e.title,c=e.content),null}));var i=function(e){var t=e.target.dataset.content;if("undefined"!==typeof t){if(null===localStorage.getItem("noListStorage"))localStorage.setItem("noListStorage",JSON.stringify([t]));else{var n=JSON.parse(localStorage.getItem("noListStorage")),r=!1;if(n.map((function(e){return t!==e||r||(r=!0),null})),!r){var l=JSON.stringify([].concat(Object(Z.a)(n),[t]));localStorage.setItem("noListStorage",l)}}a()}else a()};return r.a.createElement(ee.a,{open:t,onClose:i,scroll:"paper",TransitionComponent:ie,"aria-labelledby":"info-title-dialog","aria-describedby":"info-description-dialog"},r.a.createElement(te.a,{id:"info-title-dialog"},l),r.a.createElement(ae.a,null,r.a.createElement(ne.a,{id:"info-description-dialog"},c)),r.a.createElement(re.a,null,r.a.createElement(le.a,{color:"secondary",onClick:i},r.a.createElement("span",{"data-content":n},"No mostrar m\xe1s")),r.a.createElement(le.a,{color:"primary",onClick:i},"Entendido")))}));function ue(){return r.a.createElement(l.b,null,r.a.createElement("div",{className:"BoxPagePanel"},r.a.createElement(G,null),r.a.createElement(Y,null),r.a.createElement(se,null)))}a.d(t,"default",(function(){return ue}))}}]);
//# sourceMappingURL=Panel.40454d8c.chunk.js.map