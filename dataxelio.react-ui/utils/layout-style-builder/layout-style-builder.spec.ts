import { layoutStyleBuilder } from "./layout-style-builder";

describe("layout-style-builder", () => {
  it("should build default layout style classname", () => {
    const result = layoutStyleBuilder({});
    expect(result).toEqual(
      "block overflow-auto overscroll-auto static visible z-0 ml-0 mr-0 mt-0 mb-0"
    );
  });
});
