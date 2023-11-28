import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import App from "./App.tsx";
import store from "./Redux/store.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <WavyContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
