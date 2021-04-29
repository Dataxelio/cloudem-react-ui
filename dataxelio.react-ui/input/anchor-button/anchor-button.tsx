import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";

import {
  BorderRadiusType,
  BorderWidthType,
  BoxShadowType,
  LineHeightType,
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
  IntentColor,
  HorizontalPaddingType,
  RingWidthType,
  VerticalPaddingType,
  IconAnimation,
  IconTransform,
  IconStyle,
} from "@dataxelio/react-ui.utils.prop-types";

import { stateIntentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";
import { Icon } from "@dataxelio/react-ui.element.icon";
import { Text } from "@dataxelio/react-ui.element.text";

export interface AnchorButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // Intent Style
  fill?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  ringed?: boolean;
  ringedFade?: boolean;
  intent?: IntentColor;

  // Geometry Style
  borderWidth?: BorderWidthType;
  borderRadius?: BorderRadiusType;
  ringWidth?: RingWidthType;
  horizontalPadding?: HorizontalPaddingType;
  verticalPadding?: VerticalPaddingType;
  boxShadow?: BoxShadowType;

  // Typography Style
  fontHeight?: LineHeightType;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  letterSpacing?: LetterSpacingType;

  // Left Icon
  leftIcon?: IconName;
  leftIconTransform?: IconTransform;
  leftIconStyle?: IconStyle;

  // Right Icon
  rightIcon?: IconName;
  rightIconTransform?: IconTransform;
  rightIconStyle?: IconStyle;

  // Loading Icon
  loading?: boolean;
  loadingIcon?: IconName;
  loadingIconAnimation?: IconAnimation;
  loadingIconTransform?: IconTransform;
  loadingIconStyle?: IconStyle;

  // Text
  text?: string;
}

export const AnchorButton = React.forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  (
    {
      fill,
      minimal,
      outlined,
      ringed,
      ringedFade,
      intent,

      borderWidth,
      borderRadius,
      ringWidth,
      horizontalPadding,
      verticalPadding,
      boxShadow,

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

      children,
      className: bClassName,
      href,
      onClick,
      ...rest
    }: AnchorButtonProps,
    ref
  ) => {
    const defaultBorderWidth = borderWidth ?? "border";
    const defaultRingWidth = ringWidth ?? "ring-2";
    return (
      <a
        href={href}
        ref={ref}
        onClick={onClick}
        className={`${bClassName} inline-flex justify-center items-center ${
          loading ? "pointer-events-none" : "space-x-3"
        } relative appearance-none outline-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none ${stateIntentStyleBuilder(
          {
            useDarkTheme: true,
            useDefaultState: true,
            useHoverState: true,
            useFocusState: true,
            useActiveState: true,
            minimal,
            outlined,
            ringed,
            ringedFade,
            withForeground: true,
            intentColor: intent,
          }
        )} ${geometryStyleBuilder({
          fill,
          minimal,
          outlined,
          ringed,
          borderWidth: defaultBorderWidth,
          borderRadius,
          ringWidth: defaultRingWidth,
          horizontalPadding,
          verticalPadding,
          boxShadow,
        })} ${typographyStyleBuilder({
          fontSize,
          fontWeight,
          letterSpacing,
          fontHeight,
        })} `}
        {...rest}
      >
        {!loading && !leftIcon && !text && !rightIcon && children}
        {leftIcon && (
          <Icon
            className="flex-none"
            iName={leftIcon}
            inheritStyle
            invisible={loading ?? false}
            iTransform={leftIconTransform}
            iStyle={leftIconStyle}
          />
        )}
        {text && <Text tText={text} inheritStyle invisible={loading ?? false} />}
        {rightIcon && (
          <Icon
            className="flex-none"
            iName={rightIcon}
            inheritStyle
            invisible={loading ?? false}
            iTransform={rightIconTransform}
            iStyle={rightIconStyle}
          />
        )}
        {loading && (
          <Icon
            className="absolute m-auto"
            iName={loadingIcon || "spinner"}
            inheritStyle
            invisible={!loading}
            iAnimation={loadingIconAnimation}
            iTransform={loadingIconTransform}
            iStyle={loadingIconStyle}
          />
        )}
      </a>
    );
  }
);
