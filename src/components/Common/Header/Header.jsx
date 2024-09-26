import {
  ArrowDropUp,
  ArrowForward,
  CardGiftcard,
  ChevronRight as ChevronRightIcon,
  Close,
  ExpandMore as ExpandMoreIcon,
  FavoriteBorder,
  LocalOffer,
  MailOutline,
  Menu,
  PermIdentity,
  PhoneInTalk,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../assets/images/loading.webp";
import Logo from "../../../assets/images/logo_green_grocer.webp";
import "./Header.css";
import StickyHeader from "./StickyHeader";

const Header = () => {
  const [loading, setLoading] = useState(true);
  const [openCat, setOpenCat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleSubDropdownToggle = (submenu) => {
    setOpenSubDropdown(openSubDropdown === submenu ? null : submenu);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloading */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-white z-[99999] transition-all duration-500 transform ${
          loading
            ? "opacity-100 scale-100"
            : "opacity-0 scale-100 pointer-events-none"
        }`}
      >
        <img src={Loading} alt="loading" />
      </div>

      <StickyHeader
        openCat={openCat}
        setOpenCat={setOpenCat}
        setIsMobile={setIsMobile}
      />

      <div className="header">
        {/* Header Top */}
        <div className="header-top hidden md:block py-3 w-full">
          <div className="section-container px-[15px] mx-auto flex justify-between">
            <div className="flex items-center text-sm tracking-[0.8px] leading-6">
              <span className="mr-[5px]">
                <LocalOffer className="!text-[20px]" />
              </span>
              get upto 25% cashback on first order
            </div>
            <div className="flex leading-6">
              <div className="flex items-center text-sm tracking-[0.8px] px-[10px]">
                <span className="mr-[5px]">
                  <MailOutline className="!text-[20px]" />
                </span>
                support@yourstore.com
              </div>
              <div className="flex items-center gap-1 ml-[10px] text-sm tracking-[0.8px] relative after:absolute after:h-[15px] after:w-[1px] after:border-l after:border-[rgba(0,0,0,0.3)] after:left-[-10px] after:top-0 after:bottom-0 after:m-auto after:right-auto">
                <span className="mr-[5px]">
                <CardGiftcard className="!text-[20px]" />
                </span>
                Gift Certificates
              </div>
            </div>
          </div>
        </div>
        {/* Header Ccenter */}
        <div className="header-center w-full bg-[#008459]">
          <div className="section-container px-[15px] mx-auto flex justify-between items-center">
            <div className="block 1100px:hidden">
              <Menu
                onClick={() => setIsMobile(true)}
                className="text-white cursor-pointer"
              />
            </div>
            <div className="1100px:my-[21px] mt-1.5 mb-[5px]">
              <Link to="/">
                <img src={Logo} alt="" className="h-[50px] lg:h-auto" />
              </Link>
            </div>
            <div className="hidden 1100px:block">
              <div className="menu flex">
                <div className="mx-2 group">
                  <Link
                    to="/shop"
                    className="relative z-[1] block px-5 py-3 m-0 text-white text-sm leading-[18px] font-semibold capitalize transition-all duration-500 ease-in-out group-hover:text-white group-hover:bg-[#fa9f00]"
                  >
                    Shop
                    <span className="absolute left-0 top-0 h-full w-0 bg-white opacity-20 duration-500 transition-all group-hover:w-full"></span>
                  </Link>
                </div>
                <div className="mx-2 group">
                  <Link
                    to="/about"
                    className="relative z-[1] block px-5 py-3 m-0 text-white text-sm leading-[18px] font-semibold capitalize transition-all duration-500 ease-in-out group-hover:text-white group-hover:bg-[#fa9f00]"
                  >
                    About us
                    <span className="absolute left-0 top-0 h-full w-0 bg-white opacity-20 duration-500 transition-all group-hover:w-full"></span>
                  </Link>
                </div>
                <div className="mx-2 group">
                  <Link
                    to="/contact"
                    className="relative z-[1] block px-5 py-3 m-0 text-white text-sm leading-[18px] font-semibold capitalize transition-all duration-500 ease-in-out group-hover:text-white group-hover:bg-[#fa9f00]"
                  >
                    Contact us
                    <span className="absolute left-0 top-0 h-full w-0 bg-white opacity-20 duration-500 transition-all group-hover:w-full"></span>
                  </Link>
                </div>
                <div className="mx-2 group">
                  <Link
                    to="/"
                    className="relative z-[1] block px-5 py-3 m-0 text-white text-sm leading-[18px] font-semibold capitalize transition-all duration-500 ease-in-out group-hover:text-white group-hover:bg-[#fa9f00]"
                  >
                    More
                    <span className="absolute left-0 top-0 h-full w-0 bg-white opacity-20 duration-500 transition-all group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="1100px:mt-[35px] 1100px:mb-5">
              <ul className="flex">
                <li></li>
                <li className="hidden md:block">
                  <Link
                    to="/wishlist"
                    className="w-[56px] h-[46px] flex justify-center items-center text-center cursor-pointer relative text-white"
                  >
                    <FavoriteBorder />
                  </Link>
                </li>
                <li>
                  <div className="w-[56px] h-[46px] flex justify-center items-center text-center cursor-pointer relative text-white ">
                    <PermIdentity />
                  </div>
                </li>
                <li>
                  <div className="md:w-[81px] h-[46px] flex justify-center items-center text-center cursor-pointer relative text-white">
                    <ShoppingCart
                      style={{ fontSize: "24px", margin: "0  auto" }}
                    />
                    <span className="flex items-center justify-center md:border-2 bg-[#008459] lg:bg-transparent border-white rounded-full text-[12px] h-5 w-5 z-10 text-center leading-4 absolute top-0 md:left-7 left-3">
                      0
                    </span>
                    <span className="font-semibold text-base hidden md:block">
                      Cart
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Header Bottom */}
        <div className="header-bottom w-full bg-[#007750] py-[10px] mb-[15px] lg:mb-[30px]">
          <div className="section-container px-[15px] mx-auto flex items-center">
            {/* Header Bottom COl-1 */}
            <div className="cat-menus w-[18%] relative 1100px:block hidden">
              <div
                onClick={() => setOpenCat(!openCat)}
                className="cat-menu-title w-full group px-[10px] py-[18px] bg-[#fa9f00] text-base leading-6 font-semibold uppercase text-white ease-in-out cursor-pointer relative"
              >
                <span className="mx-0.5 group-hover:transform duration-500 group-hover:rotate-90">
                  <Menu />
                </span>
                <span className="ml-2.5 lg:text-base leading-6">
                  Shop by Categories
                </span>
              </div>
              <span
                className={`${
                  openCat ? "block" : "hidden"
                } absolute top-[50px] left-[14px] text-[30px] text-[#e5e5e5] z-10 `}
              >
                <ArrowDropUp style={{ fontSize: "30px" }} />
              </span>
              <div
                className={`transition-all duration-1000 ease-in-out cat-menu w-full bg-white absolute left-0 top-[80px] shadow-custom-light overflow-hidden z-[9] ${
                  openCat ? "max-h-[500px] opacity-100" : "max-h-0 opacity-100"
                }`}
              >
                <ul>
                  {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
                    <li key={i}>
                      <Link
                        to="#"
                        className="block w-full text-sm font-semibold leading-[30px] px-5 py-2.5 capitalize relative"
                      >
                        <span className="pr-2.5">
                          <ArrowForward
                            fontSize="13px"
                            className="font-normal"
                          />
                        </span>
                        All Shop
                        <span className="absolute w-[90%] bottom-0 left-0 m-auto right-0 border-b-[#eee] border-b"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Header Bottom COl-2 */}
            <div className="1100px:w-[66%] w-full 1100px:ml-[15px] bg-white relative">
              <form>
                <div>
                  <label htmlFor=""></label>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    autoComplete="off"
                    className="800px:h-[60px] py-[10.5px] px-[14px] text-[#666] border-2 border-white/5 text-sm rounded-none w-full focus:outline-none"
                  />
                </div>
                <div className="absolute right-0 top-0">
                  <button
                    type="submit"
                    className="800px:py-3.5 800px:px-[30px] py-[6px] px-[15px] m-[4px] relative bg-[#191919] transition duration-500 ease-in-out border-none tracking-[1px] w-auto text-sm leading-[18px] font-semibold text-white flex"
                  >
                    <Search />{" "}
                    <span className="hidden 800px:block">Search</span>
                  </button>
                </div>
              </form>
            </div>
            {/* Header Bottom COl-3 */}
            <div className="hidden 1100px:block">
              <div className="ml-0.5 px-1.5 py-2.5 flex items-center text-white group">
                <div className="text-[30px]">
                  <PhoneInTalk style={{ fontSize: "30px" }} />
                </div>
                <div className="pl-2.5">
                  <h5 className="mb-1 text-sm font-semibold">Whatsapp:</h5>
                  <Link
                    to="tel:09277077088"
                    className="text-base font-semibold"
                  >
                    1-999-564-666
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        {isMobile && (
          <div
            className={`block lg:hidden relative transition-all duration-300 ease-in-out`}
          >
            <div
              onClick={() => {
                setIsMobile(false), setActiveTab(0);
              }}
              className={`min-h-screen fixed bg-black/40 top-0 z-[999] flex transition-all duration-300 ease-in-out w-full ${
                isMobile ? "opacity-100 left-0" : "opacity-0 w-0 left-[-100%]"
              }`}
            >
              {/* Mobile Menu */}
              <div
                onClick={(e) => e.stopPropagation()}
                className={`w-[66%] relative bg-white min-h-screen`}
              >
                <span
                  onClick={() => setIsMobile(false)}
                  className={`absolute -right-10 flex items-center justify-center w-10 h-10 top-3 bg-white rounded-r-lg transition-transform duration-700 ease-in-out `}
                >
                  <Close className={`${isMobile ? "rotate-90" : "rotate-0"}`} />
                </span>

                <div className="bg-[#008459] text-center p-[5px]">
                  <Link to="/">
                    <img
                      src={Logo}
                      alt=""
                      className="h-[50px] w-full object-contain"
                    />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-0 p-5 ">
                  {["Pages", "Category"].map((item, i) => {
                    return (
                      <div
                        key={i}
                        className={`text-center text-sm font-bold uppercase transition-all duration-300 ease-in-out ${
                          activeTab === i ? "border-b-2 border-[#008459]" : ""
                        }`}
                        onClick={() => setActiveTab(i)}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>

                {activeTab === 0 && (
                  <>
                    <div className="menu flex flex-col space-y-[2px]">
                      {menuItems.map((item, index) => (
                        <div key={index} className="relative">
                          {item.dropdown ? (
                            <>
                              <button
                                className="flex items-center justify-between px-5 py-3 text-sm font-semibold capitalize transition-all"
                                onClick={() => handleDropdownToggle(item.label)}
                              >
                                {item.label}
                                {item.dropdown && !openDropdown ? (
                                  <ChevronRightIcon
                                    className="ml-2"
                                    fontSize="small"
                                  />
                                ) : (
                                  <ExpandMoreIcon
                                    className="ml-2"
                                    fontSize="small"
                                  />
                                )}
                              </button>
                              {openDropdown === item.label && (
                                <div className="transition-opacity duration-300 ease-in-out">
                                  {item.dropdown.map((subItem, subIndex) => (
                                    <div
                                      key={subIndex}
                                      className="relative ml-4"
                                    >
                                      {subItem.dropdown ? (
                                        <>
                                          <button
                                            className="flex items-center px-5 py-3 text-sm font-semibold capitalize transition-all"
                                            onClick={() =>
                                              handleSubDropdownToggle(
                                                subItem.label
                                              )
                                            }
                                          >
                                            {subItem.label}
                                            <ChevronRightIcon
                                              className="ml-2"
                                              fontSize="small"
                                            />
                                          </button>
                                          {openSubDropdown ===
                                            subItem.label && (
                                            <div className="transition-opacity duration-300 ease-in-out">
                                              {subItem.dropdown.map(
                                                (subSubItem, subSubIndex) => (
                                                  <Link
                                                    key={subSubIndex}
                                                    to={subSubItem.href}
                                                    className="block px-5 py-3 text-sm font-semibold capitalize text-gray-800"
                                                  >
                                                    {subSubItem.label}
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          )}
                                        </>
                                      ) : (
                                        <Link
                                          to={subItem.href}
                                          className="block px-5 py-3 text-sm font-semibold capitalize text-gray-800"
                                        >
                                          {subItem.label}
                                        </Link>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              to={item.href}
                              className="block px-5 py-3 text-sm font-semibold capitalize transition-all"
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {activeTab === 1 && (
                  <>
                    <div className="menu flex flex-col space-y-[2px]">
                      {categories.map((item, index) => (
                        <div key={index} className="relative">
                          {item.sub_category ? (
                            <>
                              <button
                                className="flex items-center justify-between px-5 py-3 text-sm font-semibold capitalize transition-all"
                                onClick={() => handleDropdownToggle(item.name)}
                              >
                                {item.name}
                                {item.sub_category && !openDropdown ? (
                                  <ChevronRightIcon
                                    className="ml-2"
                                    fontSize="small"
                                  />
                                ) : (
                                  <ExpandMoreIcon
                                    className="ml-2"
                                    fontSize="small"
                                  />
                                )}
                              </button>
                              {openDropdown === item.name && (
                                <div className="transition-opacity duration-300 ease-in-out">
                                  {item?.sub_category.map(
                                    (subItem, subIndex) => (
                                      <div
                                        key={subIndex}
                                        className="relative ml-4"
                                      >
                                        {subItem?.dropdown ? (
                                          <>
                                            <button
                                              className="flex items-center px-5 py-3 text-sm font-semibold capitalize transition-all"
                                              onClick={() =>
                                                handleSubDropdownToggle(
                                                  subItem.label
                                                )
                                              }
                                            >
                                              {subItem.name}
                                              <ChevronRightIcon
                                                className="ml-2"
                                                fontSize="small"
                                              />
                                            </button>
                                            {openSubDropdown ===
                                              subItem.label && (
                                              <div className="transition-opacity duration-300 ease-in-out">
                                                {subItem.dropdown.map(
                                                  (subSubItem, subSubIndex) => (
                                                    <Link
                                                      key={subSubIndex}
                                                      to={subSubItem.href}
                                                      className="block px-5 py-3 text-sm font-semibold capitalize text-gray-800"
                                                    >
                                                      {subSubItem.name}
                                                    </Link>
                                                  )
                                                )}
                                              </div>
                                            )}
                                          </>
                                        ) : (
                                          <Link
                                            to={subItem.href}
                                            className="block px-5 py-3 text-sm font-semibold capitalize text-gray-800"
                                          >
                                            {subItem?.name}
                                          </Link>
                                        )}
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              to={item.href}
                              className="block px-5 py-3 text-sm font-semibold capitalize transition-all"
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Affiliate",
    href: "#",
    dropdown: [
      {
        label: "Option 1",
        href: "/",
      },
      {
        label: "Option 2",
        href: "/",
      },
      {
        label: "Sub-menu",
        dropdown: [
          {
            label: "Sub-option 1",
            href: "/",
          },
          {
            label: "Sub-option 2",
            href: "/",
          },
        ],
      },
    ],
  },
];

const categories = [
  {
    _id: 1,
    name: "Shop All",
    sub_category: [
      { _id: 11, name: "All Dairy Products" },
      { _id: 12, name: "All Fresh Vegetables" },
      { _id: 13, name: "All Breakfast & Dairy" },
      { _id: 14, name: "All Fresh Juice" },
      { _id: 1, name: "View All" },
    ],
  },
  {
    _id: 2,
    name: "Dairy Products",
    sub_category: [
      { _id: 21, name: "Milk" },
      { _id: 22, name: "Cheese" },
      { _id: 23, name: "Yogurt" },
      { _id: 1, name: "View All" },
    ],
  },
  {
    _id: 3,
    name: "Fresh Vegetables",
    sub_category: [
      { _id: 31, name: "Leafy Greens" },
      { _id: 32, name: "Root Vegetables" },
      { _id: 33, name: "Cruciferous Vegetables" },
      { _id: 1, name: "View All" },
    ],
  },
  {
    _id: 4,
    name: "Breakfast & Dairy",
    sub_category: [
      { _id: 41, name: "Cereal" },
      { _id: 42, name: "Oats" },
      { _id: 43, name: "Butter" },
      { _id: 1, name: "View All" },
    ],
  },
  {
    _id: 5,
    name: "Fresh Juice",
    sub_category: [
      { _id: 51, name: "Orange Juice" },
      { _id: 52, name: "Apple Juice" },
      { _id: 53, name: "Carrot Juice" },
      { _id: 1, name: "View All" },
    ],
  },
];
