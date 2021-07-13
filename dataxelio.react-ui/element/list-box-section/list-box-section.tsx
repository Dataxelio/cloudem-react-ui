import React from "react";

import { useMenuSection } from "@react-aria/menu";
import { ListState } from "@react-stately/list";
import { Node } from "@react-types/shared";

import {
  TreeItem,
  IntentColor,
  CursorType,
  ForegroundOpacityType,
  FlexGridGapType,
  TopMarginType,
  VerticalPaddingType,
  LineHeightType,
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
  TextOverflowType,
  WordBreakType,
} from "@dataxelio/react-ui.utils.prop-types";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyListStyleRemoval } from "@dataxelio/react-ui.utils.typography-style-builder";
import { Divider } from "@dataxelio/react-ui.element.divider";
import { Text } from "@dataxelio/react-ui.element.text";
import { ListBoxItem } from "@dataxelio/react-ui.element.list-box-item";

export interface ListBoxSectionProps {
  renderLabel: boolean;

  // Intent Style
  interactive: boolean;
  darkMode: boolean;
  minimal: boolean;
  intent: IntentColor;
  intentAtDefaultState: boolean;
  sectionOpacity: ForegroundOpacityType;
  forceLowGrayBackgroundAtHoverState: boolean;
  forceLowBrandBackgroundAtHoverState: boolean;
  cursor: CursorType;

  // Layout Style
  gapBetweenItems: FlexGridGapType;
  marginBetweenItemsAndSection: TopMarginType;

  // Geometry Style
  itemBackgroundverticalPadding: VerticalPaddingType;

  // Typography Style
  leafFontHeight: LineHeightType;
  leafFontSize: FontSizeType;
  leafFontWeight: FontWeightType;
  leafLetterSpacing: LetterSpacingType;
  leafUseDarkGrayAsDefaultIntent: boolean;
  sectionFontHeight: LineHeightType;
  sectionFontSize: FontSizeType;
  sectionFontWeight: FontWeightType;
  sectionLetterSpacing: LetterSpacingType;
  textOverflow: TextOverflowType;
  wordBreak: WordBreakType;

  // Collection
  section: Node<TreeItem>;
  state: ListState<TreeItem>;

  // List
  initialIndent: number;
  sizePerIndent: number;
}

export const ListBoxSection = ({
  renderLabel,

  interactive,
  darkMode,
  minimal,
  intent,
  intentAtDefaultState,
  sectionOpacity,
  forceLowGrayBackgroundAtHoverState,
  forceLowBrandBackgroundAtHoverState,
  cursor,

  gapBetweenItems,
  marginBetweenItemsAndSection,

  itemBackgroundverticalPadding,

  leafFontHeight,
  leafFontSize,
  leafFontWeight,
  leafLetterSpacing,
  leafUseDarkGrayAsDefaultIntent,
  sectionFontHeight,
  sectionFontSize,
  sectionFontWeight,
  sectionLetterSpacing,
  textOverflow,
  wordBreak,

  section,
  state,

  initialIndent,
  sizePerIndent,
}: ListBoxSectionProps) => {
  const initialLeftPadding = `${initialIndent * sizePerIndent}rem`;

  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  const layoutClassName = layoutStyleBuilder({
    layout: "flex",
    display: "block",
    flexDirection: "flex-col",
    flexGridGap: gapBetweenItems,
    flexGridMainAxisAlignment: "justify-center",
    flexGridCrossAxisAlignment: "items-start",
    topMargin: renderLabel ? marginBetweenItemsAndSection : "mt-0",
  });

  const geometryClassName = geometryStyleBuilder({
    fill: true,
  });

  const typographyClassName = typographyListStyleRemoval();

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <Divider domElement="li" orientation="horizontal" darkMode={darkMode} opacity={0.3} />
      )}
      <li className={geometryClassName} {...itemProps}>
        {renderLabel && !!section.rendered && typeof section.rendered === "string" && (
          <div className={geometryClassName} style={{ paddingLeft: initialLeftPadding }}>
            <Text
              intentColor={IntentColor.GRAY}
              tText={section.rendered}
              minimal={true}
              opacity={sectionOpacity}
              fontHeight={sectionFontHeight}
              fontSize={sectionFontSize}
              fontWeight={sectionFontWeight}
              letterSpacing={sectionLetterSpacing}
              textOverflow={textOverflow}
              wordBreak={wordBreak}
              injectedDomProps={headingProps}
            />
          </div>
        )}
        {renderLabel &&
          !!section.rendered &&
          typeof section.rendered !== "string" &&
          section.rendered}
        <ul
          className={`${layoutClassName} ${geometryClassName} ${typographyClassName}`}
          {...groupProps}
        >
          {[...section.childNodes].map(node => (
            <ListBoxItem
              key={node.key}
              interactive={interactive}
              minimal={minimal}
              intent={intent}
              intentAtDefaultState={intentAtDefaultState}
              forceLowGrayBackgroundAtHoverState={forceLowGrayBackgroundAtHoverState}
              forceLowBrandBackgroundAtHoverState={forceLowBrandBackgroundAtHoverState}
              cursor={cursor}
              itemBackgroundverticalPadding={itemBackgroundverticalPadding}
              leafFontHeight={leafFontHeight}
              leafFontSize={leafFontSize}
              leafFontWeight={leafFontWeight}
              leafLetterSpacing={leafLetterSpacing}
              leafUseDarkGrayAsDefaultIntent={leafUseDarkGrayAsDefaultIntent}
              textOverflow={textOverflow}
              wordBreak={wordBreak}
              item={node}
              state={state}
              initialIndent={initialIndent}
              sizePerIndent={sizePerIndent}
            />
          ))}
        </ul>
      </li>
    </>
  );
};
