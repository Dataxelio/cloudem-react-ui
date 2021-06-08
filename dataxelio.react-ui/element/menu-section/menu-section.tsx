import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";

import { useMenuSection } from "@react-aria/menu";
import { TreeState } from "@react-stately/tree";
import { Node } from "@react-types/shared";

import {
  MenuItemData,
  IntentColor,
  CursorType,
  ForegroundOpacityType,
  FlexGridGapType,
  TopMarginType,
  VerticalPaddingType,
  LineHeightType,
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
  TextOverflowType,
  WordBreakType,
} from "@dataxelio/react-ui.utils.prop-types";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyListStyleRemoval } from "@dataxelio/react-ui.utils.typography-style-builder";
import { Divider } from "@dataxelio/react-ui.element.divider";
import { Text } from "@dataxelio/react-ui.element.text";
import { MenuItem } from "@dataxelio/react-ui.element.menu-item";

export interface MenuSectionProps {
  // Intent Style
  darkMode: boolean;
  minimal: boolean;
  intent: IntentColor;
  intentAtDefaultState: boolean;
  sectionOpacity: ForegroundOpacityType;
  groupOpacity: ForegroundOpacityType;
  forceLowGrayBackgroundAtHoverState: boolean;
  forceLowBrandBackgroundAtHoverState: boolean;
  cursor: CursorType;

  // Layout Style
  gapBetweenItems: FlexGridGapType;
  marginBetweenItemsAndSection: TopMarginType;
  marginBetweenLeavesAndGroup: TopMarginType;

  // Geometry Style
  verticalItemBackgroundPadding: VerticalPaddingType;

  // Typography Style
  leafFontHeight: LineHeightType;
  leafFontSize: FontSizeType;
  leafFontWeight: FontWeightType;
  leafLetterSpacing: LetterSpacingType;
  groupFontHeight: LineHeightType;
  groupFontSize: FontSizeType;
  groupFontWeight: FontWeightType;
  groupLetterSpacing: LetterSpacingType;
  sectionFontHeight: LineHeightType;
  sectionFontSize: FontSizeType;
  sectionFontWeight: FontWeightType;
  sectionLetterSpacing: LetterSpacingType;
  textOverflow: TextOverflowType;
  wordBreak: WordBreakType;

  // Collection
  section: Node<MenuItemData>;
  state: TreeState<MenuItemData>;

  // Tree
  initialIndent: number;
  selfIndent: number;
  sizePerIndent: number;
  expandedIcon: IconName;
  collapsedIcon: IconName;

  // Action
  onAction?: (key: React.Key) => void;
}

export const MenuSection = ({
  darkMode,
  minimal,
  intent,
  intentAtDefaultState,
  sectionOpacity,
  groupOpacity,
  forceLowGrayBackgroundAtHoverState,
  forceLowBrandBackgroundAtHoverState,
  cursor,

  gapBetweenItems,
  marginBetweenItemsAndSection,
  marginBetweenLeavesAndGroup,

  verticalItemBackgroundPadding,

  leafFontHeight,
  leafFontSize,
  leafFontWeight,
  leafLetterSpacing,
  groupFontHeight,
  groupFontSize,
  groupFontWeight,
  groupLetterSpacing,
  sectionFontHeight,
  sectionFontSize,
  sectionFontWeight,
  sectionLetterSpacing,
  textOverflow,
  wordBreak,

  section,
  state,

  initialIndent,
  selfIndent,
  sizePerIndent,
  expandedIcon,
  collapsedIcon,

  onAction,
}: MenuSectionProps) => {
  const initialLeftPadding = `${initialIndent * sizePerIndent}rem`;

  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  const layoutClassName = layoutStyleBuilder({
    layout: "flex",
    display: "block",
    flexDirection: "flex-col",
    flexGridGap: gapBetweenItems,
    flexGridMainAxisAlignment: "justify-center",
    flexGridCrossAxisAlignment: "items-start",
    topMargin: marginBetweenItemsAndSection,
  });

  const geometryClassName = geometryStyleBuilder({
    fill: true,
  });

  const typographyClassName = typographyListStyleRemoval();

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <Divider domElement="li" orientation="horizontal" darkMode={darkMode} opacity={0.3} />
      )}
      <li className={geometryClassName} {...itemProps}>
        {!!section.rendered && typeof section.rendered === "string" && (
          <div className={geometryClassName} style={{ paddingLeft: initialLeftPadding }}>
            <Text
              tText={section.rendered}
              minimal={true}
              opacity={sectionOpacity}
              fontHeight={sectionFontHeight}
              fontSize={sectionFontSize}
              fontWeight={sectionFontWeight}
              letterSpacing={sectionLetterSpacing}
              textOverflow={textOverflow}
              wordBreak={wordBreak}
              injectedDomProps={headingProps}
            />
          </div>
        )}
        {!!section.rendered && typeof section.rendered !== "string" && section.rendered}
        <ul
          className={`${layoutClassName} ${geometryClassName} ${typographyClassName}`}
          {...groupProps}
        >
          {[...section.childNodes].map(node => (
            <MenuItem
              key={node.key}
              minimal={minimal}
              intent={intent}
              intentAtDefaultState={intentAtDefaultState}
              groupOpacity={groupOpacity}
              forceLowGrayBackgroundAtHoverState={forceLowGrayBackgroundAtHoverState}
              forceLowBrandBackgroundAtHoverState={forceLowBrandBackgroundAtHoverState}
              cursor={cursor}
              gapBetweenItems={gapBetweenItems}
              marginBetweenLeavesAndGroup={marginBetweenLeavesAndGroup}
              verticalItemBackgroundPadding={verticalItemBackgroundPadding}
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
              selfIndent={selfIndent}
              sizePerIndent={sizePerIndent}
              expandedIcon={expandedIcon}
              collapsedIcon={collapsedIcon}
              onAction={onAction}
            />
          ))}
        </ul>
      </li>
    </>
  );
};
