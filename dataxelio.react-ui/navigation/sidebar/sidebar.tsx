import React, { useState, useEffect } from "react";

// import { useRouter } from "next/router";

import { IconName } from "@fortawesome/fontawesome-svg-core";

import { Item, Section } from "@react-stately/collections";
import { useTreeData, TreeNode } from "@react-stately/data";

import {
  ListItem,
  TreeItem,
  WidthType,
  TopPlacementType,
  BottomPlacementType,
  HorizontalPaddingType,
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
import { useBuildTree } from "@dataxelio/react-ui.utils.use-build-tree";
import { useSelectedMenuItem } from "@dataxelio/react-ui.utils.use-selected-menu-item";
import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";
import { Menu } from "@dataxelio/react-ui.element.menu";

export type SidebarProps = {
  /**
   * Layout width
   */
  width?: WidthType;
  /**
   * Layout top placement
   */
  topPlacement?: TopPlacementType;
  /**
   * Layout bottom placement
   */
  bottomPlacement?: BottomPlacementType;
  /**
   * Layout horizontal padding
   */
  horizontalPadding?: HorizontalPaddingType;
  /**
   * Layout vertical padding
   */
  verticalPadding?: VerticalPaddingType;
  /**
   * Layout debug mode
   */
  debugMode?: boolean;
  /**
   * Layout debug mode intent color
   */
  debugIntent?: IntentColor;
  /**
   * Tells if menu is virtualized
   */
  isMenuVirtualized?: boolean;
  /**
   * Tells where the focus should be set on the menu
   */
  menuAutoFocus?: boolean | "first" | "last";
  /**
   * Tells if focus should wrap on the menu
   */
  shouldMenuFocusWrap?: boolean;
  /**
   * The currently expanded ids
   */
  menuItemExpandedIds?: Set<React.Key>;
  /**
   * Callback to call when items are expanded or collapsed
   */
  setMenuItemExpandedIds?: (expandedIds: Set<React.Key>) => void;
  /**
   * The selected menu item custom id
   */
  selectedMenuItemCustomId?: string;
  /**
   * The selected menu item label (Priority on custom id)
   */
  selectedMenuItemLabel?: string;
  /**
   * Callback to call when new item is selected
   */
  setSelectedMenuItem?: (selectedItem?: TreeItem) => void;
  /**
   * List of this sidebar menu items.
   */
  menuItems: ListItem[];
  /**
   * sidebar menu items version.
   */
  menuItemsVersion?: number;
  /**
   * Specify if sections are sorted or not
   */
  menuSortSections?: boolean;
  /**
   * Specify if groups are sorted or not
   */
  menuSortGroups?: boolean;
  /**
   * Specify if items are sorted or not
   */
  menuSortItems?: boolean;
  /**
   * Tells if menu is displayed in dark mode
   */
  menuDarkMode?: boolean;
  /**
   * Tells if menu is displayed in a minimalist way (without background)
   */
  menuMinimal?: boolean;
  /**
   * Intent color used to display the menu
   */
  menuIntent?: IntentColor;
  /**
   * Tells if intent color is active or not at default state
   */
  menuItemIntentAtDefaultState?: boolean;
  /**
   * Tells if intent color is applied or not to item group
   */
  menuItemApplyIntentOnGroup?: boolean;
  /**
   * Opacity used to display menu section title
   */
  menuSectionOpacity?: ForegroundOpacityType;
  /**
   * Opacity used to display menu group title
   */
  menuGroupOpacity?: ForegroundOpacityType;
  /**
   * Force menu items to be displayed with a low gray background at hover state (even if minimal is set)
   */
  menuForceItemLowGrayBackgroundAtHoverState?: boolean;
  /**
   * Force menu items to be displayed with a low brand background at hover state (even if minimal is set)
   */
  menuForceItemLowBrandBackgroundAtHoverState?: boolean;
  /**
   * Cursor used for menu items
   */
  menuItemCursor?: CursorType;
  /**
   * Gap between menu items
   */
  menuGapBetweenItems?: FlexGridGapType;
  /**
   * Margin between menu items and section
   */
  menuMarginBetweenItemsAndSection?: TopMarginType;
  /**
   * Margin between menu items and parent groups
   */
  menuMarginBetweenItemsAndGroup?: TopMarginType;
  /**
   * Menu item vertical padding
   */
  menuItemBackgroundverticalPadding?: VerticalPaddingType;
  /**
   * Menu item font height
   */
  menuItemFontHeight?: LineHeightType;
  /**
   * Menu item font size
   */
  menuItemFontSize?: FontSizeType;
  /**
   * Menu item font weight
   */
  menuItemFontWeight?: FontWeightType;
  /**
   * Menu item letter spacing
   */
  menuItemLetterSpacing?: LetterSpacingType;
  /**
   * Menu item default intent
   */
  menuItemUseDarkGrayAsDefaultIntent?: boolean;
  /**
   * Menu group font height
   */
  menuGroupFontHeight?: LineHeightType;
  /**
   * Menu group font size
   */
  menuGroupFontSize?: FontSizeType;
  /**
   * Menu group font weight
   */
  menuGroupFontWeight?: FontWeightType;
  /**
   * Menu group letter spacing
   */
  menuGroupLetterSpacing?: LetterSpacingType;
  /**
   * Menu group default intent
   */
  menuGroupUseDarkGrayAsDefaultIntent?: boolean;
  /**
   * Menu section font height
   */
  menuSectionFontHeight?: LineHeightType;
  /**
   * Menu section font size
   */
  menuSectionFontSize?: FontSizeType;
  /**
   * Menu section font weight
   */
  menuSectionFontWeight?: FontWeightType;
  /**
   * Menu section letter spacing
   */
  menuSectionLetterSpacing?: LetterSpacingType;
  /**
   * Menu item / group / section text overflow
   */
  menuItemTextOverflow?: TextOverflowType;
  /**
   * Menu item / group / section word break
   */
  menuItemWordBreak?: WordBreakType;
  /**
   * Tells if label of menu section is rendered
   */
  menuRenderSectionLabel?: boolean;
  /**
   * Menu initial indent
   */
  menuItemInitialIndent?: number;
  /**
   * Menu group self indent
   */
  menuGroupSelfIndent?: number;
  /**
   * Menu size (in rems) per indent
   */
  menuItemSizePerIndent?: number;
  /**
   * Menu group expanded icon
   */
  menuGroupExpandedIcon?: IconName;
  /**
   * Menu group collapsed icon
   */
  menuGroupCollapsedIcon?: IconName;
  /**
   * Children to be displayed on top of the menu
   */
  children?: React.ReactNode;
};

export function Sidebar({
  width = "w-60",
  topPlacement = "top-10",
  bottomPlacement = "bottom-0",
  horizontalPadding = "px-4",
  verticalPadding = "py-4",
  debugMode,
  debugIntent,
  isMenuVirtualized,
  menuAutoFocus,
  shouldMenuFocusWrap,
  menuItemExpandedIds,
  setMenuItemExpandedIds,
  selectedMenuItemCustomId,
  selectedMenuItemLabel,
  setSelectedMenuItem,
  menuItems,
  menuItemsVersion = 1,
  menuSortSections = false,
  menuSortGroups = false,
  menuSortItems = false,
  menuDarkMode,
  menuMinimal,
  menuIntent,
  menuItemIntentAtDefaultState,
  menuItemApplyIntentOnGroup = false,
  menuSectionOpacity,
  menuGroupOpacity,
  menuForceItemLowGrayBackgroundAtHoverState,
  menuForceItemLowBrandBackgroundAtHoverState = true,
  menuItemCursor,
  menuGapBetweenItems = "gap-2",
  menuMarginBetweenItemsAndSection,
  menuMarginBetweenItemsAndGroup = "mt-1",
  menuItemBackgroundverticalPadding,
  menuItemFontHeight,
  menuItemFontSize,
  menuItemFontWeight,
  menuItemLetterSpacing,
  menuItemUseDarkGrayAsDefaultIntent,
  menuGroupFontHeight,
  menuGroupFontSize,
  menuGroupFontWeight,
  menuGroupLetterSpacing,
  menuGroupUseDarkGrayAsDefaultIntent,
  menuSectionFontHeight,
  menuSectionFontSize,
  menuSectionFontWeight,
  menuSectionLetterSpacing,
  menuItemTextOverflow = "overflow-clip",
  menuItemWordBreak,
  menuRenderSectionLabel,
  menuItemInitialIndent,
  menuGroupSelfIndent,
  menuItemSizePerIndent,
  menuGroupExpandedIcon,
  menuGroupCollapsedIcon,
  children,
}: SidebarProps) {
  const { haveSection: menuHaveSection, treeItems: menuTreeItems } = useBuildTree({
    items: menuItems,
    itemsVersion: menuItemsVersion,
    sortSections: menuSortSections,
    sortGroups: menuSortGroups,
    sortItems: menuSortItems,
  });

  const selectedMenuItem = useSelectedMenuItem({
    active: true,
    items: menuTreeItems,
    itemsVersion: menuItemsVersion,
    customId: selectedMenuItemCustomId,
    label: selectedMenuItemLabel,
  });

  const [expandedIds, setExpandedIds] = useState<Set<React.Key> | undefined>(menuItemExpandedIds);

  const tree = useTreeData<TreeItem>({
    initialItems: menuTreeItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  });

  const menuSectionRender = (section: TreeNode<TreeItem>) => (
    <Section key={section.key} title={section.value.label} items={section.children}>
      {item => (
        <Item key={item.key} childItems={item.children}>
          {item.value.label}
        </Item>
      )}
    </Section>
  );

  const menuItemRender = (item: TreeNode<TreeItem>) => (
    <Item key={item.key} childItems={item.children}>
      {item.value.label}
    </Item>
  );

  // Set selectedKeys when selectedMenuItem changed on parent side
  useEffect(() => {
    if (!!selectedMenuItem && !tree.selectedKeys.has(selectedMenuItem.id)) {
      tree.setSelectedKeys(new Set([selectedMenuItem.id]));
    }
  }, [menuItemsVersion, selectedMenuItem?.id]);

  // Set selectedMenuItem when selectedKeys changed on child tree or on parent side
  useEffect(() => {
    if (!!setSelectedMenuItem && tree.selectedKeys.size > 0) {
      const curItemKey = tree.selectedKeys.values().next().value as string;
      let curItem: TreeItem | undefined = tree.getItem(curItemKey).value;

      setSelectedMenuItem(curItem);
    }
  }, [menuItemsVersion, JSON.stringify([...tree.selectedKeys])]);

  useEffect(() => {
    if (!!expandedIds && !!setMenuItemExpandedIds) {
      // console.log("Sidebar expanded ids :");
      // console.log(expandedIds);
      setMenuItemExpandedIds(expandedIds);
    }
  }, [menuItemsVersion, expandedIds]);

  return (
    <BasicLayout
      position="fixed"
      overflow="overflow-y-scroll"
      topPlacement={topPlacement}
      bottomPlacement={bottomPlacement}
      width={width}
      horizontalPadding={horizontalPadding}
      verticalPadding={verticalPadding}
      debugMode={debugMode}
      debugIntent={debugIntent}
    >
      {children}
      <Menu
        aria-label="sidebar"
        darkMode={menuDarkMode}
        minimal={menuMinimal}
        intent={menuIntent}
        itemIntentAtDefaultState={menuItemIntentAtDefaultState}
        itemApplyIntentOnGroup={menuItemApplyIntentOnGroup}
        sectionOpacity={menuSectionOpacity}
        groupOpacity={menuGroupOpacity}
        forceItemLowGrayBackgroundAtHoverState={menuForceItemLowGrayBackgroundAtHoverState}
        forceItemLowBrandBackgroundAtHoverState={menuForceItemLowBrandBackgroundAtHoverState}
        itemCursor={menuItemCursor}
        gapBetweenItems={menuGapBetweenItems}
        marginBetweenItemsAndSection={menuMarginBetweenItemsAndSection}
        marginBetweenLeavesAndGroup={menuMarginBetweenItemsAndGroup}
        itemBackgroundverticalPadding={menuItemBackgroundverticalPadding}
        leafFontHeight={menuItemFontHeight}
        leafFontSize={menuItemFontSize}
        leafFontWeight={menuItemFontWeight}
        leafLetterSpacing={menuItemLetterSpacing}
        leafUseDarkGrayAsDefaultIntent={menuItemUseDarkGrayAsDefaultIntent}
        groupFontHeight={menuGroupFontHeight}
        groupFontSize={menuGroupFontSize}
        groupFontWeight={menuGroupFontWeight}
        groupLetterSpacing={menuGroupLetterSpacing}
        groupUseDarkGrayAsDefaultIntent={menuGroupUseDarkGrayAsDefaultIntent}
        sectionFontHeight={menuSectionFontHeight}
        sectionFontSize={menuSectionFontSize}
        sectionFontWeight={menuSectionFontWeight}
        sectionLetterSpacing={menuSectionLetterSpacing}
        itemTextOverflow={menuItemTextOverflow}
        itemWordBreak={menuItemWordBreak}
        renderSectionLabel={menuRenderSectionLabel}
        itemInitialIndent={menuItemInitialIndent}
        groupSelfIndent={menuGroupSelfIndent}
        itemSizePerIndent={menuItemSizePerIndent}
        groupExpandedIcon={menuGroupExpandedIcon}
        groupCollapsedIcon={menuGroupCollapsedIcon}
        isVirtualized={isMenuVirtualized}
        autoFocus={menuAutoFocus}
        shouldFocusWrap={shouldMenuFocusWrap}
        items={tree.items}
        selectedKeys={tree.selectedKeys}
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
        {menuHaveSection ? menuSectionRender : menuItemRender}
      </Menu>
    </BasicLayout>
  );
}
