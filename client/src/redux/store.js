import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import product from "./productSlice";
const rootReducer = { product };

export const store = configureStore({
  reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});