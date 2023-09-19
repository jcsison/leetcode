import { checkSolution } from '~/lib';

/**
 * Binary Search
 *
 * time: O(log(n)) - searchable boundary decreases with each iteration
 * space: O(1) - array size remains constant (2 elements)
 */
function search(nums: number[], target: number): number {
  const arr = [0, nums.length - 1];

  while (arr.length) {
    const left = arr[0] ?? NaN;
    const right = arr[1] ?? NaN;

    if (left > right) {
      return -1;
    }

    const mid = Math.trunc((left + right) / 2);
    const midValue = nums[mid] ?? NaN;

    if (midValue === target) {
      return mid;
    } else if (target > midValue) {
      arr.push(mid + 1);
      arr.push(right);
    } else {
      arr.push(left);
      arr.push(mid - 1);
    }

    arr.shift();
    arr.shift();
  }

  return -1;
}

checkSolution(search);
