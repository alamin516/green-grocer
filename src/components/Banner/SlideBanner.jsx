import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  KeyboardArrowRight,
} from "@mui/icons-material";
import "./SlideBanner.css";

const SlideBanner = () => {
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slider-arrow slider-arrow-left" onClick={onClick}>
        <ArrowBackIosNew />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slider-arrow slider-arrow-right" onClick={onClick}>
        <ArrowForwardIos />
      </button>
    );
  };

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: () => (
      <div
        className="w-2 h-2 bg-gray-300 rounded-full hover:bg-[#fa9f00] transition-colors duration-200"
        style={{ cursor: "pointer" }}
      />
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="relative">
          <img
            src={
              "https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/original/carousel/27/slider-02__71477.jpg?c=1"
            }
            className="slider-image"
            alt="Slide 1"
          />
          <div className="slide-content absolute top-11 lg:top-36 left-5 lg:left-20">
            <p className="text-base lg:text-[36px] text-[#111] font-[300] lg:leading-[52px] uppercase lg:pb-[15px]">
              Always Fresh & Juicy
            </p>
            <h1 className="text-[25px] lg:text-[45px] text-[#111] capitalize font-bold lg:leading-[48px] lg:mb-[25px]">
              Vegetables Sauce
            </h1>
            <button className="mt-2.5 px-5 py-3 transition-all duration-500 ease-in-out bg-[#008459] text-white relative hover:pr-10 hover:bg-[#fa9f00] group">
              Show Now
              <span className="bg-[#fa9f00]  text-white h-5 w-5 text-base leading-5 rounded-full absolute top-0 bottom-0 right-[-10px] m-auto text-center flex items-center justify-center group-hover:bg-[#008459] duration-500 group-hover:right-[10px]">
                <KeyboardArrowRight style={{ fontSize: "16px" }} />
              </span>
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={
              "https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/original/carousel/26/slider-01__76247.jpg?c=1"
            }
            className="slider-image"
            alt="Slide 2"
          />
          <div className="slide-content absolute top-10 lg:top-36 left-5 lg:left-20">
            <p className="text-base lg:text-[36px] text-[#111] font-[300] lg:leading-[52px] uppercase lg:pb-[15px]">
              100% Organics
            </p>
            <h1 className="text-[25px] lg:text-[45px] text-[#111] capitalize font-bold lg:leading-[48px] lg:mb-[25px]">
              Fresh Fruits Juice
            </h1>
            <button className="mt-2.5 px-5 py-3 transition-all duration-500 ease-in-out bg-[#008459] text-white relative hover:pr-10 hover:bg-[#fa9f00] group">
              Show Now
              <span className="bg-[#fa9f00]  text-white h-5 w-5 text-base leading-5 rounded-full absolute top-0 bottom-0 right-[-10px] m-auto text-center flex items-center justify-center group-hover:bg-[#008459] duration-500 group-hover:right-[10px]">
                <KeyboardArrowRight style={{ fontSize: "16px" }} />
              </span>
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={
              "https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/original/carousel/28/slider-03.jpg?c=1"
            }
            className="slider-image"
            alt="Slide 3"
          />
          <div className="slide-content absolute top-10 lg:top-36 left-5 lg:left-20">
            <p className="text-base lg:text-[36px] text-[#111] font-[300] lg:leading-[52px] uppercase lg:pb-[15px]">
              Flat 25% Off
            </p>
            <h1 className="text-[25px] lg:text-[45px] text-[#111] capitalize font-bold lg:leading-[48px] lg:mb-[25px]">
              Fruits & Vegetables
            </h1>
            <button className="mt-2.5 px-5 py-3 transition-all duration-500 ease-in-out bg-[#008459] text-white relative hover:pr-10 hover:bg-[#fa9f00] group">
              Show Now
              <span className="bg-[#fa9f00]  text-white h-5 w-5 text-base leading-5 rounded-full absolute top-0 bottom-0 right-[-10px] m-auto text-center flex items-center justify-center group-hover:bg-[#008459] duration-500 group-hover:right-[10px]">
                <KeyboardArrowRight style={{ fontSize: "16px" }} />
              </span>
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlideBanner;
