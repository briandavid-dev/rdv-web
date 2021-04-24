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
  // baseURL: "https://www.bmosoluciones.com/services-rdv/",
  baseURL: "http://localhost:5000/services-rdv/" // "Content-Type": "application/json",

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9Ob3RpY2lhcy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJiYXNlVVJMIiwicmVxdWVzdCIsImF4aW9zIiwiY3JlYXRlIiwiYXBpIiwiZ2V0Tm90aWNpYXMiLCJtZXRob2QiLCJ1cmwiLCJkZXRldGVOb3RpY2lhcyIsInBheWxvYWQiLCJkYXRhIiwiaW5zZXJ0Tm90aWNpYXMiLCJ1cGRhdGVOb3RpY2lhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2I7QUFDQUMsU0FBTyxFQUFFLHFDQUZJLENBR2I7O0FBSGEsQ0FBZjtBQUtBLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhSixNQUFiLENBQWhCO0FBRUEsSUFBTUssR0FBRyxHQUFHLEVBQVo7O0FBRUFBLEdBQUcsQ0FBQ0MsV0FBSixHQUFrQixZQUFNO0FBQ3RCLFNBQU9KLE9BQU8sQ0FBQztBQUNiSyxVQUFNLEVBQUUsS0FESztBQUViQyxPQUFHLEVBQUU7QUFGUSxHQUFELENBQWQ7QUFJRCxDQUxEOztBQU9BSCxHQUFHLENBQUNJLGNBQUosR0FBcUIsVUFBQ0MsT0FBRCxFQUFhO0FBQ2hDLFNBQU9SLE9BQU8sQ0FBQztBQUNiSyxVQUFNLEVBQUUsUUFESztBQUViQyxPQUFHLEVBQUUsWUFGUTtBQUdiRyxRQUFJLEVBQUVEO0FBSE8sR0FBRCxDQUFkO0FBS0QsQ0FORDs7QUFRQUwsR0FBRyxDQUFDTyxjQUFKLEdBQXFCLFVBQUNGLE9BQUQsRUFBYTtBQUNoQyxTQUFPUixPQUFPLENBQUM7QUFDYkssVUFBTSxFQUFFLE1BREs7QUFFYkMsT0FBRyxFQUFFLFlBRlE7QUFHYkcsUUFBSSxFQUFFRDtBQUhPLEdBQUQsQ0FBZDtBQUtELENBTkQ7O0FBUUFMLEdBQUcsQ0FBQ1EsY0FBSixHQUFxQixVQUFDSCxPQUFELEVBQWE7QUFDaEMsU0FBT1IsT0FBTyxDQUFDO0FBQ2JLLFVBQU0sRUFBRSxLQURLO0FBRWJDLE9BQUcsRUFBRSxZQUZRO0FBR2JHLFFBQUksRUFBRUQ7QUFITyxHQUFELENBQWQ7QUFLRCxDQU5EOztBQVFlTCxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYW5lbC9ub3RpY2lhcy5mZjNkNDc1NDc5MzA3MTA2ODI2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIC8vIGJhc2VVUkw6IFwiaHR0cHM6Ly93d3cuYm1vc29sdWNpb25lcy5jb20vc2VydmljZXMtcmR2L1wiLFxyXG4gIGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3NlcnZpY2VzLXJkdi9cIixcclxuICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxufTtcclxuY29uc3QgcmVxdWVzdCA9IGF4aW9zLmNyZWF0ZShjb25maWcpO1xyXG5cclxuY29uc3QgYXBpID0ge307XHJcblxyXG5hcGkuZ2V0Tm90aWNpYXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBcImNvbnRlbmlkby9cIixcclxuICB9KTtcclxufTtcclxuXHJcbmFwaS5kZXRldGVOb3RpY2lhcyA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgdXJsOiBcImNvbnRlbmlkby9cIixcclxuICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkuaW5zZXJ0Tm90aWNpYXMgPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFwiY29udGVuaWRvL1wiLFxyXG4gICAgZGF0YTogcGF5bG9hZCxcclxuICB9KTtcclxufTtcclxuXHJcbmFwaS51cGRhdGVOb3RpY2lhcyA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgdXJsOiBcImNvbnRlbmlkby9cIixcclxuICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=