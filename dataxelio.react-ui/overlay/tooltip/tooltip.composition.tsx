import React from "react";
import { Tooltip } from "./tooltip";

// sets the Component preview in gallery view
export const BasicTooltip = () => {
  return (
    <Tooltip
      content="hello from Tooltip"
      triggerElement={<button>Hello from button</button>}
    ></Tooltip>
  );
};
