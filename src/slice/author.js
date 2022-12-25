import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
};

export const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    authorLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const { authorLoading } = authorSlice.actions;
export default authorSlice.reducer;
