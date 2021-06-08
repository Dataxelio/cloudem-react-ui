import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { mergeProps } from "react-aria";

import {
  IntentColor,
  IntentState,
  PositionType,
  LeftPlacementType,
  RightPlacementType,
  TopPlacementType,
  BottomPlacementType,
  VisibilityType,
  ZIndexType,
  FlexItemResizingType,
  FlexItemGrowType,
  FlexItemShrinkType,
  GridItemInlineAxisAlignmentType,
  FlexGridItemCrossAxisAlignmentType,
  LeftMarginType,
  RightMarginType,
  HorizontalMarginType,
  TopMarginType,
  BottomMarginType,
  VerticalMarginType,
  WidthType,
  HeightType,
  BorderWidthType,
  BorderRadiusType,
  HorizontalPaddingType,
  VerticalPaddingType,
  BoxShadowType,
  FontSizeType,
  FontSmoothingType,
  FontStyleType,
  FontWeightType,
  FontVariantNumericType,
  LetterSpacingType,
  LineHeightType,
  ListStyleType,
  ListStylePositionType,
  TextDecorationType,
  TextTransformType,
  TextOverflowType,
  WhitespaceType,
  WordBreakType,
  IconTransform,
  IconStyle,
  OverlayDomProps,
} from "@dataxelio/react-ui.utils.prop-types";
import { intentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";
import { Icon } from "@dataxelio/react-ui.element.icon";
import { Text } from "@dataxelio/react-ui.element.text";
import { Arrow } from "@dataxelio/react-ui.element.arrow";

export interface LabelProps extends OverlayDomProps {
  disabled?: boolean;

  // Intent Style
  fill?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  intent?: IntentColor;
  strongIntent?: boolean;

  // Layout Style
  position?: PositionType;
  leftPlacement?: LeftPlacementType;
  rightPlacement?: RightPlacementType;
  topPlacement?: TopPlacementType;
  bottomPlacement?: BottomPlacementType;
  visibility?: VisibilityType;
  zIndex?: ZIndexType;
  flexItemResizing?: FlexItemResizingType;
  flexItemGrow?: FlexItemGrowType;
  flexItemShrink?: FlexItemShrinkType;
  gridItemInlineAxisAlignment?: GridItemInlineAxisAlignmentType;
  flexGridItemCrossAxisAlignment?: FlexGridItemCrossAxisAlignmentType;
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
  horizontalPadding?: HorizontalPaddingType;
  verticalPadding?: VerticalPaddingType;
  boxShadow?: BoxShadowType;

  // Typography Style
  fontSize?: FontSizeType;
  fontSmoothing?: FontSmoothingType;
  fontStyle?: FontStyleType;
  fontWeight?: FontWeightType;
  fontVariantNumeric?: FontVariantNumericType;
  letterSpacing?: LetterSpacingType;
  fontHeight?: LineHeightType;
  listStyle?: ListStyleType;
  listStylePosition?: ListStylePositionType;
  textDecoration?: TextDecorationType;
  textTransform?: TextTransformType;
  textOverflow?: TextOverflowType;
  whitespace?: WhitespaceType;
  wordBreak?: WordBreakType;

  // Left Icon
  leftIcon?: IconName;
  leftIconTransform?: IconTransform;
  leftIconStyle?: IconStyle;

  // Text
  text?: string;

  // Custom Style
  className?: string;
  children?: React.ReactNode;
}

export const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  (
    {
      disabled,

      fill,
      minimal,
      outlined,
      intent,
      strongIntent,

      position,
      leftPlacement,
      rightPlacement,
      topPlacement,
      bottomPlacement,
      visibility,
      zIndex,
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
      horizontalPadding,
      verticalPadding,
      boxShadow,

      fontSize,
      fontSmoothing,
      fontStyle,
      fontWeight,
      fontVariantNumeric,
      letterSpacing,
      fontHeight,
      listStyle,
      listStylePosition,
      textDecoration,
      textTransform,
      textOverflow,
      whitespace,
      wordBreak,

      leftIcon,
      leftIconTransform,
      leftIconStyle,

      text,

      modalDomProps,
      overlayOriginalDomProps,
      overlayPrimaryDomProps,
      overlaySecondaryDomProps,
      overlayPositionDomProps,
      overlayPlacementAxis,
      withArrow,
      arrowSize,
      arrowPositionDomProps,

      className: lClassName,
      children,
    }: LabelProps,
    ref
  ) => {
    const finalFontSize = fontSize ?? "text-sm";

    const intentClassName = intentStyleBuilder(
      disabled ? IntentState.DISABLED : strongIntent ? IntentState.FOCUS : IntentState.DEFAULT,
      {
        intentColor: intent,
        outlined,
        minimal,
        forceSharpForeground: intent === undefined,
        forceSharpBackground: !minimal && intent === undefined,
        removeDefaultBrowserAppearance: true,
      }
    );

    const layoutClassName = layoutStyleBuilder({
      layout: "flex",
      display: "block",
      position,
      leftPlacement,
      rightPlacement,
      topPlacement,
      bottomPlacement,
      visibility,
      zIndex,
      flexDirection: "flex-row",
      flexWrap: "flex-nowrap",
      flexGridMainAxisAlignment: "justify-start",
      flexGridCrossAxisAlignment: "items-center",
      flexItemResizing,
      flexItemGrow,
      flexItemShrink,
      flexGridGap: "gap-1.5",
      gridItemInlineAxisAlignment,
      flexGridItemCrossAxisAlignment,
      leftMargin,
      rightMargin,
      horizontalMargin,
      topMargin,
      bottomMargin,
      verticalMargin,
      customClassName: lClassName,
    });

    const geometryClassName = geometryStyleBuilder({
      width,
      height,
      fill,
      minimal,
      outlined,
      borderWidth,
      borderRadius,
      horizontalPadding,
      verticalPadding,
      boxShadow,
    });

    const typographyClassName = typographyStyleBuilder({
      fontSize: finalFontSize,
      fontSmoothing,
      fontStyle,
      fontWeight,
      fontVariantNumeric,
      letterSpacing,
      fontHeight,
      listStyle,
      listStylePosition,
      textDecoration,
      textTransform,
      whitespace,
      wordBreak,
    });

    return (
      <div
        ref={ref}
        className={`${intentClassName} ${layoutClassName} ${geometryClassName} ${typographyClassName}`}
        {...mergeProps(
          modalDomProps ?? {},
          overlayOriginalDomProps ?? {},
          overlayPrimaryDomProps ?? {},
          overlaySecondaryDomProps ?? {},
          overlayPositionDomProps ?? {}
        )}
      >
        {leftIcon && (
          <Icon
            disabled={disabled}
            flexItemResizing="flex-none"
            iName={leftIcon}
            inheritStyle
            invisible={false}
            iTransform={leftIconTransform}
            iStyle={leftIconStyle}
          />
        )}
        {!text && !!children && typeof children === "string" && (
          <Text
            disabled={disabled}
            textOverflow={textOverflow}
            wordBreak={wordBreak}
            tText={children}
            inheritStyle
          />
        )}
        {!text && !!children && typeof children !== "string" && children}
        {!!text && (
          <Text
            disabled={disabled}
            textOverflow={textOverflow}
            wordBreak={wordBreak}
            tText={text}
            inheritStyle
          />
        )}
        {withArrow && !!overlayPlacementAxis && !!arrowPositionDomProps && (
          <Arrow
            placement={overlayPlacementAxis}
            size={arrowSize}
            positionDomProps={arrowPositionDomProps}
          />
        )}
      </div>
    );
  }
);
