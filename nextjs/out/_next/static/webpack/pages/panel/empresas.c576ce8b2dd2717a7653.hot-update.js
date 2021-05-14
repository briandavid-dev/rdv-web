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
    console.log("producto.imageBase64", producto.imageBase64);

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
                    children: "Imagenes"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9CdG5QcmVtaW9zL0J0bkFjdHVhbGl6YXIvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yIiwiZHluYW1pYyIsInNzciIsIkJ0bkFjdHVhbGl6YXIiLCJwcm9wcyIsImVtcHJlc2FJZCIsImVtcHJlc2FOb21icmUiLCJlbXByZXNhTGVuZ3VhamUiLCJkYXRhUHJvZHVjdG9zIiwic2V0RGF0YVByb2R1Y3RvcyIsImlkVXBkYXRlIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwidXNlU3RhdGUiLCJwcm9jZXNvQWN0dWFsIiwic2V0UHJvY2Vzb0FjdHVhbCIsImlzTW9kYWxWaXNpYmxlIiwic2V0SXNNb2RhbFZpc2libGUiLCJzcGluTW9kYWwiLCJzZXRTcGluTW9kYWwiLCJmaWxlQ2VydGlmaWNhZG8iLCJzZXRGaWxlQ2VydGlmaWNhZG8iLCJzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyIsInNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImNvbnRlbmlkb1VwZGF0ZSIsInNldENvbnRlbmlkb1VwZGF0ZSIsInVzZUVmZmVjdCIsInByb2R1Y3RvIiwiZmluZCIsImlkIiwic2V0RmllbGRzVmFsdWUiLCJsYW5ndWFnZSIsImxlbmd1YWplIiwibmFtZSIsInRpdHVsbyIsImNvbnRlbmlkbyIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZUJhc2U2NCIsImltYWdlRXh0ZW5zaW9uIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlQmVmb3JlVXBsb2FkQ2VydGlmaWNhZG8iLCJmaWxlIiwic2l6ZSIsImZpbmRJbmRleCIsImUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZGVuZCIsInJneEJhc2U2NCIsIlJlZ0V4cCIsInJneCIsImV4ZWMiLCJyZXN1bHQiLCJub21icmVBcmNoaXZvIiwiZXh0ZW5zaW9uIiwiYmFzZTY0IiwiYnl0ZXMiLCJoYW5kbGVSZW1vdmVGaWxlQ2xpY2tDZXJ0aWZpY2FkbyIsIm5vcm1GaWxlIiwic3VwZXJhTGltaXRlIiwiZmlsZUxpc3QiLCJwb3AiLCJBcnJheSIsImlzQXJyYXkiLCJsYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJwYXlsb2FkIiwiY29udGVudF9odG1sIiwiaW1hZ2VfZXh0ZW5zaW9uIiwiaW1hZ2VuIiwiaW1hZ2VfYmFzZTY0IiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJ1cGRhdGVOb3RpY2lhcyIsIkFwaVByb2R1Y3RvcyIsInVwZGF0ZVByb2R1Y3RvIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvZGlnbyIsIm1hcCIsIm5vdGljaWEiLCJpbWFnZW5fIiwibm90aWZpY2EiLCJlcnJvciIsImluc2VydFByb2R1Y3RvIiwidXVpZCIsInV1aWR2NCIsImtleSIsImZlY2hhQ3JlYWNpb24iLCJtb21lbnQiLCJmb3JtYXQiLCJlbXByZXNhX2lkIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWluIiwiY29sb3IiLCJib2RlciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFDcEIsY0FBTTtBQUNKLFNBQU8sMElBQVA7QUFDRCxDQUhtQixFQUlwQjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FGZ0IsMkRBRWhCO0FBQUE7QUFBQSxjQUZnQixjQUVoQjtBQUFBO0FBQUEsQ0FKb0IsQ0FBdEI7TUFBTUYsTTs7QUFPTixJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BRTdCQyxTQUY2QixHQVEzQkQsS0FSMkIs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RWxFLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGLEVBSUcsSUFKSCxlQUtFLHNFQUFDLDJDQUFEO0FBQVEsc0JBQUksRUFBQyxTQUFiO0FBQXVCLDBCQUFRLEVBQUMsUUFBaEM7QUFBQSw0QkFDRzVCLGFBQWEsS0FBSyxZQUFsQixnQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERCxnQkFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQW5LRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUFpT0QsQ0EvYUQ7O0dBQU1aLGE7VUFVV1EseUNBQUksQ0FBQ0MsTzs7O01BVmhCVCxhO0FBaWJTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYW5lbC9lbXByZXNhcy5jNTc2Y2U4YjJkZDI3MTdhNzY1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIFNwaW4sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFNlbGVjdCxcclxuICBVcGxvYWQsXHJcbiAgSW1hZ2UsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQsIEVkaXRUd29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IEFwaVByb2R1Y3RvcyBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IG5vdGlmaWNhIGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlscy9ub3RpZmljYVwiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAoKSA9PiB7XHJcbiAgICByZXR1cm4gaW1wb3J0KFwiLi4vLi4vRWRpdG9yXCIpO1xyXG4gIH0sXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuXHJcbmNvbnN0IEJ0bkFjdHVhbGl6YXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBlbXByZXNhSWQsXHJcbiAgICBlbXByZXNhTm9tYnJlLFxyXG4gICAgZW1wcmVzYUxlbmd1YWplLFxyXG4gICAgZGF0YVByb2R1Y3RvcyxcclxuICAgIHNldERhdGFQcm9kdWN0b3MsXHJcbiAgICBpZFVwZGF0ZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cclxuICBjb25zdCBbcHJvY2Vzb0FjdHVhbCwgc2V0UHJvY2Vzb0FjdHVhbF0gPSB1c2VTdGF0ZShcIkFDVFVBTElaQVJcIik7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlLCBzZXRJc01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NwaW5Nb2RhbCwgc2V0U3Bpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmlsZUNlcnRpZmljYWRvLCBzZXRGaWxlQ2VydGlmaWNhZG9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbywgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG9dID1cclxuICAgIHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250ZW5pZG9VcGRhdGUsIHNldENvbnRlbmlkb1VwZGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgIC8vIHNldENvbnRlbmlkb1VwZGF0ZShcIlwiKTtcclxuICAgIC8vIHNldEltYWdlU3JjKFwiXCIpO1xyXG4gICAgLy8gc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdG8gPSBkYXRhUHJvZHVjdG9zLmZpbmQoKHByb2R1Y3RvKSA9PiBwcm9kdWN0by5pZCA9PT0gaWRVcGRhdGUpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIGlkOiBwcm9kdWN0by5pZCxcclxuICAgICAgbGFuZ3VhZ2U6IHByb2R1Y3RvLmxlbmd1YWplLFxyXG4gICAgICBuYW1lOiBwcm9kdWN0by50aXR1bG8sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRDb250ZW5pZG9VcGRhdGUocHJvZHVjdG8uY29udGVuaWRvKTtcclxuICAgIGNvbnNvbGUubG9nKGBwcm9kdWN0by5pbWFnZUJhc2U2NGAsIHByb2R1Y3RvLmltYWdlQmFzZTY0KTtcclxuICAgIGlmIChwcm9kdWN0by5pbWFnZUJhc2U2NCAhPT0gXCJcIikge1xyXG4gICAgICBzZXRJbWFnZVNyYyhcclxuICAgICAgICBgZGF0YTppbWFnZS8ke3Byb2R1Y3RvLmltYWdlRXh0ZW5zaW9ufTtiYXNlNjQsJHtwcm9kdWN0by5pbWFnZUJhc2U2NH1gXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJbWFnZVNyYyhcIlwiKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCZWZvcmVVcGxvYWRDZXJ0aWZpY2FkbyA9IChmaWxlKSA9PiB7XHJcbiAgICAvLyA1IE1CID0gMTAyNCAqIDUgPSA1MTIwXHJcbiAgICBpZiAoZmlsZS5zaXplIC8gMTAwMCA+IDI1Nikge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8oZmFsc2UpO1xyXG5cclxuICAgIGlmIChmaWxlQ2VydGlmaWNhZG8uZmluZEluZGV4KChlKSA9PiBlLm5hbWUgPT09IGZpbGUubmFtZSkgPj0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgcmd4QmFzZTY0ID0gUmVnRXhwKFxyXG4gICAgICAgIC9kYXRhOihhcHBsaWNhdGlvbnxpbWFnZSlcXC8oanBlZ3xqcGd8cG5nKik7YmFzZTY0LChbXlwiXSopL2dpbVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZ3ggPSByZ3hCYXNlNjQuZXhlYyhyZWFkZXIucmVzdWx0KTtcclxuXHJcbiAgICAgIGlmIChyZ3ggIT09IG51bGwpIHtcclxuICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW1xyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgbm9tYnJlQXJjaGl2bzogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgIGV4dGVuc2lvbjogcmd4WzJdLFxyXG4gICAgICAgICAgICAgIGJhc2U2NDogcmd4WzNdLFxyXG4gICAgICAgICAgICAgIGJ5dGVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICBdKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpbGVDbGlja0NlcnRpZmljYWRvID0gKCkgPT4ge1xyXG4gICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBub3JtRmlsZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgc3VwZXJhTGltaXRlID0gZmFsc2U7XHJcbiAgICBpZiAoZS5maWxlLnNpemUgLyAxMDAwID4gMjU2KSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKHRydWUpO1xyXG4gICAgICBzdXBlcmFMaW1pdGUgPSB0cnVlO1xyXG4gICAgICBlLmZpbGVMaXN0LnBvcCgpO1xyXG4gICAgICByZXR1cm4gZSAmJiBlLmZpbGVMaXN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8oZmFsc2UpO1xyXG4gICAgICBzdXBlcmFMaW1pdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIC8vIGlmIChlLmZpbGVMaXN0Lmxlbmd0aCA+IDEpIHtcclxuICAgIC8vICAgZS5maWxlTGlzdC5zaGlmdCgpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYgKHN1cGVyYUxpbWl0ZSkge1xyXG4gICAgLy8gICBlLmZpbGVMaXN0ID0gW107XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIGUgJiYgZS5maWxlTGlzdDtcclxuICB9O1xyXG5cclxuICBjb25zdCBsYXlvdXQgPSB7XHJcbiAgICBsYWJlbENvbDogeyBzcGFuOiAyNCB9LFxyXG4gICAgd3JhcHBlckNvbDogeyBzcGFuOiAyNCB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgLi4udmFsdWVzLFxyXG4gICAgICBjb250ZW50X2h0bWw6IGNvbnRlbmlkb1VwZGF0ZSxcclxuICAgICAgaW1hZ2VfZXh0ZW5zaW9uOiB2YWx1ZXMuaW1hZ2VuID8gXCJcIiA6IG51bGwsXHJcbiAgICAgIGltYWdlX2Jhc2U2NDogdmFsdWVzLmltYWdlbiA/IEpTT04uc3RyaW5naWZ5KHZhbHVlcy5pbWFnZW4pIDogbnVsbCxcclxuICAgICAgdHlwZTogXCJwcmVtaW9zXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB1cGRhdGVOb3RpY2lhcyA9IGRhdGFQcm9kdWN0b3M7XHJcblxyXG4gICAgaWYgKHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiKSB7XHJcbiAgICAgIHNldFNwaW5Nb2RhbCh0cnVlKTtcclxuICAgICAgQXBpUHJvZHVjdG9zLnVwZGF0ZVByb2R1Y3RvKHBheWxvYWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU5vdGljaWFzID0gZGF0YVByb2R1Y3Rvcy5tYXAoKG5vdGljaWEpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobm90aWNpYS5pZCA9PT0gdmFsdWVzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZW5fID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGVDZXJ0aWZpY2Fkb1swXSkge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZW5fLmltYWdlQmFzZTY0ID0gZmlsZUNlcnRpZmljYWRvWzBdWzBdLmJhc2U2NDtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VuXy5pbWFnZUV4dGVuc2lvbiA9IGZpbGVDZXJ0aWZpY2Fkb1swXVswXS5leHRlbnNpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4ubm90aWNpYSxcclxuICAgICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgICAgLi4uaW1hZ2VuXyxcclxuICAgICAgICAgICAgICAgICAgdGl0dWxvOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGxlbmd1YWplOiBwYXlsb2FkLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5vdGljaWE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcyh1cGRhdGVOb3RpY2lhcyk7XHJcbiAgICAgICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICBub3RpZmljYShcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2Nlc29BY3R1YWwgPT09IFwiQUdSRUdBUlwiKSB7XHJcbiAgICAgIHNldFNwaW5Nb2RhbCh0cnVlKTtcclxuICAgICAgQXBpUHJvZHVjdG9zLmluc2VydFByb2R1Y3RvKHBheWxvYWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKTtcclxuICAgICAgICAgICAgdXBkYXRlTm90aWNpYXMgPSBbXHJcbiAgICAgICAgICAgICAgLi4uZGF0YVByb2R1Y3RvcyxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgdGl0dWxvOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBsZW5ndWFqZTogcGF5bG9hZC5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXlsb2FkLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICAgIGltYWdlRXh0ZW5zaW9uOiBwYXlsb2FkLmltYWdlX2V4dGVuc2lvbixcclxuICAgICAgICAgICAgICAgIGtleTogdXVpZCxcclxuICAgICAgICAgICAgICAgIGlkOiB1dWlkLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFDcmVhY2lvbjogbW9tZW50KCkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zKHVwZGF0ZU5vdGljaWFzKTtcclxuICAgICAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEVkaXRUd29Ub25lXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiID8gKFxyXG4gICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIHByb2R1Y3RvIGRlIHtlbXByZXNhTm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxzcGFuPkFncmVnYXIgbnVldm8gcHJvZHVjdG8gcGFyYSB7ZW1wcmVzYU5vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIC8vIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBmb290ZXI9e2ZhbHNlfVxyXG4gICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgIGNlbnRlcmVkXHJcbiAgICAgID5cclxuICAgICAgICA8U3BpbiBzcGlubmluZz17c3Bpbk1vZGFsfSBkZWxheT17NTAwfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgey4uLmxheW91dH1cclxuICAgICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogZW1wcmVzYUxlbmd1YWplLFxyXG4gICAgICAgICAgICAgICAgZW1wcmVzYV9pZDogZW1wcmVzYUlkLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJpZFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImVtcHJlc2FfaWRcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17KDQwLCA0MCl9PlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+TGVuZ3VhamU8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCBsZW5ndWFqZVwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGVjY2lvbmVcIiBhbGxvd0NsZWFyIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJlc1wiPkVzcGHDsW9sPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJlblwiPkluZ2zDqXM8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+Tm9tYnJlPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIG5vbWJyZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMTAsIG1lc3NhZ2U6IFwiTcOtbmltbyAxMCBjYXJhY3RlcmVzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG1heExlbmd0aD17MTAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5SZXN1bWVuPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdW1tYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIHJlc3VtZW5cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtaW46IDEwMCwgbWVzc2FnZTogXCJNw61uaW1vIDEwMCBjYXJhY3RlcmVzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG1heExlbmd0aD17NTAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5JbWFnZW5lczwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lPVwiZmlsZUxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGdldFZhbHVlRnJvbUV2ZW50PXtub3JtRmlsZX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW3DoWdlbmVzIGpwZyBvIHBuZyBkZSA8c3Ryb25nPjIwMCB4IDIwMCBweCA8L3N0cm9uZz4gKG5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyaW9yIGEgMjAwIEtCKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogaW1hZ2VTcmMgIT09IFwiXCIgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWRqdW50ZSBsYXMgaW1hZ2VuZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8VXBsb2FkIG5hbWU9XCJsb2dvXCIgYWN0aW9uPVwiL3VwbG9hZC5kb1wiIGxpc3RUeXBlPVwicGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9VcGxvYWQ+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZUNlcnRpZmljYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVVcGxvYWQ9eyhmaWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCZWZvcmVVcGxvYWRDZXJ0aWZpY2FkbyhmaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e2hhbmRsZVJlbW92ZUZpbGVDbGlja0NlcnRpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZUxpc3Q9e2ZpbGVDZXJ0aWZpY2Fkb31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZmlsaWFjaW9uLWRhdG9zLXBlcnNvbmFsZXNfX3NpemUtbWVzc2FnZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbCBhcmNoaXZvIG5vIGRlYmUgcGVzYXIgbcOhcyBkZSAyMDAgS0IuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZVNyYyAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9kZXI6IFwiMXB4IHNvbGlkICNEOUQ5RDlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1JQUFBRERDQVlBQUFEUXZjNlVBQUFCUldsRFExQkpRME1nVUhKdlptbHNaUUFBS0pGallHQVNTU3dveUdGaFlHREl6U3NwQ25KM1VvaUlqRkpnZjhMQXdTRENJTW9nd01DY21GeGM0QmdRNEFOVXdnQ2pVY0czYXd5TUlQcXlMc2lzN1BQT3EzUWRERmN2alYzak9EMWJvUVZUUFFyZ1Nra3RUZ2JTZjRBNExibWdxSVNCZ1RFRnlGWXVMeWtBc1R1QWJKRWlvS09BN0RrZ2RqcUV2UUhFVG9Ld2o0RFZoQVE1QTlrM2dHeUI1SXhFb0JtTUw0QnNuU1FrOFhRa050UmVFT0J4Y2ZYeFVRZzFNamMwZHlIZ1hOSkJTV3BGQ1loMnppK29MTXBNenloUmNBU0dVcXFDWjE2eW5vNkNrWUdSQVFNREtNd2hxai9mQUljbG94Z0hRcXhBaklIQkV1Z3c1c1VJc1NRcEJvYnRRUGRMY2lMRVZKWXpNUEJITURCc2F5aElMRXFFTzREeEcwdHhtckVSaE0yOW5ZR0JkZHIvLzUvREdSallOUmtZL2w3Ly8vLzM5di8vL3k0RG1uK0xnZUhBTndEcmtsMUF1TytwbWdBQUFEaGxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQXFBQ0FBUUFBQUFCQUFBQXdxQURBQVFBQUFBQkFBQUF3d0FBQUFEOWIvSG5BQUFIbGtsRVFWUjRBZTNkUDNQVFdCU0djYkd6TTZHQ0txbElCUlYwZEhSSkZhclEwZVVUOExINEJuUlUwTkhSMFVFRlZkSWxGUlY3VHpSa3NvbVBZOHV5a1RrL3pld1FmS3cvOXpudjR5dkp5bkx2NHVMaVYyZEJvRGlCZjRxUDMvQVJ1Q1JBQkVGQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnMEFqOGkwSk80T3pzclB2NjlXditoaTJxUEhyMHFOdmYzOStpSTk3c29SSWg0ZjN6NTgvdTdkdTNTWFg3WHQ3WjJlbmV2SG16ZlFlK29TTjJhcFNBUGowOVRTcmIrWEtJL2YzNzkrMDgrQTBjTlJFMkFOa3VwaytBQ05QdmtTUGNBQUVpYkFDeVhVeWZBQkdtM3lOSHVBRUNSTmdBWkx1WVBnRWlyS2xIdTd1N1hkeXl0R3dIQWQ4ampOeW5nNE9EN3ZuejUxZGJQVDgvN3o1OCtOQjkrL2J0NmpVL1RJK0FHV0hFbnJ4NDhlSi9Fc1NtSHp4NDBMMTgrZkx5enhGM1pWTWpFeURDaUVEak1ZWlpTNXdpUFhueVpGYkpheE1oUUlRUkd6SHZXUjdYQ3lPQ1hzT21pREFpMUhtUE1NUWpEcGJwRWlEQ2lMMzU4ZU5IdXJXLzVTbldkSUJiWGlEQ2lBMzgvUG56cmNlMll5WjQvLzU5RjNlUExOTWw0UGJwaUwySjBMOTc5Kzd5RHRIRGh3OHZ0enp2ZEduRVhkdlVpZ1NJc0NMQVdhdkhwLytxTTBCY1hNZC9xMjVuMXZGNTdUWUJwMGEzbVV6aWxlUGo0KzdrNUtTTGI2Z3Q2eWRBaFBVelhub1BSMGRIbDc5V0dUTkNmQm5uMXV2U0NKZGVnUWhMSTF2dkNrK2ZQdTJlUFh0MnRaT1lFVjYvZm4zMWR6K3Nod0FSMXNQMWNxdkxudGJFTjlNeEE5eGNZanN4UzFqV1I0QUlhMkliengwdGM0NGZZWC8xNmxWNk5ERkxYSCtZTDMyandpQUNSQmlFYmY1S2NYb1RJc1FTcHpYeDROMjhKYTRCUW9LN3JnWGl5ZGJIangvUDI1VGFRQUpFR0FndVd5MCsyUThQRDYvS2k0UjhFVmwrYnpCT25aWTk1ZnE5cmo5ekFrVEkyU3hkaWRCSHFHOStza2R3NDNib3JDWE8vWmNKZHJhUFdkdjIydUlFaUxBNHE3bnZ2Q3VnOFdUcXpRdmVPSDI2Zm9kbzdnNnVGZS9hMTdXMytuRkJBa1JZRU5SZGIxdmtrejFDSDljUHNWeS9qcmhyMjdQcU1ZdkVOWU5sSEFJZXNSaUJZd1J5MFYrOGlYUDgrL2Z2WDExTXI3TDdFQ3VlYi9yNDhlTXFtN0Z1STJCR1dERUc4Y20rN0czTkVPZm1kY1RRdzRoOS81NWxobTdEZWtSWUtRUFpGMkFyYlhUQXl1NGtEWUIyWXhVendnMGdpLzQxenRIbmZRRzI2SGJHZWwvY3JWcm03dE5ZKy8xYnRrT0VBWjJNMDVyNEZCN3I5R2JBSWR4YVpZckhkT3NnSi93Q0VRWTBKNzRUbU9LbmJ4eFQ5bjNGZ0dHV1dzVmRvd0h0anQ5Tm52Zjd5UU0yYVpVL1RJQUlBeHJ3NmRPbkFXdFpaY29FbkJwTnVUdU9iV01FaUxBeDFIWTBaUUpFbUhKM0hOdkdDQkJoWTZqdGFNb0VpSkIwWjI5dkw2bHM1OHZ4UGNPOC96ZnJkbzVxdktPK2QzRng4V3U4emYxZFc0cC9jUHpMbHkvZHR2OVRzL0ViY3ZHQUhoSHlmQkloWjZOU2lJQlRvMExOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUMvd0dnS0tDNFlNQTRUQUFBQUFCSlJVNUVya0pnZ2c9PVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICB7LyogPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+wr9EZXNlYSB2aXN1YWxpemFjacOzbiBlbiBlbCBIb21lPzwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsaXphY2lvbkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkluZ3Jlc2UgdmlzdWFsaXphY2nDs24gZW4gZWwgSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGVjY2lvbmVcIiBhbGxvd0NsZWFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJTXCI+U2k8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIk5cIj5ObzwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hcmNhclByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wr9EZXNlYSBtYXJjYXIgY29tbyBwcmluY2lwYWw/PC9zdHJvbmc+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2kgc2VsZWNjaW9uYSAnU2knIHNlIGFncmVnYXLDoSBjb21vIG5vdGljaWFzIHByaW5jaXBhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuIGVsIGhvbWUgKGVsIGN1YWRybyBncmFuZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlNlbGVjY2lvbmUgc2kgbyBub1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiU1wiPlNpPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIk5cIj5ObzwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkl0ZW0gbmFtZT1cIm1hcmNhclByaW5jaXBhbFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsLXJlcXVpcmVkXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkNvbnRlbmlkbzo8L3N0cm9uZz4gJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtjb250ZW5pZG9VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17eyBzZXRDb250ZW5pZG9VcGRhdGUgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH0+Vm9sdmVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9jZXNvQWN0dWFsID09PSBcIkFDVFVBTElaQVJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFjdHVhbGl6YXIgcHJvZHVjdG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFncmVnYXIgcHJvZHVjdG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ0bkFjdHVhbGl6YXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=