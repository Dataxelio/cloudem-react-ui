import React, { useState, useRef, useImperativeHandle } from "react";

import { useFocus } from "@react-aria/interactions";
import { useFocusRing } from "@react-aria/focus";
import { useSearchField } from "@react-aria/searchfield";
import { mergeProps } from "@react-aria/utils";
import { useSearchFieldState } from "@react-stately/searchfield";
import { AriaSearchFieldProps } from "@react-types/searchfield";

import {
  RingOpacityType,
  LeftMarginType,
  RightMarginType,
  HorizontalMarginType,
  TopMarginType,
  BottomMarginType,
  VerticalMarginType,
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
  ringOpacity?: RingOpacityType;
  ringedFade?: boolean;
  intent?: IntentColor;
  intentAtDefaultState?: boolean;

  // Layout Style
  leftMargin?: LeftMarginType;
  rightMargin?: RightMarginType;
  horizontalMargin?: HorizontalMarginType;
  topMargin?: TopMarginType;
  bottomMargin?: BottomMarginType;
  verticalMargin?: VerticalMarginType;

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
      ringOpacity,
      ringedFade,
      intent,
      intentAtDefaultState,

      leftMargin,
      rightMargin,
      horizontalMargin,
      topMargin,
      bottomMargin,
      verticalMargin,

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

    const [isFocused, setIsFocused] = useState(false);

    const { focusProps } = useFocus({
      isDisabled,
      onFocusChange: focused => setIsFocused(focused),
    });

    const { isFocusVisible, focusProps: focusRingProps } = useFocusRing({
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
        ringOpacity,
        minimal: defaultMinimal,
        ringedFade,
        intentAtDefaultState,
        forceSharpBackground: true,
        forceSharpForeground: state.value !== "" ? true : false,
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
      <BasicLayout
        position="relative"
        fluid={fill}
        width={defaultWidth}
        leftMargin={leftMargin}
        rightMargin={rightMargin}
        horizontalMargin={horizontalMargin}
        topMargin={topMargin}
        bottomMargin={bottomMargin}
        verticalMargin={verticalMargin}
        className={dClassName}
      >
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
          {...mergeProps(inputProps, focusProps, focusRingProps)}
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
