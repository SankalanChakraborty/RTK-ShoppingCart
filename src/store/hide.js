import { createSlice } from "@reduxjs/toolkit";

const hideSlice = createSlice({
  name: "hide",
  initialState: { hide: false },
  reducers: {
    hide: (state) => {
      state.hide = !state.hide;
    },
  },
});

export const hideActions = hideSlice.actions;
export default hideSlice;
