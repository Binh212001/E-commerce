import { configureStore } from "@reduxjs/toolkit";
import product from "./productSlice";
import auth from "./AuthSlice";
import logger from "redux-logger";

const rootReducer = { product, auth };

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
