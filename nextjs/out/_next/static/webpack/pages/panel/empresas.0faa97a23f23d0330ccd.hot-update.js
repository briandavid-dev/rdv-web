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
              var imagen_ = {}; // if (fileCertificado[0]) {
              //   imagen_.imageBase64 = fileCertificado[0][0].base64;
              //   imagen_.imageExtension = fileCertificado[0][0].extension;
              // }
              // ya esto lo tengo arriba
              // imageBase64: producto.image_base64,

              return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, noticia), payload), imagen_), {}, {
                titulo: payload.name,
                lenguaje: payload.language,
                contenido: payload.content_html
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
                  }, _this) // rules={[
                  //   {
                  //     required: imageSrc !== "" ? false : true,
                  //     message: "Adjunte las imagenes",
                  //   },
                  // ]}
                  ,
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











var stylesCss = new String("h2,h3,h1,h4,h5{color:#3d2514 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXGNvbXBvbmVudHNcXHBhbmVsXFxFbXByZXNhc1xcQnRuUHJlbWlvc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUzRCLEFBTzhCLHlCQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXERhdmlkT2Nob2FCZXJtdWRlelxcRGVza3RvcFxccmR2LXdlYlxcbmV4dGpzXFxjb21wb25lbnRzXFxwYW5lbFxcRW1wcmVzYXNcXEJ0blByZW1pb3NcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgRGl2aWRlciwgVGFibGUsIFNwaW4sIFBvcGNvbmZpcm0sIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRGVsZXRlVHdvVG9uZSB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5pbXBvcnQgQnRuQWdyZWdhciBmcm9tIFwiLi9CdG5BZ3JlZ2FyXCI7XHJcbmltcG9ydCBCdG5BY3R1YWxpemFyIGZyb20gXCIuL0J0bkFjdHVhbGl6YXJcIjtcclxuaW1wb3J0IEFwaVByZW1pb3MgZnJvbSBcIi4vc2VydmljZXNcIjtcclxuaW1wb3J0IG5vdGlmaWNhIGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9ub3RpZmljYVwiO1xyXG5cclxuY29uc3Qgc3R5bGVzQ3NzID0gY3NzLmdsb2JhbGBcclxuICBoMixcclxuICBoMyxcclxuICBoMSxcclxuICBoNCxcclxuICBoNSB7XHJcbiAgICBjb2xvcjogIzNkMjUxNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHsgQ29sdW1uIH0gPSBUYWJsZTtcclxuXHJcbmNvbnN0IFByZW1pb3MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGVtcHJlc2FJZCwgZW1wcmVzYU5vbWJyZSwgZW1wcmVzYUxlbmd1YWplIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW21vZGFsUHJvZHVjdG9zVmlzaWJsZSwgc2V0TW9kYWxQcm9kdWN0b3NWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ1RhYmxlLCBzZXRMb2FkaW5nVGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkYXRhUHJvZHVjdG9zLCBzZXREYXRhUHJvZHVjdG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY29uZmlybUxvYWRpbmcsIHNldENvbmZpcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNob3dQb3Bjb25maXJtID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9kdWN0b3MgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbFByb2R1Y3Rvc1Zpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgc2V0TG9hZGluZ1RhYmxlKHRydWUpO1xyXG4gICAgQXBpUHJlbWlvcy5nZXRQcm9kdWN0b3MoZW1wcmVzYUlkLCBcInByZW1pb3NcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2RpZ28sIHJlc3VsdHMgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGFQcm9kdWN0b3MgPSByZXN1bHRzLm1hcCgocHJvZHVjdG8pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBrZXk6IHByb2R1Y3RvLmlkLFxyXG4gICAgICAgICAgICAgIGlkOiBwcm9kdWN0by5pZCxcclxuICAgICAgICAgICAgICB0aXR1bG86IHByb2R1Y3RvLm5hbWUsXHJcbiAgICAgICAgICAgICAgZmVjaGFDcmVhY2lvbjogcHJvZHVjdG8uY3JlYXRlZF9hdCxcclxuICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogcHJvZHVjdG8uaW1hZ2VfYmFzZTY0LFxyXG4gICAgICAgICAgICAgIGltYWdlRXh0ZW5zaW9uOiBwcm9kdWN0by5pbWFnZV9leHRlbnNpb24sXHJcbiAgICAgICAgICAgICAgbGVuZ3VhamU6IHByb2R1Y3RvLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbmlkbzogcHJvZHVjdG8uY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0RGF0YVByb2R1Y3RvcyhkYXRhUHJvZHVjdG9zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZ1RhYmxlKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgc2V0TG9hZGluZ1RhYmxlKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICBBcGlQcmVtaW9zLmRldGV0ZVByb2R1Y3RvKHsgaWQgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgY29uc3QgdXBkYXRlUHJvZHVjdG9zID0gZGF0YVByb2R1Y3Rvcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChwcm9kdWN0bykgPT4gcHJvZHVjdG8uaWQgIT09IGlkXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIHNldERhdGFQcm9kdWN0b3ModXBkYXRlUHJvZHVjdG9zKTtcclxuICAgICAgICAgIC8vIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgICAgICAgICAvLyBoYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICAgIHNldENvbmZpcm1Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgIHNldENvbmZpcm1Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtzdHlsZXNDc3N9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVQcm9kdWN0b3MoKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgUHJlbWlvc1xyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHZpc2libGU9e21vZGFsUHJvZHVjdG9zVmlzaWJsZX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0TW9kYWxQcm9kdWN0b3NWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8aDM+UHJlbWlvcyBkZSB7ZW1wcmVzYU5vbWJyZX08L2gzPlxyXG4gICAgICAgIDxEaXZpZGVyPjwvRGl2aWRlcj5cclxuICAgICAgICA8QnRuQWdyZWdhclxyXG4gICAgICAgICAgZW1wcmVzYUlkPXtlbXByZXNhSWR9XHJcbiAgICAgICAgICBlbXByZXNhTm9tYnJlPXtlbXByZXNhTm9tYnJlfVxyXG4gICAgICAgICAgZW1wcmVzYUxlbmd1YWplPXtlbXByZXNhTGVuZ3VhamV9XHJcbiAgICAgICAgICBkYXRhUHJvZHVjdG9zPXtkYXRhUHJvZHVjdG9zfVxyXG4gICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcz17c2V0RGF0YVByb2R1Y3Rvc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxTcGluIHNwaW5uaW5nPXtsb2FkaW5nVGFibGV9PlxyXG4gICAgICAgICAgPFRhYmxlIGRhdGFTb3VyY2U9e2RhdGFQcm9kdWN0b3N9IHBhZ2luYXRpb249e2ZhbHNlfT5cclxuICAgICAgICAgICAgey8qIDxDb2x1bW4gdGl0bGU9XCJpZFwiIGRhdGFJbmRleD1cImlkXCIga2V5PVwiaWRcIiAvPiAqL31cclxuICAgICAgICAgICAgPENvbHVtbiB0aXRsZT1cIlByZW1pb1wiIGRhdGFJbmRleD1cInRpdHVsb1wiIGtleT1cInRpdHVsb1wiIC8+XHJcbiAgICAgICAgICAgIHsvKiA8Q29sdW1uIHRpdGxlPVwiTGVuZ3VhamVcIiBkYXRhSW5kZXg9XCJsZW5ndWFqZVwiIGtleT1cImxlbmd1YWplXCIgLz5cclxuICAgICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiRmVjaGEgZGUgQ3JlYWNpw7NuXCJcclxuICAgICAgICAgICAgICBkYXRhSW5kZXg9XCJmZWNoYUNyZWFjaW9uXCJcclxuICAgICAgICAgICAgICBrZXk9XCJmZWNoYUNyZWFjaW9uXCJcclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICB0aXRsZT1cIk9wY2lvbmVzXCJcclxuICAgICAgICAgICAgICBrZXk9XCJvcGNpb25lc1wiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsodGV4dCwgcmVjb3JkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U3BhY2Ugc2l6ZT1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnRuQWN0dWFsaXphclxyXG4gICAgICAgICAgICAgICAgICAgIGVtcHJlc2FJZD17ZW1wcmVzYUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGVtcHJlc2FOb21icmU9e2VtcHJlc2FOb21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wcmVzYUxlbmd1YWplPXtlbXByZXNhTGVuZ3VhamV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVByb2R1Y3Rvcz17ZGF0YVByb2R1Y3Rvc31cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zPXtzZXREYXRhUHJvZHVjdG9zfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkVXBkYXRlPXtyZWNvcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiwr9TZWd1cm8gZGUgZWxpbWluYXIgZXN0ZSBwcmVtaW8/XCJcclxuICAgICAgICAgICAgICAgICAgICBva1RleHQ9XCJTaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZShyZWNvcmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25Qcm9wcz17eyBsb2FkaW5nOiBjb25maXJtTG9hZGluZyB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVR3b1RvbmUgb25DbGljaz17c2hvd1BvcGNvbmZpcm19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZW1pb3M7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\components\\\\panel\\\\Empresas\\\\BtnPremios\\\\index.js */");
stylesCss.__hash = "3618806013";
var Column = antd__WEBPACK_IMPORTED_MODULE_2__["Table"].Column;

var Premios = function Premios(props) {
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
    setLoadingTable(true);
    _services__WEBPACK_IMPORTED_MODULE_6__["default"].getProductos(empresaId, "premios").then(function (response) {
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
      } else {//
      }

      setLoadingTable(false);
    })["catch"](function (error) {
      //
      setLoadingTable(false);
    });
  };

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: function onClick() {
        handleProductos();
      },
      children: "Premios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      visible: modalProductosVisible,
      onCancel: function onCancel() {
        setModalProductosVisible(false);
      },
      footer: false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h3", {
        children: ["Premios de ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_BtnAgregar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        empresaId: empresaId,
        empresaNombre: empresaNombre,
        empresaLenguaje: empresaLenguaje,
        dataProductos: dataProductos,
        setDataProductos: setDataProductos
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
        spinning: loadingTable,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
          dataSource: dataProductos,
          pagination: false,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Column, {
            title: "Premio",
            dataIndex: "titulo"
          }, "titulo", false, {
            fileName: _jsxFileName,
            lineNumber: 125,
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
                  lineNumber: 137,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
                  title: "\xBFSeguro de eliminar este premio?",
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
                    lineNumber: 155,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this);
            }
          }, "opciones", false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Premios, "8jRrHYGQ4QpfN3U5+HKv3StpVmQ=");

_c = Premios;
/* harmony default export */ __webpack_exports__["default"] = (Premios);

var _c;

$RefreshReg$(_c, "Premios");

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

/***/ "./components/panel/Empresas/Productos/index.js":
/*!******************************************************!*\
  !*** ./components/panel/Empresas/Productos/index.js ***!
  \******************************************************/
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
/* harmony import */ var _BtnAgregar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BtnAgregar */ "./components/panel/Empresas/Productos/BtnAgregar/index.js");
/* harmony import */ var _BtnActualizar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BtnActualizar */ "./components/panel/Empresas/Productos/BtnActualizar/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./components/panel/Empresas/Productos/services.js");
/* harmony import */ var _utils_notifica__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/notifica */ "./utils/notifica.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\rdv-web\\nextjs\\components\\panel\\Empresas\\Productos\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











var stylesCss = new String("h2,h3,h1,h4,h5{color:#3d2514 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXGNvbXBvbmVudHNcXHBhbmVsXFxFbXByZXNhc1xcUHJvZHVjdG9zXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTNEIsQUFPOEIseUJBQzNCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxyZHYtd2ViXFxuZXh0anNcXGNvbXBvbmVudHNcXHBhbmVsXFxFbXByZXNhc1xcUHJvZHVjdG9zXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIERpdmlkZXIsIFRhYmxlLCBTcGluLCBQb3Bjb25maXJtLCBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IERlbGV0ZVR3b1RvbmUgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuaW1wb3J0IEJ0bkFncmVnYXIgZnJvbSBcIi4vQnRuQWdyZWdhclwiO1xyXG5pbXBvcnQgQnRuQWN0dWFsaXphciBmcm9tIFwiLi9CdG5BY3R1YWxpemFyXCI7XHJcbmltcG9ydCBBcGlQcm9kdWN0b3MgZnJvbSBcIi4vc2VydmljZXNcIjtcclxuaW1wb3J0IG5vdGlmaWNhIGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9ub3RpZmljYVwiO1xyXG5cclxuY29uc3Qgc3R5bGVzQ3NzID0gY3NzLmdsb2JhbGBcclxuICBoMixcclxuICBoMyxcclxuICBoMSxcclxuICBoNCxcclxuICBoNSB7XHJcbiAgICBjb2xvcjogIzNkMjUxNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHsgQ29sdW1uIH0gPSBUYWJsZTtcclxuXHJcbmNvbnN0IFByb2R1Y3RvcyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZW1wcmVzYUlkLCBlbXByZXNhTm9tYnJlLCBlbXByZXNhTGVuZ3VhamUgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbbW9kYWxQcm9kdWN0b3NWaXNpYmxlLCBzZXRNb2RhbFByb2R1Y3Rvc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nVGFibGUsIHNldExvYWRpbmdUYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGFQcm9kdWN0b3MsIHNldERhdGFQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb25maXJtTG9hZGluZywgc2V0Q29uZmlybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2hvd1BvcGNvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2R1Y3RvcyA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsUHJvZHVjdG9zVmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICBzZXRMb2FkaW5nVGFibGUodHJ1ZSk7XHJcbiAgICBBcGlQcm9kdWN0b3MuZ2V0UHJvZHVjdG9zKGVtcHJlc2FJZCwgXCJwcm9kdWN0b3NcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2RpZ28sIHJlc3VsdHMgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgaWYgKGNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGFQcm9kdWN0b3MgPSByZXN1bHRzLm1hcCgocHJvZHVjdG8pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBrZXk6IHByb2R1Y3RvLmlkLFxyXG4gICAgICAgICAgICAgIGlkOiBwcm9kdWN0by5pZCxcclxuICAgICAgICAgICAgICB0aXR1bG86IHByb2R1Y3RvLm5hbWUsXHJcbiAgICAgICAgICAgICAgZmVjaGFDcmVhY2lvbjogcHJvZHVjdG8uY3JlYXRlZF9hdCxcclxuICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogcHJvZHVjdG8uaW1hZ2VfYmFzZTY0LFxyXG4gICAgICAgICAgICAgIGltYWdlRXh0ZW5zaW9uOiBwcm9kdWN0by5pbWFnZV9leHRlbnNpb24sXHJcbiAgICAgICAgICAgICAgbGVuZ3VhamU6IHByb2R1Y3RvLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbmlkbzogcHJvZHVjdG8uY29udGVudF9odG1sLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0RGF0YVByb2R1Y3RvcyhkYXRhUHJvZHVjdG9zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZ1RhYmxlKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgc2V0TG9hZGluZ1RhYmxlKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICBBcGlQcm9kdWN0b3MuZGV0ZXRlUHJvZHVjdG8oeyBpZCB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVQcm9kdWN0b3MgPSBkYXRhUHJvZHVjdG9zLmZpbHRlcihcclxuICAgICAgICAgICAgKHByb2R1Y3RvKSA9PiBwcm9kdWN0by5pZCAhPT0gaWRcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcyh1cGRhdGVQcm9kdWN0b3MpO1xyXG4gICAgICAgICAgLy8gc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgIC8vIGhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgICAgc2V0Q29uZmlybUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgc2V0Q29uZmlybUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge3N0eWxlc0Nzc31cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGhhbmRsZVByb2R1Y3RvcygpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBQcm9kdWN0b3NcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB2aXNpYmxlPXttb2RhbFByb2R1Y3Rvc1Zpc2libGV9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgIHNldE1vZGFsUHJvZHVjdG9zVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBmb290ZXI9e2ZhbHNlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgzPlByb2R1Y3RvcyBkZSB7ZW1wcmVzYU5vbWJyZX08L2gzPlxyXG4gICAgICAgIDxEaXZpZGVyPjwvRGl2aWRlcj5cclxuICAgICAgICA8QnRuQWdyZWdhclxyXG4gICAgICAgICAgZW1wcmVzYUlkPXtlbXByZXNhSWR9XHJcbiAgICAgICAgICBlbXByZXNhTm9tYnJlPXtlbXByZXNhTm9tYnJlfVxyXG4gICAgICAgICAgZW1wcmVzYUxlbmd1YWplPXtlbXByZXNhTGVuZ3VhamV9XHJcbiAgICAgICAgICBkYXRhUHJvZHVjdG9zPXtkYXRhUHJvZHVjdG9zfVxyXG4gICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcz17c2V0RGF0YVByb2R1Y3Rvc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxTcGluIHNwaW5uaW5nPXtsb2FkaW5nVGFibGV9PlxyXG4gICAgICAgICAgPFRhYmxlIGRhdGFTb3VyY2U9e2RhdGFQcm9kdWN0b3N9IHBhZ2luYXRpb249e2ZhbHNlfT5cclxuICAgICAgICAgICAgey8qIDxDb2x1bW4gdGl0bGU9XCJpZFwiIGRhdGFJbmRleD1cImlkXCIga2V5PVwiaWRcIiAvPiAqL31cclxuICAgICAgICAgICAgPENvbHVtbiB0aXRsZT1cIlByb2R1Y3RvXCIgZGF0YUluZGV4PVwidGl0dWxvXCIga2V5PVwidGl0dWxvXCIgLz5cclxuICAgICAgICAgICAgey8qIDxDb2x1bW4gdGl0bGU9XCJMZW5ndWFqZVwiIGRhdGFJbmRleD1cImxlbmd1YWplXCIga2V5PVwibGVuZ3VhamVcIiAvPlxyXG4gICAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJGZWNoYSBkZSBDcmVhY2nDs25cIlxyXG4gICAgICAgICAgICAgIGRhdGFJbmRleD1cImZlY2hhQ3JlYWNpb25cIlxyXG4gICAgICAgICAgICAgIGtleT1cImZlY2hhQ3JlYWNpb25cIlxyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiT3BjaW9uZXNcIlxyXG4gICAgICAgICAgICAgIGtleT1cIm9wY2lvbmVzXCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyh0ZXh0LCByZWNvcmQpID0+IChcclxuICAgICAgICAgICAgICAgIDxTcGFjZSBzaXplPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdG5BY3R1YWxpemFyXHJcbiAgICAgICAgICAgICAgICAgICAgZW1wcmVzYUlkPXtlbXByZXNhSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wcmVzYU5vbWJyZT17ZW1wcmVzYU5vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICBlbXByZXNhTGVuZ3VhamU9e2VtcHJlc2FMZW5ndWFqZX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhUHJvZHVjdG9zPXtkYXRhUHJvZHVjdG9zfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGFQcm9kdWN0b3M9e3NldERhdGFQcm9kdWN0b3N9XHJcbiAgICAgICAgICAgICAgICAgICAgaWRVcGRhdGU9e3JlY29yZC5pZH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLCv1NlZ3VybyBkZSBlbGltaW5hciBlc3RlIHByb2R1Y3RvP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb2tUZXh0PVwiU2lcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUocmVjb3JkLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uUHJvcHM9e3sgbG9hZGluZzogY29uZmlybUxvYWRpbmcgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZWxldGVUd29Ub25lIG9uQ2xpY2s9e3Nob3dQb3Bjb25maXJtfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+XHJcbiAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDwvU3Bpbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0b3M7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\rdv-web\\\\nextjs\\\\components\\\\panel\\\\Empresas\\\\Productos\\\\index.js */");
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
    setLoadingTable(true);
    _services__WEBPACK_IMPORTED_MODULE_6__["default"].getProductos(empresaId, "productos").then(function (response) {
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
      } else {//
      }

      setLoadingTable(false);
    })["catch"](function (error) {
      //
      setLoadingTable(false);
    });
  };

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
      lineNumber: 96,
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
        lineNumber: 111,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_BtnAgregar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        empresaId: empresaId,
        empresaNombre: empresaNombre,
        empresaLenguaje: empresaLenguaje,
        dataProductos: dataProductos,
        setDataProductos: setDataProductos
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
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
            lineNumber: 125,
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
                  lineNumber: 137,
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
                    lineNumber: 155,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this);
            }
          }, "opciones", false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Productos, "8jRrHYGQ4QpfN3U5+HKv3StpVmQ=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9CdG5QcmVtaW9zL0J0bkFjdHVhbGl6YXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFuZWwvRW1wcmVzYXMvQnRuUHJlbWlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9Qcm9kdWN0b3MvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yIiwiZHluYW1pYyIsInNzciIsIkJ0bkFjdHVhbGl6YXIiLCJwcm9wcyIsImVtcHJlc2FJZCIsImVtcHJlc2FOb21icmUiLCJlbXByZXNhTGVuZ3VhamUiLCJkYXRhUHJvZHVjdG9zIiwic2V0RGF0YVByb2R1Y3RvcyIsImlkVXBkYXRlIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwidXNlU3RhdGUiLCJwcm9jZXNvQWN0dWFsIiwic2V0UHJvY2Vzb0FjdHVhbCIsImlzTW9kYWxWaXNpYmxlIiwic2V0SXNNb2RhbFZpc2libGUiLCJzcGluTW9kYWwiLCJzZXRTcGluTW9kYWwiLCJmaWxlQ2VydGlmaWNhZG8iLCJzZXRGaWxlQ2VydGlmaWNhZG8iLCJzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyIsInNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImNvbnRlbmlkb1VwZGF0ZSIsInNldENvbnRlbmlkb1VwZGF0ZSIsInVzZUVmZmVjdCIsInByb2R1Y3RvIiwiZmluZCIsImlkIiwic2V0RmllbGRzVmFsdWUiLCJsYW5ndWFnZSIsImxlbmd1YWplIiwibmFtZSIsInRpdHVsbyIsImNvbnRlbmlkbyIsImltYWdlQmFzZTY0IiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlQmVmb3JlVXBsb2FkQ2VydGlmaWNhZG8iLCJmaWxlIiwic2l6ZSIsImZpbmRJbmRleCIsImUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZGVuZCIsInJneEJhc2U2NCIsIlJlZ0V4cCIsInJneCIsImV4ZWMiLCJyZXN1bHQiLCJub21icmVBcmNoaXZvIiwiZXh0ZW5zaW9uIiwiYmFzZTY0IiwiYnl0ZXMiLCJoYW5kbGVSZW1vdmVGaWxlQ2xpY2tDZXJ0aWZpY2FkbyIsIm5vcm1GaWxlIiwic3VwZXJhTGltaXRlIiwiZmlsZUxpc3QiLCJwb3AiLCJBcnJheSIsImlzQXJyYXkiLCJsYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJwYXlsb2FkIiwiY29udGVudF9odG1sIiwiaW1hZ2VfZXh0ZW5zaW9uIiwiaW1hZ2VuIiwiaW1hZ2VfYmFzZTY0Iiwic3RyaW5naWZ5IiwidHlwZSIsInVwZGF0ZU5vdGljaWFzIiwiQXBpUHJvZHVjdG9zIiwidXBkYXRlUHJvZHVjdG8iLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29kaWdvIiwibWFwIiwibm90aWNpYSIsImltYWdlbl8iLCJub3RpZmljYSIsImVycm9yIiwiaW5zZXJ0UHJvZHVjdG8iLCJ1dWlkIiwidXVpZHY0IiwiaW1hZ2VFeHRlbnNpb24iLCJrZXkiLCJmZWNoYUNyZWFjaW9uIiwibW9tZW50IiwiZm9ybWF0IiwiZW1wcmVzYV9pZCIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm1pbiIsImNvbG9yIiwiYm9kZXIiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwic3R5bGVzQ3NzIiwiQ29sdW1uIiwiVGFibGUiLCJQcmVtaW9zIiwibW9kYWxQcm9kdWN0b3NWaXNpYmxlIiwic2V0TW9kYWxQcm9kdWN0b3NWaXNpYmxlIiwibG9hZGluZ1RhYmxlIiwic2V0TG9hZGluZ1RhYmxlIiwiY29uZmlybUxvYWRpbmciLCJzZXRDb25maXJtTG9hZGluZyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2hvd1BvcGNvbmZpcm0iLCJoYW5kbGVQcm9kdWN0b3MiLCJBcGlQcmVtaW9zIiwiZ2V0UHJvZHVjdG9zIiwicmVzdWx0cyIsImNyZWF0ZWRfYXQiLCJoYW5kbGVEZWxldGUiLCJkZXRldGVQcm9kdWN0byIsInVwZGF0ZVByb2R1Y3RvcyIsImZpbHRlciIsInRleHQiLCJyZWNvcmQiLCJsb2FkaW5nIiwiUHJvZHVjdG9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPLE1BQ3BCLGNBQU07QUFDSixTQUFPLDBJQUFQO0FBQ0QsQ0FIbUIsRUFJcEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBRmdCLDJEQUVoQjtBQUFBO0FBQUEsY0FGZ0IsY0FFaEI7QUFBQTtBQUFBLENBSm9CLENBQXRCO01BQU1GLE07O0FBT04sSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUU3QkMsU0FGNkIsR0FRM0JELEtBUjJCLENBRTdCQyxTQUY2QjtBQUFBLE1BRzdCQyxhQUg2QixHQVEzQkYsS0FSMkIsQ0FHN0JFLGFBSDZCO0FBQUEsTUFJN0JDLGVBSjZCLEdBUTNCSCxLQVIyQixDQUk3QkcsZUFKNkI7QUFBQSxNQUs3QkMsYUFMNkIsR0FRM0JKLEtBUjJCLENBSzdCSSxhQUw2QjtBQUFBLE1BTTdCQyxnQkFONkIsR0FRM0JMLEtBUjJCLENBTTdCSyxnQkFONkI7QUFBQSxNQU83QkMsUUFQNkIsR0FRM0JOLEtBUjJCLENBTzdCTSxRQVA2Qjs7QUFBQSxzQkFVaEJDLHlDQUFJLENBQUNDLE9BQUwsRUFWZ0I7QUFBQTtBQUFBLE1BVXhCQyxJQVZ3Qjs7QUFBQSxrQkFZV0Msc0RBQVEsQ0FBQyxZQUFELENBWm5CO0FBQUEsTUFZeEJDLGFBWndCO0FBQUEsTUFZVEMsZ0JBWlM7O0FBQUEsbUJBYWFGLHNEQUFRLENBQUMsS0FBRCxDQWJyQjtBQUFBLE1BYXhCRyxj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LENBQUNwRztBQU5uQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBVUUscUVBQUMsK0NBQUQ7QUFDRSx1QkFBSyxFQUFDLHVDQURSO0FBRUUsd0JBQU0sRUFBQyxJQUZUO0FBR0UsNEJBQVUsRUFBQyxJQUhiO0FBSUUsMkJBQVMsRUFBRSxxQkFBTTtBQUNmK0YsZ0NBQVksQ0FBQ0ssTUFBTSxDQUFDcEcsRUFBUixDQUFaO0FBQ0QsbUJBTkg7QUFPRSwrQkFBYSxFQUFFO0FBQUVxRywyQkFBTyxFQUFFaEI7QUFBWCxtQkFQakI7QUFBQSx5Q0FTRSxxRUFBQywrREFBRDtBQUFlLDJCQUFPLEVBQUVJO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFETTtBQUFBO0FBSFYsYUFFTSxVQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBLGtCQURGO0FBMEVELENBL0lEOztHQUFNYSxTOztLQUFBQSxTO0FBaUpTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYW5lbC9lbXByZXNhcy4wZmFhOTdhMjNmMjNkMDMzMGNjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIFNwaW4sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFNlbGVjdCxcclxuICBVcGxvYWQsXHJcbiAgSW1hZ2UsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQsIEVkaXRUd29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IEFwaVByb2R1Y3RvcyBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IG5vdGlmaWNhIGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlscy9ub3RpZmljYVwiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAoKSA9PiB7XHJcbiAgICByZXR1cm4gaW1wb3J0KFwiLi4vLi4vRWRpdG9yXCIpO1xyXG4gIH0sXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuXHJcbmNvbnN0IEJ0bkFjdHVhbGl6YXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBlbXByZXNhSWQsXHJcbiAgICBlbXByZXNhTm9tYnJlLFxyXG4gICAgZW1wcmVzYUxlbmd1YWplLFxyXG4gICAgZGF0YVByb2R1Y3RvcyxcclxuICAgIHNldERhdGFQcm9kdWN0b3MsXHJcbiAgICBpZFVwZGF0ZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cclxuICBjb25zdCBbcHJvY2Vzb0FjdHVhbCwgc2V0UHJvY2Vzb0FjdHVhbF0gPSB1c2VTdGF0ZShcIkFDVFVBTElaQVJcIik7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlLCBzZXRJc01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NwaW5Nb2RhbCwgc2V0U3Bpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmlsZUNlcnRpZmljYWRvLCBzZXRGaWxlQ2VydGlmaWNhZG9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkbywgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG9dID1cclxuICAgIHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250ZW5pZG9VcGRhdGUsIHNldENvbnRlbmlkb1VwZGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgIC8vIHNldENvbnRlbmlkb1VwZGF0ZShcIlwiKTtcclxuICAgIC8vIHNldEltYWdlU3JjKFwiXCIpO1xyXG4gICAgLy8gc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdG8gPSBkYXRhUHJvZHVjdG9zLmZpbmQoKHByb2R1Y3RvKSA9PiBwcm9kdWN0by5pZCA9PT0gaWRVcGRhdGUpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIGlkOiBwcm9kdWN0by5pZCxcclxuICAgICAgbGFuZ3VhZ2U6IHByb2R1Y3RvLmxlbmd1YWplLFxyXG4gICAgICBuYW1lOiBwcm9kdWN0by50aXR1bG8sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRDb250ZW5pZG9VcGRhdGUocHJvZHVjdG8uY29udGVuaWRvKTtcclxuXHJcbiAgICBpZiAocHJvZHVjdG8uaW1hZ2VCYXNlNjQgIT09IFwiXCIpIHtcclxuICAgICAgLy8gc2V0SW1hZ2VTcmMoXHJcbiAgICAgIC8vICAgYGRhdGE6aW1hZ2UvJHtwcm9kdWN0by5pbWFnZUV4dGVuc2lvbn07YmFzZTY0LCR7cHJvZHVjdG8uaW1hZ2VCYXNlNjR9YFxyXG4gICAgICAvLyApO1xyXG5cclxuICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKEpTT04ucGFyc2UocHJvZHVjdG8uaW1hZ2VCYXNlNjQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEltYWdlU3JjKFwiXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvID0gKGZpbGUpID0+IHtcclxuICAgIC8vIDUgTUIgPSAxMDI0ICogNSA9IDUxMjBcclxuICAgIGlmIChmaWxlLnNpemUgLyAxMDAwID4gMjU2KSB7XHJcbiAgICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKHRydWUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyhmYWxzZSk7XHJcblxyXG4gICAgaWYgKGZpbGVDZXJ0aWZpY2Fkby5maW5kSW5kZXgoKGUpID0+IGUubmFtZSA9PT0gZmlsZS5uYW1lKSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCByZ3hCYXNlNjQgPSBSZWdFeHAoXHJcbiAgICAgICAgL2RhdGE6KGFwcGxpY2F0aW9ufGltYWdlKVxcLyhqcGVnfGpwZ3xwbmcqKTtiYXNlNjQsKFteXCJdKikvZ2ltXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJneCA9IHJneEJhc2U2NC5leGVjKHJlYWRlci5yZXN1bHQpO1xyXG5cclxuICAgICAgaWYgKHJneCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICBub21icmVBcmNoaXZvOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgZXh0ZW5zaW9uOiByZ3hbMl0sXHJcbiAgICAgICAgICAgICAgYmFzZTY0OiByZ3hbM10sXHJcbiAgICAgICAgICAgICAgYnl0ZXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG8gPSAoKSA9PiB7XHJcbiAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vcm1GaWxlID0gKGUpID0+IHtcclxuICAgIGxldCBzdXBlcmFMaW1pdGUgPSBmYWxzZTtcclxuICAgIGlmIChlLmZpbGUuc2l6ZSAvIDEwMDAgPiAyNTYpIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8odHJ1ZSk7XHJcbiAgICAgIHN1cGVyYUxpbWl0ZSA9IHRydWU7XHJcbiAgICAgIGUuZmlsZUxpc3QucG9wKCk7XHJcbiAgICAgIHJldHVybiBlICYmIGUuZmlsZUxpc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyhmYWxzZSk7XHJcbiAgICAgIHN1cGVyYUxpbWl0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKGUuZmlsZUxpc3QubGVuZ3RoID4gMSkge1xyXG4gICAgLy8gICBlLmZpbGVMaXN0LnNoaWZ0KCk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZiAoc3VwZXJhTGltaXRlKSB7XHJcbiAgICAvLyAgIGUuZmlsZUxpc3QgPSBbXTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gZSAmJiBlLmZpbGVMaXN0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxheW91dCA9IHtcclxuICAgIGxhYmVsQ29sOiB7IHNwYW46IDI0IH0sXHJcbiAgICB3cmFwcGVyQ29sOiB7IHNwYW46IDI0IH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAuLi52YWx1ZXMsXHJcbiAgICAgIGNvbnRlbnRfaHRtbDogY29udGVuaWRvVXBkYXRlLFxyXG4gICAgICBpbWFnZV9leHRlbnNpb246IHZhbHVlcy5pbWFnZW4gPyBcIlwiIDogbnVsbCxcclxuICAgICAgaW1hZ2VfYmFzZTY0OiB2YWx1ZXMuaW1hZ2VuID8gSlNPTi5zdHJpbmdpZnkodmFsdWVzLmltYWdlbikgOiBudWxsLFxyXG4gICAgICB0eXBlOiBcInByZW1pb3NcIixcclxuICAgIH07XHJcblxyXG4gICAgZGVsZXRlIHBheWxvYWQuaW1hZ2VuO1xyXG5cclxuICAgIGxldCB1cGRhdGVOb3RpY2lhcyA9IGRhdGFQcm9kdWN0b3M7XHJcblxyXG4gICAgaWYgKHByb2Nlc29BY3R1YWwgPT09IFwiQUNUVUFMSVpBUlwiKSB7XHJcbiAgICAgIHNldFNwaW5Nb2RhbCh0cnVlKTtcclxuICAgICAgQXBpUHJvZHVjdG9zLnVwZGF0ZVByb2R1Y3RvKHBheWxvYWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU5vdGljaWFzID0gZGF0YVByb2R1Y3Rvcy5tYXAoKG5vdGljaWEpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobm90aWNpYS5pZCA9PT0gdmFsdWVzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZW5fID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGZpbGVDZXJ0aWZpY2Fkb1swXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICBpbWFnZW5fLmltYWdlQmFzZTY0ID0gZmlsZUNlcnRpZmljYWRvWzBdWzBdLmJhc2U2NDtcclxuICAgICAgICAgICAgICAgIC8vICAgaW1hZ2VuXy5pbWFnZUV4dGVuc2lvbiA9IGZpbGVDZXJ0aWZpY2Fkb1swXVswXS5leHRlbnNpb247XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyB5YSBlc3RvIGxvIHRlbmdvIGFycmliYVxyXG4gICAgICAgICAgICAgICAgLy8gaW1hZ2VCYXNlNjQ6IHByb2R1Y3RvLmltYWdlX2Jhc2U2NCxcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5ub3RpY2lhLFxyXG4gICAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgICAuLi5pbWFnZW5fLFxyXG4gICAgICAgICAgICAgICAgICB0aXR1bG86IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgbGVuZ3VhamU6IHBheWxvYWQubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbmlkbzogcGF5bG9hZC5jb250ZW50X2h0bWwsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbm90aWNpYTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zKHVwZGF0ZU5vdGljaWFzKTtcclxuICAgICAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvY2Vzb0FjdHVhbCA9PT0gXCJBR1JFR0FSXCIpIHtcclxuICAgICAgc2V0U3Bpbk1vZGFsKHRydWUpO1xyXG4gICAgICBBcGlQcm9kdWN0b3MuaW5zZXJ0UHJvZHVjdG8ocGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgICAgICB1cGRhdGVOb3RpY2lhcyA9IFtcclxuICAgICAgICAgICAgICAuLi5kYXRhUHJvZHVjdG9zLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB0aXR1bG86IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgICAgICAgIGxlbmd1YWplOiBwYXlsb2FkLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBheWxvYWQuaW1hZ2VfYmFzZTY0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VFeHRlbnNpb246IHBheWxvYWQuaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAga2V5OiB1dWlkLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHV1aWQsXHJcbiAgICAgICAgICAgICAgICBmZWNoYUNyZWFjaW9uOiBtb21lbnQoKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHNldERhdGFQcm9kdWN0b3ModXBkYXRlTm90aWNpYXMpO1xyXG4gICAgICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gICAgICAgICAgICBoYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RWRpdFR3b1RvbmVcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgcHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuPkFjdHVhbGl6YXIgcHJlbWlvIGRlIHtlbXByZXNhTm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxzcGFuPkFncmVnYXIgbnVldm8gcHJlbWlvIHBhcmEge2VtcHJlc2FOb21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAvLyBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgZm9vdGVyPXtmYWxzZX1cclxuICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICBjZW50ZXJlZFxyXG4gICAgICA+XHJcbiAgICAgICAgPFNwaW4gc3Bpbm5pbmc9e3NwaW5Nb2RhbH0gZGVsYXk9ezUwMH0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgIHsuLi5sYXlvdXR9XHJcbiAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IGVtcHJlc2FMZW5ndWFqZSxcclxuICAgICAgICAgICAgICAgIGVtcHJlc2FfaWQ6IGVtcHJlc2FJZCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiaWRcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJlbXByZXNhX2lkXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9eyg0MCwgNDApfT5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPkxlbmd1YWplPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgbGVuZ3VhamVcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCIgYWxsb3dDbGVhciBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZXNcIj5Fc3Bhw7FvbDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZW5cIj5Jbmdsw6lzPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPk5vbWJyZTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCBub21icmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtaW46IDEwLCBtZXNzYWdlOiBcIk3DrW5pbW8gMTAgY2FyYWN0ZXJlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBtYXhMZW5ndGg9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+UmVzdW1lbjwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCByZXN1bWVuXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWluOiAxMDAsIG1lc3NhZ2U6IFwiTcOtbmltbyAxMDAgY2FyYWN0ZXJlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBtYXhMZW5ndGg9ezUwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICovfVxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+SW1hZ2VuZXM8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wTmFtZT1cImZpbGVMaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21FdmVudD17bm9ybUZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEltw6FnZW5lcyBqcGcgbyBwbmcgZGUgPHN0cm9uZz4yMDAgeCAyMDAgcHggPC9zdHJvbmc+IChub1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBlcmlvciBhIDIwMCBLQilcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IGltYWdlU3JjICE9PSBcIlwiID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiBcIkFkanVudGUgbGFzIGltYWdlbmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPFVwbG9hZCBuYW1lPVwibG9nb1wiIGFjdGlvbj1cIi91cGxvYWQuZG9cIiBsaXN0VHlwZT1cInBpY3R1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbGljayBwYXJhIGFkanVudGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGVDZXJ0aWZpY2Fkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVmb3JlVXBsb2FkPXsoZmlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQmVmb3JlVXBsb2FkQ2VydGlmaWNhZG8oZmlsZSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXtoYW5kbGVSZW1vdmVGaWxlQ2xpY2tDZXJ0aWZpY2Fkb31cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbGVMaXN0PXtmaWxlQ2VydGlmaWNhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0RmlsZUxpc3Q9e2ZpbGVDZXJ0aWZpY2Fkb31cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGFjdGlvbj1cImh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NlwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLyogZGVmYXVsdEZpbGVMaXN0PXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwieHh4LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJkb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IFwiU2VydmVyIEVycm9yIDUwMFwiLCAvLyBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byBzaG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmJtb3NvbHVjaW9uZXMuY29tL2Fzc2V0cy9pbWFnZXMvbG9nb19ub2RlLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBcIjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInl5eS5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZG9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5ibW9zb2x1Y2lvbmVzLmNvbS9hc3NldHMvaW1hZ2VzL2xvZ29fY19zaGFycC5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ6enoucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IFwiU2VydmVyIEVycm9yIDUwMFwiLCAvLyBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byBzaG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmJtb3NvbHVjaW9uZXMuY29tL2Fzc2V0cy9pbWFnZXMvbG9nb19yZWFjdC5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19ICovXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGljayBwYXJhIGFkanVudGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWZpbGlhY2lvbi1kYXRvcy1wZXJzb25hbGVzX19zaXplLW1lc3NhZ2UgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRWwgYXJjaGl2byBubyBkZWJlIHBlc2FyIG3DoXMgZGUgMjAwIEtCLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VTcmMgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZGVyOiBcIjFweCBzb2xpZCAjRDlEOUQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNSUFBQUREQ0FZQUFBRFF2YzZVQUFBQlJXbERRMUJKUTBNZ1VISnZabWxzWlFBQUtKRmpZR0FTU1N3b3lHRmhZR0RJelNzcENuSjNVb2lJakZKZ2Y4TEF3U0RDSU1vZ3dNQ2NtRnhjNEJnUTRBTlV3Z0NqVWNHM2F3eU1JUHF5THNpczdQUE9xM1FkREZjdmpWM2pPRDFib1FWVFBRcmdTa2t0VGdiU2Y0QTRMYm1ncUlTQmdURUZ5Rll1THlrQXNUdUFiSkVpb0tPQTdEa2dkanFFdlFIRVRvS3dqNERWaEFRNUE5azNnR3lCNUl4RW9CbU1MNEJzblNRazhYUWtOdFJlRU9CeGNmWHhVUWcxTWpjMGR5SGdYTkpCU1dwRkNZaDJ6aStvTE1wTXp5aFJjQVNHVXFxQ1oxNnlubzZDa1lHUkFRTURLTXdocWovZkFJY2xveGdIUXF4QWpJSEJFdWd3NXNVSXNTUXBCb2J0UVBkTGNpTEVWSll6TVBCSE1EQnNheWhJTEVxRU80RHhHMHR4bXJFUmhNMjluWUdCZGRyLy81L0RHUmpZTlJrWS9sNy8vLy8zOXYvLy95NERtbitMZ2VIQU53RHJrbDFBdU8rcG1nQUFBRGhsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUFxQUNBQVFBQUFBQkFBQUF3cUFEQUFRQUFBQUJBQUFBd3dBQUFBRDliL0huQUFBSGxrbEVRVlI0QWUzZFAzUFRXQlNHY2JHek02R0NLcWxJQlJWMGRIUkpGYXJRMGVVVDhMSDRCblJVME5IUjBVRUZWZElsRlJWN1R6Umtzb21QWTh1eWtUay96ZXdRZkt3Lzl6bnY0eXZKeW5MdjR1TGlWMmRCb0RpQmY0cVAzL0FSdUNSQUJFRkFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZzBBajhpMEpPNE96c3JQdjY5V3YraGkycVBIcjBxTnZmMzkraUk5N3NvUkloNGYzejU4L3U3ZHUzU1hYN1h0N1oyZW5ldkhtemZRZStvU04yYXBTQVBqMDlUU3JiK1hLSS9mMzc5KzA4K0EwY05SRTJBTmt1cGsrQUNOUHZrU1BjQUFFaWJBQ3lYVXlmQUJHbTN5Tkh1QUVDUk5nQVpMdVlQZ0VpcktsSHU3dTdYZHl5dEd3SEFkOGpqTnluZzRPRDd2bno1MWRiUFQ4Lzd6NTgrTkI5Ky9idDZqVS9USStBR1dIRW5yeDQ4ZUovRXNTbUh6eDQwTDE4K2ZMeXp4RjNaVk1qRXlEQ2lFRGpNWVpaUzV3aVBYbnlaRmJKYXhNaFFJUVJHekh2V1I3WEN5T0NYc09taURBaTFIbVBNTVFqRHBicEVpRENpTDM1OGVOSHVyVy81U25XZElCYlhpRENpQTM4L1BuenJjZTJZeVo0Ly81OUYzZVBMTk1sNFBicGlMMkowTDk3OSs3eUR0SERodzh2dHp6dmRHbkVYZHZVaWdTSXNDTEFXYXZIcC8rcU0wQmNYTWQvcTI1bjF2RjU3VFlCcDBhM21VemlsZVBqNCs3azVLU0xiNmd0NnlkQWhQVXpYbm9QUjBkSGw3OVdHVE5DZkJubjF1dlNDSmRlZ1FoTEkxdnZDaytmUHUyZVBYdDJ0Wk9ZRVY2L2ZuMzFkeitzaHdBUjFzUDFjcXZMbnRiRU45TXhBOXhjWWpzeFMxaldSNEFJYTJJYnp4MHRjNDRmWVgvMTZsVjZOREZMWEgrWUwzMmp3aUFDUkJpRWJmNUtjWG9USXNRU3B6WHg0TjI4SmE0QlFvSzdyZ1hpeWRiSGp4L1AyNVRhUUFKRUdBZ3VXeTArMlE4UEQ2L0tpNFI4RVZsK2J6Qk9uWlk5NWZxOXJqOXpBa1RJMlN4ZGlkQkhxRzkrc2tkdzQzYm9yQ1hPL1pjSmRyYVBXZHYyMnVJRWlMQTRxN252dkN1ZzhXVHF6UXZlT0gyNmZvZG83ZzZ1RmUvYTE3VzMrbkZCQWtSWUVOUmRiMXZra3oxQ0g5Y1BzVnkvanJocjI3UHFNWXZFTllObEhBSWVzUmlCWXdSeTBWKzhpWFA4Ky9mdlgxMU1yN0w3RUN1ZWIvcjQ4ZU1xbTdGdUkyQkdXREVHOGNtKzdHM05FT2ZtZGNUUXc0aDkvNTVsaG03RGVrUllLUVBaRjJBcmJYVEF5dTRrRFlCMll4VXp3ZzBnaS80MXp0SG5mUUcyNkhiR2VsL2NyVnJtN3ROWSsvMWJ0a09FQVoyTTA1cjRGQjdyOUdiQUlkeGFaWXJIZE9zZ0ovd0NFUVkwSjc0VG1PS25ieHhUOW4zRmdHR1dXc1Zkb3dIdGp0OU5udmY3eVFNMmFaVS9USUFJQXhydzZkT25BV3RaWmNvRW5CcE51VHVPYldNRWlMQXgxSFkwWlFKRW1ISjNITnZHQ0JCaFk2anRhTW9FaUpCMFoyOXZMNmxzNTh2eFBjTzgvemZyZG81cXZLTytkM0Z4OFd1OHpmMWRXNHAvY1B6TGx5L2R0djlUcy9FYmN2R0FIaEh5ZkJJaFo2TlNpSUJUbzBMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDL3dHZ0tLQzRZTUE0VEFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgey8qIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPsK/RGVzZWEgdmlzdWFsaXphY2nDs24gZW4gZWwgSG9tZT88L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbGl6YWNpb25Ib21lXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbmdyZXNlIHZpc3VhbGl6YWNpw7NuIGVuIGVsIEhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCIgYWxsb3dDbGVhcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiU1wiPlNpPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJOXCI+Tm88L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYXJjYXJQcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsK/RGVzZWEgbWFyY2FyIGNvbW8gcHJpbmNpcGFsPzwvc3Ryb25nPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNpIHNlbGVjY2lvbmEgJ1NpJyBzZSBhZ3JlZ2Fyw6EgY29tbyBub3RpY2lhcyBwcmluY2lwYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbiBlbCBob21lIChlbCBjdWFkcm8gZ3JhbmRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTZWxlY2Npb25lIHNpIG8gbm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIlNcIj5TaTwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJOXCI+Tm88L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5JdGVtIG5hbWU9XCJtYXJjYXJQcmluY2lwYWxcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbC1yZXF1aXJlZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250ZW5pZG86PC9zdHJvbmc+ICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVuaWRvVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e3sgc2V0Q29udGVuaWRvVXBkYXRlIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PlZvbHZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY3R1YWxpemFyIHByZW1pbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBwcmVtaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ0bkFjdHVhbGl6YXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIERpdmlkZXIsIFRhYmxlLCBTcGluLCBQb3Bjb25maXJtLCBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IERlbGV0ZVR3b1RvbmUgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuaW1wb3J0IEJ0bkFncmVnYXIgZnJvbSBcIi4vQnRuQWdyZWdhclwiO1xyXG5pbXBvcnQgQnRuQWN0dWFsaXphciBmcm9tIFwiLi9CdG5BY3R1YWxpemFyXCI7XHJcbmltcG9ydCBBcGlQcmVtaW9zIGZyb20gXCIuL3NlcnZpY2VzXCI7XHJcbmltcG9ydCBub3RpZmljYSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvbm90aWZpY2FcIjtcclxuXHJcbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDEsXHJcbiAgaDQsXHJcbiAgaDUge1xyXG4gICAgY29sb3I6ICMzZDI1MTQgIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB7IENvbHVtbiB9ID0gVGFibGU7XHJcblxyXG5jb25zdCBQcmVtaW9zID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBlbXByZXNhSWQsIGVtcHJlc2FOb21icmUsIGVtcHJlc2FMZW5ndWFqZSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFttb2RhbFByb2R1Y3Rvc1Zpc2libGUsIHNldE1vZGFsUHJvZHVjdG9zVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdUYWJsZSwgc2V0TG9hZGluZ1RhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YVByb2R1Y3Rvcywgc2V0RGF0YVByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbmZpcm1Mb2FkaW5nLCBzZXRDb25maXJtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaG93UG9wY29uZmlybSA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxQcm9kdWN0b3NWaXNpYmxlKHRydWUpO1xyXG5cclxuICAgIHNldExvYWRpbmdUYWJsZSh0cnVlKTtcclxuICAgIEFwaVByZW1pb3MuZ2V0UHJvZHVjdG9zKGVtcHJlc2FJZCwgXCJwcmVtaW9zXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29kaWdvLCByZXN1bHRzIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhUHJvZHVjdG9zID0gcmVzdWx0cy5tYXAoKHByb2R1Y3RvKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAga2V5OiBwcm9kdWN0by5pZCxcclxuICAgICAgICAgICAgICBpZDogcHJvZHVjdG8uaWQsXHJcbiAgICAgICAgICAgICAgdGl0dWxvOiBwcm9kdWN0by5uYW1lLFxyXG4gICAgICAgICAgICAgIGZlY2hhQ3JlYWNpb246IHByb2R1Y3RvLmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHByb2R1Y3RvLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICBpbWFnZUV4dGVuc2lvbjogcHJvZHVjdG8uaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgIGxlbmd1YWplOiBwcm9kdWN0by5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICBjb250ZW5pZG86IHByb2R1Y3RvLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldERhdGFQcm9kdWN0b3MoZGF0YVByb2R1Y3Rvcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmdUYWJsZShmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHNldExvYWRpbmdUYWJsZShmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xyXG4gICAgQXBpUHJlbWlvcy5kZXRldGVQcm9kdWN0byh7IGlkIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZVByb2R1Y3RvcyA9IGRhdGFQcm9kdWN0b3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAocHJvZHVjdG8pID0+IHByb2R1Y3RvLmlkICE9PSBpZFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zKHVwZGF0ZVByb2R1Y3Rvcyk7XHJcbiAgICAgICAgICAvLyBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gICAgICAgICAgLy8gaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICBzZXRDb25maXJtTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBub3RpZmljYShcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICBzZXRDb25maXJtTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7c3R5bGVzQ3NzfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlUHJvZHVjdG9zKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFByZW1pb3NcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB2aXNpYmxlPXttb2RhbFByb2R1Y3Rvc1Zpc2libGV9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgIHNldE1vZGFsUHJvZHVjdG9zVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBmb290ZXI9e2ZhbHNlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgzPlByZW1pb3MgZGUge2VtcHJlc2FOb21icmV9PC9oMz5cclxuICAgICAgICA8RGl2aWRlcj48L0RpdmlkZXI+XHJcbiAgICAgICAgPEJ0bkFncmVnYXJcclxuICAgICAgICAgIGVtcHJlc2FJZD17ZW1wcmVzYUlkfVxyXG4gICAgICAgICAgZW1wcmVzYU5vbWJyZT17ZW1wcmVzYU5vbWJyZX1cclxuICAgICAgICAgIGVtcHJlc2FMZW5ndWFqZT17ZW1wcmVzYUxlbmd1YWplfVxyXG4gICAgICAgICAgZGF0YVByb2R1Y3Rvcz17ZGF0YVByb2R1Y3Rvc31cclxuICAgICAgICAgIHNldERhdGFQcm9kdWN0b3M9e3NldERhdGFQcm9kdWN0b3N9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8U3BpbiBzcGlubmluZz17bG9hZGluZ1RhYmxlfT5cclxuICAgICAgICAgIDxUYWJsZSBkYXRhU291cmNlPXtkYXRhUHJvZHVjdG9zfSBwYWdpbmF0aW9uPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIHsvKiA8Q29sdW1uIHRpdGxlPVwiaWRcIiBkYXRhSW5kZXg9XCJpZFwiIGtleT1cImlkXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxDb2x1bW4gdGl0bGU9XCJQcmVtaW9cIiBkYXRhSW5kZXg9XCJ0aXR1bG9cIiBrZXk9XCJ0aXR1bG9cIiAvPlxyXG4gICAgICAgICAgICB7LyogPENvbHVtbiB0aXRsZT1cIkxlbmd1YWplXCIgZGF0YUluZGV4PVwibGVuZ3VhamVcIiBrZXk9XCJsZW5ndWFqZVwiIC8+XHJcbiAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICB0aXRsZT1cIkZlY2hhIGRlIENyZWFjacOzblwiXHJcbiAgICAgICAgICAgICAgZGF0YUluZGV4PVwiZmVjaGFDcmVhY2lvblwiXHJcbiAgICAgICAgICAgICAga2V5PVwiZmVjaGFDcmVhY2lvblwiXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJPcGNpb25lc1wiXHJcbiAgICAgICAgICAgICAga2V5PVwib3BjaW9uZXNcIlxyXG4gICAgICAgICAgICAgIHJlbmRlcj17KHRleHQsIHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFNwYWNlIHNpemU9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ0bkFjdHVhbGl6YXJcclxuICAgICAgICAgICAgICAgICAgICBlbXByZXNhSWQ9e2VtcHJlc2FJZH1cclxuICAgICAgICAgICAgICAgICAgICBlbXByZXNhTm9tYnJlPXtlbXByZXNhTm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgIGVtcHJlc2FMZW5ndWFqZT17ZW1wcmVzYUxlbmd1YWplfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQcm9kdWN0b3M9e2RhdGFQcm9kdWN0b3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YVByb2R1Y3Rvcz17c2V0RGF0YVByb2R1Y3Rvc31cclxuICAgICAgICAgICAgICAgICAgICBpZFVwZGF0ZT17cmVjb3JkLmlkfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIsK/U2VndXJvIGRlIGVsaW1pbmFyIGVzdGUgcHJlbWlvP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb2tUZXh0PVwiU2lcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUocmVjb3JkLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uUHJvcHM9e3sgbG9hZGluZzogY29uZmlybUxvYWRpbmcgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZWxldGVUd29Ub25lIG9uQ2xpY2s9e3Nob3dQb3Bjb25maXJtfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+XHJcbiAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDwvU3Bpbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVtaW9zO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBEaXZpZGVyLCBUYWJsZSwgU3BpbiwgUG9wY29uZmlybSwgU3BhY2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBEZWxldGVUd29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmltcG9ydCBCdG5BZ3JlZ2FyIGZyb20gXCIuL0J0bkFncmVnYXJcIjtcclxuaW1wb3J0IEJ0bkFjdHVhbGl6YXIgZnJvbSBcIi4vQnRuQWN0dWFsaXphclwiO1xyXG5pbXBvcnQgQXBpUHJvZHVjdG9zIGZyb20gXCIuL3NlcnZpY2VzXCI7XHJcbmltcG9ydCBub3RpZmljYSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvbm90aWZpY2FcIjtcclxuXHJcbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDEsXHJcbiAgaDQsXHJcbiAgaDUge1xyXG4gICAgY29sb3I6ICMzZDI1MTQgIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB7IENvbHVtbiB9ID0gVGFibGU7XHJcblxyXG5jb25zdCBQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGVtcHJlc2FJZCwgZW1wcmVzYU5vbWJyZSwgZW1wcmVzYUxlbmd1YWplIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW21vZGFsUHJvZHVjdG9zVmlzaWJsZSwgc2V0TW9kYWxQcm9kdWN0b3NWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ1RhYmxlLCBzZXRMb2FkaW5nVGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkYXRhUHJvZHVjdG9zLCBzZXREYXRhUHJvZHVjdG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY29uZmlybUxvYWRpbmcsIHNldENvbmZpcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNob3dQb3Bjb25maXJtID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9kdWN0b3MgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbFByb2R1Y3Rvc1Zpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgc2V0TG9hZGluZ1RhYmxlKHRydWUpO1xyXG4gICAgQXBpUHJvZHVjdG9zLmdldFByb2R1Y3RvcyhlbXByZXNhSWQsIFwicHJvZHVjdG9zXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29kaWdvLCByZXN1bHRzIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGlmIChjb2RpZ28gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhUHJvZHVjdG9zID0gcmVzdWx0cy5tYXAoKHByb2R1Y3RvKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAga2V5OiBwcm9kdWN0by5pZCxcclxuICAgICAgICAgICAgICBpZDogcHJvZHVjdG8uaWQsXHJcbiAgICAgICAgICAgICAgdGl0dWxvOiBwcm9kdWN0by5uYW1lLFxyXG4gICAgICAgICAgICAgIGZlY2hhQ3JlYWNpb246IHByb2R1Y3RvLmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHByb2R1Y3RvLmltYWdlX2Jhc2U2NCxcclxuICAgICAgICAgICAgICBpbWFnZUV4dGVuc2lvbjogcHJvZHVjdG8uaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgIGxlbmd1YWplOiBwcm9kdWN0by5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICBjb250ZW5pZG86IHByb2R1Y3RvLmNvbnRlbnRfaHRtbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldERhdGFQcm9kdWN0b3MoZGF0YVByb2R1Y3Rvcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmdUYWJsZShmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHNldExvYWRpbmdUYWJsZShmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xyXG4gICAgQXBpUHJvZHVjdG9zLmRldGV0ZVByb2R1Y3RvKHsgaWQgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kaWdvID09PSBcIjFcIikge1xyXG4gICAgICAgICAgY29uc3QgdXBkYXRlUHJvZHVjdG9zID0gZGF0YVByb2R1Y3Rvcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChwcm9kdWN0bykgPT4gcHJvZHVjdG8uaWQgIT09IGlkXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIHNldERhdGFQcm9kdWN0b3ModXBkYXRlUHJvZHVjdG9zKTtcclxuICAgICAgICAgIC8vIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgICAgICAgICAvLyBoYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICAgIHNldENvbmZpcm1Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgIHNldENvbmZpcm1Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtzdHlsZXNDc3N9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVQcm9kdWN0b3MoKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgUHJvZHVjdG9zXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdmlzaWJsZT17bW9kYWxQcm9kdWN0b3NWaXNpYmxlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRNb2RhbFByb2R1Y3Rvc1Zpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgZm9vdGVyPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMz5Qcm9kdWN0b3MgZGUge2VtcHJlc2FOb21icmV9PC9oMz5cclxuICAgICAgICA8RGl2aWRlcj48L0RpdmlkZXI+XHJcbiAgICAgICAgPEJ0bkFncmVnYXJcclxuICAgICAgICAgIGVtcHJlc2FJZD17ZW1wcmVzYUlkfVxyXG4gICAgICAgICAgZW1wcmVzYU5vbWJyZT17ZW1wcmVzYU5vbWJyZX1cclxuICAgICAgICAgIGVtcHJlc2FMZW5ndWFqZT17ZW1wcmVzYUxlbmd1YWplfVxyXG4gICAgICAgICAgZGF0YVByb2R1Y3Rvcz17ZGF0YVByb2R1Y3Rvc31cclxuICAgICAgICAgIHNldERhdGFQcm9kdWN0b3M9e3NldERhdGFQcm9kdWN0b3N9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8U3BpbiBzcGlubmluZz17bG9hZGluZ1RhYmxlfT5cclxuICAgICAgICAgIDxUYWJsZSBkYXRhU291cmNlPXtkYXRhUHJvZHVjdG9zfSBwYWdpbmF0aW9uPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIHsvKiA8Q29sdW1uIHRpdGxlPVwiaWRcIiBkYXRhSW5kZXg9XCJpZFwiIGtleT1cImlkXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxDb2x1bW4gdGl0bGU9XCJQcm9kdWN0b1wiIGRhdGFJbmRleD1cInRpdHVsb1wiIGtleT1cInRpdHVsb1wiIC8+XHJcbiAgICAgICAgICAgIHsvKiA8Q29sdW1uIHRpdGxlPVwiTGVuZ3VhamVcIiBkYXRhSW5kZXg9XCJsZW5ndWFqZVwiIGtleT1cImxlbmd1YWplXCIgLz5cclxuICAgICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiRmVjaGEgZGUgQ3JlYWNpw7NuXCJcclxuICAgICAgICAgICAgICBkYXRhSW5kZXg9XCJmZWNoYUNyZWFjaW9uXCJcclxuICAgICAgICAgICAgICBrZXk9XCJmZWNoYUNyZWFjaW9uXCJcclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICB0aXRsZT1cIk9wY2lvbmVzXCJcclxuICAgICAgICAgICAgICBrZXk9XCJvcGNpb25lc1wiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsodGV4dCwgcmVjb3JkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U3BhY2Ugc2l6ZT1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnRuQWN0dWFsaXphclxyXG4gICAgICAgICAgICAgICAgICAgIGVtcHJlc2FJZD17ZW1wcmVzYUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGVtcHJlc2FOb21icmU9e2VtcHJlc2FOb21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wcmVzYUxlbmd1YWplPXtlbXByZXNhTGVuZ3VhamV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVByb2R1Y3Rvcz17ZGF0YVByb2R1Y3Rvc31cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zPXtzZXREYXRhUHJvZHVjdG9zfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkVXBkYXRlPXtyZWNvcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiwr9TZWd1cm8gZGUgZWxpbWluYXIgZXN0ZSBwcm9kdWN0bz9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlNpXCJcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHJlY29yZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblByb3BzPXt7IGxvYWRpbmc6IGNvbmZpcm1Mb2FkaW5nIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlVHdvVG9uZSBvbkNsaWNrPXtzaG93UG9wY29uZmlybX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxyXG4gICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICA8L1NwaW4+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG9zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9