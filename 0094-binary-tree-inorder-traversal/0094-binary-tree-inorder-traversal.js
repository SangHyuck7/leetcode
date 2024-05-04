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
// DFS 자료구조 사용 왼쪽 노드부터 탐색
// 시간복잡도: O(n)
const inorderTraversal = function(root) {
  const result = [];
  
  const dfs = (node) => {
    if (node !== null) {
      dfs(node.left);
      result.push(node.val);
      dfs(node.right);
    }  
  }
  
  dfs(root);
  
  return result;
}; 