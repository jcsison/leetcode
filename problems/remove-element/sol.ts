import { checkSolution } from '~/lib';

function removeElement(nums: number[], val: number): number {
  let k = 0;

  while (k < nums.length) {
    if (nums[k] !== val) {
      k++;
      continue;
    }

    nums.splice(k, 1);
  }

  return k;
}

checkSolution(removeElement);
