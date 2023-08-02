/**
 * @param {number[]} nums
 * @return {number}
 */

//시간복잡도 O(n)
const majorityElement = function(nums) {
  const map = new Map();
    
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    
    if (map.get(nums[i]) > (nums.length / 2)) return nums[i]
  }
};