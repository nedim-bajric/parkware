import { createSlice } from "@reduxjs/toolkit";
const initialState = { ime: "", prezime: "" };
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.ime;
      state.prezime = action.payload.prezime;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
