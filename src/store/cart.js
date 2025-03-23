import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // cart: [
    //   { id: 1, productName: "Test 1", price: 300, quantity: 1 },
    //   { id: 2, productName: "Test 2", price: 100, quantity: 3 },
    //   { id: 3, productName: "Test 3", price: 400, quantity: 2 },
    // ],
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(state);
      console.log(action);
      let cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem) {
        console.log("Duplicate entry");
        cartItem.quantity += 1;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeItem: (state, action) => {
      let cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        console.log("Entering else");
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
