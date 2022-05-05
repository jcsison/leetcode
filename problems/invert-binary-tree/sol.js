import { parseFile } from '../../utils/parseFile.js';

/**
 * Invert Binary Tree
 * 
 * time: O(n)
 * space: O(1)
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const traverse = (node) => {
    if (!node) {
      return null;
    }

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    traverse(node.left)
    traverse(node.right)
  }

  traverse(root);

  return root;
};

parseFile(invertTree, { tree: true });
