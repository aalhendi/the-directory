//import './App.css';
import { GlobalStyle } from "./styles.js";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import DataItem from "./components/dataItem.js"
import {Switch, Route} from "react-router-dom"

const theme = {
  light: {
    polishedpine: "rgba(108, 154, 139, 1)",
    vividtangerine: "rgba(232, 153, 141, 1)",
    mistyrose: "rgba(238, 210, 204, 1)",
    backgroundColor: "rgba(251, 247, 244, 1)",
    mainColor: "rgba(161, 104, 58, 1)",
  },
  dark: {
    mainColor: "rgba(137, 210, 220, 1)",
    slateblue: "rgba(101, 100, 219, 1)",
    persianblue: "rgba(35, 46, 209, 1)",
    oxfordblue: "rgba(16, 29, 66, 1)",
    backgroundColor: "rgba(13, 19, 23, 1)",
  },
};

function App() {
  const [currentTheme, setcurrentTheme] = useState("light");

  const toggleTheme = () => {
    setcurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Switch>
      <Route path="/">
      {/* Home Component Here */}
      </Route>
      <Route path="/Movies">
      {/* Movie List Component Here */}
      </Route>
      <Route path="/Movies/:MovieName">
      {/* Movie Detail Component Here */}
      </Route>
      <div><DataItem/></div>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
