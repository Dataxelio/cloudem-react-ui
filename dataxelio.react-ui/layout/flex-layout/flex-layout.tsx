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
  FlexDirectionType,
  FlexWrapType,
  FlexItemResizingType,
  FlexItemGrowType,
  FlexItemShrinkType,
  FlexGridGapType,
  FlexGridMainAxisAlignmentType,
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
  RingWidthType,
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
  DomElementType,
} from "@dataxelio/react-ui.utils.prop-types";

import {
  intentStyleBuilder,
  debugIntentStyleBuilder,
} from "@dataxelio/react-ui.utils.intent-style-builder";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import {
  typographyStyleBuilder,
  typographyListStyleRemoval,
} from "@dataxelio/react-ui.utils.typography-style-builder";

export interface FlexLayoutProps extends React.HTMLAttributes<HTMLElement> {
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
  flexDirection?: FlexDirectionType;
  flexWrap?: FlexWrapType;
  flexItemResizing?: FlexItemResizingType;
  flexItemGrow?: FlexItemGrowType;
  flexItemShrink?: FlexItemShrinkType;
  flexGap?: FlexGridGapType;
  flexMainAxisAlignment?: FlexGridMainAxisAlignmentType;
  gridItemInlineAxisAlignment?: GridItemInlineAxisAlignmentType;
  flexMultiRowAlignment?: FlexGridMultiRowAlignmentType;
  flexCrossAxisAlignment?: FlexGridCrossAxisAlignmentType;
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
  cross?: boolean;
  width?: WidthType;
  maxWidth?: MaxWidthType;
  minWidth?: MinWidthType;
  height?: HeightType;
  maxHeight?: MaxHeightType;
  minHeight?: MinHeightType;
  borderWidth?: BorderWidthType;
  borderRadius?: BorderRadiusType;
  ringWidth?: RingWidthType;
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

  domElement?: DomElementType;
}

export const FlexLayout = React.forwardRef<HTMLElement, FlexLayoutProps>(
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
      flexDirection,
      flexWrap,
      flexItemResizing,
      flexItemGrow,
      flexItemShrink,
      flexGap,
      flexMainAxisAlignment,
      gridItemInlineAxisAlignment,
      flexMultiRowAlignment,
      flexCrossAxisAlignment,
      flexGridItemCrossAxisAlignment,
      leftMargin,
      rightMargin,
      horizontalMargin,
      topMargin,
      bottomMargin,
      verticalMargin,

      fixed,
      fluid,
      cross,
      width,
      maxWidth,
      minWidth,
      height,
      maxHeight,
      minHeight,
      borderWidth,
      borderRadius,
      ringWidth,
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

      domElement,

      className,
      children,
      ...rest
    }: FlexLayoutProps,
    ref
  ) => {
    const finalDomElement = domElement ?? "div";
    const finalIntentState = intentState ?? IntentState.DEFAULT;

    const intentClassName = intentStyleBuilder(finalIntentState, {
      minimal,
      outlined,
      borderFade,
      ringed,
      ringedFade,
      intentColor: intent,
      forceSharpForeground: intent === undefined,
      forceSharpBackground: !minimal && intent === undefined,
      backgroundOpacity,
      borderOpacity,
    });

    const layoutClassName = layoutStyleBuilder({
      layout: display === "inline" ? "inline-flex" : "flex",
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
      flexDirection,
      flexWrap,
      flexItemResizing,
      flexItemGrow,
      flexItemShrink,
      flexGridGap: flexGap,
      flexGridMainAxisAlignment: flexMainAxisAlignment,
      gridItemInlineAxisAlignment,
      flexGridMultiRowAlignment: flexMultiRowAlignment,
      flexGridCrossAxisAlignment: flexCrossAxisAlignment,
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
      cross,
      width,
      maxWidth,
      minWidth,
      height,
      maxHeight,
      minHeight,
      outlined,
      ringed,
      borderWidth,
      borderRadius,
      ringWidth,
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

    const typographyClassName =
      !fontSize && !fontWeight && !letterSpacing && !fontHeight
        ? ""
        : typographyStyleBuilder({
            fontSize,
            fontWeight,
            letterSpacing,
            fontHeight,
          });

    const typographyListClassName = domElement === "ul" ? typographyListStyleRemoval() : "";

    const debugIntentClassName = debugIntentStyleBuilder(
      debugMode ?? false,
      debugIntent ?? IntentColor.WARNING
    );

    return React.createElement(
      finalDomElement,
      {
        className: `${intentClassName} ${layoutClassName} ${geometryClassName} ${typographyClassName} ${typographyListClassName} ${debugIntentClassName}`,
        ref,
        ...rest,
      },
      children
    );
  }
);
