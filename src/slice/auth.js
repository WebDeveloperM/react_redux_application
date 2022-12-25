import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggidIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {},
    loginUserFailure: (state) => {},
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {},
    registerUserFailure: (state) => {},
  },
});

export const { loginUserStart, registerUserStart } = authSlice.actions;

export default authSlice.reducer;
