import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./productAction";


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
      });
  },
});

export default productSlice.reducer;