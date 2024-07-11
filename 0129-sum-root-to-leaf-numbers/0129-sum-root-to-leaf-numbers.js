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
 //시간복잡도: O(n)
const sumNumbers = function(root) {
  const dfs = function(node, currentNumber) {
    if (!node) return 0;

    currentNumber = currentNumber * 10 + node.val;

    if (!node.left && !node.right) {
      return currentNumber;
    }

    const leftSum = dfs(node.left, currentNumber);
    const rightSum = dfs(node.right, currentNumber);

    return leftSum + rightSum;
  }

  return dfs(root, 0);
};