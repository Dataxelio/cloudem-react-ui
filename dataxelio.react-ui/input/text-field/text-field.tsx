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
  InputType,
  IconTransform,
  IconStyle,
} from "@dataxelio/react-ui.utils.prop-types";

import { stateIntentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";

import { Button } from "@dataxelio/react-ui.input.button";
import { Tooltip } from "@dataxelio/react-ui.overlay.tooltip";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Input Type
  inputType: InputType;

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

  // Password Icons
  passwordIconTransform?: IconTransform;
}

export const TextField = ({
  inputType,

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

  passwordIconTransform,

  className: dClassName,
  ...rest
}: TextFieldProps) => {
  const defaultWidth = width ?? "w-64";
  const defaultMinimal = minimal ?? false;
  const defaultOutlined = outlined ?? true;
  const defaultRinged = ringed ?? true;
  const defaultLeftPadding = leftPadding ?? "pl-3";
  const defaultRightPadding = rightPadding
    ? rightPadding
    : inputType === "password"
    ? "pr-7"
    : "pr-0";
  const defaultVerticalPadding = verticalPadding ?? "py-1.5";
  const defaultFontSize = fontSize ?? "text-sm";
  const defaultBorderWidth = borderWidth ?? "border";
  const defaultFocusRingWidth = focusRingWidth ?? "focus:ring-1";
  const defaultPasswordIconTransform = passwordIconTransform ?? { y: 0, size: 14 };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const inputTypeFinal = inputType !== "password" ? inputType : showPassword ? "text" : "password";

  return (
    <div className={`relative ${fill ? "w-full" : defaultWidth} ${dClassName}`}>
      <input
        type={inputTypeFinal}
        className={`bg-white dark:bg-gray-900 ${
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
        {...rest}
      />
      {inputType === "password" && (
        <Tooltip
          content={showPassword ? "Hide" : "Show"}
          triggerElement={
            <Button
              className="absolute right-2 inset-y-0 my-auto"
              minimal
              leftIcon={showPassword ? "eye-slash" : "eye"}
              leftIconStyle={IconStyle.REGULAR}
              leftIconTransform={defaultPasswordIconTransform}
              intent={showPassword ? IntentColor.WARNING : IntentColor.GRAY}
              horizontalPadding="px-0"
              verticalPadding="py-0"
              onClick={evt => {
                evt.preventDefault();
                setShowPassword(!showPassword);
              }}
            />
          }
        />
      )}
    </div>
  );
};
