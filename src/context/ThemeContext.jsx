import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);
  return (
    <ThemeContext.Provider value={{ checked, setChecked }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("Consumed Context was used outside of Provider");
  }
  return context;
}
