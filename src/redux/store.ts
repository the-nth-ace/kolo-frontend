import { configureStore } from "@reduxjs/toolkit";
import { sortUserPlugins } from "vite";
import counterReducer from "./counter";
import { koloApi } from "./koloApi";
// import { authReducer } from "./slices/auth.slice";

// NOTE Add new reducer
export const store: any = configureStore({
  reducer: {
    counter: counterReducer,
    // user: authReducer,
    [koloApi.reducerPath]: koloApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(koloApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
