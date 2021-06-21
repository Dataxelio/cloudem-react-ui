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
} from "@dataxelio/react-ui.utils.prop-types";

import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";

export interface ContentImplProps {
  // Orientation
  orientation?: OrientationType;
  alignment?: AlignmentType;

  // Intent Style
  intent?: IntentColor;

  // Layout Style
  gap?: FlexGridGapType;
  horizontalMargin?: HorizontalMarginType;
  verticalMargin?: VerticalMarginType;
  debugMode?: boolean;
  debugIntent?: IntentColor;

  // Geometry Style
  horizontalPadding?: HorizontalPaddingType;
  verticalPadding?: VerticalPaddingType;

  children: React.ReactNode;
}

export const ContentImpl = React.forwardRef<HTMLElement, ContentImplProps>(
  (
    {
      orientation,
      alignment,

      intent,

      gap,
      horizontalMargin,
      verticalMargin,
      debugMode,
      debugIntent,

      horizontalPadding,
      verticalPadding,

      children,
    }: ContentImplProps,
    ref
  ) => {
    return (
      <FlexLayout
        ref={ref}
        intent={intent}
        minimal={intent === undefined}
        flexDirection={orientation === "portrait" ? "flex-col" : "flex-row"}
        flexWrap="flex-nowrap"
        flexGap={gap}
        flexMainAxisAlignment="justify-center"
        flexCrossAxisAlignment={
          orientation === "landscape"
            ? "items-stretch"
            : alignment === "left"
            ? "items-start"
            : alignment === "center"
            ? "items-center"
            : "items-end"
        }
        fluid
        horizontalMargin={horizontalMargin}
        verticalMargin={verticalMargin}
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
