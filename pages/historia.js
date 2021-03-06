import { useEffect, useState } from "react";
import Head from "next/head";
import { Row, Col, Skeleton } from "antd";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";
import ApiHistory from "../services/history";

const stylesCss = css.global`
  body {
    background-image: url("./assets/imgs/historia/FONDO-NUESTRA-HISTORIA.jpg");
    background-size: cover;
  }
  .SeccionHistoria1 {
    padding-top: 7rem;
    /*  background-color: #4e3c2d; */
  }
  .SeccionHistoria2 {
    padding-top: 2rem;
    /*  background-color: #62462c; */
  }
  .SeccionHistoria3 {
    padding-top: 2rem;
    /* background: linear-gradient(to top, #62462c 50%, #4e3c2d 50%); */
  }
  .SeccionHistoria1 .titulo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 2rem 0;
  }

  .SectionMobile0 {
    background-color: #4e3c2d;
  }
  .SectionMobile1 {
    background-image: url("./assets/imgs/historia/FONDO-NUESTRA-HISTORIA-MOBILE.jpg");
  }
`;

export default function Historia() {
  const router = useRouter();
  let lang = "es";
  if (router.query.lang === "en") {
    lang = "en";
  }
  const strings = { es, en };

  const [dataForm, setDataForm] = useState({ es: null, en: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiHistory.getAll()
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

        <title>{strings[lang].historia.pageTitle}</title>
      </Head>

      <MenuDesktop />

      <Skeleton loading={loading} active>
        <div className="valida_mobile font_20">
          <div className="SeccionHistoria1">
            <div className="container">
              <div className="row  justify-content-center gx-1">
                <div className="col-sm-12 col-md-6 col-lg-7 font_20 text-justify">
                  <div className="seccion_titulo">
                    <img
                      src="./assets/imgs/home/linea2.png"
                      className="linea1"
                      style={{ maxHeight: "3px" }}
                    />
                    <h1>
                      {/* {strings[lang].historia.titulo} */}
                      {dataForm[lang]?.nuestrahistoria1.title}
                    </h1>
                    <img
                      src="./assets/imgs/home/linea1.png"
                      className="linea2"
                      style={{ maxHeight: "3px" }}
                    />
                  </div>
                  <div
                    className="font_20 text-justify"
                    dangerouslySetInnerHTML={{
                      __html: dataForm[
                        lang
                      ]?.nuestrahistoria1.content.replaceAll("\n", "<br />"),
                    }}
                  ></div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 font_20  text-center align-center">
                  <img
                    // src="./assets/imgs/historia/IMAGEN-COFRE.png"
                    src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/history/image/${dataForm[lang]?.nuestrahistoria1.image}`}
                    style={{ maxWidth: "80%" }}
                  />
                </div>
                <div className="col-md-10 font_20 text-justify">
                  <br />
                  {/* <p>{strings[lang].historia.parrafo2}</p>
                  <p>{strings[lang].historia.parrafo3}</p> */}
                  <div
                    className="font_20 text-justify"
                    dangerouslySetInnerHTML={{
                      __html: dataForm[
                        lang
                      ]?.nuestrahistoria2.content.replaceAll("\n", "<br />"),
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="SeccionHistoria3">
            <div className="container">
              <div className="row  justify-content-center gx-5">
                <div className="col-md-10">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      // src="./assets/imgs/historia/HOMBRE-CAMPO-SIEMBRA.png"
                      src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/history/image/${dataForm[lang]?.imagemedio1.image}`}
                      style={{
                        maxWidth: "250px",
                        maxHeight: "250px",
                        margin: "1.2rem",
                      }}
                    />
                    <img
                      // src="./assets/imgs/historia/BARRICAS.png"
                      src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/history/image/${dataForm[lang]?.imagemedio2.image}`}
                      style={{
                        maxWidth: "250px",
                        maxHeight: "250px",
                        margin: "1.2rem",
                      }}
                    />
                    <img
                      // src="./assets/imgs/historia/LOGO.png"
                      src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/history/image/${dataForm[lang]?.imagemedio3.image}`}
                      style={{
                        maxWidth: "250px",
                        maxHeight: "250px",
                        margin: "1.2rem",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="SeccionHistoria2">
            <div className="container">
              <div className="row  justify-content-center gx-5">
                <div className="col-md-10 font_20 text-justify">
                  {/* <p>{strings[lang].historia.parrafo4}</p>
                  <p>{strings[lang].historia.parrafo5}</p> */}
                  <div
                    className="font_20 text-justify"
                    dangerouslySetInnerHTML={{
                      __html: dataForm[
                        lang
                      ]?.nuestrahistoria3.content.replaceAll("\n", "<br />"),
                    }}
                  ></div>
                </div>
              </div>

              <div className="row  justify-content-center gx-5">
                <div className="col-md-10 font_20 text-center">
                  <img
                    // src="./assets/imgs/historia/IMAGEN-TRAGO-CANA-DE-AZUCAR.png"
                    src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/history/image/${dataForm[lang]?.imagemedio4.image}`}
                    style={{ maxWidth: "450px", margin: "1.5rem" }}
                  />
                </div>
              </div>

              <div className="row justify-content-center gx-5">
                <div className="col-md-10 font_20 text-justify">
                  {/* <p>{strings[lang].historia.parrafo6}</p>
                  <p>{strings[lang].historia.parrafo7}</p>
                  <p>{strings[lang].historia.parrafo8}</p>
                  <p>{strings[lang].historia.parrafo9}</p> */}
                  <div
                    className="font_20 text-justify"
                    dangerouslySetInnerHTML={{
                      __html: dataForm[
                        lang
                      ]?.nuestrahistoria4.content.replaceAll("\n", "<br />"),
                    }}
                  ></div>
                  <br />
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div
                  className="col-md-12"
                  style={{ backgroundColor: "#3d2514" }}
                >
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="valida_desktop font_20">
          <Row type="flex" justify="center" className="SectionMobile1">
            <Col xs={22} className="text-center" style={{ marginTop: "58px" }}>
              <br />
              <div className="seccion_titulo_mobile__">
                {/* <img
                src="./assets/imgs/home/linea2.png"
                className="linea1mobile"
              /> */}
                <h1>
                  {/* {strings[lang].historia.titulo} */}
                  {dataForm[lang]?.nuestrahistoria1.title}
                </h1>
                {/* <img
                src="./assets/imgs/home/linea1.png"
                className="linea2mobile"
              /> */}
              </div>
              <img
                src="./assets/imgs/home/linea1.png"
                className="linea2mobile"
              />
            </Col>
            <Col xs={22} className="text-center">
              <br />
              <img
                // src="./assets/imgs/historia/IMAGEN-COFRE.png"
                src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/history/image/${dataForm[lang]?.nuestrahistoria1.image}`}
                style={{ maxWidth: "80%" }}
              />
            </Col>
            <Col xs={22}>
              <br />
              <div
                className="font_20 text-justify"
                dangerouslySetInnerHTML={{
                  __html: dataForm[lang]?.nuestrahistoria1.content.replaceAll(
                    "\n",
                    "<br />"
                  ),
                }}
              ></div>
              {/* <p>{strings[lang].historia.parrafo2}</p>
              <p>{strings[lang].historia.parrafo3}</p> */}
              <div
                className="font_20 text-justify"
                dangerouslySetInnerHTML={{
                  __html: dataForm[lang]?.nuestrahistoria2.content.replaceAll(
                    "\n",
                    "<br />"
                  ),
                }}
              ></div>
            </Col>
            <Col xs={22} className="text-center">
              <img
                // src="./assets/imgs/historia/HOMBRE-CAMPO-SIEMBRA.png"
                src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/history/image/${dataForm[lang]?.imagemedio1.image}`}
                style={{
                  maxWidth: "30%",
                  margin: "0.1rem",
                }}
              />
              <img
                // src="./assets/imgs/historia/BARRICAS.png"
                src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/history/image/${dataForm[lang]?.imagemedio2.image}`}
                style={{
                  maxWidth: "30%",
                  margin: "0.1rem",
                }}
              />
              <img
                // src="./assets/imgs/historia/LOGO.png"
                src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/history/image/${dataForm[lang]?.imagemedio3.image}`}
                style={{
                  maxWidth: "30%",
                  margin: "0.1rem",
                }}
              />
              <br />
              <br />
            </Col>
            <Col xs={22}>
              {/* <p>{strings[lang].historia.parrafo4}</p>
              <p>{strings[lang].historia.parrafo5}</p> */}
              <div
                className="font_20 text-justify"
                dangerouslySetInnerHTML={{
                  __html: dataForm[lang]?.nuestrahistoria3.content.replaceAll(
                    "\n",
                    "<br />"
                  ),
                }}
              ></div>
            </Col>
            <Col xs={22} className="text-center">
              <img
                // src="./assets/imgs/historia/IMAGEN-TRAGO-CANA-DE-AZUCAR.png"
                src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/history/image/${dataForm[lang]?.imagemedio4.image}`}
                style={{ maxWidth: "80%" }}
              />
            </Col>
            <Col xs={22}>
              {/* <p>{strings[lang].historia.parrafo6}</p>
              <p>{strings[lang].historia.parrafo7}</p>
              <p>{strings[lang].historia.parrafo8}</p>
              <p>{strings[lang].historia.parrafo9}</p> */}
              <div
                className="font_20 text-justify"
                dangerouslySetInnerHTML={{
                  __html: dataForm[lang]?.nuestrahistoria4.content.replaceAll(
                    "\n",
                    "<br />"
                  ),
                }}
              ></div>
            </Col>

            <div className="container">
              <div className="row">
                <div
                  className="col-md-12"
                  style={{ backgroundColor: "#3d2514" }}
                >
                  <br />
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Skeleton>

      <Footer />
    </div>
  );
}
