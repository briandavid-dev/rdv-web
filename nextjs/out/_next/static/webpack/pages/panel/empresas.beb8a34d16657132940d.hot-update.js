webpackHotUpdate_N_E("pages/panel/empresas",{

/***/ "./components/panel/Empresas/BtnPremios/BtnActualizar/index.js":
/*!*********************************************************************!*\
  !*** ./components/panel/Empresas/BtnPremios/BtnActualizar/index.js ***!
  \*********************************************************************/
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




var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\components\\panel\\Empresas\\BtnPremios\\BtnActualizar\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../Editor */ "./components/panel/Empresas/Editor.js"));
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

var BtnActualizar = function BtnActualizar(props) {
  _s();

  var empresaId = props.empresaId,
      empresaNombre = props.empresaNombre,
      empresaLenguaje = props.empresaLenguaje,
      dataProductos = props.dataProductos,
      setDataProductos = props.setDataProductos,
      idUpdate = props.idUpdate;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("ACTUALIZAR"),
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
    // form.resetFields();
    // setContenidoUpdate("");
    // setImageSrc("");
    // setIsModalVisible(true);
    var producto = dataProductos.find(function (producto) {
      return producto.id === idUpdate;
    });
    form.setFieldsValue({
      id: producto.id,
      language: producto.lenguaje,
      name: producto.titulo
    });
    setContenidoUpdate(producto.contenido);

    if (producto.imageBase64 !== "") {
      setImageSrc("data:image/".concat(producto.imageExtension, ";base64,").concat(producto.imageBase64));
    } else {
      setImageSrc("");
    }
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
      image_extension: fileCertificado[0] ? fileCertificado[0][0].extension : null,
      image_base64: fileCertificado[0] ? fileCertificado[0][0].base64 : null
    });

    var updateNoticias = dataProductos;

    if (procesoActual === "ACTUALIZAR") {
      setSpinModal(true);
      _services__WEBPACK_IMPORTED_MODULE_9__["default"].updateProducto(payload).then(function (response) {
        if (response.data.codigo === "1") {
          updateNoticias = dataProductos.map(function (noticia) {
            if (noticia.id === values.id) {
              var imagen_ = {};

              if (fileCertificado[0]) {
                imagen_.imageBase64 = fileCertificado[0][0].base64;
                imagen_.imageExtension = fileCertificado[0][0].extension;
              }

              return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, noticia), payload), imagen_), {}, {
                titulo: payload.name,
                lenguaje: payload.language
              });
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["EditTwoTone"], {
      onClick: function onClick() {
        setIsModalVisible(true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
      title: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Actualizar producto de ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Agregar nuevo producto para ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 246,
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
                lineNumber: 270,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
              name: "empresa_id",
              hidden: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
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
                    lineNumber: 278,
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
                      lineNumber: 283,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option, {
                      value: "en",
                      children: "Ingl\xE9s"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 284,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 276,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Nombre"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
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
                    lineNumber: 298,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Imagen"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 317,
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
                        lineNumber: 326,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 324,
                      columnNumber: 25
                    }, _this), " ", "(no superior a 500 KB)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
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
                        lineNumber: 355,
                        columnNumber: 37
                      }, _this),
                      children: "Click para adjuntar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 355,
                      columnNumber: 23
                    }, _this), showSizeMessageCertificado && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                      className: "afiliacion-datos-personales__size-message ",
                      style: {
                        color: "red"
                      },
                      children: "El archivo no debe pesar m\xE1s de 500 KB."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 360,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 344,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 316,
                  columnNumber: 19
                }, _this), imageSrc !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  style: {
                    boder: "1px solid #D9D9D9",
                    padding: "0.5rem"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Image"], {
                    width: 50,
                    height: false,
                    src: imageSrc,
                    fallback: "data:image/png;base64,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"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 376,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                  children: "Contenido:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 432,
                  columnNumber: 19
                }, _this), " \xA0\xA0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 431,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 435,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Editor, {
                  data: contenidoUpdate,
                  actions: {
                    setContenidoUpdate: setContenidoUpdate
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 436,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 434,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                style: {
                  textAlign: "center"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 442,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 443,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  onClick: handleCancel,
                  children: "Volver"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 444,
                  columnNumber: 19
                }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  type: "primary",
                  htmlType: "submit",
                  children: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Actualizar producto"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 448,
                    columnNumber: 23
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Agregar producto"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 450,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 446,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 441,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, _this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(BtnActualizar, "3JqNViMxvuL6mFR4Le+qCvb1BEs=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm];
});

_c3 = BtnActualizar;
/* harmony default export */ __webpack_exports__["default"] = (BtnActualizar);

var _c, _c2, _c3;

$RefreshReg$(_c, "Editor$dynamic");
$RefreshReg$(_c2, "Editor");
$RefreshReg$(_c3, "BtnActualizar");

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

/***/ }),

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
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../Editor */ "./components/panel/Empresas/Editor.js"));
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
        children: ["Actualizar producto de ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Agregar nuevo producto para ", empresaNombre]
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
                    children: "Imagen"
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
                    children: "Actualizar producto"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 429,
                    columnNumber: 23
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Agregar producto"
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

/***/ }),

/***/ "./components/panel/Empresas/BtnPremios/index.js":
/*!*******************************************************!*\
  !*** ./components/panel/Empresas/BtnPremios/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _BtnAgregar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BtnAgregar */ "./components/panel/Empresas/BtnPremios/BtnAgregar/index.js");
/* harmony import */ var _BtnActualizar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BtnActualizar */ "./components/panel/Empresas/BtnPremios/BtnActualizar/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./components/panel/Empresas/BtnPremios/services.js");
/* harmony import */ var _utils_notifica__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/notifica */ "./utils/notifica.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\components\\panel\\Empresas\\BtnPremios\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











var stylesCss = new String("h2,h3,h1,h4,h5{color:#3d2514 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXGNvbXBvbmVudHNcXHBhbmVsXFxFbXByZXNhc1xcQnRuUHJlbWlvc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUzRCLEFBTzhCLHlCQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXERhdmlkT2Nob2FCZXJtdWRlelxcRGVza3RvcFxccmR2LXdlYlxcbmV4dGpzXFxjb21wb25lbnRzXFxwYW5lbFxcRW1wcmVzYXNcXEJ0blByZW1pb3NcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgRGl2aWRlciwgVGFibGUsIFNwaW4sIFBvcGNvbmZpcm0sIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRGVsZXRlVHdvVG9uZSB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5pbXBvcnQgQnRuQWdyZWdhciBmcm9tIFwiLi9CdG5BZ3JlZ2FyXCI7XHJcbmltcG9ydCBCdG5BY3R1YWxpemFyIGZyb20gXCIuL0J0bkFjdHVhbGl6YXJcIjtcclxuaW1wb3J0IEFwaVByb2R1Y3RvcyBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgbm90aWZpY2EgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL25vdGlmaWNhXCI7XHJcblxyXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGgxLFxyXG4gIGg0LFxyXG4gIGg1IHtcclxuICAgIGNvbG9yOiAjM2QyNTE0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgeyBDb2x1bW4gfSA9IFRhYmxlO1xyXG5cclxuY29uc3QgUHJvZHVjdG9zID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBlbXByZXNhSWQsIGVtcHJlc2FOb21icmUsIGVtcHJlc2FMZW5ndWFqZSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFttb2RhbFByb2R1Y3Rvc1Zpc2libGUsIHNldE1vZGFsUHJvZHVjdG9zVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdUYWJsZSwgc2V0TG9hZGluZ1RhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YVByb2R1Y3Rvcywgc2V0RGF0YVByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbmZpcm1Mb2FkaW5nLCBzZXRDb25maXJtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaG93UG9wY29uZmlybSA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxQcm9kdWN0b3NWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUVkaXQgPSAoaWRVcGRhdGUpID0+IHtcclxuICAvLyAgIHNldFByb2Nlc29BY3R1YWwoXCJBQ1RVQUxJWkFSXCIpO1xyXG4gIC8vICAgY29uc3Qgbm90aWNpYVVwZGF0ZSA9IGRhdGFTb3VyY2UuZmluZCgobm90aWNpYSkgPT4gbm90aWNpYS5pZCA9PT0gaWRVcGRhdGUpO1xyXG5cclxuICAvLyAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuXHJcbiAgLy8gICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAvLyAgICAgaWQ6IG5vdGljaWFVcGRhdGUuaWQsXHJcbiAgLy8gICAgIGxlbmd1YWplOiBub3RpY2lhVXBkYXRlLmxlbmd1YWplLFxyXG4gIC8vICAgICB0aXR1bG86IG5vdGljaWFVcGRhdGUudGl0dWxvLFxyXG4gIC8vICAgICBtYXJjYXJQcmluY2lwYWw6IG5vdGljaWFVcGRhdGUubWFyY2FyUHJpbmNpcGFsLFxyXG4gIC8vICAgICB2aXN1YWxpemFjaW9uSG9tZTogbm90aWNpYVVwZGF0ZS52aXN1YWxpemFjaW9uSG9tZSxcclxuICAvLyAgICAgc3VtbWFyeTogbm90aWNpYVVwZGF0ZS5zdW1tYXJ5LFxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgc2V0Q29udGVuaWRvVXBkYXRlKG5vdGljaWFVcGRhdGUuY29udGVuaWRvKTtcclxuXHJcbiAgLy8gICBpZiAobm90aWNpYVVwZGF0ZS5pbWFnZUJhc2U2NCAhPT0gXCJcIikge1xyXG4gIC8vICAgICBzZXRJbWFnZVNyYyhcclxuICAvLyAgICAgICBgZGF0YTppbWFnZS8ke25vdGljaWFVcGRhdGUuaW1hZ2VFeHRlbnNpb259O2Jhc2U2NCwke25vdGljaWFVcGRhdGUuaW1hZ2VCYXNlNjR9YFxyXG4gIC8vICAgICApO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgc2V0SW1hZ2VTcmMoXCJcIik7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICBBcGlQcm9kdWN0b3MuZGV0ZXRlUHJvZHVjdG8oeyBpZCB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVQcm9kdWN0b3MgPSBkYXRhUHJvZHVjdG9zLmZpbHRlcihcclxuICAgICAgICAgICAgKHByb2R1Y3RvKSA9PiBwcm9kdWN0by5pZCAhPT0gaWRcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcyh1cGRhdGVQcm9kdWN0b3MpO1xyXG4gICAgICAgICAgLy8gc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgIC8vIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgc2V0Q29uZmlybUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgc2V0Q29uZmlybUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ1RhYmxlKHRydWUpO1xyXG4gICAgQXBpUHJvZHVjdG9zLmdldFByb2R1Y3RvcyhlbXByZXNhSWQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29kaWdvLCByZXN1bHRzIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhUHJvZHVjdG9zID0gcmVzdWx0cy5tYXAoKHByb2R1Y3RvKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAga2V5OiBwcm9kdWN0by5pZCxcclxuICAgICAgICAgICAgICBpZDogcHJvZHVjdG8uaWQsXHJcbiAgICAgICAgICAgICAgdGl0dWxvOiBwcm9kdWN0by5uYW1lLFxyXG4gICAgICAgICAgICAgIGZlY2hhQ3JlYWNpb246IHByb2R1Y3RvLmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHByb2R1Y3RvLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICBpbWFnZUV4dGVuc2lvbjogcHJvZHVjdG8uaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgIGxlbmd1YWplOiBwcm9kdWN0by5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICBjb250ZW5pZG86IHByb2R1Y3RvLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldERhdGFQcm9kdWN0b3MoZGF0YVByb2R1Y3Rvcyk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nVGFibGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcmAsIGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nVGFibGUoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7c3R5bGVzQ3NzfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlUHJvZHVjdG9zKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFByb2R1Y3Rvc1xyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHZpc2libGU9e21vZGFsUHJvZHVjdG9zVmlzaWJsZX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0TW9kYWxQcm9kdWN0b3NWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8aDM+UHJvZHVjdG9zIGRlIHtlbXByZXNhTm9tYnJlfTwvaDM+XHJcbiAgICAgICAgPERpdmlkZXI+PC9EaXZpZGVyPlxyXG4gICAgICAgIDxCdG5BZ3JlZ2FyXHJcbiAgICAgICAgICBlbXByZXNhSWQ9e2VtcHJlc2FJZH1cclxuICAgICAgICAgIGVtcHJlc2FOb21icmU9e2VtcHJlc2FOb21icmV9XHJcbiAgICAgICAgICBlbXByZXNhTGVuZ3VhamU9e2VtcHJlc2FMZW5ndWFqZX1cclxuICAgICAgICAgIGRhdGFQcm9kdWN0b3M9e2RhdGFQcm9kdWN0b3N9XHJcbiAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zPXtzZXREYXRhUHJvZHVjdG9zfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPFNwaW4gc3Bpbm5pbmc9e2xvYWRpbmdUYWJsZX0+XHJcbiAgICAgICAgICA8VGFibGUgZGF0YVNvdXJjZT17ZGF0YVByb2R1Y3Rvc30gcGFnaW5hdGlvbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICB7LyogPENvbHVtbiB0aXRsZT1cImlkXCIgZGF0YUluZGV4PVwiaWRcIiBrZXk9XCJpZFwiIC8+ICovfVxyXG4gICAgICAgICAgICA8Q29sdW1uIHRpdGxlPVwiUHJvZHVjdG9cIiBkYXRhSW5kZXg9XCJ0aXR1bG9cIiBrZXk9XCJ0aXR1bG9cIiAvPlxyXG4gICAgICAgICAgICB7LyogPENvbHVtbiB0aXRsZT1cIkxlbmd1YWplXCIgZGF0YUluZGV4PVwibGVuZ3VhamVcIiBrZXk9XCJsZW5ndWFqZVwiIC8+XHJcbiAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICB0aXRsZT1cIkZlY2hhIGRlIENyZWFjacOzblwiXHJcbiAgICAgICAgICAgICAgZGF0YUluZGV4PVwiZmVjaGFDcmVhY2lvblwiXHJcbiAgICAgICAgICAgICAga2V5PVwiZmVjaGFDcmVhY2lvblwiXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJPcGNpb25lc1wiXHJcbiAgICAgICAgICAgICAga2V5PVwib3BjaW9uZXNcIlxyXG4gICAgICAgICAgICAgIHJlbmRlcj17KHRleHQsIHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFNwYWNlIHNpemU9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ0bkFjdHVhbGl6YXJcclxuICAgICAgICAgICAgICAgICAgICBlbXByZXNhSWQ9e2VtcHJlc2FJZH1cclxuICAgICAgICAgICAgICAgICAgICBlbXByZXNhTm9tYnJlPXtlbXByZXNhTm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgIGVtcHJlc2FMZW5ndWFqZT17ZW1wcmVzYUxlbmd1YWplfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQcm9kdWN0b3M9e2RhdGFQcm9kdWN0b3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcz17c2V0RGF0YVByb2R1Y3Rvc31cclxuICAgICAgICAgICAgICAgICAgICBpZFVwZGF0ZT17cmVjb3JkLmlkfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIsK/U2VndXJvIGRlIGVsaW1pbmFyIGVzdGUgcHJvZHVjdG8/XCJcclxuICAgICAgICAgICAgICAgICAgICBva1RleHQ9XCJTaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZShyZWNvcmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25Qcm9wcz17eyBsb2FkaW5nOiBjb25maXJtTG9hZGluZyB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVR3b1RvbmUgb25DbGljaz17c2hvd1BvcGNvbmZpcm19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvcztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\components\\\\panel\\\\Empresas\\\\BtnPremios\\\\index.js */");
stylesCss.__hash = "3618806013";
var Column = antd__WEBPACK_IMPORTED_MODULE_2__["Table"].Column;

var Productos = function Productos(props) {
  _s();

  var empresaId = props.empresaId,
      empresaNombre = props.empresaNombre,
      empresaLenguaje = props.empresaLenguaje;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalProductosVisible = _useState[0],
      setModalProductosVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loadingTable = _useState2[0],
      setLoadingTable = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataProductos = _useState3[0],
      setDataProductos = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      confirmLoading = _useState4[0],
      setConfirmLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      visible = _useState5[0],
      setVisible = _useState5[1];

  var showPopconfirm = function showPopconfirm() {
    setVisible(true);
  };

  var handleProductos = function handleProductos() {
    setModalProductosVisible(true);
  }; // const handleEdit = (idUpdate) => {
  //   setProcesoActual("ACTUALIZAR");
  //   const noticiaUpdate = dataSource.find((noticia) => noticia.id === idUpdate);
  //   form.resetFields();
  //   form.setFieldsValue({
  //     id: noticiaUpdate.id,
  //     lenguaje: noticiaUpdate.lenguaje,
  //     titulo: noticiaUpdate.titulo,
  //     marcarPrincipal: noticiaUpdate.marcarPrincipal,
  //     visualizacionHome: noticiaUpdate.visualizacionHome,
  //     summary: noticiaUpdate.summary,
  //   });
  //   setContenidoUpdate(noticiaUpdate.contenido);
  //   if (noticiaUpdate.imageBase64 !== "") {
  //     setImageSrc(
  //       `data:image/${noticiaUpdate.imageExtension};base64,${noticiaUpdate.imageBase64}`
  //     );
  //   } else {
  //     setImageSrc("");
  //   }
  //   setIsModalVisible(true);
  // };


  var handleDelete = function handleDelete(id) {
    _services__WEBPACK_IMPORTED_MODULE_6__["default"].deteteProducto({
      id: id
    }).then(function (response) {
      if (response.data.codigo === "1") {
        var updateProductos = dataProductos.filter(function (producto) {
          return producto.id !== id;
        });
        setDataProductos(updateProductos); // setFileCertificado([]);
        // handleCancel();

        setConfirmLoading(false);
        Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_7__["default"])("success");
      } else {
        Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_7__["default"])("error");
      }
    })["catch"](function (error) {
      Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_7__["default"])("error");
      setConfirmLoading(false);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoadingTable(true);
    _services__WEBPACK_IMPORTED_MODULE_6__["default"].getProductos(empresaId).then(function (response) {
      var _response$data = response.data,
          codigo = _response$data.codigo,
          results = _response$data.results;

      if (codigo === "1") {
        var _dataProductos = results.map(function (producto) {
          return {
            key: producto.id,
            id: producto.id,
            titulo: producto.name,
            fechaCreacion: producto.created_at,
            imageBase64: producto.image_base64,
            imageExtension: producto.image_extension,
            lenguaje: producto.language,
            contenido: producto.content_html
          };
        });

        setDataProductos(_dataProductos);
        setLoadingTable(false);
      }
    })["catch"](function (error) {
      console.log("error", error);
      setLoadingTable(false);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: function onClick() {
        handleProductos();
      },
      children: "Productos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      visible: modalProductosVisible,
      onCancel: function onCancel() {
        setModalProductosVisible(false);
      },
      footer: false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h3", {
        children: ["Productos de ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_BtnAgregar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        empresaId: empresaId,
        empresaNombre: empresaNombre,
        empresaLenguaje: empresaLenguaje,
        dataProductos: dataProductos,
        setDataProductos: setDataProductos
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
        spinning: loadingTable,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
          dataSource: dataProductos,
          pagination: false,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Column, {
            title: "Producto",
            dataIndex: "titulo"
          }, "titulo", false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Column, {
            title: "Opciones",
            render: function render(text, record) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
                size: "middle",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_BtnActualizar__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  empresaId: empresaId,
                  empresaNombre: empresaNombre,
                  empresaLenguaje: empresaLenguaje,
                  dataProductos: dataProductos,
                  setDataProductos: setDataProductos,
                  idUpdate: record.id
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
                  title: "\xBFSeguro de eliminar este producto?",
                  okText: "Si",
                  cancelText: "No",
                  onConfirm: function onConfirm() {
                    handleDelete(record.id);
                  },
                  okButtonProps: {
                    loading: confirmLoading
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DeleteTwoTone"], {
                    onClick: showPopconfirm
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, _this);
            }
          }, "opciones", false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Productos, "fzbPFmXszyjwJIBFF6DWbQtZEdk=");

_c = Productos;
/* harmony default export */ __webpack_exports__["default"] = (Productos);

var _c;

$RefreshReg$(_c, "Productos");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/panel/Empresas/BtnPremios/services.js":
/*!**********************************************************!*\
  !*** ./components/panel/Empresas/BtnPremios/services.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/request */ "./config/request.js");

var api = {};

api.getProductos = function (empresaId) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "GET",
    url: "empresa/".concat(empresaId, "/productos/")
  });
};

api.getProducto = function (productoId) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "GET",
    url: "empresa/producto/".concat(productoId)
  });
};

api.deteteProducto = function (payload) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "DELETE",
    url: "empresa/producto/",
    data: payload
  });
};

api.insertProducto = function (payload) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "POST",
    url: "empresa/producto/",
    data: payload
  });
};

api.updateProducto = function (payload) {
  return Object(_config_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "PUT",
    url: "empresa/producto/",
    data: payload
  });
};

/* harmony default export */ __webpack_exports__["default"] = (api);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/panel/Empresas/index.js":
/*!********************************************!*\
  !*** ./components/panel/Empresas/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services */ "./components/panel/services.js");
/* harmony import */ var _Productos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Productos */ "./components/panel/Empresas/Productos/index.js");
/* harmony import */ var _BtnPremios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BtnPremios */ "./components/panel/Empresas/BtnPremios/index.js");
/* harmony import */ var _utils_notifica__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/notifica */ "./utils/notifica.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);




var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\components\\panel\\Empresas\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Column = antd__WEBPACK_IMPORTED_MODULE_7__["Table"].Column;







var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./Editor */ "./components/panel/Empresas/Editor.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Editor */ "./components/panel/Empresas/Editor.js")];
    },
    modules: ["./Editor"]
  }
});
_c2 = Editor;
var stylesCss = new String("body{font-family:var(--bs-font-sans-serif);color:#62452d !important;background-color:#f0f2f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXGNvbXBvbmVudHNcXHBhbmVsXFxFbXByZXNhc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUM0QixBQUcyQyxzQ0FDYix5QkFDQSx5QkFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYXZpZE9jaG9hQmVybXVkZXpcXERlc2t0b3BcXHJkdi13ZWJcXG5leHRqc1xcY29tcG9uZW50c1xccGFuZWxcXEVtcHJlc2FzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5pbXBvcnQge1xyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgSW5wdXQsXHJcbiAgVXBsb2FkLFxyXG4gIFNlbGVjdCxcclxuICBNb2RhbCxcclxuICBUYWJsZSxcclxuICBTcGFjZSxcclxuICAvLyBSYWRpbyxcclxuICBQb3Bjb25maXJtLFxyXG4gIEltYWdlLFxyXG4gIFNwaW4sXHJcbn0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgeyBDb2x1bW4gfSA9IFRhYmxlO1xyXG5pbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCwgRGVsZXRlVHdvVG9uZSwgRWRpdFR3b1RvbmUgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgQXBpTm90aWNpYXMgZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCBQcm9kdWN0b3MgZnJvbSBcIi4vUHJvZHVjdG9zXCI7XHJcbmltcG9ydCBCdG5QcmVtaW9zIGZyb20gXCIuL0J0blByZW1pb3NcIjtcclxuaW1wb3J0IG5vdGlmaWNhIGZyb20gXCIuLi8uLi8uLi91dGlscy9ub3RpZmljYVwiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAoKSA9PiB7XHJcbiAgICByZXR1cm4gaW1wb3J0KFwiLi9FZGl0b3JcIik7XHJcbiAgfSxcclxuICB7IHNzcjogZmFsc2UgfVxyXG4pO1xyXG5cclxuY29uc3Qgc3R5bGVzQ3NzID0gY3NzLmdsb2JhbGBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1icy1mb250LXNhbnMtc2VyaWYpO1xyXG4gICAgY29sb3I6ICM2MjQ1MmQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTm90aWNpYXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlLCBzZXRJc01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbnRlbmlkb1VwZGF0ZSwgc2V0Q29udGVuaWRvVXBkYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb25maXJtTG9hZGluZywgc2V0Q29uZmlybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpbWFnZVNyYywgc2V0SW1hZ2VTcmNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2Nlc29BY3R1YWwsIHNldFByb2Nlc29BY3R1YWxdID0gdXNlU3RhdGUoXCJBR1JFR0FSXCIpO1xyXG4gIGNvbnN0IFtzcGluTW9kYWwsIHNldFNwaW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NwaW5MaXN0YWRvLCBzZXRTcGluTGlzdGFkb10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTcGluTGlzdGFkbyh0cnVlKTtcclxuICAgIEFwaU5vdGljaWFzLmdldE5vdGljaWFzKFwiZW1wcmVzYXNcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2RpZ28sIHJlc3VsdHMgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld0RhdGFTb3VyY2UgPSByZXN1bHRzLm1hcCgobm90aWNpYSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGtleTogbm90aWNpYS5pZCxcclxuICAgICAgICAgICAgICBpZDogbm90aWNpYS5pZCxcclxuICAgICAgICAgICAgICB0aXR1bG86IG5vdGljaWEudGl0bGUsXHJcbiAgICAgICAgICAgICAgZmVjaGFDcmVhY2lvbjogbm90aWNpYS5jcmVhdGVkX2F0LFxyXG4gICAgICAgICAgICAgIC8vIGltYWdlbjogbm90aWNpYS5jb250ZW50X2ltYWdlLFxyXG4gICAgICAgICAgICAgIGltYWdlQmFzZTY0OiBub3RpY2lhLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICBpbWFnZUV4dGVuc2lvbjogbm90aWNpYS5pbWFnZV9leHRlbnNpb24sXHJcbiAgICAgICAgICAgICAgbGVuZ3VhamU6IG5vdGljaWEubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgdmlzdWFsaXphY2lvbkhvbWU6IG5vdGljaWEubmFtZV9zZWN0aW9uLFxyXG4gICAgICAgICAgICAgIG1hcmNhclByaW5jaXBhbDogbm90aWNpYS5tYXJrTWFpbixcclxuICAgICAgICAgICAgICBjb250ZW5pZG86IG5vdGljaWEuY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICAgIHN1bW1hcnk6IG5vdGljaWEuc3VtbWFyeSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldERhdGFTb3VyY2UobmV3RGF0YVNvdXJjZSk7XHJcbiAgICAgICAgICBzZXRTcGluTGlzdGFkbyhmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICBzZXRTcGluTGlzdGFkbyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2ZpbGVDZXJ0aWZpY2Fkbywgc2V0RmlsZUNlcnRpZmljYWRvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8sIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvXSA9XHJcbiAgICB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvID0gKGZpbGUpID0+IHtcclxuICAgIC8vIDUgTUIgPSAxMDI0ICogNSA9IDUxMjBcclxuICAgIGlmIChmaWxlLnNpemUgLyAxMDAwID4gNTEyKSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKHRydWUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyhmYWxzZSk7XHJcblxyXG4gICAgaWYgKGZpbGVDZXJ0aWZpY2Fkby5maW5kSW5kZXgoKGUpID0+IGUubmFtZSA9PT0gZmlsZS5uYW1lKSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCByZ3hCYXNlNjQgPSBSZWdFeHAoXHJcbiAgICAgICAgL2RhdGE6KGFwcGxpY2F0aW9ufGltYWdlKVxcLyhqcGVnfGpwZ3xwbmcqKTtiYXNlNjQsKFteXCJdKikvZ2ltXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJneCA9IHJneEJhc2U2NC5leGVjKHJlYWRlci5yZXN1bHQpO1xyXG5cclxuICAgICAgaWYgKHJneCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICBub21icmVBcmNoaXZvOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgZXh0ZW5zaW9uOiByZ3hbMl0sXHJcbiAgICAgICAgICAgICAgYmFzZTY0OiByZ3hbM10sXHJcbiAgICAgICAgICAgICAgYnl0ZXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG8gPSAoKSA9PiB7XHJcbiAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxheW91dCA9IHtcclxuICAgIGxhYmVsQ29sOiB7IHNwYW46IDI0IH0sXHJcbiAgICB3cmFwcGVyQ29sOiB7IHNwYW46IDI0IH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAuLi52YWx1ZXMsXHJcbiAgICAgIGNvbnRlbmlkbzogY29udGVuaWRvVXBkYXRlLFxyXG4gICAgICBpbWFnZW46IGZpbGVDZXJ0aWZpY2FkbyxcclxuICAgICAgdHlwZTogXCJlbXByZXNhc1wiLFxyXG4gICAgICBwcm9jZXNvOiBwcm9jZXNvQWN0dWFsID09PSBcIkFDVFVBTElaQVJcIiA/IFwiQUNUVUFMSVpBUlwiIDogXCJBR1JFR0FSXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB1cGRhdGVOb3RpY2lhcyA9IGRhdGFTb3VyY2U7XHJcblxyXG4gICAgaWYgKHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiKSB7XHJcbiAgICAgIHNldFNwaW5Nb2RhbCh0cnVlKTtcclxuICAgICAgQXBpTm90aWNpYXMudXBkYXRlTm90aWNpYXMocGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgdXBkYXRlTm90aWNpYXMgPSBkYXRhU291cmNlLm1hcCgobm90aWNpYSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChub3RpY2lhLmlkID09PSB2YWx1ZXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlbl8gPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmltYWdlblswXSkge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZW5fLmltYWdlQmFzZTY0ID0gcGF5bG9hZC5pbWFnZW5bMF1bMF0uYmFzZTY0O1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZW5fLmltYWdlRXh0ZW5zaW9uID0gcGF5bG9hZC5pbWFnZW5bMF1bMF0uZXh0ZW5zaW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm5vdGljaWEsXHJcbiAgICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICAgIC4uLmltYWdlbl8sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbm90aWNpYTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhU291cmNlKHVwZGF0ZU5vdGljaWFzKTtcclxuICAgICAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvY2Vzb0FjdHVhbCA9PT0gXCJBR1JFR0FSXCIpIHtcclxuICAgICAgc2V0U3Bpbk1vZGFsKHRydWUpO1xyXG4gICAgICBBcGlOb3RpY2lhcy5pbnNlcnROb3RpY2lhcyhwYXlsb2FkKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZU5vdGljaWFzID0gW1xyXG4gICAgICAgICAgICAgIC4uLmRhdGFTb3VyY2UsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXlsb2FkLmltYWdlblswXVswXS5iYXNlNjQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUV4dGVuc2lvbjogcGF5bG9hZC5pbWFnZW5bMF1bMF0uZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAga2V5OiB1dWlkLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHJlc3BvbnNlLmRhdGEucmVzdWx0cy5pbnNlcnRJZCxcclxuICAgICAgICAgICAgICAgIGZlY2hhQ3JlYWNpb246IG1vbWVudCgpLmZvcm1hdChcIkRELU1NLVlZWVlcIiksXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgc2V0RGF0YVNvdXJjZSh1cGRhdGVOb3RpY2lhcyk7XHJcbiAgICAgICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICBub3RpZmljYShcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9ybUZpbGUgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHN1cGVyYUxpbWl0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKGUuZmlsZS5zaXplIC8gMTAwMCA+IDUxMikge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbyh0cnVlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKGZhbHNlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5maWxlTGlzdC5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGUuZmlsZUxpc3Quc2hpZnQoKTtcclxuICAgIH1cclxuICAgIGlmIChzdXBlcmFMaW1pdGUpIHtcclxuICAgICAgZS5maWxlTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlICYmIGUuZmlsZUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWdyZWdhciA9ICgpID0+IHtcclxuICAgIHNldFByb2Nlc29BY3R1YWwoXCJBR1JFR0FSXCIpO1xyXG5cclxuICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgIHNldENvbnRlbmlkb1VwZGF0ZShcIlwiKTtcclxuICAgIHNldEltYWdlU3JjKFwiXCIpO1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoaWRVcGRhdGUpID0+IHtcclxuICAgIHNldFByb2Nlc29BY3R1YWwoXCJBQ1RVQUxJWkFSXCIpO1xyXG4gICAgY29uc3Qgbm90aWNpYVVwZGF0ZSA9IGRhdGFTb3VyY2UuZmluZCgobm90aWNpYSkgPT4gbm90aWNpYS5pZCA9PT0gaWRVcGRhdGUpO1xyXG5cclxuICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuXHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgaWQ6IG5vdGljaWFVcGRhdGUuaWQsXHJcbiAgICAgIGxlbmd1YWplOiBub3RpY2lhVXBkYXRlLmxlbmd1YWplLFxyXG4gICAgICB0aXR1bG86IG5vdGljaWFVcGRhdGUudGl0dWxvLFxyXG4gICAgICBtYXJjYXJQcmluY2lwYWw6IG5vdGljaWFVcGRhdGUubWFyY2FyUHJpbmNpcGFsLFxyXG4gICAgICB2aXN1YWxpemFjaW9uSG9tZTogbm90aWNpYVVwZGF0ZS52aXN1YWxpemFjaW9uSG9tZSxcclxuICAgICAgc3VtbWFyeTogbm90aWNpYVVwZGF0ZS5zdW1tYXJ5LFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0Q29udGVuaWRvVXBkYXRlKG5vdGljaWFVcGRhdGUuY29udGVuaWRvKTtcclxuXHJcbiAgICBpZiAobm90aWNpYVVwZGF0ZS5pbWFnZUJhc2U2NCAhPT0gXCJcIikge1xyXG4gICAgICBzZXRJbWFnZVNyYyhcclxuICAgICAgICBgZGF0YTppbWFnZS8ke25vdGljaWFVcGRhdGUuaW1hZ2VFeHRlbnNpb259O2Jhc2U2NCwke25vdGljaWFVcGRhdGUuaW1hZ2VCYXNlNjR9YFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SW1hZ2VTcmMoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRTcGluTGlzdGFkbyh0cnVlKTtcclxuICAgIEFwaU5vdGljaWFzLmRldGV0ZU5vdGljaWFzKHsgaWQgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgc2V0RGF0YVNvdXJjZShkYXRhU291cmNlLmZpbHRlcigobm90aWNpYSkgPT4gbm90aWNpYS5pZCAhPT0gaWQpKTtcclxuICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U3Bpbkxpc3RhZG8oZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICBzZXRTcGluTGlzdGFkbyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dQb3Bjb25maXJtID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge3N0eWxlc0Nzc31cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUFncmVnYXJ9PlxyXG4gICAgICAgIEFncmVnYXJcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPFNwaW4gc3Bpbm5pbmc9e3NwaW5MaXN0YWRvfT5cclxuICAgICAgICA8VGFibGUgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX0gcGFnaW5hdGlvbj17ZmFsc2V9PlxyXG4gICAgICAgICAgey8qIDxDb2x1bW4gdGl0bGU9XCJpZFwiIGRhdGFJbmRleD1cImlkXCIga2V5PVwiaWRcIiAvPiAqL31cclxuICAgICAgICAgIDxDb2x1bW4gdGl0bGU9XCJOb21icmVcIiBkYXRhSW5kZXg9XCJ0aXR1bG9cIiBrZXk9XCJ0aXR1bG9cIiAvPlxyXG4gICAgICAgICAgPENvbHVtbiB0aXRsZT1cIkxlbmd1YWplXCIgZGF0YUluZGV4PVwibGVuZ3VhamVcIiBrZXk9XCJsZW5ndWFqZVwiIC8+XHJcbiAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiRmVjaGEgZGUgQ3JlYWNpw7NuXCJcclxuICAgICAgICAgICAgZGF0YUluZGV4PVwiZmVjaGFDcmVhY2lvblwiXHJcbiAgICAgICAgICAgIGtleT1cImZlY2hhQ3JlYWNpb25cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgdGl0bGU9XCJPcGNpb25lc1wiXHJcbiAgICAgICAgICAgIGtleT1cIm9wY2lvbmVzXCJcclxuICAgICAgICAgICAgcmVuZGVyPXsodGV4dCwgcmVjb3JkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFNwYWNlIHNpemU9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgICAgIDxFZGl0VHdvVG9uZVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRWRpdChyZWNvcmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiwr9TZWd1cm8gZGUgZWxpbWluYXIgZXN0ZSBjb250ZW5pZG/vvJ9cIlxyXG4gICAgICAgICAgICAgICAgICBva1RleHQ9XCJTaVwiXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZShyZWNvcmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBva0J1dHRvblByb3BzPXt7IGxvYWRpbmc6IGNvbmZpcm1Mb2FkaW5nIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxEZWxldGVUd29Ub25lIG9uQ2xpY2s9e3Nob3dQb3Bjb25maXJtfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0b3NcclxuICAgICAgICAgICAgICAgICAgZW1wcmVzYUlkPXtyZWNvcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGVtcHJlc2FOb21icmU9e3JlY29yZC50aXR1bG99XHJcbiAgICAgICAgICAgICAgICAgIGVtcHJlc2FMZW5ndWFqZT17cmVjb3JkLmxlbmd1YWplfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnRuUHJlbWlvc1xyXG4gICAgICAgICAgICAgICAgICBlbXByZXNhSWQ9e3JlY29yZC5pZH1cclxuICAgICAgICAgICAgICAgICAgZW1wcmVzYU5vbWJyZT17cmVjb3JkLnRpdHVsb31cclxuICAgICAgICAgICAgICAgICAgZW1wcmVzYUxlbmd1YWplPXtyZWNvcmQubGVuZ3VhamV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvU3Bpbj5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiID8gKFxyXG4gICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIEVtcHJlc2E8L3NwYW4+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3Bhbj5BZ3JlZ2FyIE51ZXZhIEVtcHJlc2E8L3NwYW4+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgZm9vdGVyPXtmYWxzZX1cclxuICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICBjZW50ZXJlZFxyXG4gICAgICA+XHJcbiAgICAgICAgPFNwaW4gc3Bpbm5pbmc9e3NwaW5Nb2RhbH0gZGVsYXk9ezUwMH0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybSB7Li4ubGF5b3V0fSBvbkZpbmlzaD17b25GaW5pc2h9IGZvcm09e2Zvcm19PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImlkXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9eyg0MCwgNDApfT5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPkxlbmd1YWplPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsZW5ndWFqZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgbGVuZ3VhamVcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCIgYWxsb3dDbGVhcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZXNcIj5Fc3Bhw7FvbDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZW5cIj5Jbmdsw6lzPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPk5vbWJyZTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0dWxvXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIHRpdHVsb1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMTAsIG1lc3NhZ2U6IFwiTcOtbmltbyAxMCBjYXJhY3RlcmVzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG1heExlbmd0aD17MTAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPlJlc3VtZW48L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgcmVzdW1lblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMTAwLCBtZXNzYWdlOiBcIk3DrW5pbW8gMTAwIGNhcmFjdGVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXs1MDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+SW1hZ2VuPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJmaWxlTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tRXZlbnQ9e25vcm1GaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbcOhZ2VuZXMganBnIG8gcG5nIGRlIDxzdHJvbmc+NDAwcHggeCA0MDBweDwvc3Ryb25nPiAobm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXJpb3IgYSA1MDAgS0IpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBpbWFnZVNyYyAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBZGp1bnRlIHVuIGltYWdlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxVcGxvYWQgbmFtZT1cImxvZ29cIiBhY3Rpb249XCIvdXBsb2FkLmRvXCIgbGlzdFR5cGU9XCJwaWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1VwbG9hZD4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlQ2VydGlmaWNhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dVcGxvYWRMaXN0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17KGZpbGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvKGZpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17aGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTGlzdD17ZmlsZUNlcnRpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3Nob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFmaWxpYWNpb24tZGF0b3MtcGVyc29uYWxlc19fc2l6ZS1tZXNzYWdlIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVsIGFyY2hpdm8gbm8gZGViZSBwZXNhciBtw6FzIGRlIDUwMCBLQi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlU3JjICE9PSBcIlwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2RlcjogXCIxcHggc29saWQgI0Q5RDlEOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNSUFBQUREQ0FZQUFBRFF2YzZVQUFBQlJXbERRMUJKUTBNZ1VISnZabWxzWlFBQUtKRmpZR0FTU1N3b3lHRmhZR0RJelNzcENuSjNVb2lJakZKZ2Y4TEF3U0RDSU1vZ3dNQ2NtRnhjNEJnUTRBTlV3Z0NqVWNHM2F3eU1JUHF5THNpczdQUE9xM1FkREZjdmpWM2pPRDFib1FWVFBRcmdTa2t0VGdiU2Y0QTRMYm1ncUlTQmdURUZ5Rll1THlrQXNUdUFiSkVpb0tPQTdEa2dkanFFdlFIRVRvS3dqNERWaEFRNUE5azNnR3lCNUl4RW9CbU1MNEJzblNRazhYUWtOdFJlRU9CeGNmWHhVUWcxTWpjMGR5SGdYTkpCU1dwRkNZaDJ6aStvTE1wTXp5aFJjQVNHVXFxQ1oxNnlubzZDa1lHUkFRTURLTXdocWovZkFJY2xveGdIUXF4QWpJSEJFdWd3NXNVSXNTUXBCb2J0UVBkTGNpTEVWSll6TVBCSE1EQnNheWhJTEVxRU80RHhHMHR4bXJFUmhNMjluWUdCZGRyLy81L0RHUmpZTlJrWS9sNy8vLy8zOXYvLy95NERtbitMZ2VIQU53RHJrbDFBdU8rcG1nQUFBRGhsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUFxQUNBQVFBQUFBQkFBQUF3cUFEQUFRQUFBQUJBQUFBd3dBQUFBRDliL0huQUFBSGxrbEVRVlI0QWUzZFAzUFRXQlNHY2JHek02R0NLcWxJQlJWMGRIUkpGYXJRMGVVVDhMSDRCblJVME5IUjBVRUZWZElsRlJWN1R6Umtzb21QWTh1eWtUay96ZXdRZkt3Lzl6bnY0eXZKeW5MdjR1TGlWMmRCb0RpQmY0cVAzL0FSdUNSQUJFRkFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZzBBajhpMEpPNE96c3JQdjY5V3YraGkycVBIcjBxTnZmMzkraUk5N3NvUkloNGYzejU4L3U3ZHUzU1hYN1h0N1oyZW5ldkhtemZRZStvU04yYXBTQVBqMDlUU3JiK1hLSS9mMzc5KzA4K0EwY05SRTJBTmt1cGsrQUNOUHZrU1BjQUFFaWJBQ3lYVXlmQUJHbTN5Tkh1QUVDUk5nQVpMdVlQZ0VpcktsSHU3dTdYZHl5dEd3SEFkOGpqTnluZzRPRDd2bno1MWRiUFQ4Lzd6NTgrTkI5Ky9idDZqVS9USStBR1dIRW5yeDQ4ZUovRXNTbUh6eDQwTDE4K2ZMeXp4RjNaVk1qRXlEQ2lFRGpNWVpaUzV3aVBYbnlaRmJKYXhNaFFJUVJHekh2V1I3WEN5T0NYc09taURBaTFIbVBNTVFqRHBicEVpRENpTDM1OGVOSHVyVy81U25XZElCYlhpRENpQTM4L1BuenJjZTJZeVo0Ly81OUYzZVBMTk1sNFBicGlMMkowTDk3OSs3eUR0SERodzh2dHp6dmRHbkVYZHZVaWdTSXNDTEFXYXZIcC8rcU0wQmNYTWQvcTI1bjF2RjU3VFlCcDBhM21VemlsZVBqNCs3azVLU0xiNmd0NnlkQWhQVXpYbm9QUjBkSGw3OVdHVE5DZkJubjF1dlNDSmRlZ1FoTEkxdnZDaytmUHUyZVBYdDJ0Wk9ZRVY2L2ZuMzFkeitzaHdBUjFzUDFjcXZMbnRiRU45TXhBOXhjWWpzeFMxaldSNEFJYTJJYnp4MHRjNDRmWVgvMTZsVjZOREZMWEgrWUwzMmp3aUFDUkJpRWJmNUtjWG9USXNRU3B6WHg0TjI4SmE0QlFvSzdyZ1hpeWRiSGp4L1AyNVRhUUFKRUdBZ3VXeTArMlE4UEQ2L0tpNFI4RVZsK2J6Qk9uWlk5NWZxOXJqOXpBa1RJMlN4ZGlkQkhxRzkrc2tkdzQzYm9yQ1hPL1pjSmRyYVBXZHYyMnVJRWlMQTRxN252dkN1ZzhXVHF6UXZlT0gyNmZvZG83ZzZ1RmUvYTE3VzMrbkZCQWtSWUVOUmRiMXZra3oxQ0g5Y1BzVnkvanJocjI3UHFNWXZFTllObEhBSWVzUmlCWXdSeTBWKzhpWFA4Ky9mdlgxMU1yN0w3RUN1ZWIvcjQ4ZU1xbTdGdUkyQkdXREVHOGNtKzdHM05FT2ZtZGNUUXc0aDkvNTVsaG03RGVrUllLUVBaRjJBcmJYVEF5dTRrRFlCMll4VXp3ZzBnaS80MXp0SG5mUUcyNkhiR2VsL2NyVnJtN3ROWSsvMWJ0a09FQVoyTTA1cjRGQjdyOUdiQUlkeGFaWXJIZE9zZ0ovd0NFUVkwSjc0VG1PS25ieHhUOW4zRmdHR1dXc1Zkb3dIdGp0OU5udmY3eVFNMmFaVS9USUFJQXhydzZkT25BV3RaWmNvRW5CcE51VHVPYldNRWlMQXgxSFkwWlFKRW1ISjNITnZHQ0JCaFk2anRhTW9FaUpCMFoyOXZMNmxzNTh2eFBjTzgvemZyZG81cXZLTytkM0Z4OFd1OHpmMWRXNHAvY1B6TGx5L2R0djlUcy9FYmN2R0FIaEh5ZkJJaFo2TlNpSUJUbzBMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDL3dHZ0tLQzRZTUE0VEFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgey8qIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPsK/RGVzZWEgdmlzdWFsaXphY2nDs24gZW4gZWwgSG9tZT88L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbGl6YWNpb25Ib21lXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbmdyZXNlIHZpc3VhbGl6YWNpw7NuIGVuIGVsIEhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCIgYWxsb3dDbGVhcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiU1wiPlNpPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJOXCI+Tm88L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYXJjYXJQcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsK/RGVzZWEgbWFyY2FyIGNvbW8gcHJpbmNpcGFsPzwvc3Ryb25nPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNpIHNlbGVjY2lvbmEgJ1NpJyBzZSBhZ3JlZ2Fyw6EgY29tbyBub3RpY2lhcyBwcmluY2lwYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbiBlbCBob21lIChlbCBjdWFkcm8gZ3JhbmRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTZWxlY2Npb25lIHNpIG8gbm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIlNcIj5TaTwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJOXCI+Tm88L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm1hcmNhclByaW5jaXBhbFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250ZW5pZG86PC9zdHJvbmc+ICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVuaWRvVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e3sgc2V0Q29udGVuaWRvVXBkYXRlIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PlZvbHZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BZ3JlZ2FyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3Bpbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpY2lhcztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\components\\\\panel\\\\Empresas\\\\index.js */");
stylesCss.__hash = "2058802286";

var Noticias = function Noticias() {
  _s();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_7__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isModalVisible = _useState[0],
      setIsModalVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      contenidoUpdate = _useState2[0],
      setContenidoUpdate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      confirmLoading = _useState3[0],
      setConfirmLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      dataSource = _useState5[0],
      setDataSource = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      imageSrc = _useState6[0],
      setImageSrc = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("AGREGAR"),
      procesoActual = _useState7[0],
      setProcesoActual = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      spinModal = _useState8[0],
      setSpinModal = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      spinListado = _useState9[0],
      setSpinListado = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setSpinListado(true);
    _services__WEBPACK_IMPORTED_MODULE_10__["default"].getNoticias("empresas").then(function (response) {
      var _response$data = response.data,
          codigo = _response$data.codigo,
          results = _response$data.results;

      if (codigo === "1") {
        var newDataSource = results.map(function (noticia) {
          return {
            key: noticia.id,
            id: noticia.id,
            titulo: noticia.title,
            fechaCreacion: noticia.created_at,
            // imagen: noticia.content_image,
            imageBase64: noticia.image_base64,
            imageExtension: noticia.image_extension,
            lenguaje: noticia.language,
            visualizacionHome: noticia.name_section,
            marcarPrincipal: noticia.markMain,
            contenido: noticia.content_html,
            summary: noticia.summary
          };
        });
        setDataSource(newDataSource);
        setSpinListado(false);
      } else {
        Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_13__["default"])("error");
      }
    })["catch"](function (error) {
      Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_13__["default"])("error");
      setSpinListado(false);
    });
  }, []);

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      fileCertificado = _useState10[0],
      setFileCertificado = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showSizeMessageCertificado = _useState11[0],
      setShowSizeMessageCertificado = _useState11[1];

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
      contenido: contenidoUpdate,
      imagen: fileCertificado,
      type: "empresas",
      proceso: procesoActual === "ACTUALIZAR" ? "ACTUALIZAR" : "AGREGAR"
    });

    var updateNoticias = dataSource;

    if (procesoActual === "ACTUALIZAR") {
      setSpinModal(true);
      _services__WEBPACK_IMPORTED_MODULE_10__["default"].updateNoticias(payload).then(function (response) {
        if (response.data.codigo === "1") {
          updateNoticias = dataSource.map(function (noticia) {
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
          setDataSource(updateNoticias);
          setFileCertificado([]);
          handleCancel();
          setSpinModal(false);
          Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_13__["default"])("success");
        } else {
          Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_13__["default"])("error");
        }
      })["catch"](function (error) {
        Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_13__["default"])("error");
        setSpinModal(false);
      });
    }

    if (procesoActual === "AGREGAR") {
      setSpinModal(true);
      _services__WEBPACK_IMPORTED_MODULE_10__["default"].insertNoticias(payload).then(function (response) {
        if (response.data.codigo === "1") {
          var uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
          updateNoticias = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dataSource), [_objectSpread(_objectSpread({}, payload), {}, {
            imageBase64: payload.imagen[0][0].base64,
            imageExtension: payload.imagen[0][0].extension,
            key: uuid,
            id: response.data.results.insertId,
            fechaCreacion: moment__WEBPACK_IMPORTED_MODULE_6___default()().format("DD-MM-YYYY")
          })]);
          setDataSource(updateNoticias);
          setFileCertificado([]);
          handleCancel();
          setSpinModal(false);
          Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_13__["default"])("success");
        } else {
          Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_13__["default"])("error");
        }
      })["catch"](function (error) {
        Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_13__["default"])("error");
        setSpinModal(false);
      });
    }
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

  var handleAgregar = function handleAgregar() {
    setProcesoActual("AGREGAR");
    form.resetFields();
    setContenidoUpdate("");
    setImageSrc("");
    setIsModalVisible(true);
  };

  var handleOk = function handleOk() {
    setIsModalVisible(false);
  };

  var handleCancel = function handleCancel() {
    setIsModalVisible(false);
  };

  var handleEdit = function handleEdit(idUpdate) {
    setProcesoActual("ACTUALIZAR");
    var noticiaUpdate = dataSource.find(function (noticia) {
      return noticia.id === idUpdate;
    });
    form.resetFields();
    form.setFieldsValue({
      id: noticiaUpdate.id,
      lenguaje: noticiaUpdate.lenguaje,
      titulo: noticiaUpdate.titulo,
      marcarPrincipal: noticiaUpdate.marcarPrincipal,
      visualizacionHome: noticiaUpdate.visualizacionHome,
      summary: noticiaUpdate.summary
    });
    setContenidoUpdate(noticiaUpdate.contenido);

    if (noticiaUpdate.imageBase64 !== "") {
      setImageSrc("data:image/".concat(noticiaUpdate.imageExtension, ";base64,").concat(noticiaUpdate.imageBase64));
    } else {
      setImageSrc("");
    }

    setIsModalVisible(true);
  };

  var handleDelete = function handleDelete(id) {
    setSpinListado(true);
    _services__WEBPACK_IMPORTED_MODULE_10__["default"].deteteNoticias({
      id: id
    }).then(function (response) {
      if (response.data.codigo === "1") {
        setDataSource(dataSource.filter(function (noticia) {
          return noticia.id !== id;
        }));
        Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_13__["default"])("success");
      } else {
        Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_13__["default"])("error");
      }

      setSpinListado(false);
    })["catch"](function (error) {
      Object(_utils_notifica__WEBPACK_IMPORTED_MODULE_13__["default"])("error");
      setSpinListado(false);
    });
  };

  var showPopconfirm = function showPopconfirm() {
    setVisible(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      type: "primary",
      onClick: handleAgregar,
      children: "Agregar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Spin"], {
      spinning: spinListado,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Table"], {
        dataSource: dataSource,
        pagination: false,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(Column, {
          title: "Nombre",
          dataIndex: "titulo"
        }, "titulo", false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(Column, {
          title: "Lenguaje",
          dataIndex: "lenguaje"
        }, "lenguaje", false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(Column, {
          title: "Fecha de Creaci\xF3n",
          dataIndex: "fechaCreacion"
        }, "fechaCreacion", false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(Column, {
          title: "Opciones",
          render: function render(text, record) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Space"], {
              size: "middle",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["EditTwoTone"], {
                onClick: function onClick() {
                  handleEdit(record.id);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Popconfirm"], {
                title: "\xBFSeguro de eliminar este contenido\uFF1F",
                okText: "Si",
                cancelText: "No",
                onConfirm: function onConfirm() {
                  handleDelete(record.id);
                },
                okButtonProps: {
                  loading: confirmLoading
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["DeleteTwoTone"], {
                  onClick: showPopconfirm
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 351,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Productos__WEBPACK_IMPORTED_MODULE_11__["default"], {
                empresaId: record.id,
                empresaNombre: record.titulo,
                empresaLenguaje: record.lenguaje
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_BtnPremios__WEBPACK_IMPORTED_MODULE_12__["default"], {
                empresaId: record.id,
                empresaNombre: record.titulo,
                empresaLenguaje: record.lenguaje
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 15
            }, _this);
          }
        }, "opciones", false, {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
      title: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
        children: "Actualizar Empresa"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
        children: "Agregar Nueva Empresa"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 13
      }, _this),
      visible: isModalVisible,
      onOk: handleOk,
      onCancel: handleCancel,
      footer: false,
      width: 1000,
      centered: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Spin"], {
        spinning: spinModal,
        delay: 500,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Form"], _objectSpread(_objectSpread({}, layout), {}, {
            onFinish: onFinish,
            form: form,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Form"].Item, {
              name: "id",
              hidden: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
              gutter: (40, 40),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("strong", {
                    children: "Lenguaje"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 395,
                    columnNumber: 28
                  }, _this),
                  name: "lenguaje",
                  rules: [{
                    required: true,
                    message: "Ingrese el lenguaje"
                  }],
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Select"], {
                    placeholder: "Seleccione",
                    allowClear: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Select"].Option, {
                      value: "es",
                      children: "Espa\xF1ol"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 400,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Select"].Option, {
                      value: "en",
                      children: "Ingl\xE9s"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 401,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 399,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 394,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("strong", {
                    children: "Nombre"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 408,
                    columnNumber: 28
                  }, _this),
                  name: "titulo",
                  rules: [{
                    required: true,
                    message: "Ingrese el titulo"
                  }, {
                    min: 10,
                    message: "Mínimo 10 caracteres"
                  }],
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                    maxLength: 100
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 415,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 407,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 406,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("strong", {
                    children: "Resumen"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 421,
                    columnNumber: 28
                  }, _this),
                  name: "summary",
                  rules: [{
                    required: true,
                    message: "Ingrese el resumen"
                  }, {
                    min: 100,
                    message: "Mínimo 100 caracteres"
                  }],
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                    maxLength: 500
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 428,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 420,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 419,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("strong", {
                    children: "Imagen"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 434,
                    columnNumber: 28
                  }, _this),
                  name: "imagen",
                  valuePropName: "fileList",
                  getValueFromEvent: normFile,
                  extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
                    children: ["Im\xE1genes jpg o png de ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("strong", {
                      children: "400px x 400px"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 440,
                      columnNumber: 47
                    }, _this), " (no superior a 500 KB)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 439,
                    columnNumber: 23
                  }, _this),
                  rules: [{
                    required: imageSrc !== "" ? false : true,
                    message: "Adjunte un imagen"
                  }],
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Upload"], {
                    name: "fileCertificado",
                    accept: ".jpg, .jpeg, .png",
                    listType: "picture" // showUploadList={false}
                    ,
                    beforeUpload: function beforeUpload(file) {
                      return handleBeforeUploadCertificado(file);
                    },
                    onRemove: handleRemoveFileClickCertificado,
                    fileList: fileCertificado,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["UploadOutlined"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 468,
                        columnNumber: 37
                      }, _this),
                      children: "Click para adjuntar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 468,
                      columnNumber: 23
                    }, _this), showSizeMessageCertificado && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                      className: "afiliacion-datos-personales__size-message ",
                      style: {
                        color: "red"
                      },
                      children: "El archivo no debe pesar m\xE1s de 500 KB."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 473,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 457,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 433,
                  columnNumber: 19
                }, _this), imageSrc !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                  style: {
                    boder: "1px solid #D9D9D9",
                    padding: "0.5rem"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Image"], {
                    width: 100,
                    height: 100,
                    src: imageSrc,
                    fallback: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 489,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 483,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 432,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Form"].Item, {
                  name: "marcarPrincipal",
                  hidden: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                    type: "text"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 541,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 540,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 515,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("strong", {
                  children: "Contenido:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 545,
                  columnNumber: 19
                }, _this), " \xA0\xA0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 544,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 548,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(Editor, {
                  data: contenidoUpdate,
                  actions: {
                    setContenidoUpdate: setContenidoUpdate
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 549,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 547,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
                lg: 24,
                style: {
                  textAlign: "center"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 555,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 556,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                  onClick: handleCancel,
                  children: "Volver"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 557,
                  columnNumber: 19
                }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                  type: "primary",
                  htmlType: "submit",
                  children: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
                    children: "Actualizar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 561,
                    columnNumber: 23
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
                    children: "Agregar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 563,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 559,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 554,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 15
            }, _this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 313,
    columnNumber: 5
  }, _this);
};

_s(Noticias, "xfAhhpN5yC1FPCJ06IurgjPTYJw=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_7__["Form"].useForm];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9CdG5QcmVtaW9zL0J0bkFjdHVhbGl6YXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFuZWwvRW1wcmVzYXMvQnRuUHJlbWlvcy9CdG5BZ3JlZ2FyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhbmVsL0VtcHJlc2FzL0J0blByZW1pb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFuZWwvRW1wcmVzYXMvQnRuUHJlbWlvcy9zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiQnRuQWN0dWFsaXphciIsInByb3BzIiwiZW1wcmVzYUlkIiwiZW1wcmVzYU5vbWJyZSIsImVtcHJlc2FMZW5ndWFqZSIsImRhdGFQcm9kdWN0b3MiLCJzZXREYXRhUHJvZHVjdG9zIiwiaWRVcGRhdGUiLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJ1c2VTdGF0ZSIsInByb2Nlc29BY3R1YWwiLCJzZXRQcm9jZXNvQWN0dWFsIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsInNwaW5Nb2RhbCIsInNldFNwaW5Nb2RhbCIsImZpbGVDZXJ0aWZpY2FkbyIsInNldEZpbGVDZXJ0aWZpY2FkbyIsInNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvIiwic2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8iLCJpbWFnZVNyYyIsInNldEltYWdlU3JjIiwiY29udGVuaWRvVXBkYXRlIiwic2V0Q29udGVuaWRvVXBkYXRlIiwidXNlRWZmZWN0IiwicHJvZHVjdG8iLCJmaW5kIiwiaWQiLCJzZXRGaWVsZHNWYWx1ZSIsImxhbmd1YWdlIiwibGVuZ3VhamUiLCJuYW1lIiwidGl0dWxvIiwiY29udGVuaWRvIiwiaW1hZ2VCYXNlNjQiLCJpbWFnZUV4dGVuc2lvbiIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvIiwiZmlsZSIsInNpemUiLCJmaW5kSW5kZXgiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJyZ3hCYXNlNjQiLCJSZWdFeHAiLCJyZ3giLCJleGVjIiwicmVzdWx0Iiwibm9tYnJlQXJjaGl2byIsImV4dGVuc2lvbiIsImJhc2U2NCIsImJ5dGVzIiwiaGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG8iLCJub3JtRmlsZSIsInN1cGVyYUxpbWl0ZSIsIkFycmF5IiwiaXNBcnJheSIsImZpbGVMaXN0IiwibGVuZ3RoIiwic2hpZnQiLCJsYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJwYXlsb2FkIiwiY29udGVudF9odG1sIiwiaW1hZ2VfZXh0ZW5zaW9uIiwiaW1hZ2VfYmFzZTY0IiwidXBkYXRlTm90aWNpYXMiLCJBcGlQcm9kdWN0b3MiLCJ1cGRhdGVQcm9kdWN0byIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb2RpZ28iLCJtYXAiLCJub3RpY2lhIiwiaW1hZ2VuXyIsIm5vdGlmaWNhIiwiZXJyb3IiLCJpbnNlcnRQcm9kdWN0byIsInV1aWQiLCJ1dWlkdjQiLCJrZXkiLCJmZWNoYUNyZWFjaW9uIiwibW9tZW50IiwiZm9ybWF0IiwiZW1wcmVzYV9pZCIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm1pbiIsImNvbG9yIiwiYm9kZXIiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiQnRuQWdyZWdhciIsInJlc2V0RmllbGRzIiwiaW1hZ2VuIiwic3R5bGVzQ3NzIiwiQ29sdW1uIiwiVGFibGUiLCJQcm9kdWN0b3MiLCJtb2RhbFByb2R1Y3Rvc1Zpc2libGUiLCJzZXRNb2RhbFByb2R1Y3Rvc1Zpc2libGUiLCJsb2FkaW5nVGFibGUiLCJzZXRMb2FkaW5nVGFibGUiLCJjb25maXJtTG9hZGluZyIsInNldENvbmZpcm1Mb2FkaW5nIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJzaG93UG9wY29uZmlybSIsImhhbmRsZVByb2R1Y3RvcyIsImhhbmRsZURlbGV0ZSIsImRldGV0ZVByb2R1Y3RvIiwidXBkYXRlUHJvZHVjdG9zIiwiZmlsdGVyIiwiZ2V0UHJvZHVjdG9zIiwicmVzdWx0cyIsImNyZWF0ZWRfYXQiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsInJlY29yZCIsImxvYWRpbmciLCJhcGkiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiZ2V0UHJvZHVjdG8iLCJwcm9kdWN0b0lkIiwiTm90aWNpYXMiLCJkYXRhU291cmNlIiwic2V0RGF0YVNvdXJjZSIsInNwaW5MaXN0YWRvIiwic2V0U3Bpbkxpc3RhZG8iLCJBcGlOb3RpY2lhcyIsImdldE5vdGljaWFzIiwibmV3RGF0YVNvdXJjZSIsInRpdGxlIiwidmlzdWFsaXphY2lvbkhvbWUiLCJuYW1lX3NlY3Rpb24iLCJtYXJjYXJQcmluY2lwYWwiLCJtYXJrTWFpbiIsInN1bW1hcnkiLCJ0eXBlIiwicHJvY2VzbyIsImluc2VydE5vdGljaWFzIiwiaW5zZXJ0SWQiLCJoYW5kbGVBZ3JlZ2FyIiwiaGFuZGxlT2siLCJoYW5kbGVFZGl0Iiwibm90aWNpYVVwZGF0ZSIsImRldGV0ZU5vdGljaWFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPLE1BQ3BCLGNBQU07QUFDSixTQUFPLDBJQUFQO0FBQ0QsQ0FIbUIsRUFJcEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBRmdCLDJEQUVoQjtBQUFBO0FBQUEsY0FGZ0IsY0FFaEI7QUFBQTtBQUFBLENBSm9CLENBQXRCO01BQU1G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MTMyOTQwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIFNwaW4sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFNlbGVjdCxcclxuICBVcGxvYWQsXHJcbiAgSW1hZ2UsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQsIEVkaXRUd29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IEFwaVByb2R1Y3RvcyBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IG5vdGlmaWNhIGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlscy9ub3RpZmljYVwiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAoKSA9PiB7XHJcbiAgICByZXR1cm4gaW1wb3J0KFwiLi4vLi4vRWRpdG9yXCIpO1xyXG4gIH0sXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuXHJcbmNvbnN0IEJ0bkFjdHVhbGl6YXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBlbXByZXNhSWQsXHJcbiAgICBlbXByZXNhTm9tYnJlLFxyXG4gICAgZW1wcmVzYUxlbmd1YWplLFxyXG4gICAgZGF0YVByb2R1Y3RvcyxcclxuICAgIHNldERhdGFQcm9kdWN0b3MsXHJcbiAgICBpZFVwZGF0ZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cclxuICBjb25zdCBbcHJvY2Vzb0FjdHVhbCwgc2V0UHJvY2Vzb0FjdHVhbF0gPSB1c2VTdGF0ZShcIkFDVFVBTElaQVJcIik7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlLCBzZXRJc01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NwaW5Nb2RhbCwgc2V0U3Bpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmlsZUNlcnRpZmljYWRvLCBzZXRGaWxlQ2VydGlmaWNhZG9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbywgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG9dID1cclxuICAgIHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250ZW5pZG9VcGRhdGUsIHNldENvbnRlbmlkb1VwZGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgIC8vIHNldENvbnRlbmlkb1VwZGF0ZShcIlwiKTtcclxuICAgIC8vIHNldEltYWdlU3JjKFwiXCIpO1xyXG4gICAgLy8gc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdG8gPSBkYXRhUHJvZHVjdG9zLmZpbmQoKHByb2R1Y3RvKSA9PiBwcm9kdWN0by5pZCA9PT0gaWRVcGRhdGUpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIGlkOiBwcm9kdWN0by5pZCxcclxuICAgICAgbGFuZ3VhZ2U6IHByb2R1Y3RvLmxlbmd1YWplLFxyXG4gICAgICBuYW1lOiBwcm9kdWN0by50aXR1bG8sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRDb250ZW5pZG9VcGRhdGUocHJvZHVjdG8uY29udGVuaWRvKTtcclxuXHJcbiAgICBpZiAocHJvZHVjdG8uaW1hZ2VCYXNlNjQgIT09IFwiXCIpIHtcclxuICAgICAgc2V0SW1hZ2VTcmMoXHJcbiAgICAgICAgYGRhdGE6aW1hZ2UvJHtwcm9kdWN0by5pbWFnZUV4dGVuc2lvbn07YmFzZTY0LCR7cHJvZHVjdG8uaW1hZ2VCYXNlNjR9YFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SW1hZ2VTcmMoXCJcIik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmVmb3JlVXBsb2FkQ2VydGlmaWNhZG8gPSAoZmlsZSkgPT4ge1xyXG4gICAgLy8gNSBNQiA9IDEwMjQgKiA1ID0gNTEyMFxyXG4gICAgaWYgKGZpbGUuc2l6ZSAvIDEwMDAgPiA1MTIpIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8odHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZmlsZUNlcnRpZmljYWRvLmZpbmRJbmRleCgoZSkgPT4gZS5uYW1lID09PSBmaWxlLm5hbWUpID49IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJneEJhc2U2NCA9IFJlZ0V4cChcclxuICAgICAgICAvZGF0YTooYXBwbGljYXRpb258aW1hZ2UpXFwvKGpwZWd8anBnfHBuZyopO2Jhc2U2NCwoW15cIl0qKS9naW1cclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgcmd4ID0gcmd4QmFzZTY0LmV4ZWMocmVhZGVyLnJlc3VsdCk7XHJcblxyXG4gICAgICBpZiAocmd4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC4uLmZpbGUsXHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgIG5vbWJyZUFyY2hpdm86IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICBleHRlbnNpb246IHJneFsyXSxcclxuICAgICAgICAgICAgICBiYXNlNjQ6IHJneFszXSxcclxuICAgICAgICAgICAgICBieXRlczogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWxlQ2xpY2tDZXJ0aWZpY2FkbyA9ICgpID0+IHtcclxuICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9ybUZpbGUgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHN1cGVyYUxpbWl0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKGUuZmlsZS5zaXplIC8gMTAwMCA+IDUxMikge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbyh0cnVlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKGZhbHNlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5maWxlTGlzdC5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGUuZmlsZUxpc3Quc2hpZnQoKTtcclxuICAgIH1cclxuICAgIGlmIChzdXBlcmFMaW1pdGUpIHtcclxuICAgICAgZS5maWxlTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlICYmIGUuZmlsZUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgbGFiZWxDb2w6IHsgc3BhbjogMjQgfSxcclxuICAgIHdyYXBwZXJDb2w6IHsgc3BhbjogMjQgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgY29udGVudF9odG1sOiBjb250ZW5pZG9VcGRhdGUsXHJcbiAgICAgIGltYWdlX2V4dGVuc2lvbjogZmlsZUNlcnRpZmljYWRvWzBdXHJcbiAgICAgICAgPyBmaWxlQ2VydGlmaWNhZG9bMF1bMF0uZXh0ZW5zaW9uXHJcbiAgICAgICAgOiBudWxsLFxyXG4gICAgICBpbWFnZV9iYXNlNjQ6IGZpbGVDZXJ0aWZpY2Fkb1swXSA/IGZpbGVDZXJ0aWZpY2Fkb1swXVswXS5iYXNlNjQgOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgdXBkYXRlTm90aWNpYXMgPSBkYXRhUHJvZHVjdG9zO1xyXG5cclxuICAgIGlmIChwcm9jZXNvQWN0dWFsID09PSBcIkFDVFVBTElaQVJcIikge1xyXG4gICAgICBzZXRTcGluTW9kYWwodHJ1ZSk7XHJcbiAgICAgIEFwaVByb2R1Y3Rvcy51cGRhdGVQcm9kdWN0byhwYXlsb2FkKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICB1cGRhdGVOb3RpY2lhcyA9IGRhdGFQcm9kdWN0b3MubWFwKChub3RpY2lhKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5vdGljaWEuaWQgPT09IHZhbHVlcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VuXyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChmaWxlQ2VydGlmaWNhZG9bMF0pIHtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VuXy5pbWFnZUJhc2U2NCA9IGZpbGVDZXJ0aWZpY2Fkb1swXVswXS5iYXNlNjQ7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlbl8uaW1hZ2VFeHRlbnNpb24gPSBmaWxlQ2VydGlmaWNhZG9bMF1bMF0uZXh0ZW5zaW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm5vdGljaWEsXHJcbiAgICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICAgIC4uLmltYWdlbl8sXHJcbiAgICAgICAgICAgICAgICAgIHRpdHVsbzogcGF5bG9hZC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICBsZW5ndWFqZTogcGF5bG9hZC5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBub3RpY2lhO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldERhdGFQcm9kdWN0b3ModXBkYXRlTm90aWNpYXMpO1xyXG4gICAgICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gICAgICAgICAgICBoYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9jZXNvQWN0dWFsID09PSBcIkFHUkVHQVJcIikge1xyXG4gICAgICBzZXRTcGluTW9kYWwodHJ1ZSk7XHJcbiAgICAgIEFwaVByb2R1Y3Rvcy5pbnNlcnRQcm9kdWN0byhwYXlsb2FkKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZU5vdGljaWFzID0gW1xyXG4gICAgICAgICAgICAgIC4uLmRhdGFQcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIHRpdHVsbzogcGF5bG9hZC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgbGVuZ3VhamU6IHBheWxvYWQubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogcGF5bG9hZC5pbWFnZV9iYXNlNjQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUV4dGVuc2lvbjogcGF5bG9hZC5pbWFnZV9leHRlbnNpb24sXHJcbiAgICAgICAgICAgICAgICBrZXk6IHV1aWQsXHJcbiAgICAgICAgICAgICAgICBpZDogdXVpZCxcclxuICAgICAgICAgICAgICAgIGZlY2hhQ3JlYWNpb246IG1vbWVudCgpLmZvcm1hdChcIkRELU1NLVlZWVlcIiksXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcyh1cGRhdGVOb3RpY2lhcyk7XHJcbiAgICAgICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICBub3RpZmljYShcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxFZGl0VHdvVG9uZVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICBwcm9jZXNvQWN0dWFsID09PSBcIkFDVFVBTElaQVJcIiA/IChcclxuICAgICAgICAgICAgPHNwYW4+QWN0dWFsaXphciBwcm9kdWN0byBkZSB7ZW1wcmVzYU5vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3Bhbj5BZ3JlZ2FyIG51ZXZvIHByb2R1Y3RvIHBhcmEge2VtcHJlc2FOb21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAvLyBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgZm9vdGVyPXtmYWxzZX1cclxuICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICBjZW50ZXJlZFxyXG4gICAgICA+XHJcbiAgICAgICAgPFNwaW4gc3Bpbm5pbmc9e3NwaW5Nb2RhbH0gZGVsYXk9ezUwMH0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgIHsuLi5sYXlvdXR9XHJcbiAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IGVtcHJlc2FMZW5ndWFqZSxcclxuICAgICAgICAgICAgICAgIGVtcHJlc2FfaWQ6IGVtcHJlc2FJZCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiaWRcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJlbXByZXNhX2lkXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9eyg0MCwgNDApfT5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPkxlbmd1YWplPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgbGVuZ3VhamVcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCIgYWxsb3dDbGVhciBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZXNcIj5Fc3Bhw7FvbDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZW5cIj5Jbmdsw6lzPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPk5vbWJyZTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCBub21icmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtaW46IDEwLCBtZXNzYWdlOiBcIk3DrW5pbW8gMTAgY2FyYWN0ZXJlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBtYXhMZW5ndGg9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+UmVzdW1lbjwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCByZXN1bWVuXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWluOiAxMDAsIG1lc3NhZ2U6IFwiTcOtbmltbyAxMDAgY2FyYWN0ZXJlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBtYXhMZW5ndGg9ezUwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICovfVxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+SW1hZ2VuPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJmaWxlTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tRXZlbnQ9e25vcm1GaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbcOhZ2VuZXMganBnIG8gcG5nIGRle1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDcwcHggeCAxNTBweHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5QRU5ESUVOVEU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKG5vIHN1cGVyaW9yIGEgNTAwIEtCKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogaW1hZ2VTcmMgIT09IFwiXCIgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWRqdW50ZSB1biBpbWFnZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8VXBsb2FkIG5hbWU9XCJsb2dvXCIgYWN0aW9uPVwiL3VwbG9hZC5kb1wiIGxpc3RUeXBlPVwicGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9VcGxvYWQ+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZUNlcnRpZmljYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVVcGxvYWQ9eyhmaWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCZWZvcmVVcGxvYWRDZXJ0aWZpY2FkbyhmaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e2hhbmRsZVJlbW92ZUZpbGVDbGlja0NlcnRpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZUxpc3Q9e2ZpbGVDZXJ0aWZpY2Fkb31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZmlsaWFjaW9uLWRhdG9zLXBlcnNvbmFsZXNfX3NpemUtbWVzc2FnZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbCBhcmNoaXZvIG5vIGRlYmUgcGVzYXIgbcOhcyBkZSA1MDAgS0IuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZVNyYyAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9kZXI6IFwiMXB4IHNvbGlkICNEOUQ5RDlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1JQUFBRERDQVlBQUFEUXZjNlVBQUFCUldsRFExQkpRME1nVUhKdlptbHNaUUFBS0pGallHQVNTU3dveUdGaFlHREl6U3NwQ25KM1VvaUlqRkpnZjhMQXdTRENJTW9nd01DY21GeGM0QmdRNEFOVXdnQ2pVY0czYXd5TUlQcXlMc2lzN1BQT3EzUWRERmN2alYzak9EMWJvUVZUUFFyZ1Nra3RUZ2JTZjRBNExibWdxSVNCZ1RFRnlGWXVMeWtBc1R1QWJKRWlvS09BN0RrZ2RqcUV2UUhFVG9Ld2o0RFZoQVE1QTlrM2dHeUI1SXhFb0JtTUw0QnNuU1FrOFhRa050UmVFT0J4Y2ZYeFVRZzFNamMwZHlIZ1hOSkJTV3BGQ1loMnppK29MTXBNenloUmNBU0dVcXFDWjE2eW5vNkNrWUdSQVFNREtNd2hxai9mQUljbG94Z0hRcXhBaklIQkV1Z3c1c1VJc1NRcEJvYnRRUGRMY2lMRVZKWXpNUEJITURCc2F5aElMRXFFTzREeEcwdHhtckVSaE0yOW5ZR0JkZHIvLzUvREdSallOUmtZL2w3Ly8vLzM5di8vL3k0RG1uK0xnZUhBTndEcmtsMUF1TytwbWdBQUFEaGxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQXFBQ0FBUUFBQUFCQUFBQXdxQURBQVFBQUFBQkFBQUF3d0FBQUFEOWIvSG5BQUFIbGtsRVFWUjRBZTNkUDNQVFdCU0djYkd6TTZHQ0txbElCUlYwZEhSSkZhclEwZVVUOExINEJuUlUwTkhSMFVFRlZkSWxGUlY3VHpSa3NvbVBZOHV5a1RrL3pld1FmS3cvOXpudjR5dkp5bkx2NHVMaVYyZEJvRGlCZjRxUDMvQVJ1Q1JBQkVGQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnMEFqOGkwSk80T3pzclB2NjlXditoaTJxUEhyMHFOdmYzOStpSTk3c29SSWg0ZjN6NTgvdTdkdTNTWFg3WHQ3WjJlbmV2SG16ZlFlK29TTjJhcFNBUGowOVRTcmIrWEtJL2YzNzkrMDgrQTBjTlJFMkFOa3VwaytBQ05QdmtTUGNBQUVpYkFDeVhVeWZBQkdtM3lOSHVBRUNSTmdBWkx1WVBnRWlyS2xIdTd1N1hkeXl0R3dIQWQ4ampOeW5nNE9EN3ZuejUxZGJQVDgvN3o1OCtOQjkrL2J0NmpVL1RJK0FHV0hFbnJ4NDhlSi9Fc1NtSHp4NDBMMTgrZkx5enhGM1pWTWpFeURDaUVEak1ZWlpTNXdpUFhueVpGYkpheE1oUUlRUkd6SHZXUjdYQ3lPQ1hzT21pREFpMUhtUE1NUWpEcGJwRWlEQ2lMMzU4ZU5IdXJXLzVTbldkSUJiWGlEQ2lBMzgvUG56cmNlMll5WjQvLzU5RjNlUExOTWw0UGJwaUwySjBMOTc5Kzd5RHRIRGh3OHZ0enp2ZEduRVhkdlVpZ1NJc0NMQVdhdkhwLytxTTBCY1hNZC9xMjVuMXZGNTdUWUJwMGEzbVV6aWxlUGo0KzdrNUtTTGI2Z3Q2eWRBaFBVelhub1BSMGRIbDc5V0dUTkNmQm5uMXV2U0NKZGVnUWhMSTF2dkNrK2ZQdTJlUFh0MnRaT1lFVjYvZm4zMWR6K3Nod0FSMXNQMWNxdkxudGJFTjlNeEE5eGNZanN4UzFqV1I0QUlhMkliengwdGM0NGZZWC8xNmxWNk5ERkxYSCtZTDMyandpQUNSQmlFYmY1S2NYb1RJc1FTcHpYeDROMjhKYTRCUW9LN3JnWGl5ZGJIangvUDI1VGFRQUpFR0FndVd5MCsyUThQRDYvS2k0UjhFVmwrYnpCT25aWTk1ZnE5cmo5ekFrVEkyU3hkaWRCSHFHOStza2R3NDNib3JDWE8vWmNKZHJhUFdkdjIydUlFaUxBNHE3bnZ2Q3VnOFdUcXpRdmVPSDI2Zm9kbzdnNnVGZS9hMTdXMytuRkJBa1JZRU5SZGIxdmtrejFDSDljUHNWeS9qcmhyMjdQcU1ZdkVOWU5sSEFJZXNSaUJZd1J5MFYrOGlYUDgrL2Z2WDExTXI3TDdFQ3VlYi9yNDhlTXFtN0Z1STJCR1dERUc4Y20rN0czTkVPZm1kY1RRdzRoOS81NWxobTdEZWtSWUtRUFpGMkFyYlhUQXl1NGtEWUIyWXhVendnMGdpLzQxenRIbmZRRzI2SGJHZWwvY3JWcm03dE5ZKy8xYnRrT0VBWjJNMDVyNEZCN3I5R2JBSWR4YVpZckhkT3NnSi93Q0VRWTBKNzRUbU9LbmJ4eFQ5bjNGZ0dHV1dzVmRvd0h0anQ5Tm52Zjd5UU0yYVpVL1RJQUlBeHJ3NmRPbkFXdFpaY29FbkJwTnVUdU9iV01FaUxBeDFIWTBaUUpFbUhKM0hOdkdDQkJoWTZqdGFNb0VpSkIwWjI5dkw2bHM1OHZ4UGNPOC96ZnJkbzVxdktPK2QzRng4V3U4emYxZFc0cC9jUHpMbHkvZHR2OVRzL0ViY3ZHQUhoSHlmQkloWjZOU2lJQlRvMExOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUMvd0dnS0tDNFlNQTRUQUFBQUFCSlJVNUVya0pnZ2c9PVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICB7LyogPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+wr9EZXNlYSB2aXN1YWxpemFjacOzbiBlbiBlbCBIb21lPzwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsaXphY2lvbkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkluZ3Jlc2UgdmlzdWFsaXphY2nDs24gZW4gZWwgSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGVjY2lvbmVcIiBhbGxvd0NsZWFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJTXCI+U2k8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIk5cIj5ObzwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hcmNhclByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wr9EZXNlYSBtYXJjYXIgY29tbyBwcmluY2lwYWw/PC9zdHJvbmc+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2kgc2VsZWNjaW9uYSAnU2knIHNlIGFncmVnYXLDoSBjb21vIG5vdGljaWFzIHByaW5jaXBhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuIGVsIGhvbWUgKGVsIGN1YWRybyBncmFuZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlNlbGVjY2lvbmUgc2kgbyBub1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiU1wiPlNpPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIk5cIj5ObzwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkl0ZW0gbmFtZT1cIm1hcmNhclByaW5jaXBhbFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29udGVuaWRvOjwvc3Ryb25nPiAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2NvbnRlbmlkb1VwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXt7IHNldENvbnRlbmlkb1VwZGF0ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2FuY2VsfT5Wb2x2ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWN0dWFsaXphciBwcm9kdWN0bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBwcm9kdWN0bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NwaW4+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnRuQWN0dWFsaXphcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIFNwaW4sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFNlbGVjdCxcclxuICBVcGxvYWQsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgQXBpUHJvZHVjdG9zIGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgbm90aWZpY2EgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL25vdGlmaWNhXCI7XHJcblxyXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxyXG4gICgpID0+IHtcclxuICAgIHJldHVybiBpbXBvcnQoXCIuLi8uLi9FZGl0b3JcIik7XHJcbiAgfSxcclxuICB7IHNzcjogZmFsc2UgfVxyXG4pO1xyXG5cclxuY29uc3QgQnRuQWdyZWdhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGVtcHJlc2FJZCxcclxuICAgIGVtcHJlc2FOb21icmUsXHJcbiAgICBlbXByZXNhTGVuZ3VhamUsXHJcbiAgICBkYXRhUHJvZHVjdG9zLFxyXG4gICAgc2V0RGF0YVByb2R1Y3RvcyxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cclxuICBjb25zdCBbcHJvY2Vzb0FjdHVhbCwgc2V0UHJvY2Vzb0FjdHVhbF0gPSB1c2VTdGF0ZShcIkFHUkVHQVJcIik7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlLCBzZXRJc01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NwaW5Nb2RhbCwgc2V0U3Bpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmlsZUNlcnRpZmljYWRvLCBzZXRGaWxlQ2VydGlmaWNhZG9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbywgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG9dID1cclxuICAgIHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250ZW5pZG9VcGRhdGUsIHNldENvbnRlbmlkb1VwZGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgIHNldENvbnRlbmlkb1VwZGF0ZShcIlwiKTtcclxuICAgIHNldEltYWdlU3JjKFwiXCIpO1xyXG4gICAgLy8gc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmVmb3JlVXBsb2FkQ2VydGlmaWNhZG8gPSAoZmlsZSkgPT4ge1xyXG4gICAgLy8gNSBNQiA9IDEwMjQgKiA1ID0gNTEyMFxyXG4gICAgaWYgKGZpbGUuc2l6ZSAvIDEwMDAgPiA1MTIpIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8odHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZmlsZUNlcnRpZmljYWRvLmZpbmRJbmRleCgoZSkgPT4gZS5uYW1lID09PSBmaWxlLm5hbWUpID49IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJneEJhc2U2NCA9IFJlZ0V4cChcclxuICAgICAgICAvZGF0YTooYXBwbGljYXRpb258aW1hZ2UpXFwvKGpwZWd8anBnfHBuZyopO2Jhc2U2NCwoW15cIl0qKS9naW1cclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgcmd4ID0gcmd4QmFzZTY0LmV4ZWMocmVhZGVyLnJlc3VsdCk7XHJcblxyXG4gICAgICBpZiAocmd4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC4uLmZpbGUsXHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgIG5vbWJyZUFyY2hpdm86IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICBleHRlbnNpb246IHJneFsyXSxcclxuICAgICAgICAgICAgICBiYXNlNjQ6IHJneFszXSxcclxuICAgICAgICAgICAgICBieXRlczogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWxlQ2xpY2tDZXJ0aWZpY2FkbyA9ICgpID0+IHtcclxuICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9ybUZpbGUgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHN1cGVyYUxpbWl0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKGUuZmlsZS5zaXplIC8gMTAwMCA+IDUxMikge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbyh0cnVlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKGZhbHNlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5maWxlTGlzdC5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGUuZmlsZUxpc3Quc2hpZnQoKTtcclxuICAgIH1cclxuICAgIGlmIChzdXBlcmFMaW1pdGUpIHtcclxuICAgICAgZS5maWxlTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlICYmIGUuZmlsZUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgbGFiZWxDb2w6IHsgc3BhbjogMjQgfSxcclxuICAgIHdyYXBwZXJDb2w6IHsgc3BhbjogMjQgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgY29udGVudF9odG1sOiBjb250ZW5pZG9VcGRhdGUsXHJcbiAgICAgIGltYWdlX2V4dGVuc2lvbjogZmlsZUNlcnRpZmljYWRvWzBdWzBdLmV4dGVuc2lvbixcclxuICAgICAgaW1hZ2VfYmFzZTY0OiBmaWxlQ2VydGlmaWNhZG9bMF1bMF0uYmFzZTY0LFxyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGUgcGF5bG9hZC5pbWFnZW47XHJcblxyXG4gICAgbGV0IHVwZGF0ZU5vdGljaWFzID0gZGF0YVByb2R1Y3RvcztcclxuXHJcbiAgICBpZiAocHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIpIHtcclxuICAgICAgc2V0U3Bpbk1vZGFsKHRydWUpO1xyXG4gICAgICBBcGlQcm9kdWN0b3MudXBkYXRlUHJvZHVjdG8ocGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgdXBkYXRlTm90aWNpYXMgPSBkYXRhUHJvZHVjdG9zLm1hcCgobm90aWNpYSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChub3RpY2lhLmlkID09PSB2YWx1ZXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlbl8gPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmltYWdlblswXSkge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZW5fLmltYWdlQmFzZTY0ID0gcGF5bG9hZC5pbWFnZW5bMF1bMF0uYmFzZTY0O1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZW5fLmltYWdlRXh0ZW5zaW9uID0gcGF5bG9hZC5pbWFnZW5bMF1bMF0uZXh0ZW5zaW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm5vdGljaWEsXHJcbiAgICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICAgIC4uLmltYWdlbl8sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbm90aWNpYTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zKHVwZGF0ZU5vdGljaWFzKTtcclxuICAgICAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvY2Vzb0FjdHVhbCA9PT0gXCJBR1JFR0FSXCIpIHtcclxuICAgICAgc2V0U3Bpbk1vZGFsKHRydWUpO1xyXG4gICAgICBBcGlQcm9kdWN0b3MuaW5zZXJ0UHJvZHVjdG8ocGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgICAgICB1cGRhdGVOb3RpY2lhcyA9IFtcclxuICAgICAgICAgICAgICAuLi5kYXRhUHJvZHVjdG9zLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB0aXR1bG86IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgICAgICAgIGxlbmd1YWplOiBwYXlsb2FkLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBheWxvYWQuaW1hZ2VfYmFzZTY0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VFeHRlbnNpb246IHBheWxvYWQuaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAga2V5OiB1dWlkLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHV1aWQsXHJcbiAgICAgICAgICAgICAgICBmZWNoYUNyZWFjaW9uOiBtb21lbnQoKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHNldERhdGFQcm9kdWN0b3ModXBkYXRlTm90aWNpYXMpO1xyXG4gICAgICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gICAgICAgICAgICBoYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBBZ3JlZ2FyXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgcHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuPkFjdHVhbGl6YXIgcHJvZHVjdG8gZGUge2VtcHJlc2FOb21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBudWV2byBwcm9kdWN0byBwYXJhIHtlbXByZXNhTm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgLy8gb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgY2VudGVyZWRcclxuICAgICAgPlxyXG4gICAgICAgIDxTcGluIHNwaW5uaW5nPXtzcGluTW9kYWx9IGRlbGF5PXs1MDB9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICB7Li4ubGF5b3V0fVxyXG4gICAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBlbXByZXNhTGVuZ3VhamUsXHJcbiAgICAgICAgICAgICAgICBlbXByZXNhX2lkOiBlbXByZXNhSWQsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImlkXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiZW1wcmVzYV9pZFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsoNDAsIDQwKX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5MZW5ndWFqZTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIGxlbmd1YWplXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVzXCI+RXNwYcOxb2w8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVuXCI+SW5nbMOpczwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5Ob21icmU8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgbm9tYnJlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWluOiAxMCwgbWVzc2FnZTogXCJNw61uaW1vIDEwIGNhcmFjdGVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPlJlc3VtZW48L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgcmVzdW1lblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMTAwLCBtZXNzYWdlOiBcIk3DrW5pbW8gMTAwIGNhcmFjdGVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXs1MDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPkltYWdlbjwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lPVwiZmlsZUxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGdldFZhbHVlRnJvbUV2ZW50PXtub3JtRmlsZX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW3DoWdlbmVzIGpwZyBvIHBuZyBkZXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA3MHB4IHggMTUwcHh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+UEVORElFTlRFPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChubyBzdXBlcmlvciBhIDUwMCBLQilcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGltYWdlU3JjICE9PSBcIlwiID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFkanVudGUgdW4gaW1hZ2VuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPFVwbG9hZCBuYW1lPVwibG9nb1wiIGFjdGlvbj1cIi91cGxvYWQuZG9cIiBsaXN0VHlwZT1cInBpY3R1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbGljayBwYXJhIGFkanVudGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGVDZXJ0aWZpY2Fkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVmb3JlVXBsb2FkPXsoZmlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQmVmb3JlVXBsb2FkQ2VydGlmaWNhZG8oZmlsZSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXtoYW5kbGVSZW1vdmVGaWxlQ2xpY2tDZXJ0aWZpY2Fkb31cclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVMaXN0PXtmaWxlQ2VydGlmaWNhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGljayBwYXJhIGFkanVudGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWZpbGlhY2lvbi1kYXRvcy1wZXJzb25hbGVzX19zaXplLW1lc3NhZ2UgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRWwgYXJjaGl2byBubyBkZWJlIHBlc2FyIG3DoXMgZGUgNTAwIEtCLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VTcmMgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZGVyOiBcIjFweCBzb2xpZCAjRDlEOUQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1JQUFBRERDQVlBQUFEUXZjNlVBQUFCUldsRFExQkpRME1nVUhKdlptbHNaUUFBS0pGallHQVNTU3dveUdGaFlHREl6U3NwQ25KM1VvaUlqRkpnZjhMQXdTRENJTW9nd01DY21GeGM0QmdRNEFOVXdnQ2pVY0czYXd5TUlQcXlMc2lzN1BQT3EzUWRERmN2alYzak9EMWJvUVZUUFFyZ1Nra3RUZ2JTZjRBNExibWdxSVNCZ1RFRnlGWXVMeWtBc1R1QWJKRWlvS09BN0RrZ2RqcUV2UUhFVG9Ld2o0RFZoQVE1QTlrM2dHeUI1SXhFb0JtTUw0QnNuU1FrOFhRa050UmVFT0J4Y2ZYeFVRZzFNamMwZHlIZ1hOSkJTV3BGQ1loMnppK29MTXBNenloUmNBU0dVcXFDWjE2eW5vNkNrWUdSQVFNREtNd2hxai9mQUljbG94Z0hRcXhBaklIQkV1Z3c1c1VJc1NRcEJvYnRRUGRMY2lMRVZKWXpNUEJITURCc2F5aElMRXFFTzREeEcwdHhtckVSaE0yOW5ZR0JkZHIvLzUvREdSallOUmtZL2w3Ly8vLzM5di8vL3k0RG1uK0xnZUhBTndEcmtsMUF1TytwbWdBQUFEaGxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQXFBQ0FBUUFBQUFCQUFBQXdxQURBQVFBQUFBQkFBQUF3d0FBQUFEOWIvSG5BQUFIbGtsRVFWUjRBZTNkUDNQVFdCU0djYkd6TTZHQ0txbElCUlYwZEhSSkZhclEwZVVUOExINEJuUlUwTkhSMFVFRlZkSWxGUlY3VHpSa3NvbVBZOHV5a1RrL3pld1FmS3cvOXpudjR5dkp5bkx2NHVMaVYyZEJvRGlCZjRxUDMvQVJ1Q1JBQkVGQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnMEFqOGkwSk80T3pzclB2NjlXditoaTJxUEhyMHFOdmYzOStpSTk3c29SSWg0ZjN6NTgvdTdkdTNTWFg3WHQ3WjJlbmV2SG16ZlFlK29TTjJhcFNBUGowOVRTcmIrWEtJL2YzNzkrMDgrQTBjTlJFMkFOa3VwaytBQ05QdmtTUGNBQUVpYkFDeVhVeWZBQkdtM3lOSHVBRUNSTmdBWkx1WVBnRWlyS2xIdTd1N1hkeXl0R3dIQWQ4ampOeW5nNE9EN3ZuejUxZGJQVDgvN3o1OCtOQjkrL2J0NmpVL1RJK0FHV0hFbnJ4NDhlSi9Fc1NtSHp4NDBMMTgrZkx5enhGM1pWTWpFeURDaUVEak1ZWlpTNXdpUFhueVpGYkpheE1oUUlRUkd6SHZXUjdYQ3lPQ1hzT21pREFpMUhtUE1NUWpEcGJwRWlEQ2lMMzU4ZU5IdXJXLzVTbldkSUJiWGlEQ2lBMzgvUG56cmNlMll5WjQvLzU5RjNlUExOTWw0UGJwaUwySjBMOTc5Kzd5RHRIRGh3OHZ0enp2ZEduRVhkdlVpZ1NJc0NMQVdhdkhwLytxTTBCY1hNZC9xMjVuMXZGNTdUWUJwMGEzbVV6aWxlUGo0KzdrNUtTTGI2Z3Q2eWRBaFBVelhub1BSMGRIbDc5V0dUTkNmQm5uMXV2U0NKZGVnUWhMSTF2dkNrK2ZQdTJlUFh0MnRaT1lFVjYvZm4zMWR6K3Nod0FSMXNQMWNxdkxudGJFTjlNeEE5eGNZanN4UzFqV1I0QUlhMkliengwdGM0NGZZWC8xNmxWNk5ERkxYSCtZTDMyandpQUNSQmlFYmY1S2NYb1RJc1FTcHpYeDROMjhKYTRCUW9LN3JnWGl5ZGJIangvUDI1VGFRQUpFR0FndVd5MCsyUThQRDYvS2k0UjhFVmwrYnpCT25aWTk1ZnE5cmo5ekFrVEkyU3hkaWRCSHFHOStza2R3NDNib3JDWE8vWmNKZHJhUFdkdjIydUlFaUxBNHE3bnZ2Q3VnOFdUcXpRdmVPSDI2Zm9kbzdnNnVGZS9hMTdXMytuRkJBa1JZRU5SZGIxdmtrejFDSDljUHNWeS9qcmhyMjdQcU1ZdkVOWU5sSEFJZXNSaUJZd1J5MFYrOGlYUDgrL2Z2WDExTXI3TDdFQ3VlYi9yNDhlTXFtN0Z1STJCR1dERUc4Y20rN0czTkVPZm1kY1RRdzRoOS81NWxobTdEZWtSWUtRUFpGMkFyYlhUQXl1NGtEWUIyWXhVendnMGdpLzQxenRIbmZRRzI2SGJHZWwvY3JWcm03dE5ZKy8xYnRrT0VBWjJNMDVyNEZCN3I5R2JBSWR4YVpZckhkT3NnSi93Q0VRWTBKNzRUbU9LbmJ4eFQ5bjNGZ0dHV1dzVmRvd0h0anQ5Tm52Zjd5UU0yYVpVL1RJQUlBeHJ3NmRPbkFXdFpaY29FbkJwTnVUdU9iV01FaUxBeDFIWTBaUUpFbUhKM0hOdkdDQkJoWTZqdGFNb0VpSkIwWjI5dkw2bHM1OHZ4UGNPOC96ZnJkbzVxdktPK2QzRng4V3U4emYxZFc0cC9jUHpMbHkvZHR2OVRzL0ViY3ZHQUhoSHlmQkloWjZOU2lJQlRvMExOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUMvd0dnS0tDNFlNQTRUQUFBQUFCSlJVNUVya0pnZ2c9PVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICB7LyogPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+wr9EZXNlYSB2aXN1YWxpemFjacOzbiBlbiBlbCBIb21lPzwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsaXphY2lvbkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkluZ3Jlc2UgdmlzdWFsaXphY2nDs24gZW4gZWwgSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGVjY2lvbmVcIiBhbGxvd0NsZWFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJTXCI+U2k8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIk5cIj5ObzwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hcmNhclByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wr9EZXNlYSBtYXJjYXIgY29tbyBwcmluY2lwYWw/PC9zdHJvbmc+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2kgc2VsZWNjaW9uYSAnU2knIHNlIGFncmVnYXLDoSBjb21vIG5vdGljaWFzIHByaW5jaXBhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuIGVsIGhvbWUgKGVsIGN1YWRybyBncmFuZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlNlbGVjY2lvbmUgc2kgbyBub1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiU1wiPlNpPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIk5cIj5ObzwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkl0ZW0gbmFtZT1cIm1hcmNhclByaW5jaXBhbFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29udGVuaWRvOjwvc3Ryb25nPiAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2NvbnRlbmlkb1VwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXt7IHNldENvbnRlbmlkb1VwZGF0ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2FuY2VsfT5Wb2x2ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWN0dWFsaXphciBwcm9kdWN0bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBwcm9kdWN0bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NwaW4+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnRuQWdyZWdhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgRGl2aWRlciwgVGFibGUsIFNwaW4sIFBvcGNvbmZpcm0sIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRGVsZXRlVHdvVG9uZSB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5pbXBvcnQgQnRuQWdyZWdhciBmcm9tIFwiLi9CdG5BZ3JlZ2FyXCI7XHJcbmltcG9ydCBCdG5BY3R1YWxpemFyIGZyb20gXCIuL0J0bkFjdHVhbGl6YXJcIjtcclxuaW1wb3J0IEFwaVByb2R1Y3RvcyBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgbm90aWZpY2EgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL25vdGlmaWNhXCI7XHJcblxyXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGgxLFxyXG4gIGg0LFxyXG4gIGg1IHtcclxuICAgIGNvbG9yOiAjM2QyNTE0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgeyBDb2x1bW4gfSA9IFRhYmxlO1xyXG5cclxuY29uc3QgUHJvZHVjdG9zID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBlbXByZXNhSWQsIGVtcHJlc2FOb21icmUsIGVtcHJlc2FMZW5ndWFqZSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFttb2RhbFByb2R1Y3Rvc1Zpc2libGUsIHNldE1vZGFsUHJvZHVjdG9zVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdUYWJsZSwgc2V0TG9hZGluZ1RhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YVByb2R1Y3Rvcywgc2V0RGF0YVByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbmZpcm1Mb2FkaW5nLCBzZXRDb25maXJtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaG93UG9wY29uZmlybSA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxQcm9kdWN0b3NWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUVkaXQgPSAoaWRVcGRhdGUpID0+IHtcclxuICAvLyAgIHNldFByb2Nlc29BY3R1YWwoXCJBQ1RVQUxJWkFSXCIpO1xyXG4gIC8vICAgY29uc3Qgbm90aWNpYVVwZGF0ZSA9IGRhdGFTb3VyY2UuZmluZCgobm90aWNpYSkgPT4gbm90aWNpYS5pZCA9PT0gaWRVcGRhdGUpO1xyXG5cclxuICAvLyAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuXHJcbiAgLy8gICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAvLyAgICAgaWQ6IG5vdGljaWFVcGRhdGUuaWQsXHJcbiAgLy8gICAgIGxlbmd1YWplOiBub3RpY2lhVXBkYXRlLmxlbmd1YWplLFxyXG4gIC8vICAgICB0aXR1bG86IG5vdGljaWFVcGRhdGUudGl0dWxvLFxyXG4gIC8vICAgICBtYXJjYXJQcmluY2lwYWw6IG5vdGljaWFVcGRhdGUubWFyY2FyUHJpbmNpcGFsLFxyXG4gIC8vICAgICB2aXN1YWxpemFjaW9uSG9tZTogbm90aWNpYVVwZGF0ZS52aXN1YWxpemFjaW9uSG9tZSxcclxuICAvLyAgICAgc3VtbWFyeTogbm90aWNpYVVwZGF0ZS5zdW1tYXJ5LFxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgc2V0Q29udGVuaWRvVXBkYXRlKG5vdGljaWFVcGRhdGUuY29udGVuaWRvKTtcclxuXHJcbiAgLy8gICBpZiAobm90aWNpYVVwZGF0ZS5pbWFnZUJhc2U2NCAhPT0gXCJcIikge1xyXG4gIC8vICAgICBzZXRJbWFnZVNyYyhcclxuICAvLyAgICAgICBgZGF0YTppbWFnZS8ke25vdGljaWFVcGRhdGUuaW1hZ2VFeHRlbnNpb259O2Jhc2U2NCwke25vdGljaWFVcGRhdGUuaW1hZ2VCYXNlNjR9YFxyXG4gIC8vICAgICApO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgc2V0SW1hZ2VTcmMoXCJcIik7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICBBcGlQcm9kdWN0b3MuZGV0ZXRlUHJvZHVjdG8oeyBpZCB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVQcm9kdWN0b3MgPSBkYXRhUHJvZHVjdG9zLmZpbHRlcihcclxuICAgICAgICAgICAgKHByb2R1Y3RvKSA9PiBwcm9kdWN0by5pZCAhPT0gaWRcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcyh1cGRhdGVQcm9kdWN0b3MpO1xyXG4gICAgICAgICAgLy8gc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgIC8vIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgc2V0Q29uZmlybUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgc2V0Q29uZmlybUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ1RhYmxlKHRydWUpO1xyXG4gICAgQXBpUHJvZHVjdG9zLmdldFByb2R1Y3RvcyhlbXByZXNhSWQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29kaWdvLCByZXN1bHRzIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhUHJvZHVjdG9zID0gcmVzdWx0cy5tYXAoKHByb2R1Y3RvKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAga2V5OiBwcm9kdWN0by5pZCxcclxuICAgICAgICAgICAgICBpZDogcHJvZHVjdG8uaWQsXHJcbiAgICAgICAgICAgICAgdGl0dWxvOiBwcm9kdWN0by5uYW1lLFxyXG4gICAgICAgICAgICAgIGZlY2hhQ3JlYWNpb246IHByb2R1Y3RvLmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHByb2R1Y3RvLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICBpbWFnZUV4dGVuc2lvbjogcHJvZHVjdG8uaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgIGxlbmd1YWplOiBwcm9kdWN0by5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICBjb250ZW5pZG86IHByb2R1Y3RvLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldERhdGFQcm9kdWN0b3MoZGF0YVByb2R1Y3Rvcyk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nVGFibGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcmAsIGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nVGFibGUoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7c3R5bGVzQ3NzfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlUHJvZHVjdG9zKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFByb2R1Y3Rvc1xyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHZpc2libGU9e21vZGFsUHJvZHVjdG9zVmlzaWJsZX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0TW9kYWxQcm9kdWN0b3NWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8aDM+UHJvZHVjdG9zIGRlIHtlbXByZXNhTm9tYnJlfTwvaDM+XHJcbiAgICAgICAgPERpdmlkZXI+PC9EaXZpZGVyPlxyXG4gICAgICAgIDxCdG5BZ3JlZ2FyXHJcbiAgICAgICAgICBlbXByZXNhSWQ9e2VtcHJlc2FJZH1cclxuICAgICAgICAgIGVtcHJlc2FOb21icmU9e2VtcHJlc2FOb21icmV9XHJcbiAgICAgICAgICBlbXByZXNhTGVuZ3VhamU9e2VtcHJlc2FMZW5ndWFqZX1cclxuICAgICAgICAgIGRhdGFQcm9kdWN0b3M9e2RhdGFQcm9kdWN0b3N9XHJcbiAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zPXtzZXREYXRhUHJvZHVjdG9zfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPFNwaW4gc3Bpbm5pbmc9e2xvYWRpbmdUYWJsZX0+XHJcbiAgICAgICAgICA8VGFibGUgZGF0YVNvdXJjZT17ZGF0YVByb2R1Y3Rvc30gcGFnaW5hdGlvbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICB7LyogPENvbHVtbiB0aXRsZT1cImlkXCIgZGF0YUluZGV4PVwiaWRcIiBrZXk9XCJpZFwiIC8+ICovfVxyXG4gICAgICAgICAgICA8Q29sdW1uIHRpdGxlPVwiUHJvZHVjdG9cIiBkYXRhSW5kZXg9XCJ0aXR1bG9cIiBrZXk9XCJ0aXR1bG9cIiAvPlxyXG4gICAgICAgICAgICB7LyogPENvbHVtbiB0aXRsZT1cIkxlbmd1YWplXCIgZGF0YUluZGV4PVwibGVuZ3VhamVcIiBrZXk9XCJsZW5ndWFqZVwiIC8+XHJcbiAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICB0aXRsZT1cIkZlY2hhIGRlIENyZWFjacOzblwiXHJcbiAgICAgICAgICAgICAgZGF0YUluZGV4PVwiZmVjaGFDcmVhY2lvblwiXHJcbiAgICAgICAgICAgICAga2V5PVwiZmVjaGFDcmVhY2lvblwiXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJPcGNpb25lc1wiXHJcbiAgICAgICAgICAgICAga2V5PVwib3BjaW9uZXNcIlxyXG4gICAgICAgICAgICAgIHJlbmRlcj17KHRleHQsIHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFNwYWNlIHNpemU9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ0bkFjdHVhbGl6YXJcclxuICAgICAgICAgICAgICAgICAgICBlbXByZXNhSWQ9e2VtcHJlc2FJZH1cclxuICAgICAgICAgICAgICAgICAgICBlbXByZXNhTm9tYnJlPXtlbXByZXNhTm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgIGVtcHJlc2FMZW5ndWFqZT17ZW1wcmVzYUxlbmd1YWplfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQcm9kdWN0b3M9e2RhdGFQcm9kdWN0b3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcz17c2V0RGF0YVByb2R1Y3Rvc31cclxuICAgICAgICAgICAgICAgICAgICBpZFVwZGF0ZT17cmVjb3JkLmlkfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIsK/U2VndXJvIGRlIGVsaW1pbmFyIGVzdGUgcHJvZHVjdG8/XCJcclxuICAgICAgICAgICAgICAgICAgICBva1RleHQ9XCJTaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZShyZWNvcmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25Qcm9wcz17eyBsb2FkaW5nOiBjb25maXJtTG9hZGluZyB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVR3b1RvbmUgb25DbGljaz17c2hvd1BvcGNvbmZpcm19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvcztcclxuIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbmZpZy9yZXF1ZXN0XCI7XHJcblxyXG5jb25zdCBhcGkgPSB7fTtcclxuXHJcbmFwaS5nZXRQcm9kdWN0b3MgPSAoZW1wcmVzYUlkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBgZW1wcmVzYS8ke2VtcHJlc2FJZH0vcHJvZHVjdG9zL2AsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkuZ2V0UHJvZHVjdG8gPSAocHJvZHVjdG9JZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHVybDogYGVtcHJlc2EvcHJvZHVjdG8vJHtwcm9kdWN0b0lkfWAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5hcGkuZGV0ZXRlUHJvZHVjdG8gPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgIHVybDogXCJlbXByZXNhL3Byb2R1Y3RvL1wiLFxyXG4gICAgZGF0YTogcGF5bG9hZCxcclxuICB9KTtcclxufTtcclxuXHJcbmFwaS5pbnNlcnRQcm9kdWN0byA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIHVybDogXCJlbXByZXNhL3Byb2R1Y3RvL1wiLFxyXG4gICAgZGF0YTogcGF5bG9hZCxcclxuICB9KTtcclxufTtcclxuXHJcbmFwaS51cGRhdGVQcm9kdWN0byA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgdXJsOiBcImVtcHJlc2EvcHJvZHVjdG8vXCIsXHJcbiAgICBkYXRhOiBwYXlsb2FkLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuaW1wb3J0IHtcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIElucHV0LFxyXG4gIFVwbG9hZCxcclxuICBTZWxlY3QsXHJcbiAgTW9kYWwsXHJcbiAgVGFibGUsXHJcbiAgU3BhY2UsXHJcbiAgLy8gUmFkaW8sXHJcbiAgUG9wY29uZmlybSxcclxuICBJbWFnZSxcclxuICBTcGluLFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmNvbnN0IHsgQ29sdW1uIH0gPSBUYWJsZTtcclxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQsIERlbGV0ZVR3b1RvbmUsIEVkaXRUd29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IEFwaU5vdGljaWFzIGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgUHJvZHVjdG9zIGZyb20gXCIuL1Byb2R1Y3Rvc1wiO1xyXG5pbXBvcnQgQnRuUHJlbWlvcyBmcm9tIFwiLi9CdG5QcmVtaW9zXCI7XHJcbmltcG9ydCBub3RpZmljYSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbm90aWZpY2FcIjtcclxuXHJcbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXHJcbiAgKCkgPT4ge1xyXG4gICAgcmV0dXJuIGltcG9ydChcIi4vRWRpdG9yXCIpO1xyXG4gIH0sXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuXHJcbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYnMtZm9udC1zYW5zLXNlcmlmKTtcclxuICAgIGNvbG9yOiAjNjI0NTJkICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE5vdGljaWFzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb250ZW5pZG9VcGRhdGUsIHNldENvbnRlbmlkb1VwZGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29uZmlybUxvYWRpbmcsIHNldENvbmZpcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGFTb3VyY2UsIHNldERhdGFTb3VyY2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9jZXNvQWN0dWFsLCBzZXRQcm9jZXNvQWN0dWFsXSA9IHVzZVN0YXRlKFwiQUdSRUdBUlwiKTtcclxuICBjb25zdCBbc3Bpbk1vZGFsLCBzZXRTcGluTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzcGluTGlzdGFkbywgc2V0U3Bpbkxpc3RhZG9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3Bpbkxpc3RhZG8odHJ1ZSk7XHJcbiAgICBBcGlOb3RpY2lhcy5nZXROb3RpY2lhcyhcImVtcHJlc2FzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29kaWdvLCByZXN1bHRzIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdEYXRhU291cmNlID0gcmVzdWx0cy5tYXAoKG5vdGljaWEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBrZXk6IG5vdGljaWEuaWQsXHJcbiAgICAgICAgICAgICAgaWQ6IG5vdGljaWEuaWQsXHJcbiAgICAgICAgICAgICAgdGl0dWxvOiBub3RpY2lhLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGZlY2hhQ3JlYWNpb246IG5vdGljaWEuY3JlYXRlZF9hdCxcclxuICAgICAgICAgICAgICAvLyBpbWFnZW46IG5vdGljaWEuY29udGVudF9pbWFnZSxcclxuICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogbm90aWNpYS5pbWFnZV9iYXNlNjQsXHJcbiAgICAgICAgICAgICAgaW1hZ2VFeHRlbnNpb246IG5vdGljaWEuaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgIGxlbmd1YWplOiBub3RpY2lhLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgIHZpc3VhbGl6YWNpb25Ib21lOiBub3RpY2lhLm5hbWVfc2VjdGlvbixcclxuICAgICAgICAgICAgICBtYXJjYXJQcmluY2lwYWw6IG5vdGljaWEubWFya01haW4sXHJcbiAgICAgICAgICAgICAgY29udGVuaWRvOiBub3RpY2lhLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgICBzdW1tYXJ5OiBub3RpY2lhLnN1bW1hcnksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXREYXRhU291cmNlKG5ld0RhdGFTb3VyY2UpO1xyXG4gICAgICAgICAgc2V0U3Bpbkxpc3RhZG8oZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgc2V0U3Bpbkxpc3RhZG8oZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtmaWxlQ2VydGlmaWNhZG8sIHNldEZpbGVDZXJ0aWZpY2Fkb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvLCBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkb10gPVxyXG4gICAgdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCZWZvcmVVcGxvYWRDZXJ0aWZpY2FkbyA9IChmaWxlKSA9PiB7XHJcbiAgICAvLyA1IE1CID0gMTAyNCAqIDUgPSA1MTIwXHJcbiAgICBpZiAoZmlsZS5zaXplIC8gMTAwMCA+IDUxMikge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8oZmFsc2UpO1xyXG5cclxuICAgIGlmIChmaWxlQ2VydGlmaWNhZG8uZmluZEluZGV4KChlKSA9PiBlLm5hbWUgPT09IGZpbGUubmFtZSkgPj0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgcmd4QmFzZTY0ID0gUmVnRXhwKFxyXG4gICAgICAgIC9kYXRhOihhcHBsaWNhdGlvbnxpbWFnZSlcXC8oanBlZ3xqcGd8cG5nKik7YmFzZTY0LChbXlwiXSopL2dpbVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZ3ggPSByZ3hCYXNlNjQuZXhlYyhyZWFkZXIucmVzdWx0KTtcclxuXHJcbiAgICAgIGlmIChyZ3ggIT09IG51bGwpIHtcclxuICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW1xyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgbm9tYnJlQXJjaGl2bzogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgIGV4dGVuc2lvbjogcmd4WzJdLFxyXG4gICAgICAgICAgICAgIGJhc2U2NDogcmd4WzNdLFxyXG4gICAgICAgICAgICAgIGJ5dGVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICBdKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpbGVDbGlja0NlcnRpZmljYWRvID0gKCkgPT4ge1xyXG4gICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsYXlvdXQgPSB7XHJcbiAgICBsYWJlbENvbDogeyBzcGFuOiAyNCB9LFxyXG4gICAgd3JhcHBlckNvbDogeyBzcGFuOiAyNCB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgLi4udmFsdWVzLFxyXG4gICAgICBjb250ZW5pZG86IGNvbnRlbmlkb1VwZGF0ZSxcclxuICAgICAgaW1hZ2VuOiBmaWxlQ2VydGlmaWNhZG8sXHJcbiAgICAgIHR5cGU6IFwiZW1wcmVzYXNcIixcclxuICAgICAgcHJvY2VzbzogcHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyBcIkFDVFVBTElaQVJcIiA6IFwiQUdSRUdBUlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgdXBkYXRlTm90aWNpYXMgPSBkYXRhU291cmNlO1xyXG5cclxuICAgIGlmIChwcm9jZXNvQWN0dWFsID09PSBcIkFDVFVBTElaQVJcIikge1xyXG4gICAgICBzZXRTcGluTW9kYWwodHJ1ZSk7XHJcbiAgICAgIEFwaU5vdGljaWFzLnVwZGF0ZU5vdGljaWFzKHBheWxvYWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU5vdGljaWFzID0gZGF0YVNvdXJjZS5tYXAoKG5vdGljaWEpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobm90aWNpYS5pZCA9PT0gdmFsdWVzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZW5fID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5pbWFnZW5bMF0pIHtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VuXy5pbWFnZUJhc2U2NCA9IHBheWxvYWQuaW1hZ2VuWzBdWzBdLmJhc2U2NDtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VuXy5pbWFnZUV4dGVuc2lvbiA9IHBheWxvYWQuaW1hZ2VuWzBdWzBdLmV4dGVuc2lvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5ub3RpY2lhLFxyXG4gICAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgICAuLi5pbWFnZW5fLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5vdGljaWE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0YVNvdXJjZSh1cGRhdGVOb3RpY2lhcyk7XHJcbiAgICAgICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICBub3RpZmljYShcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2Nlc29BY3R1YWwgPT09IFwiQUdSRUdBUlwiKSB7XHJcbiAgICAgIHNldFNwaW5Nb2RhbCh0cnVlKTtcclxuICAgICAgQXBpTm90aWNpYXMuaW5zZXJ0Tm90aWNpYXMocGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgICAgICB1cGRhdGVOb3RpY2lhcyA9IFtcclxuICAgICAgICAgICAgICAuLi5kYXRhU291cmNlLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogcGF5bG9hZC5pbWFnZW5bMF1bMF0uYmFzZTY0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VFeHRlbnNpb246IHBheWxvYWQuaW1hZ2VuWzBdWzBdLmV4dGVuc2lvbixcclxuICAgICAgICAgICAgICAgIGtleTogdXVpZCxcclxuICAgICAgICAgICAgICAgIGlkOiByZXNwb25zZS5kYXRhLnJlc3VsdHMuaW5zZXJ0SWQsXHJcbiAgICAgICAgICAgICAgICBmZWNoYUNyZWFjaW9uOiBtb21lbnQoKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHNldERhdGFTb3VyY2UodXBkYXRlTm90aWNpYXMpO1xyXG4gICAgICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gICAgICAgICAgICBoYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vcm1GaWxlID0gKGUpID0+IHtcclxuICAgIGxldCBzdXBlcmFMaW1pdGUgPSBmYWxzZTtcclxuICAgIGlmIChlLmZpbGUuc2l6ZSAvIDEwMDAgPiA1MTIpIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8odHJ1ZSk7XHJcbiAgICAgIHN1cGVyYUxpbWl0ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyhmYWxzZSk7XHJcbiAgICAgIHN1cGVyYUxpbWl0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuZmlsZUxpc3QubGVuZ3RoID4gMSkge1xyXG4gICAgICBlLmZpbGVMaXN0LnNoaWZ0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3VwZXJhTGltaXRlKSB7XHJcbiAgICAgIGUuZmlsZUxpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZSAmJiBlLmZpbGVMaXN0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFncmVnYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRQcm9jZXNvQWN0dWFsKFwiQUdSRUdBUlwiKTtcclxuXHJcbiAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICBzZXRDb250ZW5pZG9VcGRhdGUoXCJcIik7XHJcbiAgICBzZXRJbWFnZVNyYyhcIlwiKTtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9rID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0ID0gKGlkVXBkYXRlKSA9PiB7XHJcbiAgICBzZXRQcm9jZXNvQWN0dWFsKFwiQUNUVUFMSVpBUlwiKTtcclxuICAgIGNvbnN0IG5vdGljaWFVcGRhdGUgPSBkYXRhU291cmNlLmZpbmQoKG5vdGljaWEpID0+IG5vdGljaWEuaWQgPT09IGlkVXBkYXRlKTtcclxuXHJcbiAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcblxyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIGlkOiBub3RpY2lhVXBkYXRlLmlkLFxyXG4gICAgICBsZW5ndWFqZTogbm90aWNpYVVwZGF0ZS5sZW5ndWFqZSxcclxuICAgICAgdGl0dWxvOiBub3RpY2lhVXBkYXRlLnRpdHVsbyxcclxuICAgICAgbWFyY2FyUHJpbmNpcGFsOiBub3RpY2lhVXBkYXRlLm1hcmNhclByaW5jaXBhbCxcclxuICAgICAgdmlzdWFsaXphY2lvbkhvbWU6IG5vdGljaWFVcGRhdGUudmlzdWFsaXphY2lvbkhvbWUsXHJcbiAgICAgIHN1bW1hcnk6IG5vdGljaWFVcGRhdGUuc3VtbWFyeSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldENvbnRlbmlkb1VwZGF0ZShub3RpY2lhVXBkYXRlLmNvbnRlbmlkbyk7XHJcblxyXG4gICAgaWYgKG5vdGljaWFVcGRhdGUuaW1hZ2VCYXNlNjQgIT09IFwiXCIpIHtcclxuICAgICAgc2V0SW1hZ2VTcmMoXHJcbiAgICAgICAgYGRhdGE6aW1hZ2UvJHtub3RpY2lhVXBkYXRlLmltYWdlRXh0ZW5zaW9ufTtiYXNlNjQsJHtub3RpY2lhVXBkYXRlLmltYWdlQmFzZTY0fWBcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEltYWdlU3JjKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0U3Bpbkxpc3RhZG8odHJ1ZSk7XHJcbiAgICBBcGlOb3RpY2lhcy5kZXRldGVOb3RpY2lhcyh7IGlkIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgIHNldERhdGFTb3VyY2UoZGF0YVNvdXJjZS5maWx0ZXIoKG5vdGljaWEpID0+IG5vdGljaWEuaWQgIT09IGlkKSk7XHJcbiAgICAgICAgICBub3RpZmljYShcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNwaW5MaXN0YWRvKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgc2V0U3Bpbkxpc3RhZG8oZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93UG9wY29uZmlybSA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtzdHlsZXNDc3N9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVBZ3JlZ2FyfT5cclxuICAgICAgICBBZ3JlZ2FyXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxTcGluIHNwaW5uaW5nPXtzcGluTGlzdGFkb30+XHJcbiAgICAgICAgPFRhYmxlIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IHBhZ2luYXRpb249e2ZhbHNlfT5cclxuICAgICAgICAgIHsvKiA8Q29sdW1uIHRpdGxlPVwiaWRcIiBkYXRhSW5kZXg9XCJpZFwiIGtleT1cImlkXCIgLz4gKi99XHJcbiAgICAgICAgICA8Q29sdW1uIHRpdGxlPVwiTm9tYnJlXCIgZGF0YUluZGV4PVwidGl0dWxvXCIga2V5PVwidGl0dWxvXCIgLz5cclxuICAgICAgICAgIDxDb2x1bW4gdGl0bGU9XCJMZW5ndWFqZVwiIGRhdGFJbmRleD1cImxlbmd1YWplXCIga2V5PVwibGVuZ3VhamVcIiAvPlxyXG4gICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICB0aXRsZT1cIkZlY2hhIGRlIENyZWFjacOzblwiXHJcbiAgICAgICAgICAgIGRhdGFJbmRleD1cImZlY2hhQ3JlYWNpb25cIlxyXG4gICAgICAgICAgICBrZXk9XCJmZWNoYUNyZWFjaW9uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiT3BjaW9uZXNcIlxyXG4gICAgICAgICAgICBrZXk9XCJvcGNpb25lc1wiXHJcbiAgICAgICAgICAgIHJlbmRlcj17KHRleHQsIHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxTcGFjZSBzaXplPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8RWRpdFR3b1RvbmVcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUVkaXQocmVjb3JkLmlkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIsK/U2VndXJvIGRlIGVsaW1pbmFyIGVzdGUgY29udGVuaWRv77yfXCJcclxuICAgICAgICAgICAgICAgICAgb2tUZXh0PVwiU2lcIlxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUocmVjb3JkLmlkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb2tCdXR0b25Qcm9wcz17eyBsb2FkaW5nOiBjb25maXJtTG9hZGluZyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8RGVsZXRlVHdvVG9uZSBvbkNsaWNrPXtzaG93UG9wY29uZmlybX0gLz5cclxuICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdG9zXHJcbiAgICAgICAgICAgICAgICAgIGVtcHJlc2FJZD17cmVjb3JkLmlkfVxyXG4gICAgICAgICAgICAgICAgICBlbXByZXNhTm9tYnJlPXtyZWNvcmQudGl0dWxvfVxyXG4gICAgICAgICAgICAgICAgICBlbXByZXNhTGVuZ3VhamU9e3JlY29yZC5sZW5ndWFqZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ0blByZW1pb3NcclxuICAgICAgICAgICAgICAgICAgZW1wcmVzYUlkPXtyZWNvcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGVtcHJlc2FOb21icmU9e3JlY29yZC50aXR1bG99XHJcbiAgICAgICAgICAgICAgICAgIGVtcHJlc2FMZW5ndWFqZT17cmVjb3JkLmxlbmd1YWplfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICA8L1NwaW4+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICBwcm9jZXNvQWN0dWFsID09PSBcIkFDVFVBTElaQVJcIiA/IChcclxuICAgICAgICAgICAgPHNwYW4+QWN0dWFsaXphciBFbXByZXNhPC9zcGFuPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBOdWV2YSBFbXByZXNhPC9zcGFuPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgY2VudGVyZWRcclxuICAgICAgPlxyXG4gICAgICAgIDxTcGluIHNwaW5uaW5nPXtzcGluTW9kYWx9IGRlbGF5PXs1MDB9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm0gey4uLmxheW91dH0gb25GaW5pc2g9e29uRmluaXNofSBmb3JtPXtmb3JtfT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJpZFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsoNDAsIDQwKX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5MZW5ndWFqZTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGVuZ3VhamVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIGxlbmd1YWplXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVzXCI+RXNwYcOxb2w8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVuXCI+SW5nbMOpczwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5Ob21icmU8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdHVsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCB0aXR1bG9cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtaW46IDEwLCBtZXNzYWdlOiBcIk3DrW5pbW8gMTAgY2FyYWN0ZXJlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBtYXhMZW5ndGg9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5SZXN1bWVuPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdW1tYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIHJlc3VtZW5cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtaW46IDEwMCwgbWVzc2FnZTogXCJNw61uaW1vIDEwMCBjYXJhY3RlcmVzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG1heExlbmd0aD17NTAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPkltYWdlbjwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lPVwiZmlsZUxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGdldFZhbHVlRnJvbUV2ZW50PXtub3JtRmlsZX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW3DoWdlbmVzIGpwZyBvIHBuZyBkZSA8c3Ryb25nPjQwMHB4IHggNDAwcHg8L3N0cm9uZz4gKG5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyaW9yIGEgNTAwIEtCKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogaW1hZ2VTcmMgIT09IFwiXCIgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWRqdW50ZSB1biBpbWFnZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8VXBsb2FkIG5hbWU9XCJsb2dvXCIgYWN0aW9uPVwiL3VwbG9hZC5kb1wiIGxpc3RUeXBlPVwicGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9VcGxvYWQ+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZUNlcnRpZmljYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVVcGxvYWQ9eyhmaWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCZWZvcmVVcGxvYWRDZXJ0aWZpY2FkbyhmaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e2hhbmRsZVJlbW92ZUZpbGVDbGlja0NlcnRpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZUxpc3Q9e2ZpbGVDZXJ0aWZpY2Fkb31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZmlsaWFjaW9uLWRhdG9zLXBlcnNvbmFsZXNfX3NpemUtbWVzc2FnZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbCBhcmNoaXZvIG5vIGRlYmUgcGVzYXIgbcOhcyBkZSA1MDAgS0IuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZVNyYyAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9kZXI6IFwiMXB4IHNvbGlkICNEOUQ5RDlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTUlBQUFERENBWUFBQURRdmM2VUFBQUJSV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFLSkZqWUdBU1NTd295R0ZoWUdESXpTc3BDbkozVW9pSWpGSmdmOExBd1NEQ0lNb2d3TUNjbUZ4YzRCZ1E0QU5Vd2dDalVjRzNhd3lNSVBxeUxzaXM3UFBPcTNRZERGY3ZqVjNqT0QxYm9RVlRQUXJnU2trdFRnYlNmNEE0TGJtZ3FJU0JnVEVGeUZZdUx5a0FzVHVBYkpFaW9LT0E3RGtnZGpxRXZRSEVUb0t3ajREVmhBUTVBOWszZ0d5QjVJeEVvQm1NTDRCc25TUWs4WFFrTnRSZUVPQnhjZlh4VVFnMU1qYzBkeUhnWE5KQlNXcEZDWWgyemkrb0xNcE16eWhSY0FTR1VxcUNaMTZ5bm82Q2tZR1JBUU1ES013aHFqL2ZBSWNsb3hnSFFxeEFqSUhCRXVndzVzVUlzU1FwQm9idFFQZExjaUxFVkpZek1QQkhNREJzYXloSUxFcUVPNER4RzB0eG1yRVJoTTI5bllHQmRkci8vNS9ER1JqWU5Sa1kvbDcvLy8vMzl2Ly8veTREbW4rTGdlSEFOd0Rya2wxQXVPK3BtZ0FBQURobFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBcUFDQUFRQUFBQUJBQUFBd3FBREFBUUFBQUFCQUFBQXd3QUFBQUQ5Yi9IbkFBQUhsa2xFUVZSNEFlM2RQM1BUV0JTR2NiR3pNNkdDS3FsSUJSVjBkSFJKRmFyUTBlVVQ4TEg0Qm5SVTBOSFIwVUVGVmRJbEZSVjdUelJrc29tUFk4dXlrVGsvemV3UWZLdy85em52NHl2SnluTHY0dUxpVjJkQm9EaUJmNHFQMy9BUnVDUkFCRUZBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2cwQWo4aTBKTzRPenNyUHY2OVd2K2hpMnFQSHIwcU52ZjM5K2lJOTdzb1JJaDRmM3o1OC91N2R1M1NYWDdYdDdaMmVuZXZIbXpmUWUrb1NOMmFwU0FQajA5VFNyYitYS0kvZjM3OSswOCtBMGNOUkUyQU5rdXBrK0FDTlB2a1NQY0FBRWliQUN5WFV5ZkFCR20zeU5IdUFFQ1JOZ0FaTHVZUGdFaXJLbEh1N3U3WGR5eXRHd0hBZDhqak55bmc0T0Q3dm56NTFkYlBUOC83ejU4K05COSsvYnQ2alUvVEkrQUdXSEVucng0OGVKL0VzU21Ieng0MEwxOCtmTHl6eEYzWlZNakV5RENpRURqTVlaWlM1d2lQWG55WkZiSmF4TWhRSVFSR3pIdldSN1hDeU9DWHNPbWlEQWkxSG1QTU1RakRwYnBFaURDaUwzNThlTkh1clcvNVNuV2RJQmJYaURDaUEzOC9QbnpyY2UyWXlaNC8vNTlGM2VQTE5NbDRQYnBpTDJKMEw5NzkrN3lEdEhEaHc4dnR6enZkR25FWGR2VWlnU0lzQ0xBV2F2SHAvK3FNMEJjWE1kL3EyNW4xdkY1N1RZQnAwYTNtVXppbGVQajQrN2s1S1NMYjZndDZ5ZEFoUFV6WG5vUFIwZEhsNzlXR1ROQ2ZCbm4xdXZTQ0pkZWdRaExJMXZ2Q2srZlB1MmVQWHQydFpPWUVWNi9mbjMxZHorc2h3QVIxc1AxY3F2TG50YkVOOU14QTl4Y1lqc3hTMWpXUjRBSWEySWJ6eDB0YzQ0ZllYLzE2bFY2TkRGTFhIK1lMMzJqd2lBQ1JCaUViZjVLY1hvVElzUVNwelh4NE4yOEphNEJRb0s3cmdYaXlkYkhqeC9QMjVUYVFBSkVHQWd1V3kwKzJROFBENi9LaTRSOEVWbCtiekJPblpZOTVmcTlyajl6QWtUSTJTeGRpZEJIcUc5K3NrZHc0M2JvckNYTy9aY0pkcmFQV2R2MjJ1SUVpTEE0cTdudnZDdWc4V1RxelF2ZU9IMjZmb2RvN2c2dUZlL2ExN1czK25GQkFrUllFTlJkYjF2a2t6MUNIOWNQc1Z5L2pyaHIyN1BxTVl2RU5ZTmxIQUllc1JpQll3UnkwVis4aVhQOCsvZnZYMTFNcjdMN0VDdWViL3I0OGVNcW03RnVJMkJHV0RFRzhjbSs3RzNORU9mbWRjVFF3NGg5LzU1bGhtN0Rla1JZS1FQWkYyQXJiWFRBeXU0a0RZQjJZeFV6d2cwZ2kvNDF6dEhuZlFHMjZIYkdlbC9jclZybTd0TlkrLzFidGtPRUFaMk0wNXI0RkI3cjlHYkFJZHhhWllySGRPc2dKL3dDRVFZMEo3NFRtT0tuYnh4VDluM0ZnR0dXV3NWZG93SHRqdDlObnZmN3lRTTJhWlUvVElBSUF4cnc2ZE9uQVd0Wlpjb0VuQnBOdVR1T2JXTUVpTEF4MUhZMFpRSkVtSEozSE52R0NCQmhZNmp0YU1vRWlKQjBaMjl2TDZsczU4dnhQY084L3pmcmRvNXF2S08rZDNGeDhXdTh6ZjFkVzRwL2NQekxseS9kdHY5VHMvRWJjdkdBSGhIeWZCSWhaNk5TaUlCVG8wTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQy93R2dLS0M0WU1BNFRBQUFBQUJKUlU1RXJrSmdnZz09XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz7Cv0Rlc2VhIHZpc3VhbGl6YWNpw7NuIGVuIGVsIEhvbWU/PC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxpemFjaW9uSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5ncmVzZSB2aXN1YWxpemFjacOzbiBlbiBlbCBIb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlNcIj5TaTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiTlwiPk5vPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFyY2FyUHJpbmNpcGFsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7Cv0Rlc2VhIG1hcmNhciBjb21vIHByaW5jaXBhbD88L3N0cm9uZz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTaSBzZWxlY2Npb25hICdTaScgc2UgYWdyZWdhcsOhIGNvbW8gbm90aWNpYXMgcHJpbmNpcGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW4gZWwgaG9tZSAoZWwgY3VhZHJvIGdyYW5kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2VsZWNjaW9uZSBzaSBvIG5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJTXCI+U2k8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiTlwiPk5vPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJtYXJjYXJQcmluY2lwYWxcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29udGVuaWRvOjwvc3Ryb25nPiAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2NvbnRlbmlkb1VwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXt7IHNldENvbnRlbmlkb1VwZGF0ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2FuY2VsfT5Wb2x2ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWN0dWFsaXphcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWdyZWdhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NwaW4+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWNpYXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=