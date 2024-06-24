/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
// 자료구조: DFS
// 시간복잡도: O(n)
const getTargetCopy = function(original, cloned, target) {
  function dfs(originalNode, clonedNode) {
    if (originalNode === null) {
      return null;
    }

    if (originalNode === target) {
      return clonedNode;
    }

    const leftResult = dfs(originalNode.left, clonedNode.left);
    
    if (leftResult !== null) {
      return leftResult;
    }

    return dfs(originalNode.right, clonedNode.right);
  }

  return dfs(original, cloned);
};