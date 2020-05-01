import { useState, useEffect } from "react";
import { useLocalStorage } from "./localstorage";
export const useDarkMode = () => {
  const initialTheme = "light";
  const [localTheme, setLocalTheme] = useLocalStorage("theme", initialTheme);
  console.log("Initial theme: ", localTheme);
  const [theme, setTheme] = useState(localTheme);

  const setMode = (mode) => {
    setLocalTheme(mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    localTheme && setMode(localTheme);
  }, []);

  return [theme, themeToggler];
};
