import { createAsyncThunk } from "@reduxjs/toolkit";
import productRest from "../api/ProductRest";

export const getProduct = createAsyncThunk("getProduct/productSlice", async (params) => {
  try {
    const res = await productRest.getProducts(params);
    return res;
  } catch (error) {
    console.log("🚀 ~ getProduct ~ error:", error);
  }
});

export const getProductById = async (id) => {
  try {
    const res = await productRest.getProductById(id);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getProduct ~ error:", error);
  }
};

export const getProductByName = createAsyncThunk("getProductByName/productSlice", async (params) => {
  try {
    const res = await productRest.getProductByName(params);
    return res;
  } catch (error) {
    console.log("🚀 ~ getProduct ~ error:", error);
  }
});

export const getProductByUserId = createAsyncThunk("getProductByUserId/productSlice", async (params) => {
  console.log("🚀 ~ getProductByUserId ~ params:", params);
  try {
    const res = await productRest.getProductByUserId(params);
    return res;
  } catch (error) {
    console.log("🚀 ~ getProduct ~ error:", error);
  }
});
