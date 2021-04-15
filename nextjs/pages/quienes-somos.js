import Head from "next/head";
import Footer from "./Footer";
import MenuDesktop from "./MenuDesktop";

export default function QuienesSomos() {
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

        <title>Quiénes Somos | Ron de Venezuela</title>
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
                <h1>Ron de Venezuela</h1>
                <img src="./assets/imgs/home/linea1.png" className="linea2" />
              </div>
            </div>
            <div className="col-md-6 font_20" style={{ textAlign: "justify" }}>
              El Ron de Venezuela es un producto que representa no sólo la
              calidad de un suelo, sino el tesón de los hombres del campo que
              cultivan la caña de azúcar con la que se elabora la melaza, base
              de ron, y los expertos y profesionales que la destilan. El Ron de
              Venezuela es una bebida que se toma su tiempo para que el
              consumidor la disfrute.
            </div>
            <div className="col-md-6 font_20" style={{ textAlign: "justify" }}>
              La industria ronera venezolana no sólo genera dividendos para la
              Nación a través de impuestos y divisas sino que enriquece el
              prestigio del país con los múltiples reconocimientos
              internacionales otorgados por catadores y conocedores de un licor
              que ostenta, además, la Denominación de Origen Controlada Ron de
              Venezuela.
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
                  <h1>¿Quiénes somos?</h1>
                  <img src="./assets/imgs/home/linea1.png" />
                </div>
              </div>
              <br />

              <p className="font_20">
                El Fondo de Promoción del Ron de Venezuela FONPRONVEN se creó en
                el año 2008 con varias finalidades, unas de ellas la de velar
                por la calidad de los rones producidos en Venezuela y defender
                la autenticidad de esa bebida a fin de evitar violaciones a la
                propiedad intelectual a través de copias y adulteraciones.
              </p>
              <br />

              <p className="font_20">
                El Fondo estableció un Consejo Regulador que se encarga de
                realizar las auditorías a las marcas que poseen la Denominación
                de Origen Controlada para que todas las casas productoras
                mantengan la óptima calidad de sus rones.
              </p>
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
                FONPRONVEN también se enfoca en crear conciencia en el público
                para que conozca y aprecie el ron venezolano, identificado con
                los sellos distintivos del ron de Venezuela y avalado por la
                D.O.C. De esta manera se puede apreciar el producto y establecer
                diferencias con otros rones.
              </p>
              <br />
              <p className="font_20" style={{ textAlign: "justify" }}>
                FONPRONVEN lo integran directivos de las empresas productoras de
                rones en Venezuela: Alcoholes y Añejos Monagas, Alnova, Central
                de Licores Unidos de Venezuela C.A. (Celiveca), Complejo
                Industrial Licorero del Centro, Corporación Alcoholes del
                Caribe, Destilería Carúpano, Destilerías Unidas S.A (DUSA),
                Destilería Veroes, Diageo Venezuela, Industrias Bravo, Ron Santa
                Teresa y Rones del Caribe.
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
                  <h1>Misión</h1>
                  <br />
                  <p>
                    Promover nacional e internacionalmente el ron venezolano,
                    destacando como un valor agregado la Denominación de Origen
                    Controlada Ron de Venezuela, velar por el cumplimiento de
                    los requisitos que identifican los rones venezolanos y
                    porque conserven sus principales diferencias para que
                    continúen destacándose en el mundo.
                  </p>
                </div>
                <br />
              </div>
              <div className="col-md-12">
                <div>
                  <img
                    src="./assets/imgs/home/linea1.png"
                    style={{ height: "8px", marginRight: "110px" }}
                  />
                  <h1>Visión</h1>
                  <br />
                  <p>
                    Que la Denominación de Origen Controlada sea la marca que
                    identifique la óptima calidad de nuestros rones, agrupando
                    bajo esa etiqueta a los mejores del mundo. Destacar que la
                    D.O.C representa un valor agregado en los destilados
                    venezolanos que se identifican con el sello D.O.C Ron de
                    Venezuela.
                  </p>
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
                <h1>Valores de la organización</h1>
                <br />
                <p>Entusiasmo:</p>
                <p>
                  A través del conocimiento, la constancia y la tecnología hemos
                  sido capaces de alcanzar valores óptimos de calidad en el ron
                  de Venezuela y se ha logrado que este prestigio se mantenga en
                  el tiempo.
                </p>
                <br />

                <p>Profesionalismo:</p>
                <p>
                  Se persigue satisfacer las expectativas del mercado nacional e
                  internacional con altos estándares de calidad que determinan
                  el éxito y la competitividad a través del compromiso de
                  desarrollar el mejor ron del mundo.
                </p>
                <br />

                <p>Colaboración:</p>
                <p>
                  La institución busca unir esfuerzos y aportar lo mejor de cada
                  marca para desarrollar objetivos comunes, aumentar la
                  participación y el compromiso en la generación de ideas e
                  iniciativas que optimicen la calidad y los niveles de
                  competitividad.
                </p>
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
