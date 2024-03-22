import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { theme } from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AlertContextProvider from "./contexts/AlertContextProvider";
import UserContextProvider from "./contexts/userContextProvider";
import TasksContextProvider from "./contexts/TasksContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <TasksContextProvider>
          <AlertContextProvider>
            <App />
          </AlertContextProvider>
        </TasksContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
