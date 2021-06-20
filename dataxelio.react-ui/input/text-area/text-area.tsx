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
  IntentState,
} from "@dataxelio/react-ui.utils.prop-types";

import { intentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";

import { Text } from "@dataxelio/react-ui.element.text";
import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";
import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";

export interface TextAreaProps extends AriaTextFieldProps {
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

  // Label
  inline?: boolean;
  labelInfo?: string;
  helperText?: string;

  // Custom Style
  className?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
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

      inline,
      labelInfo,
      helperText,

      className: dClassName,

      type,
      label,
      isDisabled,
      autoFocus,
      ...rest
    }: TextAreaProps,
    ref
  ) => {
    const defaultWidth = width ?? "w-64";
    const defaultMinimal = minimal ?? false;
    const defaultOutlined = outlined ?? true;
    const defaultLeftPadding = leftPadding ?? "pl-3";
    const defaultRightPadding = rightPadding ? rightPadding : "pr-3";
    const defaultVerticalPadding = verticalPadding ?? "py-1.5";
    const defaultFontSize = fontSize ?? "text-sm";
    const defaultBorderWidth = borderWidth ?? "border";
    const defaultRingWidth = ringWidth ?? "ring-1";

    const innerRef = useRef<HTMLTextAreaElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement);

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
      { type: "text", label, isDisabled, autoFocus, ...rest },
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
          <textarea
            ref={innerRef}
            className={`${intentClassName} ${geometryClassName} ${typographyClassName}`}
            {...mergeProps(inputProps, focusProps, focusRingProps)}
          />
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
