export class BinaryTreeNode {
  value = null;
  left = null;
  right = null;

  constructor(value) {
    this.value = value;
    left = null;
    right = null;
  }

  setLeft(node) {
    this.left = left;
  }

  setRight(node) {
    this.right = left;
  }

  getHeight() {
    const leftHeight = this.left?.getHeight() || 0;
    const rightHeight = this.right?.getHeight() || 0;

    return Math.max(leftHeight, rightHeight) + 1;
  }
}
