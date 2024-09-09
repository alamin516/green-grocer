import { ArrowBackIosNew, ArrowForwardIos, Close } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ImageMagnifier from "../ImageMagnifier";

const QuickViewProduct = ({ product, openQuickView, setOpenQuickView }) => {
  const [loading, setLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
    <div
      onClick={() => setOpenQuickView(false)}
      className={`quick-view fixed min-h-screen bg-[#000]/70 top-0 left-0 z-[99999] flex justify-center items-center transition-all ease-in-out duration-300 ${
        openQuickView ? "w-full opacity-100" : "w-0 opacity-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full lg:w-[80%] relative max-h-[90vh] overflow-hidden"
      >
        <span
          onClick={() => setOpenQuickView(false)}
          className="absolute top-2 right-5 bg-[#e5e5e5] h-10 w-10 rounded-full text-center leading-10 cursor-pointer z-50"
        >
          <Close />
        </span>
        {loading ? (
          <div className="py-[100px] w-full">
            <span className="h-16 w-16 mx-auto block rounded-full border-2 border-solid border-t-white border-[#008459] animate-spin"></span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-5 max-h-[90vh] overflow-y-auto  p-[30px] ">
              <div className="lg:col-span-2">
                <figure className="border border-[#e5e5e5] overflow-hidden relative">
                  {/* <img
                    src={product.images[previewImage].src}
                    alt={product.name}
                    className="w-full h-auto object-contain transition-all duration-300 ease-in-out cursor-crosshair"
                  /> */}

                  <ImageMagnifier
                    src={product.images[previewImage].src}
                    magnifierHeight={100}
                    magnifierWidth={100}
                    zoomLevel={2}
                    classes={`w-full h-auto object-contain transition-all duration-300 ease-in-out cursor-crosshair`}
                  />
                </figure>
                <Slider {...settings} className="mt-5 px-[50px]">
                  {product.images.map((image, index) => {
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
                          src={image.src}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="lg:col-span-3 p-5">
                <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
                <p className="text-gray-700 mb-5">{product.description}</p>
                <div className="flex items-center mb-5">
                  <span className="text-lg font-semibold text-red-500 mr-2">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm line-through text-gray-500">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <button className="px-5 py-2 bg-[#008459] text-white rounded hover:bg-[#006b3c] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuickViewProduct;
