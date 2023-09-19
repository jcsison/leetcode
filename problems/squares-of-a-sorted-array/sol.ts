import { checkSolution } from '~/lib';

/**
 * Sorted Squares
 *
 * time: O(n) - loop iterations scale linearly with input size
 * space: O(n) - squares array size is equal to input size
 */
function sortedSquares(nums: number[]): number[] {
  const squares: number[] = new Array(nums.length);

  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    const leftSquare = (nums[i] ?? NaN) ** 2;
    const rightSquare = (nums[j] ?? NaN) ** 2;

    if (leftSquare >= rightSquare) {
      squares[j - i] = leftSquare;
      i++;
    } else {
      squares[j - i] = rightSquare;
      j--;
    }
  }

  return squares;
}

checkSolution(sortedSquares);
