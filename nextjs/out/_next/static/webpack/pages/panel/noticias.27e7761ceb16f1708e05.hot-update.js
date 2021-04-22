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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contenido = _useState2[0],
      setContenido = _useState2[1];

  var layout = {
    labelCol: {
      span: 5
    },
    wrapperCol: {
      span: 19
    }
  };

  var onFinish = function onFinish(values) {
    var payload = _objectSpread(_objectSpread({}, values), {}, {
      contenido: contenido
    });

    console.log(payload);
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
      lineNumber: 111,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Table"], {
      dataSource: dataSource,
      pagination: false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Column, {
        title: "Name",
        dataIndex: "name"
      }, "name", false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Column, {
        title: "Age",
        dataIndex: "age"
      }, "age", false, {
        fileName: _jsxFileName,
        lineNumber: 118,
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
              lineNumber: 124,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["DeleteTwoTone"], {
              onClick: function onClick() {
                handleDelete(record.age);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this);
        }
      }, "opciones", false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
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
                  lineNumber: 153,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
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
                    lineNumber: 163,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option, {
                    value: "en",
                    children: "Ingl\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
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
                      lineNumber: 177,
                      columnNumber: 35
                    }, _this),
                    children: "Click para adjuntar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 5,
              style: {
                textAlign: "right"
              },
              children: "Contenido: \xA0\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 19,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Editor, {
                actions: {
                  setContenido: setContenido
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              lg: 24,
              style: {
                textAlign: "center"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                children: "Volver"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                type: "primary",
                htmlType: "submit",
                children: "Aceptar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, _this);
};

_s(Noticias, "SGf4S1F5/BCn03G2nh92B7Dz2T0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9Ob3RpY2lhcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb2x1bW4iLCJUYWJsZSIsIkVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJOb3RpY2lhcyIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVN0YXRlIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsImNvbnRlbmlkbyIsInNldENvbnRlbmlkbyIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJvbkZpbmlzaCIsInZhbHVlcyIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwibm9ybUZpbGUiLCJlIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsZUxpc3QiLCJzaG93TW9kYWwiLCJoYW5kbGVPayIsImhhbmRsZUNhbmNlbCIsImRhdGFTb3VyY2UiLCJrZXkiLCJuYW1lIiwiYWdlIiwiYWRkcmVzcyIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImhhbmRsZUVkaXQiLCJoYW5kbGVEZWxldGUiLCJ0ZXh0IiwicmVjb3JkIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7SUFZUUEsTSxHQUFXQywwQyxDQUFYRCxNO0FBQ1I7Q0FPQTs7O0FBRUEsSUFBTUUsTUFBTSxHQUFHQyxtREFBTyxNQUNwQixjQUFNO0FBQ0osU0FBTyxzSUFBUDtBQUNELENBSG1CLEVBSXBCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUZnQix1REFFaEI7QUFBQTtBQUFBLGNBRmdCLFVBRWhCO0FBQUE7QUFBQSxDQUpvQixDQUF0QjtNQUFNRixNOztBQU9OLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxzQkFDTkMseUNBQUksQ0FBQ0MsT0FBTCxFQURN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QSxxQkEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0ZELENBN0tEOztHQUFNeEMsUTtVQUNXQyx5Q0FBSSxDQUFDQyxPOzs7TUFEaEJGLFE7QUErS1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhbmVsL25vdGljaWFzLjI3ZTc3NjFjZWIxNmYxNzA4ZTA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIElucHV0LFxyXG4gIFVwbG9hZCxcclxuICBTZWxlY3QsXHJcbiAgTW9kYWwsXHJcbiAgVGFibGUsXHJcbiAgU3BhY2UsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgeyBDb2x1bW4gfSA9IFRhYmxlO1xyXG5pbXBvcnQge1xyXG4gIFVwbG9hZE91dGxpbmVkLFxyXG4gIEluYm94T3V0bGluZWQsXHJcbiAgRGVsZXRlVHdvVG9uZSxcclxuICBFZGl0VHdvVG9uZSxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG4vLyBpbXBvcnQgU2Nyb2xsIGZyb20gJy4vUHJ1ZWJhMic7XHJcblxyXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxyXG4gICgpID0+IHtcclxuICAgIHJldHVybiBpbXBvcnQoXCIuL0VkaXRvclwiKTtcclxuICB9LFxyXG4gIHsgc3NyOiBmYWxzZSB9XHJcbik7XHJcblxyXG5jb25zdCBOb3RpY2lhcyA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29udGVuaWRvLCBzZXRDb250ZW5pZG9dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGxheW91dCA9IHtcclxuICAgIGxhYmVsQ29sOiB7IHNwYW46IDUgfSxcclxuICAgIHdyYXBwZXJDb2w6IHsgc3BhbjogMTkgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgY29udGVuaWRvLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vcm1GaWxlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkIGV2ZW50OlwiLCBlKTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGUgJiYgZS5maWxlTGlzdDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0YVNvdXJjZSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiBcIjFcIixcclxuICAgICAgbmFtZTogXCJNaWtlXCIsXHJcbiAgICAgIGFnZTogMzIsXHJcbiAgICAgIGFkZHJlc3M6IFwiMTAgRG93bmluZyBTdHJlZXRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCIyXCIsXHJcbiAgICAgIG5hbWU6IFwiSm9oblwiLFxyXG4gICAgICBhZ2U6IDQyLFxyXG4gICAgICBhZGRyZXNzOiBcIjEwIERvd25pbmcgU3RyZWV0XCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk5hbWVcIixcclxuICAgICAgZGF0YUluZGV4OiBcIm5hbWVcIixcclxuICAgICAga2V5OiBcIm5hbWVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkFnZVwiLFxyXG4gICAgICBkYXRhSW5kZXg6IFwiYWdlXCIsXHJcbiAgICAgIGtleTogXCJhZ2VcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkFkZHJlc3NcIixcclxuICAgICAgZGF0YUluZGV4OiBcImFkZHJlc3NcIixcclxuICAgICAga2V5OiBcImFkZHJlc3NcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZWRpdFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3Nob3dNb2RhbH0+XHJcbiAgICAgICAgQWdyZWdhclxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8VGFibGUgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX0gcGFnaW5hdGlvbj17ZmFsc2V9PlxyXG4gICAgICAgIDxDb2x1bW4gdGl0bGU9XCJOYW1lXCIgZGF0YUluZGV4PVwibmFtZVwiIGtleT1cIm5hbWVcIiAvPlxyXG4gICAgICAgIDxDb2x1bW4gdGl0bGU9XCJBZ2VcIiBkYXRhSW5kZXg9XCJhZ2VcIiBrZXk9XCJhZ2VcIiAvPlxyXG4gICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgIHRpdGxlPVwiT3BjaW9uZXNcIlxyXG4gICAgICAgICAga2V5PVwib3BjaW9uZXNcIlxyXG4gICAgICAgICAgcmVuZGVyPXsodGV4dCwgcmVjb3JkKSA9PiAoXHJcbiAgICAgICAgICAgIDxTcGFjZSBzaXplPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgPEVkaXRUd29Ub25lIG9uQ2xpY2s9e2hhbmRsZUVkaXR9IC8+XHJcbiAgICAgICAgICAgICAgPERlbGV0ZVR3b1RvbmVcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHJlY29yZC5hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1RhYmxlPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJBZ3JlZ2FyIE51ZXZhIE5vdGljaWFcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgZm9vdGVyPXtmYWxzZX1cclxuICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICBjZW50ZXJlZFxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxGb3JtIHsuLi5sYXlvdXR9IG9uRmluaXNoPXtvbkZpbmlzaH0+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdHVsb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXR1bG9cIlxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCB0aXR1bG9cIiB9XX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGVuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGVuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCBMZW5ndWFnZVwiIH1dfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJlc1wiPkVzcGHDsW9sPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZW5cIj5Jbmdsw6lzPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wTmFtZT1cImZpbGVMaXN0XCJcclxuICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tRXZlbnQ9e25vcm1GaWxlfVxyXG4gICAgICAgICAgICAgICAgICBleHRyYT1cIjgwMHB4IHggODAwcHhcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VXBsb2FkIG5hbWU9XCJsb2dvXCIgYWN0aW9uPVwiL3VwbG9hZC5kb1wiIGxpc3RUeXBlPVwicGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXs1fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICAgIENvbnRlbmlkbzogJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17MTl9PlxyXG4gICAgICAgICAgICAgICAgPEVkaXRvciBhY3Rpb25zPXt7IHNldENvbnRlbmlkbyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj5Wb2x2ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgQWNlcHRhclxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGljaWFzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9