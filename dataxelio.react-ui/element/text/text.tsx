import React from "react";

import {
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
  LineHeightType,
  IntentColor,
} from "@dataxelio/react-ui.utils.prop-types";
import { stateIntentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  inheritStyle?: boolean;
  invisible?: boolean;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  letterSpacing?: LetterSpacingType;
  fontHeight?: LineHeightType;
  useDarkTheme?: boolean;
  intentColor?: IntentColor;
  tText: string;
}

export const Text = ({
  inheritStyle,
  invisible,
  fontSize,
  fontWeight,
  letterSpacing,
  fontHeight,
  useDarkTheme,
  intentColor,
  tText,
  className: tClassName,
}: TextProps) => {
  return (
    <span
      className={`${tClassName || ""} ${
        inheritStyle
          ? ""
          : typographyStyleBuilder({ fontSize, fontWeight, letterSpacing, fontHeight })
      } ${
        inheritStyle
          ? "text-current"
          : stateIntentStyleBuilder({
              useDarkTheme: useDarkTheme,
              useDefaultState: true,
              minimal: true,
              withForeground: true,
              intentColor: intentColor,
            })
      } ${invisible ? "invisible" : "visible"}`}
    >
      {tText}
    </span>
  );
};
