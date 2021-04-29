import React, { useState } from "react";

import { useFilter, useOption, useOverlay, useListBox } from "react-aria";
import { useComboBox } from "@react-aria/combobox";
import { useComboBoxState } from "@react-stately/combobox";

import {
  BorderRadiusType,
  BorderWidthType,
  HoverBorderWidthType,
  FocusBorderWidthType,
  BoxShadowType,
  LineHeightType,
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
  IntentColor,
  LeftPaddingType,
  RightPaddingType,
  RingWidthType,
  HoverRingWidthType,
  FocusRingWidthType,
  VerticalPaddingType,
  WidthType,
  HeightType,
  IconTransform,
  DataGridView,
} from "@dataxelio/react-ui.utils.prop-types";

import { stateIntentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";

import { Icon } from "@dataxelio/react-ui.element.icon";

export interface AutoSuggestInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Data Grid View
  dataGridView?: DataGridView;

  // Intent Style
  fill?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  ringed?: boolean;
  ringedFade?: boolean;
  intent?: IntentColor;
  intentAtDefaultState?: boolean;

  // Geometry Style
  width?: WidthType;
  height?: HeightType;
  borderWidth?: BorderWidthType;
  hoverBorderWidth?: HoverBorderWidthType;
  focusBorderWidth?: FocusBorderWidthType;
  borderRadius?: BorderRadiusType;
  ringWidth?: RingWidthType;
  hoverRingWidth?: HoverRingWidthType;
  focusRingWidth?: FocusRingWidthType;
  leftPadding?: LeftPaddingType;
  rightPadding?: RightPaddingType;
  verticalPadding?: VerticalPaddingType;
  boxShadow?: BoxShadowType;

  // Typography Style
  fontHeight?: LineHeightType;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  letterSpacing?: LetterSpacingType;

  // Search & Password Icons
  searchIconTransform?: IconTransform;
  passwordIconTransform?: IconTransform;
}

export const AutoSuggestInput = ({
  dataGridView,

  width,
  height,
  fill,
  minimal,
  outlined,
  ringed,
  ringedFade,
  intent,
  intentAtDefaultState,

  borderWidth,
  hoverBorderWidth,
  focusBorderWidth,
  borderRadius,
  ringWidth,
  hoverRingWidth,
  focusRingWidth,
  leftPadding,
  rightPadding,
  verticalPadding,
  boxShadow,

  fontHeight,
  fontSize,
  letterSpacing,
  fontWeight,

  searchIconTransform,
  passwordIconTransform,

  className: dClassName,
  ...rest
}: AutoSuggestInputProps) => {
  const defaultWidth = width ?? "w-64";
  const defaultMinimal = minimal ?? false;
  const defaultOutlined = outlined ?? true;
  const defaultRinged = ringed ?? true;
  const defaultLeftPadding = leftPadding ?? "pl-7";
  const defaultRightPadding = rightPadding ?? "pr-1";
  const defaultVerticalPadding = verticalPadding ?? "py-1.5";
  const defaultFontSize = fontSize ?? "text-sm";
  const defaultBorderWidth = borderWidth ?? "border";
  const defaultFocusRingWidth = focusRingWidth ?? "focus:ring-1";
  const defaultSearchIconTransform = searchIconTransform ?? { y: 2, size: 14 };

  const [inValue, setInValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  return <></>;
};
