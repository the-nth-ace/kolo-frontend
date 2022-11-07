import { configureStore } from "@reduxjs/toolkit";
import { sortUserPlugins } from "vite";
import counterReducer from "./counter";
import { koloApi } from "./koloApi";
import authReducer from "./slices/auth.slice";

// NOTE Add new reducers here
export const store: any = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [koloApi.reducerPath]: koloApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(koloApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
