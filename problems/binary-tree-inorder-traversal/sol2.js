import { checkSolution } from '~/lib';

/**
 * Binary Tree Inorder Traversal
 *
 * time: O(n)
 * space: O(n)
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const nodes = [];
  const stack = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();

    if (node) {
      nodes.push(node.val);
      node = node.right;
    }
  }

  return nodes;
};

checkSolution(inorderTraversal, { tree: true });
