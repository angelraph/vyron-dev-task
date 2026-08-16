import { describe, it, expect } from "vitest";
import { calculateDiscount, isPalindrome, sumEvenNumbers } from "../src/utils";

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

describe("isPalindrome", () => {
  it("recognizes a simple lowercase palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("recognizes a palindrome phrase with spaces and mixed case", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  it("recognizes a palindrome phrase with punctuation", () => {
    expect(isPalindrome("No lemon, no melon!")).toBe(true);
  });

  it("rejects a non-palindrome", () => {
    expect(isPalindrome("hello world")).toBe(false);
  });
});

describe("sumEvenNumbers", () => {
  it("sums only the even numbers in the array", () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
  });

  it("returns 0 for an array with no even numbers", () => {
    expect(sumEvenNumbers([1, 3, 5])).toBe(0);
  });
});
