import React, { useRef, useImperativeHandle } from "react";
import { useButton, useHover, useFocusRing, mergeProps } from "react-aria";
import { AriaButtonProps } from "@react-types/button";

import { IntentState, ButtonStyleProps } from "@dataxelio/react-ui.utils.prop-types";

import { intentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";
import { Icon } from "@dataxelio/react-ui.element.icon";
import { Text } from "@dataxelio/react-ui.element.text";

export type AnchorButtonProps = AriaButtonProps<"a"> &
  ButtonStyleProps & { onClick?: React.MouseEventHandler };

export const AnchorButton = React.forwardRef<HTMLAnchorElement, AnchorButtonProps>(
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
      onClick,

      children,
      isDisabled,
      href,
      autoFocus,
      ...rest
    }: AnchorButtonProps,
    ref
  ) => {
    const defaultBorderWidth = borderWidth ?? "border";
    const defaultRingWidth = ringWidth ?? "ring-2";
    const defaultRingFade = ringedFade ?? true;
    const finalHorizontalPadding = horizontalPadding ?? "px-5";
    const finalVerticalPadding = verticalPadding ?? "py-2";
    const finalPosition = position ?? "relative";

    const innerRef = useRef<HTMLAnchorElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLAnchorElement);

    const { isHovered, hoverProps } = useHover({ isDisabled });
    const { isFocused, isFocusVisible, focusProps } = useFocusRing({
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
      flexGridMainAxisAlignment: "justify-center",
      flexGridCrossAxisAlignment: "items-center",
      flexGridGap: "gap-3",
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
      <a
        href={href}
        ref={innerRef}
        className={`${intentClassName} ${layoutClassName} ${geometryClassName} ${typographyClassName}`}
        onClick={onClick}
        {...mergeProps(buttonProps, focusProps, hoverProps, tooltipTriggerDomProps ?? {})}
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
            injectedDomProps={textDomProps}
          />
        )}
        {!text && !!children && typeof children !== "string" && children}
        {!!text && (
          <Text
            tText={text}
            inheritStyle
            invisible={loading ?? false}
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
      </a>
    );
  }
);
