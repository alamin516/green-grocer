import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShopSidebar = ({ onFilterChange }) => {
  const [openSections, setOpenSections] = useState({
    brand: true,
    price: true,
    color: true,
    size: true,
    rating: false,
    other: false,
  });

  const [filters, setFilters] = useState({
    brand: [],
    price: { min: "", max: "" },
    color: [],
    size: [],
    rating: [],
    other: [],
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const filterOptions = {
    brand: [
      { name: "lenovo mobile", count: 1 },
      { name: "Mountain Climbing", count: 2 },
      { name: "OFS", count: 3 },
      { name: "Panasonic", count: 1 },
      { name: "Premium Quality", count: 2 },
      { name: "Sagaform", count: 3 },
      { name: "Trendyzone", count: 2 },
    ],
    color: ["Red", "Green", "Blue", "Yellow"],
    size: ["S", "M", "L", "XL"],
    rating: [1, 2, 3, 4, 5],
    other: ["Has Free Shipping", "Is Featured", "Is Stock", "Stock Out", "Discount"],
  };

  const handleCheckboxChange = (category, option) => {
    const updatedFilters = { ...filters };
    if (filters[category].includes(option)) {
      updatedFilters[category] = filters[category].filter(
        (item) => item !== option
      );
    } else {
      updatedFilters[category] = [...filters[category], option];
    }
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handlePriceChange = (e) => {
    const updatedFilters = {
      ...filters,
      price: { ...filters.price, [e.target.name]: e.target.value },
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleClearFilters = () => {
    const resetFilters = {
      brand: [],
      price: { min: "", max: "" },
      color: [],
      size: [],
      rating: [],
      other: [],
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const getFilterDisplay = () => {
    const filterDisplay = [];

    if (filters.brand.length > 0) {
      filters.brand.forEach((item) =>
        filterDisplay.push({ label: `${item}`, type: "brand", value: item })
      );
    }

    if (filters.price.min || filters.price.max) {
      filterDisplay.push({
        label: `${filters.price.min} - ${filters.price.max}`,
        type: "price",
      });
    }

    if (filters.color.length > 0) {
      filters.color.forEach((item) =>
        filterDisplay.push({ label: `${item}`, type: "color", value: item })
      );
    }

    if (filters.size.length > 0) {
      filters.size.forEach((item) =>
        filterDisplay.push({ label: `${item}`, type: "size", value: item })
      );
    }

    if (filters.rating.length > 0) {
      filters.rating.forEach((item) =>
        filterDisplay.push({ label: `${item}`, type: "rating", value: item })
      );
    }

    if (filters.other.length > 0) {
      filters.other.forEach((item) =>
        filterDisplay.push({ label: `${item}`, type: "other", value: item })
      );
    }

    const removeFilter = (type, value) => {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        if (type === "brand") {
          updatedFilters.brand = updatedFilters.brand.filter(
            (item) => item !== value
          );
          onFilterChange(updatedFilters);
        } else if (type === "color") {
          updatedFilters.color = updatedFilters.color.filter(
            (item) => item !== value
          );
          onFilterChange(updatedFilters);
        } else if (type === "size") {
          updatedFilters.size = updatedFilters.size.filter(
            (item) => item !== value
          );
          onFilterChange(updatedFilters);
        } else if (type === "rating") {
          updatedFilters.rating = updatedFilters.rating.filter(
            (item) => item !== value
          );
          onFilterChange(updatedFilters);
        } else if (type === "price") {
          updatedFilters.price = { min: "", max: "" };
          onFilterChange(updatedFilters);
        } else if (type === "other") {
          updatedFilters.other = updatedFilters.other.filter(
            (item) => item !== value
          );
          onFilterChange(updatedFilters);
        }
        return updatedFilters;
      });
    };

    return filterDisplay.length > 0 ? (
      <div className="flex gap-2 flex-wrap">
        {filterDisplay.map((item, i) => (
          <span
            key={i}
            className="bg-[#e5e5e5] rounded-sm py-[3px] pl-2.5 pr-[7px] flex items-center"
          >
            {item.label}
            <button
              onClick={() => removeFilter(item.type, item.value)}
              className="ml-2 text-[#666]"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    ) : (
      "No filters applied"
    );
  };

  return (
    <aside>
      {/* Shop all */}
      <div className="border border-[#e5e5e5] p-[5px] lg:mb-[30px] mb-2.5">
        <h2 className="text-sm leading-6 font-medium px-[15px] py-2.5 relative uppercase text-white rounded-[5px] bg-[#008459]">
          Shop All
        </h2>
        <div className="px-[15px] py-2.5 text-[#777]">
          <div>
            <Link to={"/shop"} className="leading-6">
              Gadgets
            </Link>
          </div>
          <div>
            <Link to={"/shop"} className="leading-6">
              Media Players
            </Link>
          </div>
          <div>
            <Link to={"/shop"} className="leading-6">
              Recorders
            </Link>
          </div>
          <div>
            <Link to={"/shop"} className="leading-6">
              Video Glasses
            </Link>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="border border-[#e5e5e5] p-[5px]">
        <div className="">
          <h2 className="text-sm leading-6 font-medium px-[15px] py-2.5 relative uppercase text-white rounded-[5px] bg-[#008459]">
            Refine by
          </h2>
          <div className="text-sm text-gray-500 px-[15px] pb-[15px] pt-2.5">
            {getFilterDisplay()}
          </div>
        </div>

        <div className="px-[15px] py-2.5">
          {/* Brand Section */}
          <div className="border-y border-gray-300 py-2.5">
            <h3
              className="text-md font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("brand")}
            >
              Brand
              <span>{openSections.brand ? <Remove /> : <Add />}</span>
            </h3>
            {openSections.brand && (
              <ul className="mt-2 space-y-2">
                {filterOptions.brand.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`brand-${index}`}
                      className="form-checkbox h-4 w-4 text-green-600"
                      checked={filters.brand.includes(item.name)}
                      onChange={() => handleCheckboxChange("brand", item.name)}
                    />
                    <label htmlFor={`brand-${index}`} className="text-gray-700">
                      {item.name} ({item.count})
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Price Section */}
          <div className="border-b border-gray-300 py-2.5">
            <h3
              className="text-md font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("price")}
            >
              Price
              <span>{openSections.price ? <Remove /> : <Add />}</span>
            </h3>
            {openSections.price && (
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="number"
                  name="min"
                  placeholder="Min."
                  className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={filters.price.min}
                  onChange={handlePriceChange}
                />
                <input
                  type="number"
                  name="max"
                  placeholder="Max."
                  className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={filters.price.max}
                  onChange={handlePriceChange}
                />
              </div>
            )}
          </div>

          {/* Color Section */}
          <div className="border-b border-gray-300 py-2.5">
            <h3
              className="text-md font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("color")}
            >
              Color
              <span>{openSections.color ? <Remove /> : <Add />}</span>
            </h3>
            {openSections.color && (
              <ul className="mt-2 space-y-2">
                {filterOptions.color.map((color, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`color-${index}`}
                      className="form-checkbox h-4 w-4 text-green-600"
                      checked={filters.color.includes(color)}
                      onChange={() => handleCheckboxChange("color", color)}
                    />
                    <label htmlFor={`color-${index}`} className="text-gray-700">
                      {color}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Size Section */}
          <div className="border-b border-gray-300 py-2.5">
            <h3
              className="text-md font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("size")}
            >
              Size
              <span>{openSections.size ? <Remove /> : <Add />}</span>
            </h3>
            {openSections.size && (
              <ul className="mt-2 space-y-2">
                {filterOptions.size.map((size, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`size-${index}`}
                      className="form-checkbox h-4 w-4 text-green-600"
                      checked={filters.size.includes(size)}
                      onChange={() => handleCheckboxChange("size", size)}
                    />
                    <label htmlFor={`size-${index}`} className="text-gray-700">
                      {size}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Rating Section */}
          <div className="border-b border-gray-300 py-2.5">
            <h3
              className="text-md font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("rating")}
            >
              Rating
              <span>{openSections.rating ? <Remove /> : <Add />}</span>
            </h3>
            {openSections.rating && (
              <ul className="mt-2 space-y-2">
                {filterOptions.rating.map((rating, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`rating-${index}`}
                      className="form-checkbox h-4 w-4 text-green-600"
                      checked={filters.rating.includes(rating)}
                      onChange={() => handleCheckboxChange("rating", rating)}
                    />
                    <label
                      htmlFor={`rating-${index}`}
                      className="text-gray-700"
                    >
                      {rating} Star{rating > 1 ? "s" : ""}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* other Section */}
          <div className="border-b border-gray-300 py-2.5">
            <h3
              className="text-md font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("other")}
            >
              Other
              <span>{openSections.color ? <Remove /> : <Add />}</span>
            </h3>
            {openSections.other && (
              <ul className="mt-2 space-y-2">
                {filterOptions.other.map((other, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`other-${index}`}
                      className="form-checkbox h-4 w-4 text-green-600"
                      checked={filters.other.includes(other)}
                      onChange={() => handleCheckboxChange("other", other)}
                    />
                    <label htmlFor={`other-${index}`} className="text-gray-700">
                      {other}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="px-[15px] py-2.5">
            <button
              onClick={handleClearFilters}
              className="w-full bg-red-500 text-white py-2 rounded-md"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ShopSidebar;
