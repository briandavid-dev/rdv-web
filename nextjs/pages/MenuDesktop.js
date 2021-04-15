import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
      nuestraGente: "Nuestra Gente",
    },
    en: {
      inicio: "Home",
      quienesSomos: "About us",
      historia: "Our history",
      elRon: "The Ron",
      doc: "D.O.C.",
      nuestraGente: "Our people",
    },
  };

  return (
    <>
      <div className="nav_bar_superior" style={{ zIndex: 1000 }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav_bar">
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
                <li className="nav-item">
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
                <li className="nav-item">
                  <Link
                    href={{
                      pathname: "/quienes-somos",
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
                <li className="nav-item">
                  <Link
                    href={{
                      pathname: "./historia",
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
                <li className="nav-item">
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
                <li className="nav-item">
                  <Link
                    href={{
                      pathname: "./el-ron",
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
                <li className="nav-item">
                  <Link
                    href={{
                      pathname: "./doc",
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
                      {menu[lang].elRon}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href={{
                      pathname: "./nuestra-gente",
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
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MenuDesktop;
