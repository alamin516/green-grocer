import React from "react";
import Slider from "react-slick";

const BestSellerImageSlider = ({  hasDiscount, isOutOfStock, product }) => {

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div className="py-5 px-[15px]">
        {hasDiscount && (
          <span
            className={`bg-[#fa9f00] rounded-r-full text-white text-[13px]  leading-6 pl-[7px] pr-[11px] py-0 absolute top-5 left-0 z-10`}
          >
            sale
          </span>
        )}

        {isOutOfStock &&(
          <span
            className={`absolute top-0 left-0 right-0 bottom-0 h-20 w-20 z-10 bg-[#008459]  rounded-full m-auto text-white text-[13px] leading-[70px] p-[5px] opacity-90`}
          >
            Sold Out
          </span>
        )}
          <Slider {...settings}>
            {product?.images?.map((image, i) => 
              <div key={i} >
                <img
                className={`${isOutOfStock && "opacity-50"} object-contain h-[237px] transition-all duration-500 ease-in`}
                src={image.src}
                alt={image.alt}
              />
              </div>
            )}
          </Slider>
      </div>
    </div>
  );
};

export default BestSellerImageSlider;
