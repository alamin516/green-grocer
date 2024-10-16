import React, { useState } from "react";

const initialTags = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Books" },
  { id: 4, name: "Home & Kitchen" },
];

const ProductTags = ({ productData, setProductData }) => {
  const [tags, setTags] = useState(initialTags);
  const [newTag, setNewTag] = useState("");

  // Handle Tag checkbox change
  const handleTagChange = (id) => {
    setProductData((prevData) => {
      const newTags = prevData.tags.includes(id)
        ? prevData.tags.filter((tagId) => tagId !== id) 
        : [...prevData.tags, id]; 
      return { ...prevData, tags: newTags };
    });
  };

  // Handle new Tag input change
  const handleNewTagChange = (e) => {
    setNewTag(e.target.value);
  };

  // Add a new Tag to the list
  const handleAddTag = () => {
    if (newTag.trim()) {
      const newId = tags.length + 1;
      setTags((prevTags) => [
        ...prevTags,
        { id: newId, name: newTag.trim() },
      ]);
      setNewTag("");
    }
  };

  return (
    <>
      {/* All Tags Section */}
      <div className="border border-gray-300 bg-white shadow-md rounded-md p-6">
        <h3 className="font-medium mb-3">All Tags</h3>
        <div className="space-y-2 max-h-[200px] overflow-hidden overflow-y-auto custom-scrollbar">
          {tags.map((tag) => (
            <div key={tag.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`tag-${tag.id}`}
                value={tag.id}
                checked={productData?.tags?.includes(tag.id)}
                onChange={() => handleTagChange(tag.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={`tag-${tag.id}`} className="text-sm">
                {tag.name}
              </label>
            </div>
          ))}
        </div>

        {/* Add New Tag */}
        <div className="flex flex-col gap-2 mt-4">
          <input
            type="text"
            value={newTag}
            onChange={handleNewTagChange}
            placeholder="Add new Tag"
            className="flex-1 px-3 py-2 border rounded-lg"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductTags;
