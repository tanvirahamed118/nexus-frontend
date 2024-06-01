import { apiSlice } from "../api/apiSlice";

export const applyApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneApply: builder.query({
      query: (id) => ({
        url: `/auth/apply/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllApply: builder.query({
      query: () => ({
        url: "/auth/apply",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    createApply: builder.mutation({
      query: (data) => ({
        url: "/auth/apply",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["update"],
    }),
    updateApply: builder.mutation({
      query: ({ submission, id }) => ({
        url: `/auth/apply/${id}`,
        method: "PATCH",
        body: submission,
      }),
      invalidatesTags: ["update"],
    }),
    deleteApply: builder.mutation({
      query: (id) => ({
        url: `/auth/apply/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOneApplyQuery,
  useGetAllApplyQuery,
  useCreateApplyMutation,
  useUpdateApplyMutation,
  useDeleteApplyMutation,
} = applyApi;
