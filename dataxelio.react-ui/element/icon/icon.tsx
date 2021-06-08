import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  IntentColor,
  ForegroundOpacityType,
  CursorType,
  IntentState,
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
  TransformOriginType,
  TransformScaleType,
  TransformRotateType,
  TransformTranslateType,
  FontSizeType,
  IconAnimation,
  IconTransform,
  IconStyle,
} from "@dataxelio/react-ui.utils.prop-types";
import { intentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";

export interface IconProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  inheritStyle?: boolean;
  disabled?: boolean;
  invisible?: boolean;
  listItem?: boolean;

  // Intent Style
  minimal?: boolean;
  outlined?: boolean;
  intentColor?: IntentColor;
  opacity?: ForegroundOpacityType;
  disablePointerEvents?: boolean;
  cursor?: CursorType;

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

  // Geometry Style
  transformOrigin?: TransformOriginType;
  transformScale?: TransformScaleType;
  transformRotate?: TransformRotateType;
  transformTranslate?: TransformTranslateType;

  // Typography Style
  fontSize?: FontSizeType;

  // Icon Style
  iName: IconName;
  iAnimation?: IconAnimation;
  iTransform?: IconTransform;
  iStyle?: IconStyle;
}

export const Icon = ({
  inheritStyle,
  disabled,
  invisible,
  listItem,

  minimal,
  outlined,
  intentColor,
  opacity,
  disablePointerEvents,
  cursor,

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

  transformOrigin,
  transformScale,
  transformRotate,
  transformTranslate,

  fontSize,

  iName,
  iAnimation,
  iTransform,
  iStyle,

  className: iClassName,
}: IconProps) => {
  const finalMinimal = minimal ?? true;
  const finalFontSize = fontSize ?? "text-sm";

  const intentClassName = inheritStyle
    ? "text-current"
    : intentStyleBuilder(disabled ? IntentState.DISABLED : IntentState.DEFAULT, {
        intentColor,
        foregroundOpacity: opacity,
        forceSharpForeground: intentColor === undefined,
        forceSharpBackground: intentColor === undefined,
        outlined,
        minimal: finalMinimal,
        disablePointerEvents,
        cursor,
      });

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
    customClassName: iClassName,
  });

  const geometryClassName = geometryStyleBuilder({
    transformOrigin,
    transformScale,
    transformRotate,
    transformTranslate,
  });

  const typographyClassName = inheritStyle
    ? ""
    : typographyStyleBuilder({
        fontSize: finalFontSize,
      });

  return (
    <FontAwesomeIcon
      className={`${intentClassName} ${layoutClassName} ${geometryClassName} ${typographyClassName}`}
      icon={[iStyle ?? "fas", iName]}
      transform={{
        x: (iTransform && iTransform.x) || 0,
        y: (iTransform && iTransform.y) || 0,
        rotate: (iTransform && iTransform.rotate) || 0,
        flipX: (iTransform && iTransform.flipX) || false,
        flipY: (iTransform && iTransform.flipY) || false,
        size: (iTransform && iTransform.size) || 20,
      }}
      spin={iAnimation === "spin"}
      pulse={iAnimation === "pulse"}
      listItem={listItem}
    />
  );
};
