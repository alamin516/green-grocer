import { apiSlice } from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({page="1", limit="", sort = "Latest", search="", type=""}) => ({
        url: `get-products?search=${search}&page=${page}&limit=${limit}&sort=${sort}&type=${type}`,
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
        query: ({id, product}) => ({
            url: `/update-product/${id}`,
            method: "PUT",
            body: product,
            credentials: "include",
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
        credentials: "include"
      })
    }),
    getSingleProductById: builder.query({
      query: (id) => ({
        url: `/get-product-id/${id}`,
        method: "GET",
        credentials: "include"
      })
    }),
    copyProduct: builder.mutation({
      query: (id) => ({
        url: `/copy-product/${id}`,
        method: "POST",
        credentials: "include"
      })
    })
  }),
});

export const { useGetProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation, useGetSingleProductQuery, useGetSingleProductByIdQuery, useCopyProductMutation } = productApi;
