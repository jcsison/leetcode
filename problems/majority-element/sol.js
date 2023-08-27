import { parseFile } from '~/lib';

/**
 * Majority Element
 *
 * time - O(n)
 * space - O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  return nums.reduce((max, num) => {
    if (count === 0) max = num;
    count += max === num ? 1 : -1;
    return max;
  }, 0);
};

parseFile(majorityElement);
