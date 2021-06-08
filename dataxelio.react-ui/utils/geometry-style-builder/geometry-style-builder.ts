import {
  WidthType,
  MaxWidthType,
  MinWidthType,
  HeightType,
  MaxHeightType,
  MinHeightType,
  BorderWidthType,
  BorderRadiusType,
  RingWidthType,
  LeftPaddingType,
  RightPaddingType,
  HorizontalPaddingType,
  TopPaddingType,
  BottomPaddingType,
  VerticalPaddingType,
  BoxShadowType,
  TransformOriginType,
  TransformScaleType,
  TransformRotateType,
  TransformTranslateType,
} from "@dataxelio/react-ui.utils.prop-types";

export type GeometryStyleBuilderInput = {
  fixed?: boolean;
  fill?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  ringed?: boolean;

  width?: WidthType;
  maxWidth?: MaxWidthType;
  minWidth?: MinWidthType;
  height?: HeightType;
  maxHeight?: MaxHeightType;
  minHeight?: MinHeightType;
  borderWidth?: BorderWidthType;
  forceOutline?: boolean;
  borderRadius?: BorderRadiusType;
  ringWidth?: RingWidthType;
  forceRing?: boolean;
  leftPadding?: LeftPaddingType;
  rightPadding?: RightPaddingType;
  horizontalPadding?: HorizontalPaddingType;
  topPadding?: TopPaddingType;
  bottomPadding?: BottomPaddingType;
  verticalPadding?: VerticalPaddingType;
  boxShadow?: BoxShadowType;
  transformOrigin?: TransformOriginType;
  transformScale?: TransformScaleType;
  transformRotate?: TransformRotateType;
  transformTranslate?: TransformTranslateType;
};

/**
 * Build geometry style given the geometry style input
 * @param input - The geometry style builder input to use for the style generation
 * @returns the corresponding geometry style
 */
export function geometryStyleBuilder(input: GeometryStyleBuilderInput): string {
  const res: string[] = [];

  // Width & Height
  res.push(
    input.fixed ? "container" : input.fill ? "w-full" : input.width ?? "w-auto",
    input.height ?? "h-auto"
  );

  // Max Width
  !!input.maxWidth && res.push(input.maxWidth);

  // Min Width
  !!input.minWidth && res.push(input.minWidth);

  // Max Height
  !!input.maxHeight && res.push(input.maxHeight);

  // Min Height
  !!input.minHeight && res.push(input.minHeight);

  // Border width
  if (input.forceOutline || (input.outlined && !input.minimal)) {
    res.push(input.borderWidth ?? "border");
  } else {
    res.push("border-0");
  }

  // Border radius
  res.push(input.borderRadius ?? "rounded-sm");

  // Ring width
  if (input.forceRing || (input.ringed && !input.minimal)) {
    res.push(input.ringWidth ?? "ring-2");
  } else {
    res.push("ring-0");
  }

  // Left padding
  !!input.leftPadding && res.push(input.leftPadding);

  // Right padding
  !!input.rightPadding && res.push(input.rightPadding);

  // Horizontal padding
  !!input.horizontalPadding && res.push(input.horizontalPadding);

  // Top padding
  !!input.topPadding && res.push(input.topPadding);

  // Bottom padding
  !!input.bottomPadding && res.push(input.bottomPadding);

  // Vertical padding
  !!input.verticalPadding && res.push(input.verticalPadding);

  // Box shadow
  res.push(input.boxShadow ?? "shadow-none");

  // Transform
  if (
    !!input.transformOrigin ||
    !!input.transformScale ||
    !!input.transformRotate ||
    !!input.transformTranslate
  ) {
    res.push("transform");

    // Transform origin
    !!input.transformOrigin && res.push(input.transformOrigin);

    // Scale
    !!input.transformScale && res.push(input.transformScale);

    // Rotate
    !!input.transformRotate && res.push(input.transformRotate);

    // Translate
    !!input.transformTranslate && res.push(input.transformTranslate);
  }

  return res.join(" ");
}

/**
 * Build debug geometry style given the debug geometry style input
 * @param debugMode - Tell if debug mode is activated
 * @returns the generated debug geometry style
 */
export function debugGeometryStyleBuilder(debugMode: boolean): string {
  let res = "";

  if (debugMode) {
    res = "border";
  }

  return res;
}
