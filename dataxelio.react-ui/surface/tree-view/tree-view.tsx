import React, { useState, useEffect } from "react";

import { IconName } from "@fortawesome/fontawesome-svg-core";

import { Item, Section } from "@react-stately/collections";
import { useTreeData, TreeNode } from "@react-stately/data";

import {
  ListItem,
  TreeItem,
  VerticalPaddingType,
  IntentColor,
  ForegroundOpacityType,
  CursorType,
  FlexGridGapType,
  TopMarginType,
  LineHeightType,
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
  TextOverflowType,
  WordBreakType,
} from "@dataxelio/react-ui.utils.prop-types";
import { useDisabledMenuItem } from "@dataxelio/react-ui.utils.use-disabled-menu-item";
import { useBuildTree } from "@dataxelio/react-ui.utils.use-build-tree";
import { useSelectedMenuItem } from "@dataxelio/react-ui.utils.use-selected-menu-item";
import { Menu } from "@dataxelio/react-ui.element.menu";

export type TreeViewProps = {
  /**
   * Tells if menu is virtualized
   */
  isVirtualized?: boolean;
  /**
   * Tells where the focus should be set on the menu
   */
  autoFocus?: boolean | "first" | "last";
  /**
   * Tells if focus should wrap on the menu
   */
  shouldFocusWrap?: boolean;
  /**
   * The currently expanded ids
   */
  itemExpandedIds?: Set<React.Key>;
  /**
   * Callback to call when items are expanded or collapsed
   */
  setItemExpandedIds?: (expandedIds: Set<React.Key>) => void;
  /**
   * The selected menu item custom id
   */
  selectedItemCustomId?: string;
  /**
   * The selected menu item label (Priority on custom id)
   */
  selectedItemLabel?: string;
  /**
   * Callback to call when new item is selected
   */
  setSelectedItem?: (selectedItem?: TreeItem) => void;
  /**
   * List of this sidebar menu items.
   */
  items: ListItem[];
  /**
   * listView listBox items version.
   */
  itemsVersion?: number;
  /**
   * Specify if sections are sorted or not
   */
  sortSections?: boolean;
  /**
   * Specify if groups are sorted or not
   */
  sortGroups?: boolean;
  /**
   * Specify if items are sorted or not
   */
  sortItems?: boolean;
  /**
   * Tells if menu is interactive
   */
  interactive?: boolean;
  /**
   * Tells if menu is displayed in dark mode
   */
  darkMode?: boolean;
  /**
   * Tells if menu is displayed in a minimalist way (without background)
   */
  minimal?: boolean;
  /**
   * Intent color used to display the menu
   */
  intent?: IntentColor;
  /**
   * Tells if intent color is active or not at default state
   */
  itemIntentAtDefaultState?: boolean;
  /**
   * Tells if intent color is applied or not to item group
   */
  itemApplyIntentOnGroup?: boolean;
  /**
   * Opacity used to display menu section title
   */
  sectionOpacity?: ForegroundOpacityType;
  /**
   * Opacity used to display menu group title
   */
  groupOpacity?: ForegroundOpacityType;
  /**
   * Force menu items to be displayed with a low gray background at hover state (even if minimal is set)
   */
  forceItemLowGrayBackgroundAtHoverState?: boolean;
  /**
   * Force menu items to be displayed with a low brand background at hover state (even if minimal is set)
   */
  forceItemLowBrandBackgroundAtHoverState?: boolean;
  /**
   * Cursor used for menu items
   */
  itemCursor?: CursorType;
  /**
   * Gap between menu items
   */
  gapBetweenItems?: FlexGridGapType;
  /**
   * Margin between menu items and section
   */
  marginBetweenItemsAndSection?: TopMarginType;
  /**
   * Margin between menu items and parent groups
   */
  marginBetweenItemsAndGroup?: TopMarginType;
  /**
   * Menu item vertical padding
   */
  itemBackgroundverticalPadding?: VerticalPaddingType;
  /**
   * Menu item font height
   */
  itemFontHeight?: LineHeightType;
  /**
   * Menu item font size
   */
  itemFontSize?: FontSizeType;
  /**
   * Menu item font weight
   */
  itemFontWeight?: FontWeightType;
  /**
   * Menu item letter spacing
   */
  itemLetterSpacing?: LetterSpacingType;
  /**
   * Menu item default intent
   */
  itemUseDarkGrayAsDefaultIntent?: boolean;
  /**
   * Menu group font height
   */
  groupFontHeight?: LineHeightType;
  /**
   * Menu group font size
   */
  groupFontSize?: FontSizeType;
  /**
   * Menu group font weight
   */
  groupFontWeight?: FontWeightType;
  /**
   * Menu group letter spacing
   */
  groupLetterSpacing?: LetterSpacingType;
  /**
   * Menu group default intent
   */
  groupUseDarkGrayAsDefaultIntent?: boolean;
  /**
   * Menu section font height
   */
  sectionFontHeight?: LineHeightType;
  /**
   * Menu section font size
   */
  sectionFontSize?: FontSizeType;
  /**
   * Menu section font weight
   */
  sectionFontWeight?: FontWeightType;
  /**
   * Menu section letter spacing
   */
  sectionLetterSpacing?: LetterSpacingType;
  /**
   * Menu item / group / section text overflow
   */
  itemTextOverflow?: TextOverflowType;
  /**
   * Menu item / group / section word break
   */
  itemWordBreak?: WordBreakType;
  /**
   * Tells if label of menu section is rendered
   */
  renderSectionLabel?: boolean;
  /**
   * Menu initial indent
   */
  itemInitialIndent?: number;
  /**
   * Menu group self indent
   */
  groupSelfIndent?: number;
  /**
   * Menu size (in rems) per indent
   */
  itemSizePerIndent?: number;
  /**
   * Menu group expanded icon
   */
  groupExpandedIcon?: IconName;
  /**
   * Menu group collapsed icon
   */
  groupCollapsedIcon?: IconName;
};

export function TreeView({
  isVirtualized,
  autoFocus,
  shouldFocusWrap,
  itemExpandedIds,
  setItemExpandedIds,
  selectedItemCustomId,
  selectedItemLabel,
  setSelectedItem,
  items,
  itemsVersion = 1,
  sortSections = true,
  sortGroups = true,
  sortItems = true,
  interactive,
  darkMode,
  minimal,
  intent,
  itemIntentAtDefaultState,
  itemApplyIntentOnGroup,
  sectionOpacity,
  groupOpacity,
  forceItemLowGrayBackgroundAtHoverState,
  forceItemLowBrandBackgroundAtHoverState,
  itemCursor,
  gapBetweenItems,
  marginBetweenItemsAndSection,
  marginBetweenItemsAndGroup,
  itemBackgroundverticalPadding,
  itemFontHeight,
  itemFontSize,
  itemFontWeight,
  itemLetterSpacing,
  itemUseDarkGrayAsDefaultIntent,
  groupFontHeight,
  groupFontSize,
  groupFontWeight,
  groupLetterSpacing,
  groupUseDarkGrayAsDefaultIntent,
  sectionFontHeight,
  sectionFontSize,
  sectionFontWeight,
  sectionLetterSpacing,
  itemTextOverflow,
  itemWordBreak,
  renderSectionLabel,
  itemInitialIndent,
  groupSelfIndent,
  itemSizePerIndent,
  groupExpandedIcon,
  groupCollapsedIcon,
}: TreeViewProps) {
  const { haveSection, treeItems } = useBuildTree({
    items,
    itemsVersion,
    sortSections,
    sortGroups,
    sortItems,
  });

  const selectedItem = useSelectedMenuItem({
    active: true,
    items: treeItems,
    itemsVersion,
    customId: selectedItemCustomId,
    label: selectedItemLabel,
  });

  const [expandedIds, setExpandedIds] = useState<Set<React.Key> | undefined>(itemExpandedIds);

  const disabledItemIds = useDisabledMenuItem(treeItems, itemsVersion);

  const tree = useTreeData<TreeItem>({
    initialItems: treeItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  });

  const sectionRender = (section: TreeNode<TreeItem>) => (
    <Section key={section.key} title={section.value.label} items={section.children}>
      {item => (
        <Item key={item.key} childItems={item.children}>
          {item.value.label}
        </Item>
      )}
    </Section>
  );

  const itemRender = (item: TreeNode<TreeItem>) => (
    <Item key={item.key} childItems={item.children}>
      {item.value.label}
    </Item>
  );

  // Set selectedKeys when selectedItem changed on parent side
  useEffect(() => {
    if (!!selectedItem && !tree.selectedKeys.has(selectedItem.id)) {
      tree.setSelectedKeys(new Set([selectedItem.id]));
    }
  }, [itemsVersion, selectedItem?.id]);

  // Set selectedItem when selectedKeys changed on child tree or on parent side
  useEffect(() => {
    if (!!setSelectedItem && tree.selectedKeys.size > 0) {
      const curItemKey = tree.selectedKeys.values().next().value as string;
      let curItem: TreeItem | undefined = tree.getItem(curItemKey).value;

      setSelectedItem(curItem);
    }
  }, [itemsVersion, JSON.stringify([...tree.selectedKeys])]);

  useEffect(() => {
    if (!!expandedIds && !!setItemExpandedIds) {
      setItemExpandedIds(expandedIds);
    }
  }, [itemsVersion, expandedIds]);

  return (
    <Menu
      aria-label="tree-view"
      interactive={interactive}
      darkMode={darkMode}
      minimal={minimal}
      intent={intent}
      itemIntentAtDefaultState={itemIntentAtDefaultState}
      itemApplyIntentOnGroup={itemApplyIntentOnGroup}
      sectionOpacity={sectionOpacity}
      groupOpacity={groupOpacity}
      forceItemLowGrayBackgroundAtHoverState={forceItemLowGrayBackgroundAtHoverState}
      forceItemLowBrandBackgroundAtHoverState={forceItemLowBrandBackgroundAtHoverState}
      itemCursor={itemCursor}
      gapBetweenItems={gapBetweenItems}
      marginBetweenItemsAndSection={marginBetweenItemsAndSection}
      marginBetweenLeavesAndGroup={marginBetweenItemsAndGroup}
      itemBackgroundverticalPadding={itemBackgroundverticalPadding}
      leafFontHeight={itemFontHeight}
      leafFontSize={itemFontSize}
      leafFontWeight={itemFontWeight}
      leafLetterSpacing={itemLetterSpacing}
      leafUseDarkGrayAsDefaultIntent={itemUseDarkGrayAsDefaultIntent}
      groupFontHeight={groupFontHeight}
      groupFontSize={groupFontSize}
      groupFontWeight={groupFontWeight}
      groupLetterSpacing={groupLetterSpacing}
      groupUseDarkGrayAsDefaultIntent={groupUseDarkGrayAsDefaultIntent}
      sectionFontHeight={sectionFontHeight}
      sectionFontSize={sectionFontSize}
      sectionFontWeight={sectionFontWeight}
      sectionLetterSpacing={sectionLetterSpacing}
      itemTextOverflow={itemTextOverflow}
      itemWordBreak={itemWordBreak}
      renderSectionLabel={renderSectionLabel}
      itemInitialIndent={itemInitialIndent}
      groupSelfIndent={groupSelfIndent}
      itemSizePerIndent={itemSizePerIndent}
      groupExpandedIcon={groupExpandedIcon}
      groupCollapsedIcon={groupCollapsedIcon}
      isVirtualized={isVirtualized}
      autoFocus={autoFocus}
      shouldFocusWrap={shouldFocusWrap}
      items={tree.items}
      selectedKeys={tree.selectedKeys}
      disabledKeys={disabledItemIds}
      itemExpandedIds={expandedIds}
      setItemExpandedIds={lexpandedIds => setExpandedIds(lexpandedIds)}
      selectionMode="single"
      disallowEmptySelection
      // onAction={onMenuItemAction}
      onSelectionChange={keys => {
        if (keys !== "all") {
          tree.setSelectedKeys(keys);
        }
      }}
    >
      {haveSection ? sectionRender : itemRender}
    </Menu>
  );
}
