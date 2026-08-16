import { describe, it, expect } from "vitest";
import { isPalindrome } from "../src/utils";

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
