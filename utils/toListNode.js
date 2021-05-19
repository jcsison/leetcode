export const toListNode = (head) => {
  class ListNode {
    constructor(val, next) {
      this.val = val === undefined ? null : val;
      this.next = next === undefined ? null : next;
    }
  }

  if (head) {
    if (head.length === 0) {
      return new ListNode();
    }

    const nodes = head.map((v) => new ListNode(v));
    nodes.forEach((node, i) => (node.next = nodes[i + 1] ?? null));
    return nodes[0];
  }
};
