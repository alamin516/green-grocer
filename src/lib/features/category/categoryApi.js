import { apiSlice } from "../api/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: ({type}) => ({
        url: `/categories?type=${type}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/create-category",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body: updatedData,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
