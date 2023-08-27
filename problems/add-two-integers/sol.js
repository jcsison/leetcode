import { parseFile } from '~/lib';

/**
 * Add Two Integers
 *
 * time: O(1) - function reaches completion in one iteration
 * space: O(1) - memory size is constant
 *
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function (num1, num2) {
  return num1 + num2;
};

parseFile(sum, { params: 2 });
