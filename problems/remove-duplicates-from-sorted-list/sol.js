import { ListNode } from '../../utils/ListNode.js'
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let curr = new ListNode(null, head);

    while (curr) {
        if (curr.val === curr.next?.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next
        }
    }

    return head;
};

parseFile(deleteDuplicates, { list: true });
