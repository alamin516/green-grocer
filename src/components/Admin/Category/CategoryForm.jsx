import { useEffect, useState } from "react";
import { useAddCategoryMutation } from "../../../lib/features/category/categoryApi";
import toast from "react-hot-toast";

const CategoryForm = ({ categories = [], refetch }) => {
  const [formData, setFormData] = useState([]);
  const [previewImages, setPreviewImages] = useState({
    image: "",
    banner: "",
    cover: "",
  });
  const [addCategory, {data, isSuccess, error}] = useAddCategoryMutation();

  const isParentCategory = categories.filter((cat)=> cat.parent === null);

  useEffect(()=> {
    if (data) {
        toast.success(data.message)
        refetch()
    }
    if(error){
        toast.error(error.data.message)
    }
  }, [data, error, refetch])

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const file = files[0];
      convertToBase64(file, (base64) => {
        setFormData((prev) => ({
          ...prev,
          [name]: base64,
        }));
        setPreviewImages((prev) => ({
          ...prev,
          [name]: base64,
        }));
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Convert uploaded image to Base64
  const convertToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => callback(reader.result);
  };

  const handleSubmit = async() => {
    const data = {
        ...formData,
        type: "product"
    }
    console.log(data);
    await addCategory(data)
  };

  return (
    <div className="space-y-6">
      {/* Name Input */}
      <input
        type="text"
        name="name"
        placeholder="Category Name"
        value={formData.name || ""}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      {/* Slug Input */}
      <input
        type="text"
        name="slug"
        placeholder="Slug"
        value={formData.slug || ""}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
      />

      {/* Image Upload & Preview */}
      <div>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        {previewImages.image && (
          <img
            src={previewImages.image}
            alt="Image Preview"
            className="mt-2 h-32 w-32 object-cover rounded"
          />
        )}
      </div>

      {/* Banner Upload & Preview */}
      <div>
        <input
          type="file"
          name="banner"
          accept="image/*"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        {previewImages.banner && (
          <img
            src={previewImages.banner}
            alt="Banner Preview"
            className="mt-2 h-32 w-32 object-cover rounded"
          />
        )}
      </div>

      {/* Cover Upload & Preview */}
      <div>
        <input
          type="file"
          name="cover"
          accept="image/*"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        {previewImages.cover && (
          <img
            src={previewImages.cover}
            alt="Cover Preview"
            className="mt-2 h-32 w-32 object-cover rounded"
          />
        )}
      </div>

      {/* Parent Category Input */}
      {/* <input
        type="text"
        name="parent"
        placeholder="Parent Category ID"
        value={formData.parent || ""}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
      /> */}

<select
  name="parent"
  onChange={handleChange}
  className="w-full px-4 py-2 border rounded-md"
>
  <option value="">Select Parent Category</option>
  {isParentCategory.map((category, i) => {
    return (
      <option key={i} value={category._id}>
        {category.name}
      </option>
    );
  })}
</select>


      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>

      {/* Cancel Button */}
      {/* <button
        type="button"
        onClick={onCancel}
        className="ml-2 text-gray-500"
      >
        Cancel
      </button> */}
    </div>
  );
};

export default CategoryForm;
