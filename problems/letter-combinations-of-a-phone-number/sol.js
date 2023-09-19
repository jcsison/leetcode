import { checkSolution } from '~/lib';

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === '') return [];

  const map = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: []
  };

  const combinations = [];

  const next = (n, str) => {
    if (n === digits.length) {
      combinations.push(str);
    } else {
      map[digits[n]].forEach((letter) => {
        next(n + 1, str + letter);
      });
    }
  };

  next(0, '');

  return combinations;
};

checkSolution(letterCombinations);
