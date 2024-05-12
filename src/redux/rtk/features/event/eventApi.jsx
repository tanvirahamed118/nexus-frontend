import { apiSlice } from "../api/apiSlice";

export const eventApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneEvent: builder.query({
      query: (id) => ({
        url: `/auth/event/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllEvent: builder.query({
      query: () => ({
        url: "/auth/event",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    createEvent: builder.mutation({
      query: (formData) => ({
        url: "/auth/event",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    updateEvent: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/auth/event/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/auth/event/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOneEventQuery,
  useGetAllEventQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventApi;
