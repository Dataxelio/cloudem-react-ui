import React from "react";
import { mergeProps } from "react-aria";

import {
  TitledOverlayDomProps,
  LayoutElementProps,
  CardStyleProps,
} from "@dataxelio/react-ui.utils.prop-types";

import { HeaderImpl } from "@dataxelio/react-ui.internal.header-impl";
import { ContentTextImpl } from "@dataxelio/react-ui.internal.content-text-impl";
import { ContentImpl } from "@dataxelio/react-ui.internal.content-impl";
import { FooterImpl } from "@dataxelio/react-ui.internal.footer-impl";
import { Arrow } from "@dataxelio/react-ui.element.arrow";
import { Divider } from "@dataxelio/react-ui.element.divider";
import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";

export type CardProps = TitledOverlayDomProps & CardStyleProps;

export const Card = React.forwardRef<HTMLElement, CardProps>(
  (
    {
      headerOrientation = "portrait",
      headerAlignment = "left",
      contentTextOrientation = "portrait",
      contentTextAlignment = "left",
      contentOrientation = "portrait",
      contentAlignment = "left",
      footerOrientation = "landscape",
      footerAlignment = "left",

      dividerAfterHeader = true,
      dividerAfterContentText,
      dividerAfterContent,

      minimal = false,
      outlined = true,
      intent,
      backgroundOpacity,
      borderOpacity = "border-opacity-30",

      headerGap = "gap-1",
      contentGap = "gap-5",
      contentTextGap = "gap-1",
      footerGap = "gap-2",
      leftMargin,
      rightMargin,
      horizontalMargin,
      //internalHorizontalMargin = "mx-0",
      topMargin,
      bottomMargin,
      verticalMargin,
      internalVerticalMargin = "my-5",
      debugMode,
      debugIntent,

      fixed,
      fluid = true,
      width,
      maxWidth = "max-w-md",
      minWidth,
      height,
      maxHeight,
      minHeight,
      borderWidth = "border",
      borderRadius = "rounded-md",
      horizontalPadding = "px-5",
      verticalPadding = "py-5",
      boxShadow = "shadow-sm",

      titleDomProps,

      modalDomProps,
      overlayOriginalDomProps,
      overlayPrimaryDomProps,
      overlaySecondaryDomProps,
      overlayPositionDomProps,
      overlayPlacementAxis,
      withArrow,
      arrowSize,
      arrowPositionDomProps,

      asForm,
      onSubmit,

      children,
    }: CardProps,
    ref
  ) => {
    let headerChildElement: React.ReactNode = undefined;
    let contentTextChildElement: React.ReactNode = undefined;
    let contentChildElement: React.ReactNode = undefined;
    let footerChildElement: React.ReactNode = undefined;

    React.Children.forEach(children, child => {
      if (React.isValidElement<LayoutElementProps & { children: React.ReactNode }>(child)) {
        if (!headerChildElement && child.props.__LAYOUT_ELEMENT === "header") {
          headerChildElement = child.props.children;
        }

        if (!contentTextChildElement && child.props.__LAYOUT_ELEMENT === "content-text") {
          contentTextChildElement = child.props.children;
        }

        if (!contentChildElement && child.props.__LAYOUT_ELEMENT === "content") {
          contentChildElement = child.props.children;
        }

        if (!footerChildElement && child.props.__LAYOUT_ELEMENT === "footer") {
          footerChildElement = child.props.children;
        }
      }
    });

    return (
      <BasicLayout
        ref={ref}
        domElement={asForm ? "form" : "div"}
        minimal={minimal}
        outlined={outlined}
        backgroundOpacity={backgroundOpacity}
        borderOpacity={borderOpacity}
        leftMargin={leftMargin}
        rightMargin={rightMargin}
        horizontalMargin={horizontalMargin}
        topMargin={topMargin}
        bottomMargin={bottomMargin}
        verticalMargin={verticalMargin}
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
        boxShadow={boxShadow}
        debugMode={debugMode}
        debugIntent={debugIntent}
        onSubmit={onSubmit}
        {...mergeProps(
          modalDomProps ?? {},
          overlayOriginalDomProps ?? {},
          overlayPrimaryDomProps ?? {},
          overlaySecondaryDomProps ?? {},
          overlayPositionDomProps ?? {}
        )}
      >
        {!!headerChildElement && (
          <HeaderImpl
            orientation={headerOrientation}
            alignment={headerAlignment}
            gap={headerGap}
            intent={intent}
            horizontalPadding={horizontalPadding}
            verticalPadding={verticalPadding}
            titleDomProps={titleDomProps}
            debugMode={debugMode}
            debugIntent={debugIntent}
          >
            {headerChildElement}
          </HeaderImpl>
        )}
        {!!headerChildElement && dividerAfterHeader && (
          <Divider orientation="horizontal" opacity={0.3} />
        )}
        {!!contentTextChildElement && (
          <ContentTextImpl
            orientation={contentTextOrientation}
            alignment={contentTextAlignment}
            gap={contentTextGap}
            verticalMargin={internalVerticalMargin}
            horizontalPadding={horizontalPadding}
            debugMode={debugMode}
            debugIntent={debugIntent}
          >
            {contentTextChildElement}
          </ContentTextImpl>
        )}
        {!!contentTextChildElement && dividerAfterContentText && (
          <Divider orientation="horizontal" opacity={0.3} />
        )}
        {!!contentChildElement && (
          <ContentImpl
            orientation={contentOrientation}
            alignment={contentAlignment}
            gap={contentGap}
            verticalMargin={internalVerticalMargin}
            horizontalPadding={horizontalPadding}
            debugMode={debugMode}
            debugIntent={debugIntent}
          >
            {contentChildElement}
          </ContentImpl>
        )}
        {!!contentChildElement && dividerAfterContent && (
          <Divider orientation="horizontal" opacity={0.3} />
        )}
        {!!footerChildElement && (
          <FooterImpl
            orientation={footerOrientation}
            alignment={footerAlignment}
            gap={footerGap}
            verticalMargin={internalVerticalMargin}
            horizontalPadding={horizontalPadding}
            debugMode={debugMode}
            debugIntent={debugIntent}
          >
            {footerChildElement}
          </FooterImpl>
        )}
        {withArrow && !!overlayPlacementAxis && !!arrowPositionDomProps && (
          <Arrow
            placement={overlayPlacementAxis}
            size={arrowSize}
            positionDomProps={arrowPositionDomProps}
          />
        )}
      </BasicLayout>
    );
  }
);
