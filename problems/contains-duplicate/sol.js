import { checkSolution } from '~/lib';

/**
 * Contains Duplicate
 *
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.size === set.add(num).size) {
      return true;
    }
  }

  return false;
};

checkSolution(containsDuplicate);
