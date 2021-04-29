import { typographyStyleBuilder } from "./typography-style-builder";

describe("typography-intent-builder", () => {
  it("should build default typography style classname", () => {
    const result = typographyStyleBuilder({});
    expect(result).toEqual("text-base font-normal tracking-normal leading-normal");
  });
});
