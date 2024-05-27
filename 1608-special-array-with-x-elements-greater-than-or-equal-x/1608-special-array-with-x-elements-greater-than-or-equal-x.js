/**
 * @param {number[]} nums
 * @return {number}
 */
//시간복잡도: O(n)
const specialArray = function(nums) {
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i <= nums.length; i++) {
    const remaining = nums.length - i;
    
    if (i === nums.length || nums[i] >= remaining) {
      if (i === 0 || nums[i - 1] < remaining) {
        return remaining;
      }
    }
  }
  
  return -1;
};