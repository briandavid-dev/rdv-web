import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import es from "../../lang/es";
// import en from "../../lang/en";
import ApiHome from "./../../services/home";
import { Spin } from "antd";

const Footer = () => {
  const router = useRouter();
  let lang = "es";
  if (router.query.lang === "en") {
    lang = "en";
  }
  // const strings = { es, en };
  // const { footer1, footer2 } = props;

  const [data, setData] = useState({ es: null, en: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiHome.getRrssFooter()
      .then((response) => {
        const { codigo, data } = response.data;
        if (codigo === "1") {
          setData(data);
        } else {
          console.log("error", `service return code ${codigo}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Spin spinning={loading}>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center message ">
                {/* {strings[lang].footer.parrafo1} */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[lang]?.footer1.info.replaceAll("\n", "<br />"),
                  }}
                ></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center p-4">
                {/* {strings[lang].footer.contacto} */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[lang]?.footer2.info.replaceAll("\n", "<br />"),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </footer>
      </Spin>
    </>
  );
};

export default Footer;
