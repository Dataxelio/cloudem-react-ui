import { IntentState } from "@dataxelio/react-ui.utils.prop-types";
import { intentStyleBuilder } from "./intent-style-builder";

describe("intent-style-builder", () => {
  it("should build default intent style classname with background=GRAY and foreground=WHITE", () => {
    const result = intentStyleBuilder(IntentState.DEFAULT, {});
    expect(result).toEqual("bg-gray-600 dark:bg-gray-300 text-white dark:text-gray-900");
  });
});
