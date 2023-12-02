import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { useTheme } from "./context/ThemeContext";
function Form() {
  const {checked} = useTheme()
  return (
    <form className="loginForm">
      <TextField
        InputLabelProps={{ shrink: false }}
        sx={{
          display: "block",
          marginBottom: "10px",
          backgroundColor: `${checked ? "#e2e8f0" : ""}`,
        }}
        id="outlined-basic"
        size="small"
        label="email"
        color={checked ? "secondary" : "primary"}
      />
      <TextField
        InputLabelProps={{ shrink: false }}
        color={checked ? "secondary" : "primary"}
        sx={{ backgroundColor: `${checked ? "#e2e8f0" : ""}` }}
        className="LoginFormInput"
        id="outlined-basic"
        size="small"
        label="password"
      />
    </form>
  );
}

export default Form;
