import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  // this is the name of the slice we will use to access the state
  name: "auth",
  initialState,
  // here we will write any function that we will use globally to set or fetch the values
  reducers: {
    checkIsUserLoggedIn: (state) => {
      // once user is logged in, we will store their email and token under the name "user"
      if (localStorage.getItem("user")) {
        // update variable to true if user is logged in
        state.isLoggedIn = true;
      }
    },
    login: (state, action) => {
      // action argument helps us to pass data in our action functions
      localStorage.setItem("user", action.payload);
      state.isLoggedIn = true;
    },
    logout: (state) => {
      localStorage.clear();
      state.isLoggedIn = false;
    },
  },
});

// named exports to be used in components
export const { checkIsUserLoggedIn, login, logout } = authSlice.actions;

// default export will be used to import the reducer in the store
export default authSlice.reducer;
