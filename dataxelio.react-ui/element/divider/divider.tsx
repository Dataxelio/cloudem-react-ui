import React from "react";
import { useSeparator, SeparatorProps } from "@react-aria/separator";

import { DividerDomElementType } from "@dataxelio/react-ui.utils.prop-types";

export interface DividerProps extends SeparatorProps {
  darkMode?: boolean;
  thickness?: number;
  opacity?: number;
  fluid?: boolean;

  domElement?: DividerDomElementType;
  className?: string;
}

export const Divider = ({
  orientation = "vertical",
  darkMode = false,
  thickness = 1,
  opacity = 1.0,
  fluid,

  domElement = "div",
  elementType = domElement,

  className: dClassName = "",
  ...rest
}: DividerProps) => {
  const finalFluid = !!fluid ? fluid : orientation === "vertical" ? false : true;
  const finalLenght = finalFluid ? "100%" : "auto";
  const finalWidth = orientation === "vertical" ? thickness + "px" : finalLenght;
  const finalHeight = orientation === "vertical" ? finalLenght : thickness + "px";

  const { separatorProps } = useSeparator({ orientation, elementType, ...rest });

  return React.createElement(domElement, {
    className: dClassName,
    style: {
      width: finalWidth,
      height: finalHeight,
      backgroundColor: darkMode ? "white" : "gray",
      opacity,
      flex: "none",
    },
    ...separatorProps,
  });
};
