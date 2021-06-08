import React from "react";

import { LayoutElementProps } from "@dataxelio/react-ui.utils.prop-types";

const defaultProps: LayoutElementProps = { __LAYOUT_ELEMENT: "header" };
export type DefaultLayoutElementProps = typeof defaultProps;

export interface HeaderProps extends DefaultLayoutElementProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return <>{children}</>;
};

Header.defaultProps = defaultProps;
