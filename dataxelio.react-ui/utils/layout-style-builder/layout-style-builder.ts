import {
  LayoutType,
  DisplayType,
  OverflowType,
  OverscrollBehaviorType,
  PositionType,
  LeftPlacementType,
  RightPlacementType,
  TopPlacementType,
  BottomPlacementType,
  VisibilityType,
  ZIndexType,
  FlexDirectionType,
  FlexWrapType,
  FlexItemResizingType,
  FlexItemGrowType,
  FlexItemShrinkType,
  GridTemplateColumnsType,
  GridColumnSpanType,
  GridTemplateRowsType,
  GridRowSpanType,
  FlexGridGapType,
  FlexGridMainAxisAlignmentType,
  GridInlineAxisAlignmentType,
  GridItemInlineAxisAlignmentType,
  FlexGridMultiRowAlignmentType,
  FlexGridCrossAxisAlignmentType,
  FlexGridItemCrossAxisAlignmentType,
  LeftMarginType,
  RightMarginType,
  HorizontalMarginType,
  TopMarginType,
  BottomMarginType,
  VerticalMarginType,
} from "@dataxelio/react-ui.utils.prop-types";

export type LayoutStyleBuilderInput = {
  layout?: LayoutType;
  display?: DisplayType;
  overflow?: OverflowType;
  overscrollBehavior?: OverscrollBehaviorType;
  position?: PositionType;
  leftPlacement?: LeftPlacementType;
  rightPlacement?: RightPlacementType;
  topPlacement?: TopPlacementType;
  bottomPlacement?: BottomPlacementType;
  visibility?: VisibilityType;
  zIndex?: ZIndexType;
  flexDirection?: FlexDirectionType;
  flexWrap?: FlexWrapType;
  flexItemResizing?: FlexItemResizingType;
  flexItemGrow?: FlexItemGrowType;
  flexItemShrink?: FlexItemShrinkType;
  gridTemplateColumns?: GridTemplateColumnsType;
  gridColumnSpan?: GridColumnSpanType;
  gridTemplateRows?: GridTemplateRowsType;
  gridRowSpan?: GridRowSpanType;
  flexGridGap?: FlexGridGapType;
  flexGridMainAxisAlignment?: FlexGridMainAxisAlignmentType;
  gridInlineAxisAlignment?: GridInlineAxisAlignmentType;
  gridItemInlineAxisAlignment?: GridItemInlineAxisAlignmentType;
  flexGridMultiRowAlignment?: FlexGridMultiRowAlignmentType;
  flexGridCrossAxisAlignment?: FlexGridCrossAxisAlignmentType;
  flexGridItemCrossAxisAlignment?: FlexGridItemCrossAxisAlignmentType;
  leftMargin?: LeftMarginType;
  rightMargin?: RightMarginType;
  horizontalMargin?: HorizontalMarginType;
  topMargin?: TopMarginType;
  bottomMargin?: BottomMarginType;
  verticalMargin?: VerticalMarginType;
  customClassName?: string;
};

/**
 * Build layout style given the layout style input
 * @param input - The layout style builder input to use for the style generation
 * @returns the corresponding layout style
 */
export function layoutStyleBuilder(input: LayoutStyleBuilderInput): string {
  const res: string[] = [];

  // Layout
  !!input.layout && res.push(input.layout);

  // Display
  res.push(input.display ?? "block");

  // Overflow
  !!input.overflow && res.push(input.overflow);

  // Overscroll Behavior
  !!input.overscrollBehavior && res.push(input.overscrollBehavior);

  // Position
  !!input.position && res.push(input.position);

  // Absolute Placement
  if (input.position === "absolute" || input.position === "fixed") {
    // Left
    !!input.leftPlacement && res.push(input.leftPlacement);

    // Right
    !!input.rightPlacement && res.push(input.rightPlacement);

    // Top
    !!input.topPlacement && res.push(input.topPlacement);

    // Bottom
    !!input.bottomPlacement && res.push(input.bottomPlacement);
  }

  // Visibility
  res.push(input.visibility ?? "visible");

  // ZIndex
  !!input.zIndex && res.push(input.zIndex);

  // Left Margin
  !!input.leftMargin && res.push(input.leftMargin);

  // Right Margin
  !!input.rightMargin && res.push(input.rightMargin);

  // Horizontal Margin
  !!input.horizontalMargin && res.push(input.horizontalMargin);

  // Top Margin
  !!input.topMargin && res.push(input.topMargin);

  // Bottom Margin
  !!input.bottomMargin && res.push(input.bottomMargin);

  // Vertical Margin
  !!input.verticalMargin && res.push(input.verticalMargin);

  if (input.layout === "flex" || input.layout === "inline-flex") {
    // Flex Direction
    res.push(input.flexDirection ?? "flex-row");

    // Flex Wrap
    res.push(input.flexWrap ?? "flex-nowrap");

    // Flex Gap
    res.push(input.flexGridGap ?? "gap-0");

    // Flex Main Axis Alignment
    res.push(input.flexGridMainAxisAlignment ?? "justify-start");

    // Flex Multi Row Alignment
    res.push(input.flexGridMultiRowAlignment ?? "content-start");

    // Flex Cross Axis Alignment
    res.push(input.flexGridCrossAxisAlignment ?? "items-start");
  } else if (input.layout === "grid" || input.layout === "inline-grid") {
    // Grid Template Columns
    res.push(input.gridTemplateColumns ?? "grid-cols-1");

    // Grid Column Span
    res.push(input.gridColumnSpan ?? "col-span-1");

    // Grid Template Rows
    res.push(input.gridTemplateRows ?? "grid-rows-1");

    // Grid Row Span
    res.push(input.gridRowSpan ?? "row-span-1");

    // Grid Gap
    res.push(input.flexGridGap ?? "gap-0");

    // Grid Main Axis Alignment
    res.push(input.flexGridMainAxisAlignment ?? "justify-start");

    // Grid Inline Axis Alignment
    res.push(input.gridInlineAxisAlignment ?? "justify-items-start");

    // Grid Multi Row Alignment
    res.push(input.flexGridMultiRowAlignment ?? "content-start");

    // Grid Cross Axis Alignment
    res.push(input.flexGridCrossAxisAlignment ?? "items-start");
  }

  // Flex Items Resizing Type
  !!input.flexItemResizing && res.push(input.flexItemResizing);

  // Flex Items Grow Type
  !!input.flexItemGrow && res.push(input.flexItemGrow);

  // Flex Items Shrink Type
  !!input.flexItemShrink && res.push(input.flexItemShrink);

  // Grid Items Inline Axis Alignment
  !!input.gridItemInlineAxisAlignment && res.push(input.gridItemInlineAxisAlignment);

  // Flex & Grid Items Cross Axis Alignment
  !!input.flexGridItemCrossAxisAlignment && res.push(input.flexGridItemCrossAxisAlignment);

  // Custom Classname
  !!input.customClassName && res.push(input.customClassName);

  return res.join(" ");
}
