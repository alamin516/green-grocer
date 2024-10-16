import React, { useState, useEffect } from "react";

const ProductSpecifications = ({ productData, setProductData }) => {
  const [specifications, setSpecifications] = useState(
    productData?.specification || [{ key: "", value: "" }]
  );

  useEffect(() => {
    setProductData((prev) => ({
      ...prev,
      specification: specifications,
    }));
  }, [specifications, setProductData]);

  const handleChange = (index, field, value) => {
    const updatedSpecs = [...specifications];
    updatedSpecs[index][field] = value;
    setSpecifications(updatedSpecs);
  };

  const handleAddSpecification = () => {
    setSpecifications([...specifications, { key: "", value: "" }]);
  };

  const handleRemoveSpecification = (index) => {
    const updatedSpecs = specifications.filter((_, i) => i !== index);
    setSpecifications(updatedSpecs);
  };

  return (
    <div className="bg-white p-6 rounded-md mb-4">
      <h3 className="font-medium mb-3">Product Specifications</h3>

      {specifications.map((spec, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          {/* Key Input */}
          <input
            type="text"
            placeholder="Specification Key"
            value={spec.key}
            onChange={(e) => handleChange(index, "key", e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg"
          />

          {/* Value Input */}
          <input
            type="text"
            placeholder="Specification Value"
            value={spec.value}
            onChange={(e) => handleChange(index, "value", e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg"
          />

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => handleRemoveSpecification(index)}
            className="text-red-500 hover:text-red-700"
          >
            &times;
          </button>
        </div>
      ))}

      {/* Add New Specification Button */}
      <button
        type="button"
        onClick={handleAddSpecification}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add Specification
      </button>
    </div>
  );
};

export default ProductSpecifications;
