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
        children: ["Actualizar producto de ", empresaNombre]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
        children: ["Agregar nuevo producto para ", empresaNombre]
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
                    defaultFileList: [{
                      uid: "1",
                      name: "xxx.png",
                      status: "done",
                      response: "Server Error 500",
                      // custom error message to show
                      url: "http://www.baidu.com/xxx.png"
                    }, {
                      uid: "2",
                      name: "yyy.png",
                      status: "done",
                      url: "http://www.baidu.com/yyy.png"
                    }, {
                      uid: "3",
                      name: "zzz.png",
                      status: "error",
                      response: "Server Error 500",
                      // custom error message to show
                      url: "http://www.baidu.com/zzz.png"
                    }],
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UploadOutlined"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 379,
                        columnNumber: 37
                      }, _this),
                      children: "Click para adjuntar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 379,
                      columnNumber: 23
                    }, _this), showSizeMessageCertificado && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                      className: "afiliacion-datos-personales__size-message ",
                      style: {
                        color: "red"
                      },
                      children: "El archivo no debe pesar m\xE1s de 200 KB."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 384,
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
                    fallback: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 400,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 394,
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
                lineNumber: 426,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  className: "label-required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 456,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                  children: "Contenido:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 457,
                  columnNumber: 19
                }, _this), " \xA0\xA0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 455,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 460,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Editor, {
                  data: contenidoUpdate,
                  actions: {
                    setContenidoUpdate: setContenidoUpdate
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 461,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 459,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 24,
                style: {
                  textAlign: "center"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 467,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 468,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  onClick: handleCancel,
                  children: "Volver"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 469,
                  columnNumber: 19
                }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                  type: "primary",
                  htmlType: "submit",
                  children: procesoActual === "ACTUALIZAR" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Actualizar producto"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 473,
                    columnNumber: 23
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "Agregar producto"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 475,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 471,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 466,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYW5lbC9FbXByZXNhcy9CdG5QcmVtaW9zL0J0bkFjdHVhbGl6YXIvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yIiwiZHluYW1pYyIsInNzciIsIkJ0bkFjdHVhbGl6YXIiLCJwcm9wcyIsImVtcHJlc2FJZCIsImVtcHJlc2FOb21icmUiLCJlbXByZXNhTGVuZ3VhamUiLCJkYXRhUHJvZHVjdG9zIiwic2V0RGF0YVByb2R1Y3RvcyIsImlkVXBkYXRlIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwidXNlU3RhdGUiLCJwcm9jZXNvQWN0dWFsIiwic2V0UHJvY2Vzb0FjdHVhbCIsImlzTW9kYWxWaXNpYmxlIiwic2V0SXNNb2RhbFZpc2libGUiLCJzcGluTW9kYWwiLCJzZXRTcGluTW9kYWwiLCJmaWxlQ2VydGlmaWNhZG8iLCJzZXRGaWxlQ2VydGlmaWNhZG8iLCJzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyIsInNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImNvbnRlbmlkb1VwZGF0ZSIsInNldENvbnRlbmlkb1VwZGF0ZSIsInVzZUVmZmVjdCIsInByb2R1Y3RvIiwiZmluZCIsImlkIiwic2V0RmllbGRzVmFsdWUiLCJsYW5ndWFnZSIsImxlbmd1YWplIiwibmFtZSIsInRpdHVsbyIsImNvbnRlbmlkbyIsImltYWdlQmFzZTY0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvIiwiZmlsZSIsInNpemUiLCJmaW5kSW5kZXgiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJyZ3hCYXNlNjQiLCJSZWdFeHAiLCJyZ3giLCJleGVjIiwicmVzdWx0Iiwibm9tYnJlQXJjaGl2byIsImV4dGVuc2lvbiIsImJhc2U2NCIsImJ5dGVzIiwiaGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG8iLCJub3JtRmlsZSIsImZpbGVMaXN0Iiwic3VwZXJhTGltaXRlIiwicG9wIiwiQXJyYXkiLCJpc0FycmF5IiwibGF5b3V0IiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsIm9uRmluaXNoIiwidmFsdWVzIiwicGF5bG9hZCIsImNvbnRlbnRfaHRtbCIsImltYWdlX2V4dGVuc2lvbiIsImltYWdlbiIsImltYWdlX2Jhc2U2NCIsInN0cmluZ2lmeSIsInR5cGUiLCJ1cGRhdGVOb3RpY2lhcyIsIkFwaVByb2R1Y3RvcyIsInVwZGF0ZVByb2R1Y3RvIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvZGlnbyIsIm1hcCIsIm5vdGljaWEiLCJpbWFnZW5fIiwiaW1hZ2VFeHRlbnNpb24iLCJub3RpZmljYSIsImVycm9yIiwiaW5zZXJ0UHJvZHVjdG8iLCJ1dWlkIiwidXVpZHY0Iiwia2V5IiwiZmVjaGFDcmVhY2lvbiIsIm1vbWVudCIsImZvcm1hdCIsImVtcHJlc2FfaWQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJtaW4iLCJ1aWQiLCJzdGF0dXMiLCJ1cmwiLCJjb2xvciIsImJvZGVyIiwicGFkZGluZyIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtREFBTyxNQUNwQixjQUFNO0FBQ0osU0FBTywwSUFBUDtBQUNELENBSG1CLEVBSXBCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUZnQiwyREFFaEI7QUFBQTtBQUFBLGNBRmdCLGNBRWhCO0FBQUE7QUFBQSxDQUpvQixDQUF0QjtNQUFNRixNOztBQU9OLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FB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O0FBQUE7QUFBQTtBQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQSxrQkFERjtBQXVQRCxDQTFjRDs7R0FBTVosYTtVQVVXUSx5Q0FBSSxDQUFDQyxPOzs7TUFWaEJULGE7QUE0Y1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhbmVsL2VtcHJlc2FzLjk0OTU0Y2UwYjcxODAyZGMzNWViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgTW9kYWwsXHJcbiAgU3BpbixcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgU2VsZWN0LFxyXG4gIFVwbG9hZCxcclxuICBJbWFnZSxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCwgRWRpdFR3b1RvbmUgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgQXBpUHJvZHVjdG9zIGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgbm90aWZpY2EgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL25vdGlmaWNhXCI7XHJcblxyXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxyXG4gICgpID0+IHtcclxuICAgIHJldHVybiBpbXBvcnQoXCIuLi8uLi9FZGl0b3JcIik7XHJcbiAgfSxcclxuICB7IHNzcjogZmFsc2UgfVxyXG4pO1xyXG5cclxuY29uc3QgQnRuQWN0dWFsaXphciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGVtcHJlc2FJZCxcclxuICAgIGVtcHJlc2FOb21icmUsXHJcbiAgICBlbXByZXNhTGVuZ3VhamUsXHJcbiAgICBkYXRhUHJvZHVjdG9zLFxyXG4gICAgc2V0RGF0YVByb2R1Y3RvcyxcclxuICAgIGlkVXBkYXRlLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IFtwcm9jZXNvQWN0dWFsLCBzZXRQcm9jZXNvQWN0dWFsXSA9IHVzZVN0YXRlKFwiQUNUVUFMSVpBUlwiKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3Bpbk1vZGFsLCBzZXRTcGluTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaWxlQ2VydGlmaWNhZG8sIHNldEZpbGVDZXJ0aWZpY2Fkb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvLCBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2Fkb10gPVxyXG4gICAgdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZVNyYywgc2V0SW1hZ2VTcmNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnRlbmlkb1VwZGF0ZSwgc2V0Q29udGVuaWRvVXBkYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gZm9ybS5yZXNldEZpZWxkcygpO1xyXG4gICAgLy8gc2V0Q29udGVuaWRvVXBkYXRlKFwiXCIpO1xyXG4gICAgLy8gc2V0SW1hZ2VTcmMoXCJcIik7XHJcbiAgICAvLyBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0byA9IGRhdGFQcm9kdWN0b3MuZmluZCgocHJvZHVjdG8pID0+IHByb2R1Y3RvLmlkID09PSBpZFVwZGF0ZSk7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgaWQ6IHByb2R1Y3RvLmlkLFxyXG4gICAgICBsYW5ndWFnZTogcHJvZHVjdG8ubGVuZ3VhamUsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3RvLnRpdHVsbyxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldENvbnRlbmlkb1VwZGF0ZShwcm9kdWN0by5jb250ZW5pZG8pO1xyXG5cclxuICAgIGlmIChwcm9kdWN0by5pbWFnZUJhc2U2NCAhPT0gXCJcIikge1xyXG4gICAgICAvLyBzZXRJbWFnZVNyYyhcclxuICAgICAgLy8gICBgZGF0YTppbWFnZS8ke3Byb2R1Y3RvLmltYWdlRXh0ZW5zaW9ufTtiYXNlNjQsJHtwcm9kdWN0by5pbWFnZUJhc2U2NH1gXHJcbiAgICAgIC8vICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhgcHJvZHVjdG8uaW1hZ2VCYXNlNjRgLCBKU09OLnBhcnNlKHByb2R1Y3RvLmltYWdlQmFzZTY0KSk7XHJcblxyXG4gICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oSlNPTi5wYXJzZShwcm9kdWN0by5pbWFnZUJhc2U2NCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SW1hZ2VTcmMoXCJcIik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmVmb3JlVXBsb2FkQ2VydGlmaWNhZG8gPSAoZmlsZSkgPT4ge1xyXG4gICAgLy8gNSBNQiA9IDEwMjQgKiA1ID0gNTEyMFxyXG4gICAgaWYgKGZpbGUuc2l6ZSAvIDEwMDAgPiAyNTYpIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8odHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldFNob3dTaXplTWVzc2FnZUNlcnRpZmljYWRvKGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZmlsZUNlcnRpZmljYWRvLmZpbmRJbmRleCgoZSkgPT4gZS5uYW1lID09PSBmaWxlLm5hbWUpID49IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJneEJhc2U2NCA9IFJlZ0V4cChcclxuICAgICAgICAvZGF0YTooYXBwbGljYXRpb258aW1hZ2UpXFwvKGpwZWd8anBnfHBuZyopO2Jhc2U2NCwoW15cIl0qKS9naW1cclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgcmd4ID0gcmd4QmFzZTY0LmV4ZWMocmVhZGVyLnJlc3VsdCk7XHJcblxyXG4gICAgICBpZiAocmd4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC4uLmZpbGUsXHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgIG5vbWJyZUFyY2hpdm86IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICBleHRlbnNpb246IHJneFsyXSxcclxuICAgICAgICAgICAgICBiYXNlNjQ6IHJneFszXSxcclxuICAgICAgICAgICAgICBieXRlczogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWxlQ2xpY2tDZXJ0aWZpY2FkbyA9ICgpID0+IHtcclxuICAgIHNldEZpbGVDZXJ0aWZpY2FkbyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9ybUZpbGUgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYGUuZmlsZUxpc3RgLCBlLmZpbGVMaXN0KTtcclxuICAgIGxldCBzdXBlcmFMaW1pdGUgPSBmYWxzZTtcclxuICAgIGlmIChlLmZpbGUuc2l6ZSAvIDEwMDAgPiAyNTYpIHtcclxuICAgICAgc2V0U2hvd1NpemVNZXNzYWdlQ2VydGlmaWNhZG8odHJ1ZSk7XHJcbiAgICAgIHN1cGVyYUxpbWl0ZSA9IHRydWU7XHJcbiAgICAgIGUuZmlsZUxpc3QucG9wKCk7XHJcbiAgICAgIHJldHVybiBlICYmIGUuZmlsZUxpc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyhmYWxzZSk7XHJcbiAgICAgIHN1cGVyYUxpbWl0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKGUuZmlsZUxpc3QubGVuZ3RoID4gMSkge1xyXG4gICAgLy8gICBlLmZpbGVMaXN0LnNoaWZ0KCk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZiAoc3VwZXJhTGltaXRlKSB7XHJcbiAgICAvLyAgIGUuZmlsZUxpc3QgPSBbXTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gZSAmJiBlLmZpbGVMaXN0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxheW91dCA9IHtcclxuICAgIGxhYmVsQ29sOiB7IHNwYW46IDI0IH0sXHJcbiAgICB3cmFwcGVyQ29sOiB7IHNwYW46IDI0IH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAuLi52YWx1ZXMsXHJcbiAgICAgIGNvbnRlbnRfaHRtbDogY29udGVuaWRvVXBkYXRlLFxyXG4gICAgICBpbWFnZV9leHRlbnNpb246IHZhbHVlcy5pbWFnZW4gPyBcIlwiIDogbnVsbCxcclxuICAgICAgaW1hZ2VfYmFzZTY0OiB2YWx1ZXMuaW1hZ2VuID8gSlNPTi5zdHJpbmdpZnkodmFsdWVzLmltYWdlbikgOiBudWxsLFxyXG4gICAgICB0eXBlOiBcInByZW1pb3NcIixcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHVwZGF0ZU5vdGljaWFzID0gZGF0YVByb2R1Y3RvcztcclxuXHJcbiAgICBpZiAocHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIpIHtcclxuICAgICAgc2V0U3Bpbk1vZGFsKHRydWUpO1xyXG4gICAgICBBcGlQcm9kdWN0b3MudXBkYXRlUHJvZHVjdG8ocGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgdXBkYXRlTm90aWNpYXMgPSBkYXRhUHJvZHVjdG9zLm1hcCgobm90aWNpYSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChub3RpY2lhLmlkID09PSB2YWx1ZXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlbl8gPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZUNlcnRpZmljYWRvWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlbl8uaW1hZ2VCYXNlNjQgPSBmaWxlQ2VydGlmaWNhZG9bMF1bMF0uYmFzZTY0O1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZW5fLmltYWdlRXh0ZW5zaW9uID0gZmlsZUNlcnRpZmljYWRvWzBdWzBdLmV4dGVuc2lvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5ub3RpY2lhLFxyXG4gICAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgICAuLi5pbWFnZW5fLFxyXG4gICAgICAgICAgICAgICAgICB0aXR1bG86IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgbGVuZ3VhamU6IHBheWxvYWQubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbm90aWNpYTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhUHJvZHVjdG9zKHVwZGF0ZU5vdGljaWFzKTtcclxuICAgICAgICAgICAgc2V0RmlsZUNlcnRpZmljYWRvKFtdKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHNldFNwaW5Nb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYShcImVycm9yXCIpO1xyXG4gICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvY2Vzb0FjdHVhbCA9PT0gXCJBR1JFR0FSXCIpIHtcclxuICAgICAgc2V0U3Bpbk1vZGFsKHRydWUpO1xyXG4gICAgICBBcGlQcm9kdWN0b3MuaW5zZXJ0UHJvZHVjdG8ocGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGlnbyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgICAgICB1cGRhdGVOb3RpY2lhcyA9IFtcclxuICAgICAgICAgICAgICAuLi5kYXRhUHJvZHVjdG9zLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB0aXR1bG86IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgICAgICAgIGxlbmd1YWplOiBwYXlsb2FkLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBheWxvYWQuaW1hZ2VfYmFzZTY0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VFeHRlbnNpb246IHBheWxvYWQuaW1hZ2VfZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAga2V5OiB1dWlkLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHV1aWQsXHJcbiAgICAgICAgICAgICAgICBmZWNoYUNyZWFjaW9uOiBtb21lbnQoKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHNldERhdGFQcm9kdWN0b3ModXBkYXRlTm90aWNpYXMpO1xyXG4gICAgICAgICAgICBzZXRGaWxlQ2VydGlmaWNhZG8oW10pO1xyXG4gICAgICAgICAgICBoYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgc2V0U3Bpbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZpY2EoXCJlcnJvclwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIG5vdGlmaWNhKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICBzZXRTcGluTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RWRpdFR3b1RvbmVcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgcHJvY2Vzb0FjdHVhbCA9PT0gXCJBQ1RVQUxJWkFSXCIgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuPkFjdHVhbGl6YXIgcHJvZHVjdG8gZGUge2VtcHJlc2FOb21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHNwYW4+QWdyZWdhciBudWV2byBwcm9kdWN0byBwYXJhIHtlbXByZXNhTm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgLy8gb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgY2VudGVyZWRcclxuICAgICAgPlxyXG4gICAgICAgIDxTcGluIHNwaW5uaW5nPXtzcGluTW9kYWx9IGRlbGF5PXs1MDB9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICB7Li4ubGF5b3V0fVxyXG4gICAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBlbXByZXNhTGVuZ3VhamUsXHJcbiAgICAgICAgICAgICAgICBlbXByZXNhX2lkOiBlbXByZXNhSWQsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImlkXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiZW1wcmVzYV9pZFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsoNDAsIDQwKX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5MZW5ndWFqZTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJJbmdyZXNlIGVsIGxlbmd1YWplXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiIGFsbG93Q2xlYXIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVzXCI+RXNwYcOxb2w8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImVuXCI+SW5nbMOpczwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PHN0cm9uZz5Ob21icmU8L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgbm9tYnJlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWluOiAxMCwgbWVzc2FnZTogXCJNw61uaW1vIDEwIGNhcmFjdGVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPlJlc3VtZW48L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgcmVzdW1lblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMTAwLCBtZXNzYWdlOiBcIk3DrW5pbW8gMTAwIGNhcmFjdGVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbWF4TGVuZ3RoPXs1MDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8c3Ryb25nPkltYWdlbmVzPC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJmaWxlTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tRXZlbnQ9e25vcm1GaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbcOhZ2VuZXMganBnIG8gcG5nIGRlIDxzdHJvbmc+MjAwIHggMjAwIHB4IDwvc3Ryb25nPiAobm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXJpb3IgYSAyMDAgS0IpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBpbWFnZVNyYyAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBZGp1bnRlIGxhcyBpbWFnZW5lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxVcGxvYWQgbmFtZT1cImxvZ29cIiBhY3Rpb249XCIvdXBsb2FkLmRvXCIgbGlzdFR5cGU9XCJwaWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgcGFyYSBhZGp1bnRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1VwbG9hZD4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlQ2VydGlmaWNhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dVcGxvYWRMaXN0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17KGZpbGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJlZm9yZVVwbG9hZENlcnRpZmljYWRvKGZpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17aGFuZGxlUmVtb3ZlRmlsZUNsaWNrQ2VydGlmaWNhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTGlzdD17ZmlsZUNlcnRpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEZpbGVMaXN0PXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwieHh4LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJkb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IFwiU2VydmVyIEVycm9yIDUwMFwiLCAvLyBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byBzaG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly93d3cuYmFpZHUuY29tL3h4eC5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ5eXkucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcImRvbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL3d3dy5iYWlkdS5jb20veXl5LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInp6ei5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogXCJTZXJ2ZXIgRXJyb3IgNTAwXCIsIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL3d3dy5iYWlkdS5jb20venp6LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHBhcmEgYWRqdW50YXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93U2l6ZU1lc3NhZ2VDZXJ0aWZpY2FkbyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZmlsaWFjaW9uLWRhdG9zLXBlcnNvbmFsZXNfX3NpemUtbWVzc2FnZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbCBhcmNoaXZvIG5vIGRlYmUgcGVzYXIgbcOhcyBkZSAyMDAgS0IuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZVNyYyAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9kZXI6IFwiMXB4IHNvbGlkICNEOUQ5RDlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1JQUFBRERDQVlBQUFEUXZjNlVBQUFCUldsRFExQkpRME1nVUhKdlptbHNaUUFBS0pGallHQVNTU3dveUdGaFlHREl6U3NwQ25KM1VvaUlqRkpnZjhMQXdTRENJTW9nd01DY21GeGM0QmdRNEFOVXdnQ2pVY0czYXd5TUlQcXlMc2lzN1BQT3EzUWRERmN2alYzak9EMWJvUVZUUFFyZ1Nra3RUZ2JTZjRBNExibWdxSVNCZ1RFRnlGWXVMeWtBc1R1QWJKRWlvS09BN0RrZ2RqcUV2UUhFVG9Ld2o0RFZoQVE1QTlrM2dHeUI1SXhFb0JtTUw0QnNuU1FrOFhRa050UmVFT0J4Y2ZYeFVRZzFNamMwZHlIZ1hOSkJTV3BGQ1loMnppK29MTXBNenloUmNBU0dVcXFDWjE2eW5vNkNrWUdSQVFNREtNd2hxai9mQUljbG94Z0hRcXhBaklIQkV1Z3c1c1VJc1NRcEJvYnRRUGRMY2lMRVZKWXpNUEJITURCc2F5aElMRXFFTzREeEcwdHhtckVSaE0yOW5ZR0JkZHIvLzUvREdSallOUmtZL2w3Ly8vLzM5di8vL3k0RG1uK0xnZUhBTndEcmtsMUF1TytwbWdBQUFEaGxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQXFBQ0FBUUFBQUFCQUFBQXdxQURBQVFBQUFBQkFBQUF3d0FBQUFEOWIvSG5BQUFIbGtsRVFWUjRBZTNkUDNQVFdCU0djYkd6TTZHQ0txbElCUlYwZEhSSkZhclEwZVVUOExINEJuUlUwTkhSMFVFRlZkSWxGUlY3VHpSa3NvbVBZOHV5a1RrL3pld1FmS3cvOXpudjR5dkp5bkx2NHVMaVYyZEJvRGlCZjRxUDMvQVJ1Q1JBQkVGQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnMEFqOGkwSk80T3pzclB2NjlXditoaTJxUEhyMHFOdmYzOStpSTk3c29SSWg0ZjN6NTgvdTdkdTNTWFg3WHQ3WjJlbmV2SG16ZlFlK29TTjJhcFNBUGowOVRTcmIrWEtJL2YzNzkrMDgrQTBjTlJFMkFOa3VwaytBQ05QdmtTUGNBQUVpYkFDeVhVeWZBQkdtM3lOSHVBRUNSTmdBWkx1WVBnRWlyS2xIdTd1N1hkeXl0R3dIQWQ4ampOeW5nNE9EN3ZuejUxZGJQVDgvN3o1OCtOQjkrL2J0NmpVL1RJK0FHV0hFbnJ4NDhlSi9Fc1NtSHp4NDBMMTgrZkx5enhGM1pWTWpFeURDaUVEak1ZWlpTNXdpUFhueVpGYkpheE1oUUlRUkd6SHZXUjdYQ3lPQ1hzT21pREFpMUhtUE1NUWpEcGJwRWlEQ2lMMzU4ZU5IdXJXLzVTbldkSUJiWGlEQ2lBMzgvUG56cmNlMll5WjQvLzU5RjNlUExOTWw0UGJwaUwySjBMOTc5Kzd5RHRIRGh3OHZ0enp2ZEduRVhkdlVpZ1NJc0NMQVdhdkhwLytxTTBCY1hNZC9xMjVuMXZGNTdUWUJwMGEzbVV6aWxlUGo0KzdrNUtTTGI2Z3Q2eWRBaFBVelhub1BSMGRIbDc5V0dUTkNmQm5uMXV2U0NKZGVnUWhMSTF2dkNrK2ZQdTJlUFh0MnRaT1lFVjYvZm4zMWR6K3Nod0FSMXNQMWNxdkxudGJFTjlNeEE5eGNZanN4UzFqV1I0QUlhMkliengwdGM0NGZZWC8xNmxWNk5ERkxYSCtZTDMyandpQUNSQmlFYmY1S2NYb1RJc1FTcHpYeDROMjhKYTRCUW9LN3JnWGl5ZGJIangvUDI1VGFRQUpFR0FndVd5MCsyUThQRDYvS2k0UjhFVmwrYnpCT25aWTk1ZnE5cmo5ekFrVEkyU3hkaWRCSHFHOStza2R3NDNib3JDWE8vWmNKZHJhUFdkdjIydUlFaUxBNHE3bnZ2Q3VnOFdUcXpRdmVPSDI2Zm9kbzdnNnVGZS9hMTdXMytuRkJBa1JZRU5SZGIxdmtrejFDSDljUHNWeS9qcmhyMjdQcU1ZdkVOWU5sSEFJZXNSaUJZd1J5MFYrOGlYUDgrL2Z2WDExTXI3TDdFQ3VlYi9yNDhlTXFtN0Z1STJCR1dERUc4Y20rN0czTkVPZm1kY1RRdzRoOS81NWxobTdEZWtSWUtRUFpGMkFyYlhUQXl1NGtEWUIyWXhVendnMGdpLzQxenRIbmZRRzI2SGJHZWwvY3JWcm03dE5ZKy8xYnRrT0VBWjJNMDVyNEZCN3I5R2JBSWR4YVpZckhkT3NnSi93Q0VRWTBKNzRUbU9LbmJ4eFQ5bjNGZ0dHV1dzVmRvd0h0anQ5Tm52Zjd5UU0yYVpVL1RJQUlBeHJ3NmRPbkFXdFpaY29FbkJwTnVUdU9iV01FaUxBeDFIWTBaUUpFbUhKM0hOdkdDQkJoWTZqdGFNb0VpSkIwWjI5dkw2bHM1OHZ4UGNPOC96ZnJkbzVxdktPK2QzRng4V3U4emYxZFc0cC9jUHpMbHkvZHR2OVRzL0ViY3ZHQUhoSHlmQkloWjZOU2lJQlRvMExOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUMvd0dnS0tDNFlNQTRUQUFBQUFCSlJVNUVya0pnZ2c9PVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICB7LyogPENvbCBsZz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxzdHJvbmc+wr9EZXNlYSB2aXN1YWxpemFjacOzbiBlbiBlbCBIb21lPzwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsaXphY2lvbkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkluZ3Jlc2UgdmlzdWFsaXphY2nDs24gZW4gZWwgSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGVjY2lvbmVcIiBhbGxvd0NsZWFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJTXCI+U2k8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIk5cIj5ObzwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hcmNhclByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wr9EZXNlYSBtYXJjYXIgY29tbyBwcmluY2lwYWw/PC9zdHJvbmc+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2kgc2VsZWNjaW9uYSAnU2knIHNlIGFncmVnYXLDoSBjb21vIG5vdGljaWFzIHByaW5jaXBhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuIGVsIGhvbWUgKGVsIGN1YWRybyBncmFuZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlNlbGVjY2lvbmUgc2kgbyBub1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiU1wiPlNpPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIk5cIj5ObzwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkl0ZW0gbmFtZT1cIm1hcmNhclByaW5jaXBhbFwiIGhpZGRlbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsLXJlcXVpcmVkXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkNvbnRlbmlkbzo8L3N0cm9uZz4gJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtjb250ZW5pZG9VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17eyBzZXRDb250ZW5pZG9VcGRhdGUgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH0+Vm9sdmVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9jZXNvQWN0dWFsID09PSBcIkFDVFVBTElaQVJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFjdHVhbGl6YXIgcHJvZHVjdG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFncmVnYXIgcHJvZHVjdG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ0bkFjdHVhbGl6YXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=