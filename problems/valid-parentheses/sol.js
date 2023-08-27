import { parseFile } from '~/lib';

/**
 * Valid Parentheses
 *
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  return !s.split('').reduce((stack, c) => {
    if (stack.length && pairs[c] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(c);
    }

    return stack;
  }, []).length;
};

parseFile(isValid);
