import { apiSlice } from "../../api/apiSlice";
import { userLoggedIn } from "./userSlice";

export const userAuthApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneUser: builder.query({
      query: (id) => ({
        url: `/auth/user/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    registerUser: builder.mutation({
      query: ({ formData }) => ({
        url: "/auth/user/register",
        method: "POST",
        body: formData,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/auth/user/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    updateUserPass: builder.mutation({
      query: ({ user, id }) => ({
        url: `/auth/user/password/${id}`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["update"],
    }),
    deleteUser: builder.mutation({
      query: ({ user, id }) => ({
        url: `/auth/user/${id}`,
        method: "DELETE",
        body: user,
      }),
      invalidatesTags: ["update"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/auth/user/login",
        method: "POST",
        body: user,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "user",
            JSON.stringify({
              userToken: result.data.token,
              user: result.data.user,
            })
          );
          dispatch(
            userLoggedIn({
              userToken: result.data.token,
              user: result.data.user,
            })
          );
        } catch (error) {
          // Do Nothning
        }
      },
    }),
    sendOTPUser: builder.mutation({
      query: (email) => ({
        url: "/auth/user/otp",
        method: "POST",
        body: email,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem("UserEmail", result.data.email);
        } catch (error) {
          // Do Nothning
        }
      },
    }),
    checkOTPUser: builder.mutation({
      query: (user) => ({
        url: "/auth/user/otp/check",
        method: "POST",
        body: user,
      }),
    }),
    changeOTPUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/user/reset/change",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const {
  useGetOneUserQuery,
  useGetAllUserQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useSendOTPUserMutation,
  useCheckOTPUserMutation,
  useChangeOTPUserMutation,
  useUpdateUserMutation,
  useUpdateUserPassMutation,
  useDeleteUserMutation,
} = userAuthApi;
