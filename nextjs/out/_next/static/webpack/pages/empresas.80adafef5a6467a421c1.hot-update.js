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













var stylesCss = new String(".Section0{background-image:url(\"/assets/imgs/home/fondoEmpresas.png\");}.ant-collapse{background-color:transparent;}.ant-collapse-header{color:#fef4e4 !important;}.ant-collapse-content{background-color:rgba(255,255,255,0.4) !important;}table{border:1px #fef4e4 solid;}table td{border:1px #fef4e4 solid;padding:0.3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxlbXByZXNhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXNEIsQUFHaUUsQUFJL0IsQUFHSixBQUc0QixBQUk1QixBQUdBLHlCQVQzQixBQU9BLEFBR2lCLElBYmpCLFdBY0EsVUFSQSxVQVZBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxlbXByZXNhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIENvbGxhcHNlLCBTa2VsZXRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBNZW51RGVza3RvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW51RGVza3RvcFwiO1xyXG5pbXBvcnQgZXMgZnJvbSBcIi4uL2xhbmcvZXNcIjtcclxuaW1wb3J0IGVuIGZyb20gXCIuLi9sYW5nL2VuXCI7XHJcbmltcG9ydCBBcGlFbXByZXNhcyBmcm9tIFwiLi4vcGFnZXNTZXJ2aWNlcy9lbXByZXNhc1wiO1xyXG5cclxuY29uc3Qgc3R5bGVzQ3NzID0gY3NzLmdsb2JhbGBcclxuICAuU2VjdGlvbjAge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2hvbWUvZm9uZG9FbXByZXNhcy5wbmdcIik7XHJcbiAgfVxyXG5cclxuICAuYW50LWNvbGxhcHNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuYW50LWNvbGxhcHNlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogI2ZlZjRlNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYW50LWNvbGxhcHNlLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXI6IDFweCAjZmVmNGU0IHNvbGlkO1xyXG4gIH1cclxuICB0YWJsZSB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCAjZmVmNGU0IHNvbGlkO1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBhZ2VFbXByZXNhcyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgbGV0IGxhbmcgPSBcImVuXCI7XHJcbiAgaWYgKHJvdXRlci5xdWVyeS5sYW5nID09PSBcImVuXCIpIHtcclxuICAgIGxhbmcgPSBcImVuXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxhbmcgPSBcImVzXCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdHJpbmdzID0geyBlcywgZW4gfTtcclxuXHJcbiAgY29uc3QgW2RhdGFFbXByZXNhcywgc2V0RGF0YUVtcHJlc2FzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGdldEVtcHJlc2FzID0gKGxhbmcpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBBcGlFbXByZXNhcy5nZXRFbXByZXNhcyhsYW5nKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2VgLCByZXNwb25zZSk7XHJcbiAgICAgICAgY29uc3QgeyBjb2RpZ28sIHJlc3VsdHMgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgIHNldERhdGFFbXByZXNhcyhyZXN1bHRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIwXCIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBgLCBjb2RpZ28pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcmAsIGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcImxhbmc9ZXNcIikpIHtcclxuICAgICAgZ2V0RW1wcmVzYXMoXCJlc1wiKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJsYW5nPWVuXCIpKSB7XHJcbiAgICAgIGdldEVtcHJlc2FzKFwiZW5cIik7XHJcbiAgICB9XHJcbiAgfSwgW2xhbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtzdHlsZXNDc3N9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuXHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CbWJ4dVB3UWEybGMvRlZ6QmNOSjdVQXlKeE02d3VxSWo2MXRMcmM0d1NYMHN6SC9FdituWVJSdVdsb2xmbGZsXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1iNWtIeVhnY3BiWkpPL3RZOVVsN2tHa2YxUzBDV3VLY0NEMzhsOFlrZUg4ejhRakUwR21XMWdZVTVTOUZPbkowXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgIDx0aXRsZT57c3RyaW5nc1tsYW5nXS5lbXByZXNhcy5wYWdlVGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVudURlc2t0b3AgLz5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI3cmVtIDAgMCAwIFwiIH19IGNsYXNzTmFtZT1cIlNlY3Rpb24wIFwiPlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0gdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJ0b3BcIj5cclxuICAgICAgICAgIDxDb2wgeHM9ezIyfSBsZz17MTV9PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImZvbnRfMjBcIj5cclxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiBhY3RpdmUgbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhRW1wcmVzYXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PmpvbGE8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAvLyA8Q29sbGFwc2UgYWNjb3JkaW9uIGV4cGFuZEljb25Qb3NpdGlvbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB7ZGF0YUVtcHJlc2FzLm1hcCgoZW1wcmVzYSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICA8Q29sbGFwc2UuUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBoZWFkZXI9e2VtcHJlc2EudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAga2V5PXtlbXByZXNhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGNsYXNzTmFtZT1cImZvbnRfMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPFJvdyBndXR0ZXI9ezIwfT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBhbHQ9e2VtcHJlc2EudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS8ke2VtcHJlc2EuaW1hZ2VfZXh0ZW5zaW9ufTtiYXNlNjQsJHtlbXByZXNhLmltYWdlX2Jhc2U2NH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezIwfT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBfX2h0bWw6IGVtcHJlc2EuY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICA8L0NvbGxhcHNlLlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntzdHJpbmdzW2xhbmddLm5vRGF0YX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjM2QyNTE0XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VFbXByZXNhcztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\pages\\\\empresas.js */");
stylesCss.__hash = "2275262115";

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
        lineNumber: 85,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: strings[lang].empresas.pageTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
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
          lg: 15,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
            className: "font_20",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
              span: 24,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Skeleton"], {
                active: true,
                loading: loading,
                children: dataEmpresas.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
                  children: "jola"
                }, void 0, false) :
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
                  lineNumber: 146,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
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
              lineNumber: 158,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wcmVzYXMuanMiXSwibmFtZXMiOlsic3R5bGVzQ3NzIiwiUGFnZUVtcHJlc2FzIiwicm91dGVyIiwidXNlUm91dGVyIiwibGFuZyIsInF1ZXJ5Iiwic3RyaW5ncyIsImVzIiwiZW4iLCJ1c2VTdGF0ZSIsImRhdGFFbXByZXNhcyIsInNldERhdGFFbXByZXNhcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0RW1wcmVzYXMiLCJBcGlFbXByZXNhcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY29kaWdvIiwicmVzdWx0cyIsImVycm9yIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5jbHVkZXMiLCJlbXByZXNhcyIsInBhZ2VUaXRsZSIsInBhZGRpbmciLCJsZW5ndGgiLCJub0RhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxTQUFTLHkrUUFBZjs7O0FBd0JBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDekIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQUlDLElBQUksR0FBRyxJQUFYOztBQUNBLE1BQUlGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRCxJQUFiLEtBQXNCLElBQTFCLEVBQWdDO0FBQzlCQSxRQUFJLEdBQUcsSUFBUDtBQUNELEdBRkQsTUFFTztBQUNMQSxRQUFJLEdBQUcsSUFBUDtBQUNEOztBQUVELE1BQU1FLE9BQU8sR0FBRztBQUFFQyxNQUFFLEVBQUZBLGdEQUFGO0FBQU1DLE1BQUUsRUFBRkEsZ0RBQUVBO0FBQVIsR0FBaEI7O0FBVnlCLGtCQVllQyxzREFBUSxDQUFDLEVBQUQsQ0FadkI7QUFBQSxN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aUJBQUssRUFBRTtBQUFFQyw2QkFBZSxFQUFFO0FBQW5CLGFBQWxDO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0JGLGVBcUZFLHNFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyRkY7QUFBQSxrQkFERjtBQXlGRCxDQXBJRDs7R0FBTWpDLFk7VUFDV0UscUQ7OztLQURYRixZO0FBc0lTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXByZXNhcy44MGFkYWZlZjVhNjQ2N2E0MjFjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQ29sbGFwc2UsIFNrZWxldG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IE1lbnVEZXNrdG9wIGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVEZXNrdG9wXCI7XHJcbmltcG9ydCBlcyBmcm9tIFwiLi4vbGFuZy9lc1wiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uL2xhbmcvZW5cIjtcclxuaW1wb3J0IEFwaUVtcHJlc2FzIGZyb20gXCIuLi9wYWdlc1NlcnZpY2VzL2VtcHJlc2FzXCI7XHJcblxyXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYFxyXG4gIC5TZWN0aW9uMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZ3MvaG9tZS9mb25kb0VtcHJlc2FzLnBuZ1wiKTtcclxuICB9XHJcblxyXG4gIC5hbnQtY29sbGFwc2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5hbnQtY29sbGFwc2UtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjZmVmNGU0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hbnQtY29sbGFwc2UtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlcjogMXB4ICNmZWY0ZTQgc29saWQ7XHJcbiAgfVxyXG4gIHRhYmxlIHRkIHtcclxuICAgIGJvcmRlcjogMXB4ICNmZWY0ZTQgc29saWQ7XHJcbiAgICBwYWRkaW5nOiAwLjNyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUGFnZUVtcHJlc2FzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBsZXQgbGFuZyA9IFwiZW5cIjtcclxuICBpZiAocm91dGVyLnF1ZXJ5LmxhbmcgPT09IFwiZW5cIikge1xyXG4gICAgbGFuZyA9IFwiZW5cIjtcclxuICB9IGVsc2Uge1xyXG4gICAgbGFuZyA9IFwiZXNcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0cmluZ3MgPSB7IGVzLCBlbiB9O1xyXG5cclxuICBjb25zdCBbZGF0YUVtcHJlc2FzLCBzZXREYXRhRW1wcmVzYXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZ2V0RW1wcmVzYXMgPSAobGFuZykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIEFwaUVtcHJlc2FzLmdldEVtcHJlc2FzKGxhbmcpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZWAsIHJlc3BvbnNlKTtcclxuICAgICAgICBjb25zdCB7IGNvZGlnbywgcmVzdWx0cyB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBpZiAoY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgc2V0RGF0YUVtcHJlc2FzKHJlc3VsdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29kaWdvID09PSBcIjBcIikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIGAsIGNvZGlnbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yYCwgZXJyb3IpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwibGFuZz1lc1wiKSkge1xyXG4gICAgICBnZXRFbXByZXNhcyhcImVzXCIpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcImxhbmc9ZW5cIikpIHtcclxuICAgICAgZ2V0RW1wcmVzYXMoXCJlblwiKTtcclxuICAgIH1cclxuICB9LCBbbGFuZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge3N0eWxlc0Nzc31cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUJtYnh1UHdRYTJsYy9GVnpCY05KN1VBeUp4TTZ3dXFJajYxdExyYzR3U1gwc3pIL0V2K25ZUlJ1V2xvbGZsZmxcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrTWluY2hvOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWI1a0h5WGdjcGJaSk8vdFk5VWw3a0drZjFTMENXdUtjQ0QzOGw4WWtlSDh6OFFqRTBHbVcxZ1lVNVM5Rk9uSjBcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuXHJcbiAgICAgICAgPHRpdGxlPntzdHJpbmdzW2xhbmddLmVtcHJlc2FzLnBhZ2VUaXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZW51RGVza3RvcCAvPlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjdyZW0gMCAwIDAgXCIgfX0gY2xhc3NOYW1lPVwiU2VjdGlvbjAgXCI+XHJcbiAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMTZdfSB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cInRvcFwiPlxyXG4gICAgICAgICAgPENvbCB4cz17MjJ9IGxnPXsxNX0+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZm9udF8yMFwiPlxyXG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIGFjdGl2ZSBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAge2RhdGFFbXByZXNhcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+am9sYTwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDxDb2xsYXBzZSBhY2NvcmRpb24gZXhwYW5kSWNvblBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHtkYXRhRW1wcmVzYXMubWFwKChlbXByZXNhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxDb2xsYXBzZS5QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGhlYWRlcj17ZW1wcmVzYS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBrZXk9e2VtcHJlc2EuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgY2xhc3NOYW1lPVwiZm9udF8yMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgID5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICA8Um93IGd1dHRlcj17MjB9PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPENvbCB4cz17MjR9IGxnPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFsdD17ZW1wcmVzYS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlLyR7ZW1wcmVzYS5pbWFnZV9leHRlbnNpb259O2Jhc2U2NCwke2VtcHJlc2EuaW1hZ2VfYmFzZTY0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MjB9PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIF9faHRtbDogZW1wcmVzYS5jb250ZW50X2h0bWwsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvQ29sbGFwc2UuUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICApKX1cclxuICAgICAgICAgICAgICAgICAgICAvLyA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3N0cmluZ3NbbGFuZ10ubm9EYXRhfTwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzZDI1MTRcIiB9fT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUVtcHJlc2FzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9