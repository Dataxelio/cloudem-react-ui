import React, { useRef } from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";

import { useHover, usePress } from "@react-aria/interactions";
import { useFocusRing } from "@react-aria/focus";
import { useMenuItem } from "@react-aria/menu";
import { mergeProps } from "@react-aria/utils";
import { TreeState } from "@react-stately/tree";
import { TreeNode } from "@react-stately/data";
import { Node } from "@react-types/shared";

import {
  TreeItem,
  IntentState,
  IntentColor,
  ForegroundOpacityType,
  CursorType,
  FlexGridGapType,
  TopMarginType,
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
import {
  typographyStyleBuilder,
  typographyListStyleRemoval,
} from "@dataxelio/react-ui.utils.typography-style-builder";
import { Icon } from "@dataxelio/react-ui.element.icon";
import { Text } from "@dataxelio/react-ui.element.text";

export interface MenuItemProps {
  // Intent Style
  minimal: boolean;
  intent: IntentColor;
  intentAtDefaultState: boolean;
  applyIntentOnGroup: boolean;
  groupOpacity: ForegroundOpacityType;
  forceLowGrayBackgroundAtHoverState: boolean;
  forceLowBrandBackgroundAtHoverState: boolean;
  cursor: CursorType;

  // Layout Style
  gapBetweenItems: FlexGridGapType;
  marginBetweenLeavesAndGroup: TopMarginType;

  // Geometry Style
  itemBackgroundverticalPadding: VerticalPaddingType;

  // Typography Style
  leafFontHeight: LineHeightType;
  leafFontSize: FontSizeType;
  leafFontWeight: FontWeightType;
  leafLetterSpacing: LetterSpacingType;
  groupFontHeight: LineHeightType;
  groupFontSize: FontSizeType;
  groupFontWeight: FontWeightType;
  groupLetterSpacing: LetterSpacingType;
  textOverflow: TextOverflowType;
  wordBreak: WordBreakType;

  // Collection
  item: Node<TreeNode<TreeItem>>;
  state: TreeState<TreeNode<TreeItem>>;

  // Tree
  initialIndent: number;
  parentIndent?: number;
  selfIndent: number;
  sizePerIndent: number;
  expandedIcon: IconName;
  collapsedIcon: IconName;

  // Action
  onAction?: (key: React.Key) => void;
}

export const MenuItem = ({
  minimal,
  intent,
  intentAtDefaultState,
  applyIntentOnGroup,
  groupOpacity,
  forceLowGrayBackgroundAtHoverState,
  forceLowBrandBackgroundAtHoverState,
  cursor,

  gapBetweenItems,
  marginBetweenLeavesAndGroup,

  itemBackgroundverticalPadding,

  leafFontHeight,
  leafFontSize,
  leafFontWeight,
  leafLetterSpacing,
  groupFontHeight,
  groupFontSize,
  groupFontWeight,
  groupLetterSpacing,
  textOverflow,
  wordBreak,

  item,
  state,

  initialIndent,
  parentIndent = initialIndent,
  selfIndent,
  sizePerIndent,
  expandedIcon,
  collapsedIcon,

  onAction,
}: MenuItemProps) => {
  const isDisabled = state.disabledKeys.has(item.key);
  const isSelected = state.selectionManager.isSelected(item.key);
  const isGroup = item.hasChildNodes && !!item.value?.value?.children;
  const isExpanded = isGroup && state.expandedKeys.has(item.key);
  const containerLeftPadding = `${parentIndent * sizePerIndent}rem`;
  const containerRightPadding = `${initialIndent * sizePerIndent}rem`;
  const leftPadding = isGroup ? `${selfIndent * sizePerIndent}rem` : undefined;

  const {
    leftIcon,
    leftIconTransform,
    leftIconStyle,
    rightIcon,
    rightIconTransform,
    rightIconStyle,
  } = item.value?.value ?? {};

  const innerRef = useRef<HTMLDivElement>(null);

  const { isHovered, hoverProps } = useHover({ isDisabled });
  const { isFocusVisible, focusProps } = useFocusRing({
    autoFocus: false,
    isTextInput: false,
  });

  const { pressProps } = usePress({
    isDisabled,
    onPress: () => state.toggleKey(item.key),
  });

  const { menuItemProps } = useMenuItem(
    { key: item.key, isDisabled, isSelected, onAction },
    state,
    innerRef
  );

  const intentState = isDisabled
    ? IntentState.DISABLED
    : isGroup && !applyIntentOnGroup
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
    useDarkGrayAsDefaultIntent: true,
    minimal,
    forceLowGrayBackgroundAtHoverState: forceLowGrayBackgroundAtHoverState && isHovered,
    forceLowBrandBackgroundAtHoverState: forceLowBrandBackgroundAtHoverState && isHovered,
    intentAtDefaultState,
    foregroundOpacity: isGroup ? groupOpacity : "text-opacity-100",
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
    fontSize: isGroup ? groupFontSize : leafFontSize,
    fontWeight: isGroup ? groupFontWeight : isSelected ? "font-bold" : leafFontWeight,
    letterSpacing: isGroup ? groupLetterSpacing : leafLetterSpacing,
    fontHeight: isGroup ? groupFontHeight : leafFontHeight,
  });

  let groupLayoutClassName = "";
  let groupGeometryClassName = "";
  let groupTypographyClassName = "";

  if (isExpanded) {
    groupLayoutClassName = layoutStyleBuilder({
      layout: "flex",
      display: "block",
      flexDirection: "flex-col",
      flexGridGap: gapBetweenItems,
      flexGridMainAxisAlignment: "justify-center",
      flexGridCrossAxisAlignment: "items-start",
      topMargin: marginBetweenLeavesAndGroup,
    });

    groupGeometryClassName = geometryStyleBuilder({ fill: true });

    groupTypographyClassName = typographyListStyleRemoval();
  }

  // React.useEffect(() => {
  //   console.log(`Item with key ${item.key} has level = ${item.level}`);
  // });

  return (
    <li className={fillGeometryClassName}>
      <div
        ref={innerRef}
        className={`${intentClassName} ${geometryClassName} ${typographyClassName}`}
        style={{ paddingLeft: containerLeftPadding, paddingRight: containerRightPadding }}
        {...mergeProps(menuItemProps, focusProps, hoverProps, pressProps)}
      >
        <div
          className={`${layoutClassName} ${fillGeometryClassName}`}
          style={{ paddingLeft: leftPadding }}
        >
          {isGroup && (
            <Icon
              position="absolute"
              leftPlacement="left-0"
              topPlacement="top-0"
              bottomPlacement="bottom-0"
              verticalMargin="my-auto"
              iName={isExpanded ? expandedIcon : collapsedIcon}
              inheritStyle
            />
          )}
          {leftIcon && (
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
          {rightIcon && (
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
      {isExpanded && (
        <ul
          className={`${groupLayoutClassName} ${groupGeometryClassName} ${groupTypographyClassName}`}
        >
          {[...item.childNodes].map(node => (
            <MenuItem
              key={node.key}
              minimal={minimal}
              intent={intent}
              intentAtDefaultState={intentAtDefaultState}
              applyIntentOnGroup={applyIntentOnGroup}
              groupOpacity={groupOpacity}
              forceLowGrayBackgroundAtHoverState={forceLowGrayBackgroundAtHoverState}
              forceLowBrandBackgroundAtHoverState={forceLowBrandBackgroundAtHoverState}
              cursor={cursor}
              gapBetweenItems={gapBetweenItems}
              marginBetweenLeavesAndGroup={marginBetweenLeavesAndGroup}
              itemBackgroundverticalPadding={itemBackgroundverticalPadding}
              leafFontHeight={leafFontHeight}
              leafFontSize={leafFontSize}
              leafFontWeight={leafFontWeight}
              leafLetterSpacing={leafLetterSpacing}
              groupFontHeight={groupFontHeight}
              groupFontSize={groupFontSize}
              groupFontWeight={groupFontWeight}
              groupLetterSpacing={groupLetterSpacing}
              textOverflow={textOverflow}
              wordBreak={wordBreak}
              item={node}
              state={state}
              initialIndent={initialIndent}
              parentIndent={parentIndent + selfIndent}
              selfIndent={selfIndent}
              sizePerIndent={sizePerIndent}
              expandedIcon={expandedIcon}
              collapsedIcon={collapsedIcon}
              onAction={onAction}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
