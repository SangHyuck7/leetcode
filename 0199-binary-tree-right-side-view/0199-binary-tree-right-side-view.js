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
 //dfs로 접근 실패해서 bfs 풀이 참조
 //시간복잡도: O(n)
const rightSideView = function(root) {
  if (!root) return [];

  const queue = [root];

  const rightView = [];

  //bfs 탐색
  while (queue.length > 0) {
    const levelLength = queue.length;

    //queue에 해당 반복문에 추가된 레벨의 노드 탐색
    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();
    
      // 배열의 마지막 요소 배열에 추가
      if (i === levelLength - 1) {
        rightView.push(node.val);
      }

      //다음레벨의 노드 스택에 추가
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return rightView;
};