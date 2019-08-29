import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import Loading from "./components/Loader";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";

const Home = Loadable({
  loader: () => import("./routes/Home"),
  loading: Loading
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App style={{ padding: 0, margin: 0 }} />, rootElement);
