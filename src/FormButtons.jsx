import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useTheme } from "./context/ThemeContext";
import { useUser } from "./context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function FormButtons() {
  const { checked } = useTheme();
  const { user, setUser } = useUser();
  let theme = checked ? "dark" : "light";
  const LoginHandler = () => {
    if (user.email != "" && user.password != "") {
      toast("Logged In successfully", { theme });
      setUser({ email: "", password: "" });
    } else {
      toast.error("Fill in all fields!", { theme });
    }
  };
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
        onClick={() => LoginHandler()}
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
      <ToastContainer />
    </div>
  );
}

export default FormButtons;
