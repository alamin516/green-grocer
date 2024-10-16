import { apiSlice } from "../api/apiSlice";
import { userLogin, userLogout, userRegistration } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/create-account",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              token: result.data.user.token,
            })
          );
        } catch (error) {
          console.error(error);
        }
      },
    }),
    activation: builder.mutation({
      query: ({ activation_code, activation_token }) => ({
        url: "/verify-user",
        method: "POST",
        body: {
          activation_code,
          activation_token,
        },
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLogin({
              accessToken: result.data.activationToken,
              user: result.data.user,
            })
          );
        } catch (error) {
          console.error(error);
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(userLogout());
        } catch (error) {
          console.log("Error during logout", error);
        }
      },
    }),
    forgetPassword: builder.mutation({
      query: ({ email }) => ({
        url: "/forget-password",
        method: "POST",
        body: { email },
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          console.log("Token Validated successful");
        } catch (error) {
          console.error("Token Validated failed", error);
        }
      },
    }),
    resetTokenValidate: builder.mutation({
      query: (token) => ({
        url: "/reset-token-validate",
        method: "POST",
        body: {token} ,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          console.log("Token Validated successful");
        } catch (error) {
          console.error("Token Validated failed", error);
        }
      },
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/update-password`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useActivationMutation,
  useLoginMutation,
  useLogoutMutation,
  useForgetPasswordMutation,
  useResetTokenValidateMutation,
  useResetPasswordMutation,
} = authApi;
