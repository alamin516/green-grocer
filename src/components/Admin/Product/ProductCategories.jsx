import React, { useState } from "react";

// Sample category data with parent-child relationships
const initialCategories = [
  { id: 1, name: "Electronics", parent: null },
  { id: 2, name: "Mobiles", parent: 1 },
  { id: 3, name: "Laptops", parent: 1 },
  { id: 4, name: "Clothing", parent: null },
  { id: 5, name: "Men", parent: 4 },
  { id: 6, name: "Women", parent: 4 },
  { id: 7, name: "Books", parent: null },
];

const ProductCategories = ({ productData, setProductData }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState("");
  const [parentCategory, setParentCategory] = useState(null);

  // Handle category selection
  const handleCategoryChange = (id) => {
    setProductData((prevData) => {
      const newCategories = prevData.category.includes(id)
        ? prevData.category.filter((categoryId) => categoryId !== id)
        : [...prevData.category, id];
      return { ...prevData, category: newCategories };
    });
  };

  const handleNewCategoryChange = (e) => setNewCategory(e.target.value);

  const handleParentCategoryChange = (e) => setParentCategory(e.target.value);

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      const newId = categories.length + 1;
      setCategories((prevCategories) => [
        ...prevCategories,
        {
          id: newId,
          name: newCategory.trim(),
          parent: parentCategory ? Number(parentCategory) : null,
        },
      ]);
      setNewCategory("");
      setParentCategory(null);
    }
  };

  const renderCategories = (parentId = null, level = 0) =>
    categories
      .filter((category) => category.parent === parentId)
      .map((category) => (
        <div
          key={category.id}
          className="ml-4"
          style={{ marginLeft: `${level * 20}px` }}
        >
          <input
            type="checkbox"
            id={`category-${category.id}`}
            checked={productData.category.includes(category.id)}
            onChange={() => handleCategoryChange(category.id)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor={`category-${category.id}`} className="ml-2 text-sm">
            {category.name}
          </label>
          {renderCategories(category.id, level + 1)}
        </div>
      ));

  return (
    <>
      <div className="border border-gray-300 bg-white shadow-md rounded-md p-6">
        <h3 className="font-medium mb-3">All Categories</h3>
        <div className="space-y-2 max-h-[200px] overflow-hidden overflow-y-auto custom-scrollbar">
          {renderCategories()}
        </div>

        {/* Add New Category */}
        <div className="flex flex-col gap-2 mt-4">
          <input
            type="text"
            value={newCategory}
            onChange={handleNewCategoryChange}
            placeholder="Add new category"
            className="flex-1 px-3 py-2 border rounded-lg"
          />
          <select
            value={parentCategory || ""}
            onChange={handleParentCategoryChange}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="">No Parent</option>
            {categories
              .filter((cat) => cat.parent === null)
              .map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
          </select>
          <button
            type="button"
            onClick={handleAddCategory}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
