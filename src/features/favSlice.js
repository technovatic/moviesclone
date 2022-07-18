import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fav: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    favAdd: (state, action) => {
      state.fav = action.payload;
    },
  },
});

export const { favAdd } = favSlice.actions;

export default favSlice.reducer;
