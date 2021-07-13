import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated, config } from "@react-spring/web";

import { useOverlayTriggerState } from "@react-stately/overlays";
import {
  OverlayProvider,
  OverlayContainer,
  useOverlayTrigger,
  useOverlayPosition,
  OverlayProps,
  ModalOptions,
} from "@react-aria/overlays";
import { useIsSSR } from "@react-aria/ssr";
import { FocusScopeProps } from "@react-aria/focus";
import { Item, Section } from "@react-stately/collections";
import { useListData, useTreeData, TreeNode } from "@react-stately/data";
import { useSelect, HiddenSelect } from "@react-aria/select";
import { useSelectState } from "@react-stately/select";

import {
  PopoverStyleProps,
  CardStyleProps,
  MenuStyleProps,
  PopoverTriggerStyleProps,
  TreeItem,
} from "@dataxelio/react-ui.utils.prop-types";

import { ButtonProps } from "@dataxelio/react-ui.input.button";
import { Popover } from "@dataxelio/react-ui.overlay.popover";
import { Menu } from "@dataxelio/react-ui.element.menu";
import { ListBox } from "@dataxelio/react-ui.element.list-box";
import { useDisabledMenuItem } from "@dataxelio/react-ui.utils.use-disabled-menu-item";
import { Content } from "@dataxelio/react-ui.element.content";
import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";
import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";
import { Text } from "@dataxelio/react-ui.element.text";

export type PopoverTriggerProps = OverlayProps &
  ModalOptions &
  FocusScopeProps &
  PopoverStyleProps &
  CardStyleProps &
  MenuStyleProps &
  PopoverTriggerStyleProps;

export const PopoverTrigger = ({
  isDisabled,

  isOpen,
  isDismissable = true,
  shouldCloseOnBlur = true,
  isKeyboardDismissDisabled = false,
  onClose,
  shouldCloseOnInteractOutside,

  contain = true,
  restoreFocus = true,
  autoFocus = true,

  isModal = false,
  preventScroll = false,

  headerOrientation,
  headerAlignment,
  contentTextOrientation,
  contentTextAlignment,
  contentOrientation,
  contentAlignment,
  footerOrientation,
  footerAlignment,

  dividerAfterHeader,
  dividerAfterContentText,
  dividerAfterContent,

  minimal,
  outlined,
  intent,
  backgroundOpacity,
  borderOpacity = "border-opacity-40",

  darkMode,
  itemIntentAtDefaultState,
  itemApplyIntentOnGroup,
  sectionOpacity,
  groupOpacity,
  forceItemLowGrayBackgroundAtHoverState,
  forceItemLowBrandBackgroundAtHoverState,
  itemCursor,

  headerGap,
  contentTextGap,
  contentGap,
  footerGap,
  overflow = "overflow-y-auto",
  leftMargin,
  rightMargin,
  horizontalMargin,
  internalHorizontalMargin,
  topMargin,
  bottomMargin,
  verticalMargin,
  internalVerticalMargin,
  footerInternalTopMargin,
  footerInternalBottomMargin,
  debugMode,
  debugIntent,

  fill = false,
  fixed,
  fluid = false,
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  borderWidth,
  borderRadius = "rounded-sm",
  horizontalPadding = forceItemLowGrayBackgroundAtHoverState ||
  forceItemLowBrandBackgroundAtHoverState
    ? "px-0"
    : undefined,
  verticalPadding,
  boxShadow = "shadow-md",

  asForm,
  onSubmit,

  gapBetweenItems,
  marginBetweenItemsAndSection,
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
  sectionFontHeight,
  sectionFontSize,
  sectionFontWeight,
  sectionLetterSpacing,
  itemTextOverflow,
  itemWordBreak,

  renderSectionLabel,

  itemInitialIndent = forceItemLowGrayBackgroundAtHoverState ||
  forceItemLowBrandBackgroundAtHoverState
    ? 4
    : undefined,
  groupSelfIndent,
  itemSizePerIndent,
  groupExpandedIcon,
  groupCollapsedIcon,

  syncTriggerLabelWithSelectedItem = false,
  type,
  onOpenChange,
  placement,
  withArrow,
  offset = withArrow ? 10 : undefined,
  arrowSize = offset,

  menuHaveSection,
  isMenuVirtualized,
  menuAutoFocus,
  shouldMenuFocusWrap,
  menuItems = [],
  menuItemsVersion = 1,
  menuItemExpandedIds,
  setMenuItemExpandedIds,
  selectedMenuItem,
  setSelectedMenuItem,
  onMenuItemAction,

  listBoxHaveSection,
  isListBoxVirtualized,
  listBoxAutoFocus,
  shouldListBoxFocusWrap,
  listBoxItems = [],
  listBoxItemsVersion = 1,
  selectedListBoxItem,
  setSelectedListBoxItem,

  customDialogContent,
  customDialogFooter,

  parentIsASelect = false,
  parentFilter,
  parentLabel,
  parentLabelInline,
  parentHelperText,
  parentHelperTextIntent,
  parentLabelFontSize,
  parentLabelFontWeight,
  parentLabelLetterSpacing,
  parentLabelFontHeight,
  parentGapBetweenLabelAndButton,

  children,
  ...rest
}: PopoverTriggerProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLElement>(null);

  const [expandedIds, setExpandedIds] = useState<Set<React.Key> | undefined>(menuItemExpandedIds);

  const isSSR = useIsSSR();

  const state = useOverlayTriggerState({
    isOpen,
    onOpenChange,
  });

  const { triggerProps, overlayProps } = useOverlayTrigger({ type }, state, triggerRef);

  const {
    overlayProps: overlayPositionProps,
    arrowProps,
    placement: finalPlacement,
  } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef: popoverRef,
    placement,
    offset,
  });

  const disabledListBoxItemIds = useDisabledMenuItem(listBoxItems, listBoxItemsVersion);

  const list = useListData<TreeItem>({
    initialItems: listBoxItems,
    getKey: item => item.id,
  });

  const listBoxSectionRender = (section: TreeItem) => (
    <Section key={section.id} title={section.label} items={section.children}>
      {item => <Item key={item.id}>{item.label}</Item>}
    </Section>
  );

  const listBoxItemRender = (item: TreeItem) => <Item key={item.id}>{item.label}</Item>;

  const selectState = useSelectState({
    children: listBoxHaveSection ? listBoxSectionRender : listBoxItemRender,
    items: list.items,
    label: parentLabel ?? "defaultLabel",
    disallowEmptySelection: true,
    selectedKey: selectedListBoxItem?.id ?? "",
    onSelectionChange: selectedItemKey => {
      list.setSelectedKeys(new Set([selectedItemKey]));
    },
  });

  const { labelProps, valueProps } = useSelect(
    {
      children: listBoxHaveSection ? listBoxSectionRender : listBoxItemRender,
      items: list.items,
      label: parentLabel ?? "defaultLabel",
      disallowEmptySelection: true,
      selectedKey: selectedListBoxItem?.id ?? "",
      onSelectionChange: selectedItemKey => {
        list.setSelectedKeys(new Set([selectedItemKey]));
      },
    },
    selectState,
    triggerRef
  );

  const disabledMenuItemIds = useDisabledMenuItem(menuItems, menuItemsVersion);

  const tree = useTreeData<TreeItem>({
    initialItems: menuItems,
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

  // Set list selectedKeys when selectedListBoxItem changed on parent side
  useEffect(() => {
    if (
      !!selectedListBoxItem &&
      list.selectedKeys !== "all" &&
      !list.selectedKeys.has(selectedListBoxItem.id)
    ) {
      list.setSelectedKeys(new Set([selectedListBoxItem.id]));
    }
  }, [listBoxItemsVersion, selectedListBoxItem?.id]);

  // Set selectedListBoxItem when list selectedKeys changed on child listbox or on parent side
  useEffect(() => {
    if (!!setSelectedListBoxItem && list.selectedKeys !== "all" && list.selectedKeys.size > 0) {
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

      setSelectedListBoxItem(curItem);
    }
  }, [listBoxItemsVersion, JSON.stringify([...list.selectedKeys])]);

  // Set tree selectedKeys when selectedMenuItem changed on parent side
  useEffect(() => {
    if (!!selectedMenuItem && !tree.selectedKeys.has(selectedMenuItem.id)) {
      tree.setSelectedKeys(new Set([selectedMenuItem.id]));
    }
  }, [menuItemsVersion, selectedMenuItem?.id]);

  // Set selectedMenuItem when tree selectedKeys changed on child menu or on parent side
  useEffect(() => {
    if (!!setSelectedMenuItem && tree.selectedKeys.size > 0) {
      const curItemKey = tree.selectedKeys.values().next().value as string;
      let curItem: TreeItem | undefined = tree.getItem(curItemKey).value;

      setSelectedMenuItem(curItem);
    }
  }, [menuItemsVersion, JSON.stringify([...tree.selectedKeys])]);

  useEffect(() => {
    if (!!expandedIds && !!setMenuItemExpandedIds) {
      setMenuItemExpandedIds(expandedIds);
    }
  }, [menuItemsVersion, expandedIds]);

  // useEffect(() => {
  //   console.log(`Trigger Client Width = ${triggerRef.current?.clientWidth}`);
  //   console.log(`Trigger Offset Width = ${triggerRef.current?.offsetWidth}`);
  // }, [triggerRef.current?.clientWidth]);

  const transitions = useTransition(state.isOpen, {
    from: { transform: "scale(0.95)", opacity: 0 },
    enter: { transform: "scale(1.0)", opacity: 1 },
    leave: { transform: "scale(0.95)", opacity: 0 },
    reverse: state.isOpen,
    delay: 10,
    config: config.stiff,
  });

  const AnimatedPopover = animated(Popover);

  return (
    <>
      {!isSSR && (
        <OverlayProvider>
          <FlexLayout
            minimal={true}
            display="inline"
            flexDirection={parentLabelInline ? "flex-row" : "flex-col"}
            flexWrap="flex-nowrap"
            flexMainAxisAlignment={parentLabelInline ? "justify-start" : "justify-center"}
            flexCrossAxisAlignment={parentLabelInline ? "items-center" : "items-start"}
            flexGap={parentGapBetweenLabelAndButton}
          >
            {!!parentLabel && (
              <BasicLayout
                domElement="label"
                flexItemResizing="flex-none"
                minimal={true}
                fontSize={parentLabelFontSize}
                fontWeight={parentLabelFontWeight}
                letterSpacing={parentLabelLetterSpacing}
                fontHeight={parentLabelFontHeight}
                {...labelProps}
              >
                {parentLabel}
              </BasicLayout>
            )}
            {parentIsASelect && (
              <HiddenSelect state={selectState} triggerRef={triggerRef} label={parentLabel} />
            )}
            {React.isValidElement<ButtonProps & { ref: React.ForwardedRef<HTMLButtonElement> }>(
              children
            ) &&
              React.cloneElement(children, {
                ref: triggerRef,
                textDomProps: parentIsASelect ? valueProps : undefined,
                ...triggerProps,
                ...(syncTriggerLabelWithSelectedItem && !!selectedMenuItem
                  ? { text: selectedMenuItem.label }
                  : {}),
                ...(syncTriggerLabelWithSelectedItem && !!selectedListBoxItem
                  ? { text: selectedListBoxItem.label }
                  : {}),
              })}
            {!!parentHelperText && (
              <Text
                flexItemResizing="flex-none"
                tText={parentHelperText}
                fontSize="text-xs"
                intentColor={parentHelperTextIntent}
              />
            )}
          </FlexLayout>
          {transitions(
            (styles, item) =>
              item && (
                <OverlayContainer className={darkMode ? "dark" : undefined}>
                  <AnimatedPopover
                    style={{ transform: styles.transform, opacity: styles.opacity }}
                    ref={popoverRef}
                    isOpen
                    isDismissable
                    shouldCloseOnBlur={shouldCloseOnBlur}
                    isKeyboardDismissDisabled={false}
                    onClose={onClose}
                    shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
                    contain={contain}
                    restoreFocus={restoreFocus}
                    autoFocus={autoFocus}
                    isModal={isModal}
                    preventScroll={preventScroll}
                    headerOrientation={headerOrientation}
                    headerAlignment={headerAlignment}
                    contentTextOrientation={contentTextOrientation}
                    contentTextAlignment={contentTextAlignment}
                    contentOrientation={contentOrientation}
                    contentAlignment={contentAlignment}
                    footerOrientation={footerOrientation}
                    footerAlignment={footerAlignment}
                    dividerAfterHeader={dividerAfterHeader}
                    dividerAfterContentText={dividerAfterContentText}
                    dividerAfterContent={dividerAfterContent}
                    minimal={minimal}
                    outlined={outlined}
                    intent={intent}
                    backgroundOpacity={backgroundOpacity}
                    borderOpacity={borderOpacity}
                    headerGap={headerGap}
                    contentTextGap={contentTextGap}
                    contentGap={contentGap}
                    footerGap={footerGap}
                    overflow={overflow}
                    leftMargin={leftMargin}
                    rightMargin={rightMargin}
                    horizontalMargin={horizontalMargin}
                    internalHorizontalMargin={internalHorizontalMargin}
                    topMargin={topMargin}
                    bottomMargin={bottomMargin}
                    verticalMargin={verticalMargin}
                    internalVerticalMargin={internalVerticalMargin}
                    footerInternalTopMargin={footerInternalTopMargin}
                    footerInternalBottomMargin={footerInternalBottomMargin}
                    debugMode={debugMode}
                    debugIntent={debugIntent}
                    fixed={fixed}
                    fluid={fill || fluid}
                    width={width}
                    maxWidth={maxWidth}
                    minWidth={minWidth}
                    height={height}
                    maxHeight={maxHeight}
                    minHeight={minHeight}
                    borderWidth={borderWidth}
                    borderRadius={borderRadius}
                    horizontalPadding={horizontalPadding}
                    verticalPadding={verticalPadding}
                    boxShadow={boxShadow}
                    asForm={asForm}
                    onSubmit={onSubmit}
                    overlayPrimaryDomProps={overlayProps}
                    overlayPositionDomProps={overlayPositionProps}
                    overlayPlacementAxis={finalPlacement}
                    withArrow={withArrow}
                    arrowSize={arrowSize}
                    arrowPositionDomProps={arrowProps}
                  >
                    {type !== "dialog" && (
                      <Content>
                        {parentIsASelect && (
                          <ListBox
                            aria-label={parentLabel}
                            darkMode={darkMode}
                            minimal={minimal}
                            intent={intent}
                            itemIntentAtDefaultState={itemIntentAtDefaultState}
                            sectionOpacity={sectionOpacity}
                            forceItemLowGrayBackgroundAtHoverState={
                              forceItemLowGrayBackgroundAtHoverState
                            }
                            forceItemLowBrandBackgroundAtHoverState={
                              forceItemLowBrandBackgroundAtHoverState
                            }
                            itemCursor={itemCursor}
                            gapBetweenItems={gapBetweenItems}
                            marginBetweenItemsAndSection={marginBetweenItemsAndSection}
                            itemBackgroundverticalPadding={itemBackgroundverticalPadding}
                            leafFontHeight={leafFontHeight}
                            leafFontSize={leafFontSize}
                            leafFontWeight={leafFontWeight}
                            leafLetterSpacing={leafLetterSpacing}
                            sectionFontHeight={sectionFontHeight}
                            sectionFontSize={sectionFontSize}
                            sectionFontWeight={sectionFontWeight}
                            sectionLetterSpacing={sectionLetterSpacing}
                            itemTextOverflow={itemTextOverflow}
                            itemWordBreak={itemWordBreak}
                            renderSectionLabel={renderSectionLabel}
                            itemInitialIndent={itemInitialIndent}
                            itemSizePerIndent={itemSizePerIndent}
                            isVirtualized={isMenuVirtualized}
                            autoFocus={menuAutoFocus}
                            shouldFocusWrap={shouldMenuFocusWrap}
                            items={list.items}
                            filter={parentFilter}
                            selectedKeys={list.selectedKeys}
                            disabledKeys={disabledListBoxItemIds}
                            selectionMode="single"
                            disallowEmptySelection
                            onSelectionChange={keys => {
                              list.setSelectedKeys(keys);
                            }}
                          >
                            {listBoxHaveSection ? listBoxSectionRender : listBoxItemRender}
                          </ListBox>
                        )}

                        {!parentIsASelect && (
                          <Menu
                            darkMode={darkMode}
                            minimal={minimal}
                            intent={intent}
                            itemIntentAtDefaultState={itemIntentAtDefaultState}
                            itemApplyIntentOnGroup={itemApplyIntentOnGroup}
                            sectionOpacity={sectionOpacity}
                            groupOpacity={groupOpacity}
                            forceItemLowGrayBackgroundAtHoverState={
                              forceItemLowGrayBackgroundAtHoverState
                            }
                            forceItemLowBrandBackgroundAtHoverState={
                              forceItemLowBrandBackgroundAtHoverState
                            }
                            itemCursor={itemCursor}
                            gapBetweenItems={gapBetweenItems}
                            marginBetweenItemsAndSection={marginBetweenItemsAndSection}
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
                            isVirtualized={isMenuVirtualized}
                            autoFocus={menuAutoFocus}
                            shouldFocusWrap={shouldMenuFocusWrap}
                            items={tree.items}
                            selectedKeys={tree.selectedKeys}
                            disabledKeys={disabledMenuItemIds}
                            itemExpandedIds={expandedIds}
                            setItemExpandedIds={lexpandedIds => setExpandedIds(lexpandedIds)}
                            selectionMode="single"
                            disallowEmptySelection
                            onAction={onMenuItemAction}
                            onSelectionChange={keys => {
                              if (keys !== "all") {
                                tree.setSelectedKeys(keys);
                              }
                            }}
                            {...rest}
                          >
                            {menuHaveSection ? menuSectionRender : menuItemRender}
                          </Menu>
                        )}
                      </Content>
                    )}
                    {type === "dialog" && customDialogContent}
                    {type === "dialog" && customDialogFooter}
                  </AnimatedPopover>
                </OverlayContainer>
              )
          )}
        </OverlayProvider>
      )}
    </>
  );
};
