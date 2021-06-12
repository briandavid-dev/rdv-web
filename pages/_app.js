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

  .seccion_titulo_mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 2rem 0;
  }
  .linea1mobile {
    max-height: 3px;
  }
  .linea2mobile {
    height: 3px;
    margin-left: 8px;
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

  .hover-notice-home {
    border: 1px solid transparent;
  }

  .hover-notice-home:hover {
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  footer {
    color: #000;
    background-image: url("./assets/imgs/footer/FONDO_FOOTER.png");
  }
  footer .message {
    background-color: #3d2514;
    padding: 0 2rem 2rem 2rem;
    color: #fef4e4;
  }
  .titulo-maestro {
    color: #f1c430;
  }

  @media only screen and (max-width: 620px) {
    .valida_mobile {
      display: none !important;
    }
  }
  @media only screen and (min-width: 621px) {
    .valida_desktop {
      display: none !important;
    }
  }

  .zoom {
    transition: transform 0.2s; /* Animation */
  }

  .zoom:hover {
    transform: scale(
      1.2
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

  .zoom-elron {
    transition: transform 0.2s; /* Animation */
  }

  .zoom-elron:hover {
    transform: scale(1.1);
  }

  .titulo-bello {
    background-color: #fff4e4;
    color: #443421;
    border-radius: 2px;
    // cursor: pointer;
    // padding: 0.5rem 1rem 0.5rem 1rem;
    // font-size: 1.3rem;
    // width: 300px;
  }

  .titulo-bello:hover {
    background-color: #ddd2c2;
    color: #443421;
    border-radius: 2px;
  }

  .titulo-bello:active {
    background-color: #ddd2c2 !important;
    color: #443421;
    border-radius: 2px;
  }

  .titulo-bello:focus {
    background-color: #ddd2c2 !important;
    color: #443421;
    border-radius: 2px;
  }

  .label-required::before {
    display: inline-block;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*";
  }

  a.alink {
    color: #fff4e4;
  }
  a.alink:hover {
    text-decoration: underline;
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
