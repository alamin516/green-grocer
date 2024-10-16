import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useLoadUserQuery } from "../lib/features/api/apiSlice";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { data, isLoading } = useLoadUserQuery("loadUser");
  const location = useLocation();

  const user = data?.user;

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-transparent w-full h-[100vh] flex justify-center items-center z-[9999]">
        <Loading padding={"10px"} classes={"w-16 h-16"} />
      </div>
    );
  }

  if (user && user._id) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
