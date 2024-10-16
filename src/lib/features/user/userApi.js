import { apiSlice } from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '/users',
            method:  'GET',
            credentials: "include"
        })
    })
})


export const {useGetAllUsersQuery}  = userApi;