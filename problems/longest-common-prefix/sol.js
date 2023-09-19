import { checkSolution } from '~/lib';

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0] ?? '';

  for (let i = 1; i < strs.length; i++) {
    if (prefix.length > strs[i].length) {
      prefix = prefix.substring(0, strs[i].length);
    }

    for (let j = 0; j < Math.min(prefix.length, strs[i].length); j++) {
      if (strs[i][j] !== prefix[j]) {
        prefix = prefix.substring(0, j);
        break;
      }
    }
  }

  return prefix;
};

checkSolution(longestCommonPrefix);
