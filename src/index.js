import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "../src/redux/store/store";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { theme } from "./theme";
import axios from "axios";
axios.defaults.baseURL = "https://hydroponic-farm.herokuapp.com/";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
