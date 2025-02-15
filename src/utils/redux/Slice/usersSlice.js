import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    loggedInUser(state = initialState, action) {
      state = { ...state, profile: action.payload };
      return state;
    },
  },
});

export const { loggedInUser } = usersSlice.actions;
export default usersSlice.reducer;
