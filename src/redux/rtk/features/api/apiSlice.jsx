import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const basequary = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_URL,
  prepareHeaders: async (headers) => {
    const userAuth = localStorage.getItem("user");
    const user = JSON.parse(userAuth);
    if (user?.userToken) {
      const token = user?.userToken;
      headers.set("token", `Bearer ${token}`);
    }
    const adminAuth = localStorage.getItem("admin");
    const admin = JSON.parse(adminAuth);
    if (admin?.adminToken) {
      const token = admin?.adminToken;
      headers.set("token", `Bearer ${token}`);
    }
  },
});

export const apiSlice = createApi({
  reducerPath: "REST_API",
  baseQuery: async (args, api, extraOption) => {
    const result = await basequary(args, api, extraOption);
    return result;
  },
  endpoints: () => ({}),
});
