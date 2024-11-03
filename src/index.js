import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}> 
<BrowserRouter>
<App />
  </BrowserRouter>
  </Provider>

);

//el provider es para que conetemos redux con react , la cual va a permitir que el store se conecte con los componentes sin hacerlo manualmente