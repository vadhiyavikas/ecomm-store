import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Slice/usersSlice";
import productsReducer from "./Slice/productsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});
