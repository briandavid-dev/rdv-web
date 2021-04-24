webpackHotUpdate_N_E("pages/panel/noticias",{

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
  // baseURL: "https://www.bmosoluciones.com/services-rdv/",
  baseURL: "http://localhost:5000/servicses-rdv/" // "Content-Type": "application/json",

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiYmFzZVVSTCIsInJlcXVlc3QiLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYjtBQUNBQyxTQUFPLEVBQUUsc0NBRkksQ0FHYjs7QUFIYSxDQUFmO0FBS0EsSUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWFKLE1BQWIsQ0FBaEI7QUFFQUUsT0FBTyxDQUFDRyxZQUFSLENBQXFCQyxRQUFyQixDQUE4QkMsR0FBOUIsQ0FDRSxVQUFVRCxRQUFWLEVBQW9CO0FBQ2xCLFNBQU9BLFFBQVA7QUFDRCxDQUhILEVBSUUsVUFBVUUsS0FBVixFQUFpQjtBQUNmO0FBQ0EsU0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNELENBUEg7QUFVZU4sc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFuZWwvbm90aWNpYXMuYWY5ODI4NjJiYmU1OWNhYWUxOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAvLyBiYXNlVVJMOiBcImh0dHBzOi8vd3d3LmJtb3NvbHVjaW9uZXMuY29tL3NlcnZpY2VzLXJkdi9cIixcclxuICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zZXJ2aWNzZXMtcmR2L1wiLFxyXG4gIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG59O1xyXG5jb25zdCByZXF1ZXN0ID0gYXhpb3MuY3JlYXRlKGNvbmZpZyk7XHJcblxyXG5yZXF1ZXN0LmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlcXVlc3QgZXJyb3JcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==