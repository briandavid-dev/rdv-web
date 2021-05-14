webpackHotUpdate_N_E("pages/panel/empresas",{

/***/ "./components/panel/Empresas/BtnPremios/BtnAgregar/index.js":
/*!******************************************************************!*\
  !*** ./components/panel/Empresas/BtnPremios/BtnAgregar/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services */ "./components/panel/Empresas/BtnPremios/services.js");
/* harmony import */ var _utils_notifica__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utils/notifica */ "./utils/notifica.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\components\\panel\\Empresas\\BtnPremios\\BtnAgregar\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../Editor */ "./components/panel/Empresas/Editor.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../Editor */ "./components/panel/Empresas/Editor.js")];
    },
    modules: ["../../Editor"]
  }
});
_c2 = Editor;

var BtnAgregar = function BtnAgregar(props) {
  _s();

  var empresaId = props.empresaId,
      empresaNombre = props.empresaNombre,
      empresaLenguaje = props.empresaLenguaje,
      dataProductos = props.dataProductos,
      setDataProductos = props.setDataProductos;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("AGREGAR"),
      procesoActual = _useState[0],
      setProcesoActual = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isModalVisible = _useState2[0],
      setIsModalVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      spinModal = _useState3[0],
      setSpinModal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      fileCertificado = _useState4[0],
      setFileCertificado = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showSizeMessageCertificado = _useState5[0],
      setShowSizeMessageCertificado = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      imageSrc = _useState6[0],
      setImageSrc = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      contenidoUpdate = _useState7[0],
      setContenidoUpdate = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    form.resetFields();
    setContenidoUpdate("");
    setImageSrc(""); // setIsModalVisible(true);
  }, []);

  var handleCancel = function handleCancel() {
    setIsModalVisible(false);
  };

  var handleBeforeUploadCertificado = function handleBeforeUploadCertificado(file) {
    // 5 MB = 1024 * 5 = 5120
    if (file.size / 1000 > 256) {
      setShowSizeMessageCertificado(true);
      return false;
    }

    setShowSizeMessageCertificado(false); // if (fileCertificado.findIndex((e) => e.name === file.name) >= 0) {
    //   return false;
    // }

    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      var rgxBase64 = RegExp(/data:(application|image)\/(jpeg|jpg|png*);base64,([^"]*)/gim);
      var rgx = rgxBase64.exec(reader.result);

      if (rgx !== null) {
        setFileCertificado([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(fileCertificado), [_objectSpread(_objectSpread({}, file), {}, {
          name: file.name,
          nombreArchivo: file.name,
          extension: rgx[2],
          base64: rgx[3],
          bytes: null
        }),,]));
      }
    };

    return false;
  };

  var handleRemoveFileClickCertificado = function handleRemoveFileClickCertificado() {
    setFileCertificado([]);
  };

  var normFile = function normFile(e) {
    var superaLimite = false;

    if (e.file.size / 1000 > 256) {
      setShowSizeMessageCertificado(true);
      superaLimite = true;
      e.fileList.pop();
      return e && e.fileList;
    } else {
      setShowSizeMessageCertificado(false);
      superaLimite = false;
    }

    if (Array.isArray(e)) {
      return e;
    } // if (e.fileList.length > 1) {
    //   e.fileList.shift();
    // }
    // if (superaLimite) {
    //   e.fileList = [];
    // }


    return e && e.fileList;
  };

  var layout = {
    labelCol: {
      span: 24
    },
    wrapperCol: {
      span: 24
    }
  };

  var onFinish = function onFinish(values) {
    var payload = _objectSpread(_objectSpread({}, values), {}, {
      content_html: contenidoUpdate,
      image_extension: "",
      image_base64: JSON.stringify(values.imagen),
      type: "premios"
    });

    delete payload.imagen;
    var updateNoticias = dataProductos;

    if (procesoActual === "ACTUALIZAR") {
      setSpinModal(true);
      _services__WEBPACK_IMPORTED_MODULE_9__["default"].updateProducto(payload).then(function (response) {
        if (response.data.codigo === "1") {
          updateNoticias = dataProductos.map(function (noticia) {
            if (noticia.id === values.id) {
              var imagen_ = {};

              if (payload.imagen[0]) {
                imagen_.imageBase64 = payload.imagen[0][0].base64;
                imagen_.imageExtension = payload.imagen[0][0].extension;
              }

              return _objectSpread(_objectSpread(_objectSpread({}, noticia), payload), imagen_);
            }

            return noticia;
          });
          setDataProductos(updateNoticias);
          setFileCertificado([]);
          handleCancel();
          setSpinModal(false);
          Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_10__["default"])("success");
        } else {
          Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_10__["default"])("error");
        }
      })["catch"](function (error) {
        Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_10__["default"])("error");
        setSpinModal(false);
      });
    }

    if (procesoActual === "AGREGAR") {
      setSpinModal(true);
      _services__WEBPACK_IMPORTED_MODULE_9__["default"].insertProducto(payload).then(function (response) {
        if (response.data.codigo === "1") {
          var uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
          updateNoticias = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(dataProductos), [_objectSpread(_objectSpread({}, payload), {}, {
            titulo: payload.name,
            lenguaje: payload.language,
            imageBase64: payload.image_base64,
            imageExtension: payload.image_extension,
            key: response.data.results.insertId,
            id: response.data.results.insertId,
            fechaCreacion: moment__WEBPACK_IMPORTED_MODULE_5___default()().format("DD-MM-YYYY")
          })]);
          setDataProductos(updateNoticias);
          setFileCertificado([]);
          handleCancel();
          setSpinModal(false);
          Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_10__["default"])("success");
        } else {
          Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_10__["default"])("error");
        }
      })["catch"](function (error) {
        Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_10__["default"])("error");
        setSpinModal(false);
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      type: "primary",
      onClick: function onClick() {
        setIsModalVisible(true);
      },
      children: "Agregar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
      title: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Actualizar premio de ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Agregar nuevo premio para ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 13
      }, _this),
      visible: isModalVisible // onOk={handleOk}
      ,
      onCancel: function onCancel() {
        setIsModalVisible(false);
      },
      footer: false,
      width: 1000,
      centered: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Spin"], {
        spinning: spinModal,
        delay: 500,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], _objectSpread(_objectSpread({}, layout), {}, {
            onFinish: onFinish,
            form: form,
            initialValues: {
              language: empresaLenguaje,
              empresa_id: empresaId
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
              name: "id",
              hidden: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
              name: "empresa_id",
              hidden: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
              gutter: (40, 40),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Lenguaje"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 28
                  }, _this),
                  name: "language",
                  rules: [{
                    required: true,
                    message: "Ingrese el lenguaje"
                  }],
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"], {
                    placeholder: "Seleccione",
                    allowClear: true,
                    disabled: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option, {
                      value: "es",
                      children: "Espa\xF1ol"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option, {
                      value: "en",
                      children: "Ingl\xE9s"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 268,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Nombre"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 28
                  }, _this),
                  name: "name",
                  rules: [{
                    required: true,
                    message: "Ingrese el nombre"
                  }, {
                    min: 10,
                    message: "Mínimo 10 caracteres"
                  }],
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                    maxLength: 100
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Imagenes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 28
                  }, _this),
                  name: "imagen",
                  valuePropName: "fileList",
                  getValueFromEvent: normFile,
                  extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: ["Im\xE1genes jpg o png de ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                      children: "200 x 200 px "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 307,
                      columnNumber: 47
                    }, _this), " (no superior a 200 KB)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 306,
                    columnNumber: 23
                  }, _this),
                  rules: [{
                    required: imageSrc !== "" ? false : true,
                    message: "Adjunte las imagenes"
                  }],
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Upload"], {
                    name: "fileCertificado",
                    accept: ".jpg, .jpeg, .png",
                    listType: "picture" // showUploadList={false}
                    ,
                    beforeUpload: function beforeUpload(file) {
                      return handleBeforeUploadCertificado(file);
                    } // onRemove={handleRemoveFileClickCertificado}
                    ,
                    fileList: fileCertificado,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UploadOutlined"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 335,
                        columnNumber: 37
                      }, _this),
                      children: "Click para adjuntar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 335,
                      columnNumber: 23
                    }, _this), showSizeMessageCertificado && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                      className: "afiliacion-datos-personales__size-message ",
                      style: {
                        color: "red"
                      },
                      children: "El archivo no debe pesar m\xE1s de 200 KB."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 340,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 324,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 19
                }, _this), imageSrc !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  style: {
                    boder: "1px solid #D9D9D9",
                    padding: "0.5rem"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Image, {
                    width: 100,
                    height: 100,
                    src: imageSrc,
                    fallback: "data:image/png;base64,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"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 356,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 382,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  className: "label-required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 412,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                  children: "Contenido:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 413,
                  columnNumber: 19
                }, _this), " \xA0\xA0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 416,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Editor, {
                  data: contenidoUpdate,
                  actions: {
                    setContenidoUpdate: setContenidoUpdate
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 417,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 415,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                style: {
                  textAlign: "center"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 423,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 424,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  onClick: handleCancel,
                  children: "Volver"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 425,
                  columnNumber: 19
                }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  type: "primary",
                  htmlType: "submit",
                  children: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Actualizar premio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 429,
                    columnNumber: 23
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Agregar premio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 431,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 427,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 422,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 15
            }, _this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(BtnAgregar, "KUUH++bfPU1RYcEQOaqC4yHplnY=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm];
});

_c3 = BtnAgregar;
/* harmony default export */ __webpack_exports__["default"] = (BtnAgregar);

var _c, _c2, _c3;

$RefreshReg$(_c, "Editor$dynamic");
$RefreshReg$(_c2, "Editor");
$RefreshReg$(_c3, "BtnAgregar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9CdG5QcmVtaW9zL0J0bkFncmVnYXIvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yIiwiZHluYW1pYyIsInNzciIsIkJ0bkFncmVnYXIiLCJwcm9wcyIsImVtcHJlc2FJZCIsImVtcHJlc2FOb21icmUiLCJlbXByZXNhTGVuZ3VhamUiLCJkYXRhUHJvZHVjdG9zIiwic2V0RGF0YVByb2R1Y3RvcyIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVN0YXRlIiwicHJvY2Vzb0FjdHVhbCIsInNldFByb2Nlc29BY3R1YWwiLCJpc01vZGFsVmlzaWJsZSIsInNldElzTW9kYWxWaXNpYmxlIiwic3Bpbk1vZGFsIiwic2V0U3Bpbk1vZGFsIiwiZmlsZUNlcnRpZmljYWRvIiwic2V0RmlsZUNlcnRpZmljYWRvIiwic2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8iLCJzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyIsImltYWdlU3JjIiwic2V0SW1hZ2VTcmMiLCJjb250ZW5pZG9VcGRhdGUiLCJzZXRDb250ZW5pZG9VcGRhdGUiLCJ1c2VFZmZlY3QiLCJyZXNldEZpZWxkcyIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvIiwiZmlsZSIsInNpemUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZGVuZCIsInJneEJhc2U2NCIsIlJlZ0V4cCIsInJneCIsImV4ZWMiLCJyZXN1bHQiLCJuYW1lIiwibm9tYnJlQXJjaGl2byIsImV4dGVuc2lvbiIsImJhc2U2NCIsImJ5dGVzIiwiaGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG8iLCJub3JtRmlsZSIsImUiLCJzdXBlcmFMaW1pdGUiLCJmaWxlTGlzdCIsInBvcCIsIkFycmF5IiwiaXNBcnJheSIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJvbkZpbmlzaCIsInZhbHVlcyIsInBheWxvYWQiLCJjb250ZW50X2h0bWwiLCJpbWFnZV9leHRlbnNpb24iLCJpbWFnZV9iYXNlNjQiLCJKU09OIiwic3RyaW5naWZ5IiwiaW1hZ2VuIiwidHlwZSIsInVwZGF0ZU5vdGljaWFzIiwiQXBpUHJvZHVjdG9zIiwidXBkYXRlUHJvZHVjdG8iLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29kaWdvIiwibWFwIiwibm90aWNpYSIsImlkIiwiaW1hZ2VuXyIsImltYWdlQmFzZTY0IiwiaW1hZ2VFeHRlbnNpb24iLCJub3RpZmljYSIsImVycm9yIiwiaW5zZXJ0UHJvZHVjdG8iLCJ1dWlkIiwidXVpZHY0IiwidGl0dWxvIiwibGVuZ3VhamUiLCJsYW5ndWFnZSIsImtleSIsInJlc3VsdHMiLCJpbnNlcnRJZCIsImZlY2hhQ3JlYWNpb24iLCJtb21lbnQiLCJmb3JtYXQiLCJlbXByZXNhX2lkIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWluIiwiY29sb3IiLCJib2RlciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFDcEIsY0FBTTtBQUNKLFNBQU8sMElBQVA7QUFDRCxDQUhtQixFQUlwQjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FGZ0IsMkRBRWhCO0FBQUE7QUFBQSxjQUZnQixjQUVoQjtBQUFBO0FBQUEsQ0FKb0IsQ0FBdEI7TUFBTUYsTTs7QUFPTixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUUxQkMsU0FGMEIsR0FPeEJELEtBUHdCLENBRTFCQyxTQUYwQjtBQUFBLE1BRzFCQyxhQUgwQixHQU94QkYsS0FQd0IsQ0FHMUJFLGFBSDBCO0FB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RixlQW1LRSxzRUFBQyx3Q0FBRDtBQUFLLGtCQUFFLEVBQUUsRUFBVDtBQUFhLHFCQUFLLEVBQUU7QUFBRTZFLDJCQUFTLEVBQUU7QUFBYixpQkFBcEI7QUFBQSx3Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQUdFLHNFQUFDLDJDQUFEO0FBQVEseUJBQU8sRUFBRTFFLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGLEVBSUcsSUFKSCxlQUtFLHNFQUFDLDJDQUFEO0FBQVEsc0JBQUksRUFBQyxTQUFiO0FBQXVCLDBCQUFRLEVBQUMsUUFBaEM7QUFBQSw0QkFDR2hCLGFBQWEsS0FBSyxZQUFsQixnQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERCxnQkFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQW5LRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUEsa0JBREY7QUFvT0QsQ0EvWkQ7O0dBQU1YLFU7VUFTV08seUNBQUksQ0FBQ0MsTzs7O01BVGhCUixVO0FBaWFTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYW5lbC9lbXByZXNhcy5jMDI1NTMwYjYyOTUzMjQxMGQxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIFNwaW4sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFNlbGVjdCxcclxuICBVcGxvYWQsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgQXBpUHJvZHVjdG9zIGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgbm90aWZpY2EgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL25vdGlmaWNhXCI7XHJcblxyXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxyXG4gICgpID0+IHtcclxuICAgIHJldHVybiBpbXBvcnQoXCIuLi8uLi9FZGl0b3JcIik7XHJcbiAgfSxcclxuICB7IHNzcjogZmFsc2UgfVxyXG4pO1xyXG5cclxuY29uc3QgQnRuQWdyZWdhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGVtcHJlc2FJZCxcclxuICAgIGVtcHJlc2FOb21icmUsXHJcbiAgICBlbXByZXNhTGVuZ3VhamUsXHJcbiAgICBkYXRhUHJvZHVjdG9zLFxyXG4gICAgc2V0RGF0YVByb2R1Y3RvcyxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cclxuICBjb25zdCBbcHJvY2Vzb0FjdHVhbCwgc2V0UHJvY2Vzb0FjdHVhbF0gPSB1c2VTdGF0ZShcIkFHUkVHQVJcIik7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlLCBzZXRJc01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NwaW5Nb2RhbCwgc2V0U3Bpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmlsZUNlcnRpZmljYWRvLCBzZXRGaWxlQ2VydGlmaWNhZG9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbywgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG9dID1cclxuICAgIHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250ZW5pZG9VcGRhdGUsIHNldENvbnRlbmlkb1VwZGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgIHNldENvbnRlbmlkb1VwZGF0ZShcIlwiKTtcclxuICAgIHNldEltYWdlU3JjKFwiXCIpO1xyXG4gICAgLy8gc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmVmb3JlVXBsb2FkQ2VydGlmaWNhZG8gPSAoZmlsZSkgPT4ge1xyXG4gICAgLy8gNSBNQiA9IDEwMjQgKiA1ID0gNTEyMFxyXG4gICAgaWYgKGZpbGUuc2l6ZSAvIDEwMDAgPiAyNTYpIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8odHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKGZhbHNlKTtcclxuXHJcbiAgICAvLyBpZiAoZmlsZUNlcnRpZmljYWRvLmZpbmRJbmRleCgoZSkgPT4gZS5uYW1lID09PSBmaWxlLm5hbWUpID49IDApIHtcclxuICAgIC8vICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJneEJhc2U2NCA9IFJlZ0V4cChcclxuICAgICAgICAvZGF0YTooYXBwbGljYXRpb258aW1hZ2UpXFwvKGpwZWd8anBnfHBuZyopO2Jhc2U2NCwoW15cIl0qKS9naW1cclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgcmd4ID0gcmd4QmFzZTY0LmV4ZWMocmVhZGVyLnJlc3VsdCk7XHJcblxyXG4gICAgICBpZiAocmd4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtcclxuICAgICAgICAgIC4uLmZpbGVDZXJ0aWZpY2FkbyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICBub21icmVBcmNoaXZvOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbjogcmd4WzJdLFxyXG4gICAgICAgICAgICBiYXNlNjQ6IHJneFszXSxcclxuICAgICAgICAgICAgYnl0ZXM6IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG8gPSAoKSA9PiB7XHJcbiAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vcm1GaWxlID0gKGUpID0+IHtcclxuICAgIGxldCBzdXBlcmFMaW1pdGUgPSBmYWxzZTtcclxuICAgIGlmIChlLmZpbGUuc2l6ZSAvIDEwMDAgPiAyNTYpIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8odHJ1ZSk7XHJcbiAgICAgIHN1cGVyYUxpbWl0ZSA9IHRydWU7XHJcbiAgICAgIGUuZmlsZUxpc3QucG9wKCk7XHJcbiAgICAgIHJldHVybiBlICYmIGUuZmlsZUxpc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyhmYWxzZSk7XHJcbiAgICAgIHN1cGVyYUxpbWl0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKGUuZmlsZUxpc3QubGVuZ3RoID4gMSkge1xyXG4gICAgLy8gICBlLmZpbGVMaXN0LnNoaWZ0KCk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZiAoc3VwZXJhTGltaXRlKSB7XHJcbiAgICAvLyAgIGUuZmlsZUxpc3QgPSBbXTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gZSAmJiBlLmZpbGVMaXN0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxheW91dCA9IHtcclxuICAgIGxhYmVsQ29sOiB7IHNwYW46IDI0IH0sXHJcbiAgICB3cmFwcGVyQ29sOiB7IHNwYW46IDI0IH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAuLi52YWx1ZXMsXHJcbiAgICAgIGNvbnRlbnRfaHRtbDogY29udGVuaWRvVXBkYXRlLFxyXG4gICAgICBpbWFnZV9leHRlbnNpb246IFwiXCIsXHJcbiAgICAgIGltYWdlX2Jhc2U2NDogSlNPTi5zdHJpbmdpZnkodmFsdWVzLmltYWdlbiksXHJcbiAgICAgIHR5cGU6IFwicHJlbWlvc1wiLFxyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGUgcGF5bG9hZC5pbWFnZW47XHJcblxyXG4gICAgbGV0IHVwZGF0ZU5vdGljaWFzID0gZGF0YVByb2R1Y3RvcztcclxuXHJcbiAgICBpZiAocHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIpIHtcclxuICAgICAgc2V0U3Bpbk1vZGFsKHRydWUpO1xyXG4gICAgICBBcGlQcm9kdWN0b3MudXBkYXRlUHJvZHVjdG8ocGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgdXBkYXRlTm90aWNpYXMgPSBkYXRhUHJvZHVjdG9zLm1hcCgobm90aWNpYSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChub3RpY2lhLmlkID09PSB2YWx1ZXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlbl8gPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmltYWdlblswXSkge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZW5fLmltYWdlQmFzZTY0ID0gcGF5bG9hZC5pbWFnZW5bMF1bMF0uYmFzZTY0O1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZW5fLmltYWdlRXh0ZW5zaW9uID0gcGF5bG9hZC5pbWFnZW5bMF1bMF0uZXh0ZW5zaW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm5vdGljaWEsXHJcbiAgICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICAgIC4uLmltYWdlbl8sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbm90aWNpYTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zKHVwZGF0ZU5vdGljaWFzKTtcclxuICAgICAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvY2Vzb0FjdHVhbCA9PT0gXCJBR1JFR0FSXCIpIHtcclxuICAgICAgc2V0U3Bpbk1vZGFsKHRydWUpO1xyXG4gICAgICBBcGlQcm9kdWN0b3MuaW5zZXJ0UHJvZHVjdG8ocGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgICAgICB1cGRhdGVOb3RpY2lhcyA9IFtcclxuICAgICAgICAgICAgICAuLi5kYXRhUHJvZHVjdG9zLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB0aXR1bG86IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgICAgICAgIGxlbmd1YWplOiBwYXlsb2FkLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBheWxvYWQuaW1hZ2VfYmFzZTY0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VFeHRlbnNpb246IHBheWxvYWQuaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAga2V5OiByZXNwb25zZS5kYXRhLnJlc3VsdHMuaW5zZXJ0SWQsXHJcbiAgICAgICAgICAgICAgICBpZDogcmVzcG9uc2UuZGF0YS5yZXN1bHRzLmluc2VydElkLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFDcmVhY2lvbjogbW9tZW50KCkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zKHVwZGF0ZU5vdGljaWFzKTtcclxuICAgICAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgQWdyZWdhclxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiID8gKFxyXG4gICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIHByZW1pbyBkZSB7ZW1wcmVzYU5vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3Bhbj5BZ3JlZ2FyIG51ZXZvIHByZW1pbyBwYXJhIHtlbXByZXNhTm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgLy8gb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgY2VudGVyZWRcclxuICAgICAgPlxyXG4gICAgICAgIDxTcGluIHNwaW5uaW5nPXtzcGluTW9kYWx9IGRlbGF5PXs1MDB9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICB7Li4ubGF5b3V0fVxyXG4gICAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBlbXByZXNhTGVuZ3VhamUsXHJcbiAgICAgICAgICAgICAgICBlbXByZXNhX2lkOiBlbXByZXNhSWQsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImlkXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiZW1wcmVzYV9pZFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsoNDAsIDQwKX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5MZW5ndWFqZTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIGxlbmd1YWplXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVzXCI+RXNwYcOxb2w8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVuXCI+SW5nbMOpczwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5Ob21icmU8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgbm9tYnJlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWluOiAxMCwgbWVzc2FnZTogXCJNw61uaW1vIDEwIGNhcmFjdGVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPlJlc3VtZW48L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgcmVzdW1lblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMTAwLCBtZXNzYWdlOiBcIk3DrW5pbW8gMTAwIGNhcmFjdGVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXs1MDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPkltYWdlbmVzPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJmaWxlTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tRXZlbnQ9e25vcm1GaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbcOhZ2VuZXMganBnIG8gcG5nIGRlIDxzdHJvbmc+MjAwIHggMjAwIHB4IDwvc3Ryb25nPiAobm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXJpb3IgYSAyMDAgS0IpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBpbWFnZVNyYyAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBZGp1bnRlIGxhcyBpbWFnZW5lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxVcGxvYWQgbmFtZT1cImxvZ29cIiBhY3Rpb249XCIvdXBsb2FkLmRvXCIgbGlzdFR5cGU9XCJwaWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1VwbG9hZD4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlQ2VydGlmaWNhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dVcGxvYWRMaXN0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17KGZpbGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvKGZpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBvblJlbW92ZT17aGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTGlzdD17ZmlsZUNlcnRpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3Nob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFmaWxpYWNpb24tZGF0b3MtcGVyc29uYWxlc19fc2l6ZS1tZXNzYWdlIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVsIGFyY2hpdm8gbm8gZGViZSBwZXNhciBtw6FzIGRlIDIwMCBLQi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlU3JjICE9PSBcIlwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2RlcjogXCIxcHggc29saWQgI0Q5RDlEOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNSUFBQUREQ0FZQUFBRFF2YzZVQUFBQlJXbERRMUJKUTBNZ1VISnZabWxzWlFBQUtKRmpZR0FTU1N3b3lHRmhZR0RJelNzcENuSjNVb2lJakZKZ2Y4TEF3U0RDSU1vZ3dNQ2NtRnhjNEJnUTRBTlV3Z0NqVWNHM2F3eU1JUHF5THNpczdQUE9xM1FkREZjdmpWM2pPRDFib1FWVFBRcmdTa2t0VGdiU2Y0QTRMYm1ncUlTQmdURUZ5Rll1THlrQXNUdUFiSkVpb0tPQTdEa2dkanFFdlFIRVRvS3dqNERWaEFRNUE5azNnR3lCNUl4RW9CbU1MNEJzblNRazhYUWtOdFJlRU9CeGNmWHhVUWcxTWpjMGR5SGdYTkpCU1dwRkNZaDJ6aStvTE1wTXp5aFJjQVNHVXFxQ1oxNnlubzZDa1lHUkFRTURLTXdocWovZkFJY2xveGdIUXF4QWpJSEJFdWd3NXNVSXNTUXBCb2J0UVBkTGNpTEVWSll6TVBCSE1EQnNheWhJTEVxRU80RHhHMHR4bXJFUmhNMjluWUdCZGRyLy81L0RHUmpZTlJrWS9sNy8vLy8zOXYvLy95NERtbitMZ2VIQU53RHJrbDFBdU8rcG1nQUFBRGhsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUFxQUNBQVFBQUFBQkFBQUF3cUFEQUFRQUFBQUJBQUFBd3dBQUFBRDliL0huQUFBSGxrbEVRVlI0QWUzZFAzUFRXQlNHY2JHek02R0NLcWxJQlJWMGRIUkpGYXJRMGVVVDhMSDRCblJVME5IUjBVRUZWZElsRlJWN1R6Umtzb21QWTh1eWtUay96ZXdRZkt3Lzl6bnY0eXZKeW5MdjR1TGlWMmRCb0RpQmY0cVAzL0FSdUNSQUJFRkFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZzBBajhpMEpPNE96c3JQdjY5V3YraGkycVBIcjBxTnZmMzkraUk5N3NvUkloNGYzejU4L3U3ZHUzU1hYN1h0N1oyZW5ldkhtemZRZStvU04yYXBTQVBqMDlUU3JiK1hLSS9mMzc5KzA4K0EwY05SRTJBTmt1cGsrQUNOUHZrU1BjQUFFaWJBQ3lYVXlmQUJHbTN5Tkh1QUVDUk5nQVpMdVlQZ0VpcktsSHU3dTdYZHl5dEd3SEFkOGpqTnluZzRPRDd2bno1MWRiUFQ4Lzd6NTgrTkI5Ky9idDZqVS9USStBR1dIRW5yeDQ4ZUovRXNTbUh6eDQwTDE4K2ZMeXp4RjNaVk1qRXlEQ2lFRGpNWVpaUzV3aVBYbnlaRmJKYXhNaFFJUVJHekh2V1I3WEN5T0NYc09taURBaTFIbVBNTVFqRHBicEVpRENpTDM1OGVOSHVyVy81U25XZElCYlhpRENpQTM4L1BuenJjZTJZeVo0Ly81OUYzZVBMTk1sNFBicGlMMkowTDk3OSs3eUR0SERodzh2dHp6dmRHbkVYZHZVaWdTSXNDTEFXYXZIcC8rcU0wQmNYTWQvcTI1bjF2RjU3VFlCcDBhM21VemlsZVBqNCs3azVLU0xiNmd0NnlkQWhQVXpYbm9QUjBkSGw3OVdHVE5DZkJubjF1dlNDSmRlZ1FoTEkxdnZDaytmUHUyZVBYdDJ0Wk9ZRVY2L2ZuMzFkeitzaHdBUjFzUDFjcXZMbnRiRU45TXhBOXhjWWpzeFMxaldSNEFJYTJJYnp4MHRjNDRmWVgvMTZsVjZOREZMWEgrWUwzMmp3aUFDUkJpRWJmNUtjWG9USXNRU3B6WHg0TjI4SmE0QlFvSzdyZ1hpeWRiSGp4L1AyNVRhUUFKRUdBZ3VXeTArMlE4UEQ2L0tpNFI4RVZsK2J6Qk9uWlk5NWZxOXJqOXpBa1RJMlN4ZGlkQkhxRzkrc2tkdzQzYm9yQ1hPL1pjSmRyYVBXZHYyMnVJRWlMQTRxN252dkN1ZzhXVHF6UXZlT0gyNmZvZG83ZzZ1RmUvYTE3VzMrbkZCQWtSWUVOUmRiMXZra3oxQ0g5Y1BzVnkvanJocjI3UHFNWXZFTllObEhBSWVzUmlCWXdSeTBWKzhpWFA4Ky9mdlgxMU1yN0w3RUN1ZWIvcjQ4ZU1xbTdGdUkyQkdXREVHOGNtKzdHM05FT2ZtZGNUUXc0aDkvNTVsaG03RGVrUllLUVBaRjJBcmJYVEF5dTRrRFlCMll4VXp3ZzBnaS80MXp0SG5mUUcyNkhiR2VsL2NyVnJtN3ROWSsvMWJ0a09FQVoyTTA1cjRGQjdyOUdiQUlkeGFaWXJIZE9zZ0ovd0NFUVkwSjc0VG1PS25ieHhUOW4zRmdHR1dXc1Zkb3dIdGp0OU5udmY3eVFNMmFaVS9USUFJQXhydzZkT25BV3RaWmNvRW5CcE51VHVPYldNRWlMQXgxSFkwWlFKRW1ISjNITnZHQ0JCaFk2anRhTW9FaUpCMFoyOXZMNmxzNTh2eFBjTzgvemZyZG81cXZLTytkM0Z4OFd1OHpmMWRXNHAvY1B6TGx5L2R0djlUcy9FYmN2R0FIaEh5ZkJJaFo2TlNpSUJUbzBMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDL3dHZ0tLQzRZTUE0VEFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgey8qIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPsK/RGVzZWEgdmlzdWFsaXphY2nDs24gZW4gZWwgSG9tZT88L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbGl6YWNpb25Ib21lXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbmdyZXNlIHZpc3VhbGl6YWNpw7NuIGVuIGVsIEhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCIgYWxsb3dDbGVhcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiU1wiPlNpPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJOXCI+Tm88L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYXJjYXJQcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsK/RGVzZWEgbWFyY2FyIGNvbW8gcHJpbmNpcGFsPzwvc3Ryb25nPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNpIHNlbGVjY2lvbmEgJ1NpJyBzZSBhZ3JlZ2Fyw6EgY29tbyBub3RpY2lhcyBwcmluY2lwYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbiBlbCBob21lIChlbCBjdWFkcm8gZ3JhbmRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTZWxlY2Npb25lIHNpIG8gbm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIlNcIj5TaTwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJOXCI+Tm88L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5JdGVtIG5hbWU9XCJtYXJjYXJQcmluY2lwYWxcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbC1yZXF1aXJlZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250ZW5pZG86PC9zdHJvbmc+ICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVuaWRvVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e3sgc2V0Q29udGVuaWRvVXBkYXRlIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PlZvbHZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIHByZW1pbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBwcmVtaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ0bkFncmVnYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=