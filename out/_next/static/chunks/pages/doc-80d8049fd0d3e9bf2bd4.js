_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"/ezw":function(e,t,c){"use strict";var n=c("rePB"),a=c("wx14"),r=c("U8pU"),i=c("q1tI"),o=c("TSYQ"),s=c.n(o),l=function(e){var t=e.prefixCls,c=e.className,n=e.width,r=e.style;return i.createElement("h3",{className:s()(t,c),style:Object(a.a)({width:n},r)})},d=c("KQm4"),u=function(e){var t=function(t){var c=e.width,n=e.rows,a=void 0===n?2:n;return Array.isArray(c)?c[t]:a-1===t?c:void 0},c=e.prefixCls,n=e.className,a=e.style,r=e.rows,o=Object(d.a)(Array(r)).map((function(e,c){return i.createElement("li",{key:c,style:{width:t(c)}})}));return i.createElement("ul",{className:s()(c,n),style:a},o)},m=c("H84U"),j=function(e){var t,c,r=e.prefixCls,o=e.className,l=e.style,d=e.size,u=e.shape,m=s()((t={},Object(n.a)(t,"".concat(r,"-lg"),"large"===d),Object(n.a)(t,"".concat(r,"-sm"),"small"===d),t)),j=s()((c={},Object(n.a)(c,"".concat(r,"-circle"),"circle"===u),Object(n.a)(c,"".concat(r,"-square"),"square"===u),Object(n.a)(c,"".concat(r,"-round"),"round"===u),c)),f="number"===typeof d?{width:d,height:d,lineHeight:"".concat(d,"px")}:{};return i.createElement("span",{className:s()(r,m,j,o),style:Object(a.a)(Object(a.a)({},f),l)})},f=c("bT9E"),b=function(e){var t=function(t){var c=t.getPrefixCls,r=e.prefixCls,o=e.className,l=e.active,d=c("skeleton",r),u=Object(f.a)(e,["prefixCls","className"]),m=s()(d,"".concat(d,"-element"),Object(n.a)({},"".concat(d,"-active"),l),o);return i.createElement("div",{className:m},i.createElement(j,Object(a.a)({prefixCls:"".concat(d,"-avatar")},u)))};return i.createElement(m.a,null,t)};b.defaultProps={size:"default",shape:"circle"};var v=b,h=function(e){var t=function(t){var c,r=t.getPrefixCls,o=e.prefixCls,l=e.className,d=e.active,u=e.block,m=void 0!==u&&u,b=r("skeleton",o),v=Object(f.a)(e,["prefixCls"]),h=s()(b,"".concat(b,"-element"),(c={},Object(n.a)(c,"".concat(b,"-active"),d),Object(n.a)(c,"".concat(b,"-block"),m),c),l);return i.createElement("div",{className:h},i.createElement(j,Object(a.a)({prefixCls:"".concat(b,"-button")},v)))};return i.createElement(m.a,null,t)};h.defaultProps={size:"default"};var p=h,x=function(e){var t=function(t){var c,r=t.getPrefixCls,o=e.prefixCls,l=e.className,d=e.active,u=e.block,m=r("skeleton",o),b=Object(f.a)(e,["prefixCls"]),v=s()(m,"".concat(m,"-element"),(c={},Object(n.a)(c,"".concat(m,"-active"),d),Object(n.a)(c,"".concat(m,"-block"),u),c),l);return i.createElement("div",{className:v},i.createElement(j,Object(a.a)({prefixCls:"".concat(m,"-input")},b)))};return i.createElement(m.a,null,t)};x.defaultProps={size:"default"};var O=x,g=function(e){var t=function(t){var c=t.getPrefixCls,n=e.prefixCls,a=e.className,r=e.style,o=c("skeleton",n),l=s()(o,"".concat(o,"-element"),a);return i.createElement("div",{className:l},i.createElement("div",{className:s()("".concat(o,"-image"),a),style:r},i.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(o,"-image-svg")},i.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(o,"-image-path")}))))};return i.createElement(m.a,null,t)};function y(e){return e&&"object"===Object(r.a)(e)?e:{}}var w=function(e){var t=function(t){var c=t.getPrefixCls,r=t.direction,o=e.prefixCls,d=e.loading,m=e.className,f=e.style,b=e.children,v=e.avatar,h=e.title,p=e.paragraph,x=e.active,O=e.round,g=c("skeleton",o);if(d||!("loading"in e)){var w,_,N,E=!!v,C=!!h,S=!!p;if(E){var A=Object(a.a)(Object(a.a)({prefixCls:"".concat(g,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(C,S)),y(v));_=i.createElement("div",{className:"".concat(g,"-header")},i.createElement(j,A))}if(C||S){var z,k;if(C){var I=Object(a.a)(Object(a.a)({prefixCls:"".concat(g,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(E,S)),y(h));z=i.createElement(l,I)}if(S){var M=Object(a.a)(Object(a.a)({prefixCls:"".concat(g,"-paragraph")},function(e,t){var c={};return e&&t||(c.width="61%"),c.rows=!e&&t?3:2,c}(E,C)),y(p));k=i.createElement(u,M)}N=i.createElement("div",{className:"".concat(g,"-content")},z,k)}var T=s()(g,(w={},Object(n.a)(w,"".concat(g,"-with-avatar"),E),Object(n.a)(w,"".concat(g,"-active"),x),Object(n.a)(w,"".concat(g,"-rtl"),"rtl"===r),Object(n.a)(w,"".concat(g,"-round"),O),w),m);return i.createElement("div",{className:T,style:f},_,N)}return b};return i.createElement(m.a,null,t)};w.defaultProps={avatar:!1,title:!0,paragraph:!0},w.Button=p,w.Avatar=v,w.Input=O,w.Image=g;var _=w;t.a=_},"/kpp":function(e,t,c){"use strict";var n=c("rePB"),a=c("wx14"),r=c("U8pU"),i=c("q1tI"),o=c("TSYQ"),s=c.n(o),l=c("o/2+"),d=c("H84U"),u=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c};var m=["xs","sm","md","lg","xl","xxl"],j=i.forwardRef((function(e,t){var c,o=i.useContext(d.b),j=o.getPrefixCls,f=o.direction,b=i.useContext(l.a),v=b.gutter,h=b.wrap,p=b.supportFlexGap,x=e.prefixCls,O=e.span,g=e.order,y=e.offset,w=e.push,_=e.pull,N=e.className,E=e.children,C=e.flex,S=e.style,A=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),z=j("col",x),k={};m.forEach((function(t){var c,i={},o=e[t];"number"===typeof o?i.span=o:"object"===Object(r.a)(o)&&(i=o||{}),delete A[t],k=Object(a.a)(Object(a.a)({},k),(c={},Object(n.a)(c,"".concat(z,"-").concat(t,"-").concat(i.span),void 0!==i.span),Object(n.a)(c,"".concat(z,"-").concat(t,"-order-").concat(i.order),i.order||0===i.order),Object(n.a)(c,"".concat(z,"-").concat(t,"-offset-").concat(i.offset),i.offset||0===i.offset),Object(n.a)(c,"".concat(z,"-").concat(t,"-push-").concat(i.push),i.push||0===i.push),Object(n.a)(c,"".concat(z,"-").concat(t,"-pull-").concat(i.pull),i.pull||0===i.pull),Object(n.a)(c,"".concat(z,"-rtl"),"rtl"===f),c))}));var I=s()(z,(c={},Object(n.a)(c,"".concat(z,"-").concat(O),void 0!==O),Object(n.a)(c,"".concat(z,"-order-").concat(g),g),Object(n.a)(c,"".concat(z,"-offset-").concat(y),y),Object(n.a)(c,"".concat(z,"-push-").concat(w),w),Object(n.a)(c,"".concat(z,"-pull-").concat(_),_),c),N,k),M={};if(v&&v[0]>0){var T=v[0]/2;M.paddingLeft=T,M.paddingRight=T}if(v&&v[1]>0&&!p){var q=v[1]/2;M.paddingTop=q,M.paddingBottom=q}return C&&(M.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(C),!1!==h||M.minWidth||(M.minWidth=0)),i.createElement("div",Object(a.a)({},A,{style:Object(a.a)(Object(a.a)({},M),S),className:I,ref:t}),E)}));j.displayName="Col",t.a=j},"25BE":function(e,t,c){"use strict";function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}c.d(t,"a",(function(){return n}))},ACnJ:function(e,t,c){"use strict";c.d(t,"b",(function(){return r}));var n=c("rePB"),a=c("wx14"),r=["xxl","xl","lg","md","sm","xs"],i={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},o=new Map,s=-1,l={},d={matchHandlers:{},dispatch:function(e){return l=e,o.forEach((function(e){return e(l)})),o.size>=1},subscribe:function(e){return o.size||this.register(),s+=1,o.set(s,e),e(l),s},unsubscribe:function(e){o.delete(e),o.size||this.unregister()},unregister:function(){var e=this;Object.keys(i).forEach((function(t){var c=i[t],n=e.matchHandlers[c];null===n||void 0===n||n.mql.removeListener(null===n||void 0===n?void 0:n.listener)})),o.clear()},register:function(){var e=this;Object.keys(i).forEach((function(t){var c=i[t],r=function(c){var r=c.matches;e.dispatch(Object(a.a)(Object(a.a)({},l),Object(n.a)({},t,r)))},o=window.matchMedia(c);o.addListener(r),e.matchHandlers[c]={mql:o,listener:r},r(o)}))}};t.a=d},BMrR:function(e,t,c){"use strict";var n=c("qrJ5");t.a=n.a},BsWD:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c("a3WO");function a(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(n.a)(e,t):void 0}}},DSFK:function(e,t,c){"use strict";function n(e){if(Array.isArray(e))return e}c.d(t,"a",(function(){return n}))},I6Yi:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/doc",function(){return c("yity")}])},KQm4:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c("a3WO");var a=c("25BE"),r=c("BsWD");function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(a.a)(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},MNnm:function(e,t,c){"use strict";function n(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}c.d(t,"a",(function(){return n}))},ODXe:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c("DSFK");var a=c("BsWD"),r=c("PYwp");function i(e,t){return Object(n.a)(e)||function(e,t){var c=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=c){var n,a,r=[],i=!0,o=!1;try{for(c=c.call(e);!(i=(n=c.next()).done)&&(r.push(n.value),!t||r.length!==t);i=!0);}catch(s){o=!0,a=s}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return r}}(e,t)||Object(a.a)(e,t)||Object(r.a)()}},P80f:function(e,t,c){"use strict";var n=c("ODXe"),a=c("q1tI"),r=c("R3zJ");t.a=function(){var e=a.useState(!1),t=Object(n.a)(e,2),c=t[0],i=t[1];return a.useEffect((function(){i(Object(r.b)())}),[]),c}},PYwp:function(e,t,c){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}c.d(t,"a",(function(){return n}))},R3zJ:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return i}));var n,a=c("MNnm"),r=(c("tl68"),function(){return Object(a.a)()&&window.document.documentElement}),i=function(){if(!r())return!1;if(void 0!==n)return n;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n}},YFqc:function(e,t,c){e.exports=c("cTJO")},a3WO:function(e,t,c){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,n=new Array(t);c<t;c++)n[c]=e[c];return n}c.d(t,"a",(function(){return n}))},cTJO:function(e,t,c){"use strict";var n=c("zoAU"),a=c("7KCV");t.__esModule=!0,t.default=void 0;var r,i=a(c("q1tI")),o=c("elyg"),s=c("nOHt"),l=new Map,d=window.IntersectionObserver,u={};var m=function(e,t){var c=r||(d?r=new d((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return c?(c.observe(e),l.set(e,t),function(){try{c.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function j(e,t,c,n){(0,o.isLocalURL)(t)&&(e.prefetch(t,c,n).catch((function(e){0})),u[t+"%"+c]=!0)}var f=function(e){var t=!1!==e.prefetch,c=i.default.useState(),a=n(c,2),r=a[0],l=a[1],f=(0,s.useRouter)(),b=f&&f.pathname||"/",v=i.default.useMemo((function(){var t=(0,o.resolveHref)(b,e.href,!0),c=n(t,2),a=c[0],r=c[1];return{href:a,as:e.as?(0,o.resolveHref)(b,e.as):r||a}}),[b,e.href,e.as]),h=v.href,p=v.as;i.default.useEffect((function(){if(t&&d&&r&&r.tagName&&(0,o.isLocalURL)(h)&&!u[h+"%"+p])return m(r,(function(){j(f,h,p)}))}),[t,r,h,p,f]);var x=e.children,O=e.replace,g=e.shallow,y=e.scroll,w=e.locale;"string"===typeof x&&(x=i.default.createElement("a",null,x));var _=i.Children.only(x),N={ref:function(e){e&&l(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,c,n,a,r,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(c))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[a?"replace":"push"](c,n,{shallow:r,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,f,h,p,O,g,y,w)}};return t&&(N.onMouseEnter=function(e){(0,o.isLocalURL)(h)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),j(f,h,p,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(N.href=(0,o.addBasePath)((0,o.addLocale)(p,"undefined"!==typeof w?w:f&&f.locale,f&&f.defaultLocale))),i.default.cloneElement(_,N)};t.default=f},kPKH:function(e,t,c){"use strict";var n=c("/kpp");t.a=n.a},kdyu:function(e,t,c){"use strict";var n=c("KsED"),a={getAll:function(){return Object(n.a)({method:"GET",url:"doc"})},put:function(e){return Object(n.a)({method:"PUT",url:"doc",data:e})},updateImageDoc:function(e){return Object(n.a)({method:"PUT",url:"doc/image",data:e})},deleteFileDoc:function(e){return Object(n.a)({method:"DELETE",url:"doc/image",data:e})}};t.a=a},"o/2+":function(e,t,c){"use strict";var n=c("q1tI"),a=Object(n.createContext)({});t.a=a},qrJ5:function(e,t,c){"use strict";var n=c("wx14"),a=c("rePB"),r=c("U8pU"),i=c("ODXe"),o=c("q1tI"),s=c("TSYQ"),l=c.n(s),d=c("H84U"),u=c("o/2+"),m=c("CWQg"),j=c("ACnJ"),f=c("P80f"),b=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c},v=(Object(m.a)("top","middle","bottom","stretch"),Object(m.a)("start","end","center","space-around","space-between"),o.forwardRef((function(e,t){var c,s=e.prefixCls,m=e.justify,v=e.align,h=e.className,p=e.style,x=e.children,O=e.gutter,g=void 0===O?0:O,y=e.wrap,w=b(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),_=o.useContext(d.b),N=_.getPrefixCls,E=_.direction,C=o.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=Object(i.a)(C,2),A=S[0],z=S[1],k=Object(f.a)(),I=o.useRef(g);o.useEffect((function(){var e=j.a.subscribe((function(e){var t=I.current||0;(!Array.isArray(t)&&"object"===Object(r.a)(t)||Array.isArray(t)&&("object"===Object(r.a)(t[0])||"object"===Object(r.a)(t[1])))&&z(e)}));return function(){return j.a.unsubscribe(e)}}),[]);var M=N("row",s),T=function(){var e=[0,0];return(Array.isArray(g)?g:[g,0]).forEach((function(t,c){if("object"===Object(r.a)(t))for(var n=0;n<j.b.length;n++){var a=j.b[n];if(A[a]&&void 0!==t[a]){e[c]=t[a];break}}else e[c]=t||0})),e}(),q=l()(M,(c={},Object(a.a)(c,"".concat(M,"-no-wrap"),!1===y),Object(a.a)(c,"".concat(M,"-").concat(m),m),Object(a.a)(c,"".concat(M,"-").concat(v),v),Object(a.a)(c,"".concat(M,"-rtl"),"rtl"===E),c),h),P={},H=T[0]>0?T[0]/-2:void 0,L=T[1]>0?T[1]/-2:void 0;if(H&&(P.marginLeft=H,P.marginRight=H),k){var D=Object(i.a)(T,2);P.rowGap=D[1]}else L&&(P.marginTop=L,P.marginBottom=L);var W=Object(i.a)(T,2),R=W[0],U=W[1],B=o.useMemo((function(){return{gutter:[R,U],wrap:y,supportFlexGap:k}}),[R,U,y,k]);return o.createElement(u.a.Provider,{value:B},o.createElement("div",Object(n.a)({},w,{className:q,style:Object(n.a)(Object(n.a)({},P),p),ref:t}),x))})));v.displayName="Row",t.a=v},tl68:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c("MNnm"),a=function(e){if(Object(n.a)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],c=window.document.documentElement;return t.some((function(e){return e in c.style}))}return!1};function r(e,t){return Array.isArray(e)||void 0===t?a(e):function(e,t){if(!a(e))return!1;var c=document.createElement("div"),n=c.style[e];return c.style[e]=t,c.style[e]!==n}(e,t)}},yity:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return x}));var n=c("MX0m"),a=c.n(n),r=c("8Kt/"),i=c.n(r),o=c("/ezw"),s=c("BMrR"),l=c("kPKH"),d=c("nOHt"),u=c("Fl18"),m=c("Ddm2"),j=c("Yw0h"),f=c("pPWc"),b=c("q1tI"),v=c("kdyu"),h=c("nKUr"),p=['.SeccionDoc0{background:linear-gradient(to top,#62462c 10%,#4e3c2d 50%);background-image:url("./assets/imgs/doc/FONDO.png");background-size:cover;}',".SeccionDoc1{text-align:center;padding-top:10rem;padding-bottom:3rem;}",".SeccionDocNacimiento{background-color:#4e3c2d;margin-top:2rem !important;margin-bottom:2rem !important;padding-top:2rem !important;padding-bottom:2rem !important;}",".SectionMobile0{background-color:#443421;}",'.SectionMobile1{background-image:url("./assets/imgs/historia/FONDO-NUESTRA-HISTORIA-MOBILE.jpg");}'];function x(){var e,t,c,n,r,x,O,g,y,w,_,N,E,C,S,A,z,k,I,M,T,q,P,H,L,D,W,R,U,B,F,K,J,Y,X,G,Q,V,$,Z,ee,te,ce,ne,ae,re="es";"en"===Object(d.useRouter)().query.lang&&(re="en");var ie={es:j.a,en:f.a},oe=Object(b.useState)({es:null,en:null}),se=oe[0],le=oe[1],de=Object(b.useState)(!1),ue=de[0],me=de[1];return Object(b.useEffect)((function(){me(!0),v.a.getAll().then((function(e){var t=e.data,c=t.codigo,n=t.data;"1"===c?le(n):console.log("error","service return code ".concat(c))})).catch((function(e){console.log("error",e)})).finally((function(){me(!1)}))}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(a.a,{id:p.__hash,children:p}),Object(h.jsxs)(i.a,{children:[Object(h.jsx)("meta",{charSet:"UTF-8"}),Object(h.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),Object(h.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(h.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",crossOrigin:"anonymous"}),Object(h.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(h.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",rel:"stylesheet"}),Object(h.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",integrity:"sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",crossOrigin:"anonymous"}),Object(h.jsx)("title",{children:ie[re].doc.pageTitle})]}),Object(h.jsx)(m.a,{}),Object(h.jsxs)("div",{className:"SeccionDoc0 valida_mobile",children:[Object(h.jsx)("div",{className:"SeccionDoc1",children:Object(h.jsxs)(o.a,{loading:ue,active:!0,children:[(null===(e=se[re])||void 0===e?void 0:e.doc_image_1.image)&&Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(t=se[re])||void 0===t?void 0:t.doc_image_1.image),style:{maxWidth:"25%",width:"400px"}}),(null===(c=se[re])||void 0===c?void 0:c.doc_image_2.image)&&Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(n=se[re])||void 0===n?void 0:n.doc_image_2.image),style:{maxWidth:"25%",width:"400px"}}),(null===(r=se[re])||void 0===r?void 0:r.doc_image_3.image)&&Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(x=se[re])||void 0===x?void 0:x.doc_image_3.image),style:{maxWidth:"25%",width:"400px"}})]})}),Object(h.jsxs)("div",{className:"SeccionDoc2",children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row justify-content-center gx-1",children:[Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("div",{className:"seccion_titulo text-center",children:[Object(h.jsx)("img",{src:"./assets/imgs/home/linea2.png",className:"linea1",style:{maxHeight:"4px"}}),Object(h.jsx)("h1",{children:null===(O=se[re])||void 0===O?void 0:O.denominacion.title}),Object(h.jsx)("img",{src:"./assets/imgs/home/linea1.png",className:"linea2",style:{maxHeight:"4px"}})]})}),Object(h.jsxs)("div",{className:"col-md-10",children:[Object(h.jsx)("h3",{className:"titulo-maestro",children:null===(g=se[re])||void 0===g?void 0:g.quees.title}),Object(h.jsx)("p",{className:"font_20 text-justify",children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(y=se[re])||void 0===y?void 0:y.quees.content.replaceAll("\n","<br />")}})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{className:"col-md-7",children:[Object(h.jsx)("h3",{className:"titulo-maestro",children:null===(w=se[re])||void 0===w?void 0:w.porqueexiste.title}),Object(h.jsx)("p",{className:"font_20 text-justify",style:{lineHeight:2},children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(_=se[re])||void 0===_?void 0:_.porqueexiste.content.replaceAll("\n","<br />")}})})]}),Object(h.jsx)("div",{className:"col-md-3 ",style:{textAlign:"right"},children:Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(N=se[re])||void 0===N?void 0:N.porqueexiste.image),style:{maxWidth:"80%"}})})]})}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row justify-content-center ",children:[Object(h.jsxs)("div",{className:"col-md-10 SeccionDocNacimiento",children:[Object(h.jsx)("h3",{className:"titulo-maestro",children:null===(E=se[re])||void 0===E?void 0:E.acta_nacimiento.title}),Object(h.jsx)("p",{className:"font_20 text-justify",children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(C=se[re])||void 0===C?void 0:C.acta_nacimiento.content.replaceAll("\n","<br />")}})})]}),Object(h.jsxs)("div",{className:"col-md-10",children:[Object(h.jsx)("h3",{className:"titulo-maestro",children:null===(S=se[re])||void 0===S?void 0:S.organismo_regulador.title}),Object(h.jsx)("p",{className:"font_20 text-justify",children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(A=se[re])||void 0===A?void 0:A.organismo_regulador.content.replaceAll("\n","<br />")}})}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"titulo-maestro",children:null===(z=se[re])||void 0===z?void 0:z.funciones.title}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"font_20 text-justify",dangerouslySetInnerHTML:{__html:null===(k=se[re])||void 0===k?void 0:k.funciones.content.replaceAll("\n","<br />")}})}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"titulo-maestro",children:null===(I=se[re])||void 0===I?void 0:I.organizacion.title}),Object(h.jsx)("div",{className:"font_20 text-justify",children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(M=se[re])||void 0===M?void 0:M.organizacion.content.replaceAll("\n","<br />")}})}),Object(h.jsx)("br",{}),Object(h.jsx)(o.a,{active:!0,loading:ue,children:se[re]&&se[re].regularizations&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h4",{className:"titulo-maestro",children:se[re].regularizations.title}),Object(h.jsx)("p",{className:"font_20 text-justify",children:se[re].regularizations.files.map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("a",{href:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/").concat(e.fileName),target:"_blank",style:{color:"#C6E1EA"},children:e.text},t),Object(h.jsx)("br",{})]})}))})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})]})}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row justify-content-center gx-1",children:[Object(h.jsxs)("div",{className:"col-md-12 text-center",children:[Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(T=se[re])||void 0===T?void 0:T.doc_footer_image_1.image),style:{marginLeft:"1rem",marginRight:"1rem",width:"300px",maxWidth:"100%"}}),Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(q=se[re])||void 0===q?void 0:q.doc_footer_image_2.image),style:{marginLeft:"1rem",marginRight:"1rem",width:"300px",maxWidth:"100%"}}),Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(P=se[re])||void 0===P?void 0:P.doc_footer_image_3.image),style:{marginLeft:"1rem",marginRight:"1rem",width:"300px",maxWidth:"100%"}})]}),Object(h.jsxs)("div",{className:"col-md-12",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})]})})]}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-md-12",style:{backgroundColor:"#3d2514"},children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})})})]}),Object(h.jsx)("div",{className:"SeccionDoc0 valida_desktop",children:Object(h.jsxs)(s.a,{type:"flex",justify:"center",children:[Object(h.jsxs)(l.a,{xs:22,className:"text-center",style:{marginTop:"58px"},children:[Object(h.jsx)("br",{}),(null===(H=se[re])||void 0===H?void 0:H.doc_image_1.image)&&Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(L=se[re])||void 0===L?void 0:L.doc_image_1.image),style:{maxWidth:"30%"}}),"\xa0\xa0",(null===(D=se[re])||void 0===D?void 0:D.doc_image_2.image)&&Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(W=se[re])||void 0===W?void 0:W.doc_image_2.image),style:{maxWidth:"30%"}}),"\xa0\xa0",(null===(R=se[re])||void 0===R?void 0:R.doc_image_3.image)&&Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(U=se[re])||void 0===U?void 0:U.doc_image_3.image),style:{maxWidth:"30%"}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}),Object(h.jsxs)(l.a,{xs:22,children:[Object(h.jsx)("h1",{children:null===(B=se[re])||void 0===B?void 0:B.denominacion.title}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"titulo-maestro",children:null===(F=se[re])||void 0===F?void 0:F.quees.title}),Object(h.jsx)("p",{className:"font_20 text-justify",children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(K=se[re])||void 0===K?void 0:K.quees.content.replaceAll("\n","<br />")}})}),Object(h.jsx)("h3",{className:"titulo-maestro",children:null===(J=se[re])||void 0===J?void 0:J.porqueexiste.title}),Object(h.jsx)("p",{className:"font_20 text-justify",style:{lineHeight:2},children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(Y=se[re])||void 0===Y?void 0:Y.porqueexiste.content.replaceAll("\n","<br />")}})})]}),Object(h.jsxs)(l.a,{xs:22,className:"text-center",children:[Object(h.jsx)("img",{src:"./assets/imgs/doc/FOTO-BODEGA-BARRICAS.png",style:{maxWidth:"100%"}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}),Object(h.jsxs)(l.a,{xs:22,children:[Object(h.jsx)("h3",{className:"titulo-maestro",children:null===(X=se[re])||void 0===X?void 0:X.acta_nacimiento.title}),Object(h.jsx)("p",{className:"font_20 text-justify",children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(G=se[re])||void 0===G?void 0:G.acta_nacimiento.content.replaceAll("\n","<br />")}})}),Object(h.jsx)("h3",{className:"titulo-maestro",children:null===(Q=se[re])||void 0===Q?void 0:Q.organismo_regulador.title}),Object(h.jsx)("p",{className:"font_20 text-justify",children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(V=se[re])||void 0===V?void 0:V.organismo_regulador.content.replaceAll("\n","<br />")}})}),Object(h.jsx)("h3",{className:"titulo-maestro",children:null===($=se[re])||void 0===$?void 0:$.funciones.title}),Object(h.jsx)("div",{className:"font_20 text-justify",children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(Z=se[re])||void 0===Z?void 0:Z.funciones.content.replaceAll("\n","<br />")}})}),Object(h.jsx)("h3",{className:"titulo-maestro",children:null===(ee=se[re])||void 0===ee?void 0:ee.organizacion.title}),Object(h.jsx)("div",{className:"font_20 text-justify",children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(te=se[re])||void 0===te?void 0:te.organizacion.content.replaceAll("\n","<br />")}})}),Object(h.jsx)("br",{}),Object(h.jsx)(o.a,{active:!0,loading:ue,children:se[re]&&se[re].regularizations&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h4",{className:"titulo-maestro",children:se[re].regularizations.title}),Object(h.jsx)("p",{className:"font_20 text-justify",children:se[re].regularizations.files.map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("a",{href:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/").concat(e.fileName),target:"_blank",style:{color:"#C6E1EA"},children:e.text},t),Object(h.jsx)("br",{})]})}))})]})})]}),Object(h.jsxs)(l.a,{xs:22,className:"text-center",children:[Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(ce=se[re])||void 0===ce?void 0:ce.doc_footer_image_1.image),style:{maxWidth:"30%"}})," ","\xa0\xa0",Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(ne=se[re])||void 0===ne?void 0:ne.doc_footer_image_2.image),style:{maxWidth:"30%"}})," ","\xa0\xa0",Object(h.jsx)("img",{src:"".concat("https://www.rondevenezuela.com/rdv-services","/doc/image/").concat(null===(ae=se[re])||void 0===ae?void 0:ae.doc_footer_image_3.image),style:{maxWidth:"30%"}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-12",style:{backgroundColor:"#3d2514"},children:Object(h.jsx)("br",{})})})})]})}),Object(h.jsx)(u.a,{})]})}p.__hash="2446866176"}},[["I6Yi",0,2,1,3,4,11]]]);