import {
  FontSizeType,
  FontSmoothingType,
  FontStyleType,
  FontWeightType,
  FontVariantNumericType,
  LetterSpacingType,
  LineHeightType,
  ListStyleType,
  ListStylePositionType,
  TextDecorationType,
  TextTransformType,
  TextOverflowType,
  WhitespaceType,
  WordBreakType,
} from "@dataxelio/react-ui.utils.prop-types";

export type TypographyStyleBuilderInput = {
  fontSize?: FontSizeType;
  fontSmoothing?: FontSmoothingType;
  fontStyle?: FontStyleType;
  fontWeight?: FontWeightType;
  fontVariantNumeric?: FontVariantNumericType;
  letterSpacing?: LetterSpacingType;
  fontHeight?: LineHeightType;
  listStyle?: ListStyleType;
  listStylePosition?: ListStylePositionType;
  textDecoration?: TextDecorationType;
  textTransform?: TextTransformType;
  textOverflow?: TextOverflowType;
  whitespace?: WhitespaceType;
  wordBreak?: WordBreakType;
};

/**
 * Build typography style given the typography style input
 * @param input - The typography style builder input to use for the style generation
 * @returns the corresponding typography style
 */
export function typographyStyleBuilder(input: TypographyStyleBuilderInput): string {
  const res: string[] = [];

  // Font size
  res.push(input.fontSize ?? "text-base");

  // Font smoothing
  res.push(input.fontSmoothing ?? "antialiased");

  // Font style
  res.push(input.fontStyle ?? "not-italic");

  // Font weight
  res.push(input.fontWeight ?? "font-normal");

  // Font variant numeric
  !!input.fontVariantNumeric && res.push(input.fontVariantNumeric);

  // Letter spacing
  res.push(input.letterSpacing ?? "tracking-normal");

  // Line height
  res.push(input.fontHeight ?? "leading-normal");

  // List style
  !!input.listStyle && res.push(input.listStyle);

  // List style position
  !!input.listStylePosition && res.push(input.listStylePosition);

  // Text decoration
  !!input.textDecoration && res.push(input.textDecoration);

  // Text transform
  !!input.textTransform && res.push(input.textTransform);

  // Text Overflow
  !!input.textOverflow && res.push(input.textOverflow);

  // White space
  !!input.whitespace && res.push(input.whitespace);

  // Word break
  !!input.wordBreak && res.push(input.wordBreak);

  return res.join(" ");
}

/**
 * Build typography to remove list style
 * @returns the corresponding typography style
 */
export function typographyListStyleRemoval(): ListStyleType {
  return "list-none";
}
