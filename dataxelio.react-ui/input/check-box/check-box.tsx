import React, { useState, useRef, useImperativeHandle } from "react";

import { useHover, useFocus } from "@react-aria/interactions";
import { useFocusRing } from "@react-aria/focus";
import { useCheckbox } from "@react-aria/checkbox";
import { mergeProps } from "@react-aria/utils";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useToggleState } from "@react-stately/toggle";
import { AriaCheckboxProps } from "@react-types/checkbox";

import {
  BorderRadiusType,
  BorderWidthType,
  BoxShadowType,
  FontSizeType,
  FontWeightType,
  IntentColor,
  RingWidthType,
  WidthType,
  HeightType,
  IntentState,
} from "@dataxelio/react-ui.utils.prop-types";

import { Icon } from "@dataxelio/react-ui.element.icon";
import { Text } from "@dataxelio/react-ui.element.text";
import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";
import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";

export interface CheckBoxProps extends AriaCheckboxProps {
  // Intent Style
  intent?: IntentColor;

  // Geometry Style
  width?: WidthType;
  height?: HeightType;
  boxShadow?: BoxShadowType;

  // Typography Style
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;

  // Custom Style
  className?: string;
}

export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      intent,

      width,
      height,
      boxShadow,

      fontSize,
      fontWeight,

      className: cClassName,

      children,
      isDisabled,
      isIndeterminate,
      isSelected,
      autoFocus,
      ...rest
    }: CheckBoxProps,
    ref
  ) => {
    const finalWidth = width ?? "w-4";
    const finalHeight = height ?? "h-4";
    const finalFontSize = fontSize ?? "text-xs";

    const defaultBorderWidth: BorderWidthType = "border-2";
    const defaultRingWidth: RingWidthType = "ring-2";
    const defaultBorderRadius: BorderRadiusType = "rounded-sm";

    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    const [isFocused, setIsFocused] = useState(false);

    const { isHovered, hoverProps } = useHover({ isDisabled });

    const { focusProps } = useFocus({
      isDisabled,
      onFocusChange: focused => setIsFocused(focused),
    });

    const { isFocusVisible, focusProps: focusRingProps } = useFocusRing({
      autoFocus,
      isTextInput: false,
    });

    const state = useToggleState({ isDisabled, isSelected, autoFocus, ...rest });
    const { inputProps } = useCheckbox(
      { isDisabled, isIndeterminate, isSelected, autoFocus, ...rest },
      state,
      innerRef
    );

    return (
      <FlexLayout
        flexDirection="flex-row"
        flexWrap="flex-nowrap"
        flexMainAxisAlignment="justify-start"
        flexCrossAxisAlignment="items-center"
        flexGap="gap-1.5"
        width="w-52"
        domElement="label"
        className={cClassName}
      >
        <VisuallyHidden>
          <input
            className="cursor-pointer"
            ref={innerRef}
            {...mergeProps(inputProps, focusProps, focusRingProps)}
          />
        </VisuallyHidden>
        <BasicLayout
          position="relative"
          flexItemResizing="flex-none"
          intent={intent}
          intentState={
            isDisabled
              ? IntentState.DISABLED
              : isFocused || isFocusVisible
              ? IntentState.FOCUS
              : isHovered
              ? IntentState.HOVER
              : IntentState.DEFAULT
          }
          outlined={!state.isSelected}
          ringed={isFocused || isFocusVisible}
          ringedFade={true}
          width={finalWidth}
          height={finalHeight}
          borderWidth={defaultBorderWidth}
          borderRadius={defaultBorderRadius}
          ringWidth={defaultRingWidth}
          horizontalPadding="px-0"
          verticalPadding="py-0"
          boxShadow={boxShadow}
          fontSize={finalFontSize}
          fontWeight={fontWeight}
          {...hoverProps}
        >
          {state.isSelected && (
            <Icon
              position="absolute"
              leftPlacement="left-0"
              rightPlacement="right-0"
              topPlacement="top-0"
              bottomPlacement="bottom-0"
              horizontalMargin="mx-auto"
              verticalMargin="my-auto"
              iName={isIndeterminate ? "minus" : "check"}
              inheritStyle
              iTransform={{ size: 14 }}
            />
          )}
        </BasicLayout>
        {typeof children === "string" && (
          <Text disabled={isDisabled} tText={children} fontSize="text-sm" textOverflow="truncate" />
        )}
      </FlexLayout>
    );
  }
);
