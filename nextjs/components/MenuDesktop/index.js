import React, { useEffect } from "react";
import css from "styled-jsx/css";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "./Menu.module.css";

const styleLi = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const stylesCss = css.global`
  .nav_bar_superior {
    background-color: rgba(0, 0, 0, 0.1) !important;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center !important; /* hacer el media query para mobile y cambiar este */
    position: fixed;
    z-index: 1000;
  }
`;

const urlProd = "";
// const urlProd = ".html";

const MenuDesktop = () => {
  const router = useRouter();

  let lang = "es";
  if (router.query.lang === "en") {
    lang = "en";
  }

  useEffect(() => {
    /* async function getX() {
      console.log("Consultando...");
      axios
        .get("https://www.bmosoluciones.com/api-rdv/cc/")
        .then((response) => {
          console.log(`response`, response);
        })
        .catch((error) => {
          console.log(`error`, error);
        });
    }
    getX(); */
  }, []);

  const menu = {
    es: {
      inicio: "Inicio",
      quienesSomos: "Quiénes Somos",
      historia: "Historia",
      elRon: "El Ron",
      doc: "D.O.C.",
      noticias: "Noticias",
      nuestraGente: "Nuestra Gente",
    },
    en: {
      inicio: "Home",
      quienesSomos: "About us",
      historia: "Our history",
      elRon: "Rum",
      doc: "D.O.C.",
      noticias: "News",
      nuestraGente: "Our people",
    },
  };

  return (
    <>
      <style jsx global>
        {stylesCss}
      </style>
      <div className="nav_bar_superior">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark_ ">
          <div className="container-fluid">
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
                <li className="nav-item" style={styleLi}>
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
                <li className="nav-item" style={styleLi}>
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
                <li className="nav-item" style={styleLi}>
                  <Link
                    href={{
                      pathname: `./historia${urlProd}`,
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
                <li className="nav-item" style={styleLi}>
                  <Link
                    href={{
                      pathname: "./",
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
                        src="./assets/imgs/home/logo_blanco.png"
                        style={{ height: "60px" }}
                      />
                    </a>
                  </Link>
                </li>
                <li className="nav-item" style={styleLi}>
                  <Link
                    href={{
                      pathname: `./el-ron${urlProd}`,
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
                <li className="nav-item" style={styleLi}>
                  <Link
                    href={{
                      pathname: `./doc${urlProd}`,
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
                <li className="nav-item" style={styleLi}>
                  <Link
                    href={{
                      pathname: `./noticias${urlProd}`,
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
                <li className="nav-item" style={styleLi}>
                  <Link
                    href={{
                      pathname: `./nuestra-gente${urlProd}`,
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

                <li
                  className="nav-item social_icons"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <img
                      src="./assets/imgs/home/ICONO-FACEBOOK.png"
                      className="cursor-pointer"
                      style={{
                        height: "30px",
                        padding: "30px",
                        padding: "3px",
                      }}
                    />
                    <Link
                      href={{
                        pathname: router.pathname,
                        query: { lang: "en" },
                      }}
                      scroll={false}
                    >
                      <img
                        src="./assets/imgs/home/ICONO-BANDERA-INGLES.png"
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
                    <img
                      src="./assets/imgs/home/ICONO-INSTAGRAM.png"
                      className="cursor-pointer"
                      style={{
                        height: "30px",
                        padding: "30px",
                        padding: "3px",
                      }}
                    />
                    <Link
                      href={{
                        pathname: router.pathname,
                        query: { lang: "es" },
                      }}
                      scroll={false}
                    >
                      <img
                        src="./assets/imgs/home/ICONO-BANDERA-ESPANOL.png"
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
