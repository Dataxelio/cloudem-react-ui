import { useMemo } from "react";

import { TreeItem } from "@dataxelio/react-ui.utils.prop-types";

export function getDisabledMenuItemIds(items: TreeItem[]): string[] {
  const res: string[] = [];

  items.forEach(item => {
    if (item.disabled) {
      res.push(item.id);
    }

    if (!!item.children) {
      const lres = getDisabledMenuItemIds(item.children);
      res.push(...lres);
    }
  });
  return res;
}

export function useDisabledMenuItem(items: TreeItem[]): string[] {
  const res = useMemo(() => getDisabledMenuItemIds(items), [items]);

  return res;
}
