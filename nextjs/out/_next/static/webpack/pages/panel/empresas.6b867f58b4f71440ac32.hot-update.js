webpackHotUpdate_N_E("pages/panel/empresas",{

/***/ "./components/panel/Empresas/BtnPremios/BtnAgregar/index.js":
/*!******************************************************************!*\
  !*** ./components/panel/Empresas/BtnPremios/BtnAgregar/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











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
    if (file.size / 1000 > 512) {
      setShowSizeMessageCertificado(true);
      return false;
    }

    setShowSizeMessageCertificado(false);

    if (fileCertificado.findIndex(function (e) {
      return e.name === file.name;
    }) >= 0) {
      return false;
    }

    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      var rgxBase64 = RegExp(/data:(application|image)\/(jpeg|jpg|png*);base64,([^"]*)/gim);
      var rgx = rgxBase64.exec(reader.result);

      if (rgx !== null) {
        setFileCertificado([[_objectSpread(_objectSpread({}, file), {}, {
          name: file.name,
          nombreArchivo: file.name,
          extension: rgx[2],
          base64: rgx[3],
          bytes: null
        })]]);
      }
    };

    return false;
  };

  var handleRemoveFileClickCertificado = function handleRemoveFileClickCertificado() {
    setFileCertificado([]);
  };

  var normFile = function normFile(e) {
    var superaLimite = false;

    if (e.file.size / 1000 > 512) {
      setShowSizeMessageCertificado(true);
      superaLimite = true;
    } else {
      setShowSizeMessageCertificado(false);
      superaLimite = false;
    }

    if (Array.isArray(e)) {
      return e;
    }

    if (e.fileList.length > 1) {
      e.fileList.shift();
    }

    if (superaLimite) {
      e.fileList = [];
    }

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
      image_extension: fileCertificado[0][0].extension,
      image_base64: fileCertificado[0][0].base64
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
          updateNoticias = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dataProductos), [_objectSpread(_objectSpread({}, payload), {}, {
            titulo: payload.name,
            lenguaje: payload.language,
            imageBase64: payload.image_base64,
            imageExtension: payload.image_extension,
            key: uuid,
            id: uuid,
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
      lineNumber: 213,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
      title: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Actualizar premio de ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Agregar nuevo premio para ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 227,
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
                lineNumber: 251,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
              name: "empresa_id",
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
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
              gutter: (40, 40),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Lenguaje"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
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
                      lineNumber: 264,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option, {
                      value: "en",
                      children: "Ingl\xE9s"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Nombre"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 272,
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
                    lineNumber: 279,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Imagenes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 28
                  }, _this),
                  name: "imagen",
                  valuePropName: "fileList",
                  getValueFromEvent: normFile,
                  extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: ["Im\xE1genes jpg o png de", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                      children: ["70px x 150px", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                        style: {
                          color: "red"
                        },
                        children: "PENDIENTE"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 307,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 305,
                      columnNumber: 25
                    }, _this), " ", "(no superior a 500 KB)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 303,
                    columnNumber: 23
                  }, _this),
                  rules: [{
                    required: imageSrc !== "" ? false : true,
                    message: "Adjunte un imagen"
                  }],
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Upload"], {
                    name: "fileCertificado",
                    accept: ".jpg, .jpeg, .png",
                    listType: "picture" // showUploadList={false}
                    ,
                    beforeUpload: function beforeUpload(file) {
                      return handleBeforeUploadCertificado(file);
                    },
                    onRemove: handleRemoveFileClickCertificado,
                    fileList: fileCertificado,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UploadOutlined"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 336,
                        columnNumber: 37
                      }, _this),
                      children: "Click para adjuntar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 336,
                      columnNumber: 23
                    }, _this), showSizeMessageCertificado && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                      className: "afiliacion-datos-personales__size-message ",
                      style: {
                        color: "red"
                      },
                      children: "El archivo no debe pesar m\xE1s de 500 KB."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 341,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 325,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
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
                    lineNumber: 357,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 351,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                  children: "Contenido:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 413,
                  columnNumber: 19
                }, _this), " \xA0\xA0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 412,
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
              lineNumber: 256,
              columnNumber: 15
            }, _this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9CdG5QcmVtaW9zL0J0bkFncmVnYXIvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yIiwiZHluYW1pYyIsInNzciIsIkJ0bkFncmVnYXIiLCJwcm9wcyIsImVtcHJlc2FJZCIsImVtcHJlc2FOb21icmUiLCJlbXByZXNhTGVuZ3VhamUiLCJkYXRhUHJvZHVjdG9zIiwic2V0RGF0YVByb2R1Y3RvcyIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVN0YXRlIiwicHJvY2Vzb0FjdHVhbCIsInNldFByb2Nlc29BY3R1YWwiLCJpc01vZGFsVmlzaWJsZSIsInNldElzTW9kYWxWaXNpYmxlIiwic3Bpbk1vZGFsIiwic2V0U3Bpbk1vZGFsIiwiZmlsZUNlcnRpZmljYWRvIiwic2V0RmlsZUNlcnRpZmljYWRvIiwic2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8iLCJzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyIsImltYWdlU3JjIiwic2V0SW1hZ2VTcmMiLCJjb250ZW5pZG9VcGRhdGUiLCJzZXRDb250ZW5pZG9VcGRhdGUiLCJ1c2VFZmZlY3QiLCJyZXNldEZpZWxkcyIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvIiwiZmlsZSIsInNpemUiLCJmaW5kSW5kZXgiLCJlIiwibmFtZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwicmd4QmFzZTY0IiwiUmVnRXhwIiwicmd4IiwiZXhlYyIsInJlc3VsdCIsIm5vbWJyZUFyY2hpdm8iLCJleHRlbnNpb24iLCJiYXNlNjQiLCJieXRlcyIsImhhbmRsZVJlbW92ZUZpbGVDbGlja0NlcnRpZmljYWRvIiwibm9ybUZpbGUiLCJzdXBlcmFMaW1pdGUiLCJBcnJheSIsImlzQXJyYXkiLCJmaWxlTGlzdCIsImxlbmd0aCIsInNoaWZ0IiwibGF5b3V0IiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsIm9uRmluaXNoIiwidmFsdWVzIiwicGF5bG9hZCIsImNvbnRlbnRfaHRtbCIsImltYWdlX2V4dGVuc2lvbiIsImltYWdlX2Jhc2U2NCIsImltYWdlbiIsInVwZGF0ZU5vdGljaWFzIiwiQXBpUHJvZHVjdG9zIiwidXBkYXRlUHJvZHVjdG8iLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29kaWdvIiwibWFwIiwibm90aWNpYSIsImlkIiwiaW1hZ2VuXyIsImltYWdlQmFzZTY0IiwiaW1hZ2VFeHRlbnNpb24iLCJub3RpZmljYSIsImVycm9yIiwiaW5zZXJ0UHJvZHVjdG8iLCJ1dWlkIiwidXVpZHY0IiwidGl0dWxvIiwibGVuZ3VhamUiLCJsYW5ndWFnZSIsImtleSIsImZlY2hhQ3JlYWNpb24iLCJtb21lbnQiLCJmb3JtYXQiLCJlbXByZXNhX2lkIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWluIiwiY29sb3IiLCJib2RlciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFDcEIsY0FBTTtBQUNKLFNBQU8sMElBQVA7QUFDRCxDQUhtQixFQUlwQjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FGZ0IsMkRBRWhCO0FBQUE7QUFBQSxjQUZnQixjQUVoQjtBQUFBO0FBQUEsQ0FKb0IsQ0FBdEI7TUFBTUYsTTs7QUFPTixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUUxQkMsU0FGMEIsR0FPeEJELEtBUHdCLENBRTFCQyxTQUYwQjtBQUFBLE1BRzFCQyxhQUgwQixHQU94QkYsS0FQd0IsQ0FHMUJFLGFBSDBCO0FBQUEsTUFJMUJDLGVBSjBCLEdBT3hCSCxL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YnBhY2svcGFnZXMvcGFuZWwvZW1wcmVzYXMuNmI4NjdmNThiNGY3MTQ0MGFjMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBNb2RhbCxcclxuICBTcGluLFxyXG4gIEZvcm0sXHJcbiAgSW5wdXQsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBTZWxlY3QsXHJcbiAgVXBsb2FkLFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IEFwaVByb2R1Y3RvcyBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IG5vdGlmaWNhIGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlscy9ub3RpZmljYVwiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAoKSA9PiB7XHJcbiAgICByZXR1cm4gaW1wb3J0KFwiLi4vLi4vRWRpdG9yXCIpO1xyXG4gIH0sXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuXHJcbmNvbnN0IEJ0bkFncmVnYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBlbXByZXNhSWQsXHJcbiAgICBlbXByZXNhTm9tYnJlLFxyXG4gICAgZW1wcmVzYUxlbmd1YWplLFxyXG4gICAgZGF0YVByb2R1Y3RvcyxcclxuICAgIHNldERhdGFQcm9kdWN0b3MsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3QgW3Byb2Nlc29BY3R1YWwsIHNldFByb2Nlc29BY3R1YWxdID0gdXNlU3RhdGUoXCJBR1JFR0FSXCIpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzcGluTW9kYWwsIHNldFNwaW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZpbGVDZXJ0aWZpY2Fkbywgc2V0RmlsZUNlcnRpZmljYWRvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8sIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvXSA9XHJcbiAgICB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udGVuaWRvVXBkYXRlLCBzZXRDb250ZW5pZG9VcGRhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICBzZXRDb250ZW5pZG9VcGRhdGUoXCJcIik7XHJcbiAgICBzZXRJbWFnZVNyYyhcIlwiKTtcclxuICAgIC8vIHNldElzTW9kYWxWaXNpYmxlKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvID0gKGZpbGUpID0+IHtcclxuICAgIC8vIDUgTUIgPSAxMDI0ICogNSA9IDUxMjBcclxuICAgIGlmIChmaWxlLnNpemUgLyAxMDAwID4gNTEyKSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKHRydWUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyhmYWxzZSk7XHJcblxyXG4gICAgaWYgKGZpbGVDZXJ0aWZpY2Fkby5maW5kSW5kZXgoKGUpID0+IGUubmFtZSA9PT0gZmlsZS5uYW1lKSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCByZ3hCYXNlNjQgPSBSZWdFeHAoXHJcbiAgICAgICAgL2RhdGE6KGFwcGxpY2F0aW9ufGltYWdlKVxcLyhqcGVnfGpwZ3xwbmcqKTtiYXNlNjQsKFteXCJdKikvZ2ltXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJneCA9IHJneEJhc2U2NC5leGVjKHJlYWRlci5yZXN1bHQpO1xyXG5cclxuICAgICAgaWYgKHJneCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICBub21icmVBcmNoaXZvOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgZXh0ZW5zaW9uOiByZ3hbMl0sXHJcbiAgICAgICAgICAgICAgYmFzZTY0OiByZ3hbM10sXHJcbiAgICAgICAgICAgICAgYnl0ZXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG8gPSAoKSA9PiB7XHJcbiAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vcm1GaWxlID0gKGUpID0+IHtcclxuICAgIGxldCBzdXBlcmFMaW1pdGUgPSBmYWxzZTtcclxuICAgIGlmIChlLmZpbGUuc2l6ZSAvIDEwMDAgPiA1MTIpIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8odHJ1ZSk7XHJcbiAgICAgIHN1cGVyYUxpbWl0ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyhmYWxzZSk7XHJcbiAgICAgIHN1cGVyYUxpbWl0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuZmlsZUxpc3QubGVuZ3RoID4gMSkge1xyXG4gICAgICBlLmZpbGVMaXN0LnNoaWZ0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3VwZXJhTGltaXRlKSB7XHJcbiAgICAgIGUuZmlsZUxpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZSAmJiBlLmZpbGVMaXN0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxheW91dCA9IHtcclxuICAgIGxhYmVsQ29sOiB7IHNwYW46IDI0IH0sXHJcbiAgICB3cmFwcGVyQ29sOiB7IHNwYW46IDI0IH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAuLi52YWx1ZXMsXHJcbiAgICAgIGNvbnRlbnRfaHRtbDogY29udGVuaWRvVXBkYXRlLFxyXG4gICAgICBpbWFnZV9leHRlbnNpb246IGZpbGVDZXJ0aWZpY2Fkb1swXVswXS5leHRlbnNpb24sXHJcbiAgICAgIGltYWdlX2Jhc2U2NDogZmlsZUNlcnRpZmljYWRvWzBdWzBdLmJhc2U2NCxcclxuICAgIH07XHJcblxyXG4gICAgZGVsZXRlIHBheWxvYWQuaW1hZ2VuO1xyXG5cclxuICAgIGxldCB1cGRhdGVOb3RpY2lhcyA9IGRhdGFQcm9kdWN0b3M7XHJcblxyXG4gICAgaWYgKHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiKSB7XHJcbiAgICAgIHNldFNwaW5Nb2RhbCh0cnVlKTtcclxuICAgICAgQXBpUHJvZHVjdG9zLnVwZGF0ZVByb2R1Y3RvKHBheWxvYWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU5vdGljaWFzID0gZGF0YVByb2R1Y3Rvcy5tYXAoKG5vdGljaWEpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobm90aWNpYS5pZCA9PT0gdmFsdWVzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZW5fID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5pbWFnZW5bMF0pIHtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VuXy5pbWFnZUJhc2U2NCA9IHBheWxvYWQuaW1hZ2VuWzBdWzBdLmJhc2U2NDtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VuXy5pbWFnZUV4dGVuc2lvbiA9IHBheWxvYWQuaW1hZ2VuWzBdWzBdLmV4dGVuc2lvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5ub3RpY2lhLFxyXG4gICAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgICAuLi5pbWFnZW5fLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5vdGljaWE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcyh1cGRhdGVOb3RpY2lhcyk7XHJcbiAgICAgICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICBub3RpZmljYShcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2Nlc29BY3R1YWwgPT09IFwiQUdSRUdBUlwiKSB7XHJcbiAgICAgIHNldFNwaW5Nb2RhbCh0cnVlKTtcclxuICAgICAgQXBpUHJvZHVjdG9zLmluc2VydFByb2R1Y3RvKHBheWxvYWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKTtcclxuICAgICAgICAgICAgdXBkYXRlTm90aWNpYXMgPSBbXHJcbiAgICAgICAgICAgICAgLi4uZGF0YVByb2R1Y3RvcyxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgdGl0dWxvOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBsZW5ndWFqZTogcGF5bG9hZC5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXlsb2FkLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICAgIGltYWdlRXh0ZW5zaW9uOiBwYXlsb2FkLmltYWdlX2V4dGVuc2lvbixcclxuICAgICAgICAgICAgICAgIGtleTogdXVpZCxcclxuICAgICAgICAgICAgICAgIGlkOiB1dWlkLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFDcmVhY2lvbjogbW9tZW50KCkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zKHVwZGF0ZU5vdGljaWFzKTtcclxuICAgICAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgQWdyZWdhclxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiID8gKFxyXG4gICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIHByZW1pbyBkZSB7ZW1wcmVzYU5vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3Bhbj5BZ3JlZ2FyIG51ZXZvIHByZW1pbyBwYXJhIHtlbXByZXNhTm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgLy8gb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgY2VudGVyZWRcclxuICAgICAgPlxyXG4gICAgICAgIDxTcGluIHNwaW5uaW5nPXtzcGluTW9kYWx9IGRlbGF5PXs1MDB9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICB7Li4ubGF5b3V0fVxyXG4gICAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBlbXByZXNhTGVuZ3VhamUsXHJcbiAgICAgICAgICAgICAgICBlbXByZXNhX2lkOiBlbXByZXNhSWQsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImlkXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiZW1wcmVzYV9pZFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsoNDAsIDQwKX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5MZW5ndWFqZTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIGxlbmd1YWplXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVzXCI+RXNwYcOxb2w8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVuXCI+SW5nbMOpczwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5Ob21icmU8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgbm9tYnJlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWluOiAxMCwgbWVzc2FnZTogXCJNw61uaW1vIDEwIGNhcmFjdGVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPlJlc3VtZW48L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgcmVzdW1lblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMTAwLCBtZXNzYWdlOiBcIk3DrW5pbW8gMTAwIGNhcmFjdGVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXs1MDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPkltYWdlbmVzPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJmaWxlTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tRXZlbnQ9e25vcm1GaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbcOhZ2VuZXMganBnIG8gcG5nIGRle1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDcwcHggeCAxNTBweHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5QRU5ESUVOVEU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKG5vIHN1cGVyaW9yIGEgNTAwIEtCKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogaW1hZ2VTcmMgIT09IFwiXCIgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWRqdW50ZSB1biBpbWFnZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8VXBsb2FkIG5hbWU9XCJsb2dvXCIgYWN0aW9uPVwiL3VwbG9hZC5kb1wiIGxpc3RUeXBlPVwicGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9VcGxvYWQ+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZUNlcnRpZmljYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVVcGxvYWQ9eyhmaWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCZWZvcmVVcGxvYWRDZXJ0aWZpY2FkbyhmaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e2hhbmRsZVJlbW92ZUZpbGVDbGlja0NlcnRpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZUxpc3Q9e2ZpbGVDZXJ0aWZpY2Fkb31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZmlsaWFjaW9uLWRhdG9zLXBlcnNvbmFsZXNfX3NpemUtbWVzc2FnZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbCBhcmNoaXZvIG5vIGRlYmUgcGVzYXIgbcOhcyBkZSA1MDAgS0IuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZVNyYyAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9kZXI6IFwiMXB4IHNvbGlkICNEOUQ5RDlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTUlBQUFERENBWUFBQURRdmM2VUFBQUJSV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFLSkZqWUdBU1NTd295R0ZoWUdESXpTc3BDbkozVW9pSWpGSmdmOExBd1NEQ0lNb2d3TUNjbUZ4YzRCZ1E0QU5Vd2dDalVjRzNhd3lNSVBxeUxzaXM3UFBPcTNRZERGY3ZqVjNqT0QxYm9RVlRQUXJnU2trdFRnYlNmNEE0TGJtZ3FJU0JnVEVGeUZZdUx5a0FzVHVBYkpFaW9LT0E3RGtnZGpxRXZRSEVUb0t3ajREVmhBUTVBOWszZ0d5QjVJeEVvQm1NTDRCc25TUWs4WFFrTnRSZUVPQnhjZlh4VVFnMU1qYzBkeUhnWE5KQlNXcEZDWWgyemkrb0xNcE16eWhSY0FTR1VxcUNaMTZ5bm82Q2tZR1JBUU1ES013aHFqL2ZBSWNsb3hnSFFxeEFqSUhCRXVndzVzVUlzU1FwQm9idFFQZExjaUxFVkpZek1QQkhNREJzYXloSUxFcUVPNER4RzB0eG1yRVJoTTI5bllHQmRkci8vNS9ER1JqWU5Sa1kvbDcvLy8vMzl2Ly8veTREbW4rTGdlSEFOd0Rya2wxQXVPK3BtZ0FBQURobFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBcUFDQUFRQUFBQUJBQUFBd3FBREFBUUFBQUFCQUFBQXd3QUFBQUQ5Yi9IbkFBQUhsa2xFUVZSNEFlM2RQM1BUV0JTR2NiR3pNNkdDS3FsSUJSVjBkSFJKRmFyUTBlVVQ4TEg0Qm5SVTBOSFIwVUVGVmRJbEZSVjdUelJrc29tUFk4dXlrVGsvemV3UWZLdy85em52NHl2SnluTHY0dUxpVjJkQm9EaUJmNHFQMy9BUnVDUkFCRUZBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2cwQWo4aTBKTzRPenNyUHY2OVd2K2hpMnFQSHIwcU52ZjM5K2lJOTdzb1JJaDRmM3o1OC91N2R1M1NYWDdYdDdaMmVuZXZIbXpmUWUrb1NOMmFwU0FQajA5VFNyYitYS0kvZjM3OSswOCtBMGNOUkUyQU5rdXBrK0FDTlB2a1NQY0FBRWliQUN5WFV5ZkFCR20zeU5IdUFFQ1JOZ0FaTHVZUGdFaXJLbEh1N3U3WGR5eXRHd0hBZDhqak55bmc0T0Q3dm56NTFkYlBUOC83ejU4K05COSsvYnQ2alUvVEkrQUdXSEVucng0OGVKL0VzU21Ieng0MEwxOCtmTHl6eEYzWlZNakV5RENpRURqTVlaWlM1d2lQWG55WkZiSmF4TWhRSVFSR3pIdldSN1hDeU9DWHNPbWlEQWkxSG1QTU1RakRwYnBFaURDaUwzNThlTkh1clcvNVNuV2RJQmJYaURDaUEzOC9QbnpyY2UyWXlaNC8vNTlGM2VQTE5NbDRQYnBpTDJKMEw5NzkrN3lEdEhEaHc4dnR6enZkR25FWGR2VWlnU0lzQ0xBV2F2SHAvK3FNMEJjWE1kL3EyNW4xdkY1N1RZQnAwYTNtVXppbGVQajQrN2s1S1NMYjZndDZ5ZEFoUFV6WG5vUFIwZEhsNzlXR1ROQ2ZCbm4xdXZTQ0pkZWdRaExJMXZ2Q2srZlB1MmVQWHQydFpPWUVWNi9mbjMxZHorc2h3QVIxc1AxY3F2TG50YkVOOU14QTl4Y1lqc3hTMWpXUjRBSWEySWJ6eDB0YzQ0ZllYLzE2bFY2TkRGTFhIK1lMMzJqd2lBQ1JCaUViZjVLY1hvVElzUVNwelh4NE4yOEphNEJRb0s3cmdYaXlkYkhqeC9QMjVUYVFBSkVHQWd1V3kwKzJROFBENi9LaTRSOEVWbCtiekJPblpZOTVmcTlyajl6QWtUSTJTeGRpZEJIcUc5K3NrZHc0M2JvckNYTy9aY0pkcmFQV2R2MjJ1SUVpTEE0cTdudnZDdWc4V1RxelF2ZU9IMjZmb2RvN2c2dUZlL2ExN1czK25GQkFrUllFTlJkYjF2a2t6MUNIOWNQc1Z5L2pyaHIyN1BxTVl2RU5ZTmxIQUllc1JpQll3UnkwVis4aVhQOCsvZnZYMTFNcjdMN0VDdWViL3I0OGVNcW03RnVJMkJHV0RFRzhjbSs3RzNORU9mbWRjVFF3NGg5LzU1bGhtN0Rla1JZS1FQWkYyQXJiWFRBeXU0a0RZQjJZeFV6d2cwZ2kvNDF6dEhuZlFHMjZIYkdlbC9jclZybTd0TlkrLzFidGtPRUFaMk0wNXI0RkI3cjlHYkFJZHhhWllySGRPc2dKL3dDRVFZMEo3NFRtT0tuYnh4VDluM0ZnR0dXV3NWZG93SHRqdDlObnZmN3lRTTJhWlUvVElBSUF4cnc2ZE9uQVd0Wlpjb0VuQnBOdVR1T2JXTUVpTEF4MUhZMFpRSkVtSEozSE52R0NCQmhZNmp0YU1vRWlKQjBaMjl2TDZsczU4dnhQY084L3pmcmRvNXF2S08rZDNGeDhXdTh6ZjFkVzRwL2NQekxseS9kdHY5VHMvRWJjdkdBSGhIeWZCSWhaNk5TaUlCVG8wTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQy93R2dLS0M0WU1BNFRBQUFBQUJKUlU1RXJrSmdnZz09XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz7Cv0Rlc2VhIHZpc3VhbGl6YWNpw7NuIGVuIGVsIEhvbWU/PC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxpemFjaW9uSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5ncmVzZSB2aXN1YWxpemFjacOzbiBlbiBlbCBIb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlNcIj5TaTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiTlwiPk5vPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFyY2FyUHJpbmNpcGFsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7Cv0Rlc2VhIG1hcmNhciBjb21vIHByaW5jaXBhbD88L3N0cm9uZz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTaSBzZWxlY2Npb25hICdTaScgc2UgYWdyZWdhcsOhIGNvbW8gbm90aWNpYXMgcHJpbmNpcGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW4gZWwgaG9tZSAoZWwgY3VhZHJvIGdyYW5kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2VsZWNjaW9uZSBzaSBvIG5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJTXCI+U2k8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiTlwiPk5vPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uSXRlbSBuYW1lPVwibWFyY2FyUHJpbmNpcGFsXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250ZW5pZG86PC9zdHJvbmc+ICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVuaWRvVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e3sgc2V0Q29udGVuaWRvVXBkYXRlIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PlZvbHZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIHByZW1pbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBwcmVtaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ0bkFncmVnYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=