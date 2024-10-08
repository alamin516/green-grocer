import { KeyboardArrowRight } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/banner/sub-banner-03.jpg"
import image2 from "../../assets/images/banner/sub-banner-02.jpg"

const SubBanner = () => {
  return (
    <div className="subbanner w-full lg:mb-10 relative">
      <div className="section-container mx-auto px-[15px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {subbanners.map((subbanner, i) => 
            <div key={i} className="subbanner-item relative">
              <Link to="#" className="subbanner-link">
                <img
                  src={subbanner.image}
                  alt={``}
                  className="w-full object-cover group-hover:scale-110 transition-transform ease-in-out duration-1000"
                  loading="lazy"
                />
              </Link>
              <div className={`subbanner-content absolute lg:top-[34px] md:top-[48px] top-[8px]  right-auto text-left ${subbanner.align === "left" ? "left-[30px] lg:w-[48%] text-left" : "left-[10px] w-[45%] text-center"}`}>
                <div className="text-sm lg:text-base mb-[5px] capitalize text-[#111] leading-5">
                  {subbanner.subtitle}
                </div>
                <div className="lg:text-[28px] text-lg capitalize text-[#111] font-bold lg:leading-[34px] lg:mb-[15px] mb-[8px]">
                {subbanner.title}
                </div>
                <div className="">
                  <Link
                    to={"#"}
                    className={`px-[15px] py-2 inline-block overflow-visible transition-all duration-500 ease-in-out  relative hover:pr-10 group font-bold ${subbanner.align === "center" ? "bg-white text-[#111] hover:bg-[#fa9f00] hover:text-white": "bg-[#fa9f00] text-white"}`}
                  >
                    Show Now
                    <span className="text-white h-5 w-5 text-base leading-5 rounded-full absolute top-0 bottom-0 right-[-10px] m-auto text-center flex items-center justify-center bg-[#008459] duration-500 group-hover:right-[10px]">
                      <KeyboardArrowRight style={{ fontSize: "16px" }} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubBanner;

const subbanners = [
  {
    id: 1,
    subtitle: "New Arrivals",
    title: "Choose your fresh taste",
    image: `${image1}`,
    align: "left",
  },
  {
    id: 2,
    subtitle: "New Arrivals",
    title: "100% natural healthy",
    image: `${image2}`,
    align: "center",
  },
  {
    id: 3,
    subtitle: "Big Deals",
    title: "Fresh & Healthy juice",
    image: `${image1}`,
    align: "left",
  },
];
