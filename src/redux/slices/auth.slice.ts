import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// NOTE create slice

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    user: {
      id: "",
      email: "",
    },
    loginPage: true,
  },
  //   NOTE Define Actions
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = "";
    },
    setToLoginPage: (state) => {
      state.loginPage = true;
    },
    setToRegistrationPage: (state) => {
      state.loginPage = false;
    },
  },
});

export const authCurrentState = (state: RootState) => state.auth;
export const { login, logout, setToLoginPage, setToRegistrationPage } =
  authSlice.actions;

export default authSlice.reducer;
