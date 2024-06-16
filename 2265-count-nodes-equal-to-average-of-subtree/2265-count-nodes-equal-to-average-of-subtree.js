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
//시간초과로 인한 해설 참고
/*
  배열의 각 요소 역할
	1.	첫 번째 요소: 서브트리의 모든 노드 값의 합 (sum)
	2.	두 번째 요소: 서브트리의 모든 노드의 개수 (count)
*/
//시간복잡도: O(n)
const averageOfSubtree = function(root) {
  let count = 0;
  
  function dfs(node) {
    if (node === null) {
      return [0, 0];
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    let currentSum = node.val + left[0] + right[0];
    let currentCount = 1 + left[1] + right[1];

    if (Math.floor(currentSum / currentCount) === node.val) {
      count++;
    }

    return [currentSum, currentCount];
  }
  
  dfs(root);

  return count;
};