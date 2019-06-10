import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "baseui/avatar";
import { Label2, H6, Paragraph2, Caption1 } from "baseui/typography";
import Card from "./Card";
import Rating from "./Rating";

function RoomCard({ room }) {
  return (
    <Card>
      <H6 margin="0">
        <Rating>{room.rating}</Rating>
        <Link to={`/room/${room.id}`}>{room.name}</Link>
      </H6>
      {/* <Caption1 margin="0">
        <TimeAgo date={room.createdAt} />
      </Caption1> */}
      <Paragraph2 margin="8px 0" style={{ whiteSpace: "pre-line" }}>
        {room.description}
      </Paragraph2>{" "}
      {/* {likeCount > 0 && (
        <Caption1>
          {likeCount} {likeCount > 1 ? "people" : "person"} liked this.
        </Caption1>
      )} */}
    </Card>
  );
}
export default RoomCard;
