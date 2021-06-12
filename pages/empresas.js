import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Row, Col, Skeleton } from "antd";
import css from "styled-jsx/css";
import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import es from "../lang/es";
import en from "../lang/en";
import ApiEmpresas from "../pagesServices/empresas";

const stylesCss = css.global`
  .Section0 {
    background-color: #5b402b;
    background-image: url("./assets/imgs/empresas/fondo-marcas.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }

  .ant-collapse {
    background-color: transparent;
  }
  .ant-collapse-header {
    color: #fef4e4 !important;
  }
  .ant-collapse-content {
    background-color: rgba(255, 255, 255, 0.4) !important;
  }

  table {
    border: 1px #fef4e4 solid;
  }
  table td {
    border: 1px #fef4e4 solid;
    padding: 0.3rem;
  }

  .card-empresa {
    background-color: rgba(68, 49, 34, 0.8);
    color: #fff4e4;
    border-radius: 3px;
    padding: 1rem;
    cursor: pointer;
    border: 1px transparent solid;
    height: 100%;
  }
  .card-empresa:hover {
    border: 0.5px rgba(255, 244, 228, 0.4) solid;
  }
`;

const PageEmpresas = () => {
  const router = useRouter();

  let lang = "en";
  if (router.query.lang === "en") {
    lang = "en";
  } else {
    lang = "es";
  }

  const strings = { es, en };

  const [dataEmpresas, setDataEmpresas] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEmpresas = (lang) => {
    setLoading(true);
    ApiEmpresas.getEmpresas(lang)
      .then((response) => {
        const { codigo, results } = response.data;
        if (codigo === "1") {
          setDataEmpresas(results);
        }
        if (codigo === "0") {
          //
        }
        setLoading(false);
      })
      .catch((error) => {
        //
        setLoading(false);
      });
  };

  useEffect(() => {
    if (window.location.href.includes("lang=es")) {
      getEmpresas("es");
    } else if (window.location.href.includes("lang=en")) {
      getEmpresas("en");
    }
  }, [lang]);

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

        <title>{strings[lang].empresas.pageTitle}</title>
      </Head>
      <MenuDesktop />

      <div style={{ padding: "7rem 0 0 0 " }} className="Section0 ">
        <Row gutter={[16, 16]} type="flex" justify="center" align="top">
          <Col xs={22} sm={20} md={18} lg={18} xl={13} xxl={12}>
            <Row gutter={[20, 20]}>
              <Skeleton active loading={loading}>
                {dataEmpresas.length > 0 ? (
                  <>
                    {dataEmpresas.map((empresa) => (
                      <Col lg={12} sm={12} xs={24} key={empresa.id}>
                        <Link
                          href={{
                            pathname: "/marca/[id]",
                            query: { id: empresa.id, lang },
                          }}
                        >
                          <div className="card-empresa">
                            <div style={{ minHeight: "150px" }}>
                              <div style={{ textAlign: "left" }}>
                                <img
                                  src="./assets/imgs/home/linea2.png"
                                  style={{ height: "4px" }}
                                />
                              </div>
                              <div
                                style={{ fontSize: "1.5rem" }}
                                className="text-center"
                              >
                                {empresa.title}
                              </div>
                              <div style={{ textAlign: "right" }}>
                                <img
                                  src="./assets/imgs/home/linea2.png"
                                  style={{ height: "4px" }}
                                />
                              </div>
                            </div>
                            <p className="text-justify">{empresa.summary}</p>
                            <div className="text-center">
                              <img
                                alt={empresa.title}
                                src={`data:image/${empresa.image_extension};base64,${empresa.image_base64}`}
                                style={{ width: "400px", maxWidth: "70%" }}
                              />
                            </div>
                          </div>
                        </Link>
                      </Col>
                    ))}
                  </>
                ) : (
                  // <Collapse accordion expandIconPosition="right">
                  //   {dataEmpresas.map((empresa) => (
                  //     <Collapse.Panel
                  //       header={empresa.title}
                  //       key={empresa.id}
                  //       className="font_20"
                  //     >
                  //       <Row gutter={20}>
                  //         <Col xs={24} lg={4}>
                  //           <img
                  //             alt={empresa.title}
                  //             src={`data:image/${empresa.image_extension};base64,${empresa.image_base64}`}
                  //             style={{ maxWidth: "100%" }}
                  //           />
                  //         </Col>
                  //         <Col xs={24} lg={20}>
                  //           <div
                  //             dangerouslySetInnerHTML={{
                  //               __html: empresa.content_html,
                  //             }}
                  //           ></div>
                  //         </Col>
                  //       </Row>
                  //     </Collapse.Panel>
                  //   ))}
                  // </Collapse>
                  <p className="text-center">{strings[lang].noData}</p>
                )}
              </Skeleton>
            </Row>
          </Col>
        </Row>
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
    </>
  );
};

export default PageEmpresas;
