import { parseFile } from '~/lib';

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

  s.split('').forEach(c => {
    map.set(c, map.get(c) !== undefined ? map.get(c) + 1 : 1);
  });

  t.split('').forEach(c => {
    if (map.get(c) > 0) {
      map.set(c, map.get(c) - 1);
    }
  });

  map.forEach(value => {
    if (value > 0) {
      isAnagram = false;
      return;
    }
  });

  return isAnagram;
};

parseFile(isAnagram, { params: 2 });
