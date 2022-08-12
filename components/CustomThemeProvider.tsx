import { ThemeProvider } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";
import { createContext, ReactNode, useEffect, useState } from "react";

type CustomThemeContextType = {
  darkMode: "light" | "dark";
  toggleMode: () => void;
};

export const CustomThemeContext = createContext<CustomThemeContextType>({
  darkMode: "light",
  toggleMode: () => {},
});

function CustomThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState<"light" | "dark">("light");

  const theme: Theme = createTheme({
    palette: {
      mode: darkMode,
      primary: {
        main: darkMode === "light" ? "#D61C4E" : "#FEB139",
      },
    },
  });

  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      setDarkMode(localStorage.getItem("darkMode") as any);
    }
  }, []);

  const toggleMode = () => {
    const uptValue = darkMode === "light" ? "dark" : "light";
    setDarkMode(uptValue);
    localStorage.setItem("darkMode", uptValue);
  };

  return (
    <CustomThemeContext.Provider value={{ darkMode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export default CustomThemeProvider;
