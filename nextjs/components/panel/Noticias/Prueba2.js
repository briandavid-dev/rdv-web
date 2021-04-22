import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installation.html
import css from "styled-jsx/css";

const stylesCss = css.global`
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #666 !important;
  }
`;

const Prueba2 = () => {
  return (
    <div>
      <style jsx global>
        {stylesCss}
      </style>
      <h2>Contenido</h2>
      <CKEditor
        editor={InlineEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default Prueba2;
