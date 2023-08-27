import { parseFile } from '~/lib';

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

    const s = i.toString();
    const a = s[j];
    const b = s[s.length - 1];

    if (a === undefined) {
      return true;
    }

    if (a !== b) {
      return false;
    }
  }

  return true;
};

parseFile(isPalindrome);
