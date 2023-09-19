import { checkSolution } from '~/lib';

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const newIntervals = [];
  let flag = false;
  let i = 0;

  if (intervals.length === 0) {
    return [newInterval];
  }

  for (let interval of intervals) {
    if (newInterval[0] > interval[1]) {
      newIntervals.push(interval);
    } else if (newInterval[1] < interval[0]) {
      newIntervals.push(newInterval);
      flag = true;
      break;
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }

    i++;
  }

  if (!flag) {
    newIntervals.push(newInterval);
    return newIntervals;
  } else {
    return newIntervals.concat(intervals.slice(i));
  }
};

checkSolution(insert);
