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

const CreateProduct = () => {
  const [createProduct, { data, isLoading, isSuccess, error }] =
    useCreateProductMutation();
  const [productData, setProductData] = useState({
    title: "",
    long_description: "",
    short_description: "",
    price: "",
    stock_quantity: 0,
    category: [],
    tags: [],
    brand: [],
    status: "",
    stock_status: "in_stock",
    type: "simple",
    images: [],
    specification: [],
  });

  const validateProductData = () => {
    const { title, price, stock_quantity } = productData;

    if (!title.trim()) return "Product title is required.";
    if (isNaN(price) || price <= 0) return "Price is required";
    if (!Number.isInteger(stock_quantity) || stock_quantity < 0)
      return "Stock quantity cannot be negative.";
    return null;
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
    }
    if (error) {
      toast.success(error.data.message);
    }
  }, [isSuccess, error, data]);

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
      await createProduct({ ...productData, status: status });
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
          <ProductData
            handleChange={handleChange}
            productData={productData}
            setProductData={setProductData}
          />

          <ProductImages
            productData={productData}
            setProductData={setProductData}
          />

          <ProductSpecifications
            productData={productData}
            setProductData={setProductData}
          />

          <ProductSEO
            productData={productData}
            setProductData={setProductData}
          />
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
