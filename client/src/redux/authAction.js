import { createAsyncThunk } from "@reduxjs/toolkit";
import authRest from "../api/AuthRest";

export const login = createAsyncThunk("login/authSlice", async (params) => {
  try {
    const res = await authRest.login(params);
    if (res) {
      localStorage.setItem("user", res);
    }
    return res;
  } catch (error) {
    console.log("🚀 ~ getProduct ~ error:", error);
  }
});

// export const logout = createAsyncThunk("login/authSlice", async (params) => {
//   try {
//     const res = await authRest.login(params);
//     if (res) {
//       localStorage.setItem("user", res);
//     }
//     return res;
//   } catch (error) {
//     console.log("🚀 ~ getProduct ~ error:", error);
//   }
// });
