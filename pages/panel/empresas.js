import React, { useEffect } from "react";
import { useRouter } from "next/router";
import css from "styled-jsx/css";
import Head from "next/head";
import { Layout, Menu, Breadcrumb } from "antd";
import Empresas from "../../components/panel/Empresas";
import { PrincipalMenu } from "../../components/PrincipalMenu";

const stylesCss = css.global`
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

const PanelEmpresas = () => {
  const router = useRouter();

  useEffect(() => {
    if (!window.sessionStorage.getItem("token")) {
      router.push("/panel/login");
    }
  }, []);

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
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap"
          rel="stylesheet"
        />

        <title>Empresas - Panel</title>
      </Head>
      <Layout className="layout">
        <PrincipalMenu defaultSelectedKeys={["2"]} />

        <Layout.Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Panel</Breadcrumb.Item>
            <Breadcrumb.Item>Empresas</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Empresas />
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>bmosoluciones.com</Layout.Footer>
      </Layout>
    </>
  );
};

export default PanelEmpresas;
