import React from "react";
import { IntentColor } from "@dataxelio/react-ui.utils.prop-types";
import { TextField } from "./text-field";

// sets the Component preview in gallery view
export const BasicTextField = () => {
  return (
    <TextField
      inputType="password"
      id="password2"
      name="password"
      label="Password"
      labelInfo="(required)"
      helperText="Enter password to connect"
      intent={IntentColor.DANGER}
      placeholder="Password"
      intentAtDefaultState={false}
      fill
    />
  );
};
