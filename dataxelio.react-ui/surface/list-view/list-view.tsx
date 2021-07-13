import React, { useEffect } from "react";

import { Item, Section } from "@react-stately/collections";
import { useListData } from "@react-stately/data";
import { Node } from "@react-types/shared";

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
import { ListBox } from "@dataxelio/react-ui.element.list-box";

export type ListViewProps = {
  /**
   * Tells if listBox is virtualized
   */
  isVirtualized?: boolean;
  /**
   * Tells where the focus should be set on the listBox
   */
  autoFocus?: boolean | "first" | "last";
  /**
   * Tells if focus should wrap on the listBox
   */
  shouldFocusWrap?: boolean;
  /**
   * The selected listBox item custom id
   */
  selectedItemCustomId?: string;
  /**
   * The selected listBox item label (Priority on custom id)
   */
  selectedItemLabel?: string;
  /**
   * Callback to call when new item is selected
   */
  setSelectedItem?: (selectedItem?: TreeItem) => void;
  /**
   * List of this listView listBox items.
   */
  items: ListItem[];
  /**
   * listView listBox items version.
   */
  itemsVersion?: number;
  /**
   * Filter to apply to this listBox items
   */
  filter?: (nodes: Iterable<Node<TreeItem>>) => Node<TreeItem>[];
  /**
   * Specify if sections are sorted or not
   */
  sortSections?: boolean;
  /**
   * Specify if items are sorted or not
   */
  sortItems?: boolean;
  /**
   * Tells if listBox is interactive
   */
  interactive?: boolean;
  /**
   * Tells if listBox is displayed in dark mode
   */
  darkMode?: boolean;
  /**
   * Tells if listBox is displayed in a minimalist way (without background)
   */
  minimal?: boolean;
  /**
   * Intent color used to display the listBox
   */
  intent?: IntentColor;
  /**
   * Tells if intent color is active or not at default state
   */
  itemIntentAtDefaultState?: boolean;
  /**
   * Opacity used to display listBox section title
   */
  sectionOpacity?: ForegroundOpacityType;
  /**
   * Force listBox items to be displayed with a low gray background at hover state (even if minimal is set)
   */
  forceItemLowGrayBackgroundAtHoverState?: boolean;
  /**
   * Force listBox items to be displayed with a low brand background at hover state (even if minimal is set)
   */
  forceItemLowBrandBackgroundAtHoverState?: boolean;
  /**
   * Cursor used for listBox items
   */
  itemCursor?: CursorType;
  /**
   * Gap between listBox items
   */
  gapBetweenItems?: FlexGridGapType;
  /**
   * Margin between listBox items and section
   */
  marginBetweenItemsAndSection?: TopMarginType;
  /**
   * ListBox item vertical padding
   */
  itemBackgroundverticalPadding?: VerticalPaddingType;
  /**
   * ListBox item font height
   */
  itemFontHeight?: LineHeightType;
  /**
   * ListBox item font size
   */
  itemFontSize?: FontSizeType;
  /**
   * ListBox item font weight
   */
  itemFontWeight?: FontWeightType;
  /**
   * ListBox item letter spacing
   */
  itemLetterSpacing?: LetterSpacingType;
  /**
   * ListBox item default intent
   */
  itemUseDarkGrayAsDefaultIntent?: boolean;
  /**
   * ListBox section font height
   */
  sectionFontHeight?: LineHeightType;
  /**
   * ListBox section font size
   */
  sectionFontSize?: FontSizeType;
  /**
   * ListBox section font weight
   */
  sectionFontWeight?: FontWeightType;
  /**
   * ListBox section letter spacing
   */
  sectionLetterSpacing?: LetterSpacingType;
  /**
   * ListBox item / group / section text overflow
   */
  itemTextOverflow?: TextOverflowType;
  /**
   * ListBox item / group / section word break
   */
  itemWordBreak?: WordBreakType;
  /**
   * Tells if label of listBox section is rendered
   */
  renderSectionLabel?: boolean;
  /**
   * ListBox initial indent
   */
  itemInitialIndent?: number;
  /**
   * ListBox size (in rems) per indent
   */
  itemSizePerIndent?: number;
};

export function ListView({
  isVirtualized,
  autoFocus,
  shouldFocusWrap,
  selectedItemCustomId,
  selectedItemLabel,
  setSelectedItem,
  items,
  itemsVersion = 1,
  filter,
  sortSections = true,
  sortItems = true,
  interactive,
  darkMode,
  minimal,
  intent,
  itemIntentAtDefaultState,
  sectionOpacity,
  forceItemLowGrayBackgroundAtHoverState,
  forceItemLowBrandBackgroundAtHoverState,
  itemCursor,
  gapBetweenItems,
  marginBetweenItemsAndSection,
  itemBackgroundverticalPadding,
  itemFontHeight,
  itemFontSize,
  itemFontWeight,
  itemLetterSpacing,
  itemUseDarkGrayAsDefaultIntent,
  sectionFontHeight,
  sectionFontSize,
  sectionFontWeight,
  sectionLetterSpacing,
  itemTextOverflow,
  itemWordBreak,
  renderSectionLabel,
  itemInitialIndent,
  itemSizePerIndent,
}: ListViewProps) {
  const { haveSection, treeItems } = useBuildTree({
    items,
    itemsVersion,
    sortSections,
    sortGroups: true,
    sortItems,
  });

  const selectedItem = useSelectedMenuItem({
    active: true,
    items: treeItems,
    itemsVersion,
    customId: selectedItemCustomId,
    label: selectedItemLabel,
  });

  const disabledItemIds = useDisabledMenuItem(treeItems, itemsVersion);

  const list = useListData<TreeItem>({
    initialItems: treeItems,
    getKey: item => item.id,
  });

  const sectionRender = (section: TreeItem) => (
    <Section key={section.id} title={section.label} items={section.children}>
      {item => <Item key={item.id}>{item.label}</Item>}
    </Section>
  );

  const itemRender = (item: TreeItem) => <Item key={item.id}>{item.label}</Item>;

  // Set selectedKeys when selectedItem changed on parent side
  useEffect(() => {
    if (!!selectedItem && list.selectedKeys !== "all" && !list.selectedKeys.has(selectedItem.id)) {
      list.setSelectedKeys(new Set([selectedItem.id]));
    }
  }, [itemsVersion, selectedItem?.id]);

  // Set selectedItem when selectedKeys changed on child listbox or on parent side
  useEffect(() => {
    if (!!setSelectedItem && list.selectedKeys !== "all" && list.selectedKeys.size > 0) {
      const curItemKey = list.selectedKeys.values().next().value as string;
      let curItem: TreeItem | undefined = list.getItem(curItemKey);

      // Probably a section so go find items into section children
      if (!curItem && !!curItemKey && curItemKey.length > 1) {
        const curSectionKey = curItemKey.substring(0, 1);
        const curSection = list.getItem(curSectionKey);

        if (!!curSection && !!curSection.children) {
          curItem = curSection.children.find(item => item.id === curItemKey);
        }
      }

      setSelectedItem(curItem);
    }
  }, [itemsVersion, JSON.stringify([...list.selectedKeys])]);

  return (
    <ListBox
      aria-label="list-view"
      interactive={interactive}
      darkMode={darkMode}
      minimal={minimal}
      intent={intent}
      itemIntentAtDefaultState={itemIntentAtDefaultState}
      sectionOpacity={sectionOpacity}
      forceItemLowGrayBackgroundAtHoverState={forceItemLowGrayBackgroundAtHoverState}
      forceItemLowBrandBackgroundAtHoverState={forceItemLowBrandBackgroundAtHoverState}
      itemCursor={itemCursor}
      gapBetweenItems={gapBetweenItems}
      marginBetweenItemsAndSection={marginBetweenItemsAndSection}
      itemBackgroundverticalPadding={itemBackgroundverticalPadding}
      leafFontHeight={itemFontHeight}
      leafFontSize={itemFontSize}
      leafFontWeight={itemFontWeight}
      leafLetterSpacing={itemLetterSpacing}
      leafUseDarkGrayAsDefaultIntent={itemUseDarkGrayAsDefaultIntent}
      sectionFontHeight={sectionFontHeight}
      sectionFontSize={sectionFontSize}
      sectionFontWeight={sectionFontWeight}
      sectionLetterSpacing={sectionLetterSpacing}
      itemTextOverflow={itemTextOverflow}
      itemWordBreak={itemWordBreak}
      renderSectionLabel={renderSectionLabel}
      itemInitialIndent={itemInitialIndent}
      itemSizePerIndent={itemSizePerIndent}
      isVirtualized={isVirtualized}
      autoFocus={autoFocus}
      shouldFocusWrap={shouldFocusWrap}
      items={list.items}
      filter={filter}
      selectedKeys={list.selectedKeys}
      disabledKeys={disabledItemIds}
      selectionMode="single"
      disallowEmptySelection
      onSelectionChange={keys => {
        list.setSelectedKeys(keys);
      }}
    >
      {haveSection ? sectionRender : itemRender}
    </ListBox>
  );
}
