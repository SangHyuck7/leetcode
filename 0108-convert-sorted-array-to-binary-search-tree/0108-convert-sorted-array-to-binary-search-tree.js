/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//이진노드 트리
//시긴복잡도 : O(n)
const sortedArrayToBST = function(nums) {
  return helper(nums, 0, nums.length - 1); 
};

function helper(nums, left, right) {
  if (left > right) return null;
    
  const mid = Math.floor((left + right) / 2);
  const root = new TreeNode(nums[mid]);
    
  root.left = helper(nums, left, mid - 1);
  root.right = helper(nums, mid + 1, right);
    
  return root;
}