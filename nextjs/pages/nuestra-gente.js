import Head from "next/head";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";

const stylesCss = css.global`
  .Seccion0Gente {
    background-image: url("/assets/imgs/gente/NUESTRA-GENTE-FONDO.jpg");
    background-size: 100%;
  }
  .Seccion1Gente {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export default function NuestraGente() {
  const router = useRouter();

  let lang = "es";
  if (router.query.lang === "en") {
    lang = "en";
  }
  const strings = { es, en };

  return (
    <div>
      <style jsx global>
        {stylesCss}
      </style>
      <Head>
        <meta charSet="UTF-8" />
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

        <title>{strings[lang].gente.pageTitle}</title>
      </Head>

      <MenuDesktop />

      <div className="Seccion0Gente">
        <div className="Seccion1Gente">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="seccion_titulo">
                  <img
                    src="./assets/imgs/home/linea2.png"
                    className="linea1"
                    style={{ maxHeight: "4px" }}
                  />
                  <h1>{strings[lang].gente.cuerpo.title}</h1>
                  <img
                    src="./assets/imgs/home/linea1.png"
                    className="linea2"
                    style={{ maxHeight: "4px" }}
                  />
                </div>
                <p className="font_20 text-justify" style={{ lineHeight: 2 }}>
                  {strings[lang].gente.cuerpo.parrafo1}
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="./assets/imgs/gente/FOTO-GRUPO-RON-DE-VENEZUELA.png"
                  style={{ width: "400px", maxWidth: "100%" }}
                />
              </div>

              <div className="col-md-12">
                <p className="font_20 text-justify">
                  {strings[lang].gente.cuerpo.parrafo2}
                </p>
                <p className="font_20 text-justify">
                  {strings[lang].gente.cuerpo.parrafo3}
                </p>
                <p className="font_20 text-justify">
                  {strings[lang].gente.cuerpo.parrafo4}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Seccion2Gente">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="seccion_titulo">
                  <img
                    src="./assets/imgs/home/linea2.png"
                    className="linea1"
                    style={{ maxHeight: "4px" }}
                  />
                  <h1>{strings[lang].gente.maestros.title}</h1>
                  <img
                    src="./assets/imgs/home/linea1.png"
                    className="linea2"
                    style={{ maxHeight: "4px" }}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <img
                  src="./assets/imgs/gente/m_CARMEN-LOPEZ.png"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="col-md-8">
                {strings[lang].gente.maestros.carmen}
              </div>
              <hr style={{ margin: "3rem 0 3rem 0" }} />

              <div className="col-md-4">
                <img
                  src="./assets/imgs/gente/m_TITO-CORDERO.png"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="col-md-8">
                {strings[lang].gente.maestros.tito}
              </div>
              <hr style={{ margin: "3rem 0 3rem 0" }} />

              <div className="col-md-4">
                <img
                  src="./assets/imgs/gente/m_GIOGIO-MELIS.png"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="col-md-8">
                {strings[lang].gente.maestros.giorgio}
              </div>
              <hr style={{ margin: "3rem 0 3rem 0" }} />

              <div className="col-md-4">
                <img
                  src="./assets/imgs/gente/m_NESTRO-ORTEGA.png"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="col-md-8">
                {strings[lang].gente.maestros.nestor}
              </div>
              <hr style={{ margin: "3rem 0 3rem 0" }} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="seccion_titulo">
                <img
                  src="./assets/imgs/home/linea2.png"
                  className="linea1"
                  style={{ maxHeight: "4px" }}
                />

                <h1> {strings[lang].gente.unnombre.titulo}</h1>
                <img
                  src="./assets/imgs/home/linea1.png"
                  className="linea2"
                  style={{ maxHeight: "4px" }}
                />
              </div>

              {strings[lang].gente.unnombre.parrafos}

              <br />
              <br />
              <br />
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

      <Footer />
    </div>
  );
}
