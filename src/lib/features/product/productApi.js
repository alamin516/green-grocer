import { apiSlice } from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({page, limit, sort = "Latest", search}) => ({
        url: `get-products?search=${search}&page=${page}&limit=${limit}&sort=${sort}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    createProduct: builder.mutation({
        query: (product) => ({
            url: "/create-product",
            method: "POST",
            body: product,
            credentials: "include"
        })
    }),
    updateProduct: builder.mutation({
        query: (product) => ({
            url: `/update-product/${product.id}`,
            method: "PUT",
            body: product,
            credentials: "include"
        })
    }),
    deleteProduct: builder.mutation({
        query: (id) => ({
            url: `/delete-product/${id}`,
            method: "DELETE",
            credentials: "include"
        })
    }),
    getSingleProduct: builder.query({
      query: (slug) => ({
        url: `/get-product/${slug}`,
        method: "GET",
      })
    })
  }),
});

export const { useGetProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation, useGetSingleProductQuery } = productApi;
