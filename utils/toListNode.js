import { ListNode } from './ListNode.js'

export const toListNode = (head) => {
  if (head) {
    if (head.length === 0) {
      return new ListNode();
    }

    const nodes = head.map((v) => new ListNode(v));
    nodes.forEach((node, i) => (node.next = nodes[i + 1] ?? null));
    return nodes[0];
  }
};
