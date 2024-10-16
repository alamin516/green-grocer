import React from "react";
import SEO from "../../../components/Seo";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";

const ShippingAndReturn = () => {
  return (
    <>
      <SEO
        title="Shipping & Returns"
        description="Green grocer is the biggest organic online platform for people shipping & returns"
        keywords={[
          "shipping & returns",
          "shipping and returns",
          "shipping-returns",
          "shipping & returns green-grocer",
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
              <span className="relative bg-white z-[2] pr-[25px]">Shipping & Returns</span>
              <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
            </h1>
          </div>
          {/* Heading End*/}
          <div className="main-content px-[15px] whitespace-pre-wrap">
            <p className="my-5">
              To edit this page, log in to your control panel and go to{" "}
              <b>Storefront › Web Pages</b>. Click Edit next to the Shipping &
              Returns page and you can change this text. A sample returns policy
              is shown below which you can edit as needed.
            </p>
            <h3 className="font-semibold">Returns Policy</h3>
            <br />
            <p>
              You may return most new, unopened items within 30 days of delivery
              for a full refund. We'll also pay the return shipping costs if the
              return is a result of our error (you received an incorrect or
              defective item, etc.).
              <br /><br />
              You should expect to receive your refund within four weeks of
              giving your package to the return shipper, however, in many cases
              you will receive a refund more quickly. This time period includes
              the transit time for us to receive your return from the shipper (5
              to 10 business days), the time it takes us to process your return
              once we receive it (3 to 5 business days), and the time it takes
              your bank to process our refund request (5 to 10 business days).
              <br /><br />
              If you need to return an item, please Contact Us with your order
              number and details about the product you would like to return. We
              will respond quickly with instructions for how to return items
              from your order.
            </p>
            <br />
            <h3 className="font-semibold">Shipping</h3>
            <br />
            <p>
              We can ship to virtually any address in the world. Note that there
              are restrictions on some products, and some products cannot be
              shipped to international destinations.
              <br /><br />
              When you place an order, we will estimate shipping and delivery
              dates for you based on the availability of your items and the
              shipping options you choose. Depending on the shipping provider
              you choose, shipping date estimates may appear on the shipping
              quotes page.
              <br /><br />
              Please also note that the shipping rates for many items we sell
              are weight-based. The weight of any such item can be found on its
              detail page. To reflect the policies of the shipping companies we
              use, all weights will be rounded up to the next full pound.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingAndReturn;
