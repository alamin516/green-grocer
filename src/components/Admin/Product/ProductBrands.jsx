import React, { useState } from "react";

const initialBrands = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Books" },
  { id: 4, name: "Home & Kitchen" },
];

const ProductBrands = ({ productData, setProductData }) => {
  const [brands, setBrands] = useState(initialBrands);
  const [newBrand, setNewBrand] = useState("");

  // Handle brand checkbox change
  const handleBrandChange = (id) => {
    setProductData((prevData) => {
      const newBrands = prevData.brand.includes(id)
        ? prevData.brand.filter((brandId) => brandId !== id)
        : [...prevData.brand, id];
      return { ...prevData, brand: newBrands };
    });
  };

  // Handle new Tag input change
  const handleNewTagChange = (e) => {
    setNewBrand(e.target.value);
  };

  // Add a new Tag to the list
  const handleAddBrand = () => {
    if (newBrand.trim()) {
      const newId = brands.length + 1;
      setBrands((prevBrands) => [
        ...prevBrands,
        { id: newId, name: newBrand.trim() },
      ]);
      setNewBrand("");
    }
  };

  return (
    <>
      {/* All Brands Section */}
      <div className="border border-gray-300  bg-white shadow-md rounded-md p-6">
        <h3 className="font-medium mb-3">All Brands</h3>
        <div className="space-y-2 max-h-[200px] overflow-hidden overflow-y-auto custom-scrollbar">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`brand-${brand.id}`}
                value={brand.id}
                checked={productData?.brand?.includes(brand.id)}
                onChange={() => handleBrandChange(brand.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={`brand-${brand.id}`} className="text-sm">
                {brand.name}
              </label>
            </div>
          ))}
        </div>

        {/* Add New Brand*/}
        <div className="flex flex-col gap-2 mt-4">
          <input
            type="text"
            value={newBrand}
            onChange={handleNewTagChange}
            placeholder="Add new Tag"
            className="flex-1 px-3 py-2 border rounded-lg"
          />
          <button
            type="button"
            onClick={handleAddBrand}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductBrands;
