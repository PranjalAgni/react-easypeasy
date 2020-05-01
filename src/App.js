import React from "react";
import { Switch } from "antd";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/components/globalStyles";
import { useDarkMode } from "./hooks/darkmode";
import { lightTheme, darkTheme } from "../src/components/Themes";
import AppRouter from "./router/AppRouter";
import "./App.css";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  console.log("Initial theme: ", theme);
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <div className="toggler">
            <Switch
              unCheckedChildren="light"
              checkedChildren="dark"
              defaultChecked={theme === "dark"}
              onChange={themeToggler}
            />
          </div>
          <div className="App-header">
            <AppRouter />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
