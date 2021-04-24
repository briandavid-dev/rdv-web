webpackHotUpdate_N_E("pages/panel/login",{

/***/ "./pages/panel/login.js":
/*!******************************!*\
  !*** ./pages/panel/login.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_panel_Noticias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/panel/Noticias */ "./components/panel/Noticias/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\pages\\panel\\login.js",
    _this = undefined;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Header = antd__WEBPACK_IMPORTED_MODULE_4__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_4__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_4__["Layout"].Footer;
var stylesCss = new String("body{color:#62452d;}.site-layout-content{min-height:280px;padding:24px;background:#fff;}#components-layout-demo-top .logo{float:left;width:120px;height:31px;margin:16px 24px 16px 0;background:rgba(255,255,255,0.3);}.ant-row-rtl #components-layout-demo-top .logo{float:right;margin:16px 0 16px 24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxwYW5lbFxcbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTzRCLEFBR21CLEFBR0csQUFLTixBQU9DLFdBTkEsQ0FPWSxFQWYxQixHQUdlLE1BTUQsT0FMSSxLQU1RLENBTTFCLFVBWEEsYUFNc0MsaUNBQ3RDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxwYW5lbFxcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgTGF5b3V0LCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IE5vdGljaWFzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhbmVsL05vdGljaWFzXCI7XHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcclxuXHJcbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgXHJcbiAgYm9keSB7XHJcbiAgICBjb2xvcjogIzYyNDUyZDtcclxuICB9XHJcbiAgLnNpdGUtbGF5b3V0LWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogMjgwcHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbiAgI2NvbXBvbmVudHMtbGF5b3V0LWRlbW8tdG9wIC5sb2dvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAgbWFyZ2luOiAxNnB4IDI0cHggMTZweCAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIH1cclxuICAuYW50LXJvdy1ydGwgI2NvbXBvbmVudHMtbGF5b3V0LWRlbW8tdG9wIC5sb2dvIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMTZweCAwIDE2cHggMjRweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge3N0eWxlc0Nzc31cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuXHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CbWJ4dVB3UWEybGMvRlZ6QmNOSjdVQXlKeE02d3VxSWo2MXRMcmM0d1NYMHN6SC9FdituWVJSdVdsb2xmbGZsXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8dGl0bGU+TG9naW48L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIHsuLi5mb3JtSXRlbUxheW91dH1cclxuICAgICAgICAgIGxheW91dD17Zm9ybUxheW91dH1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGxheW91dDogZm9ybUxheW91dCB9fVxyXG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e29uRm9ybUxheW91dENoYW5nZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiRm9ybSBMYXlvdXRcIiBuYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCB2YWx1ZT17Zm9ybUxheW91dH0+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cImhvcml6b250YWxcIj5Ib3Jpem9udGFsPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cInZlcnRpY2FsXCI+VmVydGljYWw8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiaW5saW5lXCI+SW5saW5lPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGaWVsZCBBXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cImlucHV0IHBsYWNlaG9sZGVyXCIgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkZpZWxkIEJcIj5cclxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiaW5wdXQgcGxhY2Vob2xkZXJcIiAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIHsuLi5idXR0b25JdGVtTGF5b3V0fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPlN1Ym1pdDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\pages\\\\panel\\\\login.js */");
stylesCss.__hash = "2824321960";

var login = function login() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], _objectSpread(_objectSpread({}, formItemLayout), {}, {
        layout: formLayout,
        form: form,
        initialValues: {
          layout: formLayout
        },
        onValuesChange: onFormLayoutChange,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
          label: "Form Layout",
          name: "layout",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Radio.Group, {
            value: formLayout,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Radio.Button, {
              value: "horizontal",
              children: "Horizontal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Radio.Button, {
              value: "vertical",
              children: "Vertical"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Radio.Button, {
              value: "inline",
              children: "Inline"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
          label: "Field A",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            placeholder: "input placeholder"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
          label: "Field B",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            placeholder: "input placeholder"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _objectSpread(_objectSpread({}, buttonItemLayout), {}, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "primary",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (login);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFuZWwvbG9naW4uanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiQ29udGVudCIsIkZvb3RlciIsInN0eWxlc0NzcyIsImxvZ2luIiwiZm9ybUl0ZW1MYXlvdXQiLCJmb3JtTGF5b3V0IiwiZm9ybSIsImxheW91dCIsIm9uRm9ybUxheW91dENoYW5nZSIsImJ1dHRvbkl0ZW1MYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOzs7SUFDUUEsTSxHQUE0QkMsMkMsQ0FBNUJELE07SUFBUUUsTyxHQUFvQkQsMkMsQ0FBcEJDLE87SUFBU0MsTSxHQUFXRiwyQyxDQUFYRSxNO0FBRXpCLElBQU1DLFNBQVMsdWtKQUFmOzs7QUFzQkEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUlFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLHNCQUFXLGlCQUFqQjtBQUFtQyxlQUFPLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBS0U7QUFDRSxZQUFJLEVBQUMsK0VBRFA7QUFFRSxXQUFHLEVBQUMsWUFGTjtBQUdFLGlCQUFTLEVBQUMseUVBSFo7QUFJRSxtQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBV0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBWUU7QUFDRSxZQUFJLEVBQUMsd0ZBRFA7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkYsZUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUF1QkU7QUFBQSw2QkFDRSxxRUFBQyx5Q0FBRCxrQ0FDTUMsY0FETjtBQUVFLGNBQU0sRUFBRUMsVUFGVjtBQUdFLFlBQUksRUFBRUMsSUFIUjtBQUlFLHFCQUFhLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRUY7QUFBVixTQUpqQjtBQUtFLHNCQUFjLEVBQUVHLGtCQUxsQjtBQUFBLGdDQU9FLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLGVBQUssRUFBQyxhQUFqQjtBQUErQixjQUFJLEVBQUMsUUFBcEM7QUFBQSxpQ0FDRSxxRUFBQyxLQUFELENBQU8sS0FBUDtBQUFhLGlCQUFLLEVBQUVILFVBQXBCO0FBQUEsb0NBQ0UscUVBQUMsS0FBRCxDQUFPLE1BQVA7QUFBYyxtQkFBSyxFQUFDLFlBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsS0FBRCxDQUFPLE1BQVA7QUFBYyxtQkFBSyxFQUFDLFVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UscUVBQUMsS0FBRCxDQUFPLE1BQVA7QUFBYyxtQkFBSyxFQUFDLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFjRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxlQUFLLEVBQUMsU0FBakI7QUFBQSxpQ0FDRSxxRUFBQywwQ0FBRDtBQUFPLHVCQUFXLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEYsZUFpQkUscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsZUFBSyxFQUFDLFNBQWpCO0FBQUEsaUNBQ0UscUVBQUMsMENBQUQ7QUFBTyx1QkFBVyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRixlQW9CRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU4sa0NBQWVJLGdCQUFmO0FBQUEsaUNBQ0UscUVBQUMsMkNBQUQ7QUFBUSxnQkFBSSxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJGO0FBQUEsa0JBREY7QUFvREQsQ0FyREQ7O0FBdURlTixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYW5lbC9sb2dpbi5iY2UyM2RhYjI0ZjJmMGNkZWVhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIExheW91dCwgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBOb3RpY2lhcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYW5lbC9Ob3RpY2lhc1wiO1xyXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XHJcblxyXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYFxyXG4gIGJvZHkge1xyXG4gICAgY29sb3I6ICM2MjQ1MmQ7XHJcbiAgfVxyXG4gIC5zaXRlLWxheW91dC1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4gICNjb21wb25lbnRzLWxheW91dC1kZW1vLXRvcCAubG9nbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMzFweDtcclxuICAgIG1hcmdpbjogMTZweCAyNHB4IDE2cHggMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICB9XHJcbiAgLmFudC1yb3ctcnRsICNjb21wb25lbnRzLWxheW91dC1kZW1vLXRvcCAubG9nbyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDE2cHggMCAxNnB4IDI0cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgbG9naW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtzdHlsZXNDc3N9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcblxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQm1ieHVQd1FhMmxjL0ZWekJjTko3VUF5SnhNNnd1cUlqNjF0THJjNHdTWDBzekgvRXYrbllSUnVXbG9sZmxmbFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICB7Li4uZm9ybUl0ZW1MYXlvdXR9XHJcbiAgICAgICAgICBsYXlvdXQ9e2Zvcm1MYXlvdXR9XHJcbiAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBsYXlvdXQ6IGZvcm1MYXlvdXQgfX1cclxuICAgICAgICAgIG9uVmFsdWVzQ2hhbmdlPXtvbkZvcm1MYXlvdXRDaGFuZ2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkZvcm0gTGF5b3V0XCIgbmFtZT1cImxheW91dFwiPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgdmFsdWU9e2Zvcm1MYXlvdXR9PlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJob3Jpem9udGFsXCI+SG9yaXpvbnRhbDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJ2ZXJ0aWNhbFwiPlZlcnRpY2FsPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cImlubGluZVwiPklubGluZTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiRmllbGQgQVwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJpbnB1dCBwbGFjZWhvbGRlclwiIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGaWVsZCBCXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cImlucHV0IHBsYWNlaG9sZGVyXCIgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSB7Li4uYnV0dG9uSXRlbUxheW91dH0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=