import { configureStore } from "@reduxjs/toolkit";
import product from "./productSlice";
import logger from "redux-logger";

const rootReducer = { product };

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
