import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import {
  Button,
  Modal,
  Spin,
  Form,
  Input,
  Row,
  Col,
  Select,
  Upload,
  Image,
} from "antd";
import { UploadOutlined, EditTwoTone } from "@ant-design/icons";
import dynamic from "next/dynamic";
import ApiProductos from "../services";
import notifica from "../../../../../utils/notifica";

const Editor = dynamic(
  () => {
    return import("../../Editor");
  },
  { ssr: false }
);

const BtnActualizar = (props) => {
  const {
    empresaId,
    empresaNombre,
    empresaLenguaje,
    dataProductos,
    setDataProductos,
    idUpdate,
  } = props;

  const [form] = Form.useForm();

  const [procesoActual, setProcesoActual] = useState("ACTUALIZAR");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [spinModal, setSpinModal] = useState(false);
  const [fileCertificado, setFileCertificado] = useState([]);
  const [showSizeMessageCertificado, setShowSizeMessageCertificado] =
    useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [contenidoUpdate, setContenidoUpdate] = useState("");

  useEffect(() => {
    // form.resetFields();
    // setContenidoUpdate("");
    // setImageSrc("");
    // setIsModalVisible(true);

    const producto = dataProductos.find((producto) => producto.id === idUpdate);
    form.setFieldsValue({
      id: producto.id,
      language: producto.lenguaje,
      name: producto.titulo,
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

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleBeforeUploadCertificado = (file) => {
    // 5 MB = 1024 * 5 = 5120
    if (file.size / 1000 > 256) {
      setShowSizeMessageCertificado(true);
      return false;
    }
    setShowSizeMessageCertificado(false);

    if (fileCertificado.findIndex((e) => e.name === file.name) >= 0) {
      return false;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const rgxBase64 = RegExp(
        /data:(application|image)\/(jpeg|jpg|png*);base64,([^"]*)/gim
      );
      const rgx = rgxBase64.exec(reader.result);

      if (rgx !== null) {
        setFileCertificado([
          [
            {
              ...file,
              name: file.name,
              nombreArchivo: file.name,
              extension: rgx[2],
              base64: rgx[3],
              bytes: null,
            },
          ],
        ]);
      }
    };
    return false;
  };
  const handleRemoveFileClickCertificado = () => {
    setFileCertificado([]);
  };

  const normFile = (e) => {
    let superaLimite = false;
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
    }
    // if (e.fileList.length > 1) {
    //   e.fileList.shift();
    // }
    // if (superaLimite) {
    //   e.fileList = [];
    // }

    return e && e.fileList;
  };

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const onFinish = (values) => {
    const payload = {
      ...values,
      content_html: contenidoUpdate,
      image_extension: values.imagen ? "" : null,
      image_base64: values.imagen ? JSON.stringify(values.imagen) : null,
      type: "premios",
    };

    delete payload.imagen;

    let updateNoticias = dataProductos;

    if (procesoActual === "ACTUALIZAR") {
      setSpinModal(true);
      ApiProductos.updateProducto(payload)
        .then((response) => {
          if (response.data.codigo === "1") {
            updateNoticias = dataProductos.map((noticia) => {
              if (noticia.id === values.id) {
                const imagen_ = {};

                // if (fileCertificado[0]) {
                //   imagen_.imageBase64 = fileCertificado[0][0].base64;
                //   imagen_.imageExtension = fileCertificado[0][0].extension;
                // }
                // ya esto lo tengo arriba
                // imageBase64: producto.image_base64,

                return {
                  ...noticia,
                  ...payload,
                  ...imagen_,
                  titulo: payload.name,
                  lenguaje: payload.language,
                  contenido: payload.content_html,
                };
              }
              return noticia;
            });

            setDataProductos(updateNoticias);
            setFileCertificado([]);
            handleCancel();
            setSpinModal(false);
            notifica("success");
          } else {
            notifica("error");
          }
        })
        .catch((error) => {
          notifica("error");
          setSpinModal(false);
        });
    }

    if (procesoActual === "AGREGAR") {
      setSpinModal(true);
      ApiProductos.insertProducto(payload)
        .then((response) => {
          if (response.data.codigo === "1") {
            const uuid = uuidv4();
            updateNoticias = [
              ...dataProductos,
              {
                ...payload,
                titulo: payload.name,
                lenguaje: payload.language,
                imageBase64: payload.image_base64,
                imageExtension: payload.image_extension,
                key: uuid,
                id: uuid,
                fechaCreacion: moment().format("DD-MM-YYYY"),
              },
            ];
            setDataProductos(updateNoticias);
            setFileCertificado([]);
            handleCancel();
            setSpinModal(false);
            notifica("success");
          } else {
            notifica("error");
          }
        })
        .catch((error) => {
          notifica("error");
          setSpinModal(false);
        });
    }
  };

  return (
    <>
      <EditTwoTone
        onClick={() => {
          setIsModalVisible(true);
        }}
      />

      <Modal
        title={
          procesoActual === "ACTUALIZAR" ? (
            <span>Actualizar premio de {empresaNombre}</span>
          ) : (
            <span>Agregar nuevo premio para {empresaNombre}</span>
          )
        }
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        footer={false}
        width={1000}
        centered
      >
        <Spin spinning={spinModal} delay={500}>
          <div>
            <Form
              {...layout}
              onFinish={onFinish}
              form={form}
              initialValues={{
                language: empresaLenguaje,
                empresa_id: empresaId,
              }}
            >
              <Form.Item name="id" hidden={true}>
                <Input type="text" />
              </Form.Item>
              <Form.Item name="empresa_id" hidden={true}>
                <Input type="text" />
              </Form.Item>
              <Row gutter={(40, 40)}>
                <Col lg={24}>
                  <Form.Item
                    label={<strong>Lenguaje</strong>}
                    name="language"
                    rules={[{ required: true, message: "Ingrese el lenguaje" }]}
                  >
                    <Select placeholder="Seleccione" allowClear disabled>
                      <Select.Option value="es">Espa??ol</Select.Option>
                      <Select.Option value="en">Ingl??s</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col lg={24}>
                  <Form.Item
                    label={<strong>Nombre</strong>}
                    name="name"
                    rules={[
                      { required: true, message: "Ingrese el nombre" },
                      { min: 10, message: "M??nimo 10 caracteres" },
                    ]}
                  >
                    <Input maxLength={100} />
                  </Form.Item>
                </Col>

                {/* <Col lg={24}>
                  <Form.Item
                    label={<strong>Resumen</strong>}
                    name="summary"
                    rules={[
                      { required: true, message: "Ingrese el resumen" },
                      { min: 100, message: "M??nimo 100 caracteres" },
                    ]}
                  >
                    <Input maxLength={500} />
                  </Form.Item>
                </Col>
 */}
                <Col lg={24}>
                  <Form.Item
                    label={<strong>Imagenes</strong>}
                    name="imagen"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra={
                      <span>
                        Im??genes jpg o png de <strong>200 x 200 px </strong> (no
                        superior a 200 KB)
                      </span>
                    }
                    // rules={[
                    //   {
                    //     required: imageSrc !== "" ? false : true,
                    //     message: "Adjunte las imagenes",
                    //   },
                    // ]}
                  >
                    {/* <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>
                      Click para adjuntar
                    </Button>
                  </Upload> */}

                    <Upload
                      name="fileCertificado"
                      accept=".jpg, .jpeg, .png"
                      listType="picture"
                      // showUploadList={false}
                      beforeUpload={(file) =>
                        handleBeforeUploadCertificado(file)
                      }
                      onRemove={handleRemoveFileClickCertificado}
                      // fileList={fileCertificado}
                      defaultFileList={fileCertificado}
                      // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"

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
                    >
                      <Button icon={<UploadOutlined />}>
                        Click para adjuntar
                      </Button>

                      {showSizeMessageCertificado && (
                        <div
                          className="afiliacion-datos-personales__size-message "
                          style={{ color: "red" }}
                        >
                          El archivo no debe pesar m??s de 200 KB.
                        </div>
                      )}
                    </Upload>
                  </Form.Item>
                  {imageSrc !== "" && (
                    <div
                      style={{
                        boder: "1px solid #D9D9D9",
                        padding: "0.5rem",
                      }}
                    >
                      <Image
                        width={50}
                        height={false}
                        src={imageSrc}
                        fallback="data:image/png;base64,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"
                      />
                    </div>
                  )}
                </Col>
                {/* <Col lg={24}>
                  <Form.Item
                    label={<strong>??Desea visualizaci??n en el Home?</strong>}
                    name="visualizacionHome"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese visualizaci??n en el Home",
                      },
                    ]}
                  >
                    <Select placeholder="Seleccione" allowClear>
                      <Select.Option value="S">Si</Select.Option>
                      <Select.Option value="N">No</Select.Option>
                    </Select>
                  </Form.Item>
                </Col> */}
                <Col lg={24}>
                  {/* <Form.Item
                    name="marcarPrincipal"
                    label={
                      <span>
                        <strong>??Desea marcar como principal?</strong> <br />
                        <small>
                          Si selecciona 'Si' se agregar?? como noticias principal
                          en el home (el cuadro grande)
                        </small>
                      </span>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Seleccione si o no",
                      },
                    ]}
                  >
                    <Radio.Group>
                      <Radio value="S">Si</Radio>
                      <Radio value="N">No</Radio>
                    </Radio.Group>
                  </Form.Item> */}

                  {/* <Form.Item name="marcarPrincipal" hidden={true}>
                    <Input type="text" />
                  </Form.Item> */}
                </Col>
                <Col lg={24}>
                  <span className="label-required"></span>
                  <strong>Contenido:</strong> &nbsp;&nbsp;
                </Col>
                <Col lg={24}>
                  <br />
                  <Editor
                    data={contenidoUpdate}
                    actions={{ setContenidoUpdate }}
                  />
                </Col>
                <Col lg={24} style={{ textAlign: "center" }}>
                  <br />
                  <br />
                  <Button onClick={handleCancel}>Volver</Button>
                  {"  "}
                  <Button type="primary" htmlType="submit">
                    {procesoActual === "ACTUALIZAR" ? (
                      <span>Actualizar premio</span>
                    ) : (
                      <span>Agregar premio</span>
                    )}
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Spin>
      </Modal>
    </>
  );
};

export default BtnActualizar;
