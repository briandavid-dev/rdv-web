import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";

export default function QuienesSomos() {
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

        <title>{strings[lang].quienes.pageTitle}</title>
      </Head>

      <MenuDesktop />

      <div className="SeccionCopa">
        <div style={{ position: "relative" }}>
          <img
            src="./assets/imgs/quienessomos/QUIENES-SOMOS-IMAGEN-1.jpg"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>

      <div className="SeccionRon">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="seccion_titulo">
                <img src="./assets/imgs/home/linea2.png" className="linea1" />
                <h1>{strings[lang].quienes.title1}</h1>
                <img src="./assets/imgs/home/linea1.png" className="linea2" />
              </div>
            </div>
            <div className="col-md-6 font_20" style={{ textAlign: "justify" }}>
              {strings[lang].quienes.parrafo1}
            </div>
            <div className="col-md-6 font_20" style={{ textAlign: "justify" }}>
              {strings[lang].quienes.parrafo2}
            </div>
            <div className="col-md-12">
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="./assets/imgs/quienessomos/ICONO-SOL.png"
                  style={{ maxWidth: "250px", margin: "2rem" }}
                />
                <img
                  src="./assets/imgs/quienessomos/ICONO-HOMBRE.png"
                  style={{ maxWidth: "250px", margin: "2rem" }}
                />
                <img
                  src="./assets/imgs/quienessomos/ICONO-CANA-DE-AZUCAR.png"
                  style={{ maxWidth: "250px", margin: "2rem" }}
                />
              </div>
              <div>
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="col-md-6" style={{ textAlign: "center" }}>
              <img
                src="./assets/imgs/quienessomos/FOTO-TRAGO.png"
                style={{ maxWidth: "100%", maxHeight: "600px" }}
              />
            </div>
            <div className="col-md-6" style={{ textAlign: "right" }}>
              <div>
                <div className="titulo">
                  <img
                    src="./assets/imgs/home/linea1.png"
                    style={{ height: "8px", marginRight: "110px" }}
                  />
                  <h1>{strings[lang].quienes.quienes}</h1>
                  <img src="./assets/imgs/home/linea1.png" />
                </div>
              </div>
              <br />

              <p className="font_20">{strings[lang].quienes.elfondo1}</p>
              <br />

              <p className="font_20">{strings[lang].quienes.elfondo2}</p>
            </div>
            <div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="SeccionRon2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="font_20" style={{ textAlign: "justify" }}>
                {strings[lang].quienes.tambien}
              </p>
              <br />
              <p className="font_20" style={{ textAlign: "justify" }}>
                {strings[lang].quienes.integran}
              </p>
            </div>
            <div className="col-md-6">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="./assets/imgs/quienessomos/FOTO-BARIICA.png"
                  style={{ maxWidth: "100%", maxHeight: "500px" }}
                />
              </div>
            </div>
            <div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="SeccionRon3 font_20 text_justify">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-12">
                <div>
                  <img
                    src="./assets/imgs/home/linea1.png"
                    style={{ height: "8px", marginRight: "110px" }}
                  />
                  <h1>{strings[lang].quienes.mision}</h1>
                  <br />
                  <p>{strings[lang].quienes.promover}</p>
                </div>
                <br />
              </div>
              <div className="col-md-12">
                <div>
                  <img
                    src="./assets/imgs/home/linea1.png"
                    style={{ height: "8px", marginRight: "110px" }}
                  />
                  <h1>{strings[lang].quienes.vision}</h1>
                  <br />
                  <p>{strings[lang].quienes.vision1}</p>
                </div>
                <br />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  src="./assets/imgs/home/linea1.png"
                  style={{ height: "8px", marginRight: "110px" }}
                />
                <h1>{strings[lang].quienes.valores}</h1>
                <br />
                <p>{strings[lang].quienes.entusiasmo}</p>
                <p>{strings[lang].quienes.entusiasmo1}</p>
                <br />

                <p>{strings[lang].quienes.profesionalismo}</p>
                <p>{strings[lang].quienes.profesionalismo1}</p>
                <br />

                <p>{strings[lang].quienes.colaboracion}</p>
                <p>{strings[lang].quienes.colaboracion1}</p>
                <br />
              </div>
              <br />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ backgroundColor: "#3d2514" }}>
              <br />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
