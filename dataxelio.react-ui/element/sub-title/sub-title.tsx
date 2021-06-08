import React from "react";

import {
  TitleLevel,
  IntentColor,
  IntentState,
  FontSizeType,
  FontSmoothingType,
  FontStyleType,
  FontWeightType,
  TextOverflowType,
  WordBreakType,
} from "@dataxelio/react-ui.utils.prop-types";
import { intentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";

export interface SubTitleProps {
  level?: TitleLevel;
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

export const SubTitle = ({
  level = "h2",
  intent,
  fontSize = "text-base",
  fontSmoothing,
  fontStyle,
  fontWeight = "font-semibold",
  textOverflow = "truncate",
  wordBreak = "break-normal",
  className: hClassName = "",
  children,
  injectedDomProps,
}: SubTitleProps) => {
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

  return React.createElement(
    level,
    {
      className: `${hClassName} ${intentClassName} ${typographyClassName}`,
      ...injectedDomProps,
    },
    children
  );
};
