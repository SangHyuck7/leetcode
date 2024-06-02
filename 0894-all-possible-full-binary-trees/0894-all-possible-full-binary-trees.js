/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
//시간 초과로 인한 풀이 참고
//시간 복잡도: O(n^3)
const allPossibleFBT = function(n) {
  if (n % 2 === 0) return [];
  if (n === 1) return [new TreeNode(0)];
  
  const result = [];
  
  for (let leftNodes = 1; leftNodes < n; leftNodes += 2) {
    const rightNodes = n - 1 - leftNodes;
    const leftTrees = allPossibleFBT(leftNodes);
    const rightTrees = allPossibleFBT(rightNodes);
    
    for (let left of leftTrees) {
      for (let right of rightTrees) {
        const root = new TreeNode(0);
        root.left = left;
        root.right = right;
        result.push(root);
      }
    }
  }
    return result;
};