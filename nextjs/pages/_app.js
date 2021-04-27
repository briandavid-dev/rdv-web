import css from "styled-jsx/css";
import "../styles/antd.less";
import "../styles/styles.css";

const stylesCss = css.global`
  .font_20 {
    font-size: 20px;
    line-height: 2;
  }

  .text_justify {
    text-align: justify;
  }

  .text-justify {
    text-align: justify;
  }

  .linea1 {
    max-height: 8px;
  }
  .linea2 {
    height: 8px;
    margin-left: 8px;
  }
  .seccion_titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 2rem 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  footer {
    color: #000;
    /* background-image: url("./../public/assets/imgs/footer/FONDO_FOOTER.png"); */
    background-image: url("/assets/imgs/footer/FONDO_FOOTER.png");
  }
  footer .message {
    background-color: #3d2514;
    padding: 0 0 2rem 0;
    color: #fef4e4;
  }
  .titulo-maestro {
    color: #d48125;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {stylesCss}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
