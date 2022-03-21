const { v4: uuidv4 } = require("uuid");
import { Form, Input, Row, Col, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ApiDoc from "../../../services/doc";
import notifica from "../../../utils/notifica";
import { getBase64 } from "../../../utils/getBase64";

const FormDoc = (props) => {
  const { lang, dataForm, setLoading, setDataForm } = props;

  const onFinish = async (valuesObj) => {
    const files = [];
    const listFiles = Object.keys(valuesObj).filter((key) => key.includes("File"));
    for (const nameFile of listFiles) {
      let fileText = nameFile.replace("File", "Text");
      let fileFile = nameFile;
      if (valuesObj[fileText] && valuesObj[fileFile]) {
        let base64 = await getBase64(valuesObj[fileFile].file.originFileObj);
        base64 = base64.split(";base64,").pop();
        files.push({
          text: valuesObj[fileText],
          extension: "pdf",
          base64,
        });
      }
    }

    const payload = {
      lang,
      regularizations: {
        title: valuesObj.titleRegularizaciones,
        files,
      },
    };

    setLoading(true);
    ApiDoc.put(payload)
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

  return (
    <Form
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      name="FormDoc"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={(40, 40)}>
        <Col span={12}>
          <Form.Item
            name="titleRegularizaciones"
            rules={[{ required: true, message: "Requerido" }]}
            initialValue={dataForm.regularizations.title}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      {dataForm.regularizations.files.map((file, key) => (
        <Row gutter={(40, 40)} key={key}>
          <Col span={12}>
            <Form.Item
              name={`file${key}Text`}
              rules={[{ required: true, message: "Requerido" }]}
              extra={
                <a href={`${process.env.NEXT_PUBLIC_URL_API_RDV}/doc/${file.fileName}`} target="_blank">
                  {file.text}
                </a>
              }
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name={`file${key}File`}
              extra="Máximo 5 MB. Solo Archivos PDF."
              rules={[{ required: true, message: "Requerido" }]}
            >
              <Upload accept="application/pdf" maxCount={1}>
                <Button icon={<UploadOutlined />}>Click para adjuntar</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Button
              type="danger"
              ghost
              onClick={() => {
                setDataForm((state) => {
                  return {
                    ...state,
                    [lang]: {
                      regularizations: {
                        files: state[lang].regularizations.files.filter((file_) => !file_.id.includes(file.id)),
                      },
                    },
                  };
                });
              }}
            >
              Eliminar
            </Button>
          </Col>
        </Row>
      ))}
      {dataForm.regularizations.files.length < 5 && (
        <Row gutter={(40, 40)} justify="end">
          <Col span={12}>
            <Button
              type="primary"
              ghost
              onClick={() => {
                setDataForm((state) => {
                  return {
                    ...state,
                    [lang]: {
                      regularizations: {
                        title: "Regularizaciones",
                        files: [...state[lang].regularizations.files, { id: uuidv4() }],
                      },
                    },
                  };
                });
              }}
            >
              Agregar otro PDF
            </Button>
          </Col>
        </Row>
      )}
      <Row gutter={(40, 40)} justify="end">
        <Col span={12}>
          <small>Máximo 5 archivos (hay {dataForm.regularizations.files.length})</small>
        </Col>
      </Row>
      <Button type="primary" htmlType="submit">
        Actualizar D.O.C.
      </Button>
    </Form>
  );
};

export default FormDoc;
