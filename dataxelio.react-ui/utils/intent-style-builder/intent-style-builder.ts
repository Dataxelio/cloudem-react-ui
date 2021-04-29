import {
  IntentTheme,
  IntentState,
  IntentSelection,
  IntentElement,
  IntentColor,
} from "@dataxelio/react-ui.utils.prop-types";

export type StateIntentStyleBuilderInput = {
  useDarkTheme?: boolean;
  useDefaultState?: boolean;
  useHoverState?: boolean;
  useFocusState?: boolean;
  useActiveState?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  ringed?: boolean;
  ringedFade?: boolean;
  withForeground?: boolean;
  intentColor?: IntentColor;
};

export type SelectionIntentStyleBuilderInput = {
  useDarkTheme?: boolean;
  flyOver?: boolean;
  selected?: boolean;
  disabled?: boolean;
  intentColor?: IntentColor;
};

// Number of colors per element = 6
// Number of elements per state = 4*6 = 24
// Number of states per theme = 7*24 = 168
// Number of themes = 2*168 = 336
const gThemeStride = 168;
const gStateStride = 24;
const gElementStride = 6;

const stateIntentClassnames = [
  //Theme=LIGHT - State=NONE - Element=TEXT
  "text-gray-500",
  "text-brand-500",
  "text-primary-500",
  "text-success-500",
  "text-warning-500",
  "text-danger-500",
  //Theme=LIGHT - State=NONE - Element=BACKGROUND
  "bg-gray-600",
  "bg-brand-600",
  "bg-primary-600",
  "bg-success-600",
  "bg-warning-600",
  "bg-danger-600",
  //Theme=LIGHT - State=NONE - Element=BORDER
  "border-gray-500",
  "border-brand-500",
  "border-primary-500",
  "border-success-500",
  "border-warning-500",
  "border-danger-500",
  //Theme=LIGHT - State=NONE - Element=RING
  "ring-gray-500",
  "ring-brand-500",
  "ring-primary-500",
  "ring-success-500",
  "ring-warning-500",
  "ring-danger-500",

  //Theme=LIGHT - State=HOVER - Element=TEXT
  "hover:text-gray-600",
  "hover:text-brand-600",
  "hover:text-primary-600",
  "hover:text-success-600",
  "hover:text-warning-600",
  "hover:text-danger-600",
  //Theme=LIGHT - State=HOVER - Element=BACKGROUND
  "hover:bg-gray-700",
  "hover:bg-brand-700",
  "hover:bg-primary-700",
  "hover:bg-success-700",
  "hover:bg-warning-700",
  "hover:bg-danger-700",
  //Theme=LIGHT - State=HOVER - Element=BORDER
  "hover:border-gray-600",
  "hover:border-brand-600",
  "hover:border-primary-600",
  "hover:border-success-600",
  "hover:border-warning-600",
  "hover:border-danger-600",
  //Theme=LIGHT - State=HOVER - Element=RING
  "hover:ring-gray-600",
  "hover:ring-brand-600",
  "hover:ring-primary-600",
  "hover:ring-success-600",
  "hover:ring-warning-600",
  "hover:ring-danger-600",

  //Theme=LIGHT - State=GROUP_HOVER - Element=TEXT
  "group-hover:text-gray-600",
  "group-hover:text-brand-600",
  "group-hover:text-primary-600",
  "group-hover:text-success-600",
  "group-hover:text-warning-600",
  "group-hover:text-danger-600",
  //Theme=LIGHT - State=GROUP_HOVER - Element=BACKGROUND
  "group-hover:bg-gray-700",
  "group-hover:bg-brand-700",
  "group-hover:bg-primary-700",
  "group-hover:bg-success-700",
  "group-hover:bg-warning-700",
  "group-hover:bg-danger-700",
  //Theme=LIGHT - State=GROUP_HOVER - Element=BORDER
  "group-hover:border-gray-600",
  "group-hover:border-brand-600",
  "group-hover:border-primary-600",
  "group-hover:border-success-600",
  "group-hover:border-warning-600",
  "group-hover:border-danger-600",
  //Theme=LIGHT - State=GROUP_HOVER - Element=RING
  "group-hover:ring-gray-600",
  "group-hover:ring-brand-600",
  "group-hover:ring-primary-600",
  "group-hover:ring-success-600",
  "group-hover:ring-warning-600",
  "group-hover:ring-danger-600",

  //Theme=LIGHT - State=FOCUS - Element=TEXT
  "focus:text-gray-600",
  "focus:text-brand-600",
  "focus:text-primary-600",
  "focus:text-success-600",
  "focus:text-warning-600",
  "focus:text-danger-600",
  //Theme=LIGHT - State=FOCUS - Element=BACKGROUND
  "focus:bg-gray-700",
  "focus:bg-brand-700",
  "focus:bg-primary-700",
  "focus:bg-success-700",
  "focus:bg-warning-700",
  "focus:bg-danger-700",
  //Theme=LIGHT - State=FOCUS - Element=BORDER
  "focus:border-gray-600",
  "focus:border-brand-600",
  "focus:border-primary-600",
  "focus:border-success-600",
  "focus:border-warning-600",
  "focus:border-danger-600",
  //Theme=LIGHT - State=FOCUS - Element=RING
  "focus:ring-gray-600",
  "focus:ring-brand-600",
  "focus:ring-primary-600",
  "focus:ring-success-600",
  "focus:ring-warning-600",
  "focus:ring-danger-600",

  //Theme=LIGHT - State=GROUP_FOCUS - Element=TEXT
  "group-focus:text-gray-600",
  "group-focus:text-brand-600",
  "group-focus:text-primary-600",
  "group-focus:text-success-600",
  "group-focus:text-warning-600",
  "group-focus:text-danger-600",
  //Theme=LIGHT - State=GROUP_FOCUS - Element=BACKGROUND
  "group-focus:bg-gray-700",
  "group-focus:bg-brand-700",
  "group-focus:bg-primary-700",
  "group-focus:bg-success-700",
  "group-focus:bg-warning-700",
  "group-focus:bg-danger-700",
  //Theme=LIGHT - State=GROUP_FOCUS - Element=BORDER
  "group-focus:border-gray-600",
  "group-focus:border-brand-600",
  "group-focus:border-primary-600",
  "group-focus:border-success-600",
  "group-focus:border-warning-600",
  "group-focus:border-danger-600",
  //Theme=LIGHT - State=GROUP_FOCUS - Element=RING
  "group-focus:ring-gray-600",
  "group-focus:ring-brand-600",
  "group-focus:ring-primary-600",
  "group-focus:ring-success-600",
  "group-focus:ring-warning-600",
  "group-focus:ring-danger-600",

  //Theme=LIGHT - State=FOCUS_WITHIN - Element=TEXT
  "focus-within:text-gray-600",
  "focus-within:text-brand-600",
  "focus-within:text-primary-600",
  "focus-within:text-success-600",
  "focus-within:text-warning-600",
  "focus-within:text-danger-600",
  //Theme=LIGHT - State=FOCUS_WITHIN - Element=BACKGROUND
  "focus-within:bg-gray-700",
  "focus-within:bg-brand-700",
  "focus-within:bg-primary-700",
  "focus-within:bg-success-700",
  "focus-within:bg-warning-700",
  "focus-within:bg-danger-700",
  //Theme=LIGHT - State=FOCUS_WITHIN - Element=BORDER
  "focus-within:border-gray-600",
  "focus-within:border-brand-600",
  "focus-within:border-primary-600",
  "focus-within:border-success-600",
  "focus-within:border-warning-600",
  "focus-within:border-danger-600",
  //Theme=LIGHT - State=FOCUS_WITHIN - Element=RING
  "focus-within:ring-gray-600",
  "focus-within:ring-brand-600",
  "focus-within:ring-primary-600",
  "focus-within:ring-success-600",
  "focus-within:ring-warning-600",
  "focus-within:ring-danger-600",

  //Theme=LIGHT - State=ACTIVE - Element=TEXT
  "active:text-gray-700",
  "active:text-brand-700",
  "active:text-primary-700",
  "active:text-success-700",
  "active:text-warning-700",
  "active:text-danger-700",
  //Theme=LIGHT - State=ACTIVE - Element=BACKGROUND
  "active:bg-gray-800",
  "active:bg-brand-800",
  "active:bg-primary-800",
  "active:bg-success-800",
  "active:bg-warning-800",
  "active:bg-danger-800",
  //Theme=LIGHT - State=ACTIVE - Element=BORDER
  "active:border-gray-700",
  "active:border-brand-700",
  "active:border-primary-700",
  "active:border-success-700",
  "active:border-warning-700",
  "active:border-danger-700",
  //Theme=LIGHT - State=ACTIVE - Element=RING
  "active:ring-gray-700",
  "active:ring-brand-700",
  "active:ring-primary-700",
  "active:ring-success-700",
  "active:ring-warning-700",
  "active:ring-danger-700",

  //Theme=DARK - State=NONE - Element=TEXT
  "dark:text-gray-400",
  "dark:text-brand-400",
  "dark:text-primary-400",
  "dark:text-success-400",
  "dark:text-warning-400",
  "dark:text-danger-400",
  //Theme=DARK - State=NONE - Element=BACKGROUND
  "dark:bg-gray-300",
  "dark:bg-brand-300",
  "dark:bg-primary-300",
  "dark:bg-success-300",
  "dark:bg-warning-300",
  "dark:bg-danger-300",
  //Theme=DARK - State=NONE - Element=BORDER
  "dark:border-gray-400",
  "dark:border-brand-400",
  "dark:border-primary-400",
  "dark:border-success-400",
  "dark:border-warning-400",
  "dark:border-danger-400",
  //Theme=DARK - State=NONE - Element=RING
  "dark:ring-gray-200",
  "dark:ring-brand-400",
  "dark:ring-primary-400",
  "dark:ring-success-400",
  "dark:ring-warning-400",
  "dark:ring-danger-400",

  //Theme=DARK - State=HOVER - Element=TEXT
  "dark:hover:text-gray-300",
  "dark:hover:text-brand-300",
  "dark:hover:text-primary-300",
  "dark:hover:text-success-300",
  "dark:hover:text-warning-300",
  "dark:hover:text-danger-300",
  //Theme=DARK - State=HOVER - Element=BACKGROUND
  "dark:hover:bg-gray-200",
  "dark:hover:bg-brand-200",
  "dark:hover:bg-primary-200",
  "dark:hover:bg-success-200",
  "dark:hover:bg-warning-200",
  "dark:hover:bg-danger-200",
  //Theme=DARK - State=HOVER - Element=BORDER
  "dark:hover:border-gray-300",
  "dark:hover:border-brand-300",
  "dark:hover:border-primary-300",
  "dark:hover:border-success-300",
  "dark:hover:border-warning-300",
  "dark:hover:border-danger-300",
  //Theme=DARK - State=HOVER - Element=RING
  "dark:hover:ring-gray-300",
  "dark:hover:ring-brand-300",
  "dark:hover:ring-primary-300",
  "dark:hover:ring-success-300",
  "dark:hover:ring-warning-300",
  "dark:hover:ring-danger-300",

  //Theme=DARK - State=GROUP_HOVER - Element=TEXT
  "dark:group-hover:text-gray-300",
  "dark:group-hover:text-brand-300",
  "dark:group-hover:text-primary-300",
  "dark:group-hover:text-success-300",
  "dark:group-hover:text-warning-300",
  "dark:group-hover:text-danger-300",
  //Theme=DARK - State=GROUP_HOVER - Element=BACKGROUND
  "dark:group-hover:bg-gray-200",
  "dark:group-hover:bg-brand-200",
  "dark:group-hover:bg-primary-200",
  "dark:group-hover:bg-success-200",
  "dark:group-hover:bg-warning-200",
  "dark:group-hover:bg-danger-200",
  //Theme=DARK - State=GROUP_HOVER - Element=BORDER
  "dark:group-hover:border-gray-300",
  "dark:group-hover:border-brand-300",
  "dark:group-hover:border-primary-300",
  "dark:group-hover:border-success-300",
  "dark:group-hover:border-warning-300",
  "dark:group-hover:border-danger-300",
  //Theme=DARK - State=GROUP_HOVER - Element=RING
  "dark:group-hover:ring-gray-300",
  "dark:group-hover:ring-brand-300",
  "dark:group-hover:ring-primary-300",
  "dark:group-hover:ring-success-300",
  "dark:group-hover:ring-warning-300",
  "dark:group-hover:ring-danger-300",

  //Theme=DARK - State=FOCUS - Element=TEXT
  "dark:focus:text-gray-300",
  "dark:focus:text-brand-300",
  "dark:focus:text-primary-300",
  "dark:focus:text-success-300",
  "dark:focus:text-warning-300",
  "dark:focus:text-danger-300",
  //Theme=DARK - State=FOCUS - Element=BACKGROUND
  "dark:focus:bg-gray-200",
  "dark:focus:bg-brand-200",
  "dark:focus:bg-primary-200",
  "dark:focus:bg-success-200",
  "dark:focus:bg-warning-200",
  "dark:focus:bg-danger-200",
  //Theme=DARK - State=FOCUS - Element=BORDER
  "dark:focus:border-gray-300",
  "dark:focus:border-brand-300",
  "dark:focus:border-primary-300",
  "dark:focus:border-success-300",
  "dark:focus:border-warning-300",
  "dark:focus:border-danger-300",
  //Theme=DARK - State=FOCUS - Element=RING
  "dark:focus:ring-gray-300",
  "dark:focus:ring-brand-300",
  "dark:focus:ring-primary-300",
  "dark:focus:ring-success-300",
  "dark:focus:ring-warning-300",
  "dark:focus:ring-danger-300",

  //Theme=DARK - State=GROUP_FOCUS - Element=TEXT
  "dark:group-focus:text-gray-300",
  "dark:group-focus:text-brand-300",
  "dark:group-focus:text-primary-300",
  "dark:group-focus:text-success-300",
  "dark:group-focus:text-warning-300",
  "dark:group-focus:text-danger-300",
  //Theme=DARK - State=GROUP_FOCUS - Element=BACKGROUND
  "dark:group-focus:bg-gray-200",
  "dark:group-focus:bg-brand-200",
  "dark:group-focus:bg-primary-200",
  "dark:group-focus:bg-success-200",
  "dark:group-focus:bg-warning-200",
  "dark:group-focus:bg-danger-200",
  //Theme=DARK - State=GROUP_FOCUS - Element=BORDER
  "dark:group-focus:border-gray-300",
  "dark:group-focus:border-brand-300",
  "dark:group-focus:border-primary-300",
  "dark:group-focus:border-success-300",
  "dark:group-focus:border-warning-300",
  "dark:group-focus:border-danger-300",
  //Theme=DARK - State=GROUP_FOCUS - Element=RING
  "dark:group-focus:ring-gray-300",
  "dark:group-focus:ring-brand-300",
  "dark:group-focus:ring-primary-300",
  "dark:group-focus:ring-success-300",
  "dark:group-focus:ring-warning-300",
  "dark:group-focus:ring-danger-300",

  //Theme=DARK - State=FOCUS_WITHIN - Element=TEXT
  "dark:focus-within:text-gray-300",
  "dark:focus-within:text-brand-300",
  "dark:focus-within:text-primary-300",
  "dark:focus-within:text-success-300",
  "dark:focus-within:text-warning-300",
  "dark:focus-within:text-danger-300",
  //Theme=DARK - State=FOCUS_WITHIN - Element=BACKGROUND
  "dark:focus-within:bg-gray-200",
  "dark:focus-within:bg-brand-200",
  "dark:focus-within:bg-primary-200",
  "dark:focus-within:bg-success-200",
  "dark:focus-within:bg-warning-200",
  "dark:focus-within:bg-danger-200",
  //Theme=DARK - State=FOCUS_WITHIN - Element=BORDER
  "dark:focus-within:border-gray-300",
  "dark:focus-within:border-brand-300",
  "dark:focus-within:border-primary-300",
  "dark:focus-within:border-success-300",
  "dark:focus-within:border-warning-300",
  "dark:focus-within:border-danger-300",
  //Theme=DARK - State=FOCUS_WITHIN - Element=RING
  "dark:focus-within:ring-gray-300",
  "dark:focus-within:ring-brand-300",
  "dark:focus-within:ring-primary-300",
  "dark:focus-within:ring-success-300",
  "dark:focus-within:ring-warning-300",
  "dark:focus-within:ring-danger-300",

  //Theme=DARK - State=ACTIVE - Element=TEXT
  "dark:active:text-gray-200",
  "dark:active:text-brand-200",
  "dark:active:text-primary-200",
  "dark:active:text-success-200",
  "dark:active:text-warning-200",
  "dark:active:text-danger-200",
  //Theme=DARK - State=ACTIVE - Element=BACKGROUND
  "dark:active:bg-gray-100",
  "dark:active:bg-brand-100",
  "dark:active:bg-primary-100",
  "dark:active:bg-success-100",
  "dark:active:bg-warning-100",
  "dark:active:bg-danger-100",
  //Theme=DARK - State=ACTIVE - Element=BORDER
  "dark:active:border-gray-200",
  "dark:active:border-brand-200",
  "dark:active:border-primary-200",
  "dark:active:border-success-200",
  "dark:active:border-warning-200",
  "dark:active:border-danger-200",
  //Theme=DARK - State=ACTIVE - Element=RING
  "dark:active:ring-gray-200",
  "dark:active:ring-brand-200",
  "dark:active:ring-primary-200",
  "dark:active:ring-success-200",
  "dark:active:ring-warning-200",
  "dark:active:ring-danger-200",
];

// Number of colors per element = 2
// Number of elements per selection = 3*2 = 6
// Number of selections per theme = 4*6 = 24
// Number of themes = 2*24 = 48
const sThemeStride = 24;
const sSelectionStride = 24;
const sElementStride = 6;
const selectionIntentClassnames = [
  //Theme=LIGHT - Selection=NONE - Element=TEXT
  "text-gray-600",
  "text-gray-600",
  //Theme=LIGHT - Selection=NONE - Element=BACKGROUND
  "bg-transparent",
  "bg-transparent",
  //Theme=LIGHT - Selection=NONE - Element=BORDER
  "border-transparent",
  "border-transparent",
  //Theme=LIGHT - Selection=FLYOVER - Element=TEXT
  "text-gray-600",
  "text-brand-500",
  //Theme=LIGHT - Selection=FLYOVER - Element=BACKGROUND
  "bg-gray-200",
  "bg-transparent",
  //Theme=LIGHT - Selection=FLYOVER - Element=BORDER
  "border-gray-200",
  "border-transparent",
  //Theme=LIGHT - Selection=SELECTED - Element=TEXT
  "text-gray-700",
  "text-brand-600",
  //Theme=LIGHT - Selection=SELECTED - Element=BACKGROUND
  "bg-gray-200",
  "bg-transparent",
  //Theme=LIGHT - Selection=SELECTED - Element=BORDER
  "border-gray-200",
  "border-transparent",
  //Theme=LIGHT - Selection=DISABLED - Element=TEXT
  "text-gray-300",
  "text-gray-300",
  //Theme=LIGHT - Selection=DISABLED - Element=BACKGROUND
  "bg-transparent",
  "bg-transparent",
  //Theme=LIGHT - Selection=DISABLED - Element=BORDER
  "border-transparent",
  "border-transparent",

  //Theme=DARK - Selection=NONE - Element=TEXT
  "text-gray-100",
  "text-gray-100",
  //Theme=DARK - Selection=NONE - Element=BACKGROUND
  "bg-transparent",
  "bg-transparent",
  //Theme=DARK - Selection=NONE - Element=BORDER
  "border-transparent",
  "border-transparent",
  //Theme=DARK - Selection=FLYOVER - Element=TEXT
  "text-gray-100",
  "text-brand-300",
  //Theme=DARK - Selection=FLYOVER - Element=BACKGROUND
  "bg-gray-700",
  "bg-transparent",
  //Theme=DARK - Selection=FLYOVER - Element=BORDER
  "border-gray-700",
  "border-transparent",
  //Theme=DARK - Selection=SELECTED - Element=TEXT
  "text-white",
  "text-brand-200",
  //Theme=DARK - Selection=SELECTED - Element=BACKGROUND
  "bg-gray-700",
  "bg-transparent",
  //Theme=DARK - Selection=SELECTED - Element=BORDER
  "border-gray-700",
  "border-transparent",
  //Theme=DARK - Selection=DISABLED - Element=TEXT
  "text-gray-600",
  "text-gray-600",
  //Theme=DARK - Selection=DISABLED - Element=BACKGROUND
  "bg-transparent",
  "bg-transparent",
  //Theme=DARK - Selection=DISABLED - Element=BORDER
  "border-transparent",
  "border-transparent",
];

/**
 * Build state intent style given the intent theme, state, element, and color
 * @param intentTheme - The intent theme to use for the style generation
 * @param intentState - The intent state to use for the style generation
 * @param intentElement - The intent element to use for the style generation
 * @param intentColor - The intent color to use for the style generation
 * @returns the corresponding intent style
 */
export function stateIntentStyleBuilderAtomic(
  intentTheme: IntentTheme,
  intentState: IntentState,
  intentElement: IntentElement,
  intentColor: IntentColor
): string {
  const globalIndex =
    Number(intentTheme) * gThemeStride +
    Number(intentState) * gStateStride +
    Number(intentElement) * gElementStride +
    Number(intentColor);

  return stateIntentClassnames[globalIndex];
}

/**
 * Build selection intent style given the intent theme, state, element, and color
 * @param intentTheme - The intent theme to use for the style generation
 * @param intentSelection - The intent selection to use for the style generation
 * @param intentElement - The intent element to use for the style generation
 * @param intentColor - The intent color to use for the style generation
 * @returns the corresponding intent style
 */
export function selectionIntentStyleBuilderAtomic(
  intentTheme: IntentTheme,
  intentSelection: IntentSelection,
  intentElement: IntentElement,
  intentColor: IntentColor
): string {
  const intentColorFinal = Math.min(Math.abs(Number(intentColor)), 1);
  const intentElementFinal = Math.min(Math.abs(Number(intentElement)), 2);
  const selectionIndex =
    Number(intentTheme) * sThemeStride +
    Number(intentSelection) * sSelectionStride +
    intentElementFinal * sElementStride +
    intentColorFinal;

  return selectionIntentClassnames[selectionIndex];
}

/**
 * Build state intent style given the intent theme list, state list, element list, and color
 * @param intentThemes - The list of intent theme to use for the style generation
 * @param intentStates - The list of intent state to use for the style generation
 * @param intentElements - The list of intent element to use for the style generation
 * @param intentColor - The intent color to use for the style generation
 * @returns the corresponding intent style
 */
export function stateIntentStyleBuilderCustom(
  intentThemes: IntentTheme[],
  intentStates: IntentState[],
  intentElements: IntentElement[],
  intentColor: IntentColor
): string {
  const res: string[] = [];

  intentThemes.forEach(intentTheme => {
    intentStates.forEach(intentState => {
      intentElements.forEach(intentElement =>
        res.push(
          stateIntentStyleBuilderAtomic(intentTheme, intentState, intentElement, intentColor)
        )
      );
    });
  });

  return res.join(" ");
}

/**
 * Build selection intent style given the intent theme list, state list, element list, and color
 * @param intentThemes - The list of intent theme to use for the style generation
 * @param intentSelections - The list of intent selection to use for the style generation
 * @param intentElements - The list of intent element to use for the style generation
 * @param intentColor - The intent color to use for the style generation
 * @returns the corresponding intent style
 */
export function selectionIntentStyleBuilderCustom(
  intentThemes: IntentTheme[],
  intentSelections: IntentSelection[],
  intentElements: IntentElement[],
  intentColor: IntentColor
): string {
  const res: string[] = [];

  intentThemes.forEach(intentTheme => {
    intentSelections.forEach(intentState => {
      intentElements.forEach(intentElement =>
        res.push(
          selectionIntentStyleBuilderAtomic(intentTheme, intentState, intentElement, intentColor)
        )
      );
    });
  });

  return res.join(" ");
}

/**
 * Build state intent style given the intent style input
 * @param input - The intent style builder input to use for the style generation
 * @returns the corresponding state intent style
 */
export function stateIntentStyleBuilder(input: StateIntentStyleBuilderInput): string {
  const res: string[] = [];

  const itentColorFinal = input.intentColor ?? IntentColor.GRAY;
  const intentThemes: IntentTheme[] = [IntentTheme.LIGHT];
  const intentStates = [];

  // Dark Theme
  if (input.useDarkTheme) {
    intentThemes.push(IntentTheme.DARK);
  }

  // Default state
  if (input.useDefaultState) {
    intentStates.push(IntentState.NONE);
  }

  // Hover state
  if (input.useHoverState) {
    intentStates.push(IntentState.HOVER);
  }

  // Focus state
  if (input.useFocusState) {
    intentStates.push(IntentState.FOCUS);
  }

  // Active state
  if (input.useActiveState) {
    intentStates.push(IntentState.ACTIVE);
  }

  // Background Element
  if (!input.minimal && !input.outlined) {
    const intentElements = [IntentElement.BACKGROUND];

    res.push(
      stateIntentStyleBuilderCustom(intentThemes, intentStates, intentElements, itentColorFinal)
    );
  }

  // Border Element
  if (!input.minimal && input.outlined) {
    const intentElements = [IntentElement.BORDER];

    res.push(
      stateIntentStyleBuilderCustom(intentThemes, intentStates, intentElements, itentColorFinal)
    );
  }

  // Ring Element
  if (!input.minimal && input.ringed) {
    const intentElements = [IntentElement.RING];

    res.push(
      stateIntentStyleBuilderCustom(intentThemes, intentStates, intentElements, itentColorFinal)
    );

    if (input.ringedFade) {
      const className = "ring-opacity-50";
      res.push(className);
    }
  }

  // Foreground (Text) Element
  if (input.withForeground) {
    if (input.minimal || input.outlined) {
      const intentElements = [IntentElement.TEXT];

      res.push(
        stateIntentStyleBuilderCustom(intentThemes, intentStates, intentElements, itentColorFinal)
      );
    } else {
      res.push("text-white");
      if (input.useDarkTheme) {
        res.push("dark:text-gray-700");
      }
    }
  }

  return res.join(" ");
}

/**
 * Build selection intent style given the intent style input
 * @param input - The intent style builder input to use for the style generation
 * @returns the corresponding state intent style
 */
export function selectionIntentStyleBuilder(input: SelectionIntentStyleBuilderInput): string {
  const res: string[] = [];

  const itentColorFinal = input.intentColor ?? IntentColor.GRAY;
  const intentThemes: IntentTheme[] = [IntentTheme.LIGHT];
  const intentSelections = [];

  if (input.flyOver) {
    intentSelections.push(IntentSelection.FLYOVER);
  } else if (input.selected) {
    intentSelections.push(IntentSelection.SELECTED);
  } else if (input.disabled) {
    intentSelections.push(IntentSelection.DISABLED);
  } else {
    intentSelections.push(IntentSelection.NONE);
  }

  // Dark Theme
  if (input.useDarkTheme) {
    intentThemes.push(IntentTheme.DARK);
  }

  // Background Element
  {
    const intentElements = [IntentElement.BACKGROUND];

    res.push(
      selectionIntentStyleBuilderCustom(
        intentThemes,
        intentSelections,
        intentElements,
        itentColorFinal
      )
    );
  }

  // Border Element
  {
    const intentElements = [IntentElement.BORDER];

    res.push(
      selectionIntentStyleBuilderCustom(
        intentThemes,
        intentSelections,
        intentElements,
        itentColorFinal
      )
    );
  }

  // Text Element
  {
    const intentElements = [IntentElement.TEXT];

    res.push(
      selectionIntentStyleBuilderCustom(
        intentThemes,
        intentSelections,
        intentElements,
        itentColorFinal
      )
    );
  }
  return res.join(" ");
}
