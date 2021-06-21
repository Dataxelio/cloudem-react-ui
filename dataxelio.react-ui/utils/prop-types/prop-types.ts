import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FocusEvents } from "@react-types/shared";
import { HoverProps, PressProps } from "@react-aria/interactions";
import { Placement, PlacementAxis } from "@react-types/overlays";

/******************************************************
 * Global Types
 ******************************************************/
export type LayoutElementType = "header" | "title" | "content-text" | "content" | "footer";

export type NavbarGroupAlignmentType = "heading" | "left" | "center" | "right";

export type DomElementType = "div" | "label" | "form" | "ul" | "li";

export type DividerDomElementType = "div" | "li";

export type OrientationType = "portrait" | "landscape";

export type AlignmentType = "left" | "center" | "right";

export type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type PopoverType = "dialog" | "grid" | "listbox" | "menu" | "tree";

export type LayoutElementProps = {
  __LAYOUT_ELEMENT?: LayoutElementType;
};

export type NavbarGroupAlignmentProps = {
  alignment: NavbarGroupAlignmentType;
};

/******************************************************
 * Overlay Types
 ******************************************************/

export type PopoverOverlayDomProps = {
  modalDomProps?: React.HTMLAttributes<HTMLElement> & { "data-ismodal": boolean };
  overlayOriginalDomProps?: React.HTMLAttributes<HTMLElement>;
};

export type TriggerOverlayDomProps = {
  overlayPrimaryDomProps?: React.HTMLAttributes<HTMLElement>;
  overlaySecondaryDomProps?: React.HTMLAttributes<HTMLElement>;
  overlayPositionDomProps?: React.HTMLAttributes<HTMLElement>;
  overlayPlacementAxis?: PlacementAxis;
  withArrow?: boolean;
  arrowSize?: number;
  arrowPositionDomProps?: React.HTMLAttributes<HTMLElement>;
};

export type OverlayDomProps = PopoverOverlayDomProps & TriggerOverlayDomProps;

export type TitleDomProps = {
  titleDomProps?: React.HTMLAttributes<HTMLElement>;
};

export type TitledOverlayDomProps = OverlayDomProps & TitleDomProps;

export type TooltipTriggerDomProps = React.HTMLAttributes<HTMLElement> &
  PressProps &
  HoverProps &
  FocusEvents;

/******************************************************
 * Button Types
 ******************************************************/

export type ButtonTriggerStyleProps = {
  // Intent Style
  fill?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  ringed?: boolean;
  ringedFade?: boolean;
  intent?: IntentColor;
  intentAtDefaultState?: boolean;
  useDarkGrayAsDefaultIntent?: boolean;
  backgroundOpacity?: BackgroundOpacityType;
  foregroundOpacity?: ForegroundOpacityType;

  // Layout Style
  gapBetweenElements?: FlexGridGapType;
  position?: PositionType;
  leftPlacement?: LeftPlacementType;
  rightPlacement?: RightPlacementType;
  topPlacement?: TopPlacementType;
  bottomPlacement?: BottomPlacementType;
  visibility?: VisibilityType;
  flexItemResizing?: FlexItemResizingType;
  flexItemGrow?: FlexItemGrowType;
  flexItemShrink?: FlexItemShrinkType;
  gridItemInlineAxisAlignment?: GridItemInlineAxisAlignmentType;
  flexGridItemCrossAxisAlignment?: FlexGridItemCrossAxisAlignmentType;
  leftMargin?: LeftMarginType;
  rightMargin?: RightMarginType;
  horizontalMargin?: HorizontalMarginType;
  topMargin?: TopMarginType;
  bottomMargin?: BottomMarginType;
  verticalMargin?: VerticalMarginType;

  // Geometry Style
  width?: WidthType;
  height?: HeightType;
  borderWidth?: BorderWidthType;
  borderRadius?: BorderRadiusType;
  ringWidth?: RingWidthType;
  horizontalPadding?: HorizontalPaddingType;
  verticalPadding?: VerticalPaddingType;
  boxShadow?: BoxShadowType;
  transformOrigin?: TransformOriginType;
  transformScale?: TransformScaleType;
  transformRotate?: TransformRotateType;
  transformTranslate?: TransformTranslateType;

  // Typography Style
  fontHeight?: LineHeightType;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  letterSpacing?: LetterSpacingType;

  // Left Icon
  leftIcon?: IconName;
  leftIconTransform?: IconTransform;
  leftIconStyle?: IconStyle;

  // Right Icon
  rightIcon?: IconName;
  rightIconTransform?: IconTransform;
  rightIconStyle?: IconStyle;

  // Custom Style
  className?: string;

  // Custom Tooltip Trigger DOM Props
  tooltipTriggerDomProps?: TooltipTriggerDomProps;

  // Custom Text value DOM Props
  textDomProps?: React.HTMLAttributes<HTMLElement>;
};

export type ButtonStyleProps = ButtonTriggerStyleProps & {
  // Text
  text?: string;

  // Loading Icon
  loading?: boolean;
  loadingIcon?: IconName;
  loadingIconAnimation?: IconAnimation;
  loadingIconTransform?: IconTransform;
  loadingIconStyle?: IconStyle;
};

/******************************************************
 * Card Types
 ******************************************************/

export type CardStyleProps = {
  // Orientation
  headerOrientation?: OrientationType;
  headerAlignment?: AlignmentType;
  contentTextOrientation?: OrientationType;
  contentTextAlignment?: AlignmentType;
  contentOrientation?: OrientationType;
  contentAlignment?: AlignmentType;
  footerOrientation?: OrientationType;
  footerAlignment?: AlignmentType;

  // Divider
  dividerAfterHeader?: boolean;
  dividerAfterContentText?: boolean;
  dividerAfterContent?: boolean;

  // Intent Style
  minimal?: boolean;
  outlined?: boolean;
  intent?: IntentColor;
  backgroundOpacity?: BackgroundOpacityType;
  borderOpacity?: BorderOpacityType;

  // Layout Style
  headerGap?: FlexGridGapType;
  contentTextGap?: FlexGridGapType;
  contentGap?: FlexGridGapType;
  footerGap?: FlexGridGapType;
  leftMargin?: LeftMarginType;
  rightMargin?: RightMarginType;
  horizontalMargin?: HorizontalMarginType;
  internalHorizontalMargin?: HorizontalMarginType;
  topMargin?: TopMarginType;
  bottomMargin?: BottomMarginType;
  verticalMargin?: VerticalMarginType;
  internalVerticalMargin?: VerticalMarginType;
  debugMode?: boolean;
  debugIntent?: IntentColor;

  // Geometry Style
  fixed?: boolean;
  fluid?: boolean;
  width?: WidthType;
  maxWidth?: MaxWidthType;
  minWidth?: MinWidthType;
  height?: HeightType;
  maxHeight?: MaxHeightType;
  minHeight?: MinHeightType;
  borderWidth?: BorderWidthType;
  borderRadius?: BorderRadiusType;
  horizontalPadding?: HorizontalPaddingType;
  verticalPadding?: VerticalPaddingType;
  boxShadow?: BoxShadowType;

  // Form
  asForm?: boolean;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;

  children: React.ReactNode;
};

/******************************************************
 * Popover Types
 ******************************************************/

export type PopoverStyleProps = {
  isModal?: boolean;
  preventScroll?: boolean;
};

/******************************************************
 * Popover Trigger Types
 ******************************************************/

export type PopoverTriggerStyleProps = {
  syncTriggerLabelWithSelectedItem?: boolean;
  type: PopoverType;
  // isPopoverOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  placement?: Placement;
  offset?: number;
  withArrow?: boolean;
  arrowSize?: number;
  menuHaveSection?: boolean;
  isMenuVirtualized?: boolean;
  menuAutoFocus?: boolean | "first" | "last";
  shouldMenuFocusWrap?: boolean;
  menuInitialItems: TreeItem[];
  // menuItemSelectedIds?: Iterable<string>;
  // menuItemDisabledIds?: Iterable<string>;
  menuItemExpandedIds?: Set<React.Key>;
  onMenuItemAction?: (key: React.Key) => void;
  setMenuItemExpandedIds?: (expandedIds: Set<React.Key>) => void;
  // onMenuItemSelectionChange?: (keys: "all" | Set<React.Key>) => any;
  selectedMenuItem?: TreeItem;
  setSelectedMenuItem?: (selectedItem: TreeItem | undefined) => void;

  customDialogContent?: React.ReactNode;
  customDialogFooter?: React.ReactNode;

  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  "aria-details"?: string;
};

/******************************************************
 * Menu Types
 ******************************************************/

export type MenuStyleProps = {
  // Intent Style
  darkMode?: boolean;
  minimal?: boolean;
  intent?: IntentColor;
  itemIntentAtDefaultState?: boolean;
  itemApplyIntentOnGroup?: boolean;
  sectionOpacity?: ForegroundOpacityType;
  groupOpacity?: ForegroundOpacityType;
  forceItemLowGrayBackgroundAtHoverState?: boolean;
  forceItemLowBrandBackgroundAtHoverState?: boolean;
  itemCursor?: CursorType;

  // Layout Style
  gapBetweenItems?: FlexGridGapType;
  marginBetweenItemsAndSection?: TopMarginType;
  marginBetweenLeavesAndGroup?: TopMarginType;

  // Geometry Style
  fill?: boolean;
  itemBackgroundverticalPadding?: VerticalPaddingType;

  // Typography Style
  leafFontHeight?: LineHeightType;
  leafFontSize?: FontSizeType;
  leafFontWeight?: FontWeightType;
  leafLetterSpacing?: LetterSpacingType;
  leafUseDarkGrayAsDefaultIntent?: boolean;
  groupFontHeight?: LineHeightType;
  groupFontSize?: FontSizeType;
  groupFontWeight?: FontWeightType;
  groupLetterSpacing?: LetterSpacingType;
  groupUseDarkGrayAsDefaultIntent?: boolean;
  sectionFontHeight?: LineHeightType;
  sectionFontSize?: FontSizeType;
  sectionFontWeight?: FontWeightType;
  sectionLetterSpacing?: LetterSpacingType;
  itemTextOverflow?: TextOverflowType;
  itemWordBreak?: WordBreakType;

  // Section
  renderSectionLabel?: boolean;

  // Tree
  itemInitialIndent?: number;
  groupSelfIndent?: number;
  itemSizePerIndent?: number;
  groupExpandedIcon?: IconName;
  groupCollapsedIcon?: IconName;

  // Tree State
  itemExpandedIds?: Set<React.Key>;
  setItemExpandedIds?: (expandedIds: Set<React.Key>) => void;
};

/******************************************************
 * Layout Types
 ******************************************************/

/**
 * Controlling the inner display of an element
 * https://tailwindcss.com/docs/display
 */
export type LayoutType = "flex" | "inline-flex" | "grid" | "inline-grid" | "table";

/**
 * Controlling the outer display of an element
 * https://tailwindcss.com/docs/display
 */
export type DisplayType = "hidden" | "block" | "inline";

/**
 * Controlling how an element handles content that is too large for the container
 * https://tailwindcss.com/docs/overflow
 */
export type OverflowType =
  | "overflow-auto"
  | "overflow-hidden"
  | "overflow-visible"
  | "overflow-scroll"
  | "overflow-x-auto"
  | "overflow-y-auto"
  | "overflow-x-hidden"
  | "overflow-y-hidden"
  | "overflow-x-visible"
  | "overflow-y-visible"
  | "overflow-x-scroll"
  | "overflow-y-scroll";

/**
 * Controlling how the browser behaves when reaching the boundary of a scrolling area
 * https://tailwindcss.com/docs/overscroll-behavior
 */
export type OverscrollBehaviorType = "overscroll-auto" | "overscroll-contain" | "overscroll-none";

/**
 * Controlling how an element is positioned in the DOM
 * https://tailwindcss.com/docs/position
 */
export type PositionType = "static" | "fixed" | "absolute" | "relative" | "sticky";

/**
 * Controlling the left placement of positioned elements
 * https://tailwindcss.com/docs/top-right-bottom-left
 */
export type LeftPlacementType =
  | "left-0"
  | "left-0.5"
  | "left-1.5"
  | "left-2"
  | "left-2.5"
  | "left-3"
  | "left-3.5"
  | "left-4"
  | "left-5"
  | "left-6"
  | "left-7"
  | "left-8"
  | "left-9"
  | "left-10"
  | "left-11"
  | "left-12"
  | "left-14"
  | "left-16"
  | "left-20"
  | "left-24"
  | "-left-0"
  | "-left-0.5"
  | "-left-1.5"
  | "-left-2"
  | "-left-2.5"
  | "-left-3"
  | "-left-3.5"
  | "-left-4"
  | "-left-5"
  | "-left-6"
  | "-left-7"
  | "-left-8"
  | "-left-9"
  | "-left-10"
  | "-left-11"
  | "-left-12"
  | "-left-14"
  | "-left-16"
  | "-left-20"
  | "-left-24"
  | "left-auto"
  | "left-1/2"
  | "left-1/3"
  | "left-2/3"
  | "left-1/4"
  | "left-2/4"
  | "left-3/4"
  | "left-full"
  | "-left-1/2"
  | "-left-1/3"
  | "-left-2/3"
  | "-left-1/4"
  | "-left-2/4"
  | "-left-3/4"
  | "-left-full";

/**
 * Controlling the right placement of positioned elements
 * https://tailwindcss.com/docs/top-right-bottom-left
 */
export type RightPlacementType =
  | "right-0"
  | "right-0.5"
  | "right-1.5"
  | "right-2"
  | "right-2.5"
  | "right-3"
  | "right-3.5"
  | "right-4"
  | "right-5"
  | "right-6"
  | "right-7"
  | "right-8"
  | "right-9"
  | "right-10"
  | "right-11"
  | "right-12"
  | "right-14"
  | "right-16"
  | "right-20"
  | "right-24"
  | "-right-0"
  | "-right-0.5"
  | "-right-1.5"
  | "-right-2"
  | "-right-2.5"
  | "-right-3"
  | "-right-3.5"
  | "-right-4"
  | "-right-5"
  | "-right-6"
  | "-right-7"
  | "-right-8"
  | "-right-9"
  | "-right-10"
  | "-right-11"
  | "-right-12"
  | "-right-14"
  | "-right-16"
  | "-right-20"
  | "-right-24"
  | "right-auto"
  | "right-1/2"
  | "right-1/3"
  | "right-2/3"
  | "right-1/4"
  | "right-2/4"
  | "right-3/4"
  | "right-full"
  | "-right-1/2"
  | "-right-1/3"
  | "-right-2/3"
  | "-right-1/4"
  | "-right-2/4"
  | "-right-3/4"
  | "-right-full";

/**
 * Controlling the top placement of positioned elements
 * https://tailwindcss.com/docs/top-right-bottom-left
 */
export type TopPlacementType =
  | "top-0"
  | "top-0.5"
  | "top-1.5"
  | "top-2"
  | "top-2.5"
  | "top-3"
  | "top-3.5"
  | "top-4"
  | "top-5"
  | "top-6"
  | "top-7"
  | "top-8"
  | "top-9"
  | "top-10"
  | "top-11"
  | "top-12"
  | "top-14"
  | "top-16"
  | "top-20"
  | "top-24"
  | "-top-0"
  | "-top-0.5"
  | "-top-1.5"
  | "-top-2"
  | "-top-2.5"
  | "-top-3"
  | "-top-3.5"
  | "-top-4"
  | "-top-5"
  | "-top-6"
  | "-top-7"
  | "-top-8"
  | "-top-9"
  | "-top-10"
  | "-top-11"
  | "-top-12"
  | "-top-14"
  | "-top-16"
  | "-top-20"
  | "-top-24"
  | "top-auto"
  | "top-1/2"
  | "top-1/3"
  | "top-2/3"
  | "top-1/4"
  | "top-2/4"
  | "top-3/4"
  | "top-full"
  | "-top-1/2"
  | "-top-1/3"
  | "-top-2/3"
  | "-top-1/4"
  | "-top-2/4"
  | "-top-3/4"
  | "-top-full";

/**
 * Controlling the bottom placement of positioned elements
 * https://tailwindcss.com/docs/top-right-bottom-left
 */
export type BottomPlacementType =
  | "bottom-0"
  | "bottom-0.5"
  | "bottom-1.5"
  | "bottom-2"
  | "bottom-2.5"
  | "bottom-3"
  | "bottom-3.5"
  | "bottom-4"
  | "bottom-5"
  | "bottom-6"
  | "bottom-7"
  | "bottom-8"
  | "bottom-9"
  | "bottom-10"
  | "bottom-11"
  | "bottom-12"
  | "bottom-14"
  | "bottom-16"
  | "bottom-20"
  | "bottom-24"
  | "-bottom-0"
  | "-bottom-0.5"
  | "-bottom-1.5"
  | "-bottom-2"
  | "-bottom-2.5"
  | "-bottom-3"
  | "-bottom-3.5"
  | "-bottom-4"
  | "-bottom-5"
  | "-bottom-6"
  | "-bottom-7"
  | "-bottom-8"
  | "-bottom-9"
  | "-bottom-10"
  | "-bottom-11"
  | "-bottom-12"
  | "-bottom-14"
  | "-bottom-16"
  | "-bottom-20"
  | "-bottom-24"
  | "bottom-auto"
  | "bottom-1/2"
  | "bottom-1/3"
  | "bottom-2/3"
  | "bottom-1/4"
  | "bottom-2/4"
  | "bottom-3/4"
  | "bottom-full"
  | "-bottom-1/2"
  | "-bottom-1/3"
  | "-bottom-2/3"
  | "-bottom-1/4"
  | "-bottom-2/4"
  | "-bottom-3/4"
  | "-bottom-full";

/**
 * Controlling the visibility of an element
 * https://tailwindcss.com/docs/visibility
 */
export type VisibilityType = "visible" | "invisible";

/**
 * Controlling the stack order of an element
 * https://tailwindcss.com/docs/z-index
 */
export type ZIndexType = "z-0" | "z-10" | "z-20" | "z-30" | "z-40" | "z-50" | "z-auto";

/**
 * Controlling the direction of flex items
 * https://tailwindcss.com/docs/flex-direction
 */
export type FlexDirectionType = "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse";

/**
 * Controlling how flex items wrap
 * https://tailwindcss.com/docs/flex-wrap
 */
export type FlexWrapType = "flex-wrap" | "flex-wrap-reverse" | "flex-nowrap";

/**
 * Controlling how flex items both grow and shrink
 * https://tailwindcss.com/docs/flex
 */
export type FlexItemResizingType = "flex-1" | "flex-auto" | "flex-initial" | "flex-none";

/**
 * Controlling how flex items grow
 * https://tailwindcss.com/docs/flex-grow
 */
export type FlexItemGrowType = "flex-grow-0" | "flex-grow";

/**
 * Controlling how flex items shrink
 * https://tailwindcss.com/docs/flex-shrink
 */
export type FlexItemShrinkType = "flex-shrink-0" | "flex-shrink";

/**
 * Specifying the columns in a grid layout
 * https://tailwindcss.com/docs/grid-template-columns
 */
export type GridTemplateColumnsType =
  | "grid-cols-1"
  | "grid-cols-2"
  | "grid-cols-3"
  | "grid-cols-4"
  | "grid-cols-5"
  | "grid-cols-6"
  | "grid-cols-7"
  | "grid-cols-8"
  | "grid-cols-9"
  | "grid-cols-10"
  | "grid-cols-11"
  | "grid-cols-12"
  | "grid-cols-none";

/**
 * Controlling how elements are sized and placed across grid columns
 * https://tailwindcss.com/docs/grid-column
 */
export type GridColumnSpanType =
  | "col-auto"
  | "col-span-1"
  | "col-span-2"
  | "col-span-3"
  | "col-span-4"
  | "col-span-5"
  | "col-span-6"
  | "col-span-7"
  | "col-span-8"
  | "col-span-9"
  | "col-span-10"
  | "col-span-11"
  | "col-span-12"
  | "col-span-full";

/**
 * Specifying the rows in a grid layout
 * https://tailwindcss.com/docs/grid-template-rows
 */
export type GridTemplateRowsType =
  | "grid-rows-1"
  | "grid-rows-2"
  | "grid-rows-3"
  | "grid-rows-4"
  | "grid-rows-5"
  | "grid-rows-6"
  | "grid-rows-none";

/**
 * Controlling how elements are sized and placed across grid rows
 * https://tailwindcss.com/docs/grid-column
 */
export type GridRowSpanType =
  | "row-auto"
  | "row-span-1"
  | "row-span-2"
  | "row-span-3"
  | "row-span-4"
  | "row-span-5"
  | "row-span-6"
  | "row-span-full";

/**
 * Controlling gutters between grid and flexbox items
 * https://tailwindcss.com/docs/gap
 */
export type FlexGridGapType =
  | "gap-0"
  | "gap-0.5"
  | "gap-1"
  | "gap-1.5"
  | "gap-2"
  | "gap-2.5"
  | "gap-3"
  | "gap-3.5"
  | "gap-4"
  | "gap-5"
  | "gap-6"
  | "gap-7"
  | "gap-8"
  | "gap-9"
  | "gap-10"
  | "gap-11"
  | "gap-12"
  | "gap-14"
  | "gap-16"
  | "gap-20"
  | "gap-24";

/**
 * Controlling how flex and grid items are positioned along a container's main axis
 * For flex row, the main axis is horizontal and the cross axis is vertical
 * For flex column, the main axis is vertical and the cross axis is horizontal
 * For grid, the main axis is horizontal (inline direction) and the cross axis is vertical (block direction)
 * https://tailwindcss.com/docs/justify-content
 */
export type FlexGridMainAxisAlignmentType =
  | "justify-start"
  | "justify-end"
  | "justify-center"
  | "justify-between"
  | "justify-around"
  | "justify-evenly";

/**
 * Controlling how grid items are aligned along their inline axis
 * https://tailwindcss.com/docs/justify-items
 */
export type GridInlineAxisAlignmentType =
  | "justify-items-start"
  | "justify-items-end"
  | "justify-items-center"
  | "justify-items-stretch";

/**
 * Controlling how an individual grid item is aligned along its inline axis
 * https://tailwindcss.com/docs/justify-self
 */
export type GridItemInlineAxisAlignmentType =
  | "justify-self-auto"
  | "justify-self-start"
  | "justify-self-end"
  | "justify-self-center"
  | "justify-self-stretch";

/**
 * Controlling how rows are positioned in multi-row flex and grid containers
 * https://tailwindcss.com/docs/align-content
 */
export type FlexGridMultiRowAlignmentType =
  | "content-center"
  | "content-start"
  | "content-end"
  | "content-between"
  | "content-around"
  | "content-evenly";

/**
 * Controlling how flex and grid items are positioned along a container's cross axis
 * https://tailwindcss.com/docs/align-items
 */
export type FlexGridCrossAxisAlignmentType =
  | "items-start"
  | "items-end"
  | "items-center"
  | "items-baseline"
  | "items-stretch";

/**
 * Controlling how an individual flex or grid item is positioned along its container's cross axis
 * https://tailwindcss.com/docs/align-self
 */
export type FlexGridItemCrossAxisAlignmentType =
  | "self-auto"
  | "self-start"
  | "self-end"
  | "self-center"
  | "self-stretch";

/**
 * Controlling an element's left margin
 * https://tailwindcss.com/docs/margin
 */
export type LeftMarginType =
  | "ml-0"
  | "ml-0.5"
  | "ml-1"
  | "ml-1.5"
  | "ml-2"
  | "ml-2.5"
  | "ml-3"
  | "ml-3.5"
  | "ml-4"
  | "ml-5"
  | "ml-6"
  | "ml-7"
  | "ml-8"
  | "ml-9"
  | "ml-10"
  | "ml-11"
  | "ml-12"
  | "ml-14"
  | "ml-16"
  | "ml-20"
  | "ml-24"
  | "ml-28"
  | "ml-32"
  | "ml-36"
  | "ml-40"
  | "ml-44"
  | "ml-48"
  | "ml-52"
  | "ml-56"
  | "ml-60"
  | "ml-64"
  | "ml-72"
  | "ml-80"
  | "ml-auto";

/**
 * Controlling an element's right margin
 * https://tailwindcss.com/docs/margin
 */
export type RightMarginType =
  | "mr-0"
  | "mr-0.5"
  | "mr-1"
  | "mr-1.5"
  | "mr-2"
  | "mr-2.5"
  | "mr-3"
  | "mr-3.5"
  | "mr-4"
  | "mr-5"
  | "mr-6"
  | "mr-7"
  | "mr-8"
  | "mr-9"
  | "mr-10"
  | "mr-11"
  | "mr-12"
  | "mr-14"
  | "mr-16"
  | "mr-20"
  | "mr-24"
  | "mr-28"
  | "mr-32"
  | "mr-36"
  | "mr-40"
  | "mr-44"
  | "mr-48"
  | "mr-52"
  | "mr-56"
  | "mr-60"
  | "mr-64"
  | "mr-72"
  | "mr-80"
  | "mr-auto";

/**
 * Controlling an element's horizontal margin
 * https://tailwindcss.com/docs/margin
 */
export type HorizontalMarginType =
  | "mx-0"
  | "mx-0.5"
  | "mx-1"
  | "mx-1.5"
  | "mx-2"
  | "mx-2.5"
  | "mx-3"
  | "mx-3.5"
  | "mx-4"
  | "mx-5"
  | "mx-6"
  | "mx-7"
  | "mx-8"
  | "mx-9"
  | "mx-10"
  | "mx-11"
  | "mx-12"
  | "mx-14"
  | "mx-16"
  | "mx-20"
  | "mx-24"
  | "mx-28"
  | "mx-32"
  | "mx-36"
  | "mx-40"
  | "mx-44"
  | "mx-48"
  | "mx-52"
  | "mx-56"
  | "mx-60"
  | "mx-64"
  | "mx-72"
  | "mx-80"
  | "mx-auto";

/**
 * Controlling an element's top margin
 * https://tailwindcss.com/docs/margin
 */
export type TopMarginType =
  | "mt-0"
  | "mt-0.5"
  | "mt-1"
  | "mt-1.5"
  | "mt-2"
  | "mt-2.5"
  | "mt-3"
  | "mt-3.5"
  | "mt-4"
  | "mt-5"
  | "mt-6"
  | "mt-7"
  | "mt-8"
  | "mt-9"
  | "mt-10"
  | "mt-11"
  | "mt-12"
  | "mt-14"
  | "mt-16"
  | "mt-20"
  | "mt-24"
  | "mt-28"
  | "mt-32"
  | "mt-36"
  | "mt-40"
  | "mt-44"
  | "mt-48"
  | "mt-52"
  | "mt-56"
  | "mt-60"
  | "mt-64"
  | "mt-72"
  | "mt-80"
  | "mt-auto";

/**
 * Controlling an element's bottom margin
 * https://tailwindcss.com/docs/margin
 */
export type BottomMarginType =
  | "mb-0"
  | "mb-0.5"
  | "mb-1"
  | "mb-1.5"
  | "mb-2"
  | "mb-2.5"
  | "mb-3"
  | "mb-3.5"
  | "mb-4"
  | "mb-5"
  | "mb-6"
  | "mb-7"
  | "mb-8"
  | "mb-9"
  | "mb-10"
  | "mb-11"
  | "mb-12"
  | "mb-14"
  | "mb-16"
  | "mb-20"
  | "mb-24"
  | "mb-28"
  | "mb-32"
  | "mb-36"
  | "mb-40"
  | "mb-44"
  | "mb-48"
  | "mb-52"
  | "mb-56"
  | "mb-60"
  | "mb-64"
  | "mb-72"
  | "mb-80"
  | "mb-auto";

/**
 * Controlling an element's vertical margin
 * https://tailwindcss.com/docs/margin
 */
export type VerticalMarginType =
  | "my-0"
  | "my-0.5"
  | "my-1"
  | "my-1.5"
  | "my-2"
  | "my-2.5"
  | "my-3"
  | "my-3.5"
  | "my-4"
  | "my-5"
  | "my-6"
  | "my-7"
  | "my-8"
  | "my-9"
  | "my-10"
  | "my-11"
  | "my-12"
  | "my-14"
  | "my-16"
  | "my-20"
  | "my-24"
  | "my-28"
  | "my-32"
  | "my-36"
  | "my-40"
  | "my-44"
  | "my-48"
  | "my-52"
  | "my-56"
  | "my-60"
  | "my-64"
  | "my-72"
  | "my-80"
  | "my-auto";

/*****************************************************************
 * Intent Style Types
 ****************************************************************/

export enum IntentState {
  DEFAULT = 0,
  HOVER,
  PRESSED,
  FOCUS,
  DISABLED,
}

export enum IntentColor {
  GRAY_LIGHTEST = 0,
  GRAY_LIGHT,
  GRAY,
  GRAY_DARK,
  BRAND,
  PRIMARY,
  SUCCESS,
  WARNING,
  DANGER,
  BLACK,
}

/**
 * Controlling the opacity of an element's background color
 * https://tailwindcss.com/docs/background-opacity
 */
export type BackgroundOpacityType =
  | "bg-opacity-0"
  | "bg-opacity-5"
  | "bg-opacity-10"
  | "bg-opacity-20"
  | "bg-opacity-25"
  | "bg-opacity-30"
  | "bg-opacity-40"
  | "bg-opacity-50"
  | "bg-opacity-60"
  | "bg-opacity-70"
  | "bg-opacity-75"
  | "bg-opacity-80"
  | "bg-opacity-90"
  | "bg-opacity-95"
  | "bg-opacity-100";

/**
 * Controlling the opacity of an element's text color
 * https://tailwindcss.com/docs/text-opacity
 */
export type ForegroundOpacityType =
  | "text-opacity-0"
  | "text-opacity-5"
  | "text-opacity-10"
  | "text-opacity-20"
  | "text-opacity-25"
  | "text-opacity-30"
  | "text-opacity-40"
  | "text-opacity-50"
  | "text-opacity-60"
  | "text-opacity-70"
  | "text-opacity-75"
  | "text-opacity-80"
  | "text-opacity-90"
  | "text-opacity-95"
  | "text-opacity-100";

/**
 * Controlling the opacity of an element's border color
 * https://tailwindcss.com/docs/border-opacity
 */
export type BorderOpacityType =
  | "border-opacity-0"
  | "border-opacity-5"
  | "border-opacity-10"
  | "border-opacity-20"
  | "border-opacity-25"
  | "border-opacity-30"
  | "border-opacity-40"
  | "border-opacity-50"
  | "border-opacity-60"
  | "border-opacity-70"
  | "border-opacity-75"
  | "border-opacity-80"
  | "border-opacity-90"
  | "border-opacity-95"
  | "border-opacity-100";

/**
 * Controlling the opacity of outline rings
 * https://tailwindcss.com/docs/ring-opacity
 */
export type RingOpacityType =
  | "ring-opacity-0"
  | "ring-opacity-5"
  | "ring-opacity-10"
  | "ring-opacity-20"
  | "ring-opacity-25"
  | "ring-opacity-30"
  | "ring-opacity-40"
  | "ring-opacity-50"
  | "ring-opacity-60"
  | "ring-opacity-70"
  | "ring-opacity-75"
  | "ring-opacity-80"
  | "ring-opacity-90"
  | "ring-opacity-95"
  | "ring-opacity-100";

/**
 * Controlling the he cursor style when hovering over an element
 * https://tailwindcss.com/docs/cursor
 */
export type CursorType =
  | "cursor-auto"
  | "cursor-default"
  | "cursor-pointer"
  | "cursor-wait"
  | "cursor-text"
  | "cursor-move"
  | "cursor-help"
  | "cursor-not-allowed";

/*************************************************************
 * Geometry Style Types
 *************************************************************/

/**
 * Setting the width of an element
 * https://tailwindcss.com/docs/width
 */
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
  | "w-px"
  | "w-screen"
  | "w-min"
  | "w-max";

/**
 * Setting the maximum width of an element
 * https://tailwindcss.com/docs/max-width
 */
export type MaxWidthType =
  | "max-w-0"
  | "max-w-none"
  | "max-w-xs"
  | "max-w-sm"
  | "max-w-md"
  | "max-w-lg"
  | "max-w-xl"
  | "max-w-2xl"
  | "max-w-3xl"
  | "max-w-4xl"
  | "max-w-5xl"
  | "max-w-6xl"
  | "max-w-7xl"
  | "max-w-full"
  | "max-w-min"
  | "max-w-max";

/**
 * Setting the minimum width of an element
 * https://tailwindcss.com/docs/min-width
 */
export type MinWidthType = "min-w-0" | "min-w-full" | "min-w-min" | "min-w-max";

/**
 * Setting the height of an element
 * https://tailwindcss.com/docs/height
 */
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
  | "h-px"
  | "h-screen";

/**
 * Setting the maximum height of an element
 * https://tailwindcss.com/docs/max-height
 */
export type MaxHeightType =
  | "max-h-0"
  | "max-h-0.5"
  | "max-h-1"
  | "max-h-1.5"
  | "max-h-2"
  | "max-h-2.5"
  | "max-h-3"
  | "max-h-3.5"
  | "max-h-4"
  | "max-h-5"
  | "max-h-6"
  | "max-h-7"
  | "max-h-8"
  | "max-h-9"
  | "max-h-10"
  | "max-h-11"
  | "max-h-12"
  | "max-h-14"
  | "max-h-16"
  | "max-h-20"
  | "max-h-24"
  | "max-h-28"
  | "max-h-32"
  | "max-h-36"
  | "max-h-40"
  | "max-h-44"
  | "max-h-48"
  | "max-h-52"
  | "max-h-56"
  | "max-h-60"
  | "max-h-72"
  | "max-h-80"
  | "max-h-96"
  | "max-h-full"
  | "max-h-screen";

/**
 * Setting the minimum height of an element
 * https://tailwindcss.com/docs/min-height
 */
export type MinHeightType = "min-h-0" | "min-h-full";

/**
 * Controlling the width of an element's borders
 * https://tailwindcss.com/docs/border-width
 */
export type BorderWidthType = "border-0" | "border" | "border-2" | "border-4" | "border-8";

/**
 * Controlling the border radius of an element
 * https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusType =
  | "rounded-none"
  | "rounded-sm"
  | "rounded"
  | "rounded-md"
  | "rounded-lg"
  | "rounded-xl"
  | "rounded-full";

/**
 * Creating outline rings with box-shadows
 * https://tailwindcss.com/docs/ring-width
 */
export type RingWidthType = "ring-0" | "ring" | "ring-1" | "ring-2" | "ring-4" | "ring-8";

/**
 * Controlling an element's left padding
 * https://tailwindcss.com/docs/padding
 */
export type LeftPaddingType =
  | "pl-0"
  | "pl-0.5"
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

/**
 * Controlling an element's right padding
 * https://tailwindcss.com/docs/padding
 */
export type RightPaddingType =
  | "pr-0"
  | "pr-0.5"
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

/**
 * Controlling an element's horizontal padding
 * https://tailwindcss.com/docs/padding
 */
export type HorizontalPaddingType =
  | "px-0"
  | "px-0.5"
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

/**
 * Controlling an element's top padding
 * https://tailwindcss.com/docs/padding
 */
export type TopPaddingType =
  | "pt-0"
  | "pt-0.5"
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

/**
 * Controlling an element's bottom padding
 * https://tailwindcss.com/docs/padding
 */
export type BottomPaddingType =
  | "pb-0"
  | "pb-0.5"
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

/**
 * Controlling an element's vertical padding
 * https://tailwindcss.com/docs/padding
 */
export type VerticalPaddingType =
  | "py-0"
  | "py-0.5"
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

/**
 * Controlling the box shadow of an element
 * https://tailwindcss.com/docs/box-shadow
 */
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
 * Specifying the origin for an element's transformations
 * https://tailwindcss.com/docs/transform-origin
 */
export type TransformOriginType =
  | "origin-center"
  | "origin-top"
  | "origin-top-right"
  | "origin-right"
  | "origin-bottom-right"
  | "origin-bottom"
  | "origin-bottom-left"
  | "origin-left"
  | "origin-top-left";

/**
 * Scaling elements with transform
 * https://tailwindcss.com/docs/scale
 */
export type TransformScaleType =
  | "scale-0"
  | "scale-50"
  | "scale-75"
  | "scale-90"
  | "scale-95"
  | "scale-100"
  | "scale-105"
  | "scale-110"
  | "scale-125"
  | "scale-150";

/**
 * Rotating elements with transform
 * https://tailwindcss.com/docs/rotate
 */
export type TransformRotateType =
  | "rotate-0"
  | "rotate-1"
  | "rotate-2"
  | "rotate-3"
  | "rotate-6"
  | "rotate-12"
  | "rotate-45"
  | "rotate-90"
  | "rotate-180"
  | "-rotate-180"
  | "-rotate-90"
  | "-rotate-45"
  | "-rotate-12"
  | "-rotate-6"
  | "-rotate-3"
  | "-rotate-2"
  | "-rotate-1";

/**
 * Translating elements with transform
 * https://tailwindcss.com/docs/translate
 */
export type TransformTranslateType =
  | "translate-x-0"
  | "translate-x-0.5"
  | "translate-x-1"
  | "translate-x-1.5"
  | "translate-x-2"
  | "translate-x-2.5"
  | "translate-x-3"
  | "translate-x-3.5"
  | "translate-x-4"
  | "translate-x-5"
  | "translate-x-6"
  | "translate-x-7"
  | "translate-x-8"
  | "translate-x-9"
  | "translate-x-10"
  | "translate-x-11"
  | "translate-x-12"
  | "translate-x-14"
  | "translate-x-16"
  | "translate-x-20"
  | "translate-x-24"
  | "translate-x-1/2"
  | "translate-x-1/3"
  | "translate-x-2/3"
  | "translate-x-1/4"
  | "translate-x-2/4"
  | "translate-x-3/4"
  | "translate-x-full"
  | "-translate-x-0"
  | "-translate-x-0.5"
  | "-translate-x-1"
  | "-translate-x-1.5"
  | "-translate-x-2"
  | "-translate-x-2.5"
  | "-translate-x-3"
  | "-translate-x-3.5"
  | "-translate-x-4"
  | "-translate-x-5"
  | "-translate-x-6"
  | "-translate-x-7"
  | "-translate-x-8"
  | "-translate-x-9"
  | "-translate-x-10"
  | "-translate-x-11"
  | "-translate-x-12"
  | "-translate-x-14"
  | "-translate-x-16"
  | "-translate-x-20"
  | "-translate-x-24"
  | "-translate-x-1/2"
  | "-translate-x-1/3"
  | "-translate-x-2/3"
  | "-translate-x-1/4"
  | "-translate-x-2/4"
  | "-translate-x-3/4"
  | "-translate-x-full"
  | "translate-y-0"
  | "translate-y-0.5"
  | "translate-y-1"
  | "translate-y-1.5"
  | "translate-y-2"
  | "translate-y-2.5"
  | "translate-y-3"
  | "translate-y-3.5"
  | "translate-y-4"
  | "translate-y-5"
  | "translate-y-6"
  | "translate-y-7"
  | "translate-y-8"
  | "translate-y-9"
  | "translate-y-10"
  | "translate-y-11"
  | "translate-y-12"
  | "translate-y-14"
  | "translate-y-16"
  | "translate-y-20"
  | "translate-y-24"
  | "translate-y-1/2"
  | "translate-y-1/3"
  | "translate-y-2/3"
  | "translate-y-1/4"
  | "translate-y-2/4"
  | "translate-y-3/4"
  | "translate-y-full"
  | "-translate-y-0"
  | "-translate-y-0.5"
  | "-translate-y-1"
  | "-translate-y-1.5"
  | "-translate-y-2"
  | "-translate-y-2.5"
  | "-translate-y-3"
  | "-translate-y-3.5"
  | "-translate-y-4"
  | "-translate-y-5"
  | "-translate-y-6"
  | "-translate-y-7"
  | "-translate-y-8"
  | "-translate-y-9"
  | "-translate-y-10"
  | "-translate-y-11"
  | "-translate-y-12"
  | "-translate-y-14"
  | "-translate-y-16"
  | "-translate-y-20"
  | "-translate-y-24"
  | "-translate-y-1/2"
  | "-translate-y-1/3"
  | "-translate-y-2/3"
  | "-translate-y-1/4"
  | "-translate-y-2/4"
  | "-translate-y-3/4"
  | "-translate-y-full";

/******************************************************************
 * Typography Style Types
 ******************************************************************/

/**
 * Controlling the font size of an element
 * https://tailwindcss.com/docs/font-size
 */
export type FontSizeType =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl";

/**
 * Controlling the font smoothing of an element
 * https://tailwindcss.com/docs/font-smoothing
 */
export type FontSmoothingType = "antialiased" | "subpixel-antialiased";

/**
 * Controlling the font style of an element
 * https://tailwindcss.com/docs/font-style
 */
export type FontStyleType = "italic" | "not-italic";

/**
 * Controlling the font weight of an element
 * https://tailwindcss.com/docs/font-weight
 */
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

/**
 * Controlling the variant of numbers
 * https://tailwindcss.com/docs/font-variant-numeric
 */
export type FontVariantNumericType =
  | "normal-nums"
  | "ordinal"
  | "slashed-zero"
  | "lining-nums"
  | "oldstyle-nums"
  | "proportional-nums"
  | "tabular-nums"
  | "diagonal-fractions"
  | "stacked-fractions";

/**
 * Controlling the tracking (letter spacing) of an element
 * https://tailwindcss.com/docs/letter-spacing
 */
export type LetterSpacingType =
  | "tracking-tighter"
  | "tracking-tight"
  | "tracking-normal"
  | "tracking-wide"
  | "tracking-wider"
  | "tracking-widest";

/**
 * Controlling the leading (line height) of an element
 * https://tailwindcss.com/docs/line-height
 */
export type LineHeightType =
  | "leading-none"
  | "leading-tight"
  | "leading-snug"
  | "leading-normal"
  | "leading-relaxed"
  | "leading-loose";

/**
 * Controlling the bullet/number style of a list
 * https://tailwindcss.com/docs/list-style-type
 */
export type ListStyleType = "list-none" | "list-disc" | "list-decimal";

/**
 * Controlling the position of bullets/numbers in lists
 * https://tailwindcss.com/docs/list-style-position
 */
export type ListStylePositionType = "list-inside" | "list-outside";

/**
 * Controlling the decoration of text
 * https://tailwindcss.com/docs/text-decoration
 */
export type TextDecorationType = "underline" | "line-through" | "no-underline";

/**
 * Controlling the transformation of text
 * https://tailwindcss.com/docs/text-transform
 */
export type TextTransformType = "uppercase" | "lowercase" | "capitalize" | "normal-case";

/**
 * Controlling text overflow in an element
 * https://tailwindcss.com/docs/text-overflow
 */
export type TextOverflowType = "truncate" | "overflow-ellipsis" | "overflow-clip";

/**
 * Controlling an element's white-space property
 * https://tailwindcss.com/docs/whitespace
 */
export type WhitespaceType =
  | "whitespace-normal"
  | "whitespace-nowrap"
  | "whitespace-pre"
  | "whitespace-pre-line"
  | "whitespace-pre-wrap";

/**
 * Controlling word breaks in an element
 * https://tailwindcss.com/docs/word-break
 */
export type WordBreakType = "break-normal" | "break-words" | "break-all";

/*******************************************************
 * Icon Style Types
 ********************************************************/

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

/*******************************************************
 * Input Types
 ********************************************************/

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

/*******************************************************
 * Resource Types
 ********************************************************/

export type ResourceProperty = {
  id: string;
  name: string;
  value?: string;
  intent?: IntentColor;
  icon?: IconName;
  iconStyle?: IconStyle;
  iconTransform?: IconTransform;
  asLink?: boolean;
  linkPath?: string;
};

/*******************************************************
 * Item Types
 ********************************************************/

export type ListItem = {
  section?: string;
  group?: string;
  label: string;
  path?: string;
  disabled?: boolean;
  leftIcon?: IconName;
  leftIconTransform?: IconTransform;
  leftIconStyle?: IconStyle;
  rightIcon?: IconName;
  rightIconTransform?: IconTransform;
  rightIconStyle?: IconStyle;
};

export type TreeItem = {
  id: string;
  name: string;
  label: string;
  disabled?: boolean;

  // Left Icon
  leftIcon?: IconName;
  leftIconTransform?: IconTransform;
  leftIconStyle?: IconStyle;

  // Right Icon
  rightIcon?: IconName;
  rightIconTransform?: IconTransform;
  rightIconStyle?: IconStyle;

  // Children
  children?: TreeItem[];
};

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
