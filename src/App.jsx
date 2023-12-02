import React from "react";
import "./App.css";
import Form from "./Form";
import FormButtons from "./FormButtons";
import { Switch } from "@mui/material";
import DarkModeToggler from "./DarkModeToggler";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <FormWrapper/>
        <DarkModeToggler />
      </div>
    </ThemeProvider>
  );
}function FormWrapper(){
  const {checked} = useTheme()
  return(
    <div className={`wrapper "" ${checked ? "dark" : "light"}`}>
    <h2 className="header-text">WELCOME</h2>
    <Form />
    <FormButtons />
  </div>
  )
}
export default App;
