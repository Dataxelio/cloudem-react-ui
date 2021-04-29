/**
 * Intent Style Types
 **/
export enum IntentTheme {
  LIGHT = 0,
  DARK,
}

export enum IntentState {
  NONE = 0,
  HOVER,
  GROUP_HOVER,
  FOCUS,
  GROUP_FOCUS,
  FOCUS_WITHIN,
  ACTIVE,
}

export enum IntentSelection {
  NONE = 0,
  FLYOVER,
  SELECTED,
  DISABLED,
}

export enum IntentElement {
  TEXT = 0,
  BACKGROUND,
  BORDER,
  RING,
}

export enum IntentColor {
  GRAY = 0,
  BRAND,
  PRIMARY,
  SUCCESS,
  WARNING,
  DANGER,
}

export type IntentObject = {
  intentTheme: IntentTheme;
  intentState: IntentState;
  intentElement: IntentElement;
  intentColor?: IntentColor;
  isSelected?: boolean;
};

/**
 * Geometry Style Types
 **/

export type WidthType =
  | "w-1"
  | "w-2"
  | "w-3"
  | "w-4"
  | "w-5"
  | "w-6"
  | "w-7"
  | "w-8"
  | "w-9"
  | "w-10"
  | "w-11"
  | "w-12"
  | "w-14"
  | "w-16"
  | "w-20"
  | "w-24"
  | "w-28"
  | "w-32"
  | "w-36"
  | "w-40"
  | "w-44"
  | "w-48"
  | "w-52"
  | "w-56"
  | "w-60"
  | "w-64"
  | "w-72"
  | "w-80"
  | "w-96"
  | "w-1/2"
  | "w-1/3"
  | "w-2/3"
  | "w-1/4"
  | "w-2/4"
  | "w-3/4"
  | "w-1/5"
  | "w-2/5"
  | "w-3/5"
  | "w-4/5"
  | "w-auto"
  | "w-full"
  | "w-screen"
  | "w-min"
  | "w-max";

export type HeightType =
  | "h-1"
  | "h-2"
  | "h-3"
  | "h-4"
  | "h-5"
  | "h-6"
  | "h-7"
  | "h-8"
  | "h-9"
  | "h-10"
  | "h-11"
  | "h-12"
  | "h-14"
  | "h-16"
  | "h-20"
  | "h-24"
  | "h-28"
  | "h-32"
  | "h-36"
  | "h-40"
  | "h-44"
  | "h-48"
  | "h-52"
  | "h-56"
  | "h-60"
  | "h-64"
  | "h-72"
  | "h-80"
  | "h-96"
  | "h-1/2"
  | "h-1/3"
  | "h-2/3"
  | "h-1/4"
  | "h-2/4"
  | "h-3/4"
  | "h-1/5"
  | "h-2/5"
  | "h-3/5"
  | "h-4/5"
  | "h-auto"
  | "h-full"
  | "h-screen";

export type BorderWidthType = "border-0" | "border" | "border-2" | "border-4" | "border-8";

export type HoverBorderWidthType =
  | "hover:border-0"
  | "hover:border"
  | "hover:border-2"
  | "hover:border-4"
  | "hover:border-8";

export type FocusBorderWidthType =
  | "focus:border-0"
  | "focus:border"
  | "focus:border-2"
  | "focus:border-4"
  | "focus:border-8";

export type BorderRadiusType =
  | "rounded-none"
  | "rounded-sm"
  | "rounded"
  | "rounded-md"
  | "rounded-lg"
  | "rounded-xl"
  | "rounded-full";

export type RingWidthType = "ring-0" | "ring" | "ring-1" | "ring-2" | "ring-4" | "ring-8";

export type HoverRingWidthType =
  | "hover:ring-0"
  | "hover:ring"
  | "hover:ring-1"
  | "hover:ring-2"
  | "hover:ring-4"
  | "hover:ring-8";

export type FocusRingWidthType =
  | "focus:ring-0"
  | "focus:ring"
  | "focus:ring-1"
  | "focus:ring-2"
  | "focus:ring-4"
  | "focus:ring-8";

export type LeftPaddingType =
  | "pl-0"
  | "pl-1"
  | "pl-1.5"
  | "pl-2"
  | "pl-2.5"
  | "pl-3"
  | "pl-3.5"
  | "pl-4"
  | "pl-5"
  | "pl-6"
  | "pl-7"
  | "pl-8"
  | "pl-9"
  | "pl-10"
  | "pl-11"
  | "pl-12"
  | "pl-14";

export type RightPaddingType =
  | "pr-0"
  | "pr-1"
  | "pr-1.5"
  | "pr-2"
  | "pr-2.5"
  | "pr-3"
  | "pr-3.5"
  | "pr-4"
  | "pr-5"
  | "pr-6"
  | "pr-7"
  | "pr-8"
  | "pr-9"
  | "pr-10"
  | "pr-11"
  | "pr-12"
  | "pr-14";

export type HorizontalPaddingType =
  | "px-0"
  | "px-1"
  | "px-1.5"
  | "px-2"
  | "px-2.5"
  | "px-3"
  | "px-3.5"
  | "px-4"
  | "px-5"
  | "px-6"
  | "px-7"
  | "px-8"
  | "px-9"
  | "px-10"
  | "px-11"
  | "px-12"
  | "px-14";

export type TopPaddingType =
  | "pt-0"
  | "pt-1"
  | "pt-1.5"
  | "pt-2"
  | "pt-2.5"
  | "pt-3"
  | "pt-3.5"
  | "pt-4"
  | "pt-5"
  | "pt-6"
  | "pt-7"
  | "pt-8"
  | "pt-9"
  | "pt-10"
  | "pt-11"
  | "pt-12"
  | "pt-14";

export type BottomPaddingType =
  | "pb-0"
  | "pb-1"
  | "pb-1.5"
  | "pb-2"
  | "pb-2.5"
  | "pb-3"
  | "pb-3.5"
  | "pb-4"
  | "pb-5"
  | "pb-6"
  | "pb-7"
  | "pb-8"
  | "pb-9"
  | "pb-10"
  | "pb-11"
  | "pb-12"
  | "pb-14";

export type VerticalPaddingType =
  | "py-0"
  | "py-1"
  | "py-1.5"
  | "py-2"
  | "py-2.5"
  | "py-3"
  | "py-3.5"
  | "py-4"
  | "py-5"
  | "py-6"
  | "py-7"
  | "py-8"
  | "py-9"
  | "py-10"
  | "py-11"
  | "py-12"
  | "py-14";

export type BoxShadowType =
  | "shadow-sm"
  | "shadow"
  | "shadow-md"
  | "shadow-lg"
  | "shadow-xl"
  | "shadow-2xl"
  | "shadow-inner"
  | "shadow-none";

/**
 * Typography Style Types
 **/

export type FontSizeType =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl";

export type FontWeightType =
  | "font-thin"
  | "font-extralight"
  | "font-light"
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold"
  | "font-extrabold"
  | "font-black";

export type LetterSpacingType =
  | "tracking-tighter"
  | "tracking-tight"
  | "tracking-normal"
  | "tracking-wide"
  | "tracking-wider"
  | "tracking-widest";

export type LineHeightType =
  | "leading-none"
  | "leading-tight"
  | "leading-snug"
  | "leading-normal"
  | "leading-relaxed"
  | "leading-loose";

/**
 * Icon Style Types
 **/

export type IconAnimation = "spin" | "pulse";

export enum IconStyle {
  SOLID = "fas",
  REGULAR = "far",
  LIGHT = "fal",
  DUOTONE = "fad",
  BRAND = "fab",
}

export type IconTransform = {
  x?: number;
  y?: number;
  flipX?: boolean;
  flipY?: boolean;
  rotate?: number;
  size?: number;
};

/**
 * Input Types
 **/

export type InputType =
  | "text"
  | "email"
  | "url"
  | "password"
  | "date"
  | "datetime-local"
  | "month"
  | "tel"
  | "time"
  | "week";

/**
 * Data Grid
 **/

export type DataGridColumn = {
  name: string;
  data: string[]; // Size == rowCount
};

export type DataGridView = {
  rowCount: number;
  columnCount: number;
  columns: DataGridColumn[]; // Size == columnCount
};

/**
 * Data Grid Display
 **/

export type DataGridCell = {
  intent?: IntentColor;
  data: string;
};

export type DataGridColumnDisplay = {
  name: string;
  show: boolean;
};

export type DataGridRowDisplay = {
  cells: DataGridCell[]; // Size == columnCount
};

export type DataGridDisplayView = {
  rowCount: number;
  columnCount: number;
  columns: DataGridColumnDisplay[]; // Size == columnCount
  rows: DataGridRowDisplay[]; // Size == rowCount
};
