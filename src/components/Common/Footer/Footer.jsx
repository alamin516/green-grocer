import { LocationOn } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      {/* Footer top */}
      <div className="footer-top">
        <div className="1500px:w-[1430px] px-[15px] mx-auto pt-[60px] pb-2.5">
          <div className="footer-links grid grid-cols-4">
            <div className="footer-info">
              <article>
                <h5 className="mb-5 cursor-pointer text-lg font-semibold leading-[22px] capitalize">
                  Info
                </h5>
                <div className="flex gap-[5px]">
                  <LocationOn />
                  <div className="text-sm leading-[21px] text-[#666]">
Dhaka 1205
                  </div>
                </div>
              </article>
            </div>
            <div className="footer-page-links">
              <article>
                <h5 className="mb-5 cursor-pointer text-lg font-semibold leading-[22px] capitalize">
                  Navigate
                </h5>
              </article>
            </div>
            <div className="footer-categories">
              <article>
                <h5 className="mb-5 cursor-pointer text-lg font-semibold leading-[22px] capitalize">
                  Categories
                </h5>
              </article>
            </div>
            <div className="footer-brands">
              <article>
                <h5 className="mb-5 cursor-pointer text-lg font-semibold leading-[22px] capitalize">
                  Popular brands
                </h5>
              </article>
            </div>
          </div>
          <div className="footer-services"></div>
          <div className="footer-payments"></div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom"></div>
    </div>
  );
};

export default Footer;
