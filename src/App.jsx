import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import FormButtons from "./FormButtons";
import { Switch } from "@mui/material";
import DarkModeToggler from "./DarkModeToggler";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <div className="container">
          <FormWrapper />
          <DarkModeToggler />
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}
function FormWrapper() {
  const { checked } = useTheme();
  return (
    <div className={`wrapper "" ${checked ? "dark" : "light"}`}>
      <h2 className="header-text">WELCOME</h2>
      <Form />
      <FormButtons />
    </div>
  );
}
export default App;
