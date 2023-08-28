/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
let far = 0;
let jump = 0;
let current = 0;

for (let i = 0; i < nums.length - 1; i++) {
  far = Math.max(far, nums[i] + i);

  if (i === current) {
    current = far;
    jump++;
  }
}
    
  return jump;
};