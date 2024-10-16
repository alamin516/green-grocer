import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [
      { header: "1" },
      { header: "2" },
      { header: [3, 4, 5, 6] },
      {
        font: [
          10, 12, 14, 16, 18, 20, 24,
        ],
      },
    ],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ align: [] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [{ script: "sub" }, { script: "super" }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

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
  "video",
  "code-block",
  "color",
  "background",
  "align",
  "script",
];

const TextEditor = ({ data, setData, title, dataKey }) => {
  const editorRef = useRef(null);

  const handleEditorChange = (content) => {
    setData((prevData) => ({
      ...prevData,
      [dataKey]: content,
    }));
  };

  return (
    <div className="my-2 bg-white p-6 rounded-md">
      <label className="block font-medium mb-2">{title}</label>
      <ReactQuill
        ref={editorRef}
        value={data[dataKey]}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
        theme="snow"
      />
    </div>
  );
};

export default TextEditor;
