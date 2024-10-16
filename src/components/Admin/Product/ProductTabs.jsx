import React, { useState, useEffect } from "react";

const ProductTabs = ({ productData, setProductData }) => {
  const [activeTab, setActiveTab] = useState("general");
  const [availableTabs, setAvailableTabs] = useState([]);
  // const [attributes, setAttributes] = useState([]);
  // const [variations, setVariations] = useState([]);

  const tabMapping = {
    simple: ["general", "inventory", "shipping", "linked products"],
    // variable: ["inventory", "attributes", "variations", "linked products"],
    // external: ["general", "external url", "price", "coupons"],
    // affiliated: ["general", "linked products"],
  };

  useEffect(() => {
    const tabs = tabMapping[productData.type] || [];
    setAvailableTabs(tabs);
    setActiveTab(tabs[0] || "general");
  }, [productData.type]); // Only trigger when `productData.type` changes

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  // const addAttribute = () => {
  //   setAttributes((prev) => [...prev, { name: "", options: "" }]);
  // };

  // const handleAttributeChange = (index, field, value) => {
  //   setAttributes((prev) =>
  //     prev.map((attr, i) =>
  //       i === index ? { ...attr, [field]: value } : attr
  //     )
  //   );
  // };

  // const removeAttribute = (index) => {
  //   setAttributes((prev) => prev.filter((_, i) => i !== index));
  // };

  // const addVariation = () => {
  //   setVariations((prev) => [
  //     ...prev,
  //     { attribute: "", price: "", sku: "" },
  //   ]);
  // };

  // const handleVariationChange = (index, field, value) => {
  //   setVariations((prev) =>
  //     prev.map((variation, i) =>
  //       i === index ? { ...variation, [field]: value } : variation
  //     )
  //   );
  // };

  // const removeVariation = (index) => {
  //   setVariations((prev) => prev.filter((_, i) => i !== index));
  // };

  return (
    <div className="bg-white p-6 rounded-md">
      {/* Product Type Selector */}
      <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-300">
        <label className="font-medium">Product Type</label>
        <select
          name="type"
          className="rounded-lg px-3 py-2 border border-gray-300"
          value={productData.type || "simple"}
          onChange={(e) =>
            setProductData({ ...productData, type: e.target.value })
          }
        >
          <option value="simple">Simple</option>
          {/* <option value="variable">Variable</option>
          <option value="external">External</option>
          <option value="affiliated">Affiliated</option> */}
        </select>
      </div>

      <div className="flex gap-[30px]">
        {/* Tabs Navigation */}
        <div className="flex flex-col text-left items-start gap-2 mb-4">
          {availableTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`py-2 px-4 ${
                activeTab === tab ? "bg-gray-200 font-bold" : "text-gray-500"
              } w-full text-left border`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="mt-0 flex-1">
          {activeTab === "general" && (
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block font-medium mb-2" htmlFor="price">
                  Regular Price
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={productData.price || ""}
                  min={"0"}
                  onChange={handleInputChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div>
                <label
                  className="block font-medium mb-2"
                  htmlFor="discount_price"
                >
                  Sale Price
                </label>
                <input
                  type="number"
                  id="discount_price"
                  name="discount_price"
                  placeholder="Discount Price"
                  value={productData.discount_price || ""}
                  min={"0"}
                  onChange={handleInputChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
            </div>
          )}

{activeTab === "inventory" && (
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block font-medium mb-2" htmlFor="sku">
                  SKU
                </label>
                <input
                  type="text"
                  name="sku"
                  placeholder="SKU"
                  value={productData.sku || ""}
                  onChange={handleInputChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div>
                <label
                  className="block font-medium mb-2"
                  htmlFor="stock_quantity"
                >
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock_quantity"
                  placeholder="Stock Quantity"
                  value={productData.stock_quantity || ""}
                  onChange={handleInputChange}
                  className="border rounded-lg px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-medium mb-2"
                  htmlFor="stock-status"
                >
                  Stock Status
                </label>
                <select
                  id="stock-status"
                  name="stock_status"
                  value={productData.stock_status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="in_stock">In Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                  <option value="limited_stock">Limited Stock</option>
                </select>
                <p className="mt-2 text-sm text-gray-600">
                  Current status: {productData.stock_status}
                </p>
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="weight"
                placeholder="Weight (kg)"
                value={productData.weight || ""}
                onChange={handleInputChange}
                className="border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="dimensions"
                placeholder="Dimensions (LxWxH)"
                value={productData.dimensions || ""}
                onChange={handleInputChange}
                className="border rounded-lg px-3 py-2"
              />
            </div>
          )}

          {/* {activeTab === "external url" && (
            <div className="grid grid-cols-1 gap-4">
              <input
                type="url"
                name="external_url"
                placeholder="External Product URL"
                value={productData.external_url || ""}
                onChange={handleInputChange}
                className="border rounded-lg px-3 py-2"
              />
            </div>
          )}

          {activeTab === "variations" && (
            <div className="grid gap-4">
              <h3 className="font-bold mb-2">Product Variations</h3>
              {variations.map((variation, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Variation Attribute"
                    value={variation.attribute}
                    onChange={(e) =>
                      handleVariationChange(index, "attribute", e.target.value)
                    }
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={variation.price}
                    onChange={(e) =>
                      handleVariationChange(index, "price", e.target.value)
                    }
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="SKU"
                    value={variation.sku}
                    onChange={(e) =>
                      handleVariationChange(index, "sku", e.target.value)
                    }
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                  <button
                    onClick={() => removeVariation(index)}
                    className="bg-red-500 text-white rounded-lg px-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addVariation}
                className="bg-blue-600 text-white rounded-lg px-4 py-2"
              >
                Add Variation
              </button>
            </div>
          )}

          {activeTab === "attributes" && (
            <div className="grid gap-4">
              <h3 className="font-bold mb-2">Product Attributes</h3>
              {attributes.map((attribute, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Attribute Name"
                    value={attribute.name}
                    onChange={(e) =>
                      handleAttributeChange(index, "name", e.target.value)
                    }
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Options (comma separated)"
                    value={attribute.options}
                    onChange={(e) =>
                      handleAttributeChange(index, "options", e.target.value)
                    }
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                  <button
                    onClick={() => removeAttribute(index)}
                    className="bg-red-500 text-white rounded-lg px-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addAttribute}
                className="bg-blue-600 text-white rounded-lg px-4 py-2"
              >
                Add Attribute
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
