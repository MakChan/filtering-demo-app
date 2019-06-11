import React from "react";
import { Card } from "baseui/card";

const StyledCard = ({ children, style, ...rest }) => (
  <Card
    {...rest}
    overrides={{
      Root: {
        style: ({ $theme }) => ({
          borderColor: "transparent",
          marginBottom: $theme.sizing.scale900,
          borderTopRightRadius: $theme.borders.radius200,
          borderTopLeftRadius: $theme.borders.radius200,
          borderBottomRightRadius: $theme.borders.radius200,
          borderBottomLeftRadius: $theme.borders.radius200,
          boxShadow: "0 0 40px rgba(0,0,0,.08)",
          ...style
        })
      },
      Contents: {
        style: () => ({
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "20px",
          marginRight: "20px"
        })
      }
    }}
  >
    {children}
  </Card>
);

export default StyledCard;
