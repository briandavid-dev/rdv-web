import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";

export default function ElRon() {
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

        <title>{strings[lang].elron.pageTitle}</title>
      </Head>

      <MenuDesktop />

      <div className="SeccionElRon1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="seccion_titulo">
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
            </div>
          </div>
        </div>
      </div>
      <div className="SeccionElRon2">
        <img
          src="./assets/imgs/elrom/RON1.png"
          style={{ width: "1000px", maxWidth: "100%" }}
        />
        <img
          src="./assets/imgs/elrom/RON2.png"
          style={{ width: "1000px", maxWidth: "100%" }}
        />
        <img
          src="./assets/imgs/elrom/RON3.png"
          style={{ width: "1000px", maxWidth: "100%" }}
        />
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
