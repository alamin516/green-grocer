import { useNavigate, useParams } from "react-router-dom";
import { useEffect} from "react";
import { useGetProductsQuery } from "../../../lib/features/product/productApi.js";
import Loading from "../../../components/Loading/Loading.jsx";
import SEO from "../../../components/Seo.jsx";
import Breadcrumbs from "../../../components/Common/Breadcrumbs.jsx";

import ProductSlider from "../../../components/Product/ProductSlider.jsx";

import { useDispatch, useSelector } from "react-redux";
import { addRecentProduct } from "../../../lib/features/product/recentProductsSlice.js";
import ProductDetails from "../../../components/Product/ProductDetails.jsx";

const ProductSingle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const {
    data: productsData = {},
    isLoading,
    isError,
  } = useGetProductsQuery({});
  const dispatch = useDispatch();
  const recentViewsProduct = useSelector((state) => state.recentViews.products);

  const products = productsData.payload?.products?.all_products || [];
  const product = products.find((a) => a.slug === slug);
  const isExistId = products.filter((a) => a?._id !== product?._id);

  useEffect(() => {
    if (product) {
      dispatch(addRecentProduct(product));
    }
  }, [product, dispatch]);;

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full min-h-screen bg-black/30 flex justify-center items-center z-[99999]">
        <Loading padding={"100px"} classes={"w-16 h-16"} />
      </div>
    );
  }

  if (!product) {
    return navigate("/error-page");
  }

  if (isError) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-red-500">
          Product not found!
        </h2>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={product?.seo?.title || product.title}
        description={product?.long_description}
        keywords={product?.seo?.keywords}
        image={product?.seo?.meta_image?.url}
      />

      <Breadcrumbs pageTitle={product.title} />

      <div className="w-full blog-slider mb-5 pb-10">
        <div className="section-container mx-auto">
          <ProductDetails product={product}/>

          {/* Related, Best Selling, Featured, Recently Viewed */}
          <div className="mt-16 space-y-10">
            <ProductSlider
              productsData={isExistId}
              title={"Related Products"}
            />
            <ProductSlider
              productsData={isExistId}
              title={"Best Selling Products"}
            />
            <ProductSlider
              productsData={isExistId}
              title={"Featured Products"}
            />
            <ProductSlider productsData={recentViewsProduct} title={"Recently Viewed"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSingle;
