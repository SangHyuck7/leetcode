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
//시간복잡도: O(n)

// 중위 순회 함수 노드값 배열에 저장
const inorderTraversal = function(root, nodes) {
  if (root === null) return;
  
  inorderTraversal(root.left, nodes);
  nodes.push(root.val);
  inorderTraversal(root.right, nodes);
}

// 정렬된 배열을 기반으로 균형 잡힌 BST를 생성하는 함수 (풀이 참조)
const sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
    
  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);
    
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
    
  return root;
}

const balanceBST = function(root) {
  const nodes = [];
  inorderTraversal(root, nodes);
  return sortedArrayToBST(nodes);
};