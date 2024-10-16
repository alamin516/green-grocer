import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../../utils/styles";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <div className={`${styles.label} text-5xl`}>Coming Soon</div>
      <div className="flex gap-5 py-5">
        {[300, 400, 500, 600, 700].map((delay, index) => (
          <span
            key={index}
            className={`bg-green-600 w-5 h-5 rounded-full block animate-bounce`}
            style={{ animationDelay: `${delay}ms` }}
          ></span>
        ))}
      </div>

      <div>
        <Link to="/">
          <button className="px-5 py-2 bg-green-500 text-white">
            View site
          </button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Dashboard;
