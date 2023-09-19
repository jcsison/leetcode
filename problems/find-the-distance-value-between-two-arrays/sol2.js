import { checkSolution } from '~/lib';

/**
 * Find the Distance Value Between Two Arrays
 *
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  // WIP
  let count = arr1.length;
  const arr2s = arr2.sort();
  console.log({ arr1, arr2s });

  for (const num1 of arr1) {
    let low = 0;
    let high = arr2.length - 1;
    let mid2 = low;
    while (low < high) {
      const mid = Math.trunc((low + high) / 2);
      if (Math.abs(num1 - arr2s[mid]) <= d) {
        count--;
        mid2 = mid;
        break;
      } else if (num1 < arr2s[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    console.log({ d, num1, a: arr2s[low], b: arr2s[high], low, high, mid2 });
  }

  return count;
};

checkSolution(findTheDistanceValue);
