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
 * @return {TreeNode}
 */
// 너비우선 탐색 BFS사용
// 시간복잡도: O(n)
// Commentary notes 작성
const  reverseOddLevels = function(root) {
  if (!root) return null;

  let level = 0;
  let queue = [root]; //시작 노드의 값만 있음
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelNodes = [];

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      
      if (level % 2 === 1) {
        levelNodes.push(node);
      }
      
      if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

      if (level % 2 === 1) {
        const values = levelNodes.map(node => node.val).reverse();
            
        for (let i = 0; i < levelNodes.length; i++) {
          levelNodes[i].val = values[i];
        }
      }

      level++;
  }

  return root;
};