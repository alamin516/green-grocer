import React, { useEffect } from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import SEO from "../../../components/Seo";
import LoginForm from "../../../components/Auth/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      if (user.role === "admin" || user.role === "manager" || user.role === "editor") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [user, navigate]);

  if (user && user._id) {
    return <div className="fixed top-0 left-0 bottom-0 right-0 bg-transparent w-full h-[100vh] flex justify-center items-center z-[9999]">
    <Loading padding={"10px"} classes={"w-16 h-16"} />
  </div>;
  }

  return (
    <>
      <SEO
        title="Login"
        description="Green grocer is the biggest organic online platform for people Login"
        keywords={[]}
        image=""
        url=""
      />
      <Breadcrumbs pageTitle="Login" />
      <div className="w-full mb-10">
        <div className="w-full lg:w-[66%] mx-auto px-[15px]">
          {/* Heading start */}
          <div>
            <h1 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative mb-[15px]">
              <span className="relative bg-white z-[2] pr-[25px]">Login</span>
              <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
            </h1>
          </div>
          <LoginForm navigate={navigate} user={user}/>
        </div>
      </div>
    </>
  );
};

export default Login;
