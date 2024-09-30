import { Add, FavoriteBorder, RemoveRedEye, Sync } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ratings from "../Common/Ratings";
import QuickViewProduct from "../UI/Modals/QuickViewProduct";

const GridViewProducts = ({filteredProducts}) => {

  const [openQuickView, setOpenQuickView] = useState(false);
  const [quickProduct, setQuickProduct] = useState({});

  

  const handleQuickView = (product) => {
    setQuickProduct(product);
  };

  return (
    <>
    <div className="relative">
      <div className="grid grid-cols-2 xl:grid-cols-5 992px:grid-cols-3 1000px:grid-cols-4 gap-[21px]">
        {filteredProducts.map((product, i) => {
          const hasAttributes =
            product?.attributes && Object.keys(product.attributes).length > 0;

          const isStock = product.stock == 0;

          const hasDiscount = product.discount_price > 0;

          return (
              <div key={i} className="product-card border border-[#e5e5e5] bg-white overflow-hidden group transition-all duration-500 ease-in-out">
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
                        className="absolute top-0 left-0 image opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in"
                        src={product.images[1].src}
                        alt={product.images[1].alt}
                      />
                    </div>
                  </Link>
                  <span className="absolute left-0 bottom-0 right-0 border-b-4 border-double border-[#e5e5e5]"></span>
                </figure>
                <div className="product-body w-full relative pt-[10px]">
                  {/* Ratings */}
                  <div className="mb-2.5">
                    <span className="inline-block text-center w-full">
                      <Ratings rating={product?.rating} />
                    </span>
                  </div>
                  {/* Title */}
                  <div className="mt-2.5 mb-1.5 px-2.5 group-hover:opacity-0 transition-all duration-500 ease-in-out">
                    <h3 className="text-ellipsis text-center overflow-hidden transition duration-300">
                      <Link
                        to={""}
                        className="text-[14px] leading-[18px] text-[#444] whitespace-nowrap"
                      >
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                  {/* Price */}
                  <div className="product-price px-2.5 mb-2.5  text-center">
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
                  {/* Add to cart button */}
                  <div
                    className="add-to-cart absolute right-[9%] left-[9%] top-[-21px] transition-all
                      duration-500 ease-in-out"
                  >
                    {!isStock ? (
                      <Link
                        to={""}
                        className="add-cart-link float-right w-9 h-9 leading-9 overflow-hidden bg-[#008459] lg: align-middle lg:text-center text-white hover:w-full hover:bg-[#fa9f00] transition-all duration-500 ease-in-out relative z-1 lg:font-bold font-semibold text-[12px]"
                      >
                        <span className="!font-bold mx-1 transition-all duration-500 ease-in-out">
                          <Add className="!h-[18px]" />
                        </span>
                        <span className="group-hover:opacity-100 opacity-0">
                          {hasAttributes ? "Choose options" : "Add to cart"}
                        </span>
                      </Link>
                    ) : (
                      <Link
                        to={""}
                        className="add-cart-link float-right w-9 h-9 leading-9 overflow-hidden bg-[#008459] lg:mx-auto align-middle lg:text-center text-white hover:w-full hover:bg-[#fa9f00] transition-all duration-500 ease-in-out relative z-1 font-bold text-[12px]"
                      >
                        <span className="!font-bold mx-1 transition-all duration-500 ease-in-out">
                          <Add className="!h-[18px]" />
                        </span>
                        <span className="group-hover:opacity-100 opacity-0">
                          Out of Stock
                        </span>
                      </Link>
                    )}
                  </div>

                  {/* wishlist, compare, quickview */}
                  <div className="absolute bg-white h-[46px] left-0 w-full pt-[5px] m-0 border-t border-[#e5e5e5] opacity-0 transition-all duration-500 ease-in-out bottom-[-50%] group-hover:-bottom-2.5 group-hover:opacity-100">
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

                      <button
                        onClick={() => {
                          setOpenQuickView(true), handleQuickView(product);
                        }}
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
          );
        })}
      </div>
    </div>
    {openQuickView && (
        <QuickViewProduct
          product={quickProduct}
          openQuickView={openQuickView}
          setOpenQuickView={setOpenQuickView}
        />
      )}
    </>
  );
};

export default GridViewProducts;
