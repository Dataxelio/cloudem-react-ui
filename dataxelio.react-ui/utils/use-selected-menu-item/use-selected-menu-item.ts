import { useMemo } from "react";

import { TreeItem } from "@dataxelio/react-ui.utils.prop-types";

export type searchInput = {
  active: boolean;
  items: TreeItem[];
  itemsVersion: number;
  customId?: string;
  label?: string;
};

export function searchItemByCustomId(input: searchInput): TreeItem | undefined {
  let res: TreeItem | undefined = undefined;

  if (input.active && !!input.customId) {
    res = input.items.find(item => item.customId === input.customId);

    if (!res) {
      input.items.every(item => {
        if (!!item.children) {
          res = searchItemByCustomId({
            active: input.active,
            items: item.children,
            itemsVersion: input.itemsVersion,
            customId: input.customId,
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
            itemsVersion: input.itemsVersion,
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
  const res1 = useMemo(
    () => searchItemByCustomId(input),
    [input.active, input.itemsVersion, input.customId]
  );

  const newInput: searchInput = {
    active: res1 === undefined,
    items: input.items,
    itemsVersion: input.itemsVersion,
    customId: input.customId,
    label: input.label,
  };

  const res2 = useMemo(
    () => searchItemByLabel(newInput),
    [newInput.active, newInput.itemsVersion, newInput.label]
  );

  return res1 ?? res2;
}
