import { checkSolution } from '~/lib';

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Merge Two Sorted Lists
 *
 * time: O(n)
 * space: O(n)
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const head = new ListNode();
  let l3 = head;

  while (l1?.val || l2?.val || l1?.val === 0 || l2?.val === 0) {
    l3.next = new ListNode();
    l3 = l3.next;

    if ((l1?.val || l1?.val === 0) && (!l2 || l1.val < l2.val)) {
      l3.val = l1.val;
      l1 = l1.next;
    } else {
      l3.val = l2.val;
      l2 = l2.next;
    }
  }

  return head.next;
};

checkSolution(mergeTwoLists, { list: [true, true] });
