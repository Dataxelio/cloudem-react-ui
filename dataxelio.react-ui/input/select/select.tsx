import React, { useState, useEffect } from "react";

import { IconName } from "@fortawesome/fontawesome-svg-core";

import { Node } from "@react-types/shared";
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

export interface SelectProps extends ButtonTriggerStyleProps {
  defaultButtonText: string;
  label: string;
  labelInline?: boolean;
  helperText?: string;
  helperTextIntent?: IntentColor;
  labelFontSize?: FontSizeType;
  labelFontWeight?: FontWeightType;
  labelLetterSpacing?: LetterSpacingType;
  labelFontHeight?: LineHeightType;
  gapBetweenLabelAndButton?: FlexGridGapType;

  onFocus?: () => void;
  onBlur?: () => void;

  isDisabled?: boolean;
  listBoxItems: ListItem[];
  listBoxItemsVersion?: number;
  listBoxFilter?: (nodes: Iterable<Node<TreeItem>>) => Node<TreeItem>[];
  listBoxSortSections?: boolean;
  listBoxSortItems?: boolean;
  openedIcon?: IconName;
  closedIcon?: IconName;

  // Popover Trigger
  syncButtonWithSelectedItem?: boolean;
  onPopoverOpenChange?: (isOpen: boolean) => void;
  popoverPlacement?: Placement;
  popoverOffset?: number;
  popoverWithArrow?: boolean;
  popoverArrowSize?: number;
  isListBoxVirtualized?: boolean;
  listBoxAutoFocus?: boolean | "first" | "last";
  shouldListBoxFocusWrap?: boolean;
  selectedListBoxItemCustomId?: string;
  selectedListBoxItemLabel?: string;
  setSelectedListBoxItem?: (selectedItem?: TreeItem) => void;

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

  // ListBox
  listBoxDarkMode?: boolean;
  listBoxMinimal?: boolean;
  listBoxIntent?: IntentColor;
  listBoxItemIntentAtDefaultState?: boolean;
  listBoxSectionOpacity?: ForegroundOpacityType;
  listBoxForceItemLowGrayBackgroundAtHoverState?: boolean;
  listBoxForceItemLowBrandBackgroundAtHoverState?: boolean;
  listBoxItemCursor?: CursorType;
  listBoxGapBetweenItems?: FlexGridGapType;
  listBoxMarginBetweenItemsAndSection?: TopMarginType;
  listBoxItemBackgroundverticalPadding?: VerticalPaddingType;
  listBoxItemFontHeight?: LineHeightType;
  listBoxItemFontSize?: FontSizeType;
  listBoxItemFontWeight?: FontWeightType;
  listBoxItemLetterSpacing?: LetterSpacingType;
  listBoxItemUseDarkGrayAsDefaultIntent?: boolean;
  listBoxSectionFontHeight?: LineHeightType;
  listBoxSectionFontSize?: FontSizeType;
  listBoxSectionFontWeight?: FontWeightType;
  listBoxSectionLetterSpacing?: LetterSpacingType;
  listBoxItemTextOverflow?: TextOverflowType;
  listBoxItemWordBreak?: WordBreakType;
  listBoxRenderSectionLabel?: boolean;
  listBoxItemInitialIndent?: number;
  listBoxItemSizePerIndent?: number;
}

export const Select = ({
  defaultButtonText,
  label,
  labelInline = false,
  helperText,
  helperTextIntent,
  labelFontSize = "text-sm",
  labelFontWeight = "font-normal",
  labelLetterSpacing = "tracking-normal",
  labelFontHeight = "leading-none",
  gapBetweenLabelAndButton = "gap-1",

  onFocus,
  onBlur,

  isDisabled,
  listBoxItems,
  listBoxItemsVersion = 1,
  listBoxFilter,
  listBoxSortSections = true,
  listBoxSortItems = true,
  openedIcon = "caret-up",
  closedIcon = "caret-down",

  width = "w-auto",
  horizontalPadding = "px-4",
  verticalPadding = "py-1.5",
  fontSize = "text-sm",
  fontWeight = "font-normal",

  syncButtonWithSelectedItem = true,
  onPopoverOpenChange,
  popoverPlacement = "bottom start",
  popoverOffset,
  popoverWithArrow,
  popoverArrowSize,
  isListBoxVirtualized,
  listBoxAutoFocus,
  shouldListBoxFocusWrap,
  selectedListBoxItemCustomId,
  selectedListBoxItemLabel,
  setSelectedListBoxItem,

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

  listBoxDarkMode,
  listBoxMinimal,
  listBoxIntent,
  listBoxItemIntentAtDefaultState,
  listBoxSectionOpacity,
  listBoxForceItemLowGrayBackgroundAtHoverState,
  listBoxForceItemLowBrandBackgroundAtHoverState,
  listBoxItemCursor,
  listBoxGapBetweenItems,
  listBoxMarginBetweenItemsAndSection,
  listBoxItemBackgroundverticalPadding,
  listBoxItemFontHeight,
  listBoxItemFontSize,
  listBoxItemFontWeight,
  listBoxItemLetterSpacing,
  listBoxItemUseDarkGrayAsDefaultIntent,
  listBoxSectionFontHeight,
  listBoxSectionFontSize,
  listBoxSectionFontWeight,
  listBoxSectionLetterSpacing,
  listBoxItemTextOverflow,
  listBoxItemWordBreak,
  listBoxRenderSectionLabel,
  listBoxItemInitialIndent,
  listBoxItemSizePerIndent,

  ...rest
}: SelectProps) => {
  const { haveSection: listBoxHaveSection, treeItems: listBoxTreeItems } = useBuildTree({
    items: listBoxItems,
    itemsVersion: listBoxItemsVersion,
    sortSections: listBoxSortSections,
    sortGroups: true,
    sortItems: listBoxSortItems,
  });

  const selectedListBoxItem = useSelectedMenuItem({
    active: true,
    items: listBoxTreeItems,
    itemsVersion: listBoxItemsVersion,
    customId: selectedListBoxItemCustomId,
    label: selectedListBoxItemLabel,
  });

  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  const [internalSelectedListBoxItem, setInternalSelectedListBoxItem] = useState<
    TreeItem | undefined
  >(undefined);

  useEffect(() => {
    if (!!internalSelectedListBoxItem && !!setSelectedListBoxItem) {
      setSelectedListBoxItem(internalSelectedListBoxItem);
    }
  }, [listBoxItemsVersion, internalSelectedListBoxItem?.id]);

  return (
    <PopoverTrigger
      parentIsASelect={true}
      parentFilter={listBoxFilter}
      parentLabel={label}
      parentLabelInline={labelInline}
      parentHelperText={helperText}
      parentHelperTextIntent={helperTextIntent}
      parentLabelFontSize={labelFontSize}
      parentLabelFontWeight={labelFontWeight}
      parentLabelLetterSpacing={labelLetterSpacing}
      parentLabelFontHeight={labelFontHeight}
      parentGapBetweenLabelAndButton={gapBetweenLabelAndButton}
      isDisabled={isDisabled}
      isOpen={popoverOpen}
      onClose={() => setPopoverOpen(false)}
      darkMode={listBoxDarkMode}
      minimal={listBoxMinimal}
      intent={listBoxIntent}
      backgroundOpacity={popoverBackgroundOpacity}
      borderOpacity={popoverBorderOpacity}
      itemIntentAtDefaultState={listBoxItemIntentAtDefaultState}
      sectionOpacity={listBoxSectionOpacity}
      forceItemLowGrayBackgroundAtHoverState={listBoxForceItemLowGrayBackgroundAtHoverState}
      forceItemLowBrandBackgroundAtHoverState={listBoxForceItemLowBrandBackgroundAtHoverState}
      itemCursor={listBoxItemCursor}
      internalVerticalMargin={popoverInternalVerticalMargin}
      debugMode={popoverDebugMode}
      debugIntent={popoverDebugIntent}
      width={popoverWidth ?? width}
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
      gapBetweenItems={listBoxGapBetweenItems}
      marginBetweenItemsAndSection={listBoxMarginBetweenItemsAndSection}
      itemBackgroundverticalPadding={listBoxItemBackgroundverticalPadding}
      leafFontHeight={listBoxItemFontHeight}
      leafFontSize={listBoxItemFontSize}
      leafFontWeight={listBoxItemFontWeight}
      leafLetterSpacing={listBoxItemLetterSpacing}
      leafUseDarkGrayAsDefaultIntent={listBoxItemUseDarkGrayAsDefaultIntent}
      sectionFontHeight={listBoxSectionFontHeight}
      sectionFontSize={listBoxSectionFontSize}
      sectionFontWeight={listBoxSectionFontWeight}
      sectionLetterSpacing={listBoxSectionLetterSpacing}
      itemTextOverflow={listBoxItemTextOverflow}
      itemWordBreak={listBoxItemWordBreak}
      renderSectionLabel={listBoxRenderSectionLabel}
      itemInitialIndent={listBoxItemInitialIndent}
      itemSizePerIndent={listBoxItemSizePerIndent}
      syncTriggerLabelWithSelectedItem={syncButtonWithSelectedItem}
      type="listbox"
      onOpenChange={onPopoverOpenChange}
      placement={popoverPlacement}
      offset={popoverOffset}
      withArrow={popoverWithArrow}
      arrowSize={popoverArrowSize}
      listBoxHaveSection={listBoxHaveSection}
      isListBoxVirtualized={isListBoxVirtualized}
      listBoxAutoFocus={listBoxAutoFocus}
      shouldListBoxFocusWrap={shouldListBoxFocusWrap}
      listBoxItems={listBoxTreeItems}
      listBoxItemsVersion={listBoxItemsVersion}
      selectedListBoxItem={selectedListBoxItem ?? internalSelectedListBoxItem}
      setSelectedListBoxItem={selectedItem => {
        setInternalSelectedListBoxItem(selectedItem);
        setPopoverOpen(false);
      }}
    >
      <Button
        isDisabled={isDisabled}
        width={width}
        horizontalPadding={horizontalPadding}
        verticalPadding={verticalPadding}
        fontSize={fontSize}
        fontWeight={fontWeight}
        rightIcon={popoverOpen ? openedIcon : closedIcon}
        onPress={() => setPopoverOpen(!popoverOpen)}
        onFocus={() => !!onFocus && onFocus()}
        onBlur={() => !!onBlur && onBlur()}
        {...rest}
      >
        {defaultButtonText}
      </Button>
    </PopoverTrigger>
  );
};
