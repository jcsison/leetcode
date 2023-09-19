import { checkSolution } from '~/lib';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const letters = {};

  for (let i = 0; i < s.length; i++) {
    const letterCount = letters[s[i]];
    letters[s[i]] = letterCount ? letterCount + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    const letterCount = letters[t[i]];

    if (!letterCount || letterCount - 1 < 0) {
      return false;
    } else {
      letters[t[i]] -= 1;
    }
  }

  return true;
};

checkSolution(isAnagram);
