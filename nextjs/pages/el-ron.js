import Head from "next/head";
import { Row, Col } from "antd";
import css from "styled-jsx/css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";

const MapeoImagen1 = dynamic(
  () => {
    return import("../components/common/MapeoImagen1");
  },
  { ssr: false }
);

const stylesCss = css.global`
  .SeccionElRon1 {
    padding-top: 100px;
    background-color: #443421;
  }
  .SeccionDoc1 img {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .SeccionElRon2 {
    background-color: #443421;
    text-align: center;
  }

  .SectionMobile0 {
    background-color: #443421;
  }
  .SectionMobile1 {
    background-image: url("/assets/imgs/historia/FONDO-NUESTRA-HISTORIA-MOBILE.jpg");
  }
`;

export default function ElRon() {
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
          crossorigin="anonymous"
        ></script>

        <title>{strings[lang].elron.pageTitle}</title>
      </Head>

      <MenuDesktop />

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
                <h1>{strings[lang].elron.title}</h1>
                <img
                  src="./assets/imgs/home/linea1.png"
                  className="linea2"
                  style={{ maxHeight: "4px" }}
                />
              </div>

              <div className="valida_desktop">
                <h1 className="text-center">{strings[lang].elron.title}</h1>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SeccionElRon2 text-center">
        <MapeoImagen1 />

        {/* <img
          src="./assets/imgs/elrom/RON1.png"
          style={{ width: "1000px", maxWidth: "100%" }}

          
        /> */}
      </div>
      <div className="SeccionElRon2 text-center">
        <img
          src="./assets/imgs/elrom/RON2.png"
          style={{ width: "1000px", maxWidth: "100%" }}
        />
      </div>
      <div className="SeccionElRon2 text-center">
        <img
          src="./assets/imgs/elrom/RON3.png"
          style={{ width: "1000px", maxWidth: "100%" }}
        />
      </div>
      <div className="SeccionElRon2 text-center">
        <img
          src="./assets/imgs/elrom/RON4.png"
          style={{ width: "1000px", maxWidth: "100%" }}
        />

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

      <Footer />
    </div>
  );
}
