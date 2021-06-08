import React from "react";

import {
  IntentColor,
  HorizontalMarginType,
  VerticalMarginType,
  HorizontalPaddingType,
  VerticalPaddingType,
  LayoutElementProps,
  TitleDomProps,
} from "@dataxelio/react-ui.utils.prop-types";

import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";

export interface HeaderImplProps {
  // Intent Style
  intent?: IntentColor;

  // Layout Style
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
      intent,

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
      <BasicLayout
        ref={ref}
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
      </BasicLayout>
    );
  }
);
