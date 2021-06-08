import React from "react";
import { PlacementAxis } from "@react-types/overlays";

export interface ArrowProps {
  placement: PlacementAxis;
  size?: number;
  positionDomProps: React.HTMLAttributes<HTMLElement>;
}

/**
 * Arrow must be rendred as a child of the overlay (label, card, ...)
 */
export const Arrow = ({ placement, size, positionDomProps }: ArrowProps) => {
  const finalSize = size ?? 8;
  const middleSize = finalSize / 2;

  const topBase =
    positionDomProps.style && positionDomProps.style.top
      ? (positionDomProps.style.top.valueOf() as number)
      : 0;
  const leftBase =
    positionDomProps.style && positionDomProps.style.left
      ? (positionDomProps.style.left.valueOf() as number)
      : 0;

  const lTop = placement.startsWith("bottom") || topBase > 0 ? topBase - middleSize : undefined;
  const lBottom = placement.startsWith("top") ? -middleSize : undefined;
  const lLeft = placement.startsWith("right") || leftBase > 0 ? leftBase - middleSize : undefined;
  const lRight = placement.startsWith("left") ? -middleSize : undefined;

  const lBorderTopColor =
    placement.startsWith("bottom") || placement.startsWith("left") ? "inherit" : "transparent";
  const lBorderBottomColor =
    placement.startsWith("top") || placement.startsWith("right") ? "inherit" : "transparent";
  const lBorderLeftColor =
    placement.startsWith("bottom") || placement.startsWith("right") ? "inherit" : "transparent";
  const lBorderRightColor =
    placement.startsWith("top") || placement.startsWith("left") ? "inherit" : "transparent";

  return (
    <div
      style={{
        position: "absolute",
        width: finalSize,
        height: finalSize,
        backgroundColor: "inherit",
        border: "inherit",
        borderTopColor: lBorderTopColor,
        borderBottomColor: lBorderBottomColor,
        borderLeftColor: lBorderLeftColor,
        borderRightColor: lBorderRightColor,
        top: lTop,
        bottom: lBottom,
        left: lLeft,
        right: lRight,
        transform: "rotate(45deg)",
      }}
    ></div>
  );
};
