import React from "react";

import {
  OrientationType,
  AlignmentType,
  IntentColor,
  FlexGridGapType,
  HorizontalMarginType,
  VerticalMarginType,
  HorizontalPaddingType,
  VerticalPaddingType,
  TopMarginType,
  BottomMarginType,
} from "@dataxelio/react-ui.utils.prop-types";

import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";

export interface FooterImplProps {
  // Orientation
  orientation?: OrientationType;
  alignment?: AlignmentType;

  // Intent Style
  intent?: IntentColor;

  // Layout Style
  gap?: FlexGridGapType;
  horizontalMargin?: HorizontalMarginType;
  topMargin?: TopMarginType;
  bottomMargin?: BottomMarginType;
  verticalMargin?: VerticalMarginType;
  debugMode?: boolean;
  debugIntent?: IntentColor;

  // Geometry Style
  horizontalPadding?: HorizontalPaddingType;
  verticalPadding?: VerticalPaddingType;

  children: React.ReactNode;
}

export const FooterImpl = React.forwardRef<HTMLElement, FooterImplProps>(
  (
    {
      orientation,
      alignment,

      intent,

      gap,
      horizontalMargin,
      topMargin,
      bottomMargin,
      verticalMargin,
      debugMode,
      debugIntent,

      horizontalPadding,
      verticalPadding,

      children,
    }: FooterImplProps,
    ref
  ) => {
    return (
      <FlexLayout
        ref={ref}
        flexDirection={orientation === "portrait" ? "flex-col" : "flex-row"}
        flexWrap="flex-nowrap"
        flexGap={gap}
        flexMainAxisAlignment={
          orientation === "portrait"
            ? "justify-center"
            : alignment === "left"
            ? "justify-start"
            : alignment === "center"
            ? "justify-center"
            : "justify-end"
        }
        flexCrossAxisAlignment={
          orientation === "landscape"
            ? "items-center"
            : alignment === "left"
            ? "items-start"
            : alignment === "center"
            ? "items-center"
            : "items-end"
        }
        intent={intent}
        minimal={intent === undefined}
        fluid
        horizontalMargin={horizontalMargin}
        topMargin={topMargin}
        bottomMargin={bottomMargin}
        verticalMargin={!!bottomMargin || !!topMargin ? undefined : verticalMargin}
        horizontalPadding={horizontalPadding}
        verticalPadding={verticalPadding}
        debugMode={debugMode}
        debugIntent={debugIntent}
      >
        {children}
      </FlexLayout>
    );
  }
);
