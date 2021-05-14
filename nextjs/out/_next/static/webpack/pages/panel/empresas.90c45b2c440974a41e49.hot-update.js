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
      lineNumber: 243,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
      title: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Actualizar premio de ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Agregar nuevo premio para ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 254,
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
                lineNumber: 278,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
              name: "empresa_id",
              hidden: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
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
                    lineNumber: 286,
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
                      lineNumber: 291,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option, {
                      value: "en",
                      children: "Ingl\xE9s"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 292,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 290,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 285,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 284,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Nombre"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 299,
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
                    lineNumber: 306,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 298,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
                  label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                    children: "Imagenes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 325,
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
                      lineNumber: 331,
                      columnNumber: 47
                    }, _this), " (no superior a 200 KB)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
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
                    onRemove: handleRemoveFileClickCertificado // fileList={fileCertificado}
                    ,
                    defaultFileList: fileCertificado // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"

                    /* defaultFileList={[
                      {
                        uid: "1",
                        name: "xxx.png",
                        status: "done",
                        response: "Server Error 500", // custom error message to show
                        url: "https://www.bmosoluciones.com/assets/images/logo_node.png",
                      },
                      {
                        uid: "2",
                        name: "yyy.png",
                        status: "done",
                        url: "https://www.bmosoluciones.com/assets/images/logo_c_sharp.svg",
                      },
                      {
                        uid: "3",
                        name: "zzz.png",
                        status: "error",
                        response: "Server Error 500", // custom error message to show
                        url: "https://www.bmosoluciones.com/assets/images/logo_react.svg",
                      },
                    ]} */
                    ,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UploadOutlined"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 384,
                        columnNumber: 37
                      }, _this),
                      children: "Click para adjuntar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 384,
                      columnNumber: 23
                    }, _this), showSizeMessageCertificado && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                      className: "afiliacion-datos-personales__size-message ",
                      style: {
                        color: "red"
                      },
                      children: "El archivo no debe pesar m\xE1s de 200 KB."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 389,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 348,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 324,
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
                    lineNumber: 405,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 399,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 431,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  className: "label-required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 461,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                  children: "Contenido:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 462,
                  columnNumber: 19
                }, _this), " \xA0\xA0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 460,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 465,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Editor, {
                  data: contenidoUpdate,
                  actions: {
                    setContenidoUpdate: setContenidoUpdate
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 466,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 464,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                style: {
                  textAlign: "center"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 472,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 473,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  onClick: handleCancel,
                  children: "Volver"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 474,
                  columnNumber: 19
                }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  type: "primary",
                  htmlType: "submit",
                  children: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Actualizar premio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 478,
                    columnNumber: 23
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Agregar premio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 480,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 476,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 471,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 15
            }, _this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 249,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9CdG5QcmVtaW9zL0J0bkFjdHVhbGl6YXIvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yIiwiZHluYW1pYyIsInNzciIsIkJ0bkFjdHVhbGl6YXIiLCJwcm9wcyIsImVtcHJlc2FJZCIsImVtcHJlc2FOb21icmUiLCJlbXByZXNhTGVuZ3VhamUiLCJkYXRhUHJvZHVjdG9zIiwic2V0RGF0YVByb2R1Y3RvcyIsImlkVXBkYXRlIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwidXNlU3RhdGUiLCJwcm9jZXNvQWN0dWFsIiwic2V0UHJvY2Vzb0FjdHVhbCIsImlzTW9kYWxWaXNpYmxlIiwic2V0SXNNb2RhbFZpc2libGUiLCJzcGluTW9kYWwiLCJzZXRTcGluTW9kYWwiLCJmaWxlQ2VydGlmaWNhZG8iLCJzZXRGaWxlQ2VydGlmaWNhZG8iLCJzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyIsInNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImNvbnRlbmlkb1VwZGF0ZSIsInNldENvbnRlbmlkb1VwZGF0ZSIsInVzZUVmZmVjdCIsInByb2R1Y3RvIiwiZmluZCIsImlkIiwic2V0RmllbGRzVmFsdWUiLCJsYW5ndWFnZSIsImxlbmd1YWplIiwibmFtZSIsInRpdHVsbyIsImNvbnRlbmlkbyIsImltYWdlQmFzZTY0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvIiwiZmlsZSIsInNpemUiLCJmaW5kSW5kZXgiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJyZ3hCYXNlNjQiLCJSZWdFeHAiLCJyZ3giLCJleGVjIiwicmVzdWx0Iiwibm9tYnJlQXJjaGl2byIsImV4dGVuc2lvbiIsImJhc2U2NCIsImJ5dGVzIiwiaGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG8iLCJub3JtRmlsZSIsImZpbGVMaXN0Iiwic3VwZXJhTGltaXRlIiwicG9wIiwiQXJyYXkiLCJpc0FycmF5IiwibGF5b3V0IiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsIm9uRmluaXNoIiwidmFsdWVzIiwicGF5bG9hZCIsImNvbnRlbnRfaHRtbCIsImltYWdlX2V4dGVuc2lvbiIsImltYWdlbiIsImltYWdlX2Jhc2U2NCIsInN0cmluZ2lmeSIsInR5cGUiLCJ1cGRhdGVOb3RpY2lhcyIsIkFwaVByb2R1Y3RvcyIsInVwZGF0ZVByb2R1Y3RvIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvZGlnbyIsIm1hcCIsIm5vdGljaWEiLCJpbWFnZW5fIiwiaW1hZ2VFeHRlbnNpb24iLCJub3RpZmljYSIsImVycm9yIiwiaW5zZXJ0UHJvZHVjdG8iLCJ1dWlkIiwidXVpZHY0Iiwia2V5IiwiZmVjaGFDcmVhY2lvbiIsIm1vbWVudCIsImZvcm1hdCIsImVtcHJlc2FfaWQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJtaW4iLCJjb2xvciIsImJvZGVyIiwicGFkZGluZyIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtREFBTyxNQUNwQixjQUFNO0FBQ0osU0FBTywwSUFBUDtBQUNELENBSG1CLEVBSXBCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUZnQiwyREFFaEI7QUFBQTtBQUFBLGNBRmdCLGNBRWhCO0FBQUE7QUFBQSxDQUpvQixDQUF0QjtNQUFNRixNOztBQU9OLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFFN0JDLFNBRjZCLEdBUTNC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O0FBRUUseUJBQU8sRUFBRTtBQUFFQyxzQ0FBa0IsRUFBbEJBO0FBQUY7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyTEYsZUE0TEUsc0VBQUMsd0NBQUQ7QUFBSyxrQkFBRSxFQUFFLEVBQVQ7QUFBYSxxQkFBSyxFQUFFO0FBQUVrRiwyQkFBUyxFQUFFO0FBQWIsaUJBQXBCO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRSxzRUFBQywyQ0FBRDtBQUFRLHlCQUFPLEVBQUVsRSxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRixFQUlHLElBSkgsZUFLRSxzRUFBQywyQ0FBRDtBQUFRLHNCQUFJLEVBQUMsU0FBYjtBQUF1QiwwQkFBUSxFQUFDLFFBQWhDO0FBQUEsNEJBQ0c3QixhQUFhLEtBQUssWUFBbEIsZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQsZ0JBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE1TEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBLGtCQURGO0FBMFBELENBL2NEOztHQUFNWixhO1VBVVdRLHlDQUFJLENBQUNDLE87OztNQVZoQlQsYTtBQWlkU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFuZWwvZW1wcmVzYXMuOTBjNDViMmM0NDA5NzRhNDFlNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBNb2RhbCxcclxuICBTcGluLFxyXG4gIEZvcm0sXHJcbiAgSW5wdXQsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBTZWxlY3QsXHJcbiAgVXBsb2FkLFxyXG4gIEltYWdlLFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFVwbG9hZE91dGxpbmVkLCBFZGl0VHdvVG9uZSB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBBcGlQcm9kdWN0b3MgZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCBub3RpZmljYSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdXRpbHMvbm90aWZpY2FcIjtcclxuXHJcbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXHJcbiAgKCkgPT4ge1xyXG4gICAgcmV0dXJuIGltcG9ydChcIi4uLy4uL0VkaXRvclwiKTtcclxuICB9LFxyXG4gIHsgc3NyOiBmYWxzZSB9XHJcbik7XHJcblxyXG5jb25zdCBCdG5BY3R1YWxpemFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgZW1wcmVzYUlkLFxyXG4gICAgZW1wcmVzYU5vbWJyZSxcclxuICAgIGVtcHJlc2FMZW5ndWFqZSxcclxuICAgIGRhdGFQcm9kdWN0b3MsXHJcbiAgICBzZXREYXRhUHJvZHVjdG9zLFxyXG4gICAgaWRVcGRhdGUsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3QgW3Byb2Nlc29BY3R1YWwsIHNldFByb2Nlc29BY3R1YWxdID0gdXNlU3RhdGUoXCJBQ1RVQUxJWkFSXCIpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzcGluTW9kYWwsIHNldFNwaW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZpbGVDZXJ0aWZpY2Fkbywgc2V0RmlsZUNlcnRpZmljYWRvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8sIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvXSA9XHJcbiAgICB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udGVuaWRvVXBkYXRlLCBzZXRDb250ZW5pZG9VcGRhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICAvLyBzZXRDb250ZW5pZG9VcGRhdGUoXCJcIik7XHJcbiAgICAvLyBzZXRJbWFnZVNyYyhcIlwiKTtcclxuICAgIC8vIHNldElzTW9kYWxWaXNpYmxlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RvID0gZGF0YVByb2R1Y3Rvcy5maW5kKChwcm9kdWN0bykgPT4gcHJvZHVjdG8uaWQgPT09IGlkVXBkYXRlKTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICBpZDogcHJvZHVjdG8uaWQsXHJcbiAgICAgIGxhbmd1YWdlOiBwcm9kdWN0by5sZW5ndWFqZSxcclxuICAgICAgbmFtZTogcHJvZHVjdG8udGl0dWxvLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0Q29udGVuaWRvVXBkYXRlKHByb2R1Y3RvLmNvbnRlbmlkbyk7XHJcblxyXG4gICAgaWYgKHByb2R1Y3RvLmltYWdlQmFzZTY0ICE9PSBcIlwiKSB7XHJcbiAgICAgIC8vIHNldEltYWdlU3JjKFxyXG4gICAgICAvLyAgIGBkYXRhOmltYWdlLyR7cHJvZHVjdG8uaW1hZ2VFeHRlbnNpb259O2Jhc2U2NCwke3Byb2R1Y3RvLmltYWdlQmFzZTY0fWBcclxuICAgICAgLy8gKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGBwcm9kdWN0by5pbWFnZUJhc2U2NGAsIEpTT04ucGFyc2UocHJvZHVjdG8uaW1hZ2VCYXNlNjQpKTtcclxuXHJcbiAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhKU09OLnBhcnNlKHByb2R1Y3RvLmltYWdlQmFzZTY0KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJbWFnZVNyYyhcIlwiKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCZWZvcmVVcGxvYWRDZXJ0aWZpY2FkbyA9IChmaWxlKSA9PiB7XHJcbiAgICAvLyA1IE1CID0gMTAyNCAqIDUgPSA1MTIwXHJcbiAgICBpZiAoZmlsZS5zaXplIC8gMTAwMCA+IDI1Nikge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8oZmFsc2UpO1xyXG5cclxuICAgIGlmIChmaWxlQ2VydGlmaWNhZG8uZmluZEluZGV4KChlKSA9PiBlLm5hbWUgPT09IGZpbGUubmFtZSkgPj0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgcmd4QmFzZTY0ID0gUmVnRXhwKFxyXG4gICAgICAgIC9kYXRhOihhcHBsaWNhdGlvbnxpbWFnZSlcXC8oanBlZ3xqcGd8cG5nKik7YmFzZTY0LChbXlwiXSopL2dpbVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZ3ggPSByZ3hCYXNlNjQuZXhlYyhyZWFkZXIucmVzdWx0KTtcclxuXHJcbiAgICAgIGlmIChyZ3ggIT09IG51bGwpIHtcclxuICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW1xyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgbm9tYnJlQXJjaGl2bzogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgIGV4dGVuc2lvbjogcmd4WzJdLFxyXG4gICAgICAgICAgICAgIGJhc2U2NDogcmd4WzNdLFxyXG4gICAgICAgICAgICAgIGJ5dGVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICBdKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpbGVDbGlja0NlcnRpZmljYWRvID0gKCkgPT4ge1xyXG4gICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBub3JtRmlsZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgZS5maWxlTGlzdGAsIGUuZmlsZUxpc3QpO1xyXG4gICAgbGV0IHN1cGVyYUxpbWl0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKGUuZmlsZS5zaXplIC8gMTAwMCA+IDI1Nikge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbyh0cnVlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gdHJ1ZTtcclxuICAgICAgZS5maWxlTGlzdC5wb3AoKTtcclxuICAgICAgcmV0dXJuIGUgJiYgZS5maWxlTGlzdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKGZhbHNlKTtcclxuICAgICAgc3VwZXJhTGltaXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoZS5maWxlTGlzdC5sZW5ndGggPiAxKSB7XHJcbiAgICAvLyAgIGUuZmlsZUxpc3Quc2hpZnQoKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChzdXBlcmFMaW1pdGUpIHtcclxuICAgIC8vICAgZS5maWxlTGlzdCA9IFtdO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiBlICYmIGUuZmlsZUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgbGFiZWxDb2w6IHsgc3BhbjogMjQgfSxcclxuICAgIHdyYXBwZXJDb2w6IHsgc3BhbjogMjQgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgY29udGVudF9odG1sOiBjb250ZW5pZG9VcGRhdGUsXHJcbiAgICAgIGltYWdlX2V4dGVuc2lvbjogdmFsdWVzLmltYWdlbiA/IFwiXCIgOiBudWxsLFxyXG4gICAgICBpbWFnZV9iYXNlNjQ6IHZhbHVlcy5pbWFnZW4gPyBKU09OLnN0cmluZ2lmeSh2YWx1ZXMuaW1hZ2VuKSA6IG51bGwsXHJcbiAgICAgIHR5cGU6IFwicHJlbWlvc1wiLFxyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGUgcGF5bG9hZC5pbWFnZW47XHJcblxyXG4gICAgbGV0IHVwZGF0ZU5vdGljaWFzID0gZGF0YVByb2R1Y3RvcztcclxuXHJcbiAgICBpZiAocHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIpIHtcclxuICAgICAgc2V0U3Bpbk1vZGFsKHRydWUpO1xyXG4gICAgICBBcGlQcm9kdWN0b3MudXBkYXRlUHJvZHVjdG8ocGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgdXBkYXRlTm90aWNpYXMgPSBkYXRhUHJvZHVjdG9zLm1hcCgobm90aWNpYSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChub3RpY2lhLmlkID09PSB2YWx1ZXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlbl8gPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5pbWFnZW5bMF0pIHtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VuXy5pbWFnZUJhc2U2NCA9IHBheWxvYWQuaW1hZ2VuWzBdWzBdLmJhc2U2NDtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VuXy5pbWFnZUV4dGVuc2lvbiA9IHBheWxvYWQuaW1hZ2VuWzBdWzBdLmV4dGVuc2lvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5ub3RpY2lhLFxyXG4gICAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgICAuLi5pbWFnZW5fLFxyXG4gICAgICAgICAgICAgICAgICB0aXR1bG86IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgbGVuZ3VhamU6IHBheWxvYWQubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbm90aWNpYTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zKHVwZGF0ZU5vdGljaWFzKTtcclxuICAgICAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvY2Vzb0FjdHVhbCA9PT0gXCJBR1JFR0FSXCIpIHtcclxuICAgICAgc2V0U3Bpbk1vZGFsKHRydWUpO1xyXG4gICAgICBBcGlQcm9kdWN0b3MuaW5zZXJ0UHJvZHVjdG8ocGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgICAgICB1cGRhdGVOb3RpY2lhcyA9IFtcclxuICAgICAgICAgICAgICAuLi5kYXRhUHJvZHVjdG9zLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB0aXR1bG86IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgICAgICAgIGxlbmd1YWplOiBwYXlsb2FkLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBheWxvYWQuaW1hZ2VfYmFzZTY0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VFeHRlbnNpb246IHBheWxvYWQuaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAga2V5OiB1dWlkLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHV1aWQsXHJcbiAgICAgICAgICAgICAgICBmZWNoYUNyZWFjaW9uOiBtb21lbnQoKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHNldERhdGFQcm9kdWN0b3ModXBkYXRlTm90aWNpYXMpO1xyXG4gICAgICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gICAgICAgICAgICBoYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RWRpdFR3b1RvbmVcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgcHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuPkFjdHVhbGl6YXIgcHJlbWlvIGRlIHtlbXByZXNhTm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxzcGFuPkFncmVnYXIgbnVldm8gcHJlbWlvIHBhcmEge2VtcHJlc2FOb21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAvLyBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgZm9vdGVyPXtmYWxzZX1cclxuICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICBjZW50ZXJlZFxyXG4gICAgICA+XHJcbiAgICAgICAgPFNwaW4gc3Bpbm5pbmc9e3NwaW5Nb2RhbH0gZGVsYXk9ezUwMH0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgIHsuLi5sYXlvdXR9XHJcbiAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IGVtcHJlc2FMZW5ndWFqZSxcclxuICAgICAgICAgICAgICAgIGVtcHJlc2FfaWQ6IGVtcHJlc2FJZCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiaWRcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJlbXByZXNhX2lkXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9eyg0MCwgNDApfT5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPkxlbmd1YWplPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgbGVuZ3VhamVcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCIgYWxsb3dDbGVhciBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZXNcIj5Fc3Bhw7FvbDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZW5cIj5Jbmdsw6lzPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPk5vbWJyZTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCBub21icmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtaW46IDEwLCBtZXNzYWdlOiBcIk3DrW5pbW8gMTAgY2FyYWN0ZXJlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBtYXhMZW5ndGg9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+UmVzdW1lbjwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCByZXN1bWVuXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWluOiAxMDAsIG1lc3NhZ2U6IFwiTcOtbmltbyAxMDAgY2FyYWN0ZXJlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBtYXhMZW5ndGg9ezUwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICovfVxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+SW1hZ2VuZXM8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wTmFtZT1cImZpbGVMaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21FdmVudD17bm9ybUZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEltw6FnZW5lcyBqcGcgbyBwbmcgZGUgPHN0cm9uZz4yMDAgeCAyMDAgcHggPC9zdHJvbmc+IChub1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBlcmlvciBhIDIwMCBLQilcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGltYWdlU3JjICE9PSBcIlwiID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFkanVudGUgbGFzIGltYWdlbmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPFVwbG9hZCBuYW1lPVwibG9nb1wiIGFjdGlvbj1cIi91cGxvYWQuZG9cIiBsaXN0VHlwZT1cInBpY3R1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbGljayBwYXJhIGFkanVudGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGVDZXJ0aWZpY2Fkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVmb3JlVXBsb2FkPXsoZmlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQmVmb3JlVXBsb2FkQ2VydGlmaWNhZG8oZmlsZSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXtoYW5kbGVSZW1vdmVGaWxlQ2xpY2tDZXJ0aWZpY2Fkb31cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbGVMaXN0PXtmaWxlQ2VydGlmaWNhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0RmlsZUxpc3Q9e2ZpbGVDZXJ0aWZpY2Fkb31cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGFjdGlvbj1cImh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NlwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLyogZGVmYXVsdEZpbGVMaXN0PXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwieHh4LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJkb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IFwiU2VydmVyIEVycm9yIDUwMFwiLCAvLyBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byBzaG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmJtb3NvbHVjaW9uZXMuY29tL2Fzc2V0cy9pbWFnZXMvbG9nb19ub2RlLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBcIjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInl5eS5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZG9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5ibW9zb2x1Y2lvbmVzLmNvbS9hc3NldHMvaW1hZ2VzL2xvZ29fY19zaGFycC5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ6enoucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IFwiU2VydmVyIEVycm9yIDUwMFwiLCAvLyBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byBzaG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmJtb3NvbHVjaW9uZXMuY29tL2Fzc2V0cy9pbWFnZXMvbG9nb19yZWFjdC5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19ICovXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGljayBwYXJhIGFkanVudGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWZpbGlhY2lvbi1kYXRvcy1wZXJzb25hbGVzX19zaXplLW1lc3NhZ2UgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRWwgYXJjaGl2byBubyBkZWJlIHBlc2FyIG3DoXMgZGUgMjAwIEtCLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VTcmMgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZGVyOiBcIjFweCBzb2xpZCAjRDlEOUQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNSUFBQUREQ0FZQUFBRFF2YzZVQUFBQlJXbERRMUJKUTBNZ1VISnZabWxzWlFBQUtKRmpZR0FTU1N3b3lHRmhZR0RJelNzcENuSjNVb2lJakZKZ2Y4TEF3U0RDSU1vZ3dNQ2NtRnhjNEJnUTRBTlV3Z0NqVWNHM2F3eU1JUHF5THNpczdQUE9xM1FkREZjdmpWM2pPRDFib1FWVFBRcmdTa2t0VGdiU2Y0QTRMYm1ncUlTQmdURUZ5Rll1THlrQXNUdUFiSkVpb0tPQTdEa2dkanFFdlFIRVRvS3dqNERWaEFRNUE5azNnR3lCNUl4RW9CbU1MNEJzblNRazhYUWtOdFJlRU9CeGNmWHhVUWcxTWpjMGR5SGdYTkpCU1dwRkNZaDJ6aStvTE1wTXp5aFJjQVNHVXFxQ1oxNnlubzZDa1lHUkFRTURLTXdocWovZkFJY2xveGdIUXF4QWpJSEJFdWd3NXNVSXNTUXBCb2J0UVBkTGNpTEVWSll6TVBCSE1EQnNheWhJTEVxRU80RHhHMHR4bXJFUmhNMjluWUdCZGRyLy81L0RHUmpZTlJrWS9sNy8vLy8zOXYvLy95NERtbitMZ2VIQU53RHJrbDFBdU8rcG1nQUFBRGhsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUFxQUNBQVFBQUFBQkFBQUF3cUFEQUFRQUFBQUJBQUFBd3dBQUFBRDliL0huQUFBSGxrbEVRVlI0QWUzZFAzUFRXQlNHY2JHek02R0NLcWxJQlJWMGRIUkpGYXJRMGVVVDhMSDRCblJVME5IUjBVRUZWZElsRlJWN1R6Umtzb21QWTh1eWtUay96ZXdRZkt3Lzl6bnY0eXZKeW5MdjR1TGlWMmRCb0RpQmY0cVAzL0FSdUNSQUJFRkFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZzBBajhpMEpPNE96c3JQdjY5V3YraGkycVBIcjBxTnZmMzkraUk5N3NvUkloNGYzejU4L3U3ZHUzU1hYN1h0N1oyZW5ldkhtemZRZStvU04yYXBTQVBqMDlUU3JiK1hLSS9mMzc5KzA4K0EwY05SRTJBTmt1cGsrQUNOUHZrU1BjQUFFaWJBQ3lYVXlmQUJHbTN5Tkh1QUVDUk5nQVpMdVlQZ0VpcktsSHU3dTdYZHl5dEd3SEFkOGpqTnluZzRPRDd2bno1MWRiUFQ4Lzd6NTgrTkI5Ky9idDZqVS9USStBR1dIRW5yeDQ4ZUovRXNTbUh6eDQwTDE4K2ZMeXp4RjNaVk1qRXlEQ2lFRGpNWVpaUzV3aVBYbnlaRmJKYXhNaFFJUVJHekh2V1I3WEN5T0NYc09taURBaTFIbVBNTVFqRHBicEVpRENpTDM1OGVOSHVyVy81U25XZElCYlhpRENpQTM4L1BuenJjZTJZeVo0Ly81OUYzZVBMTk1sNFBicGlMMkowTDk3OSs3eUR0SERodzh2dHp6dmRHbkVYZHZVaWdTSXNDTEFXYXZIcC8rcU0wQmNYTWQvcTI1bjF2RjU3VFlCcDBhM21VemlsZVBqNCs3azVLU0xiNmd0NnlkQWhQVXpYbm9QUjBkSGw3OVdHVE5DZkJubjF1dlNDSmRlZ1FoTEkxdnZDaytmUHUyZVBYdDJ0Wk9ZRVY2L2ZuMzFkeitzaHdBUjFzUDFjcXZMbnRiRU45TXhBOXhjWWpzeFMxaldSNEFJYTJJYnp4MHRjNDRmWVgvMTZsVjZOREZMWEgrWUwzMmp3aUFDUkJpRWJmNUtjWG9USXNRU3B6WHg0TjI4SmE0QlFvSzdyZ1hpeWRiSGp4L1AyNVRhUUFKRUdBZ3VXeTArMlE4UEQ2L0tpNFI4RVZsK2J6Qk9uWlk5NWZxOXJqOXpBa1RJMlN4ZGlkQkhxRzkrc2tkdzQzYm9yQ1hPL1pjSmRyYVBXZHYyMnVJRWlMQTRxN252dkN1ZzhXVHF6UXZlT0gyNmZvZG83ZzZ1RmUvYTE3VzMrbkZCQWtSWUVOUmRiMXZra3oxQ0g5Y1BzVnkvanJocjI3UHFNWXZFTllObEhBSWVzUmlCWXdSeTBWKzhpWFA4Ky9mdlgxMU1yN0w3RUN1ZWIvcjQ4ZU1xbTdGdUkyQkdXREVHOGNtKzdHM05FT2ZtZGNUUXc0aDkvNTVsaG03RGVrUllLUVBaRjJBcmJYVEF5dTRrRFlCMll4VXp3ZzBnaS80MXp0SG5mUUcyNkhiR2VsL2NyVnJtN3ROWSsvMWJ0a09FQVoyTTA1cjRGQjdyOUdiQUlkeGFaWXJIZE9zZ0ovd0NFUVkwSjc0VG1PS25ieHhUOW4zRmdHR1dXc1Zkb3dIdGp0OU5udmY3eVFNMmFaVS9USUFJQXhydzZkT25BV3RaWmNvRW5CcE51VHVPYldNRWlMQXgxSFkwWlFKRW1ISjNITnZHQ0JCaFk2anRhTW9FaUpCMFoyOXZMNmxzNTh2eFBjTzgvemZyZG81cXZLTytkM0Z4OFd1OHpmMWRXNHAvY1B6TGx5L2R0djlUcy9FYmN2R0FIaEh5ZkJJaFo2TlNpSUJUbzBMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDL3dHZ0tLQzRZTUE0VEFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgey8qIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPsK/RGVzZWEgdmlzdWFsaXphY2nDs24gZW4gZWwgSG9tZT88L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbGl6YWNpb25Ib21lXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbmdyZXNlIHZpc3VhbGl6YWNpw7NuIGVuIGVsIEhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCIgYWxsb3dDbGVhcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiU1wiPlNpPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJOXCI+Tm88L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYXJjYXJQcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsK/RGVzZWEgbWFyY2FyIGNvbW8gcHJpbmNpcGFsPzwvc3Ryb25nPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNpIHNlbGVjY2lvbmEgJ1NpJyBzZSBhZ3JlZ2Fyw6EgY29tbyBub3RpY2lhcyBwcmluY2lwYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbiBlbCBob21lIChlbCBjdWFkcm8gZ3JhbmRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTZWxlY2Npb25lIHNpIG8gbm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIlNcIj5TaTwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJOXCI+Tm88L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5JdGVtIG5hbWU9XCJtYXJjYXJQcmluY2lwYWxcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbC1yZXF1aXJlZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250ZW5pZG86PC9zdHJvbmc+ICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVuaWRvVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e3sgc2V0Q29udGVuaWRvVXBkYXRlIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PlZvbHZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIHByZW1pbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBwcmVtaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ0bkFjdHVhbGl6YXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=