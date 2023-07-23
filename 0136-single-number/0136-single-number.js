/**
 * @param {number[]} nums
 * @return {number}
 */
//시간복잡도 O(n)
const singleNumber = function(nums) {
  const numSet = new Set();
  
  for (let num of nums) {
    if (numSet.has(num)) {
      numSet.delete(num);
    } else {
      numSet.add(num);
    } 
  }
  return [...numSet][0];
};