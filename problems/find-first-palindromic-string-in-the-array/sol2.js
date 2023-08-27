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
  return (
    words.find(word => {
      const leftHalf = word.substring(0, Math.ceil((word.length - 1) / 2));
      const rightHalf = word.substring(
        Math.floor((word.length - 1) / 2) + 1,
        word.length
      );
      return leftHalf === rightHalf.split('').reverse().join('');
    }) ?? ''
  );
};

parseFile(firstPalindrome);
