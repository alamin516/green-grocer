import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import SEO from "../../../components/Seo";
import ShopSidebar from "../../../components/Shop/ShopSidebar";
import { ViewList, ViewModule } from "@mui/icons-material";
import GridViewProducts from "../../../components/Shop/GridViewProducts";
import ListViewProducts from "../../../components/Shop/ListViewProducts";

const Shop = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/product.json");
      const data = await res.json();
      setProducts(data.featured);
      setFilteredProducts(data.featured);
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (filters) => {
    let updatedProducts = products;

    // Filter by brand
    if (filters.brand.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.attributes.some((attribute) =>
          filters.brand.some((brand) => attribute.brand.includes(brand))
        )
      );
    }

    // Filter by color
    if (filters.color.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.attributes.some((attribute) =>
          filters.color.some((color) => attribute.color.includes(color))
        )
      );
    }

    // Filter by price
    if (filters.price.min || filters.price.max) {
      updatedProducts = updatedProducts.filter((product) => {
        const minCondition = filters.price.min
          ? product.price >= filters.price.min
          : true;
        const maxCondition = filters.price.max
          ? product.price <= filters.price.max
          : true;
        return minCondition && maxCondition;
      });
    }

    // Filter by rating
    if (filters.rating.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        filters.rating.includes(product.rating)
      );
    }

    // Filter by rating
    if (filters.other.length > 0) {
      if (
        filters.other.includes("Is Stock") ||
        filters.other.includes("Discount")
      ) {
        updatedProducts = updatedProducts.filter(
          (product) => product.stock > 0
        );
        setFilteredProducts(updatedProducts);
      }
      // if(filters.other.includes("Is Featured")){
      //     updatedProducts = updatedProducts.filter((product) => product.inStock);
      //     setFilteredProducts(updatedProducts);
      // }

      // if(filters.other.includes("Has Free Shipping")){
      //     updatedProducts = updatedProducts.filter((product) => product.stock <= 0 );
      //     setFilteredProducts(updatedProducts);
      // }

      if (filters.other.includes("Stock Out")) {
        updatedProducts = updatedProducts.filter(
          (product) => product.stock <= 0
        );
        setFilteredProducts(updatedProducts);
      }

      if (filters.other.includes("Discount")) {
        updatedProducts = updatedProducts.filter(
          (product) => product.discount_price > 0
        );
        setFilteredProducts(updatedProducts);
      }
    }
    setFilteredProducts(updatedProducts);
  };

  const handleSort = (sortValue) => {
    let sortedProducts = [...filteredProducts];

    switch (sortValue) {
      case "featured":
        sortedProducts.sort((a, b) => b.isFeatured - a.isFeatured);
        break;
      case "priceasc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "pricedsc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "alphaasc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "alphadsc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <>
      <SEO title="Shop" description="shop" keywords={["shop"]} />

      <Breadcrumbs pageTitle="Shop all" />
      <div className="shop-page w-full relative ">
        <div className="section-container mx-auto px-[15px] mb-[30px]">
          <div className="grid lg:grid-cols-10 grid-cols-1 gap-[30px]">
            {/* Shop Filter sidebar */}
            <div className="lg:col-span-2">
              <ShopSidebar onFilterChange={handleFilterChange} />
            </div>
            {/* Shop Grid */}
            <div className="lg:col-span-8">
              <div className="p-[15px] border border-[#e5e5e5] mb-[15px] lg:flex justify-between items-center">
                <div className="flex justify-center items-center lg:justify-start mb-3 lg:mb-0">
                  <button onClick={() => setIsGrid(true)}>
                    <ViewModule className="!text-[30px]" />
                  </button>
                  <button onClick={() => setIsGrid(false)}>
                    <ViewList className="!text-[30px]" />
                  </button>
                </div>
                <div>
                  <form>
                    <div className="w-full bg-white border border-[#e5e5e5] overflow-hidden">
                      <label
                        htmlFor="sort"
                        className="inline-block text-[#666] text-sm mb-0 pl-2.5 mr-[5px]"
                      >
                        Sort By:
                      </label>
                      <select
                        id="sort"
                        name="sort"
                        onChange={(e) => handleSort(e.target.value)}
                        className="text-[#666] font-medium leading-[16px] pl-[3px] py-2 pr-8 text-sm outline-none !rounded-[5px]"
                      >
                        <option value="featured">Featured Items</option>
                        <option value="newest">Newest Items</option>
                        <option value="bestselling">Best Selling</option>
                        <option value="alphaasc">A to Z</option>
                        <option value="alphadsc">Z to A</option>
                        <option value="avgcustomerreview">By Review</option>
                        <option value="priceasc">Price: Ascending</option>
                        <option value="pricedsc">Price: Descending</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 border border-[#e5e5e5]">
                  <h2 className="text-lg font-semibold text-gray-600 mb-2">
                    No Products Available
                  </h2>
                  <p className="text-gray-500">
                    It seems we can’t find any products matching your criteria.
                  </p>
                  <p className="text-gray-500">
                    Please try adjusting your filters or check back later.
                  </p>
                </div>
              ) : isGrid ? (
                <GridViewProducts filteredProducts={filteredProducts} />
              ) : (
                <ListViewProducts filteredProducts={filteredProducts} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
