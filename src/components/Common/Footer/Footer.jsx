import { LocalPhone, LocationOn, MailOutline } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../../assets/images/icons/download.svg";

const Footer = () => {
  return (
    <div className="footer border-t border-[#f5f5f5]">
      {/* Footer top */}
      <div className="footer-top">
        <div className="1500px:w-[1430px] px-[15px] mx-auto pt-[60px] pb-2.5">
          <div className="footer-links grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-5">
            <div className="footer-info">
              <article>
                <h5 className="mb-5 cursor-pointer text-lg font-semibold leading-[22px] capitalize">
                  Info
                </h5>
                <div className="flex gap-[5px] mb-2">
                  <LocationOn className="!text-lg" />
                  <div className="text-sm leading-[21px] text-[#666]">
                    Dhaka 1205, <br />
                    Bangladesh
                  </div>
                </div>
                <div className="flex items-center gap-[5px] mb-2 ">
                  <MailOutline className="!text-lg" />
                  <a
                    href="mailto:support@yourstore.com"
                    className="text-sm leading-[21px] text-[#666]"
                  >
                    support@yourstore.com
                  </a>
                </div>
                <div className="flex items-center gap-[5px] mb-2 ">
                  <LocalPhone className="!text-lg" />
                  <a
                    href="1-999-564-666"
                    className="text-lg font-bold leading-[21px] text-[#111]"
                  >
                    1-999-564-666
                  </a>
                </div>
              </article>
            </div>
            <div className="footer-page-links">
              <article>
                <h5 className="mb-5 cursor-pointer text-lg font-semibold leading-[22px] capitalize">
                  Navigate
                </h5>
                <ul className="grid grid-cols-2 gap-x-5">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <li key={i}>
                      <Link className="text-sm leading-6 text-[#666]" to="/">
                        Home
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="footer-categories">
              <article>
                <h5 className="mb-5 cursor-pointer text-lg font-semibold leading-[22px] capitalize">
                  Categories
                </h5>
                <ul className="grid grid-cols-2 gap-x-5">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <li key={i}>
                      <Link className="text-sm leading-6 text-[#666]" to="/">
                        Category
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="footer-brands">
              <article>
                <h5 className="mb-5 cursor-pointer text-lg font-semibold leading-[22px] capitalize">
                  Popular brands
                </h5>
                <ul className="">
                  {[
                    "OFS",
                    "Sagaform",
                    "Mountain Climbing",
                    "Premium Quality",
                    "Trendyzone",
                    "lenovo mobile",
                  ].map((brand, i) => (
                    <li key={i} className="w-auto float-left mr-[5px] mb-[5px]">
                      <Link
                        className="block w-auto text-sm leading-6 text-[#666] bg-[#f7f7f7] px-4 py-[7px] rounded-[5px]"
                        to="/"
                      >
                        {brand}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
          <div className="footer-services mt-10 py-10 bg-[#f7f7f7]">
            <div className="px-[30px] grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-5 lg:gap-x-2.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="my-4 py-2.5 flex group">
                  <img
                    className="transition-transform duration-300 group-hover:rotate-y-[180deg]"
                    src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/stencil/efa88c60-1817-0139-598a-0242ac11000c/e/b7582320-cd53-0138-055f-0242ac11000e/img/service-01.png"
                  />
                  <div className="pl-3 pt-2.5">
                    <h3 className="text-base font-semibold leading-6">
                      Get free delivery{" "}
                    </h3>
                    <p className="text-[13px] text-[#666] leading-6">
                      On Worldwide
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-payments hidden">
            <div className="mt-[15px] py-[15px]">
              <h3 className="text-base font-semibold leading-6 hidden">
                Payments
              </h3>
              <div className="py-[15px] flex gap-x-[5px] justify-center items-center">
                <div className="">
                  <img src={icon1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom border-t-[#f7f7f7] bg-[#f7f7f7]">
        <div className="1500px:w-[1430px] px-[15px] mx-auto">
          <div className="">
            <span className="text-sm text-[#666] leading-[50px]">
              Powered by TeamDevFast {new Date().getFullYear()} Organics
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
