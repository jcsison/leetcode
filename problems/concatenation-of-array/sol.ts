import { checkSolution } from '~/lib';

function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums];
}

checkSolution(getConcatenation);
