import { KeyboardArrowUp } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const BackToTop = () =>{
    if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
  }

  useEffect(() => {
    window.addEventListener("scroll", BackToTop);
    return () => window.removeEventListener("scroll", BackToTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <div
        onClick={scrollToTop}
        title="Back To Top"
        className={`${
          isVisible ? "md:bottom-10 bottom-16 opacity-100" : "bottom-0 opacity-0"
        } fixed flex items-center justify-center z-[999] md:w-10 md:h-10 w-8 h-8 right-4 bg-[#008459] text-white rounded-none shadow-md hover:bg-yellow-500 cursor-pointer transition-all duration-300 ease-in-out`}
      >
        <KeyboardArrowUp className="!text-[18px] md:!text-[24px]"/>
      </div>
    
  );
};

export default BackToTopButton;
