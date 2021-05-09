webpackHotUpdate_N_E(1,{

/***/ "./components/common/MapeoImagen1/index.js":
/*!*************************************************!*\
  !*** ./components/common/MapeoImagen1/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _qiuz_react_image_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @qiuz/react-image-map */ "./node_modules/@qiuz/react-image-map/index.js");
/* harmony import */ var _qiuz_react_image_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_qiuz_react_image_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\components\\common\\MapeoImagen1\\index.js",
    _s = $RefreshSig$();





var onMapClick = function onMapClick(area, index) {
  var tip = "click map".concat(area.href || index + 1);
  console.log(tip);
  alert(tip);
}; // in hooks


function Example() {
  _s();

  var _this = this;

  var mapArea = function mapArea() {
    return [{
      left: "29%",
      top: "8%",
      height: "8%",
      width: "41%",
      style: {
        background: "rgba(255, 0, 0, 0)",
        border: "0px solid",
        cursor: "pointer"
      }
    }, {
      left: "1%",
      top: "50%",
      height: "10%",
      width: "10%",
      style: {
        background: "rgba(255, 0, 0, 0)",
        border: "0px solid",
        cursor: "pointer"
      }
    }];
  };

  var img = "https://www.bmosoluciones.com/assets/imgs/elrom/RON1.png";
  var ImageMapComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_qiuz_react_image_map__WEBPACK_IMPORTED_MODULE_1__["ImageMap"], {
      className: "usage-map",
      src: img,
      map: mapArea(),
      onMapClick: onMapClick,
      style: {
        width: "1000px",
        maxWidth: "100%"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this);
  }, [img]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: ImageMapComponent
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 10
  }, this);
}

_s(Example, "SUiiHIhevwTjVIhcnGd1P/zMBFU=");

_c = Example;

var _c;

$RefreshReg$(_c, "Example");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTWFwZW9JbWFnZW4xL2luZGV4LmpzIl0sIm5hbWVzIjpbIm9uTWFwQ2xpY2siLCJhcmVhIiwiaW5kZXgiLCJ0aXAiLCJocmVmIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiRXhhbXBsZSIsIm1hcEFyZWEiLCJsZWZ0IiwidG9wIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdHlsZSIsImJhY2tncm91bmQiLCJib3JkZXIiLCJjdXJzb3IiLCJpbWciLCJJbWFnZU1hcENvbXBvbmVudCIsIlJlYWN0IiwidXNlTWVtbyIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOzs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDbEMsTUFBTUMsR0FBRyxzQkFBZUYsSUFBSSxDQUFDRyxJQUFMLElBQWFGLEtBQUssR0FBRyxDQUFwQyxDQUFUO0FBQ0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0FJLE9BQUssQ0FBQ0osR0FBRCxDQUFMO0FBQ0QsQ0FKRCxDLENBTUE7OztBQUNlLFNBQVNLLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixXQUFPLENBQ0w7QUFDRUMsVUFBSSxFQUFFLEtBRFI7QUFFRUMsU0FBRyxFQUFFLElBRlA7QUFHRUMsWUFBTSxFQUFFLElBSFY7QUFJRUMsV0FBSyxFQUFFLEtBSlQ7QUFLRUMsV0FBSyxFQUFFO0FBQ0xDLGtCQUFVLEVBQUUsb0JBRFA7QUFFTEMsY0FBTSxFQUFFLFdBRkg7QUFHTEMsY0FBTSxFQUFFO0FBSEg7QUFMVCxLQURLLEVBWUw7QUFDRVAsVUFBSSxFQUFFLElBRFI7QUFFRUMsU0FBRyxFQUFFLEtBRlA7QUFHRUMsWUFBTSxFQUFFLEtBSFY7QUFJRUMsV0FBSyxFQUFFLEtBSlQ7QUFLRUMsV0FBSyxFQUFFO0FBQ0xDLGtCQUFVLEVBQUUsb0JBRFA7QUFFTEMsY0FBTSxFQUFFLFdBRkg7QUFHTEMsY0FBTSxFQUFFO0FBSEg7QUFMVCxLQVpLLENBQVA7QUF3QkQsR0F6QkQ7O0FBMkJBLE1BQU1DLEdBQUcsR0FBRywwREFBWjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHQyw0Q0FBSyxDQUFDQyxPQUFOLENBQ3hCO0FBQUEsd0JBQ0UscUVBQUMsOERBQUQ7QUFDRSxlQUFTLEVBQUMsV0FEWjtBQUVFLFNBQUcsRUFBRUgsR0FGUDtBQUdFLFNBQUcsRUFBRVQsT0FBTyxFQUhkO0FBSUUsZ0JBQVUsRUFBRVQsVUFKZDtBQUtFLFdBQUssRUFBRTtBQUFFYSxhQUFLLEVBQUUsUUFBVDtBQUFtQlMsZ0JBQVEsRUFBRTtBQUE3QjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBLEdBRHdCLEVBVXhCLENBQUNKLEdBQUQsQ0FWd0IsQ0FBMUI7QUFhQSxzQkFBTztBQUFBLGNBQU1DO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBNUN1QlgsTzs7S0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLmRlZDc3NzdhNWJmYTg0MzBjZjg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJbWFnZU1hcCB9IGZyb20gXCJAcWl1ei9yZWFjdC1pbWFnZS1tYXBcIjtcclxuXHJcbmNvbnN0IG9uTWFwQ2xpY2sgPSAoYXJlYSwgaW5kZXgpID0+IHtcclxuICBjb25zdCB0aXAgPSBgY2xpY2sgbWFwJHthcmVhLmhyZWYgfHwgaW5kZXggKyAxfWA7XHJcbiAgY29uc29sZS5sb2codGlwKTtcclxuICBhbGVydCh0aXApO1xyXG59O1xyXG5cclxuLy8gaW4gaG9va3NcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSgpIHtcclxuICBjb25zdCBtYXBBcmVhID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGxlZnQ6IFwiMjklXCIsXHJcbiAgICAgICAgdG9wOiBcIjglXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjglXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNDElXCIsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsIDAsIDAsIDApXCIsXHJcbiAgICAgICAgICBib3JkZXI6IFwiMHB4IHNvbGlkXCIsXHJcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsZWZ0OiBcIjElXCIsXHJcbiAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMCVcIixcclxuICAgICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwgMCwgMCwgMClcIixcclxuICAgICAgICAgIGJvcmRlcjogXCIwcHggc29saWRcIixcclxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW1nID0gXCJodHRwczovL3d3dy5ibW9zb2x1Y2lvbmVzLmNvbS9hc3NldHMvaW1ncy9lbHJvbS9ST04xLnBuZ1wiO1xyXG5cclxuICBjb25zdCBJbWFnZU1hcENvbXBvbmVudCA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoXHJcbiAgICAgIDxJbWFnZU1hcFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInVzYWdlLW1hcFwiXHJcbiAgICAgICAgc3JjPXtpbWd9XHJcbiAgICAgICAgbWFwPXttYXBBcmVhKCl9XHJcbiAgICAgICAgb25NYXBDbGljaz17b25NYXBDbGlja31cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAwcHhcIiwgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgIC8+XHJcbiAgICApLFxyXG4gICAgW2ltZ11cclxuICApO1xyXG5cclxuICByZXR1cm4gPGRpdj57SW1hZ2VNYXBDb21wb25lbnR9PC9kaXY+O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=