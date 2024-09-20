import BannerSection from "../../../components/Banner/BannerSection";
import BottomBanner from "../../../components/Banner/BottomBanner";
import OfferBanner from "../../../components/Banner/OfferBanner";
import SubBanner from "../../../components/Banner/SubBanner";
import BestSellers from "../../../components/BestSellers/BestSellers";
import CategorySlide from "../../../components/Category/CategorySlide";
import NewProducts from "../../../components/Product/NewProducts";
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
      <BottomBanner/>
      <NewProducts/>
    </>
  );
}

export default Home;
