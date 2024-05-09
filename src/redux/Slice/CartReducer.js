import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;
