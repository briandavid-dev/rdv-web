webpackHotUpdate_N_E("pages/panel/noticias",{

/***/ "./components/panel/Noticias/index.js":
/*!********************************************!*\
  !*** ./components/panel/Noticias/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\components\\panel\\Noticias\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Column = antd__WEBPACK_IMPORTED_MODULE_3__["Table"].Column;

 // import Scroll from './Prueba2';


var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Editor */ "./components/panel/Noticias/Editor.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Editor */ "./components/panel/Noticias/Editor.js")];
    },
    modules: ["./Editor"]
  }
});
_c2 = Editor;

var Noticias = function Noticias() {
  _s();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isModalVisible = _useState[0],
      setIsModalVisible = _useState[1];

  var layout = {
    labelCol: {
      span: 5
    },
    wrapperCol: {
      span: 19
    }
  };

  var onFinish = function onFinish(values) {
    console.log(values);
  };

  var normFile = function normFile(e) {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  var showModal = function showModal() {
    setIsModalVisible(true);
  };

  var handleOk = function handleOk() {
    setIsModalVisible(false);
  };

  var handleCancel = function handleCancel() {
    setIsModalVisible(false);
  };

  var dataSource = [{
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  }, {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  }];
  var columns = [{
    title: "Name",
    dataIndex: "name",
    key: "name"
  }, {
    title: "Age",
    dataIndex: "age",
    key: "age"
  }, {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }];

  var handleEdit = function handleEdit() {
    console.log("edit");
  };

  var handleDelete = function handleDelete(e) {
    console.log(e);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "primary",
      onClick: showModal,
      children: "Agregar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Table"], {
      dataSource: dataSource,
      pagination: false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Column, {
        title: "Name",
        dataIndex: "name"
      }, "name", false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Column, {
        title: "Age",
        dataIndex: "age"
      }, "age", false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Column, {
        title: "Opciones",
        render: function render(text, record) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
            size: "middle",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              children: ["Invite ", record.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EditTwoTone"], {
              onClick: handleEdit
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["DeleteTwoTone"], {
              onClick: function onClick() {
                handleDelete(record.age);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this);
        }
      }, "opciones", false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this), ";", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
      title: "Agregar Nueva Noticia",
      visible: isModalVisible,
      onOk: handleOk,
      onCancel: handleCancel,
      footer: false,
      width: 1000,
      centered: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], _objectSpread(_objectSpread({}, layout), {}, {
          onFinish: onFinish,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 24,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
                label: "Titulo",
                name: "titulo",
                rules: [{
                  required: true,
                  message: "Ingrese el titulo"
                }],
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 24,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
                label: "Lenguage",
                name: "lenguage",
                rules: [{
                  required: true,
                  message: "Ingrese el Lenguage"
                }],
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
                  placeholder: "Seleccione",
                  allowClear: true,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option, {
                    value: "es",
                    children: "Espa\xF1ol"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option, {
                    value: "en",
                    children: "Ingl\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 24,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
                label: "Imagen",
                name: "imagen",
                valuePropName: "fileList",
                getValueFromEvent: normFile,
                extra: "800px x 800px",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Upload"], {
                  name: "logo",
                  action: "/upload.do",
                  listType: "picture",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UploadOutlined"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 35
                    }, _this),
                    children: "Click para adjuntar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 5,
              style: {
                textAlign: "right"
              },
              children: "Contenido: \xA0\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 19,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Editor, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 24,
              style: {
                textAlign: "center"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                children: "Volver"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                type: "primary",
                htmlType: "submit",
                children: "Aceptar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, _this);
};

_s(Noticias, "CRVr/fNuOBS6isgng31QWS21H2I=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm];
});

_c3 = Noticias;
/* harmony default export */ __webpack_exports__["default"] = (Noticias);

var _c, _c2, _c3;

$RefreshReg$(_c, "Editor$dynamic");
$RefreshReg$(_c2, "Editor");
$RefreshReg$(_c3, "Noticias");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9Ob3RpY2lhcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb2x1bW4iLCJUYWJsZSIsIkVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJOb3RpY2lhcyIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVN0YXRlIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJvbkZpbmlzaCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJub3JtRmlsZSIsImUiLCJBcnJheSIsImlzQXJyYXkiLCJmaWxlTGlzdCIsInNob3dNb2RhbCIsImhhbmRsZU9rIiwiaGFuZGxlQ2FuY2VsIiwiZGF0YVNvdXJjZSIsImtleSIsIm5hbWUiLCJhZ2UiLCJhZGRyZXNzIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwiaGFuZGxlRWRpdCIsImhhbmRsZURlbGV0ZSIsInRleHQiLCJyZWNvcmQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtJQVlRQSxNLEdBQVdDLDBDLENBQVhELE07QUFDUjtDQU9BOzs7QUFFQSxJQUFNRSxNQUFNLEdBQUdDLG1EQUFPLE1BQ3BCLGNBQU07QUFDSixTQUFPLHNJQUFQO0FBQ0QsQ0FIbUIsRUFJcEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBRmdCLHVEQUVoQjtBQUFBO0FBQUEsY0FGZ0IsVUFFaEI7QUFBQTtBQUFBLENBSm9CLENBQXRCO01BQU1GLE07O0FBT04sSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLHNCQUNOQyx5Q0FBSSxDQUFDQyxPQUFMLEVBRE07QUFBQTtBQUFBLE1BQ2RDLElBRGM7O0FBQUEsa0JBRXVCQyxz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QUFnR0QsQ0F6S0Q7O0dBQU1yQyxRO1VBQ1dDLHlDQUFJLENBQUNDLE87OztNQURoQkYsUTtBQTJLU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFuZWwvbm90aWNpYXMuMmM1NDZjMTUyYjA5MTRjOTRlOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgSW5wdXQsXHJcbiAgVXBsb2FkLFxyXG4gIFNlbGVjdCxcclxuICBNb2RhbCxcclxuICBUYWJsZSxcclxuICBTcGFjZSxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCB7IENvbHVtbiB9ID0gVGFibGU7XHJcbmltcG9ydCB7XHJcbiAgVXBsb2FkT3V0bGluZWQsXHJcbiAgSW5ib3hPdXRsaW5lZCxcclxuICBEZWxldGVUd29Ub25lLFxyXG4gIEVkaXRUd29Ub25lLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbi8vIGltcG9ydCBTY3JvbGwgZnJvbSAnLi9QcnVlYmEyJztcclxuXHJcbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXHJcbiAgKCkgPT4ge1xyXG4gICAgcmV0dXJuIGltcG9ydChcIi4vRWRpdG9yXCIpO1xyXG4gIH0sXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuXHJcbmNvbnN0IE5vdGljaWFzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBsYXlvdXQgPSB7XHJcbiAgICBsYWJlbENvbDogeyBzcGFuOiA1IH0sXHJcbiAgICB3cmFwcGVyQ29sOiB7IHNwYW46IDE5IH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vcm1GaWxlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkIGV2ZW50OlwiLCBlKTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGUgJiYgZS5maWxlTGlzdDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0YVNvdXJjZSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiBcIjFcIixcclxuICAgICAgbmFtZTogXCJNaWtlXCIsXHJcbiAgICAgIGFnZTogMzIsXHJcbiAgICAgIGFkZHJlc3M6IFwiMTAgRG93bmluZyBTdHJlZXRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCIyXCIsXHJcbiAgICAgIG5hbWU6IFwiSm9oblwiLFxyXG4gICAgICBhZ2U6IDQyLFxyXG4gICAgICBhZGRyZXNzOiBcIjEwIERvd25pbmcgU3RyZWV0XCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk5hbWVcIixcclxuICAgICAgZGF0YUluZGV4OiBcIm5hbWVcIixcclxuICAgICAga2V5OiBcIm5hbWVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkFnZVwiLFxyXG4gICAgICBkYXRhSW5kZXg6IFwiYWdlXCIsXHJcbiAgICAgIGtleTogXCJhZ2VcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkFkZHJlc3NcIixcclxuICAgICAgZGF0YUluZGV4OiBcImFkZHJlc3NcIixcclxuICAgICAga2V5OiBcImFkZHJlc3NcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZWRpdFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3Nob3dNb2RhbH0+XHJcbiAgICAgICAgQWdyZWdhclxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8VGFibGUgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX0gcGFnaW5hdGlvbj17ZmFsc2V9PlxyXG4gICAgICAgIDxDb2x1bW4gdGl0bGU9XCJOYW1lXCIgZGF0YUluZGV4PVwibmFtZVwiIGtleT1cIm5hbWVcIiAvPlxyXG4gICAgICAgIDxDb2x1bW4gdGl0bGU9XCJBZ2VcIiBkYXRhSW5kZXg9XCJhZ2VcIiBrZXk9XCJhZ2VcIiAvPlxyXG4gICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgIHRpdGxlPVwiT3BjaW9uZXNcIlxyXG4gICAgICAgICAga2V5PVwib3BjaW9uZXNcIlxyXG4gICAgICAgICAgcmVuZGVyPXsodGV4dCwgcmVjb3JkKSA9PiAoXHJcbiAgICAgICAgICAgIDxTcGFjZSBzaXplPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgPGE+SW52aXRlIHtyZWNvcmQubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPEVkaXRUd29Ub25lIG9uQ2xpY2s9e2hhbmRsZUVkaXR9IC8+XHJcbiAgICAgICAgICAgICAgPERlbGV0ZVR3b1RvbmVcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHJlY29yZC5hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgICA7XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiQWdyZWdhciBOdWV2YSBOb3RpY2lhXCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgY2VudGVyZWRcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Rm9ybSB7Li4ubGF5b3V0fSBvbkZpbmlzaD17b25GaW5pc2h9PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaXR1bG9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGl0dWxvXCJcclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgdGl0dWxvXCIgfV19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkxlbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxlbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgTGVuZ3VhZ2VcIiB9XX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGVjY2lvbmVcIiBhbGxvd0NsZWFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZXNcIj5Fc3Bhw7FvbDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVuXCI+SW5nbMOpczwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlblwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJmaWxlTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgIGdldFZhbHVlRnJvbUV2ZW50PXtub3JtRmlsZX1cclxuICAgICAgICAgICAgICAgICAgZXh0cmE9XCI4MDBweCB4IDgwMHB4XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFVwbG9hZCBuYW1lPVwibG9nb1wiIGFjdGlvbj1cIi91cGxvYWQuZG9cIiBsaXN0VHlwZT1cInBpY3R1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbGljayBwYXJhIGFkanVudGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17NX0gc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBDb250ZW5pZG86ICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezE5fT5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3IgLz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+Vm9sdmVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEFjZXB0YXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpY2lhcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==