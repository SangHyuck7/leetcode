/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//시간 초과 풀이 방법 참조
//시간복잡도: O(n) 
const maxDepth = function(root) {
  if (root === null) return 0;
  
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  return Math.max(leftDepth, rightDepth) + 1;
}

const deepestLeavesSum = function(root) {
  const maxDepthVal = maxDepth(root);
  let sum = 0;

  function dfs(node, depth) {
    if (node === null) return;
    if (depth === maxDepthVal && node.left === null && node.right === null) {
      sum += node.val;
    }
    
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
    }
  
  dfs(root, 1);
  return sum;
};