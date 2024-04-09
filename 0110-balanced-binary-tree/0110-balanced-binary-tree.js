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
 
 // 마지막 노드 찾은후 0 부터 + 1 DFS 사용
 // 시간복잡도 : O(n) 

const isBalanced = function(root) {
    let balanced = true; 

    const dfs = function(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (Math.abs(left - right) > 1) {
            balanced = false;
        }

        return 1 + Math.max(left, right); 
    }
    
    dfs(root);

    return balanced;
    
};