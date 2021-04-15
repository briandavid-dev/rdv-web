import Head from "next/head";
import Footer from "./Footer";
import MenuDesktop from "./MenuDesktop";

export default function Home() {
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

        <title>Historia | Ron de Venezuela</title>
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
                <h1>Nuestra historia</h1>
                <img
                  src="./assets/imgs/home/linea1.png"
                  className="linea2"
                  style={{ maxHeight: "4px" }}
                />
              </div>
              <p>
                La historia del ron comenzó con la llegada de los europeos pues
                ellos trajeron la caña de azúcar que tuvo como primer domicilio
                la República Dominicana y como vecino al Mar Caribe. Esta planta
                formó parte del equipaje que acompañó a Cristóbal Colón, en su
                segundo viaje a América, en 1493.
              </p>
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
              <p>
                En la historia del ron los piratas también tienen su capítulo ya
                que trajeron a las Antillas una bebida que elaboraban a partir
                del guarapo de la caña de azúcar que llamaron Kill-Devil (mata
                diablo) o rumbellion, que significa tumulto. No se sabe si el
                nombre del ron se originó de esa palabra o del nombre científico
                de la caña de azúcar: Saccharum Officiarum. El primer documento
                donde se menciona data del 8 de julio de 1661. Fue emitido por
                el gobernador de Jamaica y en ese texto se le llamaba
                simplemente “rum”.
              </p>
              <br />

              <p>
                Dave Broom en su libro titulado Rum señala que: “Al principio el
                ron fue una bebida autóctona pensada para sirvientes”. En los
                siglos XVII y XVIII sirvió como moneda para comprar a los
                esclavos que trabajaban en los cañaverales. Hasta finales del
                siglo XVIII era la bebida preferida de los marinos. En 1693 un
                dominico estudioso del ron, el padre Jean-Baptiste Labat,
                perfeccionó el alambique y utilizó el método empleado para el
                coñac. El resultado revolucionó la industria del ron en las
                colonias francesas.
              </p>
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
              <p>
                Los piratas y filibusteros amaban el ron y en las islas se hizo
                omnipresente. El ponche de ron con especias se transformó en la
                bebida preferida de los marinos. Después entró a Inglaterra
                donde se tomaba caliente. Mientras ese ponche se extendía por
                Europa, el ron dejaba su pasado poco honorable y ascendía a
                otras clases sociales.
              </p>
              <br />
              <p>
                Venezuela destiló su propia historia que suma dos siglos de
                tradición. La caña de azúcar llegó a Venezuela con los
                conquistadores españoles, quienes la usaban para endulzar y
                hacer sus guarapos, predecesores del ron.
              </p>
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
              <p>
                Hay indicios de que la caña de azúcar llegó a Venezuela por
                Coro. En el siglo XVIII, “casi todos expresan que era el segundo
                fruto en estas tierras”, dice José Ángel Rodríguez en el libro
                Nuestra cultura gastronómica. Y donde hay azúcar, están sus
                bebidas. “Donde germinó el azúcar se destiló aguardiente”,
                recuerda el historiador.
              </p>
              <br />
              <p>
                El aguardiente prosperó en el siglo XVIII en Venezuela porque la
                colonia española, para proteger los vinos peninsulares, prohibió
                su elaboración. Ese antecedente permitió que la historia del ron
                en el país comenzara temprano, en el siglo XIX. A partir de
                1880, los altos derechos de importación y los bajos impuestos a
                la producción interna auparon su elaboración. Entonces, los
                rones de Carúpano consiguieron un lugar protagónico. Allí no
                sólo prosperó el ron común. También “el ron Viejo Carúpano”. Los
                destiladores guardaban el ron en barricas tomadas de vinos
                europeos a la espera de mejor oportunidad en los precios. Y allí
                se dieron cuenta lo bien que envejecían.
              </p>
              <br />
              <p>
                En el siglo XIX no sólo había ron en Carúpano, estado Sucre;
                sino también en Zulia, Miranda, Carabobo, Aragua. Yaracuy,
                Cojedes, Guárico, en los estados andinos y en la región capital
                de Venezuela. El ron se concentraba en los lugares urbanos,
                mientras el aguardiente prosperaba en los rurales.
              </p>
              <br />
              <p>
                Posteriormente surgieron otros nombres que se han ido
                consolidando en el país y se proyectan con una imagen sólida en
                el exterior porque ofrecen al consumidor algo más que calidad,
                en sus botellas hay historia. Una historia que alimentó un
                anecdotario que le dio al ron de Venezuela una trayectoria de
                más de dos siglos de tradición.
              </p>
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
