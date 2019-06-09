import React, { useEffect } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import { fetchRooms } from "./actions/rooms";

function App(props) {
  useEffect(() => {
    props.dispatch(fetchRooms());
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    rooms: state.rooms.rooms
  };
}

export default connect(mapStateToProps)(App);
