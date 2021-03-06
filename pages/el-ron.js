import { useEffect, useState } from "react";
import Head from "next/head";
import { Row, Col, Modal, Button, Skeleton } from "antd";
import css from "styled-jsx/css";
// import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";
import ApiRum from "../services/rum";

/* const MapeoImagen1 = dynamic(
  () => {
    return import("../components/common/MapeoImagen1");
  },
  { ssr: false }
); */

const stylesCss = css.global`
  body {
    background-color: #483222;
    background-image: url("./assets/imgs/elrom/FONDO.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }

  .SeccionElRon1 {
    padding-top: 100px;
    /* background-color: #443421; */
  }
  .SeccionDoc1 img {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .SeccionElRon2 {
    /* background-color: #443421; */
    text-align: center;
  }

  .SectionMobile0 {
    /* background-color: #443421; */
  }
  .SectionMobile1 {
    background-image: url("./assets/imgs/historia/FONDO-NUESTRA-HISTORIA-MOBILE.jpg");
  }

  .ant-modal-content {
    background-color: transparent;
  }

  .ant-modal-body {
    background-color: rgba(221, 210, 194, 0.85);
    border-radius: 5px;
    font-size: 1.5rem;
  }

  .ant-btn-lg {
    height: 50px;
    font-size: 20px;
  }
`;

export default function ElRon() {
  const router = useRouter();
  let lang = "es";
  if (router.query.lang === "en") {
    lang = "en";
  }
  const strings = { es, en };

  const [modal, setModal] = useState({
    visible: false,
    text: "",
  });

  const [dataForm, setDataForm] = useState({ es: null, en: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiRum.getAll()
      .then((response) => {
        const { codigo, data } = response.data;
        if (codigo === "1") {
          setDataForm(data);
        } else {
          console.log("error", `service return code ${codigo}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Modal
        visible={modal.visible}
        footer={false}
        centered
        onCancel={() => {
          setModal({
            visible: false,
          });
        }}
      >
        {modal.text}
      </Modal>
      <style jsx global>
        {stylesCss}
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

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
          crossOrigin="anonymous"
        ></script>

        <title>{strings[lang].elron.pageTitle}</title>
      </Head>

      <MenuDesktop />
      <Skeleton loading={loading} active>
        <div className="SeccionElRon1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="seccion_titulo valida_mobile">
                  <img
                    src="./assets/imgs/home/linea2.png"
                    className="linea1"
                    style={{ maxHeight: "4px" }}
                  />
                  <h1>
                    {/* {strings[lang].elron.title} */}
                    {dataForm[lang]?.proceso.title}
                  </h1>
                  <img
                    src="./assets/imgs/home/linea1.png"
                    className="linea2"
                    style={{ maxHeight: "4px" }}
                  />
                </div>

                <div className="valida_desktop">
                  <h1 className="text-center">
                    {/* {strings[lang].elron.title} */}
                    {dataForm[lang]?.proceso.title}
                  </h1>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Row className="SeccionElRon2" type="flex" justify="center">
          <Col span={22} className="text-center">
            <Button
              size="large"
              className="titulo-bello zoom-elron "
              onClick={() => {
                setModal({
                  visible: true,
                  text: (
                    <div
                      className="font_20 text-justify"
                      dangerouslySetInnerHTML={{
                        __html: dataForm[lang]?.lacana.content.replaceAll(
                          "\n",
                          "<br />"
                        ),
                      }}
                    ></div>
                  ),
                });
              }}
            >
              {/* {strings[lang].elron.laCana.titulo} */}
              {dataForm[lang]?.lacana.title}
            </Button>
            <br />
            <br />
          </Col>
          <Col lg={5} xs={0}>
            <img
              // src="./assets/imgs/elrom/PROCESO-RON-CANA-DE-AZUCAR.png"
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/rum/image/${dataForm[lang]?.lacanaimage1.image}`}
              style={{ width: "300px", maxWidth: "100%" }}
              className="zoom-elron"
            />
            <br />
            <br />
            <img
              src="./assets/imgs/elrom/FLECHA.png"
              // style={{ width: "300px", maxWidth: "100%" }}
              className="zoom-elron"
            />
          </Col>
          <Col lg={5} xs={0}>
            <img
              // src="./assets/imgs/elrom/PROCESO-RON-CAMION.png"
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/rum/image/${dataForm[lang]?.lacanaimage2.image}`}
              style={{ width: "300px", maxWidth: "100%" }}
              className="zoom-elron"
            />
            <br />
            <br />
            <img
              src="./assets/imgs/elrom/FLECHA.png"
              // style={{ width: "300px", maxWidth: "100%" }}
              className="zoom-elron"
            />
          </Col>
          <Col lg={0} xs={11}>
            <img
              // src="./assets/imgs/elrom/PROCESO-RON-CANA-DE-AZUCAR.png"
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/rum/image/${dataForm[lang]?.lacanaimage1.image}`}
              style={{ maxWidth: "90%" }}
              className="zoom-elron"
            />
            <br />
            <br />
            <img
              src="./assets/imgs/elrom/FLECHA.png"
              style={{ height: "50px" }}
              className="zoom-elron"
            />
          </Col>
          <Col lg={0} xs={11}>
            <img
              // src="./assets/imgs/elrom/PROCESO-RON-CAMION.png"
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/rum/image/${dataForm[lang]?.lacanaimage2.image}`}
              style={{ maxWidth: "90%" }}
              className="zoom-elron"
            />
            <br />
            <br />
            <img
              src="./assets/imgs/elrom/FLECHA.png"
              style={{ height: "50px" }}
              className="zoom-elron"
            />
          </Col>
          <Col span={22} className="text-center">
            <br />
            <Button
              size="large"
              className="titulo-bello zoom-elron"
              onClick={() => {
                setModal({
                  visible: true,
                  text: (
                    <div
                      className="font_20 text-justify"
                      dangerouslySetInnerHTML={{
                        __html: dataForm[lang]?.lamelaza.content.replaceAll(
                          "\n",
                          "<br />"
                        ),
                      }}
                    ></div>
                  ),
                });
              }}
            >
              {/* {strings[lang].elron.laMelasa.titulo} */}
              {dataForm[lang]?.lamelaza.title}
            </Button>
            <br />
            <br />
          </Col>
          <Col span={22}>
            <img
              // src="./assets/imgs/elrom/PROCESO-RON-CAMION-Y-FABRICA.png"
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/rum/image/${dataForm[lang]?.lamelaza.image}`}
              style={{ maxWidth: "100%", width: "1000px" }}
            />
          </Col>

          <Col xs={22} lg={0} className="text-center">
            <br />
            <img
              src="./assets/imgs/elrom/FLECHA.png"
              style={{ height: "50px" }}
              className="zoom-elron"
            />
            <br />
            <br />
            <Button
              size="large"
              className="titulo-bello zoom-elron"
              onClick={() => {
                setModal({
                  visible: true,
                  text: (
                    <div
                      className="font_20 text-justify"
                      dangerouslySetInnerHTML={{
                        __html: dataForm[
                          lang
                        ]?.lafermentacion.content.replaceAll("\n", "<br />"),
                      }}
                    ></div>
                  ),
                });
              }}
            >
              {/* {strings[lang].elron.laFermentacion.titulo} */}
              {dataForm[lang]?.lafermentacion.title}
            </Button>
            <br />
            <br />
          </Col>
          <Col xs={0} lg={22}>
            <Row>
              <Col span={16} className="text-center">
                <br />
                <img
                  src="./assets/imgs/elrom/FLECHA.png"
                  className="zoom-elron"
                />
                <br />
                <br />
                <Button
                  size="large"
                  className="titulo-bello zoom-elron"
                  onClick={() => {
                    setModal({
                      visible: true,
                      text: (
                        <div
                          className="font_20 text-justify"
                          dangerouslySetInnerHTML={{
                            __html: dataForm[
                              lang
                            ]?.lafermentacion.content.replaceAll(
                              "\n",
                              "<br />"
                            ),
                          }}
                        ></div>
                      ),
                    });
                  }}
                >
                  {/* {strings[lang].elron.laFermentacion.titulo} */}
                  {dataForm[lang]?.lafermentacion.title}
                </Button>
                <br />
                <br />
                <br />
              </Col>
            </Row>
          </Col>

          <Col lg={22}>
            <img
              className="zoom-elron cursor-pointer"
              onClick={() => {
                setModal({
                  visible: true,
                  text: (
                    <div
                      className="font_20 text-justify"
                      dangerouslySetInnerHTML={{
                        __html: dataForm[lang]?.destilacion.content.replaceAll(
                          "\n",
                          "<br />"
                        ),
                      }}
                    ></div>
                  ),
                });
              }}
              // src="./assets/imgs/elrom/PROCESO-RON-DESTILACION.png"
              // src={`./assets/imgs/elrom/${strings[lang].images["PROCESO-RON-DESTILACION"]}`}
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/rum/image/${dataForm[lang]?.destilacion.image}`}
              style={{ maxWidth: "100%", width: "1000px" }}
            />
          </Col>

          <Col span={22} className="text-center">
            <br />
            <br />
            <Row>
              <Col xs={24} lg={0} className="text-center">
                <img
                  src="./assets/imgs/elrom/FLECHA.png"
                  style={{ height: "50px" }}
                  className="zoom-elron"
                />
              </Col>
              <Col xs={0} lg={24} className="text-center">
                <img
                  src="./assets/imgs/elrom/FLECHA.png"
                  className="zoom-elron"
                />
              </Col>
            </Row>

            <br />

            <Button
              size="large"
              className="titulo-bello zoom-elron"
              onClick={() => {
                setModal({
                  visible: true,
                  text: (
                    <div
                      className="font_20 text-justify"
                      dangerouslySetInnerHTML={{
                        __html: dataForm[
                          lang
                        ]?.elanejamiento.content.replaceAll("\n", "<br />"),
                      }}
                    ></div>
                  ),
                });
              }}
            >
              {/* {strings[lang].elron.elAnejamiento.titulo} */}
              {dataForm[lang]?.elanejamiento.title}
            </Button>
            <br />
            <br />
          </Col>

          <Col lg={20}>
            <img
              // src="./assets/imgs/elrom/PROCESO-RON-ANEJAMIENTO.png"
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/rum/image/${dataForm[lang]?.elanejamiento.image}`}
              style={{ maxWidth: "100%", width: "1000px" }}
            />
            <br />
            <br />
          </Col>

          <Col lg={20}>
            <img
              className="zoom-elron cursor-pointer"
              onClick={() => {
                setModal({
                  visible: true,
                  text: (
                    <div
                      className="font_20 text-justify"
                      dangerouslySetInnerHTML={{
                        __html: dataForm[lang]?.mezclas.content.replaceAll(
                          "\n",
                          "<br />"
                        ),
                      }}
                    ></div>
                  ),
                });
              }}
              // src={strings[lang].elron.imgEmbasado}
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/rum/image/${dataForm[lang]?.mezclas.image}`}
              style={{ maxWidth: "100%", width: "1000px" }}
            />
          </Col>
        </Row>

        <div className="SeccionElRon2 text-center">
          <br />
          <br />
          <br />

          <div className="container">
            <div className="row">
              <div className="col-md-12" style={{ backgroundColor: "#3d2514" }}>
                <div className="valida_mobile">
                  <br />
                  <br />
                </div>
                <div className="valida_desktop">
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Skeleton>
      <Footer />
    </div>
  );
}
