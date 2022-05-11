import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Layout, Breadcrumb } from "antd";
import { Home } from "../../components/panel/Home";
import { PrincipalMenu } from "../../components/PrincipalMenu";
import { stylesCssPanel } from "../../styles/stylesCssPanel";

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
        {stylesCssPanel}
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

        <title>Home - Panel</title>
      </Head>
      <Layout className="layout">
        <PrincipalMenu defaultSelectedKeys={["6"]} />

        <Layout.Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Panel</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Home />
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          bmosoluciones.com
        </Layout.Footer>
      </Layout>
    </>
  );
};

export default PanelEmpresas;
