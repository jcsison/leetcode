import type { Maybe } from '..';

export class TreeNode<T = unknown> extends Array {
  val: T | null;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(
    val?: Maybe<T>,
    left?: Maybe<TreeNode<T>>,
    right?: Maybe<TreeNode<T>>,
  ) {
    super();
    this.val = val ?? null;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}
