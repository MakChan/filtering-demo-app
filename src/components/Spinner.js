import React from "react";
import { Spinner } from "baseui/spinner";

export default Loader => (
  <Spinner
    overrides={{
      Svg: {
        style: {
          margin: "0 auto",
          display: "block",
          top: "20px",
          position: "relative"
        }
      }
    }}
  />
);
