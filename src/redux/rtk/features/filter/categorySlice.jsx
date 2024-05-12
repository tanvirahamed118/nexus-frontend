import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  category: "",
};

const categorySlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    choseCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { choseCategory } = categorySlice.actions;
export default categorySlice.reducer;
