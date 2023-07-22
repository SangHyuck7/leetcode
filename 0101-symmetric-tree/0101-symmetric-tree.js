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
const isSymmetric = function(root) {
    return isMirror(root, root);
};

function isMirror(node1, node2) {
  if (node1 == null && node2 == null) {
    return true;
  }
  
  if (node1 == null || node2 == null) {
    return false;
  }

  if (node1.val == node2.val) {
    return isMirror(node1.right, node2.left) && isMirror(node1.left, node2.right);
  } else {
    return false;
  }
}