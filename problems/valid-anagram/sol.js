import { parseFile } from '../../utils/parseFile.js';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();
  let isAnagram = true;

  if (s.length !== t.length) {
    return false;
  }

  s.split('').forEach((c, i) => {
    map.set(c, map.get(c) !== undefined ? map.get(c) + 1 : 1);
  });

  t.split('').forEach((c, i) => {
    if (map.get(c) > 0) {
      map.set(c, map.get(c) - 1);
    }
  });

  map.forEach((value, key) => {
    if (value > 0) {
      isAnagram = false;
      return;
    }
  });

  return isAnagram;
};

parseFile(isAnagram, { params: 2 });
