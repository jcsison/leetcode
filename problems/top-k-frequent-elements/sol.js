import { checkSolution } from '~/lib';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequency = new Map();

  nums.forEach((num) => {
    frequency.set(num, (frequency.get(num) ?? 0) + 1);
  });

  const frequencyArray = Array.from(frequency);
  frequencyArray.sort((a, b) => b[1] - a[1]);

  return frequencyArray.map((arr) => arr[0]).splice(0, k);
};

checkSolution(topKFrequent);
