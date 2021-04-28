webpackHotUpdate_N_E("pages/noticias",{

/***/ "./pages/noticias.js":
/*!***************************!*\
  !*** ./pages/noticias.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_MenuDesktop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MenuDesktop */ "./components/MenuDesktop/index.js");
/* harmony import */ var _lang_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lang/es */ "./lang/es.js");
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lang/en */ "./lang/en.js");
/* harmony import */ var _pagesServices_noticias__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pagesServices/noticias */ "./pagesServices/noticias.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\pages\\noticias.js",
    _this = undefined,
    _s = $RefreshSig$();













var stylesCss = new String("\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxub3RpY2lhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYXZpZE9jaG9hQmVybXVkZXpcXERlc2t0b3BcXHJkdi13ZWJcXG5leHRqc1xccGFnZXNcXG5vdGljaWFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IENhcmQsIFJvdywgQ29sLCBBZmZpeCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWVudURlc2t0b3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVudURlc2t0b3BcIjtcclxuaW1wb3J0IGVzIGZyb20gXCIuLi9sYW5nL2VzXCI7XHJcbmltcG9ydCBlbiBmcm9tIFwiLi4vbGFuZy9lblwiO1xyXG5pbXBvcnQgQXBpTm90aWNpYXMgZnJvbSBcIi4uL3BhZ2VzU2VydmljZXMvbm90aWNpYXNcIjtcclxuXHJcbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgYDtcclxuXHJcbmNvbnN0IFBhZ2VOb3RpY2lhcyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zb2xlLmxvZyhgcm91dGVyLnF1ZXJ5LmxhbmdgLCByb3V0ZXIucXVlcnkubGFuZyk7XHJcbiAgbGV0IGxhbmcgPSBcImVuXCI7XHJcbiAgaWYgKHJvdXRlci5xdWVyeS5sYW5nID09PSBcImVuXCIpIHtcclxuICAgIGxhbmcgPSBcImVuXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxhbmcgPSBcImVzXCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdHJpbmdzID0geyBlcywgZW4gfTtcclxuXHJcbiAgY29uc3QgW29mZnNldFRvcCwgc2V0T2Zmc2V0VG9wXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCByZXZpc2FIZWlndGggPSAoKSA9PiB7XHJcbiAgICAvLyBmdW5jdGlvbiByZXBvcnRXaW5kb3dTaXplKCkge1xyXG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxjdWxhdGVIZWlndGhcIilcclxuICAgICAgLm9mZnNldEhlaWdodDtcclxuICAgIHNldE9mZnNldFRvcChvZmZzZXRIZWlnaHQgLSA1MDApO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gd2luZG93Lm9ucmVzaXplID0gcmVwb3J0V2luZG93U2l6ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXROb3RpY2lhc0xpc3RhZG8gPSAoKSA9PiB7XHJcbiAgICBBcGlOb3RpY2lhcy5nZXROb3RpY2lhc0xpc3RhZG8obGFuZylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlYCwgcmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0IHsgY29kaWdvLCByZXN1bHRzIH0gPSByZXNwb25zZTtcclxuICAgICAgICBpZiAoY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29kaWdvID09PSBcIjBcIikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIGAsIGNvZGlnbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yYCwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Tm90aWNpYXNMaXN0YWRvKCk7XHJcbiAgfSwgW2xhbmddKTtcclxuXHJcbiAgY29uc29sZS5sb2coYGxhbmdgLCBsYW5nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldmlzYUhlaWd0aCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtzdHlsZXNDc3N9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcblxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQm1ieHVQd1FhMmxjL0ZWekJjTko3VUF5SnhNNnd1cUlqNjF0THJjNHdTWDBzekgvRXYrbllSUnVXbG9sZmxmbFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPHRpdGxlPntzdHJpbmdzW2xhbmddLmFydGljdWxvcy5wYWdlVGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVudURlc2t0b3AgLz5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI3cmVtIDAgMnJlbSAwIFwiIH19PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0gdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJ0b3BcIj5cclxuICAgICAgICAgIDxDb2wgeHM9ezIyfSBsZz17MTR9PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImZvbnRfMjBcIj5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjdWxhdGVIZWlndGhcIj5cclxuICAgICAgICAgICAgICAgICAgPEFmZml4XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXstb2Zmc2V0VG9wfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mZnNldEJvdHRvbT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPldoYXQgaXMgTG9yZW0gSXBzdW0/PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL1FCbk9Pb0xhQWZLUGlyYy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7WzEwMCwgMjAwXS5tYXAoKG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRyYXJ5IHRvIHBvcHVsYXIgYmVsaWVmLCBMb3JlbSBJcHN1bSBpcyBub3Qgc2ltcGx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExhdGluIGxpdGVyYXR1cmUgZnJvbSA0NSBCQywgbWFraW5nIGl0IG92ZXIgMjAwMCB5ZWFyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9sZC4gUmljaGFyZCBNY0NsaW50b2NrLCBhIExhdGluIHByb2Zlc3NvciBhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhhbXBkZW4tU3lkbmV5IENvbGxlZ2UgaW4gVmlyZ2luaWEsIGxvb2tlZCB1cCBvbmUgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgbW9yZSBvYnNjdXJlIExhdGluIHdvcmRzLCBjb25zZWN0ZXR1ciwgZnJvbSBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gSXBzdW0gcGFzc2FnZSwgYW5kIGdvaW5nIHRocm91Z2ggdGhlIGNpdGVzIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHdvcmQgaW4gY2xhc3NpY2FsIGxpdGVyYXR1cmUsIGRpc2NvdmVyZWQgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kb3VidGFibGUgc291cmNlLiBMb3JlbSBJcHN1bSBjb21lcyBmcm9tIHNlY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMS4xMC4zMiBhbmQgMS4xMC4zMyBvZiBcImRlIEZpbmlidXMgQm9ub3J1bSBldCBNYWxvcnVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoVGhlIEV4dHJlbWVzIG9mIEdvb2QgYW5kIEV2aWwpIGJ5IENpY2Vybywgd3JpdHRlbiBpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDQ1IEJDLiBUaGlzIGJvb2sgaXMgYSB0cmVhdGlzZSBvbiB0aGUgdGhlb3J5IG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXRoaWNzLCB2ZXJ5IHBvcHVsYXIgZHVyaW5nIHRoZSBSZW5haXNzYW5jZS4gVGhlIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSBvZiBMb3JlbSBJcHN1bSwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tZXMgZnJvbSBhIGxpbmUgaW4gc2VjdGlvbiAxLjEwLjMyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzIHJlcHJvZHVjZWQgYmVsb3cgZm9yIHRob3NlIGludGVyZXN0ZWQuIFNlY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMS4xMC4zMiBhbmQgMS4xMC4zMyBmcm9tIFwiZGUgRmluaWJ1cyBCb25vcnVtIGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTWFsb3J1bVwiIGJ5IENpY2VybyBhcmUgYWxzbyByZXByb2R1Y2VkIGluIHRoZWlyIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWwgZm9ybSwgYWNjb21wYW5pZWQgYnkgRW5nbGlzaCB2ZXJzaW9ucyBmcm9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQWZmaXg+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9ezExfSBsZz17N30+XHJcbiAgICAgICAgICAgIHtbMTAwLCAyMDAsIDMwMCwgMTQwLCAxNTgsIDE2NF0ubWFwKChudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgIGNvdmVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL1FCbk9Pb0xhQWZLUGlyYy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXVyb3BlIFN0cmVldCBiZWF0XCJcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cInd3dy5pbnN0YWdyYW0uY29tXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzZDI1MTRcIiB9fT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RpY2lhcztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\pages\\\\noticias.js */");
stylesCss.__hash = "2085888330";

var PageNoticias = function PageNoticias() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  console.log("router.query.lang", router.query.lang);
  var lang = "en";

  if (router.query.lang === "en") {
    lang = "en";
  } else {
    lang = "es";
  }

  var strings = {
    es: _lang_es__WEBPACK_IMPORTED_MODULE_7__["default"],
    en: _lang_en__WEBPACK_IMPORTED_MODULE_8__["default"]
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      offsetTop = _useState[0],
      setOffsetTop = _useState[1];

  var revisaHeigth = function revisaHeigth() {
    // function reportWindowSize() {
    var offsetHeight = document.querySelector(".calculateHeigth").offsetHeight;
    setOffsetTop(offsetHeight - 500); // }
    // window.onresize = reportWindowSize;
  };

  var getNoticiasListado = function getNoticiasListado() {
    _pagesServices_noticias__WEBPACK_IMPORTED_MODULE_9__["default"].getNoticiasListado(lang).then(function (response) {
      console.log("response", response);
      var codigo = response.codigo,
          results = response.results;

      if (codigo === "1") {}

      if (codigo === "0") {
        console.log("error ", codigo);
      }
    })["catch"](function (error) {
      console.log("error", error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getNoticiasListado();
  }, [lang]);
  console.log("lang", lang);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    revisaHeigth();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: strings[lang].articulos.pageTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        padding: "7rem 0 2rem 0 "
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        gutter: [16, 16],
        type: "flex",
        justify: "center",
        align: "top",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          xs: 22,
          lg: 14,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "font_20",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "calculateHeigth",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Affix"], {
                  offsetTop: -offsetTop // offsetBottom={100}
                  ,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h1", {
                    children: "What is Lorem Ipsum?"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                    alt: "example",
                    src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" // height={800}
                    ,
                    width: 800,
                    style: {
                      maxWidth: "100%"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, _this), [100, 200].map(function (number) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
                        children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
                        children: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          xs: 11,
          lg: 7,
          children: [100, 200, 300, 140, 158, 164].map(function (number) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
                hoverable: true,
                cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                  alt: "example",
                  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 21
                }, _this),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
                  title: "Europe Street beat",
                  description: "www.instagram.com"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, _this)]
            }, void 0, true);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "col-md-12",
          style: {
            backgroundColor: "#3d2514"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(PageNoticias, "UcCgWtiPQLHa4ao2f8ylt6rxUKY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = PageNoticias;
/* harmony default export */ __webpack_exports__["default"] = (PageNoticias);

var _c;

$RefreshReg$(_c, "PageNoticias");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90aWNpYXMuanMiXSwibmFtZXMiOlsic3R5bGVzQ3NzIiwiUGFnZU5vdGljaWFzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwibGFuZyIsInN0cmluZ3MiLCJlcyIsImVuIiwidXNlU3RhdGUiLCJvZmZzZXRUb3AiLCJzZXRPZmZzZXRUb3AiLCJyZXZpc2FIZWlndGgiLCJvZmZzZXRIZWlnaHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXROb3RpY2lhc0xpc3RhZG8iLCJBcGlOb3RpY2lhcyIsInRoZW4iLCJyZXNwb25zZSIsImNvZGlnbyIsInJlc3VsdHMiLCJlcnJvciIsInVzZUVmZmVjdCIsImFydGljdWxvcyIsInBhZ2VUaXRsZSIsInBhZGRpbmciLCJtYXhXaWR0aCIsIm1hcCIsIm51bWJlciIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFNBQVMsOG1WQUFmOzs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLHNCQUFpQ0gsTUFBTSxDQUFDSSxLQUFQLENBQWFDLElBQTlDO0FBQ0EsTUFBSUEsSUFBSSxHQUFHLElBQVg7O0FBQ0EsTUFBSUwsTUFBTSxDQUFDSSxLQUFQLENBQWFDLElBQWIsS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUJBLFFBQUksR0FBRyxJQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLFFBQUksR0FBRyxJQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsT0FBTyxHQUFHO0FBQUVDLE1BQUUsRUFBRkEsZ0RBQUY7QUFBTUMsTUFBRSxFQUFGQSxnREFB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YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IENhcmQsIFJvdywgQ29sLCBBZmZpeCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWVudURlc2t0b3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVudURlc2t0b3BcIjtcclxuaW1wb3J0IGVzIGZyb20gXCIuLi9sYW5nL2VzXCI7XHJcbmltcG9ydCBlbiBmcm9tIFwiLi4vbGFuZy9lblwiO1xyXG5pbXBvcnQgQXBpTm90aWNpYXMgZnJvbSBcIi4uL3BhZ2VzU2VydmljZXMvbm90aWNpYXNcIjtcclxuXHJcbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgYDtcclxuXHJcbmNvbnN0IFBhZ2VOb3RpY2lhcyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zb2xlLmxvZyhgcm91dGVyLnF1ZXJ5LmxhbmdgLCByb3V0ZXIucXVlcnkubGFuZyk7XHJcbiAgbGV0IGxhbmcgPSBcImVuXCI7XHJcbiAgaWYgKHJvdXRlci5xdWVyeS5sYW5nID09PSBcImVuXCIpIHtcclxuICAgIGxhbmcgPSBcImVuXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxhbmcgPSBcImVzXCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdHJpbmdzID0geyBlcywgZW4gfTtcclxuXHJcbiAgY29uc3QgW29mZnNldFRvcCwgc2V0T2Zmc2V0VG9wXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCByZXZpc2FIZWlndGggPSAoKSA9PiB7XHJcbiAgICAvLyBmdW5jdGlvbiByZXBvcnRXaW5kb3dTaXplKCkge1xyXG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxjdWxhdGVIZWlndGhcIilcclxuICAgICAgLm9mZnNldEhlaWdodDtcclxuICAgIHNldE9mZnNldFRvcChvZmZzZXRIZWlnaHQgLSA1MDApO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gd2luZG93Lm9ucmVzaXplID0gcmVwb3J0V2luZG93U2l6ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXROb3RpY2lhc0xpc3RhZG8gPSAoKSA9PiB7XHJcbiAgICBBcGlOb3RpY2lhcy5nZXROb3RpY2lhc0xpc3RhZG8obGFuZylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlYCwgcmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0IHsgY29kaWdvLCByZXN1bHRzIH0gPSByZXNwb25zZTtcclxuICAgICAgICBpZiAoY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29kaWdvID09PSBcIjBcIikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIGAsIGNvZGlnbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yYCwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Tm90aWNpYXNMaXN0YWRvKCk7XHJcbiAgfSwgW2xhbmddKTtcclxuXHJcbiAgY29uc29sZS5sb2coYGxhbmdgLCBsYW5nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldmlzYUhlaWd0aCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtzdHlsZXNDc3N9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcblxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQm1ieHVQd1FhMmxjL0ZWekJjTko3VUF5SnhNNnd1cUlqNjF0THJjNHdTWDBzekgvRXYrbllSUnVXbG9sZmxmbFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPHRpdGxlPntzdHJpbmdzW2xhbmddLmFydGljdWxvcy5wYWdlVGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVudURlc2t0b3AgLz5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI3cmVtIDAgMnJlbSAwIFwiIH19PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0gdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJ0b3BcIj5cclxuICAgICAgICAgIDxDb2wgeHM9ezIyfSBsZz17MTR9PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImZvbnRfMjBcIj5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjdWxhdGVIZWlndGhcIj5cclxuICAgICAgICAgICAgICAgICAgPEFmZml4XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXstb2Zmc2V0VG9wfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mZnNldEJvdHRvbT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPldoYXQgaXMgTG9yZW0gSXBzdW0/PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL1FCbk9Pb0xhQWZLUGlyYy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7WzEwMCwgMjAwXS5tYXAoKG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRyYXJ5IHRvIHBvcHVsYXIgYmVsaWVmLCBMb3JlbSBJcHN1bSBpcyBub3Qgc2ltcGx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExhdGluIGxpdGVyYXR1cmUgZnJvbSA0NSBCQywgbWFraW5nIGl0IG92ZXIgMjAwMCB5ZWFyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9sZC4gUmljaGFyZCBNY0NsaW50b2NrLCBhIExhdGluIHByb2Zlc3NvciBhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhhbXBkZW4tU3lkbmV5IENvbGxlZ2UgaW4gVmlyZ2luaWEsIGxvb2tlZCB1cCBvbmUgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgbW9yZSBvYnNjdXJlIExhdGluIHdvcmRzLCBjb25zZWN0ZXR1ciwgZnJvbSBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gSXBzdW0gcGFzc2FnZSwgYW5kIGdvaW5nIHRocm91Z2ggdGhlIGNpdGVzIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHdvcmQgaW4gY2xhc3NpY2FsIGxpdGVyYXR1cmUsIGRpc2NvdmVyZWQgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kb3VidGFibGUgc291cmNlLiBMb3JlbSBJcHN1bSBjb21lcyBmcm9tIHNlY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMS4xMC4zMiBhbmQgMS4xMC4zMyBvZiBcImRlIEZpbmlidXMgQm9ub3J1bSBldCBNYWxvcnVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoVGhlIEV4dHJlbWVzIG9mIEdvb2QgYW5kIEV2aWwpIGJ5IENpY2Vybywgd3JpdHRlbiBpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDQ1IEJDLiBUaGlzIGJvb2sgaXMgYSB0cmVhdGlzZSBvbiB0aGUgdGhlb3J5IG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXRoaWNzLCB2ZXJ5IHBvcHVsYXIgZHVyaW5nIHRoZSBSZW5haXNzYW5jZS4gVGhlIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSBvZiBMb3JlbSBJcHN1bSwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tZXMgZnJvbSBhIGxpbmUgaW4gc2VjdGlvbiAxLjEwLjMyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzIHJlcHJvZHVjZWQgYmVsb3cgZm9yIHRob3NlIGludGVyZXN0ZWQuIFNlY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMS4xMC4zMiBhbmQgMS4xMC4zMyBmcm9tIFwiZGUgRmluaWJ1cyBCb25vcnVtIGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTWFsb3J1bVwiIGJ5IENpY2VybyBhcmUgYWxzbyByZXByb2R1Y2VkIGluIHRoZWlyIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWwgZm9ybSwgYWNjb21wYW5pZWQgYnkgRW5nbGlzaCB2ZXJzaW9ucyBmcm9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQWZmaXg+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9ezExfSBsZz17N30+XHJcbiAgICAgICAgICAgIHtbMTAwLCAyMDAsIDMwMCwgMTQwLCAxNTgsIDE2NF0ubWFwKChudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgIGNvdmVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL1FCbk9Pb0xhQWZLUGlyYy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXVyb3BlIFN0cmVldCBiZWF0XCJcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cInd3dy5pbnN0YWdyYW0uY29tXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzZDI1MTRcIiB9fT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RpY2lhcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==