import { useMemo } from "react";

import { ListItem, TreeItem } from "@dataxelio/react-ui.utils.prop-types";

type NodeEntry = {
  id: number;
  children: TreeItem[];
};

export type NodeReturn = {
  haveSection: boolean;
  treeItems: TreeItem[];
};

export function buildTree(items: ListItem[]): NodeReturn {
  let incr: number = 0;
  const itemNodeMap = new Map<string, NodeEntry>();

  items.forEach(item => {
    const sectionName = item.section ?? "";
    const itemNodeEntryRaw = itemNodeMap.get(sectionName);
    const itemNodeEntry: NodeEntry = itemNodeEntryRaw ?? { id: incr++, children: [] };

    if (!itemNodeEntryRaw) {
      itemNodeMap.set(sectionName, itemNodeEntry);
    }

    const itemNodeId = itemNodeEntry.id;
    const itemNodeChildren = itemNodeEntry.children;
    const itemNodeChildId = itemNodeChildren.length;

    itemNodeChildren.push({
      id: `${itemNodeId}${itemNodeChildId}`,
      name: item.path ?? "",
      label: item.label,
      disabled: item.disabled,
      leftIcon: item.leftIcon,
      leftIconTransform: item.leftIconTransform,
      leftIconStyle: item.leftIconStyle,
      rightIcon: item.rightIcon,
      rightIconTransform: item.rightIconTransform,
      rightIconStyle: item.rightIconStyle,
    });
  });

  const haveSection = itemNodeMap.size > 1;
  const treeItems: TreeItem[] = [];

  const sortedItemNodeMap = new Map([...itemNodeMap].sort((a, b) => a[0].localeCompare(b[0])));
  sortedItemNodeMap.forEach((value, key) => {
    if (!haveSection) {
      treeItems.push(...[...value.children].sort((a, b) => a.label.localeCompare(b.label)));
    } else {
      treeItems.push({
        id: String(value.id),
        name: key,
        label: key,
        children: [...value.children].sort((a, b) => a.label.localeCompare(b.label)),
      });
    }
  });

  return { haveSection, treeItems };
}

export function useBuildTree(items: ListItem[]): NodeReturn {
  const res = useMemo(() => buildTree(items), [items]);

  return res;
}
