import React, { useState } from "react";
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

const Noticias = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState({});

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  };

  const onFinish = (values) => {
    const payload = {
      ...values,
      contenido,
      type: "noticias",
      imagen,
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

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

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
  ];

  const handleEdit = () => {
    console.log("edit");
  };
  const handleDelete = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Agregar
      </Button>
      <br />
      <br />
      <Table dataSource={dataSource} pagination={false}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Age" dataIndex="age" key="age" />
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
            <Row>
              <Col lg={24}>
                <Form.Item
                  label="Titulo"
                  name="titulo"
                  rules={[{ required: true, message: "Ingrese el titulo" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                  label="Lenguage"
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
                  label="Imagen"
                  name="imagen"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  extra="800px x 800px"
                >
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>
                      Click para adjuntar
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
              <Col lg={5} style={{ textAlign: "right" }}>
                Contenido: &nbsp;&nbsp;
              </Col>
              <Col lg={19}>
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
