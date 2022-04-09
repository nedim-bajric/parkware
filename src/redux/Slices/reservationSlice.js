import { createSlice } from "@reduxjs/toolkit";
const initialState = { reserved: false, data: {} };
export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    handleRes: (state) => {
      state.reserved = !state.reserved;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleRes, setData } = reservationSlice.actions;

export default reservationSlice.reducer;
