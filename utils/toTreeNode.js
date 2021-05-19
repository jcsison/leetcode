export const toTreeNode = (head) => {
  class TreeNode {
    constructor(val, left, right) {
      this.val = val;
      this.left = left ?? null;
      this.right = right ?? null;
    }
  }

  const build = () => {
    if (head.length === 0) {
      return null;
    }

    const root = new TreeNode(head.shift());
    const queue = [root];

    while (queue.length) {
      const node = queue.shift();
      const nl = head.shift();
      node.left = nl || nl === 0 ? new TreeNode(nl) : null;
      const nr = head.shift();
      node.right = nr || nr === 0 ? new TreeNode(nr) : null;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return root;
  };

  if (head && Array.isArray(head)) {
    return build();
  }
};
