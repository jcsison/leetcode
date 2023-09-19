import { checkSolution } from '~/lib';

/**
 * Two Sum
 *
 * time: O(n) - completion time scales linearly with input size
 * space: O(n) - map size is proportional to input size
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return [map[nums[i]], i];
    }

    map[target - nums[i]] = i;
  }

  return [];
};

checkSolution(twoSum);
