import { createSlice } from "@reduxjs/toolkit";
const initialState = { hidden: true };
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    handleMenu: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleMenu } = menuSlice.actions;

export default menuSlice.reducer;
