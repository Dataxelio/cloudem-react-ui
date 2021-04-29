import {
  WidthType,
  HeightType,
  BorderWidthType,
  HoverBorderWidthType,
  FocusBorderWidthType,
  BorderRadiusType,
  RingWidthType,
  HoverRingWidthType,
  FocusRingWidthType,
  LeftPaddingType,
  RightPaddingType,
  HorizontalPaddingType,
  TopPaddingType,
  BottomPaddingType,
  VerticalPaddingType,
  BoxShadowType,
} from "@dataxelio/react-ui.utils.prop-types";

export type GeometryStyleBuilderInput = {
  fill?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  ringed?: boolean;

  width?: WidthType;
  height?: HeightType;
  borderWidth?: BorderWidthType;
  hoverBorderWidth?: HoverBorderWidthType;
  focusBorderWidth?: FocusBorderWidthType;
  borderRadius?: BorderRadiusType;
  ringWidth?: RingWidthType;
  hoverRingWidth?: HoverRingWidthType;
  focusRingWidth?: FocusRingWidthType;
  leftPadding?: LeftPaddingType;
  rightPadding?: RightPaddingType;
  horizontalPadding?: HorizontalPaddingType;
  topPadding?: TopPaddingType;
  bottomPadding?: BottomPaddingType;
  verticalPadding?: VerticalPaddingType;
  boxShadow?: BoxShadowType;
};

/**
 * Build geometry style given the geometry style input
 * @param input - The geometry style builder input to use for the style generation
 * @returns the corresponding geometry style
 */
export function geometryStyleBuilder(input: GeometryStyleBuilderInput): string {
  const res: string[] = [];

  // Width & Height
  {
    const classNameW = input.fill ? "w-full" : input.width || "w-auto";
    const classNameH = input.height || "h-auto";
    res.push(classNameW, classNameH);
  }

  // Border width
  if (input.outlined && !input.minimal) {
    // Default state
    if (input.borderWidth) {
      res.push(input.borderWidth);
    } else {
      res.push("border-0");
    }

    // Hover state
    if (input.hoverBorderWidth) {
      res.push(input.hoverBorderWidth);
    }

    // Focus state
    if (input.focusBorderWidth) {
      res.push(input.focusBorderWidth);
    }
  }

  // Border radius
  {
    const className = input.borderRadius || "rounded-sm";
    res.push(className);
  }

  // Ring width
  if (input.ringed && !input.minimal) {
    // Default state
    if (input.ringWidth) {
      res.push(input.ringWidth);
    } else {
      res.push("ring-0");
    }

    // Hover state
    if (input.hoverRingWidth) {
      res.push(input.hoverRingWidth);
    }

    // Focus state
    if (input.focusRingWidth) {
      res.push(input.focusRingWidth);
    }
  }

  // Horizontal & Vertical padding
  {
    if (input.leftPadding || input.rightPadding) {
      res.push(input.leftPadding || "", input.rightPadding || "");
    } else {
      res.push(input.horizontalPadding || "px-5");
    }

    if (input.topPadding || input.bottomPadding) {
      res.push(input.topPadding || "", input.bottomPadding || "");
    } else {
      res.push(input.verticalPadding || "py-2");
    }
  }

  // Box shadow
  {
    const className = input.boxShadow || "shadow-none";
    res.push(className);
  }

  return res.join(" ");
}
