import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import MenuDesktop from "./MenuDesktop";
import es from "./es";
import en from "./en";

export default function Home() {
  const router = useRouter();

  let lang = "es";
  if (router.query.lang === "en") {
    lang = "en";
  }
  const strings = { es, en };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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

        <title>{strings[lang].pageTitle}</title>
      </Head>

      <MenuDesktop />

      <div className="seccion1">
        <div
          className="container"
          style={{ position: "relative", top: "13rem", zIndex: 900 }}
        >
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
              <h1>{strings[lang].pageTitle}</h1>
              <div className="text-center">{strings[lang].calidad}</div>
              <div>&nbsp;</div>
              <img
                src="./assets/imgs/home/linea1.png"
                style={{ height: "8px" }}
              />
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
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

      <div className="seccion2">
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ display: "flex" }}>
              <div className="content-1">
                <h1 style={{ right: "-2rem", position: "relative" }}>
                  {strings[lang].elron}
                </h1>
                <p style={{ textAlign: "right", padding: "1rem" }}>
                  {strings[lang].melasa}
                  <br />
                  {strings[lang].aunque}
                </p>
              </div>
              <div style={{ flex: 55 }}>
                <img
                  src="./assets/imgs/home/foto-ron.jpg"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className="col-md-12" style={{ display: "flex" }}>
              <div style={{ flex: 55 }}>
                <img
                  src="./assets/imgs/home/foto-proceso.jpg"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="content-1">
                <h1 style={{ left: "-2rem", position: "relative" }}>
                  {strings[lang].proceso}
                </h1>
                <p style={{ textAlign: "left", padding: "1rem" }}>
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
              <div className="titulo">
                <img
                  src="./assets/imgs/home/linea2.png"
                  style={{ height: "8px" }}
                />
                <h1>{strings[lang].empresas}</h1>
                <img
                  src="./assets/imgs/home/linea1.png"
                  style={{ height: "8px" }}
                />
              </div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
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
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
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

      <div className="SeccionMaestrosRoneros">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              className="titulo"
              style={{ marginBottom: "2rem" }}
            >
              <div className="titulo">
                <img src="./assets/imgs/home/linea2.png" className="linea1" />
                <h1>{strings[lang].maestrosRoneros}</h1>
                <img src="./assets/imgs/home/linea1.png" className="linea2" />
              </div>
            </div>
            <div className="col-md-3">
              <img
                src="./assets/imgs/home/m_CARMEN-LOPEZ.png"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="col-md-3">
              <img
                src="./assets/imgs/home/m_TITO-CORDERO.png"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="col-md-3">
              <img
                src="./assets/imgs/home/m_NESTRO-ORTEGA.png"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="col-md-3">
              <img
                src="./assets/imgs/home/m_GIOGIO-MELIS.png"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="col-md-12" style={{ marginTop: "2rem" }}>
              <img
                src="./assets/imgs/home/mesa-maestros.png"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="SeccionNoticias">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-5" className="titulo">
              <div className="titulo">
                <img
                  src="./assets/imgs/home/linea2.png"
                  style={{ height: "8px" }}
                />
                <h1>{strings[lang].noticias}</h1>
                <img
                  src="./assets/imgs/home/linea1.png"
                  style={{ height: "8px" }}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-4 text-center">
                <h3>Los 80 años de un ron</h3>
              </div>
              <div className="noticias_img">
                <img
                  src="./assets/imgs/home/NOTICIAS-FOTO-BARRILES.png"
                  style={{ maxWidth: "90%" }}
                />
              </div>

              <div className="mt-4 text-center noticias_cuadro">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-4 text-center">
                <h3>Las delicias del monte</h3>
              </div>
              <div className="noticias_img">
                <img
                  src="./assets/imgs/home/NOTICIAS-FOTO-PAMPERO.png"
                  style={{ maxWidth: "90%" }}
                />
              </div>
              <div className="mt-4 text-center noticias_cuadro">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-4 text-center">
                <h3>Increiblemente estabamos</h3>
              </div>
              <div className="noticias_img">
                <img
                  src="./assets/imgs/home/NOTICIAS-FOTO-CARUPANO.png"
                  style={{ maxWidth: "90%" }}
                />
              </div>
              <div className="mt-4 text-center noticias_cuadro">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="./assets/imgs/home/FOTO-POST-REDES-PRINCIPAL.png"
                className="post_img_principal"
              />
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <img
                    src="./assets/imgs/home/FOTO-POST-REDES-SEGUNDA.png"
                    className="post_img_principal"
                  />
                </div>
                <div className="col-md-12">
                  <img
                    src="./assets/imgs/home/FOTO-POST-REDES-CUARTA.png"
                    className="post_img_principal"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <img
                    src="./assets/imgs/home/FOTO-POST-REDES-TERCERA.png"
                    className="post_img_principal"
                  />
                </div>
                <div className="col-md-12">
                  <img
                    src="./assets/imgs/home/FOTO-POST-REDES-QUINTA.png"
                    className="post_img_principal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mt-5">
              <img
                src="./assets/imgs/home/ICONO-FACEBOOK.png"
                className="iconos_abajo"
              />
              <img src="./assets/imgs/home/linea2.png" className="linea1" />
              <img
                src="./assets/imgs/home/ICONO-INSTAGRAM.png"
                className="iconos_abajo"
              />
              <img src="./assets/imgs/home/linea1.png" className="linea1" />
              <img
                src="./assets/imgs/home/ICONO-YOUTUBE.png"
                className="iconos_abajo"
              />
            </div>
            <div className="col-md-12 text-center mt-5">@RONDEVENEZUELA</div>
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

      <Footer />
    </div>
  );
}
