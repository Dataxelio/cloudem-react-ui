import React from "react";

import {
  IntentColor,
  HorizontalMarginType,
  VerticalMarginType,
  HorizontalPaddingType,
  VerticalPaddingType,
} from "@dataxelio/react-ui.utils.prop-types";

import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";

export interface ContentTextImplProps {
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

  children: React.ReactNode;
}

export const ContentTextImpl = React.forwardRef<HTMLElement, ContentTextImplProps>(
  (
    {
      intent,

      horizontalMargin,
      verticalMargin,
      debugMode,
      debugIntent,

      horizontalPadding,
      verticalPadding,

      children,
    }: ContentTextImplProps,
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
        {children}
      </BasicLayout>
    );
  }
);
