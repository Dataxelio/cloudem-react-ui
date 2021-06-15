import React from "react";

import { NavbarGroupAlignmentProps } from "@dataxelio/react-ui.utils.prop-types";

export type NavbarGroupProps = NavbarGroupAlignmentProps & { children: React.ReactNode };

export function NavbarGroup({ children }: NavbarGroupProps) {
  return <>{children}</>;
}
