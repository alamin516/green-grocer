import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("/product.json");
      const data = await res.json();
      setProducts(data);
    };
    dataFetch();
  }, []);

  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="seller-slider w-full mb-10 relative">
      <div className="1500px:w-[1430px] mx-auto">
        <div className="px-[15px]">
          <h1 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative lg:mb-5">
            <span className="relative bg-white z-[2] pr-[25px]">
              Best Sellers
            </span>
            <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
          </h1>
        </div>
        {/* ========== Best Sellers Slider =========== */}
        <Slider {...settings} className="px-[15px]">
          {products.map((product, i) => {
            // const hasAttributes =
            //   product?.attributes && Object.keys(product.attributes).length > 0;

            const isStock = product.stock == 0;

            const hasDiscount = product.discount_price > 0;

            return (
              <div key={i}>
                <div className="grid grid-cols-2 border border-[#e5e5e5] mx-[15px]">
                  <div>
                    <figure className="product-figure relative">
                      <Link to="" className="inline-block">
                        {hasDiscount && (
                          <span
                            className={`bg-[#fa9f00] rounded-r-full text-white text-[13px]  leading-6 pl-[7px] pr-[11px] py-0 absolute top-5 left-0 z-10`}
                          >
                            sale
                          </span>
                        )}

                        {isStock && (
                          <span
                            className={`absolute top-0 left-0 right-0 bottom-0 h-20 w-20 z-10 bg-[#008459]  rounded-full m-auto text-white text-[13px] leading-[70px] p-[5px] opacity-90`}
                          >
                            Sold Out
                          </span>
                        )}
                        <div
                          className={`product-image relative max-w-full ${
                            isStock ? "opacity-50" : "opacity-100"
                          }`}
                        >
                          <img
                            className="group-hover:opacity-0 transition-all duration-500 ease-in"
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                          />
                          <img
                            className="image opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in"
                            src={product.images[1].src}
                            alt={product.images[1].alt}
                          />
                        </div>
                      </Link>
                      <span className="absolute left-0 bottom-0 right-0 border-b-4 border-double border-[#e5e5e5]"></span>
                    </figure>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default BestSellers;
