import React, { useState, useEffect } from "react";
import css from "styled-jsx/css";
import Link from "next/link";
import { useRouter } from "next/router";
import ApiHome from "./../../services/home";

const stylesCss = css.global`
  .nav_bar_superior {
    background-color: rgba(0, 0, 0, 0.1) !important;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center !important;
    position: fixed;
    z-index: 1000;
  }
  .styleLi {
    justify-content: center !important;
    display: flex !important;
    align-items: center !important;
  }

  .valida_desktop {
    display: none !important;
  }

  @media only screen and (max-width: 620px) {
    .nav_bar_superior {
      background-color: rgba(0, 0, 0, 0.7) !important;
      display: inline;
      flex-direction: row;
      position: fixed;
      width: 100%;
      z-index: 1000;
    }
    .styleLi {
      display: flex !important;
      justify-content: flex-end !important;
      margin-right: 1rem;
    }
    .valida_mobile {
      display: none !important;
    }
    .valida_desktop {
      display: inline !important;
    }
    .social_icons {
      text-align: right;
      margin-right: 0.8rem;
    }
  }
`;

let urlProd = "";
if (process.env.NODE_ENV === "production") urlProd = ".html";

const MenuDesktop = () => {
  const router = useRouter();

  let lang = "es";
  if (router.query.lang === "en") {
    lang = "en";
  }

  const menu = {
    es: {
      inicio: "Inicio",
      quienesSomos: "Quiénes Somos",
      historia: "Historia",
      elRon: "El Ron",
      doc: "D.O.C.",
      noticias: "Noticias",
      empresas: "Empresas",
      nuestraGente: "Nuestra Gente",
    },
    en: {
      inicio: "Home",
      quienesSomos: "About us",
      historia: "Our history",
      elRon: "Rum",
      doc: "D.O.C.",
      noticias: "News",
      empresas: "Companies",
      nuestraGente: "Our people",
    },
  };

  const [data, setData] = useState({ es: null, en: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiHome.getRrssFooter()
      .then((response) => {
        const { codigo, data } = response.data;
        if (codigo === "1") {
          setData(data);
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
    <>
      <style jsx global>
        {stylesCss}
      </style>
      <div className="nav_bar_superior">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark_ ">
          <div className="container-fluid">
            <a className="navbar-brand valida_desktop" href="#">
              <img
                src="/assets/imgs/home/logo_blanco.png"
                style={{ height: "30px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item styleLi">
                  <Link
                    href={{
                      pathname: "/",
                      query: {
                        lang,
                      },
                    }}
                  >
                    <a
                      className={`nav-link ${
                        router.pathname === "/" ? "active" : ""
                      }`}
                    >
                      {menu[lang].inicio}
                    </a>
                  </Link>
                </li>
                <li className="nav-item styleLi">
                  <Link
                    href={{
                      pathname: `/quienes-somos${urlProd}`,
                      query: {
                        lang,
                      },
                    }}
                  >
                    <a
                      className={`nav-link ${
                        router.pathname === "/quienes-somos" ? "active" : ""
                      }`}
                    >
                      {menu[lang].quienesSomos}
                    </a>
                  </Link>
                </li>
                <li className="nav-item styleLi">
                  <Link
                    href={{
                      pathname: `/historia${urlProd}`,
                      query: {
                        lang,
                      },
                    }}
                  >
                    <a
                      className={`nav-link ${
                        router.pathname === "/historia" ? "active" : ""
                      }`}
                    >
                      {menu[lang].historia}
                    </a>
                  </Link>
                </li>
                <li className="nav-item styleLi">
                  <Link
                    href={{
                      pathname: `/el-ron${urlProd}`,
                      query: {
                        lang,
                      },
                    }}
                  >
                    <a
                      className={`nav-link ${
                        router.pathname === "/el-ron" ? "active" : ""
                      }`}
                    >
                      {menu[lang].elRon}
                    </a>
                  </Link>
                </li>
                <li className="nav-item styleLi">
                  <Link
                    href={{
                      pathname: `/doc${urlProd}`,
                      query: {
                        lang,
                      },
                    }}
                  >
                    <a
                      className={`nav-link ${
                        router.pathname === "/doc" ? "active" : ""
                      }`}
                    >
                      {menu[lang].doc}
                    </a>
                  </Link>
                </li>

                <li className="nav-item styleLi valida_mobile">
                  <Link
                    href={{
                      pathname: "/",
                      query: {
                        lang,
                      },
                    }}
                  >
                    <a
                      className={`nav-link ${
                        router.pathname === "/" ? "active" : ""
                      }`}
                    >
                      <img
                        src="/assets/imgs/home/logo_blanco.png"
                        style={{ height: "60px" }}
                      />
                    </a>
                  </Link>
                </li>

                <li className="nav-item styleLi">
                  <Link
                    href={{
                      pathname: `/nuestra-gente${urlProd}`,
                      query: {
                        lang,
                      },
                    }}
                  >
                    <a
                      className={`nav-link ${
                        router.pathname === "/nuestra-gente" ? "active" : ""
                      }`}
                    >
                      {menu[lang].nuestraGente}
                    </a>
                  </Link>
                </li>
                <li className="nav-item styleLi">
                  <Link
                    href={{
                      pathname: `/empresas${urlProd}`,
                      query: {
                        lang,
                      },
                    }}
                  >
                    <a
                      className={`nav-link ${
                        router.pathname === "/empresas" ? "active" : ""
                      }`}
                    >
                      {menu[lang].empresas}
                    </a>
                  </Link>
                </li>

                <li className="nav-item styleLi">
                  <Link
                    href={{
                      pathname: `/noticias${urlProd}`,
                      query: {
                        lang,
                      },
                    }}
                  >
                    <a
                      className={`nav-link ${
                        router.pathname === "/noticias" ? "active" : ""
                      }`}
                    >
                      {menu[lang].noticias}
                    </a>
                  </Link>
                </li>

                <li
                  className="nav-item social_icons"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    {data[lang]?.rsFacebook.info === "NO" ? (
                      <img
                        src="/assets/imgs/home/ICONO-FACEBOOK.png"
                        style={{
                          height: "30px",
                          padding: "30px",
                          padding: "3px",
                        }}
                      />
                    ) : (
                      <a href={data[lang]?.rsFacebook.info} target="_blank">
                        <img
                          src="/assets/imgs/home/ICONO-FACEBOOK.png"
                          className="cursor-pointer"
                          style={{
                            height: "30px",
                            padding: "30px",
                            padding: "3px",
                          }}
                        />
                      </a>
                    )}
                    <Link
                      href={{
                        pathname: router.pathname,
                        query: { lang: "en" },
                      }}
                      scroll={false}
                    >
                      <img
                        src="/assets/imgs/home/ICONO-BANDERA-INGLES.png"
                        className="cursor-pointer"
                        style={{
                          height: "30px",
                          padding: "30px",
                          padding: "3px",
                        }}
                      />
                    </Link>
                  </div>
                  <div style={{ width: "100%" }}>
                    {data[lang]?.rsInstagram.info === "NO" ? (
                      <img
                        src="/assets/imgs/home/ICONO-INSTAGRAM.png"
                        style={{
                          height: "30px",
                          padding: "30px",
                          padding: "3px",
                        }}
                      />
                    ) : (
                      <a href={data[lang]?.rsInstagram.info} target="_blank">
                        <img
                          src="/assets/imgs/home/ICONO-INSTAGRAM.png"
                          className="cursor-pointer"
                          style={{
                            height: "30px",
                            padding: "30px",
                            padding: "3px",
                          }}
                        />
                      </a>
                    )}
                    <Link
                      href={{
                        pathname: router.pathname,
                        query: { lang: "es" },
                      }}
                      scroll={false}
                    >
                      <img
                        src="/assets/imgs/home/ICONO-BANDERA-ESPANOL.png"
                        className="cursor-pointer"
                        style={{
                          height: "30px",
                          padding: "30px",
                          padding: "3px",
                        }}
                      />
                    </Link>
                  </div>
                </li>

                {/* <li
                  className="nav-item social_icons"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "62px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "3px",
                    }}
                  >
                    <Image
                      src="/assets/imgs/home/ICONO-FACEBOOK.png"
                      alt=""
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                    <Link
                      href={{
                        pathname: router.pathname,
                        query: { lang: "en" },
                      }}
                      scroll={false}
                    >
                      <Image
                        src="/assets/imgs/home/ICONO-BANDERA-INGLES.png"
                        alt=""
                        width={25}
                        height={25}
                        className="cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "3px",
                    }}
                  >
                    <Image
                      src="/assets/imgs/home/ICONO-INSTAGRAM.png"
                      alt=""
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />

                    <Link
                      href={{
                        pathname: router.pathname,
                        query: { lang: "es" },
                      }}
                      scroll={false}
                    >
                      <Image
                        src="/assets/imgs/home/ICONO-BANDERA-ESPANOL.png"
                        alt=""
                        width={25}
                        height={25}
                        className="cursor-pointer"
                      />
                    </Link>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MenuDesktop;
