import { useEffect, useState } from "react";
import Head from "next/head";
import { Card, Row, Col, Affix } from "antd";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";
import ApiNoticias from "../pagesServices/noticias";

const stylesCss = css.global``;

const PageNoticias = () => {
  const router = useRouter();

  let lang = "en";
  if (router.query.lang === "en") {
    lang = "en";
  } else {
    lang = "es";
  }

  const strings = { es, en };

  const [offsetTop, setOffsetTop] = useState(0);
  const [dataNoticias, setDataNoticias] = useState([]);

  const revisaHeigth = () => {
    const offsetHeight = document.querySelector(".calculateHeigth")
      .offsetHeight;
    setOffsetTop(offsetHeight - 450);
  };

  const getNoticiasListado = (lang) => {
    ApiNoticias.getNoticiasListado(lang)
      .then((response) => {
        console.log(`response`, response);
        const { codigo, results } = response.data;
        if (codigo === "1") {
          setDataNoticias(results);
          revisaHeigth();
        }
        if (codigo === "0") {
          console.log(`error `, codigo);
        }
      })
      .catch((error) => {
        console.log(`error`, error);
      });
  };

  useEffect(() => {
    revisaHeigth();

    if (window.location.href.includes("lang=es")) {
      getNoticiasListado("es");
    } else if (window.location.href.includes("lang=en")) {
      getNoticiasListado("en");
    }
  }, []);

  return (
    <>
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

        <title>{strings[lang].articulos.pageTitle}</title>
      </Head>
      <MenuDesktop />

      <div style={{ padding: "7rem 0 2rem 0 " }}>
        <Row gutter={[16, 16]} type="flex" justify="center" align="top">
          <Col xs={22} lg={14}>
            <Row className="font_20">
              <Col>
                <div className="calculateHeigth">
                  {dataNoticias.length > 0 && (
                    <Affix
                      offsetTop={-offsetTop}
                      // offsetBottom={100}
                    >
                      <h1>{dataNoticias[0].title}</h1>
                      <br />
                      <img
                        alt="example"
                        src={`data:image/${dataNoticias[0].image_extension};base64,${dataNoticias[0].image_base64}`}
                        // height={800}
                        width={800}
                        style={{ maxWidth: "100%" }}
                      />
                      <br />
                      <br />
                      {dataNoticias[0].content_html}
                    </Affix>
                  )}
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={11} lg={7}>
            {[100, 200, 300, 140, 158, 164].map((number) => (
              <>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Card.Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
                <br />
              </>
            ))}
          </Col>
        </Row>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ backgroundColor: "#3d2514" }}>
            <br />
            <br />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PageNoticias;
