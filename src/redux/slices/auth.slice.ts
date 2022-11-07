// import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";
// import axios from 'axios'

// const name = "auth";
// const initialState = createInitialState();
// const reducers = createReducers();
// const extraActions = createExtraActions();
// const extraReducers = createExtraReducers();
// const slice = createSlice({ name, initialState, reducers, extraReducers });

// export const authActions = { ...slice.actions, ...extraActions };
// export const authReducer = slice.reducer;

// export interface signUpDTO {
//   first_name: string
//   last_name: string
//   email: string
//   password: string
//   confirm_password: string
// }

// function createInitialState() {
//   return {
//     // initialize state from local storage to enable user to stay logged in
//     user: JSON.parse(localStorage.getItem("user") || ""),
//     error: null,
//   };
// }

// function createReducers() {
//   return {
//     logout,
//   };

//   function logout(state: RootState) {
//     state.user = null;
//     localStorage.removeItem("user");
//     // history.navigate("/login");
//   }
// }

// function createExtraActions() {
//   // TODO replace with VITE's meta construct
//   const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

//   return {
//     login: login(),
//     signUp: signUp()
//   };

//   function login() {
//     return createAsyncThunk(
//       `${name}/login`,
//       async ({ username, password }: ) =>
//         await fetchWrapper.post(`${baseUrl}/authenticate`, {
//           username,
//           password,
//         })
//     );
//   };

//   function signUp(){
//     return createAsyncThunk(
//       `auth/signUp`, async (dto: signUpDTO){
//         await axios.post(`${baseUrl}/auth/signup`,
//         dto)
//       }

//     )
//   }
// }

// function createExtraReducers() {
//   return {
//     ...login(),
//   };

//   function login() {
//     var { pending, fulfilled, rejected } = extraActions.login;
//     return {
//       [pending]: (state: RootState) => {
//         state.error = null;
//       },
//       [fulfilled]: (state: RootState, action: AnyAction) => {
//         const user = action.payload;

//         // store user details and jwt token in local storage to keep user logged in between page refreshes
//         localStorage.setItem("user", JSON.stringify(user));
//         state.user = user;

//         // get return url from location state or default to home page
//         // const { from } = history.location.state || { from: { pathname: "/" } };
//         // history.navigate(from);
//       },
//       [rejected]: (state: RootState, action: AnyAction) => {
//         state.error = action.error;
//       },
//     };
//   }
// }
