import React from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => {
    return import("./Editor");
  },
  { ssr: false }
);

const EditorImport = ({ contenidoUpdate, setContenidoUpdate }) => {
  return <Editor data={contenidoUpdate} actions={{ setContenidoUpdate }} />;
};

export default EditorImport;
