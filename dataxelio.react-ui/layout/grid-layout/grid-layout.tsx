import React from "react";

import {
  IntentColor,
  IntentState,
  BackgroundOpacityType,
  BorderOpacityType,
  DisplayType,
  OverflowType,
  OverscrollBehaviorType,
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
  GridTemplateColumnsType,
  GridColumnSpanType,
  GridTemplateRowsType,
  GridRowSpanType,
  FlexGridGapType,
  FlexGridMainAxisAlignmentType,
  GridInlineAxisAlignmentType,
  GridItemInlineAxisAlignmentType,
  FlexGridMultiRowAlignmentType,
  FlexGridCrossAxisAlignmentType,
  FlexGridItemCrossAxisAlignmentType,
  LeftMarginType,
  RightMarginType,
  HorizontalMarginType,
  TopMarginType,
  BottomMarginType,
  VerticalMarginType,
  WidthType,
  MaxWidthType,
  MinWidthType,
  HeightType,
  MaxHeightType,
  MinHeightType,
  BorderWidthType,
  BorderRadiusType,
  HorizontalPaddingType,
  LeftPaddingType,
  RightPaddingType,
  VerticalPaddingType,
  TopPaddingType,
  BottomPaddingType,
  BoxShadowType,
  TransformOriginType,
  TransformScaleType,
  TransformRotateType,
  TransformTranslateType,
  LineHeightType,
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
} from "@dataxelio/react-ui.utils.prop-types";

import {
  intentStyleBuilder,
  debugIntentStyleBuilder,
} from "@dataxelio/react-ui.utils.intent-style-builder";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";

export interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  // Intent Style
  minimal?: boolean;
  outlined?: boolean;
  borderFade?: boolean;
  ringed?: boolean;
  ringedFade?: boolean;
  intent?: IntentColor;
  intentState?: IntentState;
  backgroundOpacity?: BackgroundOpacityType;
  borderOpacity?: BorderOpacityType;

  // Layout Style
  display?: DisplayType;
  overflow?: OverflowType;
  overscrollBehavior?: OverscrollBehaviorType;
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
  gridTemplateColumns?: GridTemplateColumnsType;
  gridColumnSpan?: GridColumnSpanType;
  gridTemplateRows?: GridTemplateRowsType;
  gridRowSpan?: GridRowSpanType;
  gridGap?: FlexGridGapType;
  gridMainAxisAlignment?: FlexGridMainAxisAlignmentType;
  gridInlineAxisAlignment?: GridInlineAxisAlignmentType;
  gridItemInlineAxisAlignment?: GridItemInlineAxisAlignmentType;
  gridMultiRowAlignment?: FlexGridMultiRowAlignmentType;
  gridCrossAxisAlignment?: FlexGridCrossAxisAlignmentType;
  flexGridItemCrossAxisAlignment?: FlexGridItemCrossAxisAlignmentType;
  leftMargin?: LeftMarginType;
  rightMargin?: RightMarginType;
  horizontalMargin?: HorizontalMarginType;
  topMargin?: TopMarginType;
  bottomMargin?: BottomMarginType;
  verticalMargin?: VerticalMarginType;

  // Geometry Style
  fixed?: boolean;
  fluid?: boolean;
  width?: WidthType;
  maxWidth?: MaxWidthType;
  minWidth?: MinWidthType;
  height?: HeightType;
  maxHeight?: MaxHeightType;
  minHeight?: MinHeightType;
  borderWidth?: BorderWidthType;
  borderRadius?: BorderRadiusType;
  horizontalPadding?: HorizontalPaddingType;
  leftPadding?: LeftPaddingType;
  rightPadding?: RightPaddingType;
  verticalPadding?: VerticalPaddingType;
  topPadding?: TopPaddingType;
  bottomPadding?: BottomPaddingType;
  boxShadow?: BoxShadowType;
  transformOrigin?: TransformOriginType;
  transformScale?: TransformScaleType;
  transformRotate?: TransformRotateType;
  transformTranslate?: TransformTranslateType;

  // Typography Style
  fontHeight?: LineHeightType;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  letterSpacing?: LetterSpacingType;

  // Debug
  debugMode?: boolean;
  debugIntent?: IntentColor;
}

export const GridLayout = React.forwardRef<HTMLDivElement, GridLayoutProps>(
  (
    {
      minimal,
      outlined,
      borderFade,
      ringed,
      ringedFade,
      intent,
      intentState,
      backgroundOpacity,
      borderOpacity,

      display,
      overflow,
      overscrollBehavior,
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
      gridTemplateColumns,
      gridColumnSpan,
      gridTemplateRows,
      gridRowSpan,
      gridGap,
      gridMainAxisAlignment,
      gridInlineAxisAlignment,
      gridItemInlineAxisAlignment,
      gridMultiRowAlignment,
      gridCrossAxisAlignment,
      flexGridItemCrossAxisAlignment,
      leftMargin,
      rightMargin,
      horizontalMargin,
      topMargin,
      bottomMargin,
      verticalMargin,

      fixed,
      fluid,
      width,
      maxWidth,
      minWidth,
      height,
      maxHeight,
      minHeight,
      borderWidth,
      borderRadius,
      horizontalPadding,
      leftPadding,
      rightPadding,
      verticalPadding,
      topPadding,
      bottomPadding,
      boxShadow,
      transformOrigin,
      transformScale,
      transformRotate,
      transformTranslate,

      fontHeight,
      fontSize,
      letterSpacing,
      fontWeight,

      debugMode,
      debugIntent,

      className,
      children,
      ...rest
    }: GridLayoutProps,
    ref
  ) => {
    const finalIntentState = intentState ?? IntentState.DEFAULT;

    const intentClassName = intentStyleBuilder(finalIntentState, {
      minimal,
      outlined,
      borderFade,
      intentColor: intent,
      forceSharpForeground: intent === undefined,
      forceSharpBackground: !minimal && intent === undefined,
      backgroundOpacity,
      borderOpacity,
    });

    const layoutClassName = layoutStyleBuilder({
      layout: "grid",
      display,
      overflow,
      overscrollBehavior,
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
      gridTemplateColumns,
      gridColumnSpan,
      gridTemplateRows,
      gridRowSpan,
      flexGridGap: gridGap,
      flexGridMainAxisAlignment: gridMainAxisAlignment,
      gridInlineAxisAlignment,
      gridItemInlineAxisAlignment,
      flexGridMultiRowAlignment: gridMultiRowAlignment,
      flexGridCrossAxisAlignment: gridCrossAxisAlignment,
      flexGridItemCrossAxisAlignment,
      leftMargin,
      rightMargin,
      horizontalMargin,
      topMargin,
      bottomMargin,
      verticalMargin,
      customClassName: className,
    });

    const geometryClassName = geometryStyleBuilder({
      fixed,
      fill: fluid,
      width,
      maxWidth,
      minWidth,
      height,
      maxHeight,
      minHeight,
      borderWidth,
      borderRadius,
      horizontalPadding,
      leftPadding,
      rightPadding,
      verticalPadding,
      topPadding,
      bottomPadding,
      boxShadow,
      transformOrigin,
      transformScale,
      transformRotate,
      transformTranslate,
      forceOutline: debugMode,
    });

    const debugIntentClassName = debugIntentStyleBuilder(
      debugMode ?? false,
      debugIntent ?? IntentColor.WARNING
    );

    const typographyClassName =
      !fontSize && !fontWeight && !letterSpacing && !fontHeight
        ? ""
        : typographyStyleBuilder({
            fontSize,
            fontWeight,
            letterSpacing,
            fontHeight,
          });

    return (
      <div
        ref={ref}
        className={`${intentClassName} ${layoutClassName} ${geometryClassName} ${typographyClassName} ${debugIntentClassName}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
