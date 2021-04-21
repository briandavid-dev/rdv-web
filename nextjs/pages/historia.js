import Head from "next/head";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";

const stylesCss = css.global`
  .SeccionHistoria1 {
    padding-top: 7rem;
    background-color: #4e3c2d;
  }
  .SeccionHistoria2 {
    padding-top: 2rem;
    background-color: #62462c;
  }
  .SeccionHistoria3 {
    padding-top: 2rem;
    background: linear-gradient(to top, #62462c 50%, #4e3c2d 50%);
  }
  .SeccionHistoria1 .titulo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 2rem 0;
  }
`;

export default function Historia() {
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

        <title>{strings[lang].historia.pageTitle}</title>
      </Head>

      <MenuDesktop />

      <div className="SeccionHistoria1">
        <div className="container">
          <div className="row">
            <div className="col-md-7 font_20 text-justify">
              <div className="seccion_titulo">
                <img
                  src="./assets/imgs/home/linea2.png"
                  className="linea1"
                  style={{ maxHeight: "4px" }}
                />
                <h1>{strings[lang].historia.titulo}</h1>
                <img
                  src="./assets/imgs/home/linea1.png"
                  className="linea2"
                  style={{ maxHeight: "4px" }}
                />
              </div>
              <p>{strings[lang].historia.parrafo1}</p>
            </div>
            <div className="col-md-5 font_20  text-center">
              <img
                src="./assets/imgs/historia/IMAGEN-COFRE.png"
                style={{ maxWidth: "80%" }}
              />
            </div>
            <div className="col-md-12 font_20 text-justify">
              <br />
              <br />
              <p>{strings[lang].historia.parrafo2}</p>
              <br />

              <p>{strings[lang].historia.parrafo3}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="SeccionHistoria3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="./assets/imgs/historia/HOMBRE-CAMPO-SIEMBRA.png"
                  style={{ maxWidth: "250px", margin: "2rem" }}
                />
                <img
                  src="./assets/imgs/historia/BARRICAS.png"
                  style={{ maxWidth: "250px", margin: "2rem" }}
                />
                <img
                  src="./assets/imgs/historia/HOMBRE-CAMPO-SIEMBRA.png"
                  style={{ maxWidth: "250px", margin: "2rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="SeccionHistoria2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 font_20 text-justify">
              <p>{strings[lang].historia.parrafo4}</p>
              <br />
              <p>{strings[lang].historia.parrafo5}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 font_20 text-center">
              <img
                src="./assets/imgs/historia/IMAGEN-TRAGO-CANA-DE-AZUCAR.png"
                style={{ maxWidth: "450px", margin: "2rem" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 font_20 text-justify">
              <p>{strings[lang].historia.parrafo6}</p>
              <br />
              <p>{strings[lang].historia.parrafo7}</p>
              <br />
              <p>{strings[lang].historia.parrafo8}</p>
              <br />
              <p>{strings[lang].historia.parrafo9}</p>
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
