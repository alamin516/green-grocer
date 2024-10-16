import { ArrowDropDown, Close } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

const ProductSEO = ({ productData, setProductData }) => {
  const [open, setOpen] = useState(true);
  const [seoData, setSeoData] = useState({
    title: productData?.seo?.title || "",
    meta_description: productData?.seo?.meta_description || "",
    meta_keywords: productData?.seo?.meta_keywords || [],
    meta_image: {
      url: productData?.seo?.meta_image?.url || "",
      alt: productData?.seo?.meta_image?.alt || "",
    },
  });
  const [imagePreview, setImagePreview] = useState(seoData.meta_image.url);

  useEffect(() => {
    setProductData((prev) => ({
      ...prev,
      seo: seoData,
    }));
  }, [setProductData, seoData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSeoData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleKeywordAdd = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const newKeyword = e.target.value.trim();
      if (!seoData.meta_keywords.includes(newKeyword)) {
        setSeoData((prev) => ({
          ...prev,
          meta_keywords: [...prev.meta_keywords, newKeyword],
        }));
      }
      e.target.value = "";
    }
  };

  const handleKeywordRemove = (keyword) => {
    setSeoData((prev) => ({
      ...prev,
      meta_keywords: prev.meta_keywords.filter((k) => k !== keyword),
    }));
  };

  const handleMetaImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSeoData((prev) => ({
          ...prev,
          meta_image: {
            ...prev.meta_image,
            url: reader.result,
          },
        }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-2 bg-white p-6 rounded-md">
      {/* Header with Expand/Collapse */}
      <div
        className="flex justify-between items-center gap-5 cursor-pointer transition-all ease-in-out duration-300"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-medium">SEO</h3>
        <ArrowDropDown
          className={`${
            open ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        />
      </div>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "h-auto opacity-100 mt-5" : "h-0 opacity-0"
        }`}
      >
        {/* SEO Title */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="seo-title">
            SEO Title
          </label>
          <input
            type="text"
            id="seo-title"
            name="title"
            value={seoData.title}
            onChange={handleInputChange}
            placeholder="Enter SEO title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Meta Description */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="meta-description">
            Meta Description
          </label>
          <textarea
            id="meta-description"
            name="meta_description"
            value={seoData.meta_description}
            onChange={handleInputChange}
            placeholder="Enter meta description"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Meta Keywords */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="meta-keywords">
            Meta Keywords (Press Enter to add)
          </label>
          <div className="flex items-center gap-2 flex-wrap border border-gray-300 rounded-lg p-2">
            {seoData.meta_keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full flex items-center gap-2"
              >
                {keyword}
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleKeywordRemove(keyword)}
                >
                  <Close />
                </button>
              </span>
            ))}
            <input
              type="text"
              id="meta-keywords"
              onKeyDown={handleKeywordAdd}
              placeholder="Add keyword and press Enter"
              className="flex-1 px-2 py-1 outline-none"
            />
          </div>
        </div>

        {/* Meta Image Upload */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="meta-image">
            Meta Image
          </label>
          <input
            type="file"
            id="meta-image"
            accept="image/*"
            onChange={handleMetaImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
          {imagePreview && (
            <div className="mt-3">
              <img
                src={imagePreview}
                alt={seoData.meta_image.alt || "Meta Image Preview"}
                className="w-full h-auto max-h-64 object-contain rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Meta Image Alt */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="meta-image-alt">
            Meta Image Alt Text
          </label>
          <input
            type="text"
            id="meta-image-alt"
            name="alt"
            value={seoData.meta_image.alt}
            onChange={handleInputChange}
            placeholder="Enter alt text for the meta image"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSEO;
