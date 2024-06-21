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
//조부모 노드 기억한후 누산
//시간복잡도: O:(n)
const sumEvenGrandparent = function(root) {
  let sum = 0;
  
  const dfs = function(node, parent, grandparent) {
    if (node === null) {
      return;
    }
    
    if (grandparent !== null && grandparent.val % 2 === 0) {
      sum += node.val;
    }
    
    dfs(node.left, node, parent);
    dfs(node.right, node, parent);
  }
  
  dfs(root, null, null);
  
  return sum;
};