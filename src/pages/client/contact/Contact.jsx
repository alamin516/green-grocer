import React, { useState } from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import SEO from "../../../components/Seo";

const Contact = () => {
  const [value, setValue] = useState({
    full_name: "",
    phone: "",
    email: "",
    order_number: "",
    company_name: "",
    rma_number: "",
    comments: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Post API
    console.log(value)
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Green grocer is the biggest organic online platform for people contact us"
        keywords={[
          "contact",
          "contact-us",
          "green-grocer-contact",
          "contact-green-grocer",
        ]}
        image=""
        url=""
      />

      <Breadcrumbs pageTitle="Contact" />

      <div className="w-full mb-10">
        <div className="w-full lg:w-[66%] mx-auto px-[15px]">
          {/* Heading start*/}
          <div>
            <h1 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative mb-[15px]">
              <span className="relative bg-white z-[2] pr-[25px]">Contact</span>
              <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
            </h1>
          </div>
          {/* Heading End*/}
          <div className="main-content px-[15px]">
            <p className="my-5">
              We are happy to answer questions or help you with returns. <br />
              Please fill out the form below if you need assistance.
            </p>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-[15px] gap-y-5 mb-5">
              {/* Full Name */}
              <div className="lg:col-span-1 md:col-span-1 col-span-2">
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-[13px] text-[#666]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={value.full_name}
                  onChange={handleOnChange}
                  className="w-full px-3.5 py-2.5 border border-[#e5e5e5] text-[13px] text-[#666] rounded outline-none focus:border-[#666] transition-colors bg-white"
                />
              </div>
              {/* Phone */}
              <div className="lg:col-span-1 md:col-span-1 col-span-2">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-[13px] text-[#666]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={value.phone}
                  onChange={handleOnChange}
                  className="w-full px-3.5 py-2.5 border border-[#e5e5e5] text-[13px] text-[#666] rounded outline-none focus:border-[#666] transition-colors bg-white"
                />
              </div>
              {/* Email Address */}
              <div className="lg:col-span-1 md:col-span-1 col-span-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-[13px] text-[#666]"
                >
                  Email Address{" "}
                  <small className="float-right text-[10px] uppercase mt-[5px]">
                    required
                  </small>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={value.email}
                  onChange={handleOnChange}
                  className="w-full px-3.5 py-2.5 border border-[#e5e5e5] text-[13px] text-[#666] rounded outline-none focus:border-[#666] transition-colors bg-white"
                />
              </div>
              {/* Order Number */}
              <div className="lg:col-span-1 md:col-span-1 col-span-2">
                <label
                  htmlFor="order_number"
                  className="block mb-2 text-[13px] text-[#666]"
                >
                  Order Number
                </label>
                <input
                  type="text"
                  id="order_number"
                  name="order_number"
                  value={value.order_number}
                  onChange={handleOnChange}
                  className="w-full px-3.5 py-2.5 border border-[#e5e5e5] text-[13px] text-[#666] rounded outline-none focus:border-[#666] transition-colors bg-white"
                />
              </div>
              {/* Company Name */}
              <div className="lg:col-span-1 md:col-span-1 col-span-2">
                <label
                  htmlFor="company_name"
                  className="block mb-2 text-[13px] text-[#666]"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  value={value.company_name}
                  onChange={handleOnChange}
                  className="w-full px-3.5 py-2.5 border border-[#e5e5e5] text-[13px] text-[#666] rounded outline-none focus:border-[#666] transition-colors bg-white"
                />
              </div>
              {/* RMA Number */}
              <div className="lg:col-span-1 md:col-span-1 col-span-2">
                <label
                  htmlFor="rma_number"
                  className="block mb-2 text-[13px] text-[#666]"
                >
                  RMA Number
                </label>
                <input
                  type="text"
                  id="rma_number"
                  name="rma_number"
                  value={value.rma_number}
                  onChange={handleOnChange}
                  className="w-full px-3.5 py-2.5 border border-[#e5e5e5] text-[13px] text-[#666] rounded outline-none focus:border-[#666] transition-colors bg-white"
                />
              </div>
              {/* Comments/Questions */}
              <div className="col-span-2">
                <label
                  htmlFor="comments"
                  className="block mb-2 text-[13px] text-[#666]"
                >
                  Comments/Questions{" "}
                  <small className="float-right text-[10px] uppercase mt-[5px]">
                    required
                  </small>
                </label>
                <textarea
                  type="text"
                  id="comments"
                  name="comments"
                  rows={5}
                  cols={50}
                  onChange={handleOnChange}
                  className="w-full px-3.5 py-2.5 border border-[#e5e5e5] text-[13px] text-[#666] rounded outline-none focus:border-[#666] transition-colors bg-white"
                >{value.comments}</textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-5">
                <input
                  type="submit"
                  value="Submit Form"
                  className="text-sm font-semibold leading-18px] text-[#fff] px-8 py-3 border border-[#008459] bg-[#008459] hover:bg-[#fa9f00] hover:border-[#fa9f00] transition-colors cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
