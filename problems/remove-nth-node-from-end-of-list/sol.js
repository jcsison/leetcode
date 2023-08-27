import { parseFile } from '~/lib';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let a = head;
  let b = head;

  for (let i = 0; i < n; i++) {
    a = a.next;
    if (!a) {
      break;
    }
  }

  while (a && a.next) {
    a = a.next;
    b = b.next;
  }

  if (!a) {
    head = head.next;
  } else if (b.next) {
    b.next = b.next.next;
  } else {
    b.next = null;
  }

  return head;
};

parseFile(removeNthFromEnd, { list: true, params: 2 });
