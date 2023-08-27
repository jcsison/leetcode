import { parseFile } from '~/lib';

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const memo = new Map();
  let maxLength = -1;

  const next = (nums) => {
    if (memo.has(nums[0])) {
      return memo.get(nums[0]);
    }

    let length = -1;

    nums.forEach((num, i) => {
      if (num > nums[0]) {
        let nextLength = 0;

        if (memo.has(num)) {
          nextLength = memo.get(num) + 1;
        } else {
          nextLength = next(nums.slice(i)) + 1;
        }

        if (nextLength > length) {
          length = nextLength;
        }
      } else if (num < nums[0]) {
        if (!memo.has(num)) {
          next(nums.slice(i));
        }
      }
    });

    if (length > maxLength) {
      maxLength = length;
    }

    memo.set(nums[0], length === -1 ? 1 : length);

    return length === -1 ? 1 : length;
  };

  next(nums);

  return maxLength === -1 ? 1 : maxLength;
};

parseFile(lengthOfLIS);
