import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import { BaseProvider, LightTheme } from "baseui";

import Header from "./components/Header";
import Home from "./pages/Home";
import Room from "./pages/Room";

import { fetchRooms } from "./actions/rooms";

function App(props) {
  useEffect(() => {
    props.dispatch(fetchRooms());
  });

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
function mapStateToProps(state) {
  return {
    rooms: state.rooms.rooms
  };
}

export default connect(mapStateToProps)(App);
