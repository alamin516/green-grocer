import React, { useState } from "react";
import { Badge } from "@mui/material";
import {
  Notifications,
  Settings,
  AccountCircle,
  ExitToApp,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const AdminToolbar = () => {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <header className="bg-slate-700 shadow-md sticky top-0 w-full z-[9999]">
      <div className="flex justify-between items-center px-4 py-2 lg:px-8">
        {/* Left section: Sidebar Menu & Logo */}
        <div className="flex items-center space-x-4">
          {/* Sidebar Menu Icon */}
          <button className="text-white focus:outline-none hidden">
            <MenuIcon />
          </button>

          {/* Logo */}
          <Link to="/admin" className="text-white font-normal inline-block rounded-md text-sm py-1 px-2 bg-[#fa9f00]">
            Go to Dashboard
          </Link>
        </div>

        {/* Right section: Icons */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <button className="text-white focus:outline-none hidden">
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </button>

          {/* Settings Icon */}
          <button className="text-white focus:outline-none hidden">
            <Settings />
          </button>

          {/* User Profile Icon */}
          <div>
            <div
              className={`text-white focus:outline-none cursor-pointer`}
              onClick={() => setOpenProfile(!openProfile)}
            >
              <AccountCircle />
              {/* Profile Dropdown Menu */}
            </div>
            {openProfile && (
              <div
                className="fixed right-0 top-0 w-full min-h-screen z-[99999] shadow-lg rounded-md text-gray-700"
                onClick={() => setOpenProfile(false)}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="p-4 flex flex-col gap-2 bg-white fixed top-[44px] right-5 w-[160px]"
                >
                  <Link
                    className="flex items-center hover:text-blue-500 transition-colors"
                    to="/admin"
                    onClick={() => setOpenProfile(false)}
                  >
                    <AccountCircle fontSize="small" className="mr-2" />
                    Profile
                  </Link>
                  <Link
                    className="flex items-center hover:text-blue-500 transition-colors"
                    to="/admin/settings"
                    onClick={() => setOpenProfile(false)}
                  >
                    <Settings fontSize="small" className="mr-2" />
                    Settings
                  </Link>
                  <Link
                    className="flex items-center hover:text-blue-500 transition-colors"
                    to="/admin/logout"
                    onClick={() => setOpenProfile(false)}
                  >
                    <ExitToApp fontSize="small" className="mr-2" />
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminToolbar;
