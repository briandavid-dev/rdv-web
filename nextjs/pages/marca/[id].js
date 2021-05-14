import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { Skeleton, Row, Col, Button } from "antd";
import css from "styled-jsx/css";
import Footer from "../../components/Footer";
import MenuDesktop from "../../components/MenuDesktop";
import es from "../../lang/es";
import en from "../../lang/en";
import ApiEmpresas from "../../pagesServices/empresas";
import ApiProductos from "../../components/panel/Empresas/Productos/services";

const stylesCss = css.global`
  body {
    background-color: #5b402b;
    background-image: url("../../assets/imgs/empresas/fondo-marcas.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }
  .Section0 {
    /* background-color: #553c28; */
  }

  .card-empresa-info,
  table {
    background-color: rgba(68, 49, 34, 0.8);
    border-radius: 1px;
    border: 0.5px rgba(68, 49, 34, 0.5) solid;
    color: #fff4e4;
    padding: 2rem;
    font-size: 1rem;
  }

  .card-empresa-premios {
    background-color: rgba(68, 49, 34, 0.8);
    border-color: rgba(68, 49, 34, 0.8);
    color: #fff4e4;
  }
  .card-empresa-premios:hover {
    background-color: rgba(68, 49, 34, 0.8);
    border-color: rgba(68, 49, 34, 0.5);
    color: #fff4e4;
  }
  .card-empresa-premios:focus {
    background-color: rgba(68, 49, 34, 0.8);
    border-color: rgba(68, 49, 34, 0.5);
    color: #fff4e4;
  }

  .card-botellita {
    /* Por acá:
    Código de color Marrón
    para cuadros de las botellas, y texto principal de la marca
    #483323 */
    background-color: rgba(72, 51, 35, 0.8);
  }
  .card-botellita-content {
    padding-left: 1rem;
  }
  .card-botellita-producto-uno {
    color: #ffda44;
    font-size: 1.3rem;
  }
  .card-botellita-producto-dos {
    font-size: 1.2rem;
  }
`;

const PageNoticia = () => {
  const router = useRouter();
  const { id, lang } = router.query;

  const [loadingEmpresa, setLoadingEmpresa] = useState(false);
  const [loadingProductos, setLoadingProductos] = useState(false);
  const [empresa, setEmpresa] = useState({
    id: "",
    image_base64: "",
    image_extension: "",
    content_html: "",
    title: "",
    url: "",
  });

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setLoadingEmpresa(true);
    ApiEmpresas.getEmpresa(id)
      .then((response) => {
        const { codigo, empresa } = response.data;
        if (codigo === "1") {
          setEmpresa({
            id: empresa.id,
            image_base64: empresa.image_base64,
            image_extension: empresa.image_extension,
            content_html: empresa.content_html,
            title: empresa.title,
            url: empresa.url,
          });
        } else {
          //
        }
        setLoadingEmpresa(false);
      })
      .catch((error) => {
        //
        setLoadingEmpresa(false);
      });
  }, [id]);

  useEffect(() => {
    if (id) {
      setLoadingProductos(true);
      ApiProductos.getProductos(id, "productos")
        .then((response) => {
          const { codigo, results } = response.data;
          if (codigo === "1") {
            setProductos(results);
          } else {
            //
          }
          setLoadingProductos(false);
        })
        .catch((error) => {
          //
          setLoadingProductos(false);
        });
    }
  }, [id]);

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

        <title>{empresa.title}</title>
      </Head>

      <MenuDesktop />

      <div className="valida_mobile Section0">
        <div style={{ padding: "7rem 0 2rem 0 " }}>
          <Row gutter={[16, 16]} type="flex" justify="center" align="top">
            <Col xs={22} lg={15}>
              <Skeleton active loading={loadingEmpresa}>
                <div className="card-empresa-info">
                  <div className="seccion_titulo">
                    <img
                      src="/assets/imgs/home/linea2.png"
                      style={{ height: "4px" }}
                    />
                    <h1 className="text-center">{empresa.title}</h1>
                    &nbsp;&nbsp;
                    <img
                      src="/assets/imgs/home/linea1.png"
                      style={{ height: "4px" }}
                    />
                  </div>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: empresa.content_html,
                    }}
                  ></div>
                  <p>
                    <a className="alink" href={empresa.url} target="_blank">
                      {empresa.url}
                    </a>
                  </p>

                  <div className="text-center">
                    <img
                      alt={empresa.title}
                      src={`data:image/${empresa.image_extension};base64,${empresa.image_base64}`}
                      style={{ width: "300px", maxWidth: "80%" }}
                    />
                  </div>
                </div>
                <br />
                <div className="text-center">
                  <Link
                    href={{
                      pathname: "/premios/[id]",
                      query: { id: empresa.id, lang },
                    }}
                  >
                    <Button className="card-empresa-premios zoom-elron">
                      VER PREMIOS
                    </Button>
                  </Link>
                </div>
              </Skeleton>

              <Skeleton active loading={loadingProductos}>
                <br />
                <Row>
                  {productos.map((producto) => (
                    <>
                      <Col
                        span={4}
                        className="text-center card-botellita"
                        key={producto.id}
                      >
                        <img
                          alt={producto.name}
                          src={`data:image/${producto.image_extension};base64,${producto.image_base64}`}
                          style={{ width: "50", maxWidth: "100%" }}
                        />
                      </Col>
                      <Col span={20} className=" card-botellita-content">
                        <div className="card-botellita-producto-uno">
                          Producto
                        </div>
                        <div className="card-botellita-producto-dos">
                          {producto.name}
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: producto.content_html,
                          }}
                        ></div>
                      </Col>
                      <Col span={24}>
                        <br />
                        <br />
                      </Col>
                    </>
                  ))}
                </Row>
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

      <div className="valida_desktop font_20 Section0">
        <Row type="flex" justify="center" className="Section0">
          <Col xs={22} style={{ marginTop: "58px" }}>
            <Skeleton active loading={loadingEmpresa}>
              <br />
              <div className="card-empresa-info">
                <h1 className="text-center">{empresa.title}</h1>

                <div
                  dangerouslySetInnerHTML={{
                    __html: empresa.content_html,
                  }}
                ></div>

                <p>
                  <a className="alink" href={empresa.url} target="_blank">
                    {empresa.url}
                  </a>
                </p>
                <div className="text-center">
                  <img
                    alt={empresa.title}
                    src={`data:image/${empresa.image_extension};base64,${empresa.image_base64}`}
                    style={{ width: "300px", maxWidth: "80%" }}
                  />
                </div>
              </div>
              <div className="text-center">
                <br />
                <Link
                  href={{
                    pathname: "/premios/[id]",
                    query: { id: empresa.id, lang },
                  }}
                >
                  <Button className="card-empresa-premios zoom-elron">
                    VER PREMIOS
                  </Button>
                </Link>
              </div>
            </Skeleton>

            <Skeleton active loading={loadingProductos}>
              <br />
              <Row>
                {productos.map((producto) => (
                  <>
                    <Col span={4} className="text-center card-botellita">
                      <img
                        alt={producto.name}
                        src={`data:image/${producto.image_extension};base64,${producto.image_base64}`}
                        style={{ width: "50", maxWidth: "100%" }}
                      />
                    </Col>
                    <Col span={20} className=" card-botellita-content">
                      <div className="card-botellita-producto-uno">
                        Producto
                      </div>
                      <div className="card-botellita-producto-dos">
                        {producto.name}
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: producto.content_html,
                        }}
                      ></div>
                    </Col>
                    <Col span={24}>
                      <br />
                      <br />
                    </Col>
                  </>
                ))}
              </Row>
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
