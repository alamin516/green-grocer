import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useMediaQuery from "../utils/MediaQuery";
import AdminNavbar from "../components/Admin/Dashboard/AdminNavbar";
import AdminSidebar from "../components/Admin/Dashboard/AdminSidebar";
import "../components/Admin/Dashboard/Admin.css"

const AdminLayout = () => {
  const isBetweenMdAndLg = useMediaQuery();
  const [display, setDisplay] = useState(false);
  const [minimize, setMinimize] = useState(false);

  const handleMenu = () => {
    setDisplay(!display);
  };

  const handleMinimizeSidebar = () => [setMinimize(!minimize)];

  useEffect(() => {
    if (isBetweenMdAndLg) {
      setMinimize(true);
    } else {
      setMinimize(false);
    }
  }, [isBetweenMdAndLg]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex overflow-hidden">
        <aside
          className={`h-screen transform ${
            display ? "translate-x-0" : "-translate-x-full"
          } transition-all duration-[300ms] bg-gray-800 ${
            minimize ? "w-[0px]" : "w-64"
          } lg:translate-x-0 lg:static fixed top-[0px] left-0 z-[999] overflow-hidden overflow-y-auto custom-scrollbar`}
        >
          <AdminSidebar display={display} minimize={minimize} />
        </aside>
        <main className={`admin-main flex-1 overflow-hidden !overflow-y-auto !relative`}>
          {/* Navbar */}
          <div
            className={`p-4 bg-white text-[#111] flex justify-between items-center h-16 shadow-sm fixed top-0 right-0 z-50 transition-all duration-[300ms] ${minimize ? "w-[100%]" : "lg:w-[calc(100%-16rem)] w-full"}`}
          >
            <AdminNavbar
              handleMenu={handleMenu}
              display={display}
              handleMinimize={handleMinimizeSidebar}
              minimize={minimize}
            />
          </div>

          {/* Main Content */}
          <div className={`lg:p-5 mt-10`}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
