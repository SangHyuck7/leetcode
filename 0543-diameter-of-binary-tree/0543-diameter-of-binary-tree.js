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
// dfs 알고리즘 사용 
// 시간 복잡도: O(n) 모드 노드 재귀로 방문
const diameterOfBinaryTree = function(root) {
  let diameter = 0;

  const treeDfs = (node) => {
    if (!node) {
      return 0;
    }

    const leftDepth = treeDfs(node.left);
    const rightDepth = treeDfs(node.right);

    diameter = Math.max(diameter, leftDepth + rightDepth);

    return Math.max(leftDepth, rightDepth) + 1; // 마지막 재귀 Math.max(null, null) + 1 은 1반환
  }
  
  treeDfs(root);
  
  return diameter;
};
