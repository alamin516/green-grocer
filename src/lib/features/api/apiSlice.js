import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogin, userLogout } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/api/v1`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});


const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery('/refresh-token', api, extraOptions);

    if (refreshResult.data) {
      api.dispatch(userLogin({
        accessToken: refreshResult.data.accessToken,
        user: refreshResult.data.user,
      }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(userLogout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    refreshToken: builder.query({
      query: () => ("/refresh-token"),
    }),
    loadUser: builder.query({
      query: () => ("/me"),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        dispatch(userLogin({
          accessToken: result.data.accessToken,
          user: result.data.user,
        }));
      },
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;
