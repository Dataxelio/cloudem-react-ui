import React from "react";

import { LayoutElementProps } from "@dataxelio/react-ui.utils.prop-types";

const defaultProps: LayoutElementProps = { __LAYOUT_ELEMENT: "footer" };
export type DefaultLayoutElementProps = typeof defaultProps;

export interface FooterProps extends DefaultLayoutElementProps {
  children: React.ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
  return <>{children}</>;
};

Footer.defaultProps = defaultProps;
