import { checkSolution } from '~/lib';

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const triplets = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return Array.from(triplets)
        .sort()
        .map((triplet) => JSON.parse(triplet));
    }

    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j] + nums[k] > -nums[i]) {
          break;
        }

        if (nums[i] + nums[j] + nums[k] === 0) {
          triplets.add(JSON.stringify([nums[i], nums[j], nums[k]].sort()));
        }

        if (nums[j] === nums[k]) {
          break;
        }
      }

      if (nums[i] === nums[j]) {
        break;
      }
    }
  }

  return Array.from(triplets)
    .sort()
    .map((triplet) => JSON.parse(triplet));
};

checkSolution(threeSum);
