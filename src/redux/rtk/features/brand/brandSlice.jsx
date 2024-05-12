import { apiSlice } from "../api/apiSlice";

export const eventApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneBrand: builder.query({
      query: (id) => ({
        url: `/auth/brand/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllBrand: builder.query({
      query: () => ({
        url: "/auth/brand",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    createBrand: builder.mutation({
      query: (brand) => ({
        url: "/auth/brand",
        method: "POST",
        body: brand,
      }),
      invalidatesTags: ["update"],
    }),
    updateBrand: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/auth/brand/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `/auth/brand/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOneBrandQuery,
  useGetAllBrandQuery,
  useCreateBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
} = eventApi;
