import React, { useEffect, useState } from "react";
import { Tabs, Spin } from "antd";
import FormDoc from "./FormHistoria";
import ApiHistory from "../../../services/history";
import notifica from "../../../utils/notifica";

export const History = () => {
  const [dataForm, setDataForm] = useState({ es: null, en: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiHistory.getAll()
      .then((response) => {
        const { codigo, data } = response.data;
        if (codigo === "1") {
          setDataForm(data);
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
  }, []);

  return (
    <div>
      <Spin spinning={loading}>
        {
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Español" key="1">
              {dataForm.es && (
                <FormDoc
                  lang="es"
                  dataForm={dataForm.es}
                  setDataForm={setDataForm}
                  setLoading={setLoading}
                />
              )}
            </Tabs.TabPane>

            <Tabs.TabPane tab="English" key="2">
              {dataForm.en && (
                <FormDoc
                  lang="en"
                  dataForm={dataForm.en}
                  setDataForm={setDataForm}
                  setLoading={setLoading}
                />
              )}
            </Tabs.TabPane>
          </Tabs>
        }
      </Spin>
    </div>
  );
};
