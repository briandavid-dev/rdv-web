webpackHotUpdate_N_E("pages/empresas",{

/***/ "./pages/empresas.js":
/*!***************************!*\
  !*** ./pages/empresas.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_MenuDesktop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MenuDesktop */ "./components/MenuDesktop/index.js");
/* harmony import */ var _lang_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lang/es */ "./lang/es.js");
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lang/en */ "./lang/en.js");
/* harmony import */ var _pagesServices_empresas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pagesServices/empresas */ "./pagesServices/empresas.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\pages\\empresas.js",
    _this = undefined,
    _s = $RefreshSig$();













var stylesCss = new String(".Section0{background-image:url(\"/assets/imgs/home/fondoEmpresas.png\");}.ant-collapse{background-color:transparent;}.ant-collapse-header{color:#fef4e4 !important;}.ant-collapse-content{background-color:rgba(255,255,255,0.4) !important;}table{border:1px #fef4e4 solid;}table td{border:1px #fef4e4 solid;padding:0.3rem;}.card-empresa{background-color:rgba(68,49,34,0.5);color:#fff4e4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxlbXByZXNhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXNEIsQUFHaUUsQUFJL0IsQUFHSixBQUc0QixBQUk1QixBQUdBLEFBS2MseUJBZHpDLEFBT0EsQUFHaUIsSUFiakIsT0FrQmdCLElBSmhCLFVBUkEsQUFhQSxVQXZCQSIsImZpbGUiOiJDOlxcVXNlcnNcXERhdmlkT2Nob2FCZXJtdWRlelxcRGVza3RvcFxccmR2LXdlYlxcbmV4dGpzXFxwYWdlc1xcZW1wcmVzYXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBDb2xsYXBzZSwgU2tlbGV0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWVudURlc2t0b3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVudURlc2t0b3BcIjtcclxuaW1wb3J0IGVzIGZyb20gXCIuLi9sYW5nL2VzXCI7XHJcbmltcG9ydCBlbiBmcm9tIFwiLi4vbGFuZy9lblwiO1xyXG5pbXBvcnQgQXBpRW1wcmVzYXMgZnJvbSBcIi4uL3BhZ2VzU2VydmljZXMvZW1wcmVzYXNcIjtcclxuXHJcbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgXHJcbiAgLlNlY3Rpb24wIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1ncy9ob21lL2ZvbmRvRW1wcmVzYXMucG5nXCIpO1xyXG4gIH1cclxuXHJcbiAgLmFudC1jb2xsYXBzZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmFudC1jb2xsYXBzZS1oZWFkZXIge1xyXG4gICAgY29sb3I6ICNmZWY0ZTQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFudC1jb2xsYXBzZS1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyOiAxcHggI2ZlZjRlNCBzb2xpZDtcclxuICB9XHJcbiAgdGFibGUgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggI2ZlZjRlNCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWVtcHJlc2Ege1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjUpO1xyXG4gICAgY29sb3I6ICNmZmY0ZTQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUGFnZUVtcHJlc2FzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBsZXQgbGFuZyA9IFwiZW5cIjtcclxuICBpZiAocm91dGVyLnF1ZXJ5LmxhbmcgPT09IFwiZW5cIikge1xyXG4gICAgbGFuZyA9IFwiZW5cIjtcclxuICB9IGVsc2Uge1xyXG4gICAgbGFuZyA9IFwiZXNcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0cmluZ3MgPSB7IGVzLCBlbiB9O1xyXG5cclxuICBjb25zdCBbZGF0YUVtcHJlc2FzLCBzZXREYXRhRW1wcmVzYXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZ2V0RW1wcmVzYXMgPSAobGFuZykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIEFwaUVtcHJlc2FzLmdldEVtcHJlc2FzKGxhbmcpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZWAsIHJlc3BvbnNlKTtcclxuICAgICAgICBjb25zdCB7IGNvZGlnbywgcmVzdWx0cyB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBpZiAoY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgc2V0RGF0YUVtcHJlc2FzKHJlc3VsdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29kaWdvID09PSBcIjBcIikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIGAsIGNvZGlnbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yYCwgZXJyb3IpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwibGFuZz1lc1wiKSkge1xyXG4gICAgICBnZXRFbXByZXNhcyhcImVzXCIpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcImxhbmc9ZW5cIikpIHtcclxuICAgICAgZ2V0RW1wcmVzYXMoXCJlblwiKTtcclxuICAgIH1cclxuICB9LCBbbGFuZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge3N0eWxlc0Nzc31cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUJtYnh1UHdRYTJsYy9GVnpCY05KN1VBeUp4TTZ3dXFJajYxdExyYzR3U1gwc3pIL0V2K25ZUlJ1V2xvbGZsZmxcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrTWluY2hvOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWI1a0h5WGdjcGJaSk8vdFk5VWw3a0drZjFTMENXdUtjQ0QzOGw4WWtlSDh6OFFqRTBHbVcxZ1lVNVM5Rk9uSjBcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuXHJcbiAgICAgICAgPHRpdGxlPntzdHJpbmdzW2xhbmddLmVtcHJlc2FzLnBhZ2VUaXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZW51RGVza3RvcCAvPlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjdyZW0gMCAwIDAgXCIgfX0gY2xhc3NOYW1lPVwiU2VjdGlvbjAgXCI+XHJcbiAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMTZdfSB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cInRvcFwiPlxyXG4gICAgICAgICAgPENvbCB4cz17MjJ9IGxnPXsxMH0+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZm9udF8yMFwiIGd1dHRlcj17WzIwLCAyMF19PlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiBhY3RpdmUgbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YUVtcHJlc2FzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZW1wcmVzYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9ob21lL2xpbmVhMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjRweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFsY29ob2xlcyB5IGFuZWpvcyBtb25pZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWd0aFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4vYXNzZXRzL2ltZ3MvaG9tZS9saW5lYTEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgLy8gPENvbGxhcHNlIGFjY29yZGlvbiBleHBhbmRJY29uUG9zaXRpb249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAvLyAgIHtkYXRhRW1wcmVzYXMubWFwKChlbXByZXNhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICA8Q29sbGFwc2UuUGFuZWxcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgaGVhZGVyPXtlbXByZXNhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBrZXk9e2VtcHJlc2EuaWR9XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIGNsYXNzTmFtZT1cImZvbnRfMjBcIlxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICA8Um93IGd1dHRlcj17MjB9PlxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17NH0+XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFsdD17ZW1wcmVzYS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS8ke2VtcHJlc2EuaW1hZ2VfZXh0ZW5zaW9ufTtiYXNlNjQsJHtlbXByZXNhLmltYWdlX2Jhc2U2NH1gfVxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsyMH0+XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgX19odG1sOiBlbXByZXNhLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICA8L0NvbGxhcHNlLlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAvLyAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAvLyA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntzdHJpbmdzW2xhbmddLm5vRGF0YX08L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvU2tlbGV0b24+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzZDI1MTRcIiB9fT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUVtcHJlc2FzO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\pages\\\\empresas.js */");
stylesCss.__hash = "2788543563";

var PageEmpresas = function PageEmpresas() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var lang = "en";

  if (router.query.lang === "en") {
    lang = "en";
  } else {
    lang = "es";
  }

  var strings = {
    es: _lang_es__WEBPACK_IMPORTED_MODULE_7__["default"],
    en: _lang_en__WEBPACK_IMPORTED_MODULE_8__["default"]
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataEmpresas = _useState[0],
      setDataEmpresas = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var getEmpresas = function getEmpresas(lang) {
    setLoading(true);
    _pagesServices_empresas__WEBPACK_IMPORTED_MODULE_9__["default"].getEmpresas(lang).then(function (response) {
      console.log("response", response);
      var _response$data = response.data,
          codigo = _response$data.codigo,
          results = _response$data.results;

      if (codigo === "1") {
        setDataEmpresas(results);
      }

      if (codigo === "0") {
        console.log("error ", codigo);
      }

      setLoading(false);
    })["catch"](function (error) {
      console.log("error", error);
      setLoading(false);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (window.location.href.includes("lang=es")) {
      getEmpresas("es");
    } else if (window.location.href.includes("lang=en")) {
      getEmpresas("en");
    }
  }, [lang]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: strings[lang].empresas.pageTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        padding: "7rem 0 0 0 "
      },
      className: "Section0 ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        gutter: [16, 16],
        type: "flex",
        justify: "center",
        align: "top",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          xs: 22,
          lg: 10,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
            className: "font_20",
            gutter: [20, 20],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Skeleton"], {
              active: true,
              loading: loading,
              children: dataEmpresas.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
                  span: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                    className: "card-empresa",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      style: {
                        textAlign: "left"
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                        src: "./assets/imgs/home/linea1.png",
                        style: {
                          height: "4px"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      style: {
                        fontSize: "1rem"
                      },
                      children: "Alcoholes y anejos moniges"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                      style: {
                        textAlign: "rigth"
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                        src: "./assets/imgs/home/linea1.png",
                        style: {
                          height: "4px"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
                  span: 12
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 21
                }, _this)]
              }, void 0, true) :
              /*#__PURE__*/
              // <Collapse accordion expandIconPosition="right">
              //   {dataEmpresas.map((empresa) => (
              //     <Collapse.Panel
              //       header={empresa.title}
              //       key={empresa.id}
              //       className="font_20"
              //     >
              //       <Row gutter={20}>
              //         <Col xs={24} lg={4}>
              //           <img
              //             alt={empresa.title}
              //             src={`data:image/${empresa.image_extension};base64,${empresa.image_base64}`}
              //             style={{ maxWidth: "100%" }}
              //           />
              //         </Col>
              //         <Col xs={24} lg={20}>
              //           <div
              //             dangerouslySetInnerHTML={{
              //               __html: empresa.content_html,
              //             }}
              //           ></div>
              //         </Col>
              //       </Row>
              //     </Collapse.Panel>
              //   ))}
              // </Collapse>
              Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
                className: "text-center",
                children: strings[lang].noData
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: "col-md-12",
            style: {
              backgroundColor: "#3d2514"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(PageEmpresas, "gQQmS8TVXZQv/N6n7EHNZThHCW0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = PageEmpresas;
/* harmony default export */ __webpack_exports__["default"] = (PageEmpresas);

var _c;

$RefreshReg$(_c, "PageEmpresas");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wcmVzYXMuanMiXSwibmFtZXMiOlsic3R5bGVzQ3NzIiwiUGFnZUVtcHJlc2FzIiwicm91dGVyIiwidXNlUm91dGVyIiwibGFuZyIsInF1ZXJ5Iiwic3RyaW5ncyIsImVzIiwiZW4iLCJ1c2VTdGF0ZSIsImRhdGFFbXByZXNhcyIsInNldERhdGFFbXByZXNhcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0RW1wcmVzYXMiLCJBcGlFbXByZXNhcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY29kaWdvIiwicmVzdWx0cyIsImVycm9yIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5jbHVkZXMiLCJlbXByZXNhcyIsInBhZ2VUaXRsZSIsInBhZGRpbmciLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJmb250U2l6ZSIsIm5vRGF0YSIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFNBQVMsczBUQUFmOzs7QUE2QkEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0FBQ0EsTUFBSUYsTUFBTSxDQUFDRyxLQUFQLENBQWFELElBQWIsS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUJBLFFBQUksR0FBRyxJQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLFFBQUksR0FBRyxJQUFQO0FBQ0Q7O0FBRUQsTUFBTUUsT0FBTyxHQUFHO0FBQUVDLE1BQUUsRUFBRkEsZ0RBQUY7QUFBTUMsTUFBRSxFQUFGQSxnREFBRUE7QUFBUixHQUFoQjs7QUFWeUIsa0JBWWVDLHNEQUFRLENBQUMsRUFBRCxDQVp2QjtBQUFBLE1BWWxCQyxZQVprQjtBQUFBLE1BWUpDLGVBWkk7O0FBQUEsbUJBYUtGLHNEQUFRLENBQUMsS0FBRCxDQWJiO0FBQUEsTUFhbEJHLE9BYmtCO0FBQUEsTUFhVEMsVUFiUzs7QUFlekIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1YsSUFBRCxFQUFVO0FBQzVCUyxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLG1FQUFXLENBQUNELFdBQVosQ0FBd0JWLElBQXhCLEVBQ0dZLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEJDLGFBQU8sQ0FBQ0MsR0FBUixhQUF3QkYsUUFBeEI7QUFEa0IsMkJBRVVBLFFBQVEsQ0FBQ0csSUFGbkI7QUFBQSxVQUVWQyxNQUZVLGtCQUVWQSxNQUZVO0FBQUEsVUFFRkMsT0FGRSxrQkFFRkEsT0FGRTs7QUFHbEIsVUFBSUQsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEJWLHVCQUFlLENBQUNXLE9BQUQsQ0FBZjtBQUNEOztBQUNELFVBQUlELE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2xCSCxlQUFPLENBQUNDLEdBQVIsV0FBc0JFLE1BQXRCO0FBQ0Q7O0FBQ0RSLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FYSCxXQVlTLFVBQUNVLEtBQUQsRUFBVztBQUNoQkwsYUFBTyxDQUFDQyxHQUFSLFVBQXFCSSxLQUFyQjtBQUNBVixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBZkg7QUFnQkQsR0FsQkQ7O0FBb0JBVyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxRQUFyQixDQUE4QixTQUE5QixDQUFKLEVBQThDO0FBQzVDZCxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEtBRkQsTUFFTyxJQUFJVyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxRQUFyQixDQUE4QixTQUE5QixDQUFKLEVBQThDO0FBQ25EZCxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FOUSxFQU1OLENBQUNWLElBQUQsQ0FOTSxDQUFUO0FBUUEsc0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFJRSxzRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxpQkFBUyxFQUFDLGlCQUFoQjtBQUFrQyxlQUFPLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBS0U7QUFDRSxZQUFJLEVBQUMsK0VBRFA7QUFFRSxXQUFHLEVBQUMsWUFGTjtBQUdFLGlCQUFTLEVBQUMseUVBSFo7QUFJRSxtQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBV0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBWUU7QUFDRSxZQUFJLEVBQUMsd0ZBRFA7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkYsZUFpQkU7QUFDRSxXQUFHLEVBQUMsb0ZBRE47QUFFRSxpQkFBUyxFQUFDLHlFQUZaO0FBR0UsbUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkYsZUF1QkU7QUFBQSxrQkFBUUUsT0FBTyxDQUFDRixJQUFELENBQVAsQ0FBY3lCLFFBQWQsQ0FBdUJDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUE2QkUsc0VBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCRixlQStCRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQXdDLGVBQVMsRUFBQyxXQUFsRDtBQUFBLDhCQUNFLHNFQUFDLHdDQUFEO0FBQUssY0FBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBYjtBQUF1QixZQUFJLEVBQUMsTUFBNUI7QUFBbUMsZUFBTyxFQUFDLFFBQTNDO0FBQW9ELGFBQUssRUFBQyxLQUExRDtBQUFBLCtCQUNFLHNFQUFDLHdDQUFEO0FBQUssWUFBRSxFQUFFLEVBQVQ7QUFBYSxZQUFFLEVBQUUsRUFBakI7QUFBQSxpQ0FDRSxzRUFBQyx3Q0FBRDtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUF5QixrQkFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBakM7QUFBQSxtQ0FDRSxzRUFBQyw2Q0FBRDtBQUFVLG9CQUFNLE1BQWhCO0FBQWlCLHFCQUFPLEVBQUVuQixPQUExQjtBQUFBLHdCQUNHRixZQUFZLENBQUNzQixNQUFiLEdBQXNCLENBQXRCLGdCQUNDO0FBQUEsd0NBQ0Usc0VBQUMsd0NBQUQ7QUFBSyxzQkFBSSxFQUFFLEVBQVg7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsY0FBZjtBQUFBLDRDQUNFO0FBQUssMkJBQUssRUFBRTtBQUFFQyxpQ0FBUyxFQUFFO0FBQWIsdUJBQVo7QUFBQSw2Q0FDRTtBQUNFLDJCQUFHLEVBQUMsK0JBRE47QUFFRSw2QkFBSyxFQUFFO0FBQUVDLGdDQUFNLEVBQUU7QUFBVjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBT0U7QUFBSywyQkFBSyxFQUFFO0FBQUVDLGdDQUFRLEVBQUU7QUFBWix1QkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFQRixlQVVFO0FBQUssMkJBQUssRUFBRTtBQUFFRixpQ0FBUyxFQUFFO0FBQWIsdUJBQVo7QUFBQSw2Q0FDRTtBQUNFLDJCQUFHLEVBQUMsK0JBRE47QUFFRSw2QkFBSyxFQUFFO0FBQUVDLGdDQUFNLEVBQUU7QUFBVjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFvQkUsc0VBQUMsd0NBQUQ7QUFBSyxzQkFBSSxFQUFFO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFwQkY7QUFBQSw4QkFERDtBQUFBO0FBd0JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFHLHlCQUFTLEVBQUMsYUFBYjtBQUFBLDBCQUE0QjVCLE9BQU8sQ0FBQ0YsSUFBRCxDQUFQLENBQWNnQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQTZERTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0RGLGVBOERFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5REYsZUErREU7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQTJCLGlCQUFLLEVBQUU7QUFBRUMsNkJBQWUsRUFBRTtBQUFuQixhQUFsQztBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9CRixlQXdHRSxzRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEdGO0FBQUEsa0JBREY7QUE0R0QsQ0F2SkQ7O0dBQU1wQyxZO1VBQ1dFLHFEOzs7S0FEWEYsWTtBQXlKU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW1wcmVzYXMuZjI1NTA3NjRiZDdmY2U0OTljNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIENvbGxhcHNlLCBTa2VsZXRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBNZW51RGVza3RvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW51RGVza3RvcFwiO1xyXG5pbXBvcnQgZXMgZnJvbSBcIi4uL2xhbmcvZXNcIjtcclxuaW1wb3J0IGVuIGZyb20gXCIuLi9sYW5nL2VuXCI7XHJcbmltcG9ydCBBcGlFbXByZXNhcyBmcm9tIFwiLi4vcGFnZXNTZXJ2aWNlcy9lbXByZXNhc1wiO1xyXG5cclxuY29uc3Qgc3R5bGVzQ3NzID0gY3NzLmdsb2JhbGBcclxuICAuU2VjdGlvbjAge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2hvbWUvZm9uZG9FbXByZXNhcy5wbmdcIik7XHJcbiAgfVxyXG5cclxuICAuYW50LWNvbGxhcHNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuYW50LWNvbGxhcHNlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogI2ZlZjRlNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYW50LWNvbGxhcHNlLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXI6IDFweCAjZmVmNGU0IHNvbGlkO1xyXG4gIH1cclxuICB0YWJsZSB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCAjZmVmNGU0IHNvbGlkO1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtZW1wcmVzYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCA0OSwgMzQsIDAuNSk7XHJcbiAgICBjb2xvcjogI2ZmZjRlNDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQYWdlRW1wcmVzYXMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGxldCBsYW5nID0gXCJlblwiO1xyXG4gIGlmIChyb3V0ZXIucXVlcnkubGFuZyA9PT0gXCJlblwiKSB7XHJcbiAgICBsYW5nID0gXCJlblwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsYW5nID0gXCJlc1wiO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RyaW5ncyA9IHsgZXMsIGVuIH07XHJcblxyXG4gIGNvbnN0IFtkYXRhRW1wcmVzYXMsIHNldERhdGFFbXByZXNhc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBnZXRFbXByZXNhcyA9IChsYW5nKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgQXBpRW1wcmVzYXMuZ2V0RW1wcmVzYXMobGFuZylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlYCwgcmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0IHsgY29kaWdvLCByZXN1bHRzIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICBzZXREYXRhRW1wcmVzYXMocmVzdWx0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2RpZ28gPT09IFwiMFwiKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgYCwgY29kaWdvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3JgLCBlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJsYW5nPWVzXCIpKSB7XHJcbiAgICAgIGdldEVtcHJlc2FzKFwiZXNcIik7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwibGFuZz1lblwiKSkge1xyXG4gICAgICBnZXRFbXByZXNhcyhcImVuXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtsYW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7c3R5bGVzQ3NzfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcblxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQm1ieHVQd1FhMmxjL0ZWekJjTko3VUF5SnhNNnd1cUlqNjF0THJjNHdTWDBzekgvRXYrbllSUnVXbG9sZmxmbFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtYjVrSHlYZ2NwYlpKTy90WTlVbDdrR2tmMVMwQ1d1S2NDRDM4bDhZa2VIOHo4UWpFMEdtVzFnWVU1UzlGT25KMFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG5cclxuICAgICAgICA8dGl0bGU+e3N0cmluZ3NbbGFuZ10uZW1wcmVzYXMucGFnZVRpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lbnVEZXNrdG9wIC8+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiN3JlbSAwIDAgMCBcIiB9fSBjbGFzc05hbWU9XCJTZWN0aW9uMCBcIj5cclxuICAgICAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwidG9wXCI+XHJcbiAgICAgICAgICA8Q29sIHhzPXsyMn0gbGc9ezEwfT5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJmb250XzIwXCIgZ3V0dGVyPXtbMjAsIDIwXX0+XHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIGFjdGl2ZSBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgIHtkYXRhRW1wcmVzYXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1lbXByZXNhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuL2Fzc2V0cy9pbWdzL2hvbWUvbGluZWExLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWxjb2hvbGVzIHkgYW5lam9zIG1vbmlnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ3RoXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9ob21lL2xpbmVhMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjRweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAvLyA8Q29sbGFwc2UgYWNjb3JkaW9uIGV4cGFuZEljb25Qb3NpdGlvbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIC8vICAge2RhdGFFbXByZXNhcy5tYXAoKGVtcHJlc2EpID0+IChcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIDxDb2xsYXBzZS5QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBoZWFkZXI9e2VtcHJlc2EudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIGtleT17ZW1wcmVzYS5pZH1cclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgY2xhc3NOYW1lPVwiZm9udF8yMFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPENvbCB4cz17MjR9IGxnPXs0fT5cclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYWx0PXtlbXByZXNhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlLyR7ZW1wcmVzYS5pbWFnZV9leHRlbnNpb259O2Jhc2U2NCwke2VtcHJlc2EuaW1hZ2VfYmFzZTY0fWB9XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezIwfT5cclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBfX2h0bWw6IGVtcHJlc2EuY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgLy8gICAgIDwvQ29sbGFwc2UuUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIC8vIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3N0cmluZ3NbbGFuZ10ubm9EYXRhfTwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMjUxNFwiIH19PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlRW1wcmVzYXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=