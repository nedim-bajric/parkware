import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const parkingSlice = createSlice({
  name: "parking",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.parking = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = parkingSlice.actions;

export default parkingSlice.reducer;
