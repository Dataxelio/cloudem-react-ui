import React from "react";

import {
  IntentColor,
  IntentState,
  FontSizeType,
  FontSmoothingType,
  FontStyleType,
  FontWeightType,
  TextOverflowType,
  WordBreakType,
  LayoutElementProps,
} from "@dataxelio/react-ui.utils.prop-types";
import { intentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";

const defaultProps: LayoutElementProps = { __LAYOUT_ELEMENT: "title" };
export type DefaultLayoutElementProps = typeof defaultProps;

export interface TitleProps extends DefaultLayoutElementProps {
  intent?: IntentColor;
  fontSize?: FontSizeType;
  fontSmoothing?: FontSmoothingType;
  fontStyle?: FontStyleType;
  fontWeight?: FontWeightType;
  textOverflow?: TextOverflowType;
  wordBreak?: WordBreakType;
  className?: string;
  children: string;
  injectedDomProps?: React.HTMLAttributes<HTMLElement>;
}

export const Title = ({
  intent,
  fontSize = "text-lg",
  fontSmoothing,
  fontStyle,
  fontWeight = "font-semibold",
  textOverflow = "truncate",
  wordBreak = "break-normal",
  className: hClassName = "",
  children,
  injectedDomProps,
}: TitleProps) => {
  const intentClassName = intentStyleBuilder(IntentState.DEFAULT, {
    intentColor: intent,
    forceSharpForeground: intent === undefined,
    minimal: true,
  });

  const typographyClassName = typographyStyleBuilder({
    fontSize,
    fontSmoothing,
    fontStyle,
    fontWeight,
    textOverflow,
    wordBreak,
  });

  return (
    <h1 className={`${hClassName} ${intentClassName} ${typographyClassName}`} {...injectedDomProps}>
      {children}
    </h1>
  );
};

Title.defaultProps = defaultProps;
