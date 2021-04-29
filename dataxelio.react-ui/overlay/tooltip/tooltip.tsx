import React from "react";
import { Popup } from "reactjs-popup";

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  triggerElement: JSX.Element;
  dark?: boolean;
}

export const Tooltip = ({ content, triggerElement, dark }: TooltipProps) => {
  const contentStyle: React.CSSProperties = {
    background: dark ? "#F8FAFC" : "#475569",
    color: dark ? "#475569" : "white",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    marginLeft: "0.25rem",
    borderRadius: "0.125rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: "1rem",
  };
  const overlayStyle: React.CSSProperties = { background: "rgba(0,0,0,0.5)" };
  const arrowStyle: React.CSSProperties = {
    color: dark ? "#F8FAFC" : "#475569",
    padding: "0.125rem",
  };

  return (
    <Popup
      trigger={triggerElement}
      position={["right center", "top center", "bottom center"]}
      on={["hover", "focus"]}
      contentStyle={contentStyle}
      overlayStyle={overlayStyle}
      arrowStyle={arrowStyle}
    >
      <span>{content}</span>
    </Popup>
  );
};
