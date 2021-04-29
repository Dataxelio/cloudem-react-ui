import React, { useState } from "react";

import {
  BorderRadiusType,
  BorderWidthType,
  HoverBorderWidthType,
  FocusBorderWidthType,
  BoxShadowType,
  LineHeightType,
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
  IntentColor,
  LeftPaddingType,
  RightPaddingType,
  RingWidthType,
  HoverRingWidthType,
  FocusRingWidthType,
  VerticalPaddingType,
  WidthType,
  HeightType,
  IconTransform,
} from "@dataxelio/react-ui.utils.prop-types";

import { stateIntentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";

import { Icon } from "@dataxelio/react-ui.element.icon";

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Intent Style
  fill?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  ringed?: boolean;
  ringedFade?: boolean;
  intent?: IntentColor;
  intentAtDefaultState?: boolean;

  // Geometry Style
  width?: WidthType;
  height?: HeightType;
  borderWidth?: BorderWidthType;
  hoverBorderWidth?: HoverBorderWidthType;
  focusBorderWidth?: FocusBorderWidthType;
  borderRadius?: BorderRadiusType;
  ringWidth?: RingWidthType;
  hoverRingWidth?: HoverRingWidthType;
  focusRingWidth?: FocusRingWidthType;
  leftPadding?: LeftPaddingType;
  rightPadding?: RightPaddingType;
  verticalPadding?: VerticalPaddingType;
  boxShadow?: BoxShadowType;

  // Typography Style
  fontHeight?: LineHeightType;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  letterSpacing?: LetterSpacingType;

  // Search & Password Icons
  searchIconTransform?: IconTransform;
  passwordIconTransform?: IconTransform;
}

export const SearchBar = ({
  width,
  height,
  fill,
  minimal,
  outlined,
  ringed,
  ringedFade,
  intent,
  intentAtDefaultState,

  borderWidth,
  hoverBorderWidth,
  focusBorderWidth,
  borderRadius,
  ringWidth,
  hoverRingWidth,
  focusRingWidth,
  leftPadding,
  rightPadding,
  verticalPadding,
  boxShadow,

  fontHeight,
  fontSize,
  letterSpacing,
  fontWeight,

  searchIconTransform,
  passwordIconTransform,

  className: dClassName,
  ...rest
}: SearchBarProps) => {
  const defaultWidth = width ?? "w-64";
  const defaultMinimal = minimal ?? false;
  const defaultOutlined = outlined ?? true;
  const defaultRinged = ringed ?? true;
  const defaultLeftPadding = leftPadding ?? "pl-7";
  const defaultRightPadding = rightPadding ?? "pr-1";
  const defaultVerticalPadding = verticalPadding ?? "py-1.5";
  const defaultFontSize = fontSize ?? "text-sm";
  const defaultBorderWidth = borderWidth ?? "border";
  const defaultFocusRingWidth = focusRingWidth ?? "focus:ring-1";
  const defaultSearchIconTransform = searchIconTransform ?? { y: 2, size: 14 };

  const [inValue, setInValue] = useState<string>("");

  return (
    <div className={`relative ${fill ? "w-full" : defaultWidth} ${dClassName}`}>
      <Icon
        className="absolute left-2 inset-y-0 my-auto pointer-events-none"
        iName="search"
        minimal
        iTransform={defaultSearchIconTransform}
      ></Icon>
      <input
        type="search"
        className={`appearance-none bg-white dark:bg-gray-900 ${
          intentAtDefaultState ? "" : "border-gray-400 dark:border-gray-500"
        } text-gray-900 dark:text-gray-100 placeholder-gray-900 dark:placeholder-gray-100 placeholder-opacity-30 ${stateIntentStyleBuilder(
          {
            useDarkTheme: true,
            useDefaultState: intentAtDefaultState,
            useFocusState: true,
            minimal: defaultMinimal,
            outlined: defaultOutlined,
            ringed: defaultRinged,
            ringedFade,
            intentColor: intent,
          }
        )} ${geometryStyleBuilder({
          width: defaultWidth,
          height,
          fill,
          minimal: defaultMinimal,
          outlined: defaultOutlined,
          ringed: defaultRinged,
          borderWidth: defaultBorderWidth,
          hoverBorderWidth,
          focusBorderWidth,
          borderRadius,
          ringWidth,
          hoverRingWidth,
          focusRingWidth: defaultFocusRingWidth,
          leftPadding: defaultLeftPadding,
          rightPadding: defaultRightPadding,
          verticalPadding: defaultVerticalPadding,
          boxShadow,
        })} ${typographyStyleBuilder({
          fontSize: defaultFontSize,
          fontWeight,
          letterSpacing,
          fontHeight,
        })} `}
        value={inValue}
        onChange={evt => {
          evt.preventDefault();
          setInValue(evt.target.value);
          //React.ChangeEvent<HTMLInputElement>
          //console.log("Input cur val = " + evt.target.value);
        }}
        onFocus={evt => {
          evt.preventDefault();
          //React.FocusEvent<HTMLInputElement>
          console.log("Search Bar clicked inside!!");
        }}
        {...rest}
      />
    </div>
  );
};
