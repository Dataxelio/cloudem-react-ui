import React from "react";

import { LayoutElementProps } from "@dataxelio/react-ui.utils.prop-types";

const defaultProps: LayoutElementProps = { __LAYOUT_ELEMENT: "content" };
export type DefaultLayoutElementProps = typeof defaultProps;

export interface ContentProps extends DefaultLayoutElementProps {
  children: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return <>{children}</>;
};

Content.defaultProps = defaultProps;
