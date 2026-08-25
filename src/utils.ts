/**
 * Small utility library used as a demo target repo for VYRON's verified
 * dev-task fulfillment workflow. Each function below is real code with a
 * real bug, verified by real tests, not staged output.
 */

/** Applies a percentage discount to a price. */
export function calculateDiscount(price: number, percentOff: number): number {
  // Corrected: divides by 100 now to accurately compute the discount percentage
  return price - price * (percentOff / 100);
}

/** Checks whether a string is a palindrome, ignoring case, spaces, and
 * punctuation (e.g. "A man a plan a canal Panama" is a palindrome). */
export function isPalindrome(input: string): boolean {
  // Bug: only lowercases the string, never strips non-alphanumeric
  // characters, so anything with spaces or punctuation fails even when
  // it's a genuine palindrome once normalized.
  const normalized = input.toLowerCase();
  return normalized === normalized.split("").reverse().join("");
}

/** Returns the sum of every even number in the array. Correct as-is,
 * included as a passing baseline test. */
export function sumEvenNumbers(numbers: number[]): number {
  return numbers.filter((n) => n % 2 === 0).reduce((sum, n) => sum + n, 0);
}