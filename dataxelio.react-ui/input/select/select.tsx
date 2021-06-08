import React, { useRef } from "react";
import { AriaSelectOptions, HiddenSelect, useSelect } from "@react-aria/select";
import { OverlayProvider, OverlayContainer, useOverlayPosition } from "@react-aria/overlays";
import { useSelectState } from "@react-stately/select";

import {
  ItemSectionData,
  IntentColor,
  CursorType,
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
  LineHeightType,
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
} from "@dataxelio/react-ui.utils.prop-types";
import { ListBox } from "@dataxelio/react-ui.element.list-box";
import { Popover } from "@dataxelio/react-ui.overlay.popover";

export interface SelectProps extends AriaSelectOptions<ItemSectionData> {
  // Intent Style
  darkMode?: boolean;
  minimal?: boolean;
  intent?: IntentColor;
  intentAtDefaultState?: boolean;
  cursor?: CursorType;
  backgroundOpacity?: BackgroundOpacityType;
  borderOpacity?: BorderOpacityType;

  // Card Layout Style
  contentGap?: FlexGridGapType;
  leftMargin?: LeftMarginType;
  rightMargin?: RightMarginType;
  horizontalMargin?: HorizontalMarginType;
  internalHorizontalMargin?: HorizontalMarginType;
  topMargin?: TopMarginType;
  bottomMargin?: BottomMarginType;
  verticalMargin?: VerticalMarginType;
  internalVerticalMargin?: VerticalMarginType;
  debugMode?: boolean;
  debugIntent?: IntentColor;

  // Card Geometry Style
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

  // Typography Style
  fontHeight?: LineHeightType;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  letterSpacing?: LetterSpacingType;
}

export const Select = React.forwardRef<HTMLElement, SelectProps>(
  (
    {
      darkMode,
      minimal,
      intent,
      intentAtDefaultState,
      cursor,
      backgroundOpacity,
      borderOpacity,

      contentGap,
      leftMargin,
      rightMargin,
      horizontalMargin,
      internalHorizontalMargin,
      topMargin,
      bottomMargin,
      verticalMargin,
      internalVerticalMargin,
      debugMode,
      debugIntent,

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

      fontHeight,
      fontSize,
      fontWeight,
      letterSpacing,

      ...rest
    }: SelectProps,
    ref
  ) => {
    const triggerRef = useRef<HTMLButtonElement>(null);

    const state = useSelectState({ ...rest });
    const {} = useSelect();

    return <Popover isOpen={s}></Popover>;
  }
);
