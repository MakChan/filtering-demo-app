import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Block } from "baseui/block";
import { Card, StyledBody } from "baseui/card";

import Spinner from "../components/Spinner";
import RoomCard from "../components/RoomCard";

import { fetchRooms } from "../actions/rooms";

function Home(props) {
  useEffect(() => {
    props.dispatch(fetchRooms());
  }, []);
  if (props.isFetching) return <Spinner />;
  return (
    <Block display="flex" width="85%" margin="20px auto">
      <Block width="200px">
        <Card>
          <StyledBody>
            Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
            faucibus ex, non facilisis nisl.
          </StyledBody>
        </Card>
      </Block>
      <Block width="calc(100% - 200px)" padding="0 20px">
        {props.rooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </Block>
    </Block>
  );
}

function mapStateToProps(state) {
  console.log(state)
  return {
    isFetching: state.rooms.isFetching,
    rooms: state.rooms.rooms
  };
}
export default connect(mapStateToProps)(Home);
