import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Slice/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
