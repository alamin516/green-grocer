import React from "react";
import CategoryForm from "../../../components/Admin/Category/CategoryForm";
import { useGetCategoriesQuery } from "../../../lib/features/category/categoryApi";

const CreateCategory = () => {
    const {data, isLoading, error, refetch} = useGetCategoriesQuery({type: "product"})

    if (isLoading) return <div className="flex justify-center items-center py-[200px]">Loading...</div>;
    if (error) return <p>Error loading categories</p>;

  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Create Category</h2>
        </div>

        <div className="p-6 bg-white rounded">
          <CategoryForm categories={data?.categories} refetch={refetch}/>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
