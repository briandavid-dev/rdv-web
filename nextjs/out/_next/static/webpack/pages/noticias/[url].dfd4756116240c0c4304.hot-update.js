webpackHotUpdate_N_E("pages/noticias/[url]",{

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

api.getNoticiasUltima = function (lang) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "GET",
    url: "noticias-ultima/".concat(lang)
  });
};

api.getNoticia = function (lang, url) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "GET",
    url: "noticias/".concat(url, "/").concat(lang)
  });
};

api.getNoticiaExcepto = function (lang, url) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "GET",
    url: "noticias-excepto/".concat(url, "/").concat(lang)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXNTZXJ2aWNlcy9ub3RpY2lhcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJnZXROb3RpY2lhc0xpc3RhZG8iLCJsYW5nIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImdldE5vdGljaWFzVWx0aW1hIiwiZ2V0Tm90aWNpYSIsImdldE5vdGljaWFFeGNlcHRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsR0FBRyxHQUFHLEVBQVo7O0FBRUFBLEdBQUcsQ0FBQ0Msa0JBQUosR0FBeUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pDLFNBQU9DLCtEQUFPLENBQUM7QUFDYkMsVUFBTSxFQUFFLEtBREs7QUFFYkMsT0FBRyw2QkFBc0JILElBQXRCO0FBRlUsR0FBRCxDQUFkO0FBSUQsQ0FMRDs7QUFPQUYsR0FBRyxDQUFDTSxpQkFBSixHQUF3QixVQUFDSixJQUFELEVBQVU7QUFDaEMsU0FBT0MsK0RBQU8sQ0FBQztBQUNiQyxVQUFNLEVBQUUsS0FESztBQUViQyxPQUFHLDRCQUFxQkgsSUFBckI7QUFGVSxHQUFELENBQWQ7QUFJRCxDQUxEOztBQU9BRixHQUFHLENBQUNPLFVBQUosR0FBaUIsVUFBQ0wsSUFBRCxFQUFPRyxHQUFQLEVBQWU7QUFDOUIsU0FBT0YsK0RBQU8sQ0FBQztBQUNiQyxVQUFNLEVBQUUsS0FESztBQUViQyxPQUFHLHFCQUFjQSxHQUFkLGNBQXFCSCxJQUFyQjtBQUZVLEdBQUQsQ0FBZDtBQUlELENBTEQ7O0FBT0FGLEdBQUcsQ0FBQ1EsaUJBQUosR0FBd0IsVUFBQ04sSUFBRCxFQUFPRyxHQUFQLEVBQWU7QUFDckMsU0FBT0YsK0RBQU8sQ0FBQztBQUNiQyxVQUFNLEVBQUUsS0FESztBQUViQyxPQUFHLDZCQUFzQkEsR0FBdEIsY0FBNkJILElBQTdCO0FBRlUsR0FBRCxDQUFkO0FBSUQsQ0FMRDs7QUFPZUYsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbm90aWNpYXMvW3VybF0uZGZkNDc1NjExNjI0MGMwYzQzMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi9jb25maWcvcmVxdWVzdFwiO1xyXG5cclxuY29uc3QgYXBpID0ge307XHJcblxyXG5hcGkuZ2V0Tm90aWNpYXNMaXN0YWRvID0gKGxhbmcpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB1cmw6IGBub3RpY2lhcy1saXN0YWRvLyR7bGFuZ31gLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuYXBpLmdldE5vdGljaWFzVWx0aW1hID0gKGxhbmcpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB1cmw6IGBub3RpY2lhcy11bHRpbWEvJHtsYW5nfWAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkuZ2V0Tm90aWNpYSA9IChsYW5nLCB1cmwpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB1cmw6IGBub3RpY2lhcy8ke3VybH0vJHtsYW5nfWAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkuZ2V0Tm90aWNpYUV4Y2VwdG8gPSAobGFuZywgdXJsKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBgbm90aWNpYXMtZXhjZXB0by8ke3VybH0vJHtsYW5nfWAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=