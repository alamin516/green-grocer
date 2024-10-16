import { useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/Common/Breadcrumbs.jsx";
import { useGetSingleProductQuery } from "../../../lib/features/product/productApi.js";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading.jsx";

const ProductSingle = () => {
  const { slug } = useParams();
  const { data, isLoading, isError } = useGetSingleProductQuery(slug); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (data) setProduct(data.product); 
  }, [data]);


  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full min-h-screen bg-black/80 flex justify-center items-center z-[99999]">
        <Loading padding={"100px"} classes={"w-16 h-16"} />
      </div>
    );
  }

  if (isError || !product) {
    // Handle error or missing product
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-red-500">Product not found!</h2>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs pageTitle={"Product"} />
      <div className="w-full py-5 px-2.5 mb-[30px]">
        <div className="section-container px-[15px] mx-auto">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="mt-4">{product.long_description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductSingle;
