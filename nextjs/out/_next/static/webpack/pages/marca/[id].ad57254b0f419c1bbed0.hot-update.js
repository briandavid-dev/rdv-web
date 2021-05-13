webpackHotUpdate_N_E("pages/marca/[id]",{

/***/ "./pages/marca/[id].js":
/*!*****************************!*\
  !*** ./pages/marca/[id].js ***!
  \*****************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_MenuDesktop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/MenuDesktop */ "./components/MenuDesktop/index.js");
/* harmony import */ var _lang_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lang/es */ "./lang/es.js");
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lang/en */ "./lang/en.js");
/* harmony import */ var _pagesServices_empresas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pagesServices/empresas */ "./pagesServices/empresas.js");
/* harmony import */ var _components_panel_Empresas_Productos_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/panel/Empresas/Productos/services */ "./components/panel/Empresas/Productos/services.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\pages\\marca\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();















var stylesCss = new String("body{background-color:#553c28;}.Section0{background-color:#553c28;}.card-empresa-info,table{background-color:rgba(68,49,34,0.8);border-radius:1px;border:0.5px rgba(68,49,34,0.5) solid;color:#fff4e4;padding:2rem;font-size:1rem;}.card-empresa-premios{background-color:rgba(68,49,34,0.8);border-color:rgba(68,49,34,0.8);color:#fff4e4;}.card-empresa-premios:hover{background-color:rgba(68,49,34,0.8);border-color:rgba(68,49,34,0.5);color:#fff4e4;}.card-empresa-premios:focus{background-color:rgba(68,49,34,0.8);border-color:rgba(68,49,34,0.5);color:#fff4e4;}.card-botellita{background-color:rgba(68,49,34,0.8);}.card-botellita-producto-uno{color:#ffda44;}.card-botellita-producto-dos{font-size:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxtYXJjYVxcW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhNEIsQUFHOEIsQUFHQSxBQUtjLEFBU0EsQUFLQSxBQUtBLEFBTUEsQUFHekIsQUFHQyxjQUZqQixDQUdBLFVBdkNBLEFBR0EsV0FLb0IsQUFTaUIsQUFLQSxBQUtBLEFBTXJDLGtCQXhCMkMsY0FTM0IsQUFLQSxBQUtBLGNBVGhCLEFBS0EsQUFLQSxVQW5CZ0IsY0FDRCxhQUNFLGVBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxtYXJjYVxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IE1lbnVEZXNrdG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lbnVEZXNrdG9wXCI7XHJcbmltcG9ydCBlcyBmcm9tIFwiLi4vLi4vbGFuZy9lc1wiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uLy4uL2xhbmcvZW5cIjtcclxuaW1wb3J0IEFwaUVtcHJlc2FzIGZyb20gXCIuLi8uLi9wYWdlc1NlcnZpY2VzL2VtcHJlc2FzXCI7XHJcbmltcG9ydCBBcGlQcm9kdWN0b3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFuZWwvRW1wcmVzYXMvUHJvZHVjdG9zL3NlcnZpY2VzXCI7XHJcblxyXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1M2MyODtcclxuICB9XHJcbiAgLlNlY3Rpb24wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTNjMjg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1lbXByZXNhLWluZm8sXHJcbiAgdGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYm9yZGVyOiAwLjVweCByZ2JhKDY4LCA0OSwgMzQsIDAuNSkgc29saWQ7XHJcbiAgICBjb2xvcjogI2ZmZjRlNDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1lbXByZXNhLXByZW1pb3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDY4LCA0OSwgMzQsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjRlNDtcclxuICB9XHJcbiAgLmNhcmQtZW1wcmVzYS1wcmVtaW9zOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDQ5LCAzNCwgMC44KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjUpO1xyXG4gICAgY29sb3I6ICNmZmY0ZTQ7XHJcbiAgfVxyXG4gIC5jYXJkLWVtcHJlc2EtcHJlbWlvczpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCA0OSwgMzQsIDAuOCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNjgsIDQ5LCAzNCwgMC41KTtcclxuICAgIGNvbG9yOiAjZmZmNGU0O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm90ZWxsaXRhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDQ5LCAzNCwgMC44KTtcclxuICB9XHJcbiAgLmNhcmQtYm90ZWxsaXRhLXByb2R1Y3RvLXVubyB7XHJcbiAgICBjb2xvcjogI2ZmZGE0NDtcclxuICB9XHJcbiAgLmNhcmQtYm90ZWxsaXRhLXByb2R1Y3RvLWRvcyB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUGFnZU5vdGljaWEgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCwgbGFuZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAvLyBsZXQgbGFuZyA9IFwiZW5cIjtcclxuICAvLyBpZiAocm91dGVyLnF1ZXJ5LmxhbmcgPT09IFwiZW5cIikge1xyXG4gIC8vICAgbGFuZyA9IFwiZW5cIjtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgbGFuZyA9IFwiZXNcIjtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IHN0cmluZ3MgPSB7IGVzLCBlbiB9O1xyXG5cclxuICBjb25zdCBbZW1wcmVzYSwgc2V0RW1wcmVzYV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbWFnZV9iYXNlNjQ6IFwiXCIsXHJcbiAgICBpbWFnZV9leHRlbnNpb246IFwiXCIsXHJcbiAgICBjb250ZW50X2h0bWw6IFwiXCIsXHJcbiAgICB0aXRsZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3Byb2R1Y3Rvcywgc2V0UHJvZHVjdG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0TWFyY2EgPSAoKSA9PiB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgQXBpRW1wcmVzYXMuZ2V0RW1wcmVzYShpZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgY29kaWdvLCBlbXByZXNhIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgc2V0RW1wcmVzYSh7XHJcbiAgICAgICAgICAgICAgaW1hZ2VfYmFzZTY0OiBlbXByZXNhLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICBpbWFnZV9leHRlbnNpb246IGVtcHJlc2EuaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnRfaHRtbDogZW1wcmVzYS5jb250ZW50X2h0bWwsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGVtcHJlc2EudGl0bGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcmAsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQXBpRW1wcmVzYXMuZ2V0RW1wcmVzYShpZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2RpZ28sIGVtcHJlc2EgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgIHNldEVtcHJlc2Eoe1xyXG4gICAgICAgICAgICBpbWFnZV9iYXNlNjQ6IGVtcHJlc2EuaW1hZ2VfYmFzZTY0LFxyXG4gICAgICAgICAgICBpbWFnZV9leHRlbnNpb246IGVtcHJlc2EuaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICBjb250ZW50X2h0bWw6IGVtcHJlc2EuY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICB0aXRsZTogZW1wcmVzYS50aXRsZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvL1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcmAsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgQXBpUHJvZHVjdG9zLmdldFByb2R1Y3RvcyhpZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgY29kaWdvLCByZXN1bHRzIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgc2V0UHJvZHVjdG9zKHJlc3VsdHMpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcmAsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbaWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtzdHlsZXNDc3N9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuXHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CbWJ4dVB3UWEybGMvRlZ6QmNOSjdVQXlKeE02d3VxSWo2MXRMcmM0d1NYMHN6SC9FdituWVJSdVdsb2xmbGZsXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1iNWtIeVhnY3BiWkpPL3RZOVVsN2tHa2YxUzBDV3VLY0NEMzhsOFlrZUg4ejhRakUwR21XMWdZVTVTOUZPbkowXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgIDx0aXRsZT57ZW1wcmVzYS50aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8TWVudURlc2t0b3AgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsaWRhX21vYmlsZSBTZWN0aW9uMFwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI3cmVtIDAgMnJlbSAwIFwiIH19PlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMTZdfSB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cInRvcFwiPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsyMn0gbGc9ezE1fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZW1wcmVzYS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY2Npb25fdGl0dWxvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvaG9tZS9saW5lYTIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2VtcHJlc2EudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvaG9tZS9saW5lYTEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17ZW1wcmVzYS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlLyR7ZW1wcmVzYS5pbWFnZV9leHRlbnNpb259O2Jhc2U2NCwke2VtcHJlc2EuaW1hZ2VfYmFzZTY0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiwgbWF4V2lkdGg6IFwiODAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGVtcHJlc2EuY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY2FyZC1lbXByZXNhLXByZW1pb3Mgem9vbS1lbHJvblwiPlxyXG4gICAgICAgICAgICAgICAgICBWRVIgUFJFTUlPU1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0b3MubWFwKChwcm9kdWN0bykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgY2FyZC1ib3RlbGxpdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0by5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlLyR7cHJvZHVjdG8uaW1hZ2VfZXh0ZW5zaW9ufTtiYXNlNjQsJHtwcm9kdWN0by5pbWFnZV9iYXNlNjR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBcIiwgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvdGVsbGl0YS1wcm9kdWN0by11bm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdG86XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib3RlbGxpdGEtcHJvZHVjdG8tZG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0by5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBwcm9kdWN0by5jb250ZW50X2h0bWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMjUxNFwiIH19PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsaWRhX2Rlc2t0b3AgZm9udF8yMCBTZWN0aW9uMFwiPlxyXG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3NOYW1lPVwiU2VjdGlvbjBcIj5cclxuICAgICAgICAgIDxDb2wgeHM9ezIyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNThweFwiIH19PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWVtcHJlc2EtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntlbXByZXNhLnRpdGxlfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgYWx0PXtlbXByZXNhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlLyR7ZW1wcmVzYS5pbWFnZV9leHRlbnNpb259O2Jhc2U2NCwke2VtcHJlc2EuaW1hZ2VfYmFzZTY0fWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwMHB4XCIsIG1heFdpZHRoOiBcIjgwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGVtcHJlc2EuY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkLWVtcHJlc2EtcHJlbWlvcyB6b29tLWVscm9uXCI+XHJcbiAgICAgICAgICAgICAgICBWRVIgUFJFTUlPU1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMjUxNFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RpY2lhO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\pages\\\\marca\\\\[id].js */");
stylesCss.__hash = "2998704064";

var PageNoticia = function PageNoticia() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var _router$query = router.query,
      id = _router$query.id,
      lang = _router$query.lang; // let lang = "en";
  // if (router.query.lang === "en") {
  //   lang = "en";
  // } else {
  //   lang = "es";
  // }
  // const strings = { es, en };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    image_base64: "",
    image_extension: "",
    content_html: "",
    title: ""
  }),
      empresa = _useState[0],
      setEmpresa = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      productos = _useState2[0],
      setProductos = _useState2[1];

  var getMarca = function getMarca() {
    if (id) {
      _pagesServices_empresas__WEBPACK_IMPORTED_MODULE_10__["default"].getEmpresa(id).then(function (response) {
        var _response$data = response.data,
            codigo = _response$data.codigo,
            empresa = _response$data.empresa;

        if (codigo === "1") {
          setEmpresa({
            image_base64: empresa.image_base64,
            image_extension: empresa.image_extension,
            content_html: empresa.content_html,
            title: empresa.title
          });
        } else {//
        }
      })["catch"](function (error) {
        console.log("error", error);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _pagesServices_empresas__WEBPACK_IMPORTED_MODULE_10__["default"].getEmpresa(id).then(function (response) {
      var _response$data2 = response.data,
          codigo = _response$data2.codigo,
          empresa = _response$data2.empresa;

      if (codigo === "1") {
        setEmpresa({
          image_base64: empresa.image_base64,
          image_extension: empresa.image_extension,
          content_html: empresa.content_html,
          title: empresa.title
        });
      } else {//
      }
    })["catch"](function (error) {
      console.log("error", error);
    });
  }, [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (id) {
      _components_panel_Empresas_Productos_services__WEBPACK_IMPORTED_MODULE_11__["default"].getProductos(id).then(function (response) {
        var _response$data3 = response.data,
            codigo = _response$data3.codigo,
            results = _response$data3.results;

        if (codigo === "1") {
          setProductos(results);
        } else {//
        }
      })["catch"](function (error) {
        console.log("error", error);
      });
    }
  }, [id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("title", {
        children: empresa.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: "valida_mobile Section0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        style: {
          padding: "7rem 0 2rem 0 "
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
          gutter: [16, 16],
          type: "flex",
          justify: "center",
          align: "top",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
            xs: 22,
            lg: 15,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "card-empresa-info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                className: "seccion_titulo",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                  src: "/assets/imgs/home/linea2.png",
                  style: {
                    height: "4px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
                  className: "text-center",
                  children: empresa.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 19
                }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                  src: "/assets/imgs/home/linea1.png",
                  style: {
                    height: "4px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                  alt: empresa.title,
                  src: "data:image/".concat(empresa.image_extension, ";base64,").concat(empresa.image_base64),
                  style: {
                    width: "300px",
                    maxWidth: "80%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                  __html: empresa.content_html
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                className: "card-empresa-premios zoom-elron",
                children: "VER PREMIOS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
              children: productos.map(function (producto) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                    span: 4,
                    className: "text-center card-botellita",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                      alt: producto.name,
                      src: "data:image/".concat(producto.image_extension, ";base64,").concat(producto.image_base64),
                      style: {
                        width: "50",
                        maxWidth: "100%"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                    span: 20,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "card-botellita-producto-uno",
                      children: "Producto:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "card-botellita-producto-dos",
                      children: producto.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      dangerouslySetInnerHTML: {
                        __html: producto.content_html
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                    span: 24,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "col-md-12",
            style: {
              backgroundColor: "#3d2514"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: "valida_desktop font_20 Section0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        type: "flex",
        justify: "center",
        className: "Section0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xs: 22,
          style: {
            marginTop: "58px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "card-empresa-info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              className: "text-center",
              children: empresa.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                alt: empresa.title,
                src: "data:image/".concat(empresa.image_extension, ";base64,").concat(empresa.image_base64),
                style: {
                  width: "300px",
                  maxWidth: "80%"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              dangerouslySetInnerHTML: {
                __html: empresa.content_html
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              className: "card-empresa-premios zoom-elron",
              children: "VER PREMIOS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "col-md-12",
              style: {
                backgroundColor: "#3d2514"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(PageNoticia, "Ly1hSeshCfAmh7xVAMmMRPoUxO8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = PageNoticia;
/* harmony default export */ __webpack_exports__["default"] = (PageNoticia);

var _c;

$RefreshReg$(_c, "PageNoticia");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFyY2EvLmpzIl0sIm5hbWVzIjpbInN0eWxlc0NzcyIsIlBhZ2VOb3RpY2lhIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJpZCIsImxhbmciLCJ1c2VTdGF0ZSIsImltYWdlX2Jhc2U2NCIsImltYWdlX2V4dGVuc2lvbiIsImNvbnRlbnRfaHRtbCIsInRpdGxlIiwiZW1wcmVzYSIsInNldEVtcHJlc2EiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJnZXRNYXJjYSIsIkFwaUVtcHJlc2FzIiwiZ2V0RW1wcmVzYSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb2RpZ28iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJBcGlQcm9kdWN0b3MiLCJnZXRQcm9kdWN0b3MiLCJyZXN1bHRzIiwicGFkZGluZyIsImhlaWdodCIsIndpZHRoIiwibWF4V2lkdGgiLCJfX2h0bWwiLCJtYXAiLCJwcm9kdWN0byIsIm5hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsU0FBUywybWNBQWY7OztBQTZDQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEd0Isc0JBRUhELE1BQU0sQ0FBQ0UsS0FGSjtBQUFBLE1BRWhCQyxFQUZnQixpQkFFaEJBLEVBRmdCO0FBQUEsTUFFWkMsSUFGWSxpQkFFWkEsSUFGWSxFQUl4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFYd0Isa0JBYU1DLHNEQUFRLENBQUM7QUFDckNDLGdCQUFZLEVBQUUsRUFEdUI7QUFFckNDLG1CQUFlLEVB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QUFLLEVBQUUsT0FBVDtBQUFrQkMsMEJBQVEsRUFBRTtBQUE1QjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBV0U7QUFDRSxxQ0FBdUIsRUFBRTtBQUN2QkMsc0JBQU0sRUFBRXRCLE9BQU8sQ0FBQ0Y7QUFETztBQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQW1CRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFLHNFQUFDLDJDQUFEO0FBQVEsdUJBQVMsRUFBQyxpQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUEyQkU7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQTJCLG1CQUFLLEVBQUU7QUFBRTRCLCtCQUFlLEVBQUU7QUFBbkIsZUFBbEM7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkhGLGVBeUpFLHNFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6SkY7QUFBQSxrQkFERjtBQTZKRCxDQTlPRDs7R0FBTXJDLFc7VUFDV0UscUQ7OztLQURYRixXO0FBZ1BTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXJjYS9baWRdLmFkNTcyNTRiMGY0MTljMWJiZWQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQ2FyZCwgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBNZW51RGVza3RvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZW51RGVza3RvcFwiO1xyXG5pbXBvcnQgZXMgZnJvbSBcIi4uLy4uL2xhbmcvZXNcIjtcclxuaW1wb3J0IGVuIGZyb20gXCIuLi8uLi9sYW5nL2VuXCI7XHJcbmltcG9ydCBBcGlFbXByZXNhcyBmcm9tIFwiLi4vLi4vcGFnZXNTZXJ2aWNlcy9lbXByZXNhc1wiO1xyXG5pbXBvcnQgQXBpUHJvZHVjdG9zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhbmVsL0VtcHJlc2FzL1Byb2R1Y3Rvcy9zZXJ2aWNlc1wiO1xyXG5cclxuY29uc3Qgc3R5bGVzQ3NzID0gY3NzLmdsb2JhbGBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTNjMjg7XHJcbiAgfVxyXG4gIC5TZWN0aW9uMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTUzYzI4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtZW1wcmVzYS1pbmZvLFxyXG4gIHRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDQ5LCAzNCwgMC44KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIGJvcmRlcjogMC41cHggcmdiYSg2OCwgNDksIDM0LCAwLjUpIHNvbGlkO1xyXG4gICAgY29sb3I6ICNmZmY0ZTQ7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtZW1wcmVzYS1wcmVtaW9zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDQ5LCAzNCwgMC44KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY0ZTQ7XHJcbiAgfVxyXG4gIC5jYXJkLWVtcHJlc2EtcHJlbWlvczpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCA0OSwgMzQsIDAuOCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNjgsIDQ5LCAzNCwgMC41KTtcclxuICAgIGNvbG9yOiAjZmZmNGU0O1xyXG4gIH1cclxuICAuY2FyZC1lbXByZXNhLXByZW1pb3M6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDY4LCA0OSwgMzQsIDAuNSk7XHJcbiAgICBjb2xvcjogI2ZmZjRlNDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWJvdGVsbGl0YSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCA0OSwgMzQsIDAuOCk7XHJcbiAgfVxyXG4gIC5jYXJkLWJvdGVsbGl0YS1wcm9kdWN0by11bm8ge1xyXG4gICAgY29sb3I6ICNmZmRhNDQ7XHJcbiAgfVxyXG4gIC5jYXJkLWJvdGVsbGl0YS1wcm9kdWN0by1kb3Mge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBhZ2VOb3RpY2lhID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQsIGxhbmcgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgLy8gbGV0IGxhbmcgPSBcImVuXCI7XHJcbiAgLy8gaWYgKHJvdXRlci5xdWVyeS5sYW5nID09PSBcImVuXCIpIHtcclxuICAvLyAgIGxhbmcgPSBcImVuXCI7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIGxhbmcgPSBcImVzXCI7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCBzdHJpbmdzID0geyBlcywgZW4gfTtcclxuXHJcbiAgY29uc3QgW2VtcHJlc2EsIHNldEVtcHJlc2FdID0gdXNlU3RhdGUoe1xyXG4gICAgaW1hZ2VfYmFzZTY0OiBcIlwiLFxyXG4gICAgaW1hZ2VfZXh0ZW5zaW9uOiBcIlwiLFxyXG4gICAgY29udGVudF9odG1sOiBcIlwiLFxyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtwcm9kdWN0b3MsIHNldFByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGdldE1hcmNhID0gKCkgPT4ge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIEFwaUVtcHJlc2FzLmdldEVtcHJlc2EoaWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGNvZGlnbywgZW1wcmVzYSB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHNldEVtcHJlc2Eoe1xyXG4gICAgICAgICAgICAgIGltYWdlX2Jhc2U2NDogZW1wcmVzYS5pbWFnZV9iYXNlNjQsXHJcbiAgICAgICAgICAgICAgaW1hZ2VfZXh0ZW5zaW9uOiBlbXByZXNhLmltYWdlX2V4dGVuc2lvbixcclxuICAgICAgICAgICAgICBjb250ZW50X2h0bWw6IGVtcHJlc2EuY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBlbXByZXNhLnRpdGxlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3JgLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFwaUVtcHJlc2FzLmdldEVtcHJlc2EoaWQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29kaWdvLCBlbXByZXNhIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICBzZXRFbXByZXNhKHtcclxuICAgICAgICAgICAgaW1hZ2VfYmFzZTY0OiBlbXByZXNhLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgaW1hZ2VfZXh0ZW5zaW9uOiBlbXByZXNhLmltYWdlX2V4dGVuc2lvbixcclxuICAgICAgICAgICAgY29udGVudF9odG1sOiBlbXByZXNhLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgdGl0bGU6IGVtcHJlc2EudGl0bGUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3JgLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIEFwaVByb2R1Y3Rvcy5nZXRQcm9kdWN0b3MoaWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGNvZGlnbywgcmVzdWx0cyB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RvcyhyZXN1bHRzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3JgLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7c3R5bGVzQ3NzfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcblxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQm1ieHVQd1FhMmxjL0ZWekJjTko3VUF5SnhNNnd1cUlqNjF0THJjNHdTWDBzekgvRXYrbllSUnVXbG9sZmxmbFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtYjVrSHlYZ2NwYlpKTy90WTlVbDdrR2tmMVMwQ1d1S2NDRDM4bDhZa2VIOHo4UWpFMEdtVzFnWVU1UzlGT25KMFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG5cclxuICAgICAgICA8dGl0bGU+e2VtcHJlc2EudGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPE1lbnVEZXNrdG9wIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbGlkYV9tb2JpbGUgU2VjdGlvbjBcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiN3JlbSAwIDJyZW0gMCBcIiB9fT5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0gdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJ0b3BcIj5cclxuICAgICAgICAgICAgPENvbCB4cz17MjJ9IGxnPXsxNX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWVtcHJlc2EtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNjaW9uX3RpdHVsb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2hvbWUvbGluZWEyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjRweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntlbXByZXNhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2hvbWUvbGluZWExLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjRweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2VtcHJlc2EudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS8ke2VtcHJlc2EuaW1hZ2VfZXh0ZW5zaW9ufTtiYXNlNjQsJHtlbXByZXNhLmltYWdlX2Jhc2U2NH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwMHB4XCIsIG1heFdpZHRoOiBcIjgwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBlbXByZXNhLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImNhcmQtZW1wcmVzYS1wcmVtaW9zIHpvb20tZWxyb25cIj5cclxuICAgICAgICAgICAgICAgICAgVkVSIFBSRU1JT1NcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdG9zLm1hcCgocHJvZHVjdG8pID0+IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGNhcmQtYm90ZWxsaXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdG8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS8ke3Byb2R1Y3RvLmltYWdlX2V4dGVuc2lvbn07YmFzZTY0LCR7cHJvZHVjdG8uaW1hZ2VfYmFzZTY0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwXCIsIG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezIwfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib3RlbGxpdGEtcHJvZHVjdG8tdW5vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RvOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm90ZWxsaXRhLXByb2R1Y3RvLWRvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdG8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogcHJvZHVjdG8uY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzZDI1MTRcIiB9fT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbGlkYV9kZXNrdG9wIGZvbnRfMjAgU2VjdGlvbjBcIj5cclxuICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzTmFtZT1cIlNlY3Rpb24wXCI+XHJcbiAgICAgICAgICA8Q29sIHhzPXsyMn0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjU4cHhcIiB9fT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1lbXByZXNhLWluZm9cIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57ZW1wcmVzYS50aXRsZX08L2gxPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGFsdD17ZW1wcmVzYS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS8ke2VtcHJlc2EuaW1hZ2VfZXh0ZW5zaW9ufTtiYXNlNjQsJHtlbXByZXNhLmltYWdlX2Jhc2U2NH1gfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMDBweFwiLCBtYXhXaWR0aDogXCI4MCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgX19odG1sOiBlbXByZXNhLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY2FyZC1lbXByZXNhLXByZW1pb3Mgem9vbS1lbHJvblwiPlxyXG4gICAgICAgICAgICAgICAgVkVSIFBSRU1JT1NcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzZDI1MTRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlTm90aWNpYTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==