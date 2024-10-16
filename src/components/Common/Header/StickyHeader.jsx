import {
  Add,
  ArrowDropUp,
  ArrowForward,
  FavoriteBorder,
  LockOpen,
  Menu,
  PermIdentity,
  Person,
  ShoppingCart,
  ChevronRight,
  ExitToApp,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo_green_grocer.webp";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

const StickyHeader = ({
  openCat,
  setOpenCat,
  setIsMobile,
  openAccount,
  setOpenAccount,
  viewCart,
  setViewCart,
  cartLoading,
  setCartLoading,
  categories,
  less,
  setLess,
  more,
  setMore,
  openDropdown,
  handleLogout,
  user,
}) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:block hidden">
      <div
        className={`${
          isSticky
            ? `top-0 ${user?.role === "admin" && "top-[44px]"} left-0 right-0`
            : "top-[-100%]"
        } fixed  header-sticky z-[999] w-full bg-[#008459] py-[5px] transition-all duration-500 `}
      >
        <div className="section-container px-[15px] mx-auto flex justify-between items-center">
          <div className="block lg:hidden">
            <Menu onClick={() => setIsMobile(true)} className="text-white" />
          </div>
          <div className="cat-menus 1100px:w-[26%] 1200px:[22%] 1300px:w-[18%] relative lg:block hidden">
            <div
              onClick={() => setOpenCat(!openCat)}
              className="cat-menu-title w-full group px-[10px] 1100px:py-3 1200px:py-[18px] bg-[#fa9f00] text-base leading-6 font-semibold uppercase text-white ease-in-out cursor-pointer relative"
            >
              <span className="mx-0.5 group-hover:transform duration-500 group-hover:rotate-90">
                <Menu />
              </span>
              <span className="ml-2.5 text-base leading-6">
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
              <ul className="transition-all duration-300 ease-in-out">
                <li>
                  <Link
                    onClick={() => setOpenCat(false)}
                    to="/shop"
                    className="block w-full text-sm text-[#111] font-semibold leading-[30px] px-5 py-2.5 capitalize relative"
                  >
                    <span className="pr-2.5">
                      <ArrowForward className="!text-[13px] font-normal text-[#666]" />
                    </span>
                    All Shop
                    <span className="absolute w-[90%] bottom-0 left-0 m-auto right-0 border-b-[#eee] border-b"></span>
                  </Link>
                </li>
                {categories.slice(1, more).map((category, i) => (
                  <li key={i}>
                    <Link
                      onClick={() => setOpenCat(false)}
                      to={`/category/${category._id}`}
                      className="flex items-center w-full text-sm text-[#111] font-semibold leading-[30px] px-5 py-2.5 capitalize relative transition-all duration-300 ease-in-out group"
                    >
                      <span className="pr-2.5">
                        <ArrowForward className="!text-[13px] font-normal text-[#666]" />
                      </span>
                      <span className="flex justify-between items-center w-full">
                        {category.name}{" "}
                        {category.sub_category && !openDropdown && (
                          <ChevronRight className="!text-[18px] font-normal text-[#666] group-hover:rotate-90 transform transition-transform duration-300 ease-in-out" />
                        )}
                      </span>
                      <span className="absolute w-[90%] bottom-0 left-0 m-auto right-0 border-b-[#eee] border-b"></span>
                    </Link>
                  </li>
                ))}
                <li>
                  {less ? (
                    <div
                      onClick={() => {
                        setMore(10);
                        setLess(false);
                      }}
                      className="block w-full text-sm text-[#111] font-semibold leading-[30px] px-5 py-2.5 capitalize relative cursor-pointer  transition-all duration-300 ease-in-out"
                    >
                      <span className="pr-2.5">
                        <Add className="!text-[13px] font-normal text-[#666]" />
                      </span>
                      More
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setMore(3);
                        setLess(true);
                      }}
                      className="block w-full text-sm text-[#111] font-semibold leading-[30px] px-5 py-2.5 capitalize relative cursor-pointer  transition-all duration-300 ease-in-out"
                    >
                      <span className="pr-2.5">
                        <Add className="!text-[13px] font-normal text-[#666]" />
                      </span>
                      Less
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:my-[21px] mt-1.5 mb-[5px] block lg:hidden">
            <Link to="/">
              <img src={Logo} alt="" className="h-[50px] lg:h-auto" />
            </Link>
          </div>
          <div className="hidden lg:block">
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
          <div className="">
            <ul className="flex">
              <li></li>
              <li className="hidden lg:block">
                <Link
                  to="/wishlist"
                  className="w-[56px] h-[46px] flex justify-center items-center text-center cursor-pointer relative text-white"
                >
                  <FavoriteBorder />
                </Link>
              </li>
              <li
                  className="relative z-50 cursor-pointer transition-all duration-300 ease-in-out"
                  onClick={() => {
                    setOpenAccount(!openAccount);
                    setViewCart(false);
                  }}
                >
                  <div className="w-[56px] h-[46px] flex justify-center items-center text-center cursor-pointer relative text-white">
                    {user ? (
                      <img
                        src={`${import.meta.env.VITE_API_URL}/${user.image}`}
                        className="w-[35px] border-1 border-[##fff] bg-white/90 rounded-full"
                        alt="User"
                      />
                    ) : (
                      <PermIdentity />
                    )}
                  </div>
                  {openAccount && (
                    <div
                      className={`absolute ${
                        openAccount ? "h-auto" : "h-0"
                      } z-50 bg-white py-2 w-[200px] right-0 shadow-md rounded-md`}
                    >
                      <div className="relative">
                        <div
                          className={`absolute top-[-37px] hidden right-0 text-[30px] text-[#e5e5e5] z-50 `}
                        >
                          <ArrowDropUp style={{ fontSize: "30px" }} />
                        </div>
                        <ul className="flex flex-col justify-center">
                          {user && user._id ? (
                            <>
                              <li>
                                <Link
                                  to="/user/profile"
                                  className="text-sm text-gray-800 flex items-center gap-1 px-5 py-2 hover:bg-green-500 transition-colors duration-300"
                                >
                                  <span>
                                  <Person style={{ fontSize: "14px" }} /> Profile
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/user/orders"
                                  className="text-sm text-gray-800 flex items-center gap-1 px-5 py-2 hover:bg-green-500 transition-colors duration-300"
                                >
                                  <span>
                                    <ShoppingCart style={{ fontSize: "14px" }} />
                                  </span>{" "}
                                  Orders
                                </Link>
                              </li>
                              <li>
                                <button
                                  onClick={handleLogout}
                                  className="text-sm text-gray-800 flex items-center gap-1 px-5 py-2 hover:bg-green-500 transition-colors duration-300 w-full"
                                >
                                  <span>
                                    <ExitToApp style={{ fontSize: "14px" }} />
                                  </span>{" "}
                                  Logout
                                </button>
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <Link
                                  to="/login"
                                  className="text-sm text-gray-800 flex items-center gap-1 px-5 py-2 hover:bg-green-500 transition-colors duration-300 w-full"
                                >
                                  <span>
                                    <LockOpen style={{ fontSize: "14px" }}  />
                                  </span>{" "}
                                  Sign in
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/create-account"
                                  className="text-sm text-gray-800 flex items-center gap-1 px-5 py-2 hover:bg-green-500 transition-colors duration-300 w-full"
                                >
                                  <span>
                                    <Person style={{ fontSize: "14px" }}  />
                                  </span>{" "}
                                  Register
                                </Link>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              <li
                className="relative z-50"
                onClick={() => {
                  setViewCart(!viewCart);
                  setOpenAccount(false);
                  setCartLoading(true);
                  const timer = setTimeout(() => {
                    setCartLoading(false);
                  }, 500);
                  return () => clearTimeout(timer);
                }}
              >
                <div className="md:w-[81px] h-[46px] flex justify-center items-center text-center cursor-pointer relative text-white rounded-md">
                  <ShoppingCart
                    style={{ fontSize: "24px", margin: "0  auto" }}
                  />
                  <span className="flex items-center justify-center md:border-2 bg-[#008459] lg:bg-transparent border-white rounded-full text-[12px] h-5 w-5 z-10 text-center leading-4 absolute top-0 md:left-7 left-3">
                    0
                  </span>
                  <span className="font-semibold text-base hidden md:block">
                    Cart
                  </span>
                  {viewCart && (
                    <div
                      className={`block absolute top-[31px] right-0 text-[30px] text-[#e5e5e5] z-50`}
                    >
                      <ArrowDropUp style={{ fontSize: "30px" }} />
                    </div>
                  )}
                </div>
                {viewCart && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`absolute ${
                      viewCart ? "h-auto" : "h-0"
                    } z-50 bg-white px-[15px] py-2.5 w-[20rem] right-0 lg:top-[59px] shadow-sm`}
                  >
                    <div className="relative">
                      {cartLoading ? (
                        <Loading padding="10px" classes={`w-12 h-12`} />
                      ) : (
                        <ul className="space-y-2 p-[42px]">
                          Your cart is empty
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
