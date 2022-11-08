import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Fonts from "./components/Fonts/index";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { LandingPage } from "./pages";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
