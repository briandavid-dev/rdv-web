import React from "react";
import Image from "next/image";
import Link from "next/link";

const MenuDesktop = () => {
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
                    <a className="nav-link active">Inicio</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./quienes-somos">
                    <a className="nav-link">Quienes Somos</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./historia">
                    <a className="nav-link">Historia</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./">
                    <img
                      src="./assets/imgs/home/logo_blanco.png"
                      style={{ height: "60px" }}
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <Link href="./el-ron">
                    <a className="nav-link" href="./el-ron">
                      El Ron
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./doc">
                    <a className="nav-link">D.O.C.</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./nuestra-gente">
                    <a className="nav-link">Nuestra Gente</a>
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
                    />

                    <Image
                      src="/assets/imgs/home/ICONO-BANDERA-INGLES.png"
                      alt=""
                      width={25}
                      height={25}
                    />
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
                    />

                    <Image
                      src="/assets/imgs/home/ICONO-BANDERA-ESPANOL.png"
                      alt=""
                      width={25}
                      height={25}
                    />
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
