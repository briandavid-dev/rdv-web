import Head from "next/head";
import { Row, Col, Skeleton, Button } from "antd";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";
import { useEffect, useState } from "react";
import ApiDoc from "../services/doc";

const stylesCss = css.global`
  .SeccionDoc0 {
    background: linear-gradient(to top, #62462c 10%, #4e3c2d 50%);
    background-image: url("./assets/imgs/doc/FONDO.png");
    background-size: cover;
  }
  .SeccionDoc1 {
    text-align: center;
    padding-top: 10rem;
    padding-bottom: 3rem;
  }
  .SeccionDocNacimiento {
    background-color: #4e3c2d;
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }

  .SectionMobile0 {
    background-color: #443421;
  }
  .SectionMobile1 {
    background-image: url("./assets/imgs/historia/FONDO-NUESTRA-HISTORIA-MOBILE.jpg");
  }
`;

export default function Doc() {
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
    ApiDoc.getAll()
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

        <title>{strings[lang].doc.pageTitle}</title>
      </Head>

      <MenuDesktop />

      <div className="SeccionDoc0 valida_mobile">
        <div className="SeccionDoc1">
          <img
            src="./assets/imgs/doc/BARRIL-LETRA-D.png"
            style={{ maxWidth: "25%", width: "400px" }}
          />
          <img
            src="./assets/imgs/doc/BARRIL-LETRA-O.png"
            style={{ maxWidth: "25%", width: "400px" }}
          />
          <img
            src="./assets/imgs/doc/BARRIL-LETRA-C.png"
            style={{ maxWidth: "25%", width: "400px" }}
          />
        </div>
        <div className="SeccionDoc2">
          <div className="container">
            <div className="row justify-content-center gx-1">
              <div className="col-md-12">
                <div className="seccion_titulo text-center">
                  <img
                    src="./assets/imgs/home/linea2.png"
                    className="linea1"
                    style={{ maxHeight: "4px" }}
                  />
                  <h1>{strings[lang].doc.title1}</h1>
                  <img
                    src="./assets/imgs/home/linea1.png"
                    className="linea2"
                    style={{ maxHeight: "4px" }}
                  />
                </div>
              </div>
              <div className="col-md-10">
                <h3 className="titulo-maestro">{strings[lang].doc.quees}</h3>
                {strings[lang].doc.quees1}

                <br />
                <br />
              </div>
              <div className="col-md-7">
                <h3 className="titulo-maestro">{strings[lang].doc.existe}</h3>
                {strings[lang].doc.existe1}
              </div>
              <div className="col-md-3 " style={{ textAlign: "right" }}>
                <img
                  src="./assets/imgs/doc/FOTO-BODEGA-BARRICAS.png"
                  style={{ maxWidth: "80%" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-md-10 SeccionDocNacimiento">
                <h3 className="titulo-maestro">
                  {strings[lang].doc.nacimiento}
                </h3>
                {strings[lang].doc.nacimiento1}
              </div>

              <div className="col-md-10">
                <h3 className="titulo-maestro">
                  {strings[lang].doc.regulador}
                </h3>
                {strings[lang].doc.regulador1}

                {strings[lang].doc.funciones}

                {strings[lang].doc.organizacion}

                <br />

                <Skeleton active loading={loading}>
                  {dataForm[lang] && dataForm[lang].regularizations && (
                    <>
                      <h4 className="titulo-maestro">
                        {dataForm[lang].regularizations.title}
                      </h4>
                      <p className="font_20 text-justify">
                        {dataForm[lang].regularizations.files.map(
                          (file, key) => (
                            <>
                              <a
                                key={key}
                                href={`${process.env.NEXT_PUBLIC_URL_API_RDV}/doc/${file.fileName}`}
                                target="_blank"
                                style={{ color: "#C6E1EA" }}
                              >
                                {file.text} .pdf (click aquí)
                              </a>
                              <br />
                            </>
                          )
                        )}
                      </p>
                    </>
                  )}
                </Skeleton>
                <br />
                <br />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center gx-1">
              <div className="col-md-12 text-center">
                <img
                  src="./assets/imgs/doc/FOTO-CAMION.png"
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    width: "300px",
                    maxWidth: "100%",
                  }}
                />
                <img
                  src="./assets/imgs/doc/FOTO-CANA-DE-AZUCAR.png"
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    width: "300px",
                    maxWidth: "100%",
                  }}
                />
                <img
                  src="./assets/imgs/doc/FOTO-BODEGA-BARRICA-BOTELLAS.png"
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    width: "300px",
                    maxWidth: "100%",
                  }}
                />
              </div>
              <div className="col-md-12">
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ backgroundColor: "#3d2514" }}>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="SeccionDoc0 valida_desktop">
        <Row type="flex" justify="center">
          <Col xs={22} className="text-center" style={{ marginTop: "58px" }}>
            <br />
            <img
              src="./assets/imgs/doc/BARRIL-LETRA-D.png"
              style={{ maxWidth: "30%" }}
            />{" "}
            &nbsp;&nbsp;
            <img
              src="./assets/imgs/doc/BARRIL-LETRA-O.png"
              style={{ maxWidth: "30%" }}
            />{" "}
            &nbsp;&nbsp;
            <img
              src="./assets/imgs/doc/BARRIL-LETRA-C.png"
              style={{ maxWidth: "30%" }}
            />
            <br />
            <br />
          </Col>
          <Col xs={22}>
            <h1>{strings[lang].doc.title1}</h1>
            <br />

            <h3 className="titulo-maestro">{strings[lang].doc.quees}</h3>
            {strings[lang].doc.quees1}

            <h3 className="titulo-maestro">{strings[lang].doc.existe}</h3>
            {strings[lang].doc.existe1}
          </Col>
          <Col xs={22} className="text-center">
            <img
              src="./assets/imgs/doc/FOTO-BODEGA-BARRICAS.png"
              style={{ maxWidth: "100%" }}
            />
            <br />
            <br />
          </Col>
          <Col xs={22}>
            <h3 className="titulo-maestro">{strings[lang].doc.nacimiento}</h3>
            {strings[lang].doc.nacimiento1}
            <h3 className="titulo-maestro">{strings[lang].doc.regulador}</h3>
            {strings[lang].doc.regulador1}

            {strings[lang].doc.funciones}

            {strings[lang].doc.organizacion}
            <br />
            <Skeleton active loading={loading}>
              {dataForm[lang] && dataForm[lang].regularizations && (
                <>
                  <h4 className="titulo-maestro">
                    {dataForm[lang].regularizations.title}
                  </h4>
                  <p className="font_20 text-justify">
                    {dataForm[lang].regularizations.files.map((file, key) => (
                      <>
                        <a
                          key={key}
                          href={`${process.env.NEXT_PUBLIC_URL_API_RDV}/doc/${file.fileName}`}
                          target="_blank"
                          style={{ color: "#C6E1EA" }}
                        >
                          {file.text} .pdf (click aquí)
                        </a>
                        <br />
                      </>
                    ))}
                  </p>
                </>
              )}
            </Skeleton>
          </Col>
          <Col xs={22} className="text-center">
            <img
              src="./assets/imgs/doc/FOTO-CAMION.png"
              style={{
                maxWidth: "30%",
              }}
            />{" "}
            &nbsp;&nbsp;
            <img
              src="./assets/imgs/doc/FOTO-CANA-DE-AZUCAR.png"
              style={{
                maxWidth: "30%",
              }}
            />{" "}
            &nbsp;&nbsp;
            <img
              src="./assets/imgs/doc/FOTO-BODEGA-BARRICA-BOTELLAS.png"
              style={{
                maxWidth: "30%",
              }}
            />
            <br />
            <br />
          </Col>
          <div className="container">
            <div className="row">
              <div className="col-md-12" style={{ backgroundColor: "#3d2514" }}>
                <br />
              </div>
            </div>
          </div>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
