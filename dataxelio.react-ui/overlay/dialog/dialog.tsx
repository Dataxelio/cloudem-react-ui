import React, { useRef } from "react";
import { useDialog } from "@react-aria/dialog";
import { useOverlayTriggerState } from "@react-stately/overlays";
import { useIsSSR } from "@react-aria/ssr";
import { OverlayTriggerProps } from "@react-types/overlays";
import { AriaDialogProps } from "@react-types/dialog";
import { OverlayContainer, OverlayProvider } from "@react-aria/overlays";

import {
  OrientationType,
  AlignmentType,
  IntentColor,
  BackgroundOpacityType,
  BorderOpacityType,
  FlexGridGapType,
  LeftMarginType,
  RightMarginType,
  HorizontalMarginType,
  TopMarginType,
  BottomMarginType,
  VerticalMarginType,
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
} from "@dataxelio/react-ui.utils.prop-types";
import { Popover } from "@dataxelio/react-ui.overlay.popover";
import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";

export type AriaDialogTriggerProps = AriaDialogProps & OverlayTriggerProps;

export interface DialogProps extends AriaDialogTriggerProps {
  // Interaction
  shouldCloseOnBlur?: boolean;
  preventScroll?: boolean;
  shouldCloseOnInteractOutside?: (element: HTMLElement) => boolean;
  onClose: () => void;

  // Card Orientation
  contentOrientation?: OrientationType;
  contentAlignment?: AlignmentType;
  footerAlignment?: AlignmentType;

  // Card Divider
  dividerAfterHeader?: boolean;
  dividerAfterContentText?: boolean;
  dividerAfterContent?: boolean;

  // Card Intent Style
  minimal?: boolean;
  outlined?: boolean;
  intent?: IntentColor;
  backgroundOpacity?: BackgroundOpacityType;
  borderOpacity?: BorderOpacityType;

  // Card Layout Style
  contentGap?: FlexGridGapType;
  leftMargin?: LeftMarginType;
  rightMargin?: RightMarginType;
  horizontalMargin?: HorizontalMarginType;
  internalHorizontalMargin?: HorizontalMarginType;
  topMargin?: TopMarginType;
  bottomMargin?: BottomMarginType;
  verticalMargin?: VerticalMarginType;
  internalVerticalMargin?: VerticalMarginType;
  debugMode?: boolean;
  debugIntent?: IntentColor;

  // Card Geometry Style
  width?: WidthType;
  maxWidth?: MaxWidthType;
  minWidth?: MinWidthType;
  height?: HeightType;
  maxHeight?: MaxHeightType;
  minHeight?: MinHeightType;
  borderWidth?: BorderWidthType;
  borderRadius?: BorderRadiusType;
  horizontalPadding?: HorizontalPaddingType;
  verticalPadding?: VerticalPaddingType;
  boxShadow?: BoxShadowType;

  // Form
  asForm?: boolean;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;

  children: React.ReactNode;
}

export const Dialog = ({
  shouldCloseOnBlur = true,
  preventScroll = true,
  shouldCloseOnInteractOutside,
  onClose,

  isOpen = false,
  defaultOpen,
  onOpenChange,

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
  borderOpacity,

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

  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  borderWidth,
  borderRadius,
  horizontalPadding,
  verticalPadding,
  boxShadow,

  asForm,
  onSubmit,

  children,
  ...rest
}: DialogProps) => {
  const popoverRef = useRef<HTMLElement>(null);

  const isSSR = useIsSSR();

  const state = useOverlayTriggerState({ isOpen, defaultOpen, onOpenChange });

  const { dialogProps, titleProps } = useDialog({ ...rest }, popoverRef);

  return (
    <>
      {!isSSR && (
        <OverlayProvider>
          {state.isOpen && (
            <OverlayContainer>
              <FlexLayout
                intent={IntentColor.BLACK}
                backgroundOpacity="bg-opacity-50"
                position="fixed"
                zIndex="z-50"
                leftPlacement="left-0"
                rightPlacement="right-0"
                topPlacement="top-0"
                bottomPlacement="bottom-0"
                flexMainAxisAlignment="justify-center"
                flexCrossAxisAlignment="items-center"
              >
                <Popover
                  ref={popoverRef}
                  isOpen
                  isDismissable
                  shouldCloseOnBlur={shouldCloseOnBlur}
                  isKeyboardDismissDisabled={false}
                  onClose={onClose}
                  shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
                  contain
                  restoreFocus
                  autoFocus
                  isModal
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
                  titleDomProps={titleProps}
                  overlayPrimaryDomProps={dialogProps}
                >
                  {children}
                </Popover>
              </FlexLayout>
            </OverlayContainer>
          )}
        </OverlayProvider>
      )}
    </>
  );
};
