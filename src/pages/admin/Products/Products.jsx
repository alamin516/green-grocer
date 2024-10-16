import React, { useState, useEffect } from "react";
import { useGetProductsQuery } from "../../../lib/features/product/productApi";
import Loading from "../../../components/Loading/Loading";
import ProductRow from "../../../components/Admin/Product/ProductRow";
import Pagination from "../../../components/Admin/Pagination/Pagination";
import { HeartBroken } from "@mui/icons-material";
import SEO from "../../../components/Seo";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [bulkAction, setBulkAction] = useState([]);
  const [page, setPage] = useState();
  const [limit, setLimit] = useState();

  const {
    data = {},
    isLoading,
    refetch,
  } = useGetProductsQuery({
    page,
    limit,
    sort: sortOption,
    search: searchTerm,
  });

  const { products = [], pagination = {} } = data.payload || {};

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleSortChange = (e) => setSortOption(e.target.value);

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleLimitChange = (event) => {
    const newLimit = event.target.value;
    setLimit(newLimit);
    setPage(1);
  };

  useEffect(() => {
    refetch();
  }, [refetch, page, limit, sortOption, searchTerm]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params) {
      params.set("page", page);
      params.set("limit", limit);
      params.set("sort", sortOption);
      params.set("search", searchTerm);
      window.history.pushState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
    }
  }, [page, limit, sortOption, searchTerm]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageFromUrl = Number(params.get("page")) || 1;
    const limitFromUrl = Number(params.get("limit")) || 10;
    const sortFromUrl = params.get("sort") || "";
    const searchFromUrl = params.get("search") || "";

    setPage(pageFromUrl);
    setLimit(limitFromUrl);
    setSortOption(sortFromUrl);
    setSearchTerm(searchFromUrl);
  }, []);

  return (
    <>
      <SEO title="Products" description="List of products" />

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">All products</h2>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-lg">
            Add New Product
          </button>
        </div>

        <div className="w-full shadow rounded-lg border  !overflow-x-auto bg-white p-3 pb-10">
          <div className="flex max-992px:flex-col max-992px:items-center max-992px:w-full justify-between items-center mb-4 md:p-4">
            <div className="mb-4">
              <h3 className="text-lg font-medium">All Products</h3>
            </div>
            <div className="flex max-992px:flex-col max-992px:justify-start gap-4">
              <div>
                <select
                  value={bulkAction}
                  onChange={""}
                  className="rounded-lg px-3 py-2 border border-gray-300 max-992px:w-full"
                >
                  <option>Bulk Action</option>
                  <option>Delete Selected</option>
                  <option>Mark as Featured</option>
                </select>
              </div>

              <div>
                <select className="rounded-lg px-3 py-2 border border-gray-300 max-992px:w-full">
                  <option>All Sellers</option>
                </select>
              </div>

              <div>
                <select
                  name="sort"
                  className="rounded-lg px-3 py-2 border border-gray-300 max-992px:w-full"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="">Sort by</option>
                  <option value="Latest">Latest</option>
                  <option value="Old">Old</option>
                  <option value="Ascending">Name: A-Z</option>
                  <option value="Descending">Name: Z-A</option>
                  <option value="PriceAsc">Price: Low to High</option>
                  <option value="PriceDesc">Price: High to Low</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  name="search"
                  className="rounded-lg px-3 py-2 border border-gray-300 max-992px:w-full"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>

          <table className="w-full divide-y divide-gray-200 px-4 max-992px:w-[992px]">
            <thead>
              <tr>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded-sm"
                    onClick={() => setBulkAction(!bulkAction)}
                  />
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Name
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Added By
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Info
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Total Stock
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Todays Deal
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Published
                </th>
                <th className="py-1 px-2 text-left text-xs font-medium text-gray-500">
                  Featured
                </th>
                <th className="py-1 px-2 text-right text-xs font-medium text-gray-500">
                  Options
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product, i) => (
                <ProductRow
                  key={i}
                  product={product}
                  selectedProducts={selectedProducts}
                  handleSelectProduct={handleSelectProduct}
                  isLoading={isLoading}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
          {/* Loading */}
          {isLoading && <Loading padding={"100px"} classes={"w-16 h-16"} />}
          {/* Loading */}
          {/* Empty Product */}
          {products?.length <= 0 && (
            <>
              <div
                className={`flex-col gap-5 items-center justify-center py-10 w-full ${
                  isLoading ? "opacity-0 hidden" : "opacity-100 flex"
                }`}
              >
                <HeartBroken className="!text-[50px] text-center text-red-600" />
                <h1 className="text-xl text-gray-600">No products found</h1>
              </div>
            </>
          )}
          {/* Empty Product */}
          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <Pagination
              page={page}
              pagination={pagination}
              limit={limit}
              handleLimitChange={handleLimitChange}
              setPage={setPage}
            />
          )}
          {/* Pagination */}
        </div>
      </div>
    </>
  );
};

export default Products;
