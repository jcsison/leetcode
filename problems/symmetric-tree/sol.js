import { parseFile } from '../../utils/parseFile.js';

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
var isSymmetric = function (root) {
  const f = (node1, node2) => {
    if (!node1 && !node2) {
      return true;
    } else if (!node1 || !node2) {
      return false;
    } else if (node1.val !== node2.val) {
      return false;
    } else if (!f(node1.right, node2.left)) {
      return false;
    } else if (!f(node1.left, node2.right)) {
      return false;
    } else {
      return true;
    }
  };

  return f(root.left, root.right);
};

parseFile(isSymmetric, { tree: true });
