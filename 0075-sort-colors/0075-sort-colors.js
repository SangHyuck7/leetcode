/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
let zerosCount = 0;
let onesCount = 0;
let twosCount = 0;

let i = 0;

while (i < nums.length) {
    
  if (nums[i] === 0){
    zerosCount++;
  } else if(nums[i] === 1) {
    onesCount++; 
  } else if(nums[i] === 2) {
    twosCount++;
  }
  
  i++;
}

nums = nums.fill(0, 0, zerosCount);
nums = nums.fill(1, zerosCount, zerosCount + onesCount);
nums = nums.fill(2, zerosCount+onesCount, nums.length);

return nums;
};