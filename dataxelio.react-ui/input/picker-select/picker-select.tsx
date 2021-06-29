import React, { useState, useEffect } from "react";

import { IconName } from "@fortawesome/fontawesome-svg-core";

import { Placement } from "@react-types/overlays";

import {
  ListItem,
  TreeItem,
  BackgroundOpacityType,
  BorderOpacityType,
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
  VerticalMarginType,
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
  ButtonTriggerStyleProps,
} from "@dataxelio/react-ui.utils.prop-types";

import { useBuildTree } from "@dataxelio/react-ui.utils.use-build-tree";
import { useSelectedMenuItem } from "@dataxelio/react-ui.utils.use-selected-menu-item";
import { Button } from "@dataxelio/react-ui.input.button";
import { PopoverTrigger } from "@dataxelio/react-ui.overlay.popover-trigger";

export interface PickerSelectProps extends ButtonTriggerStyleProps {
  label: string;
  isDisabled?: boolean;
  menuItems: ListItem[];
  menuSortSections?: boolean;
  menuSortGroups?: boolean;
  menuSortItems?: boolean;
  openedIcon?: IconName;
  closedIcon?: IconName;

  // Popover Trigger
  onPopoverOpenChange?: (isOpen: boolean) => void;
  popoverPlacement?: Placement;
  popoverOffset?: number;
  popoverWithArrow?: boolean;
  popoverArrowSize?: number;
  isMenuVirtualized?: boolean;
  menuAutoFocus?: boolean | "first" | "last";
  shouldMenuFocusWrap?: boolean;
  defaultSelectedMenuItemLabel?: string;
  selectedMenuItem?: TreeItem;
  setSelectedMenuItem?: (selectedItem?: TreeItem) => void;

  // Popover
  popoverBackgroundOpacity?: BackgroundOpacityType;
  popoverBorderOpacity?: BorderOpacityType;
  popoverWidth?: WidthType;
  popoverMaxWidth?: MaxWidthType;
  popoverMinWidth?: MinWidthType;
  popoverHeight?: HeightType;
  popoverMaxHeight?: MaxHeightType;
  popoverMinHeight?: MinHeightType;
  popoverBorderWidth?: BorderWidthType;
  popoverBorderRadius?: BorderRadiusType;
  popoverHorizontalPadding?: HorizontalPaddingType;
  popoverVerticalPadding?: VerticalPaddingType;
  popoverBoxShadow?: BoxShadowType;
  popoverInternalVerticalMargin?: VerticalMarginType;
  popoverDebugMode?: boolean;
  popoverDebugIntent?: IntentColor;

  // Menu
  menuDarkMode?: boolean;
  menuMinimal?: boolean;
  menuIntent?: IntentColor;
  menuItemIntentAtDefaultState?: boolean;
  menuSectionOpacity?: ForegroundOpacityType;
  menuForceItemLowGrayBackgroundAtHoverState?: boolean;
  menuForceItemLowBrandBackgroundAtHoverState?: boolean;
  menuItemCursor?: CursorType;
  menuGapBetweenItems?: FlexGridGapType;
  menuMarginBetweenItemsAndSection?: TopMarginType;
  menuItemBackgroundverticalPadding?: VerticalPaddingType;
  menuItemFontHeight?: LineHeightType;
  menuItemFontSize?: FontSizeType;
  menuItemFontWeight?: FontWeightType;
  menuItemLetterSpacing?: LetterSpacingType;
  menuItemUseDarkGrayAsDefaultIntent?: boolean;
  menuSectionFontHeight?: LineHeightType;
  menuSectionFontSize?: FontSizeType;
  menuSectionFontWeight?: FontWeightType;
  menuSectionLetterSpacing?: LetterSpacingType;
  menuItemTextOverflow?: TextOverflowType;
  menuItemWordBreak?: WordBreakType;
  menuRenderSectionLabel?: boolean;
  menuItemInitialIndent?: number;
  menuItemSizePerIndent?: number;
}

export const PickerSelect = ({
  label,
  isDisabled,
  menuItems,
  menuSortSections = true,
  menuSortGroups = true,
  menuSortItems = true,
  openedIcon = "caret-up",
  closedIcon = "caret-down",

  // width = "w-40",
  horizontalPadding = "px-4",
  verticalPadding = "py-1.5",
  fontSize = "text-sm",
  fontWeight = "font-semibold",

  onPopoverOpenChange,
  popoverPlacement = "bottom start",
  popoverOffset,
  popoverWithArrow,
  popoverArrowSize,
  isMenuVirtualized,
  menuAutoFocus,
  shouldMenuFocusWrap,
  defaultSelectedMenuItemLabel,
  selectedMenuItem,
  setSelectedMenuItem,

  popoverBackgroundOpacity,
  popoverBorderOpacity,
  popoverWidth,
  popoverMaxWidth = "max-w-xs",
  popoverMinWidth,
  popoverHeight,
  popoverMaxHeight,
  popoverMinHeight,
  popoverBorderWidth,
  popoverBorderRadius,
  popoverHorizontalPadding,
  popoverVerticalPadding,
  popoverBoxShadow,
  popoverInternalVerticalMargin,
  popoverDebugMode,
  popoverDebugIntent,

  menuDarkMode,
  menuMinimal,
  menuIntent,
  menuItemIntentAtDefaultState,
  menuSectionOpacity,
  menuForceItemLowGrayBackgroundAtHoverState,
  menuForceItemLowBrandBackgroundAtHoverState,
  menuItemCursor,
  menuGapBetweenItems,
  menuMarginBetweenItemsAndSection,
  menuItemBackgroundverticalPadding,
  menuItemFontHeight,
  menuItemFontSize,
  menuItemFontWeight,
  menuItemLetterSpacing,
  menuItemUseDarkGrayAsDefaultIntent,
  menuSectionFontHeight,
  menuSectionFontSize,
  menuSectionFontWeight,
  menuSectionLetterSpacing,
  menuItemTextOverflow,
  menuItemWordBreak,
  menuRenderSectionLabel,
  menuItemInitialIndent,
  menuItemSizePerIndent,

  ...rest
}: PickerSelectProps) => {
  const { haveSection: menuHaveSection, treeItems: menuTreeItems } = useBuildTree({
    items: menuItems,
    sortSections: menuSortSections,
    sortGroups: menuSortGroups,
    sortItems: menuSortItems,
  });

  const defaultSelectedMenuItem = useSelectedMenuItem({
    active: true,
    items: menuTreeItems,
    label: defaultSelectedMenuItemLabel,
  });

  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<TreeItem | undefined>(
    selectedMenuItem ?? defaultSelectedMenuItem
  );

  useEffect(() => {
    if (!!selectedItem && !!setSelectedMenuItem) {
      setSelectedMenuItem(selectedItem);
    }
  }, [menuItems, selectedItem?.id]);

  return (
    <PopoverTrigger
      aria-label={label}
      isDisabled={isDisabled}
      isOpen={popoverOpen}
      onClose={() => setPopoverOpen(false)}
      darkMode={menuDarkMode}
      minimal={menuMinimal}
      intent={menuIntent}
      backgroundOpacity={popoverBackgroundOpacity}
      borderOpacity={popoverBorderOpacity}
      itemIntentAtDefaultState={menuItemIntentAtDefaultState}
      sectionOpacity={menuSectionOpacity}
      forceItemLowGrayBackgroundAtHoverState={menuForceItemLowGrayBackgroundAtHoverState}
      forceItemLowBrandBackgroundAtHoverState={menuForceItemLowBrandBackgroundAtHoverState}
      itemCursor={menuItemCursor}
      internalVerticalMargin={popoverInternalVerticalMargin}
      debugMode={popoverDebugMode}
      debugIntent={popoverDebugIntent}
      width={popoverWidth}
      maxWidth={popoverMaxWidth}
      minWidth={popoverMinWidth}
      height={popoverHeight}
      maxHeight={popoverMaxHeight}
      minHeight={popoverMinHeight}
      borderWidth={popoverBorderWidth}
      borderRadius={popoverBorderRadius}
      horizontalPadding={popoverHorizontalPadding}
      verticalPadding={popoverVerticalPadding}
      boxShadow={popoverBoxShadow}
      gapBetweenItems={menuGapBetweenItems}
      marginBetweenItemsAndSection={menuMarginBetweenItemsAndSection}
      itemBackgroundverticalPadding={menuItemBackgroundverticalPadding}
      leafFontHeight={menuItemFontHeight}
      leafFontSize={menuItemFontSize}
      leafFontWeight={menuItemFontWeight}
      leafLetterSpacing={menuItemLetterSpacing}
      leafUseDarkGrayAsDefaultIntent={menuItemUseDarkGrayAsDefaultIntent}
      sectionFontHeight={menuSectionFontHeight}
      sectionFontSize={menuSectionFontSize}
      sectionFontWeight={menuSectionFontWeight}
      sectionLetterSpacing={menuSectionLetterSpacing}
      itemTextOverflow={menuItemTextOverflow}
      itemWordBreak={menuItemWordBreak}
      renderSectionLabel={menuRenderSectionLabel}
      itemInitialIndent={menuItemInitialIndent}
      itemSizePerIndent={menuItemSizePerIndent}
      syncTriggerLabelWithSelectedItem={true}
      type="listbox"
      onOpenChange={onPopoverOpenChange}
      placement={popoverPlacement}
      offset={popoverOffset}
      withArrow={popoverWithArrow}
      arrowSize={popoverArrowSize}
      menuHaveSection={menuHaveSection}
      isMenuVirtualized={isMenuVirtualized}
      menuAutoFocus={menuAutoFocus}
      shouldMenuFocusWrap={shouldMenuFocusWrap}
      menuInitialItems={menuTreeItems}
      menuInitialSelectedItemId={!!defaultSelectedMenuItem ? defaultSelectedMenuItem.id : undefined}
      onMenuItemAction={() => setPopoverOpen(false)}
      selectedMenuItem={selectedItem}
      setSelectedMenuItem={selectedItem => setSelectedItem(selectedItem)}
    >
      <Button
        isDisabled={isDisabled}
        // width={width}
        horizontalPadding={horizontalPadding}
        verticalPadding={verticalPadding}
        fontSize={fontSize}
        fontWeight={fontWeight}
        rightIcon={popoverOpen ? openedIcon : closedIcon}
        onPress={() => setPopoverOpen(!popoverOpen)}
        {...rest}
      >
        {label}
      </Button>
    </PopoverTrigger>
  );
};
