_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"/ezw":function(e,c,t){"use strict";var s=t("+y50"),a=t("jiTG"),i=t("rTrx"),n=t("q1tI"),r=t("TSYQ"),l=t.n(r),o=function(e){var c=e.prefixCls,t=e.className,s=e.width,i=e.style;return n.createElement("h3",{className:l()(c,t),style:Object(a.a)({width:s},i)})},d=t("xGeg"),m=function(e){var c=function(c){var t=e.width,s=e.rows,a=void 0===s?2:s;return Array.isArray(t)?t[c]:a-1===c?t:void 0},t=e.prefixCls,s=e.className,a=e.style,i=e.rows,r=Object(d.a)(Array(i)).map((function(e,t){return n.createElement("li",{key:t,style:{width:c(t)}})}));return n.createElement("ul",{className:l()(t,s),style:a},r)},j=t("H84U"),b=function(e){var c,t,i=e.prefixCls,r=e.className,o=e.style,d=e.size,m=e.shape,j=l()((c={},Object(s.a)(c,"".concat(i,"-lg"),"large"===d),Object(s.a)(c,"".concat(i,"-sm"),"small"===d),c)),b=l()((t={},Object(s.a)(t,"".concat(i,"-circle"),"circle"===m),Object(s.a)(t,"".concat(i,"-square"),"square"===m),Object(s.a)(t,"".concat(i,"-round"),"round"===m),t)),O="number"===typeof d?{width:d,height:d,lineHeight:"".concat(d,"px")}:{};return n.createElement("span",{className:l()(i,j,b,r),style:Object(a.a)(Object(a.a)({},O),o)})},O=t("bT9E"),x=function(e){var c=function(c){var t=c.getPrefixCls,i=e.prefixCls,r=e.className,o=e.active,d=t("skeleton",i),m=Object(O.a)(e,["prefixCls"]),j=l()(d,"".concat(d,"-element"),Object(s.a)({},"".concat(d,"-active"),o),r);return n.createElement("div",{className:j},n.createElement(b,Object(a.a)({prefixCls:"".concat(d,"-avatar")},m)))};return n.createElement(j.a,null,c)};x.defaultProps={size:"default",shape:"circle"};var u=x,h=function(e){var c=function(c){var t=c.getPrefixCls,i=e.prefixCls,r=e.className,o=e.active,d=t("skeleton",i),m=Object(O.a)(e,["prefixCls"]),j=l()(d,"".concat(d,"-element"),Object(s.a)({},"".concat(d,"-active"),o),r);return n.createElement("div",{className:j},n.createElement(b,Object(a.a)({prefixCls:"".concat(d,"-button")},m)))};return n.createElement(j.a,null,c)};h.defaultProps={size:"default"};var g=h,p=function(e){var c=function(c){var t=c.getPrefixCls,i=e.prefixCls,r=e.className,o=e.active,d=t("skeleton",i),m=Object(O.a)(e,["prefixCls"]),j=l()(d,"".concat(d,"-element"),Object(s.a)({},"".concat(d,"-active"),o),r);return n.createElement("div",{className:j},n.createElement(b,Object(a.a)({prefixCls:"".concat(d,"-input")},m)))};return n.createElement(j.a,null,c)};p.defaultProps={size:"default"};var N=p,v=function(e){var c=function(c){var t=c.getPrefixCls,s=e.prefixCls,a=e.className,i=e.style,r=t("skeleton",s),o=l()(r,"".concat(r,"-element"),a);return n.createElement("div",{className:o},n.createElement("div",{className:l()("".concat(r,"-image"),a),style:i},n.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(r,"-image-svg")},n.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(r,"-image-path")}))))};return n.createElement(j.a,null,c)};function f(e){return e&&"object"===Object(i.a)(e)?e:{}}var E=function(e){var c=function(c){var t=c.getPrefixCls,i=c.direction,r=e.prefixCls,d=e.loading,j=e.className,O=e.children,x=e.avatar,u=e.title,h=e.paragraph,g=e.active,p=e.round,N=t("skeleton",r);if(d||!("loading"in e)){var v,E,y,_=!!x,A=!!u,w=!!h;if(_){var C=Object(a.a)(Object(a.a)({prefixCls:"".concat(N,"-avatar")},function(e,c){return e&&!c?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(A,w)),f(x));E=n.createElement("div",{className:"".concat(N,"-header")},n.createElement(b,C))}if(A||w){var S,R;if(A){var k=Object(a.a)(Object(a.a)({prefixCls:"".concat(N,"-title")},function(e,c){return!e&&c?{width:"38%"}:e&&c?{width:"50%"}:{}}(_,w)),f(u));S=n.createElement(o,k)}if(w){var M=Object(a.a)(Object(a.a)({prefixCls:"".concat(N,"-paragraph")},function(e,c){var t={};return e&&c||(t.width="61%"),t.rows=!e&&c?3:2,t}(_,A)),f(h));R=n.createElement(m,M)}y=n.createElement("div",{className:"".concat(N,"-content")},S,R)}var I=l()(N,(v={},Object(s.a)(v,"".concat(N,"-with-avatar"),_),Object(s.a)(v,"".concat(N,"-active"),g),Object(s.a)(v,"".concat(N,"-rtl"),"rtl"===i),Object(s.a)(v,"".concat(N,"-round"),p),v),j);return n.createElement("div",{className:I},E,y)}return O};return n.createElement(j.a,null,c)};E.defaultProps={avatar:!1,title:!0,paragraph:!0},E.Button=g,E.Avatar=u,E.Input=N,E.Image=v;var y=E;c.a=y},"/wKA":function(e,c,t){"use strict";function s(e){if(Array.isArray(e))return e}t.d(c,"a",(function(){return s}))},"3Nzz":function(e,c,t){"use strict";t.d(c,"a",(function(){return i}));var s=t("q1tI"),a=s.createContext(void 0),i=function(e){var c=e.children,t=e.size;return s.createElement(a.Consumer,null,(function(e){return s.createElement(a.Provider,{value:t||e},c)}))};c.b=a},"4IlW":function(e,c,t){"use strict";var s={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var c=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||c>=s.F1&&c<=s.F12)return!1;switch(c){case s.ALT:case s.CAPS_LOCK:case s.CONTEXT_MENU:case s.CTRL:case s.DOWN:case s.END:case s.ESC:case s.HOME:case s.INSERT:case s.LEFT:case s.MAC_FF_META:case s.META:case s.NUMLOCK:case s.NUM_CENTER:case s.PAGE_DOWN:case s.PAGE_UP:case s.PAUSE:case s.PRINT_SCREEN:case s.RIGHT:case s.SHIFT:case s.UP:case s.WIN_KEY:case s.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=s.ZERO&&e<=s.NINE)return!0;if(e>=s.NUM_ZERO&&e<=s.NUM_MULTIPLY)return!0;if(e>=s.A&&e<=s.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case s.SPACE:case s.QUESTION_MARK:case s.NUM_PLUS:case s.NUM_MINUS:case s.NUM_PERIOD:case s.NUM_DIVISION:case s.SEMICOLON:case s.DASH:case s.EQUALS:case s.COMMA:case s.PERIOD:case s.SLASH:case s.APOSTROPHE:case s.SINGLE_QUOTE:case s.OPEN_SQUARE_BRACKET:case s.BACKSLASH:case s.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};c.a=s},"4i/N":function(e,c,t){"use strict";var s=t("q1tI"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},i=t("6VBw"),n=function(e,c){return s.createElement(i.a,Object.assign({},e,{ref:c,icon:a}))};n.displayName="CloseOutlined";c.a=s.forwardRef(n)},EXi7:function(e,c,t){"use strict";function s(e,c){(null==c||c>e.length)&&(c=e.length);for(var t=0,s=new Array(c);t<c;t++)s[t]=e[t];return s}t.d(c,"a",(function(){return s}))},"HaE+":function(e,c,t){"use strict";function s(e,c,t,s,a,i,n){try{var r=e[i](n),l=r.value}catch(o){return void t(o)}r.done?c(l):Promise.resolve(l).then(s,a)}function a(e){return function(){var c=this,t=arguments;return new Promise((function(a,i){var n=e.apply(c,t);function r(e){s(n,a,i,r,l,"next",e)}function l(e){s(n,a,i,r,l,"throw",e)}r(void 0)}))}}t.d(c,"a",(function(){return a}))},"QC+M":function(e,c,t){"use strict";var s=t("q1tI"),a=t("i8i4"),i=t.n(a),n=t("MNnm"),r=Object(s.forwardRef)((function(e,c){var t=e.didUpdate,a=e.getContainer,r=e.children,l=Object(s.useRef)();Object(s.useImperativeHandle)(c,(function(){return{}}));var o=Object(s.useRef)(!1);return!o.current&&Object(n.a)()&&(l.current=a(),o.current=!0),Object(s.useEffect)((function(){null===t||void 0===t||t(e)})),Object(s.useEffect)((function(){return function(){var e,c;null===(e=l.current)||void 0===e||null===(c=e.parentNode)||void 0===c||c.removeChild(l.current)}}),[]),l.current?i.a.createPortal(r,l.current):null}));c.a=r},RNiq:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return A}));var s=t("rePB"),a=t("MX0m"),i=t.n(a),n=t("q1tI"),r=t("YFqc"),l=t.n(r),o=t("/ezw"),d=t("kLXV"),m=t("BMrR"),j=t("kPKH"),b=t("2/Rp"),O=t("8Kt/"),x=t.n(O),u=t("nOHt"),h=t("Fl18"),g=t("Ddm2"),p=t("Yw0h"),N=t("pPWc"),v=t("KsED"),f={getHomeNoticias:function(e){return Object(v.a)({method:"GET",url:"home/noticias/".concat(e)})}},E=f,y=t("nKUr"),_=['.seccion0{background-image:url("/assets/imgs/home/FONDO-INICIO.jpg");background-size:cover;background-size:100%;}',".seccion2 h1{background-color:#4d341f;text-align:center;padding:1rem;}",".seccion2{padding:4rem 0 4rem 0;font-size:18px;position:relative;top:-220px;}",".seccion2 .content-1{-webkit-flex:45;-ms-flex:45;flex:45;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".SeccionEmpresas{position:relative;top:-220px;}",".SeccionEmpresas .titulo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".SeccionMaestrosRoneros{position:relative;top:-220px;}",".SeccionMaestrosRoneros .titulo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".SeccionNoticias{position:relative;top:-220px;}",".SeccionNoticias .titulo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".img_marcas{max-width:50%;}",".carousel-item div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".noticias_img{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".noticias_cuadro{background-color:#4e3522;padding:2rem;margin-bottom:2rem;}",".iconos_abajo{height:50px;width:50px;margin:0 2rem 0 2rem;}",".post_img_principal{max-width:100%;}",".ant-modal-body{padding:0px;}",".ant-modal-content{background-color:transparent;}"];function A(){var e,c=Object(u.useRouter)(),t="es";"en"===c.query.lang&&(t="en");var a={es:p.a,en:N.a},r=Object(n.useState)([]),O=r[0],v=r[1],f=Object(n.useState)(!1),A=f[0],w=f[1],C=Object(n.useState)(!0),S=C[0],R=C[1],k=Object(n.useState)(""),M=k[0],I=k[1];Object(n.useEffect)((function(){w(!0),E.getHomeNoticias(t).then((function(e){var c=e.data,t=c.codigo,s=c.results;"1"===t&&v(s),w(!1)})).catch((function(e){console.log("error",e),w(!1)}))}),[t]);var T=function(e){"S"===e?(R(!1),I("")):"N"===e&&I(a[t].validacionEdad.noTienesEdad)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(i.a,{id:_.__hash,children:_}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)("meta",{charSet:"UTF-8"}),Object(y.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),Object(y.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(y.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",crossorigin:"anonymous"}),Object(y.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(y.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",rel:"stylesheet"}),Object(y.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",integrity:"sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",crossorigin:"anonymous"}),Object(y.jsx)("title",{children:a[t].home.pageTitle})]}),Object(y.jsx)(g.a,{}),Object(y.jsxs)("div",{className:"seccion0",children:[Object(y.jsxs)("div",{className:"seccion1",children:[Object(y.jsx)("div",{className:"container",style:{position:"relative",top:"13rem",zIndex:900},children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-md-6",children:"\xa0"}),Object(y.jsxs)("div",{className:"col-md-4",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(y.jsx)("h1",{children:a[t].home.pageTitle}),Object(y.jsx)("div",{className:"text-center font_20",children:a[t].calidad}),Object(y.jsx)("div",{children:"\xa0"}),Object(y.jsx)("img",{src:"./assets/imgs/home/linea1.png",style:{height:"8px"}})]}),Object(y.jsx)("div",{className:"col-md-2",children:"\xa0"})]})}),Object(y.jsx)("div",{style:{position:"relative",top:"-220px"},children:Object(y.jsx)("img",{src:"./assets/imgs/home/copa.jpg",style:{maxWidth:"100%"}})})]}),Object(y.jsx)("div",{className:"seccion2 font_20",children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col-md-12",style:{display:"flex"},children:[Object(y.jsxs)("div",{className:"content-1",children:[Object(y.jsx)("h1",{style:{right:"-2rem",position:"relative"},children:a[t].elron1}),Object(y.jsxs)("p",{style:{textAlign:"right",padding:"1rem"},children:[a[t].melasa,Object(y.jsx)("br",{}),a[t].aunque]})]}),Object(y.jsx)("div",{style:{flex:55},children:Object(y.jsx)("img",{src:"./assets/imgs/home/foto-ron.jpg",style:{maxWidth:"100%"}})})]}),Object(y.jsx)("div",{children:"\xa0"}),Object(y.jsx)("div",{children:"\xa0"}),Object(y.jsxs)("div",{className:"col-md-12",style:{display:"flex"},children:[Object(y.jsx)("div",{style:{flex:55},children:Object(y.jsx)("img",{src:"./assets/imgs/home/foto-proceso.jpg",style:{maxWidth:"100%"}})}),Object(y.jsxs)("div",{className:"content-1",children:[Object(y.jsx)("h1",{style:{left:"-2rem",position:"relative"},children:a[t].proceso}),Object(y.jsx)("p",{style:{textAlign:"left",padding:"1rem"},children:a[t].productores})]})]})]})})}),Object(y.jsxs)("div",{className:"SeccionEmpresas",children:[Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-md-12 mb-1",children:Object(y.jsxs)("div",{className:"seccion_titulo",children:[Object(y.jsx)("img",{src:"./assets/imgs/home/linea2.png",className:"linea1"}),Object(y.jsx)("h1",{children:a[t].home.empresas}),Object(y.jsx)("img",{src:"./assets/imgs/home/linea1.png",className:"linea2"})]})}),Object(y.jsx)("div",{className:"col-md-3"}),Object(y.jsx)("div",{className:"col-md-6",children:Object(y.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-bs-ride":"carousel",children:[Object(y.jsxs)("div",{className:"carousel-inner",children:[Object(y.jsx)("div",{className:"carousel-item active",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CANAVERAL.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-SANTA-TERESA.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-VEROES.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-ROBLE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-QUIMERA.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-PAMPERO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-OCUMARE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-DIPLOMATICO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CARUPANO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CALAZAN.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CACIQUE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-CABALLO-VIEJO.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-BUCARE.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-BODEGA-1800.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-MARCAS-BARRICA.png",className:"d-block w-1 img_marcas",alt:"..."})})}),Object(y.jsx)("div",{className:"carousel-item",children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"./assets/imgs/home/LOGO-ESTELAR.png",className:"d-block w-1 img_marcas",alt:"..."})})})]}),Object(y.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev",children:[Object(y.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(y.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(y.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next",children:[Object(y.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(y.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})}),Object(y.jsx)("div",{className:"col-md-3"})]})}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{})]}),Object(y.jsxs)("div",{className:"SeccionMaestrosRoneros",children:[Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",(e={className:"col-md-12"},Object(s.a)(e,"className","titulo"),Object(s.a)(e,"style",{marginBottom:"2rem"}),Object(s.a)(e,"children",Object(y.jsxs)("div",{className:"titulo",children:[Object(y.jsx)("img",{src:"./assets/imgs/home/linea2.png",className:"linea1"}),Object(y.jsx)("h1",{children:a[t].maestrosRoneros}),Object(y.jsx)("img",{src:"./assets/imgs/home/linea1.png",className:"linea2"})]})),e)),Object(y.jsx)("div",{className:"col-md-3",children:Object(y.jsx)("img",{src:"./assets/imgs/home/m_CARMEN-LOPEZ.png",style:{maxWidth:"100%"}})}),Object(y.jsx)("div",{className:"col-md-3",children:Object(y.jsx)("img",{src:"./assets/imgs/home/m_TITO-CORDERO.png",style:{maxWidth:"100%"}})}),Object(y.jsx)("div",{className:"col-md-3",children:Object(y.jsx)("img",{src:"./assets/imgs/home/m_NESTRO-ORTEGA.png",style:{maxWidth:"100%"}})}),Object(y.jsx)("div",{className:"col-md-3",children:Object(y.jsx)("img",{src:"./assets/imgs/home/m_GIOGIO-MELIS.png",style:{maxWidth:"100%"}})}),Object(y.jsx)("div",{className:"col-md-12",style:{marginTop:"2rem"},children:Object(y.jsx)("img",{src:"./assets/imgs/home/mesa-maestros.png",style:{maxWidth:"100%"}})})]})}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{})]}),Object(y.jsxs)("div",{className:"SeccionNoticias",children:[Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-md-12 mb-5",children:Object(y.jsxs)("div",{className:"titulo",children:[Object(y.jsx)("img",{src:"./assets/imgs/home/linea2.png",style:{height:"8px"}}),Object(y.jsx)("h1",{children:a[t].noticias}),Object(y.jsx)("img",{src:"./assets/imgs/home/linea1.png",style:{height:"8px",marginLeft:"8px"}})]})}),Object(y.jsx)(o.a,{loading:A,active:!0,children:O.circulo&&O.circulo.length>0&&O.circulo.map((function(e){var c="data:image/".concat(e.image_extension,";base64,").concat(e.image_base64);return Object(y.jsx)(l.a,{href:{pathname:"/noticias/".concat(e.url),query:{lang:t}},children:Object(y.jsxs)("div",{className:"col-md-4 cursor-pointer hover-notice-home",children:[Object(y.jsx)("div",{className:"mb-4 text-center",children:Object(y.jsx)("h3",{children:e.title})}),Object(y.jsx)("div",{className:"noticias_img",children:Object(y.jsx)("img",{src:c,style:{maxWidth:"90%"},alt:e.title})}),Object(y.jsx)("div",{className:"mt-4 text-center noticias_cuadro",children:e.summary})]},e.id)})}))})]})}),Object(y.jsx)("div",{className:"container mt-5",children:Object(y.jsx)(o.a,{loading:A,active:!0,children:O.cuadro&&O.cuadro.length>0&&Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-md-6 ",children:O.cuadro[0]&&Object(y.jsx)(l.a,{href:{pathname:"/noticias/".concat(O.cuadro[0].url),query:{lang:t}},children:Object(y.jsx)("img",{alt:O.cuadro[0].title,src:"data:image/".concat(O.cuadro[0].image_extension,";base64,").concat(O.cuadro[0].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})}),Object(y.jsx)("div",{className:"col-md-3",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-md-12 mb-4",children:O.cuadro[1]&&Object(y.jsx)(l.a,{href:{pathname:"/noticias/".concat(O.cuadro[1].url),query:{lang:t}},children:Object(y.jsx)("img",{alt:O.cuadro[1].title,src:"data:image/".concat(O.cuadro[1].image_extension,";base64,").concat(O.cuadro[1].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})}),Object(y.jsx)("div",{className:"col-md-12",children:O.cuadro[2]&&Object(y.jsx)(l.a,{href:{pathname:"/noticias/".concat(O.cuadro[2].url),query:{lang:t}},children:Object(y.jsx)("img",{alt:O.cuadro[2].title,src:"data:image/".concat(O.cuadro[2].image_extension,";base64,").concat(O.cuadro[2].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})})]})}),Object(y.jsx)("div",{className:"col-md-3",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-md-12 mb-4",children:O.cuadro[3]&&Object(y.jsx)(l.a,{href:{pathname:"/noticias/".concat(O.cuadro[3].url),query:{lang:t}},children:Object(y.jsx)("img",{alt:O.cuadro[3].title,src:"data:image/".concat(O.cuadro[3].image_extension,";base64,").concat(O.cuadro[3].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})}),Object(y.jsx)("div",{className:"col-md-12",children:O.cuadro[4]&&Object(y.jsx)(l.a,{href:{pathname:"/noticias/".concat(O.cuadro[4].url),query:{lang:t}},children:Object(y.jsx)("img",{alt:O.cuadro[4].title,src:"data:image/".concat(O.cuadro[4].image_extension,";base64,").concat(O.cuadro[4].image_base64),className:"post_img_principal cursor-pointer hover-notice-home"})})})]})})]})})}),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col-md-12 text-center mt-5",children:[Object(y.jsx)("img",{src:"./assets/imgs/home/ICONO-FACEBOOK.png",className:"iconos_abajo"}),Object(y.jsx)("img",{src:"./assets/imgs/home/linea2.png",className:"linea1"}),Object(y.jsx)("img",{src:"./assets/imgs/home/ICONO-INSTAGRAM.png",className:"iconos_abajo"}),Object(y.jsx)("img",{src:"./assets/imgs/home/linea1.png",className:"linea1"}),Object(y.jsx)("img",{src:"./assets/imgs/home/ICONO-YOUTUBE.png",className:"iconos_abajo"})]}),Object(y.jsx)("div",{className:"col-md-12 text-center mt-5",children:"@RONDEVENEZUELA"})]})})]}),Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("div",{className:"col-md-12",style:{backgroundColor:"#3d2514"},children:Object(y.jsx)("br",{})})})})]}),Object(y.jsx)(h.a,{})]}),Object(y.jsx)(d.a,{visible:S,footer:!1,maskClosable:!1,closable:!1,children:Object(y.jsx)("div",{style:{backgroundImage:"url('/assets/imgs/home/fondoEdad2.png')",padding:"1rem",borderRadius:"5px",color:"#FFF",fontSize:"20px"},className:"text-center",children:Object(y.jsx)("div",{style:{backgroundImage:"url('/assets/imgs/home/fondoEdad1.png')",border:"1px solid #FFF",padding:"1rem",borderRadius:"5px"},children:Object(y.jsxs)(m.a,{type:"flex",justify:"center",children:[Object(y.jsxs)(j.a,{span:24,children:[Object(y.jsx)("img",{src:"/assets/imgs/home/logo_blanco.png",style:{height:"150px"}}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{})]}),Object(y.jsxs)(j.a,{span:24,children:[a[t].validacionEdad.invita,Object(y.jsx)("br",{}),Object(y.jsx)("br",{})]}),Object(y.jsxs)(j.a,{span:24,children:[Object(y.jsx)("div",{style:{border:"1px solid #FFF",borderRadius:"5px",padding:"1rem"},children:a[t].validacionEdad.eres}),Object(y.jsx)("br",{})]}),Object(y.jsx)(j.a,{span:24,style:{textAlign:"center"},children:""!==M.trim()?Object(y.jsx)("p",{children:M}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(b.a,{size:"large",style:{width:"60px",color:"#582E10",backgroundColor:"#B17557"},onClick:function(){T("S")},children:Object(y.jsx)("strong",{children:a[t].validacionEdad.si})}),"\xa0\xa0\xa0",Object(y.jsx)(b.a,{size:"large",style:{width:"60px",color:"#582E10",backgroundColor:"#B17557"},onClick:function(){T("N")},children:Object(y.jsx)("strong",{children:a[t].validacionEdad.no})})]})})]})})})})]})}_.__hash="349386283"},l4aY:function(e,c,t){"use strict";function s(e,c){return!!e&&e.contains(c)}t.d(c,"a",(function(){return s}))},nfd1:function(e,c,t){"use strict";function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(c,"a",(function(){return s}))},tVsw:function(e,c,t){"use strict";t.d(c,"a",(function(){return a}));var s=t("EXi7");function a(e,c){if(e){if("string"===typeof e)return Object(s.a)(e,c);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(s.a)(e,c):void 0}}},vlRD:function(e,c,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])},wx14:function(e,c,t){"use strict";function s(){return(s=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var t=arguments[c];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}t.d(c,"a",(function(){return s}))}},[["vlRD",0,2,1,3,4,5,6,9,10]]]);