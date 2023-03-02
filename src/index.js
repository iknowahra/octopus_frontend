import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./contexts/store";
import CssBaseline from "@mui/material/CssBaseline";
import "./style/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline enableColorScheme />
      <div> octopus project </div>
    </Provider>
  </React.StrictMode>
);
