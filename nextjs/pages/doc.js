import Head from "next/head";
import Footer from "./Footer";
import MenuDesktop from "./MenuDesktop";

export default function Doc() {
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

        <title>D.O.C. | Ron de Venezuela</title>
      </Head>

      <MenuDesktop />

      <div className="SeccionDoc0">
        <div className="SeccionDoc1">
          <img
            src="./assets/imgs/doc/BARRIL-LETRA-D.png"
            style={{ maxWidth: "200px" }}
          />
          <img
            src="./assets/imgs/doc/BARRIL-LETRA-O.png"
            style={{ maxWidth: "200px" }}
          />
          <img
            src="./assets/imgs/doc/BARRIL-LETRA-C.png"
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div className="SeccionDoc2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="seccion_titulo text-center">
                  <img
                    src="./assets/imgs/home/linea2.png"
                    className="linea1"
                    style={{ maxHeight: "4px" }}
                  />
                  <h1>
                    Denominación
                    <br />
                    de Origen Controlado
                  </h1>
                  <img
                    src="./assets/imgs/home/linea1.png"
                    className="linea2"
                    style={{ maxHeight: "4px" }}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <h3 className="titulo-maestro">¿Qué es?</h3>
                <p className="font_20 text-justify">
                  La Denominación de Origen Controlada es una indicación
                  geográfica utilizada en un producto que tiene un origen
                  geográfico concreto, cuyas cualidades, reputación y
                  características se deben esencialmente a su lugar de origen.
                  Su calidad o características se deben exclusiva o
                  esencialmente al medio geográfico, comprendiendo factores
                  naturales, culturales y humanos.
                </p>
                <p className="font_20 text-justify">
                  Pero no solo se trata de geografía, sino de gente que con sus
                  manos siembra la caña, la cosecha, fermenta, destila y
                  envejece.
                </p>
                <br />
                <br />
              </div>
              <div className="col-md-6">
                <h3 className="titulo-maestro">¿Por qué existe?</h3>
                <p className="font_20 text-justify" style={{ lineHeight: 2 }}>
                  La Denominación de Origen Controlada regula y protege esas
                  características propias de un determinado producto, exigiendo
                  que se cumplan los procesos de fabricación y se utilicen las
                  materias primas exactas.
                </p>
                <p className="font_20 text-justify" style={{ lineHeight: 2 }}>
                  Esta regulación y entramado de normas garantizan al mundo que
                  un producto es único según su terruño.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="./assets/imgs/doc/FOTO-BODEGA-BARRICAS.png"
                  style={{ maxWidth: "80%" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 SeccionDocNacimiento">
                <h3 className="titulo-maestro">Acta de nacimiento</h3>
                <p className="font_20 text-justify">
                  En el boletín del Servicio Autónomo de la Propiedad
                  Intelectual (SAPI) N° 459 del 4 de noviembre de 2003 se
                  publicó que la Denominación Ron de Venezuela es una
                  Denominación de Origen del Estado venezolano para aplicarse a
                  la bebida alcohólica de ron y que sólo podrá aplicarse en el
                  concepto exacto de ron dado por las normas COVENIN, a
                  beneficio de los productores que agrupa la Cámara de la
                  Industria Venezolana de Especies Alcohólicas (CIVEA) todo ello
                  por haber cumplido con lo exigido en los artículos 201, 202,
                  203 y 204 de la decisión 486 de la Comunidad Andina de
                  Naciones.
                </p>
                <p className="font_20 text-justify">
                  De acuerdo al acta de la asamblea general celebrada en Caracas
                  el 4 de junio de 2019, los miembros de la Cámara de la
                  Industria Venezolana de Especies Alcohólicas (CIVEA)
                  expresaron su conformidad de que el control y la titularidad
                  de la Denominación de Origen Controlada Ron de Venezuela
                  recayera a partir de la citada fecha en la Asociación Civil
                  Fondo para la Promoción del Ron de Venezuela (FONPRONVEN). De
                  esta manera CIVEA traspasó la titularidad, control, difusión,
                  promoción y otras acciones vinculadas a la Denominación de
                  Origen Controlada Ron de Venezuela a FONPRONVEN.
                </p>
                <p className="font_20 text-justify">
                  El Fondo para la Promoción del Ron de Venezuela se creó en
                  2009 y desde sus inicios ha tenido como objetivo velar porque
                  se cumplan los requisitos de la D.O.C Ron de Venezuela,
                  promocionarla nacional e internacionalmente como producto
                  bandera del país, así como promoverlo a través de la ruta
                  turística Ron de Venezuela.
                </p>
                <p className="font_20 text-justify">
                  En agosto de 2019 el SAPI ratificó la Denominación de Origen
                  Controlada que fue otorgada en 2003 según Resolución No. 798
                  del Servicio Autónomo de Propiedad Intelectual el 04 de
                  noviembre de 2003. Esta actualización permite seguir
                  protegiendo legalmente al ron venezolano en los principales
                  mercados de exportación y en el ámbito nacional.
                </p>
              </div>

              <div className="col-md-12">
                <h3 className="titulo-maestro">Organismo regulador</h3>
                <p className="font_20 text-justify">
                  Es el órgano técnico encargado de controlar y certificar el
                  cumplimiento de las condiciones de calidad asociadas a la
                  Denominación de Origen Controlada Ron de Venezuela, así como
                  la generación de normativas necesarias para la verificación de
                  la D.O.C. y evaluación para la admisión de nuevos miembros.
                </p>
                <h4 className="titulo-maestro">Funciones:</h4>
                <p className="font_20 text-justify">
                  <ol type="a" className="font_20">
                    <li>
                      Recopilar los usos, buenas prácticas y las condiciones de
                      calidad aplicables a la Denominación de Origen Controlada
                      “Ron de Venezuela
                    </li>
                    <li>
                      Certificar que las empresas que así lo hayan solicitado,
                      cuenten con las capacidades y condiciones que le permitan
                      el uso de la Denominación de Origen Controlada “Ron de
                      Venezuela”{" "}
                    </li>
                    <li>
                      Llevar un registro actualizado de las empresas inscritas y
                      aprobadas para hacer uso de la Denominación de Origen “Ron
                      de Venezuela”, así como centrales azucareros, destilerías
                      de alcohol y empresas productoras de ron con bodegas de
                      añejamiento
                    </li>
                    <li>
                      Velar mediante auditorias bi-anuales de post certificación
                      que las condiciones bajo las cuales se autorizó el uso de
                      la Denominación de Origen “Ron de Venezuela” se mantengan
                      en el tiempo.{" "}
                    </li>
                    <li>
                      Ejercer el control sobre la Denominación de Origen “Ron de
                      Venezuela”, adoptando medidas y recomendaciones en caso de
                      uso inadecuado de tal Denominación, ya sea por uno de sus
                      miembros autorizados o por cualquier tercero
                    </li>
                  </ol>
                </p>
                <h4 className="titulo-maestro">Organización:</h4>
                <p className="font_20 text-justify">
                  El Consejo Regulador contará con una Junta y con un Consejo
                  Técnico
                </p>
                <p className="font_20 text-justify">
                  La Junta del Consejo Regulador estará integrado por:
                </p>
                <ul className="font_20">
                  <li>Dos maestros roneros miembros del Consejo Técnico</li>
                  <li>
                    Un representante de la asociación civil FONDONORMA o empresa
                    dedicada a auditorías de calidad
                  </li>
                  <li>
                    Un representante de organizaciones gubernamentales,
                    académicas, científicas y culturales
                  </li>
                  <li>El Gerente General de FONPRONVEN.</li>
                </ul>
                <p className="font_20 text-justify">
                  El Consejo Técnico es el órgano de consulta de la Junta del
                  Consejo Regulador, que garantizará además la objetividad de
                  sus decisiones y está conformado por los maestros roneros
                  certificados por el Consejo Regulador
                </p>
                {/* <!--           <h4 className="titulo-maestro">Regulaciones:</h4>
          <p className="font_20 text-justify">
          aaaa
          </p> --> */}
                <br />
                <br />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
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

      <Footer />
    </div>
  );
}
