import React from "react";

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

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  inheritStyle?: boolean;
  disabled?: boolean;

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
}

export const Paragraph = ({
  inheritStyle,
  disabled,

  minimal,
  intentColor,
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

  children,
  className: pClassName,
}: ParagraphProps) => {
  const finalMinimal = minimal ?? true;
  const finalFontSize = fontSize ?? "text-sm";

  const intentClassName = inheritStyle
    ? "text-current"
    : intentStyleBuilder(
        disabled ? IntentState.DISABLED : strongIntent ? IntentState.FOCUS : IntentState.DEFAULT,
        {
          intentColor,
          forceSharpForeground: intentColor === undefined,
          forceSharpBackground: !finalMinimal && intentColor === undefined,
          minimal: finalMinimal,
        }
      );

  const layoutClassName = layoutStyleBuilder({
    display: "block",
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
    customClassName: pClassName,
  });

  const typographyClassName = inheritStyle
    ? textOverflow ?? ""
    : typographyStyleBuilder({
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
        textOverflow,
        whitespace,
        wordBreak,
      });

  return (
    <p className={`${intentClassName} ${layoutClassName} ${typographyClassName}`}>{children}</p>
  );
};
