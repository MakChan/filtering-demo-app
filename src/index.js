import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import { Provider as StyletronProvider } from "styletron-react";
import { Client as StyletronClient } from "styletron-engine-atomic";

import configureStore from "./store";

const engine = new StyletronClient();
const store = configureStore();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <Provider store={store}>
      <App />
    </Provider>
  </StyletronProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
