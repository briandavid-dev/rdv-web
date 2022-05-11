import React from "react";
import { Form, Input, Row, Col, Divider, Button, Upload, Image } from "antd";
import ApiHome from "../../../services/home";
import notifica from "../../../utils/notifica";
import { UploadOutlined } from "@ant-design/icons";
import { getBase64 } from "../../../utils/getBase64";
const { v4: uuidv4 } = require("uuid");

const FormHome = (props) => {
  const [form] = Form.useForm();
  const { lang, dataForm, setDataAllHome, setLoading } = props;

  const onFinish = async (values) => {
    let elronFile = null;
    if (values.elronFile && values.elronFile.file.originFileObj) {
      let base64 = await getBase64(values.elronFile.file.originFileObj);
      base64 = base64.split(";base64,").pop();
      elronFile = {
        base64,
        extension: values.elronFile.file.type.replace("image/", ""),
      };
    }

    let procesoelaboracionFile = null;
    if (
      values.procesoelaboracionFile &&
      values.procesoelaboracionFile.file.originFileObj
    ) {
      let base64 = await getBase64(
        values.procesoelaboracionFile.file.originFileObj
      );
      base64 = base64.split(";base64,").pop();
      procesoelaboracionFile = {
        base64,
        extension: values.procesoelaboracionFile.file.type.replace(
          "image/",
          ""
        ),
      };
    }

    const payload = {
      ...values,
      elronFile,
      procesoelaboracionFile,
      lang,
    };

    delete payload.videoHome;

    setLoading(true);
    ApiHome.put(payload)
      .then((response) => {
        const { codigo, data } = response.data;
        if (codigo === "1") {
          setDataAllHome(data);
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
    // notifica("error", errorInfo);
  };

  const uploadLogoEmpresa = async () => {
    const fileLogoEmpresa = form.getFieldValue("fileLogoEmpresa");
    let logoEmpresaFile = null;

    if (fileLogoEmpresa && fileLogoEmpresa.file.originFileObj) {
      let base64 = await getBase64(fileLogoEmpresa.file.originFileObj);
      base64 = base64.split(";base64,").pop();
      logoEmpresaFile = {
        base64,
        extension: fileLogoEmpresa.file.type.replace("image/", ""),
      };
    }

    const payload = {
      lang,
      logoEmpresaFile,
      imagenesAnteriores: dataForm.logosempresas.image,
    };

    setLoading(true);
    ApiHome.postLogoEmpresa(payload)
      .then((response) => {
        const { codigo, data } = response.data;
        if (codigo === "1") {
          setDataAllHome(data);
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

  const putLogosEmpresa = async (fileName) => {
    const filesNames = dataForm.logosempresas.image
      .split(",")
      .filter((fileName_) => fileName_ !== fileName);

    setLoading(true);
    ApiHome.putLogosEmpresa({ filesNames, lang })
      .then((response) => {
        const { codigo, data } = response.data;
        if (codigo === "1") {
          setDataAllHome(data);
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

  const updateVideoHome = async () => {
    const videoHome = form.getFieldValue("videoHome");
    let homeVideoFile = null;
    console.log("videoHome", videoHome);
    if (videoHome && videoHome.file.originFileObj) {
      let base64 = await getBase64(videoHome.file.originFileObj);
      base64 = base64.split(";base64,").pop();
      homeVideoFile = {
        base64,
        extension: videoHome.file.type.replace("video/", ""),
      };
    }

    const payload = {
      lang,
      homeVideoFile,
    };

    setLoading(true);
    ApiHome.postVideoHome(payload)
      .then((response) => {
        const { codigo, data } = response.data;
        if (codigo === "1") {
          setDataAllHome(data);
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
      form={form}
      name="FormAboutus"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
      initialValues={{
        bannerTitle: dataForm.banner.title,
        bannerInfo: dataForm.banner.info,
        elronTitle: dataForm.elron.title,
        elronInfo: dataForm.elron.info,
        procesoelaboracionTitle: dataForm.procesoelaboracion.title,
        procesoelaboracionInfo: dataForm.procesoelaboracion.info,
        logosempresasTitle: dataForm.logosempresas.title,
        footer1Info: dataForm.footer1.info,
        footer2Info: dataForm.footer2.info,
        rsFacebook: dataForm.rsFacebook.info,
        rsInstagram: dataForm.rsInstagram.info,
        rsYoutube: dataForm.rsYoutube.info,
      }}
    >
      <Row gutter={(40, 40)} justify="center">
        <Col span={12} />
        <Col span={12}>
          <Form.Item
            name="bannerTitle"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input style={{ textAlign: "center" }} />
          </Form.Item>
        </Col>
        <Col span={12} />
        <Col span={12}>
          <Form.Item
            name="bannerInfo"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input style={{ textAlign: "center" }} />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={(40, 40)} justify="center">
        <Col span={12}>
          <Form.Item
            name="elronTitle"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input style={{ textAlign: "center" }} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name={`elronFile`}
            extra="Máximo 500 KB. Solo Archivos .jpg, .jpeg, .png"
          >
            <Upload accept=".jpg, .jpeg, .png" maxCount={1} listType="picture">
              <Button icon={<UploadOutlined />}>Click para adjuntar</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Image
            width={150}
            height={100}
            src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/home/${dataForm.elron.image}`}
            fallback="data:image/png;base64,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"
          />
        </Col>
        <Col span={12}>
          <Form.Item
            name="elronInfo"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input.TextArea rows={3} style={{ textAlign: "right" }} />
          </Form.Item>
        </Col>
        <Col span={12} />
      </Row>
      <Row gutter={(40, 40)} justify="center">
        <Col span={6}>
          <Form.Item
            name={`procesoelaboracionFile`}
            extra="Máximo 500 KB. Solo Archivos .jpg, .jpeg, .png"
          >
            <Upload accept=".jpg, .jpeg, .png" maxCount={1} listType="picture">
              <Button icon={<UploadOutlined />}>Click para adjuntar</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Image
            width={150}
            height={100}
            src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/home/${dataForm.procesoelaboracion.image}`}
            fallback="data:image/png;base64,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"
          />
        </Col>
        <Col span={12}>
          <Form.Item
            name="procesoelaboracionTitle"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input style={{ textAlign: "center" }} />
          </Form.Item>
        </Col>
        <Col span={12} />
        <Col span={12}>
          <Form.Item
            name="procesoelaboracionInfo"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input.TextArea rows={3} style={{ textAlign: "left" }} />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={(40, 40)} justify="center">
        <Col span={12}>
          <Form.Item
            name="logosempresasTitle"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input style={{ textAlign: "center" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={(40, 40)} justify="center">
        <Col span={20} style={{ backgroundColor: "#452F21" }}>
          {dataForm.logosempresas.image !== "" &&
            dataForm.logosempresas.image.split(",").map((file) => (
              <div style={{ display: "inline-grid", padding: 5 }}>
                <Image
                  key={file}
                  style={{ padding: 5 }}
                  height={150}
                  src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/home/logo-empresa/${file}`}
                  fallback="data:image/png;base64,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"
                />
                <Button type="danger" onClick={() => putLogosEmpresa(file)}>
                  Eliminar
                </Button>
              </div>
            ))}
        </Col>
      </Row>
      <Row gutter={(40, 40)} justify="center" style={{ marginTop: "2rem" }}>
        <Col span={6}>
          <Form.Item
            name={`fileLogoEmpresa`}
            extra="Máximo 500 KB. Solo Archivos .jpg, .jpeg, .png"
          >
            <Upload accept=".jpg, .jpeg, .png" maxCount={1} listType="picture">
              <Button icon={<UploadOutlined />}>Click para adjuntar</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Button type="primary" loading={false} onClick={uploadLogoEmpresa}>
            Agregar logo de empresa
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row gutter={(40, 40)} justify="center" style={{ marginTop: "2rem" }}>
        <Col span={12}>
          <h2 style={{ color: "#452F21" }}>Video</h2>
          <br />
          <video
            style={{ width: "100%", maxWidth: "100%" }}
            controls
            src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/home/video/${dataForm.video.info}`}
          >
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
      <Row gutter={(40, 40)} justify="center" style={{ marginTop: "2rem" }}>
        <Col span={6}>
          <Form.Item name={`videoHome`} extra="Máximo 500 MB. Solo videos .mp4">
            <Upload accept=".mp4" maxCount={1} listType="picture">
              <Button icon={<UploadOutlined />}>Click para adjuntar</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Button type="primary" loading={false} onClick={updateVideoHome}>
            Actualizar video
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row gutter={(40, 40)} justify="center" style={{ marginTop: "2rem" }}>
        <Col span={12}>
          <h2 style={{ color: "#452F21" }}>Footer</h2>
          <br />
        </Col>
      </Row>
      <Row gutter={(40, 40)} justify="center">
        <Col span={12}>
          <Form.Item
            name="footer1Info"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input.TextArea rows={4} style={{ textAlign: "center" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={(40, 40)} justify="center">
        <Col span={12}>
          <Form.Item
            name="footer2Info"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input.TextArea rows={3} style={{ textAlign: "center" }} />
          </Form.Item>
        </Col>
      </Row>

      <Divider />
      <Row gutter={(40, 40)} justify="center" style={{ marginTop: "2rem" }}>
        <Col span={12}>
          <h2 style={{ color: "#452F21" }}>RRSS</h2>
        </Col>
      </Row>
      <Row gutter={(40, 40)} justify="center" style={{ marginTop: "1rem" }}>
        <Col span={12}>
          <Form.Item
            name="rsFacebook"
            label="Facebook"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={24} />
        <Col span={12}>
          <Form.Item
            name="rsInstagram"
            label="Instagram"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={24} />
        <Col span={12}>
          <Form.Item
            name="rsYoutube"
            label="YouTube"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Divider />

      <Button type="primary" htmlType="submit">
        Actualizar
      </Button>
    </Form>
  );
};

export default FormHome;
