import React, { FC } from "react";
import { LandingPage } from "./pages/";
import "./App.css";
import Fonts from "./components/Fonts";

const App: FC = () => (
  <div className="App">
    <Fonts />
    <LandingPage />
  </div>
);

export default App;
