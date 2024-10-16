import { useState } from "react";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../../../lib/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Cancel,
  LogoutOutlined,
  Menu,
  Notifications,
  Person,
  Public,
} from "@mui/icons-material";
import Loading from "../../Loading/Loading";

const AdminNavbar = ({ handleMenu, display, handleMinimize, minimize }) => {
  const { user } = useSelector((state) => state.auth);
  const [openNotification, setOpenNotification] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [logOut] = useLogoutMutation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClose = (e) => {
    if (e.target.id === "screen") {
      setOpenNotification(false);
    }
  };

  const logOutHandler = async () => {
    try {
      setLoading(true);
      await logOut().unwrap();
      navigate("/admin/login");
      toast.success("Logout successfully!");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/60 w-full h-[100vh] flex justify-center items-center z-[9999]">
        <Loading padding={"10px"} classes={"w-16 h-16"} />
      </div>
    );
  }

  const notifications = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <nav className="w-full flex justify-between items-center">
      <div className={`flex items-center lg:pl-5`}>
        <div
          className={`font-semibold flex ${
            minimize ? "gap-4" : "gap-4"
          } items-center transition duration-[400ms] ease-linear`}
        >
          <span
            className={`cursor-pointer hidden lg:block bg-[#fa9f00] rounded-lg p-2 transform transition-transform duration-[400ms] ease-linear`}
            onClick={handleMinimize}
            style={{
              transform: minimize ? "rotateY(180deg)" : "",
            }}
          >
            <img alt="" src="/images/menu-fold-line.svg" className="w-6 h-6" />
          </span>
          <div className="bg-[#fa9f00] text-black/600 rounded-full w-10 h-10 flex items-center justify-center">
            <Link to={"/"}>
              <Public style={{ fontSize: "26px" }} />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:pr-5 flex space-x-3 lg:space-x-4 items-center">
        <div
          className="cursor-pointer relative"
          onClick={() => setOpenNotification(true)}
        >
          <Notifications  className="!text-[30px]"/>
          <span className="absolute top-0 right-0 text-xs w-4 h-4 rounded-full bg-green-600 text-white flex items-center justify-center">
            3
          </span>
        </div>
        {/* Notifications */}
        {openNotification && (
          <div
            className={`fixed w-full h-screen top-0 left-0 z-[999999]`}
            onClick={handleClose}
            id="screen"
          >
            <div
              className={`notification fixed w-[300px] h-[400px] z-[99999] bg-white shadow-md  top-[64px] right-10 p-4 rounded-md text-[#111] overflow-hidden overflow-y-auto custom-scrollbar`}
            >
              <div className="flex items-center border-b justify-between pb-2">
                <div className="text-center">Notifications</div>
              </div>
              <div className="top-[30px]">
                {notifications.map((i) => {
                  return (
                    <div
                      key={i}
                      className="pt-3 !cursor-pointer  flex items-center gap-2 border-b-[1px]"
                      onClick={() => setOpenNotification(false)}
                    >
                      <div>
                        <Person className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[12px] mb-0">MERN Stack - ReactJS</p>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] leading-0 m-0">
                            New Order
                          </span>
                          <span className="text-[10px] leading-0 ml-0">
                            5 days ago
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/* User Icon */}
        <div className="">
          <div className="cursor-pointer p-2">
            {user ? (
              <div>
                <img
                  src={`${import.meta.env.VITE_API_URL}/${user?.image}`}
                  alt="avatar"
                  className={`rounded-full border-[1px]  cursor-pointer lg:h-[40px] h-[30px] lg:w-[40px] w-[30px] object-cover
                    `}
                  onClick={() => setOpenProfile(!openProfile)}
                />
              </div>
            ) : (
              <Person />
            )}
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="cursor-pointer p-2" onClick={handleMenu}>
            {display ? <Cancel className="!text-[30px]"/> : <Menu  className="!text-[30px]"/>}
          </div>
        </div>
      </div>
      {openProfile && (
        <div
          className="absolute min-h-screen left-0 top-0 w-full"
          onClick={() => setOpenProfile(false)}
        >
          <div
            className={`absolute top-[62px] right-[10px] z-10 bg-white text-black min-w-[260px] py-3 rounded-md transition-transform duration-300 transform translate3d(-177px, 65px, 0px) shadow-md border`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li onClick={() => setOpenProfile(false)}>
                <Link
                  href="/admin/profile"
                  className="text-sm text-gray-800 flex items-center gap-1 px-5 py-2 hover:bg-green-500 transition-colors duration-300"
                >
                  <Person style={{ fontSize: "14px" }} /> Profile
                </Link>
              </li>
              <li onClick={() => setOpenProfile(false)}>
                <Link
                  href="/admin/profile"
                  className="text-sm text-gray-800 flex items-center gap-1 px-5 py-2 hover:bg-green-500 hover:text-white transition-colors duration-300"
                  onClick={logOutHandler}
                >
                  <LogoutOutlined style={{ fontSize: "14px" }} /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
