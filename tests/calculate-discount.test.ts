import { describe, it, expect } from "vitest";
import { calculateDiscount } from "../src/utils";

describe("calculateDiscount", () => {
  it("takes 10% off a $100 price, leaving $90", () => {
    expect(calculateDiscount(100, 10)).toBe(90);
  });

  it("takes 25% off a $200 price, leaving $150", () => {
    expect(calculateDiscount(200, 25)).toBe(150);
  });

  it("returns the full price when the discount is 0%", () => {
    expect(calculateDiscount(50, 0)).toBe(50);
  });
});
