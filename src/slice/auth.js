import { createSlice } from "@reduxjs/toolkit";
import {setItem} from '../helpers/persistence-storage'
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
    singUserStart: (state) => {
      state.isLoading = true;
    },
    singUserSuccess: (state, action) => {
      state.loggidIn = true;
      state.isLoading = false;
      state.user = action.payload
      setItem('Token', action.payload.token)
    },
    singUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },
    logoutUser: (state, action) => {
      state.loggidIn = false;
      state.user = null
    },

  },
});

export const { singUserStart, singUserSuccess, singUserFailure, logoutUser } =
  authSlice.actions;

export default authSlice.reducer;
