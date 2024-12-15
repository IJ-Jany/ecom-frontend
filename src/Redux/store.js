import { configureStore } from "@reduxjs/toolkit";
import {furniroeCom} from "./apiSlice"

export const store = configureStore({
  reducer: {
    // Add the RTK Query API slice
    [furniroeCom.reducerPath]: furniroeCom.reducer,


  },
  // Adding middleware for caching, invalidation, and RTK Query features
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(furniroeCom.middleware)
});
