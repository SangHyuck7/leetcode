/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 //시간복잡도: O(n)
const twoOutOfThree = function(nums1, nums2, nums3) {
  const frequency = {};
  const result = [];

  const recordFrequency = function (nums) {
    const seen = new Set();

    for (let num of nums) {
      if (!seen.has(num)) {
       frequency[num] = (frequency[num] || 0) + 1;
        seen.add(num);
      }
    }
  }

  recordFrequency(nums1);
  recordFrequency(nums2);
  recordFrequency(nums3);

  for (let num in frequency) {
    if (frequency[num] > 1) {
      result.push(Number(num));
    }
  }

  return result;
};