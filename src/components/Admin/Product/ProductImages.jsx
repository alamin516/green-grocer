import { Close } from "@mui/icons-material";
import React, { useState, useEffect, useCallback } from "react";

const ProductImages = ({ productData, setProductData }) => {
  const [images, setImages] = useState(
    productData?.images || [{ url: "", alt: "" }]
  );

  useEffect(() => {
    setProductData((prev) => ({
      ...prev,
      images,
    }));
  }, [images, setProductData]);

  const handleImageChange = useCallback((index, field, value) => {
    setImages((prevImages) =>
      prevImages.map((img, i) =>
        i === index ? { ...img, [field]: value } : img
      )
    );
  }, []);

  const handleAddImage = useCallback(() => {
    setImages((prev) => [...prev, { url: "", alt: "" }]);
  }, []);

  const handleRemoveImage = useCallback((index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleImageUpload = useCallback((index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleImageChange(index, "url", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [handleImageChange]);

  const ImagePreview = ({ image }) => (
    <div className="w-28 h-28 border border-gray-300 rounded-md overflow-hidden">
      {image.url ? (
        <img
          src={image.url}
          alt={image.alt || "Uploaded Image"}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-sm text-gray-500 flex items-center justify-center h-full">
          No Image
        </span>
      )}
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-md mb-4">
      <h3 className="font-medium mb-3">Product Images</h3>

      {images.map((image, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          {/* Image Preview */}
          <label>
          <ImagePreview image={image} />
          </label>

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={(e) => handleImageUpload(index, e)}
            className="w-1/3 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-600 file:text-white file:cursor-pointer file:rounded-md"
          />

          {/* Alt Text Input */}
          <input
            type="text"
            placeholder="Alt text"
            value={image.alt}
            onChange={(e) => handleImageChange(index, "alt", e.target.value)}
            className="w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => handleRemoveImage(index)}
            className="text-red-500 hover:text-red-700 transition-colors"
            aria-label={`Remove image ${index + 1}`}
          >
            <Close/>
          </button>
        </div>
      ))}

      {/* Add New Image Button */}
      <button
        type="button"
        onClick={handleAddImage}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        aria-label="Add new image"
      >
        Add Image
      </button>
    </div>
  );
};

export default ProductImages;
