import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 100,
  },
  reducers: {
    // NOTE An action
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    // NOTE action.payload can contain request body e.g email, pass for auth
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const counterCurrentState = (state: RootState) => state.counter;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
