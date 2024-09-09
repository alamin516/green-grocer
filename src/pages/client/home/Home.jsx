import BannerSection from "../../../components/Banner/BannerSection";
import OfferBanner from "../../../components/Banner/OfferBanner";
import SubBanner from "../../../components/Banner/SubBanner";
import BestSellers from "../../../components/BestSellers/BestSellers";
import CategorySlide from "../../../components/Category/CategorySlide";
import ProductSlider from "../../../components/Product/ProductSlider";
import SEO from "../../../components/Seo";

function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="This is the home page of my React app."
        keywords={["react", "home", "SEO"]}
        image=""
        url=""
      />
      <BannerSection />
      <OfferBanner />
      <CategorySlide />
      <SubBanner/>
      <ProductSlider/>
      <BestSellers/>
    </>
  );
}

export default Home;
