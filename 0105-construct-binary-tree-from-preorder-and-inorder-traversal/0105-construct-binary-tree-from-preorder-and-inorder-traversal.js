/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 /*
 * 전위 순회(preorder traversal): 노드 방문 → 왼쪽 자식 방문 → 오른쪽 자식 방문 순서로 노드를 방문
 * 중위 순회(inorder traversal): 왼쪽 자식 방문 → 노드 방문 → 오른쪽 자식 방문 순서로 노드를 방문
 */
 //트레일링 null 제거
 //시간복잡도: O(n)
const buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  const rootIndex = inorder.indexOf(rootVal);

  root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
  root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));

  return root;
};