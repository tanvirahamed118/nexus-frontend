import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  event: [],
};

export const eventSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createEvent: (state, action) => {
      state.event = action.payload.event;
    },
  },
});

export default eventSlice.reducer;
export const { createEvent } = eventSlice.actions;
