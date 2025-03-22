import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [
      { id: 1, productName: "Test 1", price: 300, quantity: 1 },
      { id: 2, productName: "Test 2", price: 100, quantity: 3 },
      { id: 3, productName: "Test 3", price: 400, quantity: 2 },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      let cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.quantity += 1;
      }
    },
    removeItem: (state, action) => {
      let cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        console.log("Entering else");
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
  },
});

const hideSlice = createSlice({
  name: "hide",
  initialState: { hide: false },
  reducers: {
    hide: (state) => {
      state.hide = !state.hide;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, hide: hideSlice.reducer },
});

export const cartActions = cartSlice.actions;
export const hideActions = hideSlice.actions;

export default store;
