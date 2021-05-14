import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { Card, Row, Col, Button } from "antd";
import css from "styled-jsx/css";
import Footer from "../../components/Footer";
import MenuDesktop from "../../components/MenuDesktop";
import es from "../../lang/es";
import en from "../../lang/en";
import ApiEmpresas from "../../pagesServices/empresas";
import ApiProductos from "../../components/panel/Empresas/Productos/services";

const stylesCss = css.global`
  body {
    background-color: #5b402b;
    background-image: url("/assets/imgs/empresas/fondo-marcas.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }
  .Section0 {
    /* background-color: #553c28; */
  }

  table {
    /* background-color: rgba(68, 49, 34, 0.8); */
    border-radius: 1px;
    /* border: 0.5px rgba(68, 49, 34, 0.5) solid; */
    color: #fff4e4;
    padding: 2rem;
    font-size: 1rem;
  }

  table tr {
    border-bottom-width: 0px !important;
    margin-bottom: 1.5rem;
  }
  table td {
    padding: 0;
  }
  table td:nth-child(1) {
    /* padding-top: 0; */
    vertical-align: top;
  }
  table td:nth-child(2) {
    padding-left: 1rem;
    vertical-align: top;
    /* padding-top: 1rem; */
  }

  .card-empresa-premios {
    background-color: rgba(68, 49, 34, 0.8);
    border-color: rgba(68, 49, 34, 0.8);
    color: #fff4e4;
  }
  .card-empresa-premios:hover {
    background-color: rgba(68, 49, 34, 0.8);
    border-color: rgba(68, 49, 34, 0.5);
    color: #fff4e4;
  }
  .card-empresa-premios:focus {
    background-color: rgba(68, 49, 34, 0.8);
    border-color: rgba(68, 49, 34, 0.5);
    color: #fff4e4;
  }

  .card-botellita {
    background-color: rgba(68, 49, 34, 0.8);
  }
  .card-botellita-content {
    padding-left: 1rem;
  }
  .card-botellita-producto-uno {
    color: #ffda44;
    font-size: 1.3rem;
  }
  .card-botellita-producto-dos {
    font-size: 1.2rem;
  }

  h4 {
    color: #ffda44;
  }
`;

const PageNoticia = () => {
  const router = useRouter();
  const { id, lang } = router.query;

  // let lang = "en";
  // if (router.query.lang === "en") {
  //   lang = "en";
  // } else {
  //   lang = "es";
  // }

  // const strings = { es, en };

  const [empresa, setEmpresa] = useState({
    image_base64: "",
    image_extension: "",
    content_html: "",
    title: "",
    url: "",
  });

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    ApiEmpresas.getEmpresa(id)
      .then((response) => {
        const { codigo, empresa } = response.data;
        if (codigo === "1") {
          setEmpresa({
            image_base64: empresa.image_base64,
            image_extension: empresa.image_extension,
            content_html: empresa.content_html,
            title: empresa.title,
            url: empresa.url,
          });
        } else {
          //
        }
      })
      .catch((error) => {
        console.log(`error`, error);
      });
  }, [id]);

  useEffect(() => {
    if (id) {
      ApiProductos.getProductos(id, "premios")
        .then((response) => {
          const { codigo, results } = response.data;
          if (codigo === "1") {
            setProductos(results);
          } else {
            //
          }
        })
        .catch((error) => {
          console.log(`error`, error);
        });
    }
  }, [id]);

  return (
    <>
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
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap"
          rel="stylesheet"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
          crossorigin="anonymous"
        ></script>

        <title>{empresa.title}</title>
      </Head>

      <MenuDesktop />

      <div className="valida_mobile Section0">
        <Row type="flex" justify="center">
          <Col xs={24}>
            <img
              src="/assets/imgs/premios/banner-premios.jpg"
              style={{ maxWidth: "100%" }}
            />
          </Col>
        </Row>
        <div style={{ padding: "0rem 0 0rem 0 " }}>
          <Row gutter={[16, 16]} type="flex" justify="center" align="top">
            <Col xs={22} lg={14}>
              <div className="seccion_titulo">
                <img
                  src="/assets/imgs/home/linea2.png"
                  style={{ height: "4px" }}
                />
                <h1 className="text-center">Premios {empresa.title}</h1>
                &nbsp;&nbsp;
                <img
                  src="/assets/imgs/home/linea1.png"
                  style={{ height: "4px" }}
                />
              </div>

              <br />
              <Row>
                {productos.map((producto) => (
                  <>
                    <Col
                      span={20}
                      className=" card-botellita-content"
                      key={producto.id}
                    >
                      <div className="card-botellita-producto-uno">
                        <h4>
                          <span
                            style={{
                              color: "transparent",
                              marginRight: "1rem",
                            }}
                          >
                            2020
                          </span>
                          {producto.name}
                        </h4>
                      </div>
                      <br />
                      <div className="card-botellita-producto-dos"></div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: producto.content_html,
                        }}
                      ></div>
                    </Col>

                    <Col span={4} className="text-center card-botellita__">
                      {producto.image_extension !== "" && (
                        <img
                          alt={producto.name}
                          src={`data:image/${producto.image_extension};base64,${producto.image_base64}`}
                          style={{ width: "50", maxWidth: "100%" }}
                        />
                      )}

                      {producto.image_extension === "" &&
                        producto.image_base64 !== "" && (
                          <>
                            {JSON.parse(producto.image_base64).map((imagen) => {
                              return (
                                <img
                                  alt={producto.name}
                                  key={imagen.uid}
                                  src={imagen.thumbUrl}
                                  style={{
                                    width: "50",
                                    maxWidth: "100%",
                                    marginBottom: "1rem",
                                  }}
                                />
                              );
                            })}
                          </>
                        )}
                    </Col>
                    <Col span={24}>
                      <br />
                      <br />
                    </Col>
                  </>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
        {empresa.url !== "" && (
          <div className="container">
            <div className="row ">
              <div className="col-md-12 text-center">
                Para más información de los premios de {empresa.title} visita
                <p>
                  <a href={empresa.url} target="_blank">
                    <Button className="card-empresa-premios zoom-elron">
                      {empresa.url}
                    </Button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ backgroundColor: "#3d2514" }}>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="valida_desktop font_20 Section0">
        <Row type="flex" justify="center">
          <Col xs={24} style={{ marginTop: "58px" }}>
            <img
              src="/assets/imgs/premios/banner-premios.jpg"
              style={{ maxWidth: "100%" }}
            />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="Section0">
          <Col xs={22} style={{ marginTop: "1rem" }}>
            <img src="/assets/imgs/home/linea2.png" style={{ height: "4px" }} />
            <h2 className="text-center">{empresa.title}</h2>
            <div style={{ textAlign: "right" }}>
              <img
                src="/assets/imgs/home/linea2.png"
                style={{ height: "4px" }}
              />
            </div>
            <br />
            <Row xs={24} type="flex" justify="center">
              {productos.map((producto) => (
                <>
                  <Col span={24} className=" card-botellita-content__">
                    <div className="card-botellita-producto-uno">
                      <h4>{producto.name}</h4>
                    </div>
                    <br />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: producto.content_html,
                      }}
                    ></div>
                  </Col>
                  <Col span={24} className="text-center card-botellita__">
                    {producto.image_extension !== "" && (
                      <img
                        alt={producto.name}
                        src={`data:image/${producto.image_extension};base64,${producto.image_base64}`}
                        style={{
                          width: "90px",
                          maxWidth: "100%",
                          margin: "0 0.5rem 0.5rem 0.2rem",
                        }}
                      />
                    )}

                    {producto.image_extension === "" &&
                      producto.image_base64 !== "" && (
                        <>
                          {JSON.parse(producto.image_base64).map((imagen) => {
                            return (
                              <img
                                alt={producto.name}
                                key={imagen.uid}
                                src={imagen.thumbUrl}
                                style={{
                                  width: "90px",
                                  maxWidth: "100%",
                                  margin: "0 0.5rem 0.5rem 0.2rem",
                                }}
                              />
                            );
                          })}
                        </>
                      )}
                  </Col>
                  <Col span={24}>
                    <br />
                    <br />
                  </Col>
                </>
              ))}
            </Row>
          </Col>

          {empresa.url !== "" && (
            <div className="container">
              <div className="row ">
                <div className="col-md-12 text-center">
                  Para más información de los premios de {empresa.title} visita
                  <p>
                    <a href={empresa.url} target="_blank">
                      <Button className="card-empresa-premios zoom-elron">
                        {empresa.url}
                      </Button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}

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
    </>
  );
};

export default PageNoticia;
