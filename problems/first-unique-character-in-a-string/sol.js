import { checkSolution } from '~/lib';

/**
 * First Unique Character in a String
 *
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  let firstIndex = -1;

  s.split('').forEach((c, i) => {
    map.set(c, [i, !map.get(c)]);
  });

  map.forEach(value => {
    if (value && value[1] && (value[0] < firstIndex || firstIndex === -1)) {
      firstIndex = value[0];
    }
  });

  return firstIndex;
};

checkSolution(firstUniqChar);
