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

const Editor = (props) => {
  const { actions, data } = props;
  console.log(`data`, data);
  return (
    <div style={{ border: "1px solid #d9d9d9" }}>
      <style jsx global>
        {stylesCss}
      </style>
      <CKEditor
        editor={InlineEditor}
        data={data}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          actions.setContenido(data);
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

export default Editor;
