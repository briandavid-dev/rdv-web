import css from "styled-jsx/css";

export const stylesCssPanel = css.global`
  body {
    font-family: var(--bs-font-sans-serif);
    color: #62452d !important;
    background-color: #f0f2f5;
  }
  body {
    color: #62452d;
  }
  .site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
  }
  #components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
  .ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
`;
