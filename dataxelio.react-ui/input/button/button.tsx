import React, { useState, useRef, useImperativeHandle } from "react";

import { useHover, useFocus } from "@react-aria/interactions";
import { useFocusRing } from "@react-aria/focus";
import { useButton } from "@react-aria/button";
import { mergeProps } from "@react-aria/utils";
import { AriaButtonProps } from "@react-types/button";

import { IntentState, ButtonStyleProps } from "@dataxelio/react-ui.utils.prop-types";

import { intentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";
import { Icon } from "@dataxelio/react-ui.element.icon";
import { Text } from "@dataxelio/react-ui.element.text";

export type ButtonProps = AriaButtonProps<"button"> & ButtonStyleProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      fill,
      minimal,
      outlined,
      ringed,
      ringedFade,
      intent,
      intentAtDefaultState,
      useDarkGrayAsDefaultIntent,
      backgroundOpacity,
      foregroundOpacity,

      gapBetweenElements = "gap-3",
      position,
      leftPlacement,
      rightPlacement,
      topPlacement,
      bottomPlacement,
      visibility,
      flexItemResizing,
      flexItemGrow,
      flexItemShrink,
      gridItemInlineAxisAlignment,
      flexGridItemCrossAxisAlignment,
      leftMargin,
      rightMargin,
      horizontalMargin,
      topMargin,
      bottomMargin,
      verticalMargin,

      width,
      height,
      borderWidth,
      borderRadius,
      ringWidth,
      horizontalPadding,
      verticalPadding,
      boxShadow,
      transformOrigin,
      transformScale,
      transformRotate,
      transformTranslate,

      fontHeight,
      fontSize,
      letterSpacing,
      fontWeight,

      leftIcon,
      leftIconTransform,
      leftIconStyle,

      rightIcon,
      rightIconTransform,
      rightIconStyle,

      loading,
      loadingIcon,
      loadingIconAnimation,
      loadingIconTransform,
      loadingIconStyle,

      text,

      className: bClassName,

      tooltipTriggerDomProps,
      textDomProps,

      children,
      isDisabled,
      autoFocus,
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const defaultBorderWidth = borderWidth ?? "border";
    const defaultRingWidth = ringWidth ?? "ring-2";
    const defaultRingFade = ringedFade ?? true;
    const finalHorizontalPadding = horizontalPadding ?? "px-5";
    const finalVerticalPadding = verticalPadding ?? "py-2";
    const finalPosition = position ?? "relative";

    const innerRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLButtonElement);

    const [isFocused, setIsFocused] = useState(false);

    const { isHovered, hoverProps } = useHover({ isDisabled });

    const { focusProps } = useFocus({
      isDisabled,
      onFocusChange: focused => setIsFocused(focused),
    });

    const { isFocusVisible, focusProps: focusRingProps } = useFocusRing({
      autoFocus,
      isTextInput: false,
    });

    const { isPressed, buttonProps } = useButton({ isDisabled, autoFocus, ...rest }, innerRef);

    const intentClassName = intentStyleBuilder(
      isDisabled
        ? IntentState.DISABLED
        : isPressed
        ? IntentState.PRESSED
        : isFocused
        ? IntentState.FOCUS
        : isHovered
        ? IntentState.HOVER
        : IntentState.DEFAULT,
      {
        intentColor: intent,
        intentAtDefaultState,
        useDarkGrayAsDefaultIntent,
        outlined,
        ringed: isFocused || isFocusVisible,
        minimal,
        backgroundOpacity,
        foregroundOpacity,
        ringedFade: defaultRingFade,
        disablePointerEvents: loading,
        removeDefaultBrowserAppearance: true,
      }
    );

    const layoutClassName = layoutStyleBuilder({
      layout: "inline-flex",
      display: "inline",
      position: finalPosition,
      leftPlacement,
      rightPlacement,
      topPlacement,
      bottomPlacement,
      visibility,
      flexGridMainAxisAlignment: !!width ? "justify-between" : "justify-center",
      flexGridCrossAxisAlignment: "items-center",
      flexGridGap: gapBetweenElements,
      flexItemResizing,
      flexItemGrow,
      flexItemShrink,
      gridItemInlineAxisAlignment,
      flexGridItemCrossAxisAlignment,
      leftMargin,
      rightMargin,
      horizontalMargin,
      topMargin,
      bottomMargin,
      verticalMargin,
      customClassName: bClassName,
    });

    const geometryClassName = geometryStyleBuilder({
      fill,
      minimal,
      outlined,
      ringed: isFocused || isFocusVisible,
      width,
      height,
      borderWidth: defaultBorderWidth,
      borderRadius,
      ringWidth: defaultRingWidth,
      horizontalPadding: finalHorizontalPadding,
      verticalPadding: finalVerticalPadding,
      boxShadow,
      transformOrigin,
      transformScale,
      transformRotate,
      transformTranslate,
    });

    const typographyClassName = typographyStyleBuilder({
      fontSize,
      fontWeight,
      letterSpacing,
      fontHeight,
    });

    return (
      <button
        ref={innerRef}
        className={`${intentClassName} ${layoutClassName} ${geometryClassName} ${typographyClassName}`}
        {...mergeProps(
          buttonProps,
          focusProps,
          focusRingProps,
          hoverProps,
          tooltipTriggerDomProps ?? {}
        )}
      >
        {leftIcon && (
          <Icon
            flexItemResizing="flex-none"
            iName={leftIcon}
            inheritStyle
            invisible={loading ?? false}
            iTransform={leftIconTransform}
            iStyle={leftIconStyle}
          />
        )}
        {!text && !!children && typeof children === "string" && (
          <Text
            tText={children}
            inheritStyle
            invisible={loading ?? false}
            textOverflow="truncate"
            injectedDomProps={textDomProps}
          />
        )}
        {!text && !!children && typeof children !== "string" && children}
        {!!text && (
          <Text
            tText={text}
            inheritStyle
            invisible={loading ?? false}
            textOverflow="truncate"
            injectedDomProps={textDomProps}
          />
        )}
        {rightIcon && (
          <Icon
            flexItemResizing="flex-none"
            iName={rightIcon}
            inheritStyle
            invisible={loading ?? false}
            iTransform={rightIconTransform}
            iStyle={rightIconStyle}
          />
        )}
        {loading && (
          <Icon
            position="absolute"
            leftPlacement="left-0"
            rightPlacement="right-0"
            topPlacement="top-0"
            bottomPlacement="bottom-0"
            horizontalMargin="mx-auto"
            verticalMargin="my-auto"
            iName={loadingIcon ?? "spinner"}
            inheritStyle
            invisible={!loading}
            iAnimation={loadingIconAnimation ?? "pulse"}
            iTransform={loadingIconTransform}
            iStyle={loadingIconStyle}
          />
        )}
      </button>
    );
  }
);
