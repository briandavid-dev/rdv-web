import React, { useEffect, useState } from "react";
import { Tabs, Spin } from "antd";
import FormHome from "./FormHome";
import notifica from "../../../utils/notifica";
import ApiHome from "./../../../services/home";

export const Home = () => {
  const [dataAllHome, setDataAllHome] = useState({ es: null, en: null });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiHome.getAllPageHome()
      .then((response) => {
        const { codigo, data } = response.data;
        if (codigo === "1") {
          setDataAllHome(data);
        } else {
          console.log("error", `service return code ${codigo}`);
          notifica("error", `service return code ${codigo}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        notifica("error", `service return code ${codigo}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Spin spinning={loading}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Español" key="1">
            {dataAllHome.es && (
              <FormHome
                lang="es"
                dataForm={dataAllHome.es}
                setDataAllHome={setDataAllHome}
                setLoading={setLoading}
              />
            )}
          </Tabs.TabPane>

          <Tabs.TabPane tab="English" key="2">
            {dataAllHome.en && (
              <FormHome
                lang="en"
                dataForm={dataAllHome.en}
                setDataAllHome={setDataAllHome}
                setLoading={setLoading}
              />
            )}
          </Tabs.TabPane>
        </Tabs>
      </Spin>
    </div>
  );
};
