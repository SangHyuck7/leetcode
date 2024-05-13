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
 * @return {number[]}
 */
//기본 Binary Tree 유형
//시간복잡도 O(n)
const preorderTraversal = function(root) {
  const result = [];
  
  function traverse(node) {
    if (node) {
      result.push(node.val);  // 현재 노드 방문
      traverse(node.left);    // 왼쪽 하위 트리 순회
      traverse(node.right);   // 오른쪽 하위 트리 순회
    }
  }
  traverse(root);
  
  return result;
};