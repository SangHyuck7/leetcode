/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
//조건: nums1[i] % (nums2[j] * k) === 0
//시간복잡도: O(n^2)
const numberOfPairs = function(nums1, nums2, k) {
  let count = 0;
    
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) {
        count++;
      }
    }
  }
    
  return count;
};