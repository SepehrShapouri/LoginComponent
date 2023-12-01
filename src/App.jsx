import React from "react";
import "./App.css";
import Form from "./Form";
import FormButtons from "./FormButtons";
import { Switch } from "@mui/material";
import DarkModeToggler from "./DarkModeToggler";
import { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext();
function App() {
  const [checked, setChecked] = useState(false);
  const SwitchHandler = (e) => {
    const value = e.target.checked;
    setChecked(value ? true : false);
    console.log(checked);
  };
  return (
    <ThemeContext.Provider value={checked}>
      <div className="container">
        <div className={`wrapper "" ${checked ? "dark" : "light"}`}>
          <h2 className="header-text">WELCOME</h2>
          <Form />
          <FormButtons />
        </div>
        <DarkModeToggler SwitchHandler={SwitchHandler} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
