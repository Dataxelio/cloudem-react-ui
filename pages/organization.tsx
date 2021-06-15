import Link from "next/link";
import { AnchorButton } from "@dataxelio/react-ui.input.anchor-button";
import { IntentColor } from "@dataxelio/react-ui.utils.prop-types";

export default function Organization() {
  return (
    <div>
      Welcome to the organization page. Go to the{" "}
      <Link href="/" passHref>
        <AnchorButton
          intent={IntentColor.PRIMARY}
          minimal
          text="Home Page"
          fontSize="text-sm"
          horizontalPadding="px-1"
          verticalPadding="py-0"
        ></AnchorButton>
      </Link>{" "}
      page.
    </div>
  );
}
