(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{NUoh:function(e,a,t){"use strict";a.a=function(e,a,t){var n=!1;return e.map((function(e){return 0===e.value.length?(a(e.name,"Campo obligatorio",t),n=!0):e.minValue&&e.value.length<e.minValue&&(a(e.name,"No válido",t),n=!0),null})),n}},hAFt:function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),r=t.n(n),o=t("q1tI"),c=t.n(o),i=t("tRbT"),u=t("kKAo"),l=t("4fo9"),s=t("LrKO"),m=t("id7c"),v=t("NUoh"),d=t("/MKj"),p=t("nXu+"),f=t("uHp0"),E=t("Bnya"),b=t("HXb3");function g(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,a,t,n,r,o,c){try{var i=e[o](c),u=i.value}catch(e){return void t(e)}i.done?a(u):Promise.resolve(u).then(n,r)}function x(e){var a=e.action,t=e.value;return c.a.createElement("div",{className:"Box"},c.a.createElement("span",{className:"title"},"Borrar"),c.a.createElement("div",{className:"content"},c.a.createElement(l.c,{action:a,val:t,data:{name:"option",values:[{value:"seccion",name:"Sección"},{value:"boletas",name:"Boletas"}]},classNameSet:"select",customWidth:"auto",empty:!1})))}var y={updateInputValue:p.a,errorInfo:f.a,updateLoading:E.a};a.default=Object(d.b)((function(e){return{data:e.panelSettings.deleteSection}}),y)((function(e){var a=e.data,t=e.updateInputValue,n=e.errorInfo,o=e.updateLoading,d=a.option,p=a.loading,f=a.curso,E=a.seccion,y=a.error,w=Object(b.useSnackbar)().enqueueSnackbar,A=function(e){t(e,"DELETE")},S=function(){var e,a=(e=r.a.mark((function e(){var a,t,n,c,i,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"seccion"!==d){e.next=7;break}return e.next=4,axios.delete("api/users",{data:{curso:f,seccion:E}});case 4:a=e.sent,e.next=11;break;case 7:if("boletas"!==d){e.next=11;break}return e.next=10,axios.delete("api/boletas",{data:{curso:f,seccion:E}});case 10:a=e.sent;case 11:t=a.data,n=t.description,t.status,w(n,{variant:"success"}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),e.t0.response?(c=e.t0.response,i=c.status,u=c.data,403===i?w(u.description,{variant:"error"}):400===i?w(u.description,{variant:"warning"}):w(500===i?"No se ha podido conectar con la base de datos":"Error interno en el servidor",{variant:"error"})):w("Error interno en el sistema",{variant:"error"});case 18:o(!1,"DELETE");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})),function(){var a=this,t=arguments;return new Promise((function(n,r){var o=e.apply(a,t);function c(e){h(o,n,r,c,i,"next",e)}function i(e){h(o,n,r,c,i,"throw",e)}c(void 0)}))});return function(){return a.apply(this,arguments)}}(),k={name:"curso",values:[{value:"",name:"Grado/Año"}].concat(g(m.a))},N={name:"seccion",values:[{value:"",name:"Seccion"}].concat(g(m.b),[{value:"all",name:"Todas"}])};return c.a.createElement(i.a,{container:!0,spacing:2,justify:"center"},c.a.createElement(i.a,{item:!0,xs:12,sm:5,md:4},c.a.createElement(u.a,{variant:"outlined"},c.a.createElement(x,{action:A,value:d}))),c.a.createElement(i.a,{item:!0,xs:12,sm:10},c.a.createElement(u.a,{variant:"outlined"},c.a.createElement("div",{className:"Box"},c.a.createElement("div",{className:"content"},c.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var a=[{value:f,name:"curso"},{value:E,name:"seccion"}];if(Object(v.a)(a,n,"DELETE"))return null;o(!0,"DELETE"),S()},method:"POST",style:{marginTop:"0"}},c.a.createElement(i.a,{container:!0,spacing:2,justify:"center"},c.a.createElement(i.a,{item:!0,xs:5,sm:4,md:3},c.a.createElement(l.c,{action:A,val:f,data:k,error:y.curso})),c.a.createElement(i.a,{item:!0,xs:5,sm:4,md:3},c.a.createElement(l.c,{action:A,val:E,data:N,error:y.seccion})),c.a.createElement(i.a,{item:!0,xs:12,style:{textAlign:"center"}},c.a.createElement(s.a,{estilo:"outlined",colorsito:"inherit",text:"Borrar",loading:p})))))))))}))},id7c:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r}));var n=[{value:"1G",name:"1 grado"},{value:"2G",name:"2 grado"},{value:"3G",name:"3 grado"},{value:"4G",name:"4 grado"},{value:"5G",name:"5 grado"},{value:"6G",name:"6 grado"},{value:"1",name:"1 año"},{value:"2",name:"2 año"},{value:"3",name:"3 año"},{value:"4",name:"4 año"},{value:"5",name:"5 año"},{value:"6",name:"6 año"}],r=[{value:"A",name:"A"},{value:"B",name:"B"},{value:"C",name:"C"},{value:"U",name:"U"}]}}]);