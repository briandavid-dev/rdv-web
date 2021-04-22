import React, { useState } from "react";
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
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState({});
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      id: "1",
      titulo: "Título 1",
      fechaCreacion: moment().format("DD-MM-YYYY"),
    },
    {
      key: "2",
      id: "2",
      titulo: "Título 2",
      fechaCreacion: moment().format("DD-MM-YYYY"),
    },
  ]);

  const [fileCertificado, setFileCertificado] = useState([]);
  const [showSizeMessageCertificado, setShowSizeMessageCertificado] = useState(
    false
  );

  const handleBeforeUploadCertificado = (file) => {
    // 5 MB = 1024 * 5 = 5120
    if (file.size / 1000 > 5120) {
      setShowSizeMessageCertificado(true);
      return false;
    }

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
          {
            ...file,
            name: file.name,
            nombreArchivo: file.name,
            extension: rgx[2],
            base64: rgx[3],
            bytes: null,
          },
        ]);
        /* setStateSeccionDocumentacion({
          ...stateSeccionDocumentacion,
          fileCertificado: [
            {
              ...file,
              name: file.name,
              nombreArchivo: file.name,
              extension: rgx[2],
              base64: rgx[3],
              bytes: null,
            },
          ],
          showSizeMessageCertificado: false,
        }); */
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
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  /* 
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ]; */

  const handleEdit = () => {
    console.log("edit");
  };
  const handleDelete = (e) => {
    console.log(e);
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
        <Column title="Titulo" dataIndex="titulo" key="titulo" />
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
              <EditTwoTone onClick={handleEdit} />
              <DeleteTwoTone
                onClick={() => {
                  handleDelete(record.age);
                }}
              />
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
          <Form {...layout} onFinish={onFinish}>
            <Row gutter={(40, 40)}>
              <Col lg={24}>
                <Form.Item
                  label={<strong>Lenguage</strong>}
                  name="lenguage"
                  rules={[{ required: true, message: "Ingrese el Lenguage" }]}
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
                    { min: 10, message: "Minimo 10 caracteres" },
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
                >
                  {/* <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>
                      Click para adjuntar
                    </Button>
                  </Upload> */}

                  <Upload
                    name="fileCertificado"
                    accept=".jpg, .jpeg, .png, .pdf"
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
                      <span className="afiliacion-datos-personales__size-message">
                        El archivo no debe pesar más de 500 KB.
                      </span>
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
                <Editor actions={{ setContenido }} />
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
