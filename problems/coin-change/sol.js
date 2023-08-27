import { parseFile } from '~/lib';

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const memo = new Map();

  const change = (amount) => {
    if (memo.has(amount)) {
      return memo.get(amount);
    }

    if (amount === 0) {
      return 0;
    }

    let min = Infinity;

    coins.forEach((coin) => {
      if (amount - coin >= 0) {
        min = Math.min(min, change(amount - coin));
      }
    });

    memo.set(amount, min + 1);
    return min + 1;
  };

  const result = change(amount);

  return result === Infinity ? -1 : result;
};

parseFile(coinChange, { params: 2 });
