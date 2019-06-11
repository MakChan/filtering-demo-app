import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Block } from "baseui/block";
import { H5 } from "baseui/typography";

import Spinner from "../components/Spinner";
import RoomCard from "../components/RoomCard";
import FilterBlock from "../components/FilterBlock";
import Card from "../components/Card";

import { fetchRooms } from "../actions/rooms";
import { filterSelector } from "../selectors";

function Home(props) {
  useEffect(() => {
    props.dispatch(fetchRooms());
  }, []);
  if (props.isFetching) return <Spinner />;
  return (
    <Block display="flex" width="85%" margin="20px auto">
      <Block width="300px">
        <Card
          style={{
            position: "sticky",
            top: "20px"
          }}
        >
          <FilterBlock />
        </Card>
      </Block>
      <Block width="calc(100% - 300px)" padding="0 20px">
        {props.rooms.length > 0 ? (
          props.rooms.map(room => <RoomCard key={room.id} room={room} />)
        ) : (
          <H5 margin="0">No matched rooms</H5>
        )}
      </Block>
    </Block>
  );
}

function mapStateToProps(state) {
  return {
    isFetching: state.rooms.isFetching,
    rooms: filterSelector(state)
  };
}
export default connect(mapStateToProps)(Home);
