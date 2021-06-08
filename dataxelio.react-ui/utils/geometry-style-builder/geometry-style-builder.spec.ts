import { geometryStyleBuilder } from "./geometry-style-builder";

describe("geometry-style-builder", () => {
  it("should build default geometry style classname", () => {
    const result = geometryStyleBuilder({});
    expect(result).toEqual("w-auto h-auto border-0 rounded-sm ring-0 px-0 py-0 shadow-none");
  });
});
