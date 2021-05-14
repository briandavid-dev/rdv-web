import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card, Row, Col, Affix, Skeleton } from "antd";
import css from "styled-jsx/css";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";
import ApiNoticias from "../pagesServices/noticias";

const stylesCss = css.global`
  .Section0 {
    background-image: url("./assets/imgs/home/fondoEmpresas.png");
  }
`;

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
  const [dataNoticia, setDataNoticia] = useState([]);
  const [dataNoticias, setDataNoticias] = useState([]);
  const [dataNoticiaLoading, setDataNoticiaLoading] = useState(false);
  const [dataNoticiasLoading, setDataNoticiasLoading] = useState(false);

  const revisaHeigth = () => {
    const offsetHeight =
      document.querySelector(".calculateHeigth").offsetHeight;
    setOffsetTop(offsetHeight - 440);
  };

  const getNoticiasListado = (lang) => {
    setDataNoticiasLoading(true);
    ApiNoticias.getNoticiasListado(lang)
      .then((response) => {
        const { codigo, results } = response.data;
        if (codigo === "1") {
          setDataNoticias(results);
        }
        if (codigo === "0") {
          //
        }
        setDataNoticiasLoading(false);
      })
      .catch((error) => {
        //
        setDataNoticiasLoading(false);
      });

    setDataNoticiaLoading(true);
    ApiNoticias.getNoticiasUltima(lang)
      .then((response) => {
        const { codigo, results } = response.data;
        if (codigo === "1") {
          setDataNoticia(results);
        }
        if (codigo === "0") {
          //
        }
        setDataNoticiaLoading(false);
      })
      .catch((error) => {
        //
        setDataNoticiaLoading(false);
      });
  };

  /*  useEffect(() => {
    if (window.location.href.includes("lang=es")) {
      getNoticiasListado("es");
    } else if (window.location.href.includes("lang=en")) {
      getNoticiasListado("en");
    }
  }, []); */

  useEffect(() => {
    if (window.location.href.includes("lang=es")) {
      getNoticiasListado("es");
    } else if (window.location.href.includes("lang=en")) {
      getNoticiasListado("en");
    }
  }, [lang]);

  useEffect(() => {
    revisaHeigth();
  }, [dataNoticia]);

  return (
    <>
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
          crossorigin="anonymous"
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

        <title>{strings[lang].articulos.pageTitle}</title>
      </Head>
      <MenuDesktop />

      <div className="valida_mobile font_20">
        <div style={{ padding: "7rem 0 0 0 " }} className="Section0">
          <Row gutter={[16, 16]} type="flex" justify="center" align="top">
            <Col xs={22} lg={14}>
              <Row className="font_20">
                <Col>
                  {dataNoticiaLoading && <Skeleton active />}

                  <div className="calculateHeigth">
                    {dataNoticia.length > 0 && (
                      <Affix
                        offsetTop={-offsetTop}
                        // offsetBottom={100}
                      >
                        <h1>{dataNoticia[0].title}</h1>
                        <br />
                        <img
                          alt="example"
                          src={`data:image/${dataNoticia[0].image_extension};base64,${dataNoticia[0].image_base64}`}
                          // height={800}
                          width={800}
                          style={{ maxWidth: "100%" }}
                        />
                        <br />
                        <br />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: dataNoticia[0].content_html,
                          }}
                        ></div>
                      </Affix>
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={11} lg={7}>
              <Skeleton loading={dataNoticiasLoading} active>
                {dataNoticias.map((noticia) => (
                  <>
                    <Link
                      href={{
                        pathname: `/noticias/${noticia.url}`,
                        query: { lang },
                      }}
                    >
                      <Card
                        hoverable
                        cover={
                          <img
                            alt={noticia.title}
                            src={`data:image/${noticia.image_extension};base64,${noticia.image_base64}`}
                          />
                        }
                      >
                        <Card.Meta
                          title={noticia.title}
                          description={noticia.summary}
                        />
                      </Card>
                    </Link>
                    <br />
                  </>
                ))}
              </Skeleton>
            </Col>
          </Row>
          <div className="container">
            <div className="row">
              <div className="col-md-12" style={{ backgroundColor: "#3d2514" }}>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="valida_desktop font_20 ">
        <Row type="flex" justify="center" className="Section0">
          <Col xs={22} style={{ marginTop: "58px" }}>
            <br />
            {dataNoticiaLoading && <Skeleton active />}
            {dataNoticia.length > 0 && (
              <>
                <h1>{dataNoticia[0].title}</h1>
                <br />
                <img
                  alt="example"
                  src={`data:image/${dataNoticia[0].image_extension};base64,${dataNoticia[0].image_base64}`}
                  // height={800}
                  width={800}
                  style={{ maxWidth: "100%" }}
                />
                <br />
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html: dataNoticia[0].content_html,
                  }}
                ></div>
              </>
            )}
          </Col>
          <Col xs={22}>
            <hr style={{ margin: "3rem 0 3rem 0" }} />

            <Skeleton loading={dataNoticiasLoading} active>
              {dataNoticias.map((noticia) => (
                <>
                  <Link
                    href={{
                      pathname: `/noticias/${noticia.url}`,
                      query: { lang },
                    }}
                  >
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={noticia.title}
                          src={`data:image/${noticia.image_extension};base64,${noticia.image_base64}`}
                        />
                      }
                    >
                      <Card.Meta
                        title={noticia.title}
                        description={noticia.summary}
                      />
                    </Card>
                  </Link>
                  <br />
                </>
              ))}
            </Skeleton>
          </Col>

          <div className="container">
            <div className="row">
              <div className="col-md-12" style={{ backgroundColor: "#3d2514" }}>
                <br />
              </div>
            </div>
          </div>
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default PageNoticias;
