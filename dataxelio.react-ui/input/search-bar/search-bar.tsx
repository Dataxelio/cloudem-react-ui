import React, { useRef, useImperativeHandle } from "react";
import { useSearchField, useFocusRing, mergeProps } from "react-aria";
import { useSearchFieldState } from "react-stately";
import { AriaSearchFieldProps } from "@react-types/searchfield";

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
  IconTransform,
  IntentState,
} from "@dataxelio/react-ui.utils.prop-types";

import { intentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";

import { Icon } from "@dataxelio/react-ui.element.icon";
import { Button } from "@dataxelio/react-ui.input.button";
import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";

export interface SearchBarProps extends AriaSearchFieldProps {
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

  // Search & Clear Icon
  searchIconTransform?: IconTransform;
  clearIconTransform?: IconTransform;

  // Custom Style
  className?: string;
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
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

      searchIconTransform,
      clearIconTransform,

      className: dClassName,

      isDisabled,
      autoFocus,
      ...rest
    }: SearchBarProps,
    ref
  ) => {
    const defaultWidth = width ?? "w-64";
    const defaultMinimal = minimal ?? false;
    const defaultOutlined = outlined ?? true;
    const defaultLeftPadding = leftPadding ?? "pl-7";
    const defaultRightPadding = rightPadding ?? "pr-5";
    const defaultVerticalPadding = verticalPadding ?? "py-1.5";
    const defaultFontSize = fontSize ?? "text-sm";
    const defaultBorderWidth = borderWidth ?? "border";
    const defaultRingWidth = ringWidth ?? "ring-1";
    const defaultSearchIconTransform = searchIconTransform ?? { y: 1, size: 14 };
    const defaultClearIconTransform = clearIconTransform ?? { y: 1, size: 14 };

    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    const { isFocused, isFocusVisible, focusProps } = useFocusRing({
      autoFocus,
      isTextInput: true,
    });

    const state = useSearchFieldState({ isDisabled, autoFocus, ...rest });
    const { inputProps, clearButtonProps } = useSearchField(
      { isDisabled, autoFocus, ...rest },
      state,
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
      fill,
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
      fontStyle: state.value !== "" ? "not-italic" : "italic",
      fontWeight,
      letterSpacing,
      fontHeight,
    });

    return (
      <BasicLayout position="relative" fluid={fill} width={defaultWidth} className={dClassName}>
        <Icon
          position="absolute"
          leftPlacement="left-2"
          topPlacement="top-0"
          bottomPlacement="bottom-0"
          verticalMargin="my-auto"
          minimal
          opacity="text-opacity-50"
          disablePointerEvents
          iName="search"
          iTransform={defaultSearchIconTransform}
        />
        <input
          ref={innerRef}
          className={`${intentClassName} ${geometryClassName} ${typographyClassName}`}
          {...mergeProps(inputProps, focusProps)}
        />
        {state.value !== "" && (
          <Button
            position="absolute"
            rightPlacement="right-2"
            topPlacement="top-1/2"
            verticalMargin="my-auto"
            minimal
            leftIcon="times"
            leftIconTransform={defaultClearIconTransform}
            horizontalPadding="px-0"
            verticalPadding="py-0"
            transformTranslate="-translate-y-1/2"
            {...clearButtonProps}
          />
        )}
      </BasicLayout>
    );
  }
);
