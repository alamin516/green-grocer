import React from "react";

const decode = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const DecodeHtml = ({ content }) => {
  return (
    <div
      className="product-description"
      dangerouslySetInnerHTML={{
        __html: decode(content),
      }}
    />
  );
};

export default DecodeHtml;
