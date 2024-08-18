/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //시간복잡도: O(n)
const sortArrayByParityII = function(nums) {
  let evenIndex = 0;
  let oddIndex = 1;
  const n = nums.length;

  while (evenIndex < n && oddIndex < n) {
    if (nums[evenIndex] % 2 !== 0) {
      if (nums[oddIndex] % 2 === 0) {
        [nums[evenIndex], nums[oddIndex]] = [nums[oddIndex], nums[evenIndex]];
      } else {
        oddIndex += 2;
      }
    } else {
      evenIndex += 2;
    }
  }

  return nums;
};