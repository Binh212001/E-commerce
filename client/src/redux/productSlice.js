import { createSlice } from "@reduxjs/toolkit";
import { getProduct, getProductByName } from "./productAction";

const initialState = {
  count: 0,
  loading: false,
  products: [],
  message: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.message = "PENDING";
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.count = payload.count;
        state.products = payload.data;
        state.message = payload?.message;
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message;
      })
      .addCase(getProductByName.pending, (state) => {
        state.loading = true;
        state.message = "PENDING";
      })
      .addCase(getProductByName.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.count = payload.count;
        state.products = payload.data;
        state.message = payload?.message;
      })
      .addCase(getProductByName.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message;
      });
  },
});

export default productSlice.reducer;
