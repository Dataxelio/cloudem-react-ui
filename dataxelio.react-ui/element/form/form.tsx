import React from "react";

import {
  IntentColor,
  AlignmentType,
  FlexGridGapType,
  LeftMarginType,
  RightMarginType,
  HorizontalMarginType,
  TopMarginType,
  BottomMarginType,
  VerticalMarginType,
  WidthType,
  MaxWidthType,
  MinWidthType,
  HeightType,
  MaxHeightType,
  MinHeightType,
} from "@dataxelio/react-ui.utils.prop-types";
import { debugIntentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  alignment?: AlignmentType;

  // Layout Style
  gap?: FlexGridGapType;
  leftMargin?: LeftMarginType;
  rightMargin?: RightMarginType;
  horizontalMargin?: HorizontalMarginType;
  topMargin?: TopMarginType;
  bottomMargin?: BottomMarginType;
  verticalMargin?: VerticalMarginType;

  // Geometry Style
  fluid?: boolean;
  width?: WidthType;
  maxWidth?: MaxWidthType;
  minWidth?: MinWidthType;
  height?: HeightType;
  maxHeight?: MaxHeightType;
  minHeight?: MinHeightType;

  // Debug
  debugMode?: boolean;
  debugIntent?: IntentColor;
}

export const Form = ({
  alignment,

  gap,
  leftMargin,
  rightMargin,
  horizontalMargin,
  topMargin,
  bottomMargin,
  verticalMargin,

  fluid,
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,

  debugMode,
  debugIntent,

  className,
  children,
  ...rest
}: FormProps) => {
  const finalAlignment = alignment ?? "left";
  const finalGap = gap ?? "gap-5";
  const finalFluid = fluid ?? true;
  const finalHorizontalMargin = horizontalMargin ?? "mx-0";
  const finalVerticalMargin = verticalMargin ?? "my-0";

  const layoutClassName = layoutStyleBuilder({
    layout: "flex",
    flexDirection: "flex-col",
    flexWrap: "flex-nowrap",
    flexGridGap: finalGap,
    flexGridMainAxisAlignment: "justify-center",
    flexGridCrossAxisAlignment: finalAlignment === "left" ? "items-start" : "items-end",
    leftMargin,
    rightMargin,
    horizontalMargin: finalHorizontalMargin,
    topMargin,
    bottomMargin,
    verticalMargin: finalVerticalMargin,
    customClassName: className,
  });

  const geometryClassName = geometryStyleBuilder({
    fill: finalFluid,
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    forceOutline: debugMode,
  });

  const debugIntentClassName = debugIntentStyleBuilder(
    debugMode ?? false,
    debugIntent ?? IntentColor.WARNING
  );

  return (
    <form className={`${layoutClassName} ${geometryClassName} ${debugIntentClassName}`} {...rest}>
      {children}
    </form>
  );
};
