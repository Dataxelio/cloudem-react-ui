import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  FontSizeType,
  IntentColor,
  IconAnimation,
  IconTransform,
  IconStyle,
} from "@dataxelio/react-ui.utils.prop-types";
import { stateIntentStyleBuilder } from "@dataxelio/react-ui.utils.intent-style-builder";

export interface IconProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  inheritStyle?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  invisible?: boolean;
  fontSize?: FontSizeType;
  useDarkTheme?: boolean;
  intentColor?: IntentColor;
  iName: IconName;
  iAnimation?: IconAnimation;
  iTransform?: IconTransform;
  iStyle?: IconStyle;
}

export const Icon = ({
  iName,
  inheritStyle,
  minimal,
  outlined,
  invisible,
  fontSize,
  intentColor,
  iAnimation,
  iTransform,
  iStyle,
  className: iClassName,
}: IconProps) => {
  return (
    <FontAwesomeIcon
      className={`${iClassName || ""} ${inheritStyle ? "" : fontSize || "text-base"} ${
        inheritStyle
          ? "text-current"
          : stateIntentStyleBuilder({
              useDarkTheme: true,
              useDefaultState: true,
              minimal,
              outlined,
              withForeground: true,
              intentColor,
            })
      } ${invisible ? "invisible" : "visible"}`}
      icon={[iStyle || "fas", iName]}
      transform={{
        x: (iTransform && iTransform.x) || 0,
        y: (iTransform && iTransform.y) || 0,
        rotate: (iTransform && iTransform.rotate) || 0,
        flipX: (iTransform && iTransform.flipX) || false,
        flipY: (iTransform && iTransform.flipY) || false,
        size: (iTransform && iTransform.size) || 20,
      }}
      spin={iAnimation === "spin"}
      pulse={iAnimation === "pulse"}
    />
  );
};
