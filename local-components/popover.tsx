import React from "react";
import { Popover as PopoverImpl } from "@headlessui/react";

export const Popover = () => {
  return (
    <PopoverImpl className="relative">
      <PopoverImpl.Button as="button">Trigger</PopoverImpl.Button>
      <PopoverImpl.Panel
        as="div"
        className="absolute w-screen max-w-sm px-4 py-2 mt-2 z-10 bg-gray-200"
      >
        <div>Analytics</div>
        <div>Engagement</div>
        <div>Security</div>
        <div>Integrations</div>
      </PopoverImpl.Panel>
    </PopoverImpl>
  );
};
