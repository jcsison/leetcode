import { parseFile } from '../../utils/parseFile.js';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  if (nums[0] === target) {
    return 0;
  }

  while (lo <= hi) {
    if (target > nums[lo] && nums[lo + 1] > nums[lo]) {
      lo++;
    } else if (target < nums[hi] && nums[hi - 1] < nums[hi]) {
      hi--;
    } else if (target === nums[lo]) {
      return lo;
    } else if (target === nums[hi]) {
      return hi;
    } else {
      break;
    }
  }

  return -1;
};

parseFile(search, { params: 2 });
