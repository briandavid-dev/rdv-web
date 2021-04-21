import React, { useState } from "react";
import { Row, Col, Form, Button, Input, Upload, Select, Modal } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const Noticias = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(true);

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  };

  const onFinish = (values) => {
    console.log(values);
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

  return (
    <div>
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
            <Row gutter={[40, 40]}>
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
                  rules={[{ required: true }]}
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
              <Col lg={24}>Contenido</Col>
              <Col lg={24} style={{ textAlign: "center" }}>
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
