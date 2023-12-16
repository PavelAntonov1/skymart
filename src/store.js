import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./storeSlices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
