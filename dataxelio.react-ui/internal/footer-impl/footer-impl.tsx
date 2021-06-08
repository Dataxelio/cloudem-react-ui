import React from "react";

import {
  AlignmentType,
  IntentColor,
  FlexGridGapType,
  HorizontalMarginType,
  VerticalMarginType,
  HorizontalPaddingType,
  VerticalPaddingType,
} from "@dataxelio/react-ui.utils.prop-types";

import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";

export interface FooterImplProps {
  // Orientation
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

export const FooterImpl = React.forwardRef<HTMLElement, FooterImplProps>(
  (
    {
      alignment = "left",
      intent,

      gap = "gap-5",
      horizontalMargin,
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
        flexDirection="flex-row"
        flexWrap="flex-nowrap"
        flexGap={gap}
        flexMainAxisAlignment={
          alignment === "left"
            ? "justify-start"
            : alignment === "center"
            ? "justify-center"
            : "justify-end"
        }
        flexCrossAxisAlignment="items-center"
        intent={intent}
        minimal={intent === undefined}
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
