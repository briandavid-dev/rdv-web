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
      // setImageSrc(
      //   `data:image/${producto.imageExtension};base64,${producto.imageBase64}`
      // );
      console.log("producto.imageBase64", JSON.parse(producto.imageBase64));
      setFileCertificado(JSON.parse(producto.imageBase64));
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
    console.log("e.fileList", e.fileList);
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
      lineNumber: 241,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
      title: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Actualizar premio de ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Agregar nuevo premio para ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 252,
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
                lineNumber: 276,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
              name: "empresa_id",
              hidden: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
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
                    lineNumber: 284,
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
                      lineNumber: 289,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option, {
                      value: "en",
                      children: "Ingl\xE9s"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 290,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Nombre"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
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
                    lineNumber: 304,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Imagenes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
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
                      lineNumber: 329,
                      columnNumber: 47
                    }, _this), " (no superior a 200 KB)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 328,
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
                    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                    defaultFileList: [{
                      uid: "1",
                      name: "xxx.png",
                      status: "done",
                      response: "Server Error 500",
                      // custom error message to show
                      url: "https://www.bmosoluciones.com/assets/images/logo_node.png"
                    }, {
                      uid: "2",
                      name: "yyy.png",
                      status: "done",
                      url: "https://www.bmosoluciones.com/assets/images/logo_c_sharp.svg"
                    }, {
                      uid: "3",
                      name: "zzz.png",
                      status: "error",
                      response: "Server Error 500",
                      // custom error message to show
                      url: "https://www.bmosoluciones.com/assets/images/logo_react.svg"
                    }],
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UploadOutlined"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 380,
                        columnNumber: 37
                      }, _this),
                      children: "Click para adjuntar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 380,
                      columnNumber: 23
                    }, _this), showSizeMessageCertificado && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                      className: "afiliacion-datos-personales__size-message ",
                      style: {
                        color: "red"
                      },
                      children: "El archivo no debe pesar m\xE1s de 200 KB."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 385,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 346,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 322,
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
                    lineNumber: 401,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 395,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 427,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  className: "label-required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 457,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                  children: "Contenido:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 458,
                  columnNumber: 19
                }, _this), " \xA0\xA0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 456,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 461,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Editor, {
                  data: contenidoUpdate,
                  actions: {
                    setContenidoUpdate: setContenidoUpdate
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 462,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 460,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                style: {
                  textAlign: "center"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 468,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 469,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  onClick: handleCancel,
                  children: "Volver"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 470,
                  columnNumber: 19
                }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  type: "primary",
                  htmlType: "submit",
                  children: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Actualizar premio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 474,
                    columnNumber: 23
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Agregar premio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 476,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 472,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 467,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 15
            }, _this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9CdG5QcmVtaW9zL0J0bkFjdHVhbGl6YXIvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yIiwiZHluYW1pYyIsInNzciIsIkJ0bkFjdHVhbGl6YXIiLCJwcm9wcyIsImVtcHJlc2FJZCIsImVtcHJlc2FOb21icmUiLCJlbXByZXNhTGVuZ3VhamUiLCJkYXRhUHJvZHVjdG9zIiwic2V0RGF0YVByb2R1Y3RvcyIsImlkVXBkYXRlIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwidXNlU3RhdGUiLCJwcm9jZXNvQWN0dWFsIiwic2V0UHJvY2Vzb0FjdHVhbCIsImlzTW9kYWxWaXNpYmxlIiwic2V0SXNNb2RhbFZpc2libGUiLCJzcGluTW9kYWwiLCJzZXRTcGluTW9kYWwiLCJmaWxlQ2VydGlmaWNhZG8iLCJzZXRGaWxlQ2VydGlmaWNhZG8iLCJzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyIsInNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImNvbnRlbmlkb1VwZGF0ZSIsInNldENvbnRlbmlkb1VwZGF0ZSIsInVzZUVmZmVjdCIsInByb2R1Y3RvIiwiZmluZCIsImlkIiwic2V0RmllbGRzVmFsdWUiLCJsYW5ndWFnZSIsImxlbmd1YWplIiwibmFtZSIsInRpdHVsbyIsImNvbnRlbmlkbyIsImltYWdlQmFzZTY0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvIiwiZmlsZSIsInNpemUiLCJmaW5kSW5kZXgiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJyZ3hCYXNlNjQiLCJSZWdFeHAiLCJyZ3giLCJleGVjIiwicmVzdWx0Iiwibm9tYnJlQXJjaGl2byIsImV4dGVuc2lvbiIsImJhc2U2NCIsImJ5dGVzIiwiaGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG8iLCJub3JtRmlsZSIsImZpbGVMaXN0Iiwic3VwZXJhTGltaXRlIiwicG9wIiwiQXJyYXkiLCJpc0FycmF5IiwibGF5b3V0IiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsIm9uRmluaXNoIiwidmFsdWVzIiwicGF5bG9hZCIsImNvbnRlbnRfaHRtbCIsImltYWdlX2V4dGVuc2lvbiIsImltYWdlbiIsImltYWdlX2Jhc2U2NCIsInN0cmluZ2lmeSIsInR5cGUiLCJ1cGRhdGVOb3RpY2lhcyIsIkFwaVByb2R1Y3RvcyIsInVwZGF0ZVByb2R1Y3RvIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvZGlnbyIsIm1hcCIsIm5vdGljaWEiLCJpbWFnZW5fIiwiaW1hZ2VFeHRlbnNpb24iLCJub3RpZmljYSIsImVycm9yIiwiaW5zZXJ0UHJvZHVjdG8iLCJ1dWlkIiwidXVpZHY0Iiwia2V5IiwiZmVjaGFDcmVhY2lvbiIsIm1vbWVudCIsImZvcm1hdCIsImVtcHJlc2FfaWQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJtaW4iLCJ1aWQiLCJzdGF0dXMiLCJ1cmwiLCJjb2xvciIsImJvZGVyIiwicGFkZGluZyIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtREFBTyxNQUNwQixjQUFNO0FBQ0osU0FBTywwSUFBUDtBQUNELENBSG1CLEVBSXBCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUZnQiwyREFFaEI7QUFBQTtBQUFBLGNBRmdCLGNBRWhCO0FBQUE7QUFBQSxDQUpvQixDQUF0QjtNQUFNRixNOztBQU9OLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FB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QUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUF3UEQsQ0EzY0Q7O0dBQU1aLGE7VUFVV1EseUNBQUksQ0FBQ0MsTzs7O01BVmhCVCxhO0FBNmNTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYW5lbC9lbXByZXNhcy5mYjFmODQ5NjkzOTQ5YWRiMmEzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIFNwaW4sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFNlbGVjdCxcclxuICBVcGxvYWQsXHJcbiAgSW1hZ2UsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQsIEVkaXRUd29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IEFwaVByb2R1Y3RvcyBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IG5vdGlmaWNhIGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlscy9ub3RpZmljYVwiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAoKSA9PiB7XHJcbiAgICByZXR1cm4gaW1wb3J0KFwiLi4vLi4vRWRpdG9yXCIpO1xyXG4gIH0sXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuXHJcbmNvbnN0IEJ0bkFjdHVhbGl6YXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBlbXByZXNhSWQsXHJcbiAgICBlbXByZXNhTm9tYnJlLFxyXG4gICAgZW1wcmVzYUxlbmd1YWplLFxyXG4gICAgZGF0YVByb2R1Y3RvcyxcclxuICAgIHNldERhdGFQcm9kdWN0b3MsXHJcbiAgICBpZFVwZGF0ZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cclxuICBjb25zdCBbcHJvY2Vzb0FjdHVhbCwgc2V0UHJvY2Vzb0FjdHVhbF0gPSB1c2VTdGF0ZShcIkFDVFVBTElaQVJcIik7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlLCBzZXRJc01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NwaW5Nb2RhbCwgc2V0U3Bpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmlsZUNlcnRpZmljYWRvLCBzZXRGaWxlQ2VydGlmaWNhZG9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbywgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG9dID1cclxuICAgIHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250ZW5pZG9VcGRhdGUsIHNldENvbnRlbmlkb1VwZGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgIC8vIHNldENvbnRlbmlkb1VwZGF0ZShcIlwiKTtcclxuICAgIC8vIHNldEltYWdlU3JjKFwiXCIpO1xyXG4gICAgLy8gc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdG8gPSBkYXRhUHJvZHVjdG9zLmZpbmQoKHByb2R1Y3RvKSA9PiBwcm9kdWN0by5pZCA9PT0gaWRVcGRhdGUpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIGlkOiBwcm9kdWN0by5pZCxcclxuICAgICAgbGFuZ3VhZ2U6IHByb2R1Y3RvLmxlbmd1YWplLFxyXG4gICAgICBuYW1lOiBwcm9kdWN0by50aXR1bG8sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRDb250ZW5pZG9VcGRhdGUocHJvZHVjdG8uY29udGVuaWRvKTtcclxuXHJcbiAgICBpZiAocHJvZHVjdG8uaW1hZ2VCYXNlNjQgIT09IFwiXCIpIHtcclxuICAgICAgLy8gc2V0SW1hZ2VTcmMoXHJcbiAgICAgIC8vICAgYGRhdGE6aW1hZ2UvJHtwcm9kdWN0by5pbWFnZUV4dGVuc2lvbn07YmFzZTY0LCR7cHJvZHVjdG8uaW1hZ2VCYXNlNjR9YFxyXG4gICAgICAvLyApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coYHByb2R1Y3RvLmltYWdlQmFzZTY0YCwgSlNPTi5wYXJzZShwcm9kdWN0by5pbWFnZUJhc2U2NCkpO1xyXG5cclxuICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKEpTT04ucGFyc2UocHJvZHVjdG8uaW1hZ2VCYXNlNjQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEltYWdlU3JjKFwiXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvID0gKGZpbGUpID0+IHtcclxuICAgIC8vIDUgTUIgPSAxMDI0ICogNSA9IDUxMjBcclxuICAgIGlmIChmaWxlLnNpemUgLyAxMDAwID4gMjU2KSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKHRydWUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyhmYWxzZSk7XHJcblxyXG4gICAgaWYgKGZpbGVDZXJ0aWZpY2Fkby5maW5kSW5kZXgoKGUpID0+IGUubmFtZSA9PT0gZmlsZS5uYW1lKSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCByZ3hCYXNlNjQgPSBSZWdFeHAoXHJcbiAgICAgICAgL2RhdGE6KGFwcGxpY2F0aW9ufGltYWdlKVxcLyhqcGVnfGpwZ3xwbmcqKTtiYXNlNjQsKFteXCJdKikvZ2ltXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJneCA9IHJneEJhc2U2NC5leGVjKHJlYWRlci5yZXN1bHQpO1xyXG5cclxuICAgICAgaWYgKHJneCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICBub21icmVBcmNoaXZvOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgZXh0ZW5zaW9uOiByZ3hbMl0sXHJcbiAgICAgICAgICAgICAgYmFzZTY0OiByZ3hbM10sXHJcbiAgICAgICAgICAgICAgYnl0ZXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG8gPSAoKSA9PiB7XHJcbiAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vcm1GaWxlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBlLmZpbGVMaXN0YCwgZS5maWxlTGlzdCk7XHJcbiAgICBsZXQgc3VwZXJhTGltaXRlID0gZmFsc2U7XHJcbiAgICBpZiAoZS5maWxlLnNpemUgLyAxMDAwID4gMjU2KSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKHRydWUpO1xyXG4gICAgICBzdXBlcmFMaW1pdGUgPSB0cnVlO1xyXG4gICAgICBlLmZpbGVMaXN0LnBvcCgpO1xyXG4gICAgICByZXR1cm4gZSAmJiBlLmZpbGVMaXN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8oZmFsc2UpO1xyXG4gICAgICBzdXBlcmFMaW1pdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIC8vIGlmIChlLmZpbGVMaXN0Lmxlbmd0aCA+IDEpIHtcclxuICAgIC8vICAgZS5maWxlTGlzdC5zaGlmdCgpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYgKHN1cGVyYUxpbWl0ZSkge1xyXG4gICAgLy8gICBlLmZpbGVMaXN0ID0gW107XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIGUgJiYgZS5maWxlTGlzdDtcclxuICB9O1xyXG5cclxuICBjb25zdCBsYXlvdXQgPSB7XHJcbiAgICBsYWJlbENvbDogeyBzcGFuOiAyNCB9LFxyXG4gICAgd3JhcHBlckNvbDogeyBzcGFuOiAyNCB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgLi4udmFsdWVzLFxyXG4gICAgICBjb250ZW50X2h0bWw6IGNvbnRlbmlkb1VwZGF0ZSxcclxuICAgICAgaW1hZ2VfZXh0ZW5zaW9uOiB2YWx1ZXMuaW1hZ2VuID8gXCJcIiA6IG51bGwsXHJcbiAgICAgIGltYWdlX2Jhc2U2NDogdmFsdWVzLmltYWdlbiA/IEpTT04uc3RyaW5naWZ5KHZhbHVlcy5pbWFnZW4pIDogbnVsbCxcclxuICAgICAgdHlwZTogXCJwcmVtaW9zXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB1cGRhdGVOb3RpY2lhcyA9IGRhdGFQcm9kdWN0b3M7XHJcblxyXG4gICAgaWYgKHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiKSB7XHJcbiAgICAgIHNldFNwaW5Nb2RhbCh0cnVlKTtcclxuICAgICAgQXBpUHJvZHVjdG9zLnVwZGF0ZVByb2R1Y3RvKHBheWxvYWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU5vdGljaWFzID0gZGF0YVByb2R1Y3Rvcy5tYXAoKG5vdGljaWEpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobm90aWNpYS5pZCA9PT0gdmFsdWVzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZW5fID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGVDZXJ0aWZpY2Fkb1swXSkge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZW5fLmltYWdlQmFzZTY0ID0gZmlsZUNlcnRpZmljYWRvWzBdWzBdLmJhc2U2NDtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VuXy5pbWFnZUV4dGVuc2lvbiA9IGZpbGVDZXJ0aWZpY2Fkb1swXVswXS5leHRlbnNpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4ubm90aWNpYSxcclxuICAgICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgICAgLi4uaW1hZ2VuXyxcclxuICAgICAgICAgICAgICAgICAgdGl0dWxvOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGxlbmd1YWplOiBwYXlsb2FkLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5vdGljaWE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcyh1cGRhdGVOb3RpY2lhcyk7XHJcbiAgICAgICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICBub3RpZmljYShcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2Nlc29BY3R1YWwgPT09IFwiQUdSRUdBUlwiKSB7XHJcbiAgICAgIHNldFNwaW5Nb2RhbCh0cnVlKTtcclxuICAgICAgQXBpUHJvZHVjdG9zLmluc2VydFByb2R1Y3RvKHBheWxvYWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKTtcclxuICAgICAgICAgICAgdXBkYXRlTm90aWNpYXMgPSBbXHJcbiAgICAgICAgICAgICAgLi4uZGF0YVByb2R1Y3RvcyxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgdGl0dWxvOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBsZW5ndWFqZTogcGF5bG9hZC5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXlsb2FkLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICAgIGltYWdlRXh0ZW5zaW9uOiBwYXlsb2FkLmltYWdlX2V4dGVuc2lvbixcclxuICAgICAgICAgICAgICAgIGtleTogdXVpZCxcclxuICAgICAgICAgICAgICAgIGlkOiB1dWlkLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFDcmVhY2lvbjogbW9tZW50KCkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zKHVwZGF0ZU5vdGljaWFzKTtcclxuICAgICAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEVkaXRUd29Ub25lXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiID8gKFxyXG4gICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIHByZW1pbyBkZSB7ZW1wcmVzYU5vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3Bhbj5BZ3JlZ2FyIG51ZXZvIHByZW1pbyBwYXJhIHtlbXByZXNhTm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgLy8gb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgY2VudGVyZWRcclxuICAgICAgPlxyXG4gICAgICAgIDxTcGluIHNwaW5uaW5nPXtzcGluTW9kYWx9IGRlbGF5PXs1MDB9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICB7Li4ubGF5b3V0fVxyXG4gICAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBlbXByZXNhTGVuZ3VhamUsXHJcbiAgICAgICAgICAgICAgICBlbXByZXNhX2lkOiBlbXByZXNhSWQsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImlkXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiZW1wcmVzYV9pZFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsoNDAsIDQwKX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5MZW5ndWFqZTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIGxlbmd1YWplXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVzXCI+RXNwYcOxb2w8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVuXCI+SW5nbMOpczwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5Ob21icmU8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgbm9tYnJlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWluOiAxMCwgbWVzc2FnZTogXCJNw61uaW1vIDEwIGNhcmFjdGVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPlJlc3VtZW48L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgcmVzdW1lblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMTAwLCBtZXNzYWdlOiBcIk3DrW5pbW8gMTAwIGNhcmFjdGVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXs1MDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPkltYWdlbmVzPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJmaWxlTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tRXZlbnQ9e25vcm1GaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbcOhZ2VuZXMganBnIG8gcG5nIGRlIDxzdHJvbmc+MjAwIHggMjAwIHB4IDwvc3Ryb25nPiAobm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXJpb3IgYSAyMDAgS0IpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBpbWFnZVNyYyAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBZGp1bnRlIGxhcyBpbWFnZW5lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxVcGxvYWQgbmFtZT1cImxvZ29cIiBhY3Rpb249XCIvdXBsb2FkLmRvXCIgbGlzdFR5cGU9XCJwaWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1VwbG9hZD4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlQ2VydGlmaWNhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dVcGxvYWRMaXN0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17KGZpbGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvKGZpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17aGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTGlzdD17ZmlsZUNlcnRpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRGaWxlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInh4eC5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZG9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBcIlNlcnZlciBFcnJvciA1MDBcIiwgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5ibW9zb2x1Y2lvbmVzLmNvbS9hc3NldHMvaW1hZ2VzL2xvZ29fbm9kZS5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ5eXkucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcImRvbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuYm1vc29sdWNpb25lcy5jb20vYXNzZXRzL2ltYWdlcy9sb2dvX2Nfc2hhcnAuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IFwiM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwienp6LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBcIlNlcnZlciBFcnJvciA1MDBcIiwgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5ibW9zb2x1Y2lvbmVzLmNvbS9hc3NldHMvaW1hZ2VzL2xvZ29fcmVhY3Quc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3Nob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFmaWxpYWNpb24tZGF0b3MtcGVyc29uYWxlc19fc2l6ZS1tZXNzYWdlIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVsIGFyY2hpdm8gbm8gZGViZSBwZXNhciBtw6FzIGRlIDIwMCBLQi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlU3JjICE9PSBcIlwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2RlcjogXCIxcHggc29saWQgI0Q5RDlEOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTUlBQUFERENBWUFBQURRdmM2VUFBQUJSV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFLSkZqWUdBU1NTd295R0ZoWUdESXpTc3BDbkozVW9pSWpGSmdmOExBd1NEQ0lNb2d3TUNjbUZ4YzRCZ1E0QU5Vd2dDalVjRzNhd3lNSVBxeUxzaXM3UFBPcTNRZERGY3ZqVjNqT0QxYm9RVlRQUXJnU2trdFRnYlNmNEE0TGJtZ3FJU0JnVEVGeUZZdUx5a0FzVHVBYkpFaW9LT0E3RGtnZGpxRXZRSEVUb0t3ajREVmhBUTVBOWszZ0d5QjVJeEVvQm1NTDRCc25TUWs4WFFrTnRSZUVPQnhjZlh4VVFnMU1qYzBkeUhnWE5KQlNXcEZDWWgyemkrb0xNcE16eWhSY0FTR1VxcUNaMTZ5bm82Q2tZR1JBUU1ES013aHFqL2ZBSWNsb3hnSFFxeEFqSUhCRXVndzVzVUlzU1FwQm9idFFQZExjaUxFVkpZek1QQkhNREJzYXloSUxFcUVPNER4RzB0eG1yRVJoTTI5bllHQmRkci8vNS9ER1JqWU5Sa1kvbDcvLy8vMzl2Ly8veTREbW4rTGdlSEFOd0Rya2wxQXVPK3BtZ0FBQURobFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBcUFDQUFRQUFBQUJBQUFBd3FBREFBUUFBQUFCQUFBQXd3QUFBQUQ5Yi9IbkFBQUhsa2xFUVZSNEFlM2RQM1BUV0JTR2NiR3pNNkdDS3FsSUJSVjBkSFJKRmFyUTBlVVQ4TEg0Qm5SVTBOSFIwVUVGVmRJbEZSVjdUelJrc29tUFk4dXlrVGsvemV3UWZLdy85em52NHl2SnluTHY0dUxpVjJkQm9EaUJmNHFQMy9BUnVDUkFCRUZBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2cwQWo4aTBKTzRPenNyUHY2OVd2K2hpMnFQSHIwcU52ZjM5K2lJOTdzb1JJaDRmM3o1OC91N2R1M1NYWDdYdDdaMmVuZXZIbXpmUWUrb1NOMmFwU0FQajA5VFNyYitYS0kvZjM3OSswOCtBMGNOUkUyQU5rdXBrK0FDTlB2a1NQY0FBRWliQUN5WFV5ZkFCR20zeU5IdUFFQ1JOZ0FaTHVZUGdFaXJLbEh1N3U3WGR5eXRHd0hBZDhqak55bmc0T0Q3dm56NTFkYlBUOC83ejU4K05COSsvYnQ2alUvVEkrQUdXSEVucng0OGVKL0VzU21Ieng0MEwxOCtmTHl6eEYzWlZNakV5RENpRURqTVlaWlM1d2lQWG55WkZiSmF4TWhRSVFSR3pIdldSN1hDeU9DWHNPbWlEQWkxSG1QTU1RakRwYnBFaURDaUwzNThlTkh1clcvNVNuV2RJQmJYaURDaUEzOC9QbnpyY2UyWXlaNC8vNTlGM2VQTE5NbDRQYnBpTDJKMEw5NzkrN3lEdEhEaHc4dnR6enZkR25FWGR2VWlnU0lzQ0xBV2F2SHAvK3FNMEJjWE1kL3EyNW4xdkY1N1RZQnAwYTNtVXppbGVQajQrN2s1S1NMYjZndDZ5ZEFoUFV6WG5vUFIwZEhsNzlXR1ROQ2ZCbm4xdXZTQ0pkZWdRaExJMXZ2Q2srZlB1MmVQWHQydFpPWUVWNi9mbjMxZHorc2h3QVIxc1AxY3F2TG50YkVOOU14QTl4Y1lqc3hTMWpXUjRBSWEySWJ6eDB0YzQ0ZllYLzE2bFY2TkRGTFhIK1lMMzJqd2lBQ1JCaUViZjVLY1hvVElzUVNwelh4NE4yOEphNEJRb0s3cmdYaXlkYkhqeC9QMjVUYVFBSkVHQWd1V3kwKzJROFBENi9LaTRSOEVWbCtiekJPblpZOTVmcTlyajl6QWtUSTJTeGRpZEJIcUc5K3NrZHc0M2JvckNYTy9aY0pkcmFQV2R2MjJ1SUVpTEE0cTdudnZDdWc4V1RxelF2ZU9IMjZmb2RvN2c2dUZlL2ExN1czK25GQkFrUllFTlJkYjF2a2t6MUNIOWNQc1Z5L2pyaHIyN1BxTVl2RU5ZTmxIQUllc1JpQll3UnkwVis4aVhQOCsvZnZYMTFNcjdMN0VDdWViL3I0OGVNcW03RnVJMkJHV0RFRzhjbSs3RzNORU9mbWRjVFF3NGg5LzU1bGhtN0Rla1JZS1FQWkYyQXJiWFRBeXU0a0RZQjJZeFV6d2cwZ2kvNDF6dEhuZlFHMjZIYkdlbC9jclZybTd0TlkrLzFidGtPRUFaMk0wNXI0RkI3cjlHYkFJZHhhWllySGRPc2dKL3dDRVFZMEo3NFRtT0tuYnh4VDluM0ZnR0dXV3NWZG93SHRqdDlObnZmN3lRTTJhWlUvVElBSUF4cnc2ZE9uQVd0Wlpjb0VuQnBOdVR1T2JXTUVpTEF4MUhZMFpRSkVtSEozSE52R0NCQmhZNmp0YU1vRWlKQjBaMjl2TDZsczU4dnhQY084L3pmcmRvNXF2S08rZDNGeDhXdTh6ZjFkVzRwL2NQekxseS9kdHY5VHMvRWJjdkdBSGhIeWZCSWhaNk5TaUlCVG8wTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQy93R2dLS0M0WU1BNFRBQUFBQUJKUlU1RXJrSmdnZz09XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz7Cv0Rlc2VhIHZpc3VhbGl6YWNpw7NuIGVuIGVsIEhvbWU/PC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxpemFjaW9uSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5ncmVzZSB2aXN1YWxpemFjacOzbiBlbiBlbCBIb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlNcIj5TaTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiTlwiPk5vPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFyY2FyUHJpbmNpcGFsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7Cv0Rlc2VhIG1hcmNhciBjb21vIHByaW5jaXBhbD88L3N0cm9uZz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTaSBzZWxlY2Npb25hICdTaScgc2UgYWdyZWdhcsOhIGNvbW8gbm90aWNpYXMgcHJpbmNpcGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW4gZWwgaG9tZSAoZWwgY3VhZHJvIGdyYW5kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2VsZWNjaW9uZSBzaSBvIG5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJTXCI+U2k8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiTlwiPk5vPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uSXRlbSBuYW1lPVwibWFyY2FyUHJpbmNpcGFsXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtcmVxdWlyZWRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29udGVuaWRvOjwvc3Ryb25nPiAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2NvbnRlbmlkb1VwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXt7IHNldENvbnRlbmlkb1VwZGF0ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2FuY2VsfT5Wb2x2ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWN0dWFsaXphciBwcmVtaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFncmVnYXIgcHJlbWlvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3Bpbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdG5BY3R1YWxpemFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9