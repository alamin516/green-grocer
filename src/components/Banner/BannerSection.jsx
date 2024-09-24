import SlideBanner from "./SlideBanner";
import TopRightBanner from "./TopRightBanner";

const BannerSection = () => {
  return (
    <div className="top_banner pb-[30px]">
      <div className="section-container mx-auto px-[15px] grid lg:grid-cols-10 grid-cols-1 gap-[15px] lg:gap-[30px]">
        <div className="lg:col-span-6">
            <SlideBanner/>
        </div>
        <div className="lg:col-span-4">
            <TopRightBanner/>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
