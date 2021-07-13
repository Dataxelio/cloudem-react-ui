import { useMemo } from "react";

import { ListItem, TreeItem } from "@dataxelio/react-ui.utils.prop-types";

export type buildInput = {
  items: ListItem[];
  itemsVersion: number;
  sortSections: boolean;
  sortGroups: boolean;
  sortItems: boolean;
};

type GroupEntry = {
  id: string;
  items: TreeItem[];
};

type SectionEntry = {
  id: number;
  groupNodeMap: Map<string, GroupEntry>;
};

export type NodeReturn = {
  haveSection: boolean;
  treeItems: TreeItem[];
};

export function buildTree(input: buildInput): NodeReturn {
  let incr: number = 0;
  const sectionNodeMap = new Map<string, SectionEntry>();

  input.items.forEach(item => {
    const sectionName = item.section ?? "";
    const sectionNodeEntryRaw = sectionNodeMap.get(sectionName);
    const sectionNodeEntry: SectionEntry = sectionNodeEntryRaw ?? {
      id: incr++,
      groupNodeMap: new Map([]),
    };

    if (!sectionNodeEntryRaw) {
      sectionNodeMap.set(sectionName, sectionNodeEntry);
    }

    const sectionNodeId = sectionNodeEntry.id;
    const groupNodeMap = sectionNodeEntry.groupNodeMap;
    const groupNodeOffset = groupNodeMap.size;

    const groupName = item.group ?? "";
    const groupNodeEntryRaw = groupNodeMap.get(groupName);
    const groupNodeEntry: GroupEntry = groupNodeEntryRaw ?? {
      id: `${sectionNodeId}${groupNodeOffset}`,
      items: [],
    };

    if (!groupNodeEntryRaw) {
      groupNodeMap.set(groupName, groupNodeEntry);
    }

    const groupNodeId = groupNodeEntry.id;
    const itemNodes = groupNodeEntry.items;
    const itemNodeOffset = itemNodes.length;

    itemNodes.push({
      id: `${groupNodeId}${itemNodeOffset}`,
      path: item.path ?? "",
      label: item.label,
      disabled: item.disabled,
      leftIcon: item.leftIcon,
      leftIconTransform: item.leftIconTransform,
      leftIconStyle: item.leftIconStyle,
      rightIcon: item.rightIcon,
      rightIconTransform: item.rightIconTransform,
      rightIconStyle: item.rightIconStyle,
      customId: item.customId,
      customName: item.customName,
      filterGroupLabel: item.filterGroupLabel,
    });
  });

  const haveSection = sectionNodeMap.size > 1;
  const treeItems: TreeItem[] = [];

  const sortedSectionNodeMap = input.sortSections
    ? new Map([...sectionNodeMap].sort((a, b) => a[0].localeCompare(b[0])))
    : sectionNodeMap;

  sortedSectionNodeMap.forEach((sValue, sKey) => {
    let currentSection: TreeItem | undefined = undefined;

    if (haveSection) {
      const newLength = treeItems.push({
        id: String(sValue.id),
        path: "",
        label: sKey,
        children: [],
      });

      currentSection = treeItems[newLength - 1];
    }

    const groupNodeMap = sValue.groupNodeMap;
    const haveGroup = groupNodeMap.size > 1;

    const sortedGroupNodeMap = input.sortGroups
      ? new Map([...groupNodeMap].sort((a, b) => a[0].localeCompare(b[0])))
      : groupNodeMap;

    sortedGroupNodeMap.forEach((gValue, gKey) => {
      let currentGroup: TreeItem | undefined = undefined;

      if (haveGroup && !!gKey) {
        if (!!currentSection && !!currentSection.children) {
          const newLength = currentSection.children.push({
            id: gValue.id,
            path: "",
            label: gKey,
            children: [],
          });

          currentGroup = currentSection.children[newLength - 1];
        } else {
          const newLength = treeItems.push({
            id: gValue.id,
            path: "",
            label: gKey,
            children: [],
          });

          currentGroup = treeItems[newLength - 1];
        }
      }

      const leafItems = input.sortItems
        ? [...gValue.items].sort((a, b) => a.label.localeCompare(b.label))
        : [...gValue.items];

      if (!!currentGroup && !!currentGroup.children) {
        currentGroup.children.push(...leafItems);
      } else if (!!currentSection && !!currentSection.children) {
        currentSection.children.push(...leafItems);
      } else {
        treeItems.push(...leafItems);
      }
    });
  });

  return { haveSection, treeItems };
}

export function useBuildTree(input: buildInput): NodeReturn {
  const res = useMemo(
    () => buildTree(input),
    [input.itemsVersion, input.sortSections, input.sortGroups, input.sortItems]
  );

  return res;
}
