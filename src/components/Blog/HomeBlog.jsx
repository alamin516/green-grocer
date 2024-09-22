import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./Blog.css";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  CalendarToday,
  PermIdentity,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/blog.json");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchBlogs();
  }, []);

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="blog-slider-arrow lg:top-[-55px] top-[-55px] arrow-left group transition-all duration-300 ease-in-out overflow-hidden"
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
    const { onClick } = props;
    return (
      <button
        className="blog-slider-arrow arrow-right lg:top-[-55px] top-[-55px] relative group transition-all duration-300 ease-in-out overflow-hidden"
        onClick={onClick}
      >
        <span className="absolute w-full h-full left-[-10px] opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300 bg-[#f5f5f5]">
          <ArrowForwardIos />
        </span>
        <ArrowForwardIos />
      </button>
    );
  };

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="w-full blog-slider mb-5 pb-10">
      <div className="1500px:w-[1430px] mx-auto">
        {/* Heading */}
        <div className="px-[15px]">
          <h1 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative mb-5">
            <span className="relative bg-white z-[2] pr-[25px]">
              Latest Blog
            </span>
            <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
          </h1>
        </div>

        {/* Blog Sliders */}
        <Slider {...settings} className="px-[15px] lg:px-0">
          {posts.map((post, i) => {
            return (
              <article key={i}>
                <div className="blog-card lg:mx-[15px] mx-[5px] border border-[#e5e5e5] p-2.5 mb-[5px]  group">
                  <div className="blog-thumbnail relative">
                    <figure className="overflow-hidden cursor-pointer">
                      <Link to={"/"}>
                        <img
                          src={post["featured_image"]}
                          alt="Blog Image"
                          className="group-hover:scale-110 transition-transform duration-300 ease-in-out z-10"
                        />
                      </Link>
                    </figure>
                    <span className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 bg-black/30 w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer">
                      <Link to={"/"}>
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-white opacity-50 scale-150 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out hover:bg-[#008459] hover:border-[#008459]">
                          <Search className="!text-lg" />
                        </span>
                      </Link>
                    </span>
                  </div>
                  <div className="blog-content px-[15px] ">
                    <div className="mt-5 text-center">
                      <h2 className="title mb-2.5 text-sm font-semibold leading-4 cursor-pointer whitespace-nowrap text-ellipsis overflow-hidden">
                        <Link to={"/"}>{post["title"]}</Link>
                      </h2>
                      <p className="mb-2.5 text-sm leading-[22px] text-[#777]">
                        {post["long_des"].slice(0, 90)}
                      </p>
                    </div>
                    <div className="flex justify-center items-center text-[#666]">
                      <div className="blog-author flex items-center gap-2 mt-2.5 mb-[5px] border-r border-[#e5e5e5] pr-2.5">
                        <PermIdentity className="!text-sm" /> {post["author"]}
                      </div>
                      <div className="blog-date flex items-center gap-2 mt-2.5 mb-[5px]  pl-2.5">
                        <CalendarToday className="!text-sm" /> {post["date"]}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeBlog;
