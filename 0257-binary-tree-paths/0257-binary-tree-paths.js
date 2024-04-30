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
 * @return {string[]}
 */
// dfs 문제
const binaryTreePaths = function(root) {
  const paths = [];
  const arrow = '->'
    
  function dfs (node, path) {
    if (!node) {
      return;
    }
    
    path += node.val.toString();

    if (!node.left && !node.right) {
      paths.push(path);
    } else {
      
      if (node.left) {
       dfs(node.left, path + arrow);
      }
      
      if (node.right) {
        dfs(node.right, path + arrow);
      }
    }
  }
  dfs(root, '');
  
  return paths;
};