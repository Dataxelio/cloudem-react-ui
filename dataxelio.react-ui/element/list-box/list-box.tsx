import React, { useRef, useImperativeHandle } from "react";

import { useListBox, AriaListBoxOptions } from "@react-aria/listbox";
import { useListState, ListProps } from "@react-stately/list";

import { TreeItem, IntentColor, ListBoxStyleProps } from "@dataxelio/react-ui.utils.prop-types";
import { layoutStyleBuilder } from "@dataxelio/react-ui.utils.layout-style-builder";
import { geometryStyleBuilder } from "@dataxelio/react-ui.utils.geometry-style-builder";
import { typographyListStyleRemoval } from "@dataxelio/react-ui.utils.typography-style-builder";
import { ListBoxSection } from "@dataxelio/react-ui.element.list-box-section";
import { ListBoxItem } from "@dataxelio/react-ui.element.list-box-item";

export type ListBoxProps = AriaListBoxOptions<TreeItem> & ListProps<TreeItem> & ListBoxStyleProps;

export const ListBox = React.forwardRef<HTMLUListElement, ListBoxProps>(
  (
    {
      interactive = true,
      darkMode = false,
      minimal = true,
      intent = IntentColor.BRAND,
      itemIntentAtDefaultState: intentAtDefaultState = false,
      sectionOpacity = "text-opacity-100",
      forceItemLowGrayBackgroundAtHoverState: forceLowGrayBackgroundAtHoverState = false,
      forceItemLowBrandBackgroundAtHoverState: forceLowBrandBackgroundAtHoverState = false,
      itemCursor: cursor = interactive ? "cursor-pointer" : "cursor-default",

      gapBetweenItems = "gap-3",
      marginBetweenItemsAndSection = "mt-4",

      fill = true,
      itemBackgroundverticalPadding = forceLowGrayBackgroundAtHoverState ||
      forceLowBrandBackgroundAtHoverState
        ? "py-1"
        : "py-0",

      leafFontHeight = "leading-normal",
      leafFontSize = "text-sm",
      leafFontWeight = "font-normal",
      leafLetterSpacing = "tracking-normal",
      leafUseDarkGrayAsDefaultIntent = true,
      sectionFontHeight = "leading-normal",
      sectionFontSize = "text-sm",
      sectionFontWeight = "font-semibold",
      sectionLetterSpacing = "tracking-normal",
      itemTextOverflow: textOverflow = "truncate",
      itemWordBreak: wordBreak = "break-normal",

      renderSectionLabel = true,

      itemInitialIndent: initialIndent = 0,
      itemSizePerIndent: sizePerIndent = 0.25,

      ...rest
    }: ListBoxProps,
    ref
  ) => {
    const innerRef = useRef<HTMLUListElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLUListElement);

    const state = useListState({ ...rest });

    const { listBoxProps } = useListBox({ ...rest }, state, innerRef);

    const layoutClassName = layoutStyleBuilder({
      layout: "flex",
      display: "block",
      flexDirection: "flex-col",
      flexGridGap: gapBetweenItems,
      flexGridMainAxisAlignment: "justify-center",
      flexGridCrossAxisAlignment: "items-start",
    });

    const geometryClassName = geometryStyleBuilder({ fill });

    const typographyClassName = typographyListStyleRemoval();

    return (
      <ul
        ref={innerRef}
        className={`${layoutClassName} ${geometryClassName} ${typographyClassName}`}
        {...listBoxProps}
      >
        {[...state.collection].map(item => (
          <React.Fragment key={item.key}>
            {item.type === "section" && (
              <ListBoxSection
                renderLabel={renderSectionLabel}
                interactive={interactive}
                darkMode={darkMode}
                minimal={minimal}
                intent={intent}
                intentAtDefaultState={intentAtDefaultState}
                sectionOpacity={sectionOpacity}
                forceLowGrayBackgroundAtHoverState={forceLowGrayBackgroundAtHoverState}
                forceLowBrandBackgroundAtHoverState={forceLowBrandBackgroundAtHoverState}
                cursor={cursor}
                gapBetweenItems={gapBetweenItems}
                marginBetweenItemsAndSection={marginBetweenItemsAndSection}
                itemBackgroundverticalPadding={itemBackgroundverticalPadding}
                leafFontHeight={leafFontHeight}
                leafFontSize={leafFontSize}
                leafFontWeight={leafFontWeight}
                leafLetterSpacing={leafLetterSpacing}
                leafUseDarkGrayAsDefaultIntent={leafUseDarkGrayAsDefaultIntent}
                sectionFontHeight={sectionFontHeight}
                sectionFontSize={sectionFontSize}
                sectionFontWeight={sectionFontWeight}
                sectionLetterSpacing={sectionLetterSpacing}
                textOverflow={textOverflow}
                wordBreak={wordBreak}
                section={item}
                state={state}
                initialIndent={initialIndent}
                sizePerIndent={sizePerIndent}
              />
            )}
            {item.type === "item" && (
              <ListBoxItem
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
                item={item}
                state={state}
                initialIndent={initialIndent}
                sizePerIndent={sizePerIndent}
              />
            )}
          </React.Fragment>
        ))}
      </ul>
    );
  }
);
