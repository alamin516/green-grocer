import React, { useEffect, useState } from "react";
import { useCreateProductMutation } from "../../../lib/features/product/productApi";
import ProductCategories from "../../../components/Admin/Product/ProductCategories";
import ProductTags from "../../../components/Admin/Product/ProductTags";
import ProductSEO from "../../../components/Admin/Product/ProductSEO";
import ProductBrands from "../../../components/Admin/Product/ProductBrands";
import ProductData from "../../../components/Admin/Product/ProductData";
import toast from "react-hot-toast";
import Loading from "../../../components/Loading/Loading";
import ProductSpecifications from "../../../components/Admin/Product/ProductSpecifications";
import ProductImages from "../../../components/Admin/Product/ProductImages";
import { useNavigate } from "react-router-dom";
import TextEditor from "../../../utils/TextEditor";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [createProduct, { data, isLoading, isSuccess, error }] =
    useCreateProductMutation();
  const [productData, setProductData] = useState({
    title: "",
    long_description: "",
    short_description: "",
    price: 0,
    discount_price: 0,
    stock_quantity: 0,
    category: [],
    tags: [],
    brand: [],
    status: "",
    stock_status: "in_stock",
    type: "simple",
  });

  const [imageData, setImageData] = useState([
    {
      url: "",
      alt: "",
    },
  ]);

  const [seoData, setSeoData] = useState({
    title: "",
    meta_description: "",
    meta_keywords: [],
    meta_image: {
      url: "",
      alt: "",
    },
  });

  const [specificationData, setSpecificationData] = useState([
    { key: "", value: "" },
  ]);

  const validateProductData = () => {
    const { title, price, stock_quantity } = productData;

    if (!title.trim()) return "Product title is required.";
    if (isNaN(price) || price <= 0) return "Price is required";
    if (stock_quantity < 0) return "Stock quantity cannot be negative.";
    return null;
  };

  useEffect(() => {
    if (data) {
      toast.success(data?.message);
      navigate(`/admin/edit-product/${data?.data?._id}`);
    }
    if (error) {
      toast.success(error.data.message);
    }
  }, [isSuccess, error, data, navigate]);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleProductSave = async (status) => {
    try {
      const error = validateProductData();
      if (error) {
        toast.error(error);
        return;
      }

      const newProduct = {
        title: productData.title,
        long_description: productData.long_description,
        short_description: productData.short_description,
        price: productData.price,
        discount_price: productData.discount_price,
        stock_quantity: productData.stock_quantity,
        category: productData.category,
        tags: productData.tags,
        brand: productData.brand,
        stock_status: productData.stock_status,
        type: productData.type,
        status: status,
        seo: seoData,
        images: imageData,
        specification: specificationData,
      };

      await createProduct(newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loading padding={"100px"} classes={"w-16 h-16"} />;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Create product</h2>
      </div>

      <div className="flex max-992px:flex-col gap-6">
        {/* Main Product Data Section */}
        <div className="lg:w-[calc(100%-320px)]">
          
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
            productData={productData}
            setProductData={setProductData}
            title="Long Description"
            dataKey="long_description"
          />

          <ProductData
            handleChange={handleChange}
            productData={productData}
            setProductData={setProductData}
          />

          <TextEditor
            productData={productData}
            setProductData={setProductData}
            title="Short Description"
            dataKey="short_description"
          />

          <ProductImages
            productData={imageData}
            setProductData={setImageData}
          />

          <ProductSpecifications
            specificationData={specificationData}
            setSpecificationData={setSpecificationData}
          />

          <ProductSEO productData={seoData} setProductData={setSeoData} />
        </div>

        {/* Sidebar Options */}
        <div className="lg:w-80">
          {/* Product Status */}
          <div className="bg-white shadow-md rounded-md  p-6">
            <div className="mb-6 ">
              <label className="block font-medium mb-2">Product Status</label>
              <select
                name="status"
                className="w-full border rounded-md px-4 py-2"
                value={productData.status}
                onChange={handleChange}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            {/* Save / Publish Buttons */}
            <div className="flex justify-between gap-2">
              <button
                onClick={() => handleProductSave("draft")}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded-lg"
              >
                Save Draft
              </button>
              <button
                onClick={() => handleProductSave("published")}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-lg"
              >
                Publish
              </button>
            </div>
          </div>
          <br />

          {/* All Categories Section */}
          <ProductCategories
            productData={productData}
            setProductData={setProductData}
          />
          <br />
          {/* Tags */}
          <ProductTags
            productData={productData}
            setProductData={setProductData}
          />
          <br />
          {/* Brand */}
          <ProductBrands
            productData={productData}
            setProductData={setProductData}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
