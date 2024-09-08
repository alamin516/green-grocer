import { useState } from "react";
import Slider from "react-slick";

import { ArrowBackIosNew, ArrowForwardIos, KeyboardArrowRight } from "@mui/icons-material";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Category.css";
import { Link } from "react-router-dom";
import bg5 from "../../assets/images/category/1.jpg";
import bg4 from "../../assets/images/category/2.jpg";
import bg3 from "../../assets/images/category/3.jpg";
import bg2 from "../../assets/images/category/4.jpg";
import bg1 from "../../assets/images/category/5.jpg";

const categories = [
  {
    _id: 1,
    name: "Shop All",
    bg_image: `${bg1}`,
    sub_category: [
      { _id: 11, name: "All Dairy Products" },
      { _id: 12, name: "All Fresh Vegetables" },
      { _id: 13, name: "All Breakfast & Dairy" },
      { _id: 14, name: "All Fresh Juice" },
      {_id: 1, name: "View All"}
    ],
  },
  {
    _id: 2,
    name: "Dairy Products",
    bg_image: `${bg2}`,
    sub_category: [
      { _id: 21, name: "Milk" },
      { _id: 22, name: "Cheese" },
      { _id: 23, name: "Yogurt" },
      {_id: 1, name: "View All"}
    ],
  },
  {
    _id: 3,
    name: "Fresh Vegetables",
    bg_image: `${bg3}`,
    sub_category: [
      { _id: 31, name: "Leafy Greens" },
      { _id: 32, name: "Root Vegetables" },
      { _id: 33, name: "Cruciferous Vegetables" },
      {_id: 1, name: "View All"}
    ],
  },
  {
    _id: 4,
    name: "Breakfast & Dairy",
    bg_image: `${bg4}`,
    sub_category: [
      { _id: 41, name: "Cereal" },
      { _id: 42, name: "Oats" },
      { _id: 43, name: "Butter" },
      {_id: 1, name: "View All"}
    ],
  },
  {
    _id: 5,
    name: "Fresh Juice",
    bg_image: `${bg5}`,
    sub_category: [
      { _id: 51, name: "Orange Juice" },
      { _id: 52, name: "Apple Juice" },
      { _id: 53, name: "Carrot Juice" },
      { _id: 1, name: "View All" },
    ],
  },
];

const CategorySlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const CustomPrevArrow = (props) => {
    const { onClick, currentSlide } = props;
    return (
      <button
        className="category-slider-arrow lg:top-[-55px] top-[-35px] arrow-left group transition-all duration-300 ease-in-out overflow-hidden"
        disabled={currentSlide === 0}
        onClick={onClick}
      >
        <span className="absolute w-full h-full left-[10px] opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300 bg-[#f5f5f5]">
          <ArrowBackIosNew />
        </span>
        <ArrowBackIosNew />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick, currentSlide, slidesToShow, slideCount } = props;
    return (
      <button
        className="category-slider-arrow arrow-right lg:top-[-55px] top-[-35px] relative group transition-all duration-300 ease-in-out overflow-hidden"
        disabled={currentSlide >= slideCount - slidesToShow}
        onClick={onClick}
      >
        <span className="absolute w-full h-full left-[-10px] opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300 bg-[#f5f5f5]">
          <ArrowForwardIos />
        </span>
        <ArrowForwardIos />
      </button>
    );
  };

  const beforeChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: (
      <CustomNextArrow
        currentSlide={currentSlide}
        slideCount={categories.length}
        slidesToShow={4}
      />
    ),
    prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
    beforeChange: beforeChange,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={categories.length}
              slidesToShow={2}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={categories.length}
              slidesToShow={1}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
    ],
  };
  return (
    <div className="category-slider w-full mb-10 relative">
      <div className="1500px:w-[1430px] mx-auto">
        <div className="px-[15px]">
          <h1 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative lg:mb-5">
            <span className="relative bg-white z-[2] pr-[25px]">
              Shop Categories
            </span>
            <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
          </h1>
        </div>

        {/* Category slide */}
        <Slider {...settings}>
          {categories.map((category, i) => (
            <div
              key={i}
              className="category-card min-h-[320px] bg-white mr-[15px] border !border-[#eee] w-full relative group"
            >
              <div className="w-full overflow-hidden absolute right-0 bottom-0 z-0">
                <Link to={`/${category.name}`}>
                  <img
                    src={category.bg_image}
                    alt={`Banner ${i + 1}`}
                    className="w-full object-cover group-hover:scale-110 transition-transform ease-in-out duration-1000"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="w-full py-2.5 px-5 z-[9]">
                <h4 className="my-2.5">
                  <Link to="#" className="text-base font-semibold relative">
                    {category.name}
                  </Link>
                </h4>
                {category?.sub_category.map((item, i) => (
                  <span key={i} className="block leading-[26px]">
                    <Link to={`/${category.name}/${item._id}`} className="text-sm  text-[#666] relative">
                      <KeyboardArrowRight fontSize="12px"/>{" "}{item.name}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlide;
