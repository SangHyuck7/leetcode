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
//목표 시간복잡도: O(log n)
const countNodes = function(root) {
  if (!root) return 0;
  
  let leftHeight = 0;
  let rightHeight = 0;
  let node = root;
  
  while (node) {
    leftHeight++;
    node = node.left;
  }
  
  node = root;
  
  while (node) {
    rightHeight++;
    node = node.right;
  }
  
  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) - 1;
  }
  
  return 1 + countNodes(root.left) + countNodes(root.right);
};