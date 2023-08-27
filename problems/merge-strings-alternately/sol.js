import { parseFile } from '~/lib';

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let merged = '';

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    merged += word1[i] ?? '';
    merged += word2[i] ?? '';
  }

  return merged;
};

parseFile(mergeAlternately, { params: 2 });
