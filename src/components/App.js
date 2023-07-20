import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../mui/Theme";
import FirebaseUserListener from "./Firebase/FirebaseUserListener.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FirebaseUserListener>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </FirebaseUserListener>
    </ThemeProvider>
  );
};

export default App;
