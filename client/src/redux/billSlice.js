import { createSlice } from "@reduxjs/toolkit";
import { getBillByUserId, getBills } from "./billAction";

const initialState = {
  count: 0,
  loading: false,
  bills: [],
  message: "",
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBillByUserId.pending, (state) => {
        state.loading = true;
        state.message = "PENDING";
      })
      .addCase(getBillByUserId.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.count = payload.count;
        state.bills = payload.data;
        state.message = payload?.message;
      })
      .addCase(getBillByUserId.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message;
      })
      .addCase(getBills.pending, (state) => {
        state.loading = true;
        state.message = "PENDING";
      })
      .addCase(getBills.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.count = payload.count;
        state.bills = payload.data;
        state.message = payload?.message;
      })
      .addCase(getBills.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message;
      })
      
  },
});

export default billSlice.reducer;
