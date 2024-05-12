import { apiSlice } from "../../api/apiSlice";
import { adminLoggedIn } from "./adminSlice";

export const adminAuthApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneAdmin: builder.query({
      query: (id) => ({
        url: `/auth/admin/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllAdmin: builder.query({
      query: () => ({
        url: "/auth/admin",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    registerAdmin: builder.mutation({
      query: (admin) => ({
        url: "/auth/admin/register",
        method: "POST",
        body: admin,
      }),
    }),
    updateAdmin: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/auth/admin/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    updateAdminPass: builder.mutation({
      query: ({ pass, id }) => ({
        url: `/auth/admin/password/${id}`,
        method: "PATCH",
        body: pass,
      }),
      invalidatesTags: ["update"],
    }),
    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `/auth/admin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
    loginAdmin: builder.mutation({
      query: (admin) => ({
        url: "/auth/admin/login",
        method: "POST",
        body: admin,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "admin",
            JSON.stringify({
              adminToken: result.data.token,
              admin: result.data.admin,
            })
          );
          dispatch(
            adminLoggedIn({
              adminToken: result.data.token,
              admin: result.data.admin,
            })
          );
        } catch (error) {
          // Do Nothning
        }
      },
    }),
    sendOTPAdmin: builder.mutation({
      query: (admin) => ({
        url: "/auth/admin/otp",
        method: "POST",
        body: admin,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem("email", result.data.email);
        } catch (error) {
          // Do Nothning
        }
      },
    }),
    checkOTPAdmin: builder.mutation({
      query: (admin) => ({
        url: "/auth/admin/otp/check",
        method: "POST",
        body: admin,
      }),
    }),
    changeOTPAdmin: builder.mutation({
      query: (admin) => ({
        url: "/auth/admin/reset/change",
        method: "POST",
        body: admin,
      }),
    }),
  }),
});

export const {
  useGetOneAdminQuery,
  useGetAllAdminQuery,
  useRegisterAdminMutation,
  useLoginAdminMutation,
  useSendOTPEAdminMutation,
  useCheckOTPAdminMutation,
  useChangeOTPAdminMutation,
  useUpdateAdminMutation,
  useUpdateAdminPassMutation,
  useDeleteAdminMutation,
} = adminAuthApi;
