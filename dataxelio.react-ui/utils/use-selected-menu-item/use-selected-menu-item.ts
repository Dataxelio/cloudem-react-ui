import { useMemo } from "react";

import { MenuItemData } from "@dataxelio/react-ui.utils.prop-types";

export function getMenuItemById(
  active: boolean,
  items: MenuItemData[],
  key: string
): MenuItemData | undefined {
  let res: MenuItemData | undefined = undefined;

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
  items: MenuItemData[],
  key: string
): MenuItemData | undefined {
  const res = useMemo(() => getMenuItemById(active, items, key), [active, items, key]);

  return res;
}
