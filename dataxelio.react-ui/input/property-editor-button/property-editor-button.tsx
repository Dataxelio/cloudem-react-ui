import React, { useState } from "react";

import { Placement } from "@react-types/overlays";

import {
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
  ButtonStyleProps,
} from "@dataxelio/react-ui.utils.prop-types";

import { Button } from "@dataxelio/react-ui.input.button";
import { Content } from "@dataxelio/react-ui.element.content";
import { Footer } from "@dataxelio/react-ui.element.footer";
import { TextField } from "@dataxelio/react-ui.input.text-field";
import { PopoverTrigger } from "@dataxelio/react-ui.overlay.popover-trigger";

export interface PropertyEditorButtonProps extends ButtonStyleProps {
  isDisabled?: boolean;
  propertyName: string;
  onPropertyValueChanged?: (newValue: string) => void;

  // Input
  inputIntent?: IntentColor;
  inputIntentAtDefaultState?: boolean;

  // Popover Trigger
  onPopoverOpenChange?: (isOpen: boolean) => void;
  popoverPlacement?: Placement;
  popoverOffset?: number;
  popoverWithArrow?: boolean;
  popoverArrowSize?: number;

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
}

export const PropertyEditorButton = ({
  isDisabled,
  propertyName,
  onPropertyValueChanged,

  inputIntent = IntentColor.BRAND,
  inputIntentAtDefaultState = false,

  onPopoverOpenChange,
  popoverPlacement = "right top",
  popoverOffset,
  popoverWithArrow = true,
  popoverArrowSize,

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

  ...rest
}: PropertyEditorButtonProps) => {
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const [propertyValue, setPropertyValue] = useState<string>("");

  return (
    <PopoverTrigger
      isDisabled={isDisabled}
      isOpen={popoverOpen}
      onClose={() => {
        setPopoverOpen(false);
        setPropertyValue("");
      }}
      contentOrientation="portrait"
      footerAlignment="right"
      backgroundOpacity={popoverBackgroundOpacity}
      borderOpacity={popoverBorderOpacity}
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
      asForm
      onSubmit={evt => {
        evt.preventDefault();
        !!onPropertyValueChanged && onPropertyValueChanged(propertyValue);
        setPopoverOpen(false);
        setPropertyValue("");
      }}
      type="dialog"
      onOpenChange={onPopoverOpenChange}
      placement={popoverPlacement}
      offset={popoverOffset}
      withArrow={popoverWithArrow}
      arrowSize={popoverArrowSize}
      customDialogContent={
        <Content>
          <TextField
            fill
            inputType="text"
            intent={inputIntent}
            intentAtDefaultState={inputIntentAtDefaultState}
            label={`Edit ${propertyName}`}
            value={propertyValue}
            onChange={value => setPropertyValue(value)}
          />
        </Content>
      }
      customDialogFooter={
        <Footer>
          <Button
            outlined
            borderRadius="rounded-sm"
            horizontalPadding="px-6"
            verticalPadding="py-1.5"
            fontSize="text-sm"
            fontWeight="font-semibold"
            onPress={() => {
              setPopoverOpen(false);
              setPropertyValue("");
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            intent={inputIntent}
            borderRadius="rounded-sm"
            horizontalPadding="px-6"
            verticalPadding="py-1.5"
            fontSize="text-sm"
            fontWeight="font-semibold"
          >
            Save
          </Button>
        </Footer>
      }
    >
      <Button isDisabled={isDisabled} onPress={() => setPopoverOpen(!popoverOpen)} {...rest} />
    </PopoverTrigger>
  );
};
