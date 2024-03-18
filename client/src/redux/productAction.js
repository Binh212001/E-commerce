
import { createAsyncThunk } from "@reduxjs/toolkit";
import productRest from "../api/ProductRest";



export const getProduct = createAsyncThunk("getProduct/productSlice", async (params) => {
    try {
      const res = await productRest.getProducts(params);
      return res;
    } catch (error) {
    console.log("🚀 ~ getProduct ~ error:", error)
    }
  });
  
export const getProductById=  async (id) => {
    try {
      const res = await productRest.getProductById(id);
      console.log("🚀 ~ getProductById ~ res:", res)
      return res.data;
    } catch (error) {
    console.log("🚀 ~ getProduct ~ error:", error)
    }
}