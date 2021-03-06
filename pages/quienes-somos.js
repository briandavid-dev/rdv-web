import { useEffect, useState } from "react";
import Head from "next/head";
import { Row, Col, Skeleton } from "antd";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";
import ApiAboutus from "../services/aboutus";

const stylesCss = css.global`
  .SeccionRon {
    padding-top: 2rem;
    background-color: #4e3c2d;
  }
  .SeccionRon2 {
    padding-top: 2rem;
    background-color: #62462c;
  }
  .SeccionRon3 {
    padding-top: 2rem;
    background-color: #63452d;
  }

  .SectionMobile0 {
    background-color: #4e3c2d;
  }
  .SectionMobile1 {
    background-image: url("./assets/imgs/home/fondoEmpresas.png");
  }
`;

export default function QuienesSomos() {
  const router = useRouter();
  let lang = "es";
  if (router.query.lang === "en") {
    lang = "en";
  }
  const strings = { es, en };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    es: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      title1: "",
      title2: "",
      title3: "",
      title4: "",
      title5: "",
      image_head: "",
      image_tre1: "",
      image_tre2: "",
      image_tre3: "",
      quienes1: "",
      quienes2: "",
    },
    en: {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      title1: "",
      title2: "",
      title3: "",
      title4: "",
      title5: "",
      image_head: "",
      image_tre1: "",
      image_tre2: "",
      image_tre3: "",
      quienes1: "",
      quienes2: "",
    },
  });

  useEffect(() => {
    const aboutusEsObj = { es: {} };
    const aboutusEnObj = { en: {} };

    setLoading(true);
    ApiAboutus.getAll()
      .then((response) => {
        const { codigo, results } = response.data;
        if (codigo === "1") {
          results.forEach((aboutus) => {
            if (aboutus.lang === "es") {
              aboutusEsObj.es[aboutus.name_section] = aboutus.content;
            } else if (aboutus.lang === "en") {
              aboutusEnObj.en[aboutus.name_section] = aboutus.content;
            }
          });
          setData({ ...data, ...aboutusEsObj, ...aboutusEnObj });
        } else {
          console.log("error", `service return code ${codigo}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
          crossOrigin="anonymous"
        ></script>

        <title>{strings[lang].quienes.pageTitle}</title>
      </Head>

      <MenuDesktop />

      <div className="valida_mobile font_20">
        <div className="SeccionCopa">
          <div style={{ position: "relative" }}>
            {/* <img src="./assets/imgs/quienessomos/QUIENES-SOMOS-IMAGEN-1.jpg" style={{ maxWidth: "100%" }} /> */}
            <img
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.image_head}`}
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>

        <div className="SeccionRon">
          <div className="container">
            <div className="row justify-content-center gx-5">
              <div className="col-md-12">
                <div className="seccion_titulo">
                  <img src="./assets/imgs/home/linea2.png" className="linea1" />
                  <Skeleton loading={loading} active>
                    {/* <h1>{strings[lang].quienes.title1}</h1> */}
                    <h1>{data[lang].title1}</h1>
                  </Skeleton>
                  <img src="./assets/imgs/home/linea1.png" className="linea2" />
                </div>
              </div>
              <div
                className="col-md-5 font_20"
                style={{ textAlign: "justify" }}
              >
                {/* {strings[lang].quienes.parrafo1} */}
                <Skeleton loading={loading} active>
                  {data[lang].text1}
                </Skeleton>
              </div>
              <div
                className="col-md-5 font_20"
                style={{ textAlign: "justify" }}
              >
                {/* {strings[lang].quienes.parrafo2} */}
                <Skeleton loading={loading} active>
                  {data[lang].text2}
                </Skeleton>
              </div>
              <div className="col-md-12">
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    // src="./assets/imgs/quienessomos/ICONO-SOL.png"
                    src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.image_tre1}`}
                    style={{ width: "250px", maxWidth: "100%", margin: "2rem" }}
                  />
                  <img
                    // src="./assets/imgs/quienessomos/ICONO-HOMBRE.png"
                    src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.image_tre2}`}
                    style={{ width: "250px", maxWidth: "100%", margin: "2rem" }}
                  />
                  <img
                    // src="./assets/imgs/quienessomos/ICONO-CANA-DE-AZUCAR.png"
                    src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.image_tre3}`}
                    style={{ width: "250px", maxWidth: "100%", margin: "2rem" }}
                  />
                </div>
                <div>
                  <br />
                </div>
              </div>
              <div className="col-md-5" style={{ textAlign: "center" }}>
                <img
                  // src="./assets/imgs/quienessomos/FOTO-TRAGO.png"
                  src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.quienes1}`}
                  style={{ maxWidth: "100%", maxHeight: "600px" }}
                />
              </div>
              <div className="col-md-5" style={{ textAlign: "right" }}>
                <div>
                  <div className="titulo">
                    <img
                      src="./assets/imgs/home/linea1.png"
                      style={{ height: "5px", marginRight: "110px" }}
                    />
                    {/* <h1>{strings[lang].quienes.quienes}</h1> */}
                    <Skeleton loading={loading} active>
                      <h1>{data[lang].title2}</h1>
                    </Skeleton>
                    <img
                      src="./assets/imgs/home/linea2.png"
                      style={{ height: "5px" }}
                    />
                  </div>
                </div>

                <p className="font_20">
                  {/* {strings[lang].quienes.elfondo1} */}
                  <Skeleton loading={loading} active>
                    {data[lang].text3}
                  </Skeleton>
                </p>

                <p className="font_20">
                  {/* {strings[lang].quienes.elfondo2} */}
                  <Skeleton loading={loading} active>
                    {data[lang].text4}
                  </Skeleton>
                </p>
              </div>
              <div>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="SeccionRon2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <Skeleton loading={loading} active>
                  <p className="font_20" style={{ textAlign: "justify" }}>
                    {/* {strings[lang].quienes.tambien} */}
                    {data[lang].text5}
                  </p>
                  <br />
                  <p className="font_20" style={{ textAlign: "justify" }}>
                    {/* {strings[lang].quienes.integran} */}
                    {data[lang].text6}
                  </p>
                </Skeleton>
              </div>
              <div className="col-md-5">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    // src="./assets/imgs/quienessomos/FOTO-BARIICA.png"
                    src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.quienes2}`}
                    style={{ maxWidth: "100%", maxHeight: "500px" }}
                  />
                </div>
              </div>
              <div>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="SeccionRon3 font_20 text_justify">
          <div className="container">
            <div className="row  justify-content-center gx-5">
              <div className="col-md-5">
                <div className="col-md-12">
                  <div>
                    <img
                      src="./assets/imgs/home/linea1.png"
                      style={{ height: "5px", marginRight: "110px" }}
                    />
                    <Skeleton loading={loading} active>
                      {/* <h1>{strings[lang].quienes.mision}</h1> */}
                      <h1>{data[lang].title3}</h1>
                      <br />
                      <p>
                        {/* {strings[lang].quienes.promover} */}
                        {data[lang].text7}
                      </p>
                    </Skeleton>
                  </div>
                  <br />
                </div>
                <div className="col-md-12">
                  <div>
                    <img
                      src="./assets/imgs/home/linea1.png"
                      style={{ height: "5px", marginRight: "110px" }}
                    />
                    <Skeleton loading={loading} active>
                      {/* <h1>{strings[lang].quienes.vision}</h1> */}
                      <h1>{data[lang].title4}</h1>
                      <br />
                      {/* <p>{strings[lang].quienes.vision1}</p> */}
                      <p>{data[lang].text8}</p>
                    </Skeleton>
                  </div>
                  <br />
                </div>
              </div>
              <div className="col-md-5">
                <div>
                  <img
                    src="./assets/imgs/home/linea1.png"
                    style={{ height: "5px", marginRight: "110px" }}
                  />
                  {/* <h1>{strings[lang].quienes.valores}</h1> */}
                  <Skeleton loading={loading} active>
                    <h1>{data[lang].title5}</h1>
                    <br />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data[lang].text9.replace(
                          /(?:\r\n|\r|\n)/g,
                          "<br />"
                        ),
                      }}
                    ></div>
                  </Skeleton>
                  {/* <p>{strings[lang].quienes.entusiasmo}</p>
                  <p>{strings[lang].quienes.entusiasmo1}</p>
                  <br />

                  <p>{strings[lang].quienes.profesionalismo}</p>
                  <p>{strings[lang].quienes.profesionalismo1}</p>
                  <br />

                  <p>{strings[lang].quienes.colaboracion}</p>
                  <p>{strings[lang].quienes.colaboracion1}</p>
                  <br /> */}
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
      </div>

      <div className="valida_desktop font_20">
        <Row type="flex" justify="center" className="SectionMobile0">
          <Col xs={24}>
            <img
              // src="./assets/imgs/quienessomos/QUIENES-SOMOS-IMAGEN-1.jpg"
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.image_head}`}
              style={{ maxWidth: "100%", marginTop: "58px" }}
            />
          </Col>
          <Col xs={22} className="text-center">
            <br />
            <div className="seccion_titulo_mobiles">
              {/* <img
                src="./assets/imgs/home/linea2.png"
                className="linea1mobile"
              /> */}
              <Skeleton loading={loading} active>
                {/* <h1>{strings[lang].quienes.title1}</h1> */}
                <h1>{data[lang].title1}</h1>
              </Skeleton>
              {/* <img
                src="./assets/imgs/home/linea1.png"
                className="linea2mobile"
              /> */}
            </div>
            <img src="./assets/imgs/home/linea1.png" className="linea2mobile" />
          </Col>
          <Col xs={22}>
            <p>
              {/* {strings[lang].quienes.parrafo1} */}
              <Skeleton loading={loading} active>
                {data[lang].text1}
              </Skeleton>
            </p>
            <p>
              {/* {strings[lang].quienes.parrafo2} */}
              <Skeleton loading={loading} active>
                {data[lang].text2}
              </Skeleton>
            </p>
            <div className="text-center">
              <img
                // src="./assets/imgs/quienessomos/ICONO-SOL.png"
                src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.image_tre1}`}
                style={{ maxWidth: "25%", margin: "0.5rem" }}
              />
              <img
                // src="./assets/imgs/quienessomos/ICONO-HOMBRE.png"
                src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.image_tre2}`}
                style={{ maxWidth: "25%", margin: "0.5rem" }}
              />
              <img
                // src="./assets/imgs/quienessomos/ICONO-CANA-DE-AZUCAR.png"
                src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.image_tre3}`}
                style={{ maxWidth: "25%", margin: "0.5rem" }}
              />
            </div>
            <br />
          </Col>
          <Col xs={22}>
            <img
              // src="./assets/imgs/quienessomos/FOTO-TRAGO.png"
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.quienes1}`}
              style={{ maxWidth: "100%", maxHeight: "600px" }}
            />
            <br />
            <br />
            <div className="seccion_titulo_mobile_">
              {/* <img
                src="./assets/imgs/home/linea2.png"
                className="linea1mobile"
              /> */}
              <h1 className="text-center_">
                {/* <h1>{strings[lang].quienes.quienes}</h1> */}
                <Skeleton loading={loading} active>
                  <h1>{data[lang].title2}</h1>
                </Skeleton>
              </h1>
              {/* <img
                src="./assets/imgs/home/linea1.png"
                className="linea2mobile"
              /> */}
            </div>
            <img src="./assets/imgs/home/linea1.png" className="linea2mobile" />
            <p className="font_20">
              {/* {strings[lang].quienes.elfondo1} */}
              <Skeleton loading={loading} active>
                {data[lang].text3}
              </Skeleton>
            </p>
            <p className="font_20">
              {/* {strings[lang].quienes.elfondo2} */}
              <Skeleton loading={loading} active>
                {data[lang].text4}
              </Skeleton>
            </p>
          </Col>
          <Col xs={22}>
            <img
              // src="./assets/imgs/quienessomos/FOTO-BARIICA.png"
              src={`${process.env.NEXT_PUBLIC_URL_API_RDV}/aboutus/image/${data[lang]?.quienes2}`}
              style={{ maxWidth: "100%", maxHeight: "500px" }}
            />
            <br />
            <br />
            <p>
              {/* {strings[lang].quienes.tambien} */}
              {data[lang].text5}
            </p>
            <p>
              {/* {strings[lang].quienes.integran} */}
              {data[lang].text6}
            </p>
            <br />
          </Col>
          <Col xs={22}>
            <img
              src="./assets/imgs/home/linea1.png"
              style={{ height: "3px" }}
            />
            {/* <h1>{strings[lang].quienes.mision}</h1> */}
            <h1>{data[lang].title3}</h1>
            <br />
            <p>
              {/* {strings[lang].quienes.promover} */}
              {data[lang].text7}
            </p>

            <br />

            <img
              src="./assets/imgs/home/linea1.png"
              style={{ height: "3px" }}
            />
            {/* <h1>{strings[lang].quienes.vision}</h1> */}
            <h1>{data[lang].title4}</h1>
            <br />
            {/* <p>{strings[lang].quienes.vision1}</p> */}
            <p>{data[lang].text8}</p>
            <br />

            <img
              src="./assets/imgs/home/linea1.png"
              style={{ height: "3px" }}
            />
            <Skeleton loading={loading} active>
              <h1>{data[lang].title5}</h1>
              <br />
              <div
                dangerouslySetInnerHTML={{
                  __html: data[lang].text9.replace(/(?:\r\n|\r|\n)/g, "<br />"),
                }}
              ></div>
            </Skeleton>
            {/* <h1>{strings[lang].quienes.valores}</h1>
            <br />
            <p>{strings[lang].quienes.entusiasmo}</p>
            <p>{strings[lang].quienes.entusiasmo1}</p>
            <br />

            <p>{strings[lang].quienes.profesionalismo}</p>
            <p>{strings[lang].quienes.profesionalismo1}</p>
            <br />

            <p>{strings[lang].quienes.colaboracion}</p>
            <p>{strings[lang].quienes.colaboracion1}</p> */}
            <br />
          </Col>
          <Col xs={22}></Col>
          <Col xs={22}></Col>
          <Col xs={22}></Col>

          <br />
          <br />
        </Row>

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
