/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//시간복잡도 O(n)
const moveZeroes = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if(nums[i] === 0){
      nums.splice(i,1)
      nums.push(0);
    }
  }
};