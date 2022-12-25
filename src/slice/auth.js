import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggidIn: false,
  error: null,
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
    registerUserSuccess: (state) => {
        state.loggidIn = true
        state.isLoading = false
    },
    registerUserFailure: (state) => {
        state.isLoading = false
        state.error = "error"
    },
  },
});

export const { loginUserStart, registerUserStart, registerUserSuccess , registerUserFailure} = authSlice.actions;

export default authSlice.reducer;
