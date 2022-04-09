import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from "./Slices/parkingSlice";
import menuReducer from "./Slices/menuSlice";
import reservationReducer from "./Slices/reservationSlice";
import userReducer from "./Slices/userSlice";
export const store = configureStore({
  reducer: {
    parking: parkingReducer,
    menu: menuReducer,
    reservation: reservationReducer,
    user: userReducer,
  },
});
