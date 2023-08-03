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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// 이해부족 다시 풀어볼 예정
// 공간복작도 O(N*M)
const isSubtree = function(root, subRoot) {
  if (root === null) {
    return false;
  }
  
  if (isSameTree(root, subRoot)) {
    return true;
  }
  
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = (root, subRoot) => {
    if (root === null || subRoot === null) {
        return root === subRoot;
    }
    if (root.val !== subRoot.val) {
        return false;
    }
  
    return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
}
