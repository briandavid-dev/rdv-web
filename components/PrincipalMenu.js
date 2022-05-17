import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";

export const PrincipalMenu = (props) => {
  const { defaultSelectedKeys } = props;

  return (
    <Layout.Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ fontSize: 12 }}
        defaultSelectedKeys={defaultSelectedKeys}
      >
        <Menu.Item key="6">
          <Link href="/panel/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/panel/quienessomos">Quienes Somos</Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link href="/panel/historia">Historia</Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link href="/panel/elron">El Ron</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/panel/doc">D.O.C.</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link href="/panel/nuestragente">Nuestra Gente</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/panel/runmasters">Maestros Roneros</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/panel/empresas">Empresas</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link href="/panel/noticias">Noticias</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};
