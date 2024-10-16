import React, { useEffect, useState } from "react";
import {
  AccountBox,
  CardGiftcardOutlined,
  Dashboard,
  ExitToApp,
  HelpOutline,
  LocationOn,
  MailOutline,
  Payment,
  Person,
  Share,
  ShoppingCart,
} from "@mui/icons-material";
import Loading from "../Loading/Loading";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../lib/features/auth/authApi";
import { useLoadUserQuery } from "../../lib/features/api/apiSlice";

const ProfileSidebar = () => {
  const { data, refetch } = useLoadUserQuery("loadUser");
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const user = data?.user;


  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
      toast.success("Logout successfully");
      navigate("/login");
    } catch (error) {
      console.log("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 w-full h-[100vh] flex justify-center items-center z-[9999]">
        <Loading padding={"10px"} classes={"w-16 h-16"} />
      </div>
    );
  }

  return (
    <>
      <aside className="w-full bg-white shadow-sm rounded-md mb-6 lg:mb-0 overflow-hidden">
        <div className="flex items-center space-x-4 py-3 pl-3 text-white bg-[#fa9f00]">
          <div className="border-[2px] !border-white rounded-full">
            <img
              className="w-10 h-10 rounded-full"
              src={`${import.meta.env.VITE_API_URL}/${user.image}`}
              alt="profile"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user["name"]}</h2>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="block "
              >
                <Link
                  to={`/user/${item.url}`}
                  className={`inline-block w-full text-left p-2 rounded hover:bg-[#008459] hover:text-white ${
                    location.pathname === `/user/${item.url}`
                      ? "bg-[#008459] text-white"
                      : ""
                  }`}
                  aria-current={
                    location.pathname === `/user/${item.url}`
                      ? "page"
                      : undefined
                  }
                >
                  {item.icon} {""}
                  {item.level}
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left p-2 rounded hover:bg-red-200 text-red-600"
              >
                <ExitToApp /> Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default ProfileSidebar;

const menuItems = [
  {
    level: "Dashboard",
    icon: <Dashboard />,
    url: "profile",
  },
  {
    level: "Account",
    icon: <AccountBox />,
    url: "account",
  },
  {
    level: "My Orders",
    icon: <ShoppingCart />,
    url: "orders",
  },
  {
    level: "Personal Information",
    icon: <Person />,
    url: "personal-info",
  },
  {
    level: "My Rewards",
    icon: <CardGiftcardOutlined />,
    url: "rewards",
  },
  {
    level: "Addresses",
    icon: <LocationOn />,
    url: "addresses",
  },
  {
    level: "Payment Methods",
    icon: <Payment />,
    url: "payment",
  },
  {
    level: "Contact Preferences",
    icon: <MailOutline />,
    url: "#contact",
  },
  {
    level: "Social Networks",
    icon: <Share />,
    url: "#social-networks",
  },
  {
    level: "Need Help",
    icon: <HelpOutline />,
    url: "#help",
  },
];
