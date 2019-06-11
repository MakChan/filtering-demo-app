import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "baseui/avatar";
import { StyledBody } from "baseui/card";
import { Label2, H6, Paragraph2, Label1, Caption2 } from "baseui/typography";
import Card from "./Card";
import Rating from "./Rating";

function RoomCard({ room }) {
  return (
    <Link to={`/room/${room.id}`}>
      <Card
        style={{ maxWidth: "500px" }}
        title={
          <>
            {room.name} {" "}
            <Label1 display="inline" color="mono800">
               {room.city}
            </Label1>
          </>
        }
      >
        <H6 marginTop="0" marginBottom="15px">
          ₹ {room.rate} per month
        </H6>
        <Label1>
          <Rating>{room.rating}</Rating>
          {room.occupancy} - {room.area} sq ft
        </Label1>
        <Caption2> {room.address}</Caption2>

        <Paragraph2 margin="8px 0" style={{ whiteSpace: "pre-line" }}>
          {room.description}
        </Paragraph2>
      </Card>
    </Link>
  );
}
export default RoomCard;
