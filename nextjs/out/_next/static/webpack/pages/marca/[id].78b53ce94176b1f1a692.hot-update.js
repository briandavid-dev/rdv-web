webpackHotUpdate_N_E("pages/marca/[id]",{

/***/ "./components/panel/Empresas/Productos/services.js":
/*!*********************************************************!*\
  !*** ./components/panel/Empresas/Productos/services.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/request */ "./config/request.js");

var api = {};

api.getProductos = function (empresaId, type) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "GET",
    url: "empresa/".concat(empresaId, "/productos/").concat(type)
  });
};

api.getProducto = function (productoId) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "GET",
    url: "empresa/producto/".concat(productoId)
  });
};

api.deteteProducto = function (payload) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "DELETE",
    url: "empresa/producto/",
    data: payload
  });
};

api.insertProducto = function (payload) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "POST",
    url: "empresa/producto/",
    data: payload
  });
};

api.updateProducto = function (payload) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "PUT",
    url: "empresa/producto/",
    data: payload
  });
};

/* harmony default export */ __webpack_exports__["default"] = (api);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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















var stylesCss = new String("body{background-color:#553c28;}.Section0{background-color:#553c28;}.card-empresa-info,table{background-color:rgba(68,49,34,0.8);border-radius:1px;border:0.5px rgba(68,49,34,0.5) solid;color:#fff4e4;padding:2rem;font-size:1rem;}.card-empresa-premios{background-color:rgba(68,49,34,0.8);border-color:rgba(68,49,34,0.8);color:#fff4e4;}.card-empresa-premios:hover{background-color:rgba(68,49,34,0.8);border-color:rgba(68,49,34,0.5);color:#fff4e4;}.card-empresa-premios:focus{background-color:rgba(68,49,34,0.8);border-color:rgba(68,49,34,0.5);color:#fff4e4;}.card-botellita{background-color:rgba(68,49,34,0.8);}.card-botellita-content{padding-left:1rem;}.card-botellita-producto-uno{color:#ffda44;font-size:1.3rem;}.card-botellita-producto-dos{font-size:1.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxtYXJjYVxcW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhNEIsQUFHOEIsQUFHQSxBQUtjLEFBU0EsQUFLQSxBQUtBLEFBTUEsQUFHckIsQUFHSixBQUlHLGNBSEEsR0FJbkIsQ0FQQSxPQXBDQSxBQUdBLE1BcUNBLEtBaENvQixBQVNpQixBQUtBLEFBS0EsQUFNckMsa0JBeEIyQyxjQVMzQixBQUtBLEFBS0EsY0FUaEIsQUFLQSxBQUtBLFVBbkJnQixjQUNELGFBQ0UsZUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYXZpZE9jaG9hQmVybXVkZXpcXERlc2t0b3BcXHJkdi13ZWJcXG5leHRqc1xccGFnZXNcXG1hcmNhXFxbaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IENhcmQsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWVudURlc2t0b3AgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVudURlc2t0b3BcIjtcclxuaW1wb3J0IGVzIGZyb20gXCIuLi8uLi9sYW5nL2VzXCI7XHJcbmltcG9ydCBlbiBmcm9tIFwiLi4vLi4vbGFuZy9lblwiO1xyXG5pbXBvcnQgQXBpRW1wcmVzYXMgZnJvbSBcIi4uLy4uL3BhZ2VzU2VydmljZXMvZW1wcmVzYXNcIjtcclxuaW1wb3J0IEFwaVByb2R1Y3RvcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9Qcm9kdWN0b3Mvc2VydmljZXNcIjtcclxuXHJcbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTUzYzI4O1xyXG4gIH1cclxuICAuU2VjdGlvbjAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1M2MyODtcclxuICB9XHJcblxyXG4gIC5jYXJkLWVtcHJlc2EtaW5mbyxcclxuICB0YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCA0OSwgMzQsIDAuOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBib3JkZXI6IDAuNXB4IHJnYmEoNjgsIDQ5LCAzNCwgMC41KSBzb2xpZDtcclxuICAgIGNvbG9yOiAjZmZmNGU0O1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWVtcHJlc2EtcHJlbWlvcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCA0OSwgMzQsIDAuOCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNjgsIDQ5LCAzNCwgMC44KTtcclxuICAgIGNvbG9yOiAjZmZmNGU0O1xyXG4gIH1cclxuICAuY2FyZC1lbXByZXNhLXByZW1pb3M6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDY4LCA0OSwgMzQsIDAuNSk7XHJcbiAgICBjb2xvcjogI2ZmZjRlNDtcclxuICB9XHJcbiAgLmNhcmQtZW1wcmVzYS1wcmVtaW9zOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDQ5LCAzNCwgMC44KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjUpO1xyXG4gICAgY29sb3I6ICNmZmY0ZTQ7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1ib3RlbGxpdGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjgpO1xyXG4gIH1cclxuICAuY2FyZC1ib3RlbGxpdGEtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgfVxyXG4gIC5jYXJkLWJvdGVsbGl0YS1wcm9kdWN0by11bm8ge1xyXG4gICAgY29sb3I6ICNmZmRhNDQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbiAgLmNhcmQtYm90ZWxsaXRhLXByb2R1Y3RvLWRvcyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQYWdlTm90aWNpYSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkLCBsYW5nIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIC8vIGxldCBsYW5nID0gXCJlblwiO1xyXG4gIC8vIGlmIChyb3V0ZXIucXVlcnkubGFuZyA9PT0gXCJlblwiKSB7XHJcbiAgLy8gICBsYW5nID0gXCJlblwiO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBsYW5nID0gXCJlc1wiO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3Qgc3RyaW5ncyA9IHsgZXMsIGVuIH07XHJcblxyXG4gIGNvbnN0IFtlbXByZXNhLCBzZXRFbXByZXNhXSA9IHVzZVN0YXRlKHtcclxuICAgIGlkOiBcIlwiLFxyXG4gICAgaW1hZ2VfYmFzZTY0OiBcIlwiLFxyXG4gICAgaW1hZ2VfZXh0ZW5zaW9uOiBcIlwiLFxyXG4gICAgY29udGVudF9odG1sOiBcIlwiLFxyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtwcm9kdWN0b3MsIHNldFByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLyogXHJcbiAgY29uc3QgZ2V0TWFyY2EgPSAoKSA9PiB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgQXBpRW1wcmVzYXMuZ2V0RW1wcmVzYShpZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgY29kaWdvLCBlbXByZXNhIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgc2V0RW1wcmVzYSh7XHJcbiAgICAgICAgICAgICAgaWQ6IGVtcHJlc2EuaWQsXHJcbiAgICAgICAgICAgICAgaW1hZ2VfYmFzZTY0OiBlbXByZXNhLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICBpbWFnZV9leHRlbnNpb246IGVtcHJlc2EuaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnRfaHRtbDogZW1wcmVzYS5jb250ZW50X2h0bWwsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGVtcHJlc2EudGl0bGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcmAsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9OyAqL1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQXBpRW1wcmVzYXMuZ2V0RW1wcmVzYShpZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2RpZ28sIGVtcHJlc2EgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgIHNldEVtcHJlc2Eoe1xyXG4gICAgICAgICAgICBpZDogZW1wcmVzYS5pZCxcclxuICAgICAgICAgICAgaW1hZ2VfYmFzZTY0OiBlbXByZXNhLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgaW1hZ2VfZXh0ZW5zaW9uOiBlbXByZXNhLmltYWdlX2V4dGVuc2lvbixcclxuICAgICAgICAgICAgY29udGVudF9odG1sOiBlbXByZXNhLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgdGl0bGU6IGVtcHJlc2EudGl0bGUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3JgLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIEFwaVByb2R1Y3Rvcy5nZXRQcm9kdWN0b3MoaWQsIFwicHJvZHVjdG9zXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGNvZGlnbywgcmVzdWx0cyB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RvcyhyZXN1bHRzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3JgLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7c3R5bGVzQ3NzfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcblxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQm1ieHVQd1FhMmxjL0ZWekJjTko3VUF5SnhNNnd1cUlqNjF0THJjNHdTWDBzekgvRXYrbllSUnVXbG9sZmxmbFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtYjVrSHlYZ2NwYlpKTy90WTlVbDdrR2tmMVMwQ1d1S2NDRDM4bDhZa2VIOHo4UWpFMEdtVzFnWVU1UzlGT25KMFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG5cclxuICAgICAgICA8dGl0bGU+e2VtcHJlc2EudGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPE1lbnVEZXNrdG9wIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbGlkYV9tb2JpbGUgU2VjdGlvbjBcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiN3JlbSAwIDJyZW0gMCBcIiB9fT5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0gdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJ0b3BcIj5cclxuICAgICAgICAgICAgPENvbCB4cz17MjJ9IGxnPXsxNX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWVtcHJlc2EtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNjaW9uX3RpdHVsb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2hvbWUvbGluZWEyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjRweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntlbXByZXNhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2hvbWUvbGluZWExLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjRweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2VtcHJlc2EudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS8ke2VtcHJlc2EuaW1hZ2VfZXh0ZW5zaW9ufTtiYXNlNjQsJHtlbXByZXNhLmltYWdlX2Jhc2U2NH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwMHB4XCIsIG1heFdpZHRoOiBcIjgwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBlbXByZXNhLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZW1pb3MvW2lkXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBlbXByZXNhLmlkLCBsYW5nIH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY2FyZC1lbXByZXNhLXByZW1pb3Mgem9vbS1lbHJvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZFUiBQUkVNSU9TXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdG9zLm1hcCgocHJvZHVjdG8pID0+IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGNhcmQtYm90ZWxsaXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdG8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS8ke3Byb2R1Y3RvLmltYWdlX2V4dGVuc2lvbn07YmFzZTY0LCR7cHJvZHVjdG8uaW1hZ2VfYmFzZTY0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwXCIsIG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezIwfSBjbGFzc05hbWU9XCIgY2FyZC1ib3RlbGxpdGEtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvdGVsbGl0YS1wcm9kdWN0by11bm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdG9cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvdGVsbGl0YS1wcm9kdWN0by1kb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RvLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHByb2R1Y3RvLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjM2QyNTE0XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWxpZGFfZGVza3RvcCBmb250XzIwIFNlY3Rpb24wXCI+XHJcbiAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzc05hbWU9XCJTZWN0aW9uMFwiPlxyXG4gICAgICAgICAgPENvbCB4cz17MjJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCI1OHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZW1wcmVzYS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2VtcHJlc2EudGl0bGV9PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2VtcHJlc2EudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2UvJHtlbXByZXNhLmltYWdlX2V4dGVuc2lvbn07YmFzZTY0LCR7ZW1wcmVzYS5pbWFnZV9iYXNlNjR9YH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiwgbWF4V2lkdGg6IFwiODAlXCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogZW1wcmVzYS5jb250ZW50X2h0bWwsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvcHJlbWlvcy9baWRdXCIsXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBlbXByZXNhLmlkLCBsYW5nIH0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY2FyZC1lbXByZXNhLXByZW1pb3Mgem9vbS1lbHJvblwiPlxyXG4gICAgICAgICAgICAgICAgICBWRVIgUFJFTUlPU1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3Rvcy5tYXAoKHByb2R1Y3RvKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGNhcmQtYm90ZWxsaXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0by5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS8ke3Byb2R1Y3RvLmltYWdlX2V4dGVuc2lvbn07YmFzZTY0LCR7cHJvZHVjdG8uaW1hZ2VfYmFzZTY0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MFwiLCBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyMH0gY2xhc3NOYW1lPVwiIGNhcmQtYm90ZWxsaXRhLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm90ZWxsaXRhLXByb2R1Y3RvLXVub1wiPlByb2R1Y3RvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvdGVsbGl0YS1wcm9kdWN0by1kb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0by5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogcHJvZHVjdG8uY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzZDI1MTRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlTm90aWNpYTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\pages\\\\marca\\\\[id].js */");
stylesCss.__hash = "585378444";

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
    id: "",
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
  /* 
  const getMarca = () => {
    if (id) {
      ApiEmpresas.getEmpresa(id)
        .then((response) => {
          const { codigo, empresa } = response.data;
          if (codigo === "1") {
            setEmpresa({
              id: empresa.id,
              image_base64: empresa.image_base64,
              image_extension: empresa.image_extension,
              content_html: empresa.content_html,
              title: empresa.title,
            });
          } else {
            //
          }
        })
        .catch((error) => {
          console.log(`error`, error);
        });
    }
  }; */


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _pagesServices_empresas__WEBPACK_IMPORTED_MODULE_10__["default"].getEmpresa(id).then(function (response) {
      var _response$data = response.data,
          codigo = _response$data.codigo,
          empresa = _response$data.empresa;

      if (codigo === "1") {
        setEmpresa({
          id: empresa.id,
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
      _components_panel_Empresas_Productos_services__WEBPACK_IMPORTED_MODULE_11__["default"].getProductos(id, "productos").then(function (response) {
        var _response$data2 = response.data,
            codigo = _response$data2.codigo,
            results = _response$data2.results;

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
        lineNumber: 153,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("title", {
        children: empresa.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
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
                  lineNumber: 186,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
                  className: "text-center",
                  children: empresa.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 19
                }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                  src: "/assets/imgs/home/linea1.png",
                  style: {
                    height: "4px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 185,
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
                  lineNumber: 199,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                  __html: empresa.content_html
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                href: {
                  pathname: "/premios/[id]",
                  query: {
                    id: empresa.id,
                    lang: lang
                  }
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                  className: "card-empresa-premios zoom-elron",
                  children: "VER PREMIOS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
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
                      lineNumber: 230,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                    span: 20,
                    className: " card-botellita-content",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "card-botellita-producto-uno",
                      children: "Producto"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "card-botellita-producto-dos",
                      children: producto.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      dangerouslySetInnerHTML: {
                        __html: producto.content_html
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 243,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                    span: 24,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 251,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
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
              lineNumber: 263,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 180,
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
            lineNumber: 273,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "card-empresa-info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              className: "text-center",
              children: empresa.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
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
                lineNumber: 278,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              dangerouslySetInnerHTML: {
                __html: empresa.content_html
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "text-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: {
                pathname: "/premios/[id]",
                query: {
                  id: empresa.id,
                  lang: lang
                }
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                className: "card-empresa-premios zoom-elron",
                children: "VER PREMIOS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 13
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
                    lineNumber: 309,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 308,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                  span: 20,
                  className: " card-botellita-content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "card-botellita-producto-uno",
                    children: "Producto"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 316,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "card-botellita-producto-dos",
                    children: producto.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 317,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    dangerouslySetInnerHTML: {
                      __html: producto.content_html
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 320,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 315,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                  span: 24,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 328,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 326,
                  columnNumber: 19
                }, _this)]
              }, void 0, true);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 272,
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
                lineNumber: 338,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(PageNoticia, "se2Asg7ySz1BSa1ngMbTBfAQH/4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9Qcm9kdWN0b3Mvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21hcmNhLy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJnZXRQcm9kdWN0b3MiLCJlbXByZXNhSWQiLCJ0eXBlIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImdldFByb2R1Y3RvIiwicHJvZHVjdG9JZCIsImRldGV0ZVByb2R1Y3RvIiwicGF5bG9hZCIsImRhdGEiLCJpbnNlcnRQcm9kdWN0byIsInVwZGF0ZVByb2R1Y3RvIiwic3R5bGVzQ3NzIiwiUGFnZU5vdGljaWEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImlkIiwibGFuZyIsInVzZVN0YXRlIiwiaW1hZ2VfYmFzZTY0IiwiaW1hZ2VfZXh0ZW5zaW9uIiwiY29udGVudF9odG1sIiwidGl0bGUiLCJlbXByZXNhIiwic2V0RW1wcmVzYSIsInByb2R1Y3RvcyIsInNldFByb2R1Y3RvcyIsInVzZUVmZmVjdCIsIkFwaUVtcHJlc2FzIiwiZ2V0RW1wcmVzYSIsInRoZW4iLCJyZXNwb25zZSIsImNvZGlnbyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkFwaVByb2R1Y3RvcyIsInJlc3VsdHMiLCJwYWRkaW5nIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXhXaWR0aCIsIl9faHRtbCIsInBhdGhuYW1lIiwibWFwIiwicHJvZHVjdG8iLCJuYW1lIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsR0FBRyxHQUFHLEVBQVo7O0FBRUFBLEdBQUcsQ0FBQ0MsWUFBSixHQUFtQixVQUFDQyxTQUFELEVBQVlDLElBQVosRUFBcUI7QUFDdEMsU0FBT0MsK0RBQU8sQ0FBQztBQUNiQyxVQUFNLEVBQUUsS0FESztBQUViQyxPQUFHLG9CQUFhSixTQUFiLHdCQUFv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QUFBO0FBQUEsaUJBaEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExSEYsZUFxTUUsc0VBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJNRjtBQUFBLGtCQURGO0FBeU1ELENBN1JEOztHQUFNbkMsVztVQUNXRSxxRDs7O0tBRFhGLFc7QUErUlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcmNhL1tpZF0uNzhiNTNjZTk0MTc2YjFmMWE2OTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWcvcmVxdWVzdFwiO1xyXG5cclxuY29uc3QgYXBpID0ge307XHJcblxyXG5hcGkuZ2V0UHJvZHVjdG9zID0gKGVtcHJlc2FJZCwgdHlwZSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHVybDogYGVtcHJlc2EvJHtlbXByZXNhSWR9L3Byb2R1Y3Rvcy8ke3R5cGV9YCxcclxuICB9KTtcclxufTtcclxuXHJcbmFwaS5nZXRQcm9kdWN0byA9IChwcm9kdWN0b0lkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBgZW1wcmVzYS9wcm9kdWN0by8ke3Byb2R1Y3RvSWR9YCxcclxuICB9KTtcclxufTtcclxuXHJcbmFwaS5kZXRldGVQcm9kdWN0byA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgdXJsOiBcImVtcHJlc2EvcHJvZHVjdG8vXCIsXHJcbiAgICBkYXRhOiBwYXlsb2FkLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuYXBpLmluc2VydFByb2R1Y3RvID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBcImVtcHJlc2EvcHJvZHVjdG8vXCIsXHJcbiAgICBkYXRhOiBwYXlsb2FkLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuYXBpLnVwZGF0ZVByb2R1Y3RvID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICB1cmw6IFwiZW1wcmVzYS9wcm9kdWN0by9cIixcclxuICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IE1lbnVEZXNrdG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lbnVEZXNrdG9wXCI7XHJcbmltcG9ydCBlcyBmcm9tIFwiLi4vLi4vbGFuZy9lc1wiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uLy4uL2xhbmcvZW5cIjtcclxuaW1wb3J0IEFwaUVtcHJlc2FzIGZyb20gXCIuLi8uLi9wYWdlc1NlcnZpY2VzL2VtcHJlc2FzXCI7XHJcbmltcG9ydCBBcGlQcm9kdWN0b3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFuZWwvRW1wcmVzYXMvUHJvZHVjdG9zL3NlcnZpY2VzXCI7XHJcblxyXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1M2MyODtcclxuICB9XHJcbiAgLlNlY3Rpb24wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTNjMjg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1lbXByZXNhLWluZm8sXHJcbiAgdGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYm9yZGVyOiAwLjVweCByZ2JhKDY4LCA0OSwgMzQsIDAuNSkgc29saWQ7XHJcbiAgICBjb2xvcjogI2ZmZjRlNDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1lbXByZXNhLXByZW1pb3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDY4LCA0OSwgMzQsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjRlNDtcclxuICB9XHJcbiAgLmNhcmQtZW1wcmVzYS1wcmVtaW9zOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDQ5LCAzNCwgMC44KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjUpO1xyXG4gICAgY29sb3I6ICNmZmY0ZTQ7XHJcbiAgfVxyXG4gIC5jYXJkLWVtcHJlc2EtcHJlbWlvczpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCA0OSwgMzQsIDAuOCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNjgsIDQ5LCAzNCwgMC41KTtcclxuICAgIGNvbG9yOiAjZmZmNGU0O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm90ZWxsaXRhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDQ5LCAzNCwgMC44KTtcclxuICB9XHJcbiAgLmNhcmQtYm90ZWxsaXRhLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIH1cclxuICAuY2FyZC1ib3RlbGxpdGEtcHJvZHVjdG8tdW5vIHtcclxuICAgIGNvbG9yOiAjZmZkYTQ0O1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG4gIC5jYXJkLWJvdGVsbGl0YS1wcm9kdWN0by1kb3Mge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUGFnZU5vdGljaWEgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCwgbGFuZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAvLyBsZXQgbGFuZyA9IFwiZW5cIjtcclxuICAvLyBpZiAocm91dGVyLnF1ZXJ5LmxhbmcgPT09IFwiZW5cIikge1xyXG4gIC8vICAgbGFuZyA9IFwiZW5cIjtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgbGFuZyA9IFwiZXNcIjtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IHN0cmluZ3MgPSB7IGVzLCBlbiB9O1xyXG5cclxuICBjb25zdCBbZW1wcmVzYSwgc2V0RW1wcmVzYV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpZDogXCJcIixcclxuICAgIGltYWdlX2Jhc2U2NDogXCJcIixcclxuICAgIGltYWdlX2V4dGVuc2lvbjogXCJcIixcclxuICAgIGNvbnRlbnRfaHRtbDogXCJcIixcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbcHJvZHVjdG9zLCBzZXRQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8qIFxyXG4gIGNvbnN0IGdldE1hcmNhID0gKCkgPT4ge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIEFwaUVtcHJlc2FzLmdldEVtcHJlc2EoaWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGNvZGlnbywgZW1wcmVzYSB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHNldEVtcHJlc2Eoe1xyXG4gICAgICAgICAgICAgIGlkOiBlbXByZXNhLmlkLFxyXG4gICAgICAgICAgICAgIGltYWdlX2Jhc2U2NDogZW1wcmVzYS5pbWFnZV9iYXNlNjQsXHJcbiAgICAgICAgICAgICAgaW1hZ2VfZXh0ZW5zaW9uOiBlbXByZXNhLmltYWdlX2V4dGVuc2lvbixcclxuICAgICAgICAgICAgICBjb250ZW50X2h0bWw6IGVtcHJlc2EuY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBlbXByZXNhLnRpdGxlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3JgLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTsgKi9cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFwaUVtcHJlc2FzLmdldEVtcHJlc2EoaWQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29kaWdvLCBlbXByZXNhIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICBzZXRFbXByZXNhKHtcclxuICAgICAgICAgICAgaWQ6IGVtcHJlc2EuaWQsXHJcbiAgICAgICAgICAgIGltYWdlX2Jhc2U2NDogZW1wcmVzYS5pbWFnZV9iYXNlNjQsXHJcbiAgICAgICAgICAgIGltYWdlX2V4dGVuc2lvbjogZW1wcmVzYS5pbWFnZV9leHRlbnNpb24sXHJcbiAgICAgICAgICAgIGNvbnRlbnRfaHRtbDogZW1wcmVzYS5jb250ZW50X2h0bWwsXHJcbiAgICAgICAgICAgIHRpdGxlOiBlbXByZXNhLnRpdGxlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yYCwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICBBcGlQcm9kdWN0b3MuZ2V0UHJvZHVjdG9zKGlkLCBcInByb2R1Y3Rvc1wiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBjb2RpZ28sIHJlc3VsdHMgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBpZiAoY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0b3MocmVzdWx0cyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYGVycm9yYCwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge3N0eWxlc0Nzc31cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUJtYnh1UHdRYTJsYy9GVnpCY05KN1VBeUp4TTZ3dXFJajYxdExyYzR3U1gwc3pIL0V2K25ZUlJ1V2xvbGZsZmxcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrTWluY2hvOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWI1a0h5WGdjcGJaSk8vdFk5VWw3a0drZjFTMENXdUtjQ0QzOGw4WWtlSDh6OFFqRTBHbVcxZ1lVNVM5Rk9uSjBcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuXHJcbiAgICAgICAgPHRpdGxlPntlbXByZXNhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxNZW51RGVza3RvcCAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWxpZGFfbW9iaWxlIFNlY3Rpb24wXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjdyZW0gMCAycmVtIDAgXCIgfX0+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwidG9wXCI+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezIyfSBsZz17MTV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1lbXByZXNhLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjY2lvbl90aXR1bG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9ob21lL2xpbmVhMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57ZW1wcmVzYS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9ob21lL2xpbmVhMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtlbXByZXNhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2UvJHtlbXByZXNhLmltYWdlX2V4dGVuc2lvbn07YmFzZTY0LCR7ZW1wcmVzYS5pbWFnZV9iYXNlNjR9YH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMDBweFwiLCBtYXhXaWR0aDogXCI4MCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgIF9faHRtbDogZW1wcmVzYS5jb250ZW50X2h0bWwsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9wcmVtaW9zL1tpZF1cIixcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBpZDogZW1wcmVzYS5pZCwgbGFuZyB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImNhcmQtZW1wcmVzYS1wcmVtaW9zIHpvb20tZWxyb25cIj5cclxuICAgICAgICAgICAgICAgICAgICBWRVIgUFJFTUlPU1xyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3Rvcy5tYXAoKHByb2R1Y3RvKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs0fSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjYXJkLWJvdGVsbGl0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3RvLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2UvJHtwcm9kdWN0by5pbWFnZV9leHRlbnNpb259O2Jhc2U2NCwke3Byb2R1Y3RvLmltYWdlX2Jhc2U2NH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MFwiLCBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyMH0gY2xhc3NOYW1lPVwiIGNhcmQtYm90ZWxsaXRhLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib3RlbGxpdGEtcHJvZHVjdG8tdW5vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib3RlbGxpdGEtcHJvZHVjdG8tZG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0by5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBwcm9kdWN0by5jb250ZW50X2h0bWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMjUxNFwiIH19PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsaWRhX2Rlc2t0b3AgZm9udF8yMCBTZWN0aW9uMFwiPlxyXG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3NOYW1lPVwiU2VjdGlvbjBcIj5cclxuICAgICAgICAgIDxDb2wgeHM9ezIyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNThweFwiIH19PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWVtcHJlc2EtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntlbXByZXNhLnRpdGxlfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgYWx0PXtlbXByZXNhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlLyR7ZW1wcmVzYS5pbWFnZV9leHRlbnNpb259O2Jhc2U2NCwke2VtcHJlc2EuaW1hZ2VfYmFzZTY0fWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwMHB4XCIsIG1heFdpZHRoOiBcIjgwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGVtcHJlc2EuY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZW1pb3MvW2lkXVwiLFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeTogeyBpZDogZW1wcmVzYS5pZCwgbGFuZyB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImNhcmQtZW1wcmVzYS1wcmVtaW9zIHpvb20tZWxyb25cIj5cclxuICAgICAgICAgICAgICAgICAgVkVSIFBSRU1JT1NcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0b3MubWFwKChwcm9kdWN0bykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs0fSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjYXJkLWJvdGVsbGl0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdG8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2UvJHtwcm9kdWN0by5pbWFnZV9leHRlbnNpb259O2Jhc2U2NCwke3Byb2R1Y3RvLmltYWdlX2Jhc2U2NH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBcIiwgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjB9IGNsYXNzTmFtZT1cIiBjYXJkLWJvdGVsbGl0YS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvdGVsbGl0YS1wcm9kdWN0by11bm9cIj5Qcm9kdWN0bzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib3RlbGxpdGEtcHJvZHVjdG8tZG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdG8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHByb2R1Y3RvLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjM2QyNTE0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vdGljaWE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=