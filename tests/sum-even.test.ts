import { describe, it, expect } from "vitest";
import { sumEvenNumbers } from "../src/utils";

describe("sumEvenNumbers", () => {
  it("sums only the even numbers in the array", () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
  });

  it("returns 0 for an array with no even numbers", () => {
    expect(sumEvenNumbers([1, 3, 5])).toBe(0);
  });
});
