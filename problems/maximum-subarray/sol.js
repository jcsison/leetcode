import { checkSolution } from '~/lib';

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) {
    return 0;
  }

  let leftSum = [...nums];
  let rightSum = [...nums];

  for (let i = 1; i < nums.length; i++) {
    leftSum[i] += leftSum[i - 1] > 0 ? leftSum[i - 1] : 0;
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightSum[i] += rightSum[i + 1] > 0 ? rightSum[i + 1] : 0;
  }

  const traverse = (arr, left, right) => {
    if (left === right) {
      return arr[left];
    }

    const mid = parseInt((left + right) / 2);

    return Math.max(
      traverse(arr, left, mid),
      traverse(arr, mid + 1, right),
      leftSum[mid] + rightSum[mid + 1]
    );
  };

  return traverse(nums, 0, nums.length - 1);
};

checkSolution(maxSubArray);
