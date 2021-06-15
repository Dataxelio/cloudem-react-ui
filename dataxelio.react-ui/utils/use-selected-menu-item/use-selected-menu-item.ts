import { useMemo } from "react";

import { TreeItem } from "@dataxelio/react-ui.utils.prop-types";

export function getMenuItemById(
  active: boolean,
  items: TreeItem[],
  key: string
): TreeItem | undefined {
  let res: TreeItem | undefined = undefined;

  if (active) {
    res = items.find(item => item.id === key);

    if (!res) {
      items.every(item => {
        if (!!item.children) {
          res = getMenuItemById(active, item.children, key);
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

export function useSelectedMenuItem(
  active: boolean,
  items: TreeItem[],
  key: string
): TreeItem | undefined {
  const res = useMemo(() => getMenuItemById(active, items, key), [active, items, key]);

  return res;
}
