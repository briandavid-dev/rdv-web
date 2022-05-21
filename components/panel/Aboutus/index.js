import React, { useEffect, useState } from "react";
import { Tabs, Spin } from "antd";
import FormAboutus from "./FormAboutus";
import ApiAboutus from "./../../../services/aboutus";
import notifica from "../../../utils/notifica";

export const Aboutus = () => {
  const [dataFormEs, setDataFormEs] = useState();
  const [dataFormEn, setDataFormEn] = useState();
  const [loading, setLoading] = useState(false);
  const [randonByFast, setRandonByFast] = useState(0);

  const getAllData = () => {
    const aboutusEsObj = {};
    const aboutusEnObj = {};

    setLoading(true);
    ApiAboutus.getAll()
      .then((response) => {
        const { codigo, results } = response.data;
        if (codigo === "1") {
          results.forEach((aboutus) => {
            if (aboutus.lang === "es") {
              aboutusEsObj[aboutus.name_section] = aboutus.content;
            } else if (aboutus.lang === "en") {
              aboutusEnObj[aboutus.name_section] = aboutus.content;
            }
          });
          setDataFormEs(aboutusEsObj);
          setDataFormEn(aboutusEnObj);
        } else {
          notifica("error", `service return code ${codigo}`);
        }
      })
      .catch((error) => {
        notifica("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(getAllData, []);
  useEffect(getAllData, [randonByFast]);

  return (
    <div>
      <Spin spinning={loading}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Español" key="1">
            {dataFormEs && (
              <FormAboutus
                lang="es"
                dataForm={dataFormEs}
                setLoading={setLoading}
                setRandonByFast={setRandonByFast}
              />
            )}
          </Tabs.TabPane>

          <Tabs.TabPane tab="English" key="2">
            {dataFormEs && (
              <FormAboutus
                lang="en"
                dataForm={dataFormEn}
                setLoading={setLoading}
                setRandonByFast={setRandonByFast}
              />
            )}
          </Tabs.TabPane>
        </Tabs>
      </Spin>
    </div>
  );
};
