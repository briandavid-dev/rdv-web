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
                    children: "Imagene"
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
                    message: "Adjunte las imagenes"
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
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  className: "label-required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 429,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                  children: "Contenido:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 430,
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
                  lineNumber: 433,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Editor, {
                  data: contenidoUpdate,
                  actions: {
                    setContenidoUpdate: setContenidoUpdate
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 434,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 432,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                style: {
                  textAlign: "center"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 440,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 441,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  onClick: handleCancel,
                  children: "Volver"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 442,
                  columnNumber: 19
                }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  type: "primary",
                  htmlType: "submit",
                  children: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Actualizar producto"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 446,
                    columnNumber: 23
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Agregar producto"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 448,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 444,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 439,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9CdG5QcmVtaW9zL0J0bkFjdHVhbGl6YXIvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yIiwiZHluYW1pYyIsInNzciIsIkJ0bkFjdHVhbGl6YXIiLCJwcm9wcyIsImVtcHJlc2FJZCIsImVtcHJlc2FOb21icmUiLCJlbXByZXNhTGVuZ3VhamUiLCJkYXRhUHJvZHVjdG9zIiwic2V0RGF0YVByb2R1Y3RvcyIsImlkVXBkYXRlIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwidXNlU3RhdGUiLCJwcm9jZXNvQWN0dWFsIiwic2V0UHJvY2Vzb0FjdHVhbCIsImlzTW9kYWxWaXNpYmxlIiwic2V0SXNNb2RhbFZpc2libGUiLCJzcGluTW9kYWwiLCJzZXRTcGluTW9kYWwiLCJmaWxlQ2VydGlmaWNhZG8iLCJzZXRGaWxlQ2VydGlmaWNhZG8iLCJzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyIsInNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImNvbnRlbmlkb1VwZGF0ZSIsInNldENvbnRlbmlkb1VwZGF0ZSIsInVzZUVmZmVjdCIsInByb2R1Y3RvIiwiZmluZCIsImlkIiwic2V0RmllbGRzVmFsdWUiLCJsYW5ndWFnZSIsImxlbmd1YWplIiwibmFtZSIsInRpdHVsbyIsImNvbnRlbmlkbyIsImltYWdlQmFzZTY0IiwiaW1hZ2VFeHRlbnNpb24iLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVCZWZvcmVVcGxvYWRDZXJ0aWZpY2FkbyIsImZpbGUiLCJzaXplIiwiZmluZEluZGV4IiwiZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwicmd4QmFzZTY0IiwiUmVnRXhwIiwicmd4IiwiZXhlYyIsInJlc3VsdCIsIm5vbWJyZUFyY2hpdm8iLCJleHRlbnNpb24iLCJiYXNlNjQiLCJieXRlcyIsImhhbmRsZVJlbW92ZUZpbGVDbGlja0NlcnRpZmljYWRvIiwibm9ybUZpbGUiLCJzdXBlcmFMaW1pdGUiLCJmaWxlTGlzdCIsInBvcCIsIkFycmF5IiwiaXNBcnJheSIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJvbkZpbmlzaCIsInZhbHVlcyIsInBheWxvYWQiLCJjb250ZW50X2h0bWwiLCJpbWFnZV9leHRlbnNpb24iLCJpbWFnZW4iLCJpbWFnZV9iYXNlNjQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsInVwZGF0ZU5vdGljaWFzIiwiQXBpUHJvZHVjdG9zIiwidXBkYXRlUHJvZHVjdG8iLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29kaWdvIiwibWFwIiwibm90aWNpYSIsImltYWdlbl8iLCJub3RpZmljYSIsImVycm9yIiwiaW5zZXJ0UHJvZHVjdG8iLCJ1dWlkIiwidXVpZHY0Iiwia2V5IiwiZmVjaGFDcmVhY2lvbiIsIm1vbWVudCIsImZvcm1hdCIsImVtcHJlc2FfaWQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJtaW4iLCJjb2xvciIsImJvZGVyIiwicGFkZGluZyIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtREFBTyxNQUNwQixjQUFNO0FBQ0osU0FBTywwSUFBUDtBQUNELENBSG1CLEVBSXBCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUZnQiwyREFFaEI7QUFBQTtBQUFBLGNBRmdCLGNBRWhCO0FBQUE7QUFBQSxDQUpvQixDQUF0QjtNQUFNRixNOztBQU9OLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFFN0JDLFNBRjZCLEdBUTNCRCxLQVIyQixDQUU3QkMsU0FGNkI7QUFBQSxNQUc3QkMsYUFINkIsR0FRM0JGLEtBUjJCLENBRzdCRSxhQUg2QjtBQUFBLE1BSTdCQyxlQUo2QixHQVEzQkgsS0FSMkIsQ0FJN0JHLGVBSjZCO0FBQUEsTUFLN0JDLGFBTDZCLEdBUTNCSixLQVIyQixDQUs3QkksYUFMNkI7QUFBQSxNQU03QkMsZ0JBTjZCLEdBUTNCTCxLQVIyQixDQU03QkssZ0JBTjZCO0FBQUEsTUFPN0JDLFFBUDZCLEdBUTNCTixLQVIyQixDQU83Qk0sUUFQNkI7O0FBQUEsc0JBVWhCQyx5Q0FBSSxDQUFDQyxPQUFMLEVBVmdCO0FBQUE7QUFBQSxNQVV4QkMsSUFWd0I7O0FBQUEsa0JBWVdDLHNEQUFRLENBQUMsWUFBRCxDQVpuQjtBQUFBLE1BWXhCQyxhQVp3QjtBQUFBLE1BWVRDLGdCQVpTOztBQUFBLG1CQWFhRixzREFBUSxDQUFDLEtBQUQsQ0FickI7QUFBQSxNQWF4QkcsY0Fid0I7QUFBQSxNQWFSQyxpQkFiUTs7QUFBQSxtQkFjR0osc0RBQVEsQ0FBQyxLQUFELENBZFg7QUFBQSxNQWN4QkssU0Fkd0I7QUFBQSxNQWNiQyxZQWRhOztBQUFBLG1CQWVlTixzREFBUSxDQUFDLEVBQUQsQ0FmdkI7QUFBQSxNQWV4Qk8sZUFmd0I7QUFBQSxNQWVQQyxrQkFmTzs7QUFBQSxtQkFpQjdCUixzREFBUSxDQUFDLEtBQUQsQ0FqQnFCO0FBQUEsTUFnQnhCUywwQkFoQndCO0FBQUEsTUFnQklDLDZCQWhCSjs7QUFBQSxtQkFrQkNWLHNEQUFRLENBQUMsRUFBRCxDQWxCVDtBQUFBLE1Ba0J4QlcsUUFsQndCO0FBQUEsTUFrQmRDLFdBbEJjOztBQUFBLG1CQW1CZVosc0RBQVEsQ0FBQyxFQUFELENBbkJ2QjtBQUFBLE1BbUJ4QmEsZUFuQndCO0FBQUEsTUFtQlBDLGtCQW5CTzs7QUFxQi9CQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUVBLFFBQU1DLFFBQVEsR0FBR3RCLGFBQWEsQ0FBQ3VCLElBQWQsQ0FBbUIsVUFBQ0QsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0UsRUFBVCxLQUFnQnRCLFFBQTlCO0FBQUEsS0FBbkIsQ0FBakI7QUFDQUcsUUFBSSxDQUFDb0IsY0FBTCxDQUFvQjtBQUNsQkQsUUFBRSxFQUFFRixRQUFRLENBQUNFLEVBREs7QUFFbEJFLGNBQVEsRUFBRUosUUFBUSxDQUFDSyxRQUZEO0FBR2xCQyxVQUFJLEVBQUVOLFFBQVEsQ0FBQ087QUFIRyxLQUFwQjtBQU1BVCxzQkFBa0IsQ0FBQ0UsUUFBUSxDQUFDUSxTQUFWLENBQWxCOztBQUVBLFFBQUlSLFFBQVEsQ0FBQ1MsV0FBVCxLQUF5QixFQUE3QixFQUFpQztBQUMvQmIsaUJBQVcsc0JBQ0tJLFFBQVEsQ0FBQ1UsY0FEZCxxQkFDdUNWLFFBQVEsQ0FBQ1MsV0FEaEQsRUFBWDtBQUdELEtBSkQsTUFJTztBQUNMYixpQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNEO0FBQ0YsR0F0QlEsRUFzQk4sRUF0Qk0sQ0FBVDs7QUF3QkEsTUFBTWUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QnZCLHFCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDRCxHQUZEOztBQUlBLE1BQU13Qiw2QkFBNkIsR0FBRyxTQUFoQ0EsNkJBQWdDLENBQUNDLElBQUQsRUFBVTtBQUM5QztBQUNBLFFBQUlBLElBQUksQ0FBQ0MsSUFBTCxHQUFZLElBQVosR0FBbUIsR0FBdkIsRUFBNEI7QUFDMUJwQixtQ0FBNkIsQ0FBQyxJQUFELENBQTdCO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7O0FBQ0RBLGlDQUE2QixDQUFDLEtBQUQsQ0FBN0I7O0FBRUEsUUFBSUgsZUFBZSxDQUFDd0IsU0FBaEIsQ0FBMEIsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ1YsSUFBRixLQUFXTyxJQUFJLENBQUNQLElBQXZCO0FBQUEsS0FBMUIsS0FBMEQsQ0FBOUQsRUFBaUU7QUFDL0QsYUFBTyxLQUFQO0FBQ0Q7O0FBRUQsUUFBTVcsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjtBQUNBRCxVQUFNLENBQUNFLGFBQVAsQ0FBcUJOLElBQXJCOztBQUNBSSxVQUFNLENBQUNHLFNBQVAsR0FBbUIsWUFBTTtBQUN2QixVQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FDdEIsNkRBRHNCLENBQXhCO0FBR0EsVUFBTUMsR0FBRyxHQUFHRixTQUFTLENBQUNHLElBQVYsQ0FBZVAsTUFBTSxDQUFDUSxNQUF0QixDQUFaOztBQUVBLFVBQUlGLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2hCL0IsMEJBQWtCLENBQUMsQ0FDakIsaUNBRU9xQixJQUZQO0FBR0lQLGNBQUksRUFBRU8sSUFBSSxDQUFDUCxJQUhmO0FBSUlvQix1QkFBYSxFQUFFYixJQUFJLENBQUNQLElBSnhCO0FBS0lxQixtQkFBUyxFQUFFSixHQUFHLENBQUMsQ0FBRCxDQUxsQjtBQU1JSyxnQkFBTSxFQUFFTCxHQUFHLENBQUMsQ0FBRCxDQU5mO0FBT0lNLGVBQUssRUFBRTtBQVBYLFdBRGlCLENBQUQsQ0FBbEI7QUFZRDtBQUNGLEtBcEJEOztBQXFCQSxXQUFPLEtBQVA7QUFDRCxHQXBDRDs7QUFxQ0EsTUFBTUMsZ0NBQWdDLEdBQUcsU0FBbkNBLGdDQUFtQyxHQUFNO0FBQzdDdEMsc0JBQWtCLENBQUMsRUFBRCxDQUFsQjtBQUNELEdBRkQ7O0FBSUEsTUFBTXVDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNmLENBQUQsRUFBTztBQUN0QixRQUFJZ0IsWUFBWSxHQUFHLEtBQW5COztBQUNBLFFBQUloQixDQUFDLENBQUNILElBQUYsQ0FBT0MsSUFBUCxHQUFjLElBQWQsR0FBcUIsR0FBekIsRUFBOEI7QUFDNUJwQixtQ0FBNkIsQ0FBQyxJQUFELENBQTdCO0FBQ0FzQyxrQkFBWSxHQUFHLElBQWY7QUFDQWhCLE9BQUMsQ0FBQ2lCLFFBQUYsQ0FBV0MsR0FBWDtBQUNBLGFBQU9sQixDQUFDLElBQUlBLENBQUMsQ0FBQ2lCLFFBQWQ7QUFDRCxLQUxELE1BS087QUFDTHZDLG1DQUE2QixDQUFDLEtBQUQsQ0FBN0I7QUFDQXNDLGtCQUFZLEdBQUcsS0FBZjtBQUNEOztBQUVELFFBQUlHLEtBQUssQ0FBQ0MsT0FBTixDQUFjcEIsQ0FBZCxDQUFKLEVBQXNCO0FBQ3BCLGFBQU9BLENBQVA7QUFDRCxLQWRxQixDQWV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFdBQU9BLENBQUMsSUFBSUEsQ0FBQyxDQUFDaUIsUUFBZDtBQUNELEdBdkJEOztBQXlCQSxNQUFNSSxNQUFNLEdBQUc7QUFDYkMsWUFBUSxFQUFFO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBREc7QUFFYkMsY0FBVSxFQUFFO0FBQUVELFVBQUksRUFBRTtBQUFSO0FBRkMsR0FBZjs7QUFLQSxNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDM0IsUUFBTUMsT0FBTyxtQ0FDUkQsTUFEUTtBQUVYRSxrQkFBWSxFQUFFL0MsZUFGSDtBQUdYZ0QscUJBQWUsRUFBRUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEVBQWhCLEdBQXFCLElBSDNCO0FBSVhDLGtCQUFZLEVBQUVMLE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQkUsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE1BQU0sQ0FBQ0ksTUFBdEIsQ0FBaEIsR0FBZ0QsSUFKbkQ7QUFLWEksVUFBSSxFQUFFO0FBTEssTUFBYjs7QUFRQSxRQUFJQyxjQUFjLEdBQUd6RSxhQUFyQjs7QUFFQSxRQUFJTyxhQUFhLEtBQUssWUFBdEIsRUFBb0M7QUFDbENLLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0E4RCx1REFBWSxDQUFDQyxjQUFiLENBQTRCVixPQUE1QixFQUNHVyxJQURILENBQ1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFlBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFkLEtBQXlCLEdBQTdCLEVBQWtDO0FBQ2hDTix3QkFBYyxHQUFHekUsYUFBYSxDQUFDZ0YsR0FBZCxDQUFrQixVQUFDQyxPQUFELEVBQWE7QUFDOUMsZ0JBQUlBLE9BQU8sQ0FBQ3pELEVBQVIsS0FBZXdDLE1BQU0sQ0FBQ3hDLEVBQTFCLEVBQThCO0FBQzVCLGtCQUFNMEQsT0FBTyxHQUFHLEVBQWhCOztBQUVBLGtCQUFJckUsZUFBZSxDQUFDLENBQUQsQ0FBbkIsRUFBd0I7QUFDdEJxRSx1QkFBTyxDQUFDbkQsV0FBUixHQUFzQmxCLGVBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsRUFBc0JxQyxNQUE1QztBQUNBZ0MsdUJBQU8sQ0FBQ2xELGNBQVIsR0FBeUJuQixlQUFlLENBQUMsQ0FBRCxDQUFmLENBQW1CLENBQW5CLEVBQXNCb0MsU0FBL0M7QUFDRDs7QUFFRCxpRkFDS2dDLE9BREwsR0FFS2hCLE9BRkwsR0FHS2lCLE9BSEw7QUFJRXJELHNCQUFNLEVBQUVvQyxPQUFPLENBQUNyQyxJQUpsQjtBQUtFRCx3QkFBUSxFQUFFc0MsT0FBTyxDQUFDdkM7QUFMcEI7QUFPRDs7QUFDRCxtQkFBT3VELE9BQVA7QUFDRCxXQWxCZ0IsQ0FBakI7QUFvQkFoRiwwQkFBZ0IsQ0FBQ3dFLGNBQUQsQ0FBaEI7QUFDQTNELDRCQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQW1CLHNCQUFZO0FBQ1pyQixzQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBdUUsMEVBQVEsQ0FBQyxTQUFELENBQVI7QUFDRCxTQTFCRCxNQTBCTztBQUNMQSwwRUFBUSxDQUFDLE9BQUQsQ0FBUjtBQUNEO0FBQ0YsT0EvQkgsV0FnQ1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCRCx3RUFBUSxDQUFDLE9BQUQsQ0FBUjtBQUNBdkUsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxPQW5DSDtBQW9DRDs7QUFFRCxRQUFJTCxhQUFhLEtBQUssU0FBdEIsRUFBaUM7QUFDL0JLLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0E4RCx1REFBWSxDQUFDVyxjQUFiLENBQTRCcEIsT0FBNUIsRUFDR1csSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixZQUFJQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZCxLQUF5QixHQUE3QixFQUFrQztBQUNoQyxjQUFNTyxJQUFJLEdBQUdDLCtDQUFNLEVBQW5CO0FBQ0FkLHdCQUFjLDBHQUNUekUsYUFEUyxvQ0FHUGlFLE9BSE87QUFJVnBDLGtCQUFNLEVBQUVvQyxPQUFPLENBQUNyQyxJQUpOO0FBS1ZELG9CQUFRLEVBQUVzQyxPQUFPLENBQUN2QyxRQUxSO0FBTVZLLHVCQUFXLEVBQUVrQyxPQUFPLENBQUNJLFlBTlg7QUFPVnJDLDBCQUFjLEVBQUVpQyxPQUFPLENBQUNFLGVBUGQ7QUFRVnFCLGVBQUcsRUFBRUYsSUFSSztBQVNWOUQsY0FBRSxFQUFFOEQsSUFUTTtBQVVWRyx5QkFBYSxFQUFFQyw2Q0FBTSxHQUFHQyxNQUFULENBQWdCLFlBQWhCO0FBVkwsY0FBZDtBQWFBMUYsMEJBQWdCLENBQUN3RSxjQUFELENBQWhCO0FBQ0EzRCw0QkFBa0IsQ0FBQyxFQUFELENBQWxCO0FBQ0FtQixzQkFBWTtBQUNackIsc0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQXVFLDBFQUFRLENBQUMsU0FBRCxDQUFSO0FBQ0QsU0FwQkQsTUFvQk87QUFDTEEsMEVBQVEsQ0FBQyxPQUFELENBQVI7QUFDRDtBQUNGLE9BekJILFdBMEJTLFVBQUNDLEtBQUQsRUFBVztBQUNoQkQsd0VBQVEsQ0FBQyxPQUFELENBQVI7QUFDQXZFLG9CQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsT0E3Qkg7QUE4QkQ7QUFDRixHQXBGRDs7QUFzRkEsc0JBQ0U7QUFBQSw0QkFDRSxzRUFBQyw2REFBRDtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiRix5QkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0Q7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSxzRUFBQywwQ0FBRDtBQUNFLFdBQUssRUFDSEgsYUFBYSxLQUFLLFlBQWxCLGdCQUNFO0FBQUEsOENBQThCVCxhQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixnQkFHRTtBQUFBLG1EQUFtQ0EsYUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTE47QUFRRSxhQUFPLEVBQUVXLGNBUlgsQ0FTRTtBQVRGO0FBVUUsY0FBUSxFQUFFLG9CQUFNO0FBQ2RDLHlCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDRCxPQVpIO0FBYUUsWUFBTSxFQUFFLEtBYlY7QUFjRSxXQUFLLEVBQUUsSUFkVDtBQWVFLGNBQVEsTUFmVjtBQUFBLDZCQWlCRSxzRUFBQyx5Q0FBRDtBQUFNLGdCQUFRLEVBQUVDLFNBQWhCO0FBQTJCLGFBQUssRUFBRSxHQUFsQztBQUFBLCtCQUNFO0FBQUEsaUNBQ0Usc0VBQUMseUNBQUQsa0NBQ01nRCxNQUROO0FBRUUsb0JBQVEsRUFBRUksUUFGWjtBQUdFLGdCQUFJLEVBQUUxRCxJQUhSO0FBSUUseUJBQWEsRUFBRTtBQUNicUIsc0JBQVEsRUFBRTNCLGVBREc7QUFFYjZGLHdCQUFVLEVBQUUvRjtBQUZDLGFBSmpCO0FBQUEsb0NBU0Usc0VBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsa0JBQUksRUFBQyxJQUFoQjtBQUFxQixvQkFBTSxFQUFFLElBQTdCO0FBQUEscUNBQ0Usc0VBQUMsMENBQUQ7QUFBTyxvQkFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFZRSxzRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxrQkFBSSxFQUFDLFlBQWhCO0FBQTZCLG9CQUFNLEVBQUUsSUFBckM7QUFBQSxxQ0FDRSxzRUFBQywwQ0FBRDtBQUFPLG9CQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRixlQWVFLHNFQUFDLHdDQUFEO0FBQUssb0JBQU0sR0FBRyxJQUFJLEVBQVAsQ0FBWDtBQUFBLHNDQUNFLHNFQUFDLHdDQUFEO0FBQUssa0JBQUUsRUFBRSxFQUFUO0FBQUEsdUNBQ0Usc0VBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsdUJBQUssZUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEVDtBQUVFLHNCQUFJLEVBQUMsVUFGUDtBQUdFLHVCQUFLLEVBQUUsQ0FBQztBQUFFZ0csNEJBQVEsRUFBRSxJQUFaO0FBQWtCQywyQkFBTyxFQUFFO0FBQTNCLG1CQUFELENBSFQ7QUFBQSx5Q0FLRSxzRUFBQywyQ0FBRDtBQUFRLCtCQUFXLEVBQUMsWUFBcEI7QUFBaUMsOEJBQVUsTUFBM0M7QUFBNEMsNEJBQVEsTUFBcEQ7QUFBQSw0Q0FDRSxzRUFBQywyQ0FBRCxDQUFRLE1BQVI7QUFBZSwyQkFBSyxFQUFDLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBRUUsc0VBQUMsMkNBQUQsQ0FBUSxNQUFSO0FBQWUsMkJBQUssRUFBQyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQWNFLHNFQUFDLHdDQUFEO0FBQUssa0JBQUUsRUFBRSxFQUFUO0FBQUEsdUNBQ0Usc0VBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsdUJBQUssZUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEVDtBQUVFLHNCQUFJLEVBQUMsTUFGUDtBQUdFLHVCQUFLLEVBQUUsQ0FDTDtBQUFFRCw0QkFBUSxFQUFFLElBQVo7QUFBa0JDLDJCQUFPLEVBQUU7QUFBM0IsbUJBREssRUFFTDtBQUFFQyx1QkFBRyxFQUFFLEVBQVA7QUFBV0QsMkJBQU8sRUFBRTtBQUFwQixtQkFGSyxDQUhUO0FBQUEseUNBUUUsc0VBQUMsMENBQUQ7QUFBTyw2QkFBUyxFQUFFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFkRixlQXdDRSxzRUFBQyx3Q0FBRDtBQUFLLGtCQUFFLEVBQUUsRUFBVDtBQUFBLHdDQUNFLHNFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLHVCQUFLLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRFQ7QUFFRSxzQkFBSSxFQUFDLFFBRlA7QUFHRSwrQkFBYSxFQUFDLFVBSGhCO0FBSUUsbUNBQWlCLEVBQUV6QyxRQUpyQjtBQUtFLHVCQUFLLGVBQ0g7QUFBQSx5RUFDd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFOSjtBQVdFLHVCQUFLLEVBQUUsQ0FDTDtBQUNFd0MsNEJBQVEsRUFBRTVFLFFBQVEsS0FBSyxFQUFiLEdBQWtCLEtBQWxCLEdBQTBCLElBRHRDO0FBRUU2RSwyQkFBTyxFQUFFO0FBRlgsbUJBREssQ0FYVDtBQUFBLHlDQXdCRSxzRUFBQywyQ0FBRDtBQUNFLHdCQUFJLEVBQUMsaUJBRFA7QUFFRSwwQkFBTSxFQUFDLG1CQUZUO0FBR0UsNEJBQVEsRUFBQyxTQUhYLENBSUU7QUFKRjtBQUtFLGdDQUFZLEVBQUUsc0JBQUMzRCxJQUFEO0FBQUEsNkJBQ1pELDZCQUE2QixDQUFDQyxJQUFELENBRGpCO0FBQUEscUJBTGhCO0FBUUUsNEJBQVEsRUFBRWlCLGdDQVJaO0FBU0UsNEJBQVEsRUFBRXZDLGVBVFo7QUFBQSw0Q0FXRSxzRUFBQywyQ0FBRDtBQUFRLDBCQUFJLGVBQUUsc0VBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFYRixFQWVHRSwwQkFBMEIsaUJBQ3pCO0FBQ0UsK0JBQVMsRUFBQyw0Q0FEWjtBQUVFLDJCQUFLLEVBQUU7QUFBRWlGLDZCQUFLLEVBQUU7QUFBVCx1QkFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFrREcvRSxRQUFRLEtBQUssRUFBYixpQkFDQztBQUNFLHVCQUFLLEVBQUU7QUFDTGdGLHlCQUFLLEVBQUUsbUJBREY7QUFFTEMsMkJBQU8sRUFBRTtBQUZKLG1CQURUO0FBQUEseUNBTUUsc0VBQUMsMENBQUQ7QUFDRSx5QkFBSyxFQUFFLEVBRFQ7QUFFRSwwQkFBTSxFQUFFLEtBRlY7QUFHRSx1QkFBRyxFQUFFakYsUUFIUDtBQUlFLDRCQUFRLEVBQUM7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFuREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhDRixlQTJIRSxzRUFBQyx3Q0FBRDtBQUFLLGtCQUFFLEVBQUU7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTNIRixlQXdKRSxzRUFBQyx3Q0FBRDtBQUFLLGtCQUFFLEVBQUUsRUFBVDtBQUFBLHdDQUNFO0FBQU0sMkJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhKRixlQTRKRSxzRUFBQyx3Q0FBRDtBQUFLLGtCQUFFLEVBQUUsRUFBVDtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRSxzRUFBQyxNQUFEO0FBQ0Usc0JBQUksRUFBRUUsZUFEUjtBQUVFLHlCQUFPLEVBQUU7QUFBRUMsc0NBQWtCLEVBQWxCQTtBQUFGO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBNUpGLGVBbUtFLHNFQUFDLHdDQUFEO0FBQUssa0JBQUUsRUFBRSxFQUFUO0FBQWEscUJBQUssRUFBRTtBQUFFK0UsMkJBQVMsRUFBRTtBQUFiLGlCQUFwQjtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0Usc0VBQUMsMkNBQUQ7QUFBUSx5QkFBTyxFQUFFbEUsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEYsRUFJRyxJQUpILGVBS0Usc0VBQUMsMkNBQUQ7QUFBUSxzQkFBSSxFQUFDLFNBQWI7QUFBdUIsMEJBQVEsRUFBQyxRQUFoQztBQUFBLDRCQUNHMUIsYUFBYSxLQUFLLFlBQWxCLGdCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURELGdCQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbktGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQSxrQkFERjtBQWlPRCxDQS9hRDs7R0FBTVosYTtVQVVXUSx5Q0FBSSxDQUFDQyxPOzs7TUFWaEJULGE7QUFpYlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhbmVsL2VtcHJlc2FzLjI1YmFlYzc4YjBkMTM0MGQwMzlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgTW9kYWwsXHJcbiAgU3BpbixcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgU2VsZWN0LFxyXG4gIFVwbG9hZCxcclxuICBJbWFnZSxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCwgRWRpdFR3b1RvbmUgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgQXBpUHJvZHVjdG9zIGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgbm90aWZpY2EgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL25vdGlmaWNhXCI7XHJcblxyXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxyXG4gICgpID0+IHtcclxuICAgIHJldHVybiBpbXBvcnQoXCIuLi8uLi9FZGl0b3JcIik7XHJcbiAgfSxcclxuICB7IHNzcjogZmFsc2UgfVxyXG4pO1xyXG5cclxuY29uc3QgQnRuQWN0dWFsaXphciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGVtcHJlc2FJZCxcclxuICAgIGVtcHJlc2FOb21icmUsXHJcbiAgICBlbXByZXNhTGVuZ3VhamUsXHJcbiAgICBkYXRhUHJvZHVjdG9zLFxyXG4gICAgc2V0RGF0YVByb2R1Y3RvcyxcclxuICAgIGlkVXBkYXRlLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IFtwcm9jZXNvQWN0dWFsLCBzZXRQcm9jZXNvQWN0dWFsXSA9IHVzZVN0YXRlKFwiQUNUVUFMSVpBUlwiKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3Bpbk1vZGFsLCBzZXRTcGluTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaWxlQ2VydGlmaWNhZG8sIHNldEZpbGVDZXJ0aWZpY2Fkb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvLCBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkb10gPVxyXG4gICAgdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZVNyYywgc2V0SW1hZ2VTcmNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnRlbmlkb1VwZGF0ZSwgc2V0Q29udGVuaWRvVXBkYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gZm9ybS5yZXNldEZpZWxkcygpO1xyXG4gICAgLy8gc2V0Q29udGVuaWRvVXBkYXRlKFwiXCIpO1xyXG4gICAgLy8gc2V0SW1hZ2VTcmMoXCJcIik7XHJcbiAgICAvLyBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0byA9IGRhdGFQcm9kdWN0b3MuZmluZCgocHJvZHVjdG8pID0+IHByb2R1Y3RvLmlkID09PSBpZFVwZGF0ZSk7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgaWQ6IHByb2R1Y3RvLmlkLFxyXG4gICAgICBsYW5ndWFnZTogcHJvZHVjdG8ubGVuZ3VhamUsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3RvLnRpdHVsbyxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldENvbnRlbmlkb1VwZGF0ZShwcm9kdWN0by5jb250ZW5pZG8pO1xyXG5cclxuICAgIGlmIChwcm9kdWN0by5pbWFnZUJhc2U2NCAhPT0gXCJcIikge1xyXG4gICAgICBzZXRJbWFnZVNyYyhcclxuICAgICAgICBgZGF0YTppbWFnZS8ke3Byb2R1Y3RvLmltYWdlRXh0ZW5zaW9ufTtiYXNlNjQsJHtwcm9kdWN0by5pbWFnZUJhc2U2NH1gXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJbWFnZVNyYyhcIlwiKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCZWZvcmVVcGxvYWRDZXJ0aWZpY2FkbyA9IChmaWxlKSA9PiB7XHJcbiAgICAvLyA1IE1CID0gMTAyNCAqIDUgPSA1MTIwXHJcbiAgICBpZiAoZmlsZS5zaXplIC8gMTAwMCA+IDI1Nikge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8oZmFsc2UpO1xyXG5cclxuICAgIGlmIChmaWxlQ2VydGlmaWNhZG8uZmluZEluZGV4KChlKSA9PiBlLm5hbWUgPT09IGZpbGUubmFtZSkgPj0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgcmd4QmFzZTY0ID0gUmVnRXhwKFxyXG4gICAgICAgIC9kYXRhOihhcHBsaWNhdGlvbnxpbWFnZSlcXC8oanBlZ3xqcGd8cG5nKik7YmFzZTY0LChbXlwiXSopL2dpbVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZ3ggPSByZ3hCYXNlNjQuZXhlYyhyZWFkZXIucmVzdWx0KTtcclxuXHJcbiAgICAgIGlmIChyZ3ggIT09IG51bGwpIHtcclxuICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW1xyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgbm9tYnJlQXJjaGl2bzogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgIGV4dGVuc2lvbjogcmd4WzJdLFxyXG4gICAgICAgICAgICAgIGJhc2U2NDogcmd4WzNdLFxyXG4gICAgICAgICAgICAgIGJ5dGVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICBdKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpbGVDbGlja0NlcnRpZmljYWRvID0gKCkgPT4ge1xyXG4gICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBub3JtRmlsZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgc3VwZXJhTGltaXRlID0gZmFsc2U7XHJcbiAgICBpZiAoZS5maWxlLnNpemUgLyAxMDAwID4gMjU2KSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKHRydWUpO1xyXG4gICAgICBzdXBlcmFMaW1pdGUgPSB0cnVlO1xyXG4gICAgICBlLmZpbGVMaXN0LnBvcCgpO1xyXG4gICAgICByZXR1cm4gZSAmJiBlLmZpbGVMaXN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8oZmFsc2UpO1xyXG4gICAgICBzdXBlcmFMaW1pdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIC8vIGlmIChlLmZpbGVMaXN0Lmxlbmd0aCA+IDEpIHtcclxuICAgIC8vICAgZS5maWxlTGlzdC5zaGlmdCgpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYgKHN1cGVyYUxpbWl0ZSkge1xyXG4gICAgLy8gICBlLmZpbGVMaXN0ID0gW107XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIGUgJiYgZS5maWxlTGlzdDtcclxuICB9O1xyXG5cclxuICBjb25zdCBsYXlvdXQgPSB7XHJcbiAgICBsYWJlbENvbDogeyBzcGFuOiAyNCB9LFxyXG4gICAgd3JhcHBlckNvbDogeyBzcGFuOiAyNCB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgLi4udmFsdWVzLFxyXG4gICAgICBjb250ZW50X2h0bWw6IGNvbnRlbmlkb1VwZGF0ZSxcclxuICAgICAgaW1hZ2VfZXh0ZW5zaW9uOiB2YWx1ZXMuaW1hZ2VuID8gXCJcIiA6IG51bGwsXHJcbiAgICAgIGltYWdlX2Jhc2U2NDogdmFsdWVzLmltYWdlbiA/IEpTT04uc3RyaW5naWZ5KHZhbHVlcy5pbWFnZW4pIDogbnVsbCxcclxuICAgICAgdHlwZTogXCJwcmVtaW9zXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB1cGRhdGVOb3RpY2lhcyA9IGRhdGFQcm9kdWN0b3M7XHJcblxyXG4gICAgaWYgKHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiKSB7XHJcbiAgICAgIHNldFNwaW5Nb2RhbCh0cnVlKTtcclxuICAgICAgQXBpUHJvZHVjdG9zLnVwZGF0ZVByb2R1Y3RvKHBheWxvYWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU5vdGljaWFzID0gZGF0YVByb2R1Y3Rvcy5tYXAoKG5vdGljaWEpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobm90aWNpYS5pZCA9PT0gdmFsdWVzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZW5fID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGVDZXJ0aWZpY2Fkb1swXSkge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZW5fLmltYWdlQmFzZTY0ID0gZmlsZUNlcnRpZmljYWRvWzBdWzBdLmJhc2U2NDtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VuXy5pbWFnZUV4dGVuc2lvbiA9IGZpbGVDZXJ0aWZpY2Fkb1swXVswXS5leHRlbnNpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4ubm90aWNpYSxcclxuICAgICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgICAgLi4uaW1hZ2VuXyxcclxuICAgICAgICAgICAgICAgICAgdGl0dWxvOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGxlbmd1YWplOiBwYXlsb2FkLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5vdGljaWE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcyh1cGRhdGVOb3RpY2lhcyk7XHJcbiAgICAgICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICBub3RpZmljYShcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2Nlc29BY3R1YWwgPT09IFwiQUdSRUdBUlwiKSB7XHJcbiAgICAgIHNldFNwaW5Nb2RhbCh0cnVlKTtcclxuICAgICAgQXBpUHJvZHVjdG9zLmluc2VydFByb2R1Y3RvKHBheWxvYWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKTtcclxuICAgICAgICAgICAgdXBkYXRlTm90aWNpYXMgPSBbXHJcbiAgICAgICAgICAgICAgLi4uZGF0YVByb2R1Y3RvcyxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgdGl0dWxvOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBsZW5ndWFqZTogcGF5bG9hZC5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXlsb2FkLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICAgIGltYWdlRXh0ZW5zaW9uOiBwYXlsb2FkLmltYWdlX2V4dGVuc2lvbixcclxuICAgICAgICAgICAgICAgIGtleTogdXVpZCxcclxuICAgICAgICAgICAgICAgIGlkOiB1dWlkLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFDcmVhY2lvbjogbW9tZW50KCkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zKHVwZGF0ZU5vdGljaWFzKTtcclxuICAgICAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEVkaXRUd29Ub25lXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiID8gKFxyXG4gICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIHByb2R1Y3RvIGRlIHtlbXByZXNhTm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxzcGFuPkFncmVnYXIgbnVldm8gcHJvZHVjdG8gcGFyYSB7ZW1wcmVzYU5vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIC8vIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBmb290ZXI9e2ZhbHNlfVxyXG4gICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgIGNlbnRlcmVkXHJcbiAgICAgID5cclxuICAgICAgICA8U3BpbiBzcGlubmluZz17c3Bpbk1vZGFsfSBkZWxheT17NTAwfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgey4uLmxheW91dH1cclxuICAgICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogZW1wcmVzYUxlbmd1YWplLFxyXG4gICAgICAgICAgICAgICAgZW1wcmVzYV9pZDogZW1wcmVzYUlkLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJpZFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImVtcHJlc2FfaWRcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17KDQwLCA0MCl9PlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+TGVuZ3VhamU8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCBsZW5ndWFqZVwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGVjY2lvbmVcIiBhbGxvd0NsZWFyIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJlc1wiPkVzcGHDsW9sPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJlblwiPkluZ2zDqXM8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+Tm9tYnJlPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIG5vbWJyZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMTAsIG1lc3NhZ2U6IFwiTcOtbmltbyAxMCBjYXJhY3RlcmVzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG1heExlbmd0aD17MTAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5SZXN1bWVuPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdW1tYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIHJlc3VtZW5cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtaW46IDEwMCwgbWVzc2FnZTogXCJNw61uaW1vIDEwMCBjYXJhY3RlcmVzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG1heExlbmd0aD17NTAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5JbWFnZW5lPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJmaWxlTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tRXZlbnQ9e25vcm1GaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbcOhZ2VuZXMganBnIG8gcG5nIGRlIDxzdHJvbmc+MjAwIHggMjAwIHB4IDwvc3Ryb25nPiAobm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXJpb3IgYSAyMDAgS0IpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBpbWFnZVNyYyAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBZGp1bnRlIGxhcyBpbWFnZW5lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxVcGxvYWQgbmFtZT1cImxvZ29cIiBhY3Rpb249XCIvdXBsb2FkLmRvXCIgbGlzdFR5cGU9XCJwaWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1VwbG9hZD4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlQ2VydGlmaWNhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dVcGxvYWRMaXN0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17KGZpbGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvKGZpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17aGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTGlzdD17ZmlsZUNlcnRpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3Nob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFmaWxpYWNpb24tZGF0b3MtcGVyc29uYWxlc19fc2l6ZS1tZXNzYWdlIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVsIGFyY2hpdm8gbm8gZGViZSBwZXNhciBtw6FzIGRlIDIwMCBLQi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlU3JjICE9PSBcIlwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2RlcjogXCIxcHggc29saWQgI0Q5RDlEOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTUlBQUFERENBWUFBQURRdmM2VUFBQUJSV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFLSkZqWUdBU1NTd295R0ZoWUdESXpTc3BDbkozVW9pSWpGSmdmOExBd1NEQ0lNb2d3TUNjbUZ4YzRCZ1E0QU5Vd2dDalVjRzNhd3lNSVBxeUxzaXM3UFBPcTNRZERGY3ZqVjNqT0QxYm9RVlRQUXJnU2trdFRnYlNmNEE0TGJtZ3FJU0JnVEVGeUZZdUx5a0FzVHVBYkpFaW9LT0E3RGtnZGpxRXZRSEVUb0t3ajREVmhBUTVBOWszZ0d5QjVJeEVvQm1NTDRCc25TUWs4WFFrTnRSZUVPQnhjZlh4VVFnMU1qYzBkeUhnWE5KQlNXcEZDWWgyemkrb0xNcE16eWhSY0FTR1VxcUNaMTZ5bm82Q2tZR1JBUU1ES013aHFqL2ZBSWNsb3hnSFFxeEFqSUhCRXVndzVzVUlzU1FwQm9idFFQZExjaUxFVkpZek1QQkhNREJzYXloSUxFcUVPNER4RzB0eG1yRVJoTTI5bllHQmRkci8vNS9ER1JqWU5Sa1kvbDcvLy8vMzl2Ly8veTREbW4rTGdlSEFOd0Rya2wxQXVPK3BtZ0FBQURobFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBcUFDQUFRQUFBQUJBQUFBd3FBREFBUUFBQUFCQUFBQXd3QUFBQUQ5Yi9IbkFBQUhsa2xFUVZSNEFlM2RQM1BUV0JTR2NiR3pNNkdDS3FsSUJSVjBkSFJKRmFyUTBlVVQ4TEg0Qm5SVTBOSFIwVUVGVmRJbEZSVjdUelJrc29tUFk4dXlrVGsvemV3UWZLdy85em52NHl2SnluTHY0dUxpVjJkQm9EaUJmNHFQMy9BUnVDUkFCRUZBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2cwQWo4aTBKTzRPenNyUHY2OVd2K2hpMnFQSHIwcU52ZjM5K2lJOTdzb1JJaDRmM3o1OC91N2R1M1NYWDdYdDdaMmVuZXZIbXpmUWUrb1NOMmFwU0FQajA5VFNyYitYS0kvZjM3OSswOCtBMGNOUkUyQU5rdXBrK0FDTlB2a1NQY0FBRWliQUN5WFV5ZkFCR20zeU5IdUFFQ1JOZ0FaTHVZUGdFaXJLbEh1N3U3WGR5eXRHd0hBZDhqak55bmc0T0Q3dm56NTFkYlBUOC83ejU4K05COSsvYnQ2alUvVEkrQUdXSEVucng0OGVKL0VzU21Ieng0MEwxOCtmTHl6eEYzWlZNakV5RENpRURqTVlaWlM1d2lQWG55WkZiSmF4TWhRSVFSR3pIdldSN1hDeU9DWHNPbWlEQWkxSG1QTU1RakRwYnBFaURDaUwzNThlTkh1clcvNVNuV2RJQmJYaURDaUEzOC9QbnpyY2UyWXlaNC8vNTlGM2VQTE5NbDRQYnBpTDJKMEw5NzkrN3lEdEhEaHc4dnR6enZkR25FWGR2VWlnU0lzQ0xBV2F2SHAvK3FNMEJjWE1kL3EyNW4xdkY1N1RZQnAwYTNtVXppbGVQajQrN2s1S1NMYjZndDZ5ZEFoUFV6WG5vUFIwZEhsNzlXR1ROQ2ZCbm4xdXZTQ0pkZWdRaExJMXZ2Q2srZlB1MmVQWHQydFpPWUVWNi9mbjMxZHorc2h3QVIxc1AxY3F2TG50YkVOOU14QTl4Y1lqc3hTMWpXUjRBSWEySWJ6eDB0YzQ0ZllYLzE2bFY2TkRGTFhIK1lMMzJqd2lBQ1JCaUViZjVLY1hvVElzUVNwelh4NE4yOEphNEJRb0s3cmdYaXlkYkhqeC9QMjVUYVFBSkVHQWd1V3kwKzJROFBENi9LaTRSOEVWbCtiekJPblpZOTVmcTlyajl6QWtUSTJTeGRpZEJIcUc5K3NrZHc0M2JvckNYTy9aY0pkcmFQV2R2MjJ1SUVpTEE0cTdudnZDdWc4V1RxelF2ZU9IMjZmb2RvN2c2dUZlL2ExN1czK25GQkFrUllFTlJkYjF2a2t6MUNIOWNQc1Z5L2pyaHIyN1BxTVl2RU5ZTmxIQUllc1JpQll3UnkwVis4aVhQOCsvZnZYMTFNcjdMN0VDdWViL3I0OGVNcW03RnVJMkJHV0RFRzhjbSs3RzNORU9mbWRjVFF3NGg5LzU1bGhtN0Rla1JZS1FQWkYyQXJiWFRBeXU0a0RZQjJZeFV6d2cwZ2kvNDF6dEhuZlFHMjZIYkdlbC9jclZybTd0TlkrLzFidGtPRUFaMk0wNXI0RkI3cjlHYkFJZHhhWllySGRPc2dKL3dDRVFZMEo3NFRtT0tuYnh4VDluM0ZnR0dXV3NWZG93SHRqdDlObnZmN3lRTTJhWlUvVElBSUF4cnc2ZE9uQVd0Wlpjb0VuQnBOdVR1T2JXTUVpTEF4MUhZMFpRSkVtSEozSE52R0NCQmhZNmp0YU1vRWlKQjBaMjl2TDZsczU4dnhQY084L3pmcmRvNXF2S08rZDNGeDhXdTh6ZjFkVzRwL2NQekxseS9kdHY5VHMvRWJjdkdBSGhIeWZCSWhaNk5TaUlCVG8wTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQy93R2dLS0M0WU1BNFRBQUFBQUJKUlU1RXJrSmdnZz09XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz7Cv0Rlc2VhIHZpc3VhbGl6YWNpw7NuIGVuIGVsIEhvbWU/PC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxpemFjaW9uSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5ncmVzZSB2aXN1YWxpemFjacOzbiBlbiBlbCBIb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlNcIj5TaTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiTlwiPk5vPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFyY2FyUHJpbmNpcGFsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7Cv0Rlc2VhIG1hcmNhciBjb21vIHByaW5jaXBhbD88L3N0cm9uZz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTaSBzZWxlY2Npb25hICdTaScgc2UgYWdyZWdhcsOhIGNvbW8gbm90aWNpYXMgcHJpbmNpcGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW4gZWwgaG9tZSAoZWwgY3VhZHJvIGdyYW5kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2VsZWNjaW9uZSBzaSBvIG5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJTXCI+U2k8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiTlwiPk5vPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uSXRlbSBuYW1lPVwibWFyY2FyUHJpbmNpcGFsXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtcmVxdWlyZWRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29udGVuaWRvOjwvc3Ryb25nPiAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2NvbnRlbmlkb1VwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXt7IHNldENvbnRlbmlkb1VwZGF0ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2FuY2VsfT5Wb2x2ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWN0dWFsaXphciBwcm9kdWN0bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBwcm9kdWN0bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NwaW4+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnRuQWN0dWFsaXphcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==