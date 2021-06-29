import { useMemo } from "react";

import { TreeItem } from "@dataxelio/react-ui.utils.prop-types";

export type searchInput = {
  active: boolean;
  items: TreeItem[];
  label?: string;
};

export function searchItemByLabel(input: searchInput): TreeItem | undefined {
  let res: TreeItem | undefined = undefined;

  if (input.active && !!input.label) {
    res = input.items.find(item => item.label === input.label);

    if (!res) {
      input.items.every(item => {
        if (!!item.children) {
          res = searchItemByLabel({
            active: input.active,
            items: item.children,
            label: input.label,
          });
        }

        if (!!res) {
          return false;
        }

        return true;
      });
    }
  }

  return res;
}

export function useSelectedMenuItem(input: searchInput): TreeItem | undefined {
  const res = useMemo(() => searchItemByLabel(input), [input.active, input.items, input.label]);

  return res;
}
