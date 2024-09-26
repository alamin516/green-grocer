import { Drafts } from "@mui/icons-material";
import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#008459] w-full">
      <div className="section-container mx-auto px-[15px] py-[18px]">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-1/2 w-full lg:flex items-center text-white mb-[15px] lg:mb-0">
            <div className="lg:w-1/2 w-full lg:text-left text-center text-lg lg:mb-0 mb-2.5 capitalize lg:flex items-center justify-center gap-2">
              <span className="mb-2.5 lg:mb-0 block">
                <Drafts />
              </span>
              <span className="block leading-[18px]">Sign Up For Newsletter</span>
            </div>
            <div className="lg:w-1/2 w-full text-sm lg:leading-[45px] leading-6 lg:text-left text-center">
              ...and receive $20 coupon on next shopping
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex lg:justify-end">
            <form className="relative lg:max-w-[570px] w-full block">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border-[#e5e5e5] text-[13px] pr-[147px] pl-5 block h-[40px] outline-none "
              />
              <button
                type="submit"
                className="absolute top-0 right-0 px-8 bg-[#fa9f00] text-white py-2 h-10 border-[#fa9f00] hover:bg-[#000] hover:border-[#000]  transition-colors ease-in-out"
              >
                <span className="text-sm">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
