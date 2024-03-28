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

// DFS 기본 유형
// 시간복잡도O(n)

const maxDepth = function(root){

  if(!root){
      return 0;
  }
    
  const leftNode = maxDepth(root.left);
  const rightNode = maxDepth(root.right);
    
  return 1 + Math.max(leftNode,rightNode);
}