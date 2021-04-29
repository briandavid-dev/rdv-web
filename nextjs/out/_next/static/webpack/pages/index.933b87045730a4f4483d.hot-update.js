webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_MenuDesktop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MenuDesktop */ "./components/MenuDesktop/index.js");
/* harmony import */ var _pagesServices_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pagesServices/home */ "./pagesServices/home.js");
/* harmony import */ var _lang_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lang/es */ "./lang/es.js");
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lang/en */ "./lang/en.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();














var PageIndex = function PageIndex() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var lang = "es";

  if (router.query.lang === "en") {
    lang = "en";
  }

  var strings = {
    es: _lang_es__WEBPACK_IMPORTED_MODULE_8__["default"],
    en: _lang_en__WEBPACK_IMPORTED_MODULE_9__["default"]
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      dataNoticias = _useState[0],
      setDataNoticias = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      dataNoticiasLoading = _useState2[0],
      setDataNoticiasLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      modalEdadVisible = _useState3[0],
      setModalEdadVisible = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      textoMayorEdad = _useState4[0],
      setTextoMayorEdad = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setDataNoticiasLoading(true);
    _pagesServices_home__WEBPACK_IMPORTED_MODULE_7__["default"].getHomeNoticias(lang).then(function (response) {
      var _response$data = response.data,
          codigo = _response$data.codigo,
          results = _response$data.results;

      if (codigo === "1") {
        setDataNoticias(results);
      }

      setDataNoticiasLoading(false);
    })["catch"](function (error) {
      console.log("error", error);
      setDataNoticiasLoading(false);
    });
  }, [lang]);

  var handleEdad = function handleEdad(mayorDeEdad) {
    if (mayorDeEdad === "S") {
      setModalEdadVisible(false);
      setTextoMayorEdad("");
    } else if (mayorDeEdad === "N") {
      setTextoMayorEdad(strings[lang].validacionEdad.noTienesEdad);
    }
  };

  console.log("strings[lang]", strings[lang]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: "hola"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(PageIndex, "RcWbRJQAZTZnHCWlQOodUA5xvKw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = PageIndex;
/* harmony default export */ __webpack_exports__["default"] = (PageIndex);

var _c;

$RefreshReg$(_c, "PageIndex");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZUluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwibGFuZyIsInF1ZXJ5Iiwic3RyaW5ncyIsImVzIiwiZW4iLCJ1c2VTdGF0ZSIsImRhdGFOb3RpY2lhcyIsInNldERhdGFOb3RpY2lhcyIsImRhdGFOb3RpY2lhc0xvYWRpbmciLCJzZXREYXRhTm90aWNpYXNMb2FkaW5nIiwibW9kYWxFZGFkVmlzaWJsZSIsInNldE1vZGFsRWRhZFZpc2libGUiLCJ0ZXh0b01heW9yRWRhZCIsInNldFRleHRvTWF5b3JFZGFkIiwidXNlRWZmZWN0IiwiQXBpSG9tZSIsImdldEhvbWVOb3RpY2lhcyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb2RpZ28iLCJyZXN1bHRzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRWRhZCIsIm1heW9yRGVFZGFkIiwidmFsaWRhY2lvbkVkYWQiLCJub1RpZW5lc0VkYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQUlDLElBQUksR0FBRyxJQUFYOztBQUNBLE1BQUlGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRCxJQUFiLEtBQXNCLElBQTFCLEVBQWdDO0FBQzlCQSxRQUFJLEdBQUcsSUFBUDtBQUNEOztBQUNELE1BQU1FLE9BQU8sR0FBRztBQUFFQyxNQUFFLEVBQUZBLGdEQUFGO0FBQU1DLE1BQUUsRUFBRkEsZ0RBQUVBO0FBQVIsR0FBaEI7O0FBUHNCLGtCQVNrQkMsc0RBQVEsQ0FBQyxFQUFELENBVDFCO0FBQUEsTUFTZkMsWUFUZTtBQUFBLE1BU0RDLGVBVEM7O0FBQUEsbUJBVWdDRixzREFBUSxDQUFDLEtBQUQsQ0FWeEM7QUFBQSxNQVVmRyxtQkFWZTtBQUFBLE1BVU1DLHNCQVZOOztBQUFBLG1CQVcwQkosc0RBQVEsQ0FBQyxJQUFELENBWGxDO0FBQUEsTUFXZkssZ0JBWGU7QUFBQSxNQVdHQyxtQkFYSDs7QUFBQSxtQkFZc0JOLHNEQUFRLENBQUMsRUFBRCxDQVo5QjtBQUFBLE1BWWZPLGNBWmU7QUFBQSxNQVlDQyxpQkFaRDs7QUFjdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkTCwwQkFBc0IsQ0FBQyxJQUFELENBQXRCO0FBQ0FNLCtEQUFPLENBQUNDLGVBQVIsQ0FBd0JoQixJQUF4QixFQUNHaUIsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUFBLDJCQUNVQSxRQUFRLENBQUNDLElBRG5CO0FBQUEsVUFDVkMsTUFEVSxrQkFDVkEsTUFEVTtBQUFBLFVBQ0ZDLE9BREUsa0JBQ0ZBLE9BREU7O0FBRWxCLFVBQUlELE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2xCYix1QkFBZSxDQUFDYyxPQUFELENBQWY7QUFDRDs7QUFDRFosNEJBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNELEtBUEgsV0FRUyxVQUFDYSxLQUFELEVBQVc7QUFDaEJDLGFBQU8sQ0FBQ0MsR0FBUixVQUFxQkYsS0FBckI7QUFDQWIsNEJBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNELEtBWEg7QUFZRCxHQWRRLEVBY04sQ0FBQ1QsSUFBRCxDQWRNLENBQVQ7O0FBZ0JBLE1BQU15QixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxXQUFELEVBQWlCO0FBQ2xDLFFBQUlBLFdBQVcsS0FBSyxHQUFwQixFQUF5QjtBQUN2QmYseUJBQW1CLENBQUMsS0FBRCxDQUFuQjtBQUNBRSx1QkFBaUIsQ0FBQyxFQUFELENBQWpCO0FBQ0QsS0FIRCxNQUdPLElBQUlhLFdBQVcsS0FBSyxHQUFwQixFQUF5QjtBQUM5QmIsdUJBQWlCLENBQUNYLE9BQU8sQ0FBQ0YsSUFBRCxDQUFQLENBQWMyQixjQUFkLENBQTZCQyxZQUE5QixDQUFqQjtBQUNEO0FBQ0YsR0FQRDs7QUFRQUwsU0FBTyxDQUFDQyxHQUFSLGtCQUE2QnRCLE9BQU8sQ0FBQ0YsSUFBRCxDQUFwQztBQUVBLHNCQUNFO0FBQUEsMkJBQ0Usc0VBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQU9ELENBL0NEOztHQUFNSCxTO1VBQ1dFLHFEOzs7S0FEWEYsUztBQWlEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTMzYjg3MDQ1NzMwYTRmNDQ4M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2tlbGV0b24sIE1vZGFsLCBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWVudURlc2t0b3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVudURlc2t0b3BcIjtcclxuaW1wb3J0IEFwaUhvbWUgZnJvbSBcIi4uL3BhZ2VzU2VydmljZXMvaG9tZVwiO1xyXG5pbXBvcnQgZXMgZnJvbSBcIi4uL2xhbmcvZXNcIjtcclxuaW1wb3J0IGVuIGZyb20gXCIuLi9sYW5nL2VuXCI7XHJcblxyXG5jb25zdCBQYWdlSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGxldCBsYW5nID0gXCJlc1wiO1xyXG4gIGlmIChyb3V0ZXIucXVlcnkubGFuZyA9PT0gXCJlblwiKSB7XHJcbiAgICBsYW5nID0gXCJlblwiO1xyXG4gIH1cclxuICBjb25zdCBzdHJpbmdzID0geyBlcywgZW4gfTtcclxuXHJcbiAgY29uc3QgW2RhdGFOb3RpY2lhcywgc2V0RGF0YU5vdGljaWFzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF0YU5vdGljaWFzTG9hZGluZywgc2V0RGF0YU5vdGljaWFzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsRWRhZFZpc2libGUsIHNldE1vZGFsRWRhZFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RleHRvTWF5b3JFZGFkLCBzZXRUZXh0b01heW9yRWRhZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERhdGFOb3RpY2lhc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBBcGlIb21lLmdldEhvbWVOb3RpY2lhcyhsYW5nKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvZGlnbywgcmVzdWx0cyB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBpZiAoY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgc2V0RGF0YU5vdGljaWFzKHJlc3VsdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXREYXRhTm90aWNpYXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcmAsIGVycm9yKTtcclxuICAgICAgICBzZXREYXRhTm90aWNpYXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW2xhbmddKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRhZCA9IChtYXlvckRlRWRhZCkgPT4ge1xyXG4gICAgaWYgKG1heW9yRGVFZGFkID09PSBcIlNcIikge1xyXG4gICAgICBzZXRNb2RhbEVkYWRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgc2V0VGV4dG9NYXlvckVkYWQoXCJcIik7XHJcbiAgICB9IGVsc2UgaWYgKG1heW9yRGVFZGFkID09PSBcIk5cIikge1xyXG4gICAgICBzZXRUZXh0b01heW9yRWRhZChzdHJpbmdzW2xhbmddLnZhbGlkYWNpb25FZGFkLm5vVGllbmVzRWRhZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhgc3RyaW5nc1tsYW5nXWAsIHN0cmluZ3NbbGFuZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPmhvbGE8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9