import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts(state = initialState, action) {
      state = { ...state, items: action.payload };
      return state;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
