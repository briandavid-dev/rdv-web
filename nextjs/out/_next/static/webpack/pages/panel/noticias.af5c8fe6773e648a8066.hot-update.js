webpackHotUpdate_N_E("pages/panel/noticias",{

/***/ "./components/panel/Noticias/services.js":
/*!***********************************************!*\
  !*** ./components/panel/Noticias/services.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var config = {
  baseURL: "https://www.bmosoluciones.com/api-rdv/" // "Content-Type": "application/json",

};
var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(config);
var api = {};

api.getNoticias = function () {
  return request({
    method: "GET",
    url: "contenido/"
  });
};

api.deteteNoticias = function (payload) {
  return request({
    method: "DELETE",
    url: "contenido/",
    data: payload
  });
};

api.insertNoticias = function (payload) {
  return request({
    method: "POST",
    url: "contenido/",
    data: payload
  });
};

api.updateNoticias = function (payload) {
  return request({
    method: "PUT",
    url: "contenido/",
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9Ob3RpY2lhcy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJiYXNlVVJMIiwicmVxdWVzdCIsImF4aW9zIiwiY3JlYXRlIiwiYXBpIiwiZ2V0Tm90aWNpYXMiLCJtZXRob2QiLCJ1cmwiLCJkZXRldGVOb3RpY2lhcyIsInBheWxvYWQiLCJkYXRhIiwiaW5zZXJ0Tm90aWNpYXMiLCJ1cGRhdGVOb3RpY2lhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFNBQU8sRUFBRSx3Q0FESSxDQUViOztBQUZhLENBQWY7QUFJQSxJQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUosTUFBYixDQUFoQjtBQUVBLElBQU1LLEdBQUcsR0FBRyxFQUFaOztBQUVBQSxHQUFHLENBQUNDLFdBQUosR0FBa0IsWUFBTTtBQUN0QixTQUFPSixPQUFPLENBQUM7QUFDYkssVUFBTSxFQUFFLEtBREs7QUFFYkMsT0FBRyxFQUFFO0FBRlEsR0FBRCxDQUFkO0FBSUQsQ0FMRDs7QUFPQUgsR0FBRyxDQUFDSSxjQUFKLEdBQXFCLFVBQUNDLE9BQUQsRUFBYTtBQUNoQyxTQUFPUixPQUFPLENBQUM7QUFDYkssVUFBTSxFQUFFLFFBREs7QUFFYkMsT0FBRyxFQUFFLFlBRlE7QUFHYkcsUUFBSSxFQUFFRDtBQUhPLEdBQUQsQ0FBZDtBQUtELENBTkQ7O0FBUUFMLEdBQUcsQ0FBQ08sY0FBSixHQUFxQixVQUFDRixPQUFELEVBQWE7QUFDaEMsU0FBT1IsT0FBTyxDQUFDO0FBQ2JLLFVBQU0sRUFBRSxNQURLO0FBRWJDLE9BQUcsRUFBRSxZQUZRO0FBR2JHLFFBQUksRUFBRUQ7QUFITyxHQUFELENBQWQ7QUFLRCxDQU5EOztBQVFBTCxHQUFHLENBQUNRLGNBQUosR0FBcUIsVUFBQ0gsT0FBRCxFQUFhO0FBQ2hDLFNBQU9SLE9BQU8sQ0FBQztBQUNiSyxVQUFNLEVBQUUsS0FESztBQUViQyxPQUFHLEVBQUUsWUFGUTtBQUdiRyxRQUFJLEVBQUVEO0FBSE8sR0FBRCxDQUFkO0FBS0QsQ0FORDs7QUFRZUwsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFuZWwvbm90aWNpYXMuYWY1YzhmZTY3NzNlNjQ4YTgwNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBiYXNlVVJMOiBcImh0dHBzOi8vd3d3LmJtb3NvbHVjaW9uZXMuY29tL2FwaS1yZHYvXCIsXHJcbiAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbn07XHJcbmNvbnN0IHJlcXVlc3QgPSBheGlvcy5jcmVhdGUoY29uZmlnKTtcclxuXHJcbmNvbnN0IGFwaSA9IHt9O1xyXG5cclxuYXBpLmdldE5vdGljaWFzID0gKCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHVybDogXCJjb250ZW5pZG8vXCIsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkuZGV0ZXRlTm90aWNpYXMgPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgIHVybDogXCJjb250ZW5pZG8vXCIsXHJcbiAgICBkYXRhOiBwYXlsb2FkLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuYXBpLmluc2VydE5vdGljaWFzID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBcImNvbnRlbmlkby9cIixcclxuICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkudXBkYXRlTm90aWNpYXMgPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIHVybDogXCJjb250ZW5pZG8vXCIsXHJcbiAgICBkYXRhOiBwYXlsb2FkLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9