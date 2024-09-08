import { Link } from "react-router-dom";
import banner1 from "../../assets/images/banner/top-banner-01.jpg";
import banner2 from "../../assets/images/banner/top-banner-02.jpg";
import banner3 from "../../assets/images/banner/top-banner-03.jpg";
import banner4 from "../../assets/images/banner/top-banner-04.jpg";

const TopRightBanner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-[30px] gap-[15px]">
      <div className="banner-card">
        <div className="relative banner-item">
          <Link to="/" className="banner-link">
            <img src={banner1} alt="" className="aspect-[300/252] w-full" width={300} height={260}/>
          </Link>
          <div className="absolute w-full top-0 left-0 mt-5 text-center">
            <div className="text-base leading-5 mb-[5px] capitalize text-[#222]">Season Sale</div>
            <div className="mb-[15px] text-[22px] leading-[26px] capitalize text-[#111] font-bold">Daily Eating</div>
          </div>
        </div>
      </div>
      <div className="banner-card">
        <div className="relative banner-item">
          <Link to="/" className="banner-link">
            <img src={banner2} alt="" className="aspect-[300/252] w-full" width={300} height={260}/>
          </Link>
          <div className="absolute w-full top-0 left-0 mt-5 text-center">
            <div className="text-base leading-5 mb-[5px] capitalize text-[#222]">Season Sale</div>
            <div className="mb-[15px] text-[22px] leading-[26px] capitalize text-[#111] font-bold">Daily Eating</div>
          </div>
        </div>
      </div>
      <div className="banner-card">
        <div className="relative banner-item">
          <Link to="/" className="banner-link">
            <img src={banner3} alt="" className="aspect-[300/252] w-full" width={300} height={260}/>
          </Link>
          <div className="absolute w-full top-0 left-0 mt-5 text-center">
            <div className="text-base leading-5 mb-[5px] capitalize text-[#222]">Season Sale</div>
            <div className="mb-[15px] text-[22px] leading-[26px] capitalize text-[#111] font-bold">Daily Eating</div>
          </div>
        </div>
      </div>
      <div className="banner-card">
        <div className="relative banner-item">
          <Link to="/" className="banner-link">
            <img src={banner4} alt="" className="aspect-[300/252] w-full" width={300} height={260}/>
          </Link>
          <div className="absolute w-full top-0 left-0 mt-5 text-center">
            <div className="text-base leading-5 mb-[5px] capitalize text-[#222]">Season Sale</div>
            <div className="mb-[15px] text-[22px] leading-[26px] capitalize text-[#111] font-bold">Daily Eating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRightBanner;
