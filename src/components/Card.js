import React from "react";
import { Card } from "baseui/card";

const StyledCard = ({ children, style }) => (
  <Card
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
      }
    }}
  >
    {children}
  </Card>
);

export default StyledCard;
