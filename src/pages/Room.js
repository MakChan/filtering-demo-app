import React, { useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../components/Spinner";

import { fetchRoom } from "../actions/rooms";

function Room(props) {
  useEffect(() => {
    props.dispatch(fetchRoom(props.match.params.id));
  }, []);

  if (!props.room) return <Spinner />;
  return <h3>{props.room.id}</h3>;
}

function mapStateToProps(state, props) {
  console.log(props);
  const room = state.rooms.roomsById[props.match.params.id];

  return { room };
}

export default connect(mapStateToProps)(Room);
