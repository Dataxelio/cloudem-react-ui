import React, { useRef, useImperativeHandle } from "react";
import {
  useOverlay,
  useModal,
  usePreventScroll,
  OverlayProps,
  ModalOptions,
  DismissButton,
} from "@react-aria/overlays";
import { FocusScope, FocusScopeProps } from "@react-aria/focus";

import {
  PopoverStyleProps,
  CardStyleProps,
  TriggerOverlayDomProps,
  TitleDomProps,
} from "@dataxelio/react-ui.utils.prop-types";
import { Card } from "@dataxelio/react-ui.surface.card";

export type PopoverProps = OverlayProps &
  ModalOptions &
  FocusScopeProps &
  PopoverStyleProps &
  CardStyleProps &
  TriggerOverlayDomProps &
  TitleDomProps;

export const Popover = React.forwardRef<HTMLElement, PopoverProps>(
  (
    {
      isDisabled,

      isOpen,
      isDismissable,
      shouldCloseOnBlur,
      isKeyboardDismissDisabled,
      onClose,
      shouldCloseOnInteractOutside,

      contain,
      restoreFocus,
      autoFocus,

      isModal,
      preventScroll,

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
      borderOpacity,

      headerGap,
      contentGap,
      contentTextGap,
      footerGap,
      overflow,
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

      fixed,
      fluid,
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

      titleDomProps,

      overlayPrimaryDomProps,
      overlaySecondaryDomProps,
      overlayPositionDomProps,
      overlayPlacementAxis,
      withArrow,
      arrowSize,
      arrowPositionDomProps,

      children,
    }: PopoverProps,
    ref
  ) => {
    const innerRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLElement);

    const { modalProps } = useModal({ isDisabled: isDisabled || !isModal });

    const { overlayProps } = useOverlay(
      {
        isOpen,
        isDismissable,
        shouldCloseOnBlur,
        isKeyboardDismissDisabled,
        onClose,
        shouldCloseOnInteractOutside,
      },
      innerRef
    );

    usePreventScroll({ isDisabled: isDisabled || !preventScroll });

    return (
      <FocusScope contain={contain} restoreFocus={restoreFocus} autoFocus={autoFocus}>
        <Card
          ref={innerRef}
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
          contentGap={contentGap}
          contentTextGap={contentTextGap}
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
          titleDomProps={titleDomProps}
          modalDomProps={modalProps}
          overlayOriginalDomProps={overlayProps}
          overlayPrimaryDomProps={overlayPrimaryDomProps}
          overlaySecondaryDomProps={overlaySecondaryDomProps}
          overlayPositionDomProps={overlayPositionDomProps}
          overlayPlacementAxis={overlayPlacementAxis}
          withArrow={withArrow}
          arrowSize={arrowSize}
          arrowPositionDomProps={arrowPositionDomProps}
        >
          {children}
        </Card>
        <DismissButton onDismiss={onClose} />
      </FocusScope>
    );
  }
);
