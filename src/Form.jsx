import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { useTheme } from "./context/ThemeContext";
import { useUser } from "./context/UserContext";
function Form() {
  const {checked} = useTheme()
  const {user,setUser} = useUser()
  return (
    <form className="loginForm">
      <TextField
      onChange={(e)=>setUser({...user,email:e.target.value})}
      value={user.email}
        InputLabelProps={{ shrink: false }}
        sx={{
          display: "block",
          marginBottom: "10px",
          backgroundColor: `${checked ? "#e2e8f0" : ""}`,
        }}
        id="outlined-basic"
        size="small"
        color={checked ? "secondary" : "primary"}
        placeholder="email"
      />
      <TextField
      onChange={(e)=>setUser({...user,password:e.target.value})}
      value={user.password}
        InputLabelProps={{ shrink: false }}
        color={checked ? "secondary" : "primary"}
        sx={{ backgroundColor: `${checked ? "#e2e8f0" : ""}` }}
        className="LoginFormInput"
        id="outlined-basic"
        size="small"
        placeholder="password"
      />
    </form>
  );
}

export default Form;
