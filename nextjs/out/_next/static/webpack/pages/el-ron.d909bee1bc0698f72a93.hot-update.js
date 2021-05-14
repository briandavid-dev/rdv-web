webpackHotUpdate_N_E("pages/el-ron",{

/***/ "./pages/el-ron.js":
/*!*************************!*\
  !*** ./pages/el-ron.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ElRon; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\pages\\el-ron.js",
    _s = $RefreshSig$();





// import dynamic from "next/dynamic";





/* const MapeoImagen1 = dynamic(
  () => {
    return import("../components/common/MapeoImagen1");
  },
  { ssr: false }
); */


var stylesCss = new String("body{background-color:#483222;background-image:url(\"/assets/imgs/elrom/FONDO.png\");background-size:cover;background-repeat:no-repeat;background-position:center top;}.SeccionElRon1{padding-top:100px;}.SeccionDoc1 img{margin-left:2rem;margin-right:2rem;}.SeccionElRon2{text-align:center;}.SectionMobile1{background-image:url(\"/assets/imgs/historia/FONDO-NUESTRA-HISTORIA-MOBILE.jpg\");}.ant-modal-content{background-color:transparent;}.ant-modal-body{background-color:rgba(221,210,194,0.85);border-radius:5px;font-size:1.5rem;}.ant-btn-lg{height:50px;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXHBhZ2VzXFxlbC1yb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0I0QixBQUc4QixBQVFQLEFBSUQsQUFLQyxBQU84RCxBQUluRCxBQUljLEFBTS9CLFlBQ0csS0ExQkcsQ0FIcEIsQUFRQSxPQWpCdUQsRUF1Q3ZELEVBWEEsTUFmQSxLQW1Cb0Isa0JBQ0QsaUJBQ25CLEdBakN3QixFQXVCeEIsb0JBdEI4Qiw0QkFDRywrQkFDakMiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYXZpZE9jaG9hQmVybXVkZXpcXERlc2t0b3BcXHJkdi13ZWJcXG5leHRqc1xccGFnZXNcXGVsLXJvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBSb3csIENvbCwgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuLy8gaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IE1lbnVEZXNrdG9wIGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVEZXNrdG9wXCI7XG5pbXBvcnQgZXMgZnJvbSBcIi4uL2xhbmcvZXNcIjtcbmltcG9ydCBlbiBmcm9tIFwiLi4vbGFuZy9lblwiO1xuXG4vKiBjb25zdCBNYXBlb0ltYWdlbjEgPSBkeW5hbWljKFxuICAoKSA9PiB7XG4gICAgcmV0dXJuIGltcG9ydChcIi4uL2NvbXBvbmVudHMvY29tbW9uL01hcGVvSW1hZ2VuMVwiKTtcbiAgfSxcbiAgeyBzc3I6IGZhbHNlIH1cbik7ICovXG5cbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODMyMjI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2Vscm9tL0ZPTkRPLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgfVxuXG4gIC5TZWNjaW9uRWxSb24xIHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzQ0MzQyMTsgKi9cbiAgfVxuICAuU2VjY2lvbkRvYzEgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIH1cbiAgLlNlY2Npb25FbFJvbjIge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM0NDM0MjE7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLlNlY3Rpb25Nb2JpbGUwIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQzNDIxOyAqL1xuICB9XG4gIC5TZWN0aW9uTW9iaWxlMSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2hpc3RvcmlhL0ZPTkRPLU5VRVNUUkEtSElTVE9SSUEtTU9CSUxFLmpwZ1wiKTtcbiAgfVxuXG4gIC5hbnQtbW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuYW50LW1vZGFsLWJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMTAsIDE5NCwgMC44NSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgLmFudC1idG4tbGcge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVsUm9uKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IGxhbmcgPSBcImVzXCI7XG4gIGlmIChyb3V0ZXIucXVlcnkubGFuZyA9PT0gXCJlblwiKSB7XG4gICAgbGFuZyA9IFwiZW5cIjtcbiAgfVxuICBjb25zdCBzdHJpbmdzID0geyBlcywgZW4gfTtcblxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKHtcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICB0ZXh0OiBcIlwiLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdmlzaWJsZT17bW9kYWwudmlzaWJsZX1cbiAgICAgICAgZm9vdGVyPXtmYWxzZX1cbiAgICAgICAgY2VudGVyZWRcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICBzZXRNb2RhbCh7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge21vZGFsLnRleHR9XG4gICAgICA8L01vZGFsPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtzdHlsZXNDc3N9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQm1ieHVQd1FhMmxjL0ZWekJjTko3VUF5SnhNNnd1cUlqNjF0THJjNHdTWDBzekgvRXYrbllSUnVXbG9sZmxmbFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1iNWtIeVhnY3BiWkpPL3RZOVVsN2tHa2YxUzBDV3VLY0NEMzhsOFlrZUg4ejhRakUwR21XMWdZVTVTOUZPbkowXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgID48L3NjcmlwdD5cblxuICAgICAgICA8dGl0bGU+e3N0cmluZ3NbbGFuZ10uZWxyb24ucGFnZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNZW51RGVza3RvcCAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlY2Npb25FbFJvbjFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNjaW9uX3RpdHVsbyB2YWxpZGFfbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9ob21lL2xpbmVhMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZWExXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogXCI0cHhcIiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgxPntzdHJpbmdzW2xhbmddLmVscm9uLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9ob21lL2xpbmVhMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZWEyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogXCI0cHhcIiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsaWRhX2Rlc2t0b3BcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57c3RyaW5nc1tsYW5nXS5lbHJvbi50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Um93IGNsYXNzTmFtZT1cIlNlY2Npb25FbFJvbjJcIiB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPENvbCBzcGFuPXsyMn0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0dWxvLWJlbGxvIHpvb20tZWxyb24gXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TW9kYWwoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nc1tsYW5nXS5lbHJvbi5sYUNhbmEuaW5mbyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdHJpbmdzW2xhbmddLmVscm9uLmxhQ2FuYS50aXR1bG99XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIGxnPXs1fSB4cz17MH0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9lbHJvbS9QUk9DRVNPLVJPTi1DQU5BLURFLUFaVUNBUi5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiwgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ6b29tLWVscm9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9lbHJvbS9GTEVDSEEucG5nXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwMHB4XCIsIG1heFdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1lbHJvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgbGc9ezV9IHhzPXswfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIuL2Fzc2V0cy9pbWdzL2Vscm9tL1BST0NFU08tUk9OLUNBTUlPTi5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiwgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ6b29tLWVscm9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBsZz17MH0geHM9ezIyfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIuL2Fzc2V0cy9pbWdzL2Vscm9tL1BST0NFU08tUk9OLUNBTkEtREUtQVpVQ0FSLnBuZ1wiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI0MCVcIiwgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ6b29tLWVscm9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgICZuYnNwOyAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9lbHJvbS9QUk9DRVNPLVJPTi1DQU1JT04ucG5nXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjQwJVwiLCBtYXhXaWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInpvb20tZWxyb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNwYW49ezIyfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXR1bG8tYmVsbG8gem9vbS1lbHJvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vZGFsKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZ3NbbGFuZ10uZWxyb24ubGFNZWxhc2EuaW5mbyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdHJpbmdzW2xhbmddLmVscm9uLmxhTWVsYXNhLnRpdHVsb31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj17MjJ9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi4vYXNzZXRzL2ltZ3MvZWxyb20vUFJPQ0VTTy1ST04tQ0FNSU9OLVktRkFCUklDQS5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAwcHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgc3Bhbj17MjJ9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHVsby1iZWxsbyB6b29tLWVscm9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TW9kYWwoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nc1tsYW5nXS5lbHJvbi5sYUZlcm1lbnRhY2lvbi5pbmZvLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N0cmluZ3NbbGFuZ10uZWxyb24ubGFGZXJtZW50YWNpb24udGl0dWxvfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIGxnPXsyMn0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1lbHJvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vZGFsKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZ3NbbGFuZ10uZWxyb24uZGVzdGlsYWNpb24uaW5mbyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9lbHJvbS9QUk9DRVNPLVJPTi1ERVNUSUxBQ0lPTi5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAwcHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgc3Bhbj17MjJ9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHVsby1iZWxsbyB6b29tLWVscm9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TW9kYWwoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nc1tsYW5nXS5lbHJvbi5lbEFuZWphbWllbnRvLmluZm8sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3RyaW5nc1tsYW5nXS5lbHJvbi5lbEFuZWphbWllbnRvLnRpdHVsb31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPENvbCBsZz17MjB9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi4vYXNzZXRzL2ltZ3MvZWxyb20vUFJPQ0VTTy1ST04tQU5FSkFNSUVOVE8ucG5nXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiwgd2lkdGg6IFwiMTAwMHB4XCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIGxnPXsyMH0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1lbHJvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vZGFsKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZ3NbbGFuZ10uZWxyb24uZGVzdGlsYWNpb24uaW5mbyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3JjPXtzdHJpbmdzW2xhbmddLmVscm9uLmltZ0VtYmFzYWRvfVxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAwcHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2VjY2lvbkVsUm9uMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzZDI1MTRcIiB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWxpZGFfbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbGlkYV9kZXNrdG9wXCI+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\pages\\\\el-ron.js */");
stylesCss.__hash = "2153565540";
function ElRon() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var lang = "es";

  if (router.query.lang === "en") {
    lang = "en";
  }

  var strings = {
    es: _lang_es__WEBPACK_IMPORTED_MODULE_7__["default"],
    en: _lang_en__WEBPACK_IMPORTED_MODULE_8__["default"]
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    visible: false,
    text: ""
  }),
      modal = _useState[0],
      setModal = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
      visible: modal.visible,
      footer: false,
      centered: true,
      onCancel: function onCancel() {
        setModal({
          visible: false
        });
      },
      children: modal.text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("title", {
        children: strings[lang].elron.pageTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "SeccionElRon1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "col-md-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "seccion_titulo valida_mobile",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                src: "./assets/imgs/home/linea2.png",
                className: "linea1",
                style: {
                  maxHeight: "4px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
                children: strings[lang].elron.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                src: "./assets/imgs/home/linea1.png",
                className: "linea2",
                style: {
                  maxHeight: "4px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "valida_desktop",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
                className: "text-center",
                children: strings[lang].elron.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "SeccionElRon2",
      type: "flex",
      justify: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 22,
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          size: "large",
          className: "titulo-bello zoom-elron ",
          onClick: function onClick() {
            setModal({
              visible: true,
              text: strings[lang].elron.laCana.info
            });
          },
          children: strings[lang].elron.laCana.titulo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: 5,
        xs: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: "./assets/imgs/elrom/PROCESO-RON-CANA-DE-AZUCAR.png",
          style: {
            width: "300px",
            maxWidth: "100%"
          },
          className: "zoom-elron"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: "/assets/imgs/elrom/FLECHA.png",
          style: {
            width: "300px",
            maxWidth: "100%"
          },
          className: "zoom-elron"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: 5,
        xs: 0,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: "./assets/imgs/elrom/PROCESO-RON-CAMION.png",
          style: {
            width: "300px",
            maxWidth: "100%"
          },
          className: "zoom-elron"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: 0,
        xs: 22,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: "./assets/imgs/elrom/PROCESO-RON-CANA-DE-AZUCAR.png",
          style: {
            width: "40%",
            maxWidth: "100%"
          },
          className: "zoom-elron"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, this), "\xA0 \xA0 \xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: "./assets/imgs/elrom/PROCESO-RON-CAMION.png",
          style: {
            width: "40%",
            maxWidth: "100%"
          },
          className: "zoom-elron"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 22,
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          size: "large",
          className: "titulo-bello zoom-elron",
          onClick: function onClick() {
            setModal({
              visible: true,
              text: strings[lang].elron.laMelasa.info
            });
          },
          children: strings[lang].elron.laMelasa.titulo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 22,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: "./assets/imgs/elrom/PROCESO-RON-CAMION-Y-FABRICA.png",
          style: {
            maxWidth: "100%",
            width: "1000px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 22,
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          size: "large",
          className: "titulo-bello zoom-elron",
          onClick: function onClick() {
            setModal({
              visible: true,
              text: strings[lang].elron.laFermentacion.info
            });
          },
          children: strings[lang].elron.laFermentacion.titulo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: 22,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          className: "zoom-elron cursor-pointer",
          onClick: function onClick() {
            setModal({
              visible: true,
              text: strings[lang].elron.destilacion.info
            });
          },
          src: "./assets/imgs/elrom/PROCESO-RON-DESTILACION.png",
          style: {
            maxWidth: "100%",
            width: "1000px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 22,
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          size: "large",
          className: "titulo-bello zoom-elron",
          onClick: function onClick() {
            setModal({
              visible: true,
              text: strings[lang].elron.elAnejamiento.info
            });
          },
          children: strings[lang].elron.elAnejamiento.titulo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: 20,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: "./assets/imgs/elrom/PROCESO-RON-ANEJAMIENTO.png",
          style: {
            maxWidth: "100%",
            width: "1000px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: 20,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          className: "zoom-elron cursor-pointer",
          onClick: function onClick() {
            setModal({
              visible: true,
              text: strings[lang].elron.destilacion.info
            });
          },
          src: strings[lang].elron.imgEmbasado,
          style: {
            maxWidth: "100%",
            width: "1000px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "SeccionElRon2 text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "col-md-12",
            style: {
              backgroundColor: "#3d2514"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "valida_mobile",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "valida_desktop",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, this);
}

_s(ElRon, "W8XDPu9/po2c6yrWfkk6JU/i1yA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = ElRon;

var _c;

$RefreshReg$(_c, "ElRon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWwtcm9uLmpzIl0sIm5hbWVzIjpbInN0eWxlc0NzcyIsIkVsUm9uIiwicm91dGVyIiwidXNlUm91dGVyIiwibGFuZyIsInF1ZXJ5Iiwic3RyaW5ncyIsImVzIiwiZW4iLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJ0ZXh0IiwibW9kYWwiLCJzZXRNb2RhbCIsImVscm9uIiwicGFnZVRpdGxlIiwibWF4SGVpZ2h0IiwidGl0bGUiLCJsYUNhbmEiLCJpbmZvIiwidGl0dWxvIiwid2lkdGgiLCJtYXhXaWR0aCIsImxhTWVsYXNhIiwibGFGZXJtZW50YWNpb24iLCJkZXN0aWxhY2lvbiIsImVsQW5lamFtaWVudG8iLCJpbWdFbWJhc2FkbyIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsU0FBUyxnd2FBQWY7O0FBNkNlLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztBQUNBLE1BQUlGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRCxJQUFiLEtBQXNCLElBQTFCLEVBQWdDO0FBQzlCQSxRQUFJLEdBQUcsSUFBUDtBQUNEOztBQUNELE1BQU1FLE9BQU8sR0FBRztBQUFFQyxNQUFFLEVBQUZBLGdEQUFGO0FBQU1DLE1BQUUsRUFBRkEsZ0RBQUVBO0FBQVIsR0FBaEI7O0FBTjhCLGtCQVFKQyxzREFBUSxDQUFDO0FBQ2pDQyxXQUFPLEVBQUUsS0FEd0I7QUFFakNDLFFBQUksRUFBRTtBQUYyQixHQUFELENBUko7QUFBQSxNQVF2QkMsS0FSdUI7QUFBQSxNQVFoQkMsUUFSZ0I7O0FBYTlCLHNCQUNFO0FBQUEs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QUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBMkIsaUJBQUssRUFBRTtBQUFFTyw2QkFBZSxFQUFFO0FBQW5CLGFBQWxDO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLGVBQWY7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFLRTtBQUFLLHVCQUFTLEVBQUMsZ0JBQWY7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVORixlQWdQRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaFBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb1BEOztHQWpRdUIzQixLO1VBQ1BFLHFEOzs7S0FET0YsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbC1yb24uZDkwOWJlZTFiYzA2OThmNzJhOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBSb3csIENvbCwgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuLy8gaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IE1lbnVEZXNrdG9wIGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVEZXNrdG9wXCI7XG5pbXBvcnQgZXMgZnJvbSBcIi4uL2xhbmcvZXNcIjtcbmltcG9ydCBlbiBmcm9tIFwiLi4vbGFuZy9lblwiO1xuXG4vKiBjb25zdCBNYXBlb0ltYWdlbjEgPSBkeW5hbWljKFxuICAoKSA9PiB7XG4gICAgcmV0dXJuIGltcG9ydChcIi4uL2NvbXBvbmVudHMvY29tbW9uL01hcGVvSW1hZ2VuMVwiKTtcbiAgfSxcbiAgeyBzc3I6IGZhbHNlIH1cbik7ICovXG5cbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODMyMjI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2Vscm9tL0ZPTkRPLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgfVxuXG4gIC5TZWNjaW9uRWxSb24xIHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzQ0MzQyMTsgKi9cbiAgfVxuICAuU2VjY2lvbkRvYzEgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIH1cbiAgLlNlY2Npb25FbFJvbjIge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM0NDM0MjE7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLlNlY3Rpb25Nb2JpbGUwIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQzNDIxOyAqL1xuICB9XG4gIC5TZWN0aW9uTW9iaWxlMSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2hpc3RvcmlhL0ZPTkRPLU5VRVNUUkEtSElTVE9SSUEtTU9CSUxFLmpwZ1wiKTtcbiAgfVxuXG4gIC5hbnQtbW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuYW50LW1vZGFsLWJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMTAsIDE5NCwgMC44NSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgLmFudC1idG4tbGcge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVsUm9uKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IGxhbmcgPSBcImVzXCI7XG4gIGlmIChyb3V0ZXIucXVlcnkubGFuZyA9PT0gXCJlblwiKSB7XG4gICAgbGFuZyA9IFwiZW5cIjtcbiAgfVxuICBjb25zdCBzdHJpbmdzID0geyBlcywgZW4gfTtcblxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKHtcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICB0ZXh0OiBcIlwiLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdmlzaWJsZT17bW9kYWwudmlzaWJsZX1cbiAgICAgICAgZm9vdGVyPXtmYWxzZX1cbiAgICAgICAgY2VudGVyZWRcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICBzZXRNb2RhbCh7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge21vZGFsLnRleHR9XG4gICAgICA8L01vZGFsPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtzdHlsZXNDc3N9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQm1ieHVQd1FhMmxjL0ZWekJjTko3VUF5SnhNNnd1cUlqNjF0THJjNHdTWDBzekgvRXYrbllSUnVXbG9sZmxmbFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1iNWtIeVhnY3BiWkpPL3RZOVVsN2tHa2YxUzBDV3VLY0NEMzhsOFlrZUg4ejhRakUwR21XMWdZVTVTOUZPbkowXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgID48L3NjcmlwdD5cblxuICAgICAgICA8dGl0bGU+e3N0cmluZ3NbbGFuZ10uZWxyb24ucGFnZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNZW51RGVza3RvcCAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlY2Npb25FbFJvbjFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNjaW9uX3RpdHVsbyB2YWxpZGFfbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9ob21lL2xpbmVhMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZWExXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogXCI0cHhcIiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgxPntzdHJpbmdzW2xhbmddLmVscm9uLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9ob21lL2xpbmVhMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZWEyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogXCI0cHhcIiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsaWRhX2Rlc2t0b3BcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57c3RyaW5nc1tsYW5nXS5lbHJvbi50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Um93IGNsYXNzTmFtZT1cIlNlY2Npb25FbFJvbjJcIiB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPENvbCBzcGFuPXsyMn0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0dWxvLWJlbGxvIHpvb20tZWxyb24gXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TW9kYWwoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nc1tsYW5nXS5lbHJvbi5sYUNhbmEuaW5mbyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdHJpbmdzW2xhbmddLmVscm9uLmxhQ2FuYS50aXR1bG99XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIGxnPXs1fSB4cz17MH0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9lbHJvbS9QUk9DRVNPLVJPTi1DQU5BLURFLUFaVUNBUi5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiwgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ6b29tLWVscm9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9lbHJvbS9GTEVDSEEucG5nXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwMHB4XCIsIG1heFdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1lbHJvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgbGc9ezV9IHhzPXswfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIuL2Fzc2V0cy9pbWdzL2Vscm9tL1BST0NFU08tUk9OLUNBTUlPTi5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiwgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ6b29tLWVscm9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBsZz17MH0geHM9ezIyfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIuL2Fzc2V0cy9pbWdzL2Vscm9tL1BST0NFU08tUk9OLUNBTkEtREUtQVpVQ0FSLnBuZ1wiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI0MCVcIiwgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ6b29tLWVscm9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgICZuYnNwOyAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9lbHJvbS9QUk9DRVNPLVJPTi1DQU1JT04ucG5nXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjQwJVwiLCBtYXhXaWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInpvb20tZWxyb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNwYW49ezIyfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXR1bG8tYmVsbG8gem9vbS1lbHJvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vZGFsKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZ3NbbGFuZ10uZWxyb24ubGFNZWxhc2EuaW5mbyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdHJpbmdzW2xhbmddLmVscm9uLmxhTWVsYXNhLnRpdHVsb31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj17MjJ9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi4vYXNzZXRzL2ltZ3MvZWxyb20vUFJPQ0VTTy1ST04tQ0FNSU9OLVktRkFCUklDQS5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAwcHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgc3Bhbj17MjJ9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHVsby1iZWxsbyB6b29tLWVscm9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TW9kYWwoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nc1tsYW5nXS5lbHJvbi5sYUZlcm1lbnRhY2lvbi5pbmZvLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N0cmluZ3NbbGFuZ10uZWxyb24ubGFGZXJtZW50YWNpb24udGl0dWxvfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIGxnPXsyMn0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1lbHJvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vZGFsKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZ3NbbGFuZ10uZWxyb24uZGVzdGlsYWNpb24uaW5mbyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1ncy9lbHJvbS9QUk9DRVNPLVJPTi1ERVNUSUxBQ0lPTi5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAwcHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgc3Bhbj17MjJ9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHVsby1iZWxsbyB6b29tLWVscm9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TW9kYWwoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nc1tsYW5nXS5lbHJvbi5lbEFuZWphbWllbnRvLmluZm8sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3RyaW5nc1tsYW5nXS5lbHJvbi5lbEFuZWphbWllbnRvLnRpdHVsb31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPENvbCBsZz17MjB9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi4vYXNzZXRzL2ltZ3MvZWxyb20vUFJPQ0VTTy1ST04tQU5FSkFNSUVOVE8ucG5nXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiwgd2lkdGg6IFwiMTAwMHB4XCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIGxnPXsyMH0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1lbHJvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vZGFsKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZ3NbbGFuZ10uZWxyb24uZGVzdGlsYWNpb24uaW5mbyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3JjPXtzdHJpbmdzW2xhbmddLmVscm9uLmltZ0VtYmFzYWRvfVxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAwcHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2VjY2lvbkVsUm9uMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzZDI1MTRcIiB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWxpZGFfbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbGlkYV9kZXNrdG9wXCI+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=