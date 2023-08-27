import { parseFile } from '~/lib';

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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const next = (node, low, high) => {
    if (!node) {
      return true;
    } else if (low >= node.val || high <= node.val) {
      return false;
    } else {
      return next(node.left, low, node.val) && next(node.right, node.val, high);
    }
  };

  return next(root, -Infinity, Infinity);
};

parseFile(isValidBST, { tree: true });
