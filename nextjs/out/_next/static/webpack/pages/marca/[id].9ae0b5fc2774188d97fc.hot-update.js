webpackHotUpdate_N_E("pages/marca/[id]",{

/***/ "./pages/marca/[id].js":
/*!*****************************!*\
  !*** ./pages/marca/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_MenuDesktop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/MenuDesktop */ "./components/MenuDesktop/index.js");
/* harmony import */ var _lang_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lang/es */ "./lang/es.js");
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lang/en */ "./lang/en.js");
/* harmony import */ var _pagesServices_empresas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pagesServices/empresas */ "./pagesServices/empresas.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\pages\\marca\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();














var stylesCss = new String("body{background-color:#553c28;}.Section0{background-color:#553c28;}.card-empresa-info,table{background-color:rgba(68,49,34,0.8);border-radius:1px;border:0.5px rgba(68,49,34,0.5) solid;color:#fff4e4;padding:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxtYXJjYVxcW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZNEIsQUFHOEIsQUFHQSxBQUtjLHlCQVB6QyxBQUdBLFdBS29CLGtCQUN1QixzQ0FDM0IsY0FDRCxhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxtYXJjYVxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBSb3csIENvbCwgQWZmaXgsIFNrZWxldG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IE1lbnVEZXNrdG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lbnVEZXNrdG9wXCI7XHJcbmltcG9ydCBlcyBmcm9tIFwiLi4vLi4vbGFuZy9lc1wiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uLy4uL2xhbmcvZW5cIjtcclxuaW1wb3J0IEFwaUVtcHJlc2FzIGZyb20gXCIuLi8uLi9wYWdlc1NlcnZpY2VzL2VtcHJlc2FzXCI7XHJcblxyXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1M2MyODtcclxuICB9XHJcbiAgLlNlY3Rpb24wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTNjMjg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1lbXByZXNhLWluZm8sXHJcbiAgdGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYm9yZGVyOiAwLjVweCByZ2JhKDY4LCA0OSwgMzQsIDAuNSkgc29saWQ7XHJcbiAgICBjb2xvcjogI2ZmZjRlNDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUGFnZU5vdGljaWEgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCwgbGFuZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAvLyBsZXQgbGFuZyA9IFwiZW5cIjtcclxuICAvLyBpZiAocm91dGVyLnF1ZXJ5LmxhbmcgPT09IFwiZW5cIikge1xyXG4gIC8vICAgbGFuZyA9IFwiZW5cIjtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgbGFuZyA9IFwiZXNcIjtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IHN0cmluZ3MgPSB7IGVzLCBlbiB9O1xyXG5cclxuICBjb25zdCBbZW1wcmVzYSwgc2V0RW1wcmVzYV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbWFnZV9iYXNlNjQ6IFwiXCIsXHJcbiAgICBpbWFnZV9leHRlbnNpb246IFwiXCIsXHJcbiAgICBjb250ZW50X2h0bWw6IFwiXCIsXHJcbiAgICB0aXRsZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0TWFyY2EgPSAoKSA9PiB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgQXBpRW1wcmVzYXMuZ2V0RW1wcmVzYShpZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgY29kaWdvLCBlbXByZXNhIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgc2V0RW1wcmVzYSh7XHJcbiAgICAgICAgICAgICAgaW1hZ2VfYmFzZTY0OiBlbXByZXNhLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICBpbWFnZV9leHRlbnNpb246IGVtcHJlc2EuaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnRfaHRtbDogZW1wcmVzYS5jb250ZW50X2h0bWwsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGVtcHJlc2EudGl0bGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcmAsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TWFyY2EoKTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtzdHlsZXNDc3N9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuXHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CbWJ4dVB3UWEybGMvRlZ6QmNOSjdVQXlKeE02d3VxSWo2MXRMcmM0d1NYMHN6SC9FdituWVJSdVdsb2xmbGZsXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1iNWtIeVhnY3BiWkpPL3RZOVVsN2tHa2YxUzBDV3VLY0NEMzhsOFlrZUg4ejhRakUwR21XMWdZVTVTOUZPbkowXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgIDx0aXRsZT57ZW1wcmVzYS50aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8TWVudURlc2t0b3AgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsaWRhX21vYmlsZSBmb250XzIwIFNlY3Rpb24wXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjdyZW0gMCAycmVtIDAgXCIgfX0+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwidG9wXCI+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezIyfSBsZz17MTV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1lbXByZXNhLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjY2lvbl90aXR1bG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9ob21lL2xpbmVhMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDE+e2VtcHJlc2EudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvaG9tZS9saW5lYTEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17ZW1wcmVzYS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlLyR7ZW1wcmVzYS5pbWFnZV9leHRlbnNpb259O2Jhc2U2NCwke2VtcHJlc2EuaW1hZ2VfYmFzZTY0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNDAwcHhcIiwgbWF4V2lkdGg6IFwiNzAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGVtcHJlc2EuY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMjUxNFwiIH19PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsaWRhX2Rlc2t0b3AgZm9udF8yMCBTZWN0aW9uMFwiPlxyXG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3NOYW1lPVwiU2VjdGlvbjBcIj5cclxuICAgICAgICAgIDxDb2wgeHM9ezIyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNThweFwiIH19PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgMTFcclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMjUxNFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RpY2lhO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\pages\\\\marca\\\\[id].js */");
stylesCss.__hash = "3902289543";

var PageNoticia = function PageNoticia() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var _router$query = router.query,
      id = _router$query.id,
      lang = _router$query.lang; // let lang = "en";
  // if (router.query.lang === "en") {
  //   lang = "en";
  // } else {
  //   lang = "es";
  // }
  // const strings = { es, en };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    image_base64: "",
    image_extension: "",
    content_html: "",
    title: ""
  }),
      empresa = _useState[0],
      setEmpresa = _useState[1];

  var getMarca = function getMarca() {
    if (id) {
      _pagesServices_empresas__WEBPACK_IMPORTED_MODULE_10__["default"].getEmpresa(id).then(function (response) {
        var _response$data = response.data,
            codigo = _response$data.codigo,
            empresa = _response$data.empresa;

        if (codigo === "1") {
          setEmpresa({
            image_base64: empresa.image_base64,
            image_extension: empresa.image_extension,
            content_html: empresa.content_html,
            title: empresa.title
          });
        } else {//
        }
      })["catch"](function (error) {
        console.log("error", error);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getMarca();
  }, [id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("title", {
        children: empresa.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      className: "valida_mobile font_20 Section0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        style: {
          padding: "7rem 0 2rem 0 "
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
          gutter: [16, 16],
          type: "flex",
          justify: "center",
          align: "top",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
            xs: 22,
            lg: 15,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "card-empresa-info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "seccion_titulo",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                  src: "/assets/imgs/home/linea2.png",
                  style: {
                    height: "4px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
                  children: empresa.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                  src: "/assets/imgs/home/linea1.png",
                  style: {
                    height: "4px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                  alt: empresa.title,
                  src: "data:image/".concat(empresa.image_extension, ";base64,").concat(empresa.image_base64),
                  style: {
                    width: "400px",
                    maxWidth: "70%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                  __html: empresa.content_html
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "col-md-12",
            style: {
              backgroundColor: "#3d2514"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      className: "valida_desktop font_20 Section0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        type: "flex",
        justify: "center",
        className: "Section0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xs: 22,
          style: {
            marginTop: "58px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, _this), "11"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "col-md-12",
              style: {
                backgroundColor: "#3d2514"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(PageNoticia, "5eyNyiSvsawPqE2zeiYKV6hUKB4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = PageNoticia;
/* harmony default export */ __webpack_exports__["default"] = (PageNoticia);

var _c;

$RefreshReg$(_c, "PageNoticia");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFyY2EvLmpzIl0sIm5hbWVzIjpbInN0eWxlc0NzcyIsIlBhZ2VOb3RpY2lhIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJpZCIsImxhbmciLCJ1c2VTdGF0ZSIsImltYWdlX2Jhc2U2NCIsImltYWdlX2V4dGVuc2lvbiIsImNvbnRlbnRfaHRtbCIsInRpdGxlIiwiZW1wcmVzYSIsInNldEVtcHJlc2EiLCJnZXRNYXJjYSIsIkFwaUVtcHJlc2FzIiwiZ2V0RW1wcmVzYSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb2RpZ28iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJwYWRkaW5nIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXhXaWR0aCIsIl9faHRtbCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxTQUFTLHVtUUFBZjs7O0FBa0JBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUR3QixzQkFFSEQsTUFBTSxDQUFDRSxLQUZKO0FBQUEsTUFFaEJDLEVBRmdCLGlCQUVoQkEsRUFGZ0I7QUFBQSxNQUVaQyxJQUZZLGlCQUVaQSxJQUZZLEVBSXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVh3QixrQkFhTUMsc0RBQVEsQ0FBQztBQUNyQ0MsZ0JBQVksRUFBRSxFQUR1QjtBQUVyQ0MsbUJBQWUsRUFBRSxFQUZvQjtBQUdyQ0MsZ0JBQVksRUFBRSxFQUh1QjtBQUlyQ0MsU0FBSyxFQUFFO0FBSjhCLEdBQUQsQ0FiZDtBQUFBLE1BYWpCQyxPQWJpQjtBQUFBLE1BYVJDLFVB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O0FBQUE7QUFBQSxlQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0YsZUE4RUU7QUFBSyxlQUFTLEVBQUMsaUNBQWY7QUFBQSw2QkFDRSxzRUFBQyx3Q0FBRDtBQUFLLFlBQUksRUFBQyxNQUFWO0FBQWlCLGVBQU8sRUFBQyxRQUF6QjtBQUFrQyxpQkFBUyxFQUFDLFVBQTVDO0FBQUEsZ0NBQ0Usc0VBQUMsd0NBQUQ7QUFBSyxZQUFFLEVBQUUsRUFBVDtBQUFhLGVBQUssRUFBRTtBQUFFQyxxQkFBUyxFQUFFO0FBQWIsV0FBcEI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUEyQixtQkFBSyxFQUFFO0FBQUVELCtCQUFlLEVBQUU7QUFBbkIsZUFBbEM7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5RUYsZUErRkUsc0VBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9GRjtBQUFBLGtCQURGO0FBbUdELENBakpEOztHQUFNN0IsVztVQUNXRSxxRDs7O0tBRFhGLFc7QUFtSlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcmNhL1tpZF0uOWFlMGI1ZmMyNzc0MTg4ZDk3ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBSb3csIENvbCwgQWZmaXgsIFNrZWxldG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IE1lbnVEZXNrdG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lbnVEZXNrdG9wXCI7XHJcbmltcG9ydCBlcyBmcm9tIFwiLi4vLi4vbGFuZy9lc1wiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uLy4uL2xhbmcvZW5cIjtcclxuaW1wb3J0IEFwaUVtcHJlc2FzIGZyb20gXCIuLi8uLi9wYWdlc1NlcnZpY2VzL2VtcHJlc2FzXCI7XHJcblxyXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1M2MyODtcclxuICB9XHJcbiAgLlNlY3Rpb24wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTNjMjg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1lbXByZXNhLWluZm8sXHJcbiAgdGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgNDksIDM0LCAwLjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYm9yZGVyOiAwLjVweCByZ2JhKDY4LCA0OSwgMzQsIDAuNSkgc29saWQ7XHJcbiAgICBjb2xvcjogI2ZmZjRlNDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUGFnZU5vdGljaWEgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCwgbGFuZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAvLyBsZXQgbGFuZyA9IFwiZW5cIjtcclxuICAvLyBpZiAocm91dGVyLnF1ZXJ5LmxhbmcgPT09IFwiZW5cIikge1xyXG4gIC8vICAgbGFuZyA9IFwiZW5cIjtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgbGFuZyA9IFwiZXNcIjtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IHN0cmluZ3MgPSB7IGVzLCBlbiB9O1xyXG5cclxuICBjb25zdCBbZW1wcmVzYSwgc2V0RW1wcmVzYV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbWFnZV9iYXNlNjQ6IFwiXCIsXHJcbiAgICBpbWFnZV9leHRlbnNpb246IFwiXCIsXHJcbiAgICBjb250ZW50X2h0bWw6IFwiXCIsXHJcbiAgICB0aXRsZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0TWFyY2EgPSAoKSA9PiB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgQXBpRW1wcmVzYXMuZ2V0RW1wcmVzYShpZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgY29kaWdvLCBlbXByZXNhIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgc2V0RW1wcmVzYSh7XHJcbiAgICAgICAgICAgICAgaW1hZ2VfYmFzZTY0OiBlbXByZXNhLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICBpbWFnZV9leHRlbnNpb246IGVtcHJlc2EuaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnRfaHRtbDogZW1wcmVzYS5jb250ZW50X2h0bWwsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGVtcHJlc2EudGl0bGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcmAsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TWFyY2EoKTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtzdHlsZXNDc3N9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuXHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CbWJ4dVB3UWEybGMvRlZ6QmNOSjdVQXlKeE02d3VxSWo2MXRMcmM0d1NYMHN6SC9FdituWVJSdVdsb2xmbGZsXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1iNWtIeVhnY3BiWkpPL3RZOVVsN2tHa2YxUzBDV3VLY0NEMzhsOFlrZUg4ejhRakUwR21XMWdZVTVTOUZPbkowXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgIDx0aXRsZT57ZW1wcmVzYS50aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8TWVudURlc2t0b3AgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsaWRhX21vYmlsZSBmb250XzIwIFNlY3Rpb24wXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjdyZW0gMCAycmVtIDAgXCIgfX0+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwidG9wXCI+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezIyfSBsZz17MTV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1lbXByZXNhLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjY2lvbl90aXR1bG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9ob21lL2xpbmVhMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDE+e2VtcHJlc2EudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvaG9tZS9saW5lYTEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17ZW1wcmVzYS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlLyR7ZW1wcmVzYS5pbWFnZV9leHRlbnNpb259O2Jhc2U2NCwke2VtcHJlc2EuaW1hZ2VfYmFzZTY0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNDAwcHhcIiwgbWF4V2lkdGg6IFwiNzAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGVtcHJlc2EuY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMjUxNFwiIH19PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsaWRhX2Rlc2t0b3AgZm9udF8yMCBTZWN0aW9uMFwiPlxyXG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3NOYW1lPVwiU2VjdGlvbjBcIj5cclxuICAgICAgICAgIDxDb2wgeHM9ezIyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNThweFwiIH19PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgMTFcclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMjUxNFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RpY2lhO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9