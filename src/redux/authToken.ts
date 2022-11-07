import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const authTokenSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
  },
  reducers: {},
});
