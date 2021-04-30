import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { Card, Row, Col, Affix, Skeleton } from "antd";
import css from "styled-jsx/css";
import Footer from "../../components/Footer";
import MenuDesktop from "../../components/MenuDesktop";
import es from "../../lang/es";
import en from "../../lang/en";
import ApiNoticias from "../../pagesServices/noticias";

const stylesCss = css.global``;

const PageNoticia = () => {
  const [dataNoticia, setDataNoticia] = useState({
    title: "",
    image_base64: "",
    image_extension: "",
    content_html: "",
  });
  const [dataNoticias, setDataNoticias] = useState([]);
  const [dataNoticiaLoading, setDataNoticiaLoading] = useState(false);
  const [dataNoticiasLoading, setDataNoticiasLoading] = useState(false);

  const [offsetTop, setOffsetTop] = useState(0);

  const router = useRouter();
  const { url } = router.query;

  let lang = "en";
  if (router.query.lang === "en") {
    lang = "en";
  } else {
    lang = "es";
  }

  const strings = { es, en };

  const getNoticia = () => {
    if (url) {
      const url_ = url.replaceAll("-", " ");

      setDataNoticiaLoading(true);
      ApiNoticias.getNoticia(lang, url_)
        .then((response) => {
          const { codigo, results, mensaje } = response.data;
          if (codigo === "1") {
            setDataNoticia({
              title: results[0].title,
              image_base64: results[0].image_base64,
              image_extension: results[0].image_extension,
              content_html: results[0].content_html,
            });
          }
          if (codigo === "0") {
            console.log(`error`, mensaje);
          }
          setDataNoticiaLoading(false);
        })
        .catch((error) => {
          console.log(`error`, error);
          setDataNoticiaLoading(false);
        });

      setDataNoticiasLoading(true);
      ApiNoticias.getNoticiaExcepto(lang, url_)
        .then((response) => {
          const { codigo, results, mensaje } = response.data;
          if (codigo === "1") {
            setDataNoticias(results);
          }
          if (codigo === "0") {
            console.log(`error`, mensaje);
          }
          setDataNoticiasLoading(false);
        })
        .catch((error) => {
          console.log(`error`, error);
          setDataNoticiasLoading(false);
        });
    }
  };

  useEffect(() => {
    getNoticia();
  }, [url]);

  const revisaHeigth = () => {
    const offsetHeight = document.querySelector(".calculateHeigth")
      .offsetHeight;
    setOffsetTop(offsetHeight - 440);
  };

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

        <title>{dataNoticia.title}</title>
      </Head>

      <MenuDesktop />

      <div className="valida_mobile font_20">
        <div style={{ padding: "7rem 0 2rem 0 " }}>
          <Row gutter={[16, 16]} type="flex" justify="center" align="top">
            <Col xs={22} lg={14}>
              <Row className="font_20">
                <Col>
                  {dataNoticiaLoading && <Skeleton active />}

                  <div className="calculateHeigth">
                    {dataNoticia.title.trim() !== "" && (
                      <Affix
                        offsetTop={-offsetTop}
                        // offsetBottom={100}
                      >
                        <h1>{dataNoticia.title}</h1>
                        <br />
                        <img
                          alt="example"
                          src={`data:image/${dataNoticia.image_extension};base64,${dataNoticia.image_base64}`}
                          // height={800}
                          width={800}
                          style={{ maxWidth: "100%" }}
                        />
                        <br />
                        <br />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: dataNoticia.content_html,
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

      <div className="valida_desktop font_20 ">
        <Row type="flex" justify="center" className="Section0">
          <Col xs={22} style={{ marginTop: "58px" }}>
            <br />
            {dataNoticiaLoading && <Skeleton active />}
            {dataNoticia.title.trim() !== "" && (
              <>
                <h1>{dataNoticia.title}</h1>
                <br />
                <img
                  alt="example"
                  src={`data:image/${dataNoticia.image_extension};base64,${dataNoticia.image_base64}`}
                  // height={800}
                  width={800}
                  style={{ maxWidth: "100%" }}
                />
                <br />
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html: dataNoticia.content_html,
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

export default PageNoticia;
