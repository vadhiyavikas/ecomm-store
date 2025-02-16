import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    electronicsItems: [],
    jeweleryItems: [],
    mensClothsItems: [],
    womensClothsItems: [],
  },
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },

    setElectronicsItems(state, action) {
      state.electronicsItems = action.payload;
    },

    setJeweleryItems(state, action) {
      state.jeweleryItems = action.payload;
    },

    setMensClothsItems(state, action) {
      state.mensClothsItems = action.payload;
    },

    setWomensClothsItems(state, action) {
      state.womensClothsItems = action.payload;
    },
  },
});

export const { setProducts, setElectronicsItems, setJeweleryItems, setMensClothsItems, setWomensClothsItems } = productsSlice.actions;
export default productsSlice.reducer;
