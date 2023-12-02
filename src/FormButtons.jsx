import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useTheme } from "./context/ThemeContext";
function FormButtons() {
  const {checked} = useTheme()
  console.log(checked);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "195px",
      }}
    >
      <Button
        color={checked ? "secondary" : "primary"}
        className="btn"
        variant="contained"
      >
        login
      </Button>
      <Button
        color={checked ? "secondary" : "primary"}
        className="btn"
        variant="outlined"
      >
        sign up
      </Button>
    </div>
  );
}

export default FormButtons;
