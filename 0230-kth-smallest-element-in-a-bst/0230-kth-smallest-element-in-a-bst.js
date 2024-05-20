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
 * @param {number} k
 * @return {number}
 */
//이진 탐색 트리 중위 순회 사용
//시간복잡도: O(n)
const kthSmallest = function(root, k) {
  let count = 0;
  let result = null;
  
  const inorder = function(node) {
    if (!node || result !== null) return;
    
    inorder(node.left);
    
    count++;
    
    if (count === k) {
      result = node.val;
      return;
    }
    
    inorder(node.right);
  }
  
  inorder(root);
  return result;
};