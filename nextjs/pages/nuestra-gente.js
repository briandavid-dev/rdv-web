import { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "./Footer";
import MenuDesktop from "./MenuDesktop";
import { useRouter } from "next/router";
import es from "./es";
import en from "./en";

export default function NuestraGente() {
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
                  <h1>Cuerpo y alma</h1>
                  <img
                    src="./assets/imgs/home/linea1.png"
                    className="linea2"
                    style={{ maxHeight: "4px" }}
                  />
                </div>
                <p className="font_20 text-justify" style={{ lineHeight: 2 }}>
                  Cuando se habla del Ron de Venezuela no se hace referencia a
                  fórmulas químicas secretas que le han dado premios y aplausos
                  en el mundo. En cada botella está encerrado el trabajo de
                  hombres del campo que cuidan la caña que es única y de la que
                  se sienten orgullosos. A las tradiciones ancestrales se suman
                  las tecnologías que aplican con expectativas para optimizar su
                  derivado, la melaza.
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
                  <br />
                  Están las anécdotas de quienes la extraen para luego legar a
                  las destilerías y vaciarla en eso grandes depósitos que la
                  custodian hasta convertirse en licor.
                </p>
                <p className="font_20 text-justify">
                  <br />
                  Están los maestros roneros cuyas narices son capaces de
                  percibir, a través del olor, el sabor. De olfato privilegiado,
                  que cuidan y protegen, estos maestros transmiten su pasión a
                  ese producto final que llega orgulloso a la copa.
                </p>
                <p className="font_20 text-justify">
                  <br />
                  En cada etiqueta también se suman proyectos comunitarios, la
                  solidaridad hacia la comunidad, el estímulo a los
                  emprendedores, el respaldo a las artes y fomento al deporte.
                  En fin, todo aquello que contribuya al desarrollo del país,
                  porque los hombres y mujeres del ron son Venezuela y trabajan
                  para ella.
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
                  <h1>Maestros Roneros</h1>
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
                <h4 className="titulo-maestro">
                  Maestra Ronera de Ron Carúpano
                </h4>
                <p className="font_20 text-justify">
                  Los rones de Destilería Carúpano tienen una magia adicional. Y
                  es que su creación depende de la única maestra ronera del
                  país: Carmen López de Bastidas, quien tiene 30 años
                  desarrollando los perfiles de los inigualables productos de
                  Destilería Carúpano.
                </p>
                <p className="font_20 text-justify">
                  Hoy en día Carmen López de Bastidas se ha ganado un lugar y
                  reconocimiento en la industria ya que conoce perfectamente
                  cómo seleccionar exclusivos alcoholes de carácter superior y
                  usar la más pura agua de los propios y fecundos manantiales de
                  Destilería Carúpano.
                </p>
                <p className="font_20 text-justify">
                  El compromiso de Carmen López de Bastidas se engrandece al
                  saber equilibrar la experiencia artesanal acumulada de muchos
                  años con el conocimiento de la más actual técnica de análisis
                  sensorial que les garantizan la singular calidad final a los
                  rones de Ron Carúpano.
                </p>
                <p className="font_20 text-justify">
                  En sus propias palabras, ser una maestra ronera significa
                  “tener la capacidad, la sensibilidad gustativa y olfativa al
                  igual que la dedicación para saber mezclar diferentes tipos de
                  rones con distintas añadas de envejecimiento para poder crear
                  productos de altísima calidad”.
                </p>
                <p className="font_20 text-justify">
                  Es la mezcla de sus conocimientos, experiencia y sensibilidad
                  femenina lo que da el toque especial a los rones añejos
                  Carúpano, y así sus sabores y aromas singulares son de una
                  calidad única, logrando despertar infinitas sensaciones en
                  quienes los prueban.
                </p>
              </div>
              <hr style={{ margin: "3rem 0 3rem 0" }} />

              <div className="col-md-4">
                <img
                  src="./assets/imgs/gente/m_TITO-CORDERO.png"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <h4 className="titulo-maestro">
                  Maestro Ronero de Ron Diplomático
                </h4>
                <p className="font_20 text-justify">
                  Tito Cordero se unió a Destilerías Unidas S.A. en 1988 (en ese
                  momento llamado Licorerías Unidas S.A.), la compañía
                  propietaria y productora de Ron Diplomático. Trabaja con la
                  marca desde su creación y ha adquirido a lo largo de los años
                  la experiencia y conocimientos necesarios para cumplir su
                  función actual: Maestro Ronero de Diplomático.
                </p>
                <p className="font_20 text-justify">
                  Asegura que Ron Diplomático es el resultado de la dedicación y
                  los esfuerzos del equipo que trabaja para la marca. Junto con
                  la gama Diplomático Tradición, Tito está particularmente
                  orgulloso de Diplomático Ambassador, ron Premium elaborado a
                  partir de las mejores reservas de ron de la destilería, que
                  destaca su experiencia, representando la máxima expresión de
                  su trabajo de toda la vida.
                </p>
                <p className="font_20 text-justify">
                  Además de su dedicación a la calidad de los rones Diplomático,
                  Tito también ha ayudado a la destilería a garantizar una
                  perfecta armonía entre la producción y el medio ambiente,
                  contribuyendo al proceso de certificación bajo los criterios
                  ambientales ISO 14001.
                </p>
                <p className="font_20 text-justify">
                  Tito también posee una variedad de premios de concursos
                  internacionales para la marca Diplomático como: "Maestro
                  Ronero del año", en los London Rum Barrel Awards en 2011 y
                  2013, y "Mejor Máster Blender del mundo", en la Conferencia
                  Internacional de Ron de Madrid en 2014.
                </p>
                <p className="font_20 text-justify">
                  Como Maestro Ronero, su esfuerzo se enfoca en crear un arte
                  que todos puedan disfrutar: el arte del Ron Diplomático.
                </p>
              </div>
              <hr style={{ margin: "3rem 0 3rem 0" }} />

              <div className="col-md-4">
                <img
                  src="./assets/imgs/gente/m_GIOGIO-MELIS.png"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <h4 className="titulo-maestro">
                  Maestro Ronero de Ron Robles{" "}
                </h4>
                <p className="font_20 text-justify">
                  Giorgio Melis, maestro ronero de reconocida trayectoria y más
                  de 50 años de experiencia, es el responsable de las excelentes
                  notas y atributos que distinguen a Ron Roble Viejo®.
                </p>
                <p className="font_20 text-justify">
                  Ingeniero Químico egresado de la Universidad Central de
                  Venezuela en el año 1966. En 1967 comienza su carrera
                  profesional en la producción de rones venezolanos, labor que
                  continúa hasta el día de hoy demostrando su incansable
                  compromiso con la excelencia.
                </p>
                <p className="font_20 text-justify">
                  Su constancia y arduo trabajo para la creación de rones
                  excepcionales rinden frutos en la obtención de múltiples
                  reconocimientos otorgados a Ron Roble Viejo® en las
                  principales ferias internacionales de Madrid, Barcelona, Nueva
                  York, San Francisco, Ciudad de México, Tokio, Praga, Berlín y
                  Roma.
                </p>
              </div>
              <hr style={{ margin: "3rem 0 3rem 0" }} />

              <div className="col-md-4">
                <img
                  src="./assets/imgs/gente/m_NESTRO-ORTEGA.png"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <h4 className="titulo-maestro">
                  Maestro Ronero de Ron Santa Teresa
                </h4>
                <p className="font_20 text-justify">
                  Néstor Ortega es considerado como uno de los mejores Maestros
                  Roneros del mundo y ha sido ganador, en dos oportunidades, del
                  reconocimiento como “Best Rum – Maker”: por el Congreso
                  Internacional del Ron en Madrid (2012) y por la D.O.C. Ron de
                  Venezuela (2016); Ortega representa la experticia, la maestría
                  y madurez de los rones de Santa Teresa.
                </p>
                <p className="font_20 text-justify">
                  Néstor es Ingeniero Químico y tiene una trayectoria de 40 años
                  en Ron Santa Teresa. Ortega ha sido pieza clave en el
                  desarrollo de blends únicos que le han atribuido a Santa
                  Teresa su reconocimiento mundial. Su experticia y conocimiento
                  en el arte de la destilación, formulación y añejamiento; y una
                  cuidadosa selección de la mejor materia prima, permitieron que
                  Néstor creara los mejores alcoholes que, posteriormente, lo
                  convierten en el mejor ron del mundo.
                </p>
                <p className="font_20 text-justify">
                  Su rigurosa metodología y experiencia en diferentes áreas lo
                  han hecho cuidar con especial interés cada parte del proceso
                  de los añejos de Santa Teresa, garantizando el balance
                  perfecto de las mezclas y otorgándoles el perfil sensorial
                  único de nuestros líquidos (ron con carácter: seco y
                  balanceado).
                </p>
                <p className="font_20 text-justify">
                  Como parte de su legado, Néstor Ortega fue quién creó la
                  Bodega de Solera y ha sido el responsable del desarrollo de la
                  mayoría de las marcas que hoy forman parte del portafolio de
                  Santa Teresa.
                </p>
                <p className="font_20 text-justify">
                  Su compromiso y su afán por generar productos diferenciadores,
                  junto a los valores de la marca y la familia Vollmer, hacen
                  que Néstor no tome atajos, sino que dedique el tiempo
                  necesario para desarrollar blends sin valerse de aditivos o
                  productos químicos de la manera más artesanal y natural
                  posible, para obtener los resultados deseados.
                </p>
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
                <h1> Un nombre con varios apellidos </h1>
                <img
                  src="./assets/imgs/home/linea1.png"
                  className="linea2"
                  style={{ maxHeight: "4px" }}
                />
              </div>

              <p className="font_20 text-justify">
                Ron de Venezuela es más que el nombre de un producto. Representa
                la labor combinada de mucha gente que van sumando esfuerzos
                hasta alcanzar el resultado definitivo, que en este caso es el
                ron.
              </p>
              <p className="font_20 text-justify">
                Amparado en la Denominación de Origen Controlada, cada
                destilería establece sus propios parámetros pero coinciden en la
                búsqueda de la calidad, en alcanzar su propia identidad y al
                mismo tiempo cobijarse, gracias a su calidad, bajo una
                nacionalidad, la venezolana.
              </p>
              <p className="font_20 text-justify">
                En el nombre de Venezuela se cobijan empresas que han hecho de
                la excelencia su norte y del prestigio su denominación común.
                Allí radica la diferencia que se ha convertido en
                reconocimientos para catapultar nuestro ron como el mejor del
                mundo.
              </p>

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
