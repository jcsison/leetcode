import { parseFile } from '../../utils/parseFile.js';

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
  // for (const word of words) {
  //   const wordArr = word.split('');

  //   while (wordArr.length > 1) {
  //     if (wordArr[0] !== wordArr[wordArr.length - 1]) {
  //       break;
  //     }

  //     wordArr.pop();
  //     wordArr.shift();
  //   }

  //   if (wordArr.length <= 1) {
  //     return word;
  //   }
  // }

  // return '';

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
