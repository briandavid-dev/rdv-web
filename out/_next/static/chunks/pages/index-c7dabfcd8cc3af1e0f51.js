_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"/ezw":function(e,s,c){"use strict";var a=c("rePB"),t=c("wx14"),i=c("U8pU"),l=c("q1tI"),r=c("TSYQ"),n=c.n(r),o=function(e){var s=e.prefixCls,c=e.className,a=e.width,i=e.style;return l.createElement("h3",{className:n()(s,c),style:Object(t.a)({width:a},i)})},m=c("KQm4"),j=function(e){var s=function(s){var c=e.width,a=e.rows,t=void 0===a?2:a;return Array.isArray(c)?c[s]:t-1===s?c:void 0},c=e.prefixCls,a=e.className,t=e.style,i=e.rows,r=Object(m.a)(Array(i)).map((function(e,c){return l.createElement("li",{key:c,style:{width:s(c)}})}));return l.createElement("ul",{className:n()(c,a),style:t},r)},d=c("H84U"),b=function(e){var s,c,i=e.prefixCls,r=e.className,o=e.style,m=e.size,j=e.shape,d=n()((s={},Object(a.a)(s,"".concat(i,"-lg"),"large"===m),Object(a.a)(s,"".concat(i,"-sm"),"small"===m),s)),b=n()((c={},Object(a.a)(c,"".concat(i,"-circle"),"circle"===j),Object(a.a)(c,"".concat(i,"-square"),"square"===j),Object(a.a)(c,"".concat(i,"-round"),"round"===j),c)),O="number"===typeof m?{width:m,height:m,lineHeight:"".concat(m,"px")}:{};return l.createElement("span",{className:n()(i,d,b,r),style:Object(t.a)(Object(t.a)({},O),o)})},O=c("bT9E"),x=function(e){var s=function(s){var c=s.getPrefixCls,i=e.prefixCls,r=e.className,o=e.active,m=c("skeleton",i),j=Object(O.a)(e,["prefixCls"]),d=n()(m,"".concat(m,"-element"),Object(a.a)({},"".concat(m,"-active"),o),r);return l.createElement("div",{className:d},l.createElement(b,Object(t.a)({prefixCls:"".concat(m,"-avatar")},j)))};return l.createElement(d.a,null,s)};x.defaultProps={size:"default",shape:"circle"};var h=x,g=function(e){var s=function(s){var c=s.getPrefixCls,i=e.prefixCls,r=e.className,o=e.active,m=c("skeleton",i),j=Object(O.a)(e,["prefixCls"]),d=n()(m,"".concat(m,"-element"),Object(a.a)({},"".concat(m,"-active"),o),r);return l.createElement("div",{className:d},l.createElement(b,Object(t.a)({prefixCls:"".concat(m,"-button")},j)))};return l.createElement(d.a,null,s)};g.defaultProps={size:"default"};var p=g,u=function(e){var s=function(s){var c=s.getPrefixCls,i=e.prefixCls,r=e.className,o=e.active,m=c("skeleton",i),j=Object(O.a)(e,["prefixCls"]),d=n()(m,"".concat(m,"-element"),Object(a.a)({},"".concat(m,"-active"),o),r);return l.createElement("div",{className:d},l.createElement(b,Object(t.a)({prefixCls:"".concat(m,"-input")},j)))};return l.createElement(d.a,null,s)};u.defaultProps={size:"default"};var N=u,v=function(e){var s=function(s){var c=s.getPrefixCls,a=e.prefixCls,t=e.className,i=e.style,r=c("skeleton",a),o=n()(r,"".concat(r,"-element"),t);return l.createElement("div",{className:o},l.createElement("div",{className:n()("".concat(r,"-image"),t),style:i},l.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(r,"-image-svg")},l.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(r,"-image-path")}))))};return l.createElement(d.a,null,s)};function E(e){return e&&"object"===Object(i.a)(e)?e:{}}var f=function(e){var s=function(s){var c=s.getPrefixCls,i=s.direction,r=e.prefixCls,m=e.loading,d=e.className,O=e.children,x=e.avatar,h=e.title,g=e.paragraph,p=e.active,u=e.round,N=c("skeleton",r);if(m||!("loading"in e)){var v,f,_,A=!!x,y=!!h,w=!!g;if(A){var C=Object(t.a)(Object(t.a)({prefixCls:"".concat(N,"-avatar")},function(e,s){return e&&!s?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(y,w)),E(x));f=l.createElement("div",{className:"".concat(N,"-header")},l.createElement(b,C))}if(y||w){var S,R;if(y){var k=Object(t.a)(Object(t.a)({prefixCls:"".concat(N,"-title")},function(e,s){return!e&&s?{width:"38%"}:e&&s?{width:"50%"}:{}}(A,w)),E(h));S=l.createElement(o,k)}if(w){var M=Object(t.a)(Object(t.a)({prefixCls:"".concat(N,"-paragraph")},function(e,s){var c={};return e&&s||(c.width="61%"),c.rows=!e&&s?3:2,c}(A,y)),E(g));R=l.createElement(j,M)}_=l.createElement("div",{className:"".concat(N,"-content")},S,R)}var I=n()(N,(v={},Object(a.a)(v,"".concat(N,"-with-avatar"),A),Object(a.a)(v,"".concat(N,"-active"),p),Object(a.a)(v,"".concat(N,"-rtl"),"rtl"===i),Object(a.a)(v,"".concat(N,"-round"),u),v),d);return l.createElement("div",{className:I},f,_)}return O};return l.createElement(d.a,null,s)};f.defaultProps={avatar:!1,title:!0,paragraph:!0},f.Button=p,f.Avatar=h,f.Input=N,f.Image=v;var _=f;s.a=_},"4IlW":function(e,s,c){"use strict";var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var s=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||s>=a.F1&&s<=a.F12)return!1;switch(s){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=a.ZERO&&e<=a.NINE)return!0;if(e>=a.NUM_ZERO&&e<=a.NUM_MULTIPLY)return!0;if(e>=a.A&&e<=a.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};s.a=a},RNiq:function(e,s,c){"use strict";c.r(s),c.d(s,"default",(function(){return y}));var a=c("rePB"),t=c("MX0m"),i=c.n(t),l=c("q1tI"),r=c("YFqc"),n=c.n(r),o=c("/ezw"),m=c("BMrR"),j=c("kPKH"),d=c("kLXV"),b=c("2/Rp"),O=c("8Kt/"),x=c.n(O),h=c("nOHt"),g=c("Fl18"),p=c("Ddm2"),u=c("Yw0h"),N=c("pPWc"),v=c("KsED"),E={getHomeNoticias:function(e){return Object(v.a)({method:"GET",url:"home/noticias/".concat(e)})}},f=E,_=c("nKUr"),A=['.seccion0{background-image:url("./assets/imgs/home/FONDO-INICIO.jpg");background-size:cover;background-size:100%;}',".seccion2 h1{background-color:#4d341f;text-align:center;padding:1rem;}",".seccion2{padding:4rem 0 4rem 0;font-size:18px;position:relative;top:-220px;}",".seccion2 .content-1{-webkit-flex:45;-ms-flex:45;flex:45;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".SeccionEmpresas{position:relative;top:-220px;}",".SeccionEmpresas .titulo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".SeccionMaestrosRoneros{position:relative;top:-220px;}",".SeccionMaestrosRoneros .titulo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".SeccionNoticias{position:relative;top:-220px;}",".SeccionNoticias .titulo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".img_marcas{max-width:50%;}",".carousel-item div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".noticias_img{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".noticias_cuadro{background-color:#4e3522;padding:2rem;margin-bottom:2rem;}",".iconos_abajo{height:50px;width:50px;margin:0 2rem 0 2rem;}",".iconos_abajo_mobile{height:50px;width:50px;margin:0 1rem 0 1rem;}",".post_img_principal{max-width:100%;}",".ant-modal-body{padding:0px;}",".ant-modal-content{background-color:transparent;}",".SectionMobile0{background-color:#0e0e0e;}",'.SectionMobile1{background-image:url("./assets/imgs/home/fondoEmpresas.png");}'];function y(){var e,s=Object(h.useRouter)(),c="es";"en"===s.query.lang&&(c="en");var t={es:u.a,en:N.a},r=Object(l.useState)([]),O=r[0],v=r[1],E=Object(l.useState)(!1),y=E[0],w=E[1],C=Object(l.useState)(!0),S=C[0],R=C[1],k=Object(l.useState)(""),M=k[0],I=k[1];Object(l.useEffect)((function(){w(!0),f.getHomeNoticias(c).then((function(e){var s=e.data,c=s.codigo,a=s.results;"1"===c&&v(a),w(!1)})).catch((function(e){w(!1)}))}),[c]),Object(l.useEffect)((function(){window.sessionStorage.getItem("edad")?R(!1):R(!0)}),[]);var L=function(e){"S"===e?(R(!1),I(""),window.sessionStorage.setItem("edad",!0)):"N"===e&&I(t[c].validacionEdad.noTienesEdad)};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(i.a,{id:A.__hash,children:A}),Object(_.jsxs)(x.a,{children:[Object(_.jsx)("meta",{charSet:"UTF-8"}),Object(_.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),Object(_.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(_.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",crossOrigin:"anonymous"}),Object(_.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(_.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",rel:"stylesheet"}),Object(_.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",integrity:"sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",crossOrigin:"anonymous"}),Object(_.jsx)("title",{children:t[c].home.pageTitle})]}),!S&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(p.a,{}),Object(_.jsxs)("div",{className:"seccion0 valida_mobile",children:[Object(_.jsxs)("div",{className:"seccion1",children:[Object(_.jsx)("div",{className:"container",style:{position:"relative",top:"13rem",zIndex:900},children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{className:"col-md-6",children:"\xa0"}),Object(_.jsxs)("div",{className:"col-md-4",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(_.jsx)("h1",{children:t[c].home.pageTitle}),Object(_.jsx)("div",{className:"text-center font_20",children:t[c].calidad}),Object(_.jsx)("div",{children:"\xa0"}),Object(_.jsx)("img",{src:"./assets/imgs/home/linea1.png",style:{height:"8px"}})]}),Object(_.jsx)("div",{className:"col-md-2",children:"\xa0"})]})}),Object(_.jsx)("div",{style:{position:"relative",top:"-220px"},children:Object(_.jsx)("img",{src:"./assets/imgs/home/copa.jpg",style:{maxWidth:"100%"}})})]}),Object(_.jsx)("div",{className:"seccion2 font_20",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsxs)("div",{className:"col-md-12",style:{display:"flex"},children:[Object(_.jsxs)("div",{className:"content-1",children:[Object(_.jsx)("h1",{style:{right:"-2rem",position:"relative"},children:t[c].elron1}),Object(_.jsxs)("p",{className:"font_20",style:{textAlign:"right",padding:"1rem"},children:[t[c].melasa,Object(_.jsx)("br",{}),t[c].aunque]})]}),Object(_.jsx)("div",{style:{flex:55},children:Object(_.jsx)("img",{src:"./assets/imgs/home/foto-ron.jpg",style:{maxWidth:"100%"}})})]}),Object(_.jsx)("div",{children:"\xa0"}),Object(_.jsx)("div",{children:"\xa0"}),Object(_.jsxs)("div",{className:"col-md-12",style:{display:"flex"},children:[Object(_.jsx)("div",{style:{flex:55},children:Object(_.jsx)("img",{src:"./assets/imgs/home/foto-proceso.jpg",style:{maxWidth:"100%"}})}),Object(_.jsxs)("div",{className:"content-1",children:[Object(_.jsx)("h1",{style:{left:"-2rem",position:"relative"},children:t[c].proceso}),Object(_.jsx)("p",{className:"font_20",style:{textAlign:"left",padding:"1rem"},children:t[c].productores})]})]})]})})}),Object(_.jsxs)("div",{className:"SeccionEmpresas",children:[Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{className:"col-md-12 mb-1",children:Object(_.jsxs)("div",{className:"seccion_titulo",children:[Object(_.jsx)("img",{src:"./assets/imgs/home/linea2.png",className:"linea1"}),Object(_.jsx)("h1",{children:t[c].home.empresas}),Object(_.jsx)("img",{src:"./assets/imgs/home/linea1.png",className:"linea2"})]})}),Object(_.jsx)("div",{className:"col-md-3"}),Object(_.jsx)("div",{className:"col-md-6",children:Object(_.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-bs-ride":"carousel",children:[Object(_.jsxs)("div",{className:"carousel-inner",children:[Object(_.jsx)("div",{className:"carousel-item active",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CANAVERAL.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-SANTA-TERESA.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-VEROES.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-ROBLE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-QUIMERA.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-PAMPERO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-OCUMARE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-DIPLOMATICO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CARUPANO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CALAZAN.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CACIQUE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CABALLO-VIEJO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-BUCARE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-BODEGA-1800.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-BARRICA.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-ESTELAR.png",className:"d-block w-1 img_marcas",alt:"..."})})})]}),Object(_.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev",children:[Object(_.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(_.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(_.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next",children:[Object(_.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(_.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})}),Object(_.jsx)("div",{className:"col-md-3"})]})}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{})]}),Object(_.jsxs)("div",{className:"SeccionMaestrosRoneros",children:[Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",(e={className:"col-md-12"},Object(a.a)(e,"className","titulo"),Object(a.a)(e,"style",{marginBottom:"2rem"}),Object(a.a)(e,"children",Object(_.jsxs)("div",{className:"titulo",children:[Object(_.jsx)("img",{src:"./assets/imgs/home/linea2.png",className:"linea1"}),Object(_.jsx)("h1",{children:t[c].maestrosRoneros}),Object(_.jsx)("img",{src:"./assets/imgs/home/linea1.png",className:"linea2"})]})),e)),Object(_.jsx)("div",{className:"col-md-3",children:Object(_.jsx)("img",{className:"zoom",src:"./assets/imgs/home/m_CARMEN-LOPEZ.png",style:{maxWidth:"100%"}})}),Object(_.jsx)("div",{className:"col-md-3",children:Object(_.jsx)("img",{className:"zoom",src:"./assets/imgs/home/m_TITO-CORDERO.png",style:{maxWidth:"100%"}})}),Object(_.jsx)("div",{className:"col-md-3",children:Object(_.jsx)("img",{className:"zoom",src:"./assets/imgs/home/m_NESTRO-ORTEGA.png",style:{maxWidth:"100%"}})}),Object(_.jsx)("div",{className:"col-md-3",children:Object(_.jsx)("img",{className:"zoom",src:"./assets/imgs/home/m_GIOGIO-MELIS.png",style:{maxWidth:"100%"}})}),Object(_.jsx)("div",{className:"col-md-12",style:{marginTop:"2rem"},children:Object(_.jsx)("img",{src:"./assets/imgs/home/mesa-maestros.png",style:{maxWidth:"100%"}})})]})}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{})]}),Object(_.jsxs)("div",{className:"SeccionNoticias",children:[Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{className:"col-md-12 mb-5",children:Object(_.jsxs)("div",{className:"titulo",children:[Object(_.jsx)("img",{src:"./assets/imgs/home/linea2.png",style:{height:"8px"}}),Object(_.jsx)("h1",{children:t[c].noticias}),Object(_.jsx)("img",{src:"./assets/imgs/home/linea1.png",style:{height:"8px",marginLeft:"8px"}})]})}),Object(_.jsx)(o.a,{loading:y,active:!0,children:O.circulo&&O.circulo.length>0&&O.circulo.map((function(e){var s="data:image/".concat(e.image_extension,";base64,").concat(e.image_base64);return Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(e.url),query:{lang:c}},children:Object(_.jsxs)("div",{className:"col-md-4 cursor-pointer hover-notice-home",children:[Object(_.jsx)("br",{}),Object(_.jsx)("div",{className:"mb-4 text-center",children:Object(_.jsx)("h3",{children:e.title})}),Object(_.jsx)("div",{className:"noticias_img",children:Object(_.jsx)("img",{src:s,style:{maxWidth:"90%"},alt:e.title})}),Object(_.jsx)("div",{className:"mt-4 text-center noticias_cuadro",children:e.summary})]},e.id)})}))})]})}),Object(_.jsx)("div",{className:"container mt-5",children:Object(_.jsx)(o.a,{loading:y,active:!0,children:O.cuadro&&O.cuadro.length>0&&Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{className:"col-md-6 ",children:O.cuadro[0]&&Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(O.cuadro[0].url),query:{lang:c}},children:Object(_.jsx)("img",{alt:O.cuadro[0].title,src:"data:image/".concat(O.cuadro[0].image_extension,";base64,").concat(O.cuadro[0].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})}),Object(_.jsx)("div",{className:"col-md-3",children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{className:"col-md-12 mb-4",children:O.cuadro[1]&&Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(O.cuadro[1].url),query:{lang:c}},children:Object(_.jsx)("img",{alt:O.cuadro[1].title,src:"data:image/".concat(O.cuadro[1].image_extension,";base64,").concat(O.cuadro[1].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})}),Object(_.jsx)("div",{className:"col-md-12",children:O.cuadro[2]&&Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(O.cuadro[2].url),query:{lang:c}},children:Object(_.jsx)("img",{alt:O.cuadro[2].title,src:"data:image/".concat(O.cuadro[2].image_extension,";base64,").concat(O.cuadro[2].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})})]})}),Object(_.jsx)("div",{className:"col-md-3",children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{className:"col-md-12 mb-4",children:O.cuadro[3]&&Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(O.cuadro[3].url),query:{lang:c}},children:Object(_.jsx)("img",{alt:O.cuadro[3].title,src:"data:image/".concat(O.cuadro[3].image_extension,";base64,").concat(O.cuadro[3].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})}),Object(_.jsx)("div",{className:"col-md-12",children:O.cuadro[4]&&Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(O.cuadro[4].url),query:{lang:c}},children:Object(_.jsx)("img",{alt:O.cuadro[4].title,src:"data:image/".concat(O.cuadro[4].image_extension,";base64,").concat(O.cuadro[4].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})})]})})]})})}),Object(_.jsxs)("div",{className:"container",children:[Object(_.jsxs)("div",{className:"row",children:[Object(_.jsxs)("div",{className:"col-md-12 text-center mt-5",children:[Object(_.jsx)("a",{href:"https://www.facebook.com/RondeVenezuela",target:"_blank",children:Object(_.jsx)("img",{src:"./assets/imgs/home/ICONO-FACEBOOK.png",className:"iconos_abajo zoom"})}),Object(_.jsx)("img",{src:"./assets/imgs/home/LINEA-REDES-1.png",className:"linea1"}),Object(_.jsx)("a",{href:"https://www.instagram.com/rondevenezuela/",target:"_blank",children:Object(_.jsx)("img",{src:"./assets/imgs/home/ICONO-INSTAGRAM.png",className:"iconos_abajo zoom"})}),Object(_.jsx)("img",{src:"./assets/imgs/home/LINEA-REDES-2.png",className:"linea1"}),Object(_.jsx)("img",{src:"./assets/imgs/home/ICONO-YOUTUBE.png",className:"iconos_abajo zoom"})]}),Object(_.jsx)("div",{className:"col-md-12 text-center mt-5",children:"@RONDEVENEZUELA"})]}),Object(_.jsx)("div",{style:{textAlign:"center",marginTop:50},children:Object(_.jsx)("video",{style:{width:"100%",maxWidth:"100%"},controls:!0,src:t[c].videos.home,children:"Your browser does not support the video tag."})})]})]}),Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{className:"row",children:Object(_.jsxs)("div",{className:"col-md-12",style:{backgroundColor:"#3d2514"},children:[Object(_.jsx)("br",{}),Object(_.jsx)("br",{})]})})})]}),Object(_.jsxs)("div",{className:"SectionMobile0 valida_desktop",children:[Object(_.jsxs)(m.a,{type:"flex",justify:"center",className:"SectionMobile0",children:[Object(_.jsx)(j.a,{xs:24,children:Object(_.jsx)("img",{src:"./assets/imgs/home/copa.jpg",style:{maxWidth:"100%",marginTop:"58px"}})}),Object(_.jsxs)(j.a,{xs:22,className:"text-center",children:[Object(_.jsx)("br",{}),Object(_.jsx)("h1",{className:"text-center",children:t[c].home.pageTitle}),Object(_.jsx)("p",{className:"text-center font_20",children:t[c].calidad}),Object(_.jsx)("img",{src:"./assets/imgs/home/linea1.png",style:{height:"8px"}}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{})]})]}),Object(_.jsx)(m.a,{type:"flex",justify:"center",className:"SectionMobile1",children:Object(_.jsxs)(j.a,{xs:22,children:[Object(_.jsx)("br",{}),Object(_.jsx)("h1",{children:t[c].elron1}),Object(_.jsxs)("p",{children:[t[c].melasa,Object(_.jsx)("br",{}),t[c].aunque]}),Object(_.jsx)("img",{src:"./assets/imgs/home/foto-ron.jpg",style:{maxWidth:"100%"}}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{})]})}),Object(_.jsx)(m.a,{type:"flex",justify:"center",className:"SectionMobile1",children:Object(_.jsxs)(j.a,{xs:22,children:[Object(_.jsx)("h1",{children:t[c].proceso}),Object(_.jsx)("p",{children:t[c].productores}),Object(_.jsx)("img",{src:"./assets/imgs/home/foto-proceso.jpg",style:{maxWidth:"100%"}}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{})]})}),Object(_.jsx)(m.a,{type:"flex",justify:"center",className:"SectionMobile1",children:Object(_.jsxs)(j.a,{xs:22,children:[Object(_.jsx)("div",{className:"col-md-12 mb-1",children:Object(_.jsxs)("div",{className:"seccion_titulo_mobile",children:[Object(_.jsx)("img",{src:"./assets/imgs/home/linea2.png",className:"linea1mobile"}),Object(_.jsx)("h1",{children:t[c].home.empresas}),Object(_.jsx)("img",{src:"./assets/imgs/home/linea1.png",className:"linea2mobile"})]})}),Object(_.jsx)("div",{className:"col-md-3"}),Object(_.jsx)("div",{className:"col-md-6",children:Object(_.jsxs)("div",{id:"carouselExampleIndicators2",className:"carousel slide","data-bs-ride":"carousel",children:[Object(_.jsxs)("div",{className:"carousel-inner",children:[Object(_.jsx)("div",{className:"carousel-item active",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CANAVERAL.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-SANTA-TERESA.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-VEROES.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-ROBLE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-QUIMERA.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-PAMPERO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-OCUMARE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-DIPLOMATICO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CARUPANO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CALAZAN.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CACIQUE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CABALLO-VIEJO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-BUCARE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-BODEGA-1800.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-BARRICA.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(_.jsx)("div",{className:"carousel-item",children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"./assets/imgs/home/LOGO-ESTELAR.png",className:"d-block w-1 img_marcas",alt:"..."})})})]}),Object(_.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators2","data-bs-slide":"prev",children:[Object(_.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(_.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(_.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators2","data-bs-slide":"next",children:[Object(_.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(_.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})}),Object(_.jsx)("div",{className:"col-md-3"}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{})]})}),Object(_.jsxs)(m.a,{type:"flex",justify:"center",className:"SectionMobile1",gutter:[10,10],children:[Object(_.jsx)(j.a,{xs:22,children:Object(_.jsxs)("div",{className:"seccion_titulo_mobile",children:[Object(_.jsx)("img",{src:"./assets/imgs/home/linea2.png",className:"linea1mobile"}),Object(_.jsx)("h1",{className:"text-center",children:t[c].maestrosRoneros}),Object(_.jsx)("img",{src:"./assets/imgs/home/linea1.png",className:"linea2mobile"})]})}),Object(_.jsx)(j.a,{xs:11,children:Object(_.jsx)("img",{src:"./assets/imgs/home/m_CARMEN-LOPEZ.png",style:{maxWidth:"100%"}})}),Object(_.jsx)(j.a,{xs:11,children:Object(_.jsx)("img",{src:"./assets/imgs/home/m_TITO-CORDERO.png",style:{maxWidth:"100%"}})}),Object(_.jsx)(j.a,{xs:11,children:Object(_.jsx)("img",{src:"./assets/imgs/home/m_NESTRO-ORTEGA.png",style:{maxWidth:"100%"}})}),Object(_.jsx)(j.a,{xs:11,children:Object(_.jsx)("img",{src:"./assets/imgs/home/m_GIOGIO-MELIS.png",style:{maxWidth:"100%"}})}),Object(_.jsx)(j.a,{xs:22,children:Object(_.jsx)("img",{src:"./assets/imgs/home/mesa-maestros.png",style:{maxWidth:"100%"}})})]}),Object(_.jsxs)(m.a,{type:"flex",justify:"center",className:"SectionMobile1",children:[Object(_.jsx)(j.a,{xs:22,children:Object(_.jsxs)("div",{className:"seccion_titulo_mobile",children:[Object(_.jsx)("img",{src:"./assets/imgs/home/linea2.png",className:"linea1mobile"}),Object(_.jsx)("h1",{className:"text-center",children:t[c].noticias}),Object(_.jsx)("img",{src:"./assets/imgs/home/linea1.png",className:"linea2mobile"})]})}),Object(_.jsx)(j.a,{xs:22,children:Object(_.jsxs)(m.a,{gutter:[10,10],type:"flex",justify:"center",children:[Object(_.jsx)(o.a,{loading:y,active:!0,children:O.circulo&&O.circulo.length>0&&O.circulo.map((function(e){var s="data:image/".concat(e.image_extension,";base64,").concat(e.image_base64);return Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(e.url),query:{lang:c}},children:Object(_.jsxs)("div",{className:"col-md-4 cursor-pointer hover-notice-home",children:[Object(_.jsx)("div",{className:"mb-4 text-center",children:Object(_.jsx)("h3",{children:e.title})}),Object(_.jsx)("div",{className:"noticias_img",children:Object(_.jsx)("img",{src:s,style:{maxWidth:"90%"},alt:e.title})}),Object(_.jsx)("div",{className:"mt-4 text-center noticias_cuadro",children:e.summary}),Object(_.jsx)("br",{})]},e.id)})}))}),Object(_.jsx)(o.a,{loading:y,active:!0,children:O.cuadro&&O.cuadro.length>0&&Object(_.jsxs)(_.Fragment,{children:[O.cuadro[0]&&Object(_.jsx)(j.a,{span:24,children:Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(O.cuadro[0].url),query:{lang:c}},children:Object(_.jsx)("img",{alt:O.cuadro[0].title,src:"data:image/".concat(O.cuadro[0].image_extension,";base64,").concat(O.cuadro[0].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})}),O.cuadro[1]&&Object(_.jsx)(j.a,{span:12,children:Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(O.cuadro[1].url),query:{lang:c}},children:Object(_.jsx)("img",{alt:O.cuadro[1].title,src:"data:image/".concat(O.cuadro[1].image_extension,";base64,").concat(O.cuadro[1].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})}),O.cuadro[2]&&Object(_.jsx)(j.a,{span:12,children:Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(O.cuadro[2].url),query:{lang:c}},children:Object(_.jsx)("img",{alt:O.cuadro[2].title,src:"data:image/".concat(O.cuadro[2].image_extension,";base64,").concat(O.cuadro[2].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})}),O.cuadro[3]&&Object(_.jsx)(j.a,{span:12,children:Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(O.cuadro[3].url),query:{lang:c}},children:Object(_.jsx)("img",{alt:O.cuadro[3].title,src:"data:image/".concat(O.cuadro[3].image_extension,";base64,").concat(O.cuadro[3].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})}),O.cuadro[4]&&Object(_.jsx)(j.a,{span:12,children:Object(_.jsx)(n.a,{href:{pathname:"/noticias/".concat(O.cuadro[4].url),query:{lang:c}},children:Object(_.jsx)("img",{alt:O.cuadro[4].title,src:"data:image/".concat(O.cuadro[4].image_extension,";base64,").concat(O.cuadro[4].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})})]})})]})})]}),Object(_.jsxs)(m.a,{type:"flex",justify:"center",className:"SectionMobile1",children:[Object(_.jsxs)(j.a,{xs:22,className:"text-center",children:[Object(_.jsx)("br",{}),Object(_.jsx)("br",{}),Object(_.jsx)("a",{href:"https://www.facebook.com/RondeVenezuela",target:"_blank",children:Object(_.jsx)("img",{src:"./assets/imgs/home/ICONO-FACEBOOK.png",className:"iconos_abajo_mobile"})}),Object(_.jsx)("a",{href:"https://www.instagram.com/rondevenezuela/",target:"_blank",children:Object(_.jsx)("img",{src:"./assets/imgs/home/ICONO-INSTAGRAM.png",className:"iconos_abajo_mobile"})}),Object(_.jsx)("img",{src:"./assets/imgs/home/ICONO-YOUTUBE.png",className:"iconos_abajo_mobile"})]}),Object(_.jsxs)(j.a,{xs:22,className:"text-center",children:[Object(_.jsx)("br",{}),Object(_.jsx)("br",{}),"@RONDEVENEZUELA"]}),Object(_.jsx)(j.a,{xs:22,className:"text-center",children:Object(_.jsx)("div",{style:{textAlign:"center",marginTop:50},children:Object(_.jsx)("video",{style:{width:"100%",maxWidth:"100%"},controls:!0,src:t[c].videos.home,children:"Your browser does not support the video tag."})})})]}),Object(_.jsxs)(m.a,{type:"flex",justify:"center",className:"SectionMobile1",children:[Object(_.jsx)(j.a,{xs:22}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{})]}),Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{className:"row",children:Object(_.jsxs)("div",{className:"col-md-12",style:{backgroundColor:"#3d2514"},children:[Object(_.jsx)("br",{}),Object(_.jsx)("br",{})]})})})]}),Object(_.jsx)(g.a,{})]})]}),Object(_.jsx)(d.a,{visible:S,footer:!1,maskClosable:!1,closable:!1,children:Object(_.jsx)("div",{style:{backgroundImage:"url('/assets/imgs/home/fondoEdad2.png')",padding:"1rem",borderRadius:"5px",color:"#FFF",fontSize:"20px"},className:"text-center",children:Object(_.jsx)("div",{style:{backgroundImage:"url('/assets/imgs/home/fondoEdad1.png')",border:"1px solid #FFF",padding:"1rem",borderRadius:"5px"},children:Object(_.jsxs)(m.a,{type:"flex",justify:"center",children:[Object(_.jsxs)(j.a,{span:24,children:[Object(_.jsx)("img",{src:"./assets/imgs/home/logo_blanco.png",style:{height:"150px"}}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{})]}),Object(_.jsxs)(j.a,{span:24,children:[t[c].validacionEdad.invita,Object(_.jsx)("br",{}),Object(_.jsx)("br",{})]}),Object(_.jsxs)(j.a,{span:24,children:[Object(_.jsx)("div",{style:{border:"1px solid #FFF",borderRadius:"5px",padding:"1rem"},children:t[c].validacionEdad.eres}),Object(_.jsx)("br",{})]}),Object(_.jsx)(j.a,{span:24,style:{textAlign:"center"},children:""!==M.trim()?Object(_.jsx)("p",{children:M}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h2",{children:t[c].validacionEdad.loEres}),Object(_.jsx)("br",{}),Object(_.jsx)(b.a,{size:"large",style:{width:"60px",color:"#582E10",backgroundColor:"#FBF2E5"},onClick:function(){L("S")},children:Object(_.jsx)("strong",{children:t[c].validacionEdad.si})}),"\xa0\xa0\xa0",Object(_.jsx)(b.a,{size:"large",style:{width:"60px",color:"#582E10",backgroundColor:"#FBF2E5"},onClick:function(){L("N")},children:Object(_.jsx)("strong",{children:t[c].validacionEdad.no})})]})})]})})})})]})}A.__hash="723177991"},vlRD:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c("RNiq")}])}},[["vlRD",0,2,1,3,4,5,7,6,8,10,13]]]);