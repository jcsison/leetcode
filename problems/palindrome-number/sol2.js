import { checkSolution } from '~/lib';

/**
 * Palindrome Number
 *
 * time: O(n)
 * space: O(1)
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  for (let i = x, j = 0; i >= 10; i = Math.trunc(i / 10), j++) {
    if (i < 10) {
      return true;
    }

    const a = Math.trunc(
      (x / Math.pow(10, Math.trunc(Math.log10(x)) - j)) % 10
    );
    const b = Math.trunc(i % 10);

    if (a === undefined) {
      return true;
    }

    if (a !== b) {
      return false;
    }
  }

  return true;
};

checkSolution(isPalindrome);
