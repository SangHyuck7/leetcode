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
 * @return {boolean}
 */
//DFS, BFS 모두 사용 가능
//두가지 모두 시간복잡도: O(n) 
//공간 복잡도: DFS O(h), BFS O(w)
//DFS 사용법
const isUnivalTree = function(root) {
  const value = root.val;

  const dfs = (node) => {
    if (!node) return true;

    if (node.val !== value) return false;      
    
    return dfs(node.left) && dfs(node.right);
  }

  return dfs(root);
};

//BFS 사용법
// const isUnivalTree = function(root) {
//   const value = root.val;
//   const queue = [root];
    
//   while (queue.length > 0) {
//     const node = queue.shift();

//     if (node.val !== value) return false;
        
//     if (node.left) queue.push(node.left);
        
//     if (node.right) queue.push(node.right);
//     }
    
//   return true;
// };
