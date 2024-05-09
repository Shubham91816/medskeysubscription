import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slice/CartReducer";

export default configureStore({
  reducer: {
    cart: CartReducer,
  },
});
