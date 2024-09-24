import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({pageTitle = "Error"}) => {
  return (
    <div className="breadcrumbs w-full py-5 px-2.5 mb-[30px] bg-[#f5f5f5]">
      <div className="section-container px-[15px] mx-auto ">
        <div className="flex justify-between items-center">
            <h1 className="text-base leading-5 text-[#000] font-bold">{pageTitle}</h1>
            <div className="flex items-center">
                <Link to="/" className="text-[#666] text-sm leading-5">Home</Link>
                <span className="px-4 leading-5">/</span>
                <h3 className="text-[#000] text-sm leading-5">{pageTitle}</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
