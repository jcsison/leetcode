import { parseFile } from '~/lib';

/**
 * Fibonacci Number
 *
 * @description Fibonacci number implementation using a for loop.
 * 
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let a = 0;
  let b = 1;
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
};

parseFile(fib);
