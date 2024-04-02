/**
 * @param {number[]} nums
 * @return {boolean}
 */
// set을 사용한 해쉬테이블로 문제 풀이
// 시간복잡도: O(n)
const containsDuplicate = function(nums) {
  const tabel = new Set(nums);

  if (tabel.size === nums.length) {
    return false;
  }

  return true;
};