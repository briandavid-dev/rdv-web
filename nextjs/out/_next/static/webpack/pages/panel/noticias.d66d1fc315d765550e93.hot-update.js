webpackHotUpdate_N_E("pages/panel/noticias",{

/***/ "./components/panel/Noticias/services.js":
/*!***********************************************!*\
  !*** ./components/panel/Noticias/services.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/request */ "./config/request.js");

var api = {};

api.getNoticias = function () {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "GET",
    url: "contenido/"
  });
};

api.deteteNoticias = function (payload) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "DELETE",
    url: "contenido/",
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9Ob3RpY2lhcy9zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiYXBpIiwiZ2V0Tm90aWNpYXMiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiZGV0ZXRlTm90aWNpYXMiLCJwYXlsb2FkIiwiZGF0YSIsImluc2VydE5vdGljaWFzIiwidXBkYXRlTm90aWNpYXMiLCJjb25maWciLCJiYXNlVVJMIiwiYXhpb3MiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxHQUFHLEdBQUcsRUFBWjs7QUFFQUEsR0FBRyxDQUFDQyxXQUFKLEdBQWtCLFlBQU07QUFDdEIsU0FBT0MsK0RBQU8sQ0FBQztBQUNiQyxVQUFNLEVBQUUsS0FESztBQUViQyxPQUFHLEVBQUU7QUFGUSxHQUFELENBQWQ7QUFJRCxDQUxEOztBQU9BSixHQUFHLENBQUNLLGNBQUosR0FBcUIsVUFBQ0MsT0FBRCxFQUFhO0FBQ2hDLFNBQU9KLCtEQUFPLENBQUM7QUFDYkMsVUFBTSxFQUFFLFFBREs7QUFFYkMsT0FBRyxFQUFFLFlBRlE7QUFHYkcsUUFBSSxFQUFFRDtBQUhPLEdBQUQsQ0FBZDtBQUtELENBTkQ7O0FBUUFOLEdBQUcsQ0FBQ1EsY0FBSixHQUFxQixVQUFDRixPQUFELEVBQWE7QUFDaEMsU0FBT0osK0RBQU8sQ0FBQztBQUNiQyxVQUFNLEVBQUUsTUFESztBQUViQyxPQUFHLEVBQUUsWUFGUTtBQUdiRyxRQUFJLEVBQUVEO0FBSE8sR0FBRCxDQUFkO0FBS0QsQ0FORDs7QUFRQU4sR0FBRyxDQUFDUyxjQUFKLEdBQXFCLFVBQUNILE9BQUQsRUFBYTtBQUNoQyxTQUFPSiwrREFBTyxDQUFDO0FBQ2JDLFVBQU0sRUFBRSxLQURLO0FBRWJDLE9BQUcsRUFBRSxZQUZRO0FBR2JHLFFBQUksRUFBRUQ7QUFITyxHQUFELENBQWQ7QUFLRCxDQU5EOztBQVFlTixrRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTVUsTUFBTSxHQUFHO0FBQ2I7QUFDQUMsU0FBTyxFQUFFLHFDQUZJLENBR2I7O0FBSGEsQ0FBZjtBQUtBLElBQU1ULE9BQU8sR0FBR1UsNENBQUssQ0FBQ0MsTUFBTixDQUFhSCxNQUFiLENBQWhCO0FBRWVSLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhbmVsL25vdGljaWFzLmQ2NmQxZmMzMTVkNzY1NTUwZTkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL3JlcXVlc3RcIjtcclxuXHJcbmNvbnN0IGFwaSA9IHt9O1xyXG5cclxuYXBpLmdldE5vdGljaWFzID0gKCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHVybDogXCJjb250ZW5pZG8vXCIsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkuZGV0ZXRlTm90aWNpYXMgPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgIHVybDogXCJjb250ZW5pZG8vXCIsXHJcbiAgICBkYXRhOiBwYXlsb2FkLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuYXBpLmluc2VydE5vdGljaWFzID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBcImNvbnRlbmlkby9cIixcclxuICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkudXBkYXRlTm90aWNpYXMgPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIHVybDogXCJjb250ZW5pZG8vXCIsXHJcbiAgICBkYXRhOiBwYXlsb2FkLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgLy8gYmFzZVVSTDogXCJodHRwczovL3d3dy5ibW9zb2x1Y2lvbmVzLmNvbS9zZXJ2aWNlcy1yZHYvXCIsXHJcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvc2VydmljZXMtcmR2L1wiLFxyXG4gIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG59O1xyXG5jb25zdCByZXF1ZXN0ID0gYXhpb3MuY3JlYXRlKGNvbmZpZyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9