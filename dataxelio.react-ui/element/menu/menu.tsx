import React, { useState, useEffect, useRef, useImperativeHandle } from "react";

import { useMenu, AriaMenuOptions } from "@react-aria/menu";
import { useTreeState, TreeProps } from "@react-stately/tree";
import { TreeNode } from "@react-stately/data";

import { TreeItem, IntentColor, MenuStyleProps } from "@dataxelio/react-ui.utils.prop-types";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyListStyleRemoval } from "@dataxelio/react-ui.utils.typography-style-builder";
import { MenuSection } from "@dataxelio/react-ui.element.menu-section";
import { MenuItem } from "@dataxelio/react-ui.element.menu-item";

export type MenuProps = AriaMenuOptions<TreeNode<TreeItem>> &
  TreeProps<TreeNode<TreeItem>> &
  MenuStyleProps;

export const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
  (
    {
      interactive = true,
      darkMode = false,
      minimal = true,
      intent = IntentColor.BRAND,
      itemIntentAtDefaultState: intentAtDefaultState = false,
      itemApplyIntentOnGroup: applyIntentOnGroup = true,
      sectionOpacity = "text-opacity-100",
      groupOpacity = "text-opacity-100",
      forceItemLowGrayBackgroundAtHoverState: forceLowGrayBackgroundAtHoverState = false,
      forceItemLowBrandBackgroundAtHoverState: forceLowBrandBackgroundAtHoverState = false,
      itemCursor: cursor = interactive ? "cursor-pointer" : "cursor-default",

      gapBetweenItems = "gap-3",
      marginBetweenItemsAndSection = "mt-4",
      marginBetweenLeavesAndGroup = "mt-3",

      fill = true,
      itemBackgroundverticalPadding = forceLowGrayBackgroundAtHoverState ||
      forceLowBrandBackgroundAtHoverState
        ? "py-1"
        : "py-0",

      leafFontHeight = "leading-normal",
      leafFontSize = "text-sm",
      leafFontWeight = "font-normal",
      leafLetterSpacing = "tracking-normal",
      leafUseDarkGrayAsDefaultIntent = true,
      groupFontHeight = "leading-normal",
      groupFontSize = "text-base",
      groupFontWeight = "font-bold",
      groupLetterSpacing = "tracking-normal",
      groupUseDarkGrayAsDefaultIntent = false,
      sectionFontHeight = "leading-normal",
      sectionFontSize = "text-sm",
      sectionFontWeight = "font-semibold",
      sectionLetterSpacing = "tracking-normal",
      itemTextOverflow: textOverflow = "truncate",
      itemWordBreak: wordBreak = "break-normal",

      renderSectionLabel = true,

      itemInitialIndent: initialIndent = 0,
      groupSelfIndent: selfIndent = 4,
      itemSizePerIndent: sizePerIndent = 0.25,
      groupExpandedIcon: expandedIcon = "caret-down",
      groupCollapsedIcon: collapsedIcon = "caret-right",

      itemExpandedIds,
      setItemExpandedIds,

      expandedKeys,
      onExpandedChange,
      onAction,

      ...rest
    }: MenuProps,
    ref
  ) => {
    const innerRef = useRef<HTMLUListElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLUListElement);

    const [expandedIds, setExpandedIds] = useState<Set<React.Key>>(itemExpandedIds ?? new Set([]));

    const state = useTreeState({
      expandedKeys: expandedIds,
      onExpandedChange: lexpandedIds => setExpandedIds(lexpandedIds),
      ...rest,
    });

    const { menuProps } = useMenu({ onAction, ...rest }, state, innerRef);

    const layoutClassName = layoutStyleBuilder({
      layout: "flex",
      display: "block",
      flexDirection: "flex-col",
      flexGridGap: gapBetweenItems,
      flexGridMainAxisAlignment: "justify-center",
      flexGridCrossAxisAlignment: "items-start",
    });

    const geometryClassName = geometryStyleBuilder({ fill });

    const typographyClassName = typographyListStyleRemoval();

    useEffect(() => {
      if (!!expandedIds && !!setItemExpandedIds) {
        // console.log("Menu expanded ids :");
        // console.log(expandedIds);
        setItemExpandedIds(expandedIds);
      }
    }, [expandedIds]);

    return (
      <ul
        ref={innerRef}
        className={`${layoutClassName} ${geometryClassName} ${typographyClassName}`}
        {...menuProps}
      >
        {[...state.collection].map(item => (
          <React.Fragment key={item.key}>
            {item.type === "section" && (
              <MenuSection
                renderLabel={renderSectionLabel}
                interactive={interactive}
                darkMode={darkMode}
                minimal={minimal}
                intent={intent}
                intentAtDefaultState={intentAtDefaultState}
                applyIntentOnGroup={applyIntentOnGroup}
                sectionOpacity={sectionOpacity}
                groupOpacity={groupOpacity}
                forceLowGrayBackgroundAtHoverState={forceLowGrayBackgroundAtHoverState}
                forceLowBrandBackgroundAtHoverState={forceLowBrandBackgroundAtHoverState}
                cursor={cursor}
                gapBetweenItems={gapBetweenItems}
                marginBetweenItemsAndSection={marginBetweenItemsAndSection}
                marginBetweenLeavesAndGroup={marginBetweenLeavesAndGroup}
                itemBackgroundverticalPadding={itemBackgroundverticalPadding}
                leafFontHeight={leafFontHeight}
                leafFontSize={leafFontSize}
                leafFontWeight={leafFontWeight}
                leafLetterSpacing={leafLetterSpacing}
                leafUseDarkGrayAsDefaultIntent={leafUseDarkGrayAsDefaultIntent}
                groupFontHeight={groupFontHeight}
                groupFontSize={groupFontSize}
                groupFontWeight={groupFontWeight}
                groupLetterSpacing={groupLetterSpacing}
                groupUseDarkGrayAsDefaultIntent={groupUseDarkGrayAsDefaultIntent}
                sectionFontHeight={sectionFontHeight}
                sectionFontSize={sectionFontSize}
                sectionFontWeight={sectionFontWeight}
                sectionLetterSpacing={sectionLetterSpacing}
                textOverflow={textOverflow}
                wordBreak={wordBreak}
                section={item}
                state={state}
                initialIndent={initialIndent}
                selfIndent={selfIndent}
                sizePerIndent={sizePerIndent}
                expandedIcon={expandedIcon}
                collapsedIcon={collapsedIcon}
                onAction={onAction}
              />
            )}
            {item.type === "item" && (
              <MenuItem
                interactive={interactive}
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
                leafUseDarkGrayAsDefaultIntent={leafUseDarkGrayAsDefaultIntent}
                groupFontHeight={groupFontHeight}
                groupFontSize={groupFontSize}
                groupFontWeight={groupFontWeight}
                groupLetterSpacing={groupLetterSpacing}
                groupUseDarkGrayAsDefaultIntent={groupUseDarkGrayAsDefaultIntent}
                textOverflow={textOverflow}
                wordBreak={wordBreak}
                item={item}
                state={state}
                initialIndent={initialIndent}
                selfIndent={selfIndent}
                sizePerIndent={sizePerIndent}
                expandedIcon={expandedIcon}
                collapsedIcon={collapsedIcon}
                onAction={onAction}
              />
            )}
          </React.Fragment>
        ))}
      </ul>
    );
  }
);
