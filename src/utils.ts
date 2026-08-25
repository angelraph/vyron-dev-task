/*******************************************************************************
 * Small utility library used as a demo target repo for VYRON's verified
 * dev-task fulfillment workflow. Each function below is real code with a
 * real bug, verified by real tests, not staged output.
 ******************************************************************************/

/** Applies a percentage discount to a price. */
export function calculateDiscount(price: number, percentOff: number): number {
  // Bug: divides by 10 instead of 100, so a 10% discount takes off 100%
  // of the price instead of 10%.
  return price - price * (percentOff / 10);
}

/** Checks whether a string is a palindrome, ignoring case, spaces, and
 * punctuation (e.g. "A man a plan a canal Panama" is a palindrome). */
export function isPalindrome(input: string): boolean {
  // Normalize input: convert to lowercase and remove non-alphanumeric characters
  const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Check if the normalized string is equal to its reverse
  return normalized === normalized.split('').reverse().join('');
}

/** Returns the sum of every even number in the array. Correct as-is,
 * included as a passing baseline test. */
export function sumEvenNumbers(numbers: number[]): number {
  return numbers.filter((n) => n % 2 === 0).reduce((sum, n) => sum + n, 0);
}