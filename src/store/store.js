import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shop: [
      { id: 1, name: "Test 1", price: 300 },
      { id: 2, name: "Test 2", price: 100 },
      { id: 3, name: "Test 3", price: 400 },
    ],
  },
  reducers: {
    addToCart: (state, action) => {
      state.shop = [...state.shop, action.payload];
    },
  },
});

export const shopActions = shopSlice.actions;
export default shopSlice;
