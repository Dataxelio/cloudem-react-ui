import React from "react";
import { IntentColor } from "@dataxelio/react-ui.utils.prop-types";
import { TextArea } from "./text-area";

// sets the Component preview in gallery view
export const BasicTextArea = () => {
  return (
    <TextArea
      id="message"
      name="message"
      label="Message"
      labelInfo="(optional)"
      intent={IntentColor.BRAND}
      placeholder="Enter your message here"
      helperText="Enter your message"
      intentAtDefaultState={false}
      fill
    />
  );
};
