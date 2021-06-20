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
  LayoutElementProps,
  TitleDomProps,
} from "@dataxelio/react-ui.utils.prop-types";

import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";

export interface HeaderImplProps {
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

  titleDomProps?: React.HTMLAttributes<HTMLElement>;

  children: React.ReactNode;
}

export const HeaderImpl = React.forwardRef<HTMLElement, HeaderImplProps>(
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

      titleDomProps,

      children,
    }: HeaderImplProps,
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
        verticalMargin={verticalMargin}
        horizontalPadding={horizontalPadding}
        verticalPadding={verticalPadding}
        debugMode={debugMode}
        debugIntent={debugIntent}
      >
        {React.Children.map(children, child =>
          React.isValidElement<LayoutElementProps & TitleDomProps>(child) &&
          child.props.__LAYOUT_ELEMENT === "title"
            ? React.cloneElement(child, { titleDomProps })
            : child
        )}
      </FlexLayout>
    );
  }
);
