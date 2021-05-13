webpackHotUpdate_N_E("pages/panel/empresas",{

/***/ "./components/panel/Empresas/BtnPremios/services.js":
/*!**********************************************************!*\
  !*** ./components/panel/Empresas/BtnPremios/services.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/request */ "./config/request.js");

var api = {};

api.getProductos = function (empresaId, type) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "GET",
    url: "empresa/".concat(empresaId, "/productos/:type")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9CdG5QcmVtaW9zL3NlcnZpY2VzLmpzIl0sIm5hbWVzIjpbImFwaSIsImdldFByb2R1Y3RvcyIsImVtcHJlc2FJZCIsInR5cGUiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiZ2V0UHJvZHVjdG8iLCJwcm9kdWN0b0lkIiwiZGV0ZXRlUHJvZHVjdG8iLCJwYXlsb2FkIiwiZGF0YSIsImluc2VydFByb2R1Y3RvIiwidXBkYXRlUHJvZHVjdG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxHQUFHLEdBQUcsRUFBWjs7QUFFQUEsR0FBRyxDQUFDQyxZQUFKLEdBQW1CLFVBQUNDLFNBQUQsRUFBWUMsSUFBWixFQUFxQjtBQUN0QyxTQUFPQywrREFBTyxDQUFDO0FBQ2JDLFVBQU0sRUFBRSxLQURLO0FBRWJDLE9BQUcsb0JBQWFKLFNBQWI7QUFGVSxHQUFELENBQWQ7QUFJRCxDQUxEOztBQU9BRixHQUFHLENBQUNPLFdBQUosR0FBa0IsVUFBQ0MsVUFBRCxFQUFnQjtBQUNoQyxTQUFPSiwrREFBTyxDQUFDO0FBQ2JDLFVBQU0sRUFBRSxLQURLO0FBRWJDLE9BQUcsNkJBQXNCRSxVQUF0QjtBQUZVLEdBQUQsQ0FBZDtBQUlELENBTEQ7O0FBT0FSLEdBQUcsQ0FBQ1MsY0FBSixHQUFxQixVQUFDQyxPQUFELEVBQWE7QUFDaEMsU0FBT04sK0RBQU8sQ0FBQztBQUNiQyxVQUFNLEVBQUUsUUFESztBQUViQyxPQUFHLEVBQUUsbUJBRlE7QUFHYkssUUFBSSxFQUFFRDtBQUhPLEdBQUQsQ0FBZDtBQUtELENBTkQ7O0FBUUFWLEdBQUcsQ0FBQ1ksY0FBSixHQUFxQixVQUFDRixPQUFELEVBQWE7QUFDaEMsU0FBT04sK0RBQU8sQ0FBQztBQUNiQyxVQUFNLEVBQUUsTUFESztBQUViQyxPQUFHLEVBQUUsbUJBRlE7QUFHYkssUUFBSSxFQUFFRDtBQUhPLEdBQUQsQ0FBZDtBQUtELENBTkQ7O0FBUUFWLEdBQUcsQ0FBQ2EsY0FBSixHQUFxQixVQUFDSCxPQUFELEVBQWE7QUFDaEMsU0FBT04sK0RBQU8sQ0FBQztBQUNiQyxVQUFNLEVBQUUsS0FESztBQUViQyxPQUFHLEVBQUUsbUJBRlE7QUFHYkssUUFBSSxFQUFFRDtBQUhPLEdBQUQsQ0FBZDtBQUtELENBTkQ7O0FBUWVWLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhbmVsL2VtcHJlc2FzLmUyN2M0NGUwYzExNjEzNzJjZDg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnL3JlcXVlc3RcIjtcclxuXHJcbmNvbnN0IGFwaSA9IHt9O1xyXG5cclxuYXBpLmdldFByb2R1Y3RvcyA9IChlbXByZXNhSWQsIHR5cGUpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB1cmw6IGBlbXByZXNhLyR7ZW1wcmVzYUlkfS9wcm9kdWN0b3MvOnR5cGVgLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuYXBpLmdldFByb2R1Y3RvID0gKHByb2R1Y3RvSWQpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB1cmw6IGBlbXByZXNhL3Byb2R1Y3RvLyR7cHJvZHVjdG9JZH1gLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuYXBpLmRldGV0ZVByb2R1Y3RvID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICB1cmw6IFwiZW1wcmVzYS9wcm9kdWN0by9cIixcclxuICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkuaW5zZXJ0UHJvZHVjdG8gPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFwiZW1wcmVzYS9wcm9kdWN0by9cIixcclxuICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkudXBkYXRlUHJvZHVjdG8gPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIHVybDogXCJlbXByZXNhL3Byb2R1Y3RvL1wiLFxyXG4gICAgZGF0YTogcGF5bG9hZCxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==