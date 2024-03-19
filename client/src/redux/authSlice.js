import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAction";

const initialState = {
  user: localStorage.getItem("user") ? localStorage.getItem("user") : {},
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
      localStorage.removeItem("user");
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLogin = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogin = true;
        localStorage.setItem("user", payload);
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLogin = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
