import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./MenuItems";
import "./Admin.css";

const AdminSidebar = () => {
  const currentPath = useLocation();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  useEffect(() => {
    menuItems.forEach((item, index) => {
      if (
        item.subItems &&
        item.subItems.some((subItem) => subItem.href === currentPath)
      ) {
        setOpenDropdownIndex(index);
      }
    });
  }, [currentPath]);

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <nav className="flex flex-col justify-between overflow-y-auto">
      <div className="side_nav flex flex-col justify-between self-stretch overflow-hidden !overflow-y-auto custom-scrollbar">
        <Link
          to={"/admin"}
          className="w-64 h-16 hover:bg-current/60 shadow-md hover:bg-[#3A3F50] flex justify-center items-center"
        >
          <h1 className="text-xl text-center text-white">Admin Dashboard</h1>
        </Link>
        <ul className="py-2 overflow-hidden">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <Link to={item.href} target={item?.target || "_self"}>
                <li
                  className={`flex items-center justify-left group w-full cursor-pointer relative overflow-hidden py-2 px-4  transition-all duration-[400ms] ${
                    currentPath.pathname === item.href
                      ? "bg-[#3a3f50] text-white"
                      : "bg-[#232734] text-gray-400"
                  } hover:bg-[#3a3f50] hover:text-white ${
                    openDropdownIndex === index &&
                    item.subItems &&
                    "!bg-[#3a3f50] text-white"
                  }`}
                  onClick={() => handleDropdownToggle(index)}
                >
                  {item.icon}
                  <div
                    className={`flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between flex-1`}
                  >
                    <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                      {item.label}
                    </p>
                    {item.subItems && (
                      <span className="ml-auto">
                        {openDropdownIndex === index ? (
                          <KeyboardArrowUp />
                        ) : (
                          <KeyboardArrowDown />
                        )}
                      </span>
                    )}
                  </div>
                </li>
              </Link>
              {openDropdownIndex === index && item.subItems && (
                <ul className="bg-[#232734]">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link key={subIndex} to={subItem.href}>
                      <li
                        className={`flex mt-[2px] items-center justify-start group w-full cursor-pointer relative overflow-hidden py-2 px-4 transition-colors duration-[400ms] ${
                          currentPath === subItem.href
                            ? "bg-[#3a3f50] !text-white"
                            : "bg-[#232734] text-gray-400"
                        } hover:bg-[#3a3f50] hover:text-white`}
                      >
                        <div
                          className={`flex items-left transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                        >
                          <p className="capitalize whitespace-nowrap ml-[5px] opacity-100 transition-opacity duration-150 ease-linear flex items-center">
                            <span className="mr-1 text-base">
                              {currentPath === subItem.href ? (
                                <RadioButtonChecked
                                  style={{ fontSize: "14px" }}
                                />
                              ) : (
                                <RadioButtonUnchecked
                                  style={{ fontSize: "14px" }}
                                />
                              )}
                            </span>
                            {subItem.label}
                          </p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default AdminSidebar;
