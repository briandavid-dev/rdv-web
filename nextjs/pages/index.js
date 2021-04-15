import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
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

        <title>RDV</title>
      </Head>

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
                  <a className="nav-link active" aria-current="page" href="./">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./quienes-somos.html">
                    Quienes Somos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./historia.html">
                    Historia
                  </a>
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
                  <a className="nav-link" href="./el-ron.html">
                    El Ron
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./doc.html">
                    D.O.C.
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./nuestra-gente.html">
                    Nuestra Gente
                  </a>
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
                      style={{ height: "30px", width: "30px", padding: "3px" }}
                    />
                    <img
                      src="./assets/imgs/home/ICONO-BANDERA-INGLES.png"
                      style={{ height: "30px", width: "30px", padding: "3px" }}
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <img
                      src="./assets/imgs/home/ICONO-INSTAGRAM.png"
                      style={{ height: "30px", width: "30px", padding: "3px" }}
                    />
                    <img
                      src="./assets/imgs/home/ICONO-BANDERA-ESPANOL.png"
                      style={{ height: "30px", width: "30px", padding: "3px" }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
