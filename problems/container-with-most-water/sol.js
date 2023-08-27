import { parseFile } from '~/lib';

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let lo = 0;
  let hi = height.length - 1;

  while (lo < hi) {
    const currentArea = Math.min(height[lo], height[hi]) * (hi - lo);

    if (currentArea > area) {
      area = currentArea;
    }

    if (height[lo] > height[hi]) {
      hi--;
    } else {
      lo++;
    }
  }

  return area;
};

parseFile(maxArea);
