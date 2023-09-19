import { ListNode, checkSolution } from '~/lib';

function reverseList(head: ListNode | null): ListNode | null {
  if (!head?.next) {
    return head;
  }

  let currNode: ListNode | null = head;
  let nextNode: ListNode | null = head.next;

  head.next = null;

  while (nextNode) {
    const tempNode: ListNode | null = nextNode.next;

    nextNode.next = currNode;

    currNode = nextNode;
    nextNode = tempNode;
  }

  return currNode;
}

checkSolution(reverseList, { list: true });
