import React from "react";

import {
  IntentColor,
  BackgroundOpacityType,
  BorderOpacityType,
  FlexGridGapType,
  HeightType,
  BorderWidthType,
  HorizontalPaddingType,
  VerticalPaddingType,
  ZIndexType,
  NavbarGroupAlignmentProps,
} from "@dataxelio/react-ui.utils.prop-types";
import { Divider } from "@dataxelio/react-ui.element.divider";
import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";
import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";

export type NavbarProps = {
  /**
   * Tells if navbar is rendered in dark mode
   */
  darkMode?: boolean;
  /**
   * Tells if navbar is rendered without background (minimal === true)
   */
  minimal?: boolean;
  /**
   * Tells if navbar is rendered with a border (outlined === true)
   */
  outlined?: boolean;
  /**
   * Specify the intent color used to render this navbar
   */
  intent?: IntentColor;
  /**
   * Specify the navbar background opacity
   */
  backgroundOpacity?: BackgroundOpacityType;
  /**
   * Specify the navbar border opacity
   */
  borderOpacity?: BorderOpacityType;
  /**
   * Specify the gap between navbar group items
   */
  gapBetweenGroups?: FlexGridGapType;
  /**
   * Specify the gap between navbar group items
   */
  gapBetweenGroupItems?: FlexGridGapType;
  /**
   * Divider between heading and left groups
   */
  dividerAfterHeadingGroup?: boolean;
  /**
   * Divider between left and center groups
   */
  dividerAfterLeftGroup?: boolean;
  /**
   * Divider between center and right groups
   */
  dividerAfterCenterGroup?: boolean;
  /**
   * Tells if navbar is rendered in debug mode (by drawing a border around it)
   */
  debugMode?: boolean;
  /**
   * Specify the intent color used to render this navbar debug border
   */
  debugIntent?: IntentColor;
  /**
   * Specify the height of this navbar
   */
  height?: HeightType;
  /**
   * Specify the border width of this navbar
   */
  borderWidth?: BorderWidthType;
  /**
   * Specify the horizontal padding of this navbar
   */
  horizontalPadding?: HorizontalPaddingType;
  /**
   * Specify the vertical padding of this navbar
   */
  verticalPadding?: VerticalPaddingType;
  /**
   * Specify the z-index of this navbar
   */
  zIndex?: ZIndexType;
  /**
   * Children of this navbar: Must be only NavbarGroup
   * Other children elements will not be taken into account
   */
  children: React.ReactNode;
};

export function Navbar({
  darkMode,
  minimal,
  outlined,
  intent,
  backgroundOpacity,
  borderOpacity,
  gapBetweenGroups = "gap-5",
  gapBetweenGroupItems = "gap-2",
  dividerAfterHeadingGroup,
  dividerAfterLeftGroup,
  dividerAfterCenterGroup,
  debugMode,
  debugIntent,
  height = "h-10",
  borderWidth,
  horizontalPadding = "px-5",
  verticalPadding = "py-2",
  zIndex = "z-30",
  children,
}: NavbarProps) {
  let headingGroupChildElement: React.ReactNode = undefined;
  let leftGroupChildElement: React.ReactNode = undefined;
  let centerGroupChildElement: React.ReactNode = undefined;
  let rightGroupChildElement: React.ReactNode = undefined;

  React.Children.forEach(children, child => {
    if (React.isValidElement<NavbarGroupAlignmentProps & { children: React.ReactNode }>(child)) {
      if (!headingGroupChildElement && child.props.alignment === "heading") {
        headingGroupChildElement = child.props.children;
      }

      if (!leftGroupChildElement && child.props.alignment === "left") {
        leftGroupChildElement = child.props.children;
      }

      if (!centerGroupChildElement && child.props.alignment === "center") {
        centerGroupChildElement = child.props.children;
      }

      if (!rightGroupChildElement && child.props.alignment === "right") {
        rightGroupChildElement = child.props.children;
      }
    }
  });

  return (
    <BasicLayout
      minimal
      position="fixed"
      topPlacement="top-0"
      leftPlacement="left-0"
      rightPlacement="right-0"
      height={height}
      debugMode={debugMode}
      debugIntent={debugIntent}
      zIndex={zIndex}
      className={darkMode ? "dark" : undefined}
    >
      <FlexLayout
        fluid
        cross
        domElement="ul"
        minimal={minimal}
        outlined={outlined}
        intent={intent}
        backgroundOpacity={backgroundOpacity}
        borderOpacity={borderOpacity}
        borderWidth={borderWidth}
        horizontalPadding={horizontalPadding}
        verticalPadding={verticalPadding}
        flexDirection="flex-row"
        flexWrap="flex-nowrap"
        flexGap={gapBetweenGroups}
        flexCrossAxisAlignment="items-center"
        overflow="overflow-hidden"
        debugMode={debugMode}
        debugIntent={debugIntent}
      >
        <FlexLayout
          minimal
          domElement="li"
          flexDirection="flex-row"
          flexWrap="flex-nowrap"
          flexGap={gapBetweenGroupItems}
          flexCrossAxisAlignment="items-center"
          debugMode={debugMode}
          debugIntent={debugIntent}
        >
          {headingGroupChildElement ?? " "}
        </FlexLayout>
        {!!headingGroupChildElement && dividerAfterHeadingGroup && (
          <Divider fluid domElement="li" orientation="vertical" darkMode={darkMode} opacity={0.3} />
        )}
        <FlexLayout
          minimal
          domElement="li"
          flexDirection="flex-row"
          flexWrap="flex-nowrap"
          flexGap={gapBetweenGroupItems}
          flexCrossAxisAlignment="items-center"
          debugMode={debugMode}
          debugIntent={debugIntent}
        >
          {leftGroupChildElement ?? " "}
        </FlexLayout>
        {!!leftGroupChildElement && dividerAfterLeftGroup && (
          <Divider fluid domElement="li" orientation="vertical" darkMode={darkMode} opacity={0.3} />
        )}
        <FlexLayout
          minimal
          domElement="li"
          flexDirection="flex-row"
          flexWrap="flex-nowrap"
          flexGap={gapBetweenGroupItems}
          flexCrossAxisAlignment="items-center"
          leftMargin="ml-auto"
          debugMode={debugMode}
          debugIntent={debugIntent}
        >
          {centerGroupChildElement ?? " "}
        </FlexLayout>
        {!!centerGroupChildElement && dividerAfterCenterGroup && (
          <Divider fluid domElement="li" orientation="vertical" darkMode={darkMode} opacity={0.3} />
        )}
        <FlexLayout
          minimal
          domElement="li"
          flexDirection="flex-row"
          flexWrap="flex-nowrap"
          flexGap={gapBetweenGroupItems}
          flexCrossAxisAlignment="items-center"
          leftMargin="ml-auto"
          debugMode={debugMode}
          debugIntent={debugIntent}
        >
          {rightGroupChildElement ?? " "}
        </FlexLayout>
      </FlexLayout>
    </BasicLayout>
  );
}
