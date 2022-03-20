import { useState, useEffect } from "react";
import Link from "next/link";
import { Skeleton, Modal, Row, Col, Button } from "antd";
import Head from "next/head";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";
import ApiHome from "../services/home";

const stylesCss = css.global`
  .seccion0 {
    background-image: url("./assets/imgs/home/FONDO-INICIO.jpg");
    background-size: cover;
    background-size: 100%;
  }

  .seccion2 h1 {
    background-color: #4d341f;
    text-align: center;
    padding: 1rem;
  }
  .seccion2 {
    /* background-color: var(--color-fondo-secondary); */
    padding: 4rem 0 4rem 0;
    font-size: 18px;
    position: relative;
    top: -220px;
  }

  .seccion2 .content-1 {
    flex: 45;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .SeccionEmpresas {
    position: relative;
    top: -220px;
    /* background-color: var(--color-fondo-secondary); */
  }
  .SeccionEmpresas .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .SeccionMaestrosRoneros {
    position: relative;
    top: -220px;
    /* background-color: var(--color-fondo-secondary); */
  }
  .SeccionMaestrosRoneros .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .SeccionNoticias {
    position: relative;
    top: -220px;
    /* background-color: var(--color-fondo-secondary); */
  }
  .SeccionNoticias .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img_marcas {
    max-width: 50%;
  }

  .carousel-item div {
    display: flex;
    justify-content: center;
  }

  .noticias_img {
    display: flex;
    justify-content: center;
  }
  .noticias_cuadro {
    background-color: #4e3522;
    padding: 2rem;
    margin-bottom: 2rem;
  }

  .iconos_abajo {
    height: 50px;
    width: 50px;
    margin: 0 2rem 0 2rem;
  }

  .iconos_abajo_mobile {
    height: 50px;
    width: 50px;
    margin: 0 1rem 0 1rem;
  }

  .post_img_principal {
    max-width: 100%;
  }

  .ant-modal-body {
    padding: 0px;
  }

  .ant-modal-content {
    background-color: transparent;
  }

  .SectionMobile0 {
    background-color: #0e0e0e;
  }
  .SectionMobile1 {
    background-image: url("./assets/imgs/home/fondoEmpresas.png");
  }
`;

export default function Home() {
  const router = useRouter();

  let lang = "es";
  if (router.query.lang === "en") {
    lang = "en";
  }
  const strings = { es, en };

  const [dataNoticias, setDataNoticias] = useState([]);
  const [dataNoticiasLoading, setDataNoticiasLoading] = useState(false);
  const [modalEdadVisible, setModalEdadVisible] = useState(true);
  const [textoMayorEdad, setTextoMayorEdad] = useState("");

  useEffect(() => {
    setDataNoticiasLoading(true);
    ApiHome.getHomeNoticias(lang)
      .then((response) => {
        const { codigo, results } = response.data;
        if (codigo === "1") {
          setDataNoticias(results);
        }
        setDataNoticiasLoading(false);
      })
      .catch((error) => {
        //
        setDataNoticiasLoading(false);
      });
  }, [lang]);

  useEffect(() => {
    if (window.sessionStorage.getItem("edad")) {
      setModalEdadVisible(false);
    } else {
      setModalEdadVisible(true);
    }
  }, []);

  const handleEdad = (mayorDeEdad) => {
    if (mayorDeEdad === "S") {
      setModalEdadVisible(false);
      setTextoMayorEdad("");
      window.sessionStorage.setItem("edad", true);
    } else if (mayorDeEdad === "N") {
      setTextoMayorEdad(strings[lang].validacionEdad.noTienesEdad);
    }
  };

  return (
    <>
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

          <title>{strings[lang].home.pageTitle}</title>
        </Head>

        {!modalEdadVisible && (
          <>
            <MenuDesktop />
            <div className="seccion0 valida_mobile">
              <div className="seccion1">
                <div className="container" style={{ position: "relative", top: "13rem", zIndex: 900 }}>
                  <div className="row">
                    <div className="col-md-6">&nbsp;</div>
                    <div
                      className="col-md-4"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <h1>{strings[lang].home.pageTitle}</h1>
                      <div className="text-center font_20">{strings[lang].calidad}</div>
                      <div>&nbsp;</div>
                      <img src="./assets/imgs/home/linea1.png" style={{ height: "8px" }} />
                      {/* <!-- <div>Registra tu correo para más información</div>
        <div style={{display: 'flex', alignItems: 'center', height: '60px'}}>
          <div style=
              {{
                padding: '5px 10px 5px 10px',
              backgroundColor: 'var(--color-fondo-cajitas)'}}
            >
            E-Mail
          </div>
          <div style={{border: 1px solid var(--color-letra)">
            <input style={{background-color: transparent; color: var(--color-letra)" type="email" />
          </div>
        </div> --> */}
                    </div>
                    <div className="col-md-2">&nbsp;</div>
                  </div>
                </div>
                <div style={{ position: "relative", top: "-220px" }}>
                  <img src="./assets/imgs/home/copa.jpg" style={{ maxWidth: "100%" }} />
                </div>
              </div>

              <div className="seccion2 font_20">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12" style={{ display: "flex" }}>
                      <div className="content-1">
                        <h1 style={{ right: "-2rem", position: "relative" }}>{strings[lang].elron1}</h1>
                        <p className="font_20" style={{ textAlign: "right", padding: "1rem" }}>
                          {strings[lang].melasa}
                          <br />
                          {strings[lang].aunque}
                        </p>
                      </div>
                      <div style={{ flex: 55 }}>
                        <img src="./assets/imgs/home/foto-ron.jpg" style={{ maxWidth: "100%" }} />
                      </div>
                    </div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div className="col-md-12" style={{ display: "flex" }}>
                      <div style={{ flex: 55 }}>
                        <img src="./assets/imgs/home/foto-proceso.jpg" style={{ maxWidth: "100%" }} />
                      </div>
                      <div className="content-1">
                        <h1 style={{ left: "-2rem", position: "relative" }}>{strings[lang].proceso}</h1>
                        <p className="font_20" style={{ textAlign: "left", padding: "1rem" }}>
                          {strings[lang].productores}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="SeccionEmpresas">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 mb-1">
                      <div className="seccion_titulo">
                        <img src="./assets/imgs/home/linea2.png" className="linea1" />
                        <h1>{strings[lang].home.empresas}</h1>
                        <img src="./assets/imgs/home/linea1.png" className="linea2" />
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-CANAVERAL.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-SANTA-TERESA.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-VEROES.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-ROBLE.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-QUIMERA.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-PAMPERO.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-OCUMARE.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-DIPLOMATICO.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-CARUPANO.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-CALAZAN.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-CACIQUE.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-CABALLO-VIEJO.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-BUCARE.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-BODEGA-1800.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-MARCAS-BARRICA.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div>
                              <img
                                src="./assets/imgs/home/LOGO-ESTELAR.png"
                                className="d-block w-1 img_marcas"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="prev"
                        >
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="next"
                        >
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                  </div>
                </div>
                <br />
                <br />
              </div>

              {/* <div className="SeccionMaestrosRoneros">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12" className="titulo" style={{ marginBottom: "2rem" }}>
                      <div className="titulo">
                        <img src="./assets/imgs/home/linea2.png" className="linea1" />
                        <h1>{strings[lang].maestrosRoneros}</h1>
                        <img src="./assets/imgs/home/linea1.png" className="linea2" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img className="zoom" src="./assets/imgs/home/m_CARMEN-LOPEZ.png" style={{ maxWidth: "100%" }} />
                    </div>
                    <div className="col-md-3">
                      <img className="zoom" src="./assets/imgs/home/m_TITO-CORDERO.png" style={{ maxWidth: "100%" }} />
                    </div>
                    <div className="col-md-3">
                      <img className="zoom" src="./assets/imgs/home/m_NESTRO-ORTEGA.png" style={{ maxWidth: "100%" }} />
                    </div>
                    <div className="col-md-3">
                      <img className="zoom" src="./assets/imgs/home/m_GIOGIO-MELIS.png" style={{ maxWidth: "100%" }} />
                    </div>
                    <div className="col-md-12" style={{ marginTop: "2rem" }}>
                      <img src="./assets/imgs/home/mesa-maestros.png" style={{ maxWidth: "100%" }} />
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </div> */}

              <div className="SeccionNoticias">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 mb-5">
                      <div className="titulo">
                        <img src="./assets/imgs/home/linea2.png" style={{ height: "8px" }} />
                        <h1>{strings[lang].noticias}</h1>
                        <img src="./assets/imgs/home/linea1.png" style={{ height: "8px", marginLeft: "8px" }} />
                      </div>
                    </div>

                    <Skeleton loading={dataNoticiasLoading} active>
                      {dataNoticias.circulo &&
                        dataNoticias.circulo.length > 0 &&
                        dataNoticias.circulo.map((noticia) => {
                          const imageSrc = `data:image/${noticia.image_extension};base64,${noticia.image_base64}`;

                          return (
                            <Link
                              href={{
                                pathname: `/noticias/${noticia.url}`,
                                query: { lang },
                              }}
                            >
                              <div className="col-md-4 cursor-pointer hover-notice-home" key={noticia.id}>
                                <br />
                                <div className="mb-4 text-center">
                                  <h3>{noticia.title}</h3>
                                </div>
                                <div className="noticias_img">
                                  <img src={imageSrc} style={{ maxWidth: "90%" }} alt={noticia.title} />
                                </div>

                                <div className="mt-4 text-center noticias_cuadro">{noticia.summary}</div>
                              </div>
                            </Link>
                          );
                        })}
                    </Skeleton>
                  </div>
                </div>

                <div className="container mt-5">
                  <Skeleton loading={dataNoticiasLoading} active>
                    {dataNoticias.cuadro && dataNoticias.cuadro.length > 0 && (
                      <div className="row">
                        <div className="col-md-6 ">
                          {dataNoticias.cuadro[0] && (
                            <Link
                              href={{
                                pathname: `/noticias/${dataNoticias.cuadro[0].url}`,
                                query: { lang },
                              }}
                            >
                              <img
                                alt={dataNoticias.cuadro[0].title}
                                src={`data:image/${dataNoticias.cuadro[0].image_extension};base64,${dataNoticias.cuadro[0].image_base64}`}
                                className="post_img_principal cursor-pointer hover-notice-home"
                              />
                            </Link>
                          )}
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-12 mb-4">
                              {dataNoticias.cuadro[1] && (
                                <Link
                                  href={{
                                    pathname: `/noticias/${dataNoticias.cuadro[1].url}`,
                                    query: { lang },
                                  }}
                                >
                                  <img
                                    alt={dataNoticias.cuadro[1].title}
                                    src={`data:image/${dataNoticias.cuadro[1].image_extension};base64,${dataNoticias.cuadro[1].image_base64}`}
                                    className="post_img_principal cursor-pointer hover-notice-home"
                                  />
                                </Link>
                              )}
                            </div>
                            <div className="col-md-12">
                              {dataNoticias.cuadro[2] && (
                                <Link
                                  href={{
                                    pathname: `/noticias/${dataNoticias.cuadro[2].url}`,
                                    query: { lang },
                                  }}
                                >
                                  <img
                                    alt={dataNoticias.cuadro[2].title}
                                    src={`data:image/${dataNoticias.cuadro[2].image_extension};base64,${dataNoticias.cuadro[2].image_base64}`}
                                    className="post_img_principal cursor-pointer hover-notice-home"
                                  />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-12 mb-4">
                              {dataNoticias.cuadro[3] && (
                                <Link
                                  href={{
                                    pathname: `/noticias/${dataNoticias.cuadro[3].url}`,
                                    query: { lang },
                                  }}
                                >
                                  <img
                                    alt={dataNoticias.cuadro[3].title}
                                    src={`data:image/${dataNoticias.cuadro[3].image_extension};base64,${dataNoticias.cuadro[3].image_base64}`}
                                    className="post_img_principal cursor-pointer hover-notice-home"
                                  />
                                </Link>
                              )}
                            </div>
                            <div className="col-md-12">
                              {dataNoticias.cuadro[4] && (
                                <Link
                                  href={{
                                    pathname: `/noticias/${dataNoticias.cuadro[4].url}`,
                                    query: { lang },
                                  }}
                                >
                                  <img
                                    alt={dataNoticias.cuadro[4].title}
                                    src={`data:image/${dataNoticias.cuadro[4].image_extension};base64,${dataNoticias.cuadro[4].image_base64}`}
                                    className="post_img_principal cursor-pointer hover-notice-home"
                                  />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Skeleton>
                </div>

                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center mt-5">
                      <a href="https://www.facebook.com/RondeVenezuela" target="_blank">
                        <img src="./assets/imgs/home/ICONO-FACEBOOK.png" className="iconos_abajo zoom" />
                      </a>
                      <img src="./assets/imgs/home/LINEA-REDES-1.png" className="linea1" />
                      <a href="https://www.instagram.com/rondevenezuela/" target="_blank">
                        <img src="./assets/imgs/home/ICONO-INSTAGRAM.png" className="iconos_abajo zoom" />
                      </a>
                      <img src="./assets/imgs/home/LINEA-REDES-2.png" className="linea1" />
                      <img src="./assets/imgs/home/ICONO-YOUTUBE.png" className="iconos_abajo zoom" />
                    </div>
                    <div className="col-md-12 text-center mt-5">@RONDEVENEZUELA</div>
                  </div>

                  <div style={{ textAlign: "center", marginTop: 50 }}>
                    <video style={{ width: "100%", maxWidth: "100%" }} controls src={strings[lang].videos.home}>
                      Your browser does not support the video tag.
                    </video>
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

            <div className="SectionMobile0 valida_desktop">
              <Row type="flex" justify="center" className="SectionMobile0">
                <Col xs={24}>
                  <img src="./assets/imgs/home/copa.jpg" style={{ maxWidth: "100%", marginTop: "58px" }} />
                </Col>
                <Col xs={22} className="text-center">
                  <br />
                  <h1 className="text-center">{strings[lang].home.pageTitle}</h1>
                  <p className="text-center font_20">{strings[lang].calidad}</p>
                  <img src="./assets/imgs/home/linea1.png" style={{ height: "8px" }} />
                  <br />
                  <br />
                </Col>
              </Row>
              <Row type="flex" justify="center" className="SectionMobile1">
                <Col xs={22}>
                  <br />
                  <h1>{strings[lang].elron1}</h1>
                  <p>
                    {strings[lang].melasa}
                    <br />
                    {strings[lang].aunque}
                  </p>
                  <img src="./assets/imgs/home/foto-ron.jpg" style={{ maxWidth: "100%" }} />
                  <br />
                  <br />
                </Col>
              </Row>
              <Row type="flex" justify="center" className="SectionMobile1">
                <Col xs={22}>
                  <h1>{strings[lang].proceso}</h1>
                  <p>{strings[lang].productores}</p>
                  <img src="./assets/imgs/home/foto-proceso.jpg" style={{ maxWidth: "100%" }} />
                  <br />
                  <br />
                </Col>
              </Row>

              <Row type="flex" justify="center" className="SectionMobile1">
                <Col xs={22}>
                  <div className="col-md-12 mb-1">
                    <div className="seccion_titulo_mobile">
                      <img src="./assets/imgs/home/linea2.png" className="linea1mobile" />
                      <h1>{strings[lang].home.empresas}</h1>
                      <img src="./assets/imgs/home/linea1.png" className="linea2mobile" />
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-CANAVERAL.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-SANTA-TERESA.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-VEROES.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-ROBLE.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-QUIMERA.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-PAMPERO.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-OCUMARE.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-DIPLOMATICO.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-CARUPANO.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-CALAZAN.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-CACIQUE.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-CABALLO-VIEJO.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-BUCARE.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-BODEGA-1800.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-MARCAS-BARRICA.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div>
                            <img
                              src="./assets/imgs/home/LOGO-ESTELAR.png"
                              className="d-block w-1 img_marcas"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators2"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators2"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                  <br />
                  <br />
                </Col>
              </Row>

              {/* <Row type="flex" justify="center" className="SectionMobile1" gutter={[10, 10]}>
                <Col xs={22}>
                  <div className="seccion_titulo_mobile">
                    <img src="./assets/imgs/home/linea2.png" className="linea1mobile" />
                    <h1 className="text-center">{strings[lang].maestrosRoneros}</h1>
                    <img src="./assets/imgs/home/linea1.png" className="linea2mobile" />
                  </div>
                </Col>
                <Col xs={11}>
                  <img src="./assets/imgs/home/m_CARMEN-LOPEZ.png" style={{ maxWidth: "100%" }} />
                </Col>
                <Col xs={11}>
                  <img src="./assets/imgs/home/m_TITO-CORDERO.png" style={{ maxWidth: "100%" }} />
                </Col>
                <Col xs={11}>
                  <img src="./assets/imgs/home/m_NESTRO-ORTEGA.png" style={{ maxWidth: "100%" }} />
                </Col>
                <Col xs={11}>
                  <img src="./assets/imgs/home/m_GIOGIO-MELIS.png" style={{ maxWidth: "100%" }} />
                </Col>
                <Col xs={22}>
                  <img src="./assets/imgs/home/mesa-maestros.png" style={{ maxWidth: "100%" }} />
                </Col>
              </Row> */}

              <Row type="flex" justify="center" className="SectionMobile1">
                <Col xs={22}>
                  <div className="seccion_titulo_mobile">
                    <img src="./assets/imgs/home/linea2.png" className="linea1mobile" />
                    <h1 className="text-center">{strings[lang].noticias}</h1>
                    <img src="./assets/imgs/home/linea1.png" className="linea2mobile" />
                  </div>
                </Col>
                <Col xs={22}>
                  <Row gutter={[10, 10]} type="flex" justify="center">
                    <Skeleton loading={dataNoticiasLoading} active>
                      {dataNoticias.circulo &&
                        dataNoticias.circulo.length > 0 &&
                        dataNoticias.circulo.map((noticia) => {
                          const imageSrc = `data:image/${noticia.image_extension};base64,${noticia.image_base64}`;

                          return (
                            <Link
                              href={{
                                pathname: `/noticias/${noticia.url}`,
                                query: { lang },
                              }}
                            >
                              <div className="col-md-4 cursor-pointer hover-notice-home" key={noticia.id}>
                                <div className="mb-4 text-center">
                                  <h3>{noticia.title}</h3>
                                </div>
                                <div className="noticias_img">
                                  <img src={imageSrc} style={{ maxWidth: "90%" }} alt={noticia.title} />
                                </div>

                                <div className="mt-4 text-center noticias_cuadro">{noticia.summary}</div>
                                <br />
                              </div>
                            </Link>
                          );
                        })}
                    </Skeleton>
                    <Skeleton loading={dataNoticiasLoading} active>
                      {dataNoticias.cuadro && dataNoticias.cuadro.length > 0 && (
                        <>
                          {dataNoticias.cuadro[0] && (
                            <Col span={24}>
                              <Link
                                href={{
                                  pathname: `/noticias/${dataNoticias.cuadro[0].url}`,
                                  query: { lang },
                                }}
                              >
                                <img
                                  alt={dataNoticias.cuadro[0].title}
                                  src={`data:image/${dataNoticias.cuadro[0].image_extension};base64,${dataNoticias.cuadro[0].image_base64}`}
                                  className="post_img_principal cursor-pointer hover-notice-home"
                                />
                              </Link>
                            </Col>
                          )}
                          {dataNoticias.cuadro[1] && (
                            <Col span={12}>
                              <Link
                                href={{
                                  pathname: `/noticias/${dataNoticias.cuadro[1].url}`,
                                  query: { lang },
                                }}
                              >
                                <img
                                  alt={dataNoticias.cuadro[1].title}
                                  src={`data:image/${dataNoticias.cuadro[1].image_extension};base64,${dataNoticias.cuadro[1].image_base64}`}
                                  className="post_img_principal cursor-pointer hover-notice-home"
                                />
                              </Link>
                            </Col>
                          )}
                          {dataNoticias.cuadro[2] && (
                            <Col span={12}>
                              <Link
                                href={{
                                  pathname: `/noticias/${dataNoticias.cuadro[2].url}`,
                                  query: { lang },
                                }}
                              >
                                <img
                                  alt={dataNoticias.cuadro[2].title}
                                  src={`data:image/${dataNoticias.cuadro[2].image_extension};base64,${dataNoticias.cuadro[2].image_base64}`}
                                  className="post_img_principal cursor-pointer hover-notice-home"
                                />
                              </Link>
                            </Col>
                          )}
                          {dataNoticias.cuadro[3] && (
                            <Col span={12}>
                              <Link
                                href={{
                                  pathname: `/noticias/${dataNoticias.cuadro[3].url}`,
                                  query: { lang },
                                }}
                              >
                                <img
                                  alt={dataNoticias.cuadro[3].title}
                                  src={`data:image/${dataNoticias.cuadro[3].image_extension};base64,${dataNoticias.cuadro[3].image_base64}`}
                                  className="post_img_principal cursor-pointer hover-notice-home"
                                />
                              </Link>
                            </Col>
                          )}
                          {dataNoticias.cuadro[4] && (
                            <Col span={12}>
                              <Link
                                href={{
                                  pathname: `/noticias/${dataNoticias.cuadro[4].url}`,
                                  query: { lang },
                                }}
                              >
                                <img
                                  alt={dataNoticias.cuadro[4].title}
                                  src={`data:image/${dataNoticias.cuadro[4].image_extension};base64,${dataNoticias.cuadro[4].image_base64}`}
                                  className="post_img_principal cursor-pointer hover-notice-home"
                                />
                              </Link>
                            </Col>
                          )}
                        </>
                      )}
                    </Skeleton>
                  </Row>
                </Col>
              </Row>

              <Row type="flex" justify="center" className="SectionMobile1">
                <Col xs={22} className="text-center">
                  <br />
                  <br />

                  <a href="https://www.facebook.com/RondeVenezuela" target="_blank">
                    <img src="./assets/imgs/home/ICONO-FACEBOOK.png" className="iconos_abajo_mobile" />
                  </a>
                  <a href="https://www.instagram.com/rondevenezuela/" target="_blank">
                    <img src="./assets/imgs/home/ICONO-INSTAGRAM.png" className="iconos_abajo_mobile" />
                  </a>

                  <img src="./assets/imgs/home/ICONO-YOUTUBE.png" className="iconos_abajo_mobile" />
                </Col>
                <Col xs={22} className="text-center">
                  <br />
                  <br />
                  @RONDEVENEZUELA
                </Col>
                <Col xs={22} className="text-center">
                  <div style={{ textAlign: "center", marginTop: 50 }}>
                    <video style={{ width: "100%", maxWidth: "100%" }} controls src={strings[lang].videos.home}>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Col>
              </Row>

              <Row type="flex" justify="center" className="SectionMobile1">
                <Col xs={22}></Col>
                <br />
                <br />
              </Row>
              <div className="container">
                <div className="row">
                  <div className="col-md-12" style={{ backgroundColor: "#3d2514" }}>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </>
        )}
      </div>

      <Modal visible={modalEdadVisible} footer={false} maskClosable={false} closable={false}>
        <div
          style={{
            backgroundImage: "url('/assets/imgs/home/fondoEdad2.png')",
            padding: "1rem",
            borderRadius: "5px",
            color: "#FFF",
            fontSize: "20px",
          }}
          className="text-center"
        >
          <div
            style={{
              backgroundImage: "url('/assets/imgs/home/fondoEdad1.png')",
              border: "1px solid #FFF",
              padding: "1rem",
              borderRadius: "5px",
            }}
          >
            <Row type="flex" justify="center">
              <Col span={24}>
                <img src="./assets/imgs/home/logo_blanco.png" style={{ height: "150px" }} />
                <br />
                <br />
              </Col>
              <Col span={24}>
                {strings[lang].validacionEdad.invita}

                <br />
                <br />
              </Col>
              <Col span={24}>
                <div
                  style={{
                    border: "1px solid #FFF",
                    borderRadius: "5px",
                    padding: "1rem",
                  }}
                >
                  {strings[lang].validacionEdad.eres}
                </div>
                <br />
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                {textoMayorEdad.trim() !== "" ? (
                  <p>{textoMayorEdad}</p>
                ) : (
                  <>
                    <h2>{strings[lang].validacionEdad.loEres}</h2>
                    <br />
                    <Button
                      size="large"
                      style={{
                        width: "60px",
                        color: "#582E10",
                        backgroundColor: "#FBF2E5",
                      }}
                      onClick={() => {
                        handleEdad("S");
                      }}
                    >
                      <strong>{strings[lang].validacionEdad.si}</strong>
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      size="large"
                      style={{
                        width: "60px",
                        color: "#582E10",
                        backgroundColor: "#FBF2E5",
                      }}
                      onClick={() => {
                        handleEdad("N");
                      }}
                    >
                      <strong>{strings[lang].validacionEdad.no}</strong>
                    </Button>
                  </>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </Modal>
    </>
  );
}
