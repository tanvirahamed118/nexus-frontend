import { apiSlice } from "../api/apiSlice";

export const contactApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneContact: builder.query({
      query: (id) => ({
        url: `/auth/message/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllContact: builder.query({
      query: () => ({
        url: "/auth/message",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    createContact: builder.mutation({
      query: (contact) => ({
        url: "/auth/message",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["update"],
    }),
    updateContact: builder.mutation({
      query: ({ emails, id }) => ({
        url: `/auth/message/${id}`,
        method: "PATCH",
        body: emails,
      }),
      invalidatesTags: ["update"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/auth/message/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOneContactQuery,
  useGetAllContactQuery,
  useCreateContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;
