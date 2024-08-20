export const DEFAULT_CONFIG = {
  radius: 20,
  nodeWidthSpacing: 25,
  nodeHeightSpacing: 100,
  fontSize: 10,
};

export function getRequiredHeightAndWidth(root) {
  const heightofTree = root.getHeight();
  const maxLeafNodes = Math.pow(2, heightofTree);

  const requiredCanvasHeight = heightofTree * DEFAULT_CONFIG.nodeHeightSpacing;
  const requiredCanvasWidth = maxLeafNodes * DEFAULT_CONFIG.nodeWidthSpacing;
  

  return {
    requiredCanvasHeight,
    requiredCanvasWidth
  }


}
