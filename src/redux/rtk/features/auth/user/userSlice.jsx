import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
  user: {},
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.userToken = action.payload.userToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.userToken = undefined;
      state.user = undefined;
    },
  },
});

export default userSlice.reducer;
export const { userLoggedIn, userLoggedOut } = userSlice.actions;
