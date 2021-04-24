webpackHotUpdate_N_E("pages/index",{

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
  baseURL: "http://localhost:5000/services-rdv/" // "Content-Type": "application/json",

};
var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(config);
request.interceptors.response.use(function (response) {
  console.log("response", response);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiYmFzZVVSTCIsInJlcXVlc3QiLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2I7QUFDQUMsU0FBTyxFQUFFLHFDQUZJLENBR2I7O0FBSGEsQ0FBZjtBQUtBLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhSixNQUFiLENBQWhCO0FBRUFFLE9BQU8sQ0FBQ0csWUFBUixDQUFxQkMsUUFBckIsQ0FBOEJDLEdBQTlCLENBQ0UsVUFBVUQsUUFBVixFQUFvQjtBQUNsQkUsU0FBTyxDQUFDQyxHQUFSLGFBQXdCSCxRQUF4QjtBQUVBLFNBQU9BLFFBQVA7QUFDRCxDQUxILEVBTUUsVUFBVUksS0FBVixFQUFpQjtBQUNmO0FBQ0EsU0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNELENBVEg7QUFZZVIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzI4OWY3MGYwNGRiMDdiNjQ3YzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAvLyBiYXNlVVJMOiBcImh0dHBzOi8vd3d3LmJtb3NvbHVjaW9uZXMuY29tL3NlcnZpY2VzLXJkdi9cIixcclxuICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zZXJ2aWNlcy1yZHYvXCIsXHJcbiAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbn07XHJcbmNvbnN0IHJlcXVlc3QgPSBheGlvcy5jcmVhdGUoY29uZmlnKTtcclxuXHJcbnJlcXVlc3QuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKGByZXNwb25zZWAsIHJlc3BvbnNlKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlcXVlc3QgZXJyb3JcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==