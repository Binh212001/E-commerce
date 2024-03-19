import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import product from "./productSlice";
import user from "./authSlice";

const rootReducer = { product, user };

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
