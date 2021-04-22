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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EditTwoTone"], {
              onClick: handleEdit
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["DeleteTwoTone"], {
              onClick: function onClick() {
                handleDelete(record.age);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
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
                  lineNumber: 148,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
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
                    lineNumber: 158,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option, {
                    value: "en",
                    children: "Ingl\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
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
                      lineNumber: 172,
                      columnNumber: 35
                    }, _this),
                    children: "Click para adjuntar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 5,
              style: {
                textAlign: "right"
              },
              children: "Contenido: \xA0\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 19,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Editor, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 24,
              style: {
                textAlign: "center"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                children: "Volver"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                type: "primary",
                htmlType: "submit",
                children: "Aceptar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9Ob3RpY2lhcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb2x1bW4iLCJUYWJsZSIsIkVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJOb3RpY2lhcyIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVN0YXRlIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJvbkZpbmlzaCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJub3JtRmlsZSIsImUiLCJBcnJheSIsImlzQXJyYXkiLCJmaWxlTGlzdCIsInNob3dNb2RhbCIsImhhbmRsZU9rIiwiaGFuZGxlQ2FuY2VsIiwiZGF0YVNvdXJjZSIsImtleSIsIm5hbWUiLCJhZ2UiLCJhZGRyZXNzIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwiaGFuZGxlRWRpdCIsImhhbmRsZURlbGV0ZSIsInRleHQiLCJyZWNvcmQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtJQVlRQSxNLEdBQVdDLDBDLENBQVhELE07QUFDUjtDQU9BOzs7QUFFQSxJQUFNRSxNQUFNLEdBQUdDLG1EQUFPLE1BQ3BCLGNBQU07QUFDSixTQUFPLHNJQUFQO0FBQ0QsQ0FIbUIsRUFJcEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBRmdCLHVEQUVoQjtBQUFBO0FBQUEsY0FGZ0IsVUFFaEI7QUFBQTtBQUFBLENBSm9CLENBQXRCO01BQU1GLE07O0FBT04sSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLHNCQUNOQyx5Q0FBSSxDQUFDQyxPQUFMLEVBRE07QUFBQTtBQUFBLE1BQ2RDLElBRGM7O0FBQUEsa0JBRXVCQyxz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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhbmVsL25vdGljaWFzLjE4YzA1YTA4ZTZjYTI2MDQ5MmUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIElucHV0LFxyXG4gIFVwbG9hZCxcclxuICBTZWxlY3QsXHJcbiAgTW9kYWwsXHJcbiAgVGFibGUsXHJcbiAgU3BhY2UsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgeyBDb2x1bW4gfSA9IFRhYmxlO1xyXG5pbXBvcnQge1xyXG4gIFVwbG9hZE91dGxpbmVkLFxyXG4gIEluYm94T3V0bGluZWQsXHJcbiAgRGVsZXRlVHdvVG9uZSxcclxuICBFZGl0VHdvVG9uZSxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG4vLyBpbXBvcnQgU2Nyb2xsIGZyb20gJy4vUHJ1ZWJhMic7XHJcblxyXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxyXG4gICgpID0+IHtcclxuICAgIHJldHVybiBpbXBvcnQoXCIuL0VkaXRvclwiKTtcclxuICB9LFxyXG4gIHsgc3NyOiBmYWxzZSB9XHJcbik7XHJcblxyXG5jb25zdCBOb3RpY2lhcyA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgbGFiZWxDb2w6IHsgc3BhbjogNSB9LFxyXG4gICAgd3JhcHBlckNvbDogeyBzcGFuOiAxOSB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBub3JtRmlsZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlVwbG9hZCBldmVudDpcIiwgZSk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIHJldHVybiBlICYmIGUuZmlsZUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGFTb3VyY2UgPSBbXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCIxXCIsXHJcbiAgICAgIG5hbWU6IFwiTWlrZVwiLFxyXG4gICAgICBhZ2U6IDMyLFxyXG4gICAgICBhZGRyZXNzOiBcIjEwIERvd25pbmcgU3RyZWV0XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6IFwiMlwiLFxyXG4gICAgICBuYW1lOiBcIkpvaG5cIixcclxuICAgICAgYWdlOiA0MixcclxuICAgICAgYWRkcmVzczogXCIxMCBEb3duaW5nIFN0cmVldFwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJOYW1lXCIsXHJcbiAgICAgIGRhdGFJbmRleDogXCJuYW1lXCIsXHJcbiAgICAgIGtleTogXCJuYW1lXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJBZ2VcIixcclxuICAgICAgZGF0YUluZGV4OiBcImFnZVwiLFxyXG4gICAgICBrZXk6IFwiYWdlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJBZGRyZXNzXCIsXHJcbiAgICAgIGRhdGFJbmRleDogXCJhZGRyZXNzXCIsXHJcbiAgICAgIGtleTogXCJhZGRyZXNzXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImVkaXRcIik7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtzaG93TW9kYWx9PlxyXG4gICAgICAgIEFncmVnYXJcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPFRhYmxlIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IHBhZ2luYXRpb249e2ZhbHNlfT5cclxuICAgICAgICA8Q29sdW1uIHRpdGxlPVwiTmFtZVwiIGRhdGFJbmRleD1cIm5hbWVcIiBrZXk9XCJuYW1lXCIgLz5cclxuICAgICAgICA8Q29sdW1uIHRpdGxlPVwiQWdlXCIgZGF0YUluZGV4PVwiYWdlXCIga2V5PVwiYWdlXCIgLz5cclxuICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICB0aXRsZT1cIk9wY2lvbmVzXCJcclxuICAgICAgICAgIGtleT1cIm9wY2lvbmVzXCJcclxuICAgICAgICAgIHJlbmRlcj17KHRleHQsIHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICA8U3BhY2Ugc2l6ZT1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgIDxFZGl0VHdvVG9uZSBvbkNsaWNrPXtoYW5kbGVFZGl0fSAvPlxyXG4gICAgICAgICAgICAgIDxEZWxldGVUd29Ub25lXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZShyZWNvcmQuYWdlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9UYWJsZT5cclxuICAgICAgO1xyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIkFncmVnYXIgTnVldmEgTm90aWNpYVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgICBmb290ZXI9e2ZhbHNlfVxyXG4gICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgIGNlbnRlcmVkXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEZvcm0gey4uLmxheW91dH0gb25GaW5pc2g9e29uRmluaXNofT5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0dWxvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdHVsb1wiXHJcbiAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIHRpdHVsb1wiIH1dfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMZW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsZW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIExlbmd1YWdlXCIgfV19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCIgYWxsb3dDbGVhcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVzXCI+RXNwYcOxb2w8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJlblwiPkluZ2zDqXM8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkltYWdlblwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lPVwiZmlsZUxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21FdmVudD17bm9ybUZpbGV9XHJcbiAgICAgICAgICAgICAgICAgIGV4dHJhPVwiODAwcHggeCA4MDBweFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxVcGxvYWQgbmFtZT1cImxvZ29cIiBhY3Rpb249XCIvdXBsb2FkLmRvXCIgbGlzdFR5cGU9XCJwaWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezV9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgICAgQ29udGVuaWRvOiAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXsxOX0+XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yIC8+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPlZvbHZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICBBY2VwdGFyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWNpYXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=