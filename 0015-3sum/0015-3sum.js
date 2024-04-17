/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 풀제 풀이 실패로 방법론 참고 : 투포인터 i 기준 으로 left right 로 문제 풀이
// 시간 복잡도: O(n^2) 반복문 중첩 사용
const threeSum = function(nums) {
  nums.sort((a, b) => a- b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};