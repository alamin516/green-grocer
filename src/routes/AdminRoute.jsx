import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useLoadUserQuery } from "../lib/features/api/apiSlice";
// import Loading from "../components/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { data, isLoading } = useLoadUserQuery("loadUser");
  const location = useLocation();

  const user = data?.user;

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading || showLoading) {
    return (
      <div className="loading-container">
        <div className="book">
          <div className="page page1">Welcome</div>
          <div className="page page2">To</div>
          <div className="page page3">{user?.role} Dashboard</div>
        </div>
      </div>
    );
  }

  if (
    user?.role === "admin" ||
    user?.role === "manager" ||
    user?.role === "editor"
  ) {
    return children;
  }

  return <Navigate to="/error-page" state={{ from: location }} replace />;
};

export default AdminRoute;
