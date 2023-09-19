import { checkSolution } from '~/lib';

/**
 * Valid Palindrome
 *
 * time: O(n)- completion time scales linearly with input string size
 * space: O(n) - one new string is created with the same size as the input
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let x = s.replace(/[\s\W_]/g, '');

  for (let i = 0; i < Math.floor(x.length / 2); i++) {
    if (x[i].toLowerCase() !== x[x.length - i - 1].toLowerCase()) {
      return false;
    }
  }

  return true;
};

checkSolution(isPalindrome);
