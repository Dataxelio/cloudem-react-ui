import { IntentColor } from "@dataxelio/react-ui.utils.prop-types";
import { stateIntentStyleBuilder } from "./intent-style-builder";

describe("style-intent-builder", () => {
  it("should build intent style classname with theme=LIGHT color=GRAY", () => {
    const result = stateIntentStyleBuilder({});
    expect(result).toEqual(
      "bg-white hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200 text-gray-900 hover:text-gray-900 focus:text-gray-900 active:text-gray-900"
    );
  });

  it("should build intent style classname with theme=LIGHT color=BRAND", () => {
    const result = stateIntentStyleBuilder({ intentColor: IntentColor.BRAND });
    expect(result).toEqual(
      "bg-brand-600 hover:bg-brand-700 focus:bg-brand-700 active:bg-brand-800 text-brand-600 hover:text-brand-700 focus:text-brand-700 active:text-brand-800"
    );
  });

  it("should build intent style classname with outlined=TRUE theme=LIGHT color=SUCCESS", () => {
    const result = stateIntentStyleBuilder({ outlined: true, intentColor: IntentColor.SUCCESS });
    expect(result).toEqual(
      "border-success-600 hover:border-success-700 focus:border-success-700 active:border-success-800 text-success-600 hover:text-success-700 focus:text-success-700 active:text-success-800"
    );
  });

  it("should build intent style classname with minimal=TRUE theme=LIGHT color=BRAND", () => {
    const result = stateIntentStyleBuilder({ minimal: true, intentColor: IntentColor.BRAND });
    expect(result).toEqual("text-gray-900 hover:text-brand-700 focus:text-brand-700");
  });

  it("should build intent style classname with theme=DARK color=GRAY", () => {
    const result = stateIntentStyleBuilder({ useDarkTheme: true });
    expect(result).toEqual(
      "bg-white hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:bg-gray-900 dark:active:bg-gray-900 text-gray-900 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100 dark:focus:text-gray-100 dark:active:text-white"
    );
  });
});
