import { checkSolution } from '~/lib';

function removeDuplicates(nums: number[]): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[k]) {
      nums[++k] = nums[i];
    } else if (nums[i] < nums[k]) {
      return k + 1;
    }
  }

  return k + 1;
}

checkSolution(removeDuplicates);
