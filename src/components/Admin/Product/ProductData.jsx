import React from "react";
import ProductTabs from "./ProductTabs";
import TextEditor from "../../../utils/TextEditor";

const ProductData = ({ productData, setProductData, handleChange }) => {
  return (
    <>
      <div className="mb-2 bg-white p-6 rounded-md">
        <label className="block font-medium mb-2">Product Title</label>
        <input
          type="text"
          name="title"
          className="w-full border rounded-md px-4 py-2"
          placeholder="Enter product title"
          value={productData.title}
          onChange={handleChange}
        />
      </div>

      <TextEditor
        data={productData}
        setData={setProductData}
        title="Long Description"
        dataKey="long_description"
      />

      <ProductTabs productData={productData} setProductData={setProductData} />

      <TextEditor
        data={productData}
        setData={setProductData}
        title="Short Description"
        dataKey="short_description"
      />
    </>
  );
};

export default ProductData;
