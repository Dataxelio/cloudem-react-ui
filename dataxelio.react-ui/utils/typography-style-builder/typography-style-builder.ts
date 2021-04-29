import {
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
  LineHeightType,
} from "@dataxelio/react-ui.utils.prop-types";

export type TypographyStyleBuilderInput = {
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  letterSpacing?: LetterSpacingType;
  fontHeight?: LineHeightType;
};

/**
 * Build typography style given the typography style input
 * @param input - The typography style builder input to use for the style generation
 * @returns the corresponding typography style
 */
export function typographyStyleBuilder(input: TypographyStyleBuilderInput): string {
  const res: string[] = [];

  // Font size
  {
    const className = input.fontSize || "text-base";
    res.push(className);
  }

  // Font weight
  {
    const className = input.fontWeight || "font-normal";
    res.push(className);
  }

  // Letter spacing
  {
    const className = input.letterSpacing || "tracking-normal";
    res.push(className);
  }

  // Line height
  {
    const className = input.fontHeight || "leading-normal";
    res.push(className);
  }

  return res.join(" ");
}
