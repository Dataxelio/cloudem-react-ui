import React from "react";

import {
  OrientationType,
  IntentColor,
  BackgroundOpacityType,
  BorderOpacityType,
  FlexGridGapType,
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
  VerticalPaddingType,
  BoxShadowType,
} from "@dataxelio/react-ui.utils.prop-types";

import { Divider } from "@dataxelio/react-ui.element.divider";
import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";
import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";

export interface PaperProps {
  // Orientation
  orientation?: OrientationType;

  // Header
  headerElement?: React.ReactElement;

  // Intent Style
  minimal?: boolean;
  outlined?: boolean;
  intent?: IntentColor;
  backgroundOpacity?: BackgroundOpacityType;
  borderOpacity?: BorderOpacityType;

  // Layout Style
  gap?: FlexGridGapType;
  leftMargin?: LeftMarginType;
  rightMargin?: RightMarginType;
  horizontalMargin?: HorizontalMarginType;
  topMargin?: TopMarginType;
  bottomMargin?: BottomMarginType;
  verticalMargin?: VerticalMarginType;
  debugMode?: boolean;
  debugIntent?: IntentColor;

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
  verticalPadding?: VerticalPaddingType;
  boxShadow?: BoxShadowType;

  children: React.ReactNode;
}

export const Paper = React.forwardRef<HTMLElement, PaperProps>(
  (
    {
      orientation,

      headerElement,

      minimal,
      outlined,
      intent,
      backgroundOpacity,
      borderOpacity,

      gap,
      leftMargin,
      rightMargin,
      horizontalMargin,
      topMargin,
      bottomMargin,
      verticalMargin,
      debugMode,
      debugIntent,

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
      verticalPadding,
      boxShadow,

      children,
    }: PaperProps,
    ref
  ) => {
    const finalOrientation = orientation ?? "portrait";
    const finalOutlined = outlined ?? true;
    const finalMinimal = minimal ?? !finalOutlined;
    const finalBorderOpacity = borderOpacity ?? "border-opacity-30";
    const finalFluid = fluid ?? true;
    const finalMaxWidth = maxWidth ?? "max-w-md";
    const finalBorderWidth = borderWidth ?? "border";
    const finalBorderRadius = borderRadius ?? "rounded-sm";
    const finalBoxShadow = boxShadow ?? "shadow-sm";
    const finalGap = gap ?? "gap-5";
    const finalHorizontalPadding = horizontalPadding ?? "px-5";
    const finalVerticalPadding = verticalPadding ?? "py-4";

    return (
      <BasicLayout
        ref={ref}
        minimal={finalMinimal}
        outlined={finalOutlined}
        intent={intent}
        backgroundOpacity={backgroundOpacity}
        borderOpacity={finalBorderOpacity}
        leftMargin={leftMargin}
        rightMargin={rightMargin}
        horizontalMargin={horizontalMargin}
        topMargin={topMargin}
        bottomMargin={bottomMargin}
        verticalMargin={verticalMargin}
        fixed={fixed}
        fluid={finalFluid}
        width={width}
        maxWidth={finalMaxWidth}
        minWidth={minWidth}
        height={height}
        maxHeight={maxHeight}
        minHeight={minHeight}
        borderWidth={finalBorderWidth}
        borderRadius={finalBorderRadius}
        boxShadow={finalBoxShadow}
        debugMode={debugMode}
        debugIntent={debugIntent}
      >
        <BasicLayout
          intent={IntentColor.GRAY_LIGHTEST}
          fluid
          horizontalPadding={finalHorizontalPadding}
          verticalPadding={finalVerticalPadding}
          debugMode={debugMode}
          debugIntent={debugIntent}
        >
          {!!headerElement && headerElement}
          {!headerElement && "-"}
        </BasicLayout>
        <Divider orientation="horizontal" opacity={0.3} />
        <FlexLayout
          flexDirection={finalOrientation === "portrait" ? "flex-col" : "flex-row"}
          flexWrap="flex-nowrap"
          flexGap={finalGap}
          flexMainAxisAlignment="justify-center"
          flexCrossAxisAlignment={orientation === "landscape" ? "items-stretch" : "items-center"}
          minimal
          fluid
          horizontalPadding={finalHorizontalPadding}
          verticalPadding={finalVerticalPadding}
          debugMode={debugMode}
          debugIntent={debugIntent}
        >
          {children}
        </FlexLayout>
      </BasicLayout>
    );
  }
);
