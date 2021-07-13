import React, { useRef } from "react";

import { useHover } from "@react-aria/interactions";
import { useFocusRing } from "@react-aria/focus";
import { useOption } from "@react-aria/listbox";
import { mergeProps } from "@react-aria/utils";
import { ListState } from "@react-stately/list";
import { Node } from "@react-types/shared";

import {
  TreeItem,
  IntentState,
  IntentColor,
  CursorType,
  LineHeightType,
  VerticalPaddingType,
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
  TextOverflowType,
  WordBreakType,
} from "@dataxelio/react-ui.utils.prop-types";
import { intentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";
import { Icon } from "@dataxelio/react-ui.element.icon";
import { Text } from "@dataxelio/react-ui.element.text";

export interface ListBoxItemProps {
  // Intent Style
  interactive: boolean;
  minimal: boolean;
  intent: IntentColor;
  intentAtDefaultState: boolean;
  forceLowGrayBackgroundAtHoverState: boolean;
  forceLowBrandBackgroundAtHoverState: boolean;
  cursor: CursorType;

  // Geometry Style
  itemBackgroundverticalPadding: VerticalPaddingType;

  // Typography Style
  leafFontHeight: LineHeightType;
  leafFontSize: FontSizeType;
  leafFontWeight: FontWeightType;
  leafLetterSpacing: LetterSpacingType;
  leafUseDarkGrayAsDefaultIntent: boolean;
  textOverflow: TextOverflowType;
  wordBreak: WordBreakType;

  // Collection
  item: Node<TreeItem>;
  state: ListState<TreeItem>;

  // List
  initialIndent: number;
  sizePerIndent: number;
}

export const ListBoxItem = ({
  interactive,
  minimal,
  intent,
  intentAtDefaultState,
  forceLowGrayBackgroundAtHoverState,
  forceLowBrandBackgroundAtHoverState,
  cursor,

  itemBackgroundverticalPadding,

  leafFontHeight,
  leafFontSize,
  leafFontWeight,
  leafLetterSpacing,
  leafUseDarkGrayAsDefaultIntent,
  textOverflow,
  wordBreak,

  item,
  state,

  initialIndent,
  sizePerIndent,
}: ListBoxItemProps) => {
  const isDisabled = state.disabledKeys.has(item.key);
  const isSelected = state.selectionManager.isSelected(item.key);
  const containerLeftPadding = `${initialIndent * sizePerIndent}rem`;
  const containerRightPadding = `${initialIndent * sizePerIndent}rem`;

  const {
    leftIcon,
    leftIconTransform,
    leftIconStyle,
    rightIcon,
    rightIconTransform,
    rightIconStyle,
  } = item.value ?? {};

  const innerRef = useRef<HTMLDivElement>(null);

  const { isHovered, hoverProps } = useHover({ isDisabled });
  const { isFocusVisible, focusProps } = useFocusRing({
    autoFocus: false,
    isTextInput: false,
  });

  const { optionProps } = useOption({ key: item.key, isDisabled, isSelected }, state, innerRef);

  const intentState = isDisabled
    ? IntentState.DISABLED
    : !interactive
    ? IntentState.DEFAULT
    : isSelected
    ? IntentState.PRESSED
    : isHovered
    ? IntentState.HOVER
    : isFocusVisible
    ? IntentState.FOCUS
    : IntentState.DEFAULT;

  const intentClassName = intentStyleBuilder(intentState, {
    intentColor: intent,
    useDarkGrayAsDefaultIntent: leafUseDarkGrayAsDefaultIntent,
    minimal,
    forceLowGrayBackgroundAtHoverState:
      interactive && forceLowGrayBackgroundAtHoverState && isHovered,
    forceLowBrandBackgroundAtHoverState:
      interactive && forceLowBrandBackgroundAtHoverState && isHovered,
    intentAtDefaultState,
    cursor,
    removeDefaultBrowserAppearance: true,
  });

  // const containerIntentClassName = defaultAppearanceRemovalIntentStyleBuilder();

  const layoutClassName = layoutStyleBuilder({
    layout: "flex",
    display: "block",
    position: "relative",
    flexDirection: "flex-row",
    flexGridMainAxisAlignment: "justify-start",
    flexGridCrossAxisAlignment: "items-center",
    flexGridGap: "gap-2",
  });

  const geometryClassName = geometryStyleBuilder({
    fill: true,
    verticalPadding: itemBackgroundverticalPadding,
    borderRadius: "rounded-sm",
  });

  const fillGeometryClassName = geometryStyleBuilder({
    fill: true,
  });

  const typographyClassName = typographyStyleBuilder({
    fontSize: leafFontSize,
    fontWeight: interactive && isSelected ? "font-bold" : leafFontWeight,
    letterSpacing: leafLetterSpacing,
    fontHeight: leafFontHeight,
  });

  // React.useEffect(() => {
  //   console.log(`Item with key ${item.key} has level = ${item.level}`);
  // });

  return (
    <li className={fillGeometryClassName}>
      <div
        ref={innerRef}
        className={`${intentClassName} ${geometryClassName} ${typographyClassName}`}
        style={{ paddingLeft: containerLeftPadding, paddingRight: containerRightPadding }}
        {...mergeProps(optionProps, focusProps, hoverProps)}
      >
        <div className={`${layoutClassName} ${fillGeometryClassName}`}>
          {!!leftIcon && (
            <Icon
              flexItemResizing="flex-none"
              iName={leftIcon}
              inheritStyle
              iTransform={leftIconTransform}
              iStyle={leftIconStyle}
            />
          )}
          {typeof item.rendered === "string" && (
            <Text
              tText={item.rendered}
              textOverflow={textOverflow}
              wordBreak={wordBreak}
              inheritStyle
            />
          )}
          {typeof item.rendered !== "string" && item.rendered}
          {!!rightIcon && (
            <Icon
              flexItemResizing="flex-none"
              leftMargin="ml-auto"
              iName={rightIcon}
              inheritStyle
              iTransform={rightIconTransform}
              iStyle={rightIconStyle}
            />
          )}
        </div>
      </div>
    </li>
  );
};
