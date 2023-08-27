import { parseFile } from '~/lib';

/**
 * Find First Palindromic String in the Array
 *
 * time: O(kn)
 * space: O(k)
 *
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    const wordArr = word.split('');

    while (wordArr.length > 1) {
      if (wordArr[0] !== wordArr[wordArr.length - 1]) {
        break;
      }

      wordArr.pop();
      wordArr.shift();
    }

    if (wordArr.length <= 1) {
      return word;
    }
  }

  return '';
};

parseFile(firstPalindrome);
