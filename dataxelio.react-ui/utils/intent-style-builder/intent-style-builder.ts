import {
  IntentState,
  IntentColor,
  BackgroundOpacityType,
  ForegroundOpacityType,
  BorderOpacityType,
  RingOpacityType,
  CursorType,
} from "@dataxelio/react-ui.utils.prop-types";

export type IntentStyleBuilderInput = {
  intentColor?: IntentColor;
  useDarkGrayAsDefaultIntent?: boolean;
  outlined?: boolean;
  ringed?: boolean;
  minimal?: boolean;
  backgroundOpacity?: BackgroundOpacityType;
  backgroundFade?: boolean;
  foregroundOpacity?: ForegroundOpacityType;
  foregroundFade?: boolean;
  borderOpacity?: BorderOpacityType;
  borderFade?: boolean;
  ringOpacity?: RingOpacityType;
  ringedFade?: boolean;
  intentAtDefaultState?: boolean;
  forceLowGrayBackgroundAtHoverState?: boolean;
  forceLowGrayOutlineAtHoverState?: boolean;
  forceLowGrayForeground?: boolean;
  forceLowBrandBackgroundAtHoverState?: boolean;
  forceLowBrandOutlineAtHoverState?: boolean;
  forceLowBrandForeground?: boolean;
  forceSharpBackground?: boolean;
  forceSharpForeground?: boolean;
  forceSharpBorder?: boolean;
  forceSharpRing?: boolean;
  forceInvertedSharpBackground?: boolean;
  forceInvertedSharpForeground?: boolean;
  forceInvertedSharpBorder?: boolean;
  forceInvertedSharpRing?: boolean;
  withFocusRing?: boolean;
  withPlaceholder?: boolean;
  disablePointerEvents?: boolean;
  removeDefaultBrowserAppearance?: boolean;
  cursor?: CursorType;
};

// Background
/*const backgroundLowIntent = [
  "bg-gray-200 dark:bg-gray-700",
  "bg-brand-200 dark:bg-brand-700",
  "bg-primary-200 dark:bg-primary-700",
  "bg-success-200 dark:bg-success-700",
  "bg-warning-200 dark:bg-warning-700",
  "bg-danger-200 dark:bg-danger-700",
  "bg-white dark:bg-gray-900", // Sharp
  "bg-gray-900 dark:bg-gray-100", // Inverted Sharp
  "bg-transparent", // Transparent
];*/

const backgroundMediumIntent = [
  "bg-gray-50 dark:bg-gray-900",
  "bg-gray-100 dark:bg-gray-800",
  "bg-gray-600 dark:bg-gray-300",
  "bg-gray-700 dark:bg-gray-200",
  "bg-brand-600 dark:bg-brand-300",
  "bg-primary-600 dark:bg-primary-300",
  "bg-success-600 dark:bg-success-300",
  "bg-warning-600 dark:bg-warning-300",
  "bg-danger-600 dark:bg-danger-300",
  "bg-black dark:bg-white",
  "bg-gray-50 dark:bg-gray-800", // Low Gray
  "bg-brand-50 dark:bg-brand-800", // Low Brand
  "bg-white dark:bg-gray-800", // Sharp
  "bg-gray-800 dark:bg-gray-100", // Inverted Sharp
  "bg-transparent", // Transparent
];

const backgroundHighIntent = [
  "bg-gray-100 dark:bg-gray-800",
  "bg-gray-200 dark:bg-gray-700",
  "bg-gray-700 dark:bg-gray-200",
  "bg-gray-800 dark:bg-gray-100",
  "bg-brand-700 dark:bg-brand-200",
  "bg-primary-700 dark:bg-primary-200",
  "bg-success-700 dark:bg-success-200",
  "bg-warning-700 dark:bg-warning-200",
  "bg-danger-700 dark:bg-danger-200",
  "bg-black dark:bg-white",
  "bg-gray-50 dark:bg-gray-800", // Low Gray
  "bg-brand-50 dark:bg-brand-800", // Low Brand
  "bg-white dark:bg-gray-800", // Sharp
  "bg-gray-800 dark:bg-gray-100", // Inverted Sharp
  "bg-transparent", // Transparent
];

const backgroundHighestIntent = [
  "bg-gray-200 dark:bg-gray-700",
  "bg-gray-300 dark:bg-gray-600",
  "bg-gray-800 dark:bg-gray-100",
  "bg-gray-900 dark:bg-gray-50",
  "bg-brand-800 dark:bg-brand-100",
  "bg-primary-800 dark:bg-primary-100",
  "bg-success-800 dark:bg-success-100",
  "bg-warning-800 dark:bg-warning-100",
  "bg-danger-800 dark:bg-danger-100",
  "bg-black dark:bg-white",
  "bg-gray-50 dark:bg-gray-800", // Low Gray
  "bg-brand-50 dark:bg-brand-800", // Low Brand
  "bg-white dark:bg-gray-800", // Sharp
  "bg-gray-800 dark:bg-gray-100", // Inverted Sharp
  "bg-transparent", // Transparent
];

// Foreground
/*const foregroundLowIntent = [
  "text-gray-400 dark:text-gray-600",
  "text-brand-400 dark:text-brand-600",
  "text-primary-400 dark:text-primary-600",
  "text-success-400 dark:text-success-600",
  "text-warning-400 dark:text-warning-600",
  "text-danger-400 dark:text-danger-600",
  "text-gray-900 dark:text-white", // Sharp
  "text-white dark:text-gray-900", // Inverted Sharp
  "text-transparent", // Transparent
];*/

const foregroundMediumIntent = [
  "text-gray-50 dark:text-gray-900",
  "text-gray-100 dark:text-gray-800",
  "text-gray-500 dark:text-gray-400",
  "text-gray-700 dark:text-gray-200",
  "text-brand-500 dark:text-brand-400",
  "text-primary-500 dark:text-primary-400",
  "text-success-500 dark:text-success-400",
  "text-warning-500 dark:text-warning-400",
  "text-danger-500 dark:text-danger-400",
  "text-black dark:text-white",
  "text-gray-300 dark:text-gray-600", // Low Gray
  "text-brand-300 dark:text-brand-600", // Low Brand
  "text-gray-900 dark:text-white", // Sharp
  "text-white dark:text-gray-900", // Inverted Sharp
  "text-transparent", // Transparent
];

const foregroundHighIntent = [
  "text-gray-100 dark:text-gray-800",
  "text-gray-200 dark:text-gray-700",
  "text-gray-600 dark:text-gray-300",
  "text-gray-800 dark:text-gray-100",
  "text-brand-600 dark:text-brand-300",
  "text-primary-600 dark:text-primary-300",
  "text-success-600 dark:text-success-300",
  "text-warning-600 dark:text-warning-300",
  "text-danger-600 dark:text-danger-300",
  "text-black dark:text-white",
  "text-gray-300 dark:text-gray-600", // Low Gray
  "text-brand-300 dark:text-brand-600", // Low Brand
  "text-gray-900 dark:text-white", // Sharp
  "text-white dark:text-gray-900", // Inverted Sharp
  "text-transparent", // Transparent
];

const foregroundHighestIntent = [
  "text-gray-200 dark:text-gray-700",
  "text-gray-300 dark:text-gray-600",
  "text-gray-700 dark:text-gray-200",
  "text-gray-900 dark:text-gray-50",
  "text-brand-700 dark:text-brand-300",
  "text-primary-700 dark:text-primary-200",
  "text-success-700 dark:text-success-200",
  "text-warning-700 dark:text-warning-200",
  "text-danger-700 dark:text-danger-200",
  "text-black dark:text-white",
  "text-gray-300 dark:text-gray-600", // Low Gray
  "text-brand-300 dark:text-brand-600", // Low Brand
  "text-gray-900 dark:text-white", // Sharp
  "text-white dark:text-gray-900", // Inverted Sharp
  "text-transparent", // Transparent
];

// Border
/*const borderLowIntent = [
  "border-gray-400 dark:border-gray-600",
  "border-brand-400 dark:border-brand-600",
  "border-primary-400 dark:border-primary-600",
  "border-success-400 dark:border-success-600",
  "border-warning-400 dark:border-warning-600",
  "border-danger-400 dark:border-danger-600",
  "border-gray-900 dark:border-white", // Sharp
  "border-white dark:border-gray-900", // Inverted Sharp
  "border-transparent", // Transparent
];*/

const borderMediumIntent = [
  "border-gray-50 dark:border-gray-900",
  "border-gray-100 dark:border-gray-800",
  "border-gray-500 dark:border-gray-400",
  "border-gray-700 dark:border-gray-200",
  "border-brand-500 dark:border-brand-400",
  "border-primary-500 dark:border-primary-400",
  "border-success-500 dark:border-success-400",
  "border-warning-500 dark:border-warning-400",
  "border-danger-500 dark:border-danger-400",
  "border-black dark:border-white",
  "border-gray-300 dark:border-gray-600", // Low Gray
  "border-brand-300 dark:border-brand-600", // Low Brand
  "border-gray-800 dark:border-white", // Sharp
  "border-white dark:border-gray-800", // Inverted Sharp
  "border-transparent", // Transparent
];

const borderHighIntent = [
  "border-gray-100 dark:border-gray-800",
  "border-gray-200 dark:border-gray-700",
  "border-gray-600 dark:border-gray-300",
  "border-gray-800 dark:border-gray-100",
  "border-brand-600 dark:border-brand-300",
  "border-primary-600 dark:border-primary-300",
  "border-success-600 dark:border-success-300",
  "border-warning-600 dark:border-warning-300",
  "border-danger-600 dark:border-danger-300",
  "border-black dark:border-white",
  "border-gray-300 dark:border-gray-600", // Low Gray
  "border-brand-300 dark:border-brand-600", // Low Brand
  "border-gray-800 dark:border-white", // Sharp
  "border-white dark:border-gray-800", // Inverted Sharp
  "border-transparent", // Transparent
];

const borderHighestIntent = [
  "border-gray-200 dark:border-gray-700",
  "border-gray-300 dark:border-gray-600",
  "border-gray-700 dark:border-gray-200",
  "border-gray-900 dark:border-gray-50",
  "border-brand-700 dark:border-brand-300",
  "border-primary-700 dark:border-primary-200",
  "border-success-700 dark:border-success-200",
  "border-warning-700 dark:border-warning-200",
  "border-danger-700 dark:border-danger-200",
  "border-black dark:border-white",
  "border-gray-300 dark:border-gray-600", // Low Gray
  "border-brand-300 dark:border-brand-600", // Low Brand
  "border-gray-800 dark:border-white", // Sharp
  "border-white dark:border-gray-800", // Inverted Sharp
  "border-transparent", // Transparent
];

// Ring
/*const ringLowIntent = [
  "ring-gray-400 dark:ring-gray-600",
  "ring-brand-400 dark:ring-brand-600",
  "ring-primary-400 dark:ring-primary-600",
  "ring-success-400 dark:ring-success-600",
  "ring-warning-400 dark:ring-warning-600",
  "ring-danger-400 dark:ring-danger-600",
  "ring-gray-900 dark:ring-white", // Sharp
  "ring-white dark:ring-gray-900", // Inverted Sharp
  "ring-transparent", // Transparent
];*/

const ringMediumIntent = [
  "ring-gray-50 dark:ring-gray-900",
  "ring-gray-100 dark:ring-gray-800",
  "ring-gray-500 dark:ring-gray-400",
  "ring-gray-700 dark:ring-gray-200",
  "ring-brand-500 dark:ring-brand-400",
  "ring-primary-500 dark:ring-primary-400",
  "ring-success-500 dark:ring-success-400",
  "ring-warning-500 dark:ring-warning-400",
  "ring-danger-500 dark:ring-danger-400",
  "ring-black dark:ring-white",
  "ring-gray-300 dark:ring-gray-600", // Low Gray
  "ring-brand-300 dark:ring-brand-600", // Low Brand
  "ring-gray-800 dark:ring-white", // Sharp
  "ring-white dark:ring-gray-800", // Inverted Sharp
  "ring-transparent", // Transparent
];

const ringHighIntent = [
  "ring-gray-100 dark:ring-gray-800",
  "ring-gray-200 dark:ring-gray-700",
  "ring-gray-600 dark:ring-gray-300",
  "ring-gray-800 dark:ring-gray-100",
  "ring-brand-600 dark:ring-brand-300",
  "ring-primary-600 dark:ring-primary-300",
  "ring-success-600 dark:ring-success-300",
  "ring-warning-600 dark:ring-warning-300",
  "ring-danger-600 dark:ring-danger-300",
  "ring-black dark:ring-white",
  "ring-gray-300 dark:ring-gray-600", // Low Gray
  "ring-brand-300 dark:ring-brand-600", // Low Brand
  "ring-gray-800 dark:ring-white", // Sharp
  "ring-white dark:ring-gray-800", // Inverted Sharp
  "ring-transparent", // Transparent
];

const ringHighestIntent = [
  "ring-gray-200 dark:ring-gray-700",
  "ring-gray-300 dark:ring-gray-600",
  "ring-gray-700 dark:ring-gray-200",
  "ring-gray-900 dark:ring-gray-50",
  "ring-brand-700 dark:ring-brand-300",
  "ring-primary-700 dark:ring-primary-200",
  "ring-success-700 dark:ring-success-200",
  "ring-warning-700 dark:ring-warning-200",
  "ring-danger-700 dark:ring-danger-200",
  "ring-black dark:ring-white",
  "ring-gray-300 dark:ring-gray-600", // Low Gray
  "ring-brand-300 dark:ring-brand-600", // Low Brand
  "ring-gray-800 dark:ring-white", // Sharp
  "ring-white dark:ring-gray-800", // Inverted Sharp
  "ring-transparent", // Transparent
];

// Low Gray Index
const INDEX_LOW_GRAY = 10;

// Low Brand Index
const INDEX_LOW_BRAND = 11;

// Sharp Index
const INDEX_SHARP = 12;

// Inverted Sharp Index
const INDEX_INVERTED_SHARP = 13;

// Transparent Index
const INDEX_TRANSPARENT = 14;

/**
 * Compute the component style given the style entry
 * @param intentColor - The intent color
 * @param outlined - Tells if component is outlined
 * @param ringed - Tells if component is ringed
 * @param minimal - Tells if component is minimal (without background, without border and without ring)
 * @param backgroundOpacity - Background opacity (Take precedence over Background fade)
 * @param backgroundFade - Tells if component background is fade
 * @param foregroundOpacity - Foreground opacity (Take precedence over Foreground fade)
 * @param foregroundFade - Tells if component foreground is fade
 * @param borderOpacity - Border opacity (Take precedence over Border fade)
 * @param borderFade - Tells if component border is fade
 * @param ringOpacity - Ring opacity (Take precedence over Ring fade)
 * @param ringedFade - Tells if component ring is fade
 * @param forceLowGrayBackground - Force component background to low gray even if minimal
 * @param forceLowGrayForeground - Force component foreground to low gray
 * @param forceLowGrayOutline - Force component outline to low gray even if minimal
 * @param forceLowBrandBackground - Force component background to low brand even if minimal
 * @param forceLowBrandForeground - Force component foreground to low brand
 * @param forceLowBrandOutline - Force component outline to low brand even if minimal
 * @param forceSharpBackground - Force component sharp background
 * @param forceSharpForeground - Force component sharp foreground
 * @param forceSharpBorder - Force component sharp border
 * @param forceSharpRing - Force component sharp ring
 * @param forceInvertedSharpBackground - Force component inverted sharp background
 * @param forceInvertedSharpForeground - Force component inverted sharp foreground
 * @param forceInvertedSharpBorder - Force component inverted sharp border
 * @param forceInvertedSharpRing - Force component sharp inverted ring
 * @param withFocusRing - Add a focus ring (typically low intent border)
 * @param withPlaceholder - Add placeholder style
 * @param disablePointerEvents - Disable pointer events
 * @param removeDefaultBrowserAppearance - Remove default browser appearance
 * @param cursor - Cursor
 * @param backgroundIntentData - Background intent data
 * @param foregroundIntentData - Foreground intent data
 * @param borderIntentData - Border intent data
 * @param ringIntentData - Ring intent data
 * @returns the computed component style
 */
export function computeComponentStyle(
  intentColor: IntentColor,
  outlined: boolean,
  ringed: boolean,
  minimal: boolean,
  backgroundOpacity: BackgroundOpacityType,
  backgroundFade: boolean,
  foregroundOpacity: ForegroundOpacityType,
  foregroundFade: boolean,
  borderOpacity: BorderOpacityType,
  borderFade: boolean,
  ringOpacity: RingOpacityType,
  ringedFade: boolean,
  forceLowGrayBackground: boolean,
  forceLowGrayForeground: boolean,
  forceLowGrayOutline: boolean,
  forceLowBrandBackground: boolean,
  forceLowBrandForeground: boolean,
  forceLowBrandOutline: boolean,
  forceSharpBackground: boolean,
  forceSharpForeground: boolean,
  forceSharpBorder: boolean,
  forceSharpRing: boolean,
  forceInvertedSharpBackground: boolean,
  forceInvertedSharpForeground: boolean,
  forceInvertedSharpBorder: boolean,
  forceInvertedSharpRing: boolean,
  withFocusRing: boolean,
  withPlaceholder: boolean,
  disablePointerEvents: boolean,
  removeDefaultBrowserAppearance: boolean,
  cursor: CursorType,
  backgroundIntentData: string[],
  foregroundIntentData: string[],
  borderIntentData: string[],
  ringIntentData: string[]
): string {
  const res: string[] = [];

  // Background Element
  const bgIndex =
    forceSharpBackground || outlined
      ? INDEX_SHARP
      : forceInvertedSharpBackground
      ? INDEX_INVERTED_SHARP
      : forceLowGrayBackground
      ? INDEX_LOW_GRAY
      : forceLowBrandBackground
      ? INDEX_LOW_BRAND
      : !minimal && !outlined
      ? Number(intentColor)
      : INDEX_TRANSPARENT;

  res.push(backgroundIntentData[bgIndex]);

  // Background Opacity & Fade
  (backgroundOpacity !== "bg-opacity-100" || backgroundFade) &&
    res.push(backgroundOpacity !== "bg-opacity-100" ? backgroundOpacity : "bg-opacity-50");

  // Foreground Element
  const fgIndex = forceSharpForeground
    ? INDEX_SHARP
    : forceInvertedSharpForeground
    ? INDEX_INVERTED_SHARP
    : forceLowGrayForeground
    ? INDEX_LOW_GRAY
    : forceLowBrandForeground
    ? INDEX_LOW_BRAND
    : minimal || outlined
    ? Number(intentColor)
    : Number(intentColor) >= Number(IntentColor.GRAY)
    ? INDEX_INVERTED_SHARP
    : INDEX_SHARP;

  res.push(foregroundIntentData[fgIndex]);

  // Foreground Opacity & Fade
  (foregroundOpacity !== "text-opacity-100" || foregroundFade) &&
    res.push(foregroundOpacity !== "text-opacity-100" ? foregroundOpacity : "text-opacity-50");

  // Border Element
  if (
    (!minimal && outlined) ||
    forceSharpBorder ||
    forceInvertedSharpBorder ||
    forceLowGrayOutline
  ) {
    const brdIndex = forceSharpBorder
      ? INDEX_SHARP
      : forceInvertedSharpBorder
      ? INDEX_INVERTED_SHARP
      : forceLowGrayOutline
      ? INDEX_LOW_GRAY
      : forceLowBrandOutline
      ? INDEX_LOW_BRAND
      : outlined
      ? Number(intentColor)
      : INDEX_INVERTED_SHARP;

    res.push(borderIntentData[brdIndex]);
  }

  // Border Opacity & Fade
  (borderOpacity !== "border-opacity-100" || borderFade) &&
    res.push(borderOpacity !== "border-opacity-100" ? borderOpacity : "border-opacity-50");

  // Ring Element
  if ((!minimal && ringed) || forceSharpRing || forceInvertedSharpRing || withFocusRing) {
    const ringIndex = forceSharpRing
      ? INDEX_SHARP
      : forceInvertedSharpRing
      ? INDEX_INVERTED_SHARP
      : withFocusRing
      ? INDEX_LOW_GRAY
      : ringed
      ? Number(intentColor)
      : INDEX_INVERTED_SHARP;

    res.push(ringIntentData[ringIndex]);
  }

  // Ring Opacity & Fade
  (ringOpacity !== "ring-opacity-100" || ringedFade) &&
    res.push(ringOpacity !== "ring-opacity-100" ? ringOpacity : "ring-opacity-50");

  // Placeholder style
  withPlaceholder &&
    res.push("placeholder-gray-900 dark:placeholder-gray-100 placeholder-opacity-30");

  // Disable pointer events
  disablePointerEvents && res.push("pointer-events-none");

  // Default browser appearance removal
  removeDefaultBrowserAppearance && res.push("appearance-none outline-none focus:outline-none");

  // Cursor
  cursor !== "cursor-auto" && res.push(cursor);

  return res.join(" ");
}

/**
 * Build intent style given the component state and the intent style input
 * @param state - The component current state
 * @param input - The intent style builder input to use for the style generation
 * @returns the generated intent style
 */
export function intentStyleBuilder(state: IntentState, input: IntentStyleBuilderInput): string {
  let res: string = "";
  const defaultIntentAtDefaultState = input.intentAtDefaultState ?? true;
  const defaultIntentColor = input.useDarkGrayAsDefaultIntent
    ? IntentColor.GRAY_DARK
    : IntentColor.GRAY;
  const intentColorFinal = input.intentColor ?? defaultIntentColor;

  switch (state) {
    case IntentState.DEFAULT:
      res = computeComponentStyle(
        defaultIntentAtDefaultState ? intentColorFinal : defaultIntentColor,
        input.outlined ?? false,
        input.ringed ?? false,
        input.minimal ?? false,
        input.backgroundOpacity ?? "bg-opacity-100",
        input.backgroundFade ?? false,
        input.foregroundOpacity ?? "text-opacity-100",
        input.foregroundFade ?? false,
        input.borderOpacity ?? "border-opacity-100",
        input.borderFade ?? false,
        input.ringOpacity ?? "ring-opacity-100",
        input.ringedFade ?? false,
        false,
        input.forceLowGrayForeground ?? false,
        false,
        false,
        input.forceLowBrandForeground ?? false,
        false,
        input.forceSharpBackground ?? false,
        input.forceSharpForeground ?? false,
        input.forceSharpBorder ?? false,
        input.forceSharpRing ?? false,
        input.forceInvertedSharpBackground ?? false,
        input.forceInvertedSharpForeground ?? false,
        input.forceInvertedSharpBorder ?? false,
        input.forceInvertedSharpRing ?? false,
        input.withFocusRing ?? false,
        input.withPlaceholder ?? false,
        input.disablePointerEvents ?? false,
        input.removeDefaultBrowserAppearance ?? false,
        input.cursor ?? "cursor-auto",
        backgroundMediumIntent,
        foregroundMediumIntent,
        borderMediumIntent,
        ringMediumIntent
      );
      break;

    case IntentState.HOVER:
      res = computeComponentStyle(
        intentColorFinal,
        input.outlined ?? false,
        input.ringed ?? false,
        input.minimal ?? false,
        input.backgroundOpacity ?? "bg-opacity-100",
        input.backgroundFade ?? false,
        input.foregroundOpacity ?? "text-opacity-100",
        input.foregroundFade ?? false,
        input.borderOpacity ?? "border-opacity-100",
        input.borderFade ?? false,
        input.ringOpacity ?? "ring-opacity-100",
        input.ringedFade ?? false,
        input.forceLowGrayBackgroundAtHoverState ?? false,
        input.forceLowGrayForeground ?? false,
        input.forceLowGrayOutlineAtHoverState ?? false,
        input.forceLowBrandBackgroundAtHoverState ?? false,
        input.forceLowBrandForeground ?? false,
        input.forceLowBrandOutlineAtHoverState ?? false,
        input.forceSharpBackground ?? false,
        input.forceSharpForeground ?? false,
        input.forceSharpBorder ?? false,
        input.forceSharpRing ?? false,
        input.forceInvertedSharpBackground ?? false,
        input.forceInvertedSharpForeground ?? false,
        input.forceInvertedSharpBorder ?? false,
        input.forceInvertedSharpRing ?? false,
        input.withFocusRing ?? false,
        input.withPlaceholder ?? false,
        input.disablePointerEvents ?? false,
        input.removeDefaultBrowserAppearance ?? false,
        input.cursor ?? "cursor-auto",
        backgroundHighIntent,
        foregroundHighIntent,
        borderHighIntent,
        ringHighIntent
      );
      break;

    case IntentState.FOCUS:
      res = computeComponentStyle(
        intentColorFinal,
        input.outlined ?? false,
        input.ringed ?? false,
        input.minimal ?? false,
        input.backgroundOpacity ?? "bg-opacity-100",
        input.backgroundFade ?? false,
        input.foregroundOpacity ?? "text-opacity-100",
        input.foregroundFade ?? false,
        input.borderOpacity ?? "border-opacity-100",
        input.borderFade ?? false,
        input.ringOpacity ?? "ring-opacity-100",
        input.ringedFade ?? false,
        input.forceLowGrayBackgroundAtHoverState ?? false,
        input.forceLowGrayForeground ?? false,
        input.forceLowGrayOutlineAtHoverState ?? false,
        input.forceLowBrandBackgroundAtHoverState ?? false,
        input.forceLowBrandForeground ?? false,
        input.forceLowBrandOutlineAtHoverState ?? false,
        input.forceSharpBackground ?? false,
        input.forceSharpForeground ?? false,
        input.forceSharpBorder ?? false,
        input.forceSharpRing ?? false,
        input.forceInvertedSharpBackground ?? false,
        input.forceInvertedSharpForeground ?? false,
        input.forceInvertedSharpBorder ?? false,
        input.forceInvertedSharpRing ?? false,
        input.withFocusRing ?? false,
        input.withPlaceholder ?? false,
        input.disablePointerEvents ?? false,
        input.removeDefaultBrowserAppearance ?? false,
        input.cursor ?? "cursor-auto",
        backgroundHighIntent,
        foregroundHighIntent,
        borderHighIntent,
        ringHighIntent
      );
      break;

    case IntentState.PRESSED:
      res = computeComponentStyle(
        intentColorFinal,
        input.outlined ?? false,
        input.ringed ?? false,
        input.minimal ?? false,
        input.backgroundOpacity ?? "bg-opacity-100",
        input.backgroundFade ?? false,
        input.foregroundOpacity ?? "text-opacity-100",
        input.foregroundFade ?? false,
        input.borderOpacity ?? "border-opacity-100",
        input.borderFade ?? false,
        input.ringOpacity ?? "ring-opacity-100",
        input.ringedFade ?? false,
        input.forceLowGrayBackgroundAtHoverState ?? false,
        input.forceLowGrayForeground ?? false,
        input.forceLowGrayOutlineAtHoverState ?? false,
        input.forceLowBrandBackgroundAtHoverState ?? false,
        input.forceLowBrandForeground ?? false,
        input.forceLowBrandOutlineAtHoverState ?? false,
        input.forceSharpBackground ?? false,
        input.forceSharpForeground ?? false,
        input.forceSharpBorder ?? false,
        input.forceSharpRing ?? false,
        input.forceInvertedSharpBackground ?? false,
        input.forceInvertedSharpForeground ?? false,
        input.forceInvertedSharpBorder ?? false,
        input.forceInvertedSharpRing ?? false,
        input.withFocusRing ?? false,
        input.withPlaceholder ?? false,
        input.disablePointerEvents ?? false,
        input.removeDefaultBrowserAppearance ?? false,
        input.cursor ?? "cursor-auto",
        backgroundHighestIntent,
        foregroundHighestIntent,
        borderHighestIntent,
        ringHighestIntent
      );
      break;

    case IntentState.DISABLED:
      res = computeComponentStyle(
        defaultIntentAtDefaultState ? intentColorFinal : defaultIntentColor,
        input.outlined ?? false,
        input.ringed ?? false,
        input.minimal ?? false,
        input.backgroundOpacity ?? "bg-opacity-100",
        true,
        input.foregroundOpacity ?? "text-opacity-100",
        true,
        input.borderOpacity ?? "border-opacity-100",
        true,
        input.ringOpacity ?? "ring-opacity-100",
        true,
        false,
        input.forceLowGrayForeground ?? false,
        false,
        false,
        input.forceLowBrandForeground ?? false,
        false,
        input.forceSharpBackground ?? false,
        input.forceSharpForeground ?? false,
        input.forceSharpBorder ?? false,
        input.forceSharpRing ?? false,
        input.forceInvertedSharpBackground ?? false,
        input.forceInvertedSharpForeground ?? false,
        input.forceInvertedSharpBorder ?? false,
        input.forceInvertedSharpRing ?? false,
        input.withFocusRing ?? false,
        input.withPlaceholder ?? false,
        true,
        input.removeDefaultBrowserAppearance ?? false,
        input.cursor ?? "cursor-auto",
        backgroundMediumIntent,
        foregroundMediumIntent,
        borderMediumIntent,
        ringMediumIntent
      );
      break;
  }

  return res;
}

/**
 * Build debug intent style given the debug intent style input
 * @param debugMode - Tell if debug mode is activated
 * @param intentColor - The debug intent color
 * @returns the generated debug intent style
 */
export function debugIntentStyleBuilder(debugMode: boolean, intentColor: IntentColor): string {
  let res = "";

  if (debugMode) {
    res = borderMediumIntent[Number(intentColor)];
  }

  return res;
}

/**
 * Build default browser appearance removal intent style
 * @returns the generated default appearance removal intent style
 */
// export function defaultAppearanceRemovalIntentStyleBuilder(): string {
//   return "appearance-none outline-none focus:outline-none";
// }
