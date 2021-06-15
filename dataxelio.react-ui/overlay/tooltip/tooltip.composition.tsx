import React from "react";
import { Button } from "@dataxelio/react-ui.input.button";
import { Tooltip } from "./tooltip";

// sets the Component preview in gallery view
export const BasicTooltip = () => {
  return (
    <Tooltip delay={0} withArrow content="This is tooltip" placement="right">
      <Button
        text="Hover and click me"
        fontSize="text-sm"
        fontWeight="font-bold"
        horizontalPadding="px-6"
        verticalPadding="py-1.5"
        outlined
        rightIcon="caret-down"
      />
    </Tooltip>
  );
};
