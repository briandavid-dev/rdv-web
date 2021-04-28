webpackHotUpdate_N_E("pages/noticias",{

/***/ "./config/request.js":
/*!***************************!*\
  !*** ./config/request.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var config = {
  baseURL: "https://www.bmosoluciones.com/services-rdv/" //   baseURL: "http://localhost:5000/services-rdv/",
  // "Content-Type": "application/json",

};
var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(config);
request.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (request);

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

/***/ }),

/***/ "./pages/noticias.js":
/*!***************************!*\
  !*** ./pages/noticias.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_MenuDesktop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MenuDesktop */ "./components/MenuDesktop/index.js");
/* harmony import */ var _lang_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lang/es */ "./lang/es.js");
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lang/en */ "./lang/en.js");
/* harmony import */ var _pagesServices_noticias__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pagesServices/noticias */ "./pagesServices/noticias.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\pages\\noticias.js",
    _this = undefined,
    _s = $RefreshSig$();













var stylesCss = new String("\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxub3RpY2lhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYXZpZE9jaG9hQmVybXVkZXpcXERlc2t0b3BcXHJkdi13ZWJcXG5leHRqc1xccGFnZXNcXG5vdGljaWFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IENhcmQsIFJvdywgQ29sLCBBZmZpeCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWVudURlc2t0b3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVudURlc2t0b3BcIjtcclxuaW1wb3J0IGVzIGZyb20gXCIuLi9sYW5nL2VzXCI7XHJcbmltcG9ydCBlbiBmcm9tIFwiLi4vbGFuZy9lblwiO1xyXG5pbXBvcnQgQXBpTm90aWNpYXMgZnJvbSBcIi4uL3BhZ2VzU2VydmljZXMvbm90aWNpYXNcIjtcclxuXHJcbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgYDtcclxuXHJcbmNvbnN0IFBhZ2VOb3RpY2lhcyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBsZXQgbGFuZyA9IFwiZXNcIjtcclxuICBpZiAocm91dGVyLnF1ZXJ5LmxhbmcgPT09IFwiZW5cIikge1xyXG4gICAgbGFuZyA9IFwiZW5cIjtcclxuICB9XHJcbiAgY29uc3Qgc3RyaW5ncyA9IHsgZXMsIGVuIH07XHJcblxyXG4gIGNvbnN0IFtvZmZzZXRUb3AsIHNldE9mZnNldFRvcF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgcmV2aXNhSGVpZ3RoID0gKCkgPT4ge1xyXG4gICAgLy8gZnVuY3Rpb24gcmVwb3J0V2luZG93U2l6ZSgpIHtcclxuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsY3VsYXRlSGVpZ3RoXCIpXHJcbiAgICAgIC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBzZXRPZmZzZXRUb3Aob2Zmc2V0SGVpZ2h0IC0gNTAwKTtcclxuICAgIC8vIH1cclxuICAgIC8vIHdpbmRvdy5vbnJlc2l6ZSA9IHJlcG9ydFdpbmRvd1NpemU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Tm90aWNpYXNMaXN0YWRvID0gKCkgPT4ge1xyXG4gICAgQXBpTm90aWNpYXMuZ2V0Tm90aWNpYXNMaXN0YWRvKGxhbmcpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZWAsIHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcmAsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldE5vdGljaWFzTGlzdGFkbygpO1xyXG4gIH0sIFtsYW5nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXZpc2FIZWlndCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coYG9mZnNldFRvcGAsIG9mZnNldFRvcCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7c3R5bGVzQ3NzfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUJtYnh1UHdRYTJsYy9GVnpCY05KN1VBeUp4TTZ3dXFJajYxdExyYzR3U1gwc3pIL0V2K25ZUlJ1V2xvbGZsZmxcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrTWluY2hvOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDx0aXRsZT57c3RyaW5nc1tsYW5nXS5hcnRpY3Vsb3MucGFnZVRpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lbnVEZXNrdG9wIC8+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiN3JlbSAwIDJyZW0gMCBcIiB9fT5cclxuICAgICAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwidG9wXCI+XHJcbiAgICAgICAgICA8Q29sIHhzPXsyMn0gbGc9ezE0fT5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJmb250XzIwXCI+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsY3VsYXRlSGVpZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBZmZpeFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFRvcD17LW9mZnNldFRvcH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBvZmZzZXRCb3R0b209ezEwMH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5XaGF0IGlzIExvcmVtIElwc3VtPzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL29zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9RQm5PT29MYUFmS1BpcmMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge1sxMDAsIDIwMF0ubWFwKChudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gSXBzdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbSB0ZXh0LiBJdCBoYXMgcm9vdHMgaW4gYSBwaWVjZSBvZiBjbGFzc2ljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMYXRpbiBsaXRlcmF0dXJlIGZyb20gNDUgQkMsIG1ha2luZyBpdCBvdmVyIDIwMDAgeWVhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbGQuIFJpY2hhcmQgTWNDbGludG9jaywgYSBMYXRpbiBwcm9mZXNzb3IgYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBIYW1wZGVuLVN5ZG5leSBDb2xsZWdlIGluIFZpcmdpbmlhLCBsb29rZWQgdXAgb25lIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIG1vcmUgb2JzY3VyZSBMYXRpbiB3b3JkcywgY29uc2VjdGV0dXIsIGZyb20gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIHBhc3NhZ2UsIGFuZCBnb2luZyB0aHJvdWdoIHRoZSBjaXRlcyBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSB3b3JkIGluIGNsYXNzaWNhbCBsaXRlcmF0dXJlLCBkaXNjb3ZlcmVkIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuZG91YnRhYmxlIHNvdXJjZS4gTG9yZW0gSXBzdW0gY29tZXMgZnJvbSBzZWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEuMTAuMzIgYW5kIDEuMTAuMzMgb2YgXCJkZSBGaW5pYnVzIEJvbm9ydW0gZXQgTWFsb3J1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKFRoZSBFeHRyZW1lcyBvZiBHb29kIGFuZCBFdmlsKSBieSBDaWNlcm8sIHdyaXR0ZW4gaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA0NSBCQy4gVGhpcyBib29rIGlzIGEgdHJlYXRpc2Ugb24gdGhlIHRoZW9yeSBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV0aGljcywgdmVyeSBwb3B1bGFyIGR1cmluZyB0aGUgUmVuYWlzc2FuY2UuIFRoZSBmaXJzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgb2YgTG9yZW0gSXBzdW0sIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWVzIGZyb20gYSBsaW5lIGluIHNlY3Rpb24gMS4xMC4zMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpcyByZXByb2R1Y2VkIGJlbG93IGZvciB0aG9zZSBpbnRlcmVzdGVkLiBTZWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEuMTAuMzIgYW5kIDEuMTAuMzMgZnJvbSBcImRlIEZpbmlidXMgQm9ub3J1bSBldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1hbG9ydW1cIiBieSBDaWNlcm8gYXJlIGFsc28gcmVwcm9kdWNlZCBpbiB0aGVpciBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsIGZvcm0sIGFjY29tcGFuaWVkIGJ5IEVuZ2xpc2ggdmVyc2lvbnMgZnJvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L0FmZml4PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPXsxMX0gbGc9ezd9PlxyXG4gICAgICAgICAgICB7WzEwMCwgMjAwLCAzMDAsIDE0MCwgMTU4LCAxNjRdLm1hcCgobnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgICAgICAgICAgICBjb3Zlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL29zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9RQm5PT29MYUFmS1BpcmMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkV1cm9wZSBTdHJlZXQgYmVhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJ3d3cuaW5zdGFncmFtLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjM2QyNTE0XCIgfX0+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlTm90aWNpYXM7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\pages\\\\noticias.js */");
stylesCss.__hash = "2085888330";

var PageNoticias = function PageNoticias() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var lang = "es";

  if (router.query.lang === "en") {
    lang = "en";
  }

  var strings = {
    es: _lang_es__WEBPACK_IMPORTED_MODULE_7__["default"],
    en: _lang_en__WEBPACK_IMPORTED_MODULE_8__["default"]
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      offsetTop = _useState[0],
      setOffsetTop = _useState[1];

  var revisaHeigth = function revisaHeigth() {
    // function reportWindowSize() {
    var offsetHeight = document.querySelector(".calculateHeigth").offsetHeight;
    setOffsetTop(offsetHeight - 500); // }
    // window.onresize = reportWindowSize;
  };

  var getNoticiasListado = function getNoticiasListado() {
    _pagesServices_noticias__WEBPACK_IMPORTED_MODULE_9__["default"].getNoticiasListado(lang).then(function (response) {
      console.log("response", response);
    })["catch"](function (error) {
      console.log("error", error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getNoticiasListado();
  }, [lang]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    revisaHeigt();
  }, []);
  console.log("offsetTop", offsetTop);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: strings[lang].articulos.pageTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        padding: "7rem 0 2rem 0 "
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        gutter: [16, 16],
        type: "flex",
        justify: "center",
        align: "top",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          xs: 22,
          lg: 14,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "font_20",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "calculateHeigth",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Affix"], {
                  offsetTop: -offsetTop // offsetBottom={100}
                  ,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h1", {
                    children: "What is Lorem Ipsum?"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                    alt: "example",
                    src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" // height={800}
                    ,
                    width: 800,
                    style: {
                      maxWidth: "100%"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 21
                  }, _this), [100, 200].map(function (number) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
                        children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 116,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
                        children: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          xs: 11,
          lg: 7,
          children: [100, 200, 300, 140, 158, 164].map(function (number) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
                hoverable: true,
                cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                  alt: "example",
                  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 21
                }, _this),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
                  title: "Europe Street beat",
                  description: "www.instagram.com"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, _this)]
            }, void 0, true);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
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
            lineNumber: 175,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(PageNoticias, "UcCgWtiPQLHa4ao2f8ylt6rxUKY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = PageNoticias;
/* harmony default export */ __webpack_exports__["default"] = (PageNoticias);

var _c;

$RefreshReg$(_c, "PageNoticias");

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

/***/ }),

/***/ "./pagesServices/noticias.js":
/*!***********************************!*\
  !*** ./pagesServices/noticias.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/request */ "./config/request.js");

var api = {};

api.getNoticiasListado = function (lang) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "GET",
    url: "noticias-listado/".concat(lang)
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25vdGljaWFzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlc1NlcnZpY2VzL25vdGljaWFzLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImJhc2VVUkwiLCJyZXF1ZXN0IiwiYXhpb3MiLCJjcmVhdGUiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInN0eWxlc0NzcyIsIlBhZ2VOb3RpY2lhcyIsInJvdXRlciIsInVzZVJvdXRlciIsImxhbmciLCJxdWVyeSIsInN0cmluZ3MiLCJlcyIsImVuIiwidXNlU3RhdGUiLCJvZmZzZXRUb3AiLCJzZXRPZmZzZXRUb3AiLCJyZXZpc2FIZWlndGgiLCJvZmZzZXRIZWlnaHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXROb3RpY2lhc0xpc3RhZG8iLCJBcGlOb3RpY2lhcyIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwicmV2aXNhSGVpZ3QiLCJhcnRpY3Vsb3MiLCJwYWdlVGl0bGUiLCJwYWRkaW5nIiwibWF4V2lkdGgiLCJtYXAiLCJudW1iZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcGkiLCJtZXRob2QiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxTQUFPLEVBQUUsNkNBREksQ0FFYjtBQUNBOztBQUhhLENBQWY7QUFLQSxJQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUosTUFBYixDQUFoQjtBQUVBRSxPQUFPLENBQUNHLFlBQVIsQ0FBcUJDLFFBQXJCLENBQThCQyxHQUE5QixDQUNFLFVBQVVELFFBQVYsRUFBb0I7QUFDbEIsU0FBT0EsUUFBUDtBQUNELENBSEgsRUFJRSxVQUFVRSxLQUFWLEVBQWlC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bUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEhGLGVBK0hFLHNFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvSEY7QUFBQSxrQkFERjtBQW1JRCxDQTFLRDs7R0FBTTVCLFk7VUFDV0UscUQ7OztLQURYRixZO0FBNEtTQSwyRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pMQTtBQUFBO0FBQUE7QUFFQSxJQUFNNkIsR0FBRyxHQUFHLEVBQVo7O0FBRUFBLEdBQUcsQ0FBQ2Qsa0JBQUosR0FBeUIsVUFBQ1osSUFBRCxFQUFVO0FBQ2pDLFNBQU9iLCtEQUFPLENBQUM7QUFDYndDLFVBQU0sRUFBRSxLQURLO0FBRWJDLE9BQUcsNkJBQXNCNUIsSUFBdEI7QUFGVSxHQUFELENBQWQ7QUFJRCxDQUxEOztBQU9lMEIsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbm90aWNpYXMuNzY1MjAwZDBhZGI3YmQwOTM5MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBiYXNlVVJMOiBcImh0dHBzOi8vd3d3LmJtb3NvbHVjaW9uZXMuY29tL3NlcnZpY2VzLXJkdi9cIixcclxuICAvLyAgIGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3NlcnZpY2VzLXJkdi9cIixcclxuICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxufTtcclxuY29uc3QgcmVxdWVzdCA9IGF4aW9zLmNyZWF0ZShjb25maWcpO1xyXG5cclxucmVxdWVzdC5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0sXHJcbiAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXF1ZXN0IGVycm9yXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBSb3csIENvbCwgQWZmaXggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IE1lbnVEZXNrdG9wIGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVEZXNrdG9wXCI7XHJcbmltcG9ydCBlcyBmcm9tIFwiLi4vbGFuZy9lc1wiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uL2xhbmcvZW5cIjtcclxuaW1wb3J0IEFwaU5vdGljaWFzIGZyb20gXCIuLi9wYWdlc1NlcnZpY2VzL25vdGljaWFzXCI7XHJcblxyXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYGA7XHJcblxyXG5jb25zdCBQYWdlTm90aWNpYXMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgbGV0IGxhbmcgPSBcImVzXCI7XHJcbiAgaWYgKHJvdXRlci5xdWVyeS5sYW5nID09PSBcImVuXCIpIHtcclxuICAgIGxhbmcgPSBcImVuXCI7XHJcbiAgfVxyXG4gIGNvbnN0IHN0cmluZ3MgPSB7IGVzLCBlbiB9O1xyXG5cclxuICBjb25zdCBbb2Zmc2V0VG9wLCBzZXRPZmZzZXRUb3BdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHJldmlzYUhlaWd0aCA9ICgpID0+IHtcclxuICAgIC8vIGZ1bmN0aW9uIHJlcG9ydFdpbmRvd1NpemUoKSB7XHJcbiAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbGN1bGF0ZUhlaWd0aFwiKVxyXG4gICAgICAub2Zmc2V0SGVpZ2h0O1xyXG4gICAgc2V0T2Zmc2V0VG9wKG9mZnNldEhlaWdodCAtIDUwMCk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyB3aW5kb3cub25yZXNpemUgPSByZXBvcnRXaW5kb3dTaXplO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldE5vdGljaWFzTGlzdGFkbyA9ICgpID0+IHtcclxuICAgIEFwaU5vdGljaWFzLmdldE5vdGljaWFzTGlzdGFkbyhsYW5nKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2VgLCByZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3JgLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXROb3RpY2lhc0xpc3RhZG8oKTtcclxuICB9LCBbbGFuZ10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV2aXNhSGVpZ3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGBvZmZzZXRUb3BgLCBvZmZzZXRUb3ApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge3N0eWxlc0Nzc31cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuXHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CbWJ4dVB3UWEybGMvRlZ6QmNOSjdVQXlKeE02d3VxSWo2MXRMcmM0d1NYMHN6SC9FdituWVJSdVdsb2xmbGZsXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8dGl0bGU+e3N0cmluZ3NbbGFuZ10uYXJ0aWN1bG9zLnBhZ2VUaXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZW51RGVza3RvcCAvPlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjdyZW0gMCAycmVtIDAgXCIgfX0+XHJcbiAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMTZdfSB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cInRvcFwiPlxyXG4gICAgICAgICAgPENvbCB4cz17MjJ9IGxnPXsxNH0+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZm9udF8yMFwiPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGN1bGF0ZUhlaWd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICA8QWZmaXhcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRUb3A9ey1vZmZzZXRUb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb2Zmc2V0Qm90dG9tPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+V2hhdCBpcyBMb3JlbSBJcHN1bT88L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9vcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvUUJuT09vTGFBZktQaXJjLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbMTAwLCAyMDBdLm1hcCgobnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGF0aW4gbGl0ZXJhdHVyZSBmcm9tIDQ1IEJDLCBtYWtpbmcgaXQgb3ZlciAyMDAwIHllYXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkLiBSaWNoYXJkIE1jQ2xpbnRvY2ssIGEgTGF0aW4gcHJvZmVzc29yIGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSGFtcGRlbi1TeWRuZXkgQ29sbGVnZSBpbiBWaXJnaW5pYSwgbG9va2VkIHVwIG9uZSBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBtb3JlIG9ic2N1cmUgTGF0aW4gd29yZHMsIGNvbnNlY3RldHVyLCBmcm9tIGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBwYXNzYWdlLCBhbmQgZ29pbmcgdGhyb3VnaCB0aGUgY2l0ZXMgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgd29yZCBpbiBjbGFzc2ljYWwgbGl0ZXJhdHVyZSwgZGlzY292ZXJlZCB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRvdWJ0YWJsZSBzb3VyY2UuIExvcmVtIElwc3VtIGNvbWVzIGZyb20gc2VjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxLjEwLjMyIGFuZCAxLjEwLjMzIG9mIFwiZGUgRmluaWJ1cyBCb25vcnVtIGV0IE1hbG9ydW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChUaGUgRXh0cmVtZXMgb2YgR29vZCBhbmQgRXZpbCkgYnkgQ2ljZXJvLCB3cml0dGVuIGluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgNDUgQkMuIFRoaXMgYm9vayBpcyBhIHRyZWF0aXNlIG9uIHRoZSB0aGVvcnkgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBldGhpY3MsIHZlcnkgcG9wdWxhciBkdXJpbmcgdGhlIFJlbmFpc3NhbmNlLiBUaGUgZmlyc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lIG9mIExvcmVtIElwc3VtLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0Li5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21lcyBmcm9tIGEgbGluZSBpbiBzZWN0aW9uIDEuMTAuMzIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgcmVwcm9kdWNlZCBiZWxvdyBmb3IgdGhvc2UgaW50ZXJlc3RlZC4gU2VjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxLjEwLjMyIGFuZCAxLjEwLjMzIGZyb20gXCJkZSBGaW5pYnVzIEJvbm9ydW0gZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBNYWxvcnVtXCIgYnkgQ2ljZXJvIGFyZSBhbHNvIHJlcHJvZHVjZWQgaW4gdGhlaXIgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbCBmb3JtLCBhY2NvbXBhbmllZCBieSBFbmdsaXNoIHZlcnNpb25zIGZyb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgMTkxNCB0cmFuc2xhdGlvbiBieSBILiBSYWNraGFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9BZmZpeD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCB4cz17MTF9IGxnPXs3fT5cclxuICAgICAgICAgICAge1sxMDAsIDIwMCwgMzAwLCAxNDAsIDE1OCwgMTY0XS5tYXAoKG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICBob3ZlcmFibGVcclxuICAgICAgICAgICAgICAgICAgY292ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9vcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvUUJuT09vTGFBZktQaXJjLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFdXJvcGUgU3RyZWV0IGJlYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwid3d3Lmluc3RhZ3JhbS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMjUxNFwiIH19PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vdGljaWFzO1xyXG4iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vY29uZmlnL3JlcXVlc3RcIjtcclxuXHJcbmNvbnN0IGFwaSA9IHt9O1xyXG5cclxuYXBpLmdldE5vdGljaWFzTGlzdGFkbyA9IChsYW5nKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBgbm90aWNpYXMtbGlzdGFkby8ke2xhbmd9YCxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==