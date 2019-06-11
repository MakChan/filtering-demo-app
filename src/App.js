import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BaseProvider, LightTheme } from "baseui";

import Header from "./components/Header";
import Home from "./pages/Home";
import Room from "./pages/Room";

function App() {
  return (
    <BaseProvider theme={LightTheme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/room/:id" component={Room} exact />
        </Switch>
      </BrowserRouter>
    </BaseProvider>
  );
}

export default App;
