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

// 이진 탐색 트리 생각하여 풀제 풀기
// 시간복잡도: O(n)

const lowestCommonAncestor = function (root, p, q) {
    if (root.val === q.val || root.val === p.val)
        return root;

    if (root.val < q.val && root.val < p.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    if (root.val > q.val && root.val > p.val) {
        return lowestCommonAncestor(root.left, p, q)
    }

    return root;
};