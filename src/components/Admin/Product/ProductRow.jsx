import { ContentCopy, DeleteOutline, Edit, Visibility } from "@mui/icons-material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../../../lib/features/product/productApi";
import toast from "react-hot-toast";
import Loading from "../../Loading/Loading";

const ProductRow = ({product, selectedProducts, handleSelectProduct, isLoading, refetch}) => {
  const [deleteProduct,{data, isLoading: deleteLoading, error, isSuccess}] = useDeleteProductMutation();


  useEffect(() => {
    if(isSuccess){
      toast.success("Product Deleted Successfully")
      refetch()
    }
    if(error){
      toast.error(error.data.message)
    }
  }, [data, isSuccess, error, refetch]);

  const handleDeleteProduct = async(id) =>{
    await deleteProduct(id)
  }

  if(deleteLoading){
    return <div className="fixed top-0 left-0 w-full min-h-screen bg-black/80 flex justify-center items-center z-[99999]">
      <Loading padding={"100px"} classes={"w-16 h-16"}/>
    </div>
  }

  return (
    <>
      <tr key={product._id}>
        <td className="py-1 px-2">
          <input
            type="checkbox"
            className="h-5 w-5 rounded-sm"
            checked={selectedProducts.includes(product._id)}
            onChange={() => handleSelectProduct(product.id)}
          />
        </td>
        <td className="py-1 px-2">
          <div className="flex items-center">
            {isLoading ? (
              <>
                <div className="h-10 w-10 object-cover rounded-lg bg-gray-300 transition-all animate-pulse flex items-center justify-center">
                  <span className="inline-block w-5 h-5 border-[2px] rounded-full border-t-transparent animate-spin"></span>
                </div>
              </>
            ) : (
              <img
                className="h-10 w-10 object-cover rounded-lg"
                src={`${import.meta.env.VITE_API_URL}/${product.images[0]?.url}`}
                alt={product.title}
              />
            )}
            <div className="ml-4">
              <div className="text-xs font-medium text-gray-900">
                {product.title}
              </div>
            </div>
          </div>
        </td>
        <td className="py-1 px-2">{"Admin"}</td>
        <td className="py-1 px-2">
          Base Price: ৳{product.price}
          <br />
          Rating: {product.rating.average}
        </td>
        <td className="py-1 px-2">{product.stock_quantity}</td>

        <td className="py-1 px-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={product.isDeal}
              className="sr-only peer"
            />
            <div className="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300 ease-in-out shadow-inner">
              <span
                className={`absolute top-[2px] ${
                  product.isDeal ? "right-[2px]" : "left-[2px] "
                } w-6 h-6 bg-white rounded-full shadow-md 
            transition-all duration-300 ease-in-out peer-checked:translate-x-5 peer-checked:bg-white
          `}
              ></span>
            </div>
          </label>
        </td>

        <td className="py-1 px-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={product.isPublished}
              className="sr-only peer"
            />
            <div className="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300 ease-in-out shadow-inner">
              <span
                className={`absolute top-[2px] ${
                  product.isPublished ? "right-[2px]" : "left-[2px] "
                } w-6 h-6 bg-white rounded-full shadow-md 
            transition-all duration-300 ease-in-out peer-checked:translate-x-5 peer-checked:bg-white
          `}
              ></span>
            </div>
          </label>
        </td>
        <td className="py-1 px-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={product.isFeatured}
              className="sr-only peer"
            />
            <div className="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300 ease-in-out shadow-inner">
              <span
                className={`absolute top-[2px] ${
                  product.isFeatured ? "right-[2px]" : "left-[2px] "
                } w-6 h-6 bg-white rounded-full shadow-md 
            transition-all duration-300 ease-in-out peer-checked:translate-x-5 peer-checked:bg-white
          `}
              ></span>
            </div>
          </label>
        </td>

        <td className="py-1 px-2 text-right text-xs font-medium">
          <div className="flex items-center justify-end gap-2">
            <Link to={`/product/${product.slug}`}>
              <button className="text-gray-500 hover:text-green-600">
                <Visibility />
              </button>
            </Link>
            <button className="text-gray-500 hover:text-purple-600">
              <Edit />
            </button>
            <button onClick={()=> handleDeleteProduct(product._id)} className="text-gray-500 hover:text-red-600">
              <DeleteOutline />
            </button>
            <button className="text-gray-500 hover:text-blue-600">
              <ContentCopy />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
