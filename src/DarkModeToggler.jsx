import React, { useContext, useState } from "react";
import { Switch } from "@mui/material";
import { useTheme } from "./context/ThemeContext";
function DarkModeToggler() {
  const {checked,setChecked} = useTheme()
  const SwitchHandler = (e) => {
    const value = e.target.checked;
    setChecked(value ? true : false);
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p style={{ transition: "ease-in-out all 0.4s" }}>
        {checked ? "Light Mode" : "Dark Mode"}
      </p>
      <Switch color="secondary" onClick={(e) => SwitchHandler(e)} />
    </div>
  );
}

export default DarkModeToggler;
