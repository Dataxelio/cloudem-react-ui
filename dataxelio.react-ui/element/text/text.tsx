import React from "react";

import {
  IntentColor,
  IntentState,
  ForegroundOpacityType,
  PositionType,
  LeftPlacementType,
  RightPlacementType,
  TopPlacementType,
  BottomPlacementType,
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
} from "@dataxelio/react-ui.utils.prop-types";
import { intentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  inheritStyle?: boolean;
  invisible?: boolean;
  disabled?: boolean;
  opacity?: ForegroundOpacityType;

  // Intent Style
  minimal?: boolean;
  intentColor?: IntentColor;
  strongIntent?: boolean;

  // Layout Style
  position?: PositionType;
  leftPlacement?: LeftPlacementType;
  rightPlacement?: RightPlacementType;
  topPlacement?: TopPlacementType;
  bottomPlacement?: BottomPlacementType;
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

  tText?: string;

  injectedDomProps?: React.HTMLAttributes<HTMLElement>;
}

export const Text = ({
  inheritStyle,
  disabled,
  invisible,

  minimal = true,
  intentColor,
  strongIntent,
  opacity,

  position,
  leftPlacement,
  rightPlacement,
  topPlacement,
  bottomPlacement,
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

  fontSize = "text-sm",
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

  tText,

  injectedDomProps,

  children,
  className: tClassName,
}: TextProps) => {
  const intentClassName = inheritStyle
    ? "text-current"
    : intentStyleBuilder(
        disabled ? IntentState.DISABLED : strongIntent ? IntentState.FOCUS : IntentState.DEFAULT,
        {
          intentColor,
          forceSharpForeground: intentColor === undefined,
          forceSharpBackground: !minimal && intentColor === undefined,
          minimal,
          foregroundOpacity: opacity,
        }
      );

  const layoutClassName = layoutStyleBuilder({
    display: "inline",
    position,
    leftPlacement,
    rightPlacement,
    topPlacement,
    bottomPlacement,
    visibility: invisible ? "invisible" : "visible",
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
    customClassName: tClassName,
  });

  const typographyClassName = inheritStyle
    ? textOverflow ?? "" + wordBreak ?? ""
    : typographyStyleBuilder({
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
      });

  return (
    <span
      className={`${intentClassName} ${layoutClassName} ${typographyClassName}`}
      {...injectedDomProps}
    >
      {!!tText && tText}
      {!tText && children}
    </span>
  );
};
