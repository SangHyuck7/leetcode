/**
 * @param {number[]} nums
 * @return {number}
 */
//해쉬맵 사용
const numIdenticalPairs = function(nums) {
  const countMap = new Map();
  let goodPairs = 0;

  for (let i = 0; i < nums.length; i++) {
    if (countMap.has(nums[i])) {
      goodPairs += countMap.get(nums[i]);
      countMap.set(nums[i], countMap.get(nums[i]) + 1);
    } else {
      countMap.set(nums[i], 1);
    }
  }

  return goodPairs;
};