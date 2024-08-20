import { BinaryTreeNode, getRequiredHeightAndWidth } from "./BinaryTreeNode.js";

const canvas = document.querySelector("canvas");

function drawBinaryTree(root, canvasElement) {
  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;

  // Intialize the canvas dimensions
  canvasElement.width = maxWidth;
  canvasElement.height = maxHeight;

// Calculate required width & height to draw the tree structure
  const { requiredCanvasWidth, requiredCanvasHeight } =
    getRequiredHeightAndWidth(root);
}

const root = new BinaryTreeNode(1);

const root2 = new BinaryTreeNode(2);
root.setLeft(root2);

const root3 = new BinaryTreeNode(3);
root.setRight(root3);

drawBinaryTree(root, canvas);
