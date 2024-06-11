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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
//시간복잡도: O(n)
const rangeSumBST = function(root, low, high) {
  function dfs(node) {
    if (node === null) return 0;

    if (node.val < low) {
      return dfs(node.right);
    }

    if (node.val > high) {
      return dfs(node.left);
    }

    return node.val + dfs(node.left) + dfs(node.right);
  }
  
  return dfs(root);
};