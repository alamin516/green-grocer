import {
  ContentCopy,
  DeleteOutline,
  Edit,
  Visibility,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useCopyProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../../lib/features/product/productApi";
import toast from "react-hot-toast";
import Loading from "../../Loading/Loading";
import ConfirmModal from "../../UI/Modals/ConfirmModal";

const ProductRow = ({
  product,
  selectedProducts,
  handleSelectProduct,
  isLoading,
  refetch,
}) => {
  const [localProduct, setLocalProduct] = useState(product); 
  const [deleteProduct, { isLoading: deleteLoading }] =
    useDeleteProductMutation();
  const [copyProduct] = useCopyProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [openModal, setOpenModal] = useState(false);

  const handleToggle = async (field) => {
    const newValue =
      field === "featured"
        ? !localProduct.featured
        : field === "status"
        ? localProduct.status === "published"
          ? "draft"
          : "published"
        : !localProduct.isDeal;

    setLocalProduct((prev) => ({ ...prev, [field]: newValue }));

    try {
      await updateProduct({ id: product._id, product: { [field]: newValue } });
      toast.success(
        `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } updated successfully.`
      );
    } catch (error) {
      setLocalProduct((prev) => ({ ...prev, [field]: product[field] }));
      toast.error(`Failed to update ${field}.`);
    }
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    setOpenModal(false);
    toast.success("Product Deleted Successfully");
    refetch();
  };

  const handleCopyProduct = async (id) => {
    await copyProduct(id);
    toast.success("Product copied Successfully");
    refetch();
  };

  if (deleteLoading) {
    return (
      <div className="fixed top-0 left-0 w-full min-h-screen bg-black/80 flex justify-center items-center z-[99999]">
        <Loading padding={"100px"} classes={"w-16 h-16"} />
      </div>
    );
  }

  return (
    <>
      <tr key={product._id}>
        <td className="py-1 px-2">
          <input
            type="checkbox"
            className="h-5 w-5 rounded-sm"
            checked={selectedProducts.includes(product._id)}
            onChange={() => handleSelectProduct(product._id)}
          />
        </td>
        <td className="py-1 px-2">
          <div className="flex items-center">
            {isLoading ? (
              <div className="h-10 w-10 bg-gray-300 animate-pulse flex items-center justify-center rounded-lg">
                <span className="inline-block w-5 h-5 border-[2px] rounded-full border-t-transparent animate-spin"></span>
              </div>
            ) : (
              <img
                className="h-10 w-10 object-cover rounded-lg"
                src={localProduct.images[0]?.url || "/images/placeholder1.jpg"}
                alt={localProduct.title}
              />
            )}
            <div className="ml-4">
              <div className="text-xs font-medium text-gray-900">
                {localProduct.title}
              </div>
            </div>
          </div>
        </td>
        <td className="text-xs font-medium py-1 px-2">Admin</td>
        <td className="text-xs font-medium py-1 px-2">
          Regular Price: ৳ {localProduct.price}
          <br />
          Sale Price: ৳ {localProduct.discount_price}
          <br />
          Rating: {localProduct.rating.average}
        </td>
        <td className="py-1 px-2">{localProduct.stock_quantity}</td>

        {/* Toggle Today's Deal */}
        <td className="py-1 px-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={localProduct.isDeal}
              onChange={() => handleToggle("isDeal")}
              className="sr-only peer"
            />
            <div className="w-12 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 shadow-inner transition-all duration-300">
              <span
                className={`absolute top-[2px] ${
                  localProduct.isDeal ? "right-[2px]" : "left-[2px]"
                } w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300`}
              ></span>
            </div>
          </label>
        </td>

        {/* Toggle Published */}
        <td className="py-1 px-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={localProduct.status === "published"}
              onChange={() => handleToggle("status")}
              className="sr-only peer"
            />
            <div className="w-12 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 shadow-inner transition-all duration-300">
              <span
                className={`absolute top-[2px] ${
                  localProduct.status === "published"
                    ? "right-[2px]"
                    : "left-[2px]"
                } w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300`}
              ></span>
            </div>
          </label>
        </td>

        {/* Toggle Featured */}
        <td className="py-1 px-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={localProduct.featured}
              onChange={() => handleToggle("featured")}
              className="sr-only peer"
            />
            <div className="w-12 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 shadow-inner transition-all duration-300">
              <span
                className={`absolute top-[2px] ${
                  localProduct.featured ? "right-[2px]" : "left-[2px]"
                } w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300`}
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
            <Link to={`/admin/edit-product/${product._id}`}>
              <button className="text-gray-500 hover:text-purple-600">
                <Edit />
              </button>
            </Link>
            <button
              onClick={() => setOpenModal(true)}
              className="text-gray-500 hover:text-red-600"
            >
              <DeleteOutline />
            </button>
            <button
              onClick={() => handleCopyProduct(product._id)}
              className="text-gray-500 hover:text-blue-600"
            >
              <ContentCopy />
            </button>
          </div>
        </td>
      </tr>
      {openModal && (
        <ConfirmModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleDeleteProduct={handleDeleteProduct}
          data={product}
        />
      )}
    </>
  );
};

export default ProductRow;
