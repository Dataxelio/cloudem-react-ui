import React, { useRef, useState } from "react";

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

import {
  PopoverStyleProps,
  CardStyleProps,
  MenuStyleProps,
  PopoverTriggerStyleProps,
  MenuItemData,
} from "@dataxelio/react-ui.utils.prop-types";

import { ButtonProps } from "@dataxelio/react-ui.input.button";
import { Popover } from "@dataxelio/react-ui.overlay.popover";
import { Menu } from "@dataxelio/react-ui.element.menu";
import { useSelectedMenuItem } from "@dataxelio/react-ui.utils.use-selected-menu-item";
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

  contentOrientation,
  contentAlignment,
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
  sectionOpacity,
  groupOpacity,
  forceItemLowGrayBackgroundAtHoverState,
  forceItemLowBrandBackgroundAtHoverState,
  itemCursor,

  contentGap,
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
  itemTextOverflow,
  itemWordBreak,

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
  menuItems,
  menuItemSelectedIds,
  menuItemDisabledIds,
  menuItemExpandedIds,
  onMenuItemAction,
  onMenuItemExpandedChange,
  // onMenuItemSelectionChange,

  children,
  ...rest
}: PopoverTriggerProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLElement>(null);

  const [selectedMenuItemKey, setSelectedMenuItemKey] = useState<string>("");

  const selectedMenuItem = useSelectedMenuItem(
    syncTriggerLabelWithSelectedItem,
    menuItems,
    selectedMenuItemKey
  );

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

  const sectionRender = (section: MenuItemData) => (
    <Section key={section.id} title={section.label} items={section.children}>
      {item => (
        <Item key={item.id} childItems={item.children}>
          {item.label}
        </Item>
      )}
    </Section>
  );

  const itemRender = (item: MenuItemData) => (
    <Item key={item.id} childItems={item.children}>
      {item.label}
    </Item>
  );

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
          {state.isOpen && (
            <OverlayContainer className={darkMode ? "dark" : undefined}>
              <Popover
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
                contentOrientation={contentOrientation}
                contentAlignment={contentAlignment}
                footerAlignment={footerAlignment}
                dividerAfterHeader={dividerAfterHeader}
                dividerAfterContentText={dividerAfterContentText}
                dividerAfterContent={dividerAfterContent}
                minimal={minimal}
                outlined={outlined}
                intent={intent}
                backgroundOpacity={backgroundOpacity}
                borderOpacity={borderOpacity}
                contentGap={contentGap}
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
                fluid={fluid}
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
                <Content>
                  <Menu
                    darkMode={darkMode}
                    minimal={minimal}
                    intent={intent}
                    itemIntentAtDefaultState={itemIntentAtDefaultState}
                    sectionOpacity={sectionOpacity}
                    groupOpacity={groupOpacity}
                    forceItemLowGrayBackgroundAtHoverState={forceItemLowGrayBackgroundAtHoverState}
                    forceItemLowBrandBackgroundAtHoverState={
                      forceItemLowBrandBackgroundAtHoverState
                    }
                    itemCursor={itemCursor}
                    gapBetweenItems={gapBetweenItems}
                    marginBetweenItemsAndSection={marginBetweenItemsAndSection}
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
                    sectionFontHeight={sectionFontHeight}
                    sectionFontSize={sectionFontSize}
                    sectionFontWeight={sectionFontWeight}
                    sectionLetterSpacing={sectionLetterSpacing}
                    itemTextOverflow={itemTextOverflow}
                    itemWordBreak={itemWordBreak}
                    itemInitialIndent={itemInitialIndent}
                    groupSelfIndent={groupSelfIndent}
                    itemSizePerIndent={itemSizePerIndent}
                    groupExpandedIcon={groupExpandedIcon}
                    groupCollapsedIcon={groupCollapsedIcon}
                    isVirtualized={isMenuVirtualized}
                    autoFocus={menuAutoFocus}
                    shouldFocusWrap={shouldMenuFocusWrap}
                    items={menuItems}
                    selectedKeys={menuItemSelectedIds}
                    disabledKeys={menuItemDisabledIds}
                    expandedKeys={menuItemExpandedIds}
                    selectionMode="single"
                    disallowEmptySelection
                    onAction={onMenuItemAction}
                    onExpandedChange={onMenuItemExpandedChange}
                    onSelectionChange={keys =>
                      keys === "all" || keys.size > 1
                        ? setSelectedMenuItemKey("")
                        : setSelectedMenuItemKey(keys.values().next().value)
                    }
                    {...rest}
                  >
                    {menuHaveSection ? sectionRender : itemRender}
                  </Menu>
                </Content>
              </Popover>
            </OverlayContainer>
          )}
        </OverlayProvider>
      )}
    </>
  );
};
