import { checkSolution } from '~/lib';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (node) {
  if (!node) return 0;
  return Math.max(maxDepth(node.left) + 1, maxDepth(node.right) + 1);
};

checkSolution(maxDepth, { tree: true });
