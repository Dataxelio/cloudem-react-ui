import React, { useState, useRef, useImperativeHandle } from "react";

import { useFocus } from "@react-aria/interactions";
import { useFocusRing } from "@react-aria/focus";
import { useTextField } from "@react-aria/textfield";
import { mergeProps } from "@react-aria/utils";
import { AriaTextFieldProps } from "@react-types/textfield";

import {
  BorderRadiusType,
  BorderWidthType,
  BoxShadowType,
  LineHeightType,
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
  IntentColor,
  LeftPaddingType,
  RightPaddingType,
  RingWidthType,
  VerticalPaddingType,
  WidthType,
  HeightType,
  InputType,
  IconTransform,
  IconStyle,
  IntentState,
} from "@dataxelio/react-ui.utils.prop-types";

import { intentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";

import { Text } from "@dataxelio/react-ui.element.text";
import { Button } from "@dataxelio/react-ui.input.button";
import { Tooltip } from "@dataxelio/react-ui.overlay.tooltip";
import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";
import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";

export interface TextFieldProps extends AriaTextFieldProps {
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
  borderRadius?: BorderRadiusType;
  ringWidth?: RingWidthType;
  leftPadding?: LeftPaddingType;
  rightPadding?: RightPaddingType;
  verticalPadding?: VerticalPaddingType;
  boxShadow?: BoxShadowType;

  // Typography Style
  fontHeight?: LineHeightType;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  letterSpacing?: LetterSpacingType;

  // Password Icon
  passwordIconTransform?: IconTransform;

  // Label
  inline?: boolean;
  labelInfo?: string;
  helperText?: string;

  // Custom Style
  className?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
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
      borderRadius,
      ringWidth,
      leftPadding,
      rightPadding,
      verticalPadding,
      boxShadow,

      fontHeight,
      fontSize,
      letterSpacing,
      fontWeight,

      passwordIconTransform,

      inline,
      labelInfo,
      helperText,

      className: dClassName,

      type,
      label,
      isDisabled,
      autoFocus,
      ...rest
    }: TextFieldProps,
    ref
  ) => {
    const defaultWidth = width ?? "w-64";
    const defaultMinimal = minimal ?? false;
    const defaultOutlined = outlined ?? true;
    const defaultLeftPadding = leftPadding ?? "pl-3";
    const defaultRightPadding = rightPadding
      ? rightPadding
      : inputType === "password"
      ? "pr-7"
      : "pr-3";
    const defaultVerticalPadding = verticalPadding ?? "py-1.5";
    const defaultFontSize = fontSize ?? "text-sm";
    const defaultBorderWidth = borderWidth ?? "border";
    const defaultRingWidth = ringWidth ?? "ring-1";
    const defaultPasswordIconTransform = passwordIconTransform ?? { y: 0, size: 14 };

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const inputTypeFinal =
      inputType !== "password" ? inputType : showPassword ? "text" : "password";

    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    const [isFocused, setIsFocused] = useState(false);

    const { focusProps } = useFocus({
      isDisabled,
      onFocusChange: focused => setIsFocused(focused),
    });

    const { isFocusVisible, focusProps: focusRingProps } = useFocusRing({
      autoFocus,
      isTextInput: true,
    });

    const { labelProps, inputProps } = useTextField(
      { type: inputTypeFinal, label, isDisabled, autoFocus, ...rest },
      innerRef
    );

    const intentClassName = intentStyleBuilder(
      isDisabled
        ? IntentState.DISABLED
        : isFocused || isFocusVisible
        ? IntentState.FOCUS
        : IntentState.DEFAULT,
      {
        intentColor: intent,
        outlined: defaultOutlined,
        ringed: isFocused || isFocusVisible,
        minimal: defaultMinimal,
        ringedFade,
        intentAtDefaultState,
        forceSharpBackground: true,
        forceSharpForeground: true,
        withPlaceholder: true,
        removeDefaultBrowserAppearance: true,
      }
    );

    const geometryClassName = geometryStyleBuilder({
      width: defaultWidth,
      height,
      fill: true,
      minimal: defaultMinimal,
      outlined: defaultOutlined,
      ringed: isFocused || isFocusVisible,
      borderWidth: defaultBorderWidth,
      borderRadius,
      ringWidth: defaultRingWidth,
      leftPadding: defaultLeftPadding,
      rightPadding: defaultRightPadding,
      verticalPadding: defaultVerticalPadding,
      boxShadow,
    });

    const typographyClassName = typographyStyleBuilder({
      fontSize: defaultFontSize,
      fontWeight,
      letterSpacing,
      fontHeight,
    });

    return (
      <FlexLayout
        flexDirection={inline ? "flex-row" : "flex-col"}
        flexGap="gap-1"
        flexMainAxisAlignment="justify-start"
        flexWrap="flex-nowrap"
        fluid={fill}
        width={defaultWidth}
        className={dClassName}
      >
        <BasicLayout
          domElement="label"
          flexItemResizing="flex-none"
          intentState={isDisabled ? IntentState.DISABLED : IntentState.DEFAULT}
          minimal={true}
          fontSize={defaultFontSize}
          fontWeight={fontWeight}
          letterSpacing={letterSpacing}
          fontHeight={fontHeight}
          {...labelProps}
        >
          {label}
          {labelInfo && <Text disabled={isDisabled} tText={` ${labelInfo}`} />}
        </BasicLayout>
        <FlexLayout
          flexItemResizing="flex-auto"
          flexDirection="flex-col"
          flexGap="gap-1"
          flexMainAxisAlignment="justify-start"
          fluid
        >
          <BasicLayout position="relative" flexItemResizing="flex-auto" fluid>
            <input
              ref={innerRef}
              className={`${intentClassName} ${geometryClassName} ${typographyClassName}`}
              {...mergeProps(inputProps, focusProps, focusRingProps)}
            />
            {inputType === "password" && (
              <Tooltip
                content={showPassword ? "Hide" : "Show"}
                delay={1000}
                placement="top"
                offset={1}
                withArrow
              >
                <Button
                  isDisabled={isDisabled}
                  minimal
                  intent={showPassword ? IntentColor.WARNING : IntentColor.GRAY}
                  position="absolute"
                  rightPlacement="right-2"
                  topPlacement="top-1/2"
                  verticalMargin="my-auto"
                  horizontalPadding="px-0"
                  verticalPadding="py-0"
                  transformTranslate="-translate-y-1/2"
                  leftIcon={showPassword ? "eye-slash" : "eye"}
                  leftIconStyle={IconStyle.REGULAR}
                  leftIconTransform={defaultPasswordIconTransform}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              </Tooltip>
            )}
          </BasicLayout>
          {helperText && (
            <Text
              flexItemResizing="flex-none"
              tText={helperText}
              fontSize="text-xs"
              intentColor={intent}
            />
          )}
        </FlexLayout>
      </FlexLayout>
    );
  }
);
