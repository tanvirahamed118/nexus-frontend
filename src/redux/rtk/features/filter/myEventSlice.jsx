import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  period: "",
};

const categorySlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    chosePeriod: (state, action) => {
      state.period = action.payload;
    },
  },
});

export const { chosePeriod } = categorySlice.actions;
export default categorySlice.reducer;
