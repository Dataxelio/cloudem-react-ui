import React from "react";

import {
  ResourceProperty,
  IntentColor,
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
  BorderRadiusType,
  BoxShadowType,
} from "@dataxelio/react-ui.utils.prop-types";
import { Divider } from "@dataxelio/react-ui.element.divider";
import { Title } from "@dataxelio/react-ui.element.title";
import { Paragraph } from "@dataxelio/react-ui.element.paragraph";
import { Label } from "@dataxelio/react-ui.element.label";
import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";
import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";
import { Header } from "@dataxelio/react-ui.element.header";
import { Content } from "@dataxelio/react-ui.element.content";
import { Card } from "@dataxelio/react-ui.surface.card";
import { LinkButton } from "@dataxelio/react-ui.input.link-button";

export interface ResourceViewerProps {
  title?: string;
  subTitle?: string;
  propertyCountPerSection?: number;
  properties: ResourceProperty[];

  // Layout Style
  leftMargin?: LeftMarginType;
  rightMargin?: RightMarginType;
  horizontalMargin?: HorizontalMarginType;
  topMargin?: TopMarginType;
  bottomMargin?: BottomMarginType;
  verticalMargin?: VerticalMarginType;
  debugMode?: boolean;
  debugIntent?: IntentColor;

  // Geometry Style
  fluid?: boolean;
  width?: WidthType;
  maxWidth?: MaxWidthType;
  minWidth?: MinWidthType;
  height?: HeightType;
  maxHeight?: MaxHeightType;
  minHeight?: MinHeightType;
  borderRadius?: BorderRadiusType;
  boxShadow?: BoxShadowType;
}

export const ResourceViewer = React.forwardRef<HTMLElement, ResourceViewerProps>(
  (
    {
      title = "Details",
      subTitle,
      propertyCountPerSection = 5,
      properties,
      leftMargin,
      rightMargin,
      horizontalMargin,
      topMargin,
      bottomMargin,
      verticalMargin,
      debugMode,
      debugIntent,
      fluid = false,
      width,
      maxWidth,
      minWidth,
      height,
      maxHeight,
      minHeight,
      borderRadius = "rounded-sm",
      boxShadow = "shadow-sm",
    }: ResourceViewerProps,
    ref
  ) => {
    const totalPropertyCount = properties.length;
    const remainingPropertyCount = totalPropertyCount % propertyCountPerSection;
    const sectionCount =
      (totalPropertyCount - remainingPropertyCount) / propertyCountPerSection +
      (remainingPropertyCount > 0 ? 1 : 0);

    const sections = new Array<number>(sectionCount).fill(propertyCountPerSection);
    sectionCount > 0 &&
      remainingPropertyCount > 0 &&
      sections.splice(sectionCount - 1, 1, remainingPropertyCount);

    // useEffect(() => {
    //   console.log(`totalPropertyCount = ${totalPropertyCount}`);
    //   console.log(`propertyCountPerSection = ${propertyCountPerSection}`);
    //   console.log(`remainingPropertyCount = ${remainingPropertyCount}`);
    //   console.log(`sectionCount = ${sectionCount}`);
    //   console.log(sections);
    // });

    return (
      <Card
        ref={ref}
        intent={IntentColor.GRAY_LIGHTEST}
        contentOrientation="landscape"
        leftMargin={leftMargin}
        rightMargin={rightMargin}
        horizontalMargin={horizontalMargin}
        topMargin={topMargin}
        bottomMargin={bottomMargin}
        verticalMargin={verticalMargin}
        debugMode={debugMode}
        debugIntent={debugIntent}
        fluid={fluid}
        width={width}
        maxWidth={maxWidth}
        minWidth={minWidth}
        height={height}
        maxHeight={maxHeight}
        minHeight={minHeight}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
        dividerAfterHeader
      >
        <Header>
          <Title>{title}</Title>
          {!!subTitle && <Paragraph fontSize="text-xs">{subTitle}</Paragraph>}
        </Header>
        <Content>
          {sections.map((sectionValue, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              <FlexLayout
                flexDirection="flex-col"
                flexGap="gap-5"
                flexWrap="flex-nowrap"
                minWidth="min-w-0"
                minimal
                fluid
              >
                {properties
                  .slice(
                    propertyCountPerSection * sectionIndex,
                    propertyCountPerSection * sectionIndex + sectionValue
                  )
                  .map(property => (
                    <BasicLayout key={property.id} minimal fluid>
                      <Paragraph
                        intentColor={IntentColor.GRAY}
                        fontWeight="font-medium"
                        fontSize="text-sm"
                      >
                        {property.name}
                      </Paragraph>
                      <Label
                        topMargin="mt-0.5"
                        minimal
                        intent={property.intent}
                        strongIntent
                        fontSize="text-sm"
                        fontWeight={property.intent === undefined ? "font-normal" : "font-medium"}
                        // textOverflow="truncate"
                        // wordBreak="break-all"
                        leftIcon={property.icon}
                        leftIconStyle={property.iconStyle}
                        leftIconTransform={property.iconTransform}
                      >
                        {(!property.asLink || !property.linkPath) && (property.value || "-")}
                        {property.asLink && !!property.linkPath && (
                          <LinkButton
                            path={property.linkPath}
                            text={property.value || "-"}
                            horizontalPadding="px-0"
                            verticalPadding="py-0"
                          />
                        )}
                      </Label>
                    </BasicLayout>
                  ))}
              </FlexLayout>
              {sectionIndex < sectionCount - 1 && <Divider opacity={0.2} />}
            </React.Fragment>
          ))}
        </Content>
      </Card>
    );
  }
);
