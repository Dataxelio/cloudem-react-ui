import React from "react";

import { LayoutElementProps } from "@dataxelio/react-ui.utils.prop-types";

export interface TestContentProps {
  children: React.ReactNode;
}

export const TestContent = ({ children }: TestContentProps) => {
  let headerElement: React.ReactNode = undefined;
  let contentTextElement: React.ReactNode = undefined;
  let contentElement: React.ReactNode = undefined;
  let footerElement: React.ReactNode = undefined;

  React.Children.forEach(children, child => {
    if (React.isValidElement<LayoutElementProps & { children: React.ReactNode }>(child)) {
      if (!headerElement && child.props.__LAYOUT_ELEMENT === "header") {
        headerElement = child.props.children;
      }

      if (!contentTextElement && child.props.__LAYOUT_ELEMENT === "content-text") {
        contentTextElement = child.props.children;
      }

      if (!contentElement && child.props.__LAYOUT_ELEMENT === "content") {
        contentElement = child.props.children;
      }

      if (!footerElement && child.props.__LAYOUT_ELEMENT === "footer") {
        footerElement = child.props.children;
      }
    }
  });
  return (
    <div>
      {headerElement}
      {contentTextElement}
      {contentElement}
      {footerElement}
    </div>
  );
};
