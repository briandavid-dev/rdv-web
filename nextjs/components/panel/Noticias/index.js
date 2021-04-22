import React, { useState, useEffect } from "react";
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
  Radio,
  Popconfirm,
} from "antd";
const { Column } = Table;
import {
  UploadOutlined,
  InboxOutlined,
  DeleteTwoTone,
  EditTwoTone,
} from "@ant-design/icons";
import dynamic from "next/dynamic";
// import Scroll from './Prueba2';

const Editor = dynamic(
  () => {
    return import("./Editor");
  },
  { ssr: false }
);

const stylesCss = css.global`
  body {
    font-family: var(--bs-font-sans-serif);
    color: #62452d !important;
  }
`;

const Noticias = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contenido, setContenido] = useState("");
  const [contenidoUpdate, setContenidoUpdate] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState();
  const [idUpdate, setIdUpdate] = useState(null);

  const getInitialValues = () => {
    let retVal = null;
    if (idUpdate) {
      console.log(
        `object`,
        dataSource.find((noticia) => (noticia.id = idUpdate))
      );
      retVal = {
        lenguaje: "es",
      };
    }
    return retVal;
  };

  useEffect(() => {
    setDataSource([
      {
        key: "1",
        id: "1",
        titulo: "Título 2",
        fechaCreacion: moment().format("DD-MM-YYYY"),
        imagen: "",
        lenguaje: "es",
        visualizacionHome: "circulo",
        marcarPrincipal: "S",
        contenido: "<h3>h3</h3><p>h3 bubu<p>",
      },
      {
        key: "2",
        id: "2",
        titulo: "Título 3",
        fechaCreacion: moment().format("DD-MM-YYYY"),
        imagen: "",
        lenguaje: "en",
        visualizacionHome: "cuadro",
        marcarPrincipal: "N",
        contenido: "<h1>h1</h1><p>hola h1<p>",
      },
    ]);
  }, []);

  const [fileCertificado, setFileCertificado] = useState([]);
  const [showSizeMessageCertificado, setShowSizeMessageCertificado] = useState(
    false
  );

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

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const onFinish = (values) => {
    const payload = {
      ...values,
      contenido,
      type: "noticias",
      imagen: fileCertificado,
    };
    console.log(payload);
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

  const showModal = () => {
    setIdUpdate(null);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = (idUpdate) => {
    const noticiaUpdate = dataSource.find((noticia) => noticia.id === idUpdate);
    console.log(`noticiaUpdate`, noticiaUpdate);
    form.setFieldsValue({
      lenguaje: noticiaUpdate.lenguaje,
      titulo: noticiaUpdate.titulo,
      marcarPrincipal: noticiaUpdate.marcarPrincipal,
      visualizacionHome: noticiaUpdate.visualizacionHome,
    });
    setContenidoUpdate(noticiaUpdate.contenido);
    setIsModalVisible(true);
  };
  console.log(`ontenidoUpdate`, contenidoUpdate);
  const handleDelete = (id) => {
    console.log(id);
    // setConfirmLoading(true);
    // setTimeout(() => {
    // setVisible(false);

    // aqui el servicio para eliminar,, meter un loader,,? o dejar el mismo para que no sea tam invasivo,, o un mensaje chico
    // que no ofusque toda la pantalla

    setDataSource(dataSource.filter((noticia) => noticia.id !== id));

    //   setConfirmLoading(false);
    // }, 2000);
  };

  const showPopconfirm = () => {
    setVisible(true);
  };

  return (
    <div>
      <style jsx global>
        {stylesCss}
      </style>
      <Button type="primary" onClick={showModal}>
        Agregar
      </Button>
      <br />
      <br />
      <Table dataSource={dataSource} pagination={false}>
        <Column title="id" dataIndex="id" key="id" />
        <Column title="Titulo" dataIndex="titulo" key="titulo" />
        <Column title="Lenguaje" dataIndex="lenguaje" key="lenguaje" />
        <Column
          title="Fecha de Creación"
          dataIndex="fechaCreacion"
          key="fechaCreacion"
        />
        <Column
          title="Opciones"
          key="opciones"
          render={(text, record) => (
            <Space size="middle">
              <EditTwoTone
                onClick={() => {
                  console.log(`record.id`, record.id);
                  handleEdit(record.id);
                }}
              />
              <Popconfirm
                title="¿Seguro de eliminar este contenido？"
                okText="Si"
                cancelText="No"
                onConfirm={() => {
                  handleDelete(record.id);
                }}
                okButtonProps={{ loading: confirmLoading }}
              >
                <DeleteTwoTone onClick={showPopconfirm} />
              </Popconfirm>
            </Space>
          )}
        />
      </Table>

      <Modal
        title="Agregar Nueva Noticia"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={1000}
        centered
      >
        <div>
          <Form
            {...layout}
            onFinish={onFinish}
            // initialValues={getInitialValues(idUpdate)}
            form={form}
          >
            <Row gutter={(40, 40)}>
              <Col lg={24}>
                <Form.Item
                  label={<strong>Lenguaje</strong>}
                  name="lenguaje"
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
                  label={<strong>Titulo</strong>}
                  name="titulo"
                  rules={[
                    { required: true, message: "Ingrese el titulo" },
                    { min: 10, message: "Mínimo 10 caracteres" },
                  ]}
                >
                  <Input maxLength={50} />
                </Form.Item>
              </Col>

              <Col lg={24}>
                <Form.Item
                  label={<strong>Imagen</strong>}
                  name="imagen"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  extra={
                    <span>
                      Imágenes jpg o png de <strong>800px x 800px</strong> (no
                      superior a 500 KB)
                    </span>
                  }
                  rules={[{ required: true, message: "Adjunte un imagen" }]}
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
                    beforeUpload={(file) => handleBeforeUploadCertificado(file)}
                    onRemove={handleRemoveFileClickCertificado}
                    fileList={fileCertificado}
                  >
                    <Button icon={<UploadOutlined />}>
                      Click para adjuntar
                    </Button>
                    {showSizeMessageCertificado && (
                      <div
                        className="afiliacion-datos-personales__size-message "
                        style={{ color: "red" }}
                      >
                        El archivo no debe pesar más de 500 KB.
                      </div>
                    )}
                  </Upload>
                </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                  label={<strong>Tipo de visualización en el Home</strong>}
                  name="visualizacionHome"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el Tipo de visualización en el Home",
                    },
                  ]}
                >
                  <Select placeholder="Seleccione" allowClear>
                    <Select.Option value="circulo">Circulo</Select.Option>
                    <Select.Option value="cuadro">Cuadro</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                  name="marcarPrincipal"
                  label={
                    <span>
                      <strong>¿Desea marcar como principal?</strong> <br />
                      <small>
                        Si selecciona 'Si' se agregará como noticias principal
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
                </Form.Item>
              </Col>
              <Col lg={24}>
                <strong>Contenido:</strong> &nbsp;&nbsp;
              </Col>
              <Col lg={24}>
                <br />
                <Editor data={contenidoUpdate} actions={{ setContenido }} />
              </Col>
              <Col lg={24} style={{ textAlign: "center" }}>
                <br />
                <br />
                <Button>Volver</Button>
                {"  "}
                <Button type="primary" htmlType="submit">
                  Aceptar
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Noticias;
