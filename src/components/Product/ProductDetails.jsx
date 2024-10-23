import React, { useState } from "react";
import ImageMagnifier from "../UI/ImageMagnifier";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import toast from "react-hot-toast";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DecodeHtml from "../../utils/DecodeHtml";

const ProductDetails = ({ product }) => {
  const [previewImage, setPreviewImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToCart = () => {
    setErrorMessage("");

    if (product.stock_quantity <= 0) {
      const errorText = `${product.title} is out of stock!`;
      setErrorMessage(errorText);
      toast.error(errorText);

      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    toast.success(`${product.title} added to cart!`);
    setErrorMessage("");
  };

  const CustomPrevArrow = (props) => {
    const { onClick, currentSlide } = props;

    return (
      <button
        className="absolute left-[15px] bottom-0 top-0 z-50 bg-[#e5e5e5] w-6 h-6 my-auto rounded-full disabled:hidden"
        onClick={onClick}
        disabled={currentSlide === 0}
      >
        <ArrowBackIosNew style={{ height: "14px" }} />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick, currentSlide, slidesToShow, slideCount } = props;
    return (
      <button
        className="absolute right-0 bottom-0 top-0 z-50 bg-[#e5e5e5] w-6 h-6 my-auto rounded-full disabled:hidden"
        onClick={onClick}
        disabled={currentSlide >= slideCount - slidesToShow}
      >
        <ArrowForwardIos style={{ height: "14px" }} />
      </button>
    );
  };

  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <CustomNextArrow
        currentSlide={currentSlide}
        slideCount={product.images}
        slidesToShow={4}
      />
    ),
    prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
    customPaging: () => (
      <div
        className="w-2 h-2 bg-gray-300 rounded-full hover:bg-[#fa9f00] transition-colors duration-200"
        style={{ cursor: "pointer" }}
      />
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={product.images}
              slidesToShow={4}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={product.images}
              slidesToShow={3}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={product.images}
              slidesToShow={4}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
      {
        breakpoint: 544,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={product.images}
              slidesToShow={4}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={product.images}
              slidesToShow={3}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={product.images}
              slidesToShow={3}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
    ],
  };


  

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 px-[15px]">
        {/* Product Image Slider */}
        <div className="w-full lg:w-5/12 space-y-5">
          <div className="">
            <figure className="border border-[#e5e5e5] overflow-hidden relative">
              {/* <img
                    src={product.images[previewImage].src}
                    alt={product.name}
                    className="w-full h-auto object-contain transition-all duration-300 ease-in-out cursor-crosshair"
                  /> */}

              <ImageMagnifier
                src={`${product.images[previewImage].url}`}
                magnifierHeight={100}
                magnifierWidth={100}
                zoomLevel={2}
                classes={`w-full h-[600px] object-contain transition-all duration-300 ease-in-out cursor-crosshair`}
              />
            </figure>
            <Slider {...settings} className="mt-5 px-[50px]">
              {product?.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setPreviewImage(index)}
                    className="px-[5px]"
                  >
                    <img
                      className={`${
                        previewImage === index
                          ? "border-[#111]"
                          : "border-[#e5e5e5]"
                      } border transition-all duration-300 ease-in-out `}
                      src={`${image.url}`}
                      alt={image.alt}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-7/12 space-y-5">
          <h1 className="text-lg font-bold">{product.title}</h1>

          <DecodeHtml content={product.short_description}/>

          <p className="text-xl text-gray-800 font-semibold">
            ${product.price}{" "}
            {product.discount_price > 0 && (
              <span className="line-through text-red-500 ml-2">
                ${product.discount_price}
              </span>
            )}
          </p>

          <p className="text-gray-500">
            Stock: {product?.stock_quantity > 0 ? "In Stock" : "Out of Stock"} (
            {product?.stock_quantity})
          </p>
          {errorMessage && (
            <p className="text-xs font-semibold text-red-500 transition-all duration-150 ease-in-out">
              {errorMessage}
            </p>
          )}
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition"
          >
            Add to Cart
          </button>

          <p className="text-sm text-gray-600 mt-3">
            Sold by: {product.seller?.name}
          </p>
        </div>
      </div>

      <div className="flex max-992px:flex-col gap-[30px] my-[30px] w-full">
        <div className="max-992px:w-full w-[70%]">
          {/* Product Description */}
          <div className=" bg-white shadow-sm p-4 mb-[15px] border border-[#e5e5e5]">
            {/* Heading */}
            <h2 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative lg:mb-0">
              <span className="relative bg-white z-[2] pr-[25px]">
                Description
              </span>
              <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
            </h2>
            <DecodeHtml content={product?.long_description}/>
          </div>

          {/* Specification */}
          {product?.specification?.length > 0 && (
            <div className="bg-white shadow-sm p-4 mb-[15px] border border-[#e5e5e5]">
              {/* Heading */}
              <h2 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative lg:mb-0">
                <span className="relative bg-white z-[2] pr-[25px]">
                  Product Specifications
                </span>
                <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
              </h2>

              {/* Table */}
              <table className="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                      Specification
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product?.specification.map((spec, index) => (
                    <tr key={index} className="even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium text-[#444]">
                        {spec.key}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-[#666]">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Product Review*/}
          <div className=" bg-white shadow-sm p-4 border border-[#e5e5e5]">
            {/* Heading */}
            <h2 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative lg:mb-0">
              <span className="relative bg-white z-[2] pr-[25px]">
                Product Reviews
              </span>
              <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
            </h2>
          </div>
        </div>
        <div className="max-992px:w-full w-[30%] bg-white shadow-sm rounded-sm p-4">
          sidebar
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
