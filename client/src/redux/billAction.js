import { createAsyncThunk } from "@reduxjs/toolkit";
import billRest from "../api/BillRest";

export const getBillByUserId = createAsyncThunk("getBill/billSlice", async (params) => {
  try {
    const res = await billRest.getBillByUserId(params);
    return res;
  } catch (error) {
    console.log("🚀 ~ getProduct ~ error:", error);
  }
});
