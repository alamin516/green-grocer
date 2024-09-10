import {
  Add,
  ArrowBackIosNew,
  ArrowForwardIos,
  FavoriteBorder,
  RemoveRedEye,
  Sync,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Ratings from "../Common/Ratings";
import BestSellerImageSlider from "./BestSellerImageSlider";
import "./BestSellers.css";
import QuickViewProduct from "../UI/Modals/QuickViewProduct";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [openQuickView, setOpenQuickView] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quickProduct, setQuickProduct] = useState({});

  const handleQuickView = (product) => {
    setQuickProduct(product);
  };

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("/product.json");
      const data = await res.json();
      setProducts(data.best_seller);
    };
    dataFetch();
  }, []);

  const CustomPrevArrow = (props) => {
    const { onClick, currentSlide } = props;
    return (
      <button
        className="product-slider-arrow lg:top-[-45px] top-[-45px] arrow-left group transition-all duration-300 ease-in-out overflow-hidden"
        disabled={currentSlide === 0}
        onClick={onClick}
      >
        <span className="absolute w-full h-full left-[10px] opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300 bg-[#eee]">
          <ArrowBackIosNew />
        </span>
        <ArrowBackIosNew />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick, currentSlide, slidesToShow, slideCount } = props;
    return (
      <button
        className="product-slider-arrow arrow-right lg:top-[-45px] top-[-45px] relative group transition-all duration-300 ease-in-out overflow-hidden"
        disabled={currentSlide >= slideCount - slidesToShow}
        onClick={onClick}
      >
        <span className="absolute w-full h-full left-[-10px] opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300 bg-[#eee]">
          <ArrowForwardIos />
        </span>
        <ArrowForwardIos />
      </button>
    );
  };

  const beforeChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <CustomNextArrow
        currentSlide={currentSlide}
        slideCount={products.length}
        slidesToShow={3}
      />
    ),
    prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
    beforeChange: beforeChange,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={products.length}
              slidesToShow={1}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={products?.length}
              slidesToShow={1}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={products?.length}
              slidesToShow={1}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
    ],
  };

  return (
    <div className="seller-slider w-full mb-10 pt-10 relative bg-[#f4f5f7]">
      <div className="1500px:w-[1430px] mx-auto">
        <div className="px-[15px]">
          <h1 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative">
            <span className="relative bg-[#f4f5f7] z-[2] pr-[25px]">
              Best Sellers
            </span>
            <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#eee]"></span>
          </h1>
        </div>
        {/* ========== Best Sellers Slider =========== */}
        <Slider {...settings} className="mt-2.5 pb-[45px]">
          {products.map((product, i) => {
            const hasAttributes =
              product?.attributes && Object.keys(product.attributes).length > 0;

            const isOutOfStock = product.stock === 0;
            const hasDiscount = product.discount_price > 0;

            const best_sell = product.best_sell_availability;
            const availableStock = product.stock;
            const stockPercentage = best_sell > 0 ? ((best_sell - availableStock) / best_sell) * 100 : 0;

            return (
              <div key={i}>
                <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#e5e5e5] mx-[15px] bg-white">
                  <figure className="product-figure relative w-full">
                    <BestSellerImageSlider
                      product={product}
                      hasDiscount={hasDiscount}
                      isOutOfStock={isOutOfStock}
                      hasAttributes={hasAttributes}
                    />
                  </figure>
                  <div className="p-5 w-full">
                    <p className="text-sm text-[#666]">Brand</p>
                    <div className="mt-2.5 mb-1.5 text-lg text-ellipsis whitespace-nowrap overflow-hidden">
                      <Link to={""}>{product.name}</Link>
                    </div>
                    <p className="text-ellipsis mb-2.5">
                      Here is a three tiered wire basket to clean up
                    </p>
                    {/* ============ Rating =========== */}
                    <div className="my-2.5">
                      <span className="inline-block w-full">
                        <Ratings rating={product?.rating} />
                      </span>
                    </div>
                    {/* ============= Price =========== */}
                    <div className="product-price px-2.5 mb-2.5 ">
                      {hasDiscount ? (
                        <>
                          <div className="inline-block">
                            <span className="text-base text-[#008459] leading-[18px] font-semibold">
                              ${product.discount_price}
                            </span>
                          </div>
                          <div className="inline-block pl-1">
                            <span className="text-sm text-[#777] align-text-top line-through leading-4">
                              ${product.price}
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="inline-block">
                          <span className="text-base text-[#008459] leading-[18px] font-semibold">
                            ${product.price}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* ================ In-stock ========= */}
                    <div className="mb-5">
                      <div className="italic text-[13px] leading-5 text-[#666] mb-2.5">
                        {isOutOfStock
                          ? `Unavailable: 0`
                          : `Available: ${availableStock}`}
                      </div>
                      {isOutOfStock ?(
                        <div className="w-full h-2.5 rounded-full bg-[#f5f5f5]"></div>
                      ) : (
                        <div className="w-full h-2.5 rounded-full bg-[#f5f5f5] relative">
                          <span
                            style={{ width: `${stockPercentage}%` }}
                            className={`absolute block h-[100%] top-0 left-0 bg-[#fed700] rounded-full z-10`}
                          ></span>
                        </div>
                      )}
                    </div>

                    {/* ========== Add to Cart ========= */}
                    <div className="add-to-cart transition-all duration-500 ease-in-out h-10">
                      {isOutOfStock ? (
                        <Link
                          to={""}
                          title="Out of Stock"
                          className="add-cart-link inline-block px-5 py-0.5 leading-9 overflow-hidden bg-[#008459] hover:bg-[#fa9f00] text-[13px] text-white align-middle cursor-not-allowed relative z-1 font-semibold"
                        >
                          <span className="!font-bold mx-1 transition-all duration-500 ease-in-out">
                            <Add style={{ height: "16px" }} />
                          </span>
                          <span className="opacity-100">Out of Stock</span>
                        </Link>
                      ) : (
                        <Link
                          to={""}
                          className="add-cart-link inline-block px-5 py-0.5 leading-9 align-middle overflow-hidden bg-[#008459] text-[13px] text-white hover:bg-[#fa9f00] transition-all duration-500 ease-in-out relative z-1 font-semibold"
                        >
                          <span className="!font-bold mx-1 transition-all duration-500 ease-in-out">
                            <Add style={{ height: "16px" }} />
                          </span>
                          {hasAttributes ? "Choose Options" : "Add to cart"}
                        </Link>
                      )}
                    </div>

                    {/* ========== Icons ============== */}
                    <div className=" bg-white h-[46px] w-full pt-[5px] m-0 opacity-100 transition-all duration-500 ease-in-out">
                      <div className="relative w-[120px]">
                        <button title="Wishlist" className="w-10 h-9 leading-9 hover:text-[#111] text-[21px] text-[#888]">
                          <FavoriteBorder
                            style={{ height: "21px", lineHeight: "36px" }}
                          />
                        </button>

                        <button 
                        title="Compare"
                        className="relative w-10 h-9 leading-9 hover:text-[#111] text-[21px] text-[#888] ">
                          <Sync
                            style={{ height: "21px", lineHeight: "36px" }}
                          />
                          <span className="absolute left-0 top-0 bottom-0 m-auto w-full h-[18px] border-x border-[#e5e5e5]"></span>
                        </button>

                        <button
                          onClick={() => {
                            setOpenQuickView(true), handleQuickView(product);
                          }}
                          title="Quick View"
                          className="w-10 h-9 leading-9 hover:text-[#111] text-[21px] text-[#888]"
                        >
                          <RemoveRedEye
                            style={{ height: "21px", lineHeight: "36px" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {openQuickView && (
        <QuickViewProduct
          product={quickProduct}
          openQuickView={openQuickView}
          setOpenQuickView={setOpenQuickView}
        />
      )}
    </div>
  );
};

export default BestSellers;
