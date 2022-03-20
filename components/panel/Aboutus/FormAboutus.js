import React from "react";
import { Form, Input, Row, Col, Divider, Button } from "antd";
import ApiAboutus from "./../../../services/aboutus";
import notifica from "../../../utils/notifica";

const FormAboutus = (props) => {
  const { lang, dataForm, setLoading } = props;

  const onFinish = (values) => {
    const payload = {
      ...values,
      lang,
    };

    setLoading(true);
    ApiAboutus.put(payload)
      .then((response) => {
        const { codigo, results } = response.data;
        if (codigo === "1") {
          console.log("response.data", response.data);
          notifica("success");
        } else {
          notifica("error", `service return code ${codigo}`);
        }
      })
      .catch((error) => {
        notifica("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  return (
    <Form
      {...layout}
      name="FormAboutus"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
      initialValues={{
        title1: dataForm.title1,
        text1: dataForm.text1,
        text2: dataForm.text2,
        title2: dataForm.title2,
        text3: dataForm.text3,
        text4: dataForm.text4,
        text5: dataForm.text5,
        text6: dataForm.text6,
        title3: dataForm.title3,
        text7: dataForm.text7,
        title4: dataForm.title4,
        text8: dataForm.text8,
        title5: dataForm.title5,
        text9: dataForm.text9,
      }}
    >
      <Row gutter={(40, 40)} justify="center">
        <Col span={15}>
          <Form.Item name="title1" rules={[{ required: true, message: "Requerido" }]}>
            <Input style={{ textAlign: "center" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="text1" rules={[{ required: true, message: "Requerido" }]}>
            <Input.TextArea rows={7} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="text2" rules={[{ required: true, message: "Requerido" }]}>
            <Input.TextArea rows={7} />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={(40, 40)}>
        <Col span={12} />
        <Col span={12}>
          <Form.Item name="title2" rules={[{ required: true, message: "Requerido" }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>Image</Col>
        <Col span={12}>
          <Form.Item name="text3" rules={[{ required: true, message: "Requerido" }]}>
            <Input.TextArea rows={7} />
          </Form.Item>
        </Col>
        <Col span={12} />
        <Col span={12}>
          <Form.Item name="text4" rules={[{ required: true, message: "Requerido" }]}>
            <Input.TextArea rows={7} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="text5" rules={[{ required: true, message: "Requerido" }]}>
            <Input.TextArea rows={7} />
          </Form.Item>
        </Col>
        <Col span={12}>Image</Col>
        <Col span={12}>
          <Form.Item name="text6" rules={[{ required: true, message: "Requerido" }]}>
            <Input.TextArea rows={7} />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={(40, 40)}>
        <Col span={12}>
          <Form.Item name="title3" rules={[{ required: true, message: "Requerido" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="text7" rules={[{ required: true, message: "Requerido" }]}>
            <Input.TextArea rows={7} />
          </Form.Item>

          <Form.Item name="title4" rules={[{ required: true, message: "Requerido" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="text8" rules={[{ required: true, message: "Requerido" }]}>
            <Input.TextArea rows={7} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="title5" rules={[{ required: true, message: "Requerido" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="text9" rules={[{ required: true, message: "Requerido" }]}>
            <Input.TextArea rows={15} />
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" htmlType="submit">
        Actualizar
      </Button>
    </Form>
  );
};

export default FormAboutus;
