/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//이진탐색
//시간복잡도 최악의 경우 O(N), 평균적으로는 O(log N)

const lowestCommonAncestor = function(root, p, q) {
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    }
    else if (root.val > p.val && root.val > q.val) {
    root = root.left;
    } else {
      return root;
    }
  }
};