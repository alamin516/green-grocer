import React from "react";
import { Link } from "react-router-dom";
import ShareButtons from "../../../components/Common/Share/ShareButtons";

const BlogCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <figure>
          <Link to="">
            <img
              src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/870x1000/uploaded_images/05.jpg?t=1606450761"
              alt="alt"
            />
          </Link>
        </figure>
      </div>
      <div className="md:pl-5 md:pr-[15px] pt-5 lg:pt-0">
        <div className="blog-header">
          <p className="text-[#666] text-[13px] italic mb-[5px]">
            Petter on 7th Aug 2020
          </p>
          <h2 className="text-base font-semibold border-b border-[#e5e5e5] pb-2.5 mb-[15px] relative capitalize">
            <Link to={""}>Acus Et Rhoncus Tincidunt</Link>
          </h2>
        </div>
        <div className="text-sm text-[#666] mb-5">
          acus et rhoncus tincidunt, mauris tellus iaculis est, in fermentum est
          nulla ac sapien. Maecenas molestie risus ac dapibus aliquet.
        </div>
        <div>
            <ShareButtons/>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
