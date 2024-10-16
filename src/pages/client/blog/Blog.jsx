import React from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import SEO from "../../../components/Seo";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <SEO
        title="Blog"
        description="Green grocer is the biggest organic online platform for people"
        keywords={["blog", "blog-us", "green-grocer-blog", "blog-green-grocer"]}
        image=""
        url="https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/870x1000/uploaded_images/05.jpg?t=1606450761"
      />

      <Breadcrumbs pageTitle="Blog" />

      <div className="w-full mb-10 pb-10">
        <div className="section-container mx-auto px-[15px]">
          {/* Heading start*/}
          <div>
            <h1 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative mb-[15px]">
              <span className="relative bg-white z-[2] pr-[25px]">blog</span>
              <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
            </h1>
          </div>
          {/* Heading End*/}
          <div className="main-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[30px] lg:gap-y-[30px] md:gap-[30px]">
              {
                // Blog post list
                Array.from({ length: 10 }).map((blog, i) => {
                  return <BlogCard key={i} />;
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
