webpackHotUpdate_N_E("pages/panel/noticias",{

/***/ "./components/panel/services.js":
/*!**************************************!*\
  !*** ./components/panel/services.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/request */ "./config/request.js");

var api = {};

api.getNoticias = function (type) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "GET",
    url: "contenido/".concat(type)
  });
};

api.deteteNoticias = function (payload) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "DELETE",
    url: "contenisdo/",
    data: payload
  });
};

api.insertNoticias = function (payload) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "POST",
    url: "contenido/",
    data: payload
  });
};

api.updateNoticias = function (payload) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJnZXROb3RpY2lhcyIsInR5cGUiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiZGV0ZXRlTm90aWNpYXMiLCJwYXlsb2FkIiwiZGF0YSIsImluc2VydE5vdGljaWFzIiwidXBkYXRlTm90aWNpYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxHQUFHLEdBQUcsRUFBWjs7QUFFQUEsR0FBRyxDQUFDQyxXQUFKLEdBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUMxQixTQUFPQywrREFBTyxDQUFDO0FBQ2JDLFVBQU0sRUFBRSxLQURLO0FBRWJDLE9BQUcsc0JBQWVILElBQWY7QUFGVSxHQUFELENBQWQ7QUFJRCxDQUxEOztBQU9BRixHQUFHLENBQUNNLGNBQUosR0FBcUIsVUFBQ0MsT0FBRCxFQUFhO0FBQ2hDLFNBQU9KLCtEQUFPLENBQUM7QUFDYkMsVUFBTSxFQUFFLFFBREs7QUFFYkMsT0FBRyxFQUFFLGFBRlE7QUFHYkcsUUFBSSxFQUFFRDtBQUhPLEdBQUQsQ0FBZDtBQUtELENBTkQ7O0FBUUFQLEdBQUcsQ0FBQ1MsY0FBSixHQUFxQixVQUFDRixPQUFELEVBQWE7QUFDaEMsU0FBT0osK0RBQU8sQ0FBQztBQUNiQyxVQUFNLEVBQUUsTUFESztBQUViQyxPQUFHLEVBQUUsWUFGUTtBQUdiRyxRQUFJLEVBQUVEO0FBSE8sR0FBRCxDQUFkO0FBS0QsQ0FORDs7QUFRQVAsR0FBRyxDQUFDVSxjQUFKLEdBQXFCLFVBQUNILE9BQUQsRUFBYTtBQUNoQyxTQUFPSiwrREFBTyxDQUFDO0FBQ2JDLFVBQU0sRUFBRSxLQURLO0FBRWJDLE9BQUcsRUFBRSxZQUZRO0FBR2JHLFFBQUksRUFBRUQ7QUFITyxHQUFELENBQWQ7QUFLRCxDQU5EOztBQVFlUCxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYW5lbC9ub3RpY2lhcy4xMmJiOTc3MGY5MzIyM2EwMTAyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4uLy4uL2NvbmZpZy9yZXF1ZXN0XCI7XHJcblxyXG5jb25zdCBhcGkgPSB7fTtcclxuXHJcbmFwaS5nZXROb3RpY2lhcyA9ICh0eXBlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBgY29udGVuaWRvLyR7dHlwZX1gLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuYXBpLmRldGV0ZU5vdGljaWFzID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICB1cmw6IFwiY29udGVuaXNkby9cIixcclxuICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkuaW5zZXJ0Tm90aWNpYXMgPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFwiY29udGVuaWRvL1wiLFxyXG4gICAgZGF0YTogcGF5bG9hZCxcclxuICB9KTtcclxufTtcclxuXHJcbmFwaS51cGRhdGVOb3RpY2lhcyA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgdXJsOiBcImNvbnRlbmlkby9cIixcclxuICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=