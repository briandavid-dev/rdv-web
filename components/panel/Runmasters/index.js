import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import css from "styled-jsx/css";
import {
  Row,
  Col,
  Form,
  Button,
  Input,
  Upload,
  Select,
  Modal,
  Table,
  Space,
  // Radio,
  Popconfirm,
  Image,
  Spin,
  Divider,
} from "antd";
const { Column } = Table;
import { UploadOutlined, DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import ApiRunmasters from "./services";
import notifica from "../../../utils/notifica";

import EditorImport from "./EditorImport";

const stylesCss = css.global`
  body {
    font-family: var(--bs-font-sans-serif);
    color: #62452d !important;
    background-color: #f0f2f5;
  }
`;

const Noticias = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contenidoUpdate, setContenidoUpdate] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dataSourceEs, setDataSourceEs] = useState();
  const [dataSourceEn, setDataSourceEn] = useState();
  const [imageSrc, setImageSrc] = useState("");
  const [procesoActual, setProcesoActual] = useState("AGREGAR");
  const [spinModal, setSpinModal] = useState(false);
  const [spinListado, setSpinListado] = useState(false);

  useEffect(() => {
    setSpinListado(true);

    ApiRunmasters.getAll("es")
      .then((response) => {
        const { codigo, results } = response.data;
        if (codigo === "1") {
          const newDataSource = results.map((noticia) => {
            return {
              key: noticia.id,
              id: noticia.id,
              title: noticia.title,
              fechaCreacion: noticia.created_at,
              // imagen: noticia.content_image,
              imageBase64: noticia.image_base64,
              imageExtension: noticia.image_extension,
              language: noticia.language,
              contenido: noticia.info,
            };
          });

          setDataSourceEs(newDataSource);
          setSpinListado(false);
        } else {
          notifica("error");
        }
      })
      .catch((error) => {
        notifica("error");
        setSpinListado(false);
      });

    ApiRunmasters.getAll("en")
      .then((response) => {
        const { codigo, results } = response.data;
        if (codigo === "1") {
          const newDataSource = results.map((noticia) => {
            return {
              key: noticia.id,
              id: noticia.id,
              title: noticia.title,
              fechaCreacion: noticia.created_at,
              // imagen: noticia.content_image,
              imageBase64: noticia.image_base64,
              imageExtension: noticia.image_extension,
              language: noticia.language,
              contenido: noticia.info,
            };
          });

          setDataSourceEn(newDataSource);
          setSpinListado(false);
        } else {
          notifica("error");
        }
      })
      .catch((error) => {
        notifica("error");
        setSpinListado(false);
      });
  }, []);

  const [fileCertificado, setFileCertificado] = useState([]);
  const [showSizeMessageCertificado, setShowSizeMessageCertificado] = useState(false);

  const handleBeforeUploadCertificado = (file) => {
    // 5 MB = 1024 * 5 = 5120
    if (file.size / 1000 > 512) {
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
      const rgxBase64 = RegExp(/data:(application|image)\/(jpeg|jpg|png*);base64,([^"]*)/gim);
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

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const onFinish = (values) => {
    const payload = {
      ...values,
      info: contenidoUpdate,
      imagen: fileCertificado,
      proceso: procesoActual === "ACTUALIZAR" ? "ACTUALIZAR" : "AGREGAR",
    };

    let updateNoticias = payload.language === "es" ? dataSourceEs : dataSourceEn;

    if (procesoActual === "ACTUALIZAR") {
      setSpinModal(true);

      ApiRunmasters.update(payload.id, payload)
        .then((response) => {
          if (response.data.codigo === "1") {
            if (payload.language === "es") {
              updateNoticias = dataSourceEs.map((noticia) => {
                if (noticia.id === values.id) {
                  const imagen_ = {};
                  if (payload.imagen[0]) {
                    imagen_.imageBase64 = payload.imagen[0][0].base64;
                    imagen_.imageExtension = payload.imagen[0][0].extension;
                  }

                  return {
                    ...noticia,
                    ...payload,
                    ...imagen_,
                    contenido: payload.info || "",
                  };
                }
                return noticia;
              });
              setDataSourceEs(updateNoticias);
            } else {
              updateNoticias = dataSourceEn.map((noticia) => {
                if (noticia.id === values.id) {
                  const imagen_ = {};
                  if (payload.imagen[0]) {
                    imagen_.imageBase64 = payload.imagen[0][0].base64;
                    imagen_.imageExtension = payload.imagen[0][0].extension;
                  }

                  return {
                    ...noticia,
                    ...payload,
                    ...imagen_,
                    contenido: payload.info || "",
                  };
                }
                return noticia;
              });
              setDataSourceEn(updateNoticias);
            }

            setFileCertificado([]);
            handleCancel();
            setSpinModal(false);
            notifica("success");
          } else {
            notifica("error");
            setSpinModal(false);
          }
        })
        .catch((error) => {
          notifica("error");
          setSpinModal(false);
        });
    }

    if (procesoActual === "AGREGAR") {
      setSpinModal(true);
      ApiRunmasters.post(payload)
        .then((response) => {
          if (response.data.codigo === "1") {
            const listData = payload.language === "es" ? dataSourceEs : dataSourceEn;

            const uuid = uuidv4();
            updateNoticias = [
              ...listData,
              {
                ...payload,
                imageBase64: payload.imagen[0][0].base64,
                imageExtension: payload.imagen[0][0].extension,
                key: uuid,
                id: response.data.results.insertId,
                fechaCreacion: moment().format("DD-MM-YYYY"),
                contenido: payload.info || "",
              },
            ];
            if (payload.language === "es") {
              setDataSourceEs(updateNoticias);
            } else {
              setDataSourceEn(updateNoticias);
            }

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

  const normFile = (e) => {
    let superaLimite = false;
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

  const handleAgregar = () => {
    setProcesoActual("AGREGAR");

    form.resetFields();
    setContenidoUpdate("");
    setImageSrc("");
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = (idUpdate, language) => {
    setProcesoActual("ACTUALIZAR");
    const noticiaUpdate =
      language === "es"
        ? dataSourceEs.find((noticia) => noticia.id === idUpdate)
        : dataSourceEn.find((noticia) => noticia.id === idUpdate);

    form.resetFields();

    form.setFieldsValue({
      id: noticiaUpdate.id,
      language: noticiaUpdate.language,
      title: noticiaUpdate.title,
    });

    setContenidoUpdate(noticiaUpdate.contenido);

    if (noticiaUpdate.imageBase64 !== "") {
      setImageSrc(`data:image/${noticiaUpdate.imageExtension};base64,${noticiaUpdate.imageBase64}`);
    } else {
      setImageSrc("");
    }

    setIsModalVisible(true);
  };

  const handleDelete = (id, language) => {
    setSpinListado(true);
    ApiRunmasters.delete(id)
      .then((response) => {
        if (response.data.codigo === "1") {
          if (language === "es") {
            setDataSourceEs(dataSourceEs.filter((noticia) => noticia.id !== id));
          }
          if (language === "en") {
            setDataSourceEn(dataSourceEn.filter((noticia) => noticia.id !== id));
          }
          notifica("success");
        } else {
          notifica("error");
        }
        setSpinListado(false);
      })
      .catch((error) => {
        notifica("error");
        setSpinListado(false);
      });
  };

  const showPopconfirm = () => {
    setVisible(true);
  };

  return (
    <div>
      <style jsx global>
        {stylesCss}
      </style>
      <Button type="primary" onClick={handleAgregar}>
        Agregar
      </Button>
      <br />
      <br />
      <br />
      <Divider orientation="left">Español</Divider>
      <Spin spinning={spinListado}>
        <Table dataSource={dataSourceEs} pagination={false}>
          {/* <Column title="id" dataIndex="id" key="id" /> */}
          <Column title="Nombre" dataIndex="title" key="title" />
          <Column title="Lenguaje" dataIndex="language" key="language" />
          <Column title="Fecha de Creación" dataIndex="fechaCreacion" key="fechaCreacion" />
          <Column
            title="Opciones"
            key="opciones"
            render={(text, record) => (
              <Space size="middle">
                <EditTwoTone
                  onClick={() => {
                    handleEdit(record.id, record.language);
                  }}
                />
                <Popconfirm
                  title="¿Seguro de eliminar este contenido？"
                  okText="Si"
                  cancelText="No"
                  onConfirm={() => {
                    handleDelete(record.id, record.language);
                  }}
                  okButtonProps={{ loading: confirmLoading }}
                >
                  <DeleteTwoTone onClick={showPopconfirm} />
                </Popconfirm>
              </Space>
            )}
          />
        </Table>
      </Spin>

      <br />
      <Divider orientation="left">English</Divider>

      <Spin spinning={spinListado}>
        <Table dataSource={dataSourceEn} pagination={false}>
          {/* <Column title="id" dataIndex="id" key="id" /> */}
          <Column title="Nombre" dataIndex="title" key="title" />
          <Column title="Lenguaje" dataIndex="language" key="language" />
          <Column title="Fecha de Creación" dataIndex="fechaCreacion" key="fechaCreacion" />
          <Column
            title="Opciones"
            key="opciones"
            render={(text, record) => (
              <Space size="middle">
                <EditTwoTone
                  onClick={() => {
                    handleEdit(record.id, record.language);
                  }}
                />
                <Popconfirm
                  title="¿Seguro de eliminar este contenido？"
                  okText="Si"
                  cancelText="No"
                  onConfirm={() => {
                    handleDelete(record.id, record.language);
                  }}
                  okButtonProps={{ loading: confirmLoading }}
                >
                  <DeleteTwoTone onClick={showPopconfirm} />
                </Popconfirm>
              </Space>
            )}
          />
        </Table>
      </Spin>

      <Modal
        title={procesoActual === "ACTUALIZAR" ? <span>Actualizar Maestro</span> : <span>Agregar Maestro</span>}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={1000}
        centered
      >
        <Spin spinning={spinModal} delay={500}>
          <div>
            <Form {...layout} onFinish={onFinish} form={form}>
              <Form.Item name="id" hidden={true}>
                <Input type="text" />
              </Form.Item>
              <Row gutter={(40, 40)}>
                <Col lg={24}>
                  <Form.Item
                    label={<strong>Lenguaje</strong>}
                    name="language"
                    rules={[{ required: true, message: "Ingrese el lenguaje" }]}
                  >
                    <Select placeholder="Seleccione" allowClear>
                      <Select.Option value="es">Español</Select.Option>
                      <Select.Option value="en">Inglés</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col lg={24}>
                  <Form.Item
                    label={<strong>Title</strong>}
                    name="title"
                    rules={[
                      { required: true, message: "Ingrese el titulo" },
                      { min: 10, message: "Mínimo 10 caracteres" },
                    ]}
                  >
                    <Input maxLength={100} />
                  </Form.Item>
                </Col>

                <Col lg={24}>
                  <Form.Item
                    label={<strong>Imagen</strong>}
                    name="image_base64"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra={
                      <span>
                        Imágenes jpg o png de <strong>500px x 600px</strong> (no superior a 500 KB)
                      </span>
                    }
                    rules={[
                      {
                        required: imageSrc !== "" ? false : true,
                        message: "Adjunte un imagen",
                      },
                    ]}
                  >
                    <Upload
                      name="fileCertificado"
                      accept=".jpg, .jpeg, .png"
                      listType="picture"
                      // showUploadList={false}
                      beforeUpload={(file) => handleBeforeUploadCertificado(file)}
                      onRemove={handleRemoveFileClickCertificado}
                      fileList={fileCertificado}
                    >
                      <Button icon={<UploadOutlined />}>Click para adjuntar</Button>

                      {showSizeMessageCertificado && (
                        <div className="afiliacion-datos-personales__size-message " style={{ color: "red" }}>
                          El archivo no debe pesar más de 500 KB.
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
                        width={100}
                        height={100}
                        src={imageSrc}
                        fallback="data:image/png;base64,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"
                      />
                    </div>
                  )}
                </Col>

                <Col lg={24}>
                  <span className="label-required"></span>
                  <strong>Contenido:</strong> &nbsp;&nbsp;
                </Col>
                <Col lg={24}>
                  <br />
                  <EditorImport contenidoUpdate={contenidoUpdate} setContenidoUpdate={setContenidoUpdate} />
                </Col>
                <Col lg={24} style={{ textAlign: "center" }}>
                  <br />
                  <br />
                  <Button onClick={handleCancel}>Volver</Button>
                  {"  "}
                  <Button type="primary" htmlType="submit">
                    {procesoActual === "ACTUALIZAR" ? <span>Actualizar</span> : <span>Agregar</span>}
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Spin>
      </Modal>
    </div>
  );
};

export default Noticias;
