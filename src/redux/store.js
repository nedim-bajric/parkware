import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from "./Slices/parkingSlice";
import menuReducer from "./Slices/menuSlice";
import reservationReducer from "./Slices/reservationSlice";
export const store = configureStore({
  reducer: {
    parking: parkingReducer,
    menu: menuReducer,
    reservation: reservationReducer,
  },
});
