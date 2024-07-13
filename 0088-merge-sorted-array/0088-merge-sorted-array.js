/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 //시간복잡도: O(n)
const merge = function(nums1, m, nums2, n) {
  //포인터 설정
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    
    k--;
  }
  //m이 0인경우 실행
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};