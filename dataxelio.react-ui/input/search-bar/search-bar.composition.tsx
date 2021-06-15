import React from "react";
import { IntentColor } from "@dataxelio/react-ui.utils.prop-types";
import { SearchBar } from "./search-bar";

// sets the Component preview in gallery view
export const BasicSearchBar = () => {
  return (
    <SearchBar
      intent={IntentColor.BRAND}
      placeholder="Filter Subnets"
      aria-label="Filter Subnets"
      fill
    />
  );
};
