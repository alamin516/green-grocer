import Slider from "react-slick";
import image5 from "../../assets/images/offer/offer-img-05.jpg";
import image4 from "../../assets/images/offer/offer-img-04.jpg";
import image3 from "../../assets/images/offer/offer-img-03.jpg";
import image2 from "../../assets/images/offer/offer-img-02.jpg";
import image1 from "../../assets/images/offer/offer-img-01.jpg";
import {
  KeyboardArrowRight,
} from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const OfferBanner = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <div className="offer-slider w-full lg:py-[30px] py-[15px] lg:px-[15px] lg:mb-[30px] bg-gray-100 relative">
      <Slider {...settings} className="section-container px-[15px] mx-auto">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="offer-card bg-white py-4 !mr-[15px] !flex items-center transition-shadow duration-300 ease-in-out"
          >
            <div className="w-1/3 border-r-4 border-double border-[#e5e5e5]">
              <img
                src={offer.img}
                alt={`Banner ${i + 1}`}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-2/3 pl-[15px] pt-5">
              <div className="text-xs leading-[18px] font-semibold text-[#b00e23] uppercase mb-1">
                {offer.range}
              </div>
              <div className="text-lg leading-6 font-bold text-[#111] my-[5px]">
                {offer.product}
              </div>
              <div className="text-[13px] text-[#008459] font-normal leading-6 flex items-center cursor-pointer hover:text-[#fa9f00] transition-colors duration-200">
               {offer.offer}
                <span className="ml-1">
                  <KeyboardArrowRight />
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferBanner;




const offers = [
    {
      img: `${image1}`,
      range: "Big Range Of",
      product: "Organic Milk",
      offer: "Up To 30% Off",
    },
    {
      img: `${image2}`,
      range: "Big Range Of",
      product: "Fresh Vegetables",
      offer: "Up To 25% Off",
    },
    {
      img: `${image3}`,
      range: "Big Range Of",
      product: "Quality Meat",
      offer: "Up To 20% Off",
    },
    {
      img: `${image4}`,
      range: "Big Range Of",
      product: "Daily Essentials",
      offer: "Up To 40% Off",
    },
    {
      img: `${image5}`,
      range: "Big Range Of",
      product: "Organic Spices",
      offer: "Up To 15% Off",
    },
  ];