(this["webpackJsonpla-candelaria-web"]=this["webpackJsonpla-candelaria-web"]||[]).push([[13],{225:function(e,a,t){"use strict";a.a=function(e,a){return{type:"UPDATE_VALUE_".concat(a),payload:e}}},228:function(e,a,t){"use strict";a.a=function(e,a){return{type:"UPDATE_LOADING_".concat(a),payload:e}}},229:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(409),c=t(181),l=t(283);function i(e){var a=e.color,t=e.progress,n=e.label;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{color:a,variant:"static",value:t}),r.a.createElement("span",{style:{position:"relative",top:"-30px"}},t,"%"),n&&r.a.createElement("span",{style:{position:"relative",top:"-10px"}},n))}function s(e){var a=e.loading,t=e.progress,n=e.progressBar,l=e.colorsito,s=e.progressLabel;return a&&n&&100!==t?r.a.createElement(c.a,{open:!0,style:{zIndex:200}},r.a.createElement(i,{color:l,progress:t,label:s})):r.a.createElement(c.a,{open:!0,style:{zIndex:200}},r.a.createElement(o.a,{color:l}))}a.a=function(e){var a=e.estilo,t=e.colorsito,n=e.loading,c=e.text,u=e.onClick,m=void 0===u?function(){}:u,d=e.progressBar,v=void 0!==d&&d,p=e.progress,E=void 0===p?0:p,f=e.progressLabel,b=void 0!==f&&f,g=e.backDrop;return n&&!(void 0!==g&&g)?v&&100!==E?r.a.createElement(i,{color:t,progress:E,label:b}):r.a.createElement(o.a,{color:t}):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{onClick:m,variant:a,type:"submit",color:t},c),n&&r.a.createElement(s,{loading:!0,progress:E,progressBar:v,colorsito:t,progressLabel:b}))}},230:function(e,a,t){"use strict";t.d(a,"c",(function(){return h})),t.d(a,"b",(function(){return w})),t.d(a,"a",(function(){return O}));var n=t(84),r=t(0),o=t.n(r),c=t(365),l=t(440),i=t(218),s=t(414),u=t(415),m=t(368),d=t(417),v=t(437),p=t(418),E=t(420),f=t(214),b=t(231),g=t.n(b),x=t(232),y=t.n(x);function h(e){var a=e.val,t=e.action,n=e.data,r=e.error,u=void 0!==r&&r,m=e.empty,d=void 0===m||m,v=e.classNameSet,p=void 0!==v&&v,E=e.customWidth,f=void 0!==E&&E;return o.a.createElement(c.a,{error:u&&u.status,style:{width:f||"100%"}},o.a.createElement(l.a,{displayEmpty:!0,name:n.name,value:a,onChange:t,className:p||null},n.values.map((function(e,a){return 0===a&&d?o.a.createElement(i.a,{key:a,value:e.value},o.a.createElement("em",null,e.name)):o.a.createElement(i.a,{key:a,value:e.value},e.name)}))),u&&o.a.createElement(s.a,null,u.message))}function w(e){var a=e.val,t=e.accion,n=e.data;return o.a.createElement(c.a,{component:"fieldset"},o.a.createElement(u.a,{color:n.color,component:"legend"},n.title),o.a.createElement(m.a,{"aria-label":n.name,name:n.name,value:a,onChange:t,row:!0},n.values.map((function(e,a){return o.a.createElement(d.a,{key:a,value:e.value,control:o.a.createElement(v.a,{color:n.color}),label:e.name,labelPlacement:"end"})}))))}function O(e){var a=e.data,t=e.accion,c=e.error,l=e.variant,i=void 0===l?"outlined":l,s=e.textarea,u=void 0!==s&&s,m=e.maxRows,d=void 0===m?6:m,v=e.maxWidth,b=void 0!==v&&v,x=e.size,h=void 0===x?"medium":x,w=e.visibleToggle,O=void 0!==w&&w,_=e.focus,k=void 0!==_&&_,j=a.val,C=a.name,z=a.label,L=c.status,N=c.message,T=Object(r.useState)(!1),B=Object(n.a)(T,2),S=B[0],D=B[1],M={rows:4,rowsMax:d};return o.a.createElement(p.a,Object.assign({type:O?S?"text":"password":"text",name:C,value:j,label:z,size:h,autoFocus:k,style:{width:"100%",maxWidth:b||"none"},variant:i,onChange:t,multiline:u,InputProps:{endAdornment:O?o.a.createElement(E.a,{position:"end"},o.a.createElement(f.a,{onClick:function(){D(!S)},size:h},S?o.a.createElement(g.a,null):o.a.createElement(y.a,null))):null}},M,{error:L,helperText:L&&N}))}},231:function(e,a,t){"use strict";var n=t(18);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(19)).default)(r.default.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");a.default=o},232:function(e,a,t){"use strict";var n=t(18);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(19)).default)(r.default.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");a.default=o},233:function(e,a,t){"use strict";a.a=function(e,a,t){return{type:"ERROR_INFO_".concat(t),payload:{input:e,message:a}}}},234:function(e,a,t){"use strict";a.a=function(e,a,t){var n=!1;return e.map((function(e){return 0===e.value.length?(a(e.name,"Campo obligatorio",t),n=!0):e.minValue&&e.value.length<e.minValue&&(a(e.name,"No v\xe1lido",t),n=!0),null})),n}},431:function(e,a,t){"use strict";t.r(a);var n=t(236),r=t(226),o=t.n(r),c=t(227),l=t(0),i=t.n(l),s=t(421),u=t(83),m=t(230),d=t(229),v=t(242),p=t(234),E=t(12),f=t(225),b=t(233),g=t(228),x=t(50);function y(e){var a=e.action,t=e.value;return i.a.createElement("div",{className:"Box"},i.a.createElement("span",{className:"Box__Title"},"Borrar"),i.a.createElement("div",{className:"Box__Content"},i.a.createElement(m.c,{action:a,val:t,data:{name:"option",values:[{value:"seccion",name:"Secci\xf3n"},{value:"boletas",name:"Boletas"}]},classNameSet:"select",customWidth:"auto",empty:!1})))}var h={updateValue:f.a,errorInfo:b.a,updateLoading:g.a};a.default=Object(E.b)((function(e){return{data:e.panelSettings.deleteSection}}),h)((function(e){var a=e.data,t=e.updateValue,r=e.errorInfo,l=e.updateLoading,E=window.axios,f=a.option,b=a.loading,g=a.curso,h=a.seccion,w=a.error,O=Object(x.b)().enqueueSnackbar,_=function(e){t(e,"DELETE")},k=function(){var e=Object(c.a)(o.a.mark((function e(){var a,t,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"seccion"!==f){e.next=7;break}return e.next=4,E.delete("api/users",{data:{curso:g,seccion:h}});case 4:a=e.sent,e.next=11;break;case 7:if("boletas"!==f){e.next=11;break}return e.next=10,E.delete("api/archivos/boletas",{data:{curso:g,seccion:h}});case 10:a=e.sent;case 11:t=a.data.description,O(t,{variant:"success"}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),e.t0.response?(n=e.t0.response,r=n.status,c=n.data,403===r?O(c.description,{variant:"error"}):400===r?O(c.description,{variant:"warning"}):O(500===r?"No se ha podido conectar con la base de datos":"Error interno en el servidor",{variant:"error"})):O("Error interno en el sistema",{variant:"error"});case 18:l(!1,"DELETE");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),j={name:"curso",values:[{value:"",name:"Grado/A\xf1o"}].concat(Object(n.a)(v.a))},C={name:"seccion",values:[{value:"",name:"Seccion"}].concat(Object(n.a)(v.c),[{value:"all",name:"Todas"}])};return i.a.createElement(s.a,{container:!0,spacing:2,justify:"center"},i.a.createElement(s.a,{item:!0,xs:12,sm:5,md:4},i.a.createElement(u.a,null,i.a.createElement(y,{action:_,value:f}))),i.a.createElement(s.a,{item:!0,xs:12,sm:10},i.a.createElement(u.a,{className:"Box"},i.a.createElement("div",{className:"Box__Content"},i.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var a=[{value:g,name:"curso"},{value:h,name:"seccion"}];if(Object(p.a)(a,r,"DELETE"))return null;l(!0,"DELETE"),k()},method:"POST",style:{marginTop:"0"}},i.a.createElement(s.a,{container:!0,spacing:2,justify:"center"},i.a.createElement(s.a,{item:!0,xs:5,sm:4,md:3},i.a.createElement(m.c,{action:_,val:g,data:j,error:w.curso})),i.a.createElement(s.a,{item:!0,xs:5,sm:4,md:3},i.a.createElement(m.c,{action:_,val:h,data:C,error:w.seccion})),i.a.createElement(s.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(d.a,{estilo:"outlined",colorsito:"inherit",text:"Borrar",loading:b}))))))))}))}}]);
//# sourceMappingURL=13.6bb2651a.chunk.js.map