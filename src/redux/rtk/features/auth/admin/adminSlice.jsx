import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminToken: "",
  admin: {},
};

export const adminSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    adminLoggedIn: (state, action) => {
      state.adminToken = action.payload.adminToken;
      state.admin = action.payload.admin;
    },
    adminLoggedOut: (state) => {
      state.adminToken = undefined;
      state.admin = undefined;
    },
  },
});

export default adminSlice.reducer;
export const { adminLoggedIn, adminLoggedOut } = adminSlice.actions;
