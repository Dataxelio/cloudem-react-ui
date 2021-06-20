import React from "react";

import Link from "next/link";

import { IntentColor } from "@dataxelio/react-ui.utils.prop-types";
import { AnchorButton, AnchorButtonProps } from "@dataxelio/react-ui.input.anchor-button";

export type LinkButtonProps = AnchorButtonProps & { path: string };

export function LinkButton({
  path,
  intent = IntentColor.PRIMARY,
  minimal = true,
  fontSize = "text-sm",
  horizontalPadding = "px-1",
  verticalPadding = "py-0",
  ...rest
}: LinkButtonProps) {
  return (
    <Link href={path} passHref>
      <AnchorButton
        intent={intent}
        minimal={minimal}
        fontSize={fontSize}
        horizontalPadding={horizontalPadding}
        verticalPadding={verticalPadding}
        {...rest}
      ></AnchorButton>
    </Link>
  );
}
