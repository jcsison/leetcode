import { parseFile } from '../../utils/parseFile.js';

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const memo = new Map();

  const next = (n, target) => {
    if (memo.has(target)) {
      return memo.get(target);
    }

    const combinations = new Set();

    candidates.forEach((candidate) => {
      if (target - candidate > 0) {
        let nextComb = next(candidate, target - candidate);

        if (nextComb.length > 0) {
          nextComb = nextComb.map((comb) => [candidate, ...comb]);
        }

        nextComb.forEach((comb) => {
          if (comb.reduce((acc, val) => acc + val) === target) {
            combinations.add(JSON.stringify(comb.sort((a, b) => a - b)));
          }
        });
      } else if (target - candidate === 0) {
        combinations.add(JSON.stringify([candidate]));
      }
    });

    const combinationsArray = Array.from(combinations).map((combination) =>
      JSON.parse(combination)
    );

    memo.set(target, combinationsArray);
    return combinationsArray;
  };

  next(-1, target);

  return memo.get(target);
};

parseFile(combinationSum, { params: 2 });
