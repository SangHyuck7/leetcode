/**
 * @param {number[]} nums
 * @return {number}
 */

// 시간복잡도: O(n)
const maxSubArray = function(nums) {
  let maxEnding = nums[0]
  let maxSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    maxEnding = Math.max(maxEnding + nums[i], nums[i]);
    maxSum = Math.max(maxSum, maxEnding);
  }

  return maxSum;
}