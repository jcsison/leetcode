import type { Maybe } from '..';

export class ListNode<T> extends Array {
  val: T | null;
  next: ListNode<T> | null;

  constructor(val?: Maybe<T>, next?: Maybe<ListNode<T>>) {
    super();
    this.val = val ?? null;
    this.next = next ?? null;
  }
}
