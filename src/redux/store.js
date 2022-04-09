import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from "./Slices/parkingSlice";
export const store = configureStore({
  reducer: {
    parking: parkingReducer,
  },
});
