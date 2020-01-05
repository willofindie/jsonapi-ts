import { JSONAPIError } from "src/error";

describe("Errors", () => {
  it("should return empty errors array", () => {
    expect(new JSONAPIError()).toEqual({
      errors: []
    });
  });

  it("should return jsonapi formatted errors", () => {
    let error = {
      status: "404",
      code: "Page not found",
      title: "Page not found",
      source: {
        pointer: "data/attributes/title"
      }
    };
    expect(new JSONAPIError(error)).toEqual({
      errors: [{ ...error }]
    });
  });
});
