import { checkSolution } from '~/lib';

/**
 * Fizz Buzz
 *
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  return [...new Array(n)].map((_, i) =>
    ++i % 15 === 0
      ? 'FizzBuzz'
      : i % 3 === 0
      ? 'Fizz'
      : i % 5 === 0
      ? 'Buzz'
      : i.toString()
  );
};

checkSolution(fizzBuzz);
