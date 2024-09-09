import { Add, FavoriteBorder, RemoveRedEye, Sync } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Ratings from "../Common/Ratings";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [openQuickView,setOpenQuickView]=useState(false);

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
            const hasAttributes =
              product?.attributes && Object.keys(product.attributes).length > 0;

            const isStock = product.stock == 0;

            const hasDiscount = product.discount_price > 0;

            return (
              <div key={i}>
                <div className="grid grid-cols-2 border border-[#e5e5e5] mx-[15px]">
                  <div>
                    <figure className="product-figure relative">
                      <Link to="" className="inline-block py-5 px-[15px]">
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
                  <div className="p-5">
                    <p>Brand</p>
                    <h2>{product.name}</h2>
                    <p>Lorem ipsum dolor sit amet....</p>
                    {/* ============ Rating =========== */}
                    <div className="mb-2.5">
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
                    <div className="mb-2.5">
                        <span className="italic">Available : {product.stock}</span>
                        <span className="w-full h-2.5 rounded-full bg-[#fed700] inline-block"></span>
                    </div>

                    {/* ========== add to cart ========= */}
                    <div
                    className="add-to-cart  transition-all
                      duration-500 ease-in-out"
                  >
                    {!isStock ? (
                      <Link
                        to={""}
                        className="add-cart-link block w-full h-9 leading-9 overflow-hidden bg-[#008459] mx-auto align-middle text-center  text-white hover:w-full hover:bg-[#fa9f00] transition-all duration-500 ease-in-out relative z-1 font-bold"
                      >
                        <span className="!font-bold mx-1 transition-all duration-500 ease-in-out">
                          <Add style={{ height: "21px" }} />
                        </span>
                        <span className=" opacity-100">
                          {hasAttributes ? "Choose options" : "Add to cart"}
                        </span>
                      </Link>
                    ) : (
                      <Link
                        to={""}
                        className="add-cart-link block w-full h-9 leading-9 overflow-hidden bg-[#008459] mx-auto align-middle text-center  text-white hover:w-full hover:bg-[#fa9f00] transition-all duration-500 ease-in-out relative z-1 font-bold"
                      >
                        <span className="!font-bold mx-1 transition-all duration-500 ease-in-out">
                          <Add style={{ height: "21px" }} />
                        </span>
                        <span className="opacity-100">
                          Out of Stock
                        </span>
                      </Link>
                    )}
                  </div>
                  {/* ========== Icons ============== */}
                  <div className=" bg-white h-[46px]  w-full pt-[5px] m-0 border-t border-[#e5e5e5] opacity-100 transition-all duration-500 ease-in-out">
                    <div className="relative w-[120px] mx-auto">
                      <button className="w-10 h-9 leading-9 hover:text-[#111] text-[21px] text-[#888]">
                        <FavoriteBorder
                          style={{ height: "21px", lineHeight: "36px" }}
                        />
                      </button>

                      <button className="relative w-10 h-9 leading-9 hover:text-[#111] text-[21px] text-[#888] ">
                        <Sync style={{ height: "21px", lineHeight: "36px" }} />
                        <span className="absolute left-0 top-0 bottom-0 m-auto w-full h-[18px] border-x border-[#e5e5e5]"></span>
                      </button>

                      <button onClick={()=>setOpenQuickView(true)} className="w-10 h-9 leading-9 hover:text-[#111] text-[21px] text-[#888]">
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
    </div>
  );
};

export default BestSellers;
