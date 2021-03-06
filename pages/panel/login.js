import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Button, Input, Form, Row, Col, notification, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import ApiUser from "../../components/panel/User/services";
import { stylesCssPanel } from "../../styles/stylesCssPanel";

const login = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const notifica = (mensaje) => {
    notification["warning"]({
      message: "Hola",
      description: mensaje,
    });
  };

  const onFinish = (values) => {
    const payload = {
      email: values.email,
      password: values.clave,
    };

    setLoading(true);
    ApiUser.login(payload)
      .then((response) => {
        const { codigo, token, mensaje } = response.data;
        if (codigo === "1") {
          window.sessionStorage.setItem("token", token);
          router.push("/panel/noticias");
        }
        if (codigo === "0") {
          notifica(mensaje);
        }
        setLoading(false);
      })
      .catch((error) => {
        //
        setLoading(false);
      });
  };

  return (
    <>
      <style jsx global>
        {stylesCssPanel}
      </style>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap"
          rel="stylesheet"
        />

        <title>Login</title>
      </Head>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFF",
            maxWidth: "100%",
            width: "500px",
            // maxHeight: "100%",
            // height: "500px",
          }}
        >
          <Spin spinning={loading}>
            <Form form={form} style={{ marginTop: "2rem" }} {...formItemLayout} onFinish={onFinish}>
              <Row type="flex" justify="center">
                <Col lg={20}>
                  <Form.Item
                    label={<strong>Email</strong>}
                    name="email"
                    rules={[
                      { required: true, message: "Ingrese el email" },
                      { type: "email", message: "Ingrese un email valido" },
                    ]}
                    autoFocus
                  >
                    <Input autoFocus prefix={<UserOutlined className="site-form-item-icon" />} />
                  </Form.Item>
                  <Form.Item
                    label={<strong>Clave</strong>}
                    name="clave"
                    rules={[{ required: true, message: "Ingrese la clave" }]}
                  >
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" />
                  </Form.Item>
                </Col>
              </Row>
              <div style={{ textAlign: "center" }}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                  >
                    Iniciar Sesi??n
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default login;
