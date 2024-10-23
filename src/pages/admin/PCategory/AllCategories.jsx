import React, { useEffect } from "react";
import { useGetCategoriesQuery } from "../../../lib/features/category/categoryApi";
import Loading from "../../../components/Loading/Loading";
import { HeartBroken } from "@mui/icons-material";
import SEO from "../../../components/Seo";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data, isLoading, refetch } = useGetCategoriesQuery({
    type: "product",
  });

  const categories = data?.categories || [];

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <SEO title="Categories" description="List of categories" />

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">All Categories</h2>
          <Link to={"/admin/product/create-category"}>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-lg">
              Add New Category
            </button>
          </Link>
        </div>

        <div className="w-full shadow rounded-lg border !overflow-x-auto bg-white p-3 pb-10">
          <div className="flex max-992px:flex-col max-992px:items-center max-992px:w-full justify-between items-center mb-4 md:p-4">
            <div className="mb-4">
              <h3 className="text-lg font-medium">All Categories</h3>
            </div>
          </div>

          <table className="w-full divide-y divide-gray-200 px-4 max-992px:w-[992px]">
            <thead>
              <tr>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  <input type="checkbox" className="h-5 w-5 rounded-sm" />
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Name
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Image
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Cover
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Banner
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Total Products
                </th>
                <th className="py-1 px-2 text-right text-xs font-medium text-gray-500">
                  Options
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category, i) => (
                <tr key={i}>
                  <td className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                    <input type="checkbox" className="h-5 w-5 rounded-sm" />
                  </td>
                  <td className="py-1 px-2 text-left text-xs font-medium">
                    {category.name}
                  </td>
                  <td className="py-1 px-2 text-left text-xs font-medium">
                    <img
                      className="h-10 w-10 object-cover rounded-lg"
                      src={category?.image ? category.image : "/images/placeholder1.jpg"}
                      alt={category.name}
                    />
                  </td>
                  <td className="py-1 px-2 text-left text-xs font-medium">
                    <img
                      className="h-10 w-10 object-cover rounded-lg"
                      src={category?.cover ? category.cover : "/images/placeholder1.jpg"}
                      alt={category.name}
                    />
                  </td>
                  <td className="py-1 px-2 text-left text-xs font-medium">
                    <img
                      className="h-10 w-10 object-cover rounded-lg"
                      src={category?.banner ? category.banner : "/images/placeholder1.jpg"}
                      alt={category.name}
                    />
                  </td>
                  <td className="py-1 px-2 text-left text-xs font-medium">
                    {category?.products?.length}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Loading */}
          {isLoading && <Loading padding={"100px"} classes={"w-16 h-16"} />}
          {/* Loading */}

          {/* Empty Category */}
          {categories?.length <= 0 && (
            <div
              className={`flex-col gap-5 items-center justify-center py-10 w-full ${
                isLoading ? "opacity-0 hidden" : "opacity-100 flex"
              }`}
            >
              <HeartBroken className="!text-[50px] text-center text-red-600" />
              <h1 className="text-xl text-gray-600">No categories found</h1>
            </div>
          )}
          {/* Empty Category */}
        </div>
      </div>
    </>
  );
};

export default Categories;
