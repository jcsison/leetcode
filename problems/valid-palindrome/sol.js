import { parseFile } from '../../utils/parseFile.js';

/**
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

parseFile(isPalindrome);
