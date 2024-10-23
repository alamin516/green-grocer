import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Quill editor formats
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "video",
  "background",
  "clean",
  "code",
  "align",
  "direction",
  "code-block",
];

// Quill editor modules
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [
      {
        color: [
          "#000000", "#be0027", "#cf8d2e", "#e4e932", "#2c9f45",
          "#371777", "#511378", "#ff0000", "#52565e", "#f3f4f7",
          "#00aeff", "#ff4f81", "#2dde98", "#0389ff"
        ],
      },
      {
        background: [
          "#000000", "#ffffff", "#be0027", "#cf8d2e", "#e4e932",
          "#2c9f45", "#371777", "#511378", "#ff0000", "#52565e",
          "#f3f4f7", "#00aeff", "#ff4f81", "#2dde98", "#0389ff"
        ],
      },
    ],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
    ["link", "image", "video"],
    ["code-block", "clean"],
  ],
};

const TextEditor = ({ productData, setProductData, title, dataKey }) => {
  const [editorValue, setEditorValue] = useState("");

  useEffect(() => {
    console.log('Updating editor value');
    setEditorValue(productData[dataKey] || "");
  }, [productData, dataKey]);

  const handleEditorChange = (value) => {
    setEditorValue(value);
    setProductData((prev) => ({
      ...prev,
      [dataKey]: value,
    }));
  };

  return (
    <div className="my-2 bg-white p-6 rounded-md shadow">
      <label className="block font-medium mb-2">{title}</label>
      <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};


export default TextEditor;



// TextEditor.jsx
// import React, { useEffect, useRef } from "react";
// import $ from "jquery";
// import "summernote/dist/summernote-lite.css";
// import "summernote/dist/summernote-lite.js";

// const TextEditor = ({ productData, setProductData, title, dataKey }) => {
//   const editorRef = useRef();

//   // Initialize Summernote
//   useEffect(() => {
//     $(editorRef.current).summernote({
//       height: 300,
//       toolbar: [
//         ["style", ["style"]],
//         ["font", ["bold", "italic", "underline", "clear"]],
//         ["color", ["color"]],
//         ["para", ["ul", "ol", "paragraph"]],
//         ["insert", ["link", "picture", "video"]],
//         ["view", ["codeview", "help"]],
//         ['table', ['table']],
//       ],
//       callbacks: {
//         onChange: (contents) => {
//           setProductData((prev) => ({
//             ...prev,
//             [dataKey]: contents,
//           }));
//         },
//       },
//     });

//     // Cleanup on unmount
//     return () => {
//       $(editorRef.current).summernote("destroy");
//     };
//   }, [dataKey, setProductData]);

//   return (
//     <div className="my-4 bg-white p-6 rounded-md shadow-md">
//       <label className="block font-medium text-lg mb-2">{title}</label>
//       <div ref={editorRef} className="rounded-md" />

//       <div className="mt-6">
//         <h2 className="text-lg font-semibold">Rendered Output:</h2>
//         <div
//           className="border border-gray-300 p-4 rounded-md mt-2"
//           dangerouslySetInnerHTML={{ __html: productData[dataKey] || "" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default TextEditor;
