import React, { useContext, useState } from "react";
import { Switch } from "@mui/material";
import { ThemeContext } from "./App";
function DarkModeToggler({ SwitchHandler }) {
  const checked = useContext(ThemeContext)
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
