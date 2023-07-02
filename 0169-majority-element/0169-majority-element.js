/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const n = nums.length;
  const map = new Map();
  
  for (let i = 0; i < n; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    
    if (map.get(nums[i]) > (n / 2)) return nums[i] // 과반수가 넘을시 반복문 종료
  }
  
  return -1
};