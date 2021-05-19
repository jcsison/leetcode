import { parseFile } from '../../utils/parseFile.js';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const memo = new Map();

  const combination = (target) => {
    if (memo.has(target)) {
      return memo.get(target);
    }

    if (target === 0) {
      return 1;
    }

    let comb = 0;

    nums.forEach((num) => {
      if (target - num >= 0) {
        comb += combination(target - num);
      }
    });

    memo.set(target, comb);
    return comb;
  };

  return combination(target);
};

parseFile(combinationSum4, { params: 2 });
