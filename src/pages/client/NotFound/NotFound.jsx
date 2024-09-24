import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Common/Header/Header";
import Footer from "../../../components/Common/Footer/Footer";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import errorImage from "../../../assets/images/error-404.webp";
import ProductSlider from "../../../components/Product/ProductSlider";
import SEO from "../../../components/Seo";

const NotFound = () => {
  return (
    <>
      <SEO title="404 Not Found" />
      <Header />
      <Breadcrumbs pageTitle="Error" />
      <div className="w-full mb-20 flex justify-center">
        <div className="text-center">
          <img
            className="w-[300px] inline-block"
            src={errorImage}
            alt="Error"
          />
          <h1 className="text-3xl font-bold mb-5">
            404 Error - Page not found
          </h1>
          <h5 className="text-sm text-[#666] mb-5">
            Uh oh, looks like the page you are looking for has moved or no
            longer exists
          </h5>
          <button className="group">
            <Link
              to="/"
              className="relative z-[1] block px-5 py-3 m-0 text-white text-sm leading-[18px] font-semibold capitalize transition-all duration-500 ease-in-out group-hover:text-white bg-[#008459] group-hover:bg-[#fa9f00]"
            >
              Go To Home
              <span className="absolute left-0 top-0 h-full w-0 bg-white opacity-20 duration-500 transition-all group-hover:w-full"></span>
            </Link>
          </button>
        </div>
      </div>
      <ProductSlider />
      <Footer />
    </>
  );
};

export default NotFound;
