(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(239),o=n(222),c=n(48),l=n(7);var s={changeContentNews:function(e){return{type:"CHANGE_CONTENT_NEWS",payload:e}}},u=Object(l.b)(null,s)((function(e){var t=e.changeContentNews,n=function(e){"SONnoticias"===e.target.id?(document.getElementById("SONnoticias").classList.add("active"),document.getElementById("SONanuncios").classList.remove("active"),t("noticias")):(document.getElementById("SONnoticias").classList.remove("active"),document.getElementById("SONanuncios").classList.add("active"),t("anuncios"))};return r.a.createElement("div",{className:"SwitchOptionNews"},r.a.createElement(o.a,{in:!0},r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("span",{id:"SONnoticias",className:"ItemSwitchNews active",onClick:n},"Noticias"),r.a.createElement("span",{id:"SONanuncios",className:"ItemSwitchNews",onClick:n},"Anuncios"))))})),m=n(286),d=n(16),p=n(31),f=n.n(p),v=n(233);function E(e){var t=e.options;if(Array.isArray(t)&&0!==t.length){var n=t.map((function(e,t){return 3===t?r.a.createElement("span",{key:t},"Hay mas"):t<4?r.a.createElement("span",{key:t},e.title):r.a.createElement("span",{key:t,style:{display:"none"}},e.title)}));return r.a.createElement("footer",null,n)}if("loading"===t){var a=[1,2,3,4].map((function(e,t){return r.a.createElement(v.a,{key:t,variant:"rect",width:70,height:60})}));return r.a.createElement("footer",null,a)}return r.a.createElement("footer",null)}function h(e,t,n,a,r,i,o){try{var c=e[i](o),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(a,r)}function w(){return r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("section",{className:"Noticia"},r.a.createElement("div",{className:"NHead"},r.a.createElement(v.a,{variant:"circle",className:"NHeadImg"}),r.a.createElement(v.a,{variant:"text",className:"NHeadName",width:150})),r.a.createElement("hr",null),r.a.createElement("div",{className:"NContent"},r.a.createElement(v.a,{variant:"text",className:"NContentTitle",width:200}),r.a.createElement("p",{className:"NContentP"},r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"}))),r.a.createElement(E,{options:"skeleton"})))}function N(e){return e.options.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(o.a,{in:!0},r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("section",{className:"Noticia"},r.a.createElement("div",{className:"NHead"},r.a.createElement("span",{className:"NHeadImg"},"Logo"),r.a.createElement("span",{className:"NHeadName"},e.name)),r.a.createElement("hr",null),r.a.createElement("div",{className:"NContent"},r.a.createElement("span",{className:"NContentTitle"},e.title),r.a.createElement("p",{className:"NContentP"},e.content)),r.a.createElement(E,{options:e.imgList})))))}))}var b={updateNewsNoticias:function(e){return{type:"UPDATE_NEWS_NOTICIAS",payload:e}}},y=Object(l.b)((function(e){return{list:e.news.dataN}}),b)((function(e){var t=e.list,n=e.updateNewsNoticias;return Object(a.useEffect)((function(){var e=!1;return e||function(){var e,t=(e=f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/recker112/candelariaweb/noticias").then((function(e){return e.json()})).then((function(e){return e}));case 2:t=e.sent,n(t);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){h(i,a,r,o,c,"next",e)}function c(e){h(i,a,r,o,c,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}()(),function(){e=!0,n(null)}}),[n]),r.a.createElement("article",{className:"BoxNoticias"},null!==t?r.a.createElement(N,{options:t}):r.a.createElement(w,null))}));function O(e,t,n,a,r,i,o){try{var c=e[i](o),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(a,r)}function g(){return r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("section",{className:"Anuncio"},r.a.createElement(v.a,{variant:"text",className:"ATitle",width:200}),r.a.createElement("p",{className:"AContent"},r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"}),r.a.createElement(v.a,{variant:"text",width:"100%"})),r.a.createElement("hr",null),r.a.createElement("footer",null,r.a.createElement(v.a,{variant:"text",width:150}))))}function x(e){return e.option.map((function(e,t){return r.a.createElement(o.a,{in:!0,key:t},r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("section",{className:"Anuncio"},r.a.createElement("span",{className:"ATitle"},e.title),r.a.createElement("p",{className:"AContent"},e.content),r.a.createElement("hr",null),r.a.createElement("footer",null,"Escrito por: ",e.by))))}))}var j={updateNewsAnuncios:function(e){return{type:"UPDATE_NEWS_ANUNCIOS",payload:e}}},k=Object(l.b)((function(e){return{list:e.news.dataA}}),j)((function(e){var t=e.list,n=e.updateNewsAnuncios;return Object(a.useEffect)((function(){var e=!1;return e||function(){var e,t=(e=f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/recker112/candelariaweb/anuncios").then((function(e){return e.json()})).then((function(e){return e}));case 2:t=e.sent,n(t);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){O(i,a,r,o,c,"next",e)}function c(e){O(i,a,r,o,c,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}()(),function(){e=!0,n(null)}}),[n]),r.a.createElement("aside",{id:"test",className:"BoxAnuncios"},r.a.createElement(o.a,{in:!0},r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("div",{className:"AHead"},r.a.createElement("span",null,"Anuncios")))),null!==t?r.a.createElement(x,{option:t}):r.a.createElement(g,null))}));var U=Object(l.b)((function(e){return{content:e.news.content}}))((function(e){var t=e.content,n=Object(d.a)(),a=Object(m.a)(n.breakpoints.up("md"));return r.a.createElement("div",{className:"container"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(k,null)):"noticias"===t?r.a.createElement(y,{styles:{marginTop:"0px"}}):r.a.createElement(k,null))})),D=n(76);function S(){return r.a.createElement("div",{className:"BoxPageNews"},r.a.createElement("main",null,r.a.createElement(i.a,{mdUp:!0},r.a.createElement(u,null)),r.a.createElement(U,null)))}n.d(t,"RenderNews",(function(){return S}));t.default=function(e){return e.Mmobile,document.title="La Candelaria - News",r.a.createElement(D.a,null,r.a.createElement(S,null))}},233:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(0),o=n(3),c=(n(4),n(5)),l=i.forwardRef((function(e,t){var n=e.animation,c=void 0===n?"pulse":n,l=e.classes,s=e.className,u=e.component,m=void 0===u?"span":u,d=e.height,p=e.variant,f=void 0===p?"text":p,v=e.width,E=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]);return i.createElement(m,Object(a.a)({ref:t,className:Object(o.a)(l.root,l[f],s,!1!==c&&l[c])},E,{style:Object(a.a)({width:v,height:d},E.style)}))}));t.a=Object(c.a)((function(e){return{root:{display:"block",backgroundColor:e.palette.action.hover,height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0,zIndex:1}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}}}}),{name:"MuiSkeleton"})(l)},239:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(0),o=n(4),c=n.n(o),l=n(26),s=n(226),u=n(30),m=n.n(u),d=n(16),p=n(47),f=n(286),v=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?p.b.indexOf(e)<=p.b.indexOf(t):p.b.indexOf(e)<p.b.indexOf(t)},E=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?p.b.indexOf(t)<=p.b.indexOf(e):p.b.indexOf(t)<p.b.indexOf(e)},h="undefined"==typeof window?i.useEffect:i.useLayoutEffect,w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.withTheme,o=void 0!==n&&n,c=e.noSSR,u=void 0!==c&&c,p=e.initialWidth;function v(e){var n=Object(d.a)(),c=e.theme||n,m=Object(s.a)({theme:c,name:"MuiWithWidth",props:Object(a.a)({},e)}),v=m.initialWidth,E=m.width,w=Object(r.a)(m,["initialWidth","width"]),N=i.useState(!1),b=N[0],y=N[1];h((function(){y(!0)}),[]);var O=Object(l.a)(c.breakpoints.keys).reverse().reduce((function(e,t){var n=Object(f.a)(c.breakpoints.up(t));return!e&&n?t:e}),null),g=Object(a.a)({width:E||(b||u?O:void 0)||v||p},o?{theme:c}:{},{},w);return void 0===g.width?null:i.createElement(t,g)}return m()(v,t),v}};function N(e){var t=e.children,n=e.only,a=e.width,r=Object(d.a)(),i=!0;if(n)if(Array.isArray(n))for(var o=0;o<n.length;o+=1){if(a===n[o]){i=!1;break}}else n&&a===n&&(i=!1);if(i)for(var c=0;c<r.breakpoints.keys.length;c+=1){var l=r.breakpoints.keys[c],s=e["".concat(l,"Up")],u=e["".concat(l,"Down")];if(s&&v(l,a)||u&&E(l,a)){i=!1;break}}return i?t:null}N.propTypes={children:c.a.node,className:c.a.string,implementation:c.a.oneOf(["js","css"]),initialWidth:c.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:c.a.bool,lgUp:c.a.bool,mdDown:c.a.bool,mdUp:c.a.bool,only:c.a.oneOfType([c.a.oneOf(["xs","sm","md","lg","xl"]),c.a.arrayOf(c.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:c.a.bool,smUp:c.a.bool,width:c.a.string.isRequired,xlDown:c.a.bool,xlUp:c.a.bool,xsDown:c.a.bool,xsUp:c.a.bool};var b=w()(N),y=n(9),O=n(6),g=n(5);var x=Object(g.a)((function(e){var t={display:"none"};return e.breakpoints.keys.reduce((function(n,a){return n["only".concat(Object(O.a)(a))]=Object(y.a)({},e.breakpoints.only(a),t),n["".concat(a,"Up")]=Object(y.a)({},e.breakpoints.up(a),t),n["".concat(a,"Down")]=Object(y.a)({},e.breakpoints.down(a),t),n}),{})}),{name:"PrivateHiddenCss"})((function(e){var t=e.children,n=e.classes,a=e.className,o=e.only,c=(Object(r.a)(e,["children","classes","className","only"]),Object(d.a)()),l=[];a&&l.push(a);for(var s=0;s<c.breakpoints.keys.length;s+=1){var u=c.breakpoints.keys[s],m=e["".concat(u,"Up")],p=e["".concat(u,"Down")];m&&l.push(n["".concat(u,"Up")]),p&&l.push(n["".concat(u,"Down")])}return o&&(Array.isArray(o)?o:[o]).forEach((function(e){l.push(n["only".concat(Object(O.a)(e))])})),i.createElement("div",{className:l.join(" ")},t)}));t.a=function(e){var t=e.implementation,n=void 0===t?"js":t,o=e.lgDown,c=void 0!==o&&o,l=e.lgUp,s=void 0!==l&&l,u=e.mdDown,m=void 0!==u&&u,d=e.mdUp,p=void 0!==d&&d,f=e.smDown,v=void 0!==f&&f,E=e.smUp,h=void 0!==E&&E,w=e.xlDown,N=void 0!==w&&w,y=e.xlUp,O=void 0!==y&&y,g=e.xsDown,j=void 0!==g&&g,k=e.xsUp,U=void 0!==k&&k,D=Object(r.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===n?i.createElement(b,Object(a.a)({lgDown:c,lgUp:s,mdDown:m,mdUp:p,smDown:v,smUp:h,xlDown:N,xlUp:O,xsDown:j,xsUp:U},D)):i.createElement(x,Object(a.a)({lgDown:c,lgUp:s,mdDown:m,mdUp:p,smDown:v,smUp:h,xlDown:N,xlUp:O,xsDown:j,xsUp:U},D))}},76:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(32),o=n(7);var c={reloginSuccess:n(82).a};t.a=Object(o.b)((function(e){return{redirect:e.loginStatus.redirect}}),c)((function(e){var t=e.redirect,n=e.reloginSuccess,o=e.children;return Object(a.useEffect)((function(){var e=!1;if(!e){var t=JSON.parse(localStorage.getItem("key")),a=JSON.parse(sessionStorage.getItem("key"));"string"!=typeof t&&"string"!=typeof a||n(!0)}return function(){e=!0}})),t?r.a.createElement(i.a,{to:{pathname:"/panel"}}):r.a.createElement("div",null,o)}))}}]);