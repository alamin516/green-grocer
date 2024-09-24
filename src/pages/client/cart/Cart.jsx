import React from 'react'
import Breadcrumbs from '../../../components/Common/Breadcrumbs'
import SEO from '../../../components/Seo'

const Cart = () => {
  return (
    <>
      <SEO
        title="Shopping Cart"
        description="Green grocer is the biggest organic online platform for people shopping cart."
        keywords={[
          "cart",
          "shopping cart",
          "green-grocer shopping cart",
          "shopping cart green grocer",
        ]}
        image=""
        url=""
      />

      <Breadcrumbs pageTitle="Your Cart" />

      <div className="w-full mb-10">
        <div className="w-full lg:w-[66%] mx-auto px-[15px]">
          {/* Heading start*/}
          <div>
            <h1 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative mb-[15px]">
              <span className="relative bg-white z-[2] pr-[25px]">Your Cart (0 Items)</span>
              <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
            </h1>
          </div>
          {/* Heading End*/}
          <div className="main-content">
            <p>Your Cart is empty</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart