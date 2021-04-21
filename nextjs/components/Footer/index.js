import React from "react";
import { useRouter } from "next/router";
import es from "../../lang/es";
import en from "../../lang/en";

const Footer = () => {
  const router = useRouter();
  let lang = "es";
  if (router.query.lang === "en") {
    lang = "en";
  }
  const strings = { es, en };

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center message">
              {strings[lang].footer.parrafo1}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center p-4">
              {strings[lang].footer.contacto}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
