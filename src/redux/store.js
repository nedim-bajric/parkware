import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from "./Slices/parkingSlice";
import menuReducer from "./Slices/menuSlice";
export const store = configureStore({
  reducer: {
    parking: parkingReducer,
    menu: menuReducer,
  },
});
