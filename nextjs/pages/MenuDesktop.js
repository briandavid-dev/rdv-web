import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuDesktop = () => {
  const router = useRouter();
  console.log(`router`, router);

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
                  <Link href="/">
                    <a
                      className={`nav-link ${
                        router.asPath === "/" ? "active" : ""
                      }`}
                    >
                      Inicio
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/quienes-somos">
                    <a
                      className={`nav-link ${
                        router.asPath === "/quienes-somos" ? "active" : ""
                      }`}
                    >
                      Quienes Somos
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./historia">
                    <a
                      className={`nav-link ${
                        router.asPath === "/historia" ? "active" : ""
                      }`}
                    >
                      Historia
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./">
                    <a
                      className={`nav-link ${
                        router.asPath === "/" ? "active" : ""
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
                  <Link href="./el-ron">
                    <a
                      className={`nav-link ${
                        router.asPath === "/el-ron" ? "active" : ""
                      }`}
                    >
                      El Ron
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./doc">
                    <a
                      className={`nav-link ${
                        router.asPath === "/doc" ? "active" : ""
                      }`}
                    >
                      D.O.C.
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./nuestra-gente">
                    <a
                      className={`nav-link ${
                        router.asPath === "/nuestra-gente" ? "active" : ""
                      }`}
                    >
                      Nuestra Gente
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
