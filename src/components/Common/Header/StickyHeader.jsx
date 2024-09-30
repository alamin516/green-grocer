import {
  ArrowDropUp,
  ArrowForward,
  FavoriteBorder,
  Menu,
  PermIdentity,
  Person,
  ShoppingCart,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo_green_grocer.webp";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

const StickyHeader = ({ openCat, setOpenCat, setIsMobile, openAccount, setOpenAccount, viewCart, setViewCart, cartLoading, setCartLoading}) => {
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
    <div>
      <div
        className={`${
          isSticky ? "top-0 left-0 right-0" : "top-[-100%]"
        } fixed  header-sticky z-[999] w-full bg-[#008459] py-[5px] transition-all duration-500`}
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
              <ul>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
                  <li key={i}>
                    <Link
                      to="#"
                      className="block w-full text-sm font-semibold leading-[30px] px-5 py-2.5 capitalize relative"
                    >
                      <span className="pr-2.5">
                        <ArrowForward fontSize="13px" className="font-normal" />
                      </span>
                      All Shop
                      <span className="absolute w-[90%] bottom-0 left-0 m-auto right-0 border-b-[#eee] border-b"></span>
                    </Link>
                  </li>
                ))}
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
                onClick={() => setOpenAccount(!openAccount)}
              >
                <div className="w-[56px] h-[46px] flex justify-center items-center text-center cursor-pointer relative text-white">
                  <PermIdentity />
                </div>
                {openAccount && (
                  <div
                    className={`absolute ${
                      openAccount ? "h-auto" : "h-0"
                    } z-50 bg-white px-[15px] py-2.5 w-[200px] right-0 `}
                  >
                    <div className="relative">
                      <div
                        className={`block absolute top-[-37px] right-0 text-[30px] text-[#e5e5e5] z-50 `}
                      >
                        <ArrowDropUp style={{ fontSize: "30px" }} />
                      </div>
                      <ul className="space-y-2">
                        
                        <li>
                          <Link
                            to={"/create-account"}
                            className="text-sm text-[#666] leading-6"
                          >
                            <span>
                              <Person className="!text-[18px]" />
                            </span>{" "}
                            Register
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li
                  className="relative z-50"
                  onClick={() => {
                    setViewCart(!viewCart);
                    setCartLoading(true);
                    const timer = setTimeout(() => {
                      setCartLoading(false);
                    }, 2500);
                    return () => clearTimeout(timer);
                  }}
                >
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
                  {viewCart && (
                    <div
                      className={`absolute ${
                        viewCart ? "h-auto" : "h-0"
                      } z-50 bg-white px-[15px] py-2.5 w-[20rem] right-0 lg:top-[60px] shadow-sm`}
                    >
                      <div className="relative">
                        <div
                          className={`block absolute top-[-39px] right-0 text-[30px] text-[#e5e5e5] z-50 `}
                        >
                          <ArrowDropUp style={{ fontSize: "30px" }} />
                        </div>
                        {cartLoading ? (
                          <Loading padding="10px" height="12" width="12"/>
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
