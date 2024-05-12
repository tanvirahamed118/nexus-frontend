import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import adminSlice from "../features/auth/admin/adminSlice";
import userSlice from "../features/auth/user/userSlice";
import eventSlice from "../features/event/eventSlice";
import categorySlice from "../features/filter/categorySlice";
import myEventSlice from "../features/filter/myEventSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    admin: adminSlice,
    user: userSlice,
    event: eventSlice,
    category: categorySlice,
    period: myEventSlice,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(apiSlice.middleware),
});

export default store;
