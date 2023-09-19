import { checkSolution } from '~/lib';

/**
 * Root Equals Sum of Children
 *
 * time: O(1) - function reaches completion in one iteration
 * space: O(1) - memory size is constant
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
  return root.val === root.left.val + root.right.val;
};

checkSolution(checkTree, { tree: true });
