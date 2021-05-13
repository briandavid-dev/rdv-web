webpackHotUpdate_N_E("pages/premios/[id]",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9Qcm9kdWN0b3Mvc2VydmljZXMuanMiXSwibmFtZXMiOlsiYXBpIiwiZ2V0UHJvZHVjdG9zIiwiZW1wcmVzYUlkIiwidHlwZSIsInJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJnZXRQcm9kdWN0byIsInByb2R1Y3RvSWQiLCJkZXRldGVQcm9kdWN0byIsInBheWxvYWQiLCJkYXRhIiwiaW5zZXJ0UHJvZHVjdG8iLCJ1cGRhdGVQcm9kdWN0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLEdBQUcsR0FBRyxFQUFaOztBQUVBQSxHQUFHLENBQUNDLFlBQUosR0FBbUIsVUFBQ0MsU0FBRCxFQUFZQyxJQUFaLEVBQXFCO0FBQ3RDLFNBQU9DLCtEQUFPLENBQUM7QUFDYkMsVUFBTSxFQUFFLEtBREs7QUFFYkMsT0FBRyxvQkFBYUosU0FBYix3QkFBb0NDLElBQXBDO0FBRlUsR0FBRCxDQUFkO0FBSUQsQ0FMRDs7QUFPQUgsR0FBRyxDQUFDTyxXQUFKLEdBQWtCLFVBQUNDLFVBQUQsRUFBZ0I7QUFDaEMsU0FBT0osK0RBQU8sQ0FBQztBQUNiQyxVQUFNLEVBQUUsS0FESztBQUViQyxPQUFHLDZCQUFzQkUsVUFBdEI7QUFGVSxHQUFELENBQWQ7QUFJRCxDQUxEOztBQU9BUixHQUFHLENBQUNTLGNBQUosR0FBcUIsVUFBQ0MsT0FBRCxFQUFhO0FBQ2hDLFNBQU9OLCtEQUFPLENBQUM7QUFDYkMsVUFBTSxFQUFFLFFBREs7QUFFYkMsT0FBRyxFQUFFLG1CQUZRO0FBR2JLLFFBQUksRUFBRUQ7QUFITyxHQUFELENBQWQ7QUFLRCxDQU5EOztBQVFBVixHQUFHLENBQUNZLGNBQUosR0FBcUIsVUFBQ0YsT0FBRCxFQUFhO0FBQ2hDLFNBQU9OLCtEQUFPLENBQUM7QUFDYkMsVUFBTSxFQUFFLE1BREs7QUFFYkMsT0FBRyxFQUFFLG1CQUZRO0FBR2JLLFFBQUksRUFBRUQ7QUFITyxHQUFELENBQWQ7QUFLRCxDQU5EOztBQVFBVixHQUFHLENBQUNhLGNBQUosR0FBcUIsVUFBQ0gsT0FBRCxFQUFhO0FBQ2hDLFNBQU9OLCtEQUFPLENBQUM7QUFDYkMsVUFBTSxFQUFFLEtBREs7QUFFYkMsT0FBRyxFQUFFLG1CQUZRO0FBR2JLLFFBQUksRUFBRUQ7QUFITyxHQUFELENBQWQ7QUFLRCxDQU5EOztBQVFlVixrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcmVtaW9zL1tpZF0uNzhiNTNjZTk0MTc2YjFmMWE2OTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWcvcmVxdWVzdFwiO1xyXG5cclxuY29uc3QgYXBpID0ge307XHJcblxyXG5hcGkuZ2V0UHJvZHVjdG9zID0gKGVtcHJlc2FJZCwgdHlwZSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHVybDogYGVtcHJlc2EvJHtlbXByZXNhSWR9L3Byb2R1Y3Rvcy8ke3R5cGV9YCxcclxuICB9KTtcclxufTtcclxuXHJcbmFwaS5nZXRQcm9kdWN0byA9IChwcm9kdWN0b0lkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBgZW1wcmVzYS9wcm9kdWN0by8ke3Byb2R1Y3RvSWR9YCxcclxuICB9KTtcclxufTtcclxuXHJcbmFwaS5kZXRldGVQcm9kdWN0byA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgdXJsOiBcImVtcHJlc2EvcHJvZHVjdG8vXCIsXHJcbiAgICBkYXRhOiBwYXlsb2FkLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuYXBpLmluc2VydFByb2R1Y3RvID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBcImVtcHJlc2EvcHJvZHVjdG8vXCIsXHJcbiAgICBkYXRhOiBwYXlsb2FkLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuYXBpLnVwZGF0ZVByb2R1Y3RvID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICB1cmw6IFwiZW1wcmVzYS9wcm9kdWN0by9cIixcclxuICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=