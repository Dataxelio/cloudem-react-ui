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
import { useTreeData, TreeNode } from "@react-stately/data";

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
import { useDisabledMenuItem } from "@dataxelio/react-ui.utils.use-disabled-menu-item";
import { Content } from "@dataxelio/react-ui.element.content";

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
  leftMargin,
  rightMargin,
  horizontalMargin,
  internalHorizontalMargin,
  topMargin,
  bottomMargin,
  verticalMargin,
  internalVerticalMargin,
  debugMode,
  debugIntent,

  fill,
  fixed,
  fluid,
  width,
  maxWidth = "max-w-xs",
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
  menuInitialItems,
  // menuItemSelectedIds,
  // menuItemDisabledIds,
  menuItemExpandedIds,
  onMenuItemAction,
  setMenuItemExpandedIds,
  // onMenuItemSelectionChange,
  selectedMenuItem,
  setSelectedMenuItem,

  customDialogContent,
  customDialogFooter,

  children,
  ...rest
}: PopoverTriggerProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLElement>(null);

  // const [selectedMenuItem, setSelectedMenuItem] = useState<TreeItem | undefined>(undefined);

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

  const disabledMenuItemIds = useDisabledMenuItem(menuInitialItems);

  const tree = useTreeData<TreeItem>({
    initialItems: menuInitialItems,
    initialSelectedKeys: [],
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

  useEffect(() => {
    if (!!expandedIds && !!setMenuItemExpandedIds) {
      setMenuItemExpandedIds(expandedIds);
    }
  }, [expandedIds]);

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
          {React.isValidElement<ButtonProps & { ref: React.ForwardedRef<HTMLButtonElement> }>(
            children
          ) &&
            React.cloneElement(children, {
              ref: triggerRef,
              ...triggerProps,
              ...(syncTriggerLabelWithSelectedItem && !!selectedMenuItem
                ? { text: selectedMenuItem.label }
                : {}),
            })}
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
                    leftMargin={leftMargin}
                    rightMargin={rightMargin}
                    horizontalMargin={horizontalMargin}
                    internalHorizontalMargin={internalHorizontalMargin}
                    topMargin={topMargin}
                    bottomMargin={bottomMargin}
                    verticalMargin={verticalMargin}
                    internalVerticalMargin={internalVerticalMargin}
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
                            if (keys === "all" || keys.size <= 0) {
                              !!setSelectedMenuItem && setSelectedMenuItem(undefined);
                            } else {
                              tree.setSelectedKeys(keys);
                              !!setSelectedMenuItem &&
                                setSelectedMenuItem(tree.getItem(keys.values().next().value).value);
                            }
                          }}
                          {...rest}
                        >
                          {menuHaveSection ? sectionRender : itemRender}
                        </Menu>
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
