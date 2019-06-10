import React from "react";
import { Tag } from "baseui/tag";

import { MdStar } from "react-icons/md";

function Rating({ children }) {
  return (
    <Tag
      closeable={false}
      overrides={{
        Root: {
          style: {
            marginLeft: 0,
            marginTop: 0,
            marginBottom: 0
          }
        },
        Text: {
          style: {
            display: "flex",
            alignItems: "center"
          }
        }
      }}
    >
      {children}
      <MdStar />
    </Tag>
  );
}
export default Rating;
