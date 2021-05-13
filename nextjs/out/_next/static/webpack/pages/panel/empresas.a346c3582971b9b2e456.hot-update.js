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
    if (file.size / 1000 > 256) {
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
      image_extension: values.imagen ? "" : null,
      image_base64: values.imagen ? JSON.stringify(values.imagen) : null,
      type: "premios"
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
      lineNumber: 236,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
      title: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Actualizar producto de ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Agregar nuevo producto para ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 247,
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
                lineNumber: 271,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
              name: "empresa_id",
              hidden: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
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
                    lineNumber: 279,
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
                      lineNumber: 284,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option, {
                      value: "en",
                      children: "Ingl\xE9s"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 285,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Nombre"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
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
                    lineNumber: 299,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Imagen"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 318,
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
                      lineNumber: 324,
                      columnNumber: 47
                    }, _this), " (no superior a 200 KB)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
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
                        lineNumber: 352,
                        columnNumber: 37
                      }, _this),
                      children: "Click para adjuntar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 352,
                      columnNumber: 23
                    }, _this), showSizeMessageCertificado && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                      className: "afiliacion-datos-personales__size-message ",
                      style: {
                        color: "red"
                      },
                      children: "El archivo no debe pesar m\xE1s de 200 KB."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 357,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 317,
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
                    lineNumber: 373,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 367,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 399,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                  children: "Contenido:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 429,
                  columnNumber: 19
                }, _this), " \xA0\xA0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 428,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 432,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Editor, {
                  data: contenidoUpdate,
                  actions: {
                    setContenidoUpdate: setContenidoUpdate
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 433,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 431,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                style: {
                  textAlign: "center"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 439,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 440,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  onClick: handleCancel,
                  children: "Volver"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 441,
                  columnNumber: 19
                }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  type: "primary",
                  htmlType: "submit",
                  children: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Actualizar producto"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 445,
                    columnNumber: 23
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Agregar producto"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 447,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 443,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 438,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 15
            }, _this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
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
                    message: "Adjunte un imagen"
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
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                  children: "Contenido:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 412,
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
                  lineNumber: 415,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Editor, {
                  data: contenidoUpdate,
                  actions: {
                    setContenidoUpdate: setContenidoUpdate
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 416,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 414,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                style: {
                  textAlign: "center"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 422,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 423,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  onClick: handleCancel,
                  children: "Volver"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 424,
                  columnNumber: 19
                }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  type: "primary",
                  htmlType: "submit",
                  children: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Actualizar premio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 428,
                    columnNumber: 23
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Agregar premio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 430,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 426,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 421,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9CdG5QcmVtaW9zL0J0bkFjdHVhbGl6YXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFuZWwvRW1wcmVzYXMvQnRuUHJlbWlvcy9CdG5BZ3JlZ2FyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJCdG5BY3R1YWxpemFyIiwicHJvcHMiLCJlbXByZXNhSWQiLCJlbXByZXNhTm9tYnJlIiwiZW1wcmVzYUxlbmd1YWplIiwiZGF0YVByb2R1Y3RvcyIsInNldERhdGFQcm9kdWN0b3MiLCJpZFVwZGF0ZSIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVN0YXRlIiwicHJvY2Vzb0FjdHVhbCIsInNldFByb2Nlc29BY3R1YWwiLCJpc01vZGFsVmlzaWJsZSIsInNldElzTW9kYWxWaXNpYmxlIiwic3Bpbk1vZGFsIiwic2V0U3Bpbk1vZGFsIiwiZmlsZUNlcnRpZmljYWRvIiwic2V0RmlsZUNlcnRpZmljYWRvIiwic2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8iLCJzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyIsImltYWdlU3JjIiwic2V0SW1hZ2VTcmMiLCJjb250ZW5pZG9VcGRhdGUiLCJzZXRDb250ZW5pZG9VcGRhdGUiLCJ1c2VFZmZlY3QiLCJwcm9kdWN0byIsImZpbmQiLCJpZCIsInNldEZpZWxkc1ZhbHVlIiwibGFuZ3VhZ2UiLCJsZW5ndWFqZSIsIm5hbWUiLCJ0aXR1bG8iLCJjb250ZW5pZG8iLCJpbWFnZUJhc2U2NCIsImltYWdlRXh0ZW5zaW9uIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlQmVmb3JlVXBsb2FkQ2VydGlmaWNhZG8iLCJmaWxlIiwic2l6ZSIsImZpbmRJbmRleCIsImUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZGVuZCIsInJneEJhc2U2NCIsIlJlZ0V4cCIsInJneCIsImV4ZWMiLCJyZXN1bHQiLCJub21icmVBcmNoaXZvIiwiZXh0ZW5zaW9uIiwiYmFzZTY0IiwiYnl0ZXMiLCJoYW5kbGVSZW1vdmVGaWxlQ2xpY2tDZXJ0aWZpY2FkbyIsIm5vcm1GaWxlIiwic3VwZXJhTGltaXRlIiwiZmlsZUxpc3QiLCJwb3AiLCJBcnJheSIsImlzQXJyYXkiLCJsYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJwYXlsb2FkIiwiY29udGVudF9odG1sIiwiaW1hZ2VfZXh0ZW5zaW9uIiwiaW1hZ2VuIiwiaW1hZ2VfYmFzZTY0IiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJ1cGRhdGVOb3RpY2lhcyIsIkFwaVByb2R1Y3RvcyIsInVwZGF0ZVByb2R1Y3RvIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvZGlnbyIsIm1hcCIsIm5vdGljaWEiLCJpbWFnZW5fIiwibm90aWZpY2EiLCJlcnJvciIsImluc2VydFByb2R1Y3RvIiwidXVpZCIsInV1aWR2NCIsImtleSIsImZlY2hhQ3JlYWNpb24iLCJtb21lbnQiLCJmb3JtYXQiLCJlbXByZXNhX2lkIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWluIiwiY29sb3IiLCJib2RlciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJCdG5BZ3JlZ2FyIiwicmVzZXRGaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFDcEIsY0FBTTtBQUNKLFNBQU8sMElBQVA7QUFDRCxDQUhtQixFQUlwQjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FGZ0IsMkRBRWhCO0FBQUE7QUFBQSxjQUZnQixjQUVoQjtBQUFBO0FBQUEsQ0FKb0IsQ0FBdEI7TUFBTUYsTTs7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QUFLLEVBQUU7QUFBRStFLDJCQUFTLEVBQUU7QUFBYixpQkFBcEI7QUFBQSx3Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQUdFLHNFQUFDLDJDQUFEO0FBQVEseUJBQU8sRUFBRWxFLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGLEVBSUcsSUFKSCxlQUtFLHNFQUFDLDJDQUFEO0FBQVEsc0JBQUksRUFBQyxTQUFiO0FBQXVCLDBCQUFRLEVBQUMsUUFBaEM7QUFBQSw0QkFDRzFCLGFBQWEsS0FBSyxZQUFsQixnQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERCxnQkFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWxLRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUEsa0JBREY7QUFtT0QsQ0E5WkQ7O0dBQU02RixVO1VBU1dqRyx5Q0FBSSxDQUFDQyxPOzs7TUFUaEJnRyxVO0FBZ2FTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYW5lbC9lbXByZXNhcy5hMzQ2YzM1ODI5NzFiOWIyZTQ1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIFNwaW4sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFNlbGVjdCxcclxuICBVcGxvYWQsXHJcbiAgSW1hZ2UsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQsIEVkaXRUd29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IEFwaVByb2R1Y3RvcyBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IG5vdGlmaWNhIGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlscy9ub3RpZmljYVwiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAoKSA9PiB7XHJcbiAgICByZXR1cm4gaW1wb3J0KFwiLi4vLi4vRWRpdG9yXCIpO1xyXG4gIH0sXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuXHJcbmNvbnN0IEJ0bkFjdHVhbGl6YXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBlbXByZXNhSWQsXHJcbiAgICBlbXByZXNhTm9tYnJlLFxyXG4gICAgZW1wcmVzYUxlbmd1YWplLFxyXG4gICAgZGF0YVByb2R1Y3RvcyxcclxuICAgIHNldERhdGFQcm9kdWN0b3MsXHJcbiAgICBpZFVwZGF0ZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cclxuICBjb25zdCBbcHJvY2Vzb0FjdHVhbCwgc2V0UHJvY2Vzb0FjdHVhbF0gPSB1c2VTdGF0ZShcIkFDVFVBTElaQVJcIik7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlLCBzZXRJc01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NwaW5Nb2RhbCwgc2V0U3Bpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmlsZUNlcnRpZmljYWRvLCBzZXRGaWxlQ2VydGlmaWNhZG9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbywgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG9dID1cclxuICAgIHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250ZW5pZG9VcGRhdGUsIHNldENvbnRlbmlkb1VwZGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgIC8vIHNldENvbnRlbmlkb1VwZGF0ZShcIlwiKTtcclxuICAgIC8vIHNldEltYWdlU3JjKFwiXCIpO1xyXG4gICAgLy8gc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdG8gPSBkYXRhUHJvZHVjdG9zLmZpbmQoKHByb2R1Y3RvKSA9PiBwcm9kdWN0by5pZCA9PT0gaWRVcGRhdGUpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIGlkOiBwcm9kdWN0by5pZCxcclxuICAgICAgbGFuZ3VhZ2U6IHByb2R1Y3RvLmxlbmd1YWplLFxyXG4gICAgICBuYW1lOiBwcm9kdWN0by50aXR1bG8sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRDb250ZW5pZG9VcGRhdGUocHJvZHVjdG8uY29udGVuaWRvKTtcclxuXHJcbiAgICBpZiAocHJvZHVjdG8uaW1hZ2VCYXNlNjQgIT09IFwiXCIpIHtcclxuICAgICAgc2V0SW1hZ2VTcmMoXHJcbiAgICAgICAgYGRhdGE6aW1hZ2UvJHtwcm9kdWN0by5pbWFnZUV4dGVuc2lvbn07YmFzZTY0LCR7cHJvZHVjdG8uaW1hZ2VCYXNlNjR9YFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SW1hZ2VTcmMoXCJcIik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmVmb3JlVXBsb2FkQ2VydGlmaWNhZG8gPSAoZmlsZSkgPT4ge1xyXG4gICAgLy8gNSBNQiA9IDEwMjQgKiA1ID0gNTEyMFxyXG4gICAgaWYgKGZpbGUuc2l6ZSAvIDEwMDAgPiAyNTYpIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8odHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZmlsZUNlcnRpZmljYWRvLmZpbmRJbmRleCgoZSkgPT4gZS5uYW1lID09PSBmaWxlLm5hbWUpID49IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJneEJhc2U2NCA9IFJlZ0V4cChcclxuICAgICAgICAvZGF0YTooYXBwbGljYXRpb258aW1hZ2UpXFwvKGpwZWd8anBnfHBuZyopO2Jhc2U2NCwoW15cIl0qKS9naW1cclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgcmd4ID0gcmd4QmFzZTY0LmV4ZWMocmVhZGVyLnJlc3VsdCk7XHJcblxyXG4gICAgICBpZiAocmd4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC4uLmZpbGUsXHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgIG5vbWJyZUFyY2hpdm86IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICBleHRlbnNpb246IHJneFsyXSxcclxuICAgICAgICAgICAgICBiYXNlNjQ6IHJneFszXSxcclxuICAgICAgICAgICAgICBieXRlczogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWxlQ2xpY2tDZXJ0aWZpY2FkbyA9ICgpID0+IHtcclxuICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9ybUZpbGUgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHN1cGVyYUxpbWl0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKGUuZmlsZS5zaXplIC8gMTAwMCA+IDI1Nikge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbyh0cnVlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gdHJ1ZTtcclxuICAgICAgZS5maWxlTGlzdC5wb3AoKTtcclxuICAgICAgcmV0dXJuIGUgJiYgZS5maWxlTGlzdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKGZhbHNlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoZS5maWxlTGlzdC5sZW5ndGggPiAxKSB7XHJcbiAgICAvLyAgIGUuZmlsZUxpc3Quc2hpZnQoKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChzdXBlcmFMaW1pdGUpIHtcclxuICAgIC8vICAgZS5maWxlTGlzdCA9IFtdO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiBlICYmIGUuZmlsZUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgbGFiZWxDb2w6IHsgc3BhbjogMjQgfSxcclxuICAgIHdyYXBwZXJDb2w6IHsgc3BhbjogMjQgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgY29udGVudF9odG1sOiBjb250ZW5pZG9VcGRhdGUsXHJcbiAgICAgIGltYWdlX2V4dGVuc2lvbjogdmFsdWVzLmltYWdlbiA/IFwiXCIgOiBudWxsLFxyXG4gICAgICBpbWFnZV9iYXNlNjQ6IHZhbHVlcy5pbWFnZW4gPyBKU09OLnN0cmluZ2lmeSh2YWx1ZXMuaW1hZ2VuKSA6IG51bGwsXHJcbiAgICAgIHR5cGU6IFwicHJlbWlvc1wiLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgdXBkYXRlTm90aWNpYXMgPSBkYXRhUHJvZHVjdG9zO1xyXG5cclxuICAgIGlmIChwcm9jZXNvQWN0dWFsID09PSBcIkFDVFVBTElaQVJcIikge1xyXG4gICAgICBzZXRTcGluTW9kYWwodHJ1ZSk7XHJcbiAgICAgIEFwaVByb2R1Y3Rvcy51cGRhdGVQcm9kdWN0byhwYXlsb2FkKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICB1cGRhdGVOb3RpY2lhcyA9IGRhdGFQcm9kdWN0b3MubWFwKChub3RpY2lhKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5vdGljaWEuaWQgPT09IHZhbHVlcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VuXyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChmaWxlQ2VydGlmaWNhZG9bMF0pIHtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VuXy5pbWFnZUJhc2U2NCA9IGZpbGVDZXJ0aWZpY2Fkb1swXVswXS5iYXNlNjQ7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlbl8uaW1hZ2VFeHRlbnNpb24gPSBmaWxlQ2VydGlmaWNhZG9bMF1bMF0uZXh0ZW5zaW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm5vdGljaWEsXHJcbiAgICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICAgIC4uLmltYWdlbl8sXHJcbiAgICAgICAgICAgICAgICAgIHRpdHVsbzogcGF5bG9hZC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICBsZW5ndWFqZTogcGF5bG9hZC5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBub3RpY2lhO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldERhdGFQcm9kdWN0b3ModXBkYXRlTm90aWNpYXMpO1xyXG4gICAgICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gICAgICAgICAgICBoYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9jZXNvQWN0dWFsID09PSBcIkFHUkVHQVJcIikge1xyXG4gICAgICBzZXRTcGluTW9kYWwodHJ1ZSk7XHJcbiAgICAgIEFwaVByb2R1Y3Rvcy5pbnNlcnRQcm9kdWN0byhwYXlsb2FkKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZU5vdGljaWFzID0gW1xyXG4gICAgICAgICAgICAgIC4uLmRhdGFQcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIHRpdHVsbzogcGF5bG9hZC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgbGVuZ3VhamU6IHBheWxvYWQubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogcGF5bG9hZC5pbWFnZV9iYXNlNjQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUV4dGVuc2lvbjogcGF5bG9hZC5pbWFnZV9leHRlbnNpb24sXHJcbiAgICAgICAgICAgICAgICBrZXk6IHV1aWQsXHJcbiAgICAgICAgICAgICAgICBpZDogdXVpZCxcclxuICAgICAgICAgICAgICAgIGZlY2hhQ3JlYWNpb246IG1vbWVudCgpLmZvcm1hdChcIkRELU1NLVlZWVlcIiksXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcyh1cGRhdGVOb3RpY2lhcyk7XHJcbiAgICAgICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICBub3RpZmljYShcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxFZGl0VHdvVG9uZVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICBwcm9jZXNvQWN0dWFsID09PSBcIkFDVFVBTElaQVJcIiA/IChcclxuICAgICAgICAgICAgPHNwYW4+QWN0dWFsaXphciBwcm9kdWN0byBkZSB7ZW1wcmVzYU5vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3Bhbj5BZ3JlZ2FyIG51ZXZvIHByb2R1Y3RvIHBhcmEge2VtcHJlc2FOb21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAvLyBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgZm9vdGVyPXtmYWxzZX1cclxuICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICBjZW50ZXJlZFxyXG4gICAgICA+XHJcbiAgICAgICAgPFNwaW4gc3Bpbm5pbmc9e3NwaW5Nb2RhbH0gZGVsYXk9ezUwMH0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgIHsuLi5sYXlvdXR9XHJcbiAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IGVtcHJlc2FMZW5ndWFqZSxcclxuICAgICAgICAgICAgICAgIGVtcHJlc2FfaWQ6IGVtcHJlc2FJZCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiaWRcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJlbXByZXNhX2lkXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9eyg0MCwgNDApfT5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPkxlbmd1YWplPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgbGVuZ3VhamVcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCIgYWxsb3dDbGVhciBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZXNcIj5Fc3Bhw7FvbDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZW5cIj5Jbmdsw6lzPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPk5vbWJyZTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCBub21icmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtaW46IDEwLCBtZXNzYWdlOiBcIk3DrW5pbW8gMTAgY2FyYWN0ZXJlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBtYXhMZW5ndGg9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+UmVzdW1lbjwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCByZXN1bWVuXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWluOiAxMDAsIG1lc3NhZ2U6IFwiTcOtbmltbyAxMDAgY2FyYWN0ZXJlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBtYXhMZW5ndGg9ezUwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICovfVxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+SW1hZ2VuPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJmaWxlTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tRXZlbnQ9e25vcm1GaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbcOhZ2VuZXMganBnIG8gcG5nIGRlIDxzdHJvbmc+MjAwIHggMjAwIHB4IDwvc3Ryb25nPiAobm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXJpb3IgYSAyMDAgS0IpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBpbWFnZVNyYyAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBZGp1bnRlIHVuIGltYWdlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxVcGxvYWQgbmFtZT1cImxvZ29cIiBhY3Rpb249XCIvdXBsb2FkLmRvXCIgbGlzdFR5cGU9XCJwaWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1VwbG9hZD4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlQ2VydGlmaWNhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dVcGxvYWRMaXN0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17KGZpbGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvKGZpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17aGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTGlzdD17ZmlsZUNlcnRpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3Nob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFmaWxpYWNpb24tZGF0b3MtcGVyc29uYWxlc19fc2l6ZS1tZXNzYWdlIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVsIGFyY2hpdm8gbm8gZGViZSBwZXNhciBtw6FzIGRlIDIwMCBLQi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlU3JjICE9PSBcIlwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2RlcjogXCIxcHggc29saWQgI0Q5RDlEOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTUlBQUFERENBWUFBQURRdmM2VUFBQUJSV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFLSkZqWUdBU1NTd295R0ZoWUdESXpTc3BDbkozVW9pSWpGSmdmOExBd1NEQ0lNb2d3TUNjbUZ4YzRCZ1E0QU5Vd2dDalVjRzNhd3lNSVBxeUxzaXM3UFBPcTNRZERGY3ZqVjNqT0QxYm9RVlRQUXJnU2trdFRnYlNmNEE0TGJtZ3FJU0JnVEVGeUZZdUx5a0FzVHVBYkpFaW9LT0E3RGtnZGpxRXZRSEVUb0t3ajREVmhBUTVBOWszZ0d5QjVJeEVvQm1NTDRCc25TUWs4WFFrTnRSZUVPQnhjZlh4VVFnMU1qYzBkeUhnWE5KQlNXcEZDWWgyemkrb0xNcE16eWhSY0FTR1VxcUNaMTZ5bm82Q2tZR1JBUU1ES013aHFqL2ZBSWNsb3hnSFFxeEFqSUhCRXVndzVzVUlzU1FwQm9idFFQZExjaUxFVkpZek1QQkhNREJzYXloSUxFcUVPNER4RzB0eG1yRVJoTTI5bllHQmRkci8vNS9ER1JqWU5Sa1kvbDcvLy8vMzl2Ly8veTREbW4rTGdlSEFOd0Rya2wxQXVPK3BtZ0FBQURobFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBcUFDQUFRQUFBQUJBQUFBd3FBREFBUUFBQUFCQUFBQXd3QUFBQUQ5Yi9IbkFBQUhsa2xFUVZSNEFlM2RQM1BUV0JTR2NiR3pNNkdDS3FsSUJSVjBkSFJKRmFyUTBlVVQ4TEg0Qm5SVTBOSFIwVUVGVmRJbEZSVjdUelJrc29tUFk4dXlrVGsvemV3UWZLdy85em52NHl2SnluTHY0dUxpVjJkQm9EaUJmNHFQMy9BUnVDUkFCRUZBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2cwQWo4aTBKTzRPenNyUHY2OVd2K2hpMnFQSHIwcU52ZjM5K2lJOTdzb1JJaDRmM3o1OC91N2R1M1NYWDdYdDdaMmVuZXZIbXpmUWUrb1NOMmFwU0FQajA5VFNyYitYS0kvZjM3OSswOCtBMGNOUkUyQU5rdXBrK0FDTlB2a1NQY0FBRWliQUN5WFV5ZkFCR20zeU5IdUFFQ1JOZ0FaTHVZUGdFaXJLbEh1N3U3WGR5eXRHd0hBZDhqak55bmc0T0Q3dm56NTFkYlBUOC83ejU4K05COSsvYnQ2alUvVEkrQUdXSEVucng0OGVKL0VzU21Ieng0MEwxOCtmTHl6eEYzWlZNakV5RENpRURqTVlaWlM1d2lQWG55WkZiSmF4TWhRSVFSR3pIdldSN1hDeU9DWHNPbWlEQWkxSG1QTU1RakRwYnBFaURDaUwzNThlTkh1clcvNVNuV2RJQmJYaURDaUEzOC9QbnpyY2UyWXlaNC8vNTlGM2VQTE5NbDRQYnBpTDJKMEw5NzkrN3lEdEhEaHc4dnR6enZkR25FWGR2VWlnU0lzQ0xBV2F2SHAvK3FNMEJjWE1kL3EyNW4xdkY1N1RZQnAwYTNtVXppbGVQajQrN2s1S1NMYjZndDZ5ZEFoUFV6WG5vUFIwZEhsNzlXR1ROQ2ZCbm4xdXZTQ0pkZWdRaExJMXZ2Q2srZlB1MmVQWHQydFpPWUVWNi9mbjMxZHorc2h3QVIxc1AxY3F2TG50YkVOOU14QTl4Y1lqc3hTMWpXUjRBSWEySWJ6eDB0YzQ0ZllYLzE2bFY2TkRGTFhIK1lMMzJqd2lBQ1JCaUViZjVLY1hvVElzUVNwelh4NE4yOEphNEJRb0s3cmdYaXlkYkhqeC9QMjVUYVFBSkVHQWd1V3kwKzJROFBENi9LaTRSOEVWbCtiekJPblpZOTVmcTlyajl6QWtUSTJTeGRpZEJIcUc5K3NrZHc0M2JvckNYTy9aY0pkcmFQV2R2MjJ1SUVpTEE0cTdudnZDdWc4V1RxelF2ZU9IMjZmb2RvN2c2dUZlL2ExN1czK25GQkFrUllFTlJkYjF2a2t6MUNIOWNQc1Z5L2pyaHIyN1BxTVl2RU5ZTmxIQUllc1JpQll3UnkwVis4aVhQOCsvZnZYMTFNcjdMN0VDdWViL3I0OGVNcW03RnVJMkJHV0RFRzhjbSs3RzNORU9mbWRjVFF3NGg5LzU1bGhtN0Rla1JZS1FQWkYyQXJiWFRBeXU0a0RZQjJZeFV6d2cwZ2kvNDF6dEhuZlFHMjZIYkdlbC9jclZybTd0TlkrLzFidGtPRUFaMk0wNXI0RkI3cjlHYkFJZHhhWllySGRPc2dKL3dDRVFZMEo3NFRtT0tuYnh4VDluM0ZnR0dXV3NWZG93SHRqdDlObnZmN3lRTTJhWlUvVElBSUF4cnc2ZE9uQVd0Wlpjb0VuQnBOdVR1T2JXTUVpTEF4MUhZMFpRSkVtSEozSE52R0NCQmhZNmp0YU1vRWlKQjBaMjl2TDZsczU4dnhQY084L3pmcmRvNXF2S08rZDNGeDhXdTh6ZjFkVzRwL2NQekxseS9kdHY5VHMvRWJjdkdBSGhIeWZCSWhaNk5TaUlCVG8wTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQy93R2dLS0M0WU1BNFRBQUFBQUJKUlU1RXJrSmdnZz09XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz7Cv0Rlc2VhIHZpc3VhbGl6YWNpw7NuIGVuIGVsIEhvbWU/PC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxpemFjaW9uSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5ncmVzZSB2aXN1YWxpemFjacOzbiBlbiBlbCBIb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlNcIj5TaTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiTlwiPk5vPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFyY2FyUHJpbmNpcGFsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7Cv0Rlc2VhIG1hcmNhciBjb21vIHByaW5jaXBhbD88L3N0cm9uZz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTaSBzZWxlY2Npb25hICdTaScgc2UgYWdyZWdhcsOhIGNvbW8gbm90aWNpYXMgcHJpbmNpcGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW4gZWwgaG9tZSAoZWwgY3VhZHJvIGdyYW5kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2VsZWNjaW9uZSBzaSBvIG5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJTXCI+U2k8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiTlwiPk5vPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uSXRlbSBuYW1lPVwibWFyY2FyUHJpbmNpcGFsXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250ZW5pZG86PC9zdHJvbmc+ICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVuaWRvVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e3sgc2V0Q29udGVuaWRvVXBkYXRlIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PlZvbHZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIHByb2R1Y3RvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BZ3JlZ2FyIHByb2R1Y3RvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3Bpbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdG5BY3R1YWxpemFyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgTW9kYWwsXHJcbiAgU3BpbixcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgU2VsZWN0LFxyXG4gIFVwbG9hZCxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBBcGlQcm9kdWN0b3MgZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCBub3RpZmljYSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdXRpbHMvbm90aWZpY2FcIjtcclxuXHJcbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXHJcbiAgKCkgPT4ge1xyXG4gICAgcmV0dXJuIGltcG9ydChcIi4uLy4uL0VkaXRvclwiKTtcclxuICB9LFxyXG4gIHsgc3NyOiBmYWxzZSB9XHJcbik7XHJcblxyXG5jb25zdCBCdG5BZ3JlZ2FyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgZW1wcmVzYUlkLFxyXG4gICAgZW1wcmVzYU5vbWJyZSxcclxuICAgIGVtcHJlc2FMZW5ndWFqZSxcclxuICAgIGRhdGFQcm9kdWN0b3MsXHJcbiAgICBzZXREYXRhUHJvZHVjdG9zLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IFtwcm9jZXNvQWN0dWFsLCBzZXRQcm9jZXNvQWN0dWFsXSA9IHVzZVN0YXRlKFwiQUdSRUdBUlwiKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3Bpbk1vZGFsLCBzZXRTcGluTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaWxlQ2VydGlmaWNhZG8sIHNldEZpbGVDZXJ0aWZpY2Fkb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvLCBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkb10gPVxyXG4gICAgdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZVNyYywgc2V0SW1hZ2VTcmNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnRlbmlkb1VwZGF0ZSwgc2V0Q29udGVuaWRvVXBkYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9ybS5yZXNldEZpZWxkcygpO1xyXG4gICAgc2V0Q29udGVuaWRvVXBkYXRlKFwiXCIpO1xyXG4gICAgc2V0SW1hZ2VTcmMoXCJcIik7XHJcbiAgICAvLyBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCZWZvcmVVcGxvYWRDZXJ0aWZpY2FkbyA9IChmaWxlKSA9PiB7XHJcbiAgICAvLyA1IE1CID0gMTAyNCAqIDUgPSA1MTIwXHJcbiAgICBpZiAoZmlsZS5zaXplIC8gMTAwMCA+IDI1Nikge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8oZmFsc2UpO1xyXG5cclxuICAgIC8vIGlmIChmaWxlQ2VydGlmaWNhZG8uZmluZEluZGV4KChlKSA9PiBlLm5hbWUgPT09IGZpbGUubmFtZSkgPj0gMCkge1xyXG4gICAgLy8gICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgcmd4QmFzZTY0ID0gUmVnRXhwKFxyXG4gICAgICAgIC9kYXRhOihhcHBsaWNhdGlvbnxpbWFnZSlcXC8oanBlZ3xqcGd8cG5nKik7YmFzZTY0LChbXlwiXSopL2dpbVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZ3ggPSByZ3hCYXNlNjQuZXhlYyhyZWFkZXIucmVzdWx0KTtcclxuXHJcbiAgICAgIGlmIChyZ3ggIT09IG51bGwpIHtcclxuICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW1xyXG4gICAgICAgICAgLi4uZmlsZUNlcnRpZmljYWRvLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgIG5vbWJyZUFyY2hpdm86IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgZXh0ZW5zaW9uOiByZ3hbMl0sXHJcbiAgICAgICAgICAgIGJhc2U2NDogcmd4WzNdLFxyXG4gICAgICAgICAgICBieXRlczogbnVsbCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWxlQ2xpY2tDZXJ0aWZpY2FkbyA9ICgpID0+IHtcclxuICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9ybUZpbGUgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHN1cGVyYUxpbWl0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKGUuZmlsZS5zaXplIC8gMTAwMCA+IDI1Nikge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbyh0cnVlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gdHJ1ZTtcclxuICAgICAgZS5maWxlTGlzdC5wb3AoKTtcclxuICAgICAgcmV0dXJuIGUgJiYgZS5maWxlTGlzdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKGZhbHNlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoZS5maWxlTGlzdC5sZW5ndGggPiAxKSB7XHJcbiAgICAvLyAgIGUuZmlsZUxpc3Quc2hpZnQoKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChzdXBlcmFMaW1pdGUpIHtcclxuICAgIC8vICAgZS5maWxlTGlzdCA9IFtdO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiBlICYmIGUuZmlsZUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgbGFiZWxDb2w6IHsgc3BhbjogMjQgfSxcclxuICAgIHdyYXBwZXJDb2w6IHsgc3BhbjogMjQgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgY29udGVudF9odG1sOiBjb250ZW5pZG9VcGRhdGUsXHJcbiAgICAgIGltYWdlX2V4dGVuc2lvbjogXCJcIixcclxuICAgICAgaW1hZ2VfYmFzZTY0OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMuaW1hZ2VuKSxcclxuICAgICAgdHlwZTogXCJwcmVtaW9zXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGRlbGV0ZSBwYXlsb2FkLmltYWdlbjtcclxuXHJcbiAgICBsZXQgdXBkYXRlTm90aWNpYXMgPSBkYXRhUHJvZHVjdG9zO1xyXG5cclxuICAgIGlmIChwcm9jZXNvQWN0dWFsID09PSBcIkFDVFVBTElaQVJcIikge1xyXG4gICAgICBzZXRTcGluTW9kYWwodHJ1ZSk7XHJcbiAgICAgIEFwaVByb2R1Y3Rvcy51cGRhdGVQcm9kdWN0byhwYXlsb2FkKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICB1cGRhdGVOb3RpY2lhcyA9IGRhdGFQcm9kdWN0b3MubWFwKChub3RpY2lhKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5vdGljaWEuaWQgPT09IHZhbHVlcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VuXyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuaW1hZ2VuWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlbl8uaW1hZ2VCYXNlNjQgPSBwYXlsb2FkLmltYWdlblswXVswXS5iYXNlNjQ7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlbl8uaW1hZ2VFeHRlbnNpb24gPSBwYXlsb2FkLmltYWdlblswXVswXS5leHRlbnNpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4ubm90aWNpYSxcclxuICAgICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgICAgLi4uaW1hZ2VuXyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBub3RpY2lhO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldERhdGFQcm9kdWN0b3ModXBkYXRlTm90aWNpYXMpO1xyXG4gICAgICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gICAgICAgICAgICBoYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9jZXNvQWN0dWFsID09PSBcIkFHUkVHQVJcIikge1xyXG4gICAgICBzZXRTcGluTW9kYWwodHJ1ZSk7XHJcbiAgICAgIEFwaVByb2R1Y3Rvcy5pbnNlcnRQcm9kdWN0byhwYXlsb2FkKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZU5vdGljaWFzID0gW1xyXG4gICAgICAgICAgICAgIC4uLmRhdGFQcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIHRpdHVsbzogcGF5bG9hZC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgbGVuZ3VhamU6IHBheWxvYWQubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogcGF5bG9hZC5pbWFnZV9iYXNlNjQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUV4dGVuc2lvbjogcGF5bG9hZC5pbWFnZV9leHRlbnNpb24sXHJcbiAgICAgICAgICAgICAgICBrZXk6IHV1aWQsXHJcbiAgICAgICAgICAgICAgICBpZDogdXVpZCxcclxuICAgICAgICAgICAgICAgIGZlY2hhQ3JlYWNpb246IG1vbWVudCgpLmZvcm1hdChcIkRELU1NLVlZWVlcIiksXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcyh1cGRhdGVOb3RpY2lhcyk7XHJcbiAgICAgICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICBub3RpZmljYShcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIEFncmVnYXJcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICBwcm9jZXNvQWN0dWFsID09PSBcIkFDVFVBTElaQVJcIiA/IChcclxuICAgICAgICAgICAgPHNwYW4+QWN0dWFsaXphciBwcmVtaW8gZGUge2VtcHJlc2FOb21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBudWV2byBwcmVtaW8gcGFyYSB7ZW1wcmVzYU5vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIC8vIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBmb290ZXI9e2ZhbHNlfVxyXG4gICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgIGNlbnRlcmVkXHJcbiAgICAgID5cclxuICAgICAgICA8U3BpbiBzcGlubmluZz17c3Bpbk1vZGFsfSBkZWxheT17NTAwfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgey4uLmxheW91dH1cclxuICAgICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogZW1wcmVzYUxlbmd1YWplLFxyXG4gICAgICAgICAgICAgICAgZW1wcmVzYV9pZDogZW1wcmVzYUlkLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJpZFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImVtcHJlc2FfaWRcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17KDQwLCA0MCl9PlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+TGVuZ3VhamU8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCBsZW5ndWFqZVwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGVjY2lvbmVcIiBhbGxvd0NsZWFyIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJlc1wiPkVzcGHDsW9sPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJlblwiPkluZ2zDqXM8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+Tm9tYnJlPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIG5vbWJyZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMTAsIG1lc3NhZ2U6IFwiTcOtbmltbyAxMCBjYXJhY3RlcmVzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG1heExlbmd0aD17MTAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5SZXN1bWVuPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdW1tYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIHJlc3VtZW5cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtaW46IDEwMCwgbWVzc2FnZTogXCJNw61uaW1vIDEwMCBjYXJhY3RlcmVzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG1heExlbmd0aD17NTAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5JbWFnZW5lczwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lPVwiZmlsZUxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGdldFZhbHVlRnJvbUV2ZW50PXtub3JtRmlsZX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW3DoWdlbmVzIGpwZyBvIHBuZyBkZSA8c3Ryb25nPjIwMCB4IDIwMCBweCA8L3N0cm9uZz4gKG5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyaW9yIGEgMjAwIEtCKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogaW1hZ2VTcmMgIT09IFwiXCIgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWRqdW50ZSB1biBpbWFnZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8VXBsb2FkIG5hbWU9XCJsb2dvXCIgYWN0aW9uPVwiL3VwbG9hZC5kb1wiIGxpc3RUeXBlPVwicGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9VcGxvYWQ+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZUNlcnRpZmljYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVVcGxvYWQ9eyhmaWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCZWZvcmVVcGxvYWRDZXJ0aWZpY2FkbyhmaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gb25SZW1vdmU9e2hhbmRsZVJlbW92ZUZpbGVDbGlja0NlcnRpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZUxpc3Q9e2ZpbGVDZXJ0aWZpY2Fkb31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZmlsaWFjaW9uLWRhdG9zLXBlcnNvbmFsZXNfX3NpemUtbWVzc2FnZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbCBhcmNoaXZvIG5vIGRlYmUgcGVzYXIgbcOhcyBkZSAyMDAgS0IuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZVNyYyAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9kZXI6IFwiMXB4IHNvbGlkICNEOUQ5RDlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTUlBQUFERENBWUFBQURRdmM2VUFBQUJSV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFLSkZqWUdBU1NTd295R0ZoWUdESXpTc3BDbkozVW9pSWpGSmdmOExBd1NEQ0lNb2d3TUNjbUZ4YzRCZ1E0QU5Vd2dDalVjRzNhd3lNSVBxeUxzaXM3UFBPcTNRZERGY3ZqVjNqT0QxYm9RVlRQUXJnU2trdFRnYlNmNEE0TGJtZ3FJU0JnVEVGeUZZdUx5a0FzVHVBYkpFaW9LT0E3RGtnZGpxRXZRSEVUb0t3ajREVmhBUTVBOWszZ0d5QjVJeEVvQm1NTDRCc25TUWs4WFFrTnRSZUVPQnhjZlh4VVFnMU1qYzBkeUhnWE5KQlNXcEZDWWgyemkrb0xNcE16eWhSY0FTR1VxcUNaMTZ5bm82Q2tZR1JBUU1ES013aHFqL2ZBSWNsb3hnSFFxeEFqSUhCRXVndzVzVUlzU1FwQm9idFFQZExjaUxFVkpZek1QQkhNREJzYXloSUxFcUVPNER4RzB0eG1yRVJoTTI5bllHQmRkci8vNS9ER1JqWU5Sa1kvbDcvLy8vMzl2Ly8veTREbW4rTGdlSEFOd0Rya2wxQXVPK3BtZ0FBQURobFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBcUFDQUFRQUFBQUJBQUFBd3FBREFBUUFBQUFCQUFBQXd3QUFBQUQ5Yi9IbkFBQUhsa2xFUVZSNEFlM2RQM1BUV0JTR2NiR3pNNkdDS3FsSUJSVjBkSFJKRmFyUTBlVVQ4TEg0Qm5SVTBOSFIwVUVGVmRJbEZSVjdUelJrc29tUFk4dXlrVGsvemV3UWZLdy85em52NHl2SnluTHY0dUxpVjJkQm9EaUJmNHFQMy9BUnVDUkFCRUZBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2cwQWo4aTBKTzRPenNyUHY2OVd2K2hpMnFQSHIwcU52ZjM5K2lJOTdzb1JJaDRmM3o1OC91N2R1M1NYWDdYdDdaMmVuZXZIbXpmUWUrb1NOMmFwU0FQajA5VFNyYitYS0kvZjM3OSswOCtBMGNOUkUyQU5rdXBrK0FDTlB2a1NQY0FBRWliQUN5WFV5ZkFCR20zeU5IdUFFQ1JOZ0FaTHVZUGdFaXJLbEh1N3U3WGR5eXRHd0hBZDhqak55bmc0T0Q3dm56NTFkYlBUOC83ejU4K05COSsvYnQ2alUvVEkrQUdXSEVucng0OGVKL0VzU21Ieng0MEwxOCtmTHl6eEYzWlZNakV5RENpRURqTVlaWlM1d2lQWG55WkZiSmF4TWhRSVFSR3pIdldSN1hDeU9DWHNPbWlEQWkxSG1QTU1RakRwYnBFaURDaUwzNThlTkh1clcvNVNuV2RJQmJYaURDaUEzOC9QbnpyY2UyWXlaNC8vNTlGM2VQTE5NbDRQYnBpTDJKMEw5NzkrN3lEdEhEaHc4dnR6enZkR25FWGR2VWlnU0lzQ0xBV2F2SHAvK3FNMEJjWE1kL3EyNW4xdkY1N1RZQnAwYTNtVXppbGVQajQrN2s1S1NMYjZndDZ5ZEFoUFV6WG5vUFIwZEhsNzlXR1ROQ2ZCbm4xdXZTQ0pkZWdRaExJMXZ2Q2srZlB1MmVQWHQydFpPWUVWNi9mbjMxZHorc2h3QVIxc1AxY3F2TG50YkVOOU14QTl4Y1lqc3hTMWpXUjRBSWEySWJ6eDB0YzQ0ZllYLzE2bFY2TkRGTFhIK1lMMzJqd2lBQ1JCaUViZjVLY1hvVElzUVNwelh4NE4yOEphNEJRb0s3cmdYaXlkYkhqeC9QMjVUYVFBSkVHQWd1V3kwKzJROFBENi9LaTRSOEVWbCtiekJPblpZOTVmcTlyajl6QWtUSTJTeGRpZEJIcUc5K3NrZHc0M2JvckNYTy9aY0pkcmFQV2R2MjJ1SUVpTEE0cTdudnZDdWc4V1RxelF2ZU9IMjZmb2RvN2c2dUZlL2ExN1czK25GQkFrUllFTlJkYjF2a2t6MUNIOWNQc1Z5L2pyaHIyN1BxTVl2RU5ZTmxIQUllc1JpQll3UnkwVis4aVhQOCsvZnZYMTFNcjdMN0VDdWViL3I0OGVNcW03RnVJMkJHV0RFRzhjbSs3RzNORU9mbWRjVFF3NGg5LzU1bGhtN0Rla1JZS1FQWkYyQXJiWFRBeXU0a0RZQjJZeFV6d2cwZ2kvNDF6dEhuZlFHMjZIYkdlbC9jclZybTd0TlkrLzFidGtPRUFaMk0wNXI0RkI3cjlHYkFJZHhhWllySGRPc2dKL3dDRVFZMEo3NFRtT0tuYnh4VDluM0ZnR0dXV3NWZG93SHRqdDlObnZmN3lRTTJhWlUvVElBSUF4cnc2ZE9uQVd0Wlpjb0VuQnBOdVR1T2JXTUVpTEF4MUhZMFpRSkVtSEozSE52R0NCQmhZNmp0YU1vRWlKQjBaMjl2TDZsczU4dnhQY084L3pmcmRvNXF2S08rZDNGeDhXdTh6ZjFkVzRwL2NQekxseS9kdHY5VHMvRWJjdkdBSGhIeWZCSWhaNk5TaUlCVG8wTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQy93R2dLS0M0WU1BNFRBQUFBQUJKUlU1RXJrSmdnZz09XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz7Cv0Rlc2VhIHZpc3VhbGl6YWNpw7NuIGVuIGVsIEhvbWU/PC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxpemFjaW9uSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5ncmVzZSB2aXN1YWxpemFjacOzbiBlbiBlbCBIb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlNcIj5TaTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiTlwiPk5vPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFyY2FyUHJpbmNpcGFsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7Cv0Rlc2VhIG1hcmNhciBjb21vIHByaW5jaXBhbD88L3N0cm9uZz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTaSBzZWxlY2Npb25hICdTaScgc2UgYWdyZWdhcsOhIGNvbW8gbm90aWNpYXMgcHJpbmNpcGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW4gZWwgaG9tZSAoZWwgY3VhZHJvIGdyYW5kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2VsZWNjaW9uZSBzaSBvIG5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJTXCI+U2k8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiTlwiPk5vPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uSXRlbSBuYW1lPVwibWFyY2FyUHJpbmNpcGFsXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250ZW5pZG86PC9zdHJvbmc+ICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVuaWRvVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e3sgc2V0Q29udGVuaWRvVXBkYXRlIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PlZvbHZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIHByZW1pbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBwcmVtaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ0bkFncmVnYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=