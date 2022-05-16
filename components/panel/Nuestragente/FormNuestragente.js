import { Form, Input, Row, Col, Button, Upload, Image, Divider } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ApiOurpeople from "../../../services/ourpeople";
import notifica from "../../../utils/notifica";
import { getBase64 } from "../../../utils/getBase64";

const FormDoc = (props) => {
  const [form] = Form.useForm();
  const { lang, dataForm, setLoading, setDataForm } = props;

  const onFinish = async (values) => {
    const payload = {
      ...values,
      lang,
    };

    delete payload.cuerpoalma;

    setLoading(true);
    ApiOurpeople.put(payload)
      .then((response) => {
        const { codigo, results } = response.data;
        if (codigo === "1") {
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

  const updateImageDoc = async (fieldName) => {
    const fieldName_ = form.getFieldValue(fieldName);

    if (fieldName_ && fieldName_.file.originFileObj) {
      let base64 = await getBase64(fieldName_.file.originFileObj);
      base64 = base64.split(";base64,").pop();

      const payload = {
        lang,
        base64,
        extension: fieldName_.file.type.replace("image/", ""),
        fieldName,
        imageAnterior: dataForm.cuerpoalma.image || "",
      };

      setLoading(true);
      ApiOurpeople.updateImageDoc(payload)
        .then((response) => {
          const { codigo, data } = response.data;
          if (codigo === "1") {
            setDataForm(data);
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
    }
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      name="FormDoc"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        cuerpoalmaTitle: dataForm.cuerpoalma.title,
        cuerpoalmaContent: dataForm.cuerpoalma.content,
        cuerpoalma2Title: dataForm.cuerpoalma2.title,
        cuerpoalma2Content: dataForm.cuerpoalma2.content,
        unnombreTitle: dataForm.unnombre.title,
        unnombreContent: dataForm.unnombre.content,
      }}
    >
      <br />
      <Row gutter={(40, 40)} justify="center">
        <Col span={16}>
          <Form.Item
            name="cuerpoalmaTitle"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="cuerpoalmaContent"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input.TextArea rows={8} />
          </Form.Item>
          <Form.Item
            name="cuerpoalma2Content"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input.TextArea rows={15} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Image
            // width={150}
            height={100}
            src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/our-people/image/${dataForm.cuerpoalma.image}`}
            fallback="data:image/png;base64,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"
          />
          <Form.Item
            name={`cuerpoalma`}
            extra="(600x600) Máximo 500 KB. Solo Archivos .jpg, .jpeg, .png"
          >
            <Upload accept=".jpg, .jpeg, .png" maxCount={1} listType="picture">
              <Button icon={<UploadOutlined />}>Click para adjuntar</Button>
            </Upload>
          </Form.Item>
          <Button
            type="primary"
            loading={false}
            onClick={() => updateImageDoc("cuerpoalma")}
          >
            Actualizar Imagen
          </Button>
        </Col>
      </Row>
      <Divider />

      <Row gutter={(40, 40)} justify="center">
        <Col span={16}>
          <Form.Item
            name="unnombreTitle"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="unnombreContent"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input.TextArea rows={7} />
          </Form.Item>
        </Col>
        <Col span={4} />
      </Row>
      <Divider />

      <Button type="primary" htmlType="submit">
        Actualizar
      </Button>
    </Form>
  );
};

export default FormDoc;
