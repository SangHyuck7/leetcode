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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 //시간복잡도: O(n)
const flatten = function(root) {
  const flattenTree = (node) => {
    if (!node) return null;
    
    const leftTail = flattenTree(node.left);
    const rightTail = flattenTree(node.right);

    if (leftTail) {
      leftTail.right = node.right;
      node.right = node.left;
    }
    // 왼쪽 노드는 항상 null
    node.left = null;

    return rightTail || leftTail || node;
  }

  flattenTree(root);
};