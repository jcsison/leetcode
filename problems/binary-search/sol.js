import { parseFile } from '../../utils/parseFile.js';

/**
 * Binary Search
 *
 * time: O(log(n)) - searchable boundary decreases with each iteration
 * space: O(1) - array size remains constant
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let arr = [0, nums.length - 1];

  while (arr.length) {
    if (arr[0] > arr[1]) {
      return -1;
    }

    const mid = parseInt((arr[0] + arr[1]) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      arr.push(mid + 1);
      arr.push(arr[1]);
    } else {
      arr.push(arr[0]);
      arr.push(mid - 1);
    }

    arr.shift();
    arr.shift();
  }

  return -1;
};

parseFile(search, { params: 2 });
