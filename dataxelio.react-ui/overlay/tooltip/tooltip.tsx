import React, { cloneElement, useRef, FunctionComponent } from "react";
import { useTransition, animated, config } from "@react-spring/web";
import {
  useTooltip,
  useTooltipTrigger,
  useOverlayPosition,
  OverlayProvider,
  OverlayContainer,
  useIsSSR,
} from "react-aria";
import { useTooltipTriggerState } from "react-stately";
import { TooltipTriggerProps } from "@react-types/tooltip";
import { Placement } from "@react-types/overlays";

import { IntentColor } from "@dataxelio/react-ui.utils.prop-types";

import { ButtonProps } from "@dataxelio/react-ui.input.button";
import { AnchorButtonProps } from "@dataxelio/react-ui.input.anchor-button";
import { Label } from "@dataxelio/react-ui.element.label";

export interface TooltipProps extends TooltipTriggerProps {
  content: string;
  intent?: IntentColor;
  placement?: Placement;
  offset?: number;
  withArrow?: boolean;
  arrowSize?: number;
}

export const Tooltip: FunctionComponent<TooltipProps> = ({
  content,
  intent,
  placement,
  offset,
  withArrow,
  arrowSize,
  children,
  ...rest
}) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const isSSR = useIsSSR();

  const state = useTooltipTriggerState({ ...rest });
  const { triggerProps, tooltipProps } = useTooltipTrigger({ ...rest }, state, triggerRef);

  const { tooltipProps: tooltipPropsFinal } = useTooltip(tooltipProps, state);

  const {
    overlayProps,
    arrowProps,
    placement: finalPlacement,
  } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef,
    placement,
    offset: offset ?? 10,
  });

  const transitions = useTransition(state.isOpen, {
    from: { transform: "scale(0.95)", opacity: 0 },
    enter: { transform: "scale(1.0)", opacity: 1 },
    leave: { transform: "scale(0.95)", opacity: 0 },
    reverse: state.isOpen,
    delay: 10,
    config: config.default,
  });

  const finalIntent = intent ?? IntentColor.GRAY;

  const AnimatedLabel = animated(Label);

  // useEffect(() => {
  //   console.log(`Tooltip isOpen = ${state.isOpen}`);
  //   console.log(overlayProps);
  // });

  return (
    <>
      {!isSSR && (
        <OverlayProvider>
          {React.isValidElement<
            (ButtonProps | AnchorButtonProps) & { ref: React.ForwardedRef<HTMLButtonElement> }
          >(children) &&
            cloneElement(children, {
              ref: triggerRef,
              tooltipTriggerDomProps: triggerProps,
            })}
          {transitions(
            (styles, item) =>
              item && (
                <OverlayContainer>
                  <AnimatedLabel
                    style={{ transform: styles.transform, opacity: styles.opacity }}
                    ref={overlayRef}
                    intent={finalIntent}
                    borderRadius="rounded-sm"
                    horizontalPadding="px-3"
                    verticalPadding="py-2"
                    boxShadow="shadow-md"
                    fontSize="text-xs"
                    fontWeight="font-semibold"
                    text={content}
                    overlayPrimaryDomProps={tooltipProps}
                    overlaySecondaryDomProps={tooltipPropsFinal}
                    overlayPositionDomProps={overlayProps}
                    overlayPlacementAxis={finalPlacement}
                    withArrow={withArrow}
                    arrowSize={arrowSize}
                    arrowPositionDomProps={arrowProps}
                  />
                </OverlayContainer>
              )
          )}
        </OverlayProvider>
      )}
    </>
  );
};
