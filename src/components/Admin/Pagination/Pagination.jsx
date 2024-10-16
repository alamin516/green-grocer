import React from "react";
import { Pagination as CustomPagination } from "@mui/material";

const Pagination = ({
  page,
  pagination,
  limit,
  handleLimitChange,
  setPage,
}) => {
  return (
    <>
      <div className="flex max-992px:flex-col justify-between items-center mt-4 gap-3">
        <div>
          Page {page} of {pagination.totalPages || 1}
        </div>
        <div className="flex gap-1 items-center">
          <div>
            <select
              name="sort"
              className="rounded-lg px-3 py-2 border border-gray-300 max-992px:w-full"
              value={limit}
              onChange={handleLimitChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={75}>75</option>
              <option value={100}>100</option>
            </select>
          </div>
          <CustomPagination
            count={pagination.totalPages}
            color="secondary"
            page={page}
            onChange={(event, value) => setPage(value)}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
