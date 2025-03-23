import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import hideSlice from "./hide";
import shopSlice from "./store";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    hide: hideSlice.reducer,
    shop: shopSlice.reducer,
  },
});

export default store;
