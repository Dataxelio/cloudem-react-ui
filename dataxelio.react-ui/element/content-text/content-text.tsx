import React from "react";

import { LayoutElementProps } from "@dataxelio/react-ui.utils.prop-types";

const defaultProps: LayoutElementProps = { __LAYOUT_ELEMENT: "content-text" };
export type DefaultLayoutElementProps = typeof defaultProps;

export interface ContentTextProps extends DefaultLayoutElementProps {
  children: React.ReactNode;
}

export const ContentText = ({ children }: ContentTextProps) => {
  return <>{children}</>;
};

ContentText.defaultProps = defaultProps;
