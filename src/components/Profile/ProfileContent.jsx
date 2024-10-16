import React from "react";
import { useLoadUserQuery } from "../../lib/features/api/apiSlice";

const ProfileContent = () => {
  const { data } = useLoadUserQuery("loadUser");
  const user = data?.user;

  return (
    <>
      <div>
        <div className="w-full py-5 px-2.5 mb-[30px] bg-[#f5f5f5] rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="text-base leading-5 text-[#000] font-bold">
              Profile
            </h1>
          </div>
        </div>

        <div className="bg-white px-4 py-10 rounded-md shadow-sm">
          <div className="mb-5">
            <h2 className="text-2xl leading-6 font-medium text-gray-900">Hello, {user.name}</h2>
            <h3 className="leading-6 text-gray-500">welcome to your dashboard profile.</h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                <div className="bg-green-500 px-4 py-5 rounded-sm text-white text-lg">
                    Total orders ({user?.orders?.length})
                </div>
                <div className="bg-orange-500 px-4 py-5 rounded-sm text-white text-lg">
                    Pending orders ({user?.orders?.length})
                </div>
                <div className="bg-blue-500 px-4 py-5 rounded-sm text-white text-lg">
                    Processing orders ({user?.orders?.length})
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContent;
