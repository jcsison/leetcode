import { checkSolution } from '~/lib';

/**
 * Best Time to Buy and Sell Stock
 *
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Infinity;
  let profit = 0;

  for (const price of prices) {
    profit = Math.max(profit, price - min);
    min = Math.min(min, price);
  }

  return profit;
};

checkSolution(maxProfit);
