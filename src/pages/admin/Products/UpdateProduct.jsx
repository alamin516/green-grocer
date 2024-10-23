import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  useGetSingleProductByIdQuery,
  useUpdateProductMutation,
} from "../../../lib/features/product/productApi";
import ProductCategories from "../../../components/Admin/Product/ProductCategories";
import ProductTags from "../../../components/Admin/Product/ProductTags";
import ProductSEO from "../../../components/Admin/Product/ProductSEO";
import ProductBrands from "../../../components/Admin/Product/ProductBrands";
import ProductData from "../../../components/Admin/Product/ProductData";
import ProductSpecifications from "../../../components/Admin/Product/ProductSpecifications";
import ProductImages from "../../../components/Admin/Product/ProductImages";
import toast from "react-hot-toast";
import Loading from "../../../components/Loading/Loading";
import TextEditor from "../../../utils/TextEditor";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useGetSingleProductByIdQuery(id);
  const [
    updateProduct,
    { isLoading: updating, isError: updateError, isSuccess },
  ] = useUpdateProductMutation();

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
    stock_status: "",
    type: "",
    sku: "",
  });

  const [imageData, setImageData] = useState([{ url: "", alt: "" }]);

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

  const product = data?.product;

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product updated successfully!");
    //   navigate("/admin/products");
      refetch();
    }
  }, [isSuccess, navigate, refetch]);

  useEffect(() => {
    if (product) {
      setProductData({
        title: product.title,
        long_description: product.long_description,
        short_description: product.short_description,
        price: product.price,
        discount_price: product.discount_price,
        stock_quantity: product.stock_quantity,
        category: product.category,
        tags: product.tags,
        status: product.status,
        stock_status: product.stock_status,
        type: product.type,
      });
      setImageData(product.images);
      setSeoData(product.seo);
      setSpecificationData(product?.specification);
    }
  }, [product]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const validateProductData = () => {
    const { title, price } = productData;

    if (imageData[imageData.length - 1]?.url === "")
      return "Image field is empty";
    if (!title.trim()) return "Product title is required.";
    if (isNaN(price) || price <= 0) return "Price must be a positive number.";
    return null;
  };

  const handleProductUpdate = async (status) => {
    const error = validateProductData();
    if (error) {
      toast.error(error);
      return;
    }

    const formatImageData = imageData.map((image) => ({
      url: image.url,
      alt: image.alt,
    }));

    const formatSpecification = specificationData.map((specification) => ({
      key: specification.key,
      value: specification.value,
    }));

    const updatedProduct = {
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
      specification: formatSpecification,
      status: status,
      seo: seoData,
      images: formatImageData,
    };
    try {
      await updateProduct({
        id: data?.product?._id,
        product: updatedProduct,
      }).unwrap();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update product.");
    }
  };

  if (isLoading || updating)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-44px)]">
        <Loading padding="100px" classes="w-16 h-16" />
      </div>
    );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Update Product</h2>
        <Link to={`/product/${data?.product?.slug}`} target="_blank">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-lg"
          >
            View
          </button>
        </Link>
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
              onChange={handleInputChange}
            />
          </div>

          <TextEditor
            productData={productData}
            setProductData={setProductData}
            title="Long Description"
            dataKey="long_description"
          />

          <ProductData
            handleChange={handleInputChange}
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
          <div className="bg-white shadow-md rounded-md p-6">
            <label className="block font-medium mb-2">Product Status</label>
            <select
              name="status"
              className="w-full border rounded-md px-4 py-2"
              value={productData.status || "draft"}
              onChange={handleInputChange}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>

            <div className="flex justify-between gap-2 mt-4">
              <button
                onClick={() => handleProductUpdate("draft")}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded-lg"
                disabled={updating}
              >
                Save Draft
              </button>
              <button
                onClick={() => handleProductUpdate("published")}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-lg"
                disabled={updating}
              >
                Publish
              </button>
            </div>

            {updateError && <p className="text-red-500 mt-2">Update failed.</p>}
          </div>

          <br />
          <ProductCategories
            productData={productData}
            setProductData={setProductData}
          />
          <br />
          <ProductTags
            productData={productData}
            setProductData={setProductData}
          />
          <br />
          <ProductBrands
            productData={productData}
            setProductData={setProductData}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
